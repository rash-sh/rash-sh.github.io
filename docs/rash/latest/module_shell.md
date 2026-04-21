---
title: shell
weight: 6510
indent: true
---

{% raw %}
# shell

Execute shell commands with pipe support, redirections, and environment
variables. This module extends the command module by providing full shell
features including pipes, redirections, environment variable expansion,
shell glob expansion, and subshell execution.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type   | Values | Description                                                    |
|------------|----------|--------|--------|----------------------------------------------------------------|
| chdir      |          | string |        | Change into this directory before running the command.         |
| cmd        | true     | string |        | The shell command to execute.                                  |
| creates    |          | string |        | A filename, when it already exists, this step will not be run. |
| executable |          | string |        | Shell to use for command execution. **[default: `"/bin/sh"`]** |
| removes    |          | string |        | A filename, when it does not exist, this step will not be run. |
| stdin      |          | string |        | Set stdin for the command.                                     |

{$include_doc /// ## Example
///
/// ```yaml
/// - shell:
///     cmd: cat /var/log/app.log | grep ERROR | wc -l
///     register: error_count
///
/// - shell: echo "hello world" | tr a-z A-Z
///   register: upper
///
/// - shell:
///     cmd: find . -name "*.log" -mtime +7 -delete
///     chdir: /var/log
///
/// - shell:
///     cmd: process_data.sh < input.txt > output.txt
///     executable: /bin/bash
///
/// - shell:
///     cmd: echo "file exists"
///     creates: /tmp/marker
///
/// - shell:
///     cmd: echo "file removed"
///     removes: /tmp/cleanup-target
/// ```}

{% endraw %}