---
title: script
weight: 6260
indent: true
---

{% raw %}
# script

Execute script files.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter  | Required | Type   | Values | Description                                                                                               |
|------------|----------|--------|--------|-----------------------------------------------------------------------------------------------------------|
| args       |          | string |        | Arguments to pass to the script.                                                                          |
| chdir      |          | string |        | Change into this directory before running the script.                                                     |
| executable |          | string |        | The interpreter to use for executing the script. If not provided, the script's shebang line will be used. |
| path       | true     | string |        | Path to the script file to execute.                                                                       |

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
```

{% endraw %}