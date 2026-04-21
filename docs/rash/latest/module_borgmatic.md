---
title: borgmatic
weight: 5180
indent: true
---

{% raw %}
# borgmatic

Manage Borg/Borgmatic backups with support for create, extract, prune, and check operations.
Borg is a deduplicating archiver with compression and authenticated encryption.
Borgmatic is a wrapper that simplifies backup configuration and automation.

## Attributes

```yaml
check_mode:
  support: partial
```

## Parameters

| Parameter        | Required | Type    | Values                                      | Description                                                           |
|------------------|----------|---------|---------------------------------------------|-----------------------------------------------------------------------|
| archive          |          | string  |                                             | Archive name pattern for extract or list operations.                  |
| borgmatic_opts   |          | array   |                                             | Additional borgmatic options.                                         |
| compression      |          | string  |                                             | Compression algorithm (e.g., none, lz4, zstd, zstd,1-22, zlib, lzma). |
| config_path      | true     | string  |                                             | Path to the borgmatic configuration file.                             |
| environment      |          | array   |                                             | Environment variables for borgmatic (e.g., BORG_REMOTE_PATH).         |
| exclude_patterns |          | array   |                                             | File patterns to exclude from backup.                                 |
| extract_path     |          | string  |                                             | Directory to extract files into. Required for state=extract.          |
| keep_daily       |          | integer |                                             | Retain daily archives.                                                |
| keep_last        |          | integer |                                             | Retain the n most recent archives.                                    |
| keep_monthly     |          | integer |                                             | Retain monthly archives.                                              |
| keep_weekly      |          | integer |                                             | Retain weekly archives.                                               |
| keep_yearly      |          | integer |                                             | Retain yearly archives.                                               |
| passphrase       |          | string  |                                             | Repository passphrase for encryption/decryption.                      |
| repository       |          | string  |                                             | Borg repository path. Overrides the repository in config.             |
| state            |          | string  | create<br>extract<br>prune<br>check<br>list | Action to perform: create, extract, prune, check, or list.            |

## Examples

```yaml
- name: Create a backup using borgmatic config
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    state: create

- name: Create backup with custom repository and passphrase
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    repository: /mnt/backups/my_repo
    passphrase: "{{ vault.borg_passphrase }}"
    state: create
    compression: zstd

- name: Create backup with exclusion patterns
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    state: create
    exclude_patterns:
      - "*.tmp"
      - "/home/*/.cache"

- name: Extract archive to a target directory
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    passphrase: "{{ vault.borg_passphrase }}"
    state: extract
    archive: my-backup-2024-01-15
    extract_path: /tmp/restore

- name: Prune old archives with retention policy
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    state: prune
    keep_daily: 7
    keep_weekly: 4
    keep_monthly: 6

- name: Check repository integrity
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    passphrase: "{{ vault.borg_passphrase }}"
    state: check

- name: List archives in repository
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    state: list

- name: Run create and prune together
  borgmatic:
    config_path: /etc/borgmatic.d/my_backup.yaml
    state: create
    keep_daily: 7
    keep_weekly: 4
```

{% endraw %}