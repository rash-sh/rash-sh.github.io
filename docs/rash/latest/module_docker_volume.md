---
title: docker_volume
weight: 5330
indent: true
---

{% raw %}
# docker_volume

Manage Docker volumes for persistent container storage.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values            | Description                                 |
|----------------|----------|---------|-------------------|---------------------------------------------|
| driver         |          | string  |                   | Volume driver (e.g., local).                |
| driver_options |          | object  |                   | Driver-specific options.                    |
| force          |          | boolean |                   | Force removal of volume (for state=absent). |
| labels         |          | object  |                   | Volume labels.                              |
| name           | true     | string  |                   | Name of the volume.                         |
| state          |          | string  | present<br>absent | State of the volume.                        |

## Example

```yaml
- name: Create a volume
  docker_volume:
    name: mydata
    state: present

- name: Create a volume with specific driver
  docker_volume:
    name: mydata
    driver: local
    state: present

- name: Create a volume with driver options
  docker_volume:
    name: nfs_volume
    driver: local
    driver_options:
      type: nfs
      o: addr=192.168.1.1,rw
      device: ":/export/data"
    state: present

- name: Create a volume with labels
  docker_volume:
    name: labeled_volume
    labels:
      environment: production
      owner: team-ops
    state: present

- name: Remove a volume
  docker_volume:
    name: olddata
    state: absent

- name: Force remove a volume
  docker_volume:
    name: olddata
    state: absent
    force: true
```

{% endraw %}