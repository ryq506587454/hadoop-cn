(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{229:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"yarn-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn-commands"}},[e._v("#")]),e._v(" YARN Commands")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("YARN commands are invoked by the bin/yarn script. Running the yarn script without any arguments prints the description for all commands.")]),e._v(" "),a("p",[e._v("Usage: yarn [SHELL_OPTIONS] COMMAND [GENERIC_OPTIONS] [SUB_COMMAND] [COMMAND_OPTIONS]")]),e._v(" "),a("p",[e._v("YARN has an option parsing framework that employs parsing generic options as well as running classes.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("SHELL_OPTIONS")]),e._v(" "),a("td",[e._v("The common set of shell options. These are documented on the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/CommandsManual.html#Shell_Options"}},[e._v("Commands Manual")]),e._v(" page.")],1)]),e._v(" "),a("tr",[a("td",[e._v("GENERIC_OPTIONS")]),e._v(" "),a("td",[e._v("The common set of options supported by multiple commands. See the Hadoop "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/CommandsManual.html#Generic_Options"}},[e._v("Commands Manual")]),e._v(" for more information.")],1)]),e._v(" "),a("tr",[a("td",[e._v("COMMAND COMMAND_OPTIONS")]),e._v(" "),a("td",[e._v("Various commands with their options are described in the following sections. The commands have been grouped into User Commands and Administration Commands.")])])])]),e._v(" "),a("h2",{attrs:{id:"user-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-commands"}},[e._v("#")]),e._v(" User Commands")]),e._v(" "),a("p",[e._v("Commands useful for users of a Hadoop cluster.")]),e._v(" "),a("h3",{attrs:{id:"application-or-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-or-app"}},[e._v("#")]),e._v(" application or app")]),e._v(" "),a("p",[e._v("Usage: yarn application [options] Usage: yarn app [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-appId "),a("ApplicationId")],1),e._v(" "),a("td",[e._v("Specify Application Id to be operated")])]),e._v(" "),a("tr",[a("td",[e._v("-appStates "),a("States")],1),e._v(" "),a("td",[e._v("Works with -list to filter applications based on input comma-separated list of application states. The valid application state can be one of the following: ALL, NEW, NEW_SAVING, SUBMITTED, ACCEPTED, RUNNING, FINISHED, FAILED, KILLED")])]),e._v(" "),a("tr",[a("td",[e._v("-appTags "),a("Tags")],1),e._v(" "),a("td",[e._v("Works with -list to filter applications based on input comma-separated list of application tags.")])]),e._v(" "),a("tr",[a("td",[e._v("-appTypes "),a("Types")],1),e._v(" "),a("td",[e._v("Works with -list to filter applications based on input comma-separated list of application types.")])]),e._v(" "),a("tr",[a("td",[e._v("-changeQueue "),a("Queue",{attrs:{Name:""}})],1),e._v(" "),a("td",[e._v("Moves application to a new queue. ApplicationId can be passed using ‘appId’ option. ‘movetoqueue’ command is deprecated, this new command ‘changeQueue’ performs same functionality.")])]),e._v(" "),a("tr",[a("td",[e._v("-component "),a("Component",{attrs:{Name:""}},[a("Count")],1)],1),e._v(" "),a("td",[e._v("Works with -flex option to change the number of components/containers running for an application / long-running service. Supports absolute or relative changes, such as +1, 2, or -3.")])]),e._v(" "),a("tr",[a("td",[e._v("-components "),a("Components")],1),e._v(" "),a("td",[e._v("Works with -upgrade option to trigger the upgrade of specified components of the application. Multiple components should be separated by commas.")])]),e._v(" "),a("tr",[a("td",[e._v("-decommission "),a("Application",{attrs:{Name:""}})],1),e._v(" "),a("td",[e._v("Decommissions component instances for an application / long-running service. Requires -instances option. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-destroy "),a("Application",{attrs:{Name:""}})],1),e._v(" "),a("td",[e._v("Destroys a saved application specification and removes all application data permanently. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-enableFastLaunch")]),e._v(" "),a("td",[e._v("Uploads AM dependencies to HDFS to make future launches faster. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-flex "),a("Application",{attrs:{Name:"",or:"",ID:""}})],1),e._v(" "),a("td",[e._v("Changes number of running containers for a component of an application / long-running service. Requires -component option. If name is provided, appType must be provided unless it is the default yarn-service. If ID is provided, the appType will be looked up. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Displays help for all commands.")])]),e._v(" "),a("tr",[a("td",[e._v("-instances "),a("Component",{attrs:{Instances:""}})],1),e._v(" "),a("td",[e._v("Works with -upgrade option to trigger the upgrade of specified component instances of the application. Also works with -decommission option to decommission specified component instances. Multiple instances should be separated by commas.")])]),e._v(" "),a("tr",[a("td",[e._v("-kill "),a("Application",{attrs:{ID:""}})],1),e._v(" "),a("td",[e._v("Kills the application. Set of applications can be provided separated with space")])]),e._v(" "),a("tr",[a("td",[e._v("-launch "),a("Application",{attrs:{Name:""}},[a("File",{attrs:{Name:""}})],1)],1),e._v(" "),a("td",[e._v("Launches application from specification file (saves specification and starts application). Options -updateLifetime and -changeQueue can be specified to alter the values provided in the file. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-list")]),e._v(" "),a("td",[e._v("List applications. Supports optional use of -appTypes to filter applications based on application type, -appStates to filter applications based on application state and -appTags to filter applications based on application tag.")])]),e._v(" "),a("tr",[a("td",[e._v("-movetoqueue "),a("Application",{attrs:{ID:""}})],1),e._v(" "),a("td",[e._v("Moves the application to a different queue. Deprecated command. Use ‘changeQueue’ instead.")])]),e._v(" "),a("tr",[a("td",[e._v("-queue "),a("Queue",{attrs:{Name:""}})],1),e._v(" "),a("td",[e._v("Works with the movetoqueue command to specify which queue to move an application to.")])]),e._v(" "),a("tr",[a("td",[e._v("-save "),a("Application",{attrs:{Name:""}},[a("File",{attrs:{Name:""}})],1)],1),e._v(" "),a("td",[e._v("Saves specification file for an application. Options -updateLifetime and -changeQueue can be specified to alter the values provided in the file. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-start "),a("Application",{attrs:{Name:""}})],1),e._v(" "),a("td",[e._v("Starts a previously saved application. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-status "),a("ApplicationId",{attrs:{or:"",ApplicationName:""}})],1),e._v(" "),a("td",[e._v("Prints the status of the application. If app ID is provided, it prints the generic YARN application status. If name is provided, it prints the application specific status based on app’s own implementation, and -appTypes option must be specified unless it is the default yarn-service type.")])]),e._v(" "),a("tr",[a("td",[e._v("-stop "),a("Application",{attrs:{Name:"",or:"",ID:""}})],1),e._v(" "),a("td",[e._v("Stops application gracefully (may be started again later). If name is provided, appType must be provided unless it is the default yarn-service. If ID is provided, the appType will be looked up. Supports -appTypes option to specify which client implementation to use.")])]),e._v(" "),a("tr",[a("td",[e._v("-updateLifetime "),a("Timeout")],1),e._v(" "),a("td",[e._v("Update timeout of an application from NOW. ApplicationId can be passed using ‘appId’ option. Timeout value is in seconds.")])]),e._v(" "),a("tr",[a("td",[e._v("-updatePriority "),a("Priority")],1),e._v(" "),a("td",[e._v("Update priority of an application. ApplicationId can be passed using ‘appId’ option.")])])])]),e._v(" "),a("p",[e._v("Prints application(s) report/kill application/manage long running application")]),e._v(" "),a("h3",{attrs:{id:"applicationattempt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicationattempt"}},[e._v("#")]),e._v(" applicationattempt")]),e._v(" "),a("p",[e._v("Usage: yarn applicationattempt [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Help")])]),e._v(" "),a("tr",[a("td",[e._v("-list "),a("ApplicationId")],1),e._v(" "),a("td",[e._v("Lists applications attempts for the given application.")])]),e._v(" "),a("tr",[a("td",[e._v("-status "),a("Application",{attrs:{Attempt:"",Id:""}})],1),e._v(" "),a("td",[e._v("Prints the status of the application attempt.")])])])]),e._v(" "),a("p",[e._v("prints applicationattempt(s) report")]),e._v(" "),a("h3",{attrs:{id:"classpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classpath"}},[e._v("#")]),e._v(" classpath")]),e._v(" "),a("p",[e._v("Usage: yarn classpath [--glob |--jar "),a("path",[e._v(" |-h |--help]")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("--glob")]),e._v(" "),a("td",[e._v("expand wildcards")])]),e._v(" "),a("tr",[a("td",[e._v("--jar path")]),e._v(" "),a("td",[e._v("write classpath as manifest in jar named path")])]),e._v(" "),a("tr",[a("td",[e._v("-h, --help")]),e._v(" "),a("td",[e._v("print help")])])])]),e._v(" "),a("p",[e._v("Prints the class path needed to get the Hadoop jar and the required libraries. If called without arguments, then prints the classpath set up by the command scripts, which is likely to contain wildcards in the classpath entries. Additional options print the classpath after wildcard expansion or write the classpath into the manifest of a jar file. The latter is useful in environments where wildcards cannot be used and the expanded classpath exceeds the maximum supported command line length.")]),e._v(" "),a("h3",{attrs:{id:"container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container"}},[e._v("#")]),e._v(" container")]),e._v(" "),a("p",[e._v("Usage: yarn container [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Help")])]),e._v(" "),a("tr",[a("td",[e._v("-list "),a("Application",{attrs:{Attempt:"",Id:""}})],1),e._v(" "),a("td",[e._v("Lists containers for the application attempt.")])]),e._v(" "),a("tr",[a("td",[e._v("-status "),a("ContainerId")],1),e._v(" "),a("td",[e._v("Prints the status of the container.")])])])]),e._v(" "),a("p",[e._v("prints container(s) report")]),e._v(" "),a("h3",{attrs:{id:"jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jar"}},[e._v("#")]),e._v(" jar")]),e._v(" "),a("p",[e._v("Usage: yarn jar "),a("jar",[e._v(" [mainClass] args...")])],1),e._v(" "),a("p",[e._v("Runs a jar file. Users can bundle their YARN code in a jar file and execute it using this command.")]),e._v(" "),a("h3",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[e._v("#")]),e._v(" logs")]),e._v(" "),a("p",[e._v("Usage: yarn logs -applicationId "),a("application",{attrs:{ID:""}},[e._v(" [options]")])],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-applicationId "),a("application",{attrs:{ID:""}})],1),e._v(" "),a("td",[e._v("Specifies an application id")])]),e._v(" "),a("tr",[a("td",[e._v("-appOwner "),a("AppOwner")],1),e._v(" "),a("td",[e._v("AppOwner (assumed to be current user if not specified)")])]),e._v(" "),a("tr",[a("td",[e._v("-containerId "),a("ContainerId")],1),e._v(" "),a("td",[e._v("ContainerId (must be specified if node address is specified)")])]),e._v(" "),a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Help")])]),e._v(" "),a("tr",[a("td",[e._v("-nodeAddress "),a("NodeAddress")],1),e._v(" "),a("td",[e._v("NodeAddress in the format nodename:port (must be specified if container id is specified)")])])])]),e._v(" "),a("p",[e._v("Dump the container logs")]),e._v(" "),a("h3",{attrs:{id:"node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node"}},[e._v("#")]),e._v(" node")]),e._v(" "),a("p",[e._v("Usage: yarn node [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-all")]),e._v(" "),a("td",[e._v("Works with -list to list all nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("-list")]),e._v(" "),a("td",[e._v("Lists all running nodes. Supports optional use of -states to filter nodes based on node state, and -all to list all nodes.")])]),e._v(" "),a("tr",[a("td",[e._v("-states "),a("States")],1),e._v(" "),a("td",[e._v("Works with -list to filter nodes based on input comma-separated list of node states.")])]),e._v(" "),a("tr",[a("td",[e._v("-status "),a("NodeId")],1),e._v(" "),a("td",[e._v("Prints the status report of the node.")])])])]),e._v(" "),a("p",[e._v("Prints node report(s)")]),e._v(" "),a("h3",{attrs:{id:"queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[e._v("#")]),e._v(" queue")]),e._v(" "),a("p",[e._v("Usage: yarn queue [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Help")])]),e._v(" "),a("tr",[a("td",[e._v("-status "),a("QueueName")],1),e._v(" "),a("td",[e._v("Prints the status of the queue.")])])])]),e._v(" "),a("p",[e._v("Prints queue information")]),e._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),a("p",[e._v("Usage: yarn version")]),e._v(" "),a("p",[e._v("Prints the Hadoop version.")]),e._v(" "),a("h3",{attrs:{id:"envvars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#envvars"}},[e._v("#")]),e._v(" envvars")]),e._v(" "),a("p",[e._v("Usage: yarn envvars")]),e._v(" "),a("p",[e._v("Display computed Hadoop environment variables.")]),e._v(" "),a("h2",{attrs:{id:"administration-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#administration-commands"}},[e._v("#")]),e._v(" Administration Commands")]),e._v(" "),a("p",[e._v("Commands useful for administrators of a Hadoop cluster.")]),e._v(" "),a("h3",{attrs:{id:"daemonlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemonlog"}},[e._v("#")]),e._v(" daemonlog")]),e._v(" "),a("p",[e._v("Get/Set the log level for a Log identified by a qualified class name in the daemon dynamically. See the Hadoop "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/CommandsManual.html#daemonlog"}},[e._v("Commands Manual")]),e._v(" for more information.")],1),e._v(" "),a("h3",{attrs:{id:"nodemanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodemanager"}},[e._v("#")]),e._v(" nodemanager")]),e._v(" "),a("p",[e._v("Usage: yarn nodemanager")]),e._v(" "),a("p",[e._v("Start the NodeManager")]),e._v(" "),a("h3",{attrs:{id:"proxyserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxyserver"}},[e._v("#")]),e._v(" proxyserver")]),e._v(" "),a("p",[e._v("Usage: yarn proxyserver")]),e._v(" "),a("p",[e._v("Start the web proxy server")]),e._v(" "),a("h3",{attrs:{id:"resourcemanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resourcemanager"}},[e._v("#")]),e._v(" resourcemanager")]),e._v(" "),a("p",[e._v("Usage: yarn resourcemanager [-format-state-store]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-format-state-store")]),e._v(" "),a("td",[e._v("Formats the RMStateStore. This will clear the RMStateStore and is useful if past applications are no longer needed. This should be run only when the ResourceManager is not running.")])]),e._v(" "),a("tr",[a("td",[e._v("-remove-application-from-state-store "),a("appId")],1),e._v(" "),a("td",[e._v("Remove the application from RMStateStore. This should be run only when the ResourceManager is not running.")])])])]),e._v(" "),a("p",[e._v("Start the ResourceManager")]),e._v(" "),a("h3",{attrs:{id:"rmadmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rmadmin"}},[e._v("#")]),e._v(" rmadmin")]),e._v(" "),a("p",[e._v("Usage:")]),e._v(" "),a("pre",[a("code",[e._v('  Usage: yarn rmadmin\n     -refreshQueues\n     -refreshNodes [-g|graceful [timeout in seconds] -client|server]\n     -refreshNodesResources\n     -refreshSuperUserGroupsConfiguration\n     -refreshUserToGroupsMappings\n     -refreshAdminAcls\n     -refreshServiceAcl\n     -getGroups [username]\n     -addToClusterNodeLabels <"label1(exclusive=true),label2(exclusive=false),label3">\n     -removeFromClusterNodeLabels <label1,label2,label3> (label splitted by ",")\n     -replaceLabelsOnNode <"node1[:port]=label1,label2 node2[:port]=label1,label2"> [-failOnUnknownNodes]\n     -directlyAccessNodeLabelStore\n     -refreshClusterMaxPriority\n     -updateNodeResource [NodeID] [MemSize] [vCores] ([OvercommitTimeout]) or -updateNodeResource [NodeID] [ResourceTypes] ([OvercommitTimeout])\n     -transitionToActive [--forceactive] <serviceId>\n     -transitionToStandby <serviceId>\n     -failover [--forcefence] [--forceactive] <serviceId> <serviceId>\n     -getServiceState <serviceId>\n     -getAllServiceState\n     -checkHealth <serviceId>\n     -help [cmd]\n')])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-refreshQueues")]),e._v(" "),a("td",[e._v("Reload the queues’ acls, states and scheduler specific properties. ResourceManager will reload the mapred-queues configuration file.")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshNodes [-g")]),e._v(" "),a("td",[e._v("graceful [timeout in seconds] -client")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshNodesResources")]),e._v(" "),a("td",[e._v("Refresh resources of NodeManagers at the ResourceManager.")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshSuperUserGroupsConfiguration")]),e._v(" "),a("td",[e._v("Refresh superuser proxy groups mappings.")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshUserToGroupsMappings")]),e._v(" "),a("td",[e._v("Refresh user-to-groups mappings.")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshAdminAcls")]),e._v(" "),a("td",[e._v("Refresh acls for administration of ResourceManager")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshServiceAcl")]),e._v(" "),a("td",[e._v("Reload the service-level authorization policy file ResourceManager will reload the authorization policy file.")])]),e._v(" "),a("tr",[a("td",[e._v("-getGroups [username]")]),e._v(" "),a("td",[e._v("Get groups the specified user belongs to.")])]),e._v(" "),a("tr",[a("td",[e._v("-addToClusterNodeLabels <“label1(exclusive=true),label2(exclusive=false),label3”>")]),e._v(" "),a("td",[e._v("Add to cluster node labels. Default exclusivity is true.")])]),e._v(" "),a("tr",[a("td",[e._v("-removeFromClusterNodeLabels <label1,label2,label3> (label splitted by “,”)")]),e._v(" "),a("td",[e._v("Remove from cluster node labels.")])]),e._v(" "),a("tr",[a("td",[e._v("-replaceLabelsOnNode <“node1[:port]=label1,label2 node2[:port]=label1,label2”> [-failOnUnknownNodes]")]),e._v(" "),a("td",[e._v("Replace labels on nodes (please note that we do not support specifying multiple labels on a single host for now.) -failOnUnknownNodes is optional, when we set this option, it will fail if specified nodes are unknown.")])]),e._v(" "),a("tr",[a("td",[e._v("-directlyAccessNodeLabelStore")]),e._v(" "),a("td",[e._v("This is DEPRECATED, will be removed in future releases. Directly access node label store, with this option, all node label related operations will not connect RM. Instead, they will access/modify stored node labels directly. By default, it is false (access via RM). AND PLEASE NOTE: if you configured yarn.node-labels.fs-store.root-dir to a local directory (instead of NFS or HDFS), this option will only work when the command run on the machine where RM is running.")])]),e._v(" "),a("tr",[a("td",[e._v("-refreshClusterMaxPriority")]),e._v(" "),a("td",[e._v("Refresh cluster max priority")])]),e._v(" "),a("tr",[a("td",[e._v("-updateNodeResource [NodeID] [MemSize] [vCores] ([OvercommitTimeout])")]),e._v(" "),a("td",[e._v("Update resource on specific node.")])]),e._v(" "),a("tr",[a("td",[e._v("-updateNodeResource [NodeID] [ResourceTypes] ([OvercommitTimeout])")]),e._v(" "),a("td",[e._v("Update resource types on specific node. Resource Types is comma-delimited key value pairs of any resources availale at Resource Manager. For example, memory-mb=1024Mi,vcores=1,resource1=2G,resource2=4m")])]),e._v(" "),a("tr",[a("td",[e._v("-transitionToActive [–forceactive] [–forcemanual] "),a("serviceId")],1),e._v(" "),a("td",[e._v("Transitions the service into Active state. Try to make the target active without checking that there is no active node if the –forceactive option is used. This command can not be used if automatic failover is enabled. Though you can override this by –forcemanual option, you need caution. This command can not be used if automatic failover is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("-transitionToStandby [–forcemanual] "),a("serviceId")],1),e._v(" "),a("td",[e._v("Transitions the service into Standby state. This command can not be used if automatic failover is enabled. Though you can override this by –forcemanual option, you need caution.")])]),e._v(" "),a("tr",[a("td",[e._v("-failover [–forceactive] "),a("serviceId1",[a("serviceId2")],1)],1),e._v(" "),a("td",[e._v("Initiate a failover from serviceId1 to serviceId2. Try to failover to the target service even if it is not ready if the –forceactive option is used. This command can not be used if automatic failover is enabled.")])]),e._v(" "),a("tr",[a("td",[e._v("-getServiceState "),a("serviceId")],1),e._v(" "),a("td",[e._v("Returns the state of the service.")])]),e._v(" "),a("tr",[a("td",[e._v("-getAllServiceState")]),e._v(" "),a("td",[e._v("Returns the state of all the services.")])]),e._v(" "),a("tr",[a("td",[e._v("-checkHealth "),a("serviceId")],1),e._v(" "),a("td",[e._v("Requests that the service perform a health check. The RMAdmin tool will exit with a non-zero exit code if the check fails.")])]),e._v(" "),a("tr",[a("td",[e._v("-help [cmd]")]),e._v(" "),a("td",[e._v("Displays help for the given command or all commands if none is specified.")])])])]),e._v(" "),a("p",[e._v("Runs ResourceManager admin client")]),e._v(" "),a("h3",{attrs:{id:"schedulerconf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulerconf"}},[e._v("#")]),e._v(" schedulerconf")]),e._v(" "),a("p",[e._v("Usage: yarn schedulerconf [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-add <“queuePath1:key1=val1,key2=val2;queuePath2:key3=val3”>")]),e._v(" "),a("td",[e._v("Semicolon separated values of queues to add and their queue configurations. This example adds queue “queuePath1” (a full path name), which has queue configurations key1=val1 and key2=val2. It also adds queue “queuePath2”, which has queue configuration key3=val3.")])]),e._v(" "),a("tr",[a("td",[e._v("-remove <“queuePath1;queuePath2”>")]),e._v(" "),a("td",[e._v("Semicolon separated queues to remove. This example removes queuePath1 and queuePath2 queues (full path names). Note: Queues must be put into STOPPED state before they are deleted.")])]),e._v(" "),a("tr",[a("td",[e._v("-update <“queuePath1:key1=val1,key2=val2;queuePath2:key3=val3”>")]),e._v(" "),a("td",[e._v("Semicolon separated values of queues whose configurations should be updated. This example sets key1=val1 and key2=val2 for queue configuration of queuePath1 (full path name), and sets key3=val3 for queue configuration of queuePath2.")])]),e._v(" "),a("tr",[a("td",[e._v("-global <key1=val1,key2=val2>")]),e._v(" "),a("td",[e._v("Update scheduler global configurations. This example sets key1=val1 and key2=val2 for scheduler’s global configuration.")])])])]),e._v(" "),a("p",[e._v("Updates scheduler configuration. Note, this feature is in alpha phase and is subject to change.")]),e._v(" "),a("h3",{attrs:{id:"scmadmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scmadmin"}},[e._v("#")]),e._v(" scmadmin")]),e._v(" "),a("p",[e._v("Usage: yarn scmadmin [options]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Help")])]),e._v(" "),a("tr",[a("td",[e._v("-runCleanerTask")]),e._v(" "),a("td",[e._v("Runs the cleaner task")])])])]),e._v(" "),a("p",[e._v("Runs Shared Cache Manager admin client")]),e._v(" "),a("h3",{attrs:{id:"sharedcachemanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharedcachemanager"}},[e._v("#")]),e._v(" sharedcachemanager")]),e._v(" "),a("p",[e._v("Usage: yarn sharedcachemanager")]),e._v(" "),a("p",[e._v("Start the Shared Cache Manager")]),e._v(" "),a("h3",{attrs:{id:"timelineserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timelineserver"}},[e._v("#")]),e._v(" timelineserver")]),e._v(" "),a("p",[e._v("Usage: yarn timelineserver")]),e._v(" "),a("p",[e._v("Start the TimeLineServer")]),e._v(" "),a("h3",{attrs:{id:"registrydns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#registrydns"}},[e._v("#")]),e._v(" registrydns")]),e._v(" "),a("p",[e._v("Usage: yarn registrydns")]),e._v(" "),a("p",[e._v("Start the RegistryDNS server")]),e._v(" "),a("h2",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("File")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("etc/hadoop/hadoop-env.sh")]),e._v(" "),a("td",[e._v("This file stores the global settings used by all Hadoop shell commands.")])]),e._v(" "),a("tr",[a("td",[e._v("etc/hadoop/yarn-env.sh")]),e._v(" "),a("td",[e._v("This file stores overrides used by all YARN shell commands.")])]),e._v(" "),a("tr",[a("td",[e._v("etc/hadoop/hadoop-user-functions.sh")]),e._v(" "),a("td",[e._v("This file allows for advanced users to override some shell functionality.")])]),e._v(" "),a("tr",[a("td",[e._v("~/.hadooprc")]),e._v(" "),a("td",[e._v("This stores the personal environment for an individual user. It is processed after the hadoop-env.sh, hadoop-user-functions.sh, and yarn-env.sh files and can contain the same settings.")])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);