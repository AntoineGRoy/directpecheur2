(this.webpackJsonpdirectpecheur2=this.webpackJsonpdirectpecheur2||[]).push([[0],{32:function(e,t,n){},49:function(e,t,n){},57:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),o=n(50),i=n.n(o),a=(n(57),n(6)),s=n(8),l=n(44),u=n(12),d=n(25),j=n(13),b=n.n(j),h=n(18),p=n(27),f=n(17),m=(n(61),n(62),{apiKey:"AIzaSyAlBaCFinB-aIngyUsjgwjRxGvyrJmnA-c",authDomain:"direct-pecheur.firebaseapp.com",databaseURL:"https://direct-pecheur-default-rtdb.firebaseio.com",projectId:"direct-pecheur",storageBucket:"direct-pecheur.appspot.com",messagingSenderId:"818286468462",appId:"1:818286468462:web:6724b007647e3f9d92b57f",measurementId:"G-GJJZR103LJ"}),O=f.a.initializeApp(m).firestore(),g=f.a.auth(),x=(f.a.firestore(),f.a.storage());x.ref();function v(e,t){return g.createUserWithEmailAndPassword(e,t)}function y(e,t,n,r,c,o){return O.collection("users").doc(g.currentUser.uid).set({phone:e,email:t,address:n,password:r,username:c,id:o}).then((function(){console.log("Document successfully written!"+g.currentUser)})).catch((function(e){console.error("Error writing document: ",e)}))}function w(e,t){var n=e.toLowerCase();return g.signInWithEmailAndPassword(n,t)}var S=n(73),k=n.p+"static/media/bluehook.8491f50b.svg",I=n(2),C=function(){var e=Object(r.useState)({error:"",email:"",password:""}),t=Object(a.a)(e,2),n=t[0],c=t[1];function o(e){console.log(n),c(Object(s.a)(Object(s.a)({},n),{},Object(p.a)({},e.target.name,e.target.value)))}function i(){return(i=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(Object(s.a)(Object(s.a)({},n),{},{error:""})),e.prev=2,e.next=5,w(n.email,n.password);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),c({error:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}return Object(I.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(I.jsx)("h1",{children:"Login to Chatty Cats"}),Object(I.jsxs)("form",{autoComplete:"off",onSubmit:function(e){return i.apply(this,arguments)},children:[Object(I.jsx)("div",{children:Object(I.jsx)("input",{style:{fontSize:24,height:32,width:"auto",padding:12,margin:"1rem"},placeholder:"Email",name:"email",type:"email",onChange:o,value:n.email})}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{style:{fontSize:24,height:32,width:"auto",padding:12,margin:"1rem"},placeholder:"Password",name:"password",onChange:o,value:n.password,type:"password"})}),Object(I.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[n.error?Object(I.jsx)("p",{children:n.error}):null,Object(I.jsx)(S.a.button,{style:{background:"rebeccapurple",color:"white",border:0,borderRadius:12,paddingTop:7,margin:24,fontSize:24,cursor:"pointer"},whileHover:{scale:1.2},type:"submit",children:Object(I.jsx)("img",{alt:"login",style:{height:"3rem"},src:k})})]}),Object(I.jsx)("hr",{}),Object(I.jsxs)("p",{children:["Don't have an account? ",Object(I.jsx)(d.b,{to:"/signup",children:"Sign up"})]})]})]})},D=(n(68),n.p+"static/media/hook.923c7084.svg"),N=function(){return Object(I.jsx)("div",{classsName:"home-container",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:Object(I.jsxs)(S.a.div,{style:{textAlign:"center"},initial:{y:500,color:"#000"},animate:{y:-20,color:["#552B72","#8A2E60","#CECE66","#FFFFFF"]},transition:{duration:1.5,delay:.1},children:[" ",Object(I.jsx)("div",{style:{marginTop:"2rem"},children:Object(I.jsx)("img",{width:"250px",src:D})}),Object(I.jsx)("h1",{style:{color:"rgba(59, 89, 147, 1)"},children:"Bienvenue chez Direct-P\xeacheur!"}),Object(I.jsx)(d.b,{className:"button-style-link",to:"/signup",style:{textDecoration:"none",margin:12,padding:12,borderRadius:12,background:"rgba(59, 89, 147, 1)",color:"white",fontSize:"2rem"},children:"S'inscrire"}),Object(I.jsx)(d.b,{className:"button-style-link",to:"/login",style:{textDecoration:"none",margin:12,padding:12,borderRadius:12,background:"white",border:"2px solid rgba(59, 89, 147, 1)",color:"rgba(59, 89, 147, 1)",fontSize:"2rem"},children:"Entrer"})]})})},E=n(34),U=function(e){O.collection("users").doc(g.currentUser.uid).get().then((function(t){if(t.exists){console.log("Document data:",t.data());var n=t.data();e(Object(s.a)({},n))}else console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}))},A=Object(r.createContext)(),P=n(74),z=(n(32),function(){var e=Object(h.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&t&&O.collection("orders").doc(n).collection("products").doc(t).delete().then((function(){console.log("Document successfully deleted!")})).catch((function(e){console.error("Error removing document: ",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),T=function(){var e=Object(h.a)(b.a.mark((function e(t,n,r,c,o,i,a,s,l,u){var d;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d={quantity:i,orderUID:c,price:r,name:s,productUID:a,postedAt:(new Date).toISOString(),sentBy:l,userUID:u},O.collection("orders").doc(c).collection("products").add(d).then((function(e){O.collection("orders").doc(c).collection("products").doc(e.id).set({id:e.id},{merge:!0})})).then((function(){t(!1)})).catch((function(e){n("Erreur!"),console.error("Error adding document: ",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n,r,c,o,i,a,s,l,u){return e.apply(this,arguments)}}(),_=function(){var e=Object(h.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,e.next=3,O.collection("products").doc(t).get().then((function(e){return r=e.data().quantity})).catch((function(e){console.error("Error getting document: ",e)}));case 3:e.sent,console.log(r+"**********************************************************************************************"),c=r+n,O.collection("products").doc(t).set({quantity:c},{merge:!0}).then((function(){console.log("Quantity Value for my product successfully updated!")})).catch((function(e){console.error("Error writing document: ",e)}));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),R=function(e){var t=e.setTotalPrice,n=e.product,c=e.setOrderUID,o=e.orderUID,i=(e.order,e.setOrder,e.userInfos),s=e.detailsAreShown,l=e.setDetailsAreShown,u=(e.containerIsShown,e.setContainerIsShown),d=Object(r.useState)(""),j=Object(a.a)(d,2),b=j[0],h=j[1];console.log(o),console.log(i.username);var p=Object(r.useState)(0),f=Object(a.a)(p,2),m=f[0],O=f[1],g=function(){l(!1),u(!1),O(0)};return Object(I.jsxs)("div",{className:"product-container ".concat(s?"product-container-expanded":void 0),children:[Object(I.jsxs)("div",{className:"name-container",style:{width:"100%",background:"navy",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(I.jsx)("h3",{style:{color:"white",margin:"16px 32px"},children:n.name}),Object(I.jsx)("div",{className:"close-x",onClick:g,children:"X"})]}),Object(I.jsxs)("div",{style:{color:"white"},children:[Object(I.jsx)("div",{className:"img-container",children:Object(I.jsx)("img",{alt:"avatar-".concat(n.name),style:{cursor:"pointer"},src:n.img_url,className:"avatar"})}),Object(I.jsxs)("ul",{children:[Object(I.jsxs)("li",{children:["Prix au kilo: ",n.prix_au_kilo,"\u20ac","    "]}),Object(I.jsxs)("li",{style:{paddingBottom:"16px"},children:["Qantit\xe9 conseill\xe9e par personne : ",n.part_value,"g"]})]})]}),Object(I.jsxs)("div",{className:"input-button-container",children:[Object(I.jsx)("label",{style:{padding:"16px",fontSize:16,color:"white"},children:"Quantit\xe9 d\xe9sir\xe9e en grammes"}),Object(I.jsx)("span",{style:{color:"red",padding:b&&8,background:"white"},children:b}),Object(I.jsxs)("form",{onSubmit:function(e){if(console.log(m),console.log(n.part_value),e.preventDefault(),m&&m>n.part_value&&m<n.quantity-1){var r=n.prix_au_kilo/1e3*m;T(l,h,r,o,c,m,n.id,n.name,i.username,i.id),_(n.id,parseInt(-m,10)),O(""),l(!1),u(!1),t((function(e){return e+r}))}else h("Quantit\xe9 Insuffisante!")},children:[Object(I.jsx)("input",{label:"Quantit\xe9 d\xe9sir\xe9e en grammes",style:{fontSize:18,textAlign:"right"},className:"product-input",value:m,onChange:function(e){O(e.target.value)}}),Object(I.jsx)("button",{className:"input-button",type:"submit",children:Object(I.jsx)("img",{style:{height:"2.5rem",width:"2.5rem"},src:k})}),Object(I.jsx)("button",{className:"input-button",style:{color:"white"},onClick:g,children:"Annuler"})]})]})]})},L=function(e){var t=e.detailsAreShown,n=e.setDetailsAreShown,c=e.setTotalPrice,o=e.userInfos,i=e.order,s=e.setOrder,l=e.orderUID,u=e.setOrderUID,d=e.product;console.log(i);var j=Object(r.useState)(null),b=Object(a.a)(j,2),h=b[0],p=b[1],f=Object(r.useState)(!1),m=Object(a.a)(f,2),O=m[0],g=m[1];var x=Object(r.useCallback)((function(){d.name&&(d.name.length>12?p(300/d.name.length):p(22))}),[d.name]);return Object(r.useEffect)(x,[d.name]),Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{onClick:function(){n(!t),g(!O),console.log(l),console.log(i),console.log(o)},className:"order-container",children:[Object(I.jsx)("div",{className:"img-container",children:Object(I.jsx)("img",{alt:"avatar-".concat(d.name),style:{cursor:"pointer"},src:d.img_url,className:t?"avatar avatar-reduced":"avatar"})}),Object(I.jsx)("h2",{style:{fontSize:h},className:"name",children:d.name}),Object(I.jsxs)("h2",{style:{fontSize:h},className:"name",children:[d.prix_au_kilo,"\u20ac/Kg"]}),Object(I.jsxs)("h2",{style:{fontSize:h},className:"name",children:[d.quantity/1e3,"Kg disponibles!"]})]}),O&&Object(I.jsx)(P.a,{children:Object(I.jsx)(S.a.div,{initial:{height:0,width:0,position:"absolute",top:0,left:0,transform:"translate(0,0)"},animate:{height:"auto",width:"auto",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},exit:{height:0,width:0,position:"absolute",top:0,right:0,transform:"translate(0,0)"},style:{zIndex:99},children:Object(I.jsx)(R,{product:d,order:s,setOrder:s,orderUID:l,setOrderUID:u,userInfos:o,detailsAreShown:t,setDetailsAreShown:n,setContainerIsShown:g,containerIsShown:O,setTotalPrice:c})},d.id)})]})},W=function(e){var t=e.setTotalPrice,n=e.userInfos,c=e.products,o=e.order,i=e.setOrder,s=e.orderUID,l=e.setOrderUID;console.log(c);var u=Object(r.useState)(!1),d=Object(a.a)(u,2),j=d[0],b=d[1];return Object(I.jsx)("div",{children:Object(I.jsxs)("div",{style:{display:"flex",width:"auto",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},children:[c&&null!==c[0]&&c.map((function(e,r){return Object(I.jsx)(L,{detailsAreShown:j,setDetailsAreShown:b,setTotalPrice:t,userInfos:n,product:e,order:o,setOrder:i,orderUID:s,setOrderUID:l,contactUID:e},e+r+"key")})),!c&&Object(I.jsx)("p",{children:"loading..."})]})},"product-list")},F=(n.p,function(e){var t=e.index,n=e.product,c=(e.orderUID,e.setTotalPrice),o=e.setOrder,i=Object(r.useContext)(A),s=(i.userInfos,i.setUserInfos,Object(r.useState)(null)),l=Object(a.a)(s,2),u=l[0],d=l[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),h=b[0];b[1];return Object(r.useEffect)((function(){n.name&&(n.name.length>12?(d(300/n.name.length),c((function(e){return e+n.price}))):d(22))}),[n]),Object(r.useEffect)((function(){console.log(n)}),[h]),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{children:[Object(I.jsxs)("h2",{style:{fontSize:u},className:"name",children:[n.quantity,"g de ",n.name,": ",Object(I.jsxs)("b",{children:[n.price,"\u20ac"]})]}),Object(I.jsx)("span",{style:{cursor:"pointer",pointerEvents:"auto",fontWeight:"bold"},onClick:function(){z(n.id,n.orderUID),_(n.productUID,parseInt(-n.quantity,10)),c((function(e){return e-n.price})),o((function(e){return e.splice(t,0)})),console.log("click")},children:"X retirer"})]})})}),q=function(e){var t=e.userInfos,n=e.orderUID,c=e.order,o=e.setOrder,i=e.totalPrice,l=e.setTotalPrice,u=Object(r.useState)(!1),d=Object(a.a)(u,2),j=d[0],b=d[1],h=Object(r.useState)("d\xe8s que possible"),p=Object(a.a)(h,2),f=p[0],m=p[1],g=Object(r.useState)(""),x=Object(a.a)(g,2),v=x[0],y=x[1],w=Object(r.useState)(!1),S=Object(a.a)(w,2),k=S[0],C=S[1],D=Object(r.useState)(!1),N=Object(a.a)(D,2),E=N[0],U=N[1];return console.log(c),Object(r.useEffect)((function(){console.log("NEWORDER")}),[c]),Object(I.jsxs)("div",{children:[j&&Object(I.jsxs)("div",{style:{fontSize:24,postion:"absolute",width:"90vw",height:"90vh",textAlign:"center"},children:["Merci! ",Object(I.jsx)("br",{}),"Nous avons bien re\xe7u votre commande!"]}),Object(I.jsxs)("div",{style:{display:"flex",width:"auto",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},children:[t.username&&0===c.length&&Object(I.jsx)("h2",{children:"Fa\xeetes votre choix..."}),t&&n&&c[0]&&c.map((function(e,t){return Object(I.jsx)(F,{index:t,setTotalPrice:l,product:e,setOrder:o,orderUID:n},e+t+"key")}))]}),Object(I.jsxs)("div",{style:{margin:"32px auto",width:"90vw"},children:[Object(I.jsxs)("h2",{children:["Total du Jour: ",i,"\u20ac"]})," "]}),i>0?Object(I.jsxs)("div",{style:{width:"90vw",margin:"0 auto",textAlign:"center"},children:[Object(I.jsxs)("div",{style:{margin:16},children:["Livrer \xe0 ",v||t.address," - ",Object(I.jsx)("span",{style:{border:"1px black solid",cursor:"pointer"},onClick:function(){C(!0)},children:"Changer"})]}),k&&Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"text",name:"address",onChange:function(e){y(e.target.value)},value:v}),Object(I.jsx)("button",{onClick:function(){C(!1),console.log(v)},children:"Confirmer"})]}),Object(I.jsxs)("div",{style:{margin:16},children:["Heure de livraison ",f," - ",Object(I.jsx)("span",{style:{border:"1px black solid",cursor:"pointer"},onClick:function(){U(!0)},children:"Changer"})]}),E&&Object(I.jsxs)("div",{children:[Object(I.jsx)("input",{type:"text",name:"address",onChange:function(e){m(e.target.value)},value:f}),Object(I.jsx)("button",{onClick:function(){U(!1),console.log(f)},children:"Confirmer"})]}),Object(I.jsx)("button",{style:{cursor:"pointer",padding:"1rem",color:"white",fontSize:16,fontWeight:"bold",borderRadius:8,border:0,background:"rgba(59, 89, 147, 1)"},onClick:function(){var e=""!==v?v:t.address;!function(e,t,n,r,c,o,i){var a={id:t,date:(new Date).toDateString(),status:"confirmed",username:n,address:r,phone:c,time:o,price:i};O.collection("orders").doc(t).set(Object(s.a)({},a),{merge:!0}).then((function(){e(!0)}))}(b,n,t.username,e,t.phone,f,i)},children:"Passer ma Commande"})]}):null]})},B=n.p+"static/media/exit.2b0e4681.svg";var M=function(){return Object(I.jsxs)("div",{style:{width:150,height:"1rem",margin:"1rem",textAlign:"center",cursor:"pointer"},onClick:function(){g.signOut().then((function(){r.useHistory.push("/login")})).catch((function(e){console.log(e)}))},children:[Object(I.jsx)("img",{style:{height:"1rem",margin:".5rem",transform:"translateY(50%)"},alt:"logout",src:B}),"Log Out"]})};n(69);var J=function(e){var t=e.productUID,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)(null),l=Object(a.a)(s,2),u=l[0],d=l[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),h=b[0],p=b[1];return Object(r.useContext)(A).userInfos,Object(I.jsx)(S.a.div,{positionTransition:!0,variants:{on:{height:"auto"},off:{height:"auto"}},initial:"off",animate:h?"on":"off",transition:{duration:1.5},style:{marginTop:"1rem",width:"100vw",display:"flex",flexWrap:"wrap"},children:Object(I.jsxs)("div",{style:{width:"250px",display:"flex",flexDirection:"column"},children:[Object(I.jsx)("h4",{style:{background:"white",padding:16,margin:"0 auto",width:200,cursor:"pointer",textDecoration:"underline overline",marginTop:"-.5rem"},onClick:function(){p(!h)},children:"Ajouter Image"}),Object(I.jsx)(S.a.div,{transition:{duration:1,ease:"easeInOut"},variants:{on:{y:5,width:"14rem",opacity:1},off:{y:200,width:"14rem",opacity:0}},initial:"off",animate:h?"on":"off",style:{margin:"1rem",zIndex:99,background:"rebeccapurple",color:"white",borderRadius:"12px",width:"20rem"},children:Object(I.jsxs)(S.a.div,{style:{opacity:0},variants:{on:{opacity:1},off:{opacity:0}},initial:"off",animate:h?"on":"off",transition:{duration:1,ease:"easeInOut",delay:.5},children:[Object(I.jsx)("input",{className:"inputfile",id:"myFileInput",type:"file",onChange:function(e){e.target.files[0]?i(e.target.files[0]):console.log("NO FILE")}}),Object(I.jsx)("label",{htmlFor:"myFileInput",children:Object(I.jsx)("div",{style:{transitionProperty:"height",transition:"1s linear",border:"1px solid orange",margin:"1rem",padding:".5rem",color:"orange",background:"white"},children:o?"File Ready":"Choose a file"})}),Object(I.jsx)("button",{className:"submit-file",style:{margin:".5rem 2rem",padding:".5rem"},onClick:function(e){o?(e.preventDefault(),x.ref("".concat(o.name)).put(o).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){x.ref().child(o.name).getDownloadURL().then((function(e){console.log(e),d("All Done !"),O.collection("products").doc(t).set({img_url:"https://firebasestorage.googleapis.com/v0/b/".concat(m.storageBucket,"/o/").concat(o.name,"?alt=media")},{merge:!0}).then((function(){console.log("Document successfully written!"+g.currentUser),window.location.reload(!1)})).catch((function(e){console.error("Error writing document: ",e),d("Sorry...It doesn't work")}))}))}))):d("Choose An Image")},children:"Upload"}),Object(I.jsx)("h3",{style:{color:"red"},children:u}),Object(I.jsx)("h3",{onClick:function(){p(!1)},style:{margin:"1rem",cursor:"pointer"},children:"Cancel"})]})})]})})};n.p,n.p;var K=function(e){return e.userInfos,Object(I.jsx)("div",{className:"actionsNav",style:{display:"flex",justifyContent:"left",alignItems:"baseline",flexDirection:"column",padding:"0 1rem"},children:Object(I.jsx)("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"baseline",flexDirection:"row",width:"100%"},children:Object(I.jsx)(M,{})})})},Q=(n(49),function(e){var t=e.product,n=Object(r.useState)(!0),c=Object(a.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)(null),l=Object(a.a)(s,2),u=l[0],d=l[1];function j(){return(j=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=Object(r.useCallback)((function(){t.name&&(t.name.length>12?d(300/t.name.length):d(22))}),[t.name]);return Object(r.useEffect)(p,[t.name,t.img_url]),Object(I.jsx)("div",{style:{minWidth:200,border:"1px solid black",padding:16,borderRadius:8},children:o&&Object(I.jsxs)("div",{onClick:function(){return j.apply(this,arguments)},children:[t.img&&Object(I.jsx)("img",{src:t.img_url,height:64}),Object(I.jsx)("h2",{style:{fontSize:u},className:"name",children:t.name}),Object(I.jsxs)("h2",{style:{fontSize:u},className:"name",children:["Quantit\xe9:",t.quantity/1e3,"Kg"]}),Object(I.jsxs)("h2",{style:{fontSize:u},className:"name",children:[t.prix_au_kilo,"\u20ac/Kg"]}),Object(I.jsx)("div",{style:{width:"100%",textAlign:"center"},children:Object(I.jsx)("button",{style:{margin:"0 auto",cursor:"pointer",marginTop:16,border:0,background:"orange",color:"white",fontWeight:"bold",padding:".5rem",borderRadius:8},onClick:Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("products").doc(t.id).delete().then((function(){i(!1),console.log("Document successfully deleted!")}));case 2:case"end":return e.stop()}}),e)}))),children:"Retirer"})})]})})}),G=function(e){var t=e.setShowAddPanel,n=Object(r.useState)(""),c=Object(a.a)(n,2),o=(c[0],c[1],Object(r.useState)(!0)),i=Object(a.a)(o,2),l=i[0],u=(i[1],Object(r.useState)({id:null,name:null,img_url:null,part_value:null,prix_au_kilo:null,quantity:null})),d=Object(a.a)(u,2),j=d[0],b=d[1];function h(e){b(Object(s.a)(Object(s.a)({},j),{},Object(p.a)({},e.target.name,e.target.value)))}var f=function(){t(!1)};return Object(I.jsxs)("div",{className:"product-container ".concat(l?"product-container-expanded":void 0),style:{maxWidth:300},children:[Object(I.jsxs)("div",{className:"name-container",style:{width:"100%",background:"navy",display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(I.jsx)("h3",{style:{color:"white",margin:"16px 32px"},children:j.name}),Object(I.jsx)("div",{className:"close-x",onClick:f,children:"X"})]}),Object(I.jsx)("div",{className:"input-button-container",children:Object(I.jsxs)("form",{onSubmit:function(e){console.log(j),e.preventDefault(),function(e,t,n){var r;O.collection("products").add(n).then((function(e){r=e.id,O.collection("products").doc(e.id).set({id:e.id},{merge:!0})})).then((function(){t(Object(s.a)(Object(s.a)({},n),{},{id:r}))})).catch((function(e){console.error("Error adding document: ",e)}))}(0,b,j)},style:{display:"flex",flexDirection:"column"},children:[Object(I.jsx)("label",{style:{padding:"16px",fontSize:16,color:"white"},children:"Nom"}),Object(I.jsx)("input",{name:"name",label:"Nom",style:{fontSize:18,textAlign:"right"},className:"product-input",value:j.name,onChange:h}),Object(I.jsx)("label",{style:{padding:"16px",fontSize:16,color:"white"},children:"Prix/Kilo"}),Object(I.jsx)("input",{name:"prix_au_kilo",label:"Prix au Kilo",style:{fontSize:18,textAlign:"right"},className:"product-input",value:j.prix_au_kilo,onChange:h}),Object(I.jsx)("label",{style:{padding:"16px",fontSize:16,color:"white"},children:"Minimum en G"}),Object(I.jsx)("input",{name:"part_value",label:"Une Part =",style:{fontSize:18,textAlign:"right"},className:"product-input",value:j.part_value,onChange:h}),Object(I.jsx)("label",{style:{padding:"16px",fontSize:16,color:"white"},children:"Quantit\xe9 en G"}),Object(I.jsx)("input",{name:"quantity",label:"Quantit\xe9 disponible",style:{fontSize:18,textAlign:"right"},className:"product-input",value:j.quantity,onChange:h}),Object(I.jsxs)("div",{children:[j.id&&Object(I.jsx)(J,{productUID:j.id}),Object(I.jsxs)("div",{style:{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(I.jsx)("button",{style:{color:"black",padding:16,marginBottom:16,marginRight:16},type:"submit",children:"POSTER"}),Object(I.jsx)("button",{className:"input-button",style:{color:"black",padding:16,marginBottom:16,marginLeft:16},onClick:f,children:"Annuler"})]})]})]})})]})},Y=function(e){var t=e.products;console.log(t);var n=Object(r.useState)(!1),c=Object(a.a)(n,2),o=c[0],i=c[1];return Object(I.jsx)("div",{children:Object(I.jsxs)("div",{style:{display:"flex",width:"auto",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},children:[t&&null!==t[0]&&t.map((function(e,t){return Object(I.jsx)(Q,{product:e},e+t+"key")})),!t&&Object(I.jsx)("p",{children:"loading..."}),!o&&Object(I.jsx)("button",{style:{cursor:"pointer",marginTop:16,border:0,background:"orange",color:"white",fontWeight:"bold",padding:".5rem",borderRadius:8},onClick:function(){i(!o)},children:"Ajouter"}),o&&Object(I.jsx)(G,{setShowAddPanel:i})]})},"product-list")},H=function(e){var t=e.product,n=Object(r.useState)(null),c=Object(a.a)(n,2),o=c[0],i=c[1];var s=Object(r.useCallback)((function(){t.name&&(t.name.length>12?i(300/t.name.length):i(22))}),[t.name]);return Object(r.useEffect)(s,[t.name]),Object(I.jsx)("div",{children:Object(I.jsxs)("div",{onClick:function(){console.log(t)},children:[Object(I.jsx)("h2",{style:{fontSize:o},className:"name",children:t.name}),Object(I.jsxs)("h2",{style:{fontSize:o},className:"name",children:[t.quantity/1e3,"Kg"]}),Object(I.jsxs)("h2",{style:{fontSize:o},className:"name",children:["co\xfbt:",t.price,"\u20ac"]})]})})},V=function(e){var t=e.order,n=Object(r.useState)(!1),c=Object(a.a)(n,2),o=c[0],i=c[1],s=Object(r.useState)(),l=Object(a.a)(s,2),u=l[0],d=l[1];return Object(r.useEffect)((function(){t.id&&O.collection("orders").doc(t.id).collection("products").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data()),console.log(e.id," => ",e.data())})),d(t)}),[]).catch((function(e){console.log("Error getting documents: ",e)}))}),[]),Object(I.jsxs)("div",{style:{padding:"2rem",minWidth:"40%",border:"2px black solid"},children:[Object(I.jsxs)("div",{onClick:function(){i(!o)},style:{cursor:"pointer"},children:[Object(I.jsxs)("h2",{children:["Nom:",t.username]}),Object(I.jsxs)("h2",{children:["Adresse:",t.address]}),Object(I.jsxs)("h2",{children:["Phone: ",t.phone]}),Object(I.jsxs)("h2",{children:["Total: ",t.price,"\u20ac"]}),Object(I.jsxs)("h2",{children:["Command\xe9 le: ",t.date]}),Object(I.jsxs)("h2",{children:["A Livrer:",t.time]})]}),o&&u&&Object(I.jsxs)("div",{children:[u&&void 0!==u[0]&&u.map((function(e,t){return Object(I.jsx)(H,{product:e},e+t+"key")})),!u&&Object(I.jsx)("p",{children:"loading..."})]}),Object(I.jsx)("button",{style:{cursor:"pointer",marginTop:16,border:0,background:"orange",color:"white",fontWeight:"bold",padding:".5rem",borderRadius:8},onClick:Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("orders").doc(t.id).set({status:"delivre"},{merge:!0}).then((function(){i(!1)}));case 2:case"end":return e.stop()}}),e)}))),children:"Not\xe9 comme Livr\xe9"})]})},X=function(e){var t=e.orders,n=Object(r.useState)(!1),c=Object(a.a)(n,2);c[0],c[1];return Object(I.jsx)("div",{children:Object(I.jsxs)("div",{style:{display:"flex",width:"auto",flexWrap:"wrap",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"},children:[t&&null!==t[0]&&t.map((function(e,t){return Object(I.jsx)(V,{order:e},e+t+"key")})),!t&&Object(I.jsx)("p",{children:"loading..."})]})},"product-list")},Z=function(){var e=Object(r.useContext)(A),t=e.userInfos,n=e.setUserInfos,c=Object(r.useState)([]),o=Object(a.a)(c,2),i=o[0],s=o[1],l=Object(r.useState)([]),u=Object(a.a)(l,2),d=u[0],j=u[1];return console.log(i),console.log(d),Object(r.useEffect)((function(){U(n)}),[]),Object(r.useEffect)((function(){var e=O.collection("products").onSnapshot((function(e){if(e.size){var t=Object(E.a)(i);e.forEach((function(e){t.push(e.data()),console.log(i)})),s(t)}else console.log("EMPTY"),console.log(i)}));return function(){e()}}),[f.a]),Object(r.useEffect)((function(){var e=O.collection("orders").where("status","==","confirmed").onSnapshot((function(e){var t=Object(E.a)(d);e.size?(e.forEach((function(e){t.push(e.data())})),j(t),console.log(d)):console.log("EMPTY")}));return function(){e()}}),[f.a]),Object(I.jsx)("div",{style:{background:"bisque",border:"2px solid black"},children:!0===t.admin&&Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{className:"etal-intro",children:"G\xe9rer Les Produits du Jour"}),t&&Object(I.jsx)(Y,{userInfos:t,products:i}),Object(I.jsx)("h2",{className:"etal-intro",children:"Vos Commandes en cours"}),t&&d.length>0&&Object(I.jsx)(X,{userInfos:t,orders:d})]})})},$=function(){var e=Object(r.useContext)(A),t=e.userInfos,n=e.setUserInfos,c=Object(r.useState)([]),o=Object(a.a)(c,2),i=o[0],s=o[1],l=Object(r.useState)([]),u=Object(a.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)("initial"),h=Object(a.a)(b,2),p=h[0],m=h[1],g=Object(r.useState)(0),x=Object(a.a)(g,2),v=x[0],y=x[1];return console.log(i),Object(r.useEffect)((function(){U(n)}),[]),Object(r.useEffect)((function(){if("initial"===p&&t.username){console.log(p),console.log(t);var e=t.username.toString()+Math.floor(1e4*Math.random());m(e.toString())}}),[t]),Object(r.useEffect)((function(){var e=O.collection("products").onSnapshot((function(e){if(e.size){var t=Object(E.a)(i);e.forEach((function(e){t.push(e.data()),console.log(i)})),s(t)}else console.log("EMPTY"),console.log(i)}));return function(){e()}}),[f.a]),Object(r.useEffect)((function(){var e="initial"!==p?O.collection("orders").doc(p).collection("products").onSnapshot((function(e){var t=Object(E.a)(d);e.size?(e.forEach((function(e){t.push(e.data())})),j(t),console.log(d)):(console.log("EMPTY"),console.log(p))})):function(){console.log("NUUULLLLLLL!!!!")};return function(){e()}}),[p,f.a]),Object(I.jsxs)("div",{className:"etal-container",children:[Object(I.jsxs)("div",{className:"etal-header",children:[Object(I.jsx)("img",{src:k,style:{height:"2rem",marginRight:"1rem"}}),Object(I.jsx)("h2",{children:t.username})]}),!0===t.admin&&Object(I.jsx)(Z,{}),Object(I.jsx)("div",{style:{display:"flex",justifyContent:"flex-end"},children:Object(I.jsx)(K,{userInfos:t})}),Object(I.jsx)("h2",{className:"etal-intro",children:"Produits du Jour"}),t&&i.length>0&&Object(I.jsx)(W,{setTotalPrice:y,userInfos:t,products:i,order:d,setOrder:j,orderUID:p,setOrderUID:m})||Object(I.jsx)("p",{style:{margin:36},children:"Pas de Produits pour l'instant"}),Object(I.jsx)("h2",{className:"etal-intro",children:"Votre Panier"}),null!==p&&console.log(p.toString()),null!==p.toString()&&Object(I.jsx)(q,{userInfos:t,setTotalPrice:y,totalPrice:v,orderUID:p,order:d,setOrder:j})]})},ee=(n(70),function(){var e=Object(r.useState)({error:null,phone:"",email:"",address:"",password:"",username:""}),t=Object(a.a)(e,2),n=t[0],c=t[1];function o(e){c(Object(s.a)(Object(s.a)({},n),{},Object(p.a)({},e.target.name,e.target.value)))}function i(){return(i=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(Object(s.a)(Object(s.a)({},n),{},{error:""})),e.prev=2,e.next=5,v(n.email,n.password);case 5:y(n.phone,n.email,n.address,n.password,n.username,g.currentUser.uid),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(Object(s.a)(Object(s.a)({},n),{},{error:e.t0.message}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}return Object(I.jsx)("div",{className:"form-container",children:Object(I.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(I.jsx)("h1",{children:"Sign Up to Chatty Cats"}),Object(I.jsx)("p",{children:"Fill in the form below to create an account."}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{placeholder:"Email",name:"email",type:"email",onChange:o,value:n.email})}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{placeholder:"Nom Pr\xe9nom",name:"username",type:"name",onChange:o,value:n.username})}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{placeholder:"Password",name:"password",onChange:o,value:n.password,type:"password"})}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{placeholder:"T\xe9l\xe9phone",name:"phone",onChange:o,value:n.phone,type:"tel"})}),Object(I.jsx)("div",{children:Object(I.jsx)("input",{placeholder:"1 rue du Gourmet, Saint-Fran\xe7ois",name:"address",onChange:o,value:n.adress,type:"text"})}),n.error?Object(I.jsx)("p",{children:n.error}):null,Object(I.jsx)(S.a.button,{style:{background:"navy",color:"white",border:0,borderRadius:12,paddingTop:8,margin:"0 auto",fontSize:24,cursor:"pointer"},whileHover:{scale:1.2},type:"submit",children:Object(I.jsx)("img",{alt:"sign-up",style:{height:"3rem"},src:k})}),Object(I.jsx)("hr",{}),Object(I.jsxs)("p",{children:["Already have an account? ",Object(I.jsx)(d.b,{to:"/login",children:"Login"})]})]})})});function te(e){var t=e.component,n=e.authenticated,r=Object(l.a)(e,["component","authenticated"]);return Object(I.jsx)(u.b,Object(s.a)(Object(s.a)({},r),{},{render:function(e){return n?Object(I.jsx)(t,Object(s.a)({},e)):Object(I.jsx)(u.a,{to:"/login"})}}))}function ne(e){var t=e.component,n=e.authenticated,r=Object(l.a)(e,["component","authenticated"]);return Object(I.jsx)(u.b,Object(s.a)(Object(s.a)({},r),{},{render:function(e){return n?Object(I.jsx)(u.a,{to:"etal"}):Object(I.jsx)(t,Object(s.a)({},e))}}))}var re=function(){var e=Object(r.useState)({loggedin:!1,loading:!0}),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)({email:"",imageUrl:"",username:""}),i=Object(a.a)(o,2),s=i[0],l=i[1],j=Object(r.useMemo)((function(){return{userInfos:s,setUserInfos:l}}),[s,l]);return Object(r.useEffect)((function(){g.onAuthStateChanged((function(e){c(e?{loggedin:!0,loading:!1}:{loggedin:!1,loading:!1})}))}),[]),Object(I.jsx)(d.a,{children:Object(I.jsx)(u.d,{children:Object(I.jsxs)(A.Provider,{value:j,children:[Object(I.jsx)(u.b,{exact:!0,path:"/",component:N}),Object(I.jsx)(te,{path:"/etal",authenticated:n.loggedin,component:$}),Object(I.jsx)(ne,{path:"/signup",authenticated:n.loggedin,component:ee}),Object(I.jsx)(ne,{path:"/login",authenticated:n.loggedin,component:C})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.c5d0e34b.chunk.js.map