import{aV as Y,aW as de,aJ as ue}from"./index-2ae87c9c.js";const J=e=>typeof e=="object"&&e!==null,A=new WeakMap,x=new WeakSet,pe=(e=Object.is,t=(o,g)=>new Proxy(o,g),s=o=>J(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),r=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,g,I=r)=>{const b=l.get(o);if((b==null?void 0:b[0])===g)return b[1];const y=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return Y(y,!0),l.set(o,[g,y]),Reflect.ownKeys(o).forEach(P=>{if(Object.getOwnPropertyDescriptor(y,P))return;const O=Reflect.get(o,P),D={value:O,enumerable:!0,configurable:!0};if(x.has(O))Y(O,!1);else if(O instanceof Promise)delete D.value,D.get=()=>I(O);else if(A.has(O)){const[v,z]=A.get(O);D.value=c(v,z(),I)}Object.defineProperty(y,P,D)}),Object.preventExtensions(y)},m=new WeakMap,f=[1,1],W=o=>{if(!J(o))throw new Error("object required");const g=m.get(o);if(g)return g;let I=f[0];const b=new Set,y=(i,a=++f[0])=>{I!==a&&(I=a,b.forEach(n=>n(i,a)))};let P=f[1];const O=(i=++f[1])=>(P!==i&&!b.size&&(P=i,v.forEach(([a])=>{const n=a[1](i);n>I&&(I=n)})),I),D=i=>(a,n)=>{const h=[...a];h[1]=[i,...h[1]],y(h,n)},v=new Map,z=(i,a)=>{if(b.size){const n=a[3](D(i));v.set(i,[a,n])}else v.set(i,[a])},X=i=>{var a;const n=v.get(i);n&&(v.delete(i),(a=n[1])==null||a.call(n))},le=i=>(b.add(i),b.size===1&&v.forEach(([n,h],R)=>{const N=n[3](D(R));v.set(R,[n,N])}),()=>{b.delete(i),b.size===0&&v.forEach(([n,h],R)=>{h&&(h(),v.set(R,[n]))})}),H=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),V=t(H,{deleteProperty(i,a){const n=Reflect.get(i,a);X(a);const h=Reflect.deleteProperty(i,a);return h&&y(["delete",[a],n]),h},set(i,a,n,h){const R=Reflect.has(i,a),N=Reflect.get(i,a,h);if(R&&(e(N,n)||m.has(n)&&e(N,m.get(n))))return!0;X(a),J(n)&&(n=de(n)||n);let $=n;if(n instanceof Promise)n.then(C=>{n.status="fulfilled",n.value=C,y(["resolve",[a],C])}).catch(C=>{n.status="rejected",n.reason=C,y(["reject",[a],C])});else{!A.has(n)&&s(n)&&($=W(n));const C=!x.has($)&&A.get($);C&&z(a,C)}return Reflect.set(i,a,$,h),y(["set",[a],n,N]),!0}});m.set(o,V);const ce=[H,O,c,le];return A.set(V,ce),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(V[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(H,i,a)}),V})=>[W,A,x,e,t,s,r,l,c,m,f],[fe]=pe();function S(e={}){return fe(e)}function U(e,t,s){const r=A.get(e);let l;const c=[],m=r[3];let f=!1;const o=m(g=>{if(c.push(g),s){t(c.splice(0));return}l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function me(e,t){const s=A.get(e),[r,l,c]=s;return c(r,l(),t)}const d=S({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),ie={state:d,subscribe(e){return U(d,()=>e(d))},push(e,t){e!==d.view&&(d.view=e,t&&(d.data=t),d.history.push(e))},reset(e){d.view=e,d.history=[e]},replace(e){d.history.length>1&&(d.history[d.history.length-1]=e,d.view=e)},goBack(){if(d.history.length>1){d.history.pop();const[e]=d.history.slice(-1);d.view=e}},setData(e){d.data=e}},p={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return p.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return p.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},formatNativeUrl(e,t,s){if(p.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let r=e;r.includes("://")||(r=e.replaceAll("/","").replaceAll(":",""),r=`${r}://`),r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!p.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let r=e;r.endsWith("/")||(r=`${r}/`),this.setWalletConnectDeepLink(r,s);const l=encodeURIComponent(t);return`${r}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(p.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(p.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(p.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=ie.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},he=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),u=S({enabled:he,userSessionId:"",events:[],connectedWalletId:void 0}),ge={state:u,subscribe(e){return U(u.events,()=>e(me(u.events[u.events.length-1])))},initialize(){u.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(u.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){u.connectedWalletId=e},click(e){if(u.enabled){const t={type:"CLICK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},track(e){if(u.enabled){const t={type:"TRACK",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}},view(e){if(u.enabled){const t={type:"VIEW",name:e.name,userSessionId:u.userSessionId,timestamp:Date.now(),data:e};u.events.push(t)}}},E=S({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),w={state:E,subscribe(e){return U(E,()=>e(E))},setChains(e){E.chains=e},setWalletConnectUri(e){E.walletConnectUri=e},setIsCustomDesktop(e){E.isCustomDesktop=e},setIsCustomMobile(e){E.isCustomMobile=e},setIsDataLoaded(e){E.isDataLoaded=e},setIsUiLoaded(e){E.isUiLoaded=e},setIsAuth(e){E.isAuth=e}},B=S({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),k={state:B,subscribe(e){return U(B,()=>e(B))},setConfig(e){var t,s;ge.initialize(),w.setChains(e.chains),w.setIsAuth(!!e.enableAuthMode),w.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),w.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),p.setModalVersionInStorage(),Object.assign(B,e)}};var be=Object.defineProperty,Z=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,ee=(e,t,s)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,we=(e,t)=>{for(var s in t||(t={}))ye.call(t,s)&&ee(e,s,t[s]);if(Z)for(var s of Z(t))ve.call(t,s)&&ee(e,s,t[s]);return e};const F="https://explorer-api.walletconnect.com",G="wcm",Q="js-2.6.2";async function K(e,t){const s=we({sdkType:G,sdkVersion:Q},t),r=new URL(e,F);return r.searchParams.append("projectId",k.state.projectId),Object.entries(s).forEach(([l,c])=>{c&&r.searchParams.append(l,String(c))}),(await fetch(r)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${F}/w3m/v1/getWalletImage/${e}?projectId=${k.state.projectId}&sdkType=${G}&sdkVersion=${Q}`},getAssetImageUrl(e){return`${F}/w3m/v1/getAssetImage/${e}?projectId=${k.state.projectId}&sdkType=${G}&sdkVersion=${Q}`}};var Ie=Object.defineProperty,te=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,se=(e,t,s)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Oe=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&se(e,s,t[s]);if(te)for(var s of te(t))Le.call(t,s)&&se(e,s,t[s]);return e};const oe=p.isMobile(),L=S({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Pe={state:L,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=k.state;if(e==="NONE"||t==="ALL"&&!e)return L.recomendedWallets;if(p.isArray(e)){const s={recommendedIds:e.join(",")},{listings:r}=await M.getAllListings(s),l=Object.values(r);l.sort((c,m)=>{const f=e.indexOf(c.id),W=e.indexOf(m.id);return f-W}),L.recomendedWallets=l}else{const{chains:s,isAuth:r}=w.state,l=s==null?void 0:s.join(","),c=p.isArray(t),m={page:1,sdks:r?"auth_v1":void 0,entries:p.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=oe?await M.getMobileListings(m):await M.getDesktopListings(m);L.recomendedWallets=Object.values(f)}return L.recomendedWallets},async getWallets(e){const t=Oe({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:r}=k.state,{recomendedWallets:l}=L;if(r==="ALL")return L.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):p.isArray(s)&&(t.excludedIds=s.join(",")),p.isArray(r)&&(t.excludedIds=[t.excludedIds,r].filter(Boolean).join(",")),w.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:m}=e,{listings:f,total:W}=oe?await M.getMobileListings(t):await M.getDesktopListings(t),o=Object.values(f),g=m?"search":"wallets";return L[g]={listings:[...L[g].listings,...o],total:W,page:c??1},{listings:o,total:W}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){L.search={listings:[],total:0,page:1}}},_=S({open:!1}),q={state:_,subscribe(e){return U(_,()=>e(_))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:r}=w.state;if(p.removeWalletConnectDeepLink(),w.setWalletConnectUri(e==null?void 0:e.uri),w.setChains(e==null?void 0:e.chains),ie.reset("ConnectWallet"),s&&r)_.open=!0,t();else{const l=setInterval(()=>{const c=w.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),_.open=!0,t())},200)}})},close(){_.open=!1}};var We=Object.defineProperty,ne=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?We(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Se=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(ne)for(var s of ne(t))Ae.call(t,s)&&re(e,s,t[s]);return e};function De(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const T=S({themeMode:De()?"dark":"light"}),ae={state:T,subscribe(e){return U(T,()=>e(T))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(T.themeMode=t),s&&(T.themeVariables=Se({},s))}},j=S({open:!1,message:"",variant:"success"}),Re={state:j,subscribe(e){return U(j,()=>e(j))},openToast(e,t){j.open=!0,j.message=e,j.variant=t},closeToast(){j.open=!1}};class Me{constructor(t){this.openModal=q.open,this.closeModal=q.close,this.subscribeModal=q.subscribe,this.setTheme=ae.setThemeConfig,ae.setThemeConfig(t),k.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await ue(()=>import("./index-60050cd9.js"),["assets/index-60050cd9.js","assets/if-defined-3657832f.js","assets/index-2ae87c9c.js","assets/index-22b330b1.css"]);const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),w.setIsUiLoaded(!0)}}}const _e=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Me},Symbol.toStringTag,{value:"Module"}));export{ge as R,ie as T,p as a,_e as i,ae as n,Re as o,w as p,q as s,Pe as t,k as y};
