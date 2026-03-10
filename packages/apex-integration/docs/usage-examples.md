# DICTU Design System - Usage Examples for APEX

## Complete Page Example

```sql
-- Create a complete page using DICTU components

-- Page: Dashboard
-- Region: Statistics Card
CREATE REGION
  TEMPLATE: DICTU Card
  TEMPLATE OPTIONS: Elevated
  TITLE: Key Statistics
  SOURCE:
    SELECT
      total_users,
      active_sessions,
      pending_requests
    FROM dashboard_stats;

-- Button: Refresh Data
CREATE BUTTON
  POSITION: Region Header
  TEMPLATE: DICTU Button - Primary Action
  LABEL: Refresh
  ACTION: Submit Page

-- Button: Export
CREATE BUTTON
  POSITION: Region Header
  TEMPLATE: DICTU Button - Secondary Action
  LABEL: Export
  ACTION: Download
```

## Interactive Report with DICTU Buttons

```sql
-- Add DICTU action buttons to Interactive Report

SELECT
  emp_name,
  emp_email,
  '<button class="dictu-button dictu-button--subtle" onclick="editEmployee(' || emp_id || ')">Edit</button>' as actions
FROM employees;
```

## Dynamic Form with DICTU Styling

```html
<!-- In region source -->
<div class="dictu-form-field">
  <label for="P1_NAME" class="dictu-form-field__label">Name</label>
  <div class="dictu-form-field__input">#P1_NAME#</div>
</div>

<div class="dictu-form-field">
  <label for="P1_EMAIL" class="dictu-form-field__label">Email</label>
  <div class="dictu-form-field__input">#P1_EMAIL#</div>
</div>
```

## PL/SQL Rendering

```sql
-- Dynamic region source
DECLARE
  l_cards t_cards;
BEGIN
  -- Get data
  SELECT card_title, card_content
  BULK COLLECT INTO l_cards
  FROM my_cards;

  -- Render cards
  FOR i IN 1..l_cards.COUNT LOOP
    dictu_apex_template_mgr.render_card(
      p_title => l_cards(i).title,
      p_content => l_cards(i).content,
      p_style => 'elevated'
    );
  END LOOP;
END;
```

## More Examples

See full code examples in the repository.
