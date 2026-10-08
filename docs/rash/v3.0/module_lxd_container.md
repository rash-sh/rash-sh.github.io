---
title: lxd_container
weight: 5104
indent: true
---

{% raw %}
# lxd_container

Manage LXD containers.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                            | Description                              |
|-----------|----------|---------|---------------------------------------------------|------------------------------------------|
| name      | true     | string  |                                                   | Name of the container.                   |
| state     |          | string  | absent<br>present<br>started<br>stopped<br>frozen | State of the container.                  |
| source    |          | object  |                                                   | Image source configuration.              |
| config    |          | object  |                                                   | Container configuration key-value pairs. |
| devices   |          | object  |                                                   | Device configuration.                    |
| profiles  |          | array   |                                                   | Profiles to apply to the container.      |
| force     |          | boolean |                                                   | Force operation (for stop/delete).       |
| wait      |          | boolean |                                                   | Wait for operation to complete.          |
| timeout   |          | integer |                                                   | Timeout for operations (seconds).        |
| target    |          | string  |                                                   | Target remote LXD server.                |
| project   |          | string  |                                                   | Project name.                            |

## Example

```yaml
- name: Create and start a container
  lxd_container:
    name: webserver
    state: started
    source:
      type: image
      alias: ubuntu/22.04

- name: Create container with custom config
  lxd_container:
    name: myapp
    state: started
    source:
      type: image
      alias: alpine/3.18
    config:
      limits.cpu: "2"
      limits.memory: 2GB

- name: Create container with profiles
  lxd_container:
    name: profiled
    state: started
    source:
      type: image
      alias: ubuntu/22.04
    profiles:
      - default
      - custom-profile

- name: Create container with devices
  lxd_container:
    name: devcontainer
    state: started
    source:
      type: image
      alias: ubuntu/22.04
    devices:
      eth0:
        type: nic
        nictype: bridged
        parent: lxdbr0

- name: Stop a container
  lxd_container:
    name: webserver
    state: stopped

- name: Freeze a container
  lxd_container:
    name: webserver
    state: frozen

- name: Delete a container
  lxd_container:
    name: webserver
    state: absent
```

{% endraw %}