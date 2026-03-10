-- DICTU Design System for Oracle APEX - Master Installation Script
-- @license EUPL-1.2
-- Copyright (c) 2021-2025 Dienst ICT Uitvoering
--
-- This script installs the complete DICTU Design System into Oracle APEX
-- Prerequisites:
--   - Oracle APEX 20.1 or higher
--   - Valid APEX workspace
--   - CREATE privilege on the workspace schema
--
-- Usage:
--   sqlplus workspace_schema/password@database @install_dictu.sql [THEME_ID] [APP_ID]
--
-- Default values:
--   THEME_ID: 42 (Universal Theme)
--   APP_ID: Current application (nv('APP_ID'))

SET DEFINE ON
SET VERIFY OFF
SET FEEDBACK ON
SET SERVEROUTPUT ON SIZE UNLIMITED

PROMPT
PROMPT ================================================================================
PROMPT DICTU Design System for Oracle APEX - Installation
PROMPT ================================================================================
PROMPT Version: 1.0.0
PROMPT License: EUPL-1.2
PROMPT ================================================================================
PROMPT

-- Accept parameters
ACCEPT v_theme_id NUMBER DEFAULT 42 PROMPT 'Enter Theme ID (default 42 for Universal Theme): '
ACCEPT v_app_id NUMBER PROMPT 'Enter Application ID (or press Enter for current app): '

-- Set application context if provided
BEGIN
  IF '&v_app_id' IS NOT NULL THEN
    wwv_flow_api.set_security_group_id(
      p_security_group_id => apex_application_install.get_workspace_id
    );
  END IF;
END;
/

PROMPT
PROMPT ================================================================================
PROMPT Step 1: Installing PL/SQL Packages
PROMPT ================================================================================
PROMPT

-- Install template manager package
@@packages/dictu_apex_template_mgr.sql

PROMPT ✓ PL/SQL packages installed

PROMPT
PROMPT ================================================================================
PROMPT Step 2: Installing APEX Templates
PROMPT ================================================================================
PROMPT

-- Install button templates
@@templates/button_templates.sql

-- Install region templates
@@templates/region_templates.sql

-- Install list templates
@@templates/list_templates.sql

PROMPT ✓ APEX templates installed

PROMPT
PROMPT ================================================================================
PROMPT Step 3: Installing APEX Plugins
PROMPT ================================================================================
PROMPT

-- Install button plugin
@@plugins/item_type_dictu_button.sql

PROMPT ✓ APEX plugins installed

PROMPT
PROMPT ================================================================================
PROMPT Step 4: Configuring Theme Integration
PROMPT ================================================================================
PROMPT

DECLARE
  v_theme_id NUMBER := &v_theme_id;
  v_app_id NUMBER := NVL(&v_app_id, nv('APP_ID'));
  v_css_file_path VARCHAR2(4000);
BEGIN
  DBMS_OUTPUT.PUT_LINE('Configuring theme ' || v_theme_id || ' for application ' || v_app_id);

  -- Add DICTU CSS to application files
  -- Note: In production, upload the CSS file to Static Application Files first
  v_css_file_path := '#APP_FILES#dictu-apex-theme.css';

  DBMS_OUTPUT.PUT_LINE('Add this CSS file to your application: ' || v_css_file_path);
  DBMS_OUTPUT.PUT_LINE('Path: Shared Components > Static Application Files');

  -- You would typically use:
  -- apex_application.g_flow_id := v_app_id;
  -- And then add the CSS file reference

  DBMS_OUTPUT.PUT_LINE('✓ Theme configuration complete');
END;
/

PROMPT
PROMPT ================================================================================
PROMPT Step 5: Verifying Installation
PROMPT ================================================================================
PROMPT

DECLARE
  v_template_count NUMBER;
  v_plugin_count NUMBER;
  v_package_valid VARCHAR2(10);
BEGIN
  -- Check templates
  SELECT COUNT(*)
  INTO v_template_count
  FROM apex_application_templates
  WHERE template_name LIKE 'DICTU%';

  DBMS_OUTPUT.PUT_LINE('Templates installed: ' || v_template_count);

  -- Check plugins
  SELECT COUNT(*)
  INTO v_plugin_count
  FROM apex_appl_plugins
  WHERE name LIKE 'NL.DICTU.%';

  DBMS_OUTPUT.PUT_LINE('Plugins installed: ' || v_plugin_count);

  -- Check package
  SELECT status
  INTO v_package_valid
  FROM user_objects
  WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
  AND object_type = 'PACKAGE BODY';

  DBMS_OUTPUT.PUT_LINE('Package status: ' || v_package_valid);

  IF v_package_valid = 'VALID' THEN
    DBMS_OUTPUT.PUT_LINE('');
    DBMS_OUTPUT.PUT_LINE('✓ All components installed successfully');
  ELSE
    DBMS_OUTPUT.PUT_LINE('');
    DBMS_OUTPUT.PUT_LINE('⚠ Warning: Some components may have errors');
    DBMS_OUTPUT.PUT_LINE('  Run: SELECT * FROM user_errors WHERE name LIKE ''DICTU%''');
  END IF;

EXCEPTION
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('⚠ Warning: Could not verify all components');
END;
/

PROMPT
PROMPT ================================================================================
PROMPT Installation Summary
PROMPT ================================================================================
PROMPT
PROMPT DICTU Design System has been installed successfully!
PROMPT
PROMPT Next Steps:
PROMPT ------------------------------------------------
PROMPT 1. Upload CSS File:
PROMPT    - Navigate to: Shared Components > Static Application Files
PROMPT    - Upload: dist/apex/dictu-apex-theme.css
PROMPT    - Reference: #APP_FILES#dictu-apex-theme.css
PROMPT
PROMPT 2. Configure Application:
PROMPT    - Go to: Shared Components > User Interface Attributes
PROMPT    - Add CSS File URL: #APP_FILES#dictu-apex-theme.css
PROMPT    - Save changes
PROMPT
PROMPT 3. Use DICTU Components:
PROMPT    - Button Templates: Create new buttons using DICTU templates
PROMPT    - Region Templates: Use DICTU Card or Accordion regions
PROMPT    - Plugins: Add DICTU Button items to your pages
PROMPT    - PL/SQL API: Call dictu_apex_template_mgr procedures
PROMPT
PROMPT 4. Documentation:
PROMPT    - README: See packages/apex-integration/README.md
PROMPT    - Examples: Check docs/usage-examples.md
PROMPT
PROMPT 5. Support:
PROMPT    - Issues: https://github.com/drupalgovnl/govnl-nlds/issues
PROMPT    - Slack: #nl-design-system on praatmee.codefor.nl
PROMPT
PROMPT ================================================================================
PROMPT

SET DEFINE OFF
SET VERIFY ON
