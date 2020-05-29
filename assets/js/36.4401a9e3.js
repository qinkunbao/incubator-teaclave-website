(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{419:function(t,e,s){"use strict";s.r(e);var a=s(27),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"test-harness-and-test-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-harness-and-test-cases"}},[t._v("#")]),t._v(" Test Harness and Test Cases")]),t._v(" "),s("p",[t._v("This directory contains all tests in Teaclave including unit tests, integration\ntests, functional tests and some test fixtures.")]),t._v(" "),s("h2",{attrs:{id:"run-tests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-tests"}},[t._v("#")]),t._v(" Run Tests")]),t._v(" "),s("p",[t._v("To run all tests with our build system:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ make run-tests\n")])])]),s("p",[t._v("You can also run tests separately:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ make run-unit-tests\n$ make run-integration-tests\n$ make run-functional-tests    # this will start all services in the background automatically\n")])])]),s("h2",{attrs:{id:"test-coverage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-coverage"}},[t._v("#")]),t._v(" Test Coverage")]),t._v(" "),s("p",[t._v("To generate a coverage report for tests, you can configure cmake with\n"),s("code",[t._v("-DCOV=ON")]),t._v(". Then build the platform and run all tests. At last, you need to run\n"),s("code",[t._v("make cov")]),t._v(" to aggregate coverage results.")]),t._v(" "),s("h2",{attrs:{id:"directory-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory Structure")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("unit")]),t._v(":\nUnit tests are small and more focused, testing one module in isolation at a\ntime, and can test private interfaces. This directory contains test driver to\ntest individual units/components or private interfaces. Test cases of unit\ntests are placed along with source code.")]),t._v(" "),s("li",[s("code",[t._v("integration")]),t._v(":\nIntegration tests are entirely external to libraries, using only the public\ninterface and potentially exercising multiple modules per test. This directory\ncontains test driver and tests cases to test public interfaces in common\nlibraries.")]),t._v(" "),s("li",[s("code",[t._v("functional")]),t._v(":\nFunctional testing is a type of black-box testing. In Teaclave, the test cases\nare usually sent through RPC channel.\nThis directory contains test driver and tests cases for Teaclave services. To\nrun these tests, services need to be launched.")]),t._v(" "),s("li",[s("code",[t._v("fixtures")]),t._v(":\nTesting fixtures are some files and sample inputs/outputs for testing only.")]),t._v(" "),s("li",[s("code",[t._v("utils")]),t._v(":\nCommon utilities for test drivers.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);