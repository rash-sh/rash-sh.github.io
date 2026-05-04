---
title: nsupdate
weight: 5126
indent: true
---

{% raw %}
# nsupdate

Manage DNS records using dynamic DNS updates (RFC 2136).

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter     | Required | Type    | Values                                                                            | Description                                            |
|---------------|----------|---------|-----------------------------------------------------------------------------------|--------------------------------------------------------|
| key_algorithm |          | string  | hmac-md5<br>hmac-sha1<br>hmac-sha224<br>hmac-sha256<br>hmac-sha384<br>hmac-sha512 | TSIG key algorithm.                                    |
| key_name      |          | string  |                                                                                   | TSIG key name for authentication.                      |
| key_secret    |          | string  |                                                                                   | TSIG key secret (base64 encoded).                      |
| port          |          | integer |                                                                                   | DNS server port.                                       |
| priority      |          | integer |                                                                                   | Priority for MX and SRV records.                       |
| record        |          | string  |                                                                                   | The record name (e.g. www). Use "@" for the zone root. |
| server        | true     | string  |                                                                                   | The DNS server to send updates to.                     |
| srv_port      |          | integer |                                                                                   | Port value for SRV records.                            |
| state         |          | string  | present<br>absent                                                                 | The desired state of the record.                       |
| ttl           |          | integer |                                                                                   | The TTL in seconds.                                    |
| type          |          | string  | A<br>AAAA<br>CNAME<br>MX<br>TXT<br>SRV<br>NS<br>PTR<br>CAA<br>SOA                 | The DNS record type.                                   |
| value         |          | string  |                                                                                   | The record value (required for state=present).         |
| weight        |          | integer |                                                                                   | Weight for SRV records.                                |
| zone          | true     | string  |                                                                                   | The DNS zone to manage (e.g. example.com).             |

## Examples

```yaml
- name: Add A record
  nsupdate:
    server: dns.example.com
    zone: example.com
    record: www
    type: A
    value: 192.168.1.1
    ttl: 300
    state: present

- name: Add A record with TSIG authentication
  nsupdate:
    server: dns.example.com
    zone: example.com
    record: www
    type: A
    value: 192.168.1.1
    ttl: 300
    key_name: mykey
    key_secret: "{{ dns_key }"
///     key_algorithm: hmac-sha256
///     state: present
///
/// - name: Add AAAA record
///   nsupdate:
///     server: dns.example.com
///     zone: example.com
///     record: www
///     type: AAAA
///     value: "2001:db8::1"
///     state: present
///
/// - name: Add CNAME record
///   nsupdate:
///     server: dns.example.com
///     zone: example.com
///     record: blog
///     type: CNAME
///     value: www.example.com
///     state: present
///
/// - name: Add MX record
///   nsupdate:
///     server: dns.example.com
///     zone: example.com
///     record: "@"
///     type: MX
///     value: mail.example.com
///     priority: 10
///     state: present
///
/// - name: Add TXT record
///   nsupdate:
///     server: dns.example.com
///     zone: example.com
///     record: "@"
///     type: TXT
///     value: "v=spf1 include:_spf.example.com ~all"
///     state: present
///
/// - name: Add SRV record
///   nsupdate:
///     server: dns.example.com
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
///   nsupdate:
///     server: dns.example.com
///     zone: example.com
///     record: old
///     type: A
///     state: absent
///
/// - name: Add record using custom port
///   nsupdate:
///     server: dns.example.com
///     port: 5353
///     zone: example.com
///     record: test
///     type: A
///     value: 10.0.0.1
///     state: present
/// ```}

{% endraw %}