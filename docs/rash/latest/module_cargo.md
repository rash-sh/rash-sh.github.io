---
title: cargo
weight: 5200
indent: true
---

{% raw %}
# cargo

Manage Rust crates with cargo, Rust's package manager.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter           | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                                  |
|---------------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| all_features        |          | boolean |                             | Install all available features. **[default: `false`]**                                                                                                                                                                                                                                       |
| branch              |          | string  |                             | Branch to install from when using git.                                                                                                                                                                                                                                                       |
| executable          |          | string  |                             | Path of the cargo binary to use. **[default: `"cargo"`]**                                                                                                                                                                                                                                    |
| extra_args          |          | string  |                             | Additional options to pass to cargo.                                                                                                                                                                                                                                                         |
| features            |          | array   |                             | List of features to install.                                                                                                                                                                                                                                                                 |
| force               |          | boolean |                             | Force reinstall even if the crate is already installed. **[default: `false`]**                                                                                                                                                                                                               |
| git                 |          | string  |                             | Git repository URL to install from.                                                                                                                                                                                                                                                          |
| locked              |          | boolean |                             | Use locked dependencies when building. **[default: `false`]**                                                                                                                                                                                                                                |
| name                |          | array   |                             | Name or list of names of the crate(s) to install, upgrade, or remove.                                                                                                                                                                                                                        |
| no_default_features |          | boolean |                             | Do not install default features. **[default: `false`]**                                                                                                                                                                                                                                      |
| rev                 |          | string  |                             | Specific commit to install from when using git.                                                                                                                                                                                                                                              |
| state               |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired crate is installed. `absent` will remove the specified crate. `latest` will update the specified crate to the latest version. **[default: `"present"`]** |
| tag                 |          | string  |                             | Tag to install from when using git.                                                                                                                                                                                                                                                          |
| version             |          | string  |                             | The version of the crate to install. Only used with `state: present`.                                                                                                                                                                                                                        |

## Example

```yaml
- name: Install crates
  cargo:
    name:
      - ripgrep
      - fd-find
      - bat
    state: present

- name: Install specific version
  cargo:
    name: cargo-edit
    version: "0.11.9"
    state: present

- name: Install crate with features
  cargo:
    name: cargo-watch
    features:
      - watch
    state: present

- name: Install from git
  cargo:
    name: my-crate
    git: https://github.com/user/my-crate.git
    branch: main
    state: present

- name: Remove crate
  cargo:
    name: ripgrep
    state: absent

- name: Update all packages to latest versions
  cargo:
    name:
      - ripgrep
      - fd-find
    state: latest
```

{% endraw %}