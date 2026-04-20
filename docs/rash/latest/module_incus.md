---
title: incus
weight: 5610
indent: true
---

{% raw %}
# incus

Manage Incus/LXD containers and virtual machines.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                               | Description                                                          |
|-----------|----------|---------|------------------------------------------------------|----------------------------------------------------------------------|
| config    |          | object  |                                                      | Configuration key-value pairs (supports strings, booleans, numbers). |
| devices   |          | object  |                                                      | Device configuration.                                                |
| force     |          | boolean |                                                      | Force container/VM removal on state=absent.                          |
| image     |          | string  |                                                      | Image to use for creation (e.g., images:alpine/3.19).                |
| name      | true     | string  |                                                      | Name of the container/VM.                                            |
| state     |          | string  | absent<br>present<br>restarted<br>started<br>stopped | State of the container/VM.                                           |
| type      |          | string  | container<br>virtual-machine                         | Type of instance (container or virtual-machine).                     |
| wait      |          | boolean |                                                      | Wait for operation to complete.                                      |

## Example

```yaml
- name: Create and start Incus container
  incus:
    name: webapp
    state: started
    image: images:alpine/3.19
    type: container

- name: Stop a container
  incus:
    name: webapp
    state: stopped

- name: Restart a container
  incus:
    name: webapp
    state: restarted

- name: Remove a container
  incus:
    name: webapp
    state: absent

- name: Create a virtual machine
  incus:
    name: vmapp
    state: started
    image: images:ubuntu/22.04
    type: virtual-machine

- name: Create container with config
  incus:
    name: configured_app
    image: images:alpine/3.19
    state: started
    config:
      limits.memory: 512MB
      boot.autostart: true

- name: Create container with devices
  incus:
    name: device_app
    image: images:alpine/3.19
    state: started
    devices:
      root:
        path: /
        pool: default
        type: disk
```

{% endraw %}