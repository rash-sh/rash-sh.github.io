---
title: elasticsearch
weight: 5052
indent: true
---

{% raw %}
# elasticsearch

Manage Elasticsearch indices and documents.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                     | Description                                  |
|----------------|----------|---------|----------------------------|----------------------------------------------|
| body           |          |         |                            | Document body or index settings/mappings.    |
| hostname       |          | string  |                            | Elasticsearch server hostname.               |
| id             |          | string  |                            | Document ID (for document-level operations). |
| index          | true     | string  |                            | Index name.                                  |
| password       |          | string  |                            | Authentication password.                     |
| port           |          | integer |                            | Elasticsearch server port.                   |
| state          |          | string  | present<br>absent<br>query | The desired state of the index or document.  |
| username       |          | string  |                            | Authentication username.                     |
| validate_certs |          | boolean |                            | Validate SSL certificates.                   |

## Examples

```yaml
- name: Create an index with settings
  elasticsearch:
    hostname: localhost
    port: 9200
    index: logs
    state: present
    body:
      settings:
        number_of_shards: 3
        number_of_replicas: 1

- name: Create an index with mappings
  elasticsearch:
    hostname: localhost
    port: 9200
    index: products
    state: present
    body:
      mappings:
        properties:
          name:
            type: text
          price:
            type: float

- name: Query documents in an index
  elasticsearch:
    hostname: localhost
    port: 9200
    index: logs
    state: query
    body:
      query:
        match:
          level: error
  register: search_results

- name: Index a document with a specific ID
  elasticsearch:
    hostname: localhost
    port: 9200
    index: logs
    id: "doc-001"
    state: present
    body:
      message: "Application started"
      level: info

- name: Delete an index
  elasticsearch:
    hostname: localhost
    port: 9200
    index: old-logs
    state: absent

- name: Query with authentication
  elasticsearch:
    hostname: es-cluster.example.com
    port: 9200
    index: metrics
    state: query
    username: admin
    password: '{{ es_password }}'
    body:
      query:
        match_all: {}
```

{% endraw %}