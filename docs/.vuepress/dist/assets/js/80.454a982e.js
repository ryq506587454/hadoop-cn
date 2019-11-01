(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{244:function(e,t,a){"use strict";a.r(t);var i=a(0),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"synthetic-load-generator-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synthetic-load-generator-guide"}},[e._v("#")]),e._v(" Synthetic Load Generator Guide")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("The synthetic load generator (SLG) is a tool for testing NameNode behavior under different client loads. The user can generate different mixes of read, write, and list requests by specifying the probabilities of read and write. The user controls the intensity of the load by adjusting parameters for the number of worker threads and the delay between operations. While load generators are running, the user can profile and monitor the running of the NameNode. When a load generator exits, it prints some NameNode statistics like the average execution time of each kind of operation and the NameNode throughput.")]),e._v(" "),a("h2",{attrs:{id:"synopsis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synopsis"}},[e._v("#")]),e._v(" Synopsis")]),e._v(" "),a("p",[e._v("The synopsis of the command is:")]),e._v(" "),a("pre",[a("code",[e._v("    yarn jar <HADOOP_HOME>/share/hadoop/mapreduce/hadoop-mapreduce-client-jobclient-<hadoop-version>.jar NNloadGenerator [options]\n")])]),e._v(" "),a("p",[e._v("Options include:")]),e._v(" "),a("ul",[a("li",[e._v("-readProbability read probability")])]),e._v(" "),a("p",[e._v("The probability of the read operation; default is 0.3333.")]),e._v(" "),a("ul",[a("li",[e._v("-writeProbability write probability")])]),e._v(" "),a("p",[e._v("The probability of the write operations; default is 0.3333.")]),e._v(" "),a("ul",[a("li",[e._v("-root test space root")])]),e._v(" "),a("p",[e._v("The root of the test space; default is /testLoadSpace.")]),e._v(" "),a("ul",[a("li",[e._v("-maxDelayBetweenOps maxDelayBetweenOpsInMillis")])]),e._v(" "),a("p",[e._v("The maximum delay between two consecutive operations in a thread; default is 0 indicating no delay.")]),e._v(" "),a("ul",[a("li",[e._v("-numOfThreads numOfThreads")])]),e._v(" "),a("p",[e._v("The number of threads to spawn; default is 200.")]),e._v(" "),a("ul",[a("li",[e._v("-elapsedTime elapsedTimeInSecs")])]),e._v(" "),a("p",[e._v("The number of seconds that the program will run; A value of zero indicates that the program runs forever. The default value is 0.")]),e._v(" "),a("ul",[a("li",[e._v("-startTime startTimeInMillis")])]),e._v(" "),a("p",[e._v("The time that all worker threads start to run. By default it is 10 seconds after the main program starts running.This creates a barrier if more than one load generator is running.")]),e._v(" "),a("ul",[a("li",[e._v("-seed seed")])]),e._v(" "),a("p",[e._v("The random generator seed for repeating requests to NameNode when running with a single thread; default is the current time.")]),e._v(" "),a("p",[e._v("After command line argument parsing, the load generator traverses the test space and builds a table of all directories and another table of all files in the test space. It then waits until the start time to spawn the number of worker threads as specified by the user. Each thread sends a stream of requests to NameNode. At each iteration, it first decides if it is going to read a file, create a file, or list a directory following the read and write probabilities specified by the user. The listing probability is equal to 1-read probability-write probability. When reading, it randomly picks a file in the test space and reads the entire file. When writing, it randomly picks a directory in the test space and creates a file there.")]),e._v(" "),a("p",[e._v("To avoid two threads with the same load generator or from two different load generators creating the same file, the file name consists of the current machine’s host name and the thread id. The length of the file follows Gaussian distribution with an average size of 2 blocks and the standard deviation of 1. The new file is filled with byte ‘a’. To avoid the test space growing indefinitely, the file is deleted immediately after the file creation completes. While listing, it randomly picks a directory in the test space and lists its content.")]),e._v(" "),a("p",[e._v("After an operation completes, the thread pauses for a random amount of time in the range of [0, maxDelayBetweenOps] if the specified maximum delay is not zero. All threads are stopped when the specified elapsed time is passed. Before exiting, the program prints the average execution for each kind of NameNode operations, and the number of requests served by the NameNode per second.")]),e._v(" "),a("h2",{attrs:{id:"test-space-population"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-space-population"}},[e._v("#")]),e._v(" Test Space Population")]),e._v(" "),a("p",[e._v("The user needs to populate a test space before running a load generator. The structure generator generates a random test space structure and the data generator creates the files and directories of the test space in Hadoop distributed file system.")]),e._v(" "),a("h3",{attrs:{id:"structure-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-generator"}},[e._v("#")]),e._v(" Structure Generator")]),e._v(" "),a("p",[e._v("This tool generates a random namespace structure with the following constraints:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The number of subdirectories that a directory can have is a random number in [minWidth, maxWidth].")])]),e._v(" "),a("li",[a("p",[e._v("The maximum depth of each subdirectory is a random number [2*maxDepth/3, maxDepth].")])]),e._v(" "),a("li",[a("p",[e._v("Files are randomly placed in leaf directories. The size of each file follows Gaussian distribution with an average size of 1 block and a standard deviation of 1.")])])]),e._v(" "),a("p",[e._v("The generated namespace structure is described by two files in the output directory. Each line of the first file contains the full name of a leaf directory. Each line of the second file contains the full name of a file and its size, separated by a blank.")]),e._v(" "),a("p",[e._v("The synopsis of the command is:")]),e._v(" "),a("pre",[a("code",[e._v("    yarn jar <HADOOP_HOME>/share/hadoop/mapreduce/hadoop-mapreduce-client-jobclient-<hadoop-version>.jar NNstructureGenerator [options]\n")])]),e._v(" "),a("p",[e._v("Options include:")]),e._v(" "),a("ul",[a("li",[e._v("-maxDepth maxDepth")])]),e._v(" "),a("p",[e._v("Maximum depth of the directory tree; default is 5.")]),e._v(" "),a("ul",[a("li",[e._v("-minWidth minWidth")])]),e._v(" "),a("p",[e._v("Minimum number of subdirectories per directories; default is 1.")]),e._v(" "),a("ul",[a("li",[e._v("-maxWidth maxWidth")])]),e._v(" "),a("p",[e._v("Maximum number of subdirectories per directories; default is 5.")]),e._v(" "),a("ul",[a("li",[e._v("-numOfFiles #OfFiles")])]),e._v(" "),a("p",[e._v("The total number of files in the test space; default is 10.")]),e._v(" "),a("ul",[a("li",[e._v("-avgFileSize avgFileSizeInBlocks")])]),e._v(" "),a("p",[e._v("Average size of blocks; default is 1.")]),e._v(" "),a("ul",[a("li",[e._v("-outDir outDir")])]),e._v(" "),a("p",[e._v("Output directory; default is the current directory.")]),e._v(" "),a("ul",[a("li",[e._v("-seed seed")])]),e._v(" "),a("p",[e._v("Random number generator seed; default is the current time.")]),e._v(" "),a("h3",{attrs:{id:"data-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-generator"}},[e._v("#")]),e._v(" Data Generator")]),e._v(" "),a("p",[e._v("This tool reads the directory structure and file structure from the input directory and creates the namespace in Hadoop distributed file system. All files are filled with byte ‘a’.")]),e._v(" "),a("p",[e._v("The synopsis of the command is:")]),e._v(" "),a("pre",[a("code",[e._v("    yarn jar <HADOOP_HOME>/share/hadoop/mapreduce/hadoop-mapreduce-client-jobclient-<hadoop-version>.jar NNdataGenerator [options]\n")])]),e._v(" "),a("p",[e._v("Options include:")]),e._v(" "),a("ul",[a("li",[e._v("-inDir inDir")])]),e._v(" "),a("p",[e._v("Input directory name where directory/file structures are stored; default is the current directory.")]),e._v(" "),a("ul",[a("li",[e._v("-root test space root")])]),e._v(" "),a("p",[e._v("The name of the root directory which the new namespace is going to be placed under; default is “/testLoadSpace”.")])])}),[],!1,null,null,null);t.default=r.exports}}]);