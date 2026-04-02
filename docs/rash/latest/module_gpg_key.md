---
title: gpg_key
weight: 5410
indent: true
---

{% raw %}
# gpg_key

Manage GPG keys for package verification and signing.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                          | Description                                                                               |
|-----------|----------|---------|-------------------------------------------------|-------------------------------------------------------------------------------------------|
| data      |          | string  |                                                 | The GPG key data as a string (for importing directly).                                    |
| file      |          | string  |                                                 | Path to a file containing the GPG key.                                                    |
| gpg_home  |          | string  |                                                 | Custom GPG home directory.                                                                |
| key_id    |          | string  |                                                 | The key ID or fingerprint of the GPG key.                                                 |
| keyserver |          | string  |                                                 | The keyserver to use for fetching the key. **[default: `"keys.openpgp.org"`]**            |
| state     |          | string  | present<br>absent                               | Whether the key should be present or absent. **[default: `"present"`]**                   |
| trust     |          | string  | unknown<br>none<br>marginal<br>full<br>ultimate | The trust level to set for the key. Valid values: unknown, none, marginal, full, ultimate |
| use_gpg1  |          | boolean |                                                 | Use the GnuPG 1.x binary instead of the default.                                          |

## Examples

```yaml
- name: Import a GPG key from a keyserver
  gpg_key:
    key_id: ABC123DEF456
    keyserver: keys.openpgp.org
    state: present

- name: Import a GPG key from inline data
  gpg_key:
    data: |
      -----BEGIN PGP PUBLIC KEY BLOCK-----
      ...
      -----END PGP PUBLIC KEY BLOCK-----
    state: present

- name: Import a GPG key from a file
  gpg_key:
    file: /path/to/key.asc
    state: present

- name: Remove a GPG key
  gpg_key:
    key_id: ABC123DEF456
    state: absent

- name: Set trust level for a key
  gpg_key:
    key_id: ABC123DEF456
    trust: ultimate
    state: present

- name: Import key with custom GPG homedir
  gpg_key:
    key_id: ABC123DEF456
    keyserver: keys.openpgp.org
    gpg_home: /root/.gnupg
    state: present
```

{% endraw %}