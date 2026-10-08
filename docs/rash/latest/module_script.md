---
title: script
weight: 5158
indent: true
---

{% raw %}
# script

Execute script files with the same process IO semantics as `command` and `shell`.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type   | Values                            | Description                                                                                                                                                                                                |
|------------|----------|--------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| path       | true     | string |                                   | Path to the script file to execute.                                                                                                                                                                        |
| args       |          | string |                                   | Shell-like argument string, parsed with shlex: quotes group words and a word starting with `#` begins a comment, so quote it (`"'#channel'"`).                                                             |
| argv       |          | array  |                                   | Exact argument vector. Mutually exclusive with `args`.                                                                                                                                                     |
| chdir      |          | string |                                   | Change into this directory before running the script.                                                                                                                                                      |
| executable |          | string |                                   | Interpreter override, split like `args` (`python3 -u`; a word starting with `#` begins a comment). If absent, the shebang line is honored and split the same way; otherwise the file is executed directly. |
| stdin      |          | string |                                   | Optional data written to stdin.                                                                                                                                                                            |
| stdout     |          | string | capture<br>inherit<br>null<br>tee | stdout handling: `capture` (default, registered), `tee` (streamed live and registered), `inherit` (streamed live, not registered) or `null` (discarded; quote it in YAML).                                 |
| stderr     |          | string | capture<br>inherit<br>null<br>tee | stderr handling: `capture` (default, registered), `tee` (streamed live and registered), `inherit` (streamed live, not registered) or `null` (discarded; quote it in YAML).                                 |

## Example

```yaml
- script:
    path: ./scripts/setup.sh
    args: --verbose --skip-tests
    chdir: /opt/app

- script: ./deploy.sh

- script:
    path: ./scripts/migrate.py
    executable: python3
    stdout: tee
```

{% endraw %}