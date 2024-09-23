"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3270],{3270:(I,u,a)=>{a.r(u),a.d(u,{EditOfferPageModule:()=>E});var p=a(177),o=a(4341),c=a(5171),t=a(4742),e=a(3953),m=a(8591),h=a(3656);function g(i,l){1&i&&(e.j41(0,"div",8),e.nrm(1,"ion-spinner",9),e.k0s())}function b(i,l){1&i&&(e.j41(0,"ion-row")(1,"ion-col",11)(2,"p"),e.EFF(3,"Description must be between 1 and 180 characters."),e.k0s()()())}function v(i,l){if(1&i&&(e.j41(0,"form",10)(1,"ion-grid")(2,"ion-row")(3,"ion-col",11)(4,"ion-item")(5,"ion-label",12),e.EFF(6,"Title"),e.k0s(),e.nrm(7,"ion-input",13),e.k0s()()(),e.j41(8,"ion-row")(9,"ion-col",11)(10,"ion-item")(11,"ion-label",12),e.EFF(12,"Short Description"),e.k0s(),e.nrm(13,"ion-textarea",14),e.k0s()()(),e.DNE(14,b,4,0,"ion-row",15),e.k0s()()),2&i){let s;const r=e.XpG();e.Y8G("formGroup",r.form),e.R7$(14),e.Y8G("ngIf",!(null!=(s=r.form.get("description"))&&s.valid)&&(null==(s=r.form.get("description"))?null:s.touched))}}const O=[{path:"",component:(()=>{var i;class l{constructor(r,n,f,d,P,k){this.route=r,this.placesService=n,this.navCtrl=f,this.router=d,this.loadingCtrl=P,this.alertCtrl=k,this.isLoading=!1}ngOnInit(){this.route.paramMap.subscribe(r=>{const n=r.get("placeId");n?(this.placeId=n,this.isLoading=!0,this.placeSub=this.placesService.getPlace(this.placeId).subscribe(f=>{this.place=f,this.form=new o.gE({title:new o.MJ(this.place.title,{updateOn:"blur",validators:[o.k0.required]}),description:new o.MJ(this.place.description,{updateOn:"blur",validators:[o.k0.required,o.k0.maxLength(180)]})}),this.isLoading=!1},f=>{this.alertCtrl.create({header:"An error occurred!",message:"Place could not be fetched. Please try again later.",buttons:[{text:"Okay",handler:()=>{this.router.navigate(["/places/tabs/offers"])}}]}).then(d=>{d.present()})})):this.navCtrl.navigateBack("/places/tabs/offers")})}onUpdateOffer(){this.form.valid&&this.loadingCtrl.create({message:"Updating place..."}).then(r=>{r.present(),this.placesService.updatePlace(this.place.id,this.form.value.title,this.form.value.description).subscribe(()=>{r.dismiss(),this.form.reset(),this.router.navigate(["/places/tabs/offers"])})})}ngOnDestroy(){this.placeSub&&this.placeSub.unsubscribe()}}return(i=l).\u0275fac=function(r){return new(r||i)(e.rXU(c.nX),e.rXU(m._),e.rXU(h.q9),e.rXU(c.Ix),e.rXU(t.Xi),e.rXU(t.hG))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-edit-offer"]],decls:12,vars:4,consts:[["slot","start"],[3,"defaultHref"],["slot","primary"],[3,"click","disabled"],["name","checkmark","slot","icon-only"],[1,"ion-padding"],["class","ion-text-center",4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"ion-text-center"],["color","primary"],[3,"formGroup"],["size-sm","6","offset-sm","3"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","title"],["rows","3","formControlName","description"],[4,"ngIf"]],template:function(r,n){1&r&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Edit Offer"),e.k0s(),e.j41(6,"ion-buttons",2)(7,"ion-button",3),e.bIt("click",function(){return n.onUpdateOffer()}),e.nrm(8,"ion-icon",4),e.k0s()()()(),e.j41(9,"ion-content",5),e.DNE(10,g,2,0,"div",6)(11,v,15,2,"form",7),e.k0s()),2&r&&(e.R7$(3),e.Y8G("defaultHref","/places/tabs/offers/"+n.placeId),e.R7$(4),e.Y8G("disabled",!(null!=n.form&&n.form.valid)),e.R7$(3),e.Y8G("ngIf",n.isLoading),e.R7$(),e.Y8G("ngIf",!n.isLoading))},dependencies:[p.bT,o.qT,o.BC,o.cb,o.j4,o.JD,t.Jm,t.QW,t.hU,t.W9,t.lO,t.eU,t.iq,t.$w,t.uz,t.he,t.ln,t.w2,t.nc,t.BC,t.ai,t.Gw,t.el]}),l})()}];let E=(()=>{var i;class l{}return(i=l).\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[p.MD,o.X1,o.YN,t.bv,c.iI.forChild(O)]}),l})()}}]);