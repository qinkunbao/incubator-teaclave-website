(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{424:function(e,t,n){"use strict";n.r(t);var s=n(27),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"acquiring-trusted-timestamp-from-intel-me-in-sgx-enclave"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#acquiring-trusted-timestamp-from-intel-me-in-sgx-enclave"}},[e._v("#")]),e._v(" Acquiring Trusted timestamp from Intel ME in SGX enclave")]),e._v(" "),n("p",[e._v("Intel provides Trusted Platform Service via Intel Management Engine. Part of the Intel SGX features depend on the trusted platform service, including the trusted timestamp service. We implemented "),n("code",[e._v("sgx_tservice::SgxTime")]),e._v(" for this feature. To use it in Linux, the prerequisites are:")]),e._v(" "),n("ol",[n("li",[n("code",[e._v("/dev/mei0")]),e._v(" must exist.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/intel/dynamic-application-loader-host-interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dynamic Application Loader (DAL) Host Interface (aka JHI)")]),e._v(" installed.")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://software.intel.com/en-us/sgx-sdk/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("iclsClient")]),e._v(" installed.")])]),e._v(" "),n("p",[e._v("The Ubuntu linux kernel would initiate Intel ME device during boot. Almost every Intel platform has Intel ME, but it may not be initiated properly. For "),n("a",{attrs:{href:"https://github.com/ayeks/SGX-hardware/issues/24",target:"_blank",rel:"noopener noreferrer"}},[e._v("example")]),e._v(", a server of SuperServer 5019S-MR with v2.0b BIOS + v4.0.3.96 SPS could be initiated properly, while the other server with the same mother board and same BIOS version but v4.1.3.22 SPS couldn't.")]),e._v(" "),n("p",[e._v("The JHI service usually runs as a daemon service process. Its "),n("a",{attrs:{href:"https://github.com/intel/dynamic-application-loader-host-interface/blob/master/readme.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("readme")]),e._v(" is short and easy to read.")]),e._v(" "),n("p",[e._v("The iclsClient could be downloaded from the "),n("a",{attrs:{href:"https://software.intel.com/en-us/sgx-sdk/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel SGX's website")]),e._v(". Tozd's "),n("a",{attrs:{href:"https://github.com/tozd/docker-sgx",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-sgx")]),e._v(" provides a sample Dockerfile including the setup of iclsClient.")]),e._v(" "),n("p",[e._v("One important thing is that the Intel SGX PSW has to be installed "),n("strong",[e._v("after")]),e._v(" the above three prerequisites has been satisfied. During the first time of PSW installation, the installer would try to do the provisioning for this platform, and this takes about one minute.")]),e._v(" "),n("p",[e._v("We provide "),n("a",{attrs:{href:"../samplecode/sgxtime"}},[e._v("sgxtime")]),e._v(" code sample for demonstrating how to acquire trusted timestamp from Intel ME.")]),e._v(" "),n("h2",{attrs:{id:"run-in-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-in-docker"}},[e._v("#")]),e._v(" Run in docker")]),e._v(" "),n("p",[e._v("The dockerfile we provide contains an optional setup of icls. Due to the limitation of iclsClient, you need to acquire the installer from Intel and follow the instruction in "),n("a",{attrs:{href:"../docker/Dockerfile"}},[e._v("Dockerfile")]),e._v(".")]),e._v(" "),n("p",[e._v("After downloaded the icls installer, please uncomment the icls related lines in Dockerfile and build the docker image by yourself.")]),e._v(" "),n("p",[e._v("To run sgxtime in this docker image, first launch it using the following command:")]),e._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ docker run -ti -v /path/to/sdk:/root/sgx \\\n             --device /dev/isgx \\\n             --device /dev/mei0 \\\n             rust-sgx-docker    # This name is identified during docker build\nroot@913e6a00c8d8:~#\n")])])]),n("p",[e._v("Then start the "),n("code",[e._v("jhid")]),e._v(" and "),n("code",[e._v("aesm_service")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("root@913e6a00c8d8:~# jhid -d\nroot@913e6a00c8d8:~# jhi[16]: --\x3e jhi start\njhi[16]: <-- jhi start\n\nroot@913e6a00c8d8:~# /opt/intel/sgxpsw/aesm/aesm_service\nroot@913e6a00c8d8:~# aesm_service[18]: [ADMIN]White List update requested\naesm_service[18]: The server sock is 0x55d3d2893940\njhi[16]: JHI service release prints are enabled\n\njhi[16]: Applet repository dir path: /var/lib/intel/dal/applet_repository\njhi[16]: Applets dir path: /var/lib/intel/dal/applets\naesm_service[18]: [ADMIN]White list update request successful for Version: 25\n\nroot@913e6a00c8d8:~#\n")])])]),n("p",[e._v("Then build the code sample")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("root@913e6a00c8d8:~# cd sgx/samplecode/sgxtime/\nroot@913e6a00c8d8:~/sgx/samplecode/sgxtime# XARGO_SGX=1 make\nmake -C ./enclave/\nmake[1]: Entering directory '/root/sgx/samplecode/sgxtime/enclave'\ncargo build --release\n    Updating registry `https://github.com/rust-lang/crates.io-index`\n.........\n</EnclaveConfiguration>\ntcs_num 1, tcs_max_num 1, tcs_min_pool 1\nThe required memory is 2437120B.\nSucceed.\nSIGN =>  bin/enclave.signed.so\n")])])]),n("p",[e._v("Then run it. The first time would probably fail, but it only fails once.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("root@913e6a00c8d8:~/sgx/samplecode/sgxtime/bin# ./app\n[+] Home dir is /root\n[-] Open token file /root/enclave.token error! Will create one.\n[+] Saved updated launch token!\n[+] Init Enclave Successful 2!\naesm_service[18]: [ADMIN]Platform Services initializing\naesm_service[18]: [ADMIN]EPID Provisioning initiated\naesm_service[18]: [ADMIN]EPID Provisioning successful\naesm_service[18]: PCH EPID RL retrieval failure\nCannot create PSE session\nErr with SGX_ERROR_AE_SESSION_INVALID\nclose PSE session done\nHello world\n[+] sgx_time_sample success...\nroot@913e6a00c8d8:~/sgx/samplecode/sgxtime/bin# ./app\n[+] Home dir is /root\n[+] Open token file success!\n[+] Token file valid!\n[+] Init Enclave Successful 2!\naesm_service[18]: [ADMIN]Platform Services initializing\naesm_service[18]: [ADMIN]Platform Services initialized successfully\nCreate PSE session done\nOk with SgxTime { timestamp: 1420259903, source_nonce: [17, 101, 46, 174, 115, 133, 196, 251, 170, 218, 3, 21, 81, 92, 144, 241, 66, 38, 230, 186, 251, 193, 41, 246, 148, 131, 111, 126, 191, 105, 17, 33] }\nclose PSE session done\nHello world\n[+] sgx_time_sample success...\nroot@913e6a00c8d8:~/sgx/samplecode/sgxtime/bin# ./app\n[+] Home dir is /root\n[+] Open token file success!\n[+] Token file valid!\n[+] Init Enclave Successful 2!\nCreate PSE session done\nOk with SgxTime { timestamp: 1420259905, source_nonce: [17, 101, 46, 174, 115, 133, 196, 251, 170, 218, 3, 21, 81, 92, 144, 241, 66, 38, 230, 186, 251, 193, 41, 246, 148, 131, 111, 126, 191, 105, 17, 33] }\nclose PSE session done\nHello world\n[+] sgx_time_sample success...\n")])])]),n("h2",{attrs:{id:"run-without-docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-without-docker"}},[e._v("#")]),e._v(" Run without docker")]),e._v(" "),n("p",[e._v("Follow the instruction of "),n("a",{attrs:{href:"https://github.com/intel/dynamic-application-loader-host-interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("JHI")]),e._v(" first. Be sure to run "),n("code",[e._v("systemctl enable jhi")]),e._v(" to enable the service and then start it.")]),e._v(" "),n("p",[e._v("Install iclsClient following Intel's setup "),n("a",{attrs:{href:"https://download.01.org/intel-sgx/linux-2.0/docs/Intel_SGX_Installation_Guide_Linux_2.0_Open_Source.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("instruction")]),e._v(". "),n("code",[e._v("sudo ldconfig")]),e._v(" may probably be needed after the installation.")]),e._v(" "),n("p",[e._v("Next, uninstall the current PSW (if installed) and reinstall it.")]),e._v(" "),n("p",[e._v("Now, "),n("code",[e._v("sgxtime")]),e._v(" should work.")])])}),[],!1,null,null,null);t.default=r.exports}}]);