---
title: xml
weight: 5198
indent: true
---

{% raw %}
# xml

Manage settings in XML configuration files.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values            | Description                                                                                     |
|--------------|----------|---------|-------------------|-------------------------------------------------------------------------------------------------|
| path         | true     | string  |                   | The absolute path to the XML file to modify.                                                    |
| xpath        | true     | string  |                   | The xpath expression to select elements. Supports simple path notation like /config/server/port |
| value        |          | string  |                   | The value to set for the element or attribute. Required if state=present.                       |
| attribute    |          | string  |                   | The attribute name to modify. If not specified, modifies element text content.                  |
| state        |          | string  | present<br>absent | Whether the element/attribute should exist or not. **[default: `"present"`]**                   |
| pretty_print |          | boolean |                   | Format the output XML with proper indentation. **[default: `true`]**                            |
| backup       |          | boolean |                   | Create a backup file before modifying. **[default: `false`]**                                   |

## Examples

```yaml
- xml:
    path: /etc/app/config.xml
    xpath: /config/server/port
    value: "8080"

- xml:
    path: /etc/app/config.xml
    xpath: /config/database
    attribute: timeout
    value: "30"

- xml:
    path: /etc/app/config.xml
    xpath: /config/debug
    state: absent

- xml:
    path: /etc/app/config.xml
    xpath: /config/logging/level
    value: "INFO"
    pretty_print: true
```

{% endraw %}