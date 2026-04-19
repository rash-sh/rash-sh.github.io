---
title: composer
weight: 5180
indent: true
---

{% raw %}
# composer

Dependency Manager for PHP.

Composer is a tool for dependency management in PHP. It allows you to declare
the dependent libraries your project needs and it installs them in your project for you.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter              | Required | Type    | Values | Description                                                                                             |
|------------------------|----------|---------|--------|---------------------------------------------------------------------------------------------------------|
| apcu_autoloader        |          | boolean |        | Uses APCu to cache found/not-found classes. **[default: `false`]**                                      |
| arguments              |          | string  |        | Composer arguments like required package, version and so on. **[default: `""`]**                        |
| classmap_authoritative |          | boolean |        | Autoload classes from classmap only. **[default: `false`]**                                             |
| command                |          | string  |        | Composer command to run. **[default: `"install"`]**                                                     |
| executable             |          | string  |        | Path to composer executable on the remote host, if composer is not in PATH. **[default: `"composer"`]** |
| executable_php         |          | string  |        | Path to PHP executable on the remote host, if PHP is not in PATH.                                       |
| global_command         |          | boolean |        | Runs the specified command globally. **[default: `false`]**                                             |
| ignore_platform_reqs   |          | boolean |        | Ignore php, hhvm, lib-* and ext-* requirements. **[default: `false`]**                                  |
| no_dev                 |          | boolean |        | Disables installation of require-dev packages. **[default: `true`]**                                    |
| no_plugins             |          | boolean |        | Disables all plugins. **[default: `false`]**                                                            |
| no_scripts             |          | boolean |        | Skips the execution of all scripts defined in composer.json. **[default: `false`]**                     |
| optimize_autoloader    |          | boolean |        | Optimize autoloader during autoloader dump. **[default: `true`]**                                       |
| prefer_dist            |          | boolean |        | Forces installation from package dist even for dev versions. **[default: `false`]**                     |
| prefer_source          |          | boolean |        | Forces installation from package sources when possible. **[default: `false`]**                          |
| working_dir            |          | string  |        | Directory of your project (see --working-dir). This is required when the command is not run globally.   |

{$include_doc /// ## Example
///
/// ```yaml
/// - name: Install dependencies from composer.lock
///   composer:
///     command: install
///     working_dir: /path/to/project
///
/// - name: Install dependencies without dev packages
///   composer:
///     command: install
///     working_dir: /path/to/project
///     no_dev: true
///
/// - name: Install a new package
///   composer:
///     command: require
///     arguments: my/package
///     working_dir: /path/to/project
///
/// - name: Install a package globally
///   composer:
///     command: require
///     global_command: true
///     arguments: my/package
///
/// - name: Update all dependencies
///   composer:
///     command: update
///     working_dir: /path/to/project
///
/// - name: Create a new project
///   composer:
///     command: create-project
///     arguments: package/package /path/to/project ~1.0
///     working_dir: /tmp
///     prefer_dist: true
///
/// - name: Optimize autoloader for production
///   composer:
///     command: dump-autoload
///     working_dir: /path/to/project
///     optimize_autoloader: true
///     no_dev: true
/// ```}

{% endraw %}