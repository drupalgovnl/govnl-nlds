-- Button Templates for DICTU Design System
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
