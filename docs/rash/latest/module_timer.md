---
title: timer
weight: 6750
indent: true
---

{% raw %}
# timer

Time task execution for debugging and performance profiling.

This module provides named timers that can be started, stopped, and read
to measure elapsed time between tasks. Useful for debugging, performance
optimization, and IoT devices with limited resources.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values                     | Description |
|-----------|----------|--------|----------------------------|-------------|
| name      | true     | string |                            |             |
| precision |          | string | ms<br>us<br>ns             |             |
| state     |          | string | started<br>stopped<br>read |             |

## Examples

### Basic timing

```yaml
- name: Start performance timer
  timer:
    name: app_startup
    state: started

- name: Run application startup
  command: ./startup.sh

- name: Stop timer and get elapsed time
  timer:
    name: app_startup
    state: stopped
  register: elapsed

- name: Log startup time
  debug:
    msg: "Startup took {{ elapsed.extra.elapsed_ms }} milliseconds"
```

### Read without stopping

```yaml
- timer:
    name: long_operation
    state: started

- command: ./step1.sh

- timer:
    name: long_operation
    state: read
  register: checkpoint

- debug:
    msg: "Checkpoint: {{ checkpoint.extra.elapsed_ms }}ms elapsed"

- command: ./step2.sh

- timer:
    name: long_operation
    state: stopped
  register: final_time
```

### Multiple timers with different precision

```yaml
- timer:
    name: fast_op
    state: started
    precision: us

- command: ./fast.sh

- timer:
    name: fast_op
    state: stopped
  register: fast_elapsed

- debug:
    msg: "Fast op took {{ fast_elapsed.extra.elapsed_us }} microseconds"
```

{% endraw %}