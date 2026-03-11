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
| [apk](./module_apk.html) | Manage packages with the apk package manager (Alpine Linux) |
| [pacman](./module_pacman.html) | Manage packages with the pacman package manager (Arch Linux) |

### File Operations

| Module | Description |
| ------ | ----------- |
| [archive](./module_archive.html) | Creates a compressed archive of files or directories |
| [assemble](./module_assemble.html) | Assemble configuration files from fragments |
| [copy](./module_copy.html) | Copy files to path |
| [file](./module_file.html) | Manage files and file properties |
| [find](./module_find.html) | Return a list of files based on specific criteria |
| [get_url](./module_get_url.html) | Downloads files from HTTP, HTTPS, or FTP |
| [ini_file](./module_ini_file.html) | Manage settings in INI-style configuration files |
| [lineinfile](./module_lineinfile.html) | Ensure a particular line is in a file |
| [slurp](./module_slurp.html) | Read a file and return its content base64 encoded |
| [stat](./module_stat.html) | Retrieve file or file system status |
| [template](./module_template.html) | Render MiniJinja templates |
| [unarchive](./module_unarchive.html) | Unpacks an archive to a destination |

### Command Execution

| Module | Description |
| ------ | ----------- |
| [command](./module_command.html) | Execute commands |
| [script](./module_script.html) | Execute script files |

### System Management

| Module | Description |
| ------ | ----------- |
| [cron](./module_cron.html) | Manage cron jobs and crontab entries |
| [dconf](./module_dconf.html) | Modify and read dconf database |
| [group](./module_group.html) | Manage groups and group attributes |
| [hostname](./module_hostname.html) | Manage system hostname |
| [mount](./module_mount.html) | Control filesystem mounts |
| [sysctl](./module_sysctl.html) | Manage kernel parameters via sysctl |
| [systemd](./module_systemd.html) | Control systemd services |
| [timezone](./module_timezone.html) | Configure system timezone |
| [user](./module_user.html) | Manage user accounts and user attributes |

### Async Operations

| Module | Description |
| ------ | ----------- |
| [async_poll](./module_async_poll.html) | Poll async tasks |
| [async_status](./module_async_status.html) | Check the status of an async task |

### Flow Control

| Module | Description |
| ------ | ----------- |
| [assert](./module_assert.html) | Assert given expressions are true |
| [block](./module_block.html) | Group tasks together for execution |
| [fail](./module_fail.html) | Fail execution with a custom error message |
| [include](./module_include.html) | Include tasks from another file |
| [set_vars](./module_set_vars.html) | Set new variables |
| [setup](./module_setup.html) | Load variables from .env, YAML, and JSON files |

### Network & Security

| Module | Description |
| ------ | ----------- |
| [authorized_key](./module_authorized_key.html) | Add or remove SSH authorized keys |
| [git](./module_git.html) | Manage git checkouts of repositories |
| [uri](./module_uri.html) | Interacts with HTTP and HTTPS web services |
| [wait_for](./module_wait_for.html) | Wait until a TCP port accepts connections |

### Debugging & Tracing

| Module | Description |
| ------ | ----------- |
| [debug](./module_debug.html) | Print statements during execution |
| [trace](./module_trace.html) | Trace system activity using eBPF via bpftrace |

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