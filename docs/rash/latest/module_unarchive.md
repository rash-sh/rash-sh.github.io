---
title: unarchive
weight: 5186
indent: true
---

{% raw %}
# unarchive

Unpacks an archive (tar, tar.gz, tar.bz2, tar.xz, zip) to a destination.

## Attributes

```yaml
check_mode:
  support: full
diff_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values | Description                                                                   |
|-------------|----------|---------|--------|-------------------------------------------------------------------------------|
| src         | true     | string  |        | Path to the archive file to unpack. If remote_src is true, this can be a URL. |
| dest        | true     | string  |        | Remote absolute path where the archive should be unpacked.                    |
| remote_src  |          | boolean |        | If true, src is a URL and will be downloaded first.                           |
| exclude     |          | array   |        | List of directory and file patterns to exclude from extraction.               |
| mode        |          | string  |        | The permissions the extracted files and directories should have.              |
| group       |          | string  |        | Name of the group that should own the extracted files.                        |
| owner       |          | string  |        | Name of the user that should own the extracted files.                         |
| create_dest |          | boolean |        | If true, the destination directory will be created if it does not exist.      |
| checksum    |          | string  |        | Checksum of the archive file (format: algorithm:hash).                        |

## Examples

```yaml
- unarchive:
    src: /tmp/app.tar.gz
    dest: /opt/app

- unarchive:
    src: https://example.com/package.tar.gz
    dest: /opt/package
    remote_src: yes

- unarchive:
    src: /tmp/backup.tar.gz
    dest: /var/app
    exclude:
      - "*.log"
      - "*.tmp"
    mode: "0755"
```

{% endraw %}