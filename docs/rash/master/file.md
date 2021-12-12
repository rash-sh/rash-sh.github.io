---
title: file
weight: 4400
indent: true
---
# file

Manage files and file properties.

## Parameters

```yaml
path:
  type: string
  required: true
  description: Absolute path to the file being managed.
mode:
  type: string
  description: Permissions of the destination file or directory.
state:
  type: string
  default: file
  enum:
    - absent
    - directory
    - file
    - touch
```
## Example

```yaml
- file:
    path: /work
    state: absent

- file:
    path: /yea
    state: present
    mode: 0644
```