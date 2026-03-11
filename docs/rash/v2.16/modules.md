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

### Package Management

| Module | Description |
| ------ | ----------- |
| [pacman](./module_pacman.html) | Manage packages with the pacman package manager (Arch Linux) |

### File Operations

| Module | Description |
| ------ | ----------- |
| [copy](./module_copy.html) | Copy files to path |
| [file](./module_file.html) | Manage files and file properties |
| [find](./module_find.html) | Return a list of files based on specific criteria |
| [get_url](./module_get_url.html) | Downloads files from HTTP, HTTPS, or FTP |
| [lineinfile](./module_lineinfile.html) | Ensure a particular line is in a file |
| [template](./module_template.html) | Render MiniJinja templates |

### Command Execution

| Module | Description |
| ------ | ----------- |
| [command](./module_command.html) | Execute commands |

### System Management

| Module | Description |
| ------ | ----------- |
| [systemd](./module_systemd.html) | Control systemd services |

### Flow Control

| Module | Description |
| ------ | ----------- |
| [assert](./module_assert.html) | Assert given expressions are true |
| [block](./module_block.html) | Group tasks together for execution |
| [include](./module_include.html) | Include tasks from another file |
| [set_vars](./module_set_vars.html) | Set new variables |
| [setup](./module_setup.html) | Load variables from .env, YAML, and JSON files |

### Network

| Module | Description |
| ------ | ----------- |
| [uri](./module_uri.html) | Interacts with HTTP and HTTPS web services |

### Debugging

| Module | Description |
| ------ | ----------- |
| [debug](./module_debug.html) | Print statements during execution |

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