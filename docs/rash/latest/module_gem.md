---
title: gem
weight: 5540
indent: true
---

{% raw %}
# gem

Manage Ruby gems with the gem package manager.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter            | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                            |
|----------------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bundler              |          | boolean |                             | Use bundler instead of gem command. When true, runs bundle install for Gemfile management. **[default: `false`]**                                                                                                                                                                      |
| chdir                |          | string  |                             | Directory to run bundler from (for Gemfile location). Only used when bundler is true.                                                                                                                                                                                                  |
| executable           |          | string  |                             | Path of the binary to use. **[default: `"gem"`]**                                                                                                                                                                                                                                      |
| extra_args           |          | string  |                             | Additional options to pass to gem.                                                                                                                                                                                                                                                     |
| gem_source           |          | string  |                             | Custom gem source (repository URL).                                                                                                                                                                                                                                                    |
| include_dependencies |          | boolean |                             | Include dependencies when installing. **[default: `true`]**                                                                                                                                                                                                                            |
| install_dir          |          | string  |                             | Custom installation directory for gems.                                                                                                                                                                                                                                                |
| name                 |          | array   |                             | Name or list of names of the gem(s) to install, upgrade, or remove.                                                                                                                                                                                                                    |
| pre_release          |          | boolean |                             | Allow installation of pre-release versions. **[default: `false`]**                                                                                                                                                                                                                     |
| state                |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired gem is installed. `absent` will remove the specified gem. `latest` will update the specified gem to the latest version. **[default: `"present"`]** |
| user_install         |          | boolean |                             | Install gem in user's home directory. When false, installs to system-wide gem directory (may require root). **[default: `true`]**                                                                                                                                                      |
| version              |          | string  |                             | Version of the gem to install/upgrade. Can be a specific version or a constraint (e.g., ">= 1.0", "~> 2.0").                                                                                                                                                                           |

{$include_doc /// ## Example
///
/// ```yaml
/// - name: Install a gem
///   gem:
///     name: bundler
///     state: present
///
/// - name: Install specific version of a gem
///   gem:
///     name: rails
///     version: "7.0.0"
///     state: present
///
/// - name: Install gem with version constraint
///   gem:
///     name: rake
///     version: ">= 13.0"
///     state: present
///
/// - name: Install gem to user directory
///   gem:
///     name: rubocop
///     user_install: true
///
/// - name: Install pre-release version
///   gem:
///     name: some_gem
///     pre_release: true
///
/// - name: Install from specific source
///   gem:
///     name: private_gem
///     gem_source: https://gems.example.com
///
/// - name: Install gems from Gemfile
///   gem:
///     bundler: true
///     chdir: /app
///
/// - name: Remove a gem
///   gem:
///     name: rails
///     state: absent
///
/// - name: Update gem to latest version
///   gem:
///     name: bundler
///     state: latest
/// ```}

{% endraw %}