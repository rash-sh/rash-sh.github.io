---
title: find
weight: 5100
indent: true
---

{% raw %}
# find

Return a list of files based on specific criteria.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter | Required | Type    | Values                           | Description                                                                                                                                                                                                                                                              |
|-----------|----------|---------|----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| excludes  |          | array   |                                  | Items whose basenames match an excludes pattern are culled from patterns matches.                                                                                                                                                                                        |
| file_type |          | string  | any<br>directory<br>file<br>link | Type of file to select.                                                                                                                                                                                                                                                  |
| follow    |          | boolean |                                  | Set this to true to follow symlinks                                                                                                                                                                                                                                      |
| hidden    |          | boolean |                                  | Set this to yes to include hidden files, otherwise they will be ignored.                                                                                                                                                                                                 |
| paths     | true     | array   |                                  | List of absolute paths of directories to search.                                                                                                                                                                                                                         |
| patterns  |          | array   |                                  | The patterns restrict the list of files to be returned to those whose basenames match at least one of the patterns specified. Multiple patterns can be specified using a list.                                                                                           |
| recurse   |          | boolean |                                  | If target is a directory, recursively descend into the directory looking for files.                                                                                                                                                                                      |
| size      |          | string  |                                  | Select files whose size is less than the specified size. Unqualified values are in bytes but B, KB, MB, GB, TB can be appended to specify bytes. KiB, MiB, GiB, TiB can be used too an represent binary values: 1 GiB = 1024 MiB. Size is not evaluated for directories. |

## Example

```yaml
- find:
    paths: /var/log
    file_type: file
  register: find_result

- command: echo "{{ find_result.extra }}"

- find:
    paths: /var/log
    recurse: no
    file_type: directory
    excludes: "nginx,mysql"
```

{% endraw %}