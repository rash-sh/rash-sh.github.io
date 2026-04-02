---
title: json_file
weight: 5530
indent: true
---

{% raw %}
# json_file

Manage settings in JSON files.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                          |
|-----------|----------|---------|-------------------|----------------------------------------------------------------------|
| backup    |          | boolean |                   | Create a backup of the file before modifying. **[default: `false`]** |
| key       | true     | string  |                   | The JSON key path using dot notation (e.g., `server.port`).          |
| path      | true     | string  |                   | The absolute path to the JSON file to modify.                        |
| state     |          | string  | present<br>absent | Whether the key should exist or not. **[default: `"present"`]**      |
| value     |          |         |                   | The value to set for the key. Required if state=present.             |

## Examples

```yaml
- json_file:
    path: /etc/app/config.json
    key: server.port
    value: 8080

- json_file:
    path: /etc/app/config.json
    key: database.connection.timeout
    value: 30

- json_file:
    path: /etc/app/config.json
    key: debug.enabled
    state: absent

- json_file:
    path: /etc/app/config.json
    key: server.host
    value: "0.0.0.0"
    backup: true
```

{% endraw %}