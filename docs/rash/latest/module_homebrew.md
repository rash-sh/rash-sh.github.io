---
title: homebrew
weight: 5075
indent: true
---

{% raw %}
# homebrew

Manage packages with Homebrew, the macOS package manager.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter       | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                                        |
|-----------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cask            |          | boolean |                             | Whether to manage a Homebrew cask instead of a formula. **[default: `false`]**                                                                                                                                                                                                                     |
| executable      |          | string  |                             | Path of the binary to use. **[default: `"brew"`]**                                                                                                                                                                                                                                                 |
| extra_args      |          | string  |                             | Additional options to pass to brew.                                                                                                                                                                                                                                                                |
| name            |          | array   |                             | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                            |
| state           |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired package is installed. `absent` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| update_homebrew |          | boolean |                             | Whether to update Homebrew itself. **[default: `false`]**                                                                                                                                                                                                                                          |
| upgrade_all     |          | boolean |                             | Whether to upgrade all Homebrew packages. **[default: `false`]**                                                                                                                                                                                                                                   |

## Example

```yaml
- name: Update Homebrew
  homebrew:
    update_homebrew: true

- name: Install packages
  homebrew:
    name:
      - git
      - curl
      - jq
    state: present

- name: Install a cask package
  homebrew:
    name: visual-studio-code
    state: present
    cask: true

- name: Remove package
  homebrew:
    name: node
    state: absent

- name: Upgrade all packages
  homebrew:
    upgrade_all: true

- name: Ensure latest version of a package
  homebrew:
    name: git
    state: latest
```

{% endraw %}