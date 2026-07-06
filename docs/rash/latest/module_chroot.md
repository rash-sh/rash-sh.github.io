---
title: chroot
weight: 5023
indent: true
---

{% raw %}
# chroot

Execute commands within a chroot environment.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter   | Required | Type    | Values | Description                                                    |
|-------------|----------|---------|--------|----------------------------------------------------------------|
| cmd         |          | string  |        | The command to run as a string.                                |
| argv        |          | array   |        | The command to run as a list of arguments.                     |
| command     |          | string  |        | The command executable (use with args).                        |
| root        | true     | string  |        | Path to the chroot directory.                                  |
| args        |          | string  |        | Arguments for the command (if command used instead of cmd).    |
| chdir       |          | string  |        | Working directory inside chroot. **[default: `"/"`]**          |
| stdin       |          | string  |        | Data to pass to command stdin.                                 |
| executable  |          | string  |        | Shell to use for command execution. **[default: `"/bin/sh"`]** |
| creates     |          | string  |        | File that if exists skips the command.                         |
| removes     |          | string  |        | File that if missing skips the command.                        |
| environment |          | object  |        | Environment variables to set.                                  |
| env_file    |          | string  |        | File to source environment from (e.g., /etc/environment).      |
| umask       |          | integer |        | Umask for command execution.                                   |
| become      |          | boolean |        | Become another user inside chroot.                             |
| become_user |          | string  |        | User to become.                                                |
| timeout     |          | integer |        | Command timeout in seconds. **[default: `3600`]**              |

## Example

```yaml
- name: Update package lists in chroot
  chroot:
    root: /mnt
    cmd: apt-get update

- name: Install packages in chroot
  chroot:
    root: /mnt
    cmd: apt-get install -y linux-image-generic zfs-initramfs
    environment:
      DEBIAN_FRONTEND: noninteractive

- name: Run script in chroot
  chroot:
    root: /mnt
    cmd: /usr/local/bin/setup-script.sh
    creates: /etc/installed-marker

- name: Run as different user
  chroot:
    root: /mnt
    cmd: whoami
    become: true
    become_user: agil
```

{% endraw %}