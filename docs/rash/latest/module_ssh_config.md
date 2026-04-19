---
title: ssh_config
weight: 6200
indent: true
---

{% raw %}
{$include_doc /// # ssh_config
///
/// Manage SSH client configuration in ~/.ssh/config or /etc/ssh/ssh_config.
///
/// ## Attributes
///
/// ```yaml
/// check_mode:
///   support: full
/// ```}

## Parameters

| Parameter       | Required | Type   | Values            | Description                                                                    |
|-----------------|----------|--------|-------------------|--------------------------------------------------------------------------------|
| host            | true     | string |                   | The host pattern to configure (e.g., "github.com", "*.example.com").           |
| options         |          |        |                   | SSH options to set as a dictionary of key-value pairs.                         |
| order           |          | string | first<br>last     | Order of host entry placement (first, last, or None for in-place update).      |
| ssh_config_file |          | string |                   | Path to the SSH config file. **[default: `"~/.ssh/config"`]**                  |
| state           |          | string | present<br>absent | Whether the host entry should be present or absent. **[default: `"present"`]** |

{$include_doc /// ## Examples
///
/// ```yaml
/// - ssh_config:
///     host: github.com
///     options:
///       hostname: github.com
///       user: git
///       identityfile: ~/.ssh/github_key
///
/// - ssh_config:
///     host: "*.example.com"
///     options:
///       user: deploy
///       port: "2222"
///
/// - ssh_config:
///     host: old-server
///     state: absent
///
/// - ssh_config:
///     host: tunnel-server
///     options:
///       hostname: 192.168.1.100
///       localforward: "8080:localhost:80"
///     ssh_config_file: /etc/ssh/ssh_config
/// ```}

{% endraw %}