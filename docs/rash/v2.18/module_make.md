---
title: make
weight: 5560
indent: true
---

{% raw %}
# make

Run make commands for build automation.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type    | Values | Description                                               |
|-----------|----------|---------|--------|-----------------------------------------------------------|
| chdir     |          | string  |        | Change into this directory before running make.           |
| file      |          | string  |        | The makefile to use.                                      |
| jobs      |          | integer |        | Set the number of jobs to run simultaneously.             |
| params    |          | object  |        | Additional parameters to pass to make as key=value pairs. |
| target    |          | string  |        | The make target to run.                                   |

## Example

```yaml
- name: Build project
  make:
    chdir: /opt/project
    target: all
    jobs: 4

- name: Clean build artifacts
  make:
    chdir: /opt/project
    target: clean

- name: Install with custom Makefile
  make:
    chdir: /opt/project
    file: Makefile.local
    target: install

- name: Build with additional parameters
  make:
    chdir: /opt/project
    target: release
    params:
      PREFIX: /usr/local
      DEBUG: 0
```

{% endraw %}