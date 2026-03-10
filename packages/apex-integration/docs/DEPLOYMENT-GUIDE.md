# DICTU Design System - APEX Deployment Guide

## 🎯 Overview

This guide provides step-by-step instructions for deploying DICTU Design System
components to Oracle APEX environments.

## 📋 Prerequisites

Before deployment:

- [ ] Oracle APEX 20.1 or higher installed
- [ ] APEX workspace access with developer privileges
- [ ] Database connection with CREATE privilege on the workspace schema
- [ ] Built DICTU APEX integration package (`npm run build`)

## 🚀 Deployment Methods

Choose the method that best fits your environment:

### Method 1: Manual Deployment (Recommended for First-Time)

Best for: Initial installation, understanding the process, small deployments

### Method 2: SQLcl Deployment

Best for: Command-line automation, CI/CD pipelines

### Method 3: APEX Export/Import

Best for: Packaged applications, workspace-to-workspace deployment

---

## 📦 Method 1: Manual Deployment

### Step 1: Upload CSS File to APEX

**Via Web Interface:**

1. **Log into APEX Application Builder**
   - Navigate to your APEX instance
   - Sign in to your workspace
   - Select your application

2. **Navigate to Static Files**

   ```
   Shared Components → Static Application Files
   ```

3. **Upload the CSS Bundle**
   - Click **"Upload File"**
   - Select: `dist/apex/dictu-apex-theme.css`
   - File Name: `dictu-apex-theme.css` (no version suffix recommended)
   - Click **"Create"**

4. **Note the File Reference**
   - The reference will be: `#APP_FILES#dictu-apex-theme.css`
   - Or for workspace-level: `#WORKSPACE_FILES#dictu-apex-theme.css`

**Via SQLcl:**

```sql
-- Upload file to application static files
BEGIN
  apex_application_static_files.create_app_static_file(
    p_application_id => 100,  -- Your app ID
    p_file_name => 'dictu-apex-theme.css',
    p_mime_type => 'text/css',
    p_file_charset => 'utf-8',
    p_file_content => [BLOB from file]
  );
END;
/
```

### Step 2: Reference CSS in Application

1. **Navigate to User Interface Attributes**

   ```
   Shared Components → User Interface Attributes
   ```

2. **Select Your Theme** (usually "Universal Theme - 42")

3. **Add CSS File Reference**
   - Scroll to **"CSS"** section
   - Find **"File URLs"** field
   - Add (on a new line):
     ```
     #APP_FILES#dictu-apex-theme.css
     ```
   - For workspace-level file:
     ```
     #WORKSPACE_FILES#dictu-apex-theme.css
     ```

4. **Apply Changes**

### Step 3: Install PL/SQL Package

**Via SQL Workshop:**

1. **Navigate to SQL Workshop**

   ```
   SQL Workshop → SQL Scripts
   ```

2. **Create New Script**
   - Click **"Create"**
   - Name: `install_dictu_package`
   - Paste contents of: `sql/packages/dictu_apex_template_mgr.sql`
   - Click **"Create"**

3. **Run the Script**
   - Find your script in the list
   - Click **"Run"**
   - Review results
   - Check for compilation errors

**Via SQL\*Plus:**

```bash
sqlplus workspace_schema/password@database

SQL> @sql/packages/dictu_apex_template_mgr.sql
SQL> SHOW ERRORS;
```

**Verify Package Installation:**

```sql
-- Check if package exists and is valid
SELECT object_name, object_type, status
FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR';

-- Should return:
-- DICTU_APEX_TEMPLATE_MGR  PACKAGE       VALID
-- DICTU_APEX_TEMPLATE_MGR  PACKAGE BODY  VALID
```

### Step 4: Install APEX Templates

**Option A: Via SQL Workshop (Recommended)**

1. **Run Button Templates Script**

   ```
   SQL Workshop → SQL Scripts
   Upload and run: sql/templates/button_templates.sql
   ```

2. **Run Region Templates Script**

   ```
   Upload and run: sql/templates/region_templates.sql
   ```

3. **Run List Templates Script**
   ```
   Upload and run: sql/templates/list_templates.sql
   ```

**Option B: Via Master Installation Script**

```sql
-- Set your application context
EXEC wwv_flow_api.set_security_group_id([your_workspace_id]);

-- Run installer with your theme ID and app ID
@sql/installation/install_dictu.sql 42 100

-- Verify
SELECT template_name, template_type
FROM apex_application_templates
WHERE application_id = 100
AND template_name LIKE 'DICTU%';
```

### Step 5: Install APEX Plugin

**Via Web Interface:**

1. **Navigate to Plugins**

   ```
   Shared Components → Plugins
   ```

2. **Import Plugin**
   - Click **"Create"**
   - Select **"Import"**
   - Choose: `sql/plugins/item_type_dictu_button.sql`
   - Follow import wizard
   - Click **"Install Plugin"**

**Via SQL Workshop:**

```
SQL Workshop → SQL Scripts
Upload and run: sql/plugins/item_type_dictu_button.sql
```

### Step 6: Verify Installation

Run this verification query:

```sql
SELECT 'Templates' as component_type, COUNT(*) as count
FROM apex_application_templates
WHERE template_name LIKE 'DICTU%'
UNION ALL
SELECT 'Plugins', COUNT(*)
FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%'
UNION ALL
SELECT 'PL/SQL Package', COUNT(*)
FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
AND status = 'VALID';

-- Should show:
-- Templates: 8 (or more)
-- Plugins: 1
-- PL/SQL Package: 2 (package + body)
```

### Step 7: Test Components

1. **Create a test page**
2. **Add a button** using "DICTU Button - Primary Action" template
3. **Add a region** using "DICTU Card" template
4. **Run the page** and verify styling

---

## 🔧 Method 2: SQLcl Deployment

SQLcl provides command-line automation for APEX deployments.

### Prerequisites

```bash
# Install SQLcl (if not installed)
# Download from: https://www.oracle.com/database/sqldeveloper/technologies/sqlcl/

# Verify installation
sql -version
```

### Deployment Script

Create `deploy-to-apex.sh`:

```bash
#!/bin/bash
# DICTU APEX Deployment Script

# Configuration
DB_USER="workspace_schema"
DB_PASSWORD="your_password"
DB_CONNECTION="localhost:1521/XEPDB1"
APP_ID="100"
THEME_ID="42"

echo "🚀 Deploying DICTU Design System to APEX..."
echo "Application ID: $APP_ID"
echo "Theme ID: $THEME_ID"
echo ""

# Build the package
echo "📦 Building APEX integration package..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed"
  exit 1
fi

# Deploy via SQLcl
sql $DB_USER/$DB_PASSWORD@$DB_CONNECTION << EOF

-- Set application context
EXEC wwv_flow_api.set_security_group_id(apex_application_install.get_workspace_id);

-- Install PL/SQL package
@sql/packages/dictu_apex_template_mgr.sql

-- Install templates
@sql/templates/button_templates.sql
@sql/templates/region_templates.sql
@sql/templates/list_templates.sql

-- Install plugins
@sql/plugins/item_type_dictu_button.sql

-- Verify
SELECT 'Installation Summary' as status FROM dual;
SELECT '===================' as status FROM dual;

SELECT 'Templates: ' || COUNT(*) as status
FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

SELECT 'Plugins: ' || COUNT(*) as status
FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%';

SELECT 'Packages: ' || COUNT(*) as status
FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
AND status = 'VALID';

EXIT;
EOF

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Deployment completed successfully!"
  echo ""
  echo "Next steps:"
  echo "1. Upload dist/apex/dictu-apex-theme.css to APEX Static Files"
  echo "2. Add #APP_FILES#dictu-apex-theme.css to your theme's CSS File URLs"
  echo "3. Start using DICTU components in your application"
else
  echo "❌ Deployment failed"
  exit 1
fi
```

Make it executable and run:

```bash
chmod +x deploy-to-apex.sh
./deploy-to-apex.sh
```

### Upload CSS via REST API

If your APEX instance has REST APIs enabled:

```bash
#!/bin/bash
# Upload CSS file via APEX REST API

APEX_URL="https://apex.example.com"
WORKSPACE="YOUR_WORKSPACE"
APP_ID="100"
CSS_FILE="dist/apex/dictu-apex-theme.css"

# Upload file
curl -X POST \
  "$APEX_URL/ords/$WORKSPACE/app/$APP_ID/files" \
  -H "Content-Type: text/css" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  --data-binary @$CSS_FILE

echo "✅ CSS file uploaded"
```

---

## 📤 Method 3: APEX Export/Import

For packaged application deployment.

### Create Deployable Package

1. **Export your application** with DICTU components
2. **Include supporting objects**:
   - Templates
   - Plugins
   - PL/SQL packages

### Export Application with Components

```sql
-- Export application definition
BEGIN
  apex_application_install.generate_application_id := 100;
  apex_application_install.generate_offset := 0;
END;
/

-- Export to file
-- Via Application Builder: Export → Application
```

### Import to Target Environment

1. **Navigate to target APEX instance**
2. **Import Application**
   ```
   Application Builder → Import → Choose File
   ```
3. **Install Supporting Objects**
   - PL/SQL packages
   - Static files (CSS)
4. **Run Post-Install Scripts**

---

## 🌍 Multi-Environment Deployment

### Development → Test → Production Pipeline

#### 1. Development Environment

```bash
# Full installation with all tools
cd packages/apex-integration
npm install
npm run build
./deploy-to-apex.sh
```

#### 2. Test Environment

```sql
-- Install from version-controlled SQL files
@sql/installation/install_dictu.sql

-- Upload CSS (use version number for testing)
-- dictu-apex-theme-v1.0.0.css
```

#### 3. Production Environment

**Pre-deployment Checklist:**

- [ ] CSS file minified
- [ ] All SQL scripts tested in lower environments
- [ ] Backup taken
- [ ] Change control approved
- [ ] Rollback plan ready

**Production Deployment:**

```sql
-- 1. Upload minified CSS
-- Upload dictu-apex-theme.min.css to workspace files

-- 2. Install in maintenance window
@sql/installation/install_dictu.sql

-- 3. Update CSS reference
UPDATE apex_application_themes
SET css_file_urls = css_file_urls || chr(10) ||
    '#WORKSPACE_FILES#dictu-apex-theme.min.css'
WHERE application_id = [your_app_id];

-- 4. Verify
SELECT * FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- 5. Clear cache
BEGIN
  apex_util.clear_app_cache([your_app_id]);
END;
/
```

---

## 🎯 Deployment Best Practices

### 1. Version Management

**CSS File Versioning:**

```
Good: dictu-apex-theme.css (use cache-busting in URL)
Better: dictu-apex-theme.v1.0.0.css
Best: Use application file versioning in APEX
```

**Reference with Version:**

```
#APP_FILES#dictu-apex-theme.css?v=1.0.0
```

### 2. Workspace vs Application Files

| Use Case                           | Location          | Reference                                            |
| ---------------------------------- | ----------------- | ---------------------------------------------------- |
| Single application                 | Application Files | `#APP_FILES#dictu-apex-theme.css`                    |
| Multiple applications in workspace | Workspace Files   | `#WORKSPACE_FILES#dictu-apex-theme.css`              |
| Multiple workspaces                | Web server/CDN    | `https://cdn.example.com/dictu/dictu-apex-theme.css` |

### 3. Performance Optimization

**Minify CSS for Production:**

```bash
# Install csso (CSS minifier)
npm install -g csso-cli

# Minify
csso dist/apex/dictu-apex-theme.css \
  -o dist/apex/dictu-apex-theme.min.css

# Result: ~123KB → ~85KB (31% reduction)
```

**Enable Compression:**

- Ensure GZIP enabled on APEX web server
- Use CDN with compression enabled

### 4. Security Considerations

**Content Security Policy:**

If your APEX instance uses CSP, ensure:

```sql
-- Add to CSP header (if needed)
style-src 'self' #WORKSPACE_FILES# #APP_FILES#;
```

**File Integrity:**

Generate and verify checksums:

```bash
# Generate checksum
sha256sum dist/apex/dictu-apex-theme.css > dist/apex/dictu-apex-theme.css.sha256

# Verify before deployment
sha256sum -c dist/apex/dictu-apex-theme.css.sha256
```

### 5. Rollback Plan

**Before deployment:**

```sql
-- Backup templates
CREATE TABLE dictu_templates_backup AS
SELECT * FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- Backup theme settings
CREATE TABLE dictu_theme_backup AS
SELECT * FROM apex_application_themes
WHERE application_id = [your_app_id];
```

**Rollback if needed:**

```sql
-- Remove DICTU CSS reference
UPDATE apex_application_themes
SET css_file_urls = REPLACE(css_file_urls,
    '#APP_FILES#dictu-apex-theme.css', '')
WHERE application_id = [your_app_id];

-- Delete templates (if needed)
DELETE FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- Clear cache
EXEC apex_util.clear_app_cache([your_app_id]);
```

---

## 🔍 Troubleshooting Deployment

### Issue: CSS Not Loading

**Check:**

1. File uploaded correctly?

   ```sql
   SELECT * FROM apex_application_files
   WHERE file_name = 'dictu-apex-theme.css';
   ```

2. CSS reference added?

   ```sql
   SELECT css_file_urls FROM apex_application_themes
   WHERE application_id = [your_app_id];
   ```

3. Cache cleared?
   ```sql
   EXEC apex_util.clear_app_cache([your_app_id]);
   ```

### Issue: Templates Not Appearing

**Check:**

1. Templates installed?

   ```sql
   SELECT * FROM apex_application_templates
   WHERE template_name LIKE 'DICTU%';
   ```

2. Application ID correct?
3. Theme ID correct?

### Issue: Plugin Errors

**Check:**

1. Package compiled?

   ```sql
   SELECT * FROM user_errors
   WHERE name = 'DICTU_APEX_TEMPLATE_MGR';
   ```

2. Plugin installed?
   ```sql
   SELECT * FROM apex_appl_plugins
   WHERE name = 'NL.DICTU.BUTTON';
   ```

### Issue: Permission Errors

**Grant necessary privileges:**

```sql
-- Grant to workspace schema
GRANT CREATE TABLE TO workspace_schema;
GRANT CREATE PROCEDURE TO workspace_schema;
GRANT CREATE TRIGGER TO workspace_schema;
```

---

## 📊 Post-Deployment Checklist

After deployment, verify:

- [ ] CSS file loads without errors (check browser console)
- [ ] Templates appear in dropdown lists
- [ ] Plugins show in component palette
- [ ] PL/SQL package compiles without errors
- [ ] Test button renders correctly
- [ ] Test region renders correctly
- [ ] No JavaScript console errors
- [ ] Accessibility tools show no violations
- [ ] Performance acceptable (page load time)
- [ ] Mobile view works correctly

---

## 🔄 Updating Existing Deployment

To update to a newer version:

### 1. Build New Version

```bash
cd packages/apex-integration
git pull
npm install
npm run build
```

### 2. Upload New CSS

Replace existing file in Static Application Files with new version.

### 3. Update Templates (if changed)

```sql
-- Delete old templates (be careful!)
DELETE FROM apex_application_templates
WHERE template_name LIKE 'DICTU%'
AND application_id = [your_app_id];

-- Install new templates
@sql/templates/button_templates.sql
@sql/templates/region_templates.sql
@sql/templates/list_templates.sql
```

### 4. Reinstall Package (if changed)

```sql
-- Drop and recreate
DROP PACKAGE dictu_apex_template_mgr;
@sql/packages/dictu_apex_template_mgr.sql
```

### 5. Clear Cache

```sql
EXEC apex_util.clear_app_cache([your_app_id]);
```

### 6. Test

Run through your test cases to ensure functionality.

---

## 📝 Deployment Log Template

Keep a deployment log:

```
DICTU Design System Deployment Log
===================================

Date: YYYY-MM-DD
Deployed by: [Name]
Environment: [Dev/Test/Prod]
APEX Version: [Version]
Application ID: [ID]

Components Deployed:
- [ ] CSS Bundle (dictu-apex-theme.css)
- [ ] PL/SQL Package (dictu_apex_template_mgr)
- [ ] Button Templates
- [ ] Region Templates
- [ ] List Templates
- [ ] Button Plugin

Verification Results:
- Templates Count: [#]
- Plugins Count: [#]
- Package Status: [Valid/Invalid]
- Test Page: [Pass/Fail]

Issues Encountered:
[None/Description]

Rollback Required:
[Yes/No]

Notes:
[Any additional notes]
```

---

## 🆘 Support

If you encounter issues during deployment:

1. **Check logs**: APEX Debug mode, SQL\*Plus output
2. **Review documentation**: Installation guide, troubleshooting section
3. **Test in isolation**: Create test application
4. **Ask for help**:
   - GitHub Issues: https://github.com/drupalgovnl/govnl-nlds/issues
   - Slack: #nl-design-system

---

## 📚 Additional Resources

- [APEX Documentation](https://docs.oracle.com/en/database/oracle/apex/)
- [SQLcl Documentation](https://docs.oracle.com/en/database/oracle/sql-developer-command-line/)
- [APEX Best Practices](https://apex.oracle.com/go/best-practices)
- [DICTU Installation Guide](./INSTALLATION.md)

---

**Last Updated:** March 2026 **DICTU Design System for Oracle APEX** EUPL-1.2
License
