---
title: lbu
weight: 5610
indent: true
---

{% raw %}
# lbu

Manage Alpine Local Backup (lbu) for diskless Alpine systems.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values             | Description                                                                   |
|------------|----------|---------|--------------------|-------------------------------------------------------------------------------|
| exclude    |          | array   |                    | File or list of files to remove from LBU include list.                        |
| executable |          | string  |                    | Path of the lbu binary to use. **[default: `"lbu"`]**                         |
| extra_args |          | string  |                    | Additional options to pass to lbu.                                            |
| include    |          | array   |                    | File or list of files to add to LBU include list.                             |
| media      |          | string  |                    | Backup media type (e.g., `usb`, `floppy`).                                    |
| message    |          | string  |                    | Commit message for lbu commit.                                                |
| package    |          | string  |                    | Create an apk package backup at the specified path.                           |
| path       |          | string  |                    | LBU overlay directory path.                                                   |
| state      |          | string  | commit<br>rollback | Action to perform: `commit` saves changes, `rollback` reverts to last commit. |
| verbose    |          | boolean |                    | Enable verbose output. **[default: `false`]**                                 |

## Example

```yaml
- name: Commit LBU changes
  lbu:
    state: commit

- name: Commit with custom message
  lbu:
    state: commit
    message: "Added app configuration"

- name: Rollback to last committed state
  lbu:
    state: rollback

- name: Add files to LBU include list
  lbu:
    include:
      - /etc/config/app.conf
      - /etc/app/settings.yaml

- name: Remove files from LBU include list
  lbu:
    exclude:
      - /etc/config/temp.conf

- name: Create backup package
  lbu:
    package: /backup/backup.apk

- name: Set backup media
  lbu:
    media: usb
```

{% endraw %}