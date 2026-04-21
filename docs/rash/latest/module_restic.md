---
title: restic
weight: 6510
indent: true
---

{% raw %}
# restic

Manage Restic backups with support for multiple backends (local, S3, B2, REST, etc.).
Restic is a modern, fast, secure backup program with encryption, deduplication,
and cloud storage support.

## Attributes

```yaml
check_mode:
  support: partial
```

## Parameters

| Parameter    | Required | Type    | Values                                                | Description                                                                                                                                              |
|--------------|----------|---------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| environment  |          | array   |                                                       | Environment variables for restic (e.g., AWS_ACCESS_KEY_ID).                                                                                              |
| exclude      |          | array   |                                                       | Exclude pattern(s).                                                                                                                                      |
| include      |          | array   |                                                       | Include pattern(s).                                                                                                                                      |
| keep_daily   |          | integer |                                                       | Retain daily snapshots.                                                                                                                                  |
| keep_last    |          | integer |                                                       | Retain the n most recent snapshots.                                                                                                                      |
| keep_monthly |          | integer |                                                       | Retain monthly snapshots.                                                                                                                                |
| keep_weekly  |          | integer |                                                       | Retain weekly snapshots.                                                                                                                                 |
| keep_yearly  |          | integer |                                                       | Retain yearly snapshots.                                                                                                                                 |
| password     | true     | string  |                                                       | Repository password for encryption/decryption.                                                                                                           |
| path         |          | array   |                                                       | Path(s) to backup. Required for state=backup.                                                                                                            |
| repository   | true     | string  |                                                       | Restic repository path or URL. Supports local paths, S3 (s3:bucket/path), B2 (b2:bucket:path), REST (rest:http://...), SFTP (sftp:user@host:/path), etc. |
| restic_opts  |          | array   |                                                       | Additional restic options.                                                                                                                               |
| restore_path |          | string  |                                                       | Restore destination directory. Required for state=restore.                                                                                               |
| state        |          | string  | init<br>backup<br>check<br>restore<br>prune<br>forget | Action to perform: init, backup, check, restore, prune, or forget.                                                                                       |
| tag          |          | array   |                                                       | Tag(s) for the backup. Used with backup, restore, and forget.                                                                                            |

## Examples

```yaml
- name: Initialize a restic repository
  restic:
    repository: /mnt/backup
    password: "{{ vault.restic_password }}"
    state: init

- name: Backup files to local repository
  restic:
    repository: /mnt/backup
    password: "{{ vault.restic_password }}"
    state: backup
    path:
      - /etc
      - /home
    tag:
      - daily
      - important

- name: Backup to S3 with retention policy
  restic:
    repository: "s3:https://s3.amazonaws.com/my-bucket/backups"
    password: "{{ vault.restic_password }}"
    state: backup
    path:
      - /data
    tag:
      - s3-backup
    keep_daily: 7
    keep_weekly: 4
    keep_monthly: 6

- name: Check repository integrity
  restic:
    repository: /mnt/backup
    password: "{{ vault.restic_password }}"
    state: check

- name: Restore latest snapshot
  restic:
    repository: /mnt/backup
    password: "{{ vault.restic_password }}"
    state: restore
    restore_path: /tmp/restore
    tag: latest

- name: Forget old snapshots with retention policy
  restic:
    repository: /mnt/backup
    password: "{{ vault.restic_password }}"
    state: forget
    keep_daily: 7
    keep_weekly: 4
    keep_monthly: 6

- name: Prune unused data
  restic:
    repository: /mnt/backup
    password: "{{ vault.restic_password }}"
    state: prune
```

{% endraw %}