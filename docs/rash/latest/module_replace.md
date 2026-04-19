---
title: replace
weight: 6090
indent: true
---

{% raw %}
# replace

Replace all instances of a particular string in a file using a back-referenced regular expression.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter | Required | Type    | Values | Description                                                                                                                                                                                                                                                                                 |
|-----------|----------|---------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| after     |          | string  |        | If specified, only content after this match will be replaced/removed. Can be used in combination with before. Uses Python regular expressions; see http://docs.python.org/3/library/re.html. Uses DOTALL, which means the . special character can match newlines.                           |
| backup    |          | boolean |        | Create a backup file including the timestamp information so you can get the original file back if you somehow clobbered it incorrectly. **[default: `false`]**                                                                                                                              |
| before    |          | string  |        | If specified, only content before this match will be replaced/removed. Can be used in combination with after. Uses Python regular expressions; see http://docs.python.org/3/library/re.html. Uses DOTALL, which means the . special character can match newlines.                           |
| encoding  |          | string  |        | The character encoding for reading and writing the file. **[default: `"utf-8"`]**                                                                                                                                                                                                           |
| path      | true     | string  |        | The file to modify.                                                                                                                                                                                                                                                                         |
| regexp    | true     | string  |        | The regular expression to look for in the contents of the file. Uses Python regular expressions; see http://docs.python.org/3/library/re.html. Uses MULTILINE mode, which means ^ and $ match the beginning and end of each line of the file, as well as the beginning and end of the file. |
| replace   |          | string  |        | The string to replace regexp matches. May contain backreferences that will get expanded with the regexp capture groups if the regexp matches. If not set, matches are removed entirely. **[default: `""`]**                                                                                 |
| validate  |          | string  |        | The validation command to run before copying the updated file into the final destination. A temporary file path is used to validate, passed in through %s which must be present.                                                                                                            |

{$include_doc /// ## Examples
///
/// ```yaml
/// - replace:
///     path: /etc/hosts
///     regexp: '(\s+)old\.host\.name(\s+.*)?$'
///     replace: '\1new.host.name\2'
///
/// - replace:
///     path: /etc/apache2/sites-available/default.conf
///     after: 'NameVirtualHost [*]'
///     regexp: '^(.+)$'
///     replace: '# \1'
///
/// - replace:
///     path: /etc/ssh/sshd_config
///     regexp: '^(ListenAddress[ ]+)[^\n]+$'
///     replace: '\g<1>0.0.0.0'
///     backup: true
///
/// - replace:
///     path: /etc/apache/ports
///     regexp: '^(NameVirtualHost|Listen)\s+80\s*$'
///     replace: '\1 127.0.0.1:8080'
///     validate: '/usr/sbin/apache2ctl -f %s -t'
/// ```}

{% endraw %}