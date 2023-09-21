---
title: Bultins
weight: 5100
indent: true
---

{% raw %}
# Bultins

By default, every execution of `rash` exposes two variables to the Context: `{{ rash }}` and
`{{ env }}`.

## rash

`{{ rash }}` variables are builtin values retrieved from execution context.

```yaml
- assert:
    that:
      - 'rash.args | length == 0'
      - 'rash.dir == "/"'
      - 'rash.path == "/builtins_example.rh"'
      - 'rash.user.uid == 1000'
      - 'rash.user.gid == 1000'
```

`src/vars/builtin.rs`:

```rust,no_run,noplaypen
#[derive(Serialize)]
pub struct Builtins {
    /// Args passed from command line execution.
    args: Vec<String>,
    /// Script directory absolute path.
    dir: PathBuf,
    /// Script absolute path.
    path: PathBuf,
    user: UserInfo,
}

#[derive(Serialize)]
struct UserInfo {
    uid: u32,
    gid: u32,
}
```

## env

You can access any environment var as `{{ env.MY_ENV_VAR }}`.

Also, you can use command line arguments to pass environment variables:

```bash
rash -e MY_ENV_VAR=foo example.rh
```
{% endraw %}