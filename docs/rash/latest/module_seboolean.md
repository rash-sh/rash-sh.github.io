---
title: seboolean
weight: 6260
indent: true
---

{% raw %}
# seboolean

Manage SELinux boolean settings.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values | Description                                                                      |
|------------|----------|---------|--------|----------------------------------------------------------------------------------|
| name       | true     | string  |        | Name of the SELinux boolean to manage.                                           |
| persistent |          | boolean |        | If true, the boolean setting will persist across reboots. **[default: `false`]** |
| state      | true     | boolean |        | Desired state of the SELinux boolean (on/off).                                   |

## Examples

```yaml
- name: Enable HTTPD network connect
  seboolean:
    name: httpd_can_network_connect
    state: true

- name: Enable persistent HTTPD network connect
  seboolean:
    name: httpd_can_network_connect
    state: true
    persistent: true

- name: Allow containers to use NFS
  seboolean:
    name: virt_use_nfs
    state: true
    persistent: true

- name: Disable FTP home directory access
  seboolean:
    name: ftp_home_dir
    state: false
```

{% endraw %}