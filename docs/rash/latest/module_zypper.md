---
title: zypper
weight: 6160
indent: true
---

{% raw %}
# zypper

Manage packages on openSUSE and SUSE Linux Enterprise Server.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter          | Required | Type    | Values                                              | Description                                                                                                                                                                                                                                                                                                                                              |
|--------------------|----------|---------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| disable_gpg_check  |          | boolean |                                                     | Whether to disable GPG signature checking. **[default: `false`]**                                                                                                                                                                                                                                                                                        |
| disable_recommends |          | boolean |                                                     | Whether to disable installing recommended packages. **[default: `false`]**                                                                                                                                                                                                                                                                               |
| executable         |          | string  |                                                     | Path of the binary to use. **[default: `"zypper"`]**                                                                                                                                                                                                                                                                                                     |
| extra_args         |          | string  |                                                     | Additional options to pass to zypper.                                                                                                                                                                                                                                                                                                                    |
| name               |          | array   |                                                     | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                                                                                  |
| state              |          | string  | absent<br>present<br>latest<br>installed<br>removed | Whether to install (`present`, `installed`), remove (`absent`, `removed`), or ensure latest version (`latest`). `present` and `installed` will simply ensure that a desired package is installed. `absent` and `removed` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| type               |          | string  | package<br>pattern<br>patch<br>srcpackage           | The type of package to operate on. **[default: `"package"`]**                                                                                                                                                                                                                                                                                            |
| update_cache       |          | boolean |                                                     | Whether or not to refresh the package index. This can be run as part of a package installation or as a separate step. **[default: `false`]**                                                                                                                                                                                                             |

## Example

```yaml
- name: Update package cache
  zypper:
    update_cache: yes

- name: Install packages
  zypper:
    name:
      - curl
      - jq
      - postgresql-client
    state: present

- name: Install specific version
  zypper:
    name: nginx=1.24.0
    state: present

- name: Remove package
  zypper:
    name: vim
    state: absent

- name: Install a pattern
  zypper:
    name: devel_basis
    type: pattern
    state: present

- name: Update all packages
  zypper:
    name: '*'
    state: latest
```

{% endraw %}