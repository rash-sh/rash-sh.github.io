---
title: aws_s3
weight: 5015
indent: true
---

{% raw %}
# aws_s3

Manage AWS S3 objects for cloud storage operations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter  | Required | Type    | Values                       | Description                                                                              |
|------------|----------|---------|------------------------------|------------------------------------------------------------------------------------------|
| access_key |          | string  |                              | AWS access key ID. If not provided, uses AWS_ACCESS_KEY_ID environment variable.         |
| bucket     | true     | string  |                              | The S3 bucket name.                                                                      |
| dest       |          | string  |                              | Local file path to download (required for mode=get).                                     |
| endpoint   |          | string  |                              | Custom S3 endpoint URL (for S3-compatible services like MinIO).                          |
| max_keys   |          | integer |                              | Maximum number of objects to return when listing.                                        |
| mode       |          | string  | get<br>put<br>delete<br>list | The operation mode: get, put, delete, or list.                                           |
| object     |          | string  |                              | The S3 object key path.                                                                  |
| prefix     |          | string  |                              | Prefix to filter objects when listing.                                                   |
| region     |          | string  |                              | AWS region. If not provided, uses AWS_REGION or AWS_DEFAULT_REGION environment variable. |
| secret_key |          | string  |                              | AWS secret access key. If not provided, uses AWS_SECRET_ACCESS_KEY environment variable. |
| src        |          | string  |                              | Local file path to upload (required for mode=put).                                       |

## Examples

```yaml
- name: Download file from S3
  aws_s3:
    bucket: my-bucket
    object: config/app.yaml
    dest: /etc/app/config.yaml
    mode: get

- name: Upload file to S3
  aws_s3:
    bucket: my-bucket
    object: backups/data.tar.gz
    src: /tmp/data.tar.gz
    mode: put

- name: Delete object from S3
  aws_s3:
    bucket: my-bucket
    object: old/backup.tar.gz
    mode: delete

- name: List objects in bucket
  aws_s3:
    bucket: my-bucket
    mode: list
  register: s3_objects

- name: Upload with custom endpoint (MinIO)
  aws_s3:
    bucket: my-bucket
    object: data/file.txt
    src: /tmp/file.txt
    mode: put
    endpoint: http://minio:9000

- name: Download with specific region
  aws_s3:
    bucket: my-bucket
    object: config.yaml
    dest: /tmp/config.yaml
    mode: get
    region: us-west-2
```

{% endraw %}