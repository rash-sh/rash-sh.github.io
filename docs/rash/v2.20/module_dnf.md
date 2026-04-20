---
title: dnf
weight: 5320
indent: true
---

{% raw %}
# dnf

Manage packages with the dnf package manager, which is used by Fedora and RHEL.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type    | Values                                              | Description                                                                                                                                                                                                                                                                                                                                            |
|-------------------|----------|---------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| disable_gpg_check |          | boolean |                                                     | Disable all repositories. **[default: `false`]**                                                                                                                                                                                                                                                                                                       |
| disablerepo       |          | string  |                                                     | Disable a specific repository.                                                                                                                                                                                                                                                                                                                         |
| enablerepo        |          | string  |                                                     | Enable a specific repository.                                                                                                                                                                                                                                                                                                                          |
| executable        |          | string  |                                                     | Path of the binary to use. **[default: `"dnf"`]**                                                                                                                                                                                                                                                                                                      |
| extra_args        |          | string  |                                                     | Additional options to pass to dnf.                                                                                                                                                                                                                                                                                                                     |
| name              |          | array   |                                                     | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                                                                                |
| skip_broken       |          | boolean |                                                     | Skip packages with broken dependencies. **[default: `false`]**                                                                                                                                                                                                                                                                                         |
| state             |          | string  | absent<br>present<br>latest<br>removed<br>installed | Whether to install (`present`/`installed`), remove (`absent`/`removed`), or ensure latest version (`latest`). `present` and `installed` will simply ensure that a desired package is installed. `absent` and `removed` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| update_cache      |          | boolean |                                                     | Whether or not to refresh the package index. **[default: `false`]**                                                                                                                                                                                                                                                                                    |

## Example

```yaml
- name: Update package cache
  dnf:
    update_cache: yes

- name: Install packages
  dnf:
    name:
      - nginx
      - postgresql-server
    state: present

- name: Install specific version
  dnf:
    name: nginx-1.24.0
    state: present

- name: Remove package
  dnf:
    name: vim
    state: absent

- name: Install package from specific repo
  dnf:
    name: nginx
    enablerepo: epel
    state: present
```

{% endraw %}