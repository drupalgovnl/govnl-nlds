-- Region Templates for DICTU Design System
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
