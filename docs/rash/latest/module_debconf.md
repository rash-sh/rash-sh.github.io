---
title: debconf
weight: 5250
indent: true
---

{% raw %}
# debconf

Configure a .deb package using debconf-set-selections.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values                                                                                           | Description                                                                                                      |
|-----------|----------|---------|--------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| name      | true     | string  |                                                                                                  | Name of package to configure.                                                                                    |
| question  |          | string  |                                                                                                  | A debconf configuration setting.                                                                                 |
| unseen    |          | boolean |                                                                                                  | Do not set 'seen' flag when pre-seeding.                                                                         |
| value     |          | string  |                                                                                                  | Value to set the configuration to.                                                                               |
| vtype     |          | string  | string<br>password<br>boolean<br>select<br>multiselect<br>note<br>text<br>error<br>title<br>seen | The type of the value supplied (string, password, boolean, select, multiselect, note, text, error, title, seen). |

## Example

```yaml
- name: Set default locale to fr_FR.UTF-8
  debconf:
    name: locales
    question: locales/default_environment_locale
    value: fr_FR.UTF-8
    vtype: select

- name: Set to generate locales
  debconf:
    name: locales
    question: locales/locales_to_be_generated
    value: en_US.UTF-8 UTF-8, fr_FR.UTF-8 UTF-8
    vtype: multiselect

- name: Accept oracle license
  debconf:
    name: oracle-java7-installer
    question: shared/accepted-oracle-license-v1-1
    value: "true"
    vtype: select

- name: Query package settings
  debconf:
    name: tzdata
  register: tzdata_settings

- name: Pre-configure tripwire site passphrase
  debconf:
    name: tripwire
    question: tripwire/site-passphrase
    value: "{{ site_passphrase }}"
    vtype: password
```

{% endraw %}