---
title: docker_prune
weight: 5420
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
| all           |          | boolean |        | Prune all types.                |
| builder_cache |          | boolean |        | Prune build cache.              |
| containers    |          | boolean |        | Prune stopped containers.       |
| force         |          | boolean |        | Do not prompt for confirmation. |
| images        |          | boolean |        | Prune unused images.            |
| networks      |          | boolean |        | Prune unused networks.          |
| volumes       |          | boolean |        | Prune unused volumes.           |

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