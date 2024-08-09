---
title: Modules
weight: 5000
---

{% raw %}
# Modules

Modules are operations executed by tasks. They require parameters for its execution.

E.g.:

```yaml
- name: save user info
  copy:
    content: |
      uid: {{ rash.user.uid }}
      gid: {{ rash.user.gid }}
    dest: "{% if rash.user.uid != 0 %}/tmp{% endif %}/user_info"
    mode: "{{ env.FILE_MODE | default('400') }}"

```

## Modules index

- [assert](./assert.html)
- [command](./command.html)
- [copy](./copy.html)
- [debug](./debug.html)
- [file](./file.html)
- [find](./find.html)
- [pacman](./pacman.html)
- [set_vars](./set_vars.html)
- [template](./template.html)

## Omitting parameters

By default all parameters defined in yaml are passed to the module. However, you can
omit them programmatically.

E.g.:

```
"{{ env.MY_PASSWORD_MODE | default(value=omit()) }}"
```

Furthermore, if you are chaining additional filters after the `default(omit())`, you should instead
do something like this: `"{{ foo | default(None) | some_filter or omit() }}"`.
In this example, the default `None` value will cause the later filters to fail, which will trigger
the `or omit` portion of the logic. Using `omit` in this manner is very specific to the later
filters you are chaining though, so be prepared for some trial and error if you do this.
{% endraw %}