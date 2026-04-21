---
title: cloudflare_dns
weight: 5250
indent: true
---

{% raw %}
# cloudflare_dns

Manage DNS records on Cloudflare.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                                 | Description                                                       |
|----------------|----------|---------|----------------------------------------|-------------------------------------------------------------------|
| api_token      |          | string  |                                        | Cloudflare API token. Falls back to CLOUDFLARE_API_TOKEN env var. |
| port           |          | integer |                                        | Port for SRV records.                                             |
| priority       |          | integer |                                        | Priority for MX and SRV records.                                  |
| proxied        |          | boolean |                                        | Whether the record is proxied through Cloudflare.                 |
| record         |          | string  |                                        | The record name (e.g. www). Use "@" for the zone root.            |
| state          |          | string  | present<br>absent                      | The desired state of the record.                                  |
| ttl            |          | integer |                                        | The TTL in seconds. 1 means auto when proxied.                    |
| type           |          | string  | A<br>AAAA<br>CNAME<br>MX<br>TXT<br>SRV | The DNS record type.                                              |
| validate_certs |          | boolean |                                        | Validate SSL certificates.                                        |
| value          |          | string  |                                        | The record value (required for state=present).                    |
| weight         |          | integer |                                        | Weight for SRV records.                                           |
| zone           | true     | string  |                                        | The DNS zone to manage (e.g. example.com).                        |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Create A record
///   cloudflare_dns:
///     zone: example.com
///     record: www
///     type: A
///     value: 192.168.1.1
///     ttl: 300
///     proxied: true
///     state: present
///
/// - name: Create AAAA record
///   cloudflare_dns:
///     zone: example.com
///     record: www
///     type: AAAA
///     value: 2001:db8::1
///     state: present
///
/// - name: Create CNAME record
///   cloudflare_dns:
///     zone: example.com
///     record: blog
///     type: CNAME
///     value: www.example.com
///     state: present
///
/// - name: Create MX record
///   cloudflare_dns:
///     zone: example.com
///     record: "@"
///     type: MX
///     value: mail.example.com
///     priority: 10
///     state: present
///
/// - name: Create TXT record
///   cloudflare_dns:
///     zone: example.com
///     record: "@"
///     type: TXT
///     value: "v=spf1 include:_spf.example.com ~all"
///     state: present
///
/// - name: Create SRV record
///   cloudflare_dns:
///     zone: example.com
///     record: "_sip._tcp"
///     type: SRV
///     value: "sip.example.com"
///     priority: 10
///     weight: 60
///     port: 5060
///     state: present
///
/// - name: Delete a DNS record
///   cloudflare_dns:
///     zone: example.com
///     record: old
///     type: A
///     state: absent
///
/// - name: Create record using API token from environment
///   cloudflare_dns:
///     zone: example.com
///     record: test
///     type: A
///     value: 10.0.0.1
///     state: present
/// ```}

{% endraw %}