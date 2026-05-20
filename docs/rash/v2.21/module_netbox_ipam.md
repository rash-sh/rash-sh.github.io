---
title: netbox_ipam
weight: 5119
indent: true
---

{% raw %}
# netbox_ipam

Manage IP addresses and prefixes in NetBox IPAM/DCIM system.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                              | Description                                                           |
|----------------|----------|---------|-------------------------------------|-----------------------------------------------------------------------|
| address        |          | string  |                                     | IP address or prefix CIDR (required for ip_address and prefix types). |
| description    |          | string  |                                     | Description for the resource.                                         |
| rd             |          | string  |                                     | Route distinguisher for VRF (e.g. "65000:100").                       |
| state          |          | string  | present<br>absent<br>query          | Desired state of the resource. **[default: `"present"`]**             |
| tenant         |          | string  |                                     | Tenant name to assign.                                                |
| timeout        |          | integer |                                     | Timeout in seconds for API requests.                                  |
| token          | true     | string  |                                     | NetBox API token.                                                     |
| type           |          | string  | ip_address<br>prefix<br>vlan<br>vrf | Type of NetBox IPAM object to manage. **[default: `"ip_address"`]**   |
| url            | true     | string  |                                     | NetBox instance URL.                                                  |
| validate_certs |          | boolean |                                     | If false, SSL certificates will not be validated.                     |
| vlan_id        |          | integer |                                     | VLAN ID (required for vlan type).                                     |
| vlan_name      |          | string  |                                     | VLAN name (for vlan type).                                            |
| vrf_name       |          | string  |                                     | VRF name (required for vrf type).                                     |

## Examples

```yaml
- name: Create an IP address in NetBox
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: ip_address
    address: "192.168.1.100/24"
    state: present
    description: "Web server"

- name: Create a prefix
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: prefix
    address: "192.168.1.0/24"
    state: present
    description: "Office network"

- name: Query an IP address
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: ip_address
    address: "192.168.1.100/24"
    state: query
  register: ip_info

- name: Create a VLAN
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: vlan
    vlan_id: 100
    vlan_name: "office-vlan"
    state: present

- name: Create a VRF
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: vrf
    vrf_name: "customer-a"
    state: present

- name: Delete an IP address
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: ip_address
    address: "192.168.1.100/24"
    state: absent

- name: Create IP with tenant
  netbox_ipam:
    url: "http://netbox:8000"
    token: "{{ netbox_token }}"
    type: ip_address
    address: "10.0.0.1/24"
    state: present
    tenant: "engineering"
```

{% endraw %}