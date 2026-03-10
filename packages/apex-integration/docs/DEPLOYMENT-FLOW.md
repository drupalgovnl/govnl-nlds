# DICTU APEX Deployment Flow

This document visualizes the deployment architecture and process flow.

## 📊 Deployment Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     DICTU Design System                         │
│                  (NL Design System Based)                       │
└─────────────────────┬──────────────┬────────────────────────────┘
                      │              │
                      │              │
        ┌─────────────┴───┐   ┌──────┴──────────┐
        │ Design Tokens   │   │   Components     │
        │   (JSON)        │   │   (SCSS/CSS)     │
        └─────────┬───────┘   └──────┬───────────┘
                  │                  │
                  └────────┬─────────┘
                           │
                    ┌──────▼──────┐
                    │   Build     │
                    │   Process   │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
    ┌─────▼─────┐   ┌──────▼──────┐  ┌────▼─────┐
    │    CSS    │   │     SQL     │  │   Docs   │
    │   Bundle  │   │  Templates  │  │  & Demo  │
    └─────┬─────┘   └──────┬──────┘  └──────────┘
          │                │
          │                │
┌─────────▼────────────────▼─────────────────────────────────────┐
│                   Oracle APEX Environment                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐         ┌──────────────────┐            │
│  │  Static Files   │         │  SQL Components  │            │
│  ├─────────────────┤         ├──────────────────┤            │
│  │ • CSS Bundle    │         │ • PL/SQL Package │            │
│  │ • Upload via    │         │ • Templates      │            │
│  │   Web or API    │         │ • Plugins        │            │
│  └────────┬────────┘         └────────┬─────────┘            │
│           │                           │                       │
│           └───────────┬───────────────┘                       │
│                       │                                       │
│              ┌────────▼─────────┐                             │
│              │  APEX Application│                             │
│              ├──────────────────┤                             │
│              │ • Theme Config   │                             │
│              │ • Page Templates │                             │
│              │ • Components     │                             │
│              └──────────────────┘                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 🔄 Deployment Process Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    START DEPLOYMENT                             │
└───────────────────────────┬─────────────────────────────────────┘
                            │
                    ┌───────▼──────┐
                    │ Prerequisites│
                    │    Check     │
                    └───────┬──────┘
                            │
                ┌───────────▼───────────┐
                │ Node.js, npm, SQLcl?  │
                │ package.json exists?  │
                └───────────┬───────────┘
                            │
                      ┌─────▼─────┐
                      │   Build   │
                      │  Package  │
                      └─────┬─────┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
       ┌────▼────┐    ┌────▼────┐    ┌────▼────┐
       │   CSS   │    │   SQL   │    │  Docs   │
       │ Bundle  │    │Templates│    │  & Demo │
       └────┬────┘    └────┬────┘    └─────────┘
            │              │
            │         ┌────▼────┐
            │         │  Deploy │
            │         │   SQL   │
            │         └────┬────┘
            │              │
            │    ┌─────────┼─────────┐
            │    │         │         │
            │  ┌─▼──┐   ┌─▼──┐   ┌──▼──┐
            │  │PL/ │   │Tmpl│   │Plug-│
            │  │SQL │   │ates│   │ ins │
            │  └────┘   └────┘   └─────┘
            │
       ┌────▼────┐
       │  Upload │
       │   CSS   │◄──── Manual Step
       │ to APEX │      (Web Interface or API)
       └────┬────┘
            │
       ┌────▼────┐
       │   Add   │
       │CSS Ref  │◄──── Manual Step
       │to Theme │      (User Interface Attributes)
       └────┬────┘
            │
       ┌────▼────┐
       │  Clear  │
       │  Cache  │
       └────┬────┘
            │
       ┌────▼────┐
       │  Test   │
       │Component│
       └────┬────┘
            │
    ┌───────▼───────┐
    │   Verify &    │
    │   Document    │
    └───────┬───────┘
            │
    ┌───────▼───────┐
    │  DEPLOYMENT   │
    │   COMPLETE    │
    └───────────────┘
```

## 🚀 Deployment Methods Comparison

### Method 1: Automated Script

```
Developer Machine                    Oracle Database
┌──────────────────┐                ┌──────────────────┐
│  Build Package   │                │                  │
│  npm run build   │                │                  │
└────────┬─────────┘                │                  │
         │                          │                  │
         │  ┌─────────────────┐    │                  │
         └─►│ deploy-to-apex  │───►│  Install SQL     │
            │     .sh         │    │  Components      │
            └─────────────────┘    │                  │
                                   └──────────────────┘
            ┌─────────────────┐    ┌──────────────────┐
            │   Web Browser   │───►│  APEX Upload CSS │
            │   Manual Step   │    │  (Static Files)  │
            └─────────────────┘    └──────────────────┘

Pros: Fast, automated, logs everything
Cons: Requires command line access
Time: ~5 minutes
```

### Method 2: Manual Deployment

```
Developer Machine                    APEX Web Interface
┌──────────────────┐                ┌──────────────────┐
│  Build Package   │                │                  │
│  npm run build   │                │                  │
└────────┬─────────┘                │                  │
         │                          │                  │
         │  ┌─────────────────┐    │  ┌─────────────┐│
         └─►│ SQL Workshop    │───►│  │ Run Scripts ││
            │ Upload Scripts  │    │  └─────────────┘│
            └─────────────────┘    │                  │
                                   │  ┌─────────────┐│
            ┌─────────────────┐    │  │Upload Files ││
            │ Static Files    │───►│  └─────────────┘│
            │ Upload CSS      │    │                  │
            └─────────────────┘    └──────────────────┘

Pros: No command line needed, visual feedback
Cons: More manual steps, slower
Time: ~10 minutes
```

### Method 3: SQLcl Automation

```
Developer Machine                    Oracle Database
┌──────────────────┐                ┌──────────────────┐
│  Build Package   │                │                  │
│  npm run build   │                │                  │
└────────┬─────────┘                │                  │
         │                          │                  │
         │  ┌─────────────────┐    │  ┌──────────────┐│
         └─►│   SQLcl Script  │───►│  │Install All   ││
            │  All-in-one     │    │  │Components    ││
            └─────────────────┘    │  └──────────────┘│
                                   │                  │
            ┌─────────────────┐    │  ┌──────────────┐│
            │   REST API      │───►│  │Upload CSS    ││
            │  (if enabled)   │    │  │Automatically ││
            └─────────────────┘    │  └──────────────┘│
                                   └──────────────────┘

Pros: Fully automated, scriptable, CI/CD ready
Cons: Requires SQLcl installation, REST API setup
Time: ~3 minutes
```

## 📦 File Flow During Deployment

```
Source Repository
└── packages/apex-integration/
    ├── src/                      → Not deployed
    ├── scripts/
    │   ├── build-apex-css.js     → Generates CSS
    │   └── deploy-to-apex.sh     → Deploys components
    ├── dist/apex/
    │   └── dictu-apex-theme.css  → Upload to APEX ──┐
    ├── sql/                                          │
    │   ├── packages/                                 │
    │   │   └── *.sql             → Execute in DB ─┐ │
    │   ├── templates/                              │ │
    │   │   └── *.sql             → Execute in DB ─┤ │
    │   └── plugins/                                │ │
    │       └── *.sql             → Execute in DB ─┤ │
    └── docs/                     → Reference only  │ │
                                                    │ │
Oracle APEX Database                                │ │
├── Workspace Schema                                │ │
│   ├── DICTU_APEX_TEMPLATE_MGR  ◄─────────────────┘ │
│   └── User Objects                                  │
├── APEX Dictionary                                   │
│   ├── apex_application_templates ◄──────────────────┤
│   ├── apex_appl_plugins         ◄──────────────────┤
│   └── apex_application_files    ◄──────────────────┘
└── Runtime Files
    └── Static Application Files
        └── dictu-apex-theme.css  ◄────────────────────┘
```

## 🔐 Security Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                      Security Layers                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Build Environment                                           │
│     ├── Package integrity (npm audit)                           │
│     ├── Dependency scanning                                     │
│     └── Code quality checks                                     │
│                                                                 │
│  2. Database Access                                             │
│     ├── Schema-level privileges                                 │
│     ├── Object creation rights                                  │
│     └── APEX workspace isolation                                │
│                                                                 │
│  3. APEX Security                                               │
│     ├── Workspace authorization                                 │
│     ├── Application-level access                                │
│     └── Session validation                                      │
│                                                                 │
│  4. Runtime Security                                            │
│     ├── Content Security Policy (CSP)                           │
│     ├── XSS protection (apex_escape)                            │
│     └── SQL injection prevention                                │
│                                                                 │
│  5. File Security                                               │
│     ├── MIME type validation                                    │
│     ├── File size limits                                        │
│     └── Checksum verification                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## 🎯 Deployment Success Criteria

```
✅ Pre-Deployment Checklist
├── [ ] Build completed without errors
├── [ ] All SQL scripts syntax valid
├── [ ] CSS file generated (dist/apex/*.css)
├── [ ] Database credentials verified
├── [ ] APEX workspace accessible
└── [ ] Backup taken

✅ During Deployment
├── [ ] PL/SQL package compiled successfully
├── [ ] Templates created (count > 0)
├── [ ] Plugins registered (count > 0)
├── [ ] No compilation errors
└── [ ] CSS file uploaded

✅ Post-Deployment Verification
├── [ ] SELECT FROM apex_application_templates (8+ rows)
├── [ ] SELECT FROM apex_appl_plugins (1+ rows)
├── [ ] SELECT FROM user_objects WHERE status='VALID'
├── [ ] Test page renders correctly
├── [ ] Browser console shows no errors
├── [ ] CSS loads (check Network tab)
└── [ ] Components styled correctly

✅ Documentation
├── [ ] Deployment logged
├── [ ] Version recorded
├── [ ] Team notified
└── [ ] Rollback plan ready
```

## 🔄 Update/Rollback Flow

```
Updated Version Available
         │
         ▼
┌────────────────┐
│ Build New      │
│ Version        │
└────────┬───────┘
         │
         ├──────────┐
         │          │
    ┌────▼────┐ ┌───▼────┐
    │Backup   │ │Deploy  │
    │Current  │ │New     │
    └────┬────┘ └───┬────┘
         │          │
         │    ┌─────▼──────┐
         │    │ Test New   │
         │    │ Version    │
         │    └─────┬──────┘
         │          │
         │    ┌─────▼──────┐
         │    │ Issues?    │◄───No──► Success
         │    └─────┬──────┘
         │          │Yes
         │          │
         └──────────▼
         ┌──────────────┐
         │   Rollback   │
         │  to Backup   │
         └──────────────┘
```

## 📊 Component Dependencies

```
DICTU APEX Integration
         │
         ├── CSS Bundle (dictu-apex-theme.css)
         │   ├── Depends on: Design Tokens
         │   ├── Depends on: Component CSS
         │   └── Referenced by: APEX Theme
         │
         ├── PL/SQL Package (dictu_apex_template_mgr)
         │   ├── Depends on: APEX APIs
         │   ├── Used by: Templates
         │   └── Used by: Plugins
         │
         ├── Templates
         │   ├── Button Templates
         │   │   └── Depends on: CSS Bundle
         │   ├── Region Templates
         │   │   └── Depends on: CSS Bundle
         │   └── List Templates
         │       └── Depends on: CSS Bundle
         │
         └── Plugins
             └── DICTU Button Plugin
                 ├── Depends on: PL/SQL Package
                 ├── Depends on: CSS Bundle
                 └── Depends on: APEX Plugin Framework
```

---

**For detailed deployment instructions, see:**

- [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) - Comprehensive guide
- [DEPLOYMENT-QUICK-REFERENCE.md](./DEPLOYMENT-QUICK-REFERENCE.md) - Quick
  commands
- [INSTALLATION.md](./INSTALLATION.md) - Installation steps

---

**DICTU Design System for Oracle APEX** EUPL-1.2 License • March 2026
