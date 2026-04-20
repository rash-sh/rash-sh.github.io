---
title: kubernetes
weight: 5760
indent: true
---

{% raw %}
# kubernetes

Manage Kubernetes resources declaratively using inline definitions or
manifest files. This module uses `kubectl` under the hood and supports
server-side apply, resource validation, and idempotent operations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values            | Description                                                                  |
|--------------|----------|---------|-------------------|------------------------------------------------------------------------------|
| api_version  |          | string  |                   | API version of the resource (e.g., v1, apps/v1).                             |
| cascade      |          | string  |                   | Delete cascade policy (background, foreground, orphan).                      |
| context      |          | string  |                   | Kubernetes context to use.                                                   |
| extra_args   |          | string  |                   | Additional arguments passed to kubectl.                                      |
| force        |          | boolean |                   | Force deletion of resources (implies grace-period=0). **[default: `false`]** |
| grace_period |          | integer |                   | Grace period for deletion in seconds.                                        |
| host         |          | string  |                   | Kubernetes API server URL.                                                   |
| kind         |          | string  |                   | Resource kind (e.g., Pod, Deployment, Service, ConfigMap).                   |
| kubeconfig   |          | string  |                   | Path to kubeconfig file.                                                     |
| name         |          | string  |                   | Resource name (used with kind for deletions without definition).             |
| namespace    |          | string  |                   | Kubernetes namespace.                                                        |
| selector     |          | string  |                   | Label selector to filter resources.                                          |
| src          |          | string  |                   | Path to a manifest file to apply or delete.                                  |
| state        |          | string  | absent<br>present | Desired state of the resource. **[default: `"present"`]**                    |
| validate     |          | boolean |                   | Validate resource definition before applying. **[default: `true`]**          |
| wait         |          | boolean |                   | Wait for the operation to complete. **[default: `false`]**                   |
| wait_timeout |          | string  |                   | Timeout for wait operation (e.g., "60s", "5m").                              |

## Example

```yaml
- name: Create namespace
  kubernetes:
    state: present
    definition:
      apiVersion: v1
      kind: Namespace
      metadata:
        name: myapp

- name: Deploy application
  kubernetes:
    state: present
    definition:
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: myapp
        namespace: myapp
      spec:
        replicas: 3
        selector:
          matchLabels:
            app: myapp
        template:
          metadata:
            labels:
              app: myapp
          spec:
            containers:
              - name: myapp
                image: myapp:latest
                ports:
                  - containerPort: 8080

- name: Create service
  kubernetes:
    state: present
    definition:
      apiVersion: v1
      kind: Service
      metadata:
        name: myapp-svc
        namespace: myapp
      spec:
        selector:
          app: myapp
        ports:
          - port: 80
            targetPort: 8080

- name: Apply manifest from file
  kubernetes:
    state: present
    src: manifest.yaml

- name: Delete a resource by kind and name
  kubernetes:
    state: absent
    kind: Deployment
    name: myapp
    namespace: myapp

- name: Delete using inline definition
  kubernetes:
    state: absent
    definition:
      apiVersion: v1
      kind: Namespace
      metadata:
        name: myapp

- name: Apply with explicit kubeconfig
  kubernetes:
    state: present
    kubeconfig: /path/to/kubeconfig
    definition:
      apiVersion: v1
      kind: ConfigMap
      metadata:
        name: my-config
        namespace: default
      data:
        key: value

- name: Apply without validation
  kubernetes:
    state: present
    validate: false
    definition:
      apiVersion: v1
      kind: ConfigMap
      metadata:
        name: my-config
      data:
        key: value
```

{% endraw %}