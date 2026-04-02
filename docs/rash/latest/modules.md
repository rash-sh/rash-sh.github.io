---
title: Modules
weight: 5000
---

{% raw %}
# Modules

Modules are operations executed by tasks. They require parameters for its execution.

E.g.:

```yaml
- name: save user info
  copy:
    content: |
      uid: {{ rash.user.uid }}
      gid: {{ rash.user.gid }}
    dest: "{% if rash.user.uid != 0 %}/tmp{% endif %}/user_info"
    mode: "{{ env.FILE_MODE | default('400') }}"
```

## Modules index

- [alternatives](./module_alternatives.html)
- [apk](./module_apk.html)
- [apt](./module_apt.html)
- [apt_repository](./module_apt_repository.html)
- [archive](./module_archive.html)
- [assemble](./module_assemble.html)
- [assert](./module_assert.html)
- [async_poll](./module_async_poll.html)
- [async_status](./module_async_status.html)
- [at](./module_at.html)
- [authorized_key](./module_authorized_key.html)
- [blkdiscard](./module_blkdiscard.html)
- [block](./module_block.html)
- [cargo](./module_cargo.html)
- [chroot](./module_chroot.html)
- [command](./module_command.html)
- [composer](./module_composer.html)
- [consul_kv](./module_consul_kv.html)
- [copy](./module_copy.html)
- [cron](./module_cron.html)
- [dconf](./module_dconf.html)
- [debconf](./module_debconf.html)
- [debootstrap](./module_debootstrap.html)
- [debug](./module_debug.html)
- [dmsetup](./module_dmsetup.html)
- [dnf](./module_dnf.html)
- [docker_config](./module_docker_config.html)
- [docker_container](./module_docker_container.html)
- [docker_exec](./module_docker_exec.html)
- [docker_image](./module_docker_image.html)
- [docker_volume](./module_docker_volume.html)
- [expect](./module_expect.html)
- [fail2ban](./module_fail2ban.html)
- [fail](./module_fail.html)
- [file](./module_file.html)
- [filesystem](./module_filesystem.html)
- [find](./module_find.html)
- [firewalld](./module_firewalld.html)
- [flatpak](./module_flatpak.html)
- [gem](./module_gem.html)
- [get_url](./module_get_url.html)
- [git](./module_git.html)
- [gpg_key](./module_gpg_key.html)
- [group](./module_group.html)
- [grub](./module_grub.html)
- [helm](./module_helm.html)
- [helm_info](./module_helm_info.html)
- [hostname](./module_hostname.html)
- [include](./module_include.html)
- [ini_file](./module_ini_file.html)
- [initramfs](./module_initramfs.html)
- [interfaces_file](./module_interfaces_file.html)
- [iptables](./module_iptables.html)
- [java_keystore](./module_java_keystore.html)
- [jenkins_job](./module_jenkins_job.html)
- [json_file](./module_json_file.html)
- [kernel_blacklist](./module_kernel_blacklist.html)
- [known_hosts](./module_known_hosts.html)
- [lbu](./module_lbu.html)
- [lineinfile](./module_lineinfile.html)
- [locale](./module_locale.html)
- [logrotate](./module_logrotate.html)
- [lvg](./module_lvg.html)
- [lvol](./module_lvol.html)
- [lxd_container](./module_lxd_container.html)
- [make](./module_make.html)
- [mdadm](./module_mdadm.html)
- [meta](./module_meta.html)
- [modprobe](./module_modprobe.html)
- [mongodb_user](./module_mongodb_user.html)
- [mount](./module_mount.html)
- [mysql_db](./module_mysql_db.html)
- [netplan](./module_netplan.html)
- [nftables](./module_nftables.html)
- [nmcli](./module_nmcli.html)
- [npm](./module_npm.html)
- [openssl_certificate](./module_openssl_certificate.html)
- [openssl_csr](./module_openssl_csr.html)
- [openssl_privatekey](./module_openssl_privatekey.html)
- [opkg](./module_opkg.html)
- [package](./module_package.html)
- [pacman](./module_pacman.html)
- [pam_limits](./module_pam_limits.html)
- [parted](./module_parted.html)
- [pause](./module_pause.html)
- [ping](./module_ping.html)
- [pip](./module_pip.html)
- [postgresql_db](./module_postgresql_db.html)
- [rabbitmq_user](./module_rabbitmq_user.html)
- [reboot](./module_reboot.html)
- [redis](./module_redis.html)
- [runit](./module_runit.html)
- [script](./module_script.html)
- [seboolean](./module_seboolean.html)
- [selinux](./module_selinux.html)
- [service](./module_service.html)
- [set_vars](./module_set_vars.html)
- [setup](./module_setup.html)
- [sgdisk](./module_sgdisk.html)
- [slurp](./module_slurp.html)
- [ssh_config](./module_ssh_config.html)
- [stat](./module_stat.html)
- [synchronize](./module_synchronize.html)
- [sysctl](./module_sysctl.html)
- [systemd](./module_systemd.html)
- [tempfile](./module_tempfile.html)
- [template](./module_template.html)
- [timezone](./module_timezone.html)
- [trace](./module_trace.html)
- [ufw](./module_ufw.html)
- [unarchive](./module_unarchive.html)
- [uri](./module_uri.html)
- [user](./module_user.html)
- [vault](./module_vault.html)
- [vdo](./module_vdo.html)
- [wait_for](./module_wait_for.html)
- [wipefs](./module_wipefs.html)
- [xattr](./module_xattr.html)
- [xml](./module_xml.html)
- [yum_repository](./module_yum_repository.html)
- [zfs](./module_zfs.html)
- [zpool](./module_zpool.html)
- [zypper](./module_zypper.html)

## Omitting parameters

By default all parameters defined in yaml are passed to the module. However, you can
omit them programmatically.

E.g.:

```
"{{ env.MY_PASSWORD_MODE | default(omit) }}"
```

Furthermore, if you are chaining additional filters after the `default(omit)`, you should instead
do something like this: `"{{ foo | default(None) | some_filter or omit }}"`.
In this example, the default `None` value will cause the later filters to fail, which will trigger
the `or omit` portion of the logic. Using `omit` in this manner is very specific to the later
filters you are chaining though, so be prepared for some trial and error if you do this.
{% endraw %}