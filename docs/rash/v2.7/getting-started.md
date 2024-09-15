---
title: Getting started
weight: 2000
---

{% raw %}
# Getting started

Simple YAML declarative shell scripting language based on modules and templates.
`rash` syntax is inspired by [Ansible](https://www.ansible.com/).

## Quickstart

To start using `rash` you just need a container with entrypoint.
For install, add `rash` binary to your Dockerfile:

```dockerfile
FROM rustagainshell/rash AS rash
FROM nginx
COPY --from=rash /bin/rash /bin

COPY entrypoint.rh /
ENTRYPOINT ["/entrypoint.rh"]
```

Also, you must create your first `entrypoint.rh`:

```yaml
#!/bin/rash
- copy:
    content: |
      server {
        listen       80;

        {% for domain in env.DOMAINS | split(',') -%}
        {% set path = domain | split('.') | first -%}
        location /{{ path }} {
            rewrite /{{ path }}[/]?(.*) /$1 break;
            proxy_pass http://{{ domain }};
        }
        {% endfor %}
      }
    dest: /etc/nginx/conf.d/default.conf

- command:
    argv: [nginx, '-g', 'daemon off;']
    transfer_pid: true
```

Or instead, you could want to use `rash` for local scripting. In that case you can follow
our [installation guide](installation.md).

## Syntax

YAML syntax based on [modules](module_index.md).

Besides, `rash` includes [MiniJinja](https://docs.rs/minijinja/) templates which you can use
anywhere. You can use all its functions and combine them as you want.

`rash` implements custom [builtins](vars.md), too. For example, `{{ rash.path }}` or
`{{ env.MY_ENV_VAR }}`.
{% endraw %}