#!/bin/bash
# DICTU Design System - APEX Deployment Script
# @license EUPL-1.2
#
# This script automates the deployment of DICTU components to Oracle APEX

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration (can be overridden by environment variables)
DB_USER="${DB_USER:-workspace_schema}"
DB_PASSWORD="${DB_PASSWORD:-}"
DB_CONNECTION="${DB_CONNECTION:-localhost:1521/XEPDB1}"
APP_ID="${APP_ID:-100}"
THEME_ID="${THEME_ID:-42}"
WORKSPACE_ID="${WORKSPACE_ID:-}"

# Script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$( cd "$SCRIPT_DIR/.." && pwd )"

# Functions
print_header() {
  echo -e "${BLUE}======================================================================${NC}"
  echo -e "${BLUE}$1${NC}"
  echo -e "${BLUE}======================================================================${NC}"
  echo ""
}

print_success() {
  echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
  echo -e "${RED}✗ $1${NC}"
}

print_warning() {
  echo -e "${YELLOW}⚠ $1${NC}"
}

print_info() {
  echo -e "${BLUE}ℹ $1${NC}"
}

check_prerequisites() {
  print_header "Checking Prerequisites"

  # Check if Node.js is installed
  if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed"
    exit 1
  fi
  print_success "Node.js found: $(node --version)"

  # Check if npm is installed
  if ! command -v npm &> /dev/null; then
    print_error "npm is not installed"
    exit 1
  fi
  print_success "npm found: $(npm --version)"

  # Check if SQLcl or SQL*Plus is available
  if command -v sql &> /dev/null; then
    SQL_CLIENT="sql"
    print_success "SQLcl found: $(sql -version | head -n 1)"
  elif command -v sqlplus &> /dev/null; then
    SQL_CLIENT="sqlplus"
    print_success "SQL*Plus found"
  else
    print_error "Neither SQLcl nor SQL*Plus found"
    print_info "Please install SQLcl from: https://www.oracle.com/database/sqldeveloper/technologies/sqlcl/"
    exit 1
  fi

  # Check if package.json exists
  if [ ! -f "$PROJECT_DIR/package.json" ]; then
    print_error "package.json not found in $PROJECT_DIR"
    exit 1
  fi
  print_success "Package configuration found"

  echo ""
}

build_package() {
  print_header "Building APEX Integration Package"

  cd "$PROJECT_DIR"

  # Install dependencies if needed
  if [ ! -d "node_modules" ]; then
    print_info "Installing dependencies..."
    npm install
  fi

  # Build the package
  print_info "Running build..."
  npm run build

  if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
  else
    print_error "Build failed"
    exit 1
  fi

  # Check if CSS file was created
  if [ -f "$PROJECT_DIR/dist/apex/dictu-apex-theme.css" ]; then
    CSS_SIZE=$(du -h "$PROJECT_DIR/dist/apex/dictu-apex-theme.css" | cut -f1)
    print_success "CSS bundle created: $CSS_SIZE"
  else
    print_error "CSS bundle not found"
    exit 1
  fi

  echo ""
}

prompt_credentials() {
  print_header "Database Connection"

  echo "Current settings:"
  echo "  Database User: $DB_USER"
  echo "  Connection: $DB_CONNECTION"
  echo "  Application ID: $APP_ID"
  echo "  Theme ID: $THEME_ID"
  echo ""

  read -p "Use these settings? (y/n) " -n 1 -r
  echo ""

  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    read -p "Database User: " DB_USER
    read -p "Connection String (host:port/service): " DB_CONNECTION
    read -p "Application ID: " APP_ID
    read -p "Theme ID [42]: " THEME_ID
    THEME_ID=${THEME_ID:-42}
  fi

  if [ -z "$DB_PASSWORD" ]; then
    read -s -p "Database Password: " DB_PASSWORD
    echo ""
  fi

  echo ""
}

deploy_sql_components() {
  print_header "Deploying SQL Components to APEX"

  # Create temporary SQL script
  DEPLOY_SCRIPT=$(mktemp)

  cat > "$DEPLOY_SCRIPT" << EOF
-- DICTU APEX Deployment Script
-- Generated: $(date)

SET SERVEROUTPUT ON SIZE UNLIMITED
SET DEFINE OFF
SET VERIFY OFF

WHENEVER SQLERROR EXIT SQL.SQLCODE

-- Set APEX context
BEGIN
  wwv_flow_api.set_security_group_id(
    apex_application_install.get_workspace_id
  );
END;
/

-- Install PL/SQL Package
PROMPT Installing PL/SQL Package...
@$PROJECT_DIR/sql/packages/dictu_apex_template_mgr.sql

-- Check for errors
SHOW ERRORS

-- Install Templates
PROMPT Installing Button Templates...
@$PROJECT_DIR/sql/templates/button_templates.sql

PROMPT Installing Region Templates...
@$PROJECT_DIR/sql/templates/region_templates.sql

PROMPT Installing List Templates...
@$PROJECT_DIR/sql/templates/list_templates.sql

-- Install Plugins
PROMPT Installing DICTU Button Plugin...
@$PROJECT_DIR/sql/plugins/item_type_dictu_button.sql

-- Verification
PROMPT
PROMPT Verifying Installation...
PROMPT ========================

SELECT 'PL/SQL Packages' as component_type,
       object_name,
       status
FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
ORDER BY object_type;

SELECT 'Templates Installed: ' || COUNT(*) as status
FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

SELECT 'Plugins Installed: ' || COUNT(*) as status
FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%';

PROMPT
PROMPT Installation complete!
PROMPT

EXIT;
EOF

  # Execute deployment script
  print_info "Executing SQL deployment script..."

  if [ "$SQL_CLIENT" = "sql" ]; then
    # SQLcl
    sql "$DB_USER/$DB_PASSWORD@$DB_CONNECTION" @"$DEPLOY_SCRIPT"
  else
    # SQL*Plus
    sqlplus -S "$DB_USER/$DB_PASSWORD@$DB_CONNECTION" @"$DEPLOY_SCRIPT"
  fi

  DEPLOY_RESULT=$?

  # Clean up
  rm -f "$DEPLOY_SCRIPT"

  if [ $DEPLOY_RESULT -eq 0 ]; then
    print_success "SQL components deployed successfully"
  else
    print_error "SQL deployment failed"
    exit 1
  fi

  echo ""
}

show_manual_steps() {
  print_header "Manual Steps Required"

  cat << EOF
${YELLOW}The following steps must be completed manually in APEX:${NC}

1. ${BLUE}Upload CSS File:${NC}
   - Log into APEX Application Builder
   - Navigate to: Shared Components → Static Application Files
   - Click "Upload File"
   - Select: ${GREEN}$PROJECT_DIR/dist/apex/dictu-apex-theme.css${NC}
   - Click "Create"

2. ${BLUE}Reference CSS in Application:${NC}
   - Navigate to: Shared Components → User Interface Attributes
   - Select your theme (usually "Universal Theme - 42")
   - Scroll to "CSS" section
   - In "File URLs", add:
     ${GREEN}#APP_FILES#dictu-apex-theme.css${NC}
   - Click "Apply Changes"

3. ${BLUE}Test Components:${NC}
   - Create a test page
   - Add a button with template: "DICTU Button - Primary Action"
   - Add a region with template: "DICTU Card"
   - Run the page and verify styling

4. ${BLUE}Clear Application Cache:${NC}
   - Navigate to: Application Builder → Your App
   - Click "Edit Application Properties"
   - Click "Apply Changes" (this clears the cache)
   - Or run: EXEC apex_util.clear_app_cache($APP_ID);

${GREEN}✓ SQL components have been deployed successfully!${NC}

EOF
}

create_upload_script() {
  print_header "Creating CSS Upload Helper Script"

  UPLOAD_SCRIPT="$PROJECT_DIR/dist/apex/upload-css-to-apex.sql"

  cat > "$UPLOAD_SCRIPT" << 'EOF'
-- Script to upload DICTU CSS to APEX Static Files
-- Usage: Run this script after connecting to your APEX workspace schema
--
-- Note: You need to manually convert the CSS file to a BLOB
-- For automated upload, consider using APEX REST APIs or SQLcl features

SET SERVEROUTPUT ON

DECLARE
  l_file_name VARCHAR2(255) := 'dictu-apex-theme.css';
  l_mime_type VARCHAR2(255) := 'text/css';
  l_app_id NUMBER := &APP_ID;  -- Replace with your application ID
  l_file_content BLOB;

  -- For demonstration: create empty BLOB
  -- In real usage, load the actual CSS file content
BEGIN
  DBMS_OUTPUT.PUT_LINE('To upload the CSS file to APEX:');
  DBMS_OUTPUT.PUT_LINE('');
  DBMS_OUTPUT.PUT_LINE('Option 1: Use APEX Application Builder Web Interface');
  DBMS_OUTPUT.PUT_LINE('  1. Navigate to: Shared Components > Static Application Files');
  DBMS_OUTPUT.PUT_LINE('  2. Click "Upload File"');
  DBMS_OUTPUT.PUT_LINE('  3. Select the CSS file and upload');
  DBMS_OUTPUT.PUT_LINE('');
  DBMS_OUTPUT.PUT_LINE('Option 2: Use SQLcl with apex export/import commands');
  DBMS_OUTPUT.PUT_LINE('  sql> apex export -applicationid ' || l_app_id);
  DBMS_OUTPUT.PUT_LINE('');
  DBMS_OUTPUT.PUT_LINE('Option 3: Use APEX REST APIs (if enabled)');
  DBMS_OUTPUT.PUT_LINE('  curl -X POST https://apex.example.com/ords/workspace/files ...');
  DBMS_OUTPUT.PUT_LINE('');
  DBMS_OUTPUT.PUT_LINE('The CSS file is located at:');
  DBMS_OUTPUT.PUT_LINE('  ' || '&PROJECT_DIR/dist/apex/dictu-apex-theme.css');
END;
/
EOF

  print_success "Created upload helper script: $UPLOAD_SCRIPT"
  echo ""
}

main() {
  clear

  print_header "DICTU Design System - APEX Deployment"

  echo "This script will deploy DICTU components to Oracle APEX"
  echo ""
  echo "Deployment includes:"
  echo "  • PL/SQL packages"
  echo "  • APEX templates (buttons, regions, lists)"
  echo "  • APEX plugins"
  echo "  • CSS bundle (requires manual upload)"
  echo ""

  read -p "Continue? (y/n) " -n 1 -r
  echo ""

  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_warning "Deployment cancelled"
    exit 0
  fi

  echo ""

  # Run deployment steps
  check_prerequisites
  build_package
  prompt_credentials
  deploy_sql_components
  create_upload_script
  show_manual_steps

  print_header "Deployment Summary"

  echo -e "${GREEN}✓ Build completed${NC}"
  echo -e "${GREEN}✓ SQL components deployed${NC}"
  echo -e "${YELLOW}⚠ CSS file upload required (see manual steps above)${NC}"
  echo ""
  echo "Deployment log saved to: deployment-$(date +%Y%m%d-%H%M%S).log"
  echo ""
  print_success "DICTU Design System deployment completed!"
  echo ""
}

# Run main function and log output
main 2>&1 | tee "deployment-$(date +%Y%m%d-%H%M%S).log"
