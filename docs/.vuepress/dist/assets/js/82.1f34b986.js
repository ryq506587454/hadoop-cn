(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{240:function(e,t,n){"use strict";n.r(t);var a=n(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"transparent-encryption-in-hdfs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transparent-encryption-in-hdfs"}},[e._v("#")]),e._v(" Transparent Encryption in HDFS")]),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("HDFS implements transparent, end-to-end encryption. Once configured, data read from and written to special HDFS directories is transparently encrypted and decrypted without requiring changes to user application code. This encryption is also end-to-end, which means the data can only be encrypted and decrypted by the client. HDFS never stores or has access to unencrypted data or unencrypted data encryption keys. This satisfies two typical requirements for encryption: at-rest encryption (meaning data on persistent media, such as a disk) as well as in-transit encryption (e.g. when data is travelling over the network).")]),e._v(" "),n("h2",{attrs:{id:"background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),n("p",[e._v("Encryption can be done at different layers in a traditional data management software/hardware stack. Choosing to encrypt at a given layer comes with different advantages and disadvantages.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Application-level encryption. This is the most secure and most flexible approach. The application has ultimate control over what is encrypted and can precisely reflect the requirements of the user. However, writing applications to do this is hard. This is also not an option for customers of existing applications that do not support encryption.")])]),e._v(" "),n("li",[n("p",[e._v("Database-level encryption. Similar to application-level encryption in terms of its properties. Most database vendors offer some form of encryption. However, there can be performance issues. One example is that indexes cannot be encrypted.")])]),e._v(" "),n("li",[n("p",[e._v("Filesystem-level encryption. This option offers high performance, application transparency, and is typically easy to deploy. However, it is unable to model some application-level policies. For instance, multi-tenant applications might want to encrypt based on the end user. A database might want different encryption settings for each column stored within a single file.")])]),e._v(" "),n("li",[n("p",[e._v("Disk-level encryption. Easy to deploy and high performance, but also quite inflexible. Only really protects against physical theft.")])])]),e._v(" "),n("p",[e._v("HDFS-level encryption fits between database-level and filesystem-level encryption in this stack. This has a lot of positive effects. HDFS encryption is able to provide good performance and existing Hadoop applications are able to run transparently on encrypted data. HDFS also has more context than traditional filesystems when it comes to making policy decisions.")]),e._v(" "),n("p",[e._v("HDFS-level encryption also prevents attacks at the filesystem-level and below (so-called “OS-level attacks”). The operating system and disk only interact with encrypted bytes, since the data is already encrypted by HDFS.")]),e._v(" "),n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use Cases")]),e._v(" "),n("p",[e._v("Data encryption is required by a number of different government, financial, and regulatory entities. For example, the health-care industry has HIPAA regulations, the card payment industry has PCI DSS regulations, and the US government has FISMA regulations. Having transparent encryption built into HDFS makes it easier for organizations to comply with these regulations.")]),e._v(" "),n("p",[e._v("Encryption can also be performed at the application-level, but by integrating it into HDFS, existing applications can operate on encrypted data without changes. This integrated architecture implies stronger encrypted file semantics and better coordination with other HDFS functions.")]),e._v(" "),n("h2",{attrs:{id:"architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),n("h3",{attrs:{id:"overview-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview-2"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("For transparent encryption, we introduce a new abstraction to HDFS: the encryption zone. An encryption zone is a special directory whose contents will be transparently encrypted upon write and transparently decrypted upon read. Each encryption zone is associated with a single encryption zone key which is specified when the zone is created. Each file within an encryption zone has its own unique data encryption key (DEK). DEKs are never handled directly by HDFS. Instead, HDFS only ever handles an encrypted data encryption key (EDEK). Clients decrypt an EDEK, and then use the subsequent DEK to read and write data. HDFS datanodes simply see a stream of encrypted bytes.")]),e._v(" "),n("p",[e._v("A very important use case of encryption is to “switch it on” and ensure all files across the entire filesystem are encrypted. To support this strong guarantee without losing the flexibility of using different encryption zone keys in different parts of the filesystem, HDFS allows nested encryption zones. After an encryption zone is created (e.g. on the root directory /), a user can create more encryption zones on its descendant directories (e.g. /home/alice) with different keys. The EDEK of a file will generated using the encryption zone key from the closest ancestor encryption zone.")]),e._v(" "),n("p",[e._v("A new cluster service is required to manage encryption keys: the Hadoop Key Management Server (KMS). In the context of HDFS encryption, the KMS performs three basic responsibilities:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Providing access to stored encryption zone keys")])]),e._v(" "),n("li",[n("p",[e._v("Generating new encrypted data encryption keys for storage on the NameNode")])]),e._v(" "),n("li",[n("p",[e._v("Decrypting encrypted data encryption keys for use by HDFS clients")])])]),e._v(" "),n("p",[e._v("The KMS will be described in more detail below.")]),e._v(" "),n("h3",{attrs:{id:"accessing-data-within-an-encryption-zone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accessing-data-within-an-encryption-zone"}},[e._v("#")]),e._v(" Accessing data within an encryption zone")]),e._v(" "),n("p",[e._v("When creating a new file in an encryption zone, the NameNode asks the KMS to generate a new EDEK encrypted with the encryption zone’s key. The EDEK is then stored persistently as part of the file’s metadata on the NameNode.")]),e._v(" "),n("p",[e._v("When reading a file within an encryption zone, the NameNode provides the client with the file’s EDEK and the encryption zone key version used to encrypt the EDEK. The client then asks the KMS to decrypt the EDEK, which involves checking that the client has permission to access the encryption zone key version. Assuming that is successful, the client uses the DEK to decrypt the file’s contents.")]),e._v(" "),n("p",[e._v("All of the above steps for the read and write path happen automatically through interactions between the DFSClient, the NameNode, and the KMS.")]),e._v(" "),n("p",[e._v("Access to encrypted file data and metadata is controlled by normal HDFS filesystem permissions. This means that if HDFS is compromised (for example, by gaining unauthorized access to an HDFS superuser account), a malicious user only gains access to ciphertext and encrypted keys. However, since access to encryption zone keys is controlled by a separate set of permissions on the KMS and key store, this does not pose a security threat.")]),e._v(" "),n("h3",{attrs:{id:"key-management-server-keyprovider-edeks"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#key-management-server-keyprovider-edeks"}},[e._v("#")]),e._v(" Key Management Server, KeyProvider, EDEKs")]),e._v(" "),n("p",[e._v("The KMS is a proxy that interfaces with a backing key store on behalf of HDFS daemons and clients. Both the backing key store and the KMS implement the Hadoop KeyProvider API. See the "),n("router-link",{attrs:{to:"/docs/hadoop-kms/index.html"}},[e._v("KMS documentation")]),e._v(" for more information.")],1),e._v(" "),n("p",[e._v("In the KeyProvider API, each encryption key has a unique key name. Because keys can be rolled, a key can have multiple key versions, where each key version has its own key material (the actual secret bytes used during encryption and decryption). An encryption key can be fetched by either its key name, returning the latest version of the key, or by a specific key version.")]),e._v(" "),n("p",[e._v("The KMS implements additional functionality which enables creation and decryption of encrypted encryption keys (EEKs). Creation and decryption of EEKs happens entirely on the KMS. Importantly, the client requesting creation or decryption of an EEK never handles the EEK’s encryption key. To create a new EEK, the KMS generates a new random key, encrypts it with the specified key, and returns the EEK to the client. To decrypt an EEK, the KMS checks that the user has access to the encryption key, uses it to decrypt the EEK, and returns the decrypted encryption key.")]),e._v(" "),n("p",[e._v("In the context of HDFS encryption, EEKs are encrypted data encryption keys (EDEKs), where a data encryption key (DEK) is what is used to encrypt and decrypt file data. Typically, the key store is configured to only allow end users access to the keys used to encrypt DEKs. This means that EDEKs can be safely stored and handled by HDFS, since the HDFS user will not have access to unencrypted encryption keys.")]),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("p",[e._v("A necessary prerequisite is an instance of the KMS, as well as a backing key store for the KMS. See the "),n("router-link",{attrs:{to:"/docs/hadoop-kms/index.html"}},[e._v("KMS documentation")]),e._v(" for more information.")],1),e._v(" "),n("p",[e._v("Once a KMS has been set up and the NameNode and HDFS clients have been correctly configured, an admin can use the hadoop key and hdfs crypto command-line tools to create encryption keys and set up new encryption zones. Existing data can be encrypted by copying it into the new encryption zones using tools like distcp.")]),e._v(" "),n("h3",{attrs:{id:"configuring-the-cluster-keyprovider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-cluster-keyprovider"}},[e._v("#")]),e._v(" Configuring the cluster KeyProvider")]),e._v(" "),n("h4",{attrs:{id:"hadoop-security-key-provider-path"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-security-key-provider-path"}},[e._v("#")]),e._v(" hadoop.security.key.provider.path")]),e._v(" "),n("p",[e._v("The KeyProvider to use when interacting with encryption keys used when reading and writing to an encryption zone. HDFS clients will use the provider path returned from Namenode via getServerDefaults. If namenode doesn’t support returning key provider uri then client’s conf will be used.")]),e._v(" "),n("h3",{attrs:{id:"selecting-an-encryption-algorithm-and-codec"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#selecting-an-encryption-algorithm-and-codec"}},[e._v("#")]),e._v(" Selecting an encryption algorithm and codec")]),e._v(" "),n("h4",{attrs:{id:"hadoop-security-crypto-codec-classes-exampleciphersuite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-security-crypto-codec-classes-exampleciphersuite"}},[e._v("#")]),e._v(" hadoop.security.crypto.codec.classes.EXAMPLECIPHERSUITE")]),e._v(" "),n("p",[e._v("The prefix for a given crypto codec, contains a comma-separated list of implementation classes for a given crypto codec (eg EXAMPLECIPHERSUITE). The first implementation will be used if available, others are fallbacks.")]),e._v(" "),n("h4",{attrs:{id:"hadoop-security-crypto-codec-classes-aes-ctr-nopadding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-security-crypto-codec-classes-aes-ctr-nopadding"}},[e._v("#")]),e._v(" hadoop.security.crypto.codec.classes.aes.ctr.nopadding")]),e._v(" "),n("p",[e._v("Default: org.apache.hadoop.crypto.OpensslAesCtrCryptoCodec, org.apache.hadoop.crypto.JceAesCtrCryptoCodec")]),e._v(" "),n("p",[e._v("Comma-separated list of crypto codec implementations for AES/CTR/NoPadding. The first implementation will be used if available, others are fallbacks.")]),e._v(" "),n("h4",{attrs:{id:"hadoop-security-crypto-cipher-suite"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-security-crypto-cipher-suite"}},[e._v("#")]),e._v(" hadoop.security.crypto.cipher.suite")]),e._v(" "),n("p",[e._v("Default: AES/CTR/NoPadding")]),e._v(" "),n("p",[e._v("Cipher suite for crypto codec.")]),e._v(" "),n("h4",{attrs:{id:"hadoop-security-crypto-jce-provider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-security-crypto-jce-provider"}},[e._v("#")]),e._v(" hadoop.security.crypto.jce.provider")]),e._v(" "),n("p",[e._v("Default: None")]),e._v(" "),n("p",[e._v("The JCE provider name used in CryptoCodec.")]),e._v(" "),n("h4",{attrs:{id:"hadoop-security-crypto-buffer-size"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hadoop-security-crypto-buffer-size"}},[e._v("#")]),e._v(" hadoop.security.crypto.buffer.size")]),e._v(" "),n("p",[e._v("Default: 8192")]),e._v(" "),n("p",[e._v("The buffer size used by CryptoInputStream and CryptoOutputStream.")]),e._v(" "),n("h3",{attrs:{id:"namenode-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#namenode-configuration"}},[e._v("#")]),e._v(" Namenode configuration")]),e._v(" "),n("h4",{attrs:{id:"dfs-namenode-list-encryption-zones-num-responses"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dfs-namenode-list-encryption-zones-num-responses"}},[e._v("#")]),e._v(" dfs.namenode.list.encryption.zones.num.responses")]),e._v(" "),n("p",[e._v("Default: 100")]),e._v(" "),n("p",[e._v("When listing encryption zones, the maximum number of zones that will be returned in a batch. Fetching the list incrementally in batches improves namenode performance.")]),e._v(" "),n("h2",{attrs:{id:"crypto-command-line-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crypto-command-line-interface"}},[e._v("#")]),e._v(" crypto command-line interface")]),e._v(" "),n("h3",{attrs:{id:"createzone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#createzone"}},[e._v("#")]),e._v(" createZone")]),e._v(" "),n("p",[e._v("Usage: [-createZone -keyName "),n("keyName",[e._v(" -path "),n("path",[e._v("]")])])],1),e._v(" "),n("p",[e._v("Create a new encryption zone.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("path")])]),e._v(" "),n("tr",[n("td",[e._v("keyName")])])])]),e._v(" "),n("h3",{attrs:{id:"listzones"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#listzones"}},[e._v("#")]),e._v(" listZones")]),e._v(" "),n("p",[e._v("Usage: [-listZones]")]),e._v(" "),n("p",[e._v("List all encryption zones. Requires superuser permissions.")]),e._v(" "),n("h3",{attrs:{id:"provisiontrash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#provisiontrash"}},[e._v("#")]),e._v(" provisionTrash")]),e._v(" "),n("p",[e._v("Usage: [-provisionTrash -path "),n("path",[e._v("]")])]),e._v(" "),n("p",[e._v("Provision a trash directory for an encryption zone.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("path")])])])]),e._v(" "),n("h3",{attrs:{id:"getfileencryptioninfo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getfileencryptioninfo"}},[e._v("#")]),e._v(" getFileEncryptionInfo")]),e._v(" "),n("p",[e._v("Usage: [-getFileEncryptionInfo -path "),n("path",[e._v("]")])]),e._v(" "),n("p",[e._v("Get encryption information from a file. This can be used to find out whether a file is being encrypted, and the key name / key version used to encrypt it.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("path")])])])]),e._v(" "),n("h3",{attrs:{id:"reencryptzone"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reencryptzone"}},[e._v("#")]),e._v(" reencryptZone")]),e._v(" "),n("p",[e._v("Usage: [-reencryptZone "),n("action",[e._v(" -path "),n("zone",[e._v("]")])],1)],1),e._v(" "),n("p",[e._v("Re-encrypts an encryption zone, by iterating through the encryption zone, and calling the KeyProvider’s reencryptEncryptedKeys interface to batch-re-encrypt all files’ EDEKs with the latest version encryption zone key in the key provider. Requires superuser permissions.")]),e._v(" "),n("p",[e._v("Note that re-encryption does not apply to snapshots, due to snapshots’ immutable nature.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("action")])]),e._v(" "),n("tr",[n("td",[e._v("path")])])])]),e._v(" "),n("p",[e._v("Re-encryption is a NameNode-only operation in HDFS, so could potentially put intensive load to the NameNode. The following configurations can be changed to control the stress on the NameNode, depending on the acceptable throughput impact to the cluster.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("dfs.namenode.reencrypt.batch.size")])]),e._v(" "),n("tr",[n("td",[e._v("dfs.namenode.reencrypt.throttle.limit.handler.ratio")])]),e._v(" "),n("tr",[n("td",[e._v("dfs.namenode.reencrypt.throttle.limit.updater.ratio")])])])]),e._v(" "),n("h3",{attrs:{id:"listreencryptionstatus"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#listreencryptionstatus"}},[e._v("#")]),e._v(" listReencryptionStatus")]),e._v(" "),n("p",[e._v("Usage: [-listReencryptionStatus]")]),e._v(" "),n("p",[e._v("List re-encryption information for all encryption zones. Requires superuser permissions.")]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example usage")]),e._v(" "),n("p",[e._v("These instructions assume that you are running as the normal user or HDFS superuser as is appropriate. Use sudo as needed for your environment.")]),e._v(" "),n("pre",[n("code",[e._v("# As the normal user, create a new encryption key\nhadoop key create mykey\n\n# As the super user, create a new empty directory and make it an encryption zone\nhadoop fs -mkdir /zone\nhdfs crypto -createZone -keyName mykey -path /zone\n\n# chown it to the normal user\nhadoop fs -chown myuser:myuser /zone\n\n# As the normal user, put a file in, read it out\nhadoop fs -put helloWorld /zone\nhadoop fs -cat /zone/helloWorld\n\n# As the normal user, get encryption information from the file\nhdfs crypto -getFileEncryptionInfo -path /zone/helloWorld\n# console output: {cipherSuite: {name: AES/CTR/NoPadding, algorithmBlockSize: 16}, cryptoProtocolVersion: CryptoProtocolVersion{description='Encryption zones', version=1, unknownValue=null}, edek: 2010d301afbd43b58f10737ce4e93b39, iv: ade2293db2bab1a2e337f91361304cb3, keyName: mykey, ezKeyVersionName: mykey@0}\n")])]),e._v(" "),n("h2",{attrs:{id:"distcp-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#distcp-considerations"}},[e._v("#")]),e._v(" Distcp considerations")]),e._v(" "),n("h3",{attrs:{id:"running-as-the-superuser"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-as-the-superuser"}},[e._v("#")]),e._v(" Running as the superuser")]),e._v(" "),n("p",[e._v("One common usecase for distcp is to replicate data between clusters for backup and disaster recovery purposes. This is typically performed by the cluster administrator, who is an HDFS superuser.")]),e._v(" "),n("p",[e._v("To enable this same workflow when using HDFS encryption, we introduced a new virtual path prefix, /.reserved/raw/, that gives superusers direct access to the underlying block data in the filesystem. This allows superusers to distcp data without needing having access to encryption keys, and also avoids the overhead of decrypting and re-encrypting data. It also means the source and destination data will be byte-for-byte identical, which would not be true if the data was being re-encrypted with a new EDEK.")]),e._v(" "),n("p",[e._v("When using /.reserved/raw to distcp encrypted data, it’s important to preserve extended attributes with the "),n("router-link",{attrs:{to:"/docs/hadoop-distcp/DistCp.html#Command_Line_Options"}},[e._v("-px")]),e._v(" flag. This is because encrypted file attributes (such as the EDEK) are exposed through extended attributes within /.reserved/raw, and must be preserved to be able to decrypt the file. This means that if the distcp is initiated at or above the encryption zone root, it will automatically create an encryption zone at the destination if it does not already exist. However, it’s still recommended that the admin first create identical encryption zones on the destination cluster to avoid any potential mishaps.")],1),e._v(" "),n("h3",{attrs:{id:"copying-into-encrypted-locations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#copying-into-encrypted-locations"}},[e._v("#")]),e._v(" Copying into encrypted locations")]),e._v(" "),n("p",[e._v("By default, distcp compares checksums provided by the filesystem to verify that the data was successfully copied to the destination. When copying from unencrypted or encrypted location into an encrypted location, the filesystem checksums will not match since the underlying block data is different because a new EDEK will be used to encrypt at destination. In this case, specify the "),n("router-link",{attrs:{to:"/docs/hadoop-distcp/DistCp.html#Command_Line_Options"}},[e._v("-skipcrccheck")]),e._v(" and "),n("router-link",{attrs:{to:"/docs/hadoop-distcp/DistCp.html#Command_Line_Options"}},[e._v("-update")]),e._v(" distcp flags to avoid verifying checksums.")],1),e._v(" "),n("h2",{attrs:{id:"rename-and-trash-considerations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rename-and-trash-considerations"}},[e._v("#")]),e._v(" Rename and Trash considerations")]),e._v(" "),n("p",[e._v("HDFS restricts file and directory renames across encryption zone boundaries. This includes renaming an encrypted file / directory into an unencrypted directory (e.g., hdfs dfs mv /zone/encryptedFile /home/bob), renaming an unencrypted file or directory into an encryption zone (e.g., hdfs dfs mv /home/bob/unEncryptedFile /zone), and renaming between two different encryption zones (e.g., hdfs dfs mv /home/alice/zone1/foo /home/alice/zone2). In these examples, /zone, /home/alice/zone1, and /home/alice/zone2 are encryption zones, while /home/bob is not. A rename is only allowed if the source and destination paths are in the same encryption zone, or both paths are unencrypted (not in any encryption zone).")]),e._v(" "),n("p",[e._v("This restriction enhances security and eases system management significantly. All file EDEKs under an encryption zone are encrypted with the encryption zone key. Therefore, if the encryption zone key is compromised, it is important to identify all vulnerable files and re-encrypt them. This is fundamentally difficult if a file initially created in an encryption zone can be renamed to an arbitrary location in the filesystem.")]),e._v(" "),n("p",[e._v("To comply with the above rule, each encryption zone has its own .Trash directory under the “zone directory”. E.g., after hdfs dfs rm /zone/encryptedFile, encryptedFile will be moved to /zone/.Trash, instead of the .Trash directory under the user’s home directory. When the entire encryption zone is deleted, the “zone directory” will be moved to the .Trash directory under the user’s home directory.")]),e._v(" "),n("p",[e._v("If the encryption zone is the root directory (e.g., / directory), the trash path of root directory is /.Trash, not the .Trash directory under the user’s home directory, and the behavior of renaming sub-directories or sub-files in root directory will keep consistent with the behavior in a general encryption zone, such as /zone which is mentioned at the top of this section.")]),e._v(" "),n("p",[e._v("The crypto command before Hadoop 2.8.0 does not provision the .Trash directory automatically. If an encryption zone is created before Hadoop 2.8.0, and then the cluster is upgraded to Hadoop 2.8.0 or above, the trash directory can be provisioned using -provisionTrash option (e.g., hdfs crypto -provisionTrash -path /zone).")]),e._v(" "),n("h2",{attrs:{id:"attack-vectors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#attack-vectors"}},[e._v("#")]),e._v(" Attack vectors")]),e._v(" "),n("h3",{attrs:{id:"hardware-access-exploits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-access-exploits"}},[e._v("#")]),e._v(" Hardware access exploits")]),e._v(" "),n("p",[e._v("These exploits assume that attacker has gained physical access to hard drives from cluster machines, i.e. datanodes and namenodes.")]),e._v(" "),n("ol",[n("li",[e._v("Access to swap files of processes containing data encryption keys.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, this does not expose cleartext, as it also requires access to encrypted block files.\n\n* This can be mitigated by disabling swap, using encrypted swap, or using mlock to prevent keys from being swapped out.\n")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Access to encrypted block files.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, this does not expose cleartext, as it also requires access to DEKs.\n")])]),e._v(" "),n("h3",{attrs:{id:"root-access-exploits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#root-access-exploits"}},[e._v("#")]),e._v(" Root access exploits")]),e._v(" "),n("p",[e._v("These exploits assume that attacker has gained root shell access to cluster machines, i.e. datanodes and namenodes. Many of these exploits cannot be addressed in HDFS, since a malicious root user has access to the in-memory state of processes holding encryption keys and cleartext. For these exploits, the only mitigation technique is carefully restricting and monitoring root shell access.")]),e._v(" "),n("ol",[n("li",[e._v("Access to encrypted block files.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, this does not expose cleartext, as it also requires access to encryption keys.\n")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Dump memory of client processes to obtain DEKs, delegation tokens, cleartext.")])]),e._v(" "),n("pre",[n("code",[e._v("* No mitigation.\n")])]),e._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Recording network traffic to sniff encryption keys and encrypted data in transit.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, insufficient to read cleartext without the EDEK encryption key.\n")])]),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Dump memory of datanode process to obtain encrypted block data.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, insufficient to read cleartext without the DEK.\n")])]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[e._v("Dump memory of namenode process to obtain encrypted data encryption keys.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, insufficient to read cleartext without the EDEK’s encryption key and encrypted block files.\n")])]),e._v(" "),n("h3",{attrs:{id:"hdfs-admin-exploits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hdfs-admin-exploits"}},[e._v("#")]),e._v(" HDFS admin exploits")]),e._v(" "),n("p",[e._v("These exploits assume that the attacker has compromised HDFS, but does not have root or hdfs user shell access.")]),e._v(" "),n("ol",[n("li",[e._v("Access to encrypted block files.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, insufficient to read cleartext without the EDEK and EDEK encryption key.\n")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Access to encryption zone and encrypted file metadata (including encrypted data encryption keys), via -fetchImage.")])]),e._v(" "),n("pre",[n("code",[e._v("* By itself, insufficient to read cleartext without EDEK encryption keys.\n")])]),e._v(" "),n("h3",{attrs:{id:"rogue-user-exploits"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rogue-user-exploits"}},[e._v("#")]),e._v(" Rogue user exploits")]),e._v(" "),n("p",[e._v("A rogue user can collect keys of files they have access to, and use them later to decrypt the encrypted data of those files. As the user had access to those files, they already had access to the file contents. This can be mitigated through periodic key rolling policies. The reencryptZone command is usually required after key rolling, to make sure the EDEKs on existing files use the new version key.")]),e._v(" "),n("p",[e._v("Manual steps to a complete key rolling and re-encryption are listed below. These instructions assume that you are running as the key admin or HDFS superuser as is appropriate.")]),e._v(" "),n("pre",[n("code",[e._v("# As the key admin, roll the key to a new version\nhadoop key roll exposedKey\n\n# As the super user, re-encrypt the encryption zone. Possibly list zones first.\nhdfs crypto -listZones\nhdfs crypto -reencryptZone -start -path /zone\n\n# As the super user, periodically check the status of re-encryption\nhdfs crypto -listReencryptionStatus\n\n# As the super user, get encryption information from the file and double check it's encryption key version\nhdfs crypto -getFileEncryptionInfo -path /zone/helloWorld\n# console output: {cipherSuite: {name: AES/CTR/NoPadding, algorithmBlockSize: 16}, cryptoProtocolVersion: CryptoProtocolVersion{description='Encryption zones', version=2, unknownValue=null}, edek: 2010d301afbd43b58f10737ce4e93b39, iv: ade2293db2bab1a2e337f91361304cb3, keyName: exposedKey, ezKeyVersionName: exposedKey@1}\n")])])])}),[],!1,null,null,null);t.default=r.exports}}]);