---
title: sysfs
weight: 5174
indent: true
---

{% raw %}
# sysfs

Manage sysfs attributes for kernel and device configuration.
Essential for IoT devices and embedded systems where hardware parameters
need to be tuned at runtime.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                                   |
|-----------|----------|--------|-------------------|-------------------------------------------------------------------------------|
| path      | true     | string |                   | sysfs attribute path.                                                         |
| state     |          | string | present<br>absent | Whether the attribute should be present or absent. **[default: `"present"`]** |
| value     |          | string |                   | Desired value of the sysfs attribute. Required when state=present.            |

## Examples

```yaml
- name: Set MTU for network interface
  sysfs:
    path: /sys/class/net/eth0/mtu
    value: "9000"

- name: Configure GPIO pin direction
  sysfs:
    path: /sys/class/gpio/gpio17/direction
    value: "out"

- name: Enable IP forwarding via sysfs
  sysfs:
    path: /proc/sys/net/ipv4/ip_forward
    value: "1"

- name: Set CPU governor
  sysfs:
    path: /sys/devices/system/cpu/cpu0/cpufreq/scaling_governor
    value: "performance"
```

{% endraw %}