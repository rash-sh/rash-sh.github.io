---
title: docker_image
weight: 5045
indent: true
---

{% raw %}
# docker_image

Manage Docker images.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                         | Description                                           |
|--------------|----------|---------|--------------------------------|-------------------------------------------------------|
| build        |          | object  |                                | Build options when source=build.                      |
| force        |          | boolean |                                | Force removal of the image.                           |
| force_source |          | boolean |                                | Force rebuild/repull even if image exists.            |
| load_path    |          | string  |                                | Path to load image from (for source=load).            |
| name         | true     | string  |                                | Image name with optional tag (e.g., nginx:latest).    |
| push         |          | boolean |                                | Push the image to a registry.                         |
| repository   |          | string  |                                | Repository to push to (full name including registry). |
| source       |          | string  | build<br>load<br>pull<br>local | Source of the image (build, load, pull, local).       |
| state        |          | string  | present<br>absent              | Desired state of the image.                           |
| tag          |          | string  |                                | Tag for the image (appended to name).                 |

## Example

```yaml
- name: Pull an image
  docker_image:
    name: nginx:latest
    source: pull

- name: Build and push image
  docker_image:
    name: myapp
    tag: v1.0
    source: build
    build:
      path: /app
      dockerfile: Dockerfile
    push: true

- name: Build with build args
  docker_image:
    name: myapp
    tag: latest
    source: build
    build:
      path: .
      args:
        VERSION: "1.0"
        DEBUG: "false"

- name: Tag and push to multiple registries
  docker_image:
    name: myapp:v1.0
    source: local
    push: true
    repository: registry.example.com/myapp:v1.0

- name: Remove an image
  docker_image:
    name: myapp:old
    state: absent

- name: Load image from tar file
  docker_image:
    name: myapp:loaded
    source: load
    load_path: /tmp/myapp.tar

- name: Force rebuild
  docker_image:
    name: myapp:latest
    source: build
    force_source: true
    build:
      path: /app
```

{% endraw %}