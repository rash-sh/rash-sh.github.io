---
title: include
weight: 6160
indent: true
---

{% raw %}
# include

This module include tasks to be executed from another file.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                 |
| --------- | -------- | ------ | ------ | ----------------------------------------------------------- |
| file      | true     | string |        | Parse target file and execute tasks in the current context. |

## Example

```yaml
- include: foo.rh

- include: "{{ rash.dir }}/bar.rh"

- include: "{{ env.HOSTNAME }}.rh"
```

{% endraw %}