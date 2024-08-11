---
title: passwordstore
weight: 8100
indent: true
---

{% raw %}
# passwordstore

Lookup passwords from the passwordstore.org pass utility.


## Example

```yaml
- debug:
    msg: "{{ passwordstore('foo/boo') }}"
```

{% endraw %}