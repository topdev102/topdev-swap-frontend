(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1093:function(e,t,n){"use strict";n.r(t);var r,c,a,s,i,o,l,u,b,d,j,f,p,O,h,x=n(15),m=n(0),v=n(7),g=n(12),y=n(44),k=n(151),w=n(2),C=n.n(w),I=n(30),S=n(18),F=n(11),T=n(20),N=n(171),W=n.n(N),U=n(131),D=n(25),P=n(38),E=n(861),X=n(153),A=n(62),L=v.e.div(r||(r=Object(x.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),_=n(125),B=n.n(_),R=n(48),J=n(4),Q=Object(v.e)(g.X)(c||(c=Object(x.a)(["\n  font-weight: 600;\n"]))),z=v.e.div(a||(a=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),Y=v.e.div(s||(s=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),q=v.e.label(i||(i=Object(x.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),G=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),s=Object(T.a)(a,2),i=s[0],o=s[1],l=Object(m.useState)(""),u=Object(T.a)(l,2),b=u[0],d=u[1],j=Object(m.useState)(null),f=Object(T.a)(j,2),p=f[0],O=f[1],h=Object(y.a)(),x=Object(D.b)().account,v=Object(R.j)(),k=Object(A.r)().toastSuccess,w=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,B.a.utils.isAddress(b)){e.next=6;break}O(h(999,"Please enter a valid wallet address")),e.next=8;break;case 6:return e.next=8,v.methods.transferFrom(x,b,n[0]).send({from:x}).on("sending",(function(){o(!0)})).on("receipt",(function(){c(),r(),k("NFT successfully transferred!")})).on("error",(function(){console.error(p),O("Unable to transfer NFT"),o(!1)}));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(J.jsxs)(g.L,{title:h(999,"Transfer NFT"),onDismiss:c,children:[Object(J.jsxs)(z,{children:[p&&Object(J.jsx)(g.X,{color:"failure",mb:"8px",children:p}),Object(J.jsxs)(L,{children:[Object(J.jsxs)(g.X,{children:[h(999,"Transferring"),":"]}),Object(J.jsx)(Q,{children:'1x "'.concat(t.name,'" NFT')})]}),Object(J.jsxs)(q,{htmlFor:"transferAddress",children:[h(999,"Receiving address"),":"]}),Object(J.jsx)(g.F,{id:"transferAddress",name:"address",type:"text",placeholder:h(999,"Paste address"),value:b,onChange:function(e){var t=e.target.value;d(t)},isWarning:p,disabled:i})]}),Object(J.jsxs)(Y,{children:[Object(J.jsx)(g.j,{fullWidth:!0,variant:"secondary",onClick:c,children:h(462,"Cancel")}),Object(J.jsx)(g.j,{fullWidth:!0,onClick:w,disabled:!x||i||!b,children:h(464,"Confirm")})]})]})},H=v.e.div(o||(o=Object(x.a)(["\n  margin-bottom: 16px;\n"]))),K=v.e.div(l||(l=Object(x.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),M=function(e){var t=e.nft,n=e.onSuccess,r=e.onDismiss,c=Object(m.useState)(!1),a=Object(T.a)(c,2),s=a[0],i=a[1],o=Object(y.a)(),l=Object(D.b)().account,u=Object(A.r)(),b=u.toastError,d=u.toastSuccess,j=Object(R.b)(),f=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.methods.mintNFT(t.bunnyId).send({from:l}).on("sending",(function(){i(!0)})).on("receipt",(function(){d("Successfully claimed!"),r(),n()})).on("error",(function(e){console.error("Unable to claim NFT",e),b("Error","Unable to claim NFT, please try again."),i(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(J.jsxs)(g.L,{title:o(999,"Claim Collectible"),onDismiss:r,children:[Object(J.jsx)(H,{children:Object(J.jsxs)(g.B,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(J.jsxs)(g.X,{children:[o(626,"You will receive"),":"]}),Object(J.jsx)(g.X,{bold:!0,children:'1x "'.concat(t.name,'" Collectible')})]})}),Object(J.jsxs)(K,{children:[Object(J.jsx)(g.j,{fullWidth:!0,variant:"secondary",onClick:r,children:o(462,"Cancel")}),Object(J.jsx)(g.j,{fullWidth:!0,onClick:f,disabled:!l||s,children:o(464,"Confirm")})]})]})},V=v.e.div(u||(u=Object(x.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.borderColor})),Z=v.e.img(b||(b=Object(x.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 32px 32px 0 0;\n"]))),$=v.e.video(d||(d=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n"]))),ee=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,s=t.video,i="/images/nfts/".concat(c.lg);if(s){var o=Object(J.jsxs)($,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:i,children:[Object(J.jsx)("source",{src:s.webm,type:"video/webm"}),Object(J.jsx)("source",{src:s.mp4,type:"video/mp4"})]});return r?Object(J.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var l=Object(J.jsx)(Z,{src:i,alt:a});return Object(J.jsx)(V,{children:r?Object(J.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:l}):l})},te=Object(v.e)(L)(j||(j=Object(x.a)(["\n  min-height: 28px;\n"]))),ne=Object(v.e)(g.j).attrs({variant:"text",fullWidth:!0})(f||(f=Object(x.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),re=v.e.div(p||(p=Object(x.a)(["\n  padding: 24px;\n"]))),ce=function(e){var t,n=e.nft,r=e.onSuccess,c=e.canClaim,a=void 0!==c&&c,s=e.tokenIds,i=void 0===s?[]:s,o=Object(m.useState)(!1),l=Object(T.a)(o,2),u=l[0],b=l[1],d=Object(y.a)(),j=Object(A.o)().profile,f=n.bunnyId,p=n.name,O=n.description,h=i.length>0,x=u?g.y:g.v,v=function(){var e=Object(F.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(!u);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=Object(g.jb)(Object(J.jsx)(G,{nft:n,tokenIds:i,onSuccess:r})),w=Object(T.a)(k,1)[0],I=Object(g.jb)(Object(J.jsx)(M,{nft:n,onSuccess:r})),S=Object(T.a)(I,1)[0];return Object(J.jsxs)(g.n,{isActive:h||a,children:[Object(J.jsx)(ee,{nft:n,isOwned:h}),Object(J.jsxs)(g.o,{children:[Object(J.jsxs)(te,{children:[Object(J.jsx)(g.C,{children:p}),h&&Object(J.jsx)(g.W,{outline:!0,variant:"secondary",children:d(999,"In Wallet")}),(null===j||void 0===j||null===(t=j.nft)||void 0===t?void 0:t.bunnyId)===f&&Object(J.jsx)(g.W,{outline:!0,variant:"success",children:d(999,"Profile Pic")})]}),a&&Object(J.jsx)(g.j,{fullWidth:!0,mt:"24px",onClick:S,children:d(999,"Claim this NFT")}),h&&Object(J.jsx)(g.j,{fullWidth:!0,variant:"secondary",mt:"24px",onClick:w,children:d(999,"Transfer")})]}),Object(J.jsxs)(g.p,{p:"0",children:[Object(J.jsx)(ne,{endIcon:Object(J.jsx)(x,{width:"24px",color:"primary"}),onClick:v,children:d(658,"Details")}),u&&Object(J.jsx)(re,{children:Object(J.jsx)(g.X,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:O})})]})]})},ae=v.e.div(O||(O=Object(x.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),se=Object(P.c)(),ie=function(){var e=Object(m.useState)({}),t=Object(T.a)(e,2),n=t[0],r=t[1],c=Object(E.a)(),a=c.nfts,s=c.refresh,i=Object(D.b)().account,o=Object(A.r)().toastError,l=Object(m.useCallback)(function(){var e=Object(F.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(X.a)(U.a.map((function(e){return se.methods.canClaimSingle(t,e.bunnyId).call})));case 3:n=e.sent,r(n.reduce((function(e,t,n){return Object(S.a)(Object(S.a)({},e),{},Object(I.a)({},U.a[n].bunnyId,t))}),{})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),o("Error checking NFT claimable status");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[r,o]),u=function(){s(),l(i)};return Object(m.useEffect)((function(){i&&l(i)}),[i,l]),Object(J.jsx)(ae,{children:W()(U.a,"sortOrder").map((function(e){var t=a[e.bunnyId]?a[e.bunnyId].tokenIds:[];return Object(J.jsx)("div",{children:Object(J.jsx)(ce,{nft:e,canClaim:n[e.bunnyId],tokenIds:t,onSuccess:u})},e.name)}))})},oe=v.e.div(h||(h=Object(x.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(y.a)();return Object(J.jsxs)(k.a,{children:[Object(J.jsx)(oe,{children:Object(J.jsx)(g.C,{as:"h1",size:"xxl",color:"secondary",children:e(999,"Pancake Collectibles")})}),Object(J.jsx)(ie,{})]})}},861:function(e,t,n){"use strict";var r=n(30),c=n(60),a=n(2),s=n.n(a),i=n(11),o=n(20),l=n(18),u=n(25),b=n(0),d=n(38),j=n(153),f=Object(d.j)(),p={isLoading:!0,nfts:{},lastUpdated:Date.now()},O=function(e,t){switch(t.type){case"set_nfts":return Object(l.a)(Object(l.a)({},p),{},{isLoading:!1,nfts:t.data});case"refresh":return Object(l.a)(Object(l.a)({},p),{},{lastUpdated:t.timestamp});case"reset":return Object(l.a)(Object(l.a)({},p),{},{isLoading:!1});default:return e}};t.a=function(){var e=Object(b.useReducer)(O,p),t=Object(o.a)(e,2),n=t[0],a=t[1],d=Object(u.b)().account,h=n.lastUpdated;Object(b.useEffect)((function(){d&&function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,u,b,p,O;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.methods.balanceOf(d).call();case 3:if(!((t=e.sent)>0)){e.next=16;break}for(n={},u=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,c,a,i,l,u,b,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=f.methods,r=n.tokenOfOwnerByIndex,c=n.getBunnyId,a=n.tokenURI,e.next=4,r(d,t).call();case 4:return i=e.sent,e.next=7,Object(j.a)([c(i).call,a(i).call]);case 7:return l=e.sent,u=Object(o.a)(l,2),b=u[0],p=u[1],e.abrupt("return",[Number(b),Number(i),p]);case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),b=[],p=0;p<t;p++)b.push(u(p));return e.next=11,Promise.all(b);case 11:O=e.sent,n=O.reduce((function(e,t){if(!t)return e;var n=Object(o.a)(t,3),a=n[0],s=n[1],i=n[2];return Object(l.a)(Object(l.a)({},e),{},Object(r.a)({},a,{tokenUri:i,tokenIds:e[a]?[].concat(Object(c.a)(e[a].tokenIds),[s]):[s]}))}),{}),a({type:"set_nfts",data:n}),e.next=17;break;case 16:a({type:"reset"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),a({type:"reset"});case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}()()}),[d,h,a]);return Object(l.a)(Object(l.a)({},n),{},{refresh:function(){return a({type:"refresh",timestamp:Date.now()})}})}}}]);
//# sourceMappingURL=13.db3bd2af.chunk.js.map