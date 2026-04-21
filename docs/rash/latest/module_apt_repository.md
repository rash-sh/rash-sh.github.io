---
title: apt_repository
weight: 5060
indent: true
---

{% raw %}
# apt_repository

Manage APT repositories on Debian/Ubuntu systems.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values            | Description                                                                                                                              |
|----------------|----------|---------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| codename       |          | string  |                   | Distribution codename override.                                                                                                          |
| filename       |          | string  |                   | Custom filename for the sources list (without .list extension). If not specified, the repository will be added to the main sources.list. |
| mode           |          | string  |                   | File mode for the sources list file (octal, e.g., "0644"). **[default: `"0644"`]**                                                       |
| repo           | true     | string  |                   | Repository string in sources.list format (required).                                                                                     |
| state          |          | string  | present<br>absent | Whether the repository should exist or not. **[default: `"present"`]**                                                                   |
| update_cache   |          | boolean |                   | Run apt-get update after adding or removing the repository. **[default: `true`]**                                                        |
| validate_certs |          | boolean |                   | Whether to validate SSL certificates when fetching the repository. **[default: `true`]**                                                 |

## Example

```yaml
- name: Add Docker repository
  apt_repository:
    repo: deb https://download.docker.com/linux/ubuntu focal stable
    state: present
    filename: docker

- name: Add repository with custom codename
  apt_repository:
    repo: deb http://archive.ubuntu.com/ubuntu jammy main restricted
    state: present
    codename: jammy

- name: Remove old repository
  apt_repository:
    repo: deb http://old-repo.example.com focal main
    state: absent

- name: Add repository without updating cache
  apt_repository:
    repo: deb https://example.com/repo stable main
    update_cache: false
```

{% endraw %}