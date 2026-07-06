---
title: debootstrap
weight: 5036
indent: true
---

{% raw %}
# debootstrap

Install a minimal Debian/Ubuntu base system into a directory using debootstrap.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter            | Required | Type    | Values                                     | Description                                                                            |
|----------------------|----------|---------|--------------------------------------------|----------------------------------------------------------------------------------------|
| target               | true     | string  |                                            | Target directory for the base system installation.                                     |
| suite                | true     | string  |                                            | Distribution codename (e.g., noble, jammy, bookworm, bullseye).                        |
| executable           |          | string  |                                            | Path of the debootstrap binary to use. **[default: `"debootstrap"`]**                  |
| mirror               |          | string  |                                            | Archive mirror URL (e.g., http://archive.ubuntu.com/ubuntu).                           |
| arch                 |          | string  |                                            | Architecture for the installation (e.g., amd64, arm64).                                |
| variant              |          | string  | minbase<br>buildd<br>fakechroot<br>scratch | Bootstrap variant to use. **[default: `"minbase"`]**                                   |
| components           |          | array   |                                            | Components to include in the installation. **[default: `["main"]`]**                   |
| include              |          | string  |                                            | Comma-separated list of packages to include.                                           |
| exclude              |          | string  |                                            | Comma-separated list of packages to exclude.                                           |
| keyring              |          | string  |                                            | Path to keyring file for archive signing keys.                                         |
| no_check_gpg         |          | boolean |                                            | Skip GPG signature verification. **[default: `false`]**                                |
| no_resolve_deps      |          | boolean |                                            | Don't resolve dependencies. **[default: `false`]**                                     |
| unpack_tarball       |          | string  |                                            | Extract from tarball instead of downloading.                                           |
| second_stage         |          | boolean |                                            | Run second stage after first stage (for foreign architectures). **[default: `false`]** |
| second_stage_target  |          | string  |                                            | Target directory for second stage (for foreign architectures).                         |
| keep_debootstrap_dir |          | boolean |                                            | Keep /debootstrap directory after installation. **[default: `false`]**                 |

## Example

```yaml
- name: Install Ubuntu Noble base system
  debootstrap:
    target: /mnt
    suite: noble
    mirror: http://archive.ubuntu.com/ubuntu
    arch: amd64
    variant: minbase
    components:
      - main
      - universe
    include:
      - linux-image-generic
      - locales
      - sudo
      - openssh-server

- name: Install from Hetzner image tarball
  debootstrap:
    target: /mnt
    suite: noble
    unpack_tarball: /root/.oldroot/nfs/images/Ubuntu-2404-noble-amd64-base.tar.gz

- name: Install Debian Bookworm
  debootstrap:
    target: /mnt
    suite: bookworm
    mirror: http://deb.debian.org/debian
    variant: minbase

- name: Run second stage for foreign architecture
  debootstrap:
    target: /mnt
    suite: noble
    second_stage: true
    second_stage_target: /mnt
```

{% endraw %}