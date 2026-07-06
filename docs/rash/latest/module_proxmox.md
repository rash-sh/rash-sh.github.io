---
title: proxmox
weight: 5149
indent: true
---

{% raw %}
# proxmox

Manage Proxmox VE virtual machines and containers.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values                                               | Description                                      |
|------------------|----------|---------|------------------------------------------------------|--------------------------------------------------|
| node             | true     | string  |                                                      | Proxmox node name.                               |
| vmid             | true     | integer |                                                      | VM/Container ID.                                 |
| name             |          | string  |                                                      | VM/Container name.                               |
| state            |          | string  | present<br>started<br>stopped<br>restarted<br>absent | The desired state of the VM/Container.           |
| vmtype           |          | string  | qemu<br>lxc                                          | Type of VM (qemu for VMs, lxc for containers).   |
| api_host         | true     | string  |                                                      | Proxmox API host URL.                            |
| api_user         | true     | string  |                                                      | API username (e.g., root@pam).                   |
| api_password     |          | string  |                                                      | API password for authentication.                 |
| api_token_id     |          | string  |                                                      | API token ID for token-based authentication.     |
| api_token_secret |          | string  |                                                      | API token secret for token-based authentication. |
| template         |          | integer |                                                      | Template VMID to clone from.                     |
| cores            |          | integer |                                                      | Number of CPU cores.                             |
| memory           |          | integer |                                                      | Memory in MB.                                    |
| disk             |          | string  |                                                      | Disk size (e.g., "8G").                          |
| storage          |          | string  |                                                      | Storage pool for disk.                           |
| bridge           |          | string  |                                                      | Bridge network interface.                        |
| ip_address       |          | string  |                                                      | IP address configuration (for containers).       |
| gateway          |          | string  |                                                      | Gateway IP address (for containers).             |
| ostemplate       |          | string  |                                                      | OS template storage (for containers).            |
| validate_certs   |          | boolean |                                                      | Validate SSL certificates.                       |
| wait             |          | boolean |                                                      | Wait for VM/container to be in desired state.    |
| timeout          |          | integer |                                                      | Timeout for wait operations in seconds.          |
| force            |          | boolean |                                                      | Force stop/restart operations.                   |
| description      |          | string  |                                                      | Description for the VM/container.                |
| tags             |          | string  |                                                      | Tags for the VM/container.                       |
| pool             |          | string  |                                                      | Pool to assign the VM/container to.              |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Create a container
///   proxmox:
///     node: pve1
///     vmid: 100
///     name: myapp
///     state: present
///     api_host: pve.local
///     api_user: root@pam
///     api_password: '{{ proxmox_password }}'
///
/// - name: Start a VM
///   proxmox:
///     node: pve1
///     vmid: 101
///     state: started
///     api_host: pve.local
///     api_user: root@pam
///     api_password: '{{ proxmox_password }}'
///
/// - name: Stop a container
///   proxmox:
///     node: pve1
///     vmid: 100
///     state: stopped
///     api_host: pve.local
///     api_user: root@pam
///     api_password: '{{ proxmox_password }}'
///
/// - name: Restart a VM
///   proxmox:
///     node: pve1
///     vmid: 101
///     state: restarted
///     api_host: pve.local
///     api_user: root@pam
///     api_password: '{{ proxmox_password }}'
///
/// - name: Remove a container
///   proxmox:
///     node: pve1
///     vmid: 100
///     state: absent
///     api_host: pve.local
///     api_user: root@pam
///     api_password: '{{ proxmox_password }}'
///
/// - name: Create VM from template with specific CPU and memory
///   proxmox:
///     node: pve1
///     vmid: 200
///     name: myvm
///     state: present
///     template: 9000
///     cores: 4
///     memory: 8192
///     api_host: pve.local
///     api_user: root@pam
///     api_password: '{{ proxmox_password }}'
///
/// - name: Use API token instead of password
///   proxmox:
///     node: pve1
///     vmid: 100
///     state: started
///     api_host: pve.local
///     api_user: root@pam
///     api_token_id: mytoken
///     api_token_secret: '{{ proxmox_token_secret }}'
/// ```}

{% endraw %}