---
title: pip
weight: 6100
indent: true
---

{% raw %}
# pip

Manage Python packages with pip.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type   | Values                                        | Description                                                                                                                                                                                                                                  |
|--------------|----------|--------|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| executable   |          | string |                                               | Path of the pip binary to use. **[default: `"pip3"`]**                                                                                                                                                                                       |
| extra_args   |          | string |                                               | Additional arguments to pass to pip.                                                                                                                                                                                                         |
| name         |          | array  |                                               | The name of a Python library to install or remove. Can be a list of names.                                                                                                                                                                   |
| requirements |          | string |                                               | Path to a requirements.txt file for installing packages.                                                                                                                                                                                     |
| state        |          | string | present<br>absent<br>latest<br>forcereinstall | The state of the Python library. `present` will ensure the package is installed. `absent` will remove the package. `latest` will update to the latest version. `forcereinstall` will force reinstall the package. **[default: `"present"`]** |
| version      |          | string |                                               | The version to install (e.g., "1.2.3"). Used with `name` to install a specific version.                                                                                                                                                      |
| virtualenv   |          | string |                                               | Path to a virtualenv directory to install packages into.                                                                                                                                                                                     |

## Example

```yaml
- name: Install requests package
  pip:
    name: requests
    state: present

- name: Install specific version
  pip:
    name: django
    version: "4.2.0"
    state: present

- name: Install multiple packages
  pip:
    name:
      - requests
      - flask
      - gunicorn
    state: latest

- name: Install from requirements.txt
  pip:
    requirements: /app/requirements.txt

- name: Install in virtualenv
  pip:
    name: requests
    virtualenv: /app/venv

- name: Remove package
  pip:
    name: requests
    state: absent

- name: Force reinstall package
  pip:
    name: requests
    state: forcereinstall
```

{% endraw %}