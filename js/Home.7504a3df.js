(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Home"],{1771:function(t,e,o){var a={"./Comp.svg":"86f4","./Fonts/Montserrat-Bold.ttf":"507f","./Fonts/Montserrat-Light.ttf":"a833","./Fonts/Montserrat-Regular.ttf":"28ea","./ImgApresentacao.png":"f837","./Logo.png":"bca0","./check.svg":"f222","./corcetti.svg":"56ee","./email.svg":"9055","./eu.jpeg":"8835","./gear.svg":"5cc9","./github.svg":"387e","./gitlab.svg":"3a5e","./linkedin.svg":"953d"};function n(t){var e=s(t);return o(e)}function s(t){if(!o.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=s,t.exports=n,n.id="1771"},2112:function(t,e,o){},"28ea":function(t,e,o){t.exports=o.p+"fonts/Montserrat-Regular.ee653992.ttf"},"2c97":function(t,e,o){"use strict";o("8e44")},"387e":function(t,e,o){t.exports=o.p+"img/github.cf1987b8.svg"},"3a5e":function(t,e,o){t.exports=o.p+"img/gitlab.6e354da4.svg"},4999:function(t,e,o){},"507f":function(t,e,o){t.exports=o.p+"fonts/Montserrat-Bold.ade91f47.ttf"},"56ee":function(t,e,o){t.exports=o.p+"img/corcetti.cbb8ce97.svg"},"5a33":function(t,e,o){},"5cc9":function(t,e,o){t.exports=o.p+"img/gear.36962d37.svg"},"68cd":function(t,e,o){"use strict";o("2112")},"6bca":function(t,e,o){"use strict";o("5a33")},7252:function(t,e,o){},"7d3e":function(t,e,o){},"86f4":function(t,e,o){t.exports=o.p+"img/Comp.b1c844df.svg"},8835:function(t,e,o){t.exports=o.p+"img/eu.881c061c.jpeg"},"8e44":function(t,e,o){},9055:function(t,e,o){t.exports=o.p+"img/email.f911e398.svg"},"93e2":function(t,e,o){},"953d":function(t,e,o){t.exports=o.p+"img/linkedin.a7a78280.svg"},"95cb":function(t,e,o){},"98d4":function(t,e,o){"use strict";o("4999")},"9c30":function(t,e,o){},a07c:function(t,e,o){"use strict";o("95cb")},a833:function(t,e,o){t.exports=o.p+"fonts/Montserrat-Light.409c7f79.ttf"},a9b6:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Navbar"),o("AboutMe"),o("Projects"),o("Skill",{attrs:{skills:t.mySkill}}),o("Contact"),o("Footer")],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"principal"}},[a("b-navbar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.colorNavScroll,expression:"colorNavScroll"}],class:t.scrolled?"scrolled":"",attrs:{fixed:"top",id:"navbar",toggleable:"md"}},[a("b-navbar-brand",{staticClass:"ml-lg-5",attrs:{href:"#"}},[a("b-img",{attrs:{width:"60px",id:"logo",src:o("bca0")}})],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.expanded;return[a("b-icon",e?{staticClass:"icone-toggle",attrs:{icon:"x","font-scale":"2"}}:{staticClass:"icone-toggle",attrs:{icon:"list","font-scale":"2"}})]}}])}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto mr-md-5",attrs:{id:"navbarNav"}},[a("b-nav-item",{staticClass:"mx-2 itemNav",on:{click:function(e){return t.scrollUpper("sobreMim")}}},[t._v(" Início ")]),a("b-nav-item",{staticClass:"mx-2 itemNav",on:{click:function(e){return t.scrollUpper("projetos")}}},[t._v(" Projetos ")]),a("b-nav-item",{staticClass:"mx-2 itemNav",on:{click:function(e){return t.scrollUpper("habilidades")}}},[t._v(" Habilidades ")]),a("b-nav-item",{staticClass:"mx-2 itemNav",on:{click:function(e){return t.scrollUpper("contato")}}},[t._v(" Contato ")])],1)],1)],1)],1)},r=[],c={data:function(){return{scrolled:!1}},directives:{scroll:{inserted:function(t,e){var o=function o(a){e.value(a,t)&&window.removeEventListener("scroll",o)};window.addEventListener("scroll",o)}}},methods:{colorNavScroll:function(){window.scrollY>50?this.scrolled=!0:this.scrolled=!1},scrollUpper:function(t){var e=document.getElementById(t).offsetTop,o=document.getElementById("navbar"),a=o.offsetHeight;window.scrollTo(0,e-a)}}},i=c,l=(o("d1ab"),o("6bca"),o("ad59"),o("2877")),d=Object(l["a"])(i,s,r,!1,null,"513022e7",null),u=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sobreMim"}},[a("b-container",{attrs:{fluid:""}},[a("b-row",{attrs:{id:"linha","cols-sm":"1","cols-lg":"2","align-h":"between"}},[a("b-col",{staticClass:"text-left mt-5 mt-md-0 d-flex align-items-center",attrs:{id:"colTxt"}},[a("div",{attrs:{id:"aboutMe"}},[t._v(" Sobre mim "),a("p",{attrs:{id:"text"}},[t._v(" Oi, meu nome é José Vítor Marques, sou desenvolvedor front-end pela "),a("a",{attrs:{href:"https://www.compjunior.com.br/",target:"_blank",id:"Comp"}},[t._v("Comp Junior")]),t._v(", empresa júnior da cidade de Lavras/MG. E atualmente sou graduando em Ciências da Computação, pela Universidade Federal de Lavras. Sempre fui próximo pela área de tecnologia, e desde que comecei a programar, isso se tornou uma paixão para mim. ")])])]),a("b-col",{staticClass:"d-flex justify-content-center align-items-center"},[a("b-img",{attrs:{width:"300",height:"300",rounded:"circle",id:"img",src:o("8835")}})],1)],1),a("b-row",[a("b-col",[a("b-button",{staticClass:"my-3",attrs:{variant:"outline",id:"butt"},on:{click:function(e){return t.scrollUpper("habilidades")}}},[t._v(" Meus Contatos ")])],1)],1)],1)],1)},m=[],v={name:"Home",methods:{scrollUpper:function(t){var e=document.getElementById(t).offsetTop,o=document.getElementById("navbar"),a=o.offsetHeight;window.scrollTo(0,e-a)}}},f=v,g=(o("b49d"),Object(l["a"])(f,b,m,!1,null,"1a52b46b",null)),p=g.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"projetos"}},[o("b-container",[o("b-row",[o("b-col",{attrs:{id:"titleProj"}},[t._v(" Projetos ")])],1),o("b-row",{staticClass:"my-5",attrs:{id:"linhaPrincpal","align-h":"center"}},t._l(t.cardContent,(function(t,e){return o("b-col",{key:e,staticClass:"d-flex justify-content-center mt-3 mt-lg-0"},[o("card",{attrs:{content:t,dev:t.dev}})],1)})),1)],1)],1)},k=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{attrs:{"body-class":"bodyCard",id:"myCard"}},[a("b-row",{staticClass:"mb-4 mt-1"},[a("b-col",[a("b-img",{attrs:{width:"100",height:"100",id:"logo",src:o("1771")("./"+t.content.logo)}})],1)],1),a("b-row",{staticClass:"mb-5"},[a("b-col",{staticClass:"text-center",attrs:{id:"titleProjeto"}},[t._v(" "+t._s(t.content.title)+" ")])],1),a("b-row",{staticClass:"my-4"},[a("b-col",[t.content.dev?a("b-icon-gear",{attrs:{id:"iconGear",scale:"4",rotate:t.rotacao}}):a("b-icon-check2-circle",{attrs:{id:"iconGear",scale:"4"}})],1)],1),a("b-row",{staticClass:"mt-4 mb-3"},[t.content.dev?a("b-col",{attrs:{id:"estadoDesenvolvimento"}},[t._v(" Em desenvolvimento ")]):a("b-col",{attrs:{id:"estadoDesenvolvimento"}},[t._v(" Concluído ")])],1),a("b-row",{attrs:{"align-h":"center",id:"linhaTags"}},t._l(t.content.tag,(function(t,e){return a("b-col",{key:e,attrs:{cols:"auto"}},[a("tag",{attrs:{content:t}})],1)})),1),a("b-row",{staticClass:"mt-3",attrs:{"align-h":"end"}},[a("b-col",{attrs:{cols:"auto",id:"link"}},[a("b-link",{class:t.content.dev?"disableLink":"enableLink",attrs:{disabled:t.content.dev,href:t.content.url,target:"_blank"}},[t._v(" Link"),a("b-icon-arrow-right",{attrs:{scale:"1.2",id:"icon"}})],1)],1)],1)],1)],1)},w=[],A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-badge",{staticClass:"px-1",style:t.content.css,attrs:{pill:"",id:"tag"}},[t._v(" "+t._s(t.content.name)+" ")])],1)},x=[],y={props:{content:{type:Object,required:!0}}},j=y,E=Object(l["a"])(j,A,x,!1,null,null,null),S=E.exports,B={components:{tag:S},data:function(){return{rotacao:0}},props:{content:{type:Object,required:!0},dev:{type:Boolean,required:!0}},created:function(){var t=this;setInterval((function(){t.rotacao+=10,t.rotacao>=360&&(t.rotacao=0)}),150)}},L=B,O=(o("a07c"),o("bb37"),Object(l["a"])(L,C,w,!1,null,"990b8086",null)),F=O.exports,H={components:{card:F},data:function(){return{cardContent:[{title:"Sistema Interno Comp",logo:"Comp.svg",dev:!1,url:"https://sistema.compjunior.com.br/",tag:[{name:"Trainee FrontEnd",css:"color: #f0f0f0; background-color: #07A0C3"},{name:"BootstrapVue",css:"color: #080808; background-color: #40b883"},{name:"SquadAriranhas",css:"color: #f0f0f0; background-color: #A60B00"}]},{title:"Daniel Marçal Advogados Associados",logo:"corcetti.svg",dev:!0,url:"https://danielmarcal.compjunior.com.br/",tag:[{name:"DevFrontEnd",css:"color: #f0f0f0; background-color: #07A0C3"},{name:"BootstrapVue",css:"color: #080808; background-color: #40b883"},{name:"SquadDisney",css:"color: #f0f0f0; background-color: #A60B00"}]}]}}},N=H,M=(o("2c97"),Object(l["a"])(N,h,k,!1,null,"07683573",null)),T=M.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"habilidades"}},[o("b-container",[o("b-row",{staticClass:"mb-4"},[o("b-col",{attrs:{id:"titleSkill"}},[t._v(" Habilidades ")])],1),o("b-row",{staticClass:"text-center"},[o("b-col",[o("b-icon-globe",{staticClass:"my-3 mIcon",attrs:{scale:"3"}}),o("p",{staticClass:"title"},[t._v("Desenvolvimento Web")]),t._l(t.skills.web,(function(e,a){return o("b-row",{key:a,staticClass:"my-1"},[o("b-col",{staticClass:"myskill"},[t._v(t._s(e))])],1)}))],2),o("b-col",[o("b-icon-code-square",{staticClass:"my-3 mIcon",attrs:{scale:"3"}}),o("p",{staticClass:"title"},[t._v("Linguagens de programação")]),t._l(t.skills.lp,(function(e,a){return o("b-row",{key:a,staticClass:"my-1"},[o("b-col",{staticClass:"myskill"},[t._v(t._s(e))])],1)}))],2),o("b-col",[o("b-icon-layout-text-window-reverse",{staticClass:"my-3 mIcon",attrs:{scale:"3"}}),o("p",{staticClass:"title"},[t._v("Outros")]),t._l(t.skills.other,(function(e,a){return o("b-row",{key:a,staticClass:"my-1"},[o("b-col",{staticClass:"myskill"},[t._v(t._s(e))])],1)}))],2)],1)],1)],1)},I=[],G={props:{skills:{type:Object,required:!0}}},J=G,Y=(o("68cd"),Object(l["a"])(J,D,I,!1,null,"eac239c4",null)),U=Y.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contato"}},[a("b-container",[a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{attrs:{cols:"auto",id:"title"}},[t._v("Contato")])],1),a("b-row",{attrs:{"align-h":"center"}},[a("b-col",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.click.rightbottom",value:"copiado",expression:"'copiado'",modifiers:{click:!0,rightbottom:!0}}],staticClass:"mt-2",attrs:{cols:"auto",id:"email"},on:{click:function(e){return t.copyContent("josev.marques01@gmail.com")}}},[a("b-icon-files",{attrs:{id:"iconPaste"}}),t._v("josev.marques01@gmail.com ")],1)],1),a("b-row",{staticClass:"mt-4",attrs:{"align-h":"center"}},[a("b-col",{staticClass:"mr-3",attrs:{cols:"auto"}},[a("b-link",{attrs:{href:"https://github.com/josev-marques",target:"_blank"}},[a("b-img",{staticClass:"icon",attrs:{src:o("387e")}})],1)],1),a("b-col",{staticClass:"mr-3",attrs:{cols:"auto"}},[a("b-link",{attrs:{href:"https://gitlab.com/josev.marques",target:"_blank"}},[a("b-img",{staticClass:"icon",attrs:{src:o("3a5e")}})],1)],1),a("b-col",{staticClass:"mr-3",attrs:{cols:"auto"}},[a("b-link",{attrs:{href:"https://mail.google.com/mail/?view=cm&source=mailto&to=josev.marques01@gmail.com",target:"_blank"}},[a("b-img",{staticClass:"icon",attrs:{src:o("9055")}})],1)],1),a("b-col",{attrs:{cols:"auto"}},[a("b-link",{attrs:{href:"https://www.linkedin.com/in/jos%C3%A9-v%C3%ADtor-andrade-marques-539484181/",target:"_blank"}},[a("b-img",{staticClass:"icon",attrs:{src:o("953d")}})],1)],1)],1)],1)],1)},V=[],X={methods:{copyContent:function(t){var e=this;setTimeout((function(){e.$root.$emit("bv::hide::tooltip","email")}),2e3);var o=document.createElement("textarea");o.value=t,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o)}}},R=X,q=(o("98d4"),Object(l["a"])(R,P,V,!1,null,"21156b01",null)),z=q.exports,W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"principal"}},[t._v("Design e desenvolvimento por José Vítor Marques")])},_=[],K=(o("ab7f"),{}),Q=Object(l["a"])(K,W,_,!1,null,"22ae7853",null),Z=Q.exports,$={name:"Home",components:{Navbar:u,AboutMe:p,Projects:T,Skill:U,Contact:z,Footer:Z},data:function(){return{mySkill:{web:["VueJs","React Native","Bootstrap","HTML","CSS","Javascript","Mysql"],lp:["C++","Python","Java"],other:["Ubuntu","Programação orientada a objetos","Scrum"]}}}},tt=$,et=Object(l["a"])(tt,a,n,!1,null,null,null);e["default"]=et.exports},ab7f:function(t,e,o){"use strict";o("93e2")},ad59:function(t,e,o){"use strict";o("7252")},b49d:function(t,e,o){"use strict";o("f365")},bb37:function(t,e,o){"use strict";o("7d3e")},bca0:function(t,e){t.exports="data:image/png;base64,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"},d1ab:function(t,e,o){"use strict";o("9c30")},f222:function(t,e,o){t.exports=o.p+"img/check.22511f3a.svg"},f365:function(t,e,o){},f837:function(t,e,o){t.exports=o.p+"img/ImgApresentacao.8d5af77b.png"}}]);
//# sourceMappingURL=Home.7504a3df.js.map