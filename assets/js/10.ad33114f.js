(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{390:function(t,e,a){"use strict";a.r(e);a(100);var n=a(348),o=a(347),i=a(346),s=a(349),r=a(186),c=a.n(r),u=a(354),h={name:"Layout",components:{Home:n.a,Page:i.a,Sidebar:s.a,Navbar:o.a},data:function(){return{isSidebarOpen:!1,paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages},shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},sidebarItems:function(){return[]},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!0},t]}},created:function(){this.paginationComponent=this.getPaginationComponent()},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))},getPaginationComponent:function(){return u.a},resolvePostDate:function(t){return c()(t).format(this.$themeConfig.dateFormat||"MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},l=a(27),d=Object(l.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),a("main",{staticClass:"page"},[t._t("top"),t._v(" "),a("div",{staticClass:"theme-default-content",attrs:{id:"base-list-layout"}},[a("h1",[t._v("Blog")]),t._v(" "),t._l(t.pages,(function(e){return a("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[a("h3",[a("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))]),t._v(" · "+t._s(t.resolvePostDate(e.frontmatter.date)))],1)])}))],2),t._v(" "),t._t("bottom")],2)],1)}),[],!1,null,null,null);e.default=d.exports}}]);