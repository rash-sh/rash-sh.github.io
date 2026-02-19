---
title: cron
weight: 6110
indent: true
---

{% raw %}
# cron

Manage cron jobs and crontab entries.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                                                               | Description                                                                                                                          |
|--------------|----------|---------|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| cron_file    |          | string  |                                                                      | If specified, uses this file instead of an individual user's crontab. Relative paths are interpreted with respect to /etc/cron.d.    |
| day          |          | string  |                                                                      | Day of the month the job should run (1-31, *, */2, etc). **[default: `"*"`]**                                                        |
| disabled     |          | boolean |                                                                      | If the job should be disabled (commented out) in the crontab. **[default: `false`]**                                                 |
| hour         |          | string  |                                                                      | Hour when the job should run (0-23, *, */2, etc). **[default: `"*"`]**                                                               |
| job          |          | string  |                                                                      | The command to execute. Required if state=present.                                                                                   |
| minute       |          | string  |                                                                      | Minute when the job should run (0-59, *, */2, etc). **[default: `"*"`]**                                                             |
| month        |          | string  |                                                                      | Month of the year the job should run (1-12, JAN-DEC, *, etc). **[default: `"*"`]**                                                   |
| name         | true     | string  |                                                                      | Description of the crontab entry.                                                                                                    |
| special_time |          | string  | annually<br>daily<br>hourly<br>monthly<br>reboot<br>weekly<br>yearly | Special time specification (hourly, daily, weekly, monthly, reboot, etc). Cannot be combined with minute, hour, day, month, weekday. |
| state        |          | string  | absent<br>present                                                    | Whether the job should be present or absent. **[default: `"present"`]**                                                              |
| user         |          | string  |                                                                      | The specific user whose crontab should be modified. Defaults to current user.                                                        |
| weekday      |          | string  |                                                                      | Day of the week the job should run (0-6, SUN-SAT, *, etc). **[default: `"*"`]**                                                      |

## Examples

```yaml
- cron:
    name: daily-backup
    minute: "0"
    hour: "2"
    job: /usr/local/bin/backup.sh
    state: present

- cron:
    name: weekly-cleanup
    special_time: weekly
    job: /usr/local/bin/cleanup.sh

- cron:
    name: old-job
    state: absent

- cron:
    name: hourly-check
    special_time: hourly
    job: /usr/local/bin/check.sh
    disabled: true
```

{% endraw %}