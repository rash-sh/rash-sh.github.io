---
title: stat
weight: 6270
indent: true
---

{% raw %}
# stat

Retrieve file or file system status.

## Attributes

```yaml
check_mode:
  support: always
```

## Parameters

| Parameter          | Required | Type    | Values                | Description                                                                                           |
|--------------------|----------|---------|-----------------------|-------------------------------------------------------------------------------------------------------|
| checksum_algorithm |          | string  | md5<br>sha1<br>sha256 | Algorithm to determine checksum of file. **[default: `"sha256"`]**                                    |
| follow             |          | boolean |                       | Whether to follow symlinks. **[default: `false`]**                                                    |
| get_attributes     |          | boolean |                       | Whether to get the attributes of a file. **[default: `true`]**                                        |
| get_checksum       |          | boolean |                       | Whether to get the checksum of a file. **[default: `true`]**                                          |
| get_md5            |          | boolean |                       | Whether to get the md5 checksum of a file. **[default: `true`]**                                      |
| get_mime           |          | boolean |                       | Whether to get the mime type of a file. Requires file command to be available. **[default: `false`]** |
| path               | true     | string  |                       | The full path of the file/object to get the facts of.                                                 |

{$include_doc /// ## Example
///
/// ```yaml
/// - stat:
///     path: /etc/app/config.json
///   register: config_stat
///
/// - name: Only run if config exists and is recent
///   command:
///     cmd: ./reload-config.sh
///   when: config_stat.stat.exists and config_stat.stat.mtime > (ansible_date_time.epoch | int - 86400)
///
/// - stat:
///     path: /path/to/file
///     checksum_algorithm: sha256
///   register: file_stat
///
/// - debug:
///     var: "file_stat.stat.checksum"
/// ```}

{% endraw %}