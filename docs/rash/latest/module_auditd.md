---
title: auditd
weight: 5130
indent: true
---

{% raw %}
# auditd

Manage Linux audit daemon rules.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values            | Description                                                                     |
|------------|----------|---------|-------------------|---------------------------------------------------------------------------------|
| reload     |          | boolean |                   | Whether to reload auditd after changes. **[default: `true`]**                   |
| rules      | true     | array   |                   | List of audit rules to add or remove.                                           |
| rules_file |          | string  |                   | Path to the audit rules file. **[default: `"/etc/audit/rules.d/audit.rules"`]** |
| state      |          | string  | present<br>absent | Whether the rules should be present or absent. **[default: `"present"`]**       |

## Examples

```yaml
- name: Add audit rules for identity files
  auditd:
    rules_file: /etc/audit/rules.d/audit.rules
    rules:
      - -w /etc/passwd -p wa -k identity
      - -w /etc/group -p wa -k identity
      - -w /etc/shadow -p wa -k identity
    state: present

- name: Add syscall audit rule
  auditd:
    rules_file: /etc/audit/rules.d/audit.rules
    rules:
      - -a always,exit -F arch=b64 -S execve -k exec
    state: present

- name: Remove specific audit rules
  auditd:
    rules_file: /etc/audit/rules.d/audit.rules
    rules:
      - -w /var/log -p wa -k logs
    state: absent

- name: Add rule without reload
  auditd:
    rules_file: /etc/audit/rules.d/audit.rules
    rules:
      - -w /etc/ssh/sshd_config -p wa -k ssh
    state: present
    reload: false
```

{% endraw %}