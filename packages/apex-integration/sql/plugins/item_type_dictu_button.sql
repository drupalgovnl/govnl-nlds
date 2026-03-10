-- DICTU Button Plugin for Oracle APEX
-- @license EUPL-1.2
-- Plugin Type: Item
--
-- This plugin allows APEX developers to use DICTU Design System buttons
-- as native APEX item types with full integration
--
-- Features:
-- - Multiple button styles (primary, secondary, subtle)
-- - Size options (small, medium, large)
-- - Icon support
-- - Full APEX integration (page items, dynamic actions)

PROMPT Installing DICTU Button Plugin...

DECLARE
  l_plugin_id NUMBER;
BEGIN
  -- Create the plugin
  l_plugin_id := wwv_flow_api.create_plugin(
    p_plugin_type => 'ITEM TYPE',
    p_theme_id => NULL,
    p_name => 'NL.DICTU.BUTTON',
    p_display_name => 'DICTU Button',
    p_supported_ui_types => 'DESKTOP:MOBILE',
    p_supported_component_types => 'APEX_APPLICATION_PAGE_ITEMS',
    p_image_prefix => NULL,
    p_plsql_code => q'#
-- Render function for DICTU Button plugin
FUNCTION render_dictu_button(
  p_item IN apex_plugin.t_item,
  p_plugin IN apex_plugin.t_plugin,
  p_param IN apex_plugin.t_item_render_param,
  p_result IN OUT NOCOPY apex_plugin.t_item_render_result
) RETURN apex_plugin.t_item_render_result IS
  l_button_style VARCHAR2(100);
  l_button_size VARCHAR2(20);
  l_button_class VARCHAR2(4000);
  l_icon_class VARCHAR2(200);
  l_icon_position VARCHAR2(20);
  l_button_id VARCHAR2(200);
BEGIN
  -- Get plugin attributes
  l_button_style := NVL(p_item.attribute_01, 'primary-action');
  l_button_size := NVL(p_item.attribute_02, 'md');
  l_icon_class := p_item.attribute_03;
  l_icon_position := NVL(p_item.attribute_04, 'start');

  -- Build CSS classes
  l_button_class := 'dictu-button dictu-button--' || l_button_style;

  IF l_button_size != 'md' THEN
    l_button_class := l_button_class || ' dictu-button--' || l_button_size;
  END IF;

  IF p_item.element_css_classes IS NOT NULL THEN
    l_button_class := l_button_class || ' ' || p_item.element_css_classes;
  END IF;

  -- Add CSS file
  apex_css.add_file(
    p_name => 'dictu-apex-theme',
    p_directory => p_plugin.file_prefix,
    p_version => NULL
  );

  l_button_id := apex_escape.html_attribute(p_item.name);

  -- Render the button
  sys.htp.prn('<button');
  sys.htp.prn(' type="button"');
  sys.htp.prn(' id="' || l_button_id || '"');
  sys.htp.prn(' class="' || apex_escape.html_attribute(l_button_class) || '"');

  IF p_item.element_attributes IS NOT NULL THEN
    sys.htp.prn(' ' || p_item.element_attributes);
  END IF;

  sys.htp.prn('>');

  -- Icon before text
  IF l_icon_class IS NOT NULL AND l_icon_position = 'start' THEN
    sys.htp.prn('<span class="dictu-button__icon">');
    sys.htp.prn('<span class="' || apex_escape.html_attribute(l_icon_class) || '"></span>');
    sys.htp.prn('</span>');
  END IF;

  -- Button text
  sys.htp.prn('<span class="dictu-button__text">');
  sys.htp.prn(apex_escape.html(p_item.label));
  sys.htp.prn('</span>');

  -- Icon after text
  IF l_icon_class IS NOT NULL AND l_icon_position = 'end' THEN
    sys.htp.prn('<span class="dictu-button__icon">');
    sys.htp.prn('<span class="' || apex_escape.html_attribute(l_icon_class) || '"></span>');
    sys.htp.prn('</span>');
  END IF;

  sys.htp.prn('</button>');

  -- Set result properties
  p_result.is_navigable := TRUE;
  p_result.navigable_dom_id := l_button_id;

  RETURN p_result;

EXCEPTION
  WHEN OTHERS THEN
    apex_debug.error('Error in DICTU Button plugin: %s', SQLERRM);
    RAISE;
END render_dictu_button;
#',
    p_render_function => 'render_dictu_button',
    p_standard_attributes => 'VISIBLE:SESSION_STATE:READONLY:ESCAPE_OUTPUT:SOURCE:ELEMENT:WIDTH:LABEL',
    p_substitute_attributes => TRUE,
    p_version_identifier => '1.0.0',
    p_about_url => 'https://github.com/drupalgovnl/govnl-nlds'
  );

  -- Plugin Attribute 01: Button Style
  wwv_flow_api.create_plugin_attribute(
    p_plugin_id => l_plugin_id,
    p_attribute_scope => 'COMPONENT',
    p_attribute_sequence => 1,
    p_display_sequence => 10,
    p_attribute_type => 'SELECT_LIST',
    p_is_required => TRUE,
    p_default_value => 'primary-action',
    p_is_translatable => FALSE,
    p_attribute_label => 'Button Style',
    p_attribute_comment => 'Select the visual style of the button',
    p_lov_type => 'STATIC',
    p_lov_code => 'STATIC:Primary Action;primary-action,Secondary Action;secondary-action,Subtle;subtle,Danger;danger'
  );

  -- Plugin Attribute 02: Button Size
  wwv_flow_api.create_plugin_attribute(
    p_plugin_id => l_plugin_id,
    p_attribute_scope => 'COMPONENT',
    p_attribute_sequence => 2,
    p_display_sequence => 20,
    p_attribute_type => 'SELECT_LIST',
    p_is_required => TRUE,
    p_default_value => 'md',
    p_is_translatable => FALSE,
    p_attribute_label => 'Button Size',
    p_lov_type => 'STATIC',
    p_lov_code => 'STATIC:Small;sm,Medium;md,Large;lg'
  );

  -- Plugin Attribute 03: Icon CSS Classes
  wwv_flow_api.create_plugin_attribute(
    p_plugin_id => l_plugin_id,
    p_attribute_scope => 'COMPONENT',
    p_attribute_sequence => 3,
    p_display_sequence => 30,
    p_attribute_type => 'TEXT',
    p_is_required => FALSE,
    p_is_translatable => FALSE,
    p_attribute_label => 'Icon CSS Classes',
    p_attribute_comment => 'CSS classes for the icon (e.g., fa fa-home)'
  );

  -- Plugin Attribute 04: Icon Position
  wwv_flow_api.create_plugin_attribute(
    p_plugin_id => l_plugin_id,
    p_attribute_scope => 'COMPONENT',
    p_attribute_sequence => 4,
    p_display_sequence => 40,
    p_attribute_type => 'SELECT_LIST',
    p_is_required => TRUE,
    p_default_value => 'start',
    p_is_translatable => FALSE,
    p_attribute_label => 'Icon Position',
    p_lov_type => 'STATIC',
    p_lov_code => 'STATIC:Before Text;start,After Text;end',
    p_depending_on_attribute_id => 3,
    p_depending_on_has_to_exist => TRUE
  );

  COMMIT;

  DBMS_OUTPUT.PUT_LINE('✓ DICTU Button Plugin installed successfully');
  DBMS_OUTPUT.PUT_LINE('  Plugin ID: ' || l_plugin_id);

EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('✗ Error installing DICTU Button Plugin: ' || SQLERRM);
    ROLLBACK;
    RAISE;
END;
/
