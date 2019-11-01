(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{301:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"unix-shell-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unix-shell-guide"}},[e._v("#")]),e._v(" Unix Shell Guide")]),e._v(" "),a("h3",{attrs:{id:"command-subcommand-opts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-subcommand-opts"}},[e._v("#")]),e._v(" (command)_(subcommand)_OPTS")]),e._v(" "),a("p",[e._v("By far, the most important are the series of _OPTS variables that control how daemons work. These variables should contain all of the relevant settings for those daemons.")]),e._v(" "),a("p",[e._v("Similar to the user commands above, all daemons will honor the (command)_(subcommand)_OPTS pattern. It is generally recommended that these be set in hadoop-env.sh to guarantee that the system will know which settings it should use on restart. Unlike user-facing subcommands, daemons will NOT honor HADOOP_CLIENT_OPTS.")]),e._v(" "),a("p",[e._v("In addition, daemons that run in an extra security mode also support (command)_(subcommand)_SECURE_EXTRA_OPTS. These options are supplemental to the generic *_OPTS and will appear after, therefore generally taking precedence.")]),e._v(" "),a("h3",{attrs:{id:"command-subcommand-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-subcommand-user"}},[e._v("#")]),e._v(" (command)_(subcommand)_USER")]),e._v(" "),a("p",[e._v("Apache Hadoop provides a way to do a user check per-subcommand. While this method is easily circumvented and should not be considered a security-feature, it does provide a mechanism by which to prevent accidents. For example, setting HDFS_NAMENODE_USER=hdfs will make the hdfs namenode and hdfs --daemon start namenode commands verify that the user running the commands are the hdfs user by checking the USER environment variable. This also works for non-daemons. Setting HADOOP_DISTCP_USER=jane will verify that USER is set to jane before being allowed to execute the hadoop distcp command.")]),e._v(" "),a("p",[e._v("If a _USER environment variable exists and commands are run with a privilege (e.g., as root; see hadoop_privilege_check in the API documentation), execution will switch to the specified user first. For commands that support user account switching for security reasons and therefore have a SECURE_USER variable (see more below), the base _USER variable needs to be the user that is expected to be used to switch to the SECURE_USER account. For example:")]),e._v(" "),a("pre",[a("code",[e._v("HDFS_DATANODE_USER=root\nHDFS_DATANODE_SECURE_USER=hdfs\n")])]),e._v(" "),a("p",[e._v("will force ‘hdfs –daemon start datanode’ to be root, but will eventually switch to the hdfs user after the privileged work has been completed.")]),e._v(" "),a("p",[e._v("Be aware that if the --workers flag is used, the user switch happens after ssh is invoked. The multi-daemon start and stop commands in sbin will, however, switch (if appropriate) prior and will therefore use the keys of the specified _USER.")]),e._v(" "),a("h2",{attrs:{id:"developer-and-advanced-administrator-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-and-advanced-administrator-environment"}},[e._v("#")]),e._v(" Developer and Advanced Administrator Environment")]),e._v(" "),a("h3",{attrs:{id:"shell-profiles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-profiles"}},[e._v("#")]),e._v(" Shell Profiles")]),e._v(" "),a("p",[e._v("Apache Hadoop allows for third parties to easily add new features through a variety of pluggable interfaces. This includes a shell code subsystem that makes it easy to inject the necessary content into the base installation.")]),e._v(" "),a("p",[e._v("Core to this functionality is the concept of a shell profile. Shell profiles are shell snippets that can do things such as add jars to the classpath, configure Java system properties and more.")]),e._v(" "),a("p",[e._v("Shell profiles may be installed in either ${HADOOP_CONF_DIR}/shellprofile.d or ${HADOOP_HOME}/libexec/shellprofile.d. Shell profiles in the libexec directory are part of the base installation and cannot be overridden by the user. Shell profiles in the configuration directory may be ignored if the end user changes the configuration directory at runtime.")]),e._v(" "),a("p",[e._v("An example of a shell profile is in the libexec directory.")]),e._v(" "),a("h3",{attrs:{id:"shell-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-api"}},[e._v("#")]),e._v(" Shell API")]),e._v(" "),a("p",[e._v("Apache Hadoop’s shell code has a "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/UnixShellAPI.html"}},[e._v("function library")]),e._v(" that is open for administrators and developers to use to assist in their configuration and advanced feature management. These APIs follow the standard "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/InterfaceClassification.html"}},[e._v("Apache Hadoop Interface Classification")]),e._v(", with one addition: Replaceable.")],1),e._v(" "),a("p",[e._v("The shell code allows for core functions to be overridden. However, not all functions can be or are safe to be replaced. If a function is not safe to replace, it will have an attribute of Replaceable: No. If a function is safe to replace, it will have the attribute of Replaceable: Yes.")]),e._v(" "),a("p",[e._v("In order to replace a function, create a file called hadoop-user-functions.sh in the ${HADOOP_CONF_DIR} directory. Simply define the new, replacement function in this file and the system will pick it up automatically. There may be as many replacement functions as needed in this file. Examples of function replacement are in the hadoop-user-functions.sh.examples file.")]),e._v(" "),a("p",[e._v("Functions that are marked Public and Stable are safe to use in shell profiles as-is. Other functions may change in a minor release.")]),e._v(" "),a("h3",{attrs:{id:"user-level-api-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-level-api-access"}},[e._v("#")]),e._v(" User-level API Access")]),e._v(" "),a("p",[e._v("In addition to .hadoop-env, which allows individual users to override hadoop-env.sh, user’s may also use .hadooprc. This is called after the Apache Hadoop shell environment has been configured and allows the full set of shell API function calls.")]),e._v(" "),a("p",[e._v("For example:")]),e._v(" "),a("pre",[a("code",[e._v("hadoop_add_classpath /some/path/custom.jar\n")])]),e._v(" "),a("p",[e._v("would go into .hadooprc")]),e._v(" "),a("h3",{attrs:{id:"dynamic-subcommands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-subcommands"}},[e._v("#")]),e._v(" Dynamic Subcommands")]),e._v(" "),a("p",[e._v("Utilizing the Shell API, it is possible for third parties to add their own subcommands to the primary Hadoop shell scripts (hadoop, hdfs, mapred, yarn).")]),e._v(" "),a("p",[e._v("Prior to executing a subcommand, the primary scripts will check for the existence of a (scriptname)"),a("em",[e._v("subcommand")]),e._v("(subcommand) function. This function gets executed with the parameters set to all remaining command line arguments. For example, if the following function is defined:")]),e._v(" "),a("pre",[a("code",[e._v('function yarn_subcommand_hello\n{\n  echo "$@"\n  exit $?\n}\n')])]),e._v(" "),a("p",[e._v("then executing yarn --debug hello world I see you will activate script debugging and call the yarn_subcommand_hello function as:")]),e._v(" "),a("pre",[a("code",[e._v("yarn_subcommand_hello world I see you\n")])]),e._v(" "),a("p",[e._v("which will result in the output of:")]),e._v(" "),a("pre",[a("code",[e._v("world I see you\n")])]),e._v(" "),a("p",[e._v("It is also possible to add the new subcommands to the usage output. The hadoop_add_subcommand function adds text to the usage output. Utilizing the standard HADOOP_SHELL_EXECNAME variable, we can limit which command gets our new function.")]),e._v(" "),a("pre",[a("code",[e._v('if [[ "${HADOOP_SHELL_EXECNAME}" = "yarn" ]]; then\n  hadoop_add_subcommand "hello" client "Print some text to the screen"\nfi\n')])]),e._v(" "),a("p",[e._v("We set the subcommand type to be “client” as there are no special restrictions, extra capabilities, etc. This functionality may also be use to override the built-ins. For example, defining:")]),e._v(" "),a("pre",[a("code",[e._v("function hdfs_subcommand_fetchdt\n{\n  ...\n}\n")])]),e._v(" "),a("p",[e._v("… will replace the existing hdfs fetchdt subcommand with a custom one.")]),e._v(" "),a("p",[e._v("Some key environment variables for Dynamic Subcommands:")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_CLASSNAME")])]),e._v(" "),a("p",[e._v("This is the name of the Java class to use when program execution continues.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_PRIV_CLASSNAME")])]),e._v(" "),a("p",[e._v("This is the name of the Java class to use when a daemon is expected to be run in a privileged mode. (See more below.)")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_SHELL_EXECNAME")])]),e._v(" "),a("p",[e._v("This is the name of the script that is being executed. It will be one of hadoop, hdfs, mapred, or yarn.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_SUBCMD")])]),e._v(" "),a("p",[e._v("This is the subcommand that was passed on the command line.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_SUBCMD_ARGS")])]),e._v(" "),a("p",[e._v("This array contains the argument list after the Apache Hadoop common argument processing has taken place and is the same list that is passed to the subcommand function as arguments. For example, if hadoop --debug subcmd 1 2 3 has been executed on the command line, then ${HADOOP_SUBCMD_ARGS[0]} will be 1 and hadoop_subcommand_subcmd will also have $1 equal to 1. This array list MAY be modified by subcommand functions to add or delete values from the argument list for further processing.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_SECURE_CLASSNAME")])]),e._v(" "),a("p",[e._v("If this subcommand runs a service that supports the secure mode, this variable should be set to the classname of the secure version.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_SUBCMD_SECURESERVICE")])]),e._v(" "),a("p",[e._v("Setting this to true will force the subcommand to run in secure mode regardless of hadoop_detect_priv_subcmd. It is expected that HADOOP_SECURE_USER will be set to the user that will be executing the final process. See more about secure mode.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_SUBCMD_SUPPORTDAEMONIZATION")])]),e._v(" "),a("p",[e._v("If this command can be executed as a daemon, set this to true.")]),e._v(" "),a("ul",[a("li",[e._v("HADOOP_USER_PARAMS")])]),e._v(" "),a("p",[e._v("This is the full content of the command line, prior to any parsing done. It will contain flags such as --debug. It MAY NOT be manipulated.")]),e._v(" "),a("p",[e._v("The Apache Hadoop runtime facilities require functions exit if no further processing is required. For example, in the hello example above, Java and other facilities were not required so a simple exit $? was sufficient. However, if the function were to utilize HADOOP_CLASSNAME, then program execution must continue so that Java with the Apache Hadoop-specific parameters will be launched against the given Java class. Another example would be in the case of an unrecoverable error. It is the function’s responsibility to print an appropriate message (preferably using the hadoop_error API call) and exit appropriately.")]),e._v(" "),a("h3",{attrs:{id:"running-with-privilege-secure-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-with-privilege-secure-mode"}},[e._v("#")]),e._v(" Running with Privilege (Secure Mode)")]),e._v(" "),a("p",[e._v("Some daemons, such as the DataNode and the NFS gateway, may be run in a privileged mode. This means that they are expected to be launched as root and (by default) switched to another userid via jsvc. This allows for these daemons to grab a low, privileged port and then drop superuser privileges during normal execution. Running with privilege is also possible for 3rd parties utilizing Dynamic Subcommands. If the following are true:")]),e._v(" "),a("ul",[a("li",[e._v("(command)_(subcommand)_SECURE_USER environment variable is defined and points to a valid username")]),e._v(" "),a("li",[e._v("HADOOP_SECURE_CLASSNAME is defined and points to a valid Java class")])]),e._v(" "),a("p",[e._v("then the shell scripts will attempt to run the class as a command with privilege as it would the built-ins. In general, users are expected to define the _SECURE_USER variable and developers define the _CLASSNAME in their shell script bootstrap.")])])}),[],!1,null,null,null);t.default=s.exports}}]);