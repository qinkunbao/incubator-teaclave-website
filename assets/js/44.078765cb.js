(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{429:function(e,t,n){"use strict";n.r(t);var a=n(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"threat-model"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#threat-model"}},[e._v("#")]),e._v(" Threat Model")]),e._v(" "),n("p",[e._v("With its strongest security setting applied, Teaclave guarantees data\nconfidentiality even if all parties along the computation path, privileged or\nnot, are untrusted. This includes:")]),e._v(" "),n("ul",[n("li",[e._v("Internet service provider")]),e._v(" "),n("li",[e._v("Cloud provider")]),e._v(" "),n("li",[e._v("Function provider")]),e._v(" "),n("li",[e._v("Other data providers")])]),e._v(" "),n("p",[e._v("Specifically, most hardware (memory, disk, motherboard, etc.), operating system\n(both kernel and software in userland), network channels, and provider employees\nare untrusted.")]),e._v(" "),n("p",[e._v("Consider the following scenario. A small business needs to employ image\nclassification techniques in its daily production. However, the business does\nnot have the capabilities to train a high-quality machine learning model, nor\ndoes it have the hardware resources to host the machine learning\ninfrastructures. Under such circumstances, the only solution is to subscribe to\nsome cloud computing service and run the needed image classification tasks\nremotely. However, this solution requires the small business to upload its\nprivate data to the cloud, which may deeply concerns the business owner and\nhinders the deployment of such techniques.")]),e._v(" "),n("p",[e._v("With Teaclave, privacy concerns above are no more. The small business can\nsubscribe to the cloud service from company A, rent the machine learning model\nfrom company B, and use the deep learning inference engine provided by company\nC. None of these parties need to trust another, yet the computation can commence\nwith everyone's privacy respected.")]),e._v(" "),n("p",[e._v("In the settings above, the root of trust converges to the enclave manufactures\n(i.e., Intel) and its SGX-enabled CPU chips. Before the computation starts,\nTeaclave is booted as a secure SGX enclave on one of these CPUs owned by the\ncloud service provider. After that, each party can "),n("em",[e._v("remotely")]),e._v(" attest the\nauthenticity of the hardware and the integrity of Teaclave platform through\nattestation service (e.g., Intel Attestation Service). Private data are securely\nprovisioned to the Teaclave enclave only if the attestation passes. After the\nprovision, no privileged software is able to access the memory content owned by\nthe enclave from outside.")]),e._v(" "),n("p",[e._v("The remote attestation functionality implemented by Teaclave is augmented from\nthe method described by a "),n("a",{attrs:{href:"https://arxiv.org/abs/1801.05863",target:"_blank",rel:"noopener noreferrer"}},[e._v("white paper"),n("OutboundLink")],1),e._v(". In a\nnutshell, enclaves in Teaclave will establish trusted channel on attested TLS\nfor communication. The complicated structure of Teaclave requires additional\nwork for remote attestation, which is explained in details via a separate\n"),n("RouterLink",{attrs:{to:"/teaclave/docs/mutual-attestation.html"}},[e._v("documentation")]),e._v(".")],1),e._v(" "),n("p",[e._v("Side channels are out of scope for current Teaclave's implementation. While we\nacknowledge that existing enclaves may be vulnerable to various kinds of side\nchannel attacks, we will try our best to mitigate existing attacks by adopting\nsoftware hardening.")])])}),[],!1,null,null,null);t.default=o.exports}}]);