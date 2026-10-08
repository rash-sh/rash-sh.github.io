---
title: async_poll
weight: 5010
indent: true
---

{% raw %}
# async_poll

Wait until an async task finishes and return its result. The task fails if the job failed.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type    | Values | Description               |
|-----------|----------|---------|--------|---------------------------|
| jid       | true     | integer |        | Job ID to poll.           |
| interval  |          | integer |        | Poll interval in seconds. |

## Example

```yaml
- name: Start background task
  command: ./long_running.sh
  async: 300
  poll: 0
  register: job

- name: Wait for it
  async_poll:
    jid: "{{ job.rash_job_id }}"
    interval: 5
  register: result
```

{% endraw %}