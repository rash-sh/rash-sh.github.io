---
title: modprobe
weight: 5760
indent: true
---

{% raw %}
# modprobe

Load or unload kernel modules.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type   | Values                        | Description                                                                                                                                |
|------------|----------|--------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| name       | true     | string |                               | Name of kernel module to manage.                                                                                                           |
| params     |          | string |                               | Module parameters. **[default: `""`]**                                                                                                     |
| persistent |          | string | disabled<br>absent<br>present | Persistency between reboots for configured module. Creates files in /etc/modules-load.d/ and /etc/modprobe.d/. **[default: `"disabled"`]** |
| state      |          | string | present<br>absent             | Whether the module should be present or absent. **[default: `"present"`]**                                                                 |

## Examples

```yaml
- name: Load overlay module for Docker
  modprobe:
    name: overlay
    state: present

- name: Load br_netfilter with parameters
  modprobe:
    name: br_netfilter
    params: nf_conntrack_brnetfilter=1
    state: present

- name: Ensure wireguard is loaded at boot
  modprobe:
    name: wireguard
    state: present
    persistent: present

- name: Unload a module
  modprobe:
    name: dummy
    state: absent
```

{% endraw %}