---
title: helm
weight: 5550
indent: true
---

{% raw %}
# helm

Manage Helm charts and repositories, the Kubernetes package manager.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type   | Values | Description                                             |
|--------------|----------|--------|--------|---------------------------------------------------------|
| chart        |          | object |        | Chart management parameters.                            |
| executable   |          | string |        | Path of the helm binary to use. **[default: `"helm"`]** |
| extra_args   |          | string |        | Additional options to pass to helm.                     |
| kube_context |          | string |        | Kubernetes context to use.                              |
| kubeconfig   |          | string |        | Kubernetes config file path.                            |
| list         |          | object |        | List releases parameters.                               |
| repository   |          | object |        | Repository management parameters.                       |

## Example

```yaml
- name: Add a Helm repository
  helm:
    repository:
      name: bitnami
      url: https://charts.bitnami.com/bitnami
      state: present

- name: Update repository
  helm:
    repository:
      name: bitnami
      state: updated

- name: Remove a repository
  helm:
    repository:
      name: bitnami
      state: absent

- name: Install a chart
  helm:
    chart:
      name: my-nginx
      chart_ref: bitnami/nginx
      state: present

- name: Install a specific version
  helm:
    chart:
      name: my-nginx
      chart_ref: bitnami/nginx
      version: "13.2.0"
      state: present

- name: Install with custom values
  helm:
    chart:
      name: my-nginx
      chart_ref: bitnami/nginx
      values:
        replicaCount: 2
        service:
          type: LoadBalancer
      state: present

- name: Install with values from file
  helm:
    chart:
      name: my-nginx
      chart_ref: bitnami/nginx
      values_files:
        - /path/to/values.yaml
      state: present

- name: Upgrade a chart
  helm:
    chart:
      name: my-nginx
      chart_ref: bitnami/nginx
      state: updated

- name: Uninstall a chart
  helm:
    chart:
      name: my-nginx
      state: absent

- name: List all releases
  helm:
    list:
      all: true
```

{% endraw %}