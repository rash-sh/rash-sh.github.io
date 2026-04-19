---
title: package
weight: 5910
indent: true
---

{% raw %}
# package

Generic package manager module that auto-detects the system's package manager.

This module provides a unified interface for package management across different
Linux distributions. It automatically detects the appropriate package manager
(apk, apt, dnf, pacman, or zypper) based on the system.

## Attributes

```yaml
check_mode:
  support: partial
```

## Parameters

| Parameter    | Required | Type    | Values                                | Description                                                                                                                                        |
|--------------|----------|---------|---------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| name         |          | array   |                                       | Name or list of names of the package(s) to install, upgrade, or remove.                                                                            |
| state        |          | string  | absent<br>present<br>latest           | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). **[default: `"present"`]**                                 |
| update_cache |          | boolean |                                       | Whether to update the package cache before installing. **[default: `false`]**                                                                      |
| upgrade      |          | boolean |                                       | Whether to upgrade all packages to the latest version available. **[default: `false`]**                                                            |
| use_manager  |          | string  | apk<br>apt<br>dnf<br>pacman<br>zypper | Force a specific package manager to be used instead of auto-detection. If not specified, the module will auto-detect the system's package manager. |

## Example

```yaml
- name: Install packages using auto-detected package manager
  package:
    name:
      - curl
      - jq
    state: present

- name: Remove a package
  package:
    name: vim
    state: absent

- name: Update all packages
  package:
    upgrade: true

- name: Install from specific package manager
  package:
    name: nginx
    use_manager: apt
```

{% endraw %}