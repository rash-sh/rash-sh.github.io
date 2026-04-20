---
title: cloud_init
weight: 5200
indent: true
---

{% raw %}
# cloud_init

Manage cloud-init configuration for cloud instance initialization.

Cloud-init is the industry-standard multi-distro method for cross-platform
cloud instance initialization. This module manages cloud-init configuration
files, user-data, meta-data, and network configuration.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter           | Required | Type    | Values                       | Description                                                                                                                               |
|---------------------|----------|---------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| backup              |          | boolean |                              | Create backup of existing config files before modifying. **[default: `false`]**                                                           |
| directory           |          | string  |                              | Path to the cloud-init configuration directory. **[default: `"/etc/cloud"`]**                                                             |
| meta_data_path      |          | string  |                              | Path to write meta-data file. **[default: `"/var/lib/cloud/instance/meta-data"`]**                                                        |
| network_config_path |          | string  |                              | Path to write network config file. **[default: `"/var/lib/cloud/instance/network-config"`]**                                              |
| state               |          | string  | present<br>absent<br>updated | Whether the configuration should exist or not. `updated` will only apply changes if the configuration differs. **[default: `"present"`]** |
| user_data_content   |          | string  |                              | Raw user-data content string. Used as-is if provided (should start with `#cloud-config`).                                                 |
| user_data_path      |          | string  |                              | Path to write user-data file. **[default: `"/var/lib/cloud/instance/user-data"`]**                                                        |

## Examples

```yaml
- name: Configure cloud-init user-data
  cloud_init:
    state: present
    user_data:
      users:
        - name: admin
          sudo: ALL=(ALL) NOPASSWD:ALL
          shell: /bin/bash
      packages:
        - nginx
        - curl
      runcmd:
        - systemctl enable nginx
        - systemctl start nginx

- name: Configure cloud-init with network config
  cloud_init:
    state: present
    network_config:
      version: 2
      ethernets:
        eth0:
          dhcp4: true

- name: Set instance metadata
  cloud_init:
    state: present
    meta_data:
      instance-id: i-12345678
      local-hostname: web01

- name: Remove cloud-init configuration
  cloud_init:
    state: absent

- name: Write user-data from raw content
  cloud_init:
    state: present
    user_data_content: |
      #cloud-config
      users:
        - name: deploy
          groups: sudo
```

{% endraw %}