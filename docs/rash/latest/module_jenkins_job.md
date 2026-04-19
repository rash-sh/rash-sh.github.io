---
title: jenkins_job
weight: 5630
indent: true
---

{% raw %}
# jenkins_job

Manage Jenkins jobs and builds.

## Attributes

```yaml
check_mode:
  support: full
```

## Parameters

| Parameter      | Required | Type    | Values            | Description                                                             |
|----------------|----------|---------|-------------------|-------------------------------------------------------------------------|
| config         |          | string  |                   | Job configuration XML content.                                          |
| enabled        |          | boolean |                   | Whether to trigger a build (only for state=present).                    |
| name           | true     | string  |                   | Name of the Jenkins job.                                                |
| password       | true     | string  |                   | Jenkins password or API token.                                          |
| state          |          | string  | present<br>absent | Whether the job should be present or absent. **[default: `"present"`]** |
| timeout        |          | integer |                   | Timeout in seconds for API requests.                                    |
| token          |          | string  |                   | Build token for triggering builds.                                      |
| url            | true     | string  |                   | Jenkins server URL.                                                     |
| user           | true     | string  |                   | Jenkins username for authentication.                                    |
| validate_certs |          | boolean |                   | If false, SSL certificates will not be validated.                       |

{$include_doc /// ## Examples
///
/// ```yaml
/// - name: Create Jenkins job
///   jenkins_job:
///     name: myapp-build
///     state: present
///     url: http://jenkins.local
///     user: admin
///     password: secret
///
/// - name: Create Jenkins job with config XML
///   jenkins_job:
///     name: myapp-build
///     state: present
///     url: http://jenkins.local
///     user: admin
///     password: secret
///     config: |
///       <project>
///         <description>My app build job</description>
///         <builders>
///           <hudson.tasks.Shell>
///             <command>echo "Building"</command>
///           </hudson.tasks.Shell>
///         </builders>
///       </project>
///
/// - name: Trigger Jenkins build
///   jenkins_job:
///     name: myapp-build
///     state: present
///     url: http://jenkins.local
///     user: admin
///     password: secret
///     enabled: true
///
/// - name: Delete Jenkins job
///   jenkins_job:
///     name: old-job
///     state: absent
///     url: http://jenkins.local
///     user: admin
///     password: secret
///
/// - name: Trigger build with token
///   jenkins_job:
///     name: myapp-build
///     state: present
///     url: http://jenkins.local
///     user: admin
///     password: secret
///     token: build-token
///     enabled: true
/// ```}

{% endraw %}