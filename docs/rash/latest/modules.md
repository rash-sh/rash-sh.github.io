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

- [assert](./module_assert.html)
- [authorized_key](./module_authorized_key.html)
- [block](./module_block.html)
- [command](./module_command.html)
- [copy](./module_copy.html)
- [dconf](./module_dconf.html)
- [debug](./module_debug.html)
- [fail](./module_fail.html)
- [file](./module_file.html)
- [find](./module_find.html)
- [get_url](./module_get_url.html)
- [git](./module_git.html)
- [group](./module_group.html)
- [hostname](./module_hostname.html)
- [include](./module_include.html)
- [ini_file](./module_ini_file.html)
- [lineinfile](./module_lineinfile.html)
- [mount](./module_mount.html)
- [pacman](./module_pacman.html)
- [set_vars](./module_set_vars.html)
- [setup](./module_setup.html)
- [stat](./module_stat.html)
- [systemd](./module_systemd.html)
- [template](./module_template.html)
- [timezone](./module_timezone.html)
- [uri](./module_uri.html)
- [user](./module_user.html)
- [wait_for](./module_wait_for.html)

## Omitting parameters

By default all parameters defined in yaml are passed to the module. However, you can
omit them programmatically.

E.g.:

```
"{{ env.MY_PASSWORD_MODE | default(omit) }}"
```

Furthermore, if you are chaining additional filters after the `default(omit)`, you should instead
do something like this: `"{{ foo | default(None) | some_filter or omit }}"`.
In this example, the default `None` value will cause the later filters to fail, which will trigger
the `or omit` portion of the logic. Using `omit` in this manner is very specific to the later
filters you are chaining though, so be prepared for some trial and error if you do this.
{% endraw %}