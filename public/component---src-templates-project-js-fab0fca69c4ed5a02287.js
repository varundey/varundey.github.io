(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{169:function(e,n,t){"use strict";t.r(n);t(182);var a=t(0),i=t.n(a),r=t(176),o=t.n(r),l=t(183),m=t.n(l),c=t(178),d=t(173),p=d.default.div.withConfig({displayName:"TextPostBody__StyledTextBody",componentId:"ca9wto-0"})(["p{line-height:1.5em;}"]),u=function(e){var n=e.children;return n?i.a.createElement(p,null,n):null},s=d.default.ul.withConfig({displayName:"ProjectLinks__StyledProjectLinksList",componentId:"sc-1qxltub-0"})(["list-style:none;font-size:1.8rem;"]),f=d.default.li.withConfig({displayName:"ProjectLinks__StyledProjectLink",componentId:"sc-1qxltub-1"})(["display:inline;line-height:1.5em;&:after{content:' | ';}&:last-child{&:after{content:'';}}"]),g=function(e){var n=e.link,t=e.repo,a=e.date,r=e.lang;return n||t?i.a.createElement(s,null,n&&i.a.createElement(f,null,i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},n.length>40?"Link":n)),a&&i.a.createElement(f,null,a),r&&i.a.createElement(f,null,r),t&&i.a.createElement(f,null,i.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Repo"))):null};t.d(n,"query",function(){return h});n.default=function(e){var n=e.data.mdx,t=n.frontmatter,a=n.code;return i.a.createElement(c.a,null,t.title&&i.a.createElement(o.a,null,i.a.createElement("title",null,"Varun Dey | ",t.title)),i.a.createElement("h1",null,t.title),i.a.createElement(g,{link:t.link,repo:t.repo,date:t.date,lang:t.lang}),i.a.createElement(u,null,i.a.createElement(m.a,null,a.body)))};var h="34465698"},174:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(4),o=t.n(r),l=t(39),m=t.n(l);t.d(n,"a",function(){return m.a});t(175),i.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},175:function(e,n,t){var a;e.exports=(a=t(177))&&a.default||a},177:function(e,n,t){"use strict";t.r(n);var a=t(9),i=t.n(a),r=t(0),o=t.n(r),l=t(4),m=t.n(l),c=t(58),d=t(2),p=function(e){var n=e.location,t=d.default.getResourcesForPathnameSync(n.pathname);return o.a.createElement(c.a,i()({location:n,pageResources:t},t.json))};p.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},n.default=p},178:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(173),o=t(174),l=t(176),m=t.n(l),c=(t(179),r.default.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-10pvdn5-0"})(["margin-bottom:1em;@media (min-width:520px){margin-bottom:2em;}"])),d=r.default.ul.withConfig({displayName:"Nav__StyledList",componentId:"sc-10pvdn5-1"})(["padding:0;display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:0;@media (min-width:520px){display:block;}"]),p=r.default.li.withConfig({displayName:"Nav__ListElement",componentId:"sc-10pvdn5-2"})(["display:inline-block;padding:0.5em;text-align:center;font-size:1.8rem;@media (min-width:300px){font-size:2.2rem;padding-right:0;padding-left:0;}@media (min-width:350px){font-size:2.2rem;}@media (min-width:520px){padding:0;margin-right:2rem;font-size:2.4rem;}&:after{content:' ';display:none;white-space:pre;@media (min-width:520px){display:inline-block;}}"]),u=Object(r.default)(o.a).attrs({activeClassName:"active"}).withConfig({displayName:"Nav__NavItem",componentId:"sc-10pvdn5-3"})(["color:black;border:none;&:hover{color:blue;}&:before{content:'/';display:none;@media (min-width:520px){display:inline;}}&.","{font-weight:bold;}"],"active"),s=function(){return i.a.createElement(c,null,i.a.createElement(d,null,i.a.createElement(p,null,i.a.createElement(u,{to:"/blog/",activeClassName:"active"},"blog")),i.a.createElement(p,null,i.a.createElement(u,{to:"/projects/",activeClassName:"active"},"projects")),i.a.createElement(p,null,i.a.createElement(u,{to:"/talks/",activeClassName:"active"},"talks"))))},f=function(){return i.a.createElement(m.a,null,i.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),i.a.createElement("link",{rel:"shortcut icon",type:"image/x-icon",href:"/favicon.ico"}),i.a.createElement("link",{rel:"manifest",href:"/manifest.json"}),i.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),i.a.createElement("meta",{name:"theme-color",content:"#ffffff"}))},g=t(180),h=t.n(g),y=t(181),b=t.n(y);function w(){var e=h()(["\n  ","\n\n  html, body {\n    height: 100%;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 16px;\n    font-size: 1.6rem;\n    font-family: 'Roboto Mono', monospace;\n    word-break: break-word;\n    // white-space: pre-line;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    font-family: 'Rubik', sans-serif;\n    margin: 0.5em 0;\n  }\n\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n\n  iframe {\n    margin: 0 auto;\n    display: block;\n    max-width: 100%;\n    width: 100%;\n\n    &.youtube {\n      height: 20rem;\n\n      @media (min-width: 550px) {\n        height: 34rem;\n      }\n    }\n\n  }\n\n  blockquote {\n    margin-left: 1em;\n    margin-right: 1em;\n\n    @media (min-width: 520px) {\n      margin-left: 2em;\n      margin-right: 2em;\n    }\n  }\n\n  figure {\n    margin: 0;\n  }\n\n  ul {\n    // list-style: none;\n    padding: 0;\n    list-style: square;\n  }\n\n  a {\n    text-decoration: none;\n    color: blue;\n    border-bottom: 2px solid transparent;\n\n    &:hover {\n      color: #999;\n      border-color: #999;\n    }\n\n    &.anchor {\n      border: none;\n    }\n  }\n\n\n  p {\n    line-height: 1.5em;\n    font-size: 1.8rem;\n  }\n\n  twitterwidget {\n    margin: 0 auto;\n  }\n\n  .sidebar {\n    margin-left: auto;\n    margin-right: auto;\n\n    @media (min-width: 520px) {\n      width: calc(50% + 1em);\n      clear: both;\n      float: right;\n      padding-left: 1em;\n    }\n\n    &.left {\n      float: left;\n      padding-left: 0;\n      padding-right: 1em;\n    }\n\n    img {\n      width: 100%;\n    }\n  }\n\n  .blog-full,\n  .blog-inset {\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n\n    img {\n      width: 100%;\n    }\n  }\n\n  .blog-inset {\n    @media (min-width: 520px) {\n      margin-top: 2em;\n      margin-bottom: 2em;\n      width: 80%;\n    }\n  }\n\n  .blog-section {\n    font-size: 1.8rem;\n\n    &:not(:first-child) {\n      margin-top: 2em;\n    }\n\n    h1, h2, h3, h4, h5, h6 {\n      margin-bottom: 0.5em;\n\n      & + p {\n        margin-top: 0.5em;\n      }\n    }\n\n    ul {\n      margin-left: 1.5em;\n\n      @media (min-width: 520px) {\n        margin-left: 2.5em;\n      }\n    }\n\n    li {\n      margin: 0.5em 0;\n      line-height: 1.5em;\n\n      p {\n        margin: 0;\n      }\n    }\n  }\n\n  :not(pre) > code[class*=\"language-\"], pre[class*=\"language-\"] {\n    font-size: 0.9em;\n  }\n\n  .gatsby-highlight-code-line {\n    background-color: #feb;\n    display: block;\n    margin-right: -1em;\n    margin-left: -1em;\n    padding-right: 1em;\n    padding-left: 0.75em;\n    border-left: 0.25em solid #f99;\n  }\n\n  .gatsby-resp-image-wrapper {\n    @media (min-width: 520px) {\n      margin-top: 2em;\n      margin-bottom: 2em;\n      width: 80%;\n    }\n  }\n"]);return w=function(){return e},e}var v=Object(r.createGlobalStyle)(w(),b.a),E=r.default.main.withConfig({displayName:"Layout__Main",componentId:"p46nka-0"})(["max-width:83rem;padding:1em 1em 2em;margin:0 auto;@media (min-width:350px){padding:1em 1.5em 4em;}@media (min-width:520px){padding:2rem 2em 6rem;}"]),x=r.default.header.withConfig({displayName:"Layout__StyledHeader",componentId:"p46nka-1"})([""]),k=r.default.h1.withConfig({displayName:"Layout__StyledTitle",componentId:"p46nka-2"})(["margin:0.3em 0;@media (min-width:350px){margin:0.5em 0 0.2em;}@media (min-width:520px){margin:0.667em 0;}"]),_=Object(r.default)(o.a).withConfig({displayName:"Layout__TitleLink",componentId:"p46nka-3"})(["text-transform:lowercase;color:#000;text-decoration:none;border:none;&:hover{color:#0000ff;}"]);n.a=function(e){var n=e.children;return i.a.createElement(E,null,i.a.createElement(v,null),i.a.createElement(f,null),i.a.createElement(m.a,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700",rel:"stylesheet"}),i.a.createElement("title",null,"Varun Dey"),i.a.createElement("meta",{property:"og:title",content:"Varun Dey"}),i.a.createElement("meta",{property:"og:description",content:"Personal Portfolio of Varun Dey"}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:url",content:"https://varundey.me"}),i.a.createElement("meta",{property:"og:image",content:"https://varundey.me/social-meta.png"}),i.a.createElement("meta",{property:"og:image:secure_url",content:"https://varundey.me/social-meta.png"}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:title",content:"Varun Dey"}),i.a.createElement("meta",{name:"twitter:description",content:"Personal Portfolio of Varun Dey"}),i.a.createElement("meta",{name:"twitter:image",content:"https://varundey.me/social-meta.png"}),i.a.createElement("meta",{name:"twitter:creator",content:"@AsDeyQuote"})),i.a.createElement(x,null,i.a.createElement(k,null,i.a.createElement(_,{to:"/"},"Varun Dey")),i.a.createElement(s,null)),n)}},182:function(e,n,t){"use strict";t(188)("link",function(e){return function(n){return e(this,"a","href",n)}})},183:function(e,n,t){var a=t(184);t(60),t(41),t(29),t(186);var i=t(9),r=t(40),o=t(0),l=t(30).MDXTag,m=t(61).withMDXComponents,c=t(63).withMDXScope;e.exports=c(m(function(e){var n=e.scope,t=void 0===n?{}:n,m=e.components,c=void 0===m?{}:m,d=e.children,p=r(e,["scope","components","children"]);if(!d)return null;var u=i({React:o,MDXTag:l},t),s=Object.keys(u),f=s.map(function(e){return u[e]}),g=a(Function,["_fn"].concat(s,[""+d])).apply(void 0,[{}].concat(f));return o.createElement(g,i({components:c},p))}))},184:function(e,n,t){var a=t(185);function i(n,t,r){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?e.exports=i=function(e,n,t){var i=[null];i.push.apply(i,n);var r=new(Function.bind.apply(e,i));return t&&a(r,t.prototype),r}:e.exports=i=Reflect.construct,i.apply(null,arguments)}e.exports=i},185:function(e,n){function t(n,a){return e.exports=t=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},t(n,a)}e.exports=t},186:function(e,n,t){var a=t(28),i=t(27);t(187)("keys",function(){return function(e){return i(a(e))}})},187:function(e,n,t){var a=t(10),i=t(21),r=t(20);e.exports=function(e,n){var t=(i.Object||{})[e]||Object[e],o={};o[e]=n(t),a(a.S+a.F*r(function(){t(1)}),"Object",o)}},188:function(e,n,t){var a=t(10),i=t(20),r=t(22),o=/"/g,l=function(e,n,t,a){var i=String(r(e)),l="<"+n;return""!==t&&(l+=" "+t+'="'+String(a).replace(o,"&quot;")+'"'),l+">"+i+"</"+n+">"};e.exports=function(e,n){var t={};t[e]=n(l),a(a.P+a.F*i(function(){var n=""[e]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",t)}}}]);
//# sourceMappingURL=component---src-templates-project-js-fab0fca69c4ed5a02287.js.map