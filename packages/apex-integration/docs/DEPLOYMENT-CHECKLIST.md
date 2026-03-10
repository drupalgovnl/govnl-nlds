# DICTU APEX Deployment Checklist

Print this checklist and check off items as you complete them.

---

## 📋 Pre-Deployment Preparation

### Environment Verification

- [ ] Oracle APEX version 20.1 or higher installed
- [ ] Have database credentials (user/password/connection string)
- [ ] Have APEX workspace access
- [ ] Know your Application ID: \***\*\_\_\*\***
- [ ] Know your Theme ID (default: 42): \***\*\_\_\*\***
- [ ] Node.js 22+ installed (check: `node --version`)
- [ ] npm installed (check: `npm --version`)
- [ ] SQLcl or SQL\*Plus available

### Backup

- [ ] Database backup taken
- [ ] APEX application exported
- [ ] Current CSS files backed up
- [ ] Existing templates documented

**Backup Location:** ******\*\*\*\*******\_\_\_******\*\*\*\******* **Backup
Date/Time:** ******\*\*\*\*******\_\_\_******\*\*\*\*******

---

## 🏗️ Build Phase

### Build Package

- [ ] Navigate to `packages/apex-integration`
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Verify CSS created: `dist/apex/dictu-apex-theme.css`
- [ ] Check CSS size: \***\*\_\_\*\***KB
- [ ] Verify SQL files exist in `sql/` directory

**Build Completed:** ☐ Yes ☐ No **Build Date/Time:**
******\*\*\*\*******\_\_\_******\*\*\*\*******

---

## 🚀 Deployment Phase

### Method 1: Automated Script ✅ Recommended

- [ ] Make script executable: `chmod +x scripts/deploy-to-apex.sh`
- [ ] Run: `./scripts/deploy-to-apex.sh`
- [ ] Enter database credentials when prompted
- [ ] Verify SQL components installed successfully
- [ ] Check for any error messages
- [ ] Review deployment log

**Script Output:** ☐ Success ☐ Errors (document below)

---

### Method 2: Manual Deployment

#### A. Deploy SQL Components

**Via SQL Workshop:**

- [ ] Log into APEX Application Builder
- [ ] Go to: SQL Workshop → SQL Scripts
- [ ] Upload `sql/packages/dictu_apex_template_mgr.sql`
- [ ] Run script and verify no errors
- [ ] Upload `sql/templates/button_templates.sql`
- [ ] Run script and verify templates created
- [ ] Upload `sql/templates/region_templates.sql`
- [ ] Run script and verify templates created
- [ ] Upload `sql/templates/list_templates.sql`
- [ ] Run script and verify templates created
- [ ] Upload `sql/plugins/item_type_dictu_button.sql`
- [ ] Run script and verify plugin created

**Via Command Line:**

```bash
sqlplus [user]/[pass]@[connection]
SQL> @sql/installation/install_dictu.sql [THEME_ID] [APP_ID]
```

- [ ] Script executed successfully
- [ ] No compilation errors shown

#### B. Upload CSS File

**Via APEX Interface:**

- [ ] Log into APEX Application Builder
- [ ] Navigate to: Shared Components
- [ ] Click: Static Application Files
- [ ] Click: Upload File
- [ ] Select: `dist/apex/dictu-apex-theme.css`
- [ ] File Name: `dictu-apex-theme.css`
- [ ] Click: Create
- [ ] Note file reference: #APP_FILES#dictu-apex-theme.css

**CSS Upload:** ☐ Complete **File Reference:**
******\*\*\*\*******\_\_\_******\*\*\*\*******

#### C. Add CSS to Theme

- [ ] Navigate to: Shared Components
- [ ] Click: User Interface Attributes
- [ ] Select your theme (Universal Theme - 42)
- [ ] Scroll to: CSS section
- [ ] Find: File URLs field
- [ ] Add on new line: `#APP_FILES#dictu-apex-theme.css`
- [ ] Click: Apply Changes

**CSS Reference Added:** ☐ Yes

---

## ✅ Verification Phase

### Component Verification

**Run these SQL queries:**

```sql
-- Check Templates
SELECT COUNT(*) FROM apex_application_templates
WHERE template_name LIKE 'DICTU%';
```

- [ ] Result: \***\*\_\_\*\*** (should be 8 or more)

```sql
-- Check Plugins
SELECT COUNT(*) FROM apex_appl_plugins
WHERE name LIKE 'NL.DICTU.%';
```

- [ ] Result: \***\*\_\_\*\*** (should be 1 or more)

```sql
-- Check Package
SELECT status FROM user_objects
WHERE object_name = 'DICTU_APEX_TEMPLATE_MGR'
AND object_type = 'PACKAGE BODY';
```

- [ ] Result: VALID (if not, check errors)

```sql
-- Check for Errors
SELECT * FROM user_errors
WHERE name LIKE 'DICTU%';
```

- [ ] Result: No rows (if rows exist, fix errors)

### Visual Verification

**Create Test Page:**

- [ ] Create new blank page (Page ID: \***\*\_\_\*\***)
- [ ] Add region with template: "DICTU Card"
- [ ] Add button with template: "DICTU Button - Primary Action"
- [ ] Save page

**Run Test Page:**

- [ ] Click: Run Page
- [ ] Page loads without errors
- [ ] Button has correct styling (blue background)
- [ ] Card has correct styling (border, padding)
- [ ] Open browser DevTools (F12)
- [ ] Check Console tab - no errors
- [ ] Check Network tab - CSS file loads (200 status)
- [ ] Check Elements tab - dictu CSS classes present

**Visual Test:** ☐ Pass ☐ Fail (document issues below)

### Cache Clearing

- [ ] Clear APEX cache: `EXEC apex_util.clear_app_cache([APP_ID]);`
- [ ] Or: Application Builder → Edit Application Properties → Apply Changes
- [ ] Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

---

## 🎯 Post-Deployment Tasks

### Documentation

- [ ] Update deployment log with date/time
- [ ] Document any issues encountered
- [ ] Note any deviations from standard process
- [ ] Update version tracking system
- [ ] Inform team of successful deployment

**Deployment Notes:**

```
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
```

### Performance Check

- [ ] Page load time acceptable: \***\*\_\_\*\***ms
- [ ] CSS file load time: \***\*\_\_\*\***ms
- [ ] No browser console warnings
- [ ] Mobile view renders correctly
- [ ] Tablet view renders correctly

### Accessibility Check

- [ ] Keyboard navigation works
- [ ] Screen reader test passed (if applicable)
- [ ] Color contrast acceptable
- [ ] Focus indicators visible

---

## 🐛 Troubleshooting (if needed)

### CSS Not Loading

If CSS doesn't load:

- [ ] Verify file uploaded: Check Static Application Files
- [ ] Verify reference added: Check User Interface Attributes → CSS
- [ ] Check file path: Should be `#APP_FILES#dictu-apex-theme.css`
- [ ] Clear cache and hard refresh browser
- [ ] Check browser console for 404 errors

**Issue Resolved:** ☐ Yes ☐ No

### Templates Not Appearing

If templates don't show:

- [ ] Verify templates installed: Run verification SQL
- [ ] Check application ID matches
- [ ] Check theme ID matches
- [ ] Restart APEX (if self-hosted)

**Issue Resolved:** ☐ Yes ☐ No

### Plugin Errors

If plugin shows errors:

- [ ] Check package compilation: Query user_errors
- [ ] Recompile package if needed
- [ ] Verify plugin file reference to CSS
- [ ] Check plugin attributes configured correctly

**Issue Resolved:** ☐ Yes ☐ No

---

## 🔄 Rollback Plan (if needed)

If deployment fails and rollback is needed:

### Rollback SQL Components

```sql
-- Remove templates
DELETE FROM apex_application_templates
WHERE template_name LIKE 'DICTU%'
AND application_id = [APP_ID];

-- Remove plugins
-- (Use APEX Application Builder to delete)

-- Drop package
DROP PACKAGE dictu_apex_template_mgr;

COMMIT;
```

- [ ] SQL components removed
- [ ] Verified templates deleted
- [ ] Package dropped

### Rollback CSS

- [ ] Remove CSS reference from User Interface Attributes
- [ ] Delete CSS file from Static Application Files
- [ ] Restore previous CSS from backup

**Rollback Completed:** ☐ Yes ☐ N/A

---

## ✅ Sign-Off

### Deployment Team

**Deployed By:** ******\*\*\*\*******\_\_\_******\*\*\*\******* **Date:**
******\*\*\*\*******\_\_\_******\*\*\*\******* **Time:**
******\*\*\*\*******\_\_\_******\*\*\*\******* **Environment:** ☐ Development ☐
Test ☐ Production

**Verified By:** ******\*\*\*\*******\_\_\_******\*\*\*\******* **Date:**
******\*\*\*\*******\_\_\_******\*\*\*\******* **Signature:**
******\*\*\*\*******\_\_\_******\*\*\*\*******

### Deployment Status

**Overall Status:** ☐ Success ☐ Partial Success ☐ Failed

**Components Deployed:**

- SQL Components: ☐ Yes ☐ No ☐ Partial
- CSS Bundle: ☐ Yes ☐ No
- Templates: ☐ Yes ☐ No ☐ Partial
- Plugins: ☐ Yes ☐ No ☐ Partial

**Ready for Use:** ☐ Yes ☐ No

**Issues to Resolve:**

```
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
```

**Next Steps:**

```
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
```

---

## 📞 Support Contacts

**Technical Support:** ******\*\*\*\*******\_\_\_******\*\*\*\******* **Database
Admin:** ******\*\*\*\*******\_\_\_******\*\*\*\******* **APEX Admin:**
******\*\*\*\*******\_\_\_******\*\*\*\******* **Project Lead:**
******\*\*\*\*******\_\_\_******\*\*\*\*******

---

## 📚 Reference Documents

- [ ] DEPLOYMENT-GUIDE.md reviewed
- [ ] INSTALLATION.md available
- [ ] DEPLOYMENT-QUICK-REFERENCE.md printed
- [ ] Deployment log saved
- [ ] Screenshots taken (if needed)

---

**Checklist Version:** 1.0.0 **Last Updated:** March 2026 **DICTU Design System
for Oracle APEX** EUPL-1.2 License

---

**NOTES:**

```
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
___________________________________________________________________
```
