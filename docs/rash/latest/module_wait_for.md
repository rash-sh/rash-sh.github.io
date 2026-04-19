---
title: wait_for
weight: 6360
indent: true
---

{% raw %}
# wait_for

Wait until a TCP port accepts connections or `timeout` is reached.
This module fails unless `ignore_errors` is set to `true`.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter       | Required | Type    | Values | Description                                                                               |
|-----------------|----------|---------|--------|-------------------------------------------------------------------------------------------|
| connect_timeout |          | integer |        | Maximum number of seconds to wait for a connection to happen before closing and retrying. |
| host            |          | string  |        | Host to connect to. Defaults to localhost.                                                |
| port            | true     | integer |        | Port number to poll.                                                                      |
| timeout         | true     | integer |        | Maximum number of seconds to wait for.                                                    |

## Example

```yaml
- wait_for:
    port: 8080
    timeout: 30

- wait_for:
    port: 5432
    connect_timeout: 10
    timeout: 60
    ignore_errors: true
```

{% endraw %}