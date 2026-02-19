---
title: assemble
weight: 6030
indent: true
---

{% raw %}
# assemble

Assemble configuration files from fragments.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values | Description                                                                                                                           |
|---------------|----------|---------|--------|---------------------------------------------------------------------------------------------------------------------------------------|
| delimiter     |          | string  |        | A delimiter to separate the file contents.                                                                                            |
| dest          | true     | string  |        | A file to create using the concatenation of all of the source files.                                                                  |
| ignore_hidden |          | boolean |        | A boolean that controls if files that start with a `.` will be included or not. **[default: `false`]**                                |
| mode          |          | string  |        | Permissions of the destination file.                                                                                                  |
| regexp        |          | string  |        | Assemble files only if the given regular expression matches the filename. If not set, all files are assembled.                        |
| src           | true     | string  |        | An already existing directory full of source files.                                                                                   |
| validate      |          | string  |        | The validation command to run before copying into place. The path to the file to validate is passed in by `%s` which must be present. |

## Examples

```yaml
- name: Assemble from fragments from a directory
  assemble:
    src: /etc/someapp/fragments
    dest: /etc/someapp/someapp.conf

- name: Insert the provided delimiter between fragments
  assemble:
    src: /etc/someapp/fragments
    dest: /etc/someapp/someapp.conf
    delimiter: '### START FRAGMENT ###'

- name: Assemble a new "sshd_config" file into place, after passing validation
  assemble:
    src: /etc/ssh/conf.d/
    dest: /etc/ssh/sshd_config
    validate: /usr/sbin/sshd -t -f %s
```

{% endraw %}