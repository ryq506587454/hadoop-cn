(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{235:function(e,t,n){"use strict";n.r(t);var a=n(0),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"hadoop-writing-yarn-applications"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-writing-yarn-applications"}},[e._v("#")]),e._v(" Hadoop: Writing YARN Applications")]),e._v(" "),n("h2",{attrs:{id:"purpose"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[e._v("#")]),e._v(" Purpose")]),e._v(" "),n("p",[e._v("This document describes, at a high-level, the way to implement new Applications for YARN.")]),e._v(" "),n("h2",{attrs:{id:"concepts-and-flow"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concepts-and-flow"}},[e._v("#")]),e._v(" Concepts and Flow")]),e._v(" "),n("p",[e._v("The general concept is that an application submission client submits an application to the YARN ResourceManager (RM). This can be done through setting up a YarnClient object. After YarnClient is started, the client can then set up application context, prepare the very first container of the application that contains the ApplicationMaster (AM), and then submit the application. You need to provide information such as the details about the local files/jars that need to be available for your application to run, the actual command that needs to be executed (with the necessary command line arguments), any OS environment settings (optional), etc. Effectively, you need to describe the Unix process(es) that needs to be launched for your ApplicationMaster.")]),e._v(" "),n("p",[e._v("The YARN ResourceManager will then launch the ApplicationMaster (as specified) on an allocated container. The ApplicationMaster communicates with YARN cluster, and handles application execution. It performs operations in an asynchronous fashion. During application launch time, the main tasks of the ApplicationMaster are: a) communicating with the ResourceManager to negotiate and allocate resources for future containers, and b) after container allocation, communicating YARN NodeManagers (NMs) to launch application containers on them. Task a) can be performed asynchronously through an AMRMClientAsync object, with event handling methods specified in a AMRMClientAsync.CallbackHandler type of event handler. The event handler needs to be set to the client explicitly. Task b) can be performed by launching a runnable object that then launches containers when there are containers allocated. As part of launching this container, the AM has to specify the ContainerLaunchContext that has the launch information such as command line specification, environment, etc.")]),e._v(" "),n("p",[e._v("During the execution of an application, the ApplicationMaster communicates NodeManagers through NMClientAsync object. All container events are handled by NMClientAsync.CallbackHandler, associated with NMClientAsync. A typical callback handler handles client start, stop, status update and error. ApplicationMaster also reports execution progress to ResourceManager by handling the getProgress() method of AMRMClientAsync.CallbackHandler.")]),e._v(" "),n("p",[e._v("Other than asynchronous clients, there are synchronous versions for certain workflows (AMRMClient and NMClient). The asynchronous clients are recommended because of (subjectively) simpler usages, and this article will mainly cover the asynchronous clients. Please refer to AMRMClient and NMClient for more information on synchronous clients.")]),e._v(" "),n("h2",{attrs:{id:"interfaces"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[e._v("#")]),e._v(" Interfaces")]),e._v(" "),n("p",[e._v("Following are the important interfaces:")]),e._v(" "),n("ul",[n("li",[e._v("Client<--\x3eResourceManager")])]),e._v(" "),n("p",[e._v("By using YarnClient objects.")]),e._v(" "),n("ul",[n("li",[e._v("ApplicationMaster<--\x3eResourceManager")])]),e._v(" "),n("p",[e._v("By using AMRMClientAsync objects, handling events asynchronously by AMRMClientAsync.CallbackHandler")]),e._v(" "),n("ul",[n("li",[e._v("ApplicationMaster<--\x3eNodeManager")])]),e._v(" "),n("p",[e._v("Launch containers. Communicate with NodeManagers by using NMClientAsync objects, handling container events by NMClientAsync.CallbackHandler")]),e._v(" "),n("p",[e._v("Note")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The three main protocols for YARN application (ApplicationClientProtocol, ApplicationMasterProtocol and ContainerManagementProtocol) are still preserved. The 3 clients wrap these 3 protocols to provide simpler programming model for YARN applications.")])]),e._v(" "),n("li",[n("p",[e._v("Under very rare circumstances, programmer may want to directly use the 3 protocols to implement an application. However, note that such behaviors are no longer encouraged for general use cases.")])])]),e._v(" "),n("h2",{attrs:{id:"writing-a-simple-yarn-application"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-simple-yarn-application"}},[e._v("#")]),e._v(" Writing a Simple YARN Application")]),e._v(" "),n("h3",{attrs:{id:"writing-a-simple-client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-simple-client"}},[e._v("#")]),e._v(" Writing a simple Client")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The first step that a client needs to do is to initialize and start a YarnClient.")]),e._v(" "),n("pre",[n("code",[e._v("  YarnClient yarnClient = YarnClient.createYarnClient();\n")])]),e._v(" "),n("p",[e._v("yarnClient.init(conf);\nyarnClient.start();")])]),e._v(" "),n("li",[n("p",[e._v("Once a client is set up, the client needs to create an application, and get its application id.")]),e._v(" "),n("pre",[n("code",[e._v("  YarnClientApplication app = yarnClient.createApplication();\n")])]),e._v(" "),n("p",[e._v("GetNewApplicationResponse appResponse = app.getNewApplicationResponse();")])]),e._v(" "),n("li",[n("p",[e._v("The response from the YarnClientApplication for a new application also contains information about the cluster such as the minimum/maximum resource capabilities of the cluster. This is required so that to ensure that you can correctly set the specifications of the container in which the ApplicationMaster would be launched. Please refer to GetNewApplicationResponse for more details.")])]),e._v(" "),n("li",[n("p",[e._v("The main crux of a client is to setup the ApplicationSubmissionContext which defines all the information needed by the RM to launch the AM. A client needs to set the following into the context:")])]),e._v(" "),n("li",[n("p",[e._v("Application info: id, name")])]),e._v(" "),n("li",[n("p",[e._v("Queue, priority info: Queue to which the application will be submitted, the priority to be assigned for the application.")])]),e._v(" "),n("li",[n("p",[e._v("User: The user submitting the application")])]),e._v(" "),n("li",[n("p",[e._v("ContainerLaunchContext: The information defining the container in which the AM will be launched and run. The ContainerLaunchContext, as mentioned previously, defines all the required information needed to run the application such as the local Resources (binaries, jars, files etc.), Environment settings (CLASSPATH etc.), the Command to be executed and security Tokens (RECT).")]),e._v(" "),n("p",[e._v("// set the application submission context\nApplicationSubmissionContext appContext = app.getApplicationSubmissionContext();\nApplicationId appId = appContext.getApplicationId();")]),e._v(" "),n("p",[e._v("appContext.setKeepContainersAcrossApplicationAttempts(keepContainers);\nappContext.setApplicationName(appName);")]),e._v(" "),n("p",[e._v("// set local resources for the application master\n// local files or archives as needed\n// In this scenario, the jar file for the application master is part of the local resources\nMap<String, LocalResource> localResources = new HashMap<String, LocalResource>();")]),e._v(" "),n("p",[e._v('LOG.info("Copy App Master jar from local filesystem and add to local environment");\n// Copy the application master jar to the filesystem\n// Create a local resource to point to the destination jar path\nFileSystem fs = FileSystem.get(conf);\naddToLocalResources(fs, appMasterJar, appMasterJarPath, appId.toString(),\nlocalResources, null);')]),e._v(" "),n("p",[e._v("// Set the log4j properties if needed\nif (!log4jPropFile.isEmpty()) {\naddToLocalResources(fs, log4jPropFile, log4jPath, appId.toString(),\nlocalResources, null);\n}")]),e._v(" "),n("p",[e._v('// The shell script has to be made available on the final container(s)\n// where it will be executed.\n// To do this, we need to first copy into the filesystem that is visible\n// to the yarn framework.\n// We do not need to set this as a local resource for the application\n// master as the application master does not need it.\nString hdfsShellScriptLocation = "";\nlong hdfsShellScriptLen = 0;\nlong hdfsShellScriptTimestamp = 0;\nif (!shellScriptPath.isEmpty()) {\nPath shellSrc = new Path(shellScriptPath);\nString shellPathSuffix =\nappName + "/" + appId.toString() + "/" + SCRIPT_PATH;\nPath shellDst =\nnew Path(fs.getHomeDirectory(), shellPathSuffix);\nfs.copyFromLocalFile(false, true, shellSrc, shellDst);\nhdfsShellScriptLocation = shellDst.toUri().toString();\nFileStatus shellFileStatus = fs.getFileStatus(shellDst);\nhdfsShellScriptLen = shellFileStatus.getLen();\nhdfsShellScriptTimestamp = shellFileStatus.getModificationTime();\n}')]),e._v(" "),n("p",[e._v("if (!shellCommand.isEmpty()) {\naddToLocalResources(fs, null, shellCommandPath, appId.toString(),\nlocalResources, shellCommand);\n}")]),e._v(" "),n("p",[e._v('if (shellArgs.length > 0) {\naddToLocalResources(fs, null, shellArgsPath, appId.toString(),\nlocalResources, StringUtils.join(shellArgs, " "));\n}')]),e._v(" "),n("p",[e._v('// Set the env variables to be setup in the env where the application master will be run\nLOG.info("Set the environment for the application master");\nMap<String, String> env = new HashMap<String, String>();')]),e._v(" "),n("p",[e._v("// put location of shell script into env\n// using the env info, the application master will create the correct local resource for the\n// eventual containers that will be launched to execute the shell scripts\nenv.put(DSConstants.DISTRIBUTEDSHELLSCRIPTLOCATION, hdfsShellScriptLocation);\nenv.put(DSConstants.DISTRIBUTEDSHELLSCRIPTTIMESTAMP, Long.toString(hdfsShellScriptTimestamp));\nenv.put(DSConstants.DISTRIBUTEDSHELLSCRIPTLEN, Long.toString(hdfsShellScriptLen));")]),e._v(" "),n("p",[e._v('// Add AppMaster.jar location to classpath\n// At some point we should not be required to add\n// the hadoop specific classpaths to the env.\n// It should be provided out of the box.\n// For now setting all required classpaths including\n// the classpath to "." for the application jar\nStringBuilder classPathEnv = new StringBuilder(Environment.CLASSPATH.$$())\n.append(ApplicationConstants.CLASS_PATH_SEPARATOR).append("./*");\nfor (String c : conf.getStrings(\nYarnConfiguration.YARN_APPLICATION_CLASSPATH,\nYarnConfiguration.DEFAULT_YARN_CROSS_PLATFORM_APPLICATION_CLASSPATH)) {\nclassPathEnv.append(ApplicationConstants.CLASS_PATH_SEPARATOR);\nclassPathEnv.append(c.trim());\n}\nclassPathEnv.append(ApplicationConstants.CLASS_PATH_SEPARATOR).append(\n"./log4j.properties");')]),e._v(" "),n("p",[e._v("// Set the necessary command to execute the application master\nVector"),n("CharSequence",[e._v(" vargs = new Vector"),n("CharSequence",[e._v("(30);")])],1)],1),e._v(" "),n("p",[e._v('// Set java executable command\nLOG.info("Setting up app master command");\nvargs.add(Environment.JAVA_HOME.$$() + "/bin/java");\n// Set Xmx based on am memory size\nvargs.add("-Xmx" + amMemory + "m");\n// Set class name\nvargs.add(appMasterMainClass);\n// Set params for Application Master\nvargs.add("--container_memory " + String.valueOf(containerMemory));\nvargs.add("--container_vcores " + String.valueOf(containerVirtualCores));\nvargs.add("--num_containers " + String.valueOf(numContainers));\nvargs.add("--priority " + String.valueOf(shellCmdPriority));')]),e._v(" "),n("p",[e._v('for (Map.Entry<String, String> entry : shellEnv.entrySet()) {\nvargs.add("--shell_env " + entry.getKey() + "=" + entry.getValue());\n}\nif (debugFlag) {\nvargs.add("--debug");\n}')]),e._v(" "),n("p",[e._v('vargs.add("1>" + ApplicationConstants.LOG_DIR_EXPANSION_VAR + "/AppMaster.stdout");\nvargs.add("2>" + ApplicationConstants.LOG_DIR_EXPANSION_VAR + "/AppMaster.stderr");')]),e._v(" "),n("p",[e._v('// Get final command\nStringBuilder command = new StringBuilder();\nfor (CharSequence str : vargs) {\ncommand.append(str).append(" ");\n}')]),e._v(" "),n("p",[e._v('LOG.info("Completed setting up app master command " + command.toString());\nList'),n("String",[e._v(" commands = new ArrayList"),n("String",[e._v("();\ncommands.add(command.toString());")])],1)],1),e._v(" "),n("p",[e._v("// Set up the container launch context for the application master\nContainerLaunchContext amContainer = ContainerLaunchContext.newInstance(\nlocalResources, env, commands, null, null, null);")]),e._v(" "),n("p",[e._v("// Set up resource type requirements\n// For now, both memory and vcores are supported, so we set memory and\n// vcores requirements\nResource capability = Resource.newInstance(amMemory, amVCores);\nappContext.setResource(capability);")]),e._v(" "),n("p",[e._v("// Service data is a binary blob that can be passed to the application\n// Not needed in this scenario\n// amContainer.setServiceData(serviceData);")]),e._v(" "),n("p",[e._v('// Setup security tokens\nif (UserGroupInformation.isSecurityEnabled()) {\n// Note: Credentials class is marked as LimitedPrivate for HDFS and MapReduce\nCredentials credentials = new Credentials();\nString tokenRenewer = conf.get(YarnConfiguration.RM_PRINCIPAL);\nif (tokenRenewer == null | | tokenRenewer.length() == 0) {\nthrow new IOException(\n"Can\'t get Master Kerberos principal for the RM to use as renewer");\n}')]),e._v(" "),n("p",[e._v('// For now, only getting tokens for the default file-system.\nfinal Token<?> tokens[] =\nfs.addDelegationTokens(tokenRenewer, credentials);\nif (tokens != null) {\nfor (Token<?> token : tokens) {\nLOG.info("Got dt for " + fs.getUri() + "; " + token);\n}\n}\nDataOutputBuffer dob = new DataOutputBuffer();\ncredentials.writeTokenStorageToStream(dob);\nByteBuffer fsTokens = ByteBuffer.wrap(dob.getData(), 0, dob.getLength());\namContainer.setTokens(fsTokens);\n}')]),e._v(" "),n("p",[e._v("appContext.setAMContainerSpec(amContainer);")])]),e._v(" "),n("li",[n("p",[e._v("After the setup process is complete, the client is ready to submit the application with specified priority and queue.")]),e._v(" "),n("p",[e._v("// Set the priority for the application master\nPriority pri = Priority.newInstance(amPriority);\nappContext.setPriority(pri);")]),e._v(" "),n("p",[e._v("// Set the queue to which this application is to be submitted in the RM\nappContext.setQueue(amQueue);")]),e._v(" "),n("p",[e._v("// Submit the application to the applications manager\n// SubmitApplicationResponse submitResp = applicationsManager.submitApplication(appRequest);")]),e._v(" "),n("p",[e._v("yarnClient.submitApplication(appContext);")])]),e._v(" "),n("li",[n("p",[e._v("At this point, the RM will have accepted the application and in the background, will go through the process of allocating a container with the required specifications and then eventually setting up and launching the AM on the allocated container.")])]),e._v(" "),n("li",[n("p",[e._v("There are multiple ways a client can track progress of the actual task.")])])]),e._v(" "),n("blockquote",[n("ul",[n("li",[e._v("It can communicate with the RM and request for a report of the application via the getApplicationReport() method of YarnClient.")])])]),e._v(" "),n("pre",[n("code",[e._v("// Get application report for the appId we are interested in\nApplicationReport report = yarnClient.getApplicationReport(appId);\n")])]),e._v(" "),n("blockquote",[n("p",[e._v("The ApplicationReport received from the RM consists of the following:")]),e._v(" "),n("blockquote",[n("ul",[n("li",[n("p",[e._v("General application information: Application id, queue to which the application was submitted, user who submitted the application and the start time for the application.")])]),e._v(" "),n("li",[n("p",[e._v("ApplicationMaster details: the host on which the AM is running, the rpc port (if any) on which it is listening for requests from clients and a token that the client needs to communicate with the AM.")])]),e._v(" "),n("li",[n("p",[e._v("Application tracking information: If the application supports some form of progress tracking, it can set a tracking url which is available via ApplicationReport’s getTrackingUrl() method that a client can look at to monitor progress.")])]),e._v(" "),n("li",[n("p",[e._v("Application status: The state of the application as seen by the ResourceManager is available via ApplicationReport#getYarnApplicationState. If the YarnApplicationState is set to FINISHED, the client should refer to ApplicationReport#getFinalApplicationStatus to check for the actual success/failure of the application task itself. In case of failures, ApplicationReport#getDiagnostics may be useful to shed some more light on the the failure.")])])])])]),e._v(" "),n("blockquote",[n("ul",[n("li",[e._v("If the ApplicationMaster supports it, a client can directly query the AM itself for progress updates via the host:rpcport information obtained from the application report. It can also use the tracking url obtained from the report if available.")])])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("In certain situations, if the application is taking too long or due to other factors, the client may wish to kill the application. YarnClient supports the killApplication call that allows a client to send a kill signal to the AM via the ResourceManager. An ApplicationMaster if so designed may also support an abort call via its rpc layer that a client may be able to leverage.")]),e._v(" "),n("pre",[n("code",[e._v("  yarnClient.killApplication(appId);\n")])])])]),e._v(" "),n("h3",{attrs:{id:"writing-an-applicationmaster-am"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#writing-an-applicationmaster-am"}},[e._v("#")]),e._v(" Writing an ApplicationMaster (AM)")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The AM is the actual owner of the job. It will be launched by the RM and via the client will be provided all the necessary information and resources about the job that it has been tasked with to oversee and complete.")])]),e._v(" "),n("li",[n("p",[e._v("As the AM is launched within a container that may (likely will) be sharing a physical host with other containers, given the multi-tenancy nature, amongst other issues, it cannot make any assumptions of things like pre-configured ports that it can listen on.")])]),e._v(" "),n("li",[n("p",[e._v("When the AM starts up, several parameters are made available to it via the environment. These include the ContainerId for the AM container, the application submission time and details about the NM (NodeManager) host running the ApplicationMaster. Ref ApplicationConstants for parameter names.")])]),e._v(" "),n("li",[n("p",[e._v("All interactions with the RM require an ApplicationAttemptId (there can be multiple attempts per application in case of failures). The ApplicationAttemptId can be obtained from the AM’s container id. There are helper APIs to convert the value obtained from the environment into objects.")]),e._v(" "),n("p",[e._v('Map<String, String> envs = System.getenv();\nString containerIdString =\nenvs.get(ApplicationConstants.AM_CONTAINER_ID_ENV);\nif (containerIdString == null) {\n// container id should always be set in the env by the framework\nthrow new IllegalArgumentException(\n"ContainerId not set in the environment");\n}\nContainerId containerId = ConverterUtils.toContainerId(containerIdString);\nApplicationAttemptId appAttemptID = containerId.getApplicationAttemptId();')])]),e._v(" "),n("li",[n("p",[e._v("After an AM has initialized itself completely, we can start the two clients: one to ResourceManager, and one to NodeManagers. We set them up with our customized event handler, and we will talk about those event handlers in detail later in this article.")]),e._v(" "),n("p",[e._v("AMRMClientAsync.CallbackHandler allocListener = new RMCallbackHandler();\namRMClient = AMRMClientAsync.createAMRMClientAsync(1000, allocListener);\namRMClient.init(conf);\namRMClient.start();")]),e._v(" "),n("p",[e._v("containerListener = createNMCallbackHandler();\nnmClientAsync = new NMClientAsyncImpl(containerListener);\nnmClientAsync.init(conf);\nnmClientAsync.start();")])]),e._v(" "),n("li",[n("p",[e._v("The AM has to emit heartbeats to the RM to keep it informed that the AM is alive and still running. The timeout expiry interval at the RM is defined by a config setting accessible via YarnConfiguration.RM_AM_EXPIRY_INTERVAL_MS with the default being defined by YarnConfiguration.DEFAULT_RM_AM_EXPIRY_INTERVAL_MS. The ApplicationMaster needs to register itself with the ResourceManager to start heartbeating.")]),e._v(" "),n("p",[e._v("// Register self with ResourceManager\n// This will start heartbeating to the RM\nappMasterHostname = NetUtils.getHostname();\nRegisterApplicationMasterResponse response = amRMClient\n.registerApplicationMaster(appMasterHostname, appMasterRpcPort,\nappMasterTrackingUrl);")])]),e._v(" "),n("li",[n("p",[e._v("In the response of the registration, maximum resource capability if included. You may want to use this to check the application’s request.")]),e._v(" "),n("p",[e._v('// Dump out information about cluster capability as seen by the\n// resource manager\nint maxMem = response.getMaximumResourceCapability().getMemory();\nLOG.info("Max mem capability of resources in this cluster " + maxMem);')]),e._v(" "),n("p",[e._v('int maxVCores = response.getMaximumResourceCapability().getVirtualCores();\nLOG.info("Max vcores capability of resources in this cluster " + maxVCores);')]),e._v(" "),n("p",[e._v('// A resource ask cannot exceed the max.\nif (containerMemory > maxMem) {\nLOG.info("Container memory specified above max threshold of cluster."\n+ " Using max value." + ", specified=" + containerMemory + ", max="\n+ maxMem);\ncontainerMemory = maxMem;\n}')]),e._v(" "),n("p",[e._v('if (containerVirtualCores > maxVCores) {\nLOG.info("Container virtual cores specified above max threshold of  cluster."\n+ " Using max value." + ", specified=" + containerVirtualCores + ", max="\n+ maxVCores);\ncontainerVirtualCores = maxVCores;\n}\nList'),n("Container",[e._v(' previousAMRunningContainers =\nresponse.getContainersFromPreviousAttempts();\nLOG.info("Received " + previousAMRunningContainers.size()\n+ " previous AM\'s running containers on AM registration.");')])],1)]),e._v(" "),n("li",[n("p",[e._v("Based on the task requirements, the AM can ask for a set of containers to run its tasks on. We can now calculate how many containers we need, and request those many containers.")]),e._v(" "),n("p",[e._v("List"),n("Container",[e._v(' previousAMRunningContainers =\nresponse.getContainersFromPreviousAttempts();\nLOG.info("Received " + previousAMRunningContainers.size()\n+ " previous AM\'s running containers on AM registration.");')])],1),e._v(" "),n("p",[e._v("int numTotalContainersToRequest =\nnumTotalContainers - previousAMRunningContainers.size();\n// Setup ask for containers from RM\n// Send request for containers to RM\n// Until we get our fully allocated quota, we keep on polling RM for\n// containers\n// Keep looping until all the containers are launched and shell script\n// executed on them ( regardless of success/failure).\nfor (int i = 0; i < numTotalContainersToRequest; ++i) {\nContainerRequest containerAsk = setupContainerAskForRM();\namRMClient.addContainerRequest(containerAsk);\n}")])]),e._v(" "),n("li",[n("p",[e._v("In setupContainerAskForRM(), the follow two things need some set up:")])])]),e._v(" "),n("blockquote",[n("ul",[n("li",[n("p",[e._v("Resource capability: Currently, YARN supports memory based resource requirements so the request should define how much memory is needed. The value is defined in MB and has to less than the max capability of the cluster and an exact multiple of the min capability. Memory resources correspond to physical memory limits imposed on the task containers. It will also support computation based resource (vCore), as shown in the code.")])]),e._v(" "),n("li",[n("p",[e._v("Priority: When asking for sets of containers, an AM may define different priorities to each set. For example, the Map-Reduce AM may assign a higher priority to containers needed for the Map tasks and a lower priority for the Reduce tasks’ containers.")])])])]),e._v(" "),n("pre",[n("code",[e._v('private ContainerRequest setupContainerAskForRM() {\n  // setup requirements for hosts\n  // using * as any host will do for the distributed shell app\n  // set the priority for the request\n  Priority pri = Priority.newInstance(requestPriority);\n\n  // Set up resource type requirements\n  // For now, memory and CPU are supported so we set memory and cpu requirements\n  Resource capability = Resource.newInstance(containerMemory,\n    containerVirtualCores);\n\n  ContainerRequest request = new ContainerRequest(capability, null, null,\n      pri);\n  LOG.info("Requested container ask: " + request.toString());\n  return request;\n}\n')])]),e._v(" "),n("ul",[n("li",[e._v("After container allocation requests have been sent by the application manager, contailers will be launched asynchronously, by the event handler of the AMRMClientAsync client. The handler should implement AMRMClientAsync.CallbackHandler interface.")])]),e._v(" "),n("blockquote",[n("ul",[n("li",[e._v("When there are containers allocated, the handler sets up a thread that runs the code to launch containers. Here we use the name LaunchContainerRunnable to demonstrate. We will talk about the LaunchContainerRunnable class in the following part of this article.")])])]),e._v(" "),n("pre",[n("code",[e._v('@Override\npublic void onContainersAllocated(List<Container> allocatedContainers) {\n  LOG.info("Got response from RM for container ask, allocatedCnt="\n      + allocatedContainers.size());\n  numAllocatedContainers.addAndGet(allocatedContainers.size());\n  for (Container allocatedContainer : allocatedContainers) {\n    LaunchContainerRunnable runnableLaunchContainer =\n        new LaunchContainerRunnable(allocatedContainer, containerListener);\n    Thread launchThread = new Thread(runnableLaunchContainer);\n\n    // launch and start the container on a separate thread to keep\n    // the main thread unblocked\n    // as all containers may not be allocated at one go.\n    launchThreads.add(launchThread);\n    launchThread.start();\n  }\n}\n')])]),e._v(" "),n("blockquote",[n("ul",[n("li",[e._v("On heart beat, the event handler reports the progress of the application.")])])]),e._v(" "),n("pre",[n("code",[e._v("@Override\npublic float getProgress() {\n  // set progress to deliver to RM on next heartbeat\n  float progress = (float) numCompletedContainers.get()\n      / numTotalContainers;\n  return progress;\n}\n")])]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The container launch thread actually launches the containers on NMs. After a container has been allocated to the AM, it needs to follow a similar process that the client followed in setting up the ContainerLaunchContext for the eventual task that is going to be running on the allocated Container. Once the ContainerLaunchContext is defined, the AM can start it through the NMClientAsync.")]),e._v(" "),n("p",[e._v("// Set the necessary command to execute on the allocated container\nVector"),n("CharSequence",[e._v(" vargs = new Vector"),n("CharSequence",[e._v("(5);")])],1)],1),e._v(" "),n("p",[e._v("// Set executable command\nvargs.add(shellCommand);\n// Set shell script path\nif (!scriptPath.isEmpty()) {\nvargs.add(Shell.WINDOWS ? ExecBatScripStringtPath\n: ExecShellStringPath);\n}")]),e._v(" "),n("p",[e._v('// Set args for the shell command if any\nvargs.add(shellArgs);\n// Add log redirect params\nvargs.add("1>" + ApplicationConstants.LOG_DIR_EXPANSION_VAR + "/stdout");\nvargs.add("2>" + ApplicationConstants.LOG_DIR_EXPANSION_VAR + "/stderr");')]),e._v(" "),n("p",[e._v('// Get final command\nStringBuilder command = new StringBuilder();\nfor (CharSequence str : vargs) {\ncommand.append(str).append(" ");\n}')]),e._v(" "),n("p",[e._v("List"),n("String",[e._v(" commands = new ArrayList"),n("String",[e._v("();\ncommands.add(command.toString());")])],1)],1),e._v(" "),n("p",[e._v("// Set up ContainerLaunchContext, setting local resource, environment,\n// command and token for constructor.")]),e._v(" "),n("p",[e._v('// Note for tokens: Set up tokens for the container too. Today, for normal\n// shell commands, the container in distribute-shell doesn\'t need any\n// tokens. We are populating them mainly for NodeManagers to be able to\n// download anyfiles in the distributed file-system. The tokens are\n// otherwise also useful in cases, for e.g., when one is running a\n// "hadoop dfs" command inside the distributed shell.\nContainerLaunchContext ctx = ContainerLaunchContext.newInstance(\nlocalResources, shellEnv, commands, null, allTokens.duplicate(), null);\ncontainerListener.addContainer(container.getId(), container);\nnmClientAsync.startContainerAsync(container, ctx);')])]),e._v(" "),n("li",[n("p",[e._v("The NMClientAsync object, together with its event handler, handles container events. Including container start, stop, status update, and occurs an error.")])]),e._v(" "),n("li",[n("p",[e._v("After the ApplicationMaster determines the work is done, it needs to unregister itself through the AM-RM client, and then stops the client.")]),e._v(" "),n("p",[e._v('try {\namRMClient.unregisterApplicationMaster(appStatus, appMessage, null);\n} catch (YarnException ex) {\nLOG.error("Failed to unregister application", ex);\n} catch (IOException e) {\nLOG.error("Failed to unregister application", e);\n}')]),e._v(" "),n("p",[e._v("amRMClient.stop();")])])]),e._v(" "),n("h2",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),n("h3",{attrs:{id:"how-can-i-distribute-my-application’s-jars-to-all-of-the-nodes-in-the-yarn-cluster-that-need-it"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-distribute-my-application’s-jars-to-all-of-the-nodes-in-the-yarn-cluster-that-need-it"}},[e._v("#")]),e._v(" How can I distribute my application’s jars to all of the nodes in the YARN cluster that need it?")]),e._v(" "),n("p",[e._v("You can use the LocalResource to add resources to your application request. This will cause YARN to distribute the resource to the ApplicationMaster node. If the resource is a tgz, zip, or jar - you can have YARN unzip it. Then, all you need to do is add the unzipped folder to your classpath. For example, when creating your application request:")]),e._v(" "),n("pre",[n("code",[e._v('File packageFile = new File(packagePath);\nURL packageUrl = ConverterUtils.getYarnUrlFromPath(\n    FileContext.getFileContext().makeQualified(new Path(packagePath)));\n\npackageResource.setResource(packageUrl);\npackageResource.setSize(packageFile.length());\npackageResource.setTimestamp(packageFile.lastModified());\npackageResource.setType(LocalResourceType.ARCHIVE);\npackageResource.setVisibility(LocalResourceVisibility.APPLICATION);\n\nresource.setMemory(memory);\ncontainerCtx.setResource(resource);\ncontainerCtx.setCommands(ImmutableList.of(\n    "java -cp \'./package/*\' some.class.to.Run "\n    + "1>" + ApplicationConstants.LOG_DIR_EXPANSION_VAR + "/stdout "\n    + "2>" + ApplicationConstants.LOG_DIR_EXPANSION_VAR + "/stderr"));\ncontainerCtx.setLocalResources(\n    Collections.singletonMap("package", packageResource));\nappCtx.setApplicationId(appId);\nappCtx.setUser(user.getShortUserName);\nappCtx.setAMContainerSpec(containerCtx);\nyarnClient.submitApplication(appCtx);\n')])]),e._v(" "),n("p",[e._v("As you can see, the setLocalResources command takes a map of names to resources. The name becomes a sym link in your application’s cwd, so you can just refer to the artifacts inside by using ./package/*.")]),e._v(" "),n("p",[e._v("Note: Java’s classpath (cp) argument is VERY sensitive. Make sure you get the syntax EXACTLY correct.")]),e._v(" "),n("p",[e._v("Once your package is distributed to your AM, you’ll need to follow the same process whenever your AM starts a new container (assuming you want the resources to be sent to your container). The code for this is the same. You just need to make sure that you give your AM the package path (either HDFS, or local), so that it can send the resource URL along with the container ctx.")]),e._v(" "),n("h3",{attrs:{id:"how-do-i-get-the-applicationmaster’s-applicationattemptid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-get-the-applicationmaster’s-applicationattemptid"}},[e._v("#")]),e._v(" How do I get the ApplicationMaster’s ApplicationAttemptId?")]),e._v(" "),n("p",[e._v("The ApplicationAttemptId will be passed to the AM via the environment and the value from the environment can be converted into an ApplicationAttemptId object via the ConverterUtils helper function.")]),e._v(" "),n("h3",{attrs:{id:"why-my-container-is-killed-by-the-nodemanager"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-my-container-is-killed-by-the-nodemanager"}},[e._v("#")]),e._v(" Why my container is killed by the NodeManager?")]),e._v(" "),n("p",[e._v("This is likely due to high memory usage exceeding your requested container memory size. There are a number of reasons that can cause this. First, look at the process tree that the NodeManager dumps when it kills your container. The two things you’re interested in are physical memory and virtual memory. If you have exceeded physical memory limits your app is using too much physical memory. If you’re running a Java app, you can use -hprof to look at what is taking up space in the heap. If you have exceeded virtual memory, you may need to increase the value of the the cluster-wide configuration variable yarn.nodemanager.vmem-pmem-ratio.")]),e._v(" "),n("h3",{attrs:{id:"how-do-i-include-native-libraries"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-include-native-libraries"}},[e._v("#")]),e._v(" How do I include native libraries?")]),e._v(" "),n("p",[e._v("Setting -Djava.library.path on the command line while launching a container can cause native libraries used by Hadoop to not be loaded correctly and can result in errors. It is cleaner to use LD_LIBRARY_PATH instead.")]),e._v(" "),n("h2",{attrs:{id:"useful-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful Links")]),e._v(" "),n("ul",[n("li",[n("p",[n("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/YARN.html"}},[e._v("YARN Architecture")])],1)]),e._v(" "),n("li",[n("p",[n("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/CapacityScheduler.html"}},[e._v("YARN Capacity Scheduler")])],1)]),e._v(" "),n("li",[n("p",[n("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/FairScheduler.html"}},[e._v("YARN Fair Scheduler")])],1)])]),e._v(" "),n("h2",{attrs:{id:"sample-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sample-code"}},[e._v("#")]),e._v(" Sample Code")]),e._v(" "),n("p",[e._v("YARN distributed shell: in hadoop-yarn-applications-distributedshell project after you set up your development environment.")])])}),[],!1,null,null,null);t.default=i.exports}}]);