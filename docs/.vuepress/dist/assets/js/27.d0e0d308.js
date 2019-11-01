(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{306:function(e,a,r){"use strict";r.r(a);var t=r(0),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hadoop-pluggable-shuffle-and-pluggable-sort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-pluggable-shuffle-and-pluggable-sort"}},[e._v("#")]),e._v(" Hadoop: Pluggable Shuffle and Pluggable Sort")]),e._v(" "),r("h2",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("The pluggable shuffle and pluggable sort capabilities allow replacing the built in shuffle and sort logic with alternate implementations. Example use cases for this are: using a different application protocol other than HTTP such as RDMA for shuffling data from the Map nodes to the Reducer nodes; or replacing the sort logic with custom algorithms that enable Hash aggregation and Limit-N query.")]),e._v(" "),r("p",[e._v("IMPORTANT: The pluggable shuffle and pluggable sort capabilities are experimental and unstable. This means the provided APIs may change and break compatibility in future versions of Hadoop.")]),e._v(" "),r("h2",{attrs:{id:"implementing-a-custom-shuffle-and-a-custom-sort"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implementing-a-custom-shuffle-and-a-custom-sort"}},[e._v("#")]),e._v(" Implementing a Custom Shuffle and a Custom Sort")]),e._v(" "),r("p",[e._v("A custom shuffle implementation requires a org.apache.hadoop.yarn.server.nodemanager.containermanager.AuxServices.AuxiliaryService implementation class running in the NodeManagers and a org.apache.hadoop.mapred.ShuffleConsumerPlugin implementation class running in the Reducer tasks.")]),e._v(" "),r("p",[e._v("The default implementations provided by Hadoop can be used as references:")]),e._v(" "),r("ul",[r("li",[e._v("org.apache.hadoop.mapred.ShuffleHandler")]),e._v(" "),r("li",[e._v("org.apache.hadoop.mapreduce.task.reduce.Shuffle")])]),e._v(" "),r("p",[e._v("A custom sort implementation requires a org.apache.hadoop.mapred.MapOutputCollector implementation class running in the Mapper tasks and (optionally, depending on the sort implementation) a org.apache.hadoop.mapred.ShuffleConsumerPlugin implementation class running in the Reducer tasks.")]),e._v(" "),r("p",[e._v("The default implementations provided by Hadoop can be used as references:")]),e._v(" "),r("ul",[r("li",[e._v("org.apache.hadoop.mapred.MapTask$MapOutputBuffer")]),e._v(" "),r("li",[e._v("org.apache.hadoop.mapreduce.task.reduce.Shuffle")])]),e._v(" "),r("h2",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("p",[e._v("Except for the auxiliary service running in the NodeManagers serving the shuffle (by default the ShuffleHandler), all the pluggable components run in the job tasks. This means, they can be configured on per job basis. The auxiliary service servicing the Shuffle must be configured in the NodeManagers configuration.")]),e._v(" "),r("h3",{attrs:{id:"job-configuration-properties-on-per-job-basis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#job-configuration-properties-on-per-job-basis"}},[e._v("#")]),e._v(" Job Configuration Properties (on per job basis):")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default Value")]),e._v(" "),r("th",[e._v("Explanation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("mapreduce.job.reduce.shuffle.consumer.plugin.class")]),e._v(" "),r("td",[e._v("org.apache.hadoop.mapreduce.task.reduce.Shuffle")]),e._v(" "),r("td",[e._v("The ShuffleConsumerPlugin implementation to use")])]),e._v(" "),r("tr",[r("td",[e._v("mapreduce.job.map.output.collector.class")]),e._v(" "),r("td",[e._v("org.apache.hadoop.mapred.MapTask$MapOutputBuffer")]),e._v(" "),r("td",[e._v("The MapOutputCollector implementation(s) to use")])])])]),e._v(" "),r("p",[e._v("These properties can also be set in the mapred-site.xml to change the default values for all jobs.")]),e._v(" "),r("p",[e._v("The collector class configuration may specify a comma-separated list of collector implementations. In this case, the map task will attempt to instantiate each in turn until one of the implementations successfully initializes. This can be useful if a given collector implementation is only compatible with certain types of keys or values, for example.")]),e._v(" "),r("h3",{attrs:{id:"nodemanager-configuration-properties-yarn-site-xml-in-all-nodes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodemanager-configuration-properties-yarn-site-xml-in-all-nodes"}},[e._v("#")]),e._v(" NodeManager Configuration properties, yarn-site.xml in all nodes:")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Property")]),e._v(" "),r("th",[e._v("Default Value")]),e._v(" "),r("th",[e._v("Explanation")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("yarn.nodemanager.aux-services")]),e._v(" "),r("td",[e._v("...,mapreduce_shuffle")]),e._v(" "),r("td",[e._v("The auxiliary service name")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.aux-services.mapreduce_shuffle.class")]),e._v(" "),r("td",[e._v("org.apache.hadoop.mapred.ShuffleHandler")]),e._v(" "),r("td",[e._v("The auxiliary service class to use")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.aux-services.%s.classpath")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("local directory which includes the related jar file as well as all the dependencies’ jar file. We could specify the single jar file or use /dep/* to load all jars under the dep directory.")])]),e._v(" "),r("tr",[r("td",[e._v("yarn.nodemanager.aux-services.%s.remote-classpath")]),e._v(" "),r("td",[e._v("NONE")]),e._v(" "),r("td",[e._v("The remote absolute or relative path to jar file")])])])]),e._v(" "),r("h4",{attrs:{id:"example-of-loading-jar-file-from-hdfs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-of-loading-jar-file-from-hdfs"}},[e._v("#")]),e._v(" Example of loading jar file from HDFS:")]),e._v(" "),r("pre",[r("code",[e._v("<configuration>\n    <property>\n        <name>yarn.nodemanager.aux-services</name>\n        <value>mapreduce_shuffle,AuxServiceFromHDFS</value>\n    </property>\n\n    <property>\n        <name>yarn.nodemanager.aux-services.AuxServiceFromHDFS.remote-classpath</name>\n        <value>/aux/test/aux-service-hdfs.jar</value>\n    </property>\n\n    <property>\n        <name>yarn.nodemanager.aux-services.AuxServiceFromHDFS.class</name>\n        <value>org.apache.auxtest.AuxServiceFromHDFS2</value>\n    </property>\n</configuration>\n")])]),e._v(" "),r("h4",{attrs:{id:"example-of-loading-jar-file-from-local-file-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-of-loading-jar-file-from-local-file-system"}},[e._v("#")]),e._v(" Example of loading jar file from local file system:")]),e._v(" "),r("pre",[r("code",[e._v("<configuration>\n    <property>\n        <name>yarn.nodemanager.aux-services</name>\n        <value>mapreduce_shuffle,AuxServiceFromHDFS</value>\n    </property>\n\n    <property>\n        <name>yarn.nodemanager.aux-services.AuxServiceFromHDFS.classpath</name>\n        <value>/aux/test/aux-service-hdfs.jar</value>\n    </property>\n\n    <property>\n        <name>yarn.nodemanager.aux-services.AuxServiceFromHDFS.class</name>\n        <value>org.apache.auxtest.AuxServiceFromHDFS2</value>\n    </property>\n</configuration>\n")])]),e._v(" "),r("p",[e._v("IMPORTANT: If setting an auxiliary service in addition the default mapreduce_shuffle service, then a new service key should be added to the yarn.nodemanager.aux-services property, for example mapred.shufflex. Then the property defining the corresponding class must be yarn.nodemanager.aux-services.mapreduce_shufflex.class.")])])}),[],!1,null,null,null);a.default=n.exports}}]);