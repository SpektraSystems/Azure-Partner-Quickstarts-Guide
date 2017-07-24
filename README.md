# Azure-Partner-Quickstarts-Guide

* ## Table of Contents

* ### Azure Partner Quickstarts: Contributor’s Guide
 
 
 
 <!-- TOC -->
 
1. [What is Azure Quickstart by template partners](#what-is-azure-quickstart-by-template-partners)
2. [Who can contribute](#who-can-contribute)
3. [How to Contribute:Process Flow](#how-to-contribute-process-flow)
 
   3.A: <a href="https://github.com/Prakash-Naveen/Azure-Partner-Quickstarts-Guide/blob/patch-3/README.md#3a-process-flowchart">Process Flowchart</a>
  
   3.B: <a href="https://github.com/Prakash-Naveen/Azure-Partner-Quickstarts-Guide/blob/patch-3/README.md#3b-idea-acceptance-phase">Idea Acceptance Phase</a>
  
   3.C: <a href="https://github.com/Prakash-Naveen/Azure-Partner-Quickstarts-Guide/blob/patch-3/README.md#ctemplate-development-testing--documentation">Template Development, Testing & Documentation</a>
  
   3.D: <a href="https://github.com/Prakash-Naveen/Azure-Partner-Quickstarts-Guide/blob/patch-3/README.md#dpublish-the-quickstart">Publish the Quickstart</a>
  
   3.E: <a href="https://github.com/Prakash-Naveen/Azure-Partner-Quickstarts-Guide/blob/patch-3/README.md#esupport-and-maintenance--breakfix">Support and Maintenance & Breakfix</a>
  
   3.F: <a href="https://github.com/Prakash-Naveen/Azure-Partner-Quickstarts-Guide/blob/patch-3/README.md#fpartnerquickstarts-portal">Partnerquickstarts Portal</a>
  
4. [Quickstart Technical Solution Best Practices](#quickstart-technical-solution-best-practices)
5. [Template Development Checklist](#template-development-checklist)
6. [Testing and Documentation](#testing-and-documentation)
7. [Publishing the Solution.](#publishing-the-solution.)
8. [Maintenance, Updates and Support](#maintenance,-updates-and-support)
 
 
 
 <!-- /TOC --> 
 

## 1. What is Azure Quickstart by template partners

Want to learn how to save time when launching full-stack solutions in the cloud? Azure Partner Quickstarts are 
<a href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview">Azure Resource Manager templates</a> created by trusted Microsoft partners and designed to help you get started with integrated, multi-artifact solutions rather than single applications or services on Azure. 
These templates are constructed to launch solutions comprising multiple applications and services from both Microsoft and Microsoft software partners, open source and proprietary. These Quickstarts help automate much of the manual work that would be otherwise normally be involved in stitching artifacts together.

Quickstarts are available on Partner QS portal -  https://partnerquickstarts.azurewebsites.net/ . This portal is also used for end to end management of partner Quickstarts lifecycle.

Partner Quickstarts are intended as helpers and learning tools. You can customize these Quickstart templates to meet your unique business needs.

From a partner standpoint, Quickstart templates are gold standard azure deployment for specific workloads. Customers can use these templates to build complex workloads on azure comprising all fabric and applications component through automated deployment, resulting a quicker and smooth end user experience. 
Templates should be targeting a specific scenario workload, or some of the commonly deployed solutions architecture across the globe. At the same time, it needs to be easily customizable as well to meet unique business needs.

## Who can contribute
 * Microsoft Partners
 
## How to Contribute: Process Flow
### 3.A: Process Flowchart 
Quickstart solutions goes through multiple checks and validation before getting published on
<a href="https://partnerquickstarts.azurewebsites.net/#/welcome">azure Quickstarts from Microsoft partners portal</a> Following flow chart explains the high level process to be completed for a new quickstart templates to get published.  Microsoft QuickStart team will work with you for this process. 
<img src="Images/Images/1.png"/> 

### 3.B: Idea Acceptance Phase

Partner needs to submit a quickstart specification documentation to Microsoft. 
Specification document should include
*	Title of the Quickstart
*	Brief Overview about the solution 
*	Azure Solution Components of Quickstart
*	3rd Party/Market Place items included in the Quickstart
*	Basic Solution Architecture
*	Any other Remarks/consideration with respect to licensing etc. 
*	Partner Details (Partner company overview, contact details etc.)
Once the template idea is submitted, Microsoft will review the request update the status of Quickstart management portal with one of the following status
*	Approved
*	Request for amendment 
*	Rejected
Partner may have to modify the solution idea, if so recommended by Microsoft. Once Quickstart idea is approved, Kick-off meeting will be scheduled to discuss the solution aspects and timelines for go-live of Quickstart.

### 3.C: Template Development, Testing & Documentation
After acceptance of the Quickstart idea, Partner may start to develop the Quickstart solution. Partner should follow below instructions:
* Understand and follow <!-- TOC -->[Solution Design Consideration](#quickstart-technical-solution-best-practices)<!-- /TOC --> best practices available in this document.
* Understand and follow <!-- TOC -->[template development checklist](#template-development-checklist)<!-- /TOC --> available in this document.
* Build the QuickStart template comprising.
  *  azuredeploy.json Template File
  *  Nested templates if any
  *  azuredeploy.parameters.json file
  *  Documentations as specified in <!-- TOC -->[Section-5](#testing-and-documentation)<!-- /TOC -->
*	Develop the required documentation for the Quickstart following best practices given <!-- TOC -->[click](#documentation-and-files )<!-- /TOC -->
* Test the Quickstart in every scenario available <!-- TOC -->[click](#testing-the-quickStart-template)<!-- /TOC -->

### 3.D: Publish the Quickstart
Once template development partner has completed all steps in <!-- TOC -->[Section-C](#template-development,testing-&-documentation)<!-- /TOC -->, they can move to validation phase of the solution and launch the Quickstart for public access.
* Submit the Quickstart to Azure Quickstart validation partner for validation of the solution. Follow <!-- TOC -->[](#validation-with-template-validation-partner)<!-- /TOC --> to learn more
* Incorporate any feedback provided by azure Quickstart validation partner and submit Pull Request to submit the Quickstart to 
<a href="https://github.com/Azure/azure-quickstart-templates">Microsoft Azure GitHub repo</a>
*	Following the <!-- TOC -->[publishing guidelines](#publishing-the-solution)<!-- /TOC --> available in the document
* Add the quickstart to partner Quickstarts <a href="https://partnerquickstarts.azurewebsites.net/#/welcome">Portal</a>
* Quickstart template will get launched on <a href="https://partnerquickstarts.azurewebsites.net/#/welcome">azure Quickstarts from Microsoft partners web page</a>. Launch activities may also include formal announcement on social media and blogs, as applicable. 

### 3.E: Support and Maintenance & Breakfix
Template development partner should be providing the post publishing support, maintenance and updates on the quickstart as and when required.
* Follow  <!-- TOC -->[Support and Maintenance](#maintenance,-updates-and-support )<!-- /TOC --> Guidelines available in this document.

### 3.F: Partnerquickstarts Portal 
Template development partner should be using partner quickstart portal (https://partnerquickstarts.azurewebsites.net) for end to end lifecycle management of the Quickstarts.
* Request login for the portal if not available already by writing to Email :- **quickstartsupport@spektrasystems.com**
Portal can be used for:
* View, Manage and modify existing contributed quickstart
* Submit new quickstart 
* Verify last validation reports.
* Update Status if QS validation fails.

## Quickstart Technical Solution Best Practices   
### A.	Envision the Quickstart architecture 
First step towards building a good Quickstart would be to draw the overall low-level architecture of the solution. You should start developing template once this architecture design is finalized. Architecture design should contain overall solution components such as Virtual Network, Subnet’s, Storage accounts, Virtual Machines, App Service etc. Sample architecture diagram can be found 
<a href="https://github.com/Azure/azure-quickstart-templates/tree/master/chef-server-compliance-delivery-devops">here</a>.
### B.	Azure Region Support 
Your Quick Start should be deployable across the majority of Azure Regions. You should verify availability of services in azure regions for your template and update documentation accordingly. Services availability by region is listed 
<a href="https://github.com/Azure/azure-quickstart-templates/tree/master/chef-server-compliance-delivery-devops">here</a>.
### C.	Identify the Outside and Inside of a VM 
As you design your template, it’s helpful to look at the requirements in terms of what’s outside and inside of the virtual machines (VMs): 
* Outside means the VMs and other resources of your deployment, such as the network topology, tagging, references to the certs/secrets, and role-based access control. All are part of your ARM template. 
* For the VM’s insides—that is, the installed software and overall desired state configuration—other mechanisms are used in whole or in part, such as VM extensions or scripts. These may be identified and executed by the template but aren’t in it.

Common examples of activities you would do “inside the box” include 
*	Install or remove server roles and features
*	Install and configure software at the node or cluster level
*	Deploy websites on a web server
*	Deploy database schemas
*	Manage registry or other types of configuration settings
*	Manage files and directories
*	Start, stop, and manage processes and services
*	Manage local groups and user accounts
*	Install and manage packages (.msi, .exe, yum, etc.)
*	Manage environment variables
*	Run native scripts (Windows PowerShell, bash, etc.)

Typically, you will use one or more VM extension to achieve automatic provisioning of inside VM components. Most widely used VM Extension will include
*	Desired State Configuration (DSC)
*	Custom Script Extension (For both Windows and Linux VM’s)
*	Other 3rd part VM Extension such as Chef/Puppet etc.
Defining inside and outside VM things will help you in designing the solution template effectivity.

### D.	Choosing free-form vs. known configurations
You might initially think a template should give consumers the utmost flexibility, but many considerations affect the choice of whether to use free-form configurations vs. known configurations. This section identifies the key customer requirements and technical considerations that shaped the approach shared in this document.

**Free-form configurations:**
On the surface, free-form configurations sound ideal. They allow you to select a VM type and provide an arbitrary number of nodes and attached disks for those nodes — and do so as parameters to a template. However, this approach is not ideal for some scenarios.
In Sizes for virtual machines, the different VM types and available sizes are identified, and each of the number of durable disks (2, 4, 8, 16, or 32) that can be attached. Each attached disk provides 500 IOPS and multiples of these disks can be pooled for a multiplier of that number of IOPS. For example, 16 disks can be pooled to provide 8,000 IOPS. Pooling is done with configuration in the operating system, using Microsoft Windows Storage Spaces or redundant array of inexpensive disks (RAID) in Linux.
A free-form configuration enables the selection several VM instances, various VM types and sizes for those instances, various disks for the VM type, and one or more scripts to configure the VM contents. It is common that a deployment may have multiple types of nodes, such as master and data nodes, so this flexibility is often provided for every node type.
As you start to deploy clusters of any significance, you begin to work with these complex scenarios. If you were deploying a Hadoop cluster, for example, with 8 master nodes and 200 data nodes, and pooled 4 attached disks on each master node and pooled 16 attached disks per data node, you would have 208 VMs and 3,232 disks to manage.

A storage account will throttle requests above its identified 20,000 transactions/second limit, so you should look at storage account partitioning and use calculations to determine the appropriate number of storage accounts to accommodate this topology. Given the multitude of combinations supported by the free-form approach, dynamic calculations are required to determine the appropriate partitioning. The Azure Resource Manager Template Language does not presently provide mathematical functions, so you must perform these calculations in code, generating a unique, hard-coded template with the appropriate details.

In enterprise IT and SI scenarios, someone must maintain the templates and support the deployed topologies for one or more organizations. This additional overhead — different configurations and templates for each customer — is far from desirable.

Considering all these factors, a truly free-form configuration is less appealing than at first blush

**Known configurations - the t-shirt sizing approach:**
Rather than offer a template that provides total flexibility and countless variations, in our experience a common pattern is to provide the ability to select known configurations — in effect, standard t-shirt sizes such as sandbox, small, medium, and large. Other examples of t-shirt sizes are product offerings, such as community edition or enterprise edition. In other cases, it may be workload-specific configurations of a technology – such as map reduce or no sql.
Many enterprise IT organizations, OSS vendors, and SIs make their offerings available today in this way in on-premises, virtualized environments (enterprises) or as software-as-a-service (SaaS) offerings (CSVs and OSVs).
This approach provides good, known configurations of varying sizes that are preconfigured for customers. Without known configurations, end customers must determine cluster sizing on their own, factor in platform resource constraints, and do math to identify the resulting partitioning of storage accounts and other resources (due to cluster size and resource constraints). Known configurations enable customers to easily select the right t-shirt size—that is, a given deployment. In addition to making a better experience for the customer, a small number of known configurations is easier to support and can help you deliver a higher level of density.

A known configuration approach focused on t-shirt sizes may also have varying number of nodes within a size. For example, a small t-shirt size may be between 3 and 10 nodes. The t-shirt size would be designed to accommodate up to 10 nodes and provide the consumer the ability to make free form selections up to the maximum size identified.
A t-shirt size based on workload type, may be more free form in nature in terms of the number of nodes that can be deployed but will have workload distinct node size and configuration of the software on the node.
T-shirt sizes based on product offerings, such as community or Enterprise, may have distinct resource types and maximum number of nodes that can be deployed, typically tied to licensing considerations or feature availability across the different offerings.
You can also accommodate customers with unique variants using the JSON-based templates. When dealing with outliers, you can incorporate the appropriate planning and considerations for development, support, and costing. Based on the customer template consumption scenarios, and requirements identified at the start of this document, we identified a pattern for template decomposition.

### E.	Designing Modularity with Nested Templates
To deploy your solution, you can use either a single template or a main template with multiple nested templates. Nested templates are common for more advanced scenarios. Nested templates contain the following advantages:
* Provides benefits in terms of testing, reuse, and readability.
* Can reuse nested templates with other main templates of different quickstart solutions.
When you decide to decompose your template design into multiple nested templates, the following guidelines helps in standardize the design. The recommended design consists of the following templates:
* **Main template** (azuredeploy.json): Used for the input parameters.
* **Shared resources template:** Deploys the shared resources that all other resources use (for example, virtual network, availability sets). The expression **dependsOn** enforces that this template is deployed before the other templates.
* **Optional resources template:** Conditionally deploys resources based on a parameter (for example, a jumpbox).
*	**Member resources templates:** Each instance type within an application tier has its own configuration. Within a tier, different instance types can be defined (such as, first instance creates a cluster, additional instances are added to the existing cluster). Each instance type has its own deployment template.
*	**Scripts:** Widely reusable scripts are applicable for each instance type (for example, initialize and format additional disks). Custom scripts are created for specific customization purpose are different per instance type.
<img src="Images/Images/2.png"/>

You can follow below articles to learn more about passing values and sharing state between templates : 
* https://docs.microsoft.com/en-us/azure/azure-resource-manager/best-practices-resource-manager-state 
* https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-linked-templates

### F.	Identify and build template Pre-requisite (if any)
If you’re building a template which needs some existing resources in subscription to complete the deployment, it is recommended to create a pre-requisite azure deployment template.
Some of the examples of existing resources includes-
*	Virtual Network 
*	Storage Account
*	Key vault
Some users may or may not have these existing resources ready, which may lead to a deployment failure of the solution template. To avoid this, it is recommended to create a azureprereqdeploy.json ARM template which can be deployed before the actual Quickstart to avoid deployment failure of main Quickstart solution due to existing resources. Partner should also add this is documentation.
Considerations:
*	Identify Number and type of pre-req components for the Quickstart
*	Create ARM template to create the existing resources
*	Output the name’s etc. values in the pre-req template deployment
*	Update the documentation/process to share these details to the users who doesn’t have existing resources created already.

### G.	Working with Unique Resource Name’s
There are generally three types of resource names you work with:
*	Resource names that must be unique across the azure cloud.
*	Resource names that do not need to be unique but you want to provide a name that helps identify the context.
*	Resource names that can be generic.

**Unique resource names**

You must provide a unique resource name for any resource type that has a data access endpoint. Some common types that require a unique name include:
*	Storage account
*	Web site
*	SQL server
*	Key vault
*	Redis cache
*	Etc.
Furthermore, storage account names must be lower-case, 24 characters or less, and not include any hyphens.

If you provide a parameter for these resource names, you must guess a unique name during deployment. Instead, you can create a variable that uses the uniqueString() function to generate a name. Frequently, you also want to add a prefix or postfix to the uniqueString result so you can more easily determine the resource type by looking at the name. For example, you generate a unique name for a storage account with the following variable:
````
"variables": {
"storageAccountName": "[concat(uniqueString(resourceGroup().id),'storage')]"
}
````
You may want to look at azure naming convention best practices available on below links
* https://docs.microsoft.com/en-us/azure/virtual-machines/virtual-machines-windows-infrastructure-naming-guidelines?toc=%2fazure%2fvirtual-machines%2fwindows%2ftoc.json
* https://docs.microsoft.com/en-us/azure/guidance/guidance-naming-conventions

### H.	Identifying and defining dependencies between resources
For a given resource, there can be other resources that must exist before the resource is deployed. For example, a SQL server must exist before attempting to deploy a SQL database. You define this relationship by marking one resource as dependent on the other resource. You define a dependency with the dependsOn element, or by using the reference function. 

Resource Manager evaluates the dependencies between resources, and deploys them in their dependent order. When resources are not dependent on each other, Resource Manager deploys them in parallel. You only need to define dependencies for resources that are deployed in the same template.

**DependsOn**
Within your template, the dependsOn element enables you to define one resource as a dependent on one or more resources. Its value can be a comma-separated list of resource names.

When defining dependencies, you can include the resource provider namespace and resource type to avoid ambiguity. For example, to clarify a load balancer and virtual network that may have the same names as other resources, use the following format:

````
"dependsOn": [
  "[concat('Microsoft.Network/loadBalancers/', variables('loadBalancerName'))]",
  "[concat('Microsoft.Network/virtualNetworks/', variables('virtualNetworkName'))]"
]
````
While you may be inclined to use dependsOn to map relationships between your resources, it's important to understand why you're doing it. For example, to document how resources are interconnected, dependsOn is not the right approach. You cannot query which resources were defined in the dependsOn element after deployment. By using dependsOn, you potentially impact deployment time because Resource Manager does not deploy in parallel two resources that have a dependency. To document relationships between resources, instead use resource linking.

**Dependencies Recommendations**

*	Set as few dependencies as possible.
*	Set a child resource as dependent on its parent resource.
*	Use the reference function to set implicit dependencies between resources that need to share a property. Do not add an explicit dependency (dependsOn) when you have already defined an implicit dependency. This approach reduces the risk of having unnecessary dependencies.

*	Set a dependency when a resource cannot be created without functionality from another resource. Do not set a dependency if the resources only interact after deployment.
*	Let dependencies cascade without setting them explicitly. For example, your virtual machine depends on a virtual network interface, and the virtual network interface depends on a virtual network and public IP addresses. Therefore, the virtual machine is deployed after all three resources, but do not explicitly set the virtual machine as dependent on all three resources. This approach clarifies the dependency order and makes it easier to change the template later.
*	If a value can be determined before deployment, try deploying the resource without a dependency. For example, if a configuration value needs the name of another resource, you might not need a dependency. This guidance does not always work because some resources verify the existence of the other resource. If you receive an error, add a dependency.

Resource Manager identifies circular dependencies during template validation. If you receive an error stating that a circular dependency exists, evaluate your template to see if any dependencies are not needed and can be removed. If removing dependencies does not work, you can avoid circular dependencies by moving some deployment operations into child resources that are deployed after the resources that have the circular dependency

### I.	Condition based templates deployment
You can link to different templates by passing in a parameter value that is used to construct the URI of the linked template. This approach works well when you need to specify during deployment the linked template to use. For example, you can specify one template to use for an existing storage account, and another template to use for a new storage account.

The following example shows a parameter for a storage account name, and a parameter to specify whether the storage account is new or existing.

```
"parameters": {
    "storageAccountName": {
        "type": "String"
    },
    "newOrExisting": {
        "type": "String",
        "allowedValues": [
            "new",
            "existing"
        ]
    }
},      
````
You create a variable for the template URI that includes the value of the new or existing parameter
````
"variables": {
    "templatelink": "[concat('https://raw.githubusercontent.com/exampleuser/templates/master/',parameters('newOrExisting'),'StorageAccount.json')]"
},   
````
You provide that variable value for the deployment resource

````
"resources": [
    {
        "apiVersion": "2015-01-01",
        "name": "linkedTemplate",
        "type": "Microsoft.Resources/deployments",   
"properties": {
            "mode": "incremental",
            "templateLink": {
                "uri": "[variables('templatelink')]",
                "contentVersion": "1.0.0.0"
            },
            "parameters": {
                "StorageAccountName": {
                    "value": "[parameters('storageAccountName')]"
                }
            }
        }
    }
],
````
The URI resolves to a template named either **existingStorageAccount.json** or **newStorageAccount.json**. Create templates for those URIs. The following example shows the **existingStorageAccount.json** template.

````
"{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "storageAccountName": {
      "type": "String"
    }
  },
"variables": {},
  "resources": [],
  "outputs": {
    "storageAccountInfo": {
      "value": "[reference(concat('Microsoft.Storage/storageAccounts/', parameters('storageAccountName')),providers('Microsoft.Storage', 'storageAccounts').apiVersions[0])]",
      "type" : "object"
    }
  }
}
````
The next example shows the **newStorageAccount.json** template. Notice that like the existing storage account template the storage account object is returned in the outputs. The master template works with either linked template.

````
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "parameters": {
    "storageAccountName": {
		"type": "string"
    	}
  },
resources": [
    {
      "type": "Microsoft.Storage/storageAccounts",
      "name": "[parameters('StorageAccountName')]",
      "apiVersion": "2016-01-01",
      "location": "[resourceGroup().location]",
sku": {
        "name": "Standard_LRS"
},
      "kind": "Storage",
      "properties": {
      }
    }
  ],
  "outputs": {
    "storageAccountInfo": {
      "value": "[reference(concat('Microsoft.Storage/storageAccounts/', parameters('StorageAccountName')),providers('Microsoft.Storage', 'storageAccounts').apiVersions[0])]",
      "type" : "object"
    }
  }
}
````
### J.	High Availability Best Practices
*	Create availability set for Virtual Machines. Recommended even if you’re creating single VM delivering the service, this allows users to add additional VM of same service in future easily.
*	Use GRS as default type for storage account replication.
*	Considering adding Load balancer to your Quickstart solution wherever applicable.  

### K.	Use Key Vault to pass secure parameter value during deployment
When you need to pass a secure value (like a password) as a parameter during deployment, you can retrieve the value from an 
<a href="https://docs.microsoft.com/en-us/azure/key-vault/key-vault-whatis">Azure Key Vault</a>. You retrieve the value by referencing the key vault and secret in your parameter file. The value is never exposed because you only reference its key vault ID. You do not need to manually enter the value for the secret each time you deploy the resources. The key vault can exist in a different subscription than the resource group you are deploying to. When referencing the key vault, you include the subscription ID.
You should plan to use Key Vault to enhance the security of overall solutions. This could be pretty useful in scenarios of complex Quickstarts passing credentials or other secrets between resources. Learn more about Key Vault in ARM Templates 
<a href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-manager-keyvault-parameter">here</a>.

### L.	Creating Multiple instances of resources
**copy, copyIndex, and length**
* Within the resource to create multiple times, you can define a copy object that specifies the number of times to iterate. The copy takes the following format.
````
"copy": { 
    "name": "websites copy", 
    "count": "[parameters('count')]" 
} 
````
* You can access the current iteration value with the copyIndex() function. The following example uses copyIndex with the concat function to construct a name.
````
[concat('examplecopy-', copyIndex())]
````
* When creating multiple resources from an array of values, you can use the length function to specify the count. You provide the array as the parameter to the length function.
````
"copy": {
    "name": "websitescopy",
    "count": "[length(parameters('siteNames'))]"
}
"resources": [
  {
    "type": "{provider-namespace-and-type}"
"name": "parentResource",
    "copy": {  
      /* yes, copy can be applied here */
    },
    "properties": {
      "exampleProperty": {
        /* no, copy cannot be applied here */
      } },
"resources": [
      {
        "type": "{provider-type}",
"name": "childResource",
        /* copy can be applied if resource is promoted to top level */ 
      }
    ]
  } ]
````
* Although you cannot apply **copy** to a property, that property is still part of the iterations of the resource that contains the property. Therefore, you can use copyIndex() within the property to specify values.
* There are several scenarios where you might want to iterate on a property in a resource. For example, you may want to specify multiple data disks for a virtual machine. To see how to iterate on a property, see <a href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-multiple#create-multiple-instances-when-copy-wont-work">Create multiple instances when copy won't work</a>.

**Use Index value in name**
You can use the copy operation create multiple instances of a resource that are uniquely named based on the incrementing index. For example, you might want to add a unique number to the end of each resource name that is deployed. To deploy three web sites named:

*	examplecopy-0
*	examplecopy-1
*	examplecopy-2.

Use the following template
````
"parameters": { 
  "count": { 
    "type": "int", 
    "defaultValue": 3 
  } 
}, 
"resources": [ 
  { 
      "name": "[concat('examplecopy-', copyIndex())]", 
      "type": "Microsoft.Web/sites", 
      "location": "East US", 
      "apiVersion": "2015-08-01",
      "copy": { 
         "name": "websitescopy", 
         "count": "[parameters('count')]" 
      }, 
      "properties": {
          "serverFarmId": "hostingPlanName"
      }
  } 
] 
````
**Offset index value**
In the preceding example, the index value goes from zero to 2. To offset the index value, you can pass a value in the **copyIndex()** function, such as **copyIndex(1)**. The number of iterations to perform is still specified in the copy element, but the value of copyIndex is offset by the specified value. So, using the same template as the previous example, but specifying **copyIndex(1)** would deploy three web sites named:
*	examplecopy-1
*	examplecopy-2
*	examplecopy-3


**Use Copy with Array**
The copy operation is helpful when working with arrays because you can iterate through each element in the array. To deploy three web sites named
*	examplecopy-Contoso
*	examplecopy-Fabrikam
*	examplecopy-Coho
Use the following template:
````
"parameters": { 
  "org": { 
     "type": "array", 
     "defaultValue": [ 
         "Contoso", 
         "Fabrikam", 
         "Coho" 
      ] 
  }
}, 
"resources": [ 
  { 
      "name": "[concat('examplecopy-', parameters('org')[copyIndex()])]", 
      "type": "Microsoft.Web/sites", 
      "location": "East US", 
      "apiVersion": "2015-08-01",
      "copy": { 
         "name": "websitescopy", 
         "count": "[length(parameters('org'))]" 
      }, 
      "properties": {
          "serverFarmId": "hostingPlanName"
      } 
  }
````
### M.	Using Market place items in templates
You should identify all the marketplace items used in the Quickstart and their licensing consideration. Using marketplace products have following consideration.

*	You should always use marketplace image of any 3rd party product used in the Quickstart solution wherever available, instead of installing it manually using custom script extension. This simplifies the licenses and pricing of third party products
*	Marketplace items requires programmatic deployment of marketplace item to be enabled in the subscription. You can do this by deploying the marketplace item in subscription manually via portal once.
*	Marketplace items will require a payment method associated with subscriptions
*	Ensure that Template Documentation describe all marketplace items used in the quickstart

### N.	Identify Post Deployment Steps
You should identify all post deployment steps which user may be required to perform after the deployment. Purpose of post deployment steps may include any of below, but not limited to these

*	Access the deployed Services
*	Basic Usage(Services in Action)
*	Verify deployment 

### O.	Development Tool

ARM Quickstart template can be developed in any text editor, however it is recommended to use Visual Studio/Visual Studio Code. Visual Studio provides out of the box ARM Template development utilities.

## Template Development Checklist
### A.	Template Parameters Checklist  
* Minimize parameters whenever possible. If you can use a variable or a literal, do so. Only provide parameters for:
  * Settings you wish to vary by environment (such as sku, size, or capacity).
  * Rsource names you wish to specify for easy identification.
  * Values you use often to complete other tasks (such as admin user name).
  * Secrets (such as passwords)
  * The number or array of values to use when creating multiple instances of a resource type.
* Parameter names should follow **camelCasing**.
* Provide a description in the metadata for every parameter
* Define default values for parameters (except for passwords and SSH keys). 
* Use securestring for all passwords and secrets.
* Any resources that need to be setup outside the template should be named prefixed with existing (e.g. existingVNET, existingDiagnosticsStorageAccount).
* When possible, avoid using a parameter to specify the location. Instead, use the location property of the resource group. By using the resourceGroup().location expression for all your resources, the resources in the template are deployed in the same location as the resource group.
* If a resource type is supported in only a limited number of locations, consider specifying a valid location directly in the template. If you must use a location parameter, share that parameter value as much as possible with resources that are likely to be in the same location. This approach minimizes users having to provide locations for every resource type.
* Avoid using a parameter or variable for the API version for a resource type. Resource properties and values can vary by version number. Intellisense in code editors is not able to determine the correct schema when the API version is set to a parameter or variable. Instead, hard-code the API version in the template.
* Do not create a parameter for a **storage account name**. Storage account names need to be lower case and can't contain hyphens (-) in addition to other domain name restrictions. A storage account has a limit of 24 characters. They also need to be globally unique. To prevent any validation issue, configure a variables (using the expression **uniqueString** and a static value **storage**). Storage accounts with a common prefix (uniqueString) will not get clustered on the same racks.
````
"variables": {
     "storage": {
         "name": "[concat(uniqueString(resourceGroup().id),'storage')]",
         "type": "Standard_LRS"
     }
 },
 "resources": [
   {
       "type": "Microsoft.Storage/storageAccounts",
       "name": "[variables('storage').name]",
       "apiVersion": "2016-01-01",
       "location": "[resourceGroup().location]",
       "sku": {
           "name": "[variables('storage').type]"
       },
       ...
   }
 ]
````
* For many resources with a resource group, a name is not often relevant and using something a hard coded string "availabilitySet" may be acceptable. You can also use variables for the name of a resource and generate names for resources with globally unique names. Use **displayName** tags for a "friendly" name in the JSON outline view. This should ideally match the name property value or property name.
````
"resources": [
 {
   "name": "availabilitySet",
   "type": "Microsoft.Compute/availabilitySets",
   "apiVersion": "2015-06-15",
   "location": "[resourceGroup().location]",
   "tags": { "displayName": "appTierAS" },
   "properties": {
      ...
   }
}
]
````
### B.	Template Variables Checklist  
* Use variables for values that you need to use more than once in a template. If a value is used only once, a hard-coded value makes your template easier to read.

* You cannot use the reference function in the variables section. The reference function derives its value from the resource's runtime state, but variables are resolved during the initial parsing of the template. Instead, construct values that need the reference function directly in the resources or outputs section of the template.

* Name variables using this scheme templateScenarioResourceName (e.g. simpleLinuxVMVNET, userRoutesNSG, elasticsearchPublicIP etc.) that describe the scenario rather. This ensures when a user browses all the resources in the Portal there aren't a bunch of resources with the same name (e.g. myVNET, myPublicIP, myNSG)

* Include variables for resource names that need to be unique, as shown in Resource names.

* You can group variables into complex objects. You can reference a value from a complex object in the format variable.subentry. Grouping variables helps you track related variables and improves readability of the template.

### C.	Template Resources Checklist
* Use resourceGroup().location for resource locations to be compatible with all clouds
* Specify **comments** for each resource in the template to help other contributors understand the purpose of the resource.
````
"resources": [
   {
       "name": "[variables('storageAccountName')]",
       "type": "Microsoft.Storage/storageAccounts",
       "apiVersion": "2016-01-01",
       "location": "[resourceGroup().location]",
       "comments": "This storage account is used to store the VM disks",
       ...
   }
 ]
````
* Use tags to add metadata to resources that enable you to add additional information about your resources. For example, you can add metadata to a resource for billing detail purposes. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-using-tags">Using tags to organize your Azure resources</a> . Specify tags properties below comments line.
* If you use a **public endpoint** in your template (such as a blob storage public endpoint), **do not hardcode** the namespace. Use the **reference** function to retrieve the namespace dynamically. This approach allows you to deploy the template to different public namespace environments, without manually changing the endpoint in the template. Set the apiVersion to the same version you are using for the storageAccount in your template.
````
"osDisk": {
     "name": "osdisk",
     "vhd": {
         "uri": "[concat(reference(concat('Microsoft.Storage/storageAccounts/', variables('storageAccountName')), '2016-01-01').primaryEndpoints.blob, variables('vmStorageAccountContainerName'), '/',variables('OSDiskName'),'.vhd')]"
     }
 }
````
* If the storage account is deployed in the same template, you do not need to specify the provider namespace when referencing the resource. The simplified syntax is:
````
"osDisk": {
     "name": "osdisk",
     "vhd": {
         "uri": "[concat(reference(variables('storageAccountName'), '2016-01-01').primaryEndpoints.blob, variables('vmStorageAccountContainerName'), '/',variables('OSDiskName'),'.vhd')]"
     }
 }   
````
* If you have other values in your template configured with a public namespace, change these values to reflect the same reference function. For example, the storageUri property of the virtual machine diagnosticsProfile. You can also reference an existing storage account in a different resource group.
````
diagnosticsProfile": {
     "bootDiagnostics": {
         "enabled": "true",
         "storageUri": "[reference(concat('Microsoft.Storage/storageAccounts/', variables('storageAccountName')), '2016-01-01').primaryEndpoints.blob]"
     }
 } 
````

````
"osDisk": {
     "name": "osdisk", 
     "vhd": {
         "uri":"[concat(reference(resourceId(parameters('existingResourceGroup'), 'Microsoft.Storage/storageAccounts/', parameters('existingStorageAccountName')), '2016-01-01').primaryEndpoints.blob,  variables('vmStorageAccountContainerName'), '/', variables('OSDiskName'),'.vhd')]"
     }
 } 
````
* Assign publicIPAddresses to a virtual machine only when required for an application. To connect for debug, management or administrative purposes, use either inboundNatRules, virtualNetworkGateways or a jumpbox.
* The **domainNameLabel** property for publicIPAddresses must be unique. domainNameLabel is required to be between 3 and 63 characters long and to follow the rules specified by this regular expression ([a-z][a-z0-9-]{1,61}[a-z0-9]$) As the uniqueString function generates a string that is 13 characters long, the dnsPrefixString parameter is limited to no more than 50 character
````
"parameters": {
     "dnsPrefixString": {
         "type": "string",
         "maxLength": 50,
         "metadata": {
             "description": "DNS Label for the Public IP. Must be lowercase. It should match with the following regular expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$ or it will raise an error."
         }
     }
 },
 "variables": {
     "dnsPrefix": "[concat(parameters('dnsPrefixString'),uniquestring(resourceGroup().id))]"
 }
````
* When adding a password to a **customScriptExtension**, use the **commandToExecute** property in protectedSettings.
````
"properties": {
     "publisher": "Microsoft.Azure.Extensions",
     "type": "CustomScript",
     "typeHandlerVersion": "2.0",
     "autoUpgradeMinorVersion": true,
     "settings": {
         "fileUris": [
             "[concat(variables('template').assets, '/lamp-app/install_lamp.sh')]"
         ]
     },
     "protectedSettings": {
         "commandToExecute": "[concat('sh install_lamp.sh ', parameters('mySqlPassword'))]"
     }
 } 
````
* Any VM Extension should be part of VM resource as a child resource.
### D.	Template Outputs Checklist
* If a template creates **publicIPAddresses**, it should have an **outputs** section that returns details of the IP address and the fully qualified domain name. These output values enable you to easily retrieve these details after deployment. When referencing the resource, use the API version that was used to create it. 
````
"outputs": {
    "fqdn": {
        "value": "[reference(resourceId('Microsoft.Network/publicIPAddresses',parameters('publicIPAddressName')), '2016-07-01').dnsSettings.fqdn]",
        "type": "string"
    }, 
````
### E.	Code Formatting
* It is a good practice to pass your template through a JSON validator to remove extraneous commas, parenthesis, brackets that may cause an error during deployment. Try <a href="https://jsonlint.com/">JSONlint</a> or a linter package for your favourite editing environment (Visual Studio Code, Atom, Sublime Text, Visual Studio, etc.).
It's also a good idea to format your JSON for better readability. You can use a JSON formatter package for your local editor. In Visual Studio, format the document with Ctrl+K, Ctrl+D. In VS Code, use Alt+Shift+F. You can use a JSON formatter package for your local editor or <a href="https://www.bing.com/search?q=json+formatter">format online using this link</a> .

### F.	Security Checklist

You should be following below security best practices when designing and developing your template.

* Network security should be used with all network configuration. 
* NSG shouldn’t be configured to allow ANY-ANY ports. 
* It is recommended to ask users to enter public CIDR as parameter template and NSG should be configured to allow access only from the CIDR value. 
* There must not be any hardcoded passwords in template, custom script extensions etc. 
* All artefact’s(nested template, scripts etc.) should be stored in azure Quickstart github repo only.

### G.	Storing Public artifacts Checklist
Most of the times templates may include artifacts and components which needs to be accessed during deployments. Some of these are
  * Custom Scripts to be executed inside a VM
  * PowerShell Modules/DSC Modules to be used
  * Any other resources/components used by deployment

When samples contain scripts, templates or other artifacts that need to be made available during deployment, using the standard parameters for staging those artifacts will enable command line deployment with the scripts provided at the root of the repository. This allows the template to be used in a variety of workflows without changing the templates or default parameters and the artifacts will be staged to a private location, rather than the public GitHub URI.

First, define two standard parameters:
* **_artifactsLocation:** This is the base URI where all artifacts for the deployment will be staged. The default value should be the samples folder so that the sample can be easily deployed in scenarios where a private location is not required.
* **_artifactsLocationSasToken:** This is the sasToken required to access _artifactsLocation. The default value should be "" for scenarios where the _artifactsLocation is not secured, for example, the raw GitHub URI.
````
"parameters": {
      "_artifactsLocation": {
          "type": "string",
          "metadata": {
              "description": "The base URI where artifacts required by this template are located. When the template is deployed using the accompanying scripts, a private location in the subscription will be used and this value will be automatically generated."
},
          "defaultValue": "https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/201-vm-custom-script-windows/"
      },
      "_artifactsLocationSasToken": {
          "type": "securestring",
          "metadata": {
              "description": "The sasToken required to access _artifactsLocation.  When the template is deployed using the accompanying scripts, a sasToken will be automatically generated."
          },
          "defaultValue": ""
      } 
  }, 
````
In this example, the custom script extension can be authored using a common pattern that can be applied to all resources that need staged artifacts as well as applied to all samples.
````
"properties": {
      "publisher": "Microsoft.Compute",
      "type": "CustomScriptExtension",
      "typeHandlerVersion": "1.8",
      "autoUpgradeMinorVersion": true,
      "settings": {
      "fileUris": [
          "[concat(parameters('_artifactsLocation'), '/', variables('ScriptFolder'), '/', variables('ScriptFileName'), parameters('_artifactsLocationSasToken'))]"
        ],
      "commandToExecute": "[concat('powershell -ExecutionPolicy Unrestricted -File ', variables('ScriptFolder'), '/', variables('ScriptFileName'))]"
        }
  }
````






  







