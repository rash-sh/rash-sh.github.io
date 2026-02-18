---
title: uri
weight: 6320
indent: true
---

{% raw %}
# uri

Interacts with HTTP and HTTPS web services.

## Attributes

```yaml
check_mode:
  support: none
```

## Parameters

| Parameter        | Required | Type    | Values | Description                                                                                   |
|------------------|----------|---------|--------|-----------------------------------------------------------------------------------------------|
| body             |          | string  |        | The body of the http request/response to the web service                                      |
| force_basic_auth |          | boolean |        | Force the sending of the Basic authentication header upon initial request                     |
| headers          |          | object  |        | Add custom HTTP headers to a request in the format of a hash                                  |
| method           |          | string  |        | The HTTP method of the request or response                                                    |
| return_content   |          | boolean |        | Whether or not to return the body of the response as a "content" key in the dictionary result |
| status_code      |          | array   |        | A list of valid, numeric, HTTP status codes that signifies success of the request             |
| timeout          |          | integer |        | The socket level timeout in seconds                                                           |
| url              | true     | string  |        | HTTP or HTTPS URL in the form (http|https)://host.domain[:port]/path                          |
| url_password     |          | string  |        | A password for the module to use for Basic authentication                                     |
| url_username     |          | string  |        | A username for the module to use for Basic authentication                                     |
| validate_certs   |          | boolean |        | If false, SSL certificates will not be validated                                              |

## Examples

```yaml
- uri:
    url: http://www.example.com
    method: GET

- uri:
    url: https://httpbin.org/post
    method: POST
    body: '{"key": "value"}'
    headers:
      Content-Type: application/json
    status_code: [200, 201]

- uri:
    url: https://api.example.com/data
    method: GET
    return_content: true
  register: api_response

- uri:
    url: https://httpbin.org/basic-auth/user/pass
    method: GET
    url_username: user
    url_password: pass
    force_basic_auth: true
```

{% endraw %}