---
title: shell
weight: 5165
indent: true
---

{% raw %}
# shell

Execute shell commands with pipes, redirections, expansion, and subshells. Process output can
be captured, inherited, discarded, or streamed and captured with `tee`.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type   | Values                            | Description                                                                                                                                                                |
|------------|----------|--------|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cmd        | true     | string |                                   | The shell command to execute.                                                                                                                                              |
| executable |          | string |                                   | Shell executable. Defaults to `/bin/sh`.                                                                                                                                   |
| chdir      |          | string |                                   | Change into this directory before running the command.                                                                                                                     |
| creates    |          | string |                                   | Skip execution when this path already exists.                                                                                                                              |
| removes    |          | string |                                   | Skip execution when this path does not exist.                                                                                                                              |
| stdin      |          | string |                                   | Data written to stdin.                                                                                                                                                     |
| stdout     |          | string | capture<br>inherit<br>null<br>tee | stdout handling: `capture` (default, registered), `tee` (streamed live and registered), `inherit` (streamed live, not registered) or `null` (discarded; quote it in YAML). |
| stderr     |          | string | capture<br>inherit<br>null<br>tee | stderr handling: `capture` (default, registered), `tee` (streamed live and registered), `inherit` (streamed live, not registered) or `null` (discarded; quote it in YAML). |

## Example

```yaml
- shell: echo "hello world" | tr a-z A-Z
  register: upper

- shell:
    cmd: cargo build 2>&1
    stdout: tee
    stderr: tee

- shell:
    cmd: find . -name "*.log" -mtime +7 -delete
    chdir: /var/log

- shell:
    cmd: process_data.sh < input.txt > output.txt
    executable: /bin/bash
```

{% endraw %}