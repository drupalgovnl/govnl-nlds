#!/usr/bin/env node
/* global console */
/**
 * @license EUPL-1.2
 * Generate APEX template files for DICTU components
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, '../sql/templates');

function generateTemplates() {
  console.log('📝 Generating APEX templates...\n');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Button Templates
  generateButtonTemplates();

  // Region Templates
  generateRegionTemplates();

  // List Templates
  generateListTemplates();

  console.log('\n✅ APEX templates generated successfully');
}

function generateButtonTemplates() {
  console.log('🔘 Generating button templates...');

  const buttonTemplateSQL = `-- Button Templates for DICTU Design System
-- @license EUPL-1.2

-- ==============================================================================
-- Template: DICTU Button - Primary Action
-- ==============================================================================
-- Use this for the main call-to-action on a page
-- Template Type: Button
-- Template Class: dictu-button dictu-button--primary-action
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  -- Create Primary Action Button Template
  v_template_id := apex_application_template.create_button_template(
    p_name => 'DICTU Button - Primary Action',
    p_internal_name => 'DICTU_BUTTON_PRIMARY',
    p_template => q'^<button type="#BUTTON_TYPE#" id="#BUTTON_ID#" class="dictu-button dictu-button--primary-action #BUTTON_CSS_CLASSES#" #BUTTON_ATTRIBUTES# #ONCLICK#>#LABEL!HTML#</button>^',
    p_hot_template => q'^<button type="#BUTTON_TYPE#" id="#BUTTON_ID#" class="dictu-button dictu-button--primary-action t-Button--hot #BUTTON_CSS_CLASSES#" #BUTTON_ATTRIBUTES# #ONCLICK#>#LABEL!HTML#</button>^',
    p_translate_this_template => 'Y',
    p_template_comment => 'DICTU Design System primary action button'
  );

  -- Add Template Options
  apex_application_template.create_template_option(
    p_template_id => v_template_id,
    p_option_group => 'SIZE',
    p_internal_name => 'SIZE_SMALL',
    p_display_name => 'Small',
    p_css_classes => 'dictu-button--sm',
    p_group_id => apex_application_template.get_option_group_id('SIZE')
  );

  apex_application_template.create_template_option(
    p_template_id => v_template_id,
    p_option_group => 'SIZE',
    p_internal_name => 'SIZE_LARGE',
    p_display_name => 'Large',
    p_css_classes => 'dictu-button--lg',
    p_group_id => apex_application_template.get_option_group_id('SIZE')
  );

  apex_application_template.create_template_option(
    p_template_id => v_template_id,
    p_option_group => 'WIDTH',
    p_internal_name => 'WIDTH_FULL',
    p_display_name => 'Full Width',
    p_css_classes => 'dictu-button--full-width',
    p_group_id => apex_application_template.get_option_group_id('WIDTH')
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Button - Primary Action (ID: ' || v_template_id || ')');
END;
/

-- ==============================================================================
-- Template: DICTU Button - Secondary Action
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_button_template(
    p_name => 'DICTU Button - Secondary Action',
    p_internal_name => 'DICTU_BUTTON_SECONDARY',
    p_template => q'^<button type="#BUTTON_TYPE#" id="#BUTTON_ID#" class="dictu-button dictu-button--secondary-action #BUTTON_CSS_CLASSES#" #BUTTON_ATTRIBUTES# #ONCLICK#>#LABEL!HTML#</button>^',
    p_translate_this_template => 'Y',
    p_template_comment => 'DICTU Design System secondary action button'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Button - Secondary Action (ID: ' || v_template_id || ')');
END;
/

-- ==============================================================================
-- Template: DICTU Button - Subtle
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_button_template(
    p_name => 'DICTU Button - Subtle',
    p_internal_name => 'DICTU_BUTTON_SUBTLE',
    p_template => q'^<button type="#BUTTON_TYPE#" id="#BUTTON_ID#" class="dictu-button dictu-button--subtle #BUTTON_CSS_CLASSES#" #BUTTON_ATTRIBUTES# #ONCLICK#>#LABEL!HTML#</button>^',
    p_translate_this_template => 'Y',
    p_template_comment => 'DICTU Design System subtle button for tertiary actions'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Button - Subtle (ID: ' || v_template_id || ')');
END;
/

-- ==============================================================================
-- Template: DICTU Button with Icon
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_button_template(
    p_name => 'DICTU Button - With Icon',
    p_internal_name => 'DICTU_BUTTON_ICON',
    p_template => q'^<button type="#BUTTON_TYPE#" id="#BUTTON_ID#" class="dictu-button dictu-button--primary-action #BUTTON_CSS_CLASSES#" #BUTTON_ATTRIBUTES# #ONCLICK#><span class="dictu-button__icon">#ICON_CSS_CLASSES#</span><span class="dictu-button__text">#LABEL!HTML#</span></button>^',
    p_translate_this_template => 'Y',
    p_template_comment => 'DICTU Design System button with icon support'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Button - With Icon (ID: ' || v_template_id || ')');
END;
/

COMMIT;
`;

  fs.writeFileSync(path.join(outputDir, 'button_templates.sql'), buttonTemplateSQL);

  console.log('  ✓ button_templates.sql');
}

function generateRegionTemplates() {
  console.log('📦 Generating region templates...');

  const regionTemplateSQL = `-- Region Templates for DICTU Design System
-- @license EUPL-1.2

-- ==============================================================================
-- Template: DICTU Card Region
-- ==============================================================================
-- Use this template to display content in a card layout
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_region_template(
    p_name => 'DICTU Card',
    p_internal_name => 'DICTU_CARD',
    p_template => q'^<div class="dictu-card #REGION_CSS_CLASSES#" id="#REGION_STATIC_ID#" #REGION_ATTRIBUTES#>
  <div class="dictu-card__header">
    <h2 class="dictu-card__title">#TITLE#</h2>
  </div>
  <div class="dictu-card__body">
    #BODY#
  </div>
  #SUB_REGIONS#
</div>^',
    p_page_plug_template_name => 'Standard',
    p_translate_this_template => 'Y'
  );

  -- Add template options
  apex_application_template.create_template_option(
    p_template_id => v_template_id,
    p_option_group => 'STYLE',
    p_internal_name => 'ELEVATED',
    p_display_name => 'Elevated (Shadow)',
    p_css_classes => 'dictu-card--elevated'
  );

  apex_application_template.create_template_option(
    p_template_id => v_template_id,
    p_option_group => 'STYLE',
    p_internal_name => 'OUTLINED',
    p_display_name => 'Outlined',
    p_css_classes => 'dictu-card--outlined'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Card (ID: ' || v_template_id || ')');
END;
/

-- ==============================================================================
-- Template: DICTU Accordion Region
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_region_template(
    p_name => 'DICTU Accordion',
    p_internal_name => 'DICTU_ACCORDION',
    p_template => q'^<div class="dictu-accordion #REGION_CSS_CLASSES#" id="#REGION_STATIC_ID#" #REGION_ATTRIBUTES#>
  <details class="dictu-accordion__item">
    <summary class="dictu-accordion__header">#TITLE#</summary>
    <div class="dictu-accordion__content">
      #BODY#
    </div>
  </details>
  #SUB_REGIONS#
</div>^',
    p_translate_this_template => 'Y'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Accordion (ID: ' || v_template_id || ')');
END;
/

COMMIT;
`;

  fs.writeFileSync(path.join(outputDir, 'region_templates.sql'), regionTemplateSQL);

  console.log('  ✓ region_templates.sql');
}

function generateListTemplates() {
  console.log('📋 Generating list templates...');

  const listTemplateSQL = `-- List Templates for DICTU Design System
-- @license EUPL-1.2

-- ==============================================================================
-- Template: DICTU Navigation List
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_list_template(
    p_name => 'DICTU Navigation Bar',
    p_internal_name => 'DICTU_NAVIGATION_BAR',
    p_list_template_before_rows => '<nav class="dictu-navigation-bar"><ul class="dictu-navigation-bar__list">',
    p_list_template_after_rows => '</ul></nav>',
    p_list_template_current => '<li class="dictu-navigation-bar__item dictu-navigation-bar__item--current"><a href="#LINK#" class="dictu-navigation-bar__link">#TEXT#</a></li>',
    p_list_template_noncurrent => '<li class="dictu-navigation-bar__item"><a href="#LINK#" class="dictu-navigation-bar__link">#TEXT#</a></li>',
    p_list_template_name => 'Navigation Bar',
    p_translate_this_template => 'Y'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Navigation Bar (ID: ' || v_template_id || ')');
END;
/

-- ==============================================================================
-- Template: DICTU Link List
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_list_template(
    p_name => 'DICTU Link List',
    p_internal_name => 'DICTU_LINK_LIST',
    p_list_template_before_rows => '<ul class="dictu-link-list">',
    p_list_template_after_rows => '</ul>',
    p_list_template_current => '<li class="dictu-link-list__item dictu-link-list__item--current"><a href="#LINK#" class="dictu-link-list__link">#TEXT#</a></li>',
    p_list_template_noncurrent => '<li class="dictu-link-list__item"><a href="#LINK#" class="dictu-link-list__link">#TEXT#</a></li>',
    p_translate_this_template => 'Y'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Link List (ID: ' || v_template_id || ')');
END;
/

-- ==============================================================================
-- Template: DICTU Breadcrumbs
-- ==============================================================================

DECLARE
  v_template_id NUMBER;
BEGIN
  v_template_id := apex_application_template.create_list_template(
    p_name => 'DICTU Breadcrumbs',
    p_internal_name => 'DICTU_BREADCRUMBS',
    p_list_template_before_rows => '<nav class="dictu-breadcrumbs" aria-label="Breadcrumb"><ol class="dictu-breadcrumbs__list">',
    p_list_template_after_rows => '</ol></nav>',
    p_list_template_current => '<li class="dictu-breadcrumbs__item" aria-current="page">#TEXT#</li>',
    p_list_template_noncurrent => '<li class="dictu-breadcrumbs__item"><a href="#LINK#" class="dictu-breadcrumbs__link">#TEXT#</a></li>',
    p_between_items => '<li class="dictu-breadcrumbs__separator" aria-hidden="true">/</li>',
    p_translate_this_template => 'Y'
  );

  DBMS_OUTPUT.PUT_LINE('Created template: DICTU Breadcrumbs (ID: ' || v_template_id || ')');
END;
/

COMMIT;
`;

  fs.writeFileSync(path.join(outputDir, 'list_templates.sql'), listTemplateSQL);

  console.log('  ✓ list_templates.sql');
}

// Run the generation
generateTemplates();
