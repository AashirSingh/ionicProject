"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6926],{6926:(k,m,r)=>{r.r(m),r.d(m,{AuthPageModule:()=>y});var p=r(177),l=r(4341),f=r(5171),n=r(4742),i=r(3953),b=r(4662);function S(o,u){1&o&&(i.j41(0,"ion-item",16)(1,"ion-label"),i.EFF(2," Should be a valid email address. "),i.k0s()())}function v(o,u){1&o&&(i.j41(0,"ion-item",16)(1,"ion-label"),i.EFF(2," Should at least be 6 characters long. "),i.k0s()())}function A(o,u){1&o&&i.nrm(0,"ion-spinner",17)}const L=[{path:"",component:(()=>{var o;class u{constructor(e,t,s,a){this.authService=e,this.router=t,this.loadingCtrl=s,this.alertCtrl=a,this.isLoading=!1,this.isLogin=!0}ngOnInit(){}authenticate(e,t){this.isLoading=!0,this.loadingCtrl.create({keyboardClose:!0,message:"Logging in..."}).then(s=>{let a;s.present(),a=this.isLogin?this.authService.login(e,t):this.authService.signup(e,t),a.subscribe(g=>{console.log(g),this.isLoading=!1,s.dismiss(),this.router.navigateByUrl("/places/tabs/discover")},g=>{s.dismiss();const c=g.error.error.message;let h="Could not sign you up, please try again.";"EMAIL_EXISTS"===c?h="This email address exists already!":"EMAIL_NOT_FOUND"===c?h="E-Mail address could not be found.":"INVALID_PASSWORD"===c&&(h="This password is not correct."),this.showAlert(h)})})}onSwitchAuthMode(){this.isLogin=!this.isLogin}onSubmit(e){e.valid&&(this.authenticate(e.value.email,e.value.password),e.reset())}showAlert(e){this.alertCtrl.create({header:"Authentication failed",message:e,buttons:["Okay"]}).then(t=>t.present())}onLoginWithGoogle(){this.isLoading=!0,this.authService.loginWithGoogle().subscribe(e=>{this.isLoading=!1,this.router.navigateByUrl("/places/tabs/discover")},e=>{this.isLoading=!1,this.showAlert("Could not log you in with Google, please try again.")})}}return(o=u).\u0275fac=function(e){return new(e||o)(i.rXU(b.u),i.rXU(f.Ix),i.rXU(n.Xi),i.rXU(n.hG))},o.\u0275cmp=i.VBU({type:o,selectors:[["app-auth"]],decls:36,vars:8,consts:[["f","ngForm"],["emailCtrl","ngModel"],["passwordCtrl","ngModel"],[1,"ion-padding"],[3,"ngSubmit"],["size-sm","6","offset-sm","3"],["position","floating"],["type","email","ngModel","","name","email","required","","email",""],["lines","none",4,"ngIf"],["type","password","ngModel","","name","password","required","","minlength","6"],["type","button","color","primary","fill","clear","expand","block",3,"click"],["type","submit","color","primary","expand","block",3,"disabled"],["type","button","color","danger","expand","block",3,"click","disabled"],["slot","start","name","logo-google"],[1,"ion-text-center"],["color","primary",4,"ngIf"],["lines","none"],["color","primary"]],template:function(e,t){if(1&e){const s=i.RV6();i.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),i.EFF(3),i.k0s()()(),i.j41(4,"ion-content",3)(5,"form",4,0),i.bIt("ngSubmit",function(){i.eBV(s);const g=i.sdS(6);return i.Njj(t.onSubmit(g))}),i.j41(7,"ion-grid")(8,"ion-row")(9,"ion-col",5)(10,"ion-list")(11,"ion-item")(12,"ion-label",6),i.EFF(13,"E-Mail"),i.k0s(),i.nrm(14,"ion-input",7,1),i.k0s(),i.DNE(16,S,3,0,"ion-item",8),i.j41(17,"ion-item")(18,"ion-label",6),i.EFF(19,"Password"),i.k0s(),i.nrm(20,"ion-input",9,2),i.k0s(),i.DNE(22,v,3,0,"ion-item",8),i.k0s()()(),i.j41(23,"ion-row")(24,"ion-col",5)(25,"ion-button",10),i.bIt("click",function(){return i.eBV(s),i.Njj(t.onSwitchAuthMode())}),i.EFF(26),i.k0s(),i.j41(27,"ion-button",11),i.EFF(28),i.k0s()()(),i.j41(29,"ion-row")(30,"ion-col",5)(31,"ion-button",12),i.bIt("click",function(){return i.eBV(s),i.Njj(t.onLoginWithGoogle())}),i.nrm(32,"ion-icon",13),i.EFF(33," Sign in with Google "),i.k0s()()()()(),i.j41(34,"div",14),i.DNE(35,A,1,0,"ion-spinner",15),i.k0s()()}if(2&e){const s=i.sdS(6),a=i.sdS(15),g=i.sdS(21);i.R7$(3),i.JRh(t.isLogin?"Login":"Signup"),i.R7$(13),i.Y8G("ngIf",!a.valid&&a.touched),i.R7$(6),i.Y8G("ngIf",!g.valid&&g.touched),i.R7$(4),i.SpI(" Switch to ",t.isLogin?"Signup":"Login"," "),i.R7$(),i.Y8G("disabled",!s.valid||t.isLoading),i.R7$(),i.SpI(" ",t.isLogin?"Login":"Signup"," "),i.R7$(3),i.Y8G("disabled",t.isLoading),i.R7$(4),i.Y8G("ngIf",t.isLoading)}},dependencies:[p.bT,l.qT,l.BC,l.cb,l.YS,l.xh,l.Dg,l.vS,l.cV,n.Jm,n.hU,n.W9,n.lO,n.eU,n.iq,n.$w,n.uz,n.he,n.nf,n.ln,n.w2,n.BC,n.ai,n.Gw]}),u})()}];let y=(()=>{var o;class u{}return(o=u).\u0275fac=function(e){return new(e||o)},o.\u0275mod=i.$C({type:o}),o.\u0275inj=i.G2t({imports:[p.MD,l.YN,n.bv,f.iI.forChild(L)]}),u})()}}]);