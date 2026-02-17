---
title: timezone
weight: 6270
indent: true
---

{% raw %}
# timezone

Configure system timezone.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                        |
|-----------|----------|--------|--------|--------------------------------------------------------------------|
| name      | true     | string |        | Name of the timezone (e.g., UTC, Europe/Madrid, America/New_York). |

## Examples

```yaml
- name: Set timezone to UTC
  timezone:
    name: UTC

- name: Set timezone to Europe/Madrid
  timezone:
    name: Europe/Madrid

- name: Set timezone to America/New_York
  timezone:
    name: America/New_York
```

{% endraw %}