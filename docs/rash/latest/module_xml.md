---
title: xml
weight: 6850
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
| attribute    |          | string  |                   | The attribute name to modify. If not specified, modifies element text content.                  |
| backup       |          | boolean |                   | Create a backup file before modifying. **[default: `false`]**                                   |
| path         | true     | string  |                   | The absolute path to the XML file to modify.                                                    |
| pretty_print |          | boolean |                   | Format the output XML with proper indentation. **[default: `true`]**                            |
| state        |          | string  | present<br>absent | Whether the element/attribute should exist or not. **[default: `"present"`]**                   |
| value        |          | string  |                   | The value to set for the element or attribute. Required if state=present.                       |
| xpath        | true     | string  |                   | The xpath expression to select elements. Supports simple path notation like /config/server/port |

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