---
title: unarchive
weight: 6320
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
| checksum    |          | string  |        | Checksum of the archive file (format: algorithm:hash).                        |
| create_dest |          | boolean |        | If true, the destination directory will be created if it does not exist.      |
| dest        | true     | string  |        | Remote absolute path where the archive should be unpacked.                    |
| exclude     |          | array   |        | List of directory and file patterns to exclude from extraction.               |
| group       |          | string  |        | Name of the group that should own the extracted files.                        |
| mode        |          | string  |        | The permissions the extracted files and directories should have.              |
| owner       |          | string  |        | Name of the user that should own the extracted files.                         |
| remote_src  |          | boolean |        | If true, src is a URL and will be downloaded first.                           |
| src         | true     | string  |        | Path to the archive file to unpack. If remote_src is true, this can be a URL. |

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