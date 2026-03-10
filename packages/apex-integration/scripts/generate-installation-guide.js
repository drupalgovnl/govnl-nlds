#!/usr/bin/env node
/* global console */
/**
 * @license EUPL-1.2
 * Generate installation guide for DICTU APEX integration
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsDir = path.resolve(__dirname, '../docs');

function generateInstallationGuide() {
  console.log('📚 Generating installation documentation...\n');

  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const guide = `# DICTU Design System - Oracle APEX Installation Guide

## Overview

This guide explains how to integrate the DICTU Design System with Oracle APEX Universal Theme.

## Prerequisites

- Oracle APEX 20.1 or higher
- Valid APEX workspace
- Database schema with CREATE privileges
- Access to APEX Application Builder

## Quick Start (5 minutes)

### 1. Build the APEX Bundle

\`\`\`bash
cd packages/apex-integration
npm install
npm run build
\`\`\`

This generates:
- \`dist/apex/dictu-apex-theme.css\` - Complete CSS bundle
- \`sql/templates/*.sql\` - APEX template definitions
- \`sql/packages/*.sql\` - PL/SQL utilities

### 2. Upload CSS to APEX

1. Navigate to your APEX application
2. Go to **Shared Components** > **Static Application Files**
3. Click **Upload File**
4. Select \`dist/apex/dictu-apex-theme.css\`
5. Note the file reference: \`#APP_FILES#dictu-apex-theme.css\`

### 3. Add CSS to Application

1. Go to **Shared Components** > **User Interface Attributes**
2. Click on your theme (usually "Universal Theme - 42")
3. Scroll to **CSS** section
4. In **File URLs**, add:
   \`\`\`
   #APP_FILES#dictu-apex-theme.css
   \`\`\`
5. Click **Apply Changes**

### 4. Run Installation Script

Connect to your database and run:

\`\`\`sql
sqlplus workspace_schema/password@database
@sql/installation/install_dictu.sql
\`\`\`

When prompted:
- **Theme ID**: Enter \`42\` (Universal Theme) or your custom theme ID
- **Application ID**: Enter your application ID or press Enter

### 5. Verify Installation

Run this query to verify:

\`\`\`sql
-- Check templates
SELECT template_name, template_type
FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- Check plugins
SELECT name, display_name
FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%';

-- Check packages
SELECT object_name, status
FROM user_objects
WHERE object_name LIKE 'DICTU%';
\`\`\`

## Detailed Installation

### Method 1: Automated Installation (Recommended)

Use the master installation script that handles everything:

\`\`\`bash
cd packages/apex-integration
npm run build
\`\`\`

Then in SQL*Plus:

\`\`\`sql
@sql/installation/install_dictu.sql 42 100
-- Parameters: THEME_ID APP_ID
\`\`\`

### Method 2: Manual Component Installation

Install components individually for more control:

#### A. Install PL/SQL Packages

\`\`\`sql
@sql/packages/dictu_apex_template_mgr.sql
\`\`\`

#### B. Install Templates

\`\`\`sql
@sql/templates/button_templates.sql
@sql/templates/region_templates.sql
@sql/templates/list_templates.sql
\`\`\`

#### C. Install Plugins

\`\`\`sql
@sql/plugins/item_type_dictu_button.sql
\`\`\`

### Method 3: Programmatic Installation

Use the PL/SQL API to install templates programmatically:

\`\`\`sql
BEGIN
  -- Install all DICTU templates for theme 42
  dictu_apex_template_mgr.install_all_templates(
    p_theme_id => 42,
    p_app_id => :APP_ID
  );
END;
/
\`\`\`

## Using DICTU Components in APEX

### Buttons

#### As Page Button

1. Create a button on your page
2. Under **Appearance**:
   - **Button Template**: Select "DICTU Button - Primary Action"
   - **Template Options**: Choose size, width, etc.
   - **CSS Classes**: Add custom classes if needed

#### As Plugin Item

1. Create a Page Item
2. **Type**: Select "DICTU Button [Plug-In]"
3. Configure:
   - **Button Style**: Primary Action, Secondary Action, Subtle, or Danger
   - **Button Size**: Small, Medium, or Large
   - **Icon CSS Classes**: Optional icon (e.g., \`fa fa-save\`)
   - **Icon Position**: Before or After text

#### Programmatic Rendering

\`\`\`sql
BEGIN
  dictu_apex_template_mgr.render_button(
    p_label => 'Save Changes',
    p_style => 'primary-action',
    p_onclick => 'apex.submit({request: "SAVE"})'
  );
END;
\`\`\`

### Regions

#### Card Region

1. Create a region
2. Under **Appearance**:
   - **Template**: Select "DICTU Card"
   - **Template Options**: Choose Elevated or Outlined style

#### Programmatic Card

\`\`\`sql
BEGIN
  dictu_apex_template_mgr.render_card(
    p_title => 'Welcome',
    p_content => '<p>This is a DICTU card region.</p>',
    p_style => 'elevated'
  );
END;
\`\`\`

### Navigation & Lists

1. Create a List
2. Under **Appearance**:
   - **List Template**: Select "DICTU Navigation Bar" or "DICTU Breadcrumbs"

### Form Fields

DICTU form components automatically work with APEX items. Just add the wrapper class:

\`\`\`html
<div class="dictu-form-field">
  #LABEL#
  #ITEM#
  #ERROR#
</div>
\`\`\`

## Theme Roller Integration

Generate Theme Roller configuration:

\`\`\`sql
DECLARE
  l_config CLOB;
BEGIN
  l_config := dictu_apex_template_mgr.get_theme_roller_config;
  -- Save to file or process as needed
  DBMS_OUTPUT.PUT_LINE(l_config);
END;
/
\`\`\`

## Customization

### Override Design Tokens

Create a custom CSS file that overrides DICTU tokens:

\`\`\`css
/* custom-dictu-overrides.css */
.dictu-theme {
  --govnl-color-hemelblauw-500: #0066cc;  /* Custom primary color */
  --govnl-button-border-radius: 8px;       /* Rounder buttons */
}
\`\`\`

Upload this file and reference it **after** the main DICTU CSS:

\`\`\`
#APP_FILES#dictu-apex-theme.css
#APP_FILES#custom-dictu-overrides.css
\`\`\`

### Dark Mode Support

DICTU includes automatic dark mode support:

\`\`\`css
/* Automatically applied when APEX is in dark mode */
[data-theme="dark"] .dictu-theme {
  /* Dark mode overrides */
}
\`\`\`

## Troubleshooting

### Templates Not Appearing

**Problem**: DICTU templates don't show in dropdown lists

**Solution**:
1. Verify installation: \`SELECT * FROM apex_application_templates WHERE template_name LIKE 'DICTU%'\`
2. Check theme ID matches your application
3. Clear APEX cache: Shared Components > Edit Attributes > Clear Cache

### CSS Not Loading

**Problem**: Components have no styling

**Solution**:
1. Verify CSS file upload: Shared Components > Static Application Files
2. Check file URL in User Interface Attributes
3. Test direct URL: \`https://apex.example.com/i/app_id/dictu-apex-theme.css\`
4. Check browser console for 404 errors

### Plugin Errors

**Problem**: DICTU Button plugin shows errors

**Solution**:
1. Check package compilation: \`SELECT * FROM user_errors WHERE name LIKE 'DICTU%'\`
2. Verify PL/SQL code in plugin definition
3. Enable Debug mode in APEX and check debug output

### Performance Issues

**Problem**: Page load is slow

**Solution**:
1. Minify CSS file before upload
2. Enable CDN if available
3. Use \`#APEX_FILES#\` instead of \`#APP_FILES#\` for workspace-level files
4. Cache CSS file at application level

## Updating

To update to a new DICTU version:

1. **Rebuild CSS**:
   \`\`\`bash
   cd packages/apex-integration
   npm run build
   \`\`\`

2. **Replace CSS file** in Static Application Files

3. **Update templates** (if changed):
   \`\`\`sql
   @sql/installation/install_dictu.sql
   \`\`\`

4. **Test thoroughly** in development environment first

## Multi-Application Deployment

For organizations with multiple APEX applications:

### Option 1: Shared Components Application

1. Create master application (e.g., app 1000)
2. Install DICTU templates in master
3. Subscribe other applications:
   - Shared Components > Theme
   - Subscribe to master theme

### Option 2: Workspace-Level Files

1. Upload CSS to workspace files instead of app files
2. Reference as: \`#WORKSPACE_FILES#dictu-apex-theme.css\`
3. All applications can use the same file

### Option 3: Web Server Deployment

1. Deploy CSS to your web server
2. Reference as: \`https://cdn.example.com/dictu/dictu-apex-theme.css\`
3. Benefits: CDN caching, version control

## Security Considerations

- **Content Security Policy**: Ensure your CSP allows loading the DICTU CSS
- **File Integrity**: Use Subresource Integrity (SRI) if loading from external sources
- **XSS Protection**: DICTU components use \`apex_escape\` functions for all user input

## Support

- **Documentation**: [packages/apex-integration/README.md](../README.md)
- **Examples**: [docs/usage-examples.md](./usage-examples.md)
- **Issues**: https://github.com/drupalgovnl/govnl-nlds/issues
- **Community**: #nl-design-system on praatmee.codefor.nl

## License

EUPL-1.2 - Copyright (c) 2021-2025 Dienst ICT Uitvoering
`;

  fs.writeFileSync(path.join(docsDir, 'INSTALLATION.md'), guide);
  console.log('  ✓ INSTALLATION.md');

  // Generate usage examples
  const examples = `# DICTU Design System - Usage Examples for APEX

## Complete Page Example

\`\`\`sql
-- Create a complete page using DICTU components

-- Page: Dashboard
-- Region: Statistics Card
CREATE REGION
  TEMPLATE: DICTU Card
  TEMPLATE OPTIONS: Elevated
  TITLE: Key Statistics
  SOURCE:
    SELECT
      total_users,
      active_sessions,
      pending_requests
    FROM dashboard_stats;

-- Button: Refresh Data
CREATE BUTTON
  POSITION: Region Header
  TEMPLATE: DICTU Button - Primary Action
  LABEL: Refresh
  ACTION: Submit Page

-- Button: Export
CREATE BUTTON
  POSITION: Region Header
  TEMPLATE: DICTU Button - Secondary Action
  LABEL: Export
  ACTION: Download
\`\`\`

## Interactive Report with DICTU Buttons

\`\`\`sql
-- Add DICTU action buttons to Interactive Report

SELECT
  emp_name,
  emp_email,
  '<button class="dictu-button dictu-button--subtle" onclick="editEmployee(' || emp_id || ')">Edit</button>' as actions
FROM employees;
\`\`\`

## Dynamic Form with DICTU Styling

\`\`\`html
<!-- In region source -->
<div class="dictu-form-field">
  <label for="P1_NAME" class="dictu-form-field__label">Name</label>
  <div class="dictu-form-field__input">
    #P1_NAME#
  </div>
</div>

<div class="dictu-form-field">
  <label for="P1_EMAIL" class="dictu-form-field__label">Email</label>
  <div class="dictu-form-field__input">
    #P1_EMAIL#
  </div>
</div>
\`\`\`

## PL/SQL Rendering

\`\`\`sql
-- Dynamic region source
DECLARE
  l_cards t_cards;
BEGIN
  -- Get data
  SELECT card_title, card_content
  BULK COLLECT INTO l_cards
  FROM my_cards;

  -- Render cards
  FOR i IN 1..l_cards.COUNT LOOP
    dictu_apex_template_mgr.render_card(
      p_title => l_cards(i).title,
      p_content => l_cards(i).content,
      p_style => 'elevated'
    );
  END LOOP;
END;
\`\`\`

## More Examples

See full code examples in the repository.
`;

  fs.writeFileSync(path.join(docsDir, 'usage-examples.md'), examples);
  console.log('  ✓ usage-examples.md');
}

generateInstallationGuide();
console.log('\n✅ Documentation generated successfully\n');
