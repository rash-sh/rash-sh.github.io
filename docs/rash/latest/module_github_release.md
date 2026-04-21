---
title: github_release
weight: 5640
indent: true
---

{% raw %}
# github_release

Download release assets from GitHub releases.

## Attributes

```yaml
check_mode:
  support: partial
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                     |
|-----------|----------|---------|--------|-----------------------------------------------------------------|
| api_token |          | string  |        | GitHub API token for private repositories or higher rate limits |
| asset     |          | string  |        | Specific asset name pattern to download (regex supported)       |
| dest      | true     | string  |        | Destination path for downloaded file                            |
| mode      |          | string  |        | File permissions (default: 0755 for binaries)                   |
| repo      | true     | string  |        | GitHub repository in owner/repo format                          |
| tag       |          | string  |        | Release tag to download from (default: latest)                  |
| timeout   |          | integer |        | Timeout in seconds for API and download requests                |

## Examples

```yaml
- github_release:
    repo: hashicorp/terraform
    tag: "1.7.0"
    asset: "terraform_.*_linux_amd64.zip"
    dest: /usr/local/bin/terraform.zip
    mode: "0755"

- github_release:
    repo: hashicorp/nomad
    dest: /tmp/nomad

- github_release:
    repo: cli/cli
    tag: latest
    asset: "gh_.*_linux_amd64.tar.gz"
    dest: /tmp/gh.tar.gz
    mode: "0644"
```

{% endraw %}