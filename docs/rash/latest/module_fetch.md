---
title: fetch
weight: 5480
indent: true
---

{% raw %}
# fetch

This module copies a file from a source path to a local destination path.
Useful for retrieving files such as configurations, logs, and backups.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values | Description                                                                                                                                                             |
|-------------------|----------|---------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| dest              | true     | string  |        | The destination path where the file should be saved. If `flat` is false and dest ends with `/`, the file is saved preserving the source directory structure under dest. |
| fail_on_missing   |          | boolean |        | If true, the task will fail when the source file is missing. If false, a warning is printed and the task succeeds with changed=false. **[default: `true`]**             |
| flat              |          | boolean |        | If true, stores the file directly at dest without hostname-based subdirectory structure. **[default: `false`]**                                                         |
| src               | true     | string  |        | The file to fetch from the source path.                                                                                                                                 |
| validate_checksum |          | boolean |        | Whether to validate that the source and destination file checksums match after copy. **[default: `true`]**                                                              |

## Examples

```yaml
- name: Fetch configuration file
  fetch:
    src: /etc/app/config.yaml
    dest: /backup/config.yaml
    flat: true

- name: Fetch logs for analysis
  fetch:
    src: /var/log/app.log
    dest: /backup/logs/
    fail_on_missing: false

- name: Fetch with checksum validation
  fetch:
    src: /etc/app/config.yaml
    dest: /backup/config.yaml
    flat: true
    validate_checksum: true
```

{% endraw %}