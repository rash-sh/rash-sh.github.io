---
title: async_poll
weight: 5010
indent: true
---

{% raw %}
{{#include ../../rash_core/src/modules/async_poll.rs:module}}

## Parameters

| Parameter | Required | Type    | Values | Description               |
|-----------|----------|---------|--------|---------------------------|
| jid       | true     | integer |        | Job ID to poll.           |
| interval  |          | integer |        | Poll interval in seconds. |

{{#include ../../rash_core/src/modules/async_poll.rs:examples}}

{% endraw %}