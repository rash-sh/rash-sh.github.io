---
title: synchronize
weight: 6590
indent: true
---

{% raw %}
# synchronize

Wrap rsync to synchronize files.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter  | Required | Type    | Values | Description                                                    |
|------------|----------|---------|--------|----------------------------------------------------------------|
| delete     |          | boolean |        | Delete files in dest that don't exist in src. [default: false] |
| dest       | true     | string  |        | Path on the destination host that will be synchronized.        |
| rsync_opts |          | array   |        | Additional rsync options.                                      |
| src        | true     | string  |        | Path on the source host that will be synchronized.             |

## Examples

```yaml
- synchronize:
    src: ./dist/
    dest: /opt/app/

- synchronize:
    src: ./src/
    dest: /var/www/html/
    delete: true
    rsync_opts:
      - --exclude=.git
      - --chmod=D755,F644
```

{% endraw %}