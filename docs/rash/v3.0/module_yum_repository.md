---
title: yum_repository
weight: 5199
indent: true
---

{% raw %}
# yum_repository

Manage YUM/DNF repositories on RHEL/Fedora systems.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter   | Required | Type    | Values            | Description                                                                                    |
|-------------|----------|---------|-------------------|------------------------------------------------------------------------------------------------|
| name        | true     | string  |                   | Repository name (section name in the .repo file).                                              |
| baseurl     |          |         |                   | Base URL for the repository. Can be a single URL or a list of URLs.                            |
| description |          | string  |                   | A human-readable description of the repository. Maps to the `name` key in the repository file. |
| enabled     |          | boolean |                   | Whether the repository is enabled. **[default: `true`]**                                       |
| gpgcheck    |          | boolean |                   | Whether to check GPG signatures on packages.                                                   |
| gpgkey      |          | string  |                   | URL to the GPG key for the repository.                                                         |
| state       |          | string  | present<br>absent | Whether the repository should exist or not. **[default: `"present"`]**                         |
| file        |          | string  |                   | Repository file name (without .repo extension). Defaults to the repository name.               |
| mirrorlist  |          | string  |                   | Repository mirror list URL.                                                                    |
| metalink    |          | string  |                   | Metalink URL for the repository.                                                               |
| priority    |          | integer |                   | Repository priority (lower = higher priority).                                                 |
| cost        |          | integer |                   | Cost of this repository relative to others.                                                    |
| exclude     |          | string  |                   | Exclude specific packages from this repository.                                                |
| includepkgs |          | string  |                   | Include only specific packages from this repository.                                           |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Add EPEL repository
///   yum_repository:
///     name: epel
///     description: EPEL YUM repo
///     baseurl: https://download.fedoraproject.org/pub/epel/$releasever/$basearch/
///     gpgcheck: true
///     gpgkey: https://download.fedoraproject.org/pub/epel/RPM-GPG-KEY-EPEL-$releasever
///
/// - name: Add repository with multiple baseurls
///   yum_repository:
///     name: myrepo
///     description: My Custom Repository
///     baseurl:
///       - http://mirror1.example.com/repo/
///       - http://mirror2.example.com/repo/
///
/// - name: Remove old repository
///   yum_repository:
///     name: old-repo
///     state: absent
///
/// - name: Disable a repository
///   yum_repository:
///     name: epel
///     description: EPEL YUM repo
///     baseurl: https://download.fedoraproject.org/pub/epel/$releasever/$basearch/
///     enabled: false
/// ```}

{% endraw %}