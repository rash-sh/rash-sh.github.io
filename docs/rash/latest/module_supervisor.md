---
title: supervisor
weight: 6560
indent: true
---

{% raw %}
# supervisor

Manage Supervisor process control daemon programs.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                                      | Description                                                        |
|----------------|----------|---------|---------------------------------------------|--------------------------------------------------------------------|
| autorestart    |          | string  | True<br>False<br>Unexpected                 | Whether the program should auto-restart on exit.                   |
| autostart      |          | boolean |                                             | Whether the program should auto-start with supervisord.            |
| command        |          | string  |                                             | Command to run for the program.                                    |
| config_dir     |          | string  |                                             | Path to supervisor config directory.                               |
| enabled        |          | boolean |                                             | Whether the program should be enabled (have a config file) or not. |
| environment    |          | object  |                                             | Environment variables for the program.                             |
| name           | true     | string  |                                             | Program name to manage.                                            |
| state          |          | string  | reloaded<br>restarted<br>started<br>stopped | State of the program.                                              |
| stderr_logfile |          | string  |                                             | Path to stderr log file.                                           |
| stdout_logfile |          | string  |                                             | Path to stdout log file.                                           |
| user           |          | string  |                                             | User to run the program as.                                        |

## Example

```yaml
- name: Start myapp program
  supervisor:
    name: myapp
    state: started

- name: Stop myapp program
  supervisor:
    name: myapp
    state: stopped

- name: Restart myapp program
  supervisor:
    name: myapp
    state: restarted

- name: Enable myapp program with command
  supervisor:
    name: myapp
    command: /usr/bin/myapp --port 8080
    state: started
    enabled: true
    user: appuser
    autostart: true
    autorestart: true
    stdout_logfile: /var/log/myapp stdout.log
    stderr_logfile: /var/log/myapp stderr.log

- name: Disable myapp program
  supervisor:
    name: myapp
    enabled: false

- name: Start myapp with environment variables
  supervisor:
    name: myapp
    command: /usr/bin/myapp
    state: started
    environment:
      PORT: "8080"
      NODE_ENV: production
```

{% endraw %}