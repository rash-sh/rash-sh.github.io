---
title: grub
weight: 5071
indent: true
---

{% raw %}
# grub

Manage GRUB bootloader installation, configuration, and updates.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter             | Required | Type    | Values                         | Description                                                          |
|-----------------------|----------|---------|--------------------------------|----------------------------------------------------------------------|
| action                | true     | string  | install<br>configure<br>update | Action to perform: install, configure, or update.                    |
| device                |          | string  |                                | Device to install GRUB to (required for install action on BIOS).     |
| boot_directory        |          | string  |                                | Boot directory path. **[default: `/boot`]**                          |
| efi_directory         |          | string  |                                | EFI directory path for UEFI installation. **[default: `/boot/efi`]** |
| target                |          | string  |                                | Target platform (i386-pc, x86_64-efi, arm64-efi).                    |
| removable             |          | boolean |                                | Install for removable media (UEFI only). **[default: `false`]**      |
| recheck               |          | boolean |                                | Recheck device map. **[default: `false`]**                           |
| config_file           |          | string  |                                | Path to GRUB configuration file. **[default: `/etc/default/grub`]**  |
| config                |          | object  |                                | Dictionary of GRUB configuration values.                             |
| kernel_params         |          | array   |                                | List of kernel parameters for GRUB_CMDLINE_LINUX.                    |
| kernel_params_default |          | array   |                                | List of kernel parameters for GRUB_CMDLINE_LINUX_DEFAULT.            |
| disable_os_prober     |          | boolean |                                | Disable os-prober. **[default: `false`]**                            |
| timeout               |          | integer |                                | Menu timeout in seconds.                                             |
| terminal              |          | string  | console<br>serial<br>gfxterm   | Terminal type (console, serial, gfxterm).                            |
| serial                |          | string  |                                | Serial console settings (e.g., "--unit=0 --speed=115200").           |

## Examples

```yaml
- name: Install GRUB for BIOS boot
  grub:
    action: install
    device: /dev/nvme0n1
    boot_directory: /mnt/boot
    target: i386-pc

- name: Install GRUB for UEFI boot
  grub:
    action: install
    device: /dev/nvme0n1
    efi_directory: /mnt/boot/efi
    target: x86_64-efi
    removable: true

- name: Configure GRUB for ZFS root
  grub:
    action: configure
    config:
      GRUB_CMDLINE_LINUX: "root=ZFS=rpool/ROOT/ubuntu boot=zfs"
      GRUB_PRELOAD_MODULES: "zfs part_gpt"
      GRUB_TIMEOUT: 0
      GRUB_DISABLE_OS_PROBER: "true"
      GRUB_ENABLE_CRYPTODISK: y

- name: Add kernel parameters
  grub:
    action: configure
    kernel_params:
      - root=ZFS=rpool/ROOT/ubuntu
      - boot=zfs
      - quiet
      - splash
    kernel_params_default:
      - console=tty1
      - console=ttyS0,115200n8

- name: Update GRUB configuration
  grub:
    action: update

- name: Configure serial console
  grub:
    action: configure
    terminal: serial
    serial: "--unit=0 --speed=115200 --word=8 --parity=no --stop=1"
    config:
      GRUB_SERIAL_COMMAND: "serial --unit=0 --speed=115200"
```

{% endraw %}