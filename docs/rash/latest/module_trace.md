---
title: trace
weight: 6330
indent: true
---

{% raw %}
# trace

Trace system activity using eBPF via bpftrace.

This module provides pre-built probes for common tracing scenarios without
requiring bpftrace knowledge. For advanced use cases, custom bpftrace
expressions can be provided.

## Prerequisites

- `bpftrace` must be installed and available in PATH
- Root privileges (via `become: true`) are typically required

## Return Values

When registered, the following fields are available:

- `extra.events`: List of captured events
- `extra.stats.total`: Total number of events
- `extra.stats.by_comm`: Event count grouped by command name
- `extra.duration_ms`: Actual trace duration in milliseconds

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter | Required | Type   | Values | Description |
|-----------|----------|--------|--------|-------------|
| probe     |          | string |        |             |
| expr      |          | string |        |             |
| duration  |          | string |        |             |
| filter    |          | string |        |             |

## Examples

### Trace file opens during startup

```yaml
- trace:
    probe: file_opens
    duration: 10s
  register: files

- debug:
    msg: "Files opened: {{ files.extra.events | length }"
/// ```
///
/// ### Trace process execution
///
/// ```yaml
/// - trace:
///     probe: process_exec
///     duration: 5s
///   become: true
///   register: procs
/// ```
///
/// ### Filter syscalls
///
/// ```yaml
/// - trace:
///     probe: syscalls
///     filter: open,openat,read,write
///     duration: 10s
///   register: syscalls
/// ```
///
/// ### Custom bpftrace expression
///
/// ```yaml
/// - trace:
///     expr: 'tracepoint:syscalls:sys_enter_open { @[comm] = count(); }'
///     duration: 10s
///   become: true
///   register: custom
/// ```}

{% endraw %}