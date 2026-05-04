---
title: sgdisk
weight: 5164
indent: true
---

{% raw %}
# sgdisk

Manage GPT disk partitions using sgdisk (part of gdisk/gptfdisk).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                    | Description                                                                                                                                                                                                                   |
|------------|----------|---------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| device     | true     | string  |                           | The block device (e.g., /dev/nvme0n1, /dev/sda).                                                                                                                                                                              |
| number     |          | integer |                           | The partition number (1-128 for GPT).                                                                                                                                                                                         |
| part_end   |          | string  |                           | End of the partition as sector number or size (e.g., "100%", "512M", "+1G"). **[default: `"100%"`]**                                                                                                                          |
| part_guid  |          | string  |                           | Specific partition GUID.                                                                                                                                                                                                      |
| part_name  |          | string  |                           | Partition name/label.                                                                                                                                                                                                         |
| part_start |          | string  |                           | Start of the partition as sector number or size (e.g., "0", "1M", "2048"). **[default: `"0"`]**                                                                                                                               |
| part_type  |          | string  |                           | Partition type GUID or code (e.g., EF00 for EFI, 8300 for Linux, BF00 for ZFS).                                                                                                                                               |
| state      |          | string  | present<br>absent<br>info | Desired state of the partition. If _present_, create the partition if it doesn't exist. If _absent_, remove the partition if it exists. If _info_, return information about partitions on the device. **[default: `"info"`]** |
| zap        |          | boolean |                           | Wipe all partitions on the device. **[default: `false`]**                                                                                                                                                                     |

## Example

```yaml
- name: Wipe disk and create GPT
  sgdisk:
    device: /dev/nvme0n1
    zap: true

- name: Create BIOS boot partition
  sgdisk:
    device: /dev/nvme0n1
    number: 1
    state: present
    part_start: 0
    part_end: +1M
    part_type: EF02
    part_name: BIOS-BOOT

- name: Create EFI system partition
  sgdisk:
    device: /dev/nvme0n1
    number: 2
    state: present
    part_start: 1M
    part_end: +512M
    part_type: EF00
    part_name: EFI-SYSTEM

- name: Create ZFS partition
  sgdisk:
    device: /dev/nvme0n1
    number: 3
    state: present
    part_start: 513M
    part_end: 100%
    part_type: BF00
    part_name: ZFS

- name: Get partition info
  sgdisk:
    device: /dev/nvme0n1
    state: info
  register: part_info

- name: Remove partition
  sgdisk:
    device: /dev/nvme0n1
    number: 1
    state: absent
```

{% endraw %}