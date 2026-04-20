---
title: locale
weight: 5820
indent: true
---

{% raw %}
# locale

Manage system locale settings.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter         | Required | Type   | Values | Description                                     |
|-------------------|----------|--------|--------|-------------------------------------------------|
| lang              |          | string |        | Set the LANG environment variable.              |
| lc_address        |          | string |        | Set the LC_ADDRESS environment variable.        |
| lc_all            |          | string |        | Set the LC_ALL environment variable.            |
| lc_collate        |          | string |        | Set the LC_COLLATE environment variable.        |
| lc_ctype          |          | string |        | Set the LC_CTYPE environment variable.          |
| lc_identification |          | string |        | Set the LC_IDENTIFICATION environment variable. |
| lc_measurement    |          | string |        | Set the LC_MEASUREMENT environment variable.    |
| lc_messages       |          | string |        | Set the LC_MESSAGES environment variable.       |
| lc_monetary       |          | string |        | Set the LC_MONETARY environment variable.       |
| lc_name           |          | string |        | Set the LC_NAME environment variable.           |
| lc_numeric        |          | string |        | Set the LC_NUMERIC environment variable.        |
| lc_paper          |          | string |        | Set the LC_PAPER environment variable.          |
| lc_telephone      |          | string |        | Set the LC_TELEPHONE environment variable.      |
| lc_time           |          | string |        | Set the LC_TIME environment variable.           |
| name              |          | string |        | The locale name to manage (e.g., en_US.UTF-8).  |
| state             |          |        |        | Whether the locale should be present.           |

## Examples

```yaml
- name: Set system locale
  locale:
    name: en_US.UTF-8
    state: present

- name: Set all locale variables
  locale:
    lang: en_US.UTF-8
    lc_all: en_US.UTF-8

- name: Generate a locale
  locale:
    name: de_DE.UTF-8
    state: present

- name: Set specific locale variables
  locale:
    lang: en_US.UTF-8
    lc_ctype: en_US.UTF-8
    lc_messages: C
```

{% endraw %}