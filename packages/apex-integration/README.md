# DICTU Design System - Oracle APEX Integration

<function_calls> <invoke name="create_file"> <parameter name="content"># DICTU
Design System - Oracle APEX Integration

> Oracle APEX Universal Theme integration for the DICTU Design System

## 🎯 Overview

This package provides a complete integration layer between the DICTU Design
System (based on NL Design System) and Oracle APEX Universal Theme. It enables
APEX developers to use government-standard, accessible UI components with full
APEX functionality.

## ✨ Features

- **🎨 Complete CSS Bundle** - All DICTU components optimized for APEX
- **🔧 APEX Templates** - Button, region, and list templates ready to use
- **🔌 APEX Plugins** - Native APEX item plugins for DICTU components
- **📦 PL/SQL API** - Programmatic component rendering
- **🎭 Theme Roller Integration** - Compatible with APEX Theme Roller
- **♿ Accessibility Built-in** - WCAG 2.1 AA compliant components
- **📱 Responsive Design** - Mobile-first, works on all devices
- **🌓 Dark Mode** - Automatic dark mode support

## 🚀 Quick Start

### Prerequisites

- Oracle APEX 20.1+
- Node.js 22+ (for building)
- Database schema with CREATE privileges

### Installation (5 minutes)

1. **Build the package:**

   ```bash
   cd packages/apex-integration
   npm install
   npm run build
   ```

2. **Upload CSS to APEX:**
   - Navigate to: Shared Components > Static Application Files
   - Upload: `dist/apex/dictu-apex-theme.css`

3. **Add CSS to your application:**
   - Go to: Shared Components > User Interface Attributes
   - Add to CSS File URLs: `#APP_FILES#dictu-apex-theme.css`

4. **Run installation script:**

   ```sql
   @sql/installation/install_dictu.sql
   ```

5. **Start using DICTU components!**

See [INSTALLATION.md](docs/INSTALLATION.md) for detailed instructions.

### Automated Deployment (Alternative)

Use the deployment script for automated setup:

```bash
chmod +x scripts/deploy-to-apex.sh
./scripts/deploy-to-apex.sh
```

The script will:

- ✅ Build the package
- ✅ Deploy SQL components (templates, packages, plugins)
- ✅ Generate deployment log
- ⚠️ Guide you through CSS upload (manual step)

See [DEPLOYMENT-GUIDE.md](docs/DEPLOYMENT-GUIDE.md) for comprehensive deployment
documentation.

## 📚 Components Available

### Buttons

- Primary Action (call-to-action)
- Secondary Action
- Subtle (tertiary actions)
- Danger (destructive actions)
- With icons

### Regions

- Card (elevated, outlined)
- Accordion

### Navigation

- Navigation Bar
- Breadcrumbs
- Link Lists

### Forms

- Text Input
- Checkbox
- Fieldset
- Form Field wrapper

### Data Display

- Table
- List
- Timeline

### Layout

- Grid
- Page Container
- Page Section

## 📖 Usage Examples

### Using DICTU Button Template

```sql
-- In APEX Page Designer:
-- 1. Create a button
-- 2. Appearance > Button Template: "DICTU Button - Primary Action"
-- 3. Template Options: Size = Large
```

### Using DICTU Button Plugin

```sql
-- Create an item of type "DICTU Button [Plug-In]"
-- Configure:
--   Button Style: primary-action
--   Button Size: md
--   Icon CSS Classes: fa fa-save
```

### Programmatic Rendering

```sql
BEGIN
  -- Render a button
  dictu_apex_template_mgr.render_button(
    p_label => 'Save Changes',
    p_style => 'primary-action',
    p_onclick => 'apex.submit({request: "SAVE"})'
  );

  -- Render a card
  dictu_apex_template_mgr.render_card(
    p_title => 'Welcome',
    p_content => '<p>Welcome to DICTU Design System for APEX!</p>',
    p_style => 'elevated'
  );
END;
/
```

### In Interactive Report

```sql
SELECT
  emp_name,
  emp_email,
  '<button class="dictu-button dictu-button--subtle"
           onclick="editEmployee(' || emp_id || ')">
    Edit
   </button>' as actions
FROM employees;
```

## 🏗️ Architecture

```
packages/apex-integration/
├── dist/apex/                    # Build output
│   ├── dictu-apex-theme.css     # Main CSS bundle
│   └── build-metadata.json       # Build info
├── sql/                          # SQL installation files
│   ├── installation/
│   │   └── install_dictu.sql    # Master installer
│   ├── packages/
│   │   └── dictu_apex_template_mgr.sql  # PL/SQL API
│   ├── templates/
│   │   ├── button_templates.sql
│   │   ├── region_templates.sql
│   │   └── list_templates.sql
│   └── plugins/
│       └── item_type_dictu_button.sql
├── scripts/
│   ├── build-apex-css.js        # CSS builder
│   ├── generate-apex-templates.js
│   └── generate-installation-guide.js
└── docs/
    ├── INSTALLATION.md          # Detailed installation guide
    └── usage-examples.md        # Code examples
```

## 🔄 Integration Approach

The integration uses a **three-layer architecture**:

### 1. Design Token Bridge Layer

Maps DICTU CSS custom properties to APEX Universal Theme variables:

```css
:root {
  --a-cv-primary-color: var(--govnl-color-hemelblauw-500);
  --a-cv-accent-color: var(--govnl-color-lintblauw-500);
  /* ... more mappings */
}
```

### 2. Component Layer

Provides DICTU components with APEX-specific adaptations:

- Interactive Grid compatibility
- Form item integration
- Report table styling
- Mobile responsiveness

### 3. Template Adapter Layer

Wraps DICTU components in APEX template syntax:

```html
<button
  type="#BUTTON_TYPE#"
  id="#BUTTON_ID#"
  class="dictu-button dictu-button--primary-action"
>
  #LABEL!HTML#
</button>
```

## 🎨 Customization

### Override Design Tokens

Create `custom-dictu-overrides.css`:

```css
.dictu-theme {
  --govnl-color-hemelblauw-500: #0066cc; /* Custom primary */
  --govnl-button-border-radius: 8px; /* Rounder buttons */
}
```

Reference after main CSS file in application.

### Dark Mode

Dark mode is automatically supported when APEX is in dark mode:

```css
[data-theme="dark"] .dictu-theme {
  /* Automatic dark mode overrides */
}
```

## 🔧 Development

### Build CSS Bundle

```bash
npm run build:css
```

### Generate Templates

```bash
npm run build:templates
```

### Generate Documentation

```bash
npm run build:docs
```

### Build Everything

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

## 📊 Browser Support

Same as Oracle APEX Universal Theme:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## ♿ Accessibility

All DICTU components are WCAG 2.1 AA compliant:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast support
- ✅ Focus indicators
- ✅ Semantic HTML

## 🤝 Contributing

This package is part of the DICTU Design System. See main repository for
contribution guidelines.

## 📄 License

EUPL-1.2 - Copyright (c) 2021-2025 Dienst ICT Uitvoering

## 🆘 Support

- **Documentation**: [docs/INSTALLATION.md](docs/INSTALLATION.md)
- **Examples**: [docs/usage-examples.md](docs/usage-examples.md)
- **Issues**: https://github.com/drupalgovnl/govnl-nlds/issues
- **Community**: #nl-design-system on praatmee.codefor.nl

## 📦 Package Information

- **Version**: 1.0.0
- **APEX Compatibility**: 20.1+
- **Universal Theme Version**: 42
- **Design System**: DICTU (NL Design System Architecture)

## 🎯 Roadmap

- [ ] Additional plugins (region types, dynamic actions)
- [ ] Theme Roller GUI integration
- [ ] Page template examples
- [ ] Migration utility from standard UT
- [ ] Component showcase application
- [ ] Automated testing suite

## 💡 Why Use This?

1. **Standards Compliant** - Dutch government design standards
2. **Accessibility First** - WCAG 2.1 AA out of the box
3. **Consistent UX** - Same look & feel across web and APEX apps
4. **Easy Maintenance** - Update design tokens, rebuild CSS
5. **Full APEX Integration** - Works with all APEX features
6. **No JavaScript Required** - Pure CSS implementation where possible
7. **Performance Optimized** - Minimal CSS footprint
8. **Theme Roller Compatible** - Customize via APEX's native tools

## 🔗 Related Packages

- `@dictu/design-tokens` - Design token definitions
- `@dictu/button` - Button component
- `@dictu/card` - Card component
- `@dictu/form-field` - Form components
- And 20+ more components...

---

Made with ❤️ by Dienst ICT Uitvoering for the Dutch Government
