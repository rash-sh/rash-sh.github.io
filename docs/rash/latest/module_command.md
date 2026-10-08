---
title: command
weight: 5026
indent: true
---

{% raw %}
# command

Execute commands. `argv` executes directly without shell parsing; `cmd` keeps the historical
`/bin/sh -c` behavior. With `transfer_pid`, `cmd` is split with shell-like quoting rules and
the program replaces Rash directly (no intermediate shell), so it keeps Rash's PID and receives
signals itself, as required for container entrypoints. Process output can be captured,
inherited, discarded, or streamed and captured with `tee`.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                            | Description                                                                                                                                                                                                                                                                                                                                                                             |
|--------------|----------|---------|-----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cmd          |          | string  |                                   | Execute using `/bin/sh -c`, preserving command's historical string behavior. With `transfer_pid`, it is split into arguments and executed directly instead.                                                                                                                                                                                                                             |
| argv         |          | array   |                                   | Execute the program directly and pass each argument exactly as provided.                                                                                                                                                                                                                                                                                                                |
| chdir        |          | string  |                                   | Change into this directory before running the command.                                                                                                                                                                                                                                                                                                                                  |
| transfer_pid |          | boolean |                                   | Replace the Rash process with this command, keeping its PID (e.g. PID 1 in containers). `cmd` is split with shell-like quoting (a word starting with `#` begins a comment, so quote it) and executed directly, without `/bin/sh`. `stdout`/`stderr: capture` or `tee` behave as `inherit`. If the program cannot be executed, Rash exits with status 1. No later Rash task is executed. |
| stdin        |          | string  |                                   | Optional data written to the child stdin.                                                                                                                                                                                                                                                                                                                                               |
| stdout       |          | string  | capture<br>inherit<br>null<br>tee | stdout handling: `capture` (default, registered), `tee` (streamed live and registered), `inherit` (streamed live, not registered) or `null` (discarded; quote it in YAML).                                                                                                                                                                                                              |
| stderr       |          | string  | capture<br>inherit<br>null<br>tee | stderr handling: `capture` (default, registered), `tee` (streamed live and registered), `inherit` (streamed live, not registered) or `null` (discarded; quote it in YAML).                                                                                                                                                                                                              |

## Example

```yaml
- command:
    argv:
      - echo
      - "Hello World"
    transfer_pid: true

- command: ls examples
  register: ls_result

- command:
    argv: [cargo, build]
    stdout: tee
    stderr: tee

- command:
    cmd: ls .
    chdir: examples
  register: ls_result
```

{% endraw %}