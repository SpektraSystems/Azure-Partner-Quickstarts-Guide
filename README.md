# Azure-Partner-Quickstarts-Guide

## 1.	What is Azure Quickstart by template partners 
Want to learn how to save time when launching full-stack solutions in the cloud? Azure Partner Quickstarts are 
<a href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview">Azure Resource Manager templates</a> created by trusted Microsoft partners and designed to help you get started with integrated, multi-artifact solutions rather than single applications or services on Azure. 
These templates are constructed to launch solutions comprising multiple applications and services from both Microsoft and Microsoft software partners, open source and proprietary. These Quickstarts help automate much of the manual work that would be otherwise normally be involved in stitching artifacts together.

Quickstarts are available on Partner QS portal -  https://partnerquickstarts.azurewebsites.net/ . This portal is also used for end to end management of partner Quickstarts lifecycle.

Partner Quickstarts are intended as helpers and learning tools. You can customize these Quickstart templates to meet your unique business needs.

From a partner standpoint, Quickstart templates are gold standard azure deployment for specific workloads. Customers can use these templates to build complex workloads on azure comprising all fabric and applications component through automated deployment, resulting a quicker and smooth end user experience. 
Templates should be targeting a specific scenario workload, or some of the commonly deployed solutions architecture across the globe. At the same time, it needs to be easily customizable as well to meet unique business needs.

## 2.	Who can contribute
 * Microsoft Partners
 
## 3.	How to Contribute: Process Flow
### A.	Process Flowchart 
Quickstart solutions goes through multiple checks and validation before getting published on
<a href="https://partnerquickstarts.azurewebsites.net/#/welcome">azure Quickstarts from Microsoft partners portal</a> Following flow chart explains the high level process to be completed for a new quickstart templates to get published.  Microsoft QuickStart team will work with you for this process. 
<img src="Images/Images/1.png"/> 

### B.	Idea Acceptance Phase

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

### C.	Template Development, Testing & Documentation
After acceptance of the Quickstart idea, Partner may start to develop the Quickstart solution. Partner should follow below instructions:
* Understand and follow **Solution Design Consideration** best practices available in this document.
* Understand and follow **template development checklist**  available in this document.
* Build the QuickStart template comprising.
  *  azuredeploy.json Template File
  *  Nested templates if any
  *  azuredeploy.parameters.json file
  *  Documentations as specified in **Section-5**
*	Develop the required documentation for the Quickstart following best practices given **here**
* Test the Quickstart in every scenario available **here**

### D.	Publish the Quickstart
Once template development partner has completed all steps in **Section-C**, they can move to validation phase of the solution and launch the Quickstart for public access.
* Submit the Quickstart to Azure Quickstart validation partner for validation of the solution. Follow **this** to learn more
* Incorporate any feedback provided by azure Quickstart validation partner and submit Pull Request to submit the Quickstart to 
<a href="https://github.com/Azure/azure-quickstart-templates">Microsoft Azure GitHub repo</a>
*	Following the **publishing guidelines** available in the document
* Add the quickstart to partner Quickstarts <a href="https://partnerquickstarts.azurewebsites.net/#/welcome">Portal</a>
* Quickstart template will get launched on <a href="https://partnerquickstarts.azurewebsites.net/#/welcome">azure Quickstarts from Microsoft partners web page</a>. Launch activities may also include formal announcement on social media and blogs, as applicable. 

### E.	Support and Maintenance & Breakfix
Template development partner should be providing the post publishing support, maintenance and updates on the quickstart as and when required. 
* Follow **Support and Maintenance** Guidelines available in this document.

### F.	Partnerquickstarts Portal 
Template development partner should be using partner quickstart portal (https://partnerquickstarts.azurewebsites.net) for end to end lifecycle management of the Quickstarts.
* Request login for the portal if not available already by writing to Email :- **quickstartsupport@spektrasystems.com**
Portal can be used for:
* View, Manage and modify existing contributed quickstart
* Submit new quickstart 
* Verify last validation reports.
* Update Status if QS validation fails.

## 4.	Quickstart Technical Solution Best Practices   
### A.	Envision the Quickstart architecture 
First step towards building a good Quickstart would be to draw the overall low-level architecture of the solution. You should start developing template once this architecture design is finalized. Architecture design should contain overall solution components such as Virtual Network, Subnet’s, Storage accounts, Virtual Machines, App Service etc. Sample architecture diagram can be found **here**.
### B.	Azure Region Support 
Your Quick Start should be deployable across the majority of Azure Regions. You should verify availability of services in azure regions for your template and update documentation accordingly. Services availability by region is listed **here**.
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



