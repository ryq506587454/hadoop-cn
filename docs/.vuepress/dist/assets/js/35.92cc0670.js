(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{320:function(e,t,a){"use strict";a.r(t);var o=a(0),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hadoop-commands-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-commands-guide"}},[e._v("#")]),e._v(" Hadoop Commands Guide")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("All of the Hadoop commands and subprojects follow the same basic structure:")]),e._v(" "),a("p",[e._v("Usage: shellcommand [SHELL_OPTIONS] [COMMAND] [GENERIC_OPTIONS] [COMMAND_OPTIONS]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("FIELD")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("shellcommand")]),e._v(" "),a("td",[e._v("The command of the project being invoked. For example, Hadoop common uses hadoop, HDFS uses hdfs, and YARN uses yarn.")])]),e._v(" "),a("tr",[a("td",[e._v("SHELL_OPTIONS")]),e._v(" "),a("td",[e._v("Options that the shell processes prior to executing Java.")])]),e._v(" "),a("tr",[a("td",[e._v("COMMAND")]),e._v(" "),a("td",[e._v("Action to perform.")])]),e._v(" "),a("tr",[a("td",[e._v("GENERIC_OPTIONS")]),e._v(" "),a("td",[e._v("The common set of options supported by multiple commands.")])]),e._v(" "),a("tr",[a("td",[e._v("COMMAND_OPTIONS")]),e._v(" "),a("td",[e._v("Various commands with their options are described in this documention for the Hadoop common sub-project. HDFS and YARN are covered in other documents.")])])])]),e._v(" "),a("h3",{attrs:{id:"shell-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell-options"}},[e._v("#")]),e._v(" Shell Options")]),e._v(" "),a("p",[e._v("All of the shell commands will accept a common set of options. For some commands, these options are ignored. For example, passing ---hostnames on a command that only executes on a single host will be ignored.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("SHELL_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("--buildpaths")]),e._v(" "),a("td",[e._v("Enables developer versions of jars.")])]),e._v(" "),a("tr",[a("td",[e._v("--config confdir")]),e._v(" "),a("td",[e._v("Overwrites the default Configuration directory. Default is $HADOOP_HOME/etc/hadoop.")])]),e._v(" "),a("tr",[a("td",[e._v("--daemon mode")]),e._v(" "),a("td",[e._v("If the command supports daemonization (e.g., hdfs namenode), execute in the appropriate mode. Supported modes are start to start the process in daemon mode, stop to stop the process, and status to determine the active status of the process. status will return an "),a("a",{attrs:{href:"http://refspecs.linuxbase.org/LSB_3.0.0/LSB-generic/LSB-generic/iniscrptact.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("LSB-compliant"),a("OutboundLink")],1),e._v(" result code. If no option is provided, commands that support daemonization will run in the foreground. For commands that do not support daemonization, this option is ignored.")])]),e._v(" "),a("tr",[a("td",[e._v("--debug")]),e._v(" "),a("td",[e._v("Enables shell level configuration debugging information")])]),e._v(" "),a("tr",[a("td",[e._v("--help")]),e._v(" "),a("td",[e._v("Shell script usage information.")])]),e._v(" "),a("tr",[a("td",[e._v("--hostnames")]),e._v(" "),a("td",[e._v("When --workers is used, override the workers file with a space delimited list of hostnames where to execute a multi-host subcommand. If --workers is not used, this option is ignored.")])]),e._v(" "),a("tr",[a("td",[e._v("--hosts")]),e._v(" "),a("td",[e._v("When --workers is used, override the workers file with another file that contains a list of hostnames where to execute a multi-host subcommand. If --workers is not used, this option is ignored.")])]),e._v(" "),a("tr",[a("td",[e._v("--loglevel loglevel")]),e._v(" "),a("td",[e._v("Overrides the log level. Valid log levels are FATAL, ERROR, WARN, INFO, DEBUG, and TRACE. Default is INFO.")])]),e._v(" "),a("tr",[a("td",[e._v("--workers")]),e._v(" "),a("td",[e._v("If possible, execute this command on all hosts in the workers file.")])])])]),e._v(" "),a("h3",{attrs:{id:"generic-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-options"}},[e._v("#")]),e._v(" Generic Options")]),e._v(" "),a("p",[e._v("Many subcommands honor a common set of configuration options to alter their behavior:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("GENERIC_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-archives "),a("comma",{attrs:{separated:"",list:"",of:"",archives:""}})],1),e._v(" "),a("td",[e._v("Specify comma separated archives to be unarchived on the compute machines. Applies only to job.")])]),e._v(" "),a("tr",[a("td",[e._v("-conf "),a("configuration",{attrs:{file:""}})],1),e._v(" "),a("td",[e._v("Specify an application configuration file.")])]),e._v(" "),a("tr",[a("td",[e._v("-D "),a("property",[e._v("="),a("value")],1)],1),e._v(" "),a("td",[e._v("Use value for given property.")])]),e._v(" "),a("tr",[a("td",[e._v("-files "),a("comma",{attrs:{separated:"",list:"",of:"",files:""}})],1),e._v(" "),a("td",[e._v("Specify comma separated files to be copied to the map reduce cluster. Applies only to job.")])]),e._v(" "),a("tr",[a("td",[e._v("-fs <file:///> or "),a("a",{attrs:{href:"hdfs://namenode:port"}},[e._v("hdfs://namenode:port")])]),e._v(" "),a("td",[e._v("Specify default filesystem URL to use. Overrides ‘fs.defaultFS’ property from configurations.")])]),e._v(" "),a("tr",[a("td",[e._v("-jt "),a("local",[e._v(" or "),a("a",{attrs:{href:"resourcemanager:port"}},[e._v("resourcemanager:port")])])],1),e._v(" "),a("td",[e._v("Specify a ResourceManager. Applies only to job.")])]),e._v(" "),a("tr",[a("td",[e._v("-libjars "),a("comma",{attrs:{seperated:"",list:"",of:"",jars:""}})],1),e._v(" "),a("td",[e._v("Specify comma separated jar files to include in the classpath. Applies only to job.")])])])]),e._v(" "),a("h1",{attrs:{id:"hadoop-common-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-common-commands"}},[e._v("#")]),e._v(" Hadoop Common Commands")]),e._v(" "),a("p",[e._v("All of these commands are executed from the hadoop shell command. They have been broken up into User Commands and Administration Commands.")]),e._v(" "),a("h2",{attrs:{id:"user-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-commands"}},[e._v("#")]),e._v(" User Commands")]),e._v(" "),a("p",[e._v("Commands useful for users of a hadoop cluster.")]),e._v(" "),a("h3",{attrs:{id:"archive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#archive"}},[e._v("#")]),e._v(" archive")]),e._v(" "),a("p",[e._v("Creates a hadoop archive. More information can be found at "),a("router-link",{attrs:{to:"/docs/hadoop-archives/HadoopArchives.html"}},[e._v("Hadoop Archives Guide")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"checknative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checknative"}},[e._v("#")]),e._v(" checknative")]),e._v(" "),a("p",[e._v("Usage: hadoop checknative [-a] [-h]")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-a")]),e._v(" "),a("td",[e._v("Check all libraries are available.")])]),e._v(" "),a("tr",[a("td",[e._v("-h")]),e._v(" "),a("td",[e._v("print help")])])])]),e._v(" "),a("p",[e._v("This command checks the availability of the Hadoop native code. See "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/NativeLibraries.html"}},[e._v("Native Libaries")]),e._v(" for more information. By default, this command only checks the availability of libhadoop.")],1),e._v(" "),a("h3",{attrs:{id:"classpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classpath"}},[e._v("#")]),e._v(" classpath")]),e._v(" "),a("p",[e._v("Usage: hadoop classpath [--glob |--jar "),a("path",[e._v(" |-h |--help]")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("--glob")]),e._v(" "),a("td",[e._v("expand wildcards")])]),e._v(" "),a("tr",[a("td",[e._v("--jar path")]),e._v(" "),a("td",[e._v("write classpath as manifest in jar named path")])]),e._v(" "),a("tr",[a("td",[e._v("-h, --help")]),e._v(" "),a("td",[e._v("print help")])])])]),e._v(" "),a("p",[e._v("Prints the class path needed to get the Hadoop jar and the required libraries. If called without arguments, then prints the classpath set up by the command scripts, which is likely to contain wildcards in the classpath entries. Additional options print the classpath after wildcard expansion or write the classpath into the manifest of a jar file. The latter is useful in environments where wildcards cannot be used and the expanded classpath exceeds the maximum supported command line length.")]),e._v(" "),a("h3",{attrs:{id:"conftest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conftest"}},[e._v("#")]),e._v(" conftest")]),e._v(" "),a("p",[e._v("Usage: hadoop conftest [-conffile "),a("path",[e._v("]...")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-conffile")]),e._v(" "),a("td",[e._v("Path of a configuration file or directory to validate")])]),e._v(" "),a("tr",[a("td",[e._v("-h, --help")]),e._v(" "),a("td",[e._v("print help")])])])]),e._v(" "),a("p",[e._v("Validates configuration XML files. If the -conffile option is not specified, the files in ${HADOOP_CONF_DIR} whose name end with .xml will be verified. If specified, that path will be verified. You can specify either a file or directory, and if a directory specified, the files in that directory whose name end with .xml will be verified. You can specify -conffile option multiple times.")]),e._v(" "),a("p",[e._v("The validation is fairly minimal: the XML is parsed and duplicate and empty property names are checked for. The command does not support XInclude; if you using that to pull in configuration items, it will declare the XML file invalid.")]),e._v(" "),a("h3",{attrs:{id:"credential"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#credential"}},[e._v("#")]),e._v(" credential")]),e._v(" "),a("p",[e._v("Usage: hadoop credential "),a("subcommand",[e._v(" [options]")])],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("create alias [-provider provider-path] [-strict] [-value credential-value]")]),e._v(" "),a("td",[e._v("Prompts the user for a credential to be stored as the given alias. The hadoop.security.credential.provider.path within the core-site.xml file will be used unless a -provider is indicated. The -strict flag will cause the command to fail if the provider uses a default password. Use -value flag to supply the credential value (a.k.a. the alias password) instead of being prompted.")])]),e._v(" "),a("tr",[a("td",[e._v("delete alias [-provider provider-path] [-strict] [-f]")]),e._v(" "),a("td",[e._v("Deletes the credential with the provided alias. The hadoop.security.credential.provider.path within the core-site.xml file will be used unless a -provider is indicated. The -strict flag will cause the command to fail if the provider uses a default password. The command asks for confirmation unless -f is specified")])]),e._v(" "),a("tr",[a("td",[e._v("list [-provider provider-path] [-strict]")]),e._v(" "),a("td",[e._v("Lists all of the credential aliases The hadoop.security.credential.provider.path within the core-site.xml file will be used unless a -provider is indicated. The -strict flag will cause the command to fail if the provider uses a default password.")])])])]),e._v(" "),a("p",[e._v("Command to manage credentials, passwords and secrets within credential providers.")]),e._v(" "),a("p",[e._v("The CredentialProvider API in Hadoop allows for the separation of applications and how they store their required passwords/secrets. In order to indicate a particular provider type and location, the user must provide the hadoop.security.credential.provider.path configuration element in core-site.xml or use the command line option -provider on each of the following commands. This provider path is a comma-separated list of URLs that indicates the type and location of a list of providers that should be consulted. For example, the following path: user:///,jceks://file/tmp/test.jceks,jceks://hdfs@nn1.example.com/my/path/test.jceks")]),e._v(" "),a("p",[e._v("indicates that the current user’s credentials file should be consulted through the User Provider, that the local file located at /tmp/test.jceks is a Java Keystore Provider and that the file located within HDFS at nn1.example.com/my/path/test.jceks is also a store for a Java Keystore Provider.")]),e._v(" "),a("p",[e._v("When utilizing the credential command it will often be for provisioning a password or secret to a particular credential store provider. In order to explicitly indicate which provider store to use the -provider option should be used. Otherwise, given a path of multiple providers, the first non-transient provider will be used. This may or may not be the one that you intended.")]),e._v(" "),a("p",[e._v("Providers frequently require that a password or other secret is supplied. If the provider requires a password and is unable to find one, it will use a default password and emit a warning message that the default password is being used. If the -strict flag is supplied, the warning message becomes an error message and the command returns immediately with an error status.")]),e._v(" "),a("p",[e._v("Example: hadoop credential list -provider jceks://file/tmp/test.jceks")]),e._v(" "),a("h3",{attrs:{id:"distch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distch"}},[e._v("#")]),e._v(" distch")]),e._v(" "),a("p",[e._v("Usage: hadoop distch [-f urilist_url] [-i] [-log logdir] path:owner:group:permissions")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-f")]),e._v(" "),a("td",[e._v("List of objects to change")])]),e._v(" "),a("tr",[a("td",[e._v("-i")]),e._v(" "),a("td",[e._v("Ignore failures")])]),e._v(" "),a("tr",[a("td",[e._v("-log")]),e._v(" "),a("td",[e._v("Directory to log output")])])])]),e._v(" "),a("p",[e._v("Change the ownership and permissions on many files at once.")]),e._v(" "),a("h3",{attrs:{id:"distcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#distcp"}},[e._v("#")]),e._v(" distcp")]),e._v(" "),a("p",[e._v("Copy file or directories recursively. More information can be found at "),a("router-link",{attrs:{to:"/docs/hadoop-distcp/DistCp.html"}},[e._v("Hadoop DistCp Guide")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"dtutil"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dtutil"}},[e._v("#")]),e._v(" dtutil")]),e._v(" "),a("p",[e._v("Usage: hadoop dtutil [-keytab keytab_file -principal principal_name ] subcommand [-format (java|protobuf)] [-alias alias ] [-renewer renewer ] filename…")]),e._v(" "),a("p",[e._v("Utility to fetch and manage hadoop delegation tokens inside credentials files. It is intended to replace the simpler command fetchdt. There are multiple subcommands, each with their own flags and options.")]),e._v(" "),a("p",[e._v("For every subcommand that writes out a file, the -format option will specify the internal format to use. java is the legacy format that matches fetchdt. The default is protobuf.")]),e._v(" "),a("p",[e._v("For every subcommand that connects to a service, convenience flags are provided to specify the kerberos principal name and keytab file to use for auth.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("SUBCOMMAND")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody")]),e._v(" "),a("p",[e._v("print"),a("br"),e._v("\n[-alias alias ]"),a("br"),e._v("\nfilename [ filename2 ...]  |  Print out the fields in the tokens contained in filename (and filename2 …)."),a("br"),e._v("\nIf alias is specified, print only tokens matching alias. Otherwise, print all tokens."),a("br"),e._v("\nget URL"),a("br"),e._v("\n[-service scheme ]"),a("br"),e._v("\n[-format (java|protobuf)]"),a("br"),e._v("\n[-alias alias ]"),a("br"),e._v("\n[-renewer renewer ]"),a("br"),e._v("\nfilename  |  Fetch a token from service at URL and place it in filename."),a("br"),e._v("\nURL is required and must immediately follow get."),a("br"),e._v("\nURL is the service URL, e.g. hdfs://localhost:9000."),a("br"),e._v("\nalias will overwrite the service field in the token."),a("br"),e._v("\nIt is intended for hosts that have external and internal names, e.g. firewall.com:14000."),a("br"),e._v("\nfilename should come last and is the name of the token file."),a("br"),e._v("\nIt will be created if it does not exist. Otherwise, token(s) are added to existing file."),a("br"),e._v("\nThe -service flag should only be used with a URL which starts with http or https."),a("br"),e._v("\nThe following are equivalent: hdfs://localhost:9000/ vs. http://localhost:9000 -service hdfs"),a("br"),e._v("\nappend"),a("br"),e._v("\n[-format (java|protobuf)]"),a("br"),e._v("\nfilename filename2 [ filename3 ...]  |  Append the contents of the first N filenames onto the last filename."),a("br"),e._v("\nWhen tokens with common service fields are present in multiple files, earlier files’ tokens are overwritten."),a("br"),e._v("\nThat is, tokens present in the last file are always preserved."),a("br"),e._v("\nremove -alias alias"),a("br"),e._v("\n[-format (java|protobuf)]"),a("br"),e._v("\nfilename [ filename2 ...]  |  From each file specified, remove the tokens matching alias and write out each file using specified format."),a("br"),e._v("\nalias must be specified."),a("br"),e._v("\ncancel -alias alias"),a("br"),e._v("\n[-format (java|protobuf)]"),a("br"),e._v("\nfilename [ filename2 ...]  |  Just like remove, except the tokens are also cancelled using the service specified in the token object."),a("br"),e._v("\nalias must be specified."),a("br"),e._v("\nrenew -alias alias"),a("br"),e._v("\n[-format (java|protobuf)]"),a("br"),e._v("\nfilename [ filename2 ...]  |  For each file specified, renew the tokens matching alias and write out each file using specified format."),a("br"),e._v("\nalias must be specified.")]),e._v(" "),a("h3",{attrs:{id:"fs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs"}},[e._v("#")]),e._v(" fs")]),e._v(" "),a("p",[e._v("This command is documented in the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/FileSystemShell.html"}},[e._v("File System Shell Guide")]),e._v(". It is a synonym for hdfs dfs when HDFS is in use.")],1),e._v(" "),a("h3",{attrs:{id:"gridmix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gridmix"}},[e._v("#")]),e._v(" gridmix")]),e._v(" "),a("p",[e._v("Gridmix is a benchmark tool for Hadoop cluster. More information can be found in the "),a("router-link",{attrs:{to:"/docs/hadoop-gridmix/GridMix.html"}},[e._v("Gridmix Guide")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"jar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jar"}},[e._v("#")]),e._v(" jar")]),e._v(" "),a("p",[e._v("Usage: hadoop jar "),a("jar",[e._v(" [mainClass] args...")])],1),e._v(" "),a("p",[e._v("Runs a jar file.")]),e._v(" "),a("p",[e._v("Use "),a("router-link",{attrs:{to:"/docs/hadoop-yarn/hadoop-yarn-site/YarnCommands.html#jar"}},[e._v("yarn jar")]),e._v(" to launch YARN applications instead.")],1),e._v(" "),a("h3",{attrs:{id:"jnipath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jnipath"}},[e._v("#")]),e._v(" jnipath")]),e._v(" "),a("p",[e._v("Usage: hadoop jnipath")]),e._v(" "),a("p",[e._v("Print the computed java.library.path.")]),e._v(" "),a("h3",{attrs:{id:"kerbname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kerbname"}},[e._v("#")]),e._v(" kerbname")]),e._v(" "),a("p",[e._v("Usage: hadoop kerbname principal")]),e._v(" "),a("p",[e._v("Convert the named principal via the auth_to_local rules to the Hadoop user name.")]),e._v(" "),a("p",[e._v("Example: hadoop kerbname user@EXAMPLE.COM")]),e._v(" "),a("h3",{attrs:{id:"kdiag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kdiag"}},[e._v("#")]),e._v(" kdiag")]),e._v(" "),a("p",[e._v("Usage: hadoop kdiag")]),e._v(" "),a("p",[e._v("Diagnose Kerberos Problems")]),e._v(" "),a("h3",{attrs:{id:"key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key"}},[e._v("#")]),e._v(" key")]),e._v(" "),a("p",[e._v("Usage: hadoop key "),a("subcommand",[e._v(" [options]")])],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("create keyname [-cipher cipher] [-size size] [-description description] [-attr attribute=value] [-provider provider] [-strict] [-help]")]),e._v(" "),a("td",[e._v("Creates a new key for the name specified by the keyname argument within the provider specified by the -provider argument. The -strict flag will cause the command to fail if the provider uses a default password. You may specify a cipher with the -cipher argument. The default cipher is currently “AES/CTR/NoPadding”. The default keysize is 128. You may specify the requested key length using the -size argument. Arbitrary attribute=value style attributes may be specified using the -attr argument. -attr may be specified multiple times, once per attribute.")])]),e._v(" "),a("tr",[a("td",[e._v("roll keyname [-provider provider] [-strict] [-help]")]),e._v(" "),a("td",[e._v("Creates a new version for the specified key within the provider indicated using the -provider argument. The -strict flag will cause the command to fail if the provider uses a default password.")])]),e._v(" "),a("tr",[a("td",[e._v("delete keyname [-provider provider] [-strict] [-f] [-help]")]),e._v(" "),a("td",[e._v("Deletes all versions of the key specified by the keyname argument from within the provider specified by -provider. The -strict flag will cause the command to fail if the provider uses a default password. The command asks for user confirmation unless -f is specified.")])]),e._v(" "),a("tr",[a("td",[e._v("list [-provider provider] [-strict] [-metadata] [-help]")]),e._v(" "),a("td",[e._v("Displays the keynames contained within a particular provider as configured in core-site.xml or specified with the -provider argument. The -strict flag will cause the command to fail if the provider uses a default password. -metadata displays the metadata.")])]),e._v(" "),a("tr",[a("td",[e._v("-help")]),e._v(" "),a("td",[e._v("Prints usage of this command")])])])]),e._v(" "),a("p",[e._v("Manage keys via the KeyProvider. For details on KeyProviders, see the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-hdfs/TransparentEncryption.html"}},[e._v("Transparent Encryption Guide")]),e._v(".")],1),e._v(" "),a("p",[e._v("Providers frequently require that a password or other secret is supplied. If the provider requires a password and is unable to find one, it will use a default password and emit a warning message that the default password is being used. If the -strict flag is supplied, the warning message becomes an error message and the command returns immediately with an error status.")]),e._v(" "),a("p",[e._v("NOTE: Some KeyProviders (e.g. org.apache.hadoop.crypto.key.JavaKeyStoreProvider) do not support uppercase key names.")]),e._v(" "),a("p",[e._v("NOTE: Some KeyProviders do not directly execute a key deletion (e.g. performs a soft-delete instead, or delay the actual deletion, to prevent mistake). In these cases, one may encounter errors when creating/deleting a key with the same name after deleting it. Please check the underlying KeyProvider for details.")]),e._v(" "),a("h3",{attrs:{id:"kms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kms"}},[e._v("#")]),e._v(" kms")]),e._v(" "),a("p",[e._v("Usage: hadoop kms")]),e._v(" "),a("p",[e._v("Run KMS, the Key Management Server.")]),e._v(" "),a("h3",{attrs:{id:"trace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trace"}},[e._v("#")]),e._v(" trace")]),e._v(" "),a("p",[e._v("View and modify Hadoop tracing settings. See the "),a("router-link",{attrs:{to:"/docs/hadoop-project-dist/hadoop-common/Tracing.html"}},[e._v("Tracing Guide")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" version")]),e._v(" "),a("p",[e._v("Usage: hadoop version")]),e._v(" "),a("p",[e._v("Prints the version.")]),e._v(" "),a("h3",{attrs:{id:"classname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#classname"}},[e._v("#")]),e._v(" CLASSNAME")]),e._v(" "),a("p",[e._v("Usage: hadoop CLASSNAME")]),e._v(" "),a("p",[e._v("Runs the class named CLASSNAME. The class must be part of a package.")]),e._v(" "),a("h3",{attrs:{id:"envvars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#envvars"}},[e._v("#")]),e._v(" envvars")]),e._v(" "),a("p",[e._v("Usage: hadoop envvars")]),e._v(" "),a("p",[e._v("Display computed Hadoop environment variables.")]),e._v(" "),a("h2",{attrs:{id:"administration-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#administration-commands"}},[e._v("#")]),e._v(" Administration Commands")]),e._v(" "),a("p",[e._v("Commands useful for administrators of a hadoop cluster.")]),e._v(" "),a("h3",{attrs:{id:"daemonlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daemonlog"}},[e._v("#")]),e._v(" daemonlog")]),e._v(" "),a("p",[e._v("Usage:")]),e._v(" "),a("pre",[a("code",[e._v("hadoop daemonlog -getlevel <host:port> <classname> [-protocol (http|https)]\nhadoop daemonlog -setlevel <host:port> <classname> <level> [-protocol (http|https)]\n")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("COMMAND_OPTION")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("-getlevel host:port classname [-protocol (httphttps)]")]),e._v(" "),a("td",[e._v("Prints the log level of the log identified by a qualified classname, in the daemon running at host:port. The -protocol flag specifies the protocol for connection.")])]),e._v(" "),a("tr",[a("td",[e._v("-setlevel host:port classname level [-protocol (httphttps)]")]),e._v(" "),a("td",[e._v("Sets the log level of the log identified by a qualified classname, in the daemon running at host:port. The -protocol flag specifies the protocol for connection.")])])])]),e._v(" "),a("p",[e._v("Get/Set the log level for a Log identified by a qualified class name in the daemon dynamically. By default, the command sends a HTTP request, but this can be overridden by using argument -protocol https to send a HTTPS request.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("pre",[a("code",[e._v("$ bin/hadoop daemonlog -setlevel 127.0.0.1:9870 org.apache.hadoop.hdfs.server.namenode.NameNode DEBUG\n$ bin/hadoop daemonlog -getlevel 127.0.0.1:9871 org.apache.hadoop.hdfs.server.namenode.NameNode DEBUG -protocol https\n")])]),e._v(" "),a("p",[e._v("Note that the setting is not permanent and will be reset when the daemon is restarted. This command works by sending a HTTP/HTTPS request to the daemon’s internal Jetty servlet, so it supports the following daemons:")]),e._v(" "),a("ul",[a("li",[e._v("Common\n"),a("ul",[a("li",[e._v("key management server")])])]),e._v(" "),a("li",[e._v("HDFS\n"),a("ul",[a("li",[e._v("name node")]),e._v(" "),a("li",[e._v("secondary name node")]),e._v(" "),a("li",[e._v("data node")]),e._v(" "),a("li",[e._v("journal node")]),e._v(" "),a("li",[e._v("HttpFS server")])])]),e._v(" "),a("li",[e._v("YARN\n"),a("ul",[a("li",[e._v("resource manager")]),e._v(" "),a("li",[e._v("node manager")]),e._v(" "),a("li",[e._v("Timeline server")])])])]),e._v(" "),a("h2",{attrs:{id:"files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[e._v("#")]),e._v(" Files")]),e._v(" "),a("h3",{attrs:{id:"etc-hadoop-hadoop-env-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etc-hadoop-hadoop-env-sh"}},[e._v("#")]),e._v(" etc/hadoop/hadoop-env.sh")]),e._v(" "),a("p",[e._v("This file stores the global settings used by all Hadoop shell commands.")]),e._v(" "),a("h3",{attrs:{id:"etc-hadoop-hadoop-user-functions-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etc-hadoop-hadoop-user-functions-sh"}},[e._v("#")]),e._v(" etc/hadoop/hadoop-user-functions.sh")]),e._v(" "),a("p",[e._v("This file allows for advanced users to override some shell functionality.")]),e._v(" "),a("h3",{attrs:{id:"hadooprc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadooprc"}},[e._v("#")]),e._v(" ~/.hadooprc")]),e._v(" "),a("p",[e._v("This stores the personal environment for an individual user. It is processed after the hadoop-env.sh and hadoop-user-functions.sh files and can contain the same settings.")])])}),[],!1,null,null,null);t.default=r.exports}}]);