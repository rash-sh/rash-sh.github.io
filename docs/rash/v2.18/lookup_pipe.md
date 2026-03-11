---
title: pipe
weight: 8500
indent: true
---

{% raw %}
# pipe

Run a command and return the output.

## Parameters

| Parameter | Required | Type   | Values | Description                                                                         |
| --------- | -------- | ------ | ------ | ----------------------------------------------------------------------------------- |
| command   | yes      | string |        | The command to run.                                                                 |

## Notes

- Like all lookups this runs on the local machine and is unaffected by other keywords.
- Pipe lookup internally invokes commands with shell=True. This type of invocation is considered a security issue if appropriate care is not taken to sanitize any user provided or variable input.
- The directory of the play is used as the current working directory.


## Example

```yaml
- name: raw result of running date command
  debug:
    msg: "{{ pipe('date') }}"

- name: Get current user
  debug:
    msg: "Current user: {{ pipe('whoami') }}"

- name: List files in directory
  debug:
    msg: "{{ pipe('ls -la /tmp') }}"

- name: Get system uptime
  debug:
    msg: "System uptime: {{ pipe('uptime') }}"

- name: Multiple commands with loop
  debug:
    msg: "{{ item }}"
  loop:
    - "{{ pipe('whoami') }}"
    - "{{ pipe('pwd') }}"
    - "{{ pipe('date') }}"
```

{% endraw %}