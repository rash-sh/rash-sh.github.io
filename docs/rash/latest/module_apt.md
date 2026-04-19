---
title: apt
weight: 5040
indent: true
---

{% raw %}
# apt

Manage packages with the apt package manager, which is used by Debian, Ubuntu and their variants.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter             | Required | Type    | Values                                           | Description                                                                                                                                                                                  |
|-----------------------|----------|---------|--------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| allow_downgrade       |          | boolean |                                                  | Corresponds to the `--allow-downgrades` option for apt. **[default: `false`]**                                                                                                               |
| allow_unauthenticated |          | boolean |                                                  | Corresponds to the `--allow-change-held-packages` option for apt. **[default: `false`]**                                                                                                     |
| cache_valid_time      |          | integer |                                                  | Update the cache only if it is older than this many seconds. Only has effect when `update_cache` is `true`. **[default: `0`]**                                                               |
| deb                   |          | string  |                                                  | Path to a .deb package to install.                                                                                                                                                           |
| default_release       |          | string  |                                                  | Use this to pin a specific version of a package.                                                                                                                                             |
| executable            |          | string  |                                                  | Path of the binary to use. **[default: `"apt-get"`]**                                                                                                                                        |
| extra_args            |          | string  |                                                  | Additional option to pass to executable.                                                                                                                                                     |
| install_recommends    |          | boolean |                                                  | If `yes`, force apt to install only recommended packages. **[default: `true`]**                                                                                                              |
| install_suggests      |          | boolean |                                                  | If `yes`, install suggested packages as well as recommended packages. **[default: `false`]**                                                                                                 |
| name                  |          | array   |                                                  | Name or list of names of the package(s) or file(s) to install, upgrade, or remove.                                                                                                           |
| purge                 |          | boolean |                                                  | Whether to purge packages or not. Only used when `state: absent`. **[default: `false`]**                                                                                                     |
| state                 |          | string  | absent<br>present<br>latest<br>builddep<br>fixed | Whether to install (`present`), remove (`absent`), update to latest (`latest`), install build dependencies (`build-dep`), or fix a broken installation (`fixed`). **[default: `"present"`]** |
| update_cache          |          | boolean |                                                  | Whether to refresh the package lists. **[default: `false`]**                                                                                                                                 |
| upgrade               |          | boolean |                                                  | Whether to upgrade the whole system. **[default: `false`]**                                                                                                                                  |

## Example

```yaml
- name: Update apt cache
  apt:
    update_cache: yes
    cache_valid_time: 86400

- name: Install packages
  apt:
    name:
      - curl
      - gnupg
      - lsb-release
    state: present

- name: Install specific version
  apt:
    name: nginx=1.18.0-0ubuntu1
    state: present

- name: Install from .deb file
  apt:
    deb: /tmp/package.deb

- name: Remove package
  apt:
    name: vim
    state: absent
    purge: yes
```

{% endraw %}