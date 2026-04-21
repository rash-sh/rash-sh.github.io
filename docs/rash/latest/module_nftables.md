---
title: nftables
weight: 6160
indent: true
---

{% raw %}
# nftables

Manage nftables firewall rules.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values                                       | Description                                                                               |
|----------------|----------|---------|----------------------------------------------|-------------------------------------------------------------------------------------------|
| chain          |          | string  |                                              | The nftables chain name (optional for table operations).                                  |
| chain_hook     |          | string  |                                              | The chain hook (input, output, forward, prerouting, postrouting, ingress).                |
| chain_policy   |          | string  |                                              | The policy for the chain (accept, drop).                                                  |
| chain_priority |          | integer |                                              | The chain priority (numeric value, typically 0, positive or negative). **[default: `0`]** |
| chain_type     |          | string  |                                              | The chain type (filter, nat, route for certain families).                                 |
| comment        |          | string  |                                              | Comment for the rule (stored as a comment in nftables).                                   |
| family         |          | string  | inet<br>ip<br>ip6<br>arp<br>bridge<br>netdev | The address family (ip, ip6, inet, arp, bridge, netdev). **[default: `"inet"`]**          |
| flush          |          | boolean |                                              | Flush all rules in the specified chain. **[default: `false`]**                            |
| rule           |          | string  |                                              | The rule specification in nftables syntax.                                                |
| state          |          | string  | present<br>absent                            | Whether the rule/chain/table should be present or absent. **[default: `"present"`]**      |
| table          | true     | string  |                                              | The nftables table name.                                                                  |

## Examples

```yaml
- name: Add a table
  nftables:
    table: myfilter
    family: inet
    state: present

- name: Add a chain to the filter table
  nftables:
    table: myfilter
    chain: input
    family: inet
    chain_type: filter
    chain_hook: input
    chain_priority: 0
    state: present

- name: Add a rule to allow HTTP traffic
  nftables:
    table: myfilter
    chain: input
    family: inet
    rule: "tcp dport 80 accept"
    state: present

- name: Add a rule to allow established connections
  nftables:
    table: myfilter
    chain: input
    family: inet
    rule: "ct state established,related accept"
    state: present

- name: Allow traffic from specific source
  nftables:
    table: myfilter
    chain: input
    family: inet
    rule: "ip saddr 192.168.1.0/24 accept"
    state: present

- name: NAT masquerade for outgoing traffic
  nftables:
    table: mynat
    chain: postrouting
    family: ip
    rule: "ip saddr 10.0.0.0/24 oifname eth0 masquerade"
    state: present

- name: Delete a specific rule
  nftables:
    table: myfilter
    chain: input
    family: inet
    rule: "tcp dport 8080 accept"
    state: absent

- name: Delete a chain
  nftables:
    table: myfilter
    chain: input
    family: inet
    state: absent

- name: Delete a table
  nftables:
    table: myfilter
    family: inet
    state: absent

- name: Flush all rules in a chain
  nftables:
    table: myfilter
    chain: input
    family: inet
    flush: true
```

{% endraw %}