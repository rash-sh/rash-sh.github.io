---
title: cronvar
weight: 5310
indent: true
---

{% raw %}
# cronvar

Manage variables in crontab files.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                                                    |
|-----------|----------|--------|-------------------|------------------------------------------------------------------------------------------------|
| name      | true     | string |                   | Variable name (e.g., SHELL, PATH, MAILTO).                                                     |
| state     |          | string | absent<br>present | Whether the variable should be present or absent. **[default: `"present"`]**                   |
| user      |          | string |                   | The specific user whose crontab should be modified. Defaults to system crontab (/etc/crontab). |
| value     |          | string |                   | Variable value. Required if state=present.                                                     |

{$include_doc /// ## Examples
///
/// ```yaml
/// - cronvar:
///     name: PATH
///     value: /usr/local/bin:/usr/bin:/bin
///
/// - cronvar:
///     name: MAILTO
///     value: admin@example.com
///     user: root
///
/// - cronvar:
///     name: SHELL
///     value: /bin/bash
///
/// - cronvar:
///     name: OLD_VAR
///     state: absent
/// ```}

{% endraw %}