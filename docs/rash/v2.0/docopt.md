---
title: Command-line interfaces
weight: 7000
---

{% raw %}
# Command-line interfaces <!-- omit in toc -->

`rash` has an integrated command-line parser based in the documentation of your script.

This is an ad-hoc implementation based in [Docopt](http://docopt.org/). The main idea
behind is to write the documentation and `rash` automatically parses arguments based on it.

E.g.:

```yaml
#!/usr/bin/env -S rash --
#
# Copy files from source to dest dir
#
# Usage:
#   copy.rh [options] <source>... <dest>
#   copy.rh
#
# Options:
#   -h --help    show this help message and exit
#   --mode MODE  dest file permissions [default: 0644]

- copy:
    src: "{{ item }}"
    dest: "{{ dest }}/{{ item | split('/') | last }}"
    mode: "{{ options.mode }}"
  loop: "{{ source | default([]) }}"
```
{% endraw %}