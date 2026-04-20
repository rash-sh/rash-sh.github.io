---
title: rclone
weight: 6250
indent: true
---

{% raw %}
# rclone

Sync files and directories to/from cloud storage providers using rclone.

## Attributes

```yaml
check_mode:
  support: partial
```

## Parameters

| Parameter     | Required | Type    | Values | Description                                                                                             |
|---------------|----------|---------|--------|---------------------------------------------------------------------------------------------------------|
| command       | true     | string  |        | Rclone command to execute. Valid values: sync, copy, move, delete, purge, mkdir, rmdir, check, ls, lsd. |
| config        |          | string  |        | Path to rclone config file.                                                                             |
| create_remote |          | boolean |        | Create the remote if it doesn't exist.                                                                  |
| dest          |          | string  |        | Destination remote:path or local path.                                                                  |
| dry_run       |          | boolean |        | Dry run mode - show what would be transferred without making changes.                                   |
| exclude       |          | array   |        | Skip files that match pattern.                                                                          |
| filter        |          | array   |        | List of filter patterns.                                                                                |
| include       |          | array   |        | Include files that match pattern.                                                                       |
| quiet         |          | boolean |        | Reduce verbosity in output.                                                                             |
| rclone_opts   |          | array   |        | Additional rclone options.                                                                              |
| remote_type   |          | string  |        | Remote type for create_remote (s3, gcs, dropbox, etc.).                                                 |
| retries       |          | integer |        | Maximum number of times to retry failed operations.                                                     |
| source        | true     | string  |        | Source remote:path or local path.                                                                       |

## Examples

```yaml
- name: Sync local files to S3
  rclone:
    command: sync
    source: /data/backup
    dest: s3:my-bucket/backup

- name: Copy files from Dropbox to local
  rclone:
    command: copy
    source: dropbox:Documents
    dest: /home/user/Documents

- name: Sync with filters
  rclone:
    command: sync
    source: /var/log/app
    dest: s3:logs-bucket/app-logs
    filter:
      - "+ *.log"
      - "- *"

- name: Dry run to see what would change
  rclone:
    command: sync
    source: /data
    dest: gcs:my-bucket/data
    dry_run: true

- name: Use custom config file
  rclone:
    command: copy
    source: local:files
    dest: s3:bucket/files
    config: /etc/rclone/rclone.conf
```

{% endraw %}