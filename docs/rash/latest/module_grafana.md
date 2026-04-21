---
title: grafana
weight: 5660
indent: true
---

{% raw %}
# grafana

Manage Grafana dashboards, datasources, folders, and organizations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                         | Description |
|----------------|----------|---------|--------------------------------|-------------|
| action         |          | string  | get<br>add<br>remove<br>update |             |
| api_key        |          | string  |                                |             |
| dashboard      |          |         |                                |             |
| datasource     |          |         |                                |             |
| folder         |          |         |                                |             |
| org            |          |         |                                |             |
| password       |          | string  |                                |             |
| timeout        |          | integer |                                |             |
| url            |          | string  |                                |             |
| username       |          | string  |                                |             |
| validate_certs |          | boolean |                                |             |

## Examples

```yaml
- name: Add a Prometheus datasource
  grafana:
    action: add
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    datasource:
      name: Prometheus
      type: prometheus
      url: http://prometheus:9090

- name: Get a datasource by name
  grafana:
    action: get
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    datasource:
      name: Prometheus
  register: ds_info

- name: Update a datasource
  grafana:
    action: update
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    datasource:
      name: Prometheus
      type: prometheus
      url: http://prometheus-new:9090
      access: proxy

- name: Remove a datasource
  grafana:
    action: remove
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    datasource:
      name: Prometheus

- name: Add a dashboard
  grafana:
    action: add
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    dashboard:
      title: My Dashboard
      uid: my-dashboard
      panels:
        - title: CPU Usage
          type: graph
          datasource: Prometheus

- name: Get a dashboard
  grafana:
    action: get
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    dashboard:
      uid: my-dashboard
  register: dashboard_info

- name: Remove a dashboard
  grafana:
    action: remove
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    dashboard:
      uid: my-dashboard

- name: Add a folder
  grafana:
    action: add
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    folder:
      title: My Folder
      uid: my-folder

- name: Remove a folder
  grafana:
    action: remove
    url: http://grafana:3000
    api_key: "{{ grafana_api_key }}"
    folder:
      uid: my-folder

- name: Add an organization
  grafana:
    action: add
    url: http://grafana:3000
    username: admin
    password: admin
    org:
      name: Engineering

- name: Get all organizations
  grafana:
    action: get
    url: http://grafana:3000
    username: admin
    password: admin
    org: {}
  register: orgs
```

{% endraw %}