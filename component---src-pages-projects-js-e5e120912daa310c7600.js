(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"16l3":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("7oih"),o=n("vOnD"),l=(n("tUrg"),n("Wbzz"),o.default.ul.withConfig({displayName:"ProjectListing__StyledProjectListing",componentId:"sc-1t6jgis-0"})(["list-style:none;margin-top:0.5em;"])),c=o.default.li.withConfig({displayName:"ProjectListing__StyledProjectItem",componentId:"sc-1t6jgis-1"})(["font-size:1.8rem;margin-bottom:0.5em;line-height:1.5em;"]),s=o.default.span.withConfig({displayName:"ProjectListing__StyledLinkWrap",componentId:"sc-1t6jgis-2"})(["display:block;@media (min-width:550px){display:inline;}"]),d=o.default.a.withConfig({displayName:"ProjectListing__StyledProjectLink",componentId:"sc-1t6jgis-3"})([""]),u=o.default.span.withConfig({displayName:"ProjectListing__StyledLedeSpan",componentId:"sc-1t6jgis-4"})([""]),m=function(e){var t=e.projects.map((function(e){return a.a.createElement(c,{key:e.node.fields.slug},a.a.createElement(s,null,a.a.createElement(d,{href:e.node.frontmatter.link,target:"_blank"},e.node.frontmatter.title),": "),e.node.frontmatter.lede&&a.a.createElement(u,null,e.node.frontmatter.lede))}));return a.a.createElement(l,null,t)},f=o.default.section.withConfig({displayName:"ProjectListingSection__StyledListingSection",componentId:"sc-1xo5rhh-0"})(["margin-bottom:2em;"]),g=o.default.h2.withConfig({displayName:"ProjectListingSection__StyledSectionHeading",componentId:"sc-1xo5rhh-1"})(["margin-bottom:0;"]),p=function(e){var t=e.projects,n=e.sectionTitle;return t.length>0?a.a.createElement(f,null,a.a.createElement(g,null,n),a.a.createElement(m,{projects:t})):null};n.d(t,"query",(function(){return j}));var h=function(e){try{var t=e.data.allMdx?e.data.allMdx.edges:[];return a.a.createElement("div",null,a.a.createElement("h1",null,"Projects"),a.a.createElement(p,{projects:t}))}catch(n){return console.log(n),a.a.createElement("h2",null,"Unable to find any projects.")}},j=(t.default=function(e){return a.a.createElement(r.a,null,a.a.createElement(h,e))},"956998698")},OGtf:function(e,t,n){var i=n("XKFU"),a=n("eeVq"),r=n("vhPU"),o=/"/g,l=function(e,t,n,i){var a=String(r(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-projects-js-e5e120912daa310c7600.js.map