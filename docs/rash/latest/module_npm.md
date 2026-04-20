---
title: npm
weight: 5970
indent: true
---

{% raw %}
# npm

Manage Node.js packages with npm, Node.js package manager.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                      | Description                                                                                                                                                                                                                                                                                        |
|------------|----------|---------|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ci         |          | boolean |                             | Use npm ci instead of npm install for clean installs. Runs `npm ci` which installs from package-lock.json. **[default: `false`]**                                                                                                                                                                  |
| executable |          | string  |                             | Path of the npm binary to use. **[default: `"npm"`]**                                                                                                                                                                                                                                              |
| extra_args |          | string  |                             | Additional options to pass to npm.                                                                                                                                                                                                                                                                 |
| global     |          | boolean |                             | Install the package globally. **[default: `false`]**                                                                                                                                                                                                                                               |
| name       |          | array   |                             | Name or list of names of the package(s) to install, upgrade, or remove.                                                                                                                                                                                                                            |
| path       |          | string  |                             | The directory containing package.json for npm operations. Equivalent to running npm with `--prefix` flag.                                                                                                                                                                                          |
| production |          | boolean |                             | Install only production dependencies. Only used when no package name is specified. **[default: `false`]**                                                                                                                                                                                          |
| state      |          | string  | absent<br>present<br>latest | Whether to install (`present`), remove (`absent`), or ensure latest version (`latest`). `present` will simply ensure that a desired package is installed. `absent` will remove the specified package. `latest` will update the specified package to the latest version. **[default: `"present"`]** |
| version    |          | string  |                             | The version of the package to install. Only used with `state: present`.                                                                                                                                                                                                                            |

## Example

```yaml
- name: Install a package
  npm:
    name: typescript
    state: present

- name: Install specific version of a package
  npm:
    name: express
    version: "4.18.0"
    state: present

- name: Install package globally
  npm:
    name: typescript
    global: true
    state: latest

- name: Install dependencies from package.json
  npm:
    path: /app

- name: Install production dependencies only
  npm:
    path: /app
    production: true

- name: Install using npm ci (clean install)
  npm:
    path: /app
    ci: true

- name: Remove a package
  npm:
    name: typescript
    state: absent
```

{% endraw %}