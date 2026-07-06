---
title: known_hosts
weight: 5092
indent: true
---

{% raw %}
# known_hosts

Add or remove SSH known hosts entries.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values            | Description                                                                |
|------------------|----------|---------|-------------------|----------------------------------------------------------------------------|
| name             | true     | string  |                   | The host name or IP address to manage.                                     |
| key              |          | string  |                   | The SSH public key string. Required when state=present.                    |
| state            |          | string  | present<br>absent | Whether the host should be present or absent. **[default: `"present"`]**   |
| path             |          | string  |                   | Path to the known_hosts file. **[default: `"~/.ssh/known_hosts"`]**        |
| hash_host        |          | boolean |                   | Hash hostnames in the known_hosts file for privacy. **[default: `false`]** |
| fail_on_notfound |          | boolean |                   | Fail if host not found when state=absent. **[default: `false`]**           |

{$include_doc /// ## Examples
///
/// ```yaml
/// - known_hosts:
///     name: github.com
///     key: github.com ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC...
///
/// - known_hosts:
///     name: github.com
///     key: '{{ lookup("file", "~/.ssh/github_key.pub") }}'
///
/// - known_hosts:
///     name: old-server.local
///     state: absent
///
/// - known_hosts:
///     name: 192.168.1.100
///     key: 192.168.1.100 ecdsa-sha2-nistp256 AAAAE2VjZHNhLXNoYTItbmlzdHAyNTY...
///     path: /home/deploy/.ssh/known_hosts
/// ```}

{% endraw %}