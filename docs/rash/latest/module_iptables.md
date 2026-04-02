---
title: iptables
weight: 5540
indent: true
---

{% raw %}
# iptables

Manage iptables firewall rules.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter        | Required | Type    | Values            | Description                                                                    |
|------------------|----------|---------|-------------------|--------------------------------------------------------------------------------|
| chain            | true     | string  |                   | The iptables chain to modify.                                                  |
| comment          |          | string  |                   | Comment for the rule (requires iptables comment module).                       |
| ctstate          |          | string  |                   | Connection tracking states (ESTABLISHED, RELATED, NEW, INVALID).               |
| destination      |          | string  |                   | The destination address/network.                                               |
| destination_port |          | string  |                   | The destination port.                                                          |
| flush            |          | boolean |                   | Flush all rules in the chain. **[default: `false`]**                           |
| flush_all        |          | boolean |                   | Perform a flush before adding rules. **[default: `false`]**                    |
| in_interface     |          | string  |                   | The input interface.                                                           |
| ip_version       |          | string  | ipv4<br>ipv6      | The iptables command to use (iptables, ip6tables). **[default: `"iptables"`]** |
| jump             |          | string  |                   | The jump target (ACCEPT, DROP, REJECT, LOG, etc.).                             |
| match            |          | string  |                   | Match extensions (state, conntrack, etc.).                                     |
| out_interface    |          | string  |                   | The output interface.                                                          |
| policy           |          | string  |                   | Set the policy for the chain (ACCEPT, DROP, REJECT, etc.).                     |
| protocol         |          | string  |                   | The protocol of the rule (tcp, udp, icmp, all).                                |
| rule_num         |          | string  |                   | Append rule as a specific rule number (1-based).                               |
| source           |          | string  |                   | The source address/network.                                                    |
| source_port      |          | string  |                   | The source port.                                                               |
| state            |          | string  | present<br>absent | Whether the rule should be present or absent. **[default: `"present"`]**       |
| table            |          | string  |                   | The iptables table to modify. **[default: `"filter"`]**                        |
| to_destination   |          | string  |                   | The target for DNAT/SNAT (e.g., "192.168.1.1:80").                             |
| to_ports         |          | string  |                   | The ports for DNAT/SNAT (e.g., "8080-8090").                                   |
| to_source        |          | string  |                   | The source for SNAT (e.g., "192.168.1.1").                                     |

## Examples

```yaml
- name: Allow HTTP traffic
  iptables:
    chain: INPUT
    protocol: tcp
    destination_port: "80"
    jump: ACCEPT

- name: Allow established connections
  iptables:
    chain: INPUT
    ctstate: ESTABLISHED,RELATED
    jump: ACCEPT

- name: Allow traffic from specific source
  iptables:
    chain: INPUT
    source: "192.168.1.0/24"
    jump: ACCEPT

- name: NAT masquerade for outgoing traffic
  iptables:
    table: nat
    chain: POSTROUTING
    source: "10.0.0.0/24"
    out_interface: eth0
    jump: MASQUERADE

- name: Forward port 8080 to 80
  iptables:
    table: nat
    chain: PREROUTING
    in_interface: eth0
    protocol: tcp
    destination_port: "8080"
    jump: DNAT
    to_destination: "127.0.0.1:80"

- name: Remove a specific rule
  iptables:
    chain: INPUT
    protocol: tcp
    destination_port: "8080"
    jump: ACCEPT
    state: absent

- name: Set the policy for the INPUT chain
  iptables:
    chain: INPUT
    policy: DROP

- name: Flush all rules in INPUT chain
  iptables:
    chain: INPUT
    flush: true
```

{% endraw %}