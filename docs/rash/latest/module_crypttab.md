---
title: crypttab
weight: 5230
indent: true
---

{% raw %}
# crypttab

Manage encrypted filesystem entries in /etc/crypttab.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type   | Values            | Description                                                                                          |
|----------------|----------|--------|-------------------|------------------------------------------------------------------------------------------------------|
| backing_device |          | string |                   | Device containing encrypted data. Required when state=present.                                       |
| name           | true     | string |                   | Name of the encrypted device mapping.                                                                |
| opts           |          | string |                   | Options for cryptsetup.                                                                              |
| password       |          | string |                   | Password/keyfile for decryption. Use 'none' for interactive password prompt. **[default: `"none"`]** |
| path           |          | string |                   | Path to the crypttab file. **[default: `"/etc/crypttab"`]**                                          |
| state          |          | string | present<br>absent | Whether the entry should exist or not. **[default: `"present"`]**                                    |

## Examples

```yaml
- name: Add encrypted swap partition
  crypttab:
    name: cryptswap
    backing_device: /dev/sda2
    password: /dev/urandom
    opts: swap
    state: present

- name: Add encrypted data volume with keyfile
  crypttab:
    name: cryptdata
    backing_device: /dev/sdb1
    password: /root/keyfile
    opts: luks
    state: present

- name: Add encrypted volume without password (will be prompted)
  crypttab:
    name: cryptdata
    backing_device: /dev/sdb1
    password: none
    state: present

- name: Remove encrypted volume entry
  crypttab:
    name: cryptdata
    state: absent

- name: Use custom crypttab file
  crypttab:
    name: cryptdata
    backing_device: /dev/sdb1
    password: /root/keyfile
    state: present
    path: /etc/crypttab.custom
```

{% endraw %}