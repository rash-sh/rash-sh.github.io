---
title: initramfs
weight: 5570
indent: true
---

{% raw %}
# initramfs

Manage initramfs/initrd configuration, generation, and updates.

This module works with initramfs-tools (Debian/Ubuntu) to configure
and manage initramfs images, including modules, hooks, and configuration.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type   | Values                          | Description                                                                                                      |
|--------------|----------|--------|---------------------------------|------------------------------------------------------------------------------------------------------------------|
| action       | true     | string | update<br>generate<br>configure | Action to perform. **[required]**                                                                                |
| compression  |          | string |                                 | Compression algorithm for generate action. **[default: `"gzip"`]**                                               |
| config       |          |        |                                 | Dict of initramfs-tools configuration options. Keys: MODULES, BUSYBOX, COMPRESS, BOOT, NFSROOT, RUNSIZE, FSTYPE. |
| files        |          | array  |                                 | List of files to include in initramfs.                                                                           |
| hooks        |          | array  |                                 | List of hooks to ensure present.                                                                                 |
| hooks_absent |          | array  |                                 | List of hooks to ensure absent.                                                                                  |
| kernel       |          | string |                                 | Kernel version (e.g., 6.8.0-48-generic, all). Used with update and generate actions. **[default: `"all"`]**      |
| modules      |          | array  |                                 | List of modules to include in initramfs.                                                                         |

## Examples

```yaml
- name: Configure initramfs for ZFS
  initramfs:
    action: configure
    config:
      MODULES: most
      BUSYBOX: auto
      COMPRESS: zstd
    modules:
      - zfs
      - spl

- name: Add ZFS hook to initramfs
  initramfs:
    action: configure
    hooks:
      - zfs
    files:
      - src: /etc/zfs/zfs-key
        dest: /etc/zfs/zfs-key

- name: Update initramfs for all kernels
  initramfs:
    action: update
    kernel: all

- name: Update initramfs for specific kernel
  initramfs:
    action: update
    kernel: 6.8.0-48-generic

- name: Generate new initramfs
  initramfs:
    action: generate
    kernel: 6.8.0-48-generic
    compression: zstd

- name: Remove hook from initramfs
  initramfs:
    action: configure
    hooks_absent:
      - zfs
```

{% endraw %}