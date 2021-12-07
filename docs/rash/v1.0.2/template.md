---
title: template
weight: 4400
indent: true
---
# template

Render [Tera template](https://tera.netlify.app/docs/#templates).

## Parameters

```yaml
src:
  type: string
  required: true
  description: |
    Path of Tera formatted template.
    This can be a relative or an absolute path.
dest:
  type: string
  required: true
  description: Absolute path where the file should be rendered to.
mode:
  type: string
  description: Permissions of the destination file or directory.
```
## Examples

```yaml
- template:
    src: "template.j2"
    dest: /tmp/MY_PASSWORD_FILE.txt
    mode: "0400"
```