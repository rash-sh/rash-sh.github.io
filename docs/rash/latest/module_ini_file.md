---
title: ini_file
weight: 6200
indent: true
---

{% raw %}
# ini_file

Manage settings in INI-style configuration files.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter       | Required | Type    | Values            | Description                                                                                       |
|-----------------|----------|---------|-------------------|---------------------------------------------------------------------------------------------------|
| no_extra_spaces |          | boolean |                   | Remove spaces around the = sign. **[default: `false`]**                                           |
| option          | true     | string  |                   | The option (key) name to modify.                                                                  |
| path            | true     | string  |                   | The absolute path to the INI file to modify.                                                      |
| section         |          | string  |                   | The section name to modify. If not specified, the option will be placed before the first section. |
| state           |          | string  | present<br>absent | Whether the option should exist or not. **[default: `"present"`]**                                |
| value           |          | string  |                   | The value to set for the option. Required if state=present.                                       |

## Examples

```yaml
- ini_file:
    path: /etc/app/config.ini
    section: database
    option: host
    value: localhost
    state: present

- ini_file:
    path: /etc/app/config.ini
    section: database
    option: port
    value: "5432"

- ini_file:
    path: /etc/app/config.ini
    section: database
    option: deprecated_option
    state: absent

- ini_file:
    path: /etc/app/config.ini
    section: cache
    option: enabled
    value: "true"
    no_extra_spaces: true
```

{% endraw %}