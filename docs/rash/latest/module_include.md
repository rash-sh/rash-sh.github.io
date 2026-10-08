---
title: include
weight: 5078
indent: true
---

{% raw %}
# include

Include and execute tasks from another Rash file. Included tasks receive the caller context.
By default variables created by the include remain scoped; `export` can explicitly return all
or selected variables to the caller.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

`include` takes either the file path or a mapping:

| Parameter | Required | Type            | Values | Description                                                              |
| --------- | -------- | --------------- | ------ | ------------------------------------------------------------------------ |
| file      | true     | string          |        | Rash file whose tasks are executed with the caller's variables.          |
| export    | false    | boolean or list |        | Return all (`true`) or the listed variables set by the file to the caller. |

## Example

```yaml
- include: foo.rh

- include:
    file: "{{ rash.dir }}/detect.rh"
    export: true

- include:
    file: "{{ rash.dir }}/build.rh"
    export:
      - artifact
      - checksum
```

{% endraw %}