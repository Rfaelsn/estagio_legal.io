import{a as m,o as t,c as l,b as n,n as s,t as h,l as g,w as S,v as F,F as y,m as $,q as M,d as w,k as E,p as C,g as I,e as _,h as x,s as A}from"./vendor.94ab4bda.js";import{_ as u,a as k}from"./index.f1bd61c5.js";const H={name:"menu-item",data:()=>({showChildren:!1,expanded:!1,containerHeight:0}),props:{data:{type:Array},label:{type:String},icon:{type:String},depth:{type:Number},smallMenu:{type:Boolean}},computed:{showLabel(){return this.smallMenu?this.depth>0:!0}},methods:{toggleMenu(){this.expanded=!this.expanded,this.showChildren?(this.containerHeight=this.$refs.container.scrollHeight+"px",this.$refs.container.style.overflow="hidden",setTimeout(()=>{this.containerHeight=0+"px"},10),setTimeout(()=>{this.showChildren=!1},300)):(this.showChildren=!0,this.$nextTick(()=>{this.containerHeight=this.$refs.container.scrollHeight+"px",setTimeout(()=>{this.containerHeight="fit-content",navigator.userAgent.indexOf("Firefox")!=-1&&(this.containerHeight="-moz-max-content"),this.$refs.container.style.overflow="visible"},300)}))}}},P={key:0,class:"material-icons-outlined"},T={key:1},B={key:0,class:"right"};function N(e,o,a,p,d,i){const v=m("menu-item",!0);return t(),l("div",{class:s(["menu-item",{opened:e.expanded}])},[n("div",{class:"label",onClick:o[0]||(o[0]=r=>i.toggleMenu())},[n("div",{class:s(["left",{childItem:a.depth>0}])},[a.icon?(t(),l("i",P,h(a.icon),1)):g("",!0),i.showLabel?(t(),l("span",T,h(a.label),1)):g("",!0)],2),a.data?(t(),l("div",B,[n("i",{class:s(["expand material-icons",{opened:e.expanded}])},"expand_more",2)])):g("",!0)]),S(n("div",{class:s([{"small-menu":a.smallMenu},"items-container"]),style:w({height:e.containerHeight}),ref:"container"},[(t(!0),l(y,null,$(a.data,(r,c)=>(t(),M(v,{class:s({opened:e.showChildren}),key:c,data:r.children,label:r.label,icon:r.icon,depth:a.depth+1,smallMenu:a.smallMenu},null,8,["class","data","label","icon","depth","smallMenu"]))),128))],6),[[F,e.showChildren]])],2)}var z=u(H,[["render",N],["__scopeId","data-v-ceccd052"]]);const f=E({});f.config.globalProperties.$emitSmallMenu=e=>{f.emit("smallMenu",e)};f.config.globalProperties.$onSmallMenu=e=>{f.on("smallMenu",e)};const U={data(){return{titulo:"Usuario: Sergio",iconeReduzido:!1}},props:{smallMenu:{type:Boolean}}},V=e=>(C("data-v-be373394"),e=e(),I(),e),L=["smallMenu"],O=V(()=>n("i",{class:"material-icons"},"account_circle ",-1));function j(e,o,a,p,d,i){return t(),l("div",{class:s(["info_user",{"icone-reduzido":a.smallMenu}]),smallMenu:a.smallMenu},[O,n("h1",null,h(d.titulo),1)],10,L)}var R=u(U,[["render",j],["__scopeId","data-v-be373394"]]);const J={name:"recursive-menu",data:()=>({expanded:!1,smallMenu:!1,menuTree:[{label:"Home",icon:"home"},{label:"Inicio de Est\xE1gio",icon:"post_add",children:[{label:"Est\xE1gio Obrigat\xF3rio",icon:"event_available"},{label:"Est\xE1gio N\xE3o Obrigat\xF3rio",icon:"calendar_today"}]},{label:"Fim de Est\xE1gio",icon:"task",children:[{label:"Emitir Atestado de Est\xE1gio",icon:"workspace_premium"}]},{label:"Creditar horas",icon:"library_books",children:[{label:"Est\xE1gio Obrigat\xF3rio",icon:"workspace_premium"},{label:"Horas Complementares",icon:"workspace_premium"},{label:"Projeto de Pesquisa",icon:"workspace_premium"}]},{label:"Acompanhar Processo",icon:"schedule"},{label:"Settings",icon:"settings"}]}),components:{MenuItem:z,IconeUsuario:R},methods:{responsividadeComponentes(){this.smallMenu=!this.smallMenu,f.emitSmallMenu(this.smallMenu)}}},q=e=>(C("data-v-014a7e44"),e=e(),I(),e),D=q(()=>n("div",{class:"logo"},[n("img",{src:k,alt:"logo-ifpa"})],-1));function G(e,o,a,p,d,i){const v=m("IconeUsuario"),r=m("MenuItem");return t(),l("div",{class:s(["menu",{"small-menu":e.smallMenu}])},[D,_(v,{smallMenu:e.smallMenu},null,8,["smallMenu"]),(t(!0),l(y,null,$(e.menuTree,(c,b)=>(t(),M(r,{key:b,data:c.children,label:c.label,icon:c.icon,depth:0,smallMenu:e.smallMenu},null,8,["data","label","icon","smallMenu"]))),128)),n("i",{onClick:o[0]||(o[0]=(...c)=>i.responsividadeComponentes&&i.responsividadeComponentes(...c)),class:s(["expand material-icons",{expand:e.expanded}])},"arrow_circle_left",2)],2)}var K=u(J,[["render",G],["__scopeId","data-v-014a7e44"]]);const Q={data(){return{titulo:"ESTAGIO LEGAL",localSmallMenu:!1}}};function W(e,o,a,p,d,i){return t(),l("div",{class:s(["header",{localSmallMenu:d.localSmallMenu}])},[n("h1",null,h(d.titulo),1)],2)}var X=u(Q,[["render",W],["__scopeId","data-v-6bed4a3f"]]);const Y={},Z={id:"formularioAluno"},ee=x('<form id="formAluno" action="" data-v-2dce17de><h1 id="h1aluno" data-v-2dce17de>Aluno</h1><div class="input-container" data-v-2dce17de><label class="label" for="Nome" data-v-2dce17de>Nome:</label><input class="input" type="text" name="Nome" data-v-2dce17de></div><div class="input-container" data-v-2dce17de><label class="label" for="Matricula" data-v-2dce17de>Matr\xEDcula:</label><input class="input" type="text" name="Matricula" data-v-2dce17de></div><div class="input-container" data-v-2dce17de><label class="label" for="Curso" data-v-2dce17de>Curso:</label><input class="input" type="text" name="Curso" data-v-2dce17de></div><div class="input-container" data-v-2dce17de><label class="label" for="CPF" data-v-2dce17de>CPF:</label><input class="input" type="text" name="CPF" data-v-2dce17de></div><div class="input-container" data-v-2dce17de><label class="label" for="email" data-v-2dce17de>Email:</label><input class="input" type="email" name="email" placeholder=" example@example.com" data-v-2dce17de></div><div class="input-container" data-v-2dce17de><label class="label" for="celular" data-v-2dce17de>Celular:</label><input class="input" type="tel" name="celular" placeholder=" (xx) xxxxx-xxxx" data-v-2dce17de></div></form>',1),ae=[ee];function te(e,o,a,p,d,i){return t(),l("div",Z,ae)}var le=u(Y,[["render",te],["__scopeId","data-v-2dce17de"]]);const ne={},oe={id:"formularioConcedente"},ie=x('<form id="formConcedente" action="" data-v-1e9e1173><h1 id="h1Concedente" data-v-1e9e1173>Concedente</h1><div class="input-container" data-v-1e9e1173><label class="label" for="RazaoSocial" data-v-1e9e1173>Razao Social:</label><input class="input" type="text" name="RazaoSocial" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="CNPJ" data-v-1e9e1173>Cnpj:</label><input class="input" type="text" name="CNPJ" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="CEP" data-v-1e9e1173>CEP:</label><input class="input" type="text" name="CEP" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="Bairro" data-v-1e9e1173>Bairro:</label><input class="input" type="text" name="Bairro" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="Cidade" data-v-1e9e1173>Cidade:</label><input class="input" type="text" name="Cidade" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="UF" data-v-1e9e1173>UF:</label><input class="input" type="text" name="UF" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="Endereco" data-v-1e9e1173>Endere\xE7o:</label><input class="input" type="text" name="Endereco" data-v-1e9e1173></div><div class="input-container" data-v-1e9e1173><label class="label" for="email" data-v-1e9e1173>Email:</label><input class="input" type="email" name="email" placeholder=" example@example.com" data-v-1e9e1173></div></form>',1),se=[ie];function de(e,o,a,p,d,i){return t(),l("div",oe,se)}var ce=u(ne,[["render",de],["__scopeId","data-v-1e9e1173"]]);const re={},ue={id:"formularioInfo"},pe=x('<form id="formInfoEstagio" action="" data-v-d6f5e954><h1 id="h1info" data-v-d6f5e954>Informa\xE7\xF5es do Est\xE1gio</h1><div class="input-container" data-v-d6f5e954><label class="label" for="periodoInicial" data-v-d6f5e954>Periodo Inicial:</label><input class="input" type="date" name="periodoInicial" data-v-d6f5e954><p data-v-d6f5e954>a</p><label class="label" for="periodoFinal" data-v-d6f5e954>Periodo Final:</label><input class="input" type="date" name="periodoFinal" data-v-d6f5e954></div><div class="input-container" data-v-d6f5e954><label class="label" for="horarioInicio" data-v-d6f5e954>Horario de inicio:</label><input class="input" type="time" name="horarioInicio" data-v-d6f5e954><p data-v-d6f5e954>a</p><label class="label" for="horarioInicio" data-v-d6f5e954>Horario de sa\xEDda:</label><input class="input" type="time" name="horarioInicio" data-v-d6f5e954></div><div class="input-container" data-v-d6f5e954><label class="label" for="jornadaSemanal" data-v-d6f5e954>Jornada Semanal:</label><input class="input" type="text" name="jornadaSemanal" data-v-d6f5e954></div><div class="input-container" data-v-d6f5e954><label class="label" for="bolsaAuxilio" data-v-d6f5e954>Bolsa Aux\xEDlio:</label><input class="input" type="number" name="bolsaAuxilio" data-v-d6f5e954></div><div class="input-container" data-v-d6f5e954><label class="label" for="auxilioTransporte" data-v-d6f5e954>Aux\xEDlio Transporte:</label><input class="input" type="number" name="auxilioTransporte" data-v-d6f5e954></div></form>',1),me=[pe];function ve(e,o,a,p,d,i){return t(),l("div",ue,me)}var _e=u(re,[["render",ve],["__scopeId","data-v-d6f5e954"]]);const fe=A({name:"App",data:()=>({localSmallMenu:!1}),components:{Menu:K,Header:X,FormAluno:le,FormConcedente:ce,FormInfoEstagioVue:_e},methods:{navigateToView(){window.location.href="@/views/TelaLogin.vue"}}}),he={id:"app"};function be(e,o,a,p,d,i){const v=m("Header"),r=m("FormAluno"),c=m("FormConcedente"),b=m("FormInfoEstagioVue");return t(),l("div",he,[n("div",{class:s(["header",{localSmallMenu:e.localSmallMenu}])},[_(v)],2),n("div",{class:s(["formularios",{localSmallMenu:e.localSmallMenu}])},[_(r),_(c),_(b)],2)])}var ye=u(fe,[["render",be],["__scopeId","data-v-435470ec"]]);export{ye as default};
