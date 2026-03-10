#!/usr/bin/env node
/* global console, Buffer, process */
/**
 * @license EUPL-1.2
 * Build APEX-optimized CSS bundle from DICTU Design System components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../..');
const outputDir = path.resolve(__dirname, '../dist/apex');

async function buildApexCSS() {
  console.log('🏗️  Building APEX CSS bundle...\n');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let cssBundle = `/**
 * DICTU Design System for Oracle APEX Universal Theme
 * @license EUPL-1.2
 * Copyright (c) 2021-2025 Dienst ICT Uitvoering
 *
 * Auto-generated - Do not edit directly
 * Generated: ${new Date().toISOString()}
 */

`;

  // Step 1: Create APEX Universal Theme Bridge
  console.log('📋 Creating APEX Universal Theme bridge...');

  cssBundle += `
/* ============================================================================
   APEX Universal Theme Integration Bridge
   Maps DICTU design tokens to APEX UT CSS variables
   ============================================================================ */

:root {
  /* APEX → DICTU: Primary Theme Colors */
  --a-cv-primary-color: var(--govnl-color-hemelblauw-500);
  --a-cv-primary-accent-color: var(--govnl-color-donkerblauw-500);
  --a-cv-accent-color: var(--govnl-color-lintblauw-500);

  /* APEX → DICTU: Status Colors */
  --a-cv-status-success-bg: var(--govnl-color-groen-50);
  --a-cv-status-success-text: var(--govnl-color-groen-500);
  --a-cv-status-warning-bg: var(--govnl-color-geel-50);
  --a-cv-status-warning-text: var(--govnl-color-bruin-500);
  --a-cv-status-error-bg: var(--govnl-color-rood-50);
  --a-cv-status-error-text: var(--govnl-color-rood-500);
  --a-cv-status-info-bg: var(--govnl-color-lichtblauw-50);
  --a-cv-status-info-text: var(--govnl-color-donkerblauw-500);

  /* APEX → DICTU: UI Elements */
  --a-cv-body-background: var(--govnl-color-white);
  --a-cv-body-text-color: var(--govnl-color-grijs-900);
  --a-cv-body-accent-color: var(--govnl-color-grijs-200);

  /* APEX → DICTU: Typography */
  --a-font-body: var(--govnl-typography-sans-serif-font-family, system-ui, -apple-system, sans-serif);
  --a-font-size: var(--govnl-typography-font-size-md, 1rem);
}

`;

  // Step 2: Add DICTU Design Tokens
  console.log('🎨 Adding DICTU design tokens...');

  const tokensPath = path.join(rootDir, 'proprietary/design-tokens/dist/index.css');

  if (fs.existsSync(tokensPath)) {
    const tokensCSS = fs.readFileSync(tokensPath, 'utf8');
    cssBundle += `
/* ============================================================================
   DICTU Design Tokens
   ============================================================================ */

${tokensCSS}

`;
  } else {
    console.warn('⚠️  Warning: Design tokens not found. Run build in design-tokens first.');
  }

  // Step 3: Add Component Styles
  console.log('🧩 Adding component styles...');

  const componentDirs = [
    'button',
    'accordion',
    'breadcrumbs',
    'card',
    'checkbox',
    'fieldset',
    'form-field',
    'heading',
    'icon',
    'link',
    'link-list',
    'list',
    'navigation-bar',
    'pagination',
    'table',
    'text-input',
  ];

  cssBundle += `
/* ============================================================================
   DICTU Component Styles
   ============================================================================ */

`;

  for (const componentName of componentDirs) {
    const componentCSSPath = path.join(rootDir, `components/${componentName}/dist/index.css`);

    if (fs.existsSync(componentCSSPath)) {
      const componentCSS = fs.readFileSync(componentCSSPath, 'utf8');
      cssBundle += `/* ${componentName} Component */\n${componentCSS}\n\n`;
      console.log(`  ✓ ${componentName}`);
    }
  }

  // Step 4: Add APEX-specific overrides
  console.log('🔧 Adding APEX-specific overrides...');

  cssBundle += `
/* ============================================================================
   APEX Universal Theme Compatibility Overrides
   ============================================================================ */

/* Apply DICTU theme to common APEX containers */
.t-Body,
.t-Region,
.t-Form,
.apex-container,
.a-GV {
  @extend .dictu-theme;
}

/* Button Integration - Make DICTU buttons work with APEX button items */
.apex-item-button.dictu-button,
button.dictu-button[data-action] {
  display: inline-flex;
  font-family: inherit;
}

/* Hot/Primary buttons should use primary-action style */
.t-Button--hot.dictu-button {
  @extend .dictu-button--primary-action;
}

/* Interactive Grid Compatibility */
.a-IG .dictu-button {
  min-block-size: auto;
  font-size: var(--govnl-typography-font-size-sm, 0.875rem);
}

.a-IG-button.dictu-button {
  padding-block: 0.25rem;
  padding-inline: 0.5rem;
}

/* Form Item Compatibility */
.apex-item-wrapper .dictu-form-field,
.t-Form-fieldContainer .dictu-form-field {
  width: 100%;
  display: block;
}

.t-Form-inputContainer .dictu-text-input {
  width: 100%;
  box-sizing: border-box;
}

/* Interactive Report Compatibility */
.t-Report-report .dictu-button--subtle {
  background: transparent;
  border-color: transparent;
}

.t-Report-tableWrap .dictu-button {
  font-size: var(--govnl-typography-font-size-sm, 0.875rem);
}

/* Navigation Bar Integration */
.t-NavigationBar .dictu-navigation-bar {
  border-radius: 0;
}

/* Card Integration with Region Templates */
.t-Region--scrollBody .dictu-card {
  height: 100%;
}

/* Breadcrumb Integration */
.t-BreadcrumbRegion .dictu-breadcrumbs {
  margin: 0;
}

/* Table Integration */
.t-Report-wrap .dictu-table {
  width: 100%;
  border-collapse: collapse;
}

/* Pagination Integration */
.t-Report-pagination .dictu-pagination {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

/* Make components responsive for APEX mobile views */
@media (max-width: 640px) {
  .dictu-button {
    width: 100%;
    justify-content: center;
  }

  .dictu-navigation-bar {
    flex-direction: column;
  }
}

/* Dark mode support for APEX Theme Roller */
[data-theme="dark"] .dictu-theme,
.u-ColorScheme--dark .dictu-theme {
  --govnl-color-white: rgb(15, 23, 42);
  --govnl-color-black: rgb(255, 255, 255);
  --govnl-button-primary-action-background-color: var(--govnl-color-hemelblauw-400);
  --govnl-button-primary-action-color: var(--govnl-color-black);
}

/* Print styles for APEX reports */
@media print {
  .dictu-button,
  .dictu-navigation-bar,
  .dictu-pagination {
    display: none !important;
  }

  .dictu-card {
    border: 1px solid #000;
    break-inside: avoid;
  }
}
`;

  // Write the bundle
  const outputPath = path.join(outputDir, 'dictu-apex-theme.css');
  fs.writeFileSync(outputPath, cssBundle);

  console.log(`\n✅ APEX CSS bundle created: ${outputPath}`);
  console.log(`📦 Size: ${(Buffer.byteLength(cssBundle) / 1024).toFixed(2)} KB\n`);

  // Create minified version hint
  console.log('💡 Tip: Use a CSS minifier for production deployment');

  // Create a metadata file
  const metadata = {
    buildDate: new Date().toISOString(),
    version: '1.0.0',
    components: componentDirs.length,
    outputFile: 'dictu-apex-theme.css',
    size: Buffer.byteLength(cssBundle),
  };

  fs.writeFileSync(path.join(outputDir, 'build-metadata.json'), JSON.stringify(metadata, null, 2));
}

// Run the build
buildApexCSS().catch(error => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
