---
title: Tasks
weight: 3000
---

{% raw %}
# Tasks

`tasks` are the main execution unit. They need a module and admit some optional fields described below.

```yaml
- name: this must be ignored
  assert:
    that:
      - "rash.path == ''"
  ignore_errors: true

- command: ls examples
  register: ls_result

- name: "save password to multiple files"
  copy:
    content: "{{ env.MY_PASSWORD }}"
    dest: "/tmp/MY_PASSWORD_FILE_{{ item }}"
    mode: "400"
  loop: "{{ ls_result.output | split(pat='\n') }}"
  when: env | get(key="MY_PASSWORD")
  register: save_passwords_result
```

## Fields

Tasks admit the following keys:

```rust,no_run,noplaypen
pub struct Task {
    /// Module could be any [`Module`] accessible by its name.
    ///
    /// [`Module`]: ../modules/struct.Module.html
    module: Module,
    /// Params are module execution params passed to [`Module::exec`].
    ///
    /// [`Module::exec`]: ../modules/struct.Module.html#method.exec
    params: Yaml,
    /// Run task in dry-run mode without modifications.
    check_mode: bool,
    /// Task name.
    name: Option<String>,
    /// Template expression passed directly without {{ }}; if false skip task execution.
    when: Option<String>,
    /// Variable name to store [`ModuleResult`].
    ///
    /// [`ModuleResult`]: ../modules/struct.ModuleResult.html
    register: Option<String>,
    /// Template expression passed directly without {{ }}; if true errors are ignored.
    ignore_errors: Option<bool>,
    /// `loop` field receives a Template (with {{ }}) or a list to iterate over it.
    r#loop: Option<Yaml>,
}
```

### Register structure

Use the Register field to define the name of the variable in which you wish to save
the module result. Its value will conform to the following structure:

```rust,no_run,noplaypen
pub struct ModuleResult {
    /// True when the executed module changed something.
    changed: bool,
    /// The Output value will appear in logs when module is executed.
    output: Option<String>,
    /// Modules store the data they return in the Extra field.
    extra: Option<Value>,
}
```

For example:

```yaml
- command: ls examples
  register: ls_result

- command: echo "{{ ls_result.output }}"
```
{% endraw %}