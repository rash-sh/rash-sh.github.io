---
title: opkg
weight: 5840
indent: true
---

{% raw %}
# opkg

Manage packages with the opkg package manager, which is used by OpenWrt.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                                        |
|--------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| executable   |          | string  |                             | Path of the binary to use. **[default: `"opkg"`]**                                                                                                                                                                                                                                                 |
| extra_args   |          | string  |                             | Additional options to pass to opkg.                                                                                                                                                                                                                                                                |
| force        |          | boolean |                             | Force removal of package and its dependencies. **[default: `false`]**                                                                                                                                                                                                                              |
| name         |          | array   |                             | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                            |
| state        |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired package is installed. `absent` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| update_cache |          | boolean |                             | Whether or not to refresh the package index. This can be run as part of a package installation or as a separate step. **[default: `false`]**                                                                                                                                                       |
| upgrade      |          | boolean |                             | Whether or not to upgrade all packages to the latest version available. **[default: `false`]**                                                                                                                                                                                                     |

## Example

```yaml
- name: Update package lists
  opkg:
    update_cache: yes

- name: Install packages
  opkg:
    name:
      - curl
      - jq
    state: present

- name: Remove package
  opkg:
    name: vim
    state: absent

- name: Upgrade all packages
  opkg:
    upgrade: yes
```

{% endraw %}