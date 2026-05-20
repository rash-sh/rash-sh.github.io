---
title: kernel_blacklist
weight: 5091
indent: true
---

{% raw %}
# kernel_blacklist

Manage kernel module blacklist entries.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type   | Values            | Description                                                                                                                                         |
|----------------|----------|--------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| blacklist_file |          | string |                   | Path to the blacklist file. If not specified, `/etc/modprobe.d/rash-blacklist.conf` is used. **[default: `"/etc/modprobe.d/rash-blacklist.conf"`]** |
| name           | true     | string |                   | Name of kernel module to blacklist.                                                                                                                 |
| state          |          | string | present<br>absent | Whether the module should be blacklisted or not. **[default: `"present"`]**                                                                         |

## Examples

```yaml
- name: Blacklist problematic module
  kernel_blacklist:
    name: nouveau
    state: present

- name: Blacklist multiple modules
  kernel_blacklist:
    name: "{{ item }}"
    state: present
  loop:
    - b43
    - ssb

- name: Remove from blacklist
  kernel_blacklist:
    name: nouveau
    state: absent

- name: Blacklist with custom file
  kernel_blacklist:
    name: floppy
    state: present
    blacklist_file: /etc/modprobe.d/no-floppy.conf
```

{% endraw %}