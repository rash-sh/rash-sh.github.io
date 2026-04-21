---
title: flatpak
weight: 5590
indent: true
---

{% raw %}
# flatpak

Manage Flatpak packages.

Flatpak is a universal package format for Linux desktop applications.
This module enables management of Flatpak packages in desktop and container environments.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values            | Description                                                                                                                           |
|------------|----------|---------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| executable |          | string  |                   | Path of the flatpak binary to use. **[default: `"flatpak"`]**                                                                         |
| method     |          | string  | system<br>user    | The installation method to use. `system` installs for all users, `user` installs for the current user only. **[default: `"system"`]** |
| name       |          | array   |                   | Name or list of names of the Flatpak package(s) to install or remove. Package IDs are preferred (e.g., `org.gnome.Calendar`).         |
| no_deps    |          | boolean |                   | Whether to install without dependencies. **[default: `false`]**                                                                       |
| remote     |          | string  |                   | The Flatpak remote to use for installation. **[default: `"flathub"`]**                                                                |
| state      |          | string  | absent<br>present | Whether to install (`present`), or remove (`absent`) a Flatpak package. **[default: `"present"`]**                                    |

## Example

```yaml
- name: Install a Flatpak package
  flatpak:
    name: org.gnome.Calendar
    state: present

- name: Install a Flatpak from a specific remote
  flatpak:
    name: org.gnome.Calendar
    remote: flathub
    state: present

- name: Install a Flatpak for user installation
  flatpak:
    name: org.gnome.Calendar
    method: user
    state: present

- name: Install multiple Flatpaks
  flatpak:
    name:
      - org.gnome.Calendar
      - org.gnome.Todo
    state: present

- name: Install a Flatpak without dependencies
  flatpak:
    name: org.gnome.Calendar
    no_deps: true
    state: present

- name: Remove a Flatpak package
  flatpak:
    name: org.gnome.Calendar
    state: absent
```

{% endraw %}