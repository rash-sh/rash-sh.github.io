---
title: find
weight: 9200
indent: true
---

{% raw %}
# find

Use [find module](./module_find.html) as a lookup. Returns the extra field of the module result.


## Example

```yaml
- debug:
    msg: "{{ find({'paths': '/'}) }}"

- name: Copy all files in /tmp to /tmp2
  vars:
    tmp_query:
      paths: "/tmp"
      hidden: true
      recurse: false
  loop: "{{ find(tmp_query) }}"
  copy:
    src: "{{ item }}""
    dest: "/tmp2/{{ item | basename }}"

```

{% endraw %}