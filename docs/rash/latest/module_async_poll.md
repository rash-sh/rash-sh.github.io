---
title: async_poll
weight: 6030
indent: true
---

{% raw %}
{{#include ../../rash_core/src/modules/async_poll.rs:module}}

## Parameters

| Parameter | Required | Type    | Values | Description               |
|-----------|----------|---------|--------|---------------------------|
| interval  |          | integer |        | Poll interval in seconds. |
| jid       | true     | integer |        | Job ID to poll.           |

{{#include ../../rash_core/src/modules/async_poll.rs:examples}}

{% endraw %}