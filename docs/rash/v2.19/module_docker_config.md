---
title: docker_config
weight: 5270
indent: true
---

{% raw %}
# docker_config

Manage Docker daemon configuration (daemon.json).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter                | Required | Type    | Values            | Description                                                                              |
|--------------------------|----------|---------|-------------------|------------------------------------------------------------------------------------------|
| backup                   |          | boolean |                   | Create a backup before modifying. **[default: `false`]**                                 |
| debug                    |          | boolean |                   | Enable debug mode.                                                                       |
| default_ulimits          |          | object  |                   | Default ulimits for containers.                                                          |
| disable_legacy_registry  |          | boolean |                   | Disable legacy registry (v1) support.                                                    |
| hosts                    |          | array   |                   | Docker hosts to listen on (e.g., ["tcp://0.0.0.0:2375", "unix:///var/run/docker.sock"]). |
| key                      |          | string  |                   | Arbitrary configuration key using dot notation.                                          |
| live_restore             |          | boolean |                   | Enable live restore of containers when daemon shuts down.                                |
| log_driver               |          | string  |                   | Default logging driver for containers.                                                   |
| log_opts                 |          | object  |                   | Logging driver options as key-value pairs.                                               |
| max_concurrent_downloads |          | integer |                   | Maximum number of concurrent downloads per pull.                                         |
| max_concurrent_uploads   |          | integer |                   | Maximum number of concurrent uploads per push.                                           |
| path                     |          | string  |                   | Path to the Docker daemon.json file. **[default: `/etc/docker/daemon.json`]**            |
| registry_mirrors         |          | array   |                   | List of Docker registry mirrors.                                                         |
| reload                   |          | boolean |                   | Restart Docker daemon after configuration change. **[default: `false`]**                 |
| state                    |          | string  | present<br>absent | Whether configuration should exist or not. **[default: `"present"`]**                    |
| storage_driver           |          | string  |                   | Docker storage driver (e.g., overlay2, devicemapper).                                    |
| tls                      |          | boolean |                   | TLS configuration.                                                                       |
| tlscacert                |          | string  |                   | Path to TLS CA certificate.                                                              |
| tlscert                  |          | string  |                   | Path to TLS certificate.                                                                 |
| tlskey                   |          | string  |                   | Path to TLS key.                                                                         |
| userland_proxy           |          | boolean |                   | Enable userland proxy for loopback addresses.                                            |
| value                    |          |         |                   | Value to set for arbitrary key.                                                          |

## Examples

```yaml
- name: Set Docker storage driver
  docker_config:
    storage_driver: overlay2

- name: Configure Docker registry mirrors
  docker_config:
    registry_mirrors:
      - "https://mirror1.example.com"
      - "https://mirror2.example.com"

- name: Set Docker log configuration
  docker_config:
    log_driver: json-file
    log_opts:
      max-size: 10m
      max-file: 3

- name: Configure Docker live restore
  docker_config:
    live_restore: true

- name: Set multiple Docker options
  docker_config:
    storage_driver: overlay2
    default_ulimits:
      nofile:
        name: nofile
        hard: 65536
        soft: 65536
    userland_proxy: false

- name: Remove a configuration option
  docker_config:
    userland_proxy: null
    state: absent

- name: Configure Docker with custom path
  docker_config:
    path: /etc/docker/daemon.json
    storage_driver: overlay2
    backup: true
```

{% endraw %}