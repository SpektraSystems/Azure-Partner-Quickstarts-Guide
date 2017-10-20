// JavaScript Document
 var gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3a-Process-Flowchart.md";
      $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3a-Process-Flowchart.md");
		  $("#heading").html("Process Flowchart");
      function getData(type) 
      {
		  
       if (type == 2)
        {
          gitHubUrl ="https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3a-Process-Flowchart.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3a-Process-Flowchart.md");
		  $("#heading").html("Process Flowchart");
        }
		
	////////////////////////////////////////////////////////////////////////////////////////////////////	
        else if (type == 3)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3b-Idea-Acceptance-Phase.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3b-Idea-Acceptance-Phase.md");
		  $("#heading").html("Process Flowchart");
        }
	//////////////////////////////////////////////////////////////////////////////////////////////////	
		 else if (type == 4)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3c-Template-Development-Testing%26Documentation.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3c-Template-Development-Testing&Documentation.md");
		  $("#heading").html("Quickstart Development, Testing & Documentation");
        }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////		
		 else if (type == 5)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3D-Publish-the-Quickstart.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3D-Publish-the-Quickstart.md");
		  $("#heading").html("Publish The Quickstart");
        }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////
		 else if (type == 6)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3E-Support-and-Maintenance%26Breakfix.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3E-Support-and-Maintenance&Breakfix.md");
		  $("#heading").html("Support And Maintenance & Breakfix");
        }
 ////////////////////////////////////////////////////////////////////
		 else if (type == 7)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/3F-Partner-quickstarts-Portal.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/3F-Partner-quickstarts-Portal.md");
		  $("#heading").html("Partnerquickstarts Portal");
        }
	/////////////////////////////////////////////////////
		
		 else if (type == 8)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.A.Envision-the-Quickstart-architecture.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.A.Envision-the-Quickstart-architecture.md");
		  $("#heading").html("Envision The Quickstart Architecture");
        }
	/////////////////////////////////////////////////////////////////
		
		 else if (type == 9)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.B.Azure-Region-Support.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.B.Azure-Region-Support.md");
		  $("#heading").html("Azure Region Support");
        }
	////////////////////////////////////////////////////////////////
		 else if (type == 10)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.C.Identify-the-Outside-and-Inside-of-a-VM.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.C.Identify-the-Outside-and-Inside-of-a-VM.md");
		  $("#heading").html("Identify The Outside And Inside of a VM");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 11)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.D.Choosing-free-form-vs.known-configurations.bd";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.D.Choosing-free-form-vs.known-configurations.bd");
		  $("#heading").html("Choosing Free-Form VS. Known Configurations");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 12)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.E.Designing-Modularity-with-Nested-Templates.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.E.Designing-Modularity-with-Nested-Templates.md");
		  $("#heading").html("Designing Modularity With Nested Templates");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 13)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.F.Identify-and-build-template-Pre-requisite.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.F.Identify-and-build-template-Pre-requisite.md");
		  $("#heading").html("Identify And Build Template Pre-Requisite(If Any)");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 14)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.G.Working-with-Unique-Resource-Name%E2%80%99s.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.G.Working-with-Unique-Resource-Name%E2%80%99s.md");
		  $("#heading").html("Working With Unique Resource Names");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 15)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.H.Identifying-an-defining-dependencies-between-resources.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.H.Identifying-an-defining-dependencies-between-resources.md");
		  $("#heading").html("Identifying And Defining Dependencies Between Resources ");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 16)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.I.Condition-based-templates-deployment.md	";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.I.Condition-based-templates-deployment.md");
		  $("#heading").html("Condition Based Templates Deployment");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 17)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.J.High-Availability-Best-Practices.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.J.High-Availability-Best-Practices.md");
		  $("#heading").html("High Availability Best Practices");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 18)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.K.Use-Key-Vault-to-pas-secure-parameter-value-during-deployment.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.K.Use-Key-Vault-to-pas-secure-parameter-value-during-deployment.md");
		  $("#heading").html("Use Key Vault To Pass Secure Parameter Value During Deployment");
        }
	//////////////////////////////////////////////////////////////// 
	else if (type == 19)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.L.Creating-Multiple-instances-of-resources.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.L.Creating-Multiple-instances-of-resources.md");
		  $("#heading").html("Creating Multiple Instances Of Resources");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 20)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.M.Using-Market-place-items-in-templates.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.M.Using-Market-place-items-in-templates.md");
		  $("#heading").html("Using Market Place Items In Templates");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 21)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.N.Identify-Post-Deployment-Steps.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.N.Identify-Post-Deployment-Steps.md");
		  $("#heading").html("Identify Post Deployment Steps");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 22)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/40dealing.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/40dealing.md");
		  $("#heading").html("Dealing With Pre-Requisite Resources");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 23)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/4.O.Development-Tool.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/4.O.Development-Tool.md");
		  $("#heading").html("Development Tool");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 24)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5A.-Template-Parameters-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5A.-Template-Parameters-Checklist.md");
		  $("#heading").html("Template Parameters Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 25)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5B.-Template-Variables-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5B.-Template-Variables-Checklist.md");
		  $("#heading").html("Template Variables Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 26)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5C.-Template-Resources-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5C.-Template-Resources-Checklist.md");
		  $("#heading").html("Template Resources Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 27)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5D.-Template-Outputs-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5D.-Template-Outputs-Checklist.md");
		  $("#heading").html("Template Outputs Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 28)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5E.Code-Formatting.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5E.Code-Formatting.md");
		  $("#heading").html("Code Formatting");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 29)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5F.Security-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5F.Security-Checklist.md");
		  $("#heading").html("Security Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 30)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/5G.Storing-Public-artifacts-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/5G.Storing-Public-artifacts-Checklist.md");
		  $("#heading").html("Storing Artifacts Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 31)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6A.Testing-the-QuickStart-Template.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6A.Testing-the-QuickStart-Template.md");
		  $("#heading").html("Testing The QuickStart Template");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 32)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6B.Documentation-and-files.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6B.Documentation-and-files.md");
		  $("#heading").html("Documentation And filest");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 33)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6C.Files-and-Folder-Structure-and-naming-convention.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6C.Files-and-Folder-Structure-and-naming-convention.md");
		  $("#heading").html("Files And Folder Structure And Naming Convention");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 34)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6D.README-document-Checklist.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6D.README-document-Checklist.md");
		  $("#heading").html("README.md Document Checklist");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 35)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6E.Metadata.json-file-best-practices.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6E.Metadata.json-file-best-practices.md");
		  $("#heading").html("Metadata.json File Best Practices");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 36)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6F.Creating-azuredeploy.parameters.json-file.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6F.Creating-azuredeploy.parameters.json-file.md");
		  $("#heading").html("Creating Azuredeploy.parameters.json File");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 37)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6G.Usage-of-Logo-TradeMarks%20.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6G.Usage-of-Logo-TradeMarks%20.md");
		  $("#heading").html("Usage of Logo/TradeMarks");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 38)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/6H.Preparing-Template-for-Automated-Travis-CI-Validation.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/6H.Preparing-Template-for-Automated-Travis-CI-Validation.md");
		  $("#heading").html("Preparing Template For Automated Travis CI Validation");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 39)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.A.Validation-with-Template-Validation-Partner.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.A.Validation-with-Template-Validation-Partner.md");
		  $("#heading").html("Validation With Template Validation Partner");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 40)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.B.Getting-ready-for-GiTHub-Pull-request.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.B.Getting-ready-for-GiTHub-Pull-request.md");
		  $("#heading").html("Getting Ready For GiTHub Pull Request");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 41)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.C.Creating-Pull-Request-in-GitHub-Azure-Quickstart-Repo(Using%20CLI).md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.C.Creating-Pull-Request-in-GitHub-Azure-Quickstart-Repo(Using%20CLI).md");
		  $("#heading").html("Creating Pull Request in GitHub Azure Quickstart Repo(Using CLI)");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 42)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.D.Creating-Pull-Request-in-GitHub-Azure-Quickstart-Repo-(Using-GUI).md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.D.Creating-Pull-Request-in-GitHub-Azure-Quickstart-Repo-(Using-GUI).md");
		  $("#heading").html("Creating Pull Request in GitHub Azure Quickstart Repo (Using GUI)");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 43)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.E.Completing-Microsoft-CLA(Contribut-on-license-agreement).md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.E.Completing-Microsoft-CLA(Contribut-on-license-agreement).md");
		  $("#heading").html("Completing Microsoft CLA(Contribution License Agreement)");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 44)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.F.Verify-Automated-Validation-Check-with-Travis.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.F.Verify-Automated-Validation-Check-with-Travis.md");
		  $("#heading").html("Verify Automated Validation Check With Travis");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 45)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.G.Updating-Pull-Requests.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.G.Updating-Pull-Requests.md");
		  $("#heading").html("Updating Pull Requests");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 46)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.H.Add-Quickstart-to-QS-Portal.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.H.Add-Quickstart-to-QS-Portal.md");
		  $("#heading").html("Add Quickstart to QS Portal");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 47)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/7.I.Quickstart-Launch.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/7.I.Quickstart-Launch.md");
		  $("#heading").html("Quickstart Launch");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 48)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/8-Maintenance-Updates-and-Support.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/8-Maintenance-Updates-and-Support.md");
		  $("#heading").html("Maintenance, Update And Support");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 49)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/8A-Quickstart-Break-Fix-Process.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/8A-Quickstart-Break-Fix-Process.md");
		  $("#heading").html("Quickstart Break Fix Process");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 50)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/8b-Portal-Support.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/8b-Portal-Support.md");
		  $("#heading").html("Portal Support");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 51)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/9a.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/9a.md");
		  $("#heading").html("Refrences Quickstart Resources");
        }
	////////////////////////////////////////////////////////////////
	 else if (type == 52)
        {
          gitHubUrl = "https://raw.githubusercontent.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/gh-pages/9b.md";
          $("#editLink").attr("href", "https://github.com/SpektraSystems/Azure-Partner-Quickstarts-Guide/edit/gh-pages/9b.md");
		  $("#heading").html("Contact");
        }
	
	
		
	<!-----------------------------Ajax Script for fetching content------------------->	
        
        $.ajax({
          url: gitHubUrl, 
          success: function(result){
            $("#results").html(result);
          }
        });
      }

      getData(0); 
	  
	  
