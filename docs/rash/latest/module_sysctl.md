---
title: sysctl
weight: 6310
indent: true
---

{% raw %}
# sysctl

Manage kernel parameters via sysctl.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values            | Description                                                                                  |
|--------------|----------|---------|-------------------|----------------------------------------------------------------------------------------------|
| ignoreerrors |          | boolean |                   | Use this option to ignore errors about unknown keys. **[default: `false`]**                  |
| name         | true     | string  |                   | The dot-separated path (key) specifying the sysctl variable.                                 |
| reload       |          | boolean |                   | If true, performs a sysctl -p if the sysctl_file is updated. **[default: `true`]**           |
| state        |          | string  | present<br>absent | Whether the entry should be present or absent in the sysctl file. **[default: `"present"`]** |
| sysctl_file  |          | string  |                   | Specifies the absolute path to sysctl.conf. **[default: `"/etc/sysctl.conf"`]**              |
| value        |          | string  |                   | Desired value of the sysctl key. Required if state=present.                                  |

## Examples

```yaml
- name: Enable IP forwarding
  sysctl:
    name: net.ipv4.ip_forward
    value: "1"
    state: present
    reload: true

- name: Set vm.swappiness
  sysctl:
    name: vm.swappiness
    value: "10"

- name: Remove kernel.panic entry
  sysctl:
    name: kernel.panic
    state: absent

- name: Set kernel parameter in custom file
  sysctl:
    name: net.core.somaxconn
    value: "65535"
    sysctl_file: /etc/sysctl.d/99-custom.conf
    reload: false
```

{% endraw %}