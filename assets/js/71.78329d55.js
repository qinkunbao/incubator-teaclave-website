(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{457:function(e,a,t){"use strict";t.r(a);var r=t(27),v=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"change-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-log"}},[e._v("#")]),e._v(" Change Log")]),e._v(" "),t("p",[e._v("All notable changes to this project will be documented in this file.")]),e._v(" "),t("p",[e._v("The format is based on "),t("a",{attrs:{href:"http://keepachangelog.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Keep a Changelog")]),e._v("\nand this project adheres to "),t("a",{attrs:{href:"http://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Semantic Versioning")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"unreleased"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unreleased"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.9.0...HEAD",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unreleased")])]),e._v(" "),t("h2",{attrs:{id:"v0-9-0-2020-09-03"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-0-2020-09-03"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.8.2...v0.9.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.9.0")]),e._v(" - 2020-09-03")]),e._v(" "),t("h3",{attrs:{id:"fixed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("drain_filter")]),e._v(" now removes and yields items that do match the predicate,\nrather than items that don't.  This is a "),t("strong",[e._v("breaking change")]),e._v(" to match the\nbehavior of the "),t("code",[e._v("drain_filter")]),e._v(" methods in "),t("code",[e._v("std")]),e._v(". (#187)")])]),e._v(" "),t("h3",{attrs:{id:"added"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("replace_entry_with")]),e._v(" to "),t("code",[e._v("OccupiedEntry")]),e._v(", and "),t("code",[e._v("and_replace_entry_with")]),e._v(" to "),t("code",[e._v("Entry")]),e._v(". (#190)")]),e._v(" "),t("li",[e._v("Implemented "),t("code",[e._v("FusedIterator")]),e._v(" and "),t("code",[e._v("size_hint")]),e._v(" for "),t("code",[e._v("DrainFilter")]),e._v(". (#188)")])]),e._v(" "),t("h3",{attrs:{id:"changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("The minimum Rust version has been bumped to 1.36 (due to "),t("code",[e._v("crossbeam")]),e._v(" dependency). (#193)")]),e._v(" "),t("li",[e._v("Updated "),t("code",[e._v("ahash")]),e._v(" dependency to 0.4. (#198)")]),e._v(" "),t("li",[t("code",[e._v("HashMap::with_hasher")]),e._v(" and "),t("code",[e._v("HashSet::with_hasher")]),e._v(" are now "),t("code",[e._v("const fn")]),e._v(". (#195)")]),e._v(" "),t("li",[e._v("Removed "),t("code",[e._v("T: Hash + Eq")]),e._v(" and "),t("code",[e._v("S: BuildHasher")]),e._v(" bounds on "),t("code",[e._v("HashSet::new")]),e._v(",\n"),t("code",[e._v("with_capacity")]),e._v(", "),t("code",[e._v("with_hasher")]),e._v(", and "),t("code",[e._v("with_capacity_and_hasher")]),e._v(".  (#185)")])]),e._v(" "),t("h2",{attrs:{id:"v0-8-2-2020-08-08"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-2-2020-08-08"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.8.1...v0.8.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.8.2")]),e._v(" - 2020-08-08")]),e._v(" "),t("h3",{attrs:{id:"changed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-2"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Avoid closures to improve compile times. (#183)")]),e._v(" "),t("li",[e._v("Do not iterate to drop if empty. (#182)")])]),e._v(" "),t("h2",{attrs:{id:"v0-8-1-2020-07-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-1-2020-07-16"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.8.0...v0.8.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.8.1")]),e._v(" - 2020-07-16")]),e._v(" "),t("h3",{attrs:{id:"added-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-2"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("erase")]),e._v(" and "),t("code",[e._v("remove")]),e._v(" to "),t("code",[e._v("RawTable")]),e._v(". (#171)")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("try_with_capacity")]),e._v(" to "),t("code",[e._v("RawTable")]),e._v(". (#174)")]),e._v(" "),t("li",[e._v("Added methods that allow re-using a "),t("code",[e._v("RawIter")]),e._v(" for "),t("code",[e._v("RawDrain")]),e._v(",\n"),t("code",[e._v("RawIntoIter")]),e._v(", and "),t("code",[e._v("RawParIter")]),e._v(". (#175)")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("reflect_remove")]),e._v(" and "),t("code",[e._v("reflect_insert")]),e._v(" to "),t("code",[e._v("RawIter")]),e._v(". (#175)")]),e._v(" "),t("li",[e._v("Added a "),t("code",[e._v("drain_filter")]),e._v(" function to "),t("code",[e._v("HashSet")]),e._v(". (#179)")])]),e._v(" "),t("h3",{attrs:{id:"changed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-3"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Deprecated "),t("code",[e._v("RawTable::erase_no_drop")]),e._v(" in favor of "),t("code",[e._v("erase")]),e._v(" and "),t("code",[e._v("remove")]),e._v(". (#176)")]),e._v(" "),t("li",[t("code",[e._v("insert_no_grow")]),e._v(" is now exposed under the "),t("code",[e._v('"raw"')]),e._v(" feature. (#180)")])]),e._v(" "),t("h2",{attrs:{id:"v0-8-0-2020-06-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-0-2020-06-18"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.7.2...v0.8.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.8.0")]),e._v(" - 2020-06-18")]),e._v(" "),t("h3",{attrs:{id:"fixed-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-2"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Marked "),t("code",[e._v("RawTable::par_iter")]),e._v(" as "),t("code",[e._v("unsafe")]),e._v(". (#157)")])]),e._v(" "),t("h3",{attrs:{id:"changed-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-4"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Reduced the size of "),t("code",[e._v("HashMap")]),e._v(". (#159)")]),e._v(" "),t("li",[e._v("No longer create tables with a capacity of 1 element. (#162)")]),e._v(" "),t("li",[e._v("Removed "),t("code",[e._v("K: Eq + Hash")]),e._v(" bounds on "),t("code",[e._v("retain")]),e._v(". (#163)")]),e._v(" "),t("li",[e._v("Pulled in "),t("code",[e._v("HashMap")]),e._v(" changes from rust-lang/rust (#164):\n"),t("ul",[t("li",[t("code",[e._v("extend_one")]),e._v(" support on nightly.")]),e._v(" "),t("li",[t("code",[e._v("CollectionAllocErr")]),e._v(" renamed to "),t("code",[e._v("TryReserveError")]),e._v(".")]),e._v(" "),t("li",[e._v("Added "),t("code",[e._v("HashSet::get_or_insert_owned")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("Default")]),e._v(" for "),t("code",[e._v("HashSet")]),e._v(" no longer requires "),t("code",[e._v("T: Eq + Hash")]),e._v(" and "),t("code",[e._v("S: BuildHasher")]),e._v(".")])])])]),e._v(" "),t("h2",{attrs:{id:"v0-7-2-2020-04-27"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-2-2020-04-27"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.7.1...v0.7.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.7.2")]),e._v(" - 2020-04-27")]),e._v(" "),t("h3",{attrs:{id:"added-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-3"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("or_insert_with_key")]),e._v(" to "),t("code",[e._v("Entry")]),e._v(". (#152)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-3"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Partially reverted "),t("code",[e._v("Clone")]),e._v(" optimization which was unsound. (#154)")])]),e._v(" "),t("h3",{attrs:{id:"changed-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-5"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Disabled use of "),t("code",[e._v("const-random")]),e._v(" by default, which prevented reproducible builds. (#155)")]),e._v(" "),t("li",[e._v("Optimized "),t("code",[e._v("repeat")]),e._v(" function. (#150)")]),e._v(" "),t("li",[e._v("Use "),t("code",[e._v("NonNull")]),e._v(" for buckets, which improves codegen for iterators. (#148)")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-1-2020-03-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-1-2020-03-16"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.7.0...v0.7.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.7.1")]),e._v(" - 2020-03-16")]),e._v(" "),t("h3",{attrs:{id:"added-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-4"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("HashMap::get_key_value_mut")]),e._v(". (#145)")])]),e._v(" "),t("h3",{attrs:{id:"changed-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-6"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Optimized "),t("code",[e._v("Clone")]),e._v(" implementation. (#146)")])]),e._v(" "),t("h2",{attrs:{id:"v0-7-0-2020-01-31"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-7-0-2020-01-31"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.6.3...v0.7.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.7.0")]),e._v(" - 2020-01-31")]),e._v(" "),t("h3",{attrs:{id:"added-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-5"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added a "),t("code",[e._v("drain_filter")]),e._v(" function to "),t("code",[e._v("HashMap")]),e._v(". (#135)")])]),e._v(" "),t("h3",{attrs:{id:"changed-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-7"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Updated "),t("code",[e._v("ahash")]),e._v(" dependency to 0.3. (#141)")]),e._v(" "),t("li",[e._v("Optimized set union and intersection. (#130)")]),e._v(" "),t("li",[t("code",[e._v("raw_entry")]),e._v(" can now be used without requiring "),t("code",[e._v("S: BuildHasher")]),e._v(". (#123)")]),e._v(" "),t("li",[t("code",[e._v("RawTable::bucket_index")]),e._v(" can now be used under the "),t("code",[e._v("raw")]),e._v(" feature. (#128)")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-3-2019-10-31"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-3-2019-10-31"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.6.2...v0.6.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.6.3")]),e._v(" - 2019-10-31")]),e._v(" "),t("h3",{attrs:{id:"added-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-6"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added an "),t("code",[e._v("ahash-compile-time-rng")]),e._v(" feature (enabled by default) which allows disabling the\n"),t("code",[e._v("compile-time-rng")]),e._v(" feature in "),t("code",[e._v("ahash")]),e._v(" to work around a Cargo bug. (#125)")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-2-2019-10-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-2-2019-10-23"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.6.1...v0.6.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.6.2")]),e._v(" - 2019-10-23")]),e._v(" "),t("h3",{attrs:{id:"added-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-7"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added an "),t("code",[e._v("inline-more")]),e._v(" feature (enabled by default) which allows choosing a tradeoff between\nruntime performance and compilation time. (#119)")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-1-2019-10-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-1-2019-10-04"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.6.0...v0.6.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.6.1")]),e._v(" - 2019-10-04")]),e._v(" "),t("h3",{attrs:{id:"added-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-8"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("Entry::insert")]),e._v(" and "),t("code",[e._v("RawEntryMut::insert")]),e._v(". (#118)")])]),e._v(" "),t("h3",{attrs:{id:"changed-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-8"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Group::static_empty")]),e._v(" was changed from a "),t("code",[e._v("const")]),e._v(" to a "),t("code",[e._v("static")]),e._v(" (#116).")])]),e._v(" "),t("h2",{attrs:{id:"v0-6-0-2019-08-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-6-0-2019-08-13"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.5.1...v0.6.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.6.0")]),e._v(" - 2019-08-13")]),e._v(" "),t("h3",{attrs:{id:"fixed-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-4"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed AHash accidentally depending on "),t("code",[e._v("std")]),e._v(". (#110)")])]),e._v(" "),t("h3",{attrs:{id:"changed-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-9"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("The minimum Rust version has been bumped to 1.32 (due to "),t("code",[e._v("rand")]),e._v(" dependency).")])]),e._v(" "),t("h2",{attrs:{id:"v0-5-1-2019-08-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-5-1-2019-08-04"}},[e._v("#")]),e._v(" "),t("s",[t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.5.0...v0.5.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.5.1")]),e._v(" - 2019-08-04")])]),e._v(" "),t("p",[e._v("This release was "),t("em",[e._v("yanked")]),e._v(" due to a breaking change for users of "),t("code",[e._v("no-default-features")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"added-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-9"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("The experimental and unsafe "),t("code",[e._v("RawTable")]),e._v(' API is available under the "raw" feature. (#108)')]),e._v(" "),t("li",[e._v("Added entry-like methods for "),t("code",[e._v("HashSet")]),e._v(". (#98)")])]),e._v(" "),t("h3",{attrs:{id:"changed-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-10"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Changed the default hasher from FxHash to AHash. (#97)")]),e._v(" "),t("li",[t("code",[e._v("hashbrown")]),e._v(" is now fully "),t("code",[e._v("no_std")]),e._v(" on recent Rust versions (1.36+). (#96)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-5"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("We now avoid growing the table during insertions when it wasn't necessary. (#106)")]),e._v(" "),t("li",[t("code",[e._v("RawOccupiedEntryMut")]),e._v(" now properly implements "),t("code",[e._v("Send")]),e._v(" and "),t("code",[e._v("Sync")]),e._v(". (#100)")]),e._v(" "),t("li",[e._v("Relaxed "),t("code",[e._v("lazy_static")]),e._v(" version. (#92)")])]),e._v(" "),t("h2",{attrs:{id:"v0-5-0-2019-06-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-5-0-2019-06-12"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.4.0...v0.5.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.5.0")]),e._v(" - 2019-06-12")]),e._v(" "),t("h3",{attrs:{id:"fixed-6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-6"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Resize with a more conservative amount of space after deletions. (#86)")])]),e._v(" "),t("h3",{attrs:{id:"changed-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-11"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Exposed the Layout of the failed allocation in CollectionAllocErr::AllocErr. (#89)")])]),e._v(" "),t("h2",{attrs:{id:"v0-4-0-2019-05-30"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-4-0-2019-05-30"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.3.1...v0.4.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.4.0")]),e._v(" - 2019-05-30")]),e._v(" "),t("h3",{attrs:{id:"fixed-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-7"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed "),t("code",[e._v("Send")]),e._v(" trait bounds on "),t("code",[e._v("IterMut")]),e._v(" not matching the libstd one. (#82)")])]),e._v(" "),t("h2",{attrs:{id:"v0-3-1-2019-05-30"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-1-2019-05-30"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.3.0...v0.3.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.3.1")]),e._v(" - 2019-05-30")]),e._v(" "),t("h3",{attrs:{id:"fixed-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-8"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed incorrect use of slice in unsafe code. (#80)")])]),e._v(" "),t("h2",{attrs:{id:"v0-3-0-2019-04-23"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-0-2019-04-23"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.2.2...v0.3.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.3.0")]),e._v(" - 2019-04-23")]),e._v(" "),t("h3",{attrs:{id:"changed-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-12"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Changed shrink_to to not panic if min_capacity < capacity. (#67)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-9"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Worked around emscripten bug emscripten-core/emscripten-fastcomp#258. (#66)")])]),e._v(" "),t("h2",{attrs:{id:"v0-2-2-2019-04-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-2-2-2019-04-16"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.2.1...v0.2.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.2.2")]),e._v(" - 2019-04-16")]),e._v(" "),t("h3",{attrs:{id:"fixed-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-10"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Inlined non-nightly lowest_set_bit_nonzero. (#64)")]),e._v(" "),t("li",[e._v("Fixed build on latest nightly. (#65)")])]),e._v(" "),t("h2",{attrs:{id:"v0-2-1-2019-04-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-2-1-2019-04-14"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.2.0...v0.2.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.2.1")]),e._v(" - 2019-04-14")]),e._v(" "),t("h3",{attrs:{id:"changed-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-13"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("Use for_each in map Extend and FromIterator. (#58)")]),e._v(" "),t("li",[e._v("Improved worst-case performance of HashSet.is_subset. (#61)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-11"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Removed incorrect debug_assert. (#60)")])]),e._v(" "),t("h2",{attrs:{id:"v0-2-0-2019-03-31"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-2-0-2019-03-31"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.8...v0.2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.2.0")]),e._v(" - 2019-03-31")]),e._v(" "),t("h3",{attrs:{id:"changed-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changed-14"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),t("ul",[t("li",[e._v("The code has been updated to Rust 2018 edition. This means that the minimum\nRust version has been bumped to 1.31 (2018 edition).")])]),e._v(" "),t("h3",{attrs:{id:"added-10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-10"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Added "),t("code",[e._v("insert_with_hasher")]),e._v(" to the raw_entry API to allow "),t("code",[e._v("K: !(Hash + Eq)")]),e._v(". (#54)")]),e._v(" "),t("li",[e._v("Added support for using hashbrown as the hash table implementation in libstd. (#46)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-12"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed cargo build with minimal-versions. (#45)")]),e._v(" "),t("li",[e._v("Fixed "),t("code",[e._v("#[may_dangle]")]),e._v(" attributes to match the libstd "),t("code",[e._v("HashMap")]),e._v(". (#46)")]),e._v(" "),t("li",[e._v("ZST keys and values are now handled properly. (#46)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-8-2019-01-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-8-2019-01-14"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.7...v0.1.8",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.8")]),e._v(" - 2019-01-14")]),e._v(" "),t("h3",{attrs:{id:"added-11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-11"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Rayon parallel iterator support (#37)")]),e._v(" "),t("li",[t("code",[e._v("raw_entry")]),e._v(" support (#31)")]),e._v(" "),t("li",[t("code",[e._v("#[may_dangle]")]),e._v(" on nightly (#31)")]),e._v(" "),t("li",[t("code",[e._v("try_reserve")]),e._v(" support (#31)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-13"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed variance on "),t("code",[e._v("IterMut")]),e._v(". (#31)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-7-2018-12-05"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-7-2018-12-05"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.6...v0.1.7",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.7")]),e._v(" - 2018-12-05")]),e._v(" "),t("h3",{attrs:{id:"fixed-14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-14"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed non-SSE version of convert_special_to_empty_and_full_to_deleted. (#32)")]),e._v(" "),t("li",[e._v("Fixed overflow in rehash_in_place. (#33)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-6-2018-11-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-6-2018-11-17"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.5...v0.1.6",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.6")]),e._v(" - 2018-11-17")]),e._v(" "),t("h3",{attrs:{id:"fixed-15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-15"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed compile error on nightly. (#29)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-5-2018-11-08"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-5-2018-11-08"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.4...v0.1.5",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.5")]),e._v(" - 2018-11-08")]),e._v(" "),t("h3",{attrs:{id:"fixed-16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-16"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed subtraction overflow in generic::Group::match_byte. (#28)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-4-2018-11-04"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-4-2018-11-04"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.3...v0.1.4",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.4")]),e._v(" - 2018-11-04")]),e._v(" "),t("h3",{attrs:{id:"fixed-17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-17"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Fixed a bug in the "),t("code",[e._v("erase_no_drop")]),e._v(" implementation. (#26)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-3-2018-11-01"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-3-2018-11-01"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.2...v0.1.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.3")]),e._v(" - 2018-11-01")]),e._v(" "),t("h3",{attrs:{id:"added-12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#added-12"}},[e._v("#")]),e._v(" Added")]),e._v(" "),t("ul",[t("li",[e._v("Serde support. (#14)")])]),e._v(" "),t("h3",{attrs:{id:"fixed-18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-18"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[e._v("Make the compiler inline functions more aggressively. (#20)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-2-2018-10-31"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-2-2018-10-31"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.1...v0.1.2",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.2")]),e._v(" - 2018-10-31")]),e._v(" "),t("h3",{attrs:{id:"fixed-19"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-19"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("clear")]),e._v(" segfaults when called on an empty table. (#13)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-1-2018-10-30"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-1-2018-10-30"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/rust-lang/hashbrown/compare/v0.1.0...v0.1.1",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.1")]),e._v(" - 2018-10-30")]),e._v(" "),t("h3",{attrs:{id:"fixed-20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-20"}},[e._v("#")]),e._v(" Fixed")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("erase_no_drop")]),e._v(" optimization not triggering in the SSE2 implementation. (#3)")]),e._v(" "),t("li",[e._v("Missing "),t("code",[e._v("Send")]),e._v(" and "),t("code",[e._v("Sync")]),e._v(" for hash map and iterator types. (#7)")]),e._v(" "),t("li",[e._v("Bug when inserting into a table smaller than the group width. (#5)")])]),e._v(" "),t("h2",{attrs:{id:"v0-1-0-2018-10-29"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#v0-1-0-2018-10-29"}},[e._v("#")]),e._v(" v0.1.0 - 2018-10-29")]),e._v(" "),t("ul",[t("li",[e._v("Initial release")])])])}),[],!1,null,null,null);a.default=v.exports}}]);