---
title: archive
weight: 6010
indent: true
---

{% raw %}
# archive

Creates a compressed archive of one or more files or directories.

## Attributes

```yaml
check_mode:
  support: partial
diff_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                        | Description                                                                             |
|-----------|----------|---------|-------------------------------|-----------------------------------------------------------------------------------------|
| dest      | true     | string  |                               | The file name of the destination archive.                                               |
| exclude   |          | array   |                               | List of patterns to exclude from the archive.                                           |
| force     |          | boolean |                               | Force archiving even if the destination archive already exists.                         |
| format    |          | string  | gz<br>bz2<br>xz<br>tar<br>zip | The type of compression to use. **[default: `"gz"`]**                                   |
| path      | true     | array   |                               | Remote absolute path, list of paths, or glob patterns for the file or files to archive. |
| remove    |          | boolean |                               | Remove the original file tree after archiving.                                          |

## Examples

```yaml
- archive:
    path: /var/log/app
    dest: /backup/logs.tar.gz

- archive:
    path:
      - /etc/nginx
      - /etc/apache2
    dest: /backup/web-configs.tar.bz2
    format: bz2

- archive:
    path: /home/user/data
    dest: /backup/data.tar.xz
    format: xz
    exclude:
      - "*.tmp"
      - "*.cache"
```

{% endraw %}