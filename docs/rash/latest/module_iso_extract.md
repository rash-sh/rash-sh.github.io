---
title: iso_extract
weight: 5620
indent: true
---

{% raw %}
# iso_extract

Extract contents from ISO files.

## Attributes

```yaml
check_mode:
  support: full
diff_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                                    |
|-----------|----------|---------|--------|------------------------------------------------------------------------------------------------|
| dest      | true     | string  |        | Destination directory where files will be extracted.                                           |
| files     |          | array   |        | List of specific files to extract from the ISO. If not specified, all files will be extracted. |
| force     |          | boolean |        | Overwrite existing files in the destination directory. **[default: `false`]**                  |
| iso       | true     | string  |        | Path to the ISO file to extract.                                                               |

## Examples

```yaml
- name: Extract entire ISO
  iso_extract:
    iso: /tmp/image.iso
    dest: /mnt/extracted

- name: Extract specific files from ISO
  iso_extract:
    iso: /tmp/install.iso
    dest: /mnt/packages
    files:
      - /packages/core.pkg
      - /packages/utils.pkg

- name: Extract ISO with overwrite
  iso_extract:
    iso: /tmp/image.iso
    dest: /mnt/extracted
    force: true
```

{% endraw %}