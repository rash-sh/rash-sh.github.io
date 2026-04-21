---
title: cgroups
weight: 5200
indent: true
---

{% raw %}
# cgroups

Manage Linux control groups (cgroups) for resource management.

Supports both cgroup v1 and v2 filesystem-based management.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                                    | Description                                                                                                                                                                                                                             |
|--------------|----------|---------|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cgroup_path  |          | string  |                                           | Base path for cgroup filesystem. **[default: `"/sys/fs/cgroup"`]**                                                                                                                                                                      |
| cpu_quota    |          | integer |                                           | CPU quota in microseconds per period (cgroup v2: cpu.max, v1: cpu.cfs_quota_us). A value of -1 removes the quota limit.                                                                                                                 |
| io_weight    |          | integer |                                           | IO weight between 10 and 1000 (cgroup v2: io.bfq.weight, v1: blkio.weight).                                                                                                                                                             |
| memory_limit |          | string  |                                           | Memory limit in bytes (cgroup v2: memory.max, v1: memory.limit_in_bytes). Use "max" for no limit.                                                                                                                                       |
| name         | true     | string  |                                           | Name of the cgroup to manage.                                                                                                                                                                                                           |
| pids_limit   |          | integer |                                           | Maximum number of PIDs (cgroup v2: pids.max, v1: pids/pids.max).                                                                                                                                                                        |
| state        |          | string  | present<br>absent<br>attached<br>detached | Desired state of the cgroup. `present` creates the cgroup with specified limits. `absent` removes the cgroup. `attached` attaches processes to the cgroup. `detached` moves all processes out of the cgroup. **[default: `"present"`]** |
| tasks        |          | array   |                                           | List of process IDs to attach to the cgroup. Only used with state=attached.                                                                                                                                                             |
| type         |          | string  | v2<br>v1                                  | Cgroup version to use: v1 or v2. If not specified, auto-detects from the system. **[default: auto-detected]**                                                                                                                           |

## Examples

```yaml
- name: Create a cgroup with CPU and memory limits
  cgroups:
    name: myapp
    state: present
    cpu_quota: 50000
    memory_limit: 536870912

- name: Create a cgroup with all resource limits
  cgroups:
    name: constrained
    state: present
    cpu_quota: 25000
    memory_limit: 268435456
    io_weight: 100
    pids_limit: 100
    type: v2

- name: Attach processes to cgroup
  cgroups:
    name: myapp
    state: attached
    tasks:
      - 1234
      - 5678

- name: Detach all processes from cgroup
  cgroups:
    name: myapp
    state: detached

- name: Remove a cgroup
  cgroups:
    name: myapp
    state: absent
```

{% endraw %}