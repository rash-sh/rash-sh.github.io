---
title: nginx
weight: 6170
indent: true
---

{% raw %}
# nginx

Manage Nginx web server site configurations.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type   | Values            | Description                                                                                       |
|-----------|----------|--------|-------------------|---------------------------------------------------------------------------------------------------|
| name      | true     | string |                   | Site name used as filename in sites directories.                                                  |
| sites_dir |          | string |                   | Path to the sites-available directory. **[default: `"/etc/nginx/sites-available"`]**              |
| state     |          | string | present<br>absent | Whether the site should be present and enabled or absent and disabled. **[default: `"present"`]** |

{$include_doc /// ## Examples
///
/// ```yaml
/// - nginx:
///     name: mysite
///     state: present
///     config: |
///       server {
///          listen 80;
///          server_name example.com;
///          root /var/www/html;
///       }
///
/// - nginx:
///     name: oldsite
///     state: absent
///
/// - nginx:
///     name: mysite
///     state: present
///     template: /etc/rash/templates/mysite.conf.j2
/// ```}

{% endraw %}