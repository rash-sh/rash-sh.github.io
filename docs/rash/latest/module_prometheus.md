---
title: prometheus
weight: 6420
indent: true
---

{% raw %}
# prometheus

Manage Prometheus monitoring configuration, including targets, alert rules, and scrape configs.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values                         | Description                                                                                                          |
|------------------|----------|---------|--------------------------------|----------------------------------------------------------------------------------------------------------------------|
| action           |          | string  | get<br>add<br>remove<br>update | Action to perform on the Prometheus configuration. **[default: `"get"`]**                                            |
| alert_rules_file |          | string  |                                | Path to the alert rules file. If not set, alert rules are written to a `rules` subdirectory next to the config file. |
| config_file      |          | string  |                                | Path to the main Prometheus configuration file. **[default: `"/etc/prometheus/prometheus.yml"`]**                    |
| reload           |          | boolean |                                | Reload Prometheus after changes by sending SIGHUP. **[default: `true`]**                                             |

## Examples

```yaml
- prometheus:
    action: add
    targets:
      - job_name: node
        static_configs:
          - targets: ['localhost:9100']
    reload: true

- prometheus:
    action: add
    targets:
      - job_name: prometheus
        static_configs:
          - targets: ['localhost:9090']
    config_file: /etc/prometheus/prometheus.yml

- prometheus:
    action: remove
    targets:
      - job_name: node

- prometheus:
    action: update
    targets:
      - job_name: node
        scrape_interval: 15s
        static_configs:
          - targets: ['localhost:9100', 'localhost:9101']

- prometheus:
    action: add
    alert_rules:
      groups:
        - name: example
          rules:
            - alert: HighRequestLatency
              expr: job:request_latency_seconds:mean5m{job="myjob" > 0.5
///               for: 10m
///               labels:
///                 severity: page
///               annotations:
///                 summary: High request latency
///
/// - prometheus:
///     action: get
///
/// - prometheus:
///     action: add
///     targets:
///       - job_name: node
///         static_configs:
///           - targets: ['localhost:9100']
///     alert_rules:
///       groups:
///         - name: node_alerts
///           rules:
///             - alert: NodeDown
///               expr: up == 0
///               for: 5m
///     reload: true
/// ```}

{% endraw %}