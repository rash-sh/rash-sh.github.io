---
title: passwordstore
weight: 8300
indent: true
---

{% raw %}
# passwordstore

Lookup passwords from the passwordstore.org pass utility.

## Parameters

| Parameter | Required | Type    | Values | Description                                                                                                              |
| --------- | -------- | ------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| returnall |          | boolean |        | Return all the content of the password, not only the first line. **[default: `false`]**                                  |
| subkey    |          | string  |        | Return a specific subkey of the password. When set to password, always returns the first line. **[default: `password`]** |


## Example

```yaml
- name: Return the first line of the secret
  debug:
    msg: "{{ passwordstore('foo/boo') }}"

- name: Return all the content
  debug:
    msg: "{{ passwordstore('foo/boo', returnall=true) }}"

- name: Return just the username
  debug:
    msg: "{{ passwordstore('foo/boo', subkey='username') }}"
```

{% endraw %}