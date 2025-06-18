---
title: file
weight: 8100
indent: true
---

{% raw %}
# file

Read file contents from the filesystem.

## Parameters

| Parameter | Required | Type    | Values | Description                                                                         |
| --------- | -------- | ------- | ------ | ----------------------------------------------------------------------------------- |
| path      | yes      | string  |        | Path(s) of files to read                                                           |
| lstrip    | no       | boolean | true/false | Whether or not to remove whitespace from the beginning of the file. **[default: `false`]** |
| rstrip    | no       | boolean | true/false | Whether or not to remove whitespace from the ending of the file. **[default: `true`]** |

## Notes

- This lookup returns the contents from a file on the local filesystem.
- When keyword and positional parameters are used together, positional parameters must be listed before keyword parameters.
- If read in variable context, the file can be interpreted as YAML if the content is valid to the parser.
- This lookup does not understand 'globbing', use the fileglob lookup instead.
- The file must be readable by the user running the script.


## Example

```yaml
- name: Read a file
  debug:
    msg: "{{ file('/etc/hostname') }}"

- name: Read file without stripping whitespace
  debug:
    msg: "{{ file('/tmp/data.txt', rstrip=false) }}"

- name: Read file and strip whitespace from both ends
  debug:
    msg: "{{ file('/tmp/config.txt', lstrip=true, rstrip=true) }}"

- name: Read multiple files in a loop
  debug:
    msg: "{{ item }}"
  loop:
    - "{{ file('/etc/hostname') }}"
    - "{{ file('/etc/os-release') }}"
```

{% endraw %}