---
title: haproxy
weight: 5710
indent: true
---

{% raw %}
# haproxy

Manage HAProxy load balancer backend and frontend configurations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type   | Values                        | Description                                                                         |
|-------------|----------|--------|-------------------------------|-------------------------------------------------------------------------------------|
| balance     |          | string |                               | Load balancing algorithm (e.g., roundrobin, leastconn, source).                     |
| check       |          | string |                               | Health check option string (e.g., "option httpchk GET /health").                    |
| config_file |          | string |                               | Path to the HAProxy configuration file. **[default: `"/etc/haproxy/haproxy.cfg"`]** |
| name        | true     | string |                               | Backend or frontend section name.                                                   |
| section     |          | string | backend<br>frontend<br>listen | Section type to manage. **[default: `"backend"`]**                                  |
| servers     |          | array  |                               | List of backend servers with name, address, and optional check flag.                |
| state       |          | string | present<br>absent             | Whether the section should be present or absent. **[default: `"present"`]**         |

## Examples

```yaml
- name: Create backend with servers
  haproxy:
    config_file: /etc/haproxy/haproxy.cfg
    name: web_backend
    state: present
    servers:
      - name: web1
        address: 192.168.1.10:80
      - name: web2
        address: 192.168.1.11:80
    balance: roundrobin

- name: Create backend with health checks
  haproxy:
    config_file: /etc/haproxy/haproxy.cfg
    name: web_backend
    state: present
    balance: leastconn
    check: option httpchk GET /health
    servers:
      - name: web1
        address: 192.168.1.10:80
        check: true
      - name: web2
        address: 192.168.1.11:80
        check: true

- name: Remove backend
  haproxy:
    config_file: /etc/haproxy/haproxy.cfg
    name: old_backend
    state: absent

- name: Create frontend
  haproxy:
    config_file: /etc/haproxy/haproxy.cfg
    name: http-in
    section: frontend
    state: present
    check: bind *:80
```

{% endraw %}