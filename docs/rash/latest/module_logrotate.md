---
title: logrotate
weight: 5700
indent: true
---

{% raw %}
# logrotate

Manage log rotation configurations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                               | Description                                                                                                       |
|----------------|----------|---------|--------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| compress       |          | boolean |                                      | Compress rotated log files. **[default: `false`]**                                                                |
| config_file    |          | string  |                                      | Custom configuration file path (default: /etc/logrotate.d/<name>).                                                |
| copy           |          | boolean |                                      | Copy log file before truncating instead of moving. **[default: `false`]**                                         |
| copytruncate   |          | boolean |                                      | Truncate original log file in place instead of moving. **[default: `false`]**                                     |
| create         |          | string  |                                      | Create new log file after rotation with specified permissions. Format: mode owner group (e.g., "0644 root root"). |
| dateext        |          | boolean |                                      | Use date as suffix for rotated files. **[default: `false`]**                                                      |
| dateformat     |          | string  |                                      | Format for date suffix (strftime format).                                                                         |
| delaycompress  |          | boolean |                                      | Delay compression until the next rotation cycle. **[default: `false`]**                                           |
| frequency      |          | string  | daily<br>weekly<br>monthly<br>yearly | How often to rotate logs. **[default: `"daily"`]**                                                                |
| missingok      |          | boolean |                                      | Don't report errors if log file is missing. **[default: `false`]**                                                |
| notifempty     |          | boolean |                                      | Don't rotate empty log files. **[default: `false`]**                                                              |
| path           | true     |         |                                      | Path to log file(s). Can be a single path or a list of paths.                                                     |
| postrotate     |          | string  |                                      | Script to run after rotation.                                                                                     |
| prerotate      |          | string  |                                      | Script to run before rotation.                                                                                    |
| rotate         |          | integer |                                      | Number of rotated files to keep.                                                                                  |
| shared_scripts |          | boolean |                                      | Execute prerotate/postrotate scripts only once for all matched files. **[default: `false`]**                      |
| sharedscripts  |          | boolean |                                      | Don't rotate if sharedscripts is set and the script fails. **[default: `false`]**                                 |
| size           |          | string  |                                      | Rotate when file exceeds this size (e.g., "100M", "1G").                                                          |
| state          |          | string  | present<br>absent                    | Whether the configuration should be present or absent. **[default: `"present"`]**                                 |

## Examples

```yaml
- name: Configure log rotation for app
  logrotate:
    path: /var/log/app.log
    frequency: daily
    rotate: 7
    compress: true
    missingok: true
    notifempty: true

- name: Configure log rotation for multiple log files
  logrotate:
    path:
      - /var/log/app1.log
      - /var/log/app2.log
    frequency: weekly
    rotate: 4
    compress: true
    delaycompress: true

- name: Configure log rotation with size limit
  logrotate:
    path: /var/log/large-app.log
    size: 100M
    rotate: 5
    compress: true

- name: Remove log rotation configuration
  logrotate:
    path: /var/log/old-app.log
    state: absent
```

{% endraw %}