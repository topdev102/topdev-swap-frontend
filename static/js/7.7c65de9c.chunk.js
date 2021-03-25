(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[7],{1089:function(e,t,n){"use strict";n.r(t);var r,c,a,i,o,s,u,l,j,d,b,p,f,x,O,m,h=n(0),g=n(46),v=n(249),y=n(15),w=n(7),S=n(68),k=n(12),A=n(4),C=w.e.div(r||(r=Object(y.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 39px;\n"]))),I=function(){var e=Object(g.i)(),t=e.url,n=e.isExact;return Object(A.jsx)(C,{children:Object(A.jsxs)(k.k,{activeIndex:n?0:1,size:"sm",variant:"subtle",children:[Object(A.jsx)(k.l,{as:S.a,to:"".concat(t),children:"Next IFO"}),Object(A.jsx)(k.l,{as:S.a,to:"".concat(t,"/history"),children:"Past IFOs"})]})})},B=n(44),E=Object(w.e)(k.C).attrs({as:"h1",size:"xl"})(c||(c=Object(y.a)(["\n  color: ",";\n  margin-bottom: 24px;\n"])),(function(e){return e.theme.colors.secondary})),T=Object(w.e)(k.X)(a||(a=Object(y.a)(["\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n"]))),D=w.e.div(i||(i=Object(y.a)(["\n  background-image: linear-gradient(180deg, #53dee9 0%, #1fc7d4 100%);\n  padding-bottom: 40px;\n  padding-top: 40px;\n  margin-bottom: 32px;\n"]))),U=function(){var e=Object(B.a)();return Object(A.jsx)(D,{children:Object(A.jsxs)(v.a,{children:[Object(A.jsx)(E,{children:e(500,"IFO: Initial Farm Offerings")}),Object(A.jsx)(T,{children:e(502,"Buy new tokens with a brand new token sale model.")})]})})},X=n(245),F=n(25),z=n(243),P=n(2),R=n.n(P),_=n(11),L=n(20),N=n(13),M=n.n(N),q=n(244),H=n(173),W=n(48),K=n(153),Q=function(e,t,n){return 0===e?"idle":e<t?"coming_soon":e>=t&&e<=n?"live":e>n?"finished":"idle"},G=function(e){var t=e.address,n=e.releaseBlockNumber,r=Object(h.useState)({status:"idle",blocksRemaining:0,secondsUntilStart:0,progress:5,secondsUntilEnd:0,raisingAmount:new M.a(0),totalAmount:new M.a(0),startBlockNum:0,endBlockNum:0}),c=Object(L.a)(r,2),a=c[0],i=c[1],o=Object(H.a)(),s=Object(W.f)(t);return Object(h.useEffect)((function(){(function(){var e=Object(_.a)(R.a.mark((function e(){var t,r,c,a,u,l,j,d,b,p,f,x;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([s.methods.startBlock().call,s.methods.endBlock().call,s.methods.raisingAmount().call,s.methods.totalAmount().call]);case 2:t=e.sent,r=Object(L.a)(t,4),c=r[0],a=r[1],u=r[2],l=r[3],j=parseInt(c,10),d=parseInt(a,10),b=Q(o,j,d),p=d-j,x=o>j?(o-j)/p*100:(o-n)/(j-n)*100,i({secondsUntilEnd:(f=d-o)*q.c,secondsUntilStart:(j-o)*q.c,raisingAmount:new M.a(u),totalAmount:new M.a(l),status:b,progress:x,blocksRemaining:f,startBlockNum:j,endBlockNum:d});case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,o,s,n,i]),a},V=Object(w.e)(k.B)(o||(o=Object(y.a)(["\n  & > div {\n    flex: 1;\n  }\n"]))),J=Object(w.e)(k.C).attrs({as:"h3",size:"lg"})(s||(s=Object(y.a)(["\n  margin-bottom: 4px;\n  text-align: right;\n"]))),Y=Object(w.e)(k.X)(u||(u=Object(y.a)(["\n  color: ",";\n  font-size: 14px;\n  text-align: right;\n"])),(function(e){return e.theme.colors.textSubtle})),$=function(e){var t=e.ifoId,n=e.name,r=e.subTitle;return Object(A.jsxs)(V,{mb:"24px",alignItems:"center",children:[Object(A.jsx)("img",{src:"/images/ifos/".concat(t,".svg"),alt:t,width:"64px",height:"64px"}),Object(A.jsxs)("div",{children:[Object(A.jsx)(J,{children:n}),Object(A.jsx)(Y,{children:r})]})]})},Z=w.e.div(l||(l=Object(y.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n"])),(function(e){return e.theme.colors.secondary})),ee=Object(w.e)(k.X)(j||(j=Object(y.a)(["\n  flex: 1;\n"]))),te=function(e){var t=e.ifo,n=e.publicIfoData,r=Object(h.useState)(!1),c=Object(L.a)(r,2),a=c[0],i=c[1],o=Object(B.a)(),s=t.description,u=t.cakeToBurn,l=t.projectSiteUrl,j=t.launchDate,d=t.launchTime,b=t.saleAmount,p=t.raiseAmount,f=n.raisingAmount,x=n.totalAmount;return Object(A.jsxs)(k.p,{children:[Object(A.jsx)(k.j,{variant:"text",onClick:function(){return i(!a)},fullWidth:!0,endIcon:a?Object(A.jsx)(k.y,{color:"primary",width:"24px"}):Object(A.jsx)(k.v,{color:"primary",width:"24px"}),children:a?o(1066,"Hide"):o(658,"Details")}),a&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(k.X,{as:"p",color:"textSubtle",my:"24px",children:s}),Object(A.jsxs)(k.g,{mb:"24px",children:[Object(A.jsxs)(Z,{children:[Object(A.jsx)(ee,{children:o(582,"Launch Time")}),Object(A.jsxs)(k.X,{children:[j,",",Object(A.jsx)(k.G,{href:"https://www.timeanddate.com/worldclock/singapore/singapore",target:"blank",rel:"noopener noreferrer",ml:"4px",style:{display:"inline"},children:d})]})]}),Object(A.jsxs)(Z,{children:[Object(A.jsx)(ee,{children:o(584,"For Sale")}),Object(A.jsx)(k.X,{children:b})]}),Object(A.jsxs)(Z,{children:[Object(A.jsx)(ee,{children:o(999,"To raise (USD)")}),Object(A.jsx)(k.X,{children:p})]}),Object(A.jsxs)(Z,{children:[Object(A.jsx)(ee,{children:o(586,"CAKE to burn (USD)")}),Object(A.jsx)(k.X,{children:u})]}),Object(A.jsxs)(Z,{children:[Object(A.jsx)(ee,{children:o(999,"Total raised (% of target)")}),Object(A.jsx)(k.X,{children:"".concat(x.div(f).times(100).toFixed(2),"%")})]})]}),Object(A.jsx)(k.H,{href:l,style:{margin:"auto"},children:o(412,"View project site")})]})]})},ne=n(18),re=n(868),ce=function(e){var t=Object(h.useState)({isPendingTx:!1,offeringTokenBalance:new M.a(0),refundingAmount:new M.a(0),userInfo:{amount:new M.a(0),claimed:!1}}),n=Object(L.a)(t,2),r=n[0],c=n[1],a=e.address,i=e.currencyAddress,o=r.isPendingTx,s=Object(F.b)().account,u=Object(W.f)(a),l=Object(W.e)(i),j=Object(re.a)(l,a,o);return Object(h.useEffect)((function(){s&&function(){var e=Object(_.a)(R.a.mark((function e(){var t,n,r,a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(K.a)([u.methods.getOfferingAmount(s).call,u.methods.userInfo(s).call,u.methods.getRefundingAmount(s).call]);case 2:t=e.sent,n=Object(L.a)(t,3),r=n[0],a=n[1],i=n[2],c((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{offeringTokenBalance:new M.a(r),refundingAmount:new M.a(i),userInfo:{amount:new M.a(a.amount),claimed:a.claimed}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,u,c]),Object(ne.a)(Object(ne.a)({},r),{},{allowance:j,contract:u,setPendingTx:function(e){return c((function(t){return Object(ne.a)(Object(ne.a)({},t),{},{isPendingTx:e})}))},addUserContributedAmount:function(e){c((function(t){return Object(ne.a)(Object(ne.a)({},t),{},{userInfo:Object(ne.a)(Object(ne.a)({},t.userInfo),{},{amount:t.userInfo.amount.plus(e)})})}))},setIsClaimed:function(){c((function(e){return Object(ne.a)(Object(ne.a)({},e),{},{userInfo:Object(ne.a)(Object(ne.a)({},e.userInfo),{},{claimed:!0})})}))}})},ae=n(67),ie=n(62),oe=n(174),se=n(848),ue=n(259),le=Object(w.e)(k.g)(d||(d=Object(y.a)(["\n  background: ",";\n  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.2) inset;\n  border-radius: ",";\n  padding: 8px 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.radii.default})),je=function(e){var t=e.title,n=e.max,r=e.symbol,c=e.onChange,a=e.onSelectMax,i=e.value,o=Object(se.a)(e,["title","max","symbol","onChange","onSelectMax","value"]),s=Object(B.a)(),u=n.toFixed(6);return Object(A.jsxs)(le,Object(ne.a)(Object(ne.a)({},o),{},{children:[Object(A.jsxs)(k.B,{alignItems:"center",justifyContent:"space-between",mb:"8px",children:[Object(A.jsx)(k.X,{fontSize:"14px",children:t}),Object(A.jsx)(k.X,{fontSize:"14px",children:s(999,"Balance: ".concat(u),{num:u})})]}),Object(A.jsx)(ue.a,{endAdornment:Object(A.jsxs)(k.B,{alignItems:"center",children:[a&&Object(A.jsx)(k.j,{size:"sm",onClick:a,mr:"8px",children:s(452,"Max")}),Object(A.jsx)(k.X,{children:r})]}),onChange:c,placeholder:"0",value:i})]}))},de=n(851),be=n(859),pe=n(860),fe=function(e){var t=e.currency,n=e.contract,r=e.currencyAddress,c=e.onDismiss,a=e.onSuccess,i=Object(h.useState)(""),o=Object(L.a)(i,2),s=o[0],u=o[1],l=Object(F.b)().account,j=Object(W.e)(r),d=Object(ae.a)(Object(de.a)(r)),b=Object(B.a)(),p=new M.a(s).times(new M.a(10).pow(18)),f=Object(pe.a)({onRequiresApproval:function(){var e=Object(_.a)(R.a.mark((function e(){var t,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.methods.allowance(l,n.options.address).call();case 3:return t=e.sent,r=new M.a(t),e.abrupt("return",r.gt(0));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return j.methods.approve(n.options.address,oe.a.constants.MaxUint256).send({from:l})},onConfirm:function(){return n.methods.deposit(p.toString()).send({from:l})},onSuccess:function(){var e=Object(_.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(),a(p);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),x=f.isApproving,O=f.isApproved,m=f.isConfirmed,g=f.isConfirming,v=f.handleApprove,y=f.handleConfirm;return Object(A.jsx)(k.L,{title:"Contribute ".concat(t),onDismiss:c,children:Object(A.jsxs)(k.g,{width:"344px",children:[Object(A.jsx)(je,{title:b(999,"Contribute"),value:s,onChange:function(e){return u(e.currentTarget.value)},symbol:t,max:d,onSelectMax:function(){return u(d.toString())},mb:"24px"}),Object(A.jsx)(be.a,{isApproveDisabled:m||g||O,isApproving:x,isConfirmDisabled:!O||m||p.isNaN()||p.eq(0),isConfirming:g,onApprove:v,onConfirm:y}),Object(A.jsx)(k.H,{href:"https://exchange.pancakeswap.finance/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",style:{margin:"16px auto 0"},children:"Get ".concat(t)})]})})},xe=function(e){var t=e.userAmount,n=e.raisingAmount,r=Object(B.a)(),c=t.div(n).times(100).toNumber().toLocaleString(void 0,{maximumFractionDigits:2});return Object(A.jsx)(k.X,{fontSize:"14px",color:"textSubtle",children:r(999,"".concat(c,"% of total"),{num:c})})},Oe=function(e){var t=e.ifo,n=e.contract,r=e.userInfo,c=e.isPendingTx,a=e.publicIfoData,i=e.addUserContributedAmount,o=t.currency,s=t.currencyAddress,u=a.raisingAmount,l=Object(B.a)(),j=Object(ae.a)(r.amount),d=Object(ie.r)().toastSuccess,b=Object(k.jb)(Object(A.jsx)(fe,{currency:o,contract:n,currencyAddress:s,onSuccess:function(e){d("Success!","You have contributed ".concat(Object(ae.a)(e)," CAKE-BNB LP tokens to this IFO!")),i(e)}}),!1),p=Object(L.a)(b,1)[0];return Object(A.jsxs)(k.g,{children:[Object(A.jsxs)(k.B,{mb:"4px",children:[Object(A.jsx)(k.X,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:"CAKE-BNB LP"}),Object(A.jsx)(k.X,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Committed"})]}),Object(A.jsxs)(k.B,{alignItems:"center",children:[Object(A.jsx)(k.g,{style:{flex:1},pr:"8px",children:Object(A.jsx)(k.X,{bold:!0,fontSize:"20px",children:j.toFixed(4)})}),Object(A.jsx)(k.j,{onClick:p,disabled:c,children:l(999,"Contribute")})]}),Object(A.jsx)(xe,{userAmount:r.amount,raisingAmount:u})]})},me=function(e){var t=e.children,n=Object(se.a)(e,["children"]);return Object(A.jsx)(k.g,Object(ne.a)(Object(ne.a)({minHeight:"18px"},n),{},{children:Object(A.jsx)(k.X,{color:"textSubtle",fontSize:"12px",children:t})}))},he=function(e){var t=e.token,n=e.balance,r=Object(ie.i)(t),c=!!r&&n>0,a=r*n;return Object(A.jsx)(me,{children:c&&"~$".concat(a.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})},ge=w.e.div(b||(b=Object(y.a)(["\n  display: grid;\n  grid-gap: 8px;\n  grid-template-columns: repeat(2, 1fr);\n  margin-bottom: 24px;\n"]))),ve=function(e){var t=e.ifo,n=e.contract,r=e.userInfo,c=e.isPendingTx,a=e.setPendingTx,i=e.offeringTokenBalance,o=e.refundingAmount,s=e.setIsClaimed,u=Object(B.a)(),l=Object(F.b)().account,j=r.amount.gt(0),d=!r.claimed&&i.gt(0),b=Object(ae.a)(r.amount),p=Object(ae.a)(o).toFixed(r.amount.eq(0)?0:4),f=t.tokenSymbol,x=t.tokenDecimals,O=Object(ae.a)(i,x),m=Object(ie.r)(),h=m.toastError,g=m.toastSuccess,v=i.gt(0),y=function(){var e=Object(_.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a(!0),e.next=4,n.methods.harvest().send({from:l});case 4:s(),g("Success!","You have successfully claimed your rewards."),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),h("Error",null===e.t0||void 0===e.t0?void 0:e.t0.message),console.error(e.t0);case 12:return e.prev=12,a(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(ge,{children:[Object(A.jsxs)(k.g,{children:[Object(A.jsxs)(k.B,{mb:"4px",children:[Object(A.jsx)(k.X,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:"LP Tokens"}),Object(A.jsx)(k.X,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Committed"})]}),Object(A.jsx)(k.X,{fontSize:"20px",bold:!0,color:i.gt(0)?"text":"textDisabled",children:b.toFixed(r.amount.eq(0)?0:4)}),Object(A.jsxs)(me,{children:[v&&d&&u(999,"".concat(p," to reclaim"),{num:p}),v&&!d&&u(999,"".concat(p," reclaimed"),{num:p})]})]}),Object(A.jsxs)(k.g,{children:[Object(A.jsxs)(k.B,{mb:"4px",children:[Object(A.jsx)(k.X,{as:"span",bold:!0,fontSize:"12px",mr:"4px",textTransform:"uppercase",children:f}),!d&&v?Object(A.jsx)(k.X,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"Claimed"}):Object(A.jsx)(k.X,{as:"span",color:"textSubtle",fontSize:"12px",textTransform:"uppercase",bold:!0,children:"To Claim"})]}),Object(A.jsx)(k.X,{fontSize:"20px",bold:!0,color:i.gt(0)?"text":"textDisabled",children:O.toFixed(i.eq(0)?0:4)}),d&&Object(A.jsx)(he,{token:f,balance:O})]})]}),j?Object(A.jsx)(k.j,{onClick:y,disabled:c||!d,fullWidth:!0,mb:"24px",isLoading:c,endIcon:c?Object(A.jsx)(k.c,{spin:!0,color:"currentColor"}):null,children:u(999,d?"Claim":"Claimed")}):Object(A.jsx)(k.j,{disabled:!0,fullWidth:!0,mb:"24px",children:u(999,"Nothing to Claim")}),Object(A.jsx)(k.X,{mt:"4px",children:u(999,"You'll be refunded any excess tokens when you claim")})]})},ye=function(){return Object(A.jsxs)(k.g,{children:[Object(A.jsx)(k.U,{height:"18px",mb:"4px",width:"30%"}),Object(A.jsx)(k.U,{height:"48px",mb:"2px"}),Object(A.jsx)(k.U,{height:"19px",width:"15%"})]})},we=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(k.B,{mb:"24px",children:[Object(A.jsxs)(k.g,{width:"50%",height:"52px",children:[Object(A.jsx)(k.U,{height:"18px",mb:"4px",width:"70%"}),Object(A.jsx)(k.U,{height:"30px",width:"20%"})]}),Object(A.jsxs)(k.g,{width:"50%",height:"52px",children:[Object(A.jsx)(k.U,{height:"18px",mb:"4px",width:"70%"}),Object(A.jsx)(k.U,{height:"30px",width:"20%"})]})]}),Object(A.jsx)(k.U,{height:"48px",mb:"24px"}),Object(A.jsx)(k.U,{height:"48px",mt:"4px"})]})},Se=function(e){var t=e.ifo,n=e.publicIfoData,r=ce(t),c=r.isPendingTx,a=r.offeringTokenBalance,i=r.refundingAmount,o=r.userInfo,s=r.contract,u=r.setPendingTx,l=r.addUserContributedAmount,j=r.setIsClaimed;return Object(F.b)().account?Object(A.jsxs)(A.Fragment,{children:[t.isActive&&"idle"===n.status&&Object(A.jsx)(ye,{}),!t.isActive&&"idle"===n.status&&Object(A.jsx)(we,{}),"live"===n.status&&Object(A.jsx)(Oe,{ifo:t,contract:s,userInfo:o,isPendingTx:c,publicIfoData:n,addUserContributedAmount:l}),"finished"===n.status&&Object(A.jsx)(ve,{ifo:t,contract:s,userInfo:o,isPendingTx:c,setPendingTx:u,offeringTokenBalance:a,refundingAmount:i,setIsClaimed:j})]}):Object(A.jsx)(z.a,{})},ke=function(e){var t=e.progress;return Object(A.jsx)(k.g,{mb:"16px",children:Object(A.jsx)(k.R,{primaryStep:t})})},Ae=n(873),Ce=w.e.div(p||(p=Object(y.a)(["\n  align-items: center;\n  display: flex;\n  height: 24px;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),Ie=w.e.div(f||(f=Object(y.a)(["\n  color: ",";\n  font-size: 20px;\n  font-weight: 600;\n  text-align: center;\n"])),(function(e){return e.theme.colors.secondary})),Be=function(e){var t=e.status,n=e.secondsUntilStart,r=e.secondsUntilEnd,c=e.block,a=Object(B.a)(),i="coming_soon"===t?n:r,o=Object(Ae.a)(i),s="coming_soon"===t?"start":"finish";return"idle"===t?Object(A.jsx)(k.B,{alignItems:"center",justifyContent:"center",mb:"24px",height:"24px",children:a(656,"Loading...")}):Object(A.jsxs)(Ce,{children:[Object(A.jsx)(Ie,{children:"".concat(o.days,"d, ").concat(o.hours,"h, ").concat(o.minutes,"m until ").concat(s)}),Object(A.jsx)(k.G,{href:"https://bscscan.com/block/countdown/".concat(c),target:"blank",rel:"noopener noreferrer",ml:"8px",children:"(blocks)"})]})},Ee=Object(w.e)(k.n)(x||(x=Object(y.a)(["\n  background-image: ",";\n  background-repeat: no-repeat;\n  background-size: contain;\n  padding-top: 112px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 437px;\n  width: 100%;\n"])),(function(e){var t=e.ifoId;return"url('/images/ifos/".concat(t,"-bg.svg')")})),Te=function(e){var t=e.ifo,n=t.id,r=t.name,c=t.subTitle,a=G(t),i=Object(F.b)().account,o=Object(B.a)(),s=function(e,t){return"coming_soon"===e?Object(A.jsx)(k.r,{variantColor:"textDisabled",text:t(999,"Coming Soon")}):"live"===e?Object(A.jsx)(k.r,{variantColor:"primary",text:t(999,"LIVE NOW!")}):null}(a.status,o);return Object(A.jsxs)(Ee,{ifoId:n,ribbon:s,isActive:"live"===a.status,children:[Object(A.jsxs)(k.o,{children:[Object(A.jsx)($,{ifoId:n,name:r,subTitle:c}),"finished"!==a.status&&t.isActive&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(ke,{progress:a.progress}),Object(A.jsx)(Be,{status:a.status,secondsUntilStart:a.secondsUntilStart,secondsUntilEnd:a.secondsUntilEnd,block:a.startBlockNum})]}),i?Object(A.jsx)(Se,{ifo:t,publicIfoData:a}):Object(A.jsx)(z.a,{fullWidth:!0})]}),Object(A.jsx)(te,{ifo:t,publicIfoData:a})]})},De=Object(w.e)(k.C).attrs({size:"lg"})(O||(O=Object(y.a)(["\n  color: ",";\n  margin-bottom: 16px;\n"])),(function(e){return e.theme.colors.secondary})),Ue=w.e.div(m||(m=Object(y.a)(["\n  align-items: start;\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  padding-bottom: 40px;\n  padding-top: 40px;\n\n  "," {\n    grid-template-columns: ",";\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.md}),(function(e){var t=e.isSingle;return"repeat(".concat(t?1:2,", 1fr)")}));Ue.defaultProps={isSingle:!1};var Xe,Fe,ze=Ue,Pe=Object(w.e)(k.d)(Xe||(Xe=Object(y.a)(["\n  border-top: 2px solid ",";\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 32px;\n  margin: 0 auto;\n  padding: 32px 0;\n\n  "," {\n    grid-template-columns: 1fr 1fr;\n  }\n"])),(function(e){return e.theme.colors.textSubtle}),(function(e){return e.theme.mediaQueries.sm})),Re=w.e.ul(Fe||(Fe=Object(y.a)(["\n  color: ",";\n  margin-bottom: 16px;\n\n  & > li {\n    line-height: 1.4;\n    margin-bottom: 8px;\n  }\n"])),(function(e){return e.theme.colors.text})),_e=X.c.find((function(e){return e.isActive})),Le=function(){var e=Object(B.a)();return Object(A.jsxs)("div",{children:[Object(A.jsx)(ze,{isSingle:!0,children:Object(A.jsx)(Te,{ifo:_e})}),Object(A.jsxs)(Pe,{children:[Object(A.jsxs)("div",{children:[Object(A.jsx)(De,{as:"h2",children:e(592,"How to take part")}),Object(A.jsxs)(k.C,{mb:"16px",children:[e(594,"Before Sale"),":"]}),Object(A.jsxs)(Re,{children:[Object(A.jsx)("li",{children:e(596,"Buy CAKE and BNB tokens")}),Object(A.jsx)("li",{children:e(598,"Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity")})]}),Object(A.jsxs)(k.B,{mb:"16px",children:[Object(A.jsx)(k.H,{href:"https://exchange.pancakeswap.finance/#/swap",mr:"16px",children:e(1060,"Buy CAKE")}),Object(A.jsx)(k.H,{href:"https://exchange.pancakeswap.finance/#/add/ETH/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",children:e(1062,"Get LP tokens")})]}),Object(A.jsxs)(k.C,{mb:"16px",children:[e(600,"During Sale"),":"]}),Object(A.jsx)(Re,{children:Object(A.jsx)("li",{children:e(602,"While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens")})}),Object(A.jsxs)(k.C,{mb:"16px",children:[e(604,"After Sale"),":"]}),Object(A.jsxs)(Re,{children:[Object(A.jsx)("li",{children:e(606,"Claim the tokens you bought, along with any unspent funds.")}),Object(A.jsx)("li",{children:e(608,"Done!")})]}),Object(A.jsx)(k.X,{as:"div",pt:"16px",children:Object(A.jsx)(k.j,{as:"a",variant:"secondary",href:"https://docs.pancakeswap.finance/core-products/ifo-initial-farm-offering",children:e(610,"Read more")})})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)(k.E,{src:"/images/ifo-bunny.svg",alt:"ifo bunny",width:436,height:406,responsive:!0}),Object(A.jsxs)("div",{children:[Object(A.jsx)(De,{as:"h2",children:e(512,"Want to launch your own IFO?")}),Object(A.jsx)(k.X,{mb:3,children:e(514,"Launch your project with PancakeSwap, Binance Smart Chain\u2019s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.")}),Object(A.jsx)(k.j,{as:"a",href:"https://docs.google.com/forms/d/e/1FAIpQLScGdT5rrVMr4WOWr08pvcroSeuIOtEJf1sVdQGVdcAOqryigQ/viewform",external:!0,children:e(516,"Apply to launch")})]})]})]})]})},Ne=X.c.filter((function(e){return!e.isActive})),Me=function(){return Object(A.jsx)(ze,{children:Ne.map((function(e){return Object(A.jsx)(Te,{ifo:e},e.id)}))})};t.default=function(){var e=Object(g.i)().path;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(U,{}),Object(A.jsxs)(v.a,{children:[Object(A.jsx)(I,{}),Object(A.jsx)(g.b,{exact:!0,path:"".concat(e),children:Object(A.jsx)(Le,{})}),Object(A.jsx)(g.b,{path:"".concat(e,"/history"),children:Object(A.jsx)(Me,{})})]})]})}},848:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}n.d(t,"a",(function(){return r}))},851:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(2),c=n.n(r),a=n(11),i=n(20),o=n(0),s=n(13),u=n.n(s),l=n(25),j=n(38),d=n(65),b=n(152),p=function(){var e=Object(b.a)().slowRefresh,t=Object(o.useState)(),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(o.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(j.d)(),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,s(new u.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r},f=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),r=n[0],s=n[1],l=Object(b.a)().slowRefresh,p=Object(d.a)();return Object(o.useEffect)((function(){(function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(j.a)(e,p),t.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:r=t.sent,s(new u.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[p,e,l]),r};t.a=function(e){var t=Object(o.useState)(new u.a(0)),n=Object(i.a)(t,2),r=n[0],s=n[1],p=Object(l.b)().account,f=Object(d.a)(),x=Object(b.a)().fastRefresh;return Object(o.useEffect)((function(){p&&function(){var t=Object(a.a)(c.a.mark((function t(){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(j.a)(e,f),t.next=3,n.methods.balanceOf(p).call();case 3:r=t.sent,s(new u.a(r));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[p,e,f,x]),r}},859:function(e,t,n){"use strict";var r,c,a,i=n(15),o=(n(0),n(7)),s=n(12),u=n(44),l=n(4),j=Object(o.e)(s.j)(r||(r=Object(i.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),d={width:"24px",color:"textDisabled"},b=Object(o.e)(s.x).attrs(d)(c||(c=Object(i.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),p=Object(o.e)(s.v).attrs(d)(a||(a=Object(i.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),f=Object(l.jsx)(s.c,{spin:!0,color:"currentColor"});t.a=function(e){var t=e.isApproveDisabled,n=e.isApproving,r=e.isConfirming,c=e.isConfirmDisabled,a=e.onApprove,i=e.onConfirm,o=Object(u.a)();return Object(l.jsxs)(s.B,{py:"8px",flexDirection:["column",null,"row"],alignItems:"center",children:[Object(l.jsx)(j,{disabled:t,onClick:a,endIcon:n?f:void 0,isLoading:n,children:n?o(800,"Approving"):o(564,"Approve")}),Object(l.jsx)(b,{}),Object(l.jsx)(p,{}),Object(l.jsx)(j,{onClick:i,disabled:c,isLoading:r,endIcon:r?f:void 0,children:r?o(802,"Confirming"):o(464,"Confirm")})]})}},860:function(e,t,n){"use strict";var r=n(20),c=n(18),a=n(0),i=n(81),o=n(25),s=n(62),u={approvalState:"idle",approvalReceipt:null,approvalError:null,confirmState:"idle",confirmReceipt:null,confirmError:null},l=function(e,t){switch(t.type){case"requires_approval":return Object(c.a)(Object(c.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(c.a)(Object(c.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(c.a)(Object(c.a)({},e),{},{approvalState:"success",approvalReceipt:t.payload});case"approve_error":return Object(c.a)(Object(c.a)({},e),{},{approvalState:"fail",approvalError:t.payload});case"confirm_sending":return Object(c.a)(Object(c.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(c.a)(Object(c.a)({},e),{},{confirmState:"success",confirmReceipt:t.payload});case"confirm_error":return Object(c.a)(Object(c.a)({},e),{},{confirmState:"fail",confirmError:t.payload});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,c=e.onRequiresApproval,j=e.onSuccess,d=void 0===j?i.noop:j,b=Object(o.b)().account,p=Object(a.useReducer)(l,u),f=Object(r.a)(p,2),x=f[0],O=f[1],m=Object(a.useRef)(c),h=Object(s.r)().toastError;return Object(a.useEffect)((function(){b&&m.current&&m.current().then((function(e){e&&O({type:"requires_approval"})}))}),[b,m,O]),{isApproving:"loading"===x.approvalState,isApproved:"success"===x.approvalState,isConfirming:"loading"===x.confirmState,isConfirmed:"success"===x.confirmState,approvalReceipt:x.approvalReceipt,approvalError:x.approvalError,confirmReceipt:x.confirmReceipt,confirmError:x.confirmError,handleApprove:function(){t().on("sending",(function(){O({type:"approve_sending"})})).on("receipt",(function(e){O({type:"approve_receipt",payload:e})})).on("error",(function(e){O({type:"approve_error",payload:e}),console.error("An error occurred approving transaction:",e),h("An error occurred approving transaction")}))},handleConfirm:function(){n().on("sending",(function(){O({type:"confirm_sending"})})).on("receipt",(function(e){O({type:"confirm_receipt",payload:e}),d(x)})).on("error",(function(e){O({type:"confirm_error",payload:e}),console.error("An error occurred confirming transaction:",e),h("An error occurred confirming transaction")}))}}}},868:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return p}));var r=n(2),c=n.n(r),a=n(11),i=n(20),o=n(0),s=n(13),u=n.n(s),l=n(25),j=n(24),d=n(48),b=function(){var e=Object(o.useState)(new u.a(0)),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(l.b)().account,b=Object(d.c)();return Object(o.useEffect)((function(){var e=function(){var e=Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.methods.allowance(s,Object(j.f)()).call();case 2:t=e.sent,r(new u.a(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s&&e();var t=setInterval(e,1e4);return function(){return clearInterval(t)}}),[s,b]),n},p=function(e,t,n){var r=Object(l.b)().account,s=Object(o.useState)(new u.a(0)),j=Object(i.a)(s,2),d=j[0],b=j[1];return Object(o.useEffect)((function(){(function(){var n=Object(a.a)(c.a.mark((function n(){var a;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.methods.allowance(r,t).call();case 3:a=n.sent,b(new u.a(a)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}})()()}),[r,t,e,n]),d}},873:function(e,t,n){"use strict";var r=3600,c=86400,a=2629800,i=31557600;t.a=function(e){var t=e,n={years:0,months:0,days:0,hours:0,minutes:0,seconds:0};return t>=i&&(n.years=Math.floor(t/i),t-=n.years*i),t>=a&&(n.months=Math.floor(t/a),t-=n.months*a),t>=c&&(n.days=Math.floor(t/c),t-=n.days*c),t>=r&&(n.hours=Math.floor(t/r),t-=n.hours*r),t>=60&&(n.minutes=Math.floor(t/60),t-=60*n.minutes),n.seconds=t,n}}}]);
//# sourceMappingURL=7.7c65de9c.chunk.js.map