---
title: helm_info
weight: 5610
indent: true
---

{% raw %}
# helm_info

Get information about Helm releases in Kubernetes clusters.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter  | Required | Type   | Values | Description                                    |
|------------|----------|--------|--------|------------------------------------------------|
| context    |          | string |        | Kubernetes context to use.                     |
| kubeconfig |          | string |        | Path to kubeconfig file.                       |
| name       |          | string |        | Release name. If omitted, lists all releases.  |
| namespace  |          | string |        | Kubernetes namespace. **[default: `default`]** |

## Example

```yaml
- name: Get release info
  helm_info:
    name: myapp
    namespace: production
  register: release_info

- name: List all releases
  helm_info:
  register: all_releases

- name: Get release info with specific context
  helm_info:
    name: myapp
    namespace: production
    context: minikube
  register: release_info

- name: Get release info with specific kubeconfig
  helm_info:
    name: myapp
    kubeconfig: /path/to/kubeconfig
  register: release_info
```

{% endraw %}