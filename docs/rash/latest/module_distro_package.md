---
title: distro_package
weight: 5370
indent: true
---

{% raw %}
# distro_package

Auto-detect the distribution's package manager and install/remove packages
using the appropriate backend (apk, apt, dnf, pacman, zypper, opkg).

This module provides a unified, idempotent interface for package management
across different Linux distributions. It automatically detects the appropriate
package manager based on the system and performs the requested operation.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                                        |
|--------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name         |          | array   |                             | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                            |
| state        |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired package is installed. `absent` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| update_cache |          | boolean |                             | Whether or not to refresh the package index. This can be run as part of a package installation or as a separate step. **[default: `false`]**                                                                                                                                                       |

## Example

```yaml
- name: Install packages using auto-detected package manager
  distro_package:
    name:
      - curl
      - vim
      - git
    state: present
    update_cache: true

- name: Remove a package
  distro_package:
    name: nginx
    state: absent

- name: Ensure latest version of packages
  distro_package:
    name:
      - curl
      - jq
    state: latest
```

{% endraw %}