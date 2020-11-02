(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{487:function(e,t,n){"use strict";n.r(t);var a=n(27),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"write-functions-in-python"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#write-functions-in-python"}},[e._v("#")]),e._v(" Write Functions in Python")]),e._v(" "),n("p",[e._v("The Teaclave platform provides a convenient way to register a customized\nfunction written in Python, and the function is interpreted at runtime in an\nisolated trusted execution environment (i.e., Intel SGX).")]),e._v(" "),n("h2",{attrs:{id:"entrypoint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#entrypoint"}},[e._v("#")]),e._v(" Entrypoint")]),e._v(" "),n("p",[e._v("Here is an simple example of an echo function:")]),e._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("def entrypoint(argv):\n    assert argv[0] == 'message'\n    assert argv[1] is not None\n    return argv[1]\n")])])]),n("p",[e._v("The "),n("code",[e._v("entrypoint")]),e._v(' function defined above is the "entrypoint" to executing the\nfunction. It takes one argument which is a list of arguments of this echo\nfunction. The return value of the '),n("code",[e._v("entrypoint")]),e._v(" function will be passed back to\nthe client.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),n("p",[e._v("Note that the function arguments in key-value format passed from the platform\nare flattened into a list. For example, the "),n("code",[e._v('{"message": "Hello, Teaclave!"}')]),e._v("\narguments will become "),n("code",[e._v('"message"')]),e._v(" ("),n("code",[e._v("argv[0]")]),e._v(") and "),n("code",[e._v('"Hello, Teaclave!"')]),e._v("\n("),n("code",[e._v("argv[1]")]),e._v(").")])]),e._v(" "),n("h2",{attrs:{id:"modules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),n("p",[e._v("Current Python executor (i.e., MesaPy) already supports many modules of the\noriginal Python standard library such as "),n("code",[e._v("marshal")]),e._v(", "),n("code",[e._v("math")]),e._v(", "),n("code",[e._v("binascii")]),e._v(",\n"),n("code",[e._v("itertools")]),e._v(", "),n("code",[e._v("micronumpy")]),e._v(". You can find a full list of available modules in the\n"),n("a",{attrs:{href:"https://github.com/mesalock-linux/mesapy/blob/sgx/sgx/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("document of MesaPy for SGX")]),e._v(".")]),e._v(" "),n("p",[e._v("Besides these modules for general computation, you may curious about doing file\nI/O in customized Python function. We provides APIs to integrated with the\nexecutor runtime to read/write files registered along with the task. You can\neither open a file through the "),n("code",[e._v("teaclave_open")]),e._v(" function or with the "),n("code",[e._v("teaclave")]),e._v("\nmodule like this:")]),e._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# open input via built-in teaclave_open\nwith teaclave_open("input_file", "rb") as f:\n    line = f.readline()\n\n# open input via teaclave module\nfrom teaclave import open\nwith open("output_file", "wb") as f:\n    f.write("This message is from Mesapy!")\n')])])]),n("p",[e._v("Either function will give an "),n("code",[e._v("file")]),e._v(" object in Python, you can use it to read\nlines or write data. And the first argument is the key of the registered\ninput/output files.")]),e._v(" "),n("p",[e._v("You can learn more about advanced usages in the example of\n"),n("a",{attrs:{href:"https://github.com/apache/incubator-teaclave/tree/master/examples/python",target:"_blank",rel:"noopener noreferrer"}},[e._v("logistic regression in Python")]),e._v(".")])])}),[],!1,null,null,null);t.default=o.exports}}]);