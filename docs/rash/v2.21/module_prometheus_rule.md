---
title: prometheus_rule
weight: 5148
indent: true
---

{% raw %}
# prometheus_rule

Manage Prometheus alerting rule groups in rule files.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                            |
|-----------|----------|--------|-------------------|------------------------------------------------------------------------|
| file      | true     | string |                   | The absolute path to the Prometheus rules file.                        |
| interval  |          | string |                   | Evaluation interval for the rule group (e.g., `30s`, `5m`).            |
| name      | true     | string |                   | The name of the rule group.                                            |
| state     |          | string | present<br>absent | Whether the rule group should exist or not. **[default: `"present"`]** |

{$include_doc /// ## Examples
///
/// ```yaml
/// - prometheus_rule:
///     file: /etc/prometheus/alert.rules
///     name: node_alerts
///     rules:
///       - alert: HighCPU
///         expr: cpu_usage > 80
///         for: 5m
///         labels:
///           severity: warning
///
/// - prometheus_rule:
///     file: /etc/prometheus/alert.rules
///     name: node_alerts
///     interval: 30s
///     rules:
///       - alert: HighMemory
///         expr: memory_usage > 90
///         for: 10m
///
/// - prometheus_rule:
///     file: /etc/prometheus/alert.rules
///     name: deprecated_alerts
///     state: absent
/// ```}

{% endraw %}