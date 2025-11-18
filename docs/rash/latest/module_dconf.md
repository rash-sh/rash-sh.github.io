---
title: dconf
weight: 6050
indent: true
---

{% raw %}
# dconf

Modify and read dconf database.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values | Description                                                                                        |
|-----------|----------|--------|--------|----------------------------------------------------------------------------------------------------|
| key       | true     | string |        | The dconf key path (e.g., "/org/gnome/desktop/input-sources/sources")                              |
| state     |          |        |        | The desired state for the key (present, read, or absent). Defaults to present.                     |
| value     |          | string |        | The value to set for the key. Uses GVariant syntax, so strings need single quotes like "'myvalue'" |

## Example

```yaml
- name: Configure available keyboard layouts in Gnome
  dconf:
    key: "/org/gnome/desktop/input-sources/sources"
    value: "[('xkb', 'us'), ('xkb', 'se')]"
    state: present

- name: Read currently available keyboard layouts in Gnome
  dconf:
    key: "/org/gnome/desktop/input-sources/sources"
    state: read
  register: keyboard_layouts

- name: Reset the available keyboard layouts in Gnome
  dconf:
    key: "/org/gnome/desktop/input-sources/sources"
    state: absent

- name: Set string value
  dconf:
    key: "/org/gnome/desktop/background/picture-uri"
    value: "'file:usr/share/backgrounds/gnome/adwaita-day.jpg'"
```

{% endraw %}