---
title: setup
weight: 6210
indent: true
---

{% raw %}
# setup

Load variables from .env, YAML, and JSON files.

Environment variables from .env files are loaded into the `env` namespace, while
YAML and JSON variables are loaded as top-level context variables.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type  | Values | Description                                                                                                                                                                                                                                                                                 |
|-----------|----------|-------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| from      |          | array |        | List of file paths to load variables from. Supports .env, .yaml/.yml, and .json files. `.env` files are loaded into the `env` namespace, while YAML and JSON files are loaded as top-level context variables. If a file has no extension, its format is auto-detected based on its content. |

## Examples

```yaml
- name: Load configuration from multiple sources
  setup:
    from:
      - .env
      - config.yaml
      - settings.json

- name: Use loaded variables
  debug:
    msg: "Database URL: {{ env.DATABASE_URL }}"

- name: Load from single file
  setup:
    from: vars/production.yml
```

{% endraw %}