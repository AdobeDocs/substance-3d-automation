"use strict";(self.webpackChunksubstance_3d_automation=self.webpackChunksubstance_3d_automation||[]).push([[25],{33544:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var o=t(87462),a=t(63366),s=(t(15007),t(64983)),i=t(91515),r=["components"],p={},d={_frontmatter:p},l=i.Z;function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,s.mdx)(l,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"how-to-author-a-job"},"How to author a job"),(0,s.mdx)("p",null,"Adobe Substance 3D Automation Service REST API accepts job specifications as a JSON document."),(0,s.mdx)("p",null,"This JSON document is authored by a user or developer to describe how this service should retrieve your assets, perform manipulations and rendering, and upload results."),(0,s.mdx)("p",null,"This job description is specified as a directed acyclic graph of operations."),(0,s.mdx)("h2",{id:"walk-through-on-how-to-write-a-rendering-job"},"Walk-through on how to write a rendering job"),(0,s.mdx)("p",null,"In this example, we'll describe how to write a job which requests this service to download a Stager scene, render a camera bookmark and upload the resulting image."),(0,s.mdx)("h3",{id:"pre-requisites"},"Pre-requisites:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"A stager scene, available as a pre-signed URL, such as this AWS S3 blob:  ",(0,s.mdx)("inlineCode",{parentName:"p"},"https://some-bucket.s3.us-east-1.amazonaws.com/some/blob?TOKEN"))),(0,s.mdx)("li",{parentName:"ol"},(0,s.mdx)("p",{parentName:"li"},"A pre-signed URL to upload the rendered image, such as this Azure Blob: ",(0,s.mdx)("inlineCode",{parentName:"p"},"https://some.blob.core.windows.net/container/render.png?TOKEN")))),(0,s.mdx)("h3",{id:"operations"},"Operations"),(0,s.mdx)("p",null,"Let's write the operation we want the Substance 3D Automation Service to execute. We look at the API specs and determine the most appropriate operations."),(0,s.mdx)("h4",{id:"1-download-scene"},"1. Download scene"),(0,s.mdx)("p",null,"We'll use the operation ",(0,s.mdx)("inlineCode",{parentName:"p"},"https.download")," to instruct the service on how to retrieve our Stager scene. We gave this specific operation a name, ",(0,s.mdx)("inlineCode",{parentName:"p"},"step1-download"),"."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'"step1-download": {\n  "type": "https.download",\n  "parameters": {\n    "uri": "https://some-bucket.s3.us-east-1.amazonaws.com/some/blob?TOKEN"\n   },\n   "output": {\n      "type": "scene",\n      "extension": ".ssg"\n    }\n  }\n}\n')),(0,s.mdx)("p",null,"Whenever we want to refer to the resulting file from this operation, we would use its' identifier ",(0,s.mdx)("inlineCode",{parentName:"p"},"step1-download"),". This is similar to variable assignment in programming languages."),(0,s.mdx)("h4",{id:"2-render-scene"},"2. Render scene"),(0,s.mdx)("p",null,"We'll use the operation ",(0,s.mdx)("inlineCode",{parentName:"p"},"scene.render")," to render the default camera in a Stager scene."),(0,s.mdx)("p",null,"Many operations, like this one, accept a ",(0,s.mdx)("inlineCode",{parentName:"p"},"inputs")," object, which is further typed into ",(0,s.mdx)("inlineCode",{parentName:"p"},"scene"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"image"),", ",(0,s.mdx)("inlineCode",{parentName:"p"},"model")," or ",(0,s.mdx)("inlineCode",{parentName:"p"},"file"),". Formats accepted for each of these types are described in the OpenAPI spec."),(0,s.mdx)("p",null,"In this instance, we've set ",(0,s.mdx)("inlineCode",{parentName:"p"},".inputs.scene")," to ",(0,s.mdx)("inlineCode",{parentName:"p"},"step1-download"),". This means the file produced in operation ",(0,s.mdx)("inlineCode",{parentName:"p"},"step1-download")," is used as an input to the ",(0,s.mdx)("inlineCode",{parentName:"p"},"step2-render")," operation."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'"step2-render": {\n  "type": "scene.render",\n  "inputs": {\n    "scene": "step1-download"\n  },\n  "output": {\n    "type": "scene",\n    "extension": ".ssg"\n  }\n}\n')),(0,s.mdx)("h4",{id:"3-upload-result"},"3. Upload result"),(0,s.mdx)("p",null,"For uploading to Azure Blob, we use the operation ",(0,s.mdx)("inlineCode",{parentName:"p"},"https.azure.upload"),". If we were uploading to AWS S3, we'd use a generic ",(0,s.mdx)("inlineCode",{parentName:"p"},"https.upload")," operation."),(0,s.mdx)("p",null,"Since we want to upload the rendering results, and knowing that render output is generated by the step ",(0,s.mdx)("inlineCode",{parentName:"p"},"step2-render"),", we set the ",(0,s.mdx)("inlineCode",{parentName:"p"},"inputs")," section of our upload operation to point to this file."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'"step3-upload": {\n  "type": "https.azure.upload",\n  "parameters": {\n    "uri": "https://some.blob.core.windows.net/multi/second.png?TOKEN"\n  },\n  "inputs": {\n    "file": "step2-render"\n  }\n}\n')),(0,s.mdx)("h3",{id:"putting-it-together"},"Putting it together"),(0,s.mdx)("p",null,"With each of the operations written, we can now combine them into a full job description as follows:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "multi.alpha",\n  "spec": {\n    "step1-download": {\n      "type": "https.download",\n      "parameters": {\n        "uri": "https://some-bucket.s3.us-east-1.amazonaws.com/some/blob?TOKEN"\n      },\n      "output": {\n        "type": "scene",\n        "extension": ".ssg"\n      }\n    },\n    "step2-render": {\n      "type": "scene.render",\n      "inputs": {\n        "scene": "step1-download"\n      },\n      "output": {\n        "type": "image",\n        "extension": ".png"\n      }      \n    },\n    "step3-upload": {\n      "type": "https.azure.upload",\n      "parameters": {\n        "uri": "https://some.blob.core.windows.net/multi/second.png?TOKEN"\n      },\n      "inputs": {\n        "file": "step2-render"\n      }\n    }\n  }\n}\n')),(0,s.mdx)("p",null,"This job, which will be executed as ",(0,s.mdx)("inlineCode",{parentName:"p"},"step1-download -> step2-render -> step3-upload")," can now be submitted to the Automation Service API. Once it completes, your render results will be available at the blob location you provided."),(0,s.mdx)("h2",{id:"conclusion"},"Conclusion"),(0,s.mdx)("p",null,"We hope this walkthrough helped in understanding how to author jobs for Substance 3D Automation Service. Users are provided with the flexibility to construct job descriptios with fairly complex graphs, which can include any supported operation. This allows performing multiple renders, file conversions, imports and manipulations as a single job."),(0,s.mdx)("p",null,"Check our API specifications for 4 examples of jobs of varying complexity."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-jobs-tutorial-md-3e9670c25be3197ce1b8.js.map