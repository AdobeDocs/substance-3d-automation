---
title: Overview - Adobe Substance 3D Automation
description: This is the overview page of Adobe Substance 3D Automation
contributors:
  - https://github.com/saykumar
---

<Hero slots="heading, text"/> 

# Adobe Substance 3D Automation

Adobe Substance 3D Automation API offers convenient ways to manage and run your 3D asset processing pipelines.

<Resources slots="heading, links"/>

#### Resources

* [API Specification](api/index.html)

## Specifications

[API Specification](api/index.html) 

Read API documentation and download OpenAPI / Swagger specifications.

## API Requests & Rate Limits

The timeout for API requests through adobe.io is currently *60 seconds*.

The default rate limit for an Adobe Analytics Company is *120 requests per minute*. (The limit is enforced as *12 requests every 6 seconds*).
When rate limiting is being enforced you will get `429` HTTP response codes with the following response body: `{"error_code":"429050","message":"Too many requests"}`    
