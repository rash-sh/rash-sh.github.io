---
title: lineinfile
weight: 6220
indent: true
---

{% raw %}
# lineinfile

Ensure a particular line is in a file, or replace an existing line using a back-referenced regular expression.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                                                                                                                                  |
|-----------|----------|--------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| line      |          | string |                   | The line to insert/replace into the file. Required unless `state=absent`.                                                                                                    |
| path      | true     | string |                   | The absolute path to the file to modify.                                                                                                                                     |
| regexp    |          | string |                   | The regular expression to look for in every line of the file. If the regular expression is not matched, the line will be added to the file. Uses Python regular expressions. |
| state     |          | string | present<br>absent | Whether the line should be there or not. **[default: `"present"`]**                                                                                                          |

## Examples

```yaml
- lineinfile:
    path: /etc/sudoers
    line: '%wheel ALL=(ALL) NOPASSWD: ALL'
    state: present

- lineinfile:
    path: /etc/hosts
    regexp: '^127\.0\.0\.1'
    line: '127.0.0.1 localhost'
    state: present

- lineinfile:
    path: /tmp/testfile
    regexp: '^#?banana'
    state: absent
```

{% endraw %}