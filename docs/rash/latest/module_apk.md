---
title: apk
weight: 6010
indent: true
---

{% raw %}
# apk

Manage packages with the apk package manager, which is used by Alpine Linux.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                                        |
|--------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| executable   |          | string  |                             | Path of the binary to use. **[default: `"apk"`]**                                                                                                                                                                                                                                                  |
| extra_args   |          | string  |                             | Additional options to pass to apk.                                                                                                                                                                                                                                                                 |
| name         |          | array   |                             | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                            |
| state        |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired package is installed. `absent` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| update_cache |          | boolean |                             | Whether or not to refresh the package index. This can be run as part of a package installation or as a separate step. **[default: `false`]**                                                                                                                                                       |
| upgrade      |          | boolean |                             | Whether or not to upgrade all packages to the latest version available. **[default: `false`]**                                                                                                                                                                                                     |

## Example

```yaml
- name: Update package cache
  apk:
    update_cache: yes

- name: Install packages
  apk:
    name:
      - curl
      - jq
      - postgresql-client
    state: present

- name: Install specific version
  apk:
    name: nginx=1.24.0-r0
    state: present

- name: Remove package
  apk:
    name: vim
    state: absent

- name: Update all packages to latest versions
  apk:
    upgrade: yes
```

{% endraw %}