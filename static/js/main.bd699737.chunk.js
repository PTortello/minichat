(this.webpackJsonpminichat=this.webpackJsonpminichat||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(16),i=n.n(a),s=(n(23),n(10)),o=n.n(s),u=n(14),j=n(11),d=(n(25),n(9)),b=(n(31),n(27),n(17)),h=n(18),l=n(4);d.a.initializeApp({apiKey:"AIzaSyBrbQbnUZmYNLtp4raiFoZZCiC3b1IbVhU",authDomain:"minichat-jvt.firebaseapp.com",projectId:"minichat-jvt",storageBucket:"minichat-jvt.appspot.com",messagingSenderId:"394826412413",appId:"1:394826412413:web:fb270f8d153a6945455c14"});var p=d.a.auth(),m=d.a.firestore();function f(){return Object(l.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Entrar com Google"})}function O(){return p.currentUser&&Object(l.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sair"})}function v(){var e=m.collection("messages"),t=e.orderBy("createdAt").limit(100),n=Object(h.a)(t,{idField:"id"}),r=Object(j.a)(n,1)[0],a=Object(c.useState)(""),i=Object(j.a)(a,2),s=i[0],b=i[1],f=Object(c.useState)(0),O=Object(j.a)(f,2),v=O[0],x=O[1],N=Object(c.useRef)(),y=function(){var t=Object(u.a)(o.a.mark((function t(){var n,c=arguments;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:0,t.next=3,e.doc("counter").set({current:n});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){N.current.scrollIntoView({behavior:"smooth"})}),[r]),Object(c.useEffect)((function(){e.doc("counter").get().then((function(e){x(e.data().current)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{children:[r&&r.map((function(e){return Object(l.jsx)(g,{message:e},e.id)})),Object(l.jsx)("div",{ref:N})]}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n,c=p.currentUser,r=c.uid,a=c.photoURL,i=c.displayName;n=function(){var t=Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.doc(v.toString()).set({text:s,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:a,displayName:i});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e.doc("counter").get().then((function(e){x(e.data().current)})),n(),b(""),99===v?y():y(v+1)},children:[Object(l.jsx)("input",{autoFocus:!0,maxLength:"200",placeholder:"Envie uma mensagem",value:s,onChange:function(e){return b(e.target.value)}}),Object(l.jsx)("button",{type:"submit",children:"\ud83d\udcac"})]})]})}function g(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,a=t.displayName,i=c===p.currentUser.uid?"sent":"received";return Object(l.jsxs)("div",{className:"message ".concat(i),children:[Object(l.jsx)("img",{src:r,alt:"avatar"}),Object(l.jsxs)("p",{children:[a,": ",n]})]})}var x=function(){var e=Object(b.a)(p),t=Object(j.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsxs)("div",{className:"grid-container",children:[Object(l.jsx)("div",{children:"minichat! \ud83e\udd86"}),Object(l.jsx)("div",{className:"grid-right",children:Object(l.jsx)(O,{})})]})}),Object(l.jsx)("section",{children:t?Object(l.jsx)(v,{}):Object(l.jsx)(f,{})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),N()}},[[30,1,2]]]);
//# sourceMappingURL=main.bd699737.chunk.js.map