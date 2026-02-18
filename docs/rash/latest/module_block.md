---
title: block
weight: 6060
indent: true
---

{% raw %}
# block

This module allows grouping tasks together for execution.
Similar to Ansible's block directive.

Note: `vars` declared in a block are added to the parent context.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type | Values | Description                   |
| --------- | -------- | ---- | ------ | ----------------------------- |
| block     | true     | list |        | List of tasks to execute      |

## Example

```yaml
- name: Example block
  block:
    - name: Create a file
      copy:
        content: "Hello World"
        dest: "/tmp/test.txt"

    - name: Run a command
      command:
        cmd: "echo 'Success'"
```

{% endraw %}