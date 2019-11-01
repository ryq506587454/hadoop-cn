(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{270:function(e,a,o){"use strict";o.r(a);var r=o(0),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"hadoop-archives-guide"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-archives-guide"}},[e._v("#")]),e._v(" Hadoop Archives Guide")]),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("p",[e._v("Hadoop archives are special format archives. A Hadoop archive maps to a file system directory. A Hadoop archive always has a "),o("em",[e._v(".har extension. A Hadoop archive directory contains metadata (in the form of _index and _masterindex) and data (part-")]),e._v(") files. The _index file contains the name of the files that are part of the archive and the location within the part files.")]),e._v(" "),o("h2",{attrs:{id:"how-to-create-an-archive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-an-archive"}},[e._v("#")]),e._v(" How to Create an Archive")]),e._v(" "),o("p",[e._v("Usage: hadoop archive -archiveName name -p "),o("parent",[e._v(" [-r "),o("replication",{attrs:{factor:""}},[e._v("] "),o("src",[e._v("* "),o("dest")],1)],1)],1)],1),e._v(" "),o("p",[e._v("-archiveName is the name of the archive you would like to create. An example would be foo.har. The name should have a *.har extension. The parent argument is to specify the relative path to which the files should be archived to. Example would be :")]),e._v(" "),o("p",[e._v("-p /foo/bar a/b/c e/f/g")]),e._v(" "),o("p",[e._v("Here /foo/bar is the parent path and a/b/c, e/f/g are relative paths to parent. Note that this is a Map/Reduce job that creates the archives. You would need a map reduce cluster to run this. For a detailed example the later sections.")]),e._v(" "),o("p",[e._v("-r indicates the desired replication factor; if this optional argument is not specified, a replication factor of 3 will be used.")]),e._v(" "),o("p",[e._v("If you just want to archive a single directory /foo/bar then you can just use")]),e._v(" "),o("p",[e._v("hadoop archive -archiveName zoo.har -p /foo/bar -r 3 /outputdir")]),e._v(" "),o("p",[e._v("If you specify source files that are in an encryption zone, they will be decrypted and written into the archive. If the har file is not located in an encryption zone, then they will be stored in clear (decrypted) form. If the har file is located in an encryption zone they will stored in encrypted form.")]),e._v(" "),o("h2",{attrs:{id:"how-to-look-up-files-in-archives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-look-up-files-in-archives"}},[e._v("#")]),e._v(" How to Look Up Files in Archives")]),e._v(" "),o("p",[e._v("The archive exposes itself as a file system layer. So all the fs shell commands in the archives work but with a different URI. Also, note that archives are immutable. So, rename’s, deletes and creates return an error. URI for Hadoop Archives is")]),e._v(" "),o("p",[e._v("har://scheme-hostname:port/archivepath/fileinarchive")]),e._v(" "),o("p",[e._v("If no scheme is provided it assumes the underlying filesystem. In that case the URI would look like")]),e._v(" "),o("p",[e._v("har:///archivepath/fileinarchive")]),e._v(" "),o("h2",{attrs:{id:"how-to-unarchive-an-archive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-unarchive-an-archive"}},[e._v("#")]),e._v(" How to Unarchive an Archive")]),e._v(" "),o("p",[e._v("Since all the fs shell commands in the archives work transparently, unarchiving is just a matter of copying.")]),e._v(" "),o("p",[e._v("To unarchive sequentially:")]),e._v(" "),o("p",[e._v("hdfs dfs -cp har:///user/zoo/foo.har/dir1 hdfs:/user/zoo/newdir")]),e._v(" "),o("p",[e._v("To unarchive in parallel, use DistCp:")]),e._v(" "),o("p",[e._v("hadoop distcp har:///user/zoo/foo.har/dir1 hdfs:/user/zoo/newdir")]),e._v(" "),o("h2",{attrs:{id:"archives-examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#archives-examples"}},[e._v("#")]),e._v(" Archives Examples")]),e._v(" "),o("h3",{attrs:{id:"creating-an-archive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-archive"}},[e._v("#")]),e._v(" Creating an Archive")]),e._v(" "),o("p",[e._v("hadoop archive -archiveName foo.har -p /user/hadoop -r 3 dir1 dir2 /user/zoo")]),e._v(" "),o("p",[e._v("The above example is creating an archive using /user/hadoop as the relative archive directory. The directories /user/hadoop/dir1 and /user/hadoop/dir2 will be archived in the following file system directory – /user/zoo/foo.har. Archiving does not delete the input files. If you want to delete the input files after creating the archives (to reduce namespace), you will have to do it on your own. In this example, because -r 3 is specified, a replication factor of 3 will be used.")]),e._v(" "),o("h3",{attrs:{id:"looking-up-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#looking-up-files"}},[e._v("#")]),e._v(" Looking Up Files")]),e._v(" "),o("p",[e._v("Looking up files in hadoop archives is as easy as doing an ls on the filesystem. After you have archived the directories /user/hadoop/dir1 and /user/hadoop/dir2 as in the example above, to see all the files in the archives you can just run:")]),e._v(" "),o("p",[e._v("hdfs dfs -ls -R har:///user/zoo/foo.har/")]),e._v(" "),o("p",[e._v("To understand the significance of the -p argument, lets go through the above example again. If you just do an ls (not lsr) on the hadoop archive using")]),e._v(" "),o("p",[e._v("hdfs dfs -ls har:///user/zoo/foo.har")]),e._v(" "),o("p",[e._v("The output should be:")]),e._v(" "),o("pre",[o("code",[e._v("har:///user/zoo/foo.har/dir1\nhar:///user/zoo/foo.har/dir2\n")])]),e._v(" "),o("p",[e._v("As you can recall the archives were created with the following command")]),e._v(" "),o("p",[e._v("hadoop archive -archiveName foo.har -p /user/hadoop dir1 dir2 /user/zoo")]),e._v(" "),o("p",[e._v("If we were to change the command to:")]),e._v(" "),o("p",[e._v("hadoop archive -archiveName foo.har -p /user/ hadoop/dir1 hadoop/dir2 /user/zoo")]),e._v(" "),o("p",[e._v("then a ls on the hadoop archive using")]),e._v(" "),o("p",[e._v("hdfs dfs -ls har:///user/zoo/foo.har")]),e._v(" "),o("p",[e._v("would give you")]),e._v(" "),o("pre",[o("code",[e._v("har:///user/zoo/foo.har/hadoop/dir1\nhar:///user/zoo/foo.har/hadoop/dir2\n")])]),e._v(" "),o("p",[e._v("Notice that the archived files have been archived relative to /user/ rather than /user/hadoop.")]),e._v(" "),o("h2",{attrs:{id:"hadoop-archives-and-mapreduce"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-archives-and-mapreduce"}},[e._v("#")]),e._v(" Hadoop Archives and MapReduce")]),e._v(" "),o("p",[e._v("Using Hadoop Archives in MapReduce is as easy as specifying a different input filesystem than the default file system. If you have a hadoop archive stored in HDFS in /user/zoo/foo.har then for using this archive for MapReduce input, all you need is to specify the input directory as "),o("a",{attrs:{href:"har:///user/zoo/foo.har"}},[e._v("har:///user/zoo/foo.har")]),e._v(". Since Hadoop Archives is exposed as a file system MapReduce will be able to use all the logical input files in Hadoop Archives as input.")])])}),[],!1,null,null,null);a.default=t.exports}}]);