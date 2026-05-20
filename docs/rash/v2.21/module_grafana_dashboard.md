---
title: grafana_dashboard
weight: 5069
indent: true
---

{% raw %}
# grafana_dashboard

Manage Grafana dashboards (create, update, delete).

Create, update, or delete Grafana dashboards via the Grafana HTTP API.
Supports dashboard JSON definitions, folder assignment, and overwrite
behavior. Useful for monitoring infrastructure automation.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values            | Description                                              |
|-----------|----------|---------|-------------------|----------------------------------------------------------|
| dashboard |          |         |                   | Dashboard JSON definition as a dict.                     |
| folder    |          | string  |                   | Folder name to place the dashboard in.                   |
| name      | true     | string  |                   | Dashboard name (used for identification and display).    |
| overwrite |          | boolean |                   | Whether to overwrite an existing dashboard if it exists. |
| state     |          | string  | present<br>absent | The desired state of the dashboard.                      |
| token     |          | string  |                   | Grafana API token for authentication.                    |
| uid       |          | string  |                   | Dashboard UID (unique identifier).                       |
| url       |          | string  |                   | Grafana server URL.                                      |

## Examples

```yaml
- name: Create a Grafana dashboard
  grafana_dashboard:
    name: app-metrics
    folder: Applications
    dashboard:
      title: App Metrics
      panels: []
    state: present

- name: Create dashboard with UID and overwrite
  grafana_dashboard:
    name: system-overview
    uid: sys-overview-01
    dashboard:
      title: System Overview
      panels:
        - title: CPU Usage
          type: graph
    overwrite: true
    state: present

- name: Delete a Grafana dashboard
  grafana_dashboard:
    name: old-dashboard
    state: absent

- name: Create dashboard with custom URL and token
  grafana_dashboard:
    name: custom-dashboard
    url: https://grafana.example.com
    token: "{{ grafana_api_token }}"
    dashboard:
      title: Custom Dashboard
    state: present
```

{% endraw %}