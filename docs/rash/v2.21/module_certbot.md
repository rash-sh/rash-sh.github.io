---
title: certbot
weight: 5021
indent: true
---

{% raw %}
{$include_doc /// # certbot
///
/// Manage SSL/TLS certificates using Let's Encrypt via certbot.
///
/// This module automates obtaining and renewing TLS certificates from Let's Encrypt
/// using the certbot tool. It supports both HTTP-01 and DNS-01 challenges and is
/// idempotent — it will only request a new certificate when one does not already exist
/// or is within `expire_days` of expiration.
///
/// ## Attributes
///
/// ```yaml
/// check_mode:
///   support: full
/// ```}

## Parameters

| Parameter   | Required | Type    | Values            | Description                                                                    |
|-------------|----------|---------|-------------------|--------------------------------------------------------------------------------|
| challenge   |          | string  |                   | Challenge type to use for domain validation. **[default: `"http"`]**           |
| domains     | true     | array   |                   | List of domain names for the certificate.                                      |
| email       | true     | string  |                   | Email address for Let's Encrypt registration and notifications.                |
| expire_days |          | integer |                   | Renew the certificate if it expires within this many days. **[default: `30`]** |
| state       |          | string  | absent<br>present | Whether the certificate should exist or not. **[default: `"present"`]**        |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Obtain certificate for example.com
///   certbot:
///     domains:
///       - example.com
///       - www.example.com
///     email: admin@example.com
///
/// - name: Obtain certificate with DNS challenge
///   certbot:
///     domains:
///       - example.com
///     email: admin@example.com
///     challenge: dns
///     expire_days: 14
///
/// - name: Remove certificate for example.com
///   certbot:
///     domains:
///       - example.com
///     email: admin@example.com
///     state: absent
/// ```}

{% endraw %}