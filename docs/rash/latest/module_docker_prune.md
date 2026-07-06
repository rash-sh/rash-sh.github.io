---
title: docker_prune
weight: 5049
indent: true
---

{% raw %}
# docker_prune

Prune unused Docker resources (containers, images, volumes, networks, build cache).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values | Description                     |
|---------------|----------|---------|--------|---------------------------------|
| containers    |          | boolean |        | Prune stopped containers.       |
| images        |          | boolean |        | Prune unused images.            |
| volumes       |          | boolean |        | Prune unused volumes.           |
| networks      |          | boolean |        | Prune unused networks.          |
| builder_cache |          | boolean |        | Prune build cache.              |
| all           |          | boolean |        | Prune all types.                |
| force         |          | boolean |        | Do not prompt for confirmation. |

## Example

```yaml
- name: Clean up Docker
  docker_prune:
    containers: true
    images: true
    volumes: true
    force: true

- name: Prune all Docker resources
  docker_prune:
    all: true

- name: Clean stopped containers only
  docker_prune:
    containers: true

- name: Clean build cache
  docker_prune:
    builder_cache: true
```

{% endraw %}