---
title: git
weight: 5065
indent: true
---

{% raw %}
# git

Manage git checkouts of repositories.

## Attributes

```yaml
check_mode:
  support: full
diff_mode:
  support: none
```

## Parameters

| Parameter      | Required | Type    | Values | Description                                                                         |
|----------------|----------|---------|--------|-------------------------------------------------------------------------------------|
| repo           | true     | string  |        | The repository URL to clone.                                                        |
| dest           | true     | string  |        | The destination path where the repository should be cloned.                         |
| version        |          | string  |        | The version to checkout. Can be a branch, tag, or commit hash.                      |
| depth          |          | integer |        | Create a shallow clone with a history truncated to the specified number of commits. |
| single_branch  |          | boolean |        | Clone only the specified branch.                                                    |
| update         |          | boolean |        | Update an existing repository to the latest revision.                               |
| key_file       |          | string  |        | Path to the SSH private key file to use for authentication.                         |
| accept_hostkey |          | boolean |        | Automatically accept the host key when connecting via SSH.                          |
| force          |          | boolean |        | Force a reset to the specified version, discarding any local changes.               |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Clone application
///   git:
///     repo: https://github.com/user/app.git
///     dest: /opt/app
///     version: v1.2.0
///
/// - name: Clone with SSH
///   git:
///     repo: git@github.com:user/private-config.git
///     dest: /etc/app/config
///     key_file: /root/.ssh/deploy_key
///     accept_hostkey: yes
///
/// - name: Shallow clone
///   git:
///     repo: https://github.com/user/large-repo.git
///     dest: /opt/repo
///     depth: 1
///     single_branch: yes
///     version: main
///
/// - name: Update existing clone
///   git:
///     repo: https://github.com/user/app.git
///     dest: /opt/app
///     update: yes
/// ```}

{% endraw %}