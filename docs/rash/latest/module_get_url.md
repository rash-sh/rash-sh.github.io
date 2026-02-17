---
title: get_url
weight: 6120
indent: true
---

{% raw %}
# get_url

Downloads files from HTTP, HTTPS, or FTP to local destination.

## Attributes

```yaml
check_mode:
  support: partial
diff_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values | Description                                                                                   |
|------------------|----------|---------|--------|-----------------------------------------------------------------------------------------------|
| backup           |          | boolean |        | Create a backup file including the timestamp information                                      |
| checksum         |          | string  |        | If a checksum is passed, the digest of the destination file will be calculated after download |
| dest             | true     | string  |        | Absolute path where to download the file to                                                   |
| force            |          | boolean |        | If true, will download the file every time and replace if contents change                     |
| force_basic_auth |          | boolean |        | Force the sending of the Basic authentication header upon initial request                     |
| group            |          | string  |        | Name of the group that should own the file                                                    |
| headers          |          | object  |        | Add custom HTTP headers to a request                                                          |
| mode             |          | string  |        | The permissions the resulting file should have                                                |
| owner            |          | string  |        | Name of the user that should own the file                                                     |
| timeout          |          | integer |        | Timeout in seconds for URL request                                                            |
| url              | true     | string  |        | HTTP, HTTPS, or FTP URL to download                                                           |
| url_password     |          | string  |        | A password for HTTP basic authentication                                                      |
| url_username     |          | string  |        | A username for HTTP basic authentication                                                      |
| validate_certs   |          | boolean |        | If false, SSL certificates will not be validated                                              |

## Examples

```yaml
- get_url:
    url: http://example.com/path/file.conf
    dest: /etc/foo.conf
    mode: '0644'

- get_url:
    url: http://example.com/path/file.conf
    dest: /etc/foo.conf
    force_basic_auth: true
    url_username: user
    url_password: pass

- get_url:
    url: http://example.com/path/file.conf
    dest: /etc/foo.conf
    headers:
      User-Agent: "custom-agent"
      X-Custom-Header: "value"

- get_url:
    url: http://example.com/path/file.conf
    dest: /etc/foo.conf
    checksum: sha256:b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c

- get_url:
    url: http://example.com/path/file.conf
    dest: /etc/foo.conf
    backup: true
    force: true

- get_url:
    url: http://example.com/path/file.conf
    dest: /tmp/
    timeout: 30
```

{% endraw %}