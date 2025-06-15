---
title: pacman
weight: 5900
indent: true
---

{% raw %}
# pacman

Manage packages with the pacman package manager, which is used by Arch Linux and its variants.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|--------------|----------|---------|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| executable   |          | string  |                           | Path of the binary to use. This can either be `pacman` or a pacman compatible AUR helper. **[default: `"pacman"`]**                                                                                                                                                                                                                                                                                                                                                                                                                 |
| extra_args   |          | string  |                           | Additional option to pass to executable.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| force        |          | boolean |                           | When removing packages, forcefully remove them, without any checks. Same as extra_args=”--nodeps --nodeps”. When combined with `update_cache` force a refresh of all package databases. Same as update_cache_extra_args=”--refresh --refresh”. **[default: `false`]**                                                                                                                                                                                                                                                               |
| name         |          | array   |                           | Name or list of names of the package(s) or file(s) to install, upgrade, or remove.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| state        |          | string  | absent<br>present<br>sync | Whether to install (`present`), or remove (`absent`) a package. Also, supports the `sync` which will keep explicit packages accord with packages defined. Explicit packages are packages installed were literally passed to a generic `pacman` `-S` or `-U` command. You can list them with: `pacman -Qe` `present` will simply ensure that a desired package is installed. `absent` will remove the specified package. `sync` will install or remove packages to be in sync with explicit package list. **[default: `"present"`]** |
| update_cache |          | boolean |                           | Whether or not to refresh the master package lists. This can be run as part of a package installation or as a separate step. **[default: `false`]**                                                                                                                                                                                                                                                                                                                                                                                 |
| upgrade      |          | boolean |                           | Whether or not to upgrade the whole system. **[default: `false`]**                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## Example

```yaml
- name: Install package rustup from repo
  pacman:
    name: rustup
    state: present

- pacman:
    executable: yay
    name:
      - rash
      - timer-rs
    state: present

- pacman:
   upgrade: true
   update_cache: true
   name:
     - rustup
     - bpftrace
     - linux61-zfs
   state: sync
   register: packages

- pacman:
   upgrade: true
   update_cache: true
   force: true
   name: linux-nvidia
   state: absent
   register: packages
```

{% endraw %}