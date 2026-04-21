---
title: docker_info
weight: 5430
indent: true
---

{% raw %}
# docker_info

Gather Docker system information for debugging and monitoring.

Returns Docker version, system info, and availability status.
This module never changes system state - it only collects information.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter      | Required | Type    | Values | Description                                           |
|----------------|----------|---------|--------|-------------------------------------------------------|
| get_disk_usage |          | boolean |        | Get Docker disk usage info. **[default: `false`]**    |
| get_info       |          | boolean |        | Get Docker system info. **[default: `true`]**         |
| get_version    |          | boolean |        | Get Docker version information. **[default: `true`]** |

## Example

```yaml
- name: Get Docker info
  docker_info:
  register: docker

- name: Check Docker is available
  debug:
    msg: "Docker is available: {{ docker.docker_info.available }}"

- name: Show Docker version
  debug:
    msg: "Docker version: {{ docker.docker_info.version.Version }}"

- name: Show Docker server info
  debug:
    msg: "Server version: {{ docker.docker_info.info.ServerVersion }}"

- name: Fail if Docker not available
  fail:
    msg: "Docker is not available"
  when: not docker.docker_info.available
```

{% endraw %}