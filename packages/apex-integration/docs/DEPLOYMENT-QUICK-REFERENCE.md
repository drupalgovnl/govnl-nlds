# 🚀 DICTU APEX Deployment - Quick Reference

## 📋 Quick Start (5 Minutes)

### 1. Build the Package

```bash
cd packages/apex-integration
npm install
npm run build
```

### 2. Run Deployment Script

```bash
chmod +x scripts/deploy-to-apex.sh
./scripts/deploy-to-apex.sh
```

### 3. Upload CSS to APEX

- Open APEX Application Builder
- Go to: **Shared Components → Static Application Files**
- Upload: `dist/apex/dictu-apex-theme.css`

### 4. Reference CSS

- Go to: **Shared Components → User Interface Attributes**
- Add to CSS File URLs:
  ```
  #APP_FILES#dictu-apex-theme.css
  ```

### 5. Test

- Create a button with template: "DICTU Button - Primary Action"
- Run page and verify styling

---

## 📦 Manual Deployment

### Upload CSS File

**Via APEX Interface:**

1. Shared Components → Static Application Files → Upload File
2. Select: `dist/apex/dictu-apex-theme.css`

**Via SQL:**

```sql
-- Note: Requires BLOB conversion
BEGIN
  apex_application_static_files.create_app_static_file(
    p_application_id => 100,
    p_file_name => 'dictu-apex-theme.css',
    p_mime_type => 'text/css',
    p_file_content => [BLOB]
  );
END;
/
```

### Install SQL Components

**Via SQL Workshop:**

```
SQL Workshop → SQL Scripts → Create → Run
```

Run in order:

1. `sql/packages/dictu_apex_template_mgr.sql`
2. `sql/templates/button_templates.sql`
3. `sql/templates/region_templates.sql`
4. `sql/templates/list_templates.sql`
5. `sql/plugins/item_type_dictu_button.sql`

**Via Command Line:**

```bash
sqlplus workspace_schema/password@database

SQL> @sql/installation/install_dictu.sql 42 100
```

### Add CSS Reference

**Option 1: Application Files**

```
#APP_FILES#dictu-apex-theme.css
```

**Option 2: Workspace Files**

```
#WORKSPACE_FILES#dictu-apex-theme.css
```

**Option 3: External URL**

```
https://cdn.example.com/dictu/dictu-apex-theme.css
```

---

## ✅ Verification

### Check Installation

```sql
-- Count templates
SELECT COUNT(*) FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';
-- Should return: 8 or more

-- Check plugins
SELECT COUNT(*) FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%';
-- Should return: 1

-- Check package
SELECT status FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
AND object_type = 'PACKAGE BODY';
-- Should return: VALID
```

### Test Components

**Create Test Page:**

1. Create blank page
2. Add region: Template = "DICTU Card"
3. Add button: Template = "DICTU Button - Primary Action"
4. Run page
5. Verify styling loads correctly

**Browser Console Check:**

- Press F12
- Check for CSS load errors
- Verify no 404 errors

---

## 🔧 Common Operations

### Clear Cache

```sql
EXEC apex_util.clear_app_cache(100);  -- Your app ID
```

### Update CSS File

1. Build new version: `npm run build`
2. Upload to APEX (replace existing)
3. Clear cache
4. Hard refresh browser (Ctrl+Shift+R)

### Reinstall Templates

```sql
-- Delete old templates
DELETE FROM apex_application_templates
WHERE template_name LIKE 'DICTU%'
AND application_id = 100;

-- Install new
@sql/templates/button_templates.sql
@sql/templates/region_templates.sql
@sql/templates/list_templates.sql
```

---

## 🚨 Troubleshooting

### CSS Not Loading

1. **Check file uploaded:**

   ```sql
   SELECT * FROM apex_application_files
   WHERE file_name = 'dictu-apex-theme.css';
   ```

2. **Check reference added:**

   ```sql
   SELECT css_file_urls FROM apex_application_themes
   WHERE application_id = 100;
   ```

3. **Clear cache & hard refresh**

### Templates Not Appearing

1. **Verify installation:**

   ```sql
   SELECT template_name FROM apex_application_templates
   WHERE template_name LIKE 'DICTU%';
   ```

2. **Check application ID matches**

3. **Restart APEX if necessary**

### Plugin Errors

1. **Check package status:**

   ```sql
   SELECT * FROM user_errors
   WHERE name = 'DICTU_APEX_TEMPLATE_MGR';
   ```

2. **Recompile if needed:**
   ```sql
   ALTER PACKAGE dictu_apex_template_mgr COMPILE;
   ALTER PACKAGE dictu_apex_template_mgr COMPILE BODY;
   ```

---

## 📊 Environment-Specific Settings

### Development

```bash
export DB_CONNECTION="localhost:1521/XEPDB1"
export APP_ID="100"
./scripts/deploy-to-apex.sh
```

### Test

```bash
export DB_CONNECTION="test-db:1521/APEXTEST"
export APP_ID="200"
./scripts/deploy-to-apex.sh
```

### Production

```bash
export DB_CONNECTION="prod-db:1521/APEXPROD"
export APP_ID="300"
# Use minified CSS in production
cp dist/apex/dictu-apex-theme.min.css dist/apex/dictu-apex-theme.css
./scripts/deploy-to-apex.sh
```

---

## 📚 File Locations

| File              | Location                                   | Purpose              |
| ----------------- | ------------------------------------------ | -------------------- |
| CSS Bundle        | `dist/apex/dictu-apex-theme.css`           | Main stylesheet      |
| Deployment Script | `scripts/deploy-to-apex.sh`                | Automated deployment |
| Installation SQL  | `sql/installation/install_dictu.sql`       | Master installer     |
| PL/SQL Package    | `sql/packages/dictu_apex_template_mgr.sql` | Template API         |
| Templates         | `sql/templates/*.sql`                      | APEX templates       |
| Plugin            | `sql/plugins/item_type_dictu_button.sql`   | Button plugin        |

---

## 🔗 Related Documentation

- [Full Deployment Guide](./DEPLOYMENT-GUIDE.md) - Comprehensive deployment
  documentation
- [Installation Guide](./INSTALLATION.md) - Detailed installation steps
- [Usage Examples](./usage-examples.md) - Code examples and patterns
- [README](../README.md) - Package overview

---

## ⚡ Command Cheat Sheet

```bash
# Build
npm run build

# Deploy (automated)
./scripts/deploy-to-apex.sh

# Generate templates
npm run build:templates

# Generate docs
npm run build:docs

# Watch mode
npm run watch
```

```sql
-- Install all
@sql/installation/install_dictu.sql 42 100

-- Verify
SELECT COUNT(*) FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- Clear cache
EXEC apex_util.clear_app_cache(100);

-- Check errors
SELECT * FROM user_errors
WHERE name LIKE 'DICTU%';
```

---

**Need Help?** See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed
instructions.

**Found a Bug?** Report at: https://github.com/drupalgovnl/govnl-nlds/issues
