---
title: kubectl
weight: 5620
indent: true
---

{% raw %}
# kubectl

Manage Kubernetes resources using kubectl.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter    | Required | Type    | Values            | Description                                             |
|--------------|----------|---------|-------------------|---------------------------------------------------------|
| cascade      |          | string  |                   | Delete cascade policy (background, foreground, orphan). |
| context      |          | string  |                   | Kubernetes context to use.                              |
| force        |          | boolean |                   | Force deletion of resources.                            |
| grace_period |          | integer |                   | Grace period for deletion (seconds).                    |
| kind         |          | string  |                   | Resource kind (deployment, pod, service, etc.).         |
| name         |          | string  |                   | Resource name.                                          |
| namespace    |          | string  |                   | Kubernetes namespace.                                   |
| replicas     |          | integer |                   | Number of replicas (for scaling deployments).           |
| selector     |          | string  |                   | Label selector to filter resources.                     |
| src          |          | string  |                   | Path to a manifest file to apply/delete.                |
| state        |          | string  | absent<br>present | Desired state of the resource.                          |
| wait         |          | boolean |                   | Wait for the operation to complete.                     |
| wait_timeout |          | string  |                   | Timeout for wait operation (e.g., "60s", "5m").         |

## Example

```yaml
- name: Apply a manifest
  kubectl:
    state: present
    src: deployment.yaml

- name: Apply a manifest with definition
  kubectl:
    state: present
    definition:
      apiVersion: apps/v1
      kind: Deployment
      metadata:
        name: nginx-deployment
      spec:
        replicas: 3
        selector:
          matchLabels:
            app: nginx
        template:
          metadata:
            labels:
              app: nginx
          spec:
            containers:
              - name: nginx
                image: nginx:1.14.2
                ports:
                  - containerPort: 80

- name: Delete a resource
  kubectl:
    state: absent
    kind: deployment
    name: nginx-deployment

- name: Scale a deployment
  kubectl:
    state: present
    kind: deployment
    name: nginx-deployment
    replicas: 5

- name: Delete resources from a manifest
  kubectl:
    state: absent
    src: deployment.yaml

- name: Apply with namespace
  kubectl:
    state: present
    src: deployment.yaml
    namespace: mynamespace

- name: Force delete a pod
  kubectl:
    state: absent
    kind: pod
    name: stuck-pod
    force: true
```

{% endraw %}