(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{496:function(e,t,n){"use strict";n.r(t);var i=n(27),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"how-to-add-built-in-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-built-in-functions"}},[e._v("#")]),e._v(" How to Add Built-in Functions")]),e._v(" "),n("p",[e._v("There are several ways to execute user-defined functions in the Teaclave\nplatform. One simple way is to write Python scripts and register them as functions,\nand the scripts will be executed by the "),n("em",[e._v("MesaPy executor")]),e._v(". Another way is to add native\nfunctions as built-in functions, and they will be managed by the "),n("em",[e._v("Built-in executor")]),e._v('.\nCompared to Python scripts, native built-in functions implemented in Rust are\nmemory-safe, have better performance, support more third-party libraries and\ncan be remotely attested as well. In this document, we will guide you through\nhow to add a built-in function to Teaclave step by step with a "private join and\ncompute" example.')]),e._v(" "),n("p",[e._v("In this example, consider several banks have names and balance of their clients.\nThese banks want to compute the total balance of common clients in their private\ndata set without leaking the raw sensitive data to other parties. This is\na perfect usage scenario of the Teaclave platform, and we will provide a\nsolution by implementing a built-in function in Teaclave.")]),e._v(" "),n("h2",{attrs:{id:"implement-built-in-functions-in-rust"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#implement-built-in-functions-in-rust"}},[e._v("#")]),e._v(" Implement Built-in Functions in Rust")]),e._v(" "),n("p",[e._v("All built-in functions are implemented in the "),n("code",[e._v("teaclave_function")]),e._v(' crate and can\nbe selectively compiled using feature gates. Basically, one built-in function\nneeds two things: a name and a function implementation. Follow the convention of\nother built-in function implementations, we define our "private join and\ncompute" function like this:')]),e._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('#[derive(Default)]\npub struct PrivateJoinAndCompute;\n\nimpl PrivateJoinAndCompute {\n    pub const NAME: &\'static str = "builtin-private-join-and-compute";\n    pub fn new() -> Self {\n        Default::default()\n    }\n    pub fn run(\n        &self,\n        arguments: FunctionArguments,\n        runtime: FunctionRuntime,\n    ) -> Result<String> {\n        ...\n        Ok(summary)\n}\n')])])]),n("p",[e._v("The "),n("code",[e._v("NAME")]),e._v(" is the identifier of a function, which is used for creating tasks.\nUsually, the name of a built-in function starts with the "),n("code",[e._v("built-in")]),e._v(" prefix. In\naddition, we need to define an entry point of the function, which is the "),n("code",[e._v("run")]),e._v("\nfunction. The "),n("code",[e._v("run")]),e._v(" function can take arguments (in the "),n("code",[e._v("FunctionAruguments")]),e._v("\ntype) and runtime (in the "),n("code",[e._v("FunctionRuntime")]),e._v(" type) for interacting with external\nresources (e.g., reading/writing input/output files). Also, the "),n("code",[e._v("run")]),e._v(" function\ncan return a summary of the function execution.")]),e._v(" "),n("p",[e._v("Since the function arguments is in the JSON object format and can be easily\ndeserialized to a Rust struct with "),n("code",[e._v("serde_json")]),e._v(". Therefore, we define a struct\n"),n("code",[e._v("PrivateJoinAndComputeArguments")]),e._v(" which derive the "),n("code",[e._v("serde::Deserialize")]),e._v(" trait for\nthe conversion. Then we implement "),n("code",[e._v("TryFrom")]),e._v(" trait for the struct to convert the\n"),n("code",[e._v("FunctionArguments")]),e._v(" type to the actual "),n("code",[e._v("PrivateJoinAndComputeArguments")]),e._v(" type.")]),e._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('#[derive(serde::Deserialize)]\nstruct PrivateJoinAndComputeArguments {\n    num_user: usize, // Number of users in the multiple party computation\n}\n\nimpl TryFrom<FunctionArguments> for PrivateJoinAndComputeArguments {\n    type Error = anyhow::Error;\n\n    fn try_from(arguments: FunctionArguments) -> Result<Self, Self::Error> {\n        use anyhow::Context;\n        serde_json::from_str(&arguments.into_string()).context("Cannot deserialize arguments")\n    }\n}\n\n')])])]),n("p",[e._v("When executing the function, a "),n("code",[e._v("runtime")]),e._v(" object will be passed to the function.\nWe can read or write files with the "),n("code",[e._v("runtime")]),e._v(" with the "),n("code",[e._v("open_input")]),e._v(" and\n"),n("code",[e._v("create_output")]),e._v(" functions.")]),e._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// Read data from a file\nlet mut input_io = runtime.open_input(&input_file_name)?;\ninput_io.read_to_end(&mut data)?;\n...\n// Write data into a file\nlet mut output = runtime.create_output(&output_file_name)?;\noutput.write_all(&output_bytes)?;\n")])])]),n("h2",{attrs:{id:"register-functions-in-the-executor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#register-functions-in-the-executor"}},[e._v("#")]),e._v(" Register Functions in the Executor")]),e._v(" "),n("p",[e._v("To use the function, we need to register it to the built-in executor. Please also\nput a "),n("code",[e._v("cfg")]),e._v(" attribute to make sure developers can conditionally build functions\ninto the executor.")]),e._v(" "),n("div",{staticClass:"language-rust extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('impl TeaclaveExecutor for BuiltinFunctionExecutor {\n    fn execute(\n        &self,\n        name: String,\n        arguments: FunctionArguments,\n        _payload: String,\n        runtime: FunctionRuntime,\n    ) -> Result<String> {\n        match name.as_str() {\n            ...\n            #[cfg(feature = "builtin_private_join_and_compute")]\n            PrivateJoinAndCompute::NAME => PrivateJoinAndCompute::new().run(arguments, runtime),\n            ...\n        }\n    }\n}\n')])])]),n("h2",{attrs:{id:"invoke-functions-with-the-client-sdk"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#invoke-functions-with-the-client-sdk"}},[e._v("#")]),e._v(" Invoke Functions with the Client SDK")]),e._v(" "),n("p",[e._v("Finally, we can invoke the function with the client SDK. In our example, we use\nthe Python client SDK. Basically, this process includes registering input/output\nfiles, creating tasks, approving tasks, invoking tasks and getting execution\nresults. You can see more details in the "),n("code",[e._v("examples/python")]),e._v(" directory.")])])}),[],!1,null,null,null);t.default=a.exports}}]);