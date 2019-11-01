(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{280:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"hadoop-aws-module-integration-with-amazon-web-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-aws-module-integration-with-amazon-web-services"}},[e._v("#")]),e._v(" Hadoop-AWS module: Integration with Amazon Web Services")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Apache Hadoop’s hadoop-aws module provides support for AWS integration. applications to easily use this support.")]),e._v(" "),a("p",[e._v("To include the S3A client in Apache Hadoop’s default classpath:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Make sure thatHADOOP_OPTIONAL_TOOLS in hadoop-env.sh includes hadoop-aws in its list of optional modules to add in the classpath.")])]),e._v(" "),a("li",[a("p",[e._v("For client side interaction, you can declare that relevant JARs must be loaded in your ~/.hadooprc file:")]),e._v(" "),a("p",[e._v("hadoop_add_to_classpath_tools hadoop-aws")])])]),e._v(" "),a("p",[e._v("The settings in this file does not propagate to deployed applications, but it will work for local clients such as the hadoop fs command.")]),e._v(" "),a("h2",{attrs:{id:"introducing-the-hadoop-s3a-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introducing-the-hadoop-s3a-client"}},[e._v("#")]),e._v(" Introducing the Hadoop S3A client.")]),e._v(" "),a("p",[e._v("Hadoop’s “S3A” client offers high-performance IO against Amazon S3 object store and compatible implementations.")]),e._v(" "),a("h3",{attrs:{id:"other-s3-connectors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-s3-connectors"}},[e._v("#")]),e._v(" Other S3 Connectors")]),e._v(" "),a("p",[e._v("There other Hadoop connectors to S3. Only S3A is actively maintained by the Hadoop project itself.")]),e._v(" "),a("ol",[a("li",[e._v("Apache’s Hadoop’s original s3:// client. This is no longer included in Hadoop.")]),e._v(" "),a("li",[e._v("Amazon EMR’s s3:// client. This is from the Amazon EMR team, who actively maintain it.")]),e._v(" "),a("li",[e._v("Apache’s Hadoop’s "),a("router-link",{attrs:{to:"/docs/hadoop-aws/tools/hadoop-aws/s3n.html"}},[e._v("s3n: filesystem client")]),e._v(". This connector is no longer available: users must migrate to the newer s3a: client.")],1)]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),a("p",[e._v("S3A depends upon two JARs, alongside hadoop-common and its dependencies.")]),e._v(" "),a("h3",{attrs:{id:"buffering-upload-data-on-disk-fs-s3a-fast-upload-buffer-disk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffering-upload-data-on-disk-fs-s3a-fast-upload-buffer-disk"}},[e._v("#")]),e._v(" Buffering upload data on disk fs.s3a.fast.upload.buffer=disk")]),e._v(" "),a("p",[e._v("When fs.s3a.fast.upload.buffer is set to disk, all data is buffered to local hard disks prior to upload. This minimizes the amount of memory consumed, and so eliminates heap size as the limiting factor in queued uploads —exactly as the original “direct to disk” buffering.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.s3a.fast.upload.buffer</name>\n  <value>disk</value>\n</property>\n\n<property>\n  <name>fs.s3a.buffer.dir</name>\n  <value>${hadoop.tmp.dir}/s3a</value>\n  <description>Comma separated list of directories that will be used to buffer file\n    uploads to.</description>\n</property>\n")])]),e._v(" "),a("p",[e._v("This is the default buffer mechanism. The amount of data which can be buffered is limited by the amount of available disk space.")]),e._v(" "),a("h3",{attrs:{id:"buffering-upload-data-in-bytebuffers-fs-s3a-fast-upload-buffer-bytebuffer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffering-upload-data-in-bytebuffers-fs-s3a-fast-upload-buffer-bytebuffer"}},[e._v("#")]),e._v(" Buffering upload data in ByteBuffers: fs.s3a.fast.upload.buffer=bytebuffer")]),e._v(" "),a("p",[e._v("When fs.s3a.fast.upload.buffer is set to bytebuffer, all data is buffered in “Direct” ByteBuffers prior to upload. This may be faster than buffering to disk, and, if disk space is small (for example, tiny EC2 VMs), there may not be much disk space to buffer with.")]),e._v(" "),a("p",[e._v("The ByteBuffers are created in the memory of the JVM, but not in the Java Heap itself. The amount of data which can be buffered is limited by the Java runtime, the operating system, and, for YARN applications, the amount of memory requested for each container.")]),e._v(" "),a("p",[e._v("The slower the upload bandwidth to S3, the greater the risk of running out of memory —and so the more care is needed in tuning the upload settings.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.s3a.fast.upload.buffer</name>\n  <value>bytebuffer</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"buffering-upload-data-in-byte-arrays-fs-s3a-fast-upload-buffer-array"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffering-upload-data-in-byte-arrays-fs-s3a-fast-upload-buffer-array"}},[e._v("#")]),e._v(" Buffering upload data in byte arrays: fs.s3a.fast.upload.buffer=array")]),e._v(" "),a("p",[e._v("When fs.s3a.fast.upload.buffer is set to array, all data is buffered in byte arrays in the JVM’s heap prior to upload. This may be faster than buffering to disk.")]),e._v(" "),a("p",[e._v("The amount of data which can be buffered is limited by the available size of the JVM heap heap. The slower the write bandwidth to S3, the greater the risk of heap overflows. This risk can be mitigated by tuning the upload settings.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.s3a.fast.upload.buffer</name>\n  <value>array</value>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"upload-thread-tuning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-thread-tuning"}},[e._v("#")]),e._v(" Upload Thread Tuning")]),e._v(" "),a("p",[e._v("Both the Array and Byte buffer buffer mechanisms can consume very large amounts of memory, on-heap or off-heap respectively. The disk buffer mechanism does not use much memory up, but will consume hard disk capacity.")]),e._v(" "),a("p",[e._v("If there are many output streams being written to in a single process, the amount of memory or disk used is the multiple of all stream’s active memory/disk use.")]),e._v(" "),a("p",[e._v("Careful tuning may be needed to reduce the risk of running out memory, especially if the data is buffered in memory.")]),e._v(" "),a("p",[e._v("There are a number parameters which can be tuned:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The total number of threads available in the filesystem for data uploads or any other queued filesystem operation. This is set in fs.s3a.threads.max")])]),e._v(" "),a("li",[a("p",[e._v("The number of operations which can be queued for execution:, awaiting a thread: fs.s3a.max.total.tasks")])]),e._v(" "),a("li",[a("p",[e._v("The number of blocks which a single output stream can have active, that is: being uploaded by a thread, or queued in the filesystem thread queue: fs.s3a.fast.upload.active.blocks")])]),e._v(" "),a("li",[a("p",[e._v("How long an idle thread can stay in the thread pool before it is retired: fs.s3a.threads.keepalivetime")])])]),e._v(" "),a("p",[e._v("When the maximum allowed number of active blocks of a single stream is reached, no more blocks can be uploaded from that stream until one or more of those active blocks’ uploads completes. That is: a write() call which would trigger an upload of a now full datablock, will instead block until there is capacity in the queue.")]),e._v(" "),a("p",[e._v("How does that come together?")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("As the pool of threads set in fs.s3a.threads.max is shared (and intended to be used across all threads), a larger number here can allow for more parallel operations. However, as uploads require network bandwidth, adding more threads does not guarantee speedup.")])]),e._v(" "),a("li",[a("p",[e._v("The extra queue of tasks for the thread pool (fs.s3a.max.total.tasks) covers all ongoing background S3A operations (future plans include: parallelized rename operations, asynchronous directory operations).")])]),e._v(" "),a("li",[a("p",[e._v("When using memory buffering, a small value of fs.s3a.fast.upload.active.blocks limits the amount of memory which can be consumed per stream.")])]),e._v(" "),a("li",[a("p",[e._v("When using disk buffering a larger value of fs.s3a.fast.upload.active.blocks does not consume much memory. But it may result in a large number of blocks to compete with other filesystem operations.")])])]),e._v(" "),a("p",[e._v("We recommend a low value of fs.s3a.fast.upload.active.blocks; enough to start background upload without overloading other parts of the system, then experiment to see if higher values deliver more throughput —especially from VMs running on EC2.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.s3a.fast.upload.active.blocks</name>\n  <value>4</value>\n  <description>\n    Maximum Number of blocks a single output stream can have\n    active (uploading, or queued to the central FileSystem\n    instance's pool of queued operations.\n\n    This stops a single stream overloading the shared thread pool.\n  </description>\n</property>\n\n<property>\n  <name>fs.s3a.threads.max</name>\n  <value>10</value>\n  <description>The total number of threads available in the filesystem for data\n    uploads *or any other queued filesystem operation*.</description>\n</property>\n\n<property>\n  <name>fs.s3a.max.total.tasks</name>\n  <value>5</value>\n  <description>The number of operations which can be queued for execution</description>\n</property>\n\n<property>\n  <name>fs.s3a.threads.keepalivetime</name>\n  <value>60</value>\n  <description>Number of seconds a thread can be idle before being\n    terminated.</description>\n</property>\n")])]),e._v(" "),a("h3",{attrs:{id:"cleaning-up-after-partial-upload-failures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cleaning-up-after-partial-upload-failures"}},[e._v("#")]),e._v(" Cleaning up after partial Upload Failures")]),e._v(" "),a("p",[e._v("There are two mechanisms for cleaning up after leftover multipart uploads: - Hadoop s3guard CLI commands for listing and deleting uploads by their age. Documented in the "),a("router-link",{attrs:{to:"/docs/hadoop-aws/tools/hadoop-aws/s3guard.html"}},[e._v("S3Guard")]),e._v(" section. - The configuration parameter fs.s3a.multipart.purge, covered below.")],1),e._v(" "),a("p",[e._v("If a large stream write operation is interrupted, there may be intermediate partitions uploaded to S3 —data which will be billed for.")]),e._v(" "),a("p",[e._v("These charges can be reduced by enabling fs.s3a.multipart.purge, and setting a purge time in seconds, such as 86400 seconds —24 hours. When an S3A FileSystem instance is instantiated with the purge time greater than zero, it will, on startup, delete all outstanding partition requests older than this time.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.s3a.multipart.purge</name>\n  <value>true</value>\n  <description>True if you want to purge existing multipart uploads that may not have been\n     completed/aborted correctly</description>\n</property>\n\n<property>\n  <name>fs.s3a.multipart.purge.age</name>\n  <value>86400</value>\n  <description>Minimum age in seconds of multipart uploads to purge</description>\n</property>\n")])]),e._v(" "),a("p",[e._v("If an S3A client is instantiated with fs.s3a.multipart.purge=true, it will delete all out of date uploads in the entire bucket. That is: it will affect all multipart uploads to that bucket, from all applications.")]),e._v(" "),a("p",[e._v("Leaving fs.s3a.multipart.purge to its default, false, means that the client will not make any attempt to reset or change the partition rate.")]),e._v(" "),a("p",[e._v("The best practise for using this option is to disable multipart purges in normal use of S3A, enabling only in manual/scheduled housekeeping operations.")]),e._v(" "),a("h3",{attrs:{id:"s3a-“fadvise”-input-policy-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3a-“fadvise”-input-policy-support"}},[e._v("#")]),e._v(" S3A “fadvise” input policy support")]),e._v(" "),a("p",[e._v("The S3A Filesystem client supports the notion of input policies, similar to that of the Posix fadvise() API call. This tunes the behavior of the S3A client to optimise HTTP GET requests for the different use cases.")]),e._v(" "),a("p",[e._v("See "),a("router-link",{attrs:{to:"/docs/hadoop-aws/tools/hadoop-aws/performance.html#fadvise"}},[e._v("Improving data input performance through fadvise")]),e._v(" for the details.")],1),e._v(" "),a("h2",{attrs:{id:"metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),a("p",[e._v("S3A metrics can be monitored through Hadoop’s metrics2 framework. S3A creates its own metrics system called s3a-file-system, and each instance of the client will create its own metrics source, named with a JVM-unique numerical ID.")]),e._v(" "),a("p",[e._v("As a simple example, the following can be added to hadoop-metrics2.properties to write all S3A metrics to a log file every 10 seconds:")]),e._v(" "),a("pre",[a("code",[e._v("s3a-file-system.sink.my-metrics-config.class=org.apache.hadoop.metrics2.sink.FileSink\ns3a-file-system.sink.my-metrics-config.filename=/var/log/hadoop-yarn/s3a-metrics.out\n*.period=10\n")])]),e._v(" "),a("p",[e._v("Lines in that file will be structured like the following:")]),e._v(" "),a("pre",[a("code",[e._v("1511208770680 s3aFileSystem.s3aFileSystem: Context=s3aFileSystem, s3aFileSystemId=892b02bb-7b30-4ffe-80ca-3a9935e1d96e, bucket=bucket,\nHostname=hostname-1.hadoop.apache.com, files_created=1, files_copied=2, files_copied_bytes=10000, files_deleted=5, fake_directories_deleted=3,\ndirectories_created=3, directories_deleted=0, ignored_errors=0, op_copy_from_local_file=0, op_exists=0, op_get_file_status=15, op_glob_status=0,\nop_is_directory=0, op_is_file=0, op_list_files=0, op_list_located_status=0, op_list_status=3, op_mkdirs=1, op_rename=2, object_copy_requests=0,\nobject_delete_requests=6, object_list_requests=23, object_continue_list_requests=0, object_metadata_requests=46, object_multipart_aborted=0,\nobject_put_bytes=0, object_put_requests=4, object_put_requests_completed=4, stream_write_failures=0, stream_write_block_uploads=0,\nstream_write_block_uploads_committed=0, stream_write_block_uploads_aborted=0, stream_write_total_time=0, stream_write_total_data=0,\ns3guard_metadatastore_put_path_request=10, s3guard_metadatastore_initialization=0, object_put_requests_active=0, object_put_bytes_pending=0,\nstream_write_block_uploads_active=0, stream_write_block_uploads_pending=0, stream_write_block_uploads_data_pending=0,\nS3guard_metadatastore_put_path_latencyNumOps=0, S3guard_metadatastore_put_path_latency50thPercentileLatency=0,\nS3guard_metadatastore_put_path_latency75thPercentileLatency=0, S3guard_metadatastore_put_path_latency90thPercentileLatency=0,\nS3guard_metadatastore_put_path_latency95thPercentileLatency=0, S3guard_metadatastore_put_path_latency99thPercentileLatency=0\n")])]),e._v(" "),a("p",[e._v("Depending on other configuration, metrics from other systems, contexts, etc. may also get recorded, for example the following:")]),e._v(" "),a("pre",[a("code",[e._v("1511208770680 metricssystem.MetricsSystem: Context=metricssystem, Hostname=s3a-metrics-4.gce.cloudera.com, NumActiveSources=1, NumAllSources=1,\nNumActiveSinks=1, NumAllSinks=0, Sink_fileNumOps=2, Sink_fileAvgTime=1.0, Sink_fileDropped=0, Sink_fileQsize=0, SnapshotNumOps=5,\nSnapshotAvgTime=0.0, PublishNumOps=2, PublishAvgTime=0.0, DroppedPubAll=0\n")])]),e._v(" "),a("p",[e._v("Note that low-level metrics from the AWS SDK itself are not currently included in these metrics.")]),e._v(" "),a("h2",{attrs:{id:"other-topics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-topics"}},[e._v("#")]),e._v(" Other Topics")]),e._v(" "),a("h3",{attrs:{id:"copying-data-with-distcp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copying-data-with-distcp"}},[e._v("#")]),e._v(" Copying Data with distcp")]),e._v(" "),a("p",[e._v("Hadoop’s distcp tool is often used to copy data between a Hadoop cluster and Amazon S3. See "),a("a",{attrs:{href:"https://hortonworks.github.io/hdp-aws/s3-copy-data/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Copying Data Between a Cluster and Amazon S3"),a("OutboundLink")],1),e._v(" for details on S3 copying specifically.")]),e._v(" "),a("p",[e._v("The distcp update command tries to do incremental updates of data. It is straightforward to verify when files do not match when they are of different length, but not when they are the same size.")]),e._v(" "),a("p",[e._v("Distcp addresses this by comparing file checksums on the source and destination filesystems, which it tries to do even if the filesystems have incompatible checksum algorithms.")]),e._v(" "),a("p",[e._v("The S3A connector can provide the HTTP etag header to the caller as the checksum of the uploaded file. Doing so will break distcp operations between hdfs and s3a.")]),e._v(" "),a("p",[e._v("For this reason, the etag-as-checksum feature is disabled by default.")]),e._v(" "),a("pre",[a("code",[e._v("<property>\n  <name>fs.s3a.etag.checksum.enabled</name>\n  <value>false</value>\n  <description>\n    Should calls to getFileChecksum() return the etag value of the remote\n    object.\n    WARNING: if enabled, distcp operations between HDFS and S3 will fail unless\n    -skipcrccheck is set.\n  </description>\n</property>\n")])]),e._v(" "),a("p",[e._v("If enabled, distcp between two S3 buckets can use the checksum to compare objects. Their checksums should be identical if they were either each uploaded as a single file PUT, or, if in a multipart PUT, in blocks of the same size, as configured by the value fs.s3a.multipart.size.")]),e._v(" "),a("p",[e._v("To disable checksum verification in distcp, use the -skipcrccheck option:")]),e._v(" "),a("pre",[a("code",[e._v("hadoop distcp -update -skipcrccheck -numListstatusThreads 40 /user/alice/datasets s3a://alice-backup/datasets\n")])])])}),[],!1,null,null,null);t.default=o.exports}}]);