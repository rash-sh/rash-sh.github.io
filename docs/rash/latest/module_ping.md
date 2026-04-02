---
title: ping
weight: 5880
indent: true
---

{% raw %}
# ping

Try to connect to a host, verify a usable python and return `pong` on success.

This is a simple connectivity test module. It returns `pong` on success.
If the module is called but the connection fails, the task will fail.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                |
|-----------|----------|--------|--------|------------------------------------------------------------|
| data      |          | string |        | Data to return in the ping result. **[default: `"pong"`]** |

## Example

```yaml
- ping:

- name: Ping with custom data
  ping:
    data: "custom_data"
  register: result

- name: Verify ping response
  debug:
    var: result.ping
```

{% endraw %}