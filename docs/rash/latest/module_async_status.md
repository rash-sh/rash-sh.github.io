---
title: async_status
weight: 6050
indent: true
---

{% raw %}
# async_status

Check the status of an async task.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type    | Values | Description                 |
|-----------|----------|---------|--------|-----------------------------|
| jid       | true     | integer |        | Job ID to check status for. |

## Example

```yaml
- name: Start background task
  command: ./long_running.sh
  async: 300
  poll: 0
  register: job

- name: Check job status
  async_status:
    jid: "{{ job.rash_job_id }}"
  register: result
  until: result.finished
  retries: 30
  delay: 10
```

{% endraw %}