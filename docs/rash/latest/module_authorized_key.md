---
title: authorized_key
weight: 6070
indent: true
---

{% raw %}
# authorized_key

Add or remove SSH authorized keys for a user.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values            | Description                                                                          |
|-------------|----------|---------|-------------------|--------------------------------------------------------------------------------------|
| comment     |          | string  |                   | A comment to attach to the key. By default, this is extracted from the key.          |
| exclusive   |          | boolean |                   | Whether to remove all other non-specified keys from the file. **[default: `false`]** |
| key         |          |         |                   | The SSH public key(s). Can be a single key string or a list of keys.                 |
| key_options |          | string  |                   | A string of ssh key options to be prepended to the key.                              |
| manage_dir  |          | boolean |                   | Whether to create the .ssh directory if it doesn't exist. **[default: `true`]**      |
| path        |          | string  |                   | Alternate path to the authorized_keys file. By default, uses ~/.ssh/authorized_keys. |
| state       |          | string  | present<br>absent | Whether the key should be present or absent. **[default: `"present"`]**              |
| user        | true     | string  |                   | The username whose authorized_keys file should be modified.                          |

{$include_doc /// ## Examples
///
/// ```yaml
/// - authorized_key:
///     user: deploy
///     key: ssh-rsa AAAA... user@host
///     state: present
///
/// - authorized_key:
///     user: deploy
///     key: '{{ lookup("file", "~/.ssh/id_rsa.pub") }}'
///     state: present
///
/// - authorized_key:
///     user: deploy
///     key:
///       - ssh-rsa AAAA... user1@host
///       - ssh-ed25519 AAAA... user2@host
///     state: present
///
/// - authorized_key:
///     user: deploy
///     key: ssh-rsa AAAA... old@host
///     state: absent
///
/// - authorized_key:
///     user: deploy
///     key: ssh-rsa AAAA... deploy@host
///     exclusive: true
///     key_options: 'no-port-forwarding,from="10.0.1.1"'
/// ```}

{% endraw %}