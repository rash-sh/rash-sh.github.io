---
title: apt_hold
weight: 5050
indent: true
---

{% raw %}
# apt_hold

Manage package holds in Debian-based systems.

## Description

Holding packages prevents them from being automatically upgraded, which is
critical for production systems and IoT devices where specific versions
must be maintained. This module uses `apt-mark` to manage package holds.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type   | Values         | Description                                                            |
|------------|----------|--------|----------------|------------------------------------------------------------------------|
| executable |          | string |                | Path of the apt-mark binary to use. **[default: `"apt-mark"`]**        |
| name       |          | array  |                | Name or list of names of packages to hold/unhold.                      |
| state      |          | string | held<br>unheld | Whether the packages should be held or unheld. **[default: `"held"`]** |

## Example

```yaml
- name: Hold nginx package to prevent updates
  apt_hold:
    name: nginx

- name: Hold multiple packages
  apt_hold:
    name:
      - nginx
      - docker-ce
      - linux-image-generic

- name: Explicitly set held state
  apt_hold:
    name: nginx
    state: held

- name: Unhold a package to allow updates
  apt_hold:
    name: nginx
    state: unheld

- name: Unhold multiple packages
  apt_hold:
    name:
      - nginx
      - docker-ce
    state: unheld
```

{% endraw %}