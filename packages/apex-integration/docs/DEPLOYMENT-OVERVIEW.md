# 🚀 DICTU APEX Deployment - Complete Overview

## Quick Navigation

| Document                                                             | Purpose                   | When to Use                              |
| -------------------------------------------------------------------- | ------------------------- | ---------------------------------------- |
| **[README.md](../README.md)**                                        | Package overview          | First time setup, understanding features |
| **[INSTALLATION.md](./INSTALLATION.md)**                             | Detailed installation     | Step-by-step installation guide          |
| **[DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)**                     | Complete deployment guide | All deployment methods, troubleshooting  |
| **[DEPLOYMENT-QUICK-REFERENCE.md](./DEPLOYMENT-QUICK-REFERENCE.md)** | Quick commands            | Fast lookup of commands                  |
| **[DEPLOYMENT-CHECKLIST.md](./DEPLOYMENT-CHECKLIST.md)**             | Deployment checklist      | During actual deployment                 |
| **[DEPLOYMENT-FLOW.md](./DEPLOYMENT-FLOW.md)**                       | Visual diagrams           | Understanding architecture               |
| **[usage-examples.md](./usage-examples.md)**                         | Code examples             | Using components after deployment        |

---

## 🎯 Three Ways to Deploy

### 1. Automated (Fastest) ⚡

**Time:** ~5 minutes **Difficulty:** Easy **Best for:** Development
environments, quick setup

```bash
cd packages/apex-integration
npm install && npm run build
chmod +x scripts/deploy-to-apex.sh
./scripts/deploy-to-apex.sh
# Then manually upload CSS via APEX interface
```

**What it does:**

- ✅ Builds CSS bundle
- ✅ Deploys all SQL components
- ✅ Creates templates, packages, plugins
- ✅ Verifies installation
- ⚠️ Guides you through CSS upload (manual)

**See:**
[DEPLOYMENT-GUIDE.md § Method 2: SQLcl Deployment](./DEPLOYMENT-GUIDE.md#method-2-sqlcl-deployment)

---

### 2. Manual (Most Control) 🛠️

**Time:** ~10 minutes **Difficulty:** Medium **Best for:** Production, learning
the process, custom requirements

**Steps:**

1. Build: `npm run build`
2. Upload CSS to APEX Static Files
3. Run SQL scripts via SQL Workshop
4. Add CSS reference to theme
5. Verify and test

**See:**
[DEPLOYMENT-GUIDE.md § Method 1: Manual Deployment](./DEPLOYMENT-GUIDE.md#method-1-manual-deployment)

---

### 3. Command Line Only (Most Automated) 🤖

**Time:** ~3 minutes **Difficulty:** Advanced **Best for:** CI/CD pipelines,
automated deployments

```bash
# Set environment variables
export DB_USER="workspace_schema"
export DB_PASSWORD="your_password"
export DB_CONNECTION="host:1521/service"
export APP_ID="100"

# Deploy
cd packages/apex-integration
npm install && npm run build
./scripts/deploy-to-apex.sh
```

**Requires:**

- SQLcl installed
- Database access configured
- Optional: REST API for CSS upload automation

**See:**
[DEPLOYMENT-GUIDE.md § Method 2: SQLcl Deployment](./DEPLOYMENT-GUIDE.md#method-2-sqlcl-deployment)

---

## 📦 What Gets Deployed

### 1. CSS Bundle (123 KB)

**Location:** `dist/apex/dictu-apex-theme.css` **Deployed to:** APEX Static
Application Files **Referenced as:** `#APP_FILES#dictu-apex-theme.css`

**Contains:**

- Design token bridge (DICTU ⟷ APEX)
- All DICTU component styles (16 components)
- APEX-specific overrides
- Dark mode support
- Print styles

### 2. PL/SQL Package

**File:** `sql/packages/dictu_apex_template_mgr.sql` **Name:**
`DICTU_APEX_TEMPLATE_MGR` **Deployed to:** Workspace schema

**Provides:**

- Template installation API
- Programmatic rendering functions
- Theme Roller integration
- Utility functions

### 3. APEX Templates (8+)

**Files:** `sql/templates/*.sql` **Deployed to:** APEX dictionary

**Types:**

- Button templates (3+): Primary, Secondary, Subtle
- Region templates (2+): Card, Accordion
- List templates (3+): Navigation Bar, Breadcrumbs, Link Lists

### 4. APEX Plugins (1+)

**File:** `sql/plugins/item_type_dictu_button.sql` **Name:** `NL.DICTU.BUTTON`
**Deployed to:** APEX plugin registry

**Features:**

- Native APEX item type
- Configurable via Page Designer
- Supports styles, sizes, icons

---

## ✅ Deployment Verification

### SQL Checks

```sql
-- Should return 8+
SELECT COUNT(*) as template_count
FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- Should return 1+
SELECT COUNT(*) as plugin_count
FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%';

-- Should return VALID
SELECT status
FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
AND object_type = 'PACKAGE BODY';

-- Should return 0 rows
SELECT * FROM user_errors
WHERE name LIKE 'DICTU%';
```

### Visual Test

1. Create test page
2. Add button: Template = "DICTU Button - Primary Action"
3. Add region: Template = "DICTU Card"
4. Run page → Should see styled components
5. F12 → Console → Should have no errors
6. F12 → Network → CSS should load (200 OK)

---

## 🔧 Common Deployment Scenarios

### Scenario 1: First Time Installation (New Application)

```bash
# 1. Build
cd packages/apex-integration
npm install && npm run build

# 2. Deploy SQL
./scripts/deploy-to-apex.sh

# 3. Upload CSS via APEX web interface

# 4. Configure theme

# 5. Test
```

**Time:** 5-10 minutes

---

### Scenario 2: Update Existing Installation

```bash
# 1. Rebuild
npm run build

# 2. Replace CSS file in APEX

# 3. Optionally update templates:
sqlplus user/pass@db
SQL> @sql/templates/button_templates.sql

# 4. Clear cache
SQL> EXEC apex_util.clear_app_cache(100);
```

**Time:** 2-3 minutes

---

### Scenario 3: Multi-Environment (Dev → Test → Prod)

**Development:**

```bash
export DB_CONNECTION="dev:1521/APEXDEV"
export APP_ID="100"
./scripts/deploy-to-apex.sh
```

**Test (after dev testing):**

```bash
export DB_CONNECTION="test:1521/APEXTEST"
export APP_ID="200"
./scripts/deploy-to-apex.sh
```

**Production (after test approval):**

```bash
# Use minified CSS
csso dist/apex/dictu-apex-theme.css -o dist/apex/dictu-apex-theme.min.css

export DB_CONNECTION="prod:1521/APEXPROD"
export APP_ID="300"
# Upload minified CSS
# Run deployment with change control
```

**See:**
[DEPLOYMENT-GUIDE.md § Multi-Environment Deployment](./DEPLOYMENT-GUIDE.md#multi-environment-deployment)

---

### Scenario 4: Multiple Applications (Shared Components)

**Option A: Workspace Files**

- Upload CSS to workspace files
- Reference as `#WORKSPACE_FILES#dictu-apex-theme.css`
- All apps in workspace can use

**Option B: Master Application**

- Create master app with all templates
- Subscribe other apps to master templates
- Centralized management

**See:**
[DEPLOYMENT-GUIDE.md § Multi-Application Deployment](./DEPLOYMENT-GUIDE.md#multi-application-deployment)

---

## 🐛 Troubleshooting Quick Fixes

### CSS Not Loading

```sql
-- Check if file exists
SELECT * FROM apex_application_files
WHERE file_name = 'dictu-apex-theme.css';

-- Check theme reference
SELECT css_file_urls FROM apex_application_themes
WHERE application_id = 100;

-- Fix: Clear cache
EXEC apex_util.clear_app_cache(100);
```

### Templates Not Appearing

```sql
-- Check if installed
SELECT template_name FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';

-- If missing, reinstall
@sql/templates/button_templates.sql
```

### Package Compilation Errors

```sql
-- Check errors
SELECT * FROM user_errors
WHERE name = 'DICTU_APEX_TEMPLATE_MGR';

-- Fix and recompile
@sql/packages/dictu_apex_template_mgr.sql
```

**Full troubleshooting:**
[DEPLOYMENT-GUIDE.md § Troubleshooting](./DEPLOYMENT-GUIDE.md#troubleshooting-deployment)

---

## 📋 Deployment Checklist Summary

Print and use during deployment:

**Pre-Deployment:**

- [ ] APEX 20.1+ available
- [ ] Database credentials ready
- [ ] Node.js & npm installed
- [ ] Backup taken

**Deployment:**

- [ ] Build package: `npm run build`
- [ ] Deploy SQL components
- [ ] Upload CSS file
- [ ] Add CSS reference to theme
- [ ] Clear cache

**Verification:**

- [ ] SQL queries return expected counts
- [ ] Test page renders correctly
- [ ] No console errors
- [ ] CSS file loads

**Full checklist:** [DEPLOYMENT-CHECKLIST.md](./DEPLOYMENT-CHECKLIST.md)

---

## 🎓 Learning Path

### For First-Time Users

1. **Read:** [README.md](../README.md) - Understand what this is
2. **Review:** [DEPLOYMENT-FLOW.md](./DEPLOYMENT-FLOW.md) - See the big picture
3. **Do:** [DEPLOYMENT-QUICK-REFERENCE.md](./DEPLOYMENT-QUICK-REFERENCE.md) -
   Quick start
4. **Reference:** [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) - When you need
   details

### For Experienced APEX Developers

1. **Quick Start:**
   [DEPLOYMENT-QUICK-REFERENCE.md](./DEPLOYMENT-QUICK-REFERENCE.md)
2. **Deploy:** Run automated script
3. **Use:** [usage-examples.md](./usage-examples.md)

### For DevOps/CI-CD

1. **Understand:** [DEPLOYMENT-FLOW.md](./DEPLOYMENT-FLOW.md)
2. **Automate:**
   [DEPLOYMENT-GUIDE.md § SQLcl Deployment](./DEPLOYMENT-GUIDE.md#method-2-sqlcl-deployment)
3. **Script:** Adapt `scripts/deploy-to-apex.sh` for your pipeline

---

## 📞 Getting Help

| Issue Type        | Where to Look                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| Build failing     | Check prerequisites in [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)                                                |
| SQL errors        | [DEPLOYMENT-GUIDE.md § Troubleshooting](./DEPLOYMENT-GUIDE.md#troubleshooting-deployment)                          |
| CSS not loading   | [DEPLOYMENT-QUICK-REFERENCE.md § CSS Not Loading](./DEPLOYMENT-QUICK-REFERENCE.md#css-not-loading)                 |
| Templates missing | [DEPLOYMENT-QUICK-REFERENCE.md § Templates Not Appearing](./DEPLOYMENT-QUICK-REFERENCE.md#templates-not-appearing) |
| General questions | GitHub Issues or Slack #nl-design-system                                                                           |

---

## 🔗 External Resources

- [Oracle APEX Documentation](https://docs.oracle.com/en/database/oracle/apex/)
- [SQLcl Download](https://www.oracle.com/database/sqldeveloper/technologies/sqlcl/)
- [APEX Best Practices](https://apex.oracle.com/go/best-practices)
- [NL Design System Community](https://praatmee.codefor.nl)

---

## ✨ Quick Command Reference

```bash
# Build
npm install && npm run build

# Deploy (automated)
./scripts/deploy-to-apex.sh

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
```

---

**Updated:** March 2026 **Version:** 1.0.0 **DICTU Design System for Oracle
APEX** EUPL-1.2 License
