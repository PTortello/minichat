(this.webpackJsonpminichat=this.webpackJsonpminichat||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var i=n(3),c=n.n(i),a=n(15),r=n.n(a),s=(n(23),n(13)),o=n.n(s),u=n(16),j=n(10),d=(n(25),n(9)),l=(n(31),n(27),n(17)),m=n(18),b=n(4);d.a.initializeApp({apiKey:"AIzaSyBrbQbnUZmYNLtp4raiFoZZCiC3b1IbVhU",authDomain:"minichat-jvt.firebaseapp.com",projectId:"minichat-jvt",storageBucket:"minichat-jvt.appspot.com",messagingSenderId:"394826412413",appId:"1:394826412413:web:fb270f8d153a6945455c14"});var h=d.a.auth(),p=d.a.firestore();function f(){return Object(b.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;h.signInWithPopup(e)},children:"Entrar com Google"})}function v(){return h.currentUser&&Object(b.jsx)("button",{className:"sign-out",onClick:function(){return h.signOut()},children:"Sair"})}function O(){var e=p.collection("messages"),t=e.orderBy("timestamp").limit(1e3),n=Object(m.a)(t,{idField:"id"}),c=Object(j.a)(n,1)[0],a=Object(i.useState)(""),r=Object(j.a)(a,2),s=r[0],l=r[1],f=Object(i.useRef)(),v=function(){var t=new Date(Date.now()-6e5);e.get().then((function(e){e.forEach((function(e){var n=e.data().timestamp;(null===n||void 0===n?void 0:n.toDate())<t&&e.ref.delete()}))}))},O=function(){var t=Object(u.a)(o.a.mark((function t(n){var i,c,a,r,u,j;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!(s.length>0)){t.next=8;break}return i=h.currentUser,c=i.uid,a=i.photoURL,r=i.displayName,u=d.a.firestore.Timestamp.now().toDate().toString().slice(4,24),j=u.slice(12,20)+" "+u.slice(0,11),t.next=7,e.doc(r+"-"+j).set({text:s,timestamp:d.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:a,displayName:r});case 7:l("");case 8:v();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){f.current.scrollIntoView({behavior:"smooth"})}),[e]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("main",{children:[c&&c.map((function(e){return Object(b.jsx)(g,{message:e},e.id)})),Object(b.jsx)("div",{ref:f})]}),Object(b.jsxs)("form",{onSubmit:O,children:[Object(b.jsx)("input",{autoFocus:!0,maxLength:"200",placeholder:"Envie uma mensagem",value:s,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"\ud83d\udcac"})]})]})}function g(e){var t=e.message,n=t.text,i=t.uid,c=t.photoURL,a=t.displayName,r=i===h.currentUser.uid?"sent":"received";return Object(b.jsxs)("div",{className:"message ".concat(r),children:[Object(b.jsx)("img",{src:c,alt:"avatar"}),Object(b.jsxs)("p",{children:[a,": ",n]})]})}var x=function(){var e=Object(l.a)(h),t=Object(j.a)(e,1)[0];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsxs)("div",{className:"grid-container",children:[Object(b.jsx)("div",{children:"minichat! \ud83e\udd86"}),Object(b.jsx)("div",{className:"grid-right",children:Object(b.jsx)(v,{})})]})}),Object(b.jsx)("section",{children:t?Object(b.jsx)(O,{}):Object(b.jsx)(f,{})})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),N()}},[[30,1,2]]]);
//# sourceMappingURL=main.4a917994.chunk.js.map