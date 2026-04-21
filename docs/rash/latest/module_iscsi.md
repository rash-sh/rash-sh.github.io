---
title: iscsi
weight: 5780
indent: true
---

{% raw %}
# iscsi

Manage iSCSI target connections using iscsiadm.

This module manages iSCSI (Internet Small Computer System Interface) storage
connections. It supports target discovery, login/logout, CHAP authentication,
and session management.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                       | Description                                                                                                                             |
|-----------|----------|---------|----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| discover  |          | boolean |                                              | Whether to perform target discovery on the portal. **[default: `true`]**                                                                |
| lun       |          | integer |                                              | LUN number to reference.                                                                                                                |
| node      |          | string  |                                              | IQN of the initiator node name. When set, configures the initiator name.                                                                |
| password  |          | string  |                                              | CHAP authentication password.                                                                                                           |
| portal    | true     | string  |                                              | Portal IP address, optionally with port (e.g., 192.168.1.100 or 192.168.1.100:3260). **[default: `3260` if no port specified]**         |
| state     |          | string  | present<br>absent<br>logged_in<br>logged_out | Desired state of the iSCSI target connection. **[default: `"present"`]**                                                                |
| target    |          | string  |                                              | IQN of the iSCSI target (e.g., iqn.2024-01.com.example:storage.target01). Required unless `discover` is true without a specific target. |
| username  |          | string  |                                              | CHAP authentication username.                                                                                                           |

## Examples

```yaml
- name: Discover and login to iSCSI target
  iscsi:
    portal: 192.168.1.100
    target: iqn.2024-01.com.example:storage.target01
    state: present

- name: Login with CHAP authentication
  iscsi:
    portal: 192.168.1.100:3260
    target: iqn.2024-01.com.example:storage.target01
    state: logged_in
    username: chapuser
    password: chapsecret

- name: Discover targets on a portal
  iscsi:
    portal: 192.168.1.100
    discover: true
    state: present

- name: Logout from iSCSI target
  iscsi:
    portal: 192.168.1.100
    target: iqn.2024-01.com.example:storage.target01
    state: logged_out

- name: Remove iSCSI node record
  iscsi:
    portal: 192.168.1.100
    target: iqn.2024-01.com.example:storage.target01
    state: absent
```

{% endraw %}