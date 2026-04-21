---
title: dpkg_selections
weight: 5510
indent: true
---

{% raw %}
# dpkg_selections

Manage Debian package selections (hold/unhold packages).

## Description

This module manages dpkg selections for Debian packages. It allows you to
set packages to be held, unheld, installed, deinstalled, or purged.
This is useful for preventing automatic package updates, locking package
versions, or managing package states during system configuration.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type   | Values                                          | Description                                                                                                                                              |
|------------|----------|--------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| executable |          | string |                                                 | Path of the binary to use. **[default: `"dpkg"`]**                                                                                                       |
| name       |          | array  |                                                 | Name or list of names of packages.                                                                                                                       |
| selection  |          | string | install<br>hold<br>deinstall<br>purge<br>unhold | The selection state to set. Valid values: `install`, `hold`, `deinstall`, `purge`. Using `unhold` is equivalent to `install`. **[default: `"install"`]** |

## Example

```yaml
- name: Hold nginx package to prevent updates
  dpkg_selections:
    name: nginx
    selection: hold

- name: Hold multiple packages
  dpkg_selections:
    name:
      - nginx
      - docker-ce
      - kernel-package
    selection: hold

- name: Unhold a package to allow updates
  dpkg_selections:
    name: nginx
    selection: install

- name: Query current package selections
  dpkg_selections:
    name: nginx
  register: nginx_status

- name: Mark package for removal
  dpkg_selections:
    name: old-package
    selection: deinstall
```

{% endraw %}