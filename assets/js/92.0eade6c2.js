(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{480:function(e,t,n){"use strict";n.r(t);var a=n(27),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"data-center-attestation-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#data-center-attestation-service"}},[e._v("#")]),e._v(" Data Center Attestation Service")]),e._v(" "),n("p",[e._v("This directory includes a reference implementation of data center attestation\nservice using\n"),n("a",{attrs:{href:"https://software.intel.com/en-us/blogs/2019/05/21/intel-sgx-datacenter-attestation-primitives",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel SGX Data Center Attestation Primitives"),n("OutboundLink")],1),e._v(" (DCAP),\nwhich allows third-parties to create their own attestation infrastructure for\nthe datacenter and cloud. Compared to Intel Attestation Service (IAS), DCAP\nAttestation Service is for environment where internet services is not accessible\nand entities who are unwilling to outsource trust decisions to third-parties\n(like Intel's IAS).")]),e._v(" "),n("p",[e._v("By default, Intel Attestation Service (IAS) will be used for attestation in\nTeaclave. To use DCAP instead of IAS, you have to first build Teaclave with DCAP\nenabled (by appending "),n("code",[e._v("-DDCAP=ON")]),e._v(" option to "),n("code",[e._v("cmake")]),e._v(") and deploy in\ninfrastructure with DCAP supported.")]),e._v(" "),n("p",[e._v("The Intel's "),n("a",{attrs:{href:"https://download.01.org/intel-sgx/sgx-dcap/1.3.1/linux/docs/Intel_SGX_DCAP_Linux_SW_Installation_Guide.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("DCAP Installation Guide"),n("OutboundLink")],1),e._v("\ncontains instructions to install essential dependencies for developers. Also,\nyou need to prepare environment in your infrastructure before deploying a\nDCAP-enabled application.")])])}),[],!1,null,null,null);t.default=i.exports}}]);