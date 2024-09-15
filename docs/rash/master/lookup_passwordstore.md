---
title: passwordstore
weight: 8200
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
- debug:
    msg: "{{ passwordstore('foo/boo') }}"

- debug:
    msg: "{{ passwordstore('foo/boo', returnall=true) }}"
```

{% endraw %}