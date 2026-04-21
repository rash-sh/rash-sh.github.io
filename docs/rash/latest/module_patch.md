---
title: patch
weight: 6300
indent: true
---

{% raw %}
# patch

Apply patch files to source files using the system `patch` command.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                                                                                                    |
|-----------|----------|---------|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
| backup    |          | boolean |                   | Create a backup of the original file before patching. **[default: `false`]**                                                   |
| basedir   |          | string  |                   | Base directory for applying the patch.                                                                                         |
| dest      | true     | string  |                   | Destination file to patch.                                                                                                     |
| dry_run   |          | boolean |                   | Test the patch without actually applying it. **[default: `false`]**                                                            |
| src       | true     | string  |                   | Path to the patch file to apply.                                                                                               |
| state     |          | string  | present<br>absent | Whether the patch should be applied or reversed. `present` applies the patch, `absent` reverses it. **[default: `"present"`]** |
| strip     |          | integer |                   | Number of leading path components to strip from file paths in the patch. **[default: `0`]**                                    |

## Examples

```yaml
- name: Apply security patch to application
  patch:
    src: /tmp/security.patch
    dest: /opt/app/src/main.rs
    backup: true

- name: Apply patch with stripped leading paths
  patch:
    src: /tmp/fix.patch
    dest: /opt/app/src/config.rs
    strip: 1

- name: Test patch without applying
  patch:
    src: /tmp/test.patch
    dest: /opt/app/src/main.rs
    dry_run: true

- name: Reverse a previously applied patch
  patch:
    src: /tmp/rollback.patch
    dest: /opt/app/src/main.rs
    state: absent
```

{% endraw %}