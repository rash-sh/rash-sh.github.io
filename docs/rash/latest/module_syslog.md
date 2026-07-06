---
title: syslog
weight: 5177
indent: true
---

{% raw %}
# syslog

Send messages to the system syslog daemon.

This module enables scripts to log messages to the system log daemon,
useful for operational logging, debugging, and audit trails in
container/IoT environments.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type    | Values                                                                                                                                                                             | Description                                                                          |
|-----------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| msg       | true     | string  |                                                                                                                                                                                    | The message to log to syslog (required).                                             |
| facility  |          | string  | auth<br>authpriv<br>cron<br>daemon<br>ftp<br>kern<br>local0<br>local1<br>local2<br>local3<br>local4<br>local5<br>local6<br>local7<br>lpr<br>mail<br>news<br>syslog<br>user<br>uucp | The syslog facility to use.                                                          |
| priority  |          | string  | debug<br>info<br>notice<br>warning<br>error<br>crit<br>alert<br>emerg                                                                                                              | The priority/severity level of the message.                                          |
| ident     |          | string  |                                                                                                                                                                                    | Program identifier to use in syslog messages. Defaults to the script name or "rash". |
| pid       |          | boolean |                                                                                                                                                                                    | Include PID in the log message.                                                      |

## Example

```yaml
- name: Log a simple info message
  syslog:
    msg: "Script started"

- name: Log with custom facility and priority
  syslog:
    msg: "Critical system error"
    facility: local0
    priority: error

- name: Log with custom identifier
  syslog:
    msg: "Container startup complete"
    ident: myapp

- name: Log daemon message with PID
  syslog:
    msg: "Service heartbeat"
    facility: daemon
    priority: info
    ident: myservice
    pid: true
```

{% endraw %}