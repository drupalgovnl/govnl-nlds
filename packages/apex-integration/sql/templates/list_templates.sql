-- List Templates for DICTU Design System
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
