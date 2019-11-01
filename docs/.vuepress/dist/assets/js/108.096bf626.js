(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{255:function(e,r,t){"use strict";t.r(r);var a=t(0),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hadoop-yarn-resource-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-yarn-resource-configuration"}},[e._v("#")]),e._v(" Hadoop: YARN Resource Configuration")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("YARN supports an extensible resource model. By default YARN tracks CPU and memory for all nodes, applications, and queues, but the resource definition can be extended to include arbitrary “countable” resources. A countable resource is a resource that is consumed while a container is running, but is released afterwards. CPU and memory are both countable resources. Other examples include GPU resources and software licenses.")]),e._v(" "),t("p",[e._v("In addition, YARN also supports the use of “resource profiles”, which allow a user to specify multiple resource requests through a single profile, similar to Amazon Web Services Elastic Compute Cluster instance types. For example, “large” might mean 8 virtual cores and 16GB RAM.")]),e._v(" "),t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),t("p",[e._v("The following configuration properties are supported. See below for details.")]),e._v(" "),t("p",[e._v("yarn-site.xml")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Configuration Property")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.resourcemanager.resource-profiles.enabled")]),e._v(" "),t("td",[e._v("Indicates whether resource profiles support is enabled. Defaults to false.")])])])]),e._v(" "),t("p",[e._v("resource-types.xml")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Configuration Property")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.resource-types")]),e._v(" "),t("td",[e._v("Comma-separated list of additional resources. May not include memory, memory-mb, or vcores")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.resource-types."),t("resource",[e._v(".units")])],1),e._v(" "),t("td",[e._v("Default unit for the specified resource type")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.resource-types."),t("resource",[e._v(".minimum-allocation")])],1),e._v(" "),t("td",[e._v("The minimum request for the specified resource type")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.resource-types."),t("resource",[e._v(".maximum-allocation")])],1),e._v(" "),t("td",[e._v("The maximum request for the specified resource type")])])])]),e._v(" "),t("p",[e._v("node-resources.xml")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Configuration Property")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.nodemanager.resource-type."),t("resource")],1),e._v(" "),t("td",[e._v("The count of the specified resource available from the node manager")])])])]),e._v(" "),t("p",[e._v("Please note that the resource-types.xml and node-resources.xml files also need to be placed in the same configuration directory as yarn-site.xml if they are used. Alternatively, the properties may be placed into the yarn-site.xml file instead.")]),e._v(" "),t("h2",{attrs:{id:"yarn-resource-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-resource-model"}},[e._v("#")]),e._v(" YARN Resource Model")]),e._v(" "),t("h3",{attrs:{id:"resource-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-manager"}},[e._v("#")]),e._v(" Resource Manager")]),e._v(" "),t("p",[e._v("The resource manager is the final arbiter of what resources in the cluster are tracked. The resource manager loads its resource definition from XML configuration files. For example, to define a new resource in addition to CPU and memory, the following property should be configured:")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n  <property>\n    <name>yarn.resource-types</name>\n    <value>resource1,resource2</value>\n    <description>\n    The resources to be used for scheduling. Use resource-types.xml\n    to specify details about the individual resource types.\n    </description>\n  </property>\n</configuration>\n")])]),e._v(" "),t("p",[e._v("A valid resource name must begin with a letter and contain only letters, numbers, and any of: ‘.’, ‘_’, or ‘-’. A valid resource name may also be optionally preceded by a name space followed by a slash. A valid name space consists of period-separated groups of letters, numbers, and dashes. For example, the following are valid resource names:")]),e._v(" "),t("ul",[t("li",[e._v("myresource")]),e._v(" "),t("li",[e._v("my_resource")]),e._v(" "),t("li",[e._v("My-Resource01")]),e._v(" "),t("li",[e._v("com.acme/myresource")])]),e._v(" "),t("p",[e._v("The following are examples of invalid resource names:")]),e._v(" "),t("ul",[t("li",[e._v("10myresource")]),e._v(" "),t("li",[e._v("my resource")]),e._v(" "),t("li",[e._v("com/acme/myresource")]),e._v(" "),t("li",[e._v("$NS/myresource")]),e._v(" "),t("li",[e._v("-none-/myresource")])]),e._v(" "),t("p",[e._v("For each new resource type defined an optional unit property can be added to set the default unit for the resource type. Valid values are:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Unit Name")]),e._v(" "),t("th",[e._v("Meaning")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("p")]),e._v(" "),t("td",[e._v("pico")])]),e._v(" "),t("tr",[t("td",[e._v("n")]),e._v(" "),t("td",[e._v("nano")])]),e._v(" "),t("tr",[t("td",[e._v("u")]),e._v(" "),t("td",[e._v("micro")])]),e._v(" "),t("tr",[t("td",[e._v("m")]),e._v(" "),t("td",[e._v("milli")])]),e._v(" "),t("tr",[t("td",[e._v("default, i.e. no unit")]),e._v(" "),t("td")]),e._v(" "),t("tr",[t("td",[e._v("k")]),e._v(" "),t("td",[e._v("kilo")])]),e._v(" "),t("tr",[t("td",[e._v("M")]),e._v(" "),t("td",[e._v("mega")])]),e._v(" "),t("tr",[t("td",[e._v("G")]),e._v(" "),t("td",[e._v("giga")])]),e._v(" "),t("tr",[t("td",[e._v("T")]),e._v(" "),t("td",[e._v("tera")])]),e._v(" "),t("tr",[t("td",[e._v("P")]),e._v(" "),t("td",[e._v("peta")])]),e._v(" "),t("tr",[t("td",[e._v("Ki")]),e._v(" "),t("td",[e._v("binary kilo, i.e. 1024")])]),e._v(" "),t("tr",[t("td",[e._v("Mi")]),e._v(" "),t("td",[e._v("binary mega, i.e. 1024^2")])]),e._v(" "),t("tr",[t("td",[e._v("Gi")]),e._v(" "),t("td",[e._v("binary giga, i.e. 1024^3")])]),e._v(" "),t("tr",[t("td",[e._v("Ti")]),e._v(" "),t("td",[e._v("binary tera, i.e. 1024^4")])]),e._v(" "),t("tr",[t("td",[e._v("Pi")]),e._v(" "),t("td",[e._v("binary peta, i.e. 1024^5")])])])]),e._v(" "),t("p",[e._v("The property must be named yarn.resource-types."),t("resource",[e._v(".units. Each defined resource may also have optional minimum and maximum properties. The properties must be named yarn.resource-types."),t("resource",[e._v(".minimum-allocation and yarn.resource-types."),t("resource",[e._v(".maximum-allocation.")])],1)],1)],1),e._v(" "),t("p",[e._v("The yarn.resource-types property and any unit, mimimum, or maximum properties may be defined in either the usual yarn-site.xml file or in a file named resource-types.xml. For example, the following could appear in either file:")]),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n  <property>\n    <name>yarn.resource-types</name>\n    <value>resource1, resource2</value>\n  </property>\n\n  <property>\n    <name>yarn.resource-types.resource1.units</name>\n    <value>G</value>\n  </property>\n\n  <property>\n    <name>yarn.resource-types.resource2.minimum-allocation</name>\n    <value>1</value>\n  </property>\n\n  <property>\n    <name>yarn.resource-types.resource2.maximum-allocation</name>\n    <value>1024</value>\n  </property>\n</configuration>\n")])]),e._v(" "),t("h3",{attrs:{id:"node-manager"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#node-manager"}},[e._v("#")]),e._v(" Node Manager")]),e._v(" "),t("p",[e._v("Each node manager independently defines the resources that are available from that node. The resource definition is done through setting a property for each available resource. The property must be named yarn.nodemanager.resource-type."),t("resource",[e._v(" and may be placed in the usual yarn-site.xml file or in a file named node­resources.xml. The value of the property should be the amount of that resource offered by the node. For example:")])],1),e._v(" "),t("pre",[t("code",[e._v("<configuration>\n <property>\n   <name>yarn.nodemanager.resource-type.resource1</name>\n   <value>5G</value>\n </property>\n\n <property>\n   <name>yarn.nodemanager.resource-type.resource2</name>\n   <value>2m</value>\n </property>\n\n</configuration>\n")])]),e._v(" "),t("p",[e._v("Note that the units used for these resources need not match the definition held by the resource manager. If the units do not match, the resource manager will automatically do a conversion.")]),e._v(" "),t("h3",{attrs:{id:"using-resources-with-mapreduce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-resources-with-mapreduce"}},[e._v("#")]),e._v(" Using Resources With MapReduce")]),e._v(" "),t("p",[e._v("MapReduce requests three different kinds of containers from YARN: the application master container, map containers, and reduce containers. For each container type, there is a corresponding set of properties that can be used to set the resources requested.")]),e._v(" "),t("p",[e._v("The properties for setting resource requests in MapReduce are:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Property")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("yarn.app.mapreduce.am.resource.mb")]),e._v(" "),t("td",[e._v("Sets the memory requested for the application master container to the value in MB. No longer preferred. Use yarn.app.mapreduce.am.resource.memory-mb instead. Defaults to 1536.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.app.mapreduce.am.resource.memory")]),e._v(" "),t("td",[e._v("Sets the memory requested for the application master container to the value in MB. No longer preferred. Use yarn.app.mapreduce.am.resource.memory-mb instead. Defaults to 1536.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.app.mapreduce.am.resource.memory-mb")]),e._v(" "),t("td",[e._v("Sets the memory requested for the application master container to the value in MB. Defaults to 1536.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.app.mapreduce.am.resource.cpu-vcores")]),e._v(" "),t("td",[e._v("Sets the CPU requested for the application master container to the value. No longer preferred. Use yarn.app.mapreduce.am.resource.vcores instead. Defaults to 1.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.app.mapreduce.am.resource.vcores")]),e._v(" "),t("td",[e._v("Sets the CPU requested for the application master container to the value. Defaults to 1.")])]),e._v(" "),t("tr",[t("td",[e._v("yarn.app.mapreduce.am.resource."),t("resource")],1),e._v(" "),t("td",[e._v("Sets the quantity requested of "),t("resource",[e._v(" for the application master container to the value. If no unit is specified, the default unit for the resource is assumed. See the section on units above.")])],1)]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.map.memory.mb")]),e._v(" "),t("td",[e._v("Sets the memory requested for the all map task containers to the value in MB. No longer preferred. Use mapreduce.map.resource.memory-mb instead. Defaults to 1024.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.map.resource.memory")]),e._v(" "),t("td",[e._v("Sets the memory requested for the all map task containers to the value in MB. No longer preferred. Use mapreduce.map.resource.memory-mb instead. Defaults to 1024.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.map.resource.memory-mb")]),e._v(" "),t("td",[e._v("Sets the memory requested for the all map task containers to the value in MB. Defaults to 1024.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.map.cpu.vcores")]),e._v(" "),t("td",[e._v("Sets the CPU requested for the all map task containers to the value. No longer preferred. Use mapreduce.map.resource.vcores instead. Defaults to 1.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.map.resource.vcores")]),e._v(" "),t("td",[e._v("Sets the CPU requested for the all map task containers to the value. Defaults to 1.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.map.resource."),t("resource")],1),e._v(" "),t("td",[e._v("Sets the quantity requested of "),t("resource",[e._v(" for the all map task containers to the value. If no unit is specified, the default unit for the resource is assumed. See the section on units above.")])],1)]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.reduce.memory.mb")]),e._v(" "),t("td",[e._v("Sets the memory requested for the all reduce task containers to the value in MB. No longer preferred. Use mapreduce.reduce.resource.memory-mb instead. Defaults to 1024.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.reduce.resource.memory")]),e._v(" "),t("td",[e._v("Sets the memory requested for the all reduce task containers to the value in MB. No longer preferred. Use mapreduce.reduce.resource.memory-mb instead. Defaults to 1024.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.reduce.resource.memory-mb")]),e._v(" "),t("td",[e._v("Sets the memory requested for the all reduce task containers to the value in MB. Defaults to 1024.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.reduce.cpu.vcores")]),e._v(" "),t("td",[e._v("Sets the CPU requested for the all reduce task containers to the value. No longer preferred. Use mapreduce.reduce.resource.vcores instead. Defaults to 1.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.reduce.resource.vcores")]),e._v(" "),t("td",[e._v("Sets the CPU requested for the all reduce task containers to the value. Defaults to 1.")])]),e._v(" "),t("tr",[t("td",[e._v("mapreduce.reduce.resource."),t("resource")],1),e._v(" "),t("td",[e._v("Sets the quantity requested of "),t("resource",[e._v(" for the all reduce task containers to the value. If no unit is specified, the default unit for the resource is assumed. See the section on units above.")])],1)])])]),e._v(" "),t("p",[e._v("Note that these resource requests may be modified by YARN to meet the configured minimum and maximum resource values or to be a multiple of the configured increment. See the yarn.scheduler.maximum-allocation-mb, yarn.scheduler.minimum-allocation-mb, yarn.scheduler.increment-allocation-mb, yarn.scheduler.maximum-allocation-vcores, yarn.scheduler.minimum-allocation-vcores, and yarn.scheduler.increment-allocation-vcores properties in the YARN scheduler configuration.")]),e._v(" "),t("h2",{attrs:{id:"resource-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource-profiles"}},[e._v("#")]),e._v(" Resource Profiles")]),e._v(" "),t("p",[e._v("Resource profiles provides an easy way for users to request a set of resources with a single profile and a means for administrators to regulate how resources are consumed.")]),e._v(" "),t("p",[e._v("To configure resource types, the administrator must set yarn.resourcemanager.resource-profiles.enabled to true in the resource manager’s yarn-site.xml file. This file defines the supported profiles. For example:")]),e._v(" "),t("pre",[t("code",[e._v('{\n    "small": {\n        "memory-mb" : 1024,\n        "vcores" : 1\n    },\n    "default" : {\n        "memory-mb" : 2048,\n        "vcores" : 2\n    },\n    "large" : {\n        "memory-mb": 4096,\n        "vcores" : 4\n    },\n    "compute" : {\n        "memory-mb" : 2048,\n        "vcores" : 2,\n        "gpu" : 1\n    }\n}\n')])]),e._v(" "),t("p",[e._v("In this example, users have access to four profiles with different resource settings. Note that in the compute profile, the administrator has configured an additional resource as described above.")]),e._v(" "),t("h3",{attrs:{id:"requesting-profiles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requesting-profiles"}},[e._v("#")]),e._v(" Requesting Profiles")]),e._v(" "),t("p",[e._v("The distributed shell is currently the only client that supports resource profiles. Using the distributed shell, the user can specify a resource profile name which will automatically be translated into an appropriate set of resource requests.")]),e._v(" "),t("p",[e._v("For example:")]),e._v(" "),t("p",[e._v("hadoop job $DISTSHELL -jar $DISTSHELL -shell_command run.sh -container_resource_profile small")])])}),[],!1,null,null,null);r.default=o.exports}}]);