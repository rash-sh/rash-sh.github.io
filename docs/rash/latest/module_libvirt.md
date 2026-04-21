---
title: libvirt
weight: 5960
indent: true
---

{% raw %}
# libvirt

Manage Libvirt virtual machines (domains).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                                                                         | Description                                                  |
|----------------|----------|---------|--------------------------------------------------------------------------------|--------------------------------------------------------------|
| autostart      |          | boolean |                                                                                | Set autostart flag on the domain.                            |
| disk           |          | object  |                                                                                | Disk configuration.                                          |
| force          |          | boolean |                                                                                | Force stop (destroy) instead of graceful shutdown.           |
| memory         |          | integer |                                                                                | Memory allocation in MiB.                                    |
| name           | true     | string  |                                                                                | Name of the domain/VM.                                       |
| network        |          | object  |                                                                                | Network interface configuration.                             |
| remove_storage |          | boolean |                                                                                | Remove associated storage when undefining.                   |
| state          |          | string  | running<br>stopped<br>paused<br>undefined<br>present<br>destroyed<br>restarted | State of the domain.                                         |
| uri            |          | string  |                                                                                | Libvirt connection URI.                                      |
| vcpu           |          | integer |                                                                                | Number of virtual CPUs.                                      |
| xml            |          | string  |                                                                                | Domain XML definition (overrides other resource parameters). |

{$include_doc /// ## Example
///
/// ```yaml
/// - name: Define and start a VM
///   libvirt:
///     name: webserver
///     state: running
///     memory: 2048
///     vcpu: 2
///     disk:
///       path: /var/lib/libvirt/images/webserver.qcow2
///       size: 20G
///       format: qcow2
///     network:
///       network_type: bridge
///       source: virbr0
///
/// - name: Define VM with custom XML
///   libvirt:
///     name: myvm
///     state: present
///     xml: |
///       <domain type='kvm'>
///         <name>myvm</name>
///         <memory unit='MiB'>4096</memory>
///         <vcpu>4</vcpu>
///         ...
///       </domain>
///
/// - name: Start a VM
///   libvirt:
///     name: webserver
///     state: running
///
/// - name: Stop a VM
///   libvirt:
///     name: webserver
///     state: stopped
///
/// - name: Pause a VM
///   libvirt:
///     name: webserver
///     state: paused
///
/// - name: Restart a VM
///   libvirt:
///     name: webserver
///     state: restarted
///
/// - name: Set VM autostart
///   libvirt:
///     name: webserver
///     autostart: true
///
/// - name: Undefine a VM
///   libvirt:
///     name: webserver
///     state: undefined
///
/// - name: Undefine a VM with storage
///   libvirt:
///     name: webserver
///     state: undefined
///     remove_storage: true
///
/// - name: Connect to remote libvirt
///   libvirt:
///     name: webserver
///     state: running
///     uri: qemu+ssh://root@192.168.1.10/system
/// ```}

{% endraw %}