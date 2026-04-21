---
title: luks
weight: 5980
indent: true
---

{% raw %}
# luks

Manage LUKS (Linux Unified Key Setup) encrypted volumes.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                                | Description                                                                                          |
|------------|----------|---------|---------------------------------------|------------------------------------------------------------------------------------------------------|
| cipher     |          | string  |                                       | Encryption cipher algorithm. **[default: `"aes-xts-plain64"`]**                                      |
| device     | true     | string  |                                       | Device path to manage (e.g., /dev/sdb1).                                                             |
| key_size   |          | integer |                                       | Key size in bits. **[default: `512`]**                                                               |
| keyfile    |          | string  |                                       | Path to keyfile for authentication. Alternative to passphrase.                                       |
| luks_type  |          | string  |                                       | LUKS type (luks1 or luks2). **[default: `"luks2"`]**                                                 |
| name       |          | string  |                                       | Mapper name for opened LUKS container. Required when state=opened or state=closed.                   |
| passphrase |          | string  |                                       | Encryption passphrase. Required when state=present without keyfile, or state=opened without keyfile. |
| state      |          | string  | present<br>absent<br>opened<br>closed | Desired state of the LUKS container. **[default: `"present"`]**                                      |

## Examples

```yaml
- name: Create LUKS container on device
  luks:
    device: /dev/sdb1
    passphrase: supersecret
    state: present

- name: Create LUKS container with keyfile
  luks:
    device: /dev/sdb1
    keyfile: /root/luks-key
    state: present

- name: Create LUKS container with custom cipher and key size
  luks:
    device: /dev/sdb1
    passphrase: supersecret
    cipher: aes-xts-plain64
    key_size: 512
    state: present

- name: Open LUKS container
  luks:
    device: /dev/sdb1
    passphrase: supersecret
    name: cryptdata
    state: opened

- name: Close LUKS container
  luks:
    device: /dev/sdb1
    name: cryptdata
    state: closed

- name: Remove LUKS header (destroy container)
  luks:
    device: /dev/sdb1
    state: absent
```

{% endraw %}