---
title: copy
weight: 4300
indent: true
---
# copy

Copy files to path.

## Parameters

```yaml
content:
  type: string
  required: true
  description: Sets the contents of a file directly to the specified value.
dest:
  type: string
  required: true
  description: The absolute path where the file should be copied to.
mode:
  type: string
  description: Permissions of the destination file or directory.
```

## Examples

```yaml
- copy:
    content: "supersecret"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```