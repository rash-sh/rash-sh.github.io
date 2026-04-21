---
title: docker_compose
weight: 5400
indent: true
---

{% raw %}
# docker_compose

Manage Docker Compose projects for multi-container applications.

## Attributes

```yaml
check_mode:
  support: full
```}

## Parameters

| Parameter      | Required | Type    | Values                                               | Description                                              |
|----------------|----------|---------|------------------------------------------------------|----------------------------------------------------------|
| build          |          | boolean |                                                      | Build images before starting.                            |
| files          |          | array   |                                                      | List of compose files to use.                            |
| force_recreate |          | boolean |                                                      | Force recreation of containers.                          |
| no_deps        |          | boolean |                                                      | Do not start linked services.                            |
| project_name   |          | string  |                                                      | Custom project name.                                     |
| project_src    | true     | string  |                                                      | Path to the docker-compose project directory.            |
| pull           |          | boolean |                                                      | Pull images before starting.                             |
| remove_images  |          | boolean |                                                      | Remove images when removing project (state=absent).      |
| remove_orphans |          | boolean |                                                      | Remove orphans (containers not defined in compose file). |
| remove_volumes |          | boolean |                                                      | Remove volumes when removing project (state=absent).     |
| scale          |          | object  |                                                      | Scale mapping for services (e.g., {"web": 3).           |
| services       |          | array   |                                                      | List of specific services to manage.                     |
| state          |          | string  | absent<br>present<br>restarted<br>started<br>stopped | Desired state of the project.                            |
| timeout        |          | integer |                                                      | Timeout in seconds for operations.                       |

## Example

```yaml
- name: Start a docker-compose project
  docker_compose:
    project_src: /app
    state: started

- name: Stop a docker-compose project
  docker_compose:
    project_src: /app
    state: stopped

- name: Remove a docker-compose project
  docker_compose:
    project_src: /app
    state: absent

- name: Restart a docker-compose project
  docker_compose:
    project_src: /app
    state: restarted

- name: Start specific services
  docker_compose:
    project_src: /app
    state: started
    services:
      - web
      - db

- name: Pull images before starting
  docker_compose:
    project_src: /app
    state: started
    pull: true

- name: Scale services
  docker_compose:
    project_src: /app
    state: started
    scale:
      web: 3
      worker: 5

- name: Use a specific compose file
  docker_compose:
    project_src: /app
    files:
      - docker-compose.yml
      - docker-compose.prod.yml
    state: started

- name: Build images before starting
  docker_compose:
    project_src: /app
    state: started
    build: true

- name: Start with a custom project name
  docker_compose:
    project_src: /app
    project_name: myproject
    state: started
```

{% endraw %}