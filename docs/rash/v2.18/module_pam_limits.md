---
title: pam_limits
weight: 5700
indent: true
---

{% raw %}
# pam_limits

Manage Linux PAM limits (ulimits).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                                                                                                                                                                                   | Description                                                                |
|------------|----------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| backup     |          | boolean |                                                                                                                                                                                          | Create a backup file before modifying. **[default: `false`]**              |
| comment    |          | string  |                                                                                                                                                                                          | Comment associated with the limit.                                         |
| dest       |          | string  |                                                                                                                                                                                          | Path to the limits.conf file. **[default: `"/etc/security/limits.conf"`]** |
| domain     | true     | string  |                                                                                                                                                                                          | A username, @groupname, wildcard *, or UID/GID range.                      |
| item       | true     | string  | core<br>data<br>fsize<br>memlock<br>nofile<br>rss<br>stack<br>cpu<br>nproc<br>as<br>maxlogins<br>maxsyslogins<br>priority<br>locks<br>sigpending<br>msgqueue<br>nice<br>rtprio<br>chroot | The limit item to set.                                                     |
| limit_type | true     | string  | hard<br>soft<br>-                                                                                                                                                                        | Limit type: hard, soft, or - (both).                                       |
| state      |          | string  | present<br>absent                                                                                                                                                                        | Whether the entry should be present or absent. **[default: `"present"`]**  |
| value      |          | string  |                                                                                                                                                                                          | The value of the limit. Required when state=present.                       |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Set max open files limit for nginx user
///   pam_limits:
///     domain: nginx
///     limit_type: soft
///     item: nofile
///     value: "65535"
///
/// - name: Set hard limit for max processes
///   pam_limits:
///     domain: '*'
///     limit_type: hard
///     item: nproc
///     value: "4096"
///
/// - name: Remove memlock limit for user
///   pam_limits:
///     domain: myuser
///     limit_type: soft
///     item: memlock
///     value: unlimited
///
/// - name: Set limits in a custom file with comment
///   pam_limits:
///     domain: "@developers"
///     limit_type: "-"
///     item: nofile
///     value: "100000"
///     dest: /etc/security/limits.d/99-developers.conf
///     comment: Custom limits for developers
///
/// - name: Ensure limit does not exist
///   pam_limits:
///     domain: olduser
///     limit_type: soft
///     item: nofile
///     state: absent
/// ```}

{% endraw %}