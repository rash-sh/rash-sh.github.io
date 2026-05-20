---
title: at
weight: 5012
indent: true
---

{% raw %}
# at

Manage one-time scheduled jobs using the at daemon.

## Attributes

```yaml
check_mode:
  support: partial
  details: In check mode, the module reports what would change but does not actually schedule jobs.
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                                                                            |
|-----------|----------|---------|-------------------|------------------------------------------------------------------------------------------------------------------------|
| at_time   |          | string  |                   | When to execute the command (e.g., 'now + 1 hour', '10:30', 'teatime'). Required if state=present.                     |
| command   |          | string  |                   | The command to execute. Required if state=present.                                                                     |
| name      |          | string  |                   | A name for this job, used for identification and removal. If not specified, a name will be generated from the command. |
| state     |          | string  | absent<br>present | Whether the job should be present or absent. **[default: `"present"`]**                                                |
| unique    |          | boolean |                   | If true, prevent duplicate jobs with the same command. **[default: `false`]**                                          |

## Examples

```yaml
- name: Schedule cleanup in 1 hour
  at:
    command: /usr/local/bin/cleanup.sh
    at_time: now + 1 hour
    state: present

- name: Schedule backup at specific time
  at:
    command: /usr/local/bin/backup.sh
    at_time: "10:30"
    unique: true

- name: Remove a scheduled job by name
  at:
    name: cleanup-task
    state: absent

- name: Schedule command at a specific date/time
  at:
    command: /usr/local/bin/maintenance.sh
    at_time: "2024-12-25 03:00"
    name: christmas-maintenance
```

{% endraw %}