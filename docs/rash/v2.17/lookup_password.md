---
title: password
weight: 8300
indent: true
---

{% raw %}
# password

Generate a random plaintext password and store it in a file at a given filepath.

## Parameters

| Parameter | Required | Type    | Values | Description                                                                         |
| --------- | -------- | ------- | ------ | ----------------------------------------------------------------------------------- |
| path      | yes      | string  |        | Path to the file that stores/will store the password                               |
| length    | no       | integer |        | The length of the generated password. **[default: `20`]**                         |
| chars     | no       | array   |        | Character sets to use for password generation. **[default: `['ascii_letters', 'digits', 'punctuation']`]** |
| seed      | no       | string  |        | A seed to initialize the random number generator for idempotent passwords          |

## Notes

- If the file exists previously, it will retrieve its contents (behaves like reading a file).
- Usage of /dev/null as a path generates a new random password each time without storing it.
- The file must be readable by the user running the script, or the user must have sufficient privileges to create it.
- Empty files cause the password to return as an empty string.


## Example

```yaml
- name: Generate or retrieve a password
  debug:
    msg: "Password: {{ password('/tmp/mypassword') }}"

- name: Generate a short password with only letters
  debug:
    msg: "Simple password: {{ password('/tmp/simple', length=8, chars=['ascii_letters']) }}"

- name: Generate a digits-only password
  debug:
    msg: "PIN: {{ password('/tmp/pin', length=4, chars=['digits']) }}"

- name: Generate temporary password (not stored)
  debug:
    msg: "Temp password: {{ password('/dev/null', length=12) }}"

- name: Generate idempotent password with seed
  debug:
    msg: "Seeded password: {{ password('/dev/null', seed='my-seed', length=16) }}"
```

{% endraw %}