---
title: find
weight: 8100
indent: true
---

{% raw %}
# find

Use [find module](./module_find.html) as a lookup. Returns the extra field of the module result.


## Example

```yaml
- debug:
    msg: "{{ find(paths='/') }}"
```

{% endraw %}