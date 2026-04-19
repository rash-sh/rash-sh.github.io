---
title: fail2ban
weight: 5440
indent: true
---

{% raw %}
# fail2ban

Manage Fail2ban intrusion prevention system.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                            |
|-----------|----------|---------|-------------------|------------------------------------------------------------------------|
| action    |          | string  |                   | Action to take on ban (e.g., `%(action_)s`, `%(action_mwl)s`).         |
| bantime   |          | integer |                   | Ban duration in seconds. **[default: 600]**                            |
| enabled   |          | boolean |                   | Whether the jail should be enabled or disabled. **[default: `true`]**  |
| filter    |          | string  |                   | Filter name to use for this jail.                                      |
| findtime  |          | integer |                   | Time window in seconds for counting retries. **[default: 600]**        |
| logpath   |          | string  |                   | Log file path to monitor.                                              |
| maxretry  |          | integer |                   | Maximum number of retries before ban. **[default: 5]**                 |
| name      | true     | string  |                   | Jail name (required).                                                  |
| port      |          | string  |                   | Port(s) to protect (e.g., ssh, http, https, or 22, 80, 443).           |
| state     |          | string  | present<br>absent | Whether the jail should be present or absent. **[default: `present`]** |

## Examples

```yaml
- name: Create SSH jail
  fail2ban:
    name: sshd
    state: present
    enabled: true
    port: ssh
    filter: sshd
    logpath: /var/log/auth.log
    maxretry: 5
    findtime: 600
    bantime: 3600

- name: Create nginx HTTP auth jail
  fail2ban:
    name: nginx-http-auth
    state: present
    enabled: true
    port: http,https
    filter: nginx-http-auth
    logpath: /var/log/nginx/error.log
    maxretry: 3

- name: Disable a jail
  fail2ban:
    name: sshd
    enabled: false

- name: Remove a jail
  fail2ban:
    name: sshd
    state: absent
```

{% endraw %}