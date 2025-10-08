const Vf=Object.freeze(Object.defineProperty({__proto__:null,get addBuff(){return Pr},get addCharacterFromObject(){return Ac},get addCharacterFromTemplate(){return Rf},get addMadnessPoint(){return Pf},get applyQueuedMoves(){return Df},get clearCharacters(){return Rc},get clearTemporaryBuffs(){return Ic},get damagePart(){return Cc},get getCharacterById(){return Ft},get getCharacters(){return Ct},get initialize(){return Cf},get initializeManeuverLimits(){return Zo},get moveCharacter(){return Zl},get recalculateMaxActionValue(){return Zi},get removeCharacter(){return If},get startNewTurn(){return Lf},get updateCharacter(){return Kt},get updateCharacterFromReload(){return Nf},get version(){return Ef}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Hf="1.4.7";let or={},pr={},kd={},zd={},Vd={},Hd={},Gd={},Wd={},$d={};async function Gf(){try{const e=["positions.json","classes.json","basic_parts.json","armed_parts.json","mutant_parts.json","custom_parts.json","tegoma_skills.json","tegoma_parts.json","tegoma_parts0.json"].map(d=>fetch(`/data/maneuvers/${d}`).then(u=>u.json())),[t,n,i,r,o,a,l,...c]=await Promise.all([fetch("/data/hint.json"),fetch("/data/regret.json"),fetch("/data/takaramono.json"),fetch("/data/memory_fragments.json"),fetch("/data/undead.json"),fetch("/data/core-data.json"),fetch("/data/effects_db.json"),...e]);or=c.reduce((d,u)=>({...d,...u}),{}),[$d,kd,zd,Vd,Gd,Wd,Hd]=await Promise.all([t.json(),n.json(),i.json(),r.json(),o.json(),a.json(),l.json()]),pr={};for(const d in or){const u=or[d];u&&u.name&&(pr[u.name]={id:d,...u})}console.log("Data handler initialized successfully!")}catch(s){throw console.error("Error in data handler initialization:",s),s}}function Wf(){return or}function Yt(s){return pr[s]}function Jl(){return kd}function $f(){return zd}function Ql(){return Vd}function zs(){return Gd}function Oo(){return Wd}function Xf(s){return Hd[s]}function Xd(){return $d}function qf(){const s=zs(),e=new Set;for(const t in s)s[t]&&s[t].img&&e.add(s[t].img);return[...e]}function jf(s){if(!s||!s.name){console.warn("追加しようとしたマニューバデータが無効です:",s);return}if(pr[s.name])return;const e=`CSTM_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;s.id=e,or[e]=s,pr[s.name]=s,console.log(`カスタムマニューバ「${s.name}」を動的に追加しました。`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="180",Yf=0,Bc=1,Kf=2,qd=1,Zf=2,Jn=3,xi=0,tn=1,ei=2,vi=0,bs=1,Oc=2,kc=3,zc=4,Jf=5,ki=100,Qf=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,op=203,Za=204,Ja=205,ap=206,lp=207,cp=208,up=209,dp=210,hp=211,fp=212,pp=213,mp=214,Qa=0,el=1,tl=2,Is=3,nl=4,il=5,sl=6,rl=7,ko=0,gp=1,vp=2,_i=0,_p=1,yp=2,xp=3,Mp=4,Sp=5,Ep=6,bp=7,Vc="attached",wp="detached",jd=300,Ps=301,Ls=302,Co=303,ol=304,zo=306,mr=1e3,ti=1001,al=1002,cn=1003,Tp=1004,kr=1005,Fn=1006,ea=1007,Hi=1008,kn=1009,Yd=1010,Kd=1011,gr=1012,tc=1013,$i=1014,Un=1015,Lr=1016,nc=1017,ic=1018,vr=1020,Zd=35902,Jd=35899,Qd=1021,eh=1022,mn=1023,_r=1026,yr=1027,th=1028,sc=1029,nh=1030,rc=1031,oc=1033,So=33776,Eo=33777,bo=33778,wo=33779,ll=35840,cl=35841,ul=35842,dl=35843,hl=36196,fl=37492,pl=37496,ml=37808,gl=37809,vl=37810,_l=37811,yl=37812,xl=37813,Ml=37814,Sl=37815,El=37816,bl=37817,wl=37818,Tl=37819,Al=37820,Cl=37821,Rl=36492,Il=36494,Pl=36495,Ll=36283,Dl=36284,Nl=36285,Fl=36286,Ro=2300,Ul=2301,ta=2302,Hc=2400,Gc=2401,Wc=2402,Ap=2500,Cp=3200,Rp=3201,Vo=0,Ip=1,pi="",ct="srgb",Ds="srgb-linear",Io="linear",rt="srgb",Qi=7680,$c=519,Pp=512,Lp=513,Dp=514,ih=515,Np=516,Fp=517,Up=518,Bp=519,Xc=35044,qc="300 es",Bn=2e3,Po=2001;class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const ar=Math.PI/180,Ns=180/Math.PI;function Ei(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[s&255]+Vt[s>>8&255]+Vt[s>>16&255]+Vt[s>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function ac(s,e){return(s%e+e)%e}function Op(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function kp(s,e,t){return s!==e?(t-s)/(e-s):0}function lr(s,e,t){return(1-t)*s+t*e}function zp(s,e,t,n){return lr(s,e,1-Math.exp(-t*n))}function Vp(s,e=1){return e-Math.abs(ac(s,e*2)-e)}function Hp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Gp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Wp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function $p(s,e){return s+Math.random()*(e-s)}function Xp(s){return s*(.5-Math.random())}function qp(s){s!==void 0&&(jc=s);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jp(s){return s*ar}function Yp(s){return s*Ns}function Kp(s){return(s&s-1)===0&&s!==0}function Zp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Jp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qp(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*u,l*h,a*c);break;case"YZY":s.set(l*h,a*d,l*u,a*c);break;case"ZXZ":s.set(l*u,l*h,a*d,a*c);break;case"XZX":s.set(a*d,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*d,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ot={DEG2RAD:ar,RAD2DEG:Ns,generateUUID:Ei,clamp:je,euclideanModulo:ac,mapLinear:Op,inverseLerp:kp,lerp:lr,damp:zp,pingpong:Vp,smoothstep:Hp,smootherstep:Gp,randInt:Wp,randFloat:$p,randFloatSpread:Xp,seededRandom:qp,degToRad:jp,radToDeg:Yp,isPowerOfTwo:Kp,ceilPowerOfTwo:Zp,floorPowerOfTwo:Jp,setQuaternionFromProperEuler:Qp,normalize:$t,denormalize:vs};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Qt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==h||c!==f||d!==m){let p=1-a;const g=l*h+c*f+d*m+u*v,_=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,g*_);p=Math.sin(p*A)/b,a=Math.sin(a*A)/b}const x=a*_;if(l=l*p+h*x,c=c*p+f*x,d=d*p+m*x,u=u*p+v*x,p===1-a){const b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+d*u+l*f-c*h,e[t+1]=l*m+d*h+c*u-a*f,e[t+2]=c*m+d*f+a*h-l*u,e[t+3]=d*m-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),h=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"YXZ":this._x=h*d*u+c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"ZXY":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u-h*f*m;break;case"ZYX":this._x=h*d*u-c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u+h*f*m;break;case"YZX":this._x=h*d*u+c*f*m,this._y=c*f*u+h*d*m,this._z=c*d*m-h*f*u,this._w=c*d*u-h*f*m;break;case"XZY":this._x=h*d*u-c*f*m,this._y=c*f*u-h*d*m,this._z=c*d*m+h*f*u,this._w=c*d*u+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=i+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return na.copy(this).projectOnVector(e),this.sub(na)}reflect(e){return this.sub(na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const na=new F,Yc=new Qt;class ze{constructor(e,t,n,i,r,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],_=i[1],y=i[4],x=i[7],b=i[2],A=i[5],C=i[8];return r[0]=o*v+a*_+l*b,r[3]=o*p+a*y+l*A,r[6]=o*g+a*x+l*C,r[1]=c*v+d*_+u*b,r[4]=c*p+d*y+u*A,r[7]=c*g+d*x+u*C,r[2]=h*v+f*_+m*b,r[5]=h*p+f*y+m*A,r[8]=h*g+f*x+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,m=t*u+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-d*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(d*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new ze;function sh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function em(){const s=xr("canvas");return s.style.display="block",s}const Kc={};function Mr(s){s in Kc||(Kc[s]=!0,console.warn(s))}function tm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Zc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nm(){const s={enabled:!0,workingColorSpace:Ds,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===rt&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(i.r=ws(i.r),i.g=ws(i.g),i.b=ws(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===pi?Io:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ds]:{primaries:e,whitePoint:n,transfer:Io,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),s}const Xe=nm();function si(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let es;class im{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{es===void 0&&(es=xr("canvas")),es.width=e.width,es.height=e.height;const i=es.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sm=0;class lc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=Ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(sa(i[o].image)):r.push(sa(i[o]))}else r=sa(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function sa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?im.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rm=0;const ra=new F;class zt extends Vs{constructor(e=zt.DEFAULT_IMAGE,t=zt.DEFAULT_MAPPING,n=ti,i=ti,r=Fn,o=Hi,a=mn,l=kn,c=zt.DEFAULT_ANISOTROPY,d=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rm++}),this.uuid=Ei(),this.name="",this.source=new lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ra).x}get height(){return this.source.getSize(ra).y}get depth(){return this.source.getSize(ra).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=jd;zt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,b=(g+1)/2,A=(d+h)/4,C=(u+v)/4,P=(m+p)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=A/n,r=C/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=P/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=C/r,i=P/r),this.set(n,i,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-v)/_,this.z=(h-d)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class om extends Vs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new zt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new lc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends om{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rh extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class am extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yi{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Vr.subVectors(this.max,qs),ts.subVectors(e.a,qs),ns.subVectors(e.b,qs),is.subVectors(e.c,qs),oi.subVectors(ns,ts),ai.subVectors(is,ns),Ai.subVectors(ts,is);let t=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-Ai.z,Ai.y,oi.z,0,-oi.x,ai.z,0,-ai.x,Ai.z,0,-Ai.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-Ai.y,Ai.x,0];return!oa(t,ts,ns,is,Vr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,ts,ns,is,Vr))?!1:(Hr.crossVectors(oi,ai),t=[Hr.x,Hr.y,Hr.z],oa(t,ts,ns,is,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,zr=new Yi,ts=new F,ns=new F,is=new F,oi=new F,ai=new F,Ai=new F,qs=new F,Vr=new F,Hr=new F,Ci=new F;function oa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ci.fromArray(s,r);const a=i.x*Math.abs(Ci.x)+i.y*Math.abs(Ci.y)+i.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),d=n.dot(Ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const lm=new Yi,js=new F,aa=new F;class Hs{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const t=js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(js,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(aa)),this.expandByPoint(js.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new F,la=new F,Gr=new F,li=new F,ca=new F,Wr=new F,ua=new F;let cc=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){la.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(la);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),a=li.dot(this.direction),l=-li.dot(Gr),c=li.lengthSq(),d=Math.abs(1-o*o);let u,h,f,m;if(d>0)if(u=o*l-a,h=o*a-l,m=r*d,u>=0)if(h>=-m)if(h<=m){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-m?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=m?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(la).addScaledVector(Gr,h),f}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),i=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,i,r){ca.subVectors(t,e),Wr.subVectors(n,e),ua.crossVectors(ca,Wr);let o=this.direction.dot(ua),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,e);const l=a*this.direction.dot(Wr.crossVectors(li,Wr));if(l<0)return null;const c=a*this.direction.dot(ca.cross(li));if(c<0||l+c>o)return null;const d=-a*li.dot(ua);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ce{constructor(e,t,n,i,r,o,a,l,c,d,u,h,f,m,v,p){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,u,h,f,m,v,p)}set(e,t,n,i,r,o,a,l,c,d,u,h,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,m=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,m=c*d,v=c*u;t[0]=h+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-m,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,m=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,m=a*d,v=a*u;t[0]=l*d,t[4]=m*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=m*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+m,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,um)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ci.crossVectors(n,rn),ci.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ci.crossVectors(n,rn)),ci.normalize(),$r.crossVectors(rn,ci),i[0]=ci.x,i[4]=$r.x,i[8]=rn.x,i[1]=ci.y,i[5]=$r.y,i[9]=rn.y,i[2]=ci.z,i[6]=$r.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],y=n[7],x=n[11],b=n[15],A=i[0],C=i[4],P=i[8],w=i[12],E=i[1],I=i[5],O=i[9],L=i[13],k=i[2],B=i[6],N=i[10],X=i[14],V=i[3],j=i[7],re=i[11],ce=i[15];return r[0]=o*A+a*E+l*k+c*V,r[4]=o*C+a*I+l*B+c*j,r[8]=o*P+a*O+l*N+c*re,r[12]=o*w+a*L+l*X+c*ce,r[1]=d*A+u*E+h*k+f*V,r[5]=d*C+u*I+h*B+f*j,r[9]=d*P+u*O+h*N+f*re,r[13]=d*w+u*L+h*X+f*ce,r[2]=m*A+v*E+p*k+g*V,r[6]=m*C+v*I+p*B+g*j,r[10]=m*P+v*O+p*N+g*re,r[14]=m*w+v*L+p*X+g*ce,r[3]=_*A+y*E+x*k+b*V,r[7]=_*C+y*I+x*B+b*j,r[11]=_*P+y*O+x*N+b*re,r[15]=_*w+y*L+x*X+b*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+r*l*u-i*c*u-r*a*h+n*c*h+i*a*f-n*l*f)+v*(+t*l*f-t*c*h+r*o*h-i*o*f+i*c*d-r*l*d)+p*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+g*(-i*a*d-t*l*u+t*a*h+i*o*u-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],_=u*p*c-v*h*c+v*l*f-a*p*f-u*l*g+a*h*g,y=m*h*c-d*p*c-m*l*f+o*p*f+d*l*g-o*h*g,x=d*v*c-m*u*c+m*a*f-o*v*f-d*a*g+o*u*g,b=m*u*l-d*v*l-m*a*h+o*v*h+d*a*p-o*u*p,A=t*_+n*y+i*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(v*h*r-u*p*r-v*i*f+n*p*f+u*i*g-n*h*g)*C,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*g+n*l*g)*C,e[3]=(u*l*r-a*h*r-u*i*c+n*h*c+a*i*f-n*l*f)*C,e[4]=y*C,e[5]=(d*p*r-m*h*r+m*i*f-t*p*f-d*i*g+t*h*g)*C,e[6]=(m*l*r-o*p*r-m*i*c+t*p*c+o*i*g-t*l*g)*C,e[7]=(o*h*r-d*l*r+d*i*c-t*h*c-o*i*f+t*l*f)*C,e[8]=x*C,e[9]=(m*u*r-d*v*r-m*n*f+t*v*f+d*n*g-t*u*g)*C,e[10]=(o*v*r-m*a*r+m*n*c-t*v*c-o*n*g+t*a*g)*C,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=b*C,e[13]=(d*v*i-m*u*i+m*n*h-t*v*h-d*n*p+t*u*p)*C,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*p-t*a*p)*C,e[15]=(o*u*i-d*a*i+d*n*l-t*u*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,m=r*u,v=o*d,p=o*u,g=a*u,_=l*c,y=l*d,x=l*u,b=n.x,A=n.y,C=n.z;return i[0]=(1-(v+g))*b,i[1]=(f+x)*b,i[2]=(m-y)*b,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(h+g))*A,i[6]=(p+_)*A,i[7]=0,i[8]=(m+y)*C,i[9]=(p-_)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ss.set(i[0],i[1],i[2]).length();const o=ss.set(i[4],i[5],i[6]).length(),a=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/r,d=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=d,vn.elements[5]*=d,vn.elements[6]*=d,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Bn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Po)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Bn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Po)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ss=new F,vn=new Ce,cm=new F(0,0,0),um=new F(1,1,1),ci=new F,$r=new F,rn=new F,Qc=new Ce,eu=new Qt;class Lt{constructor(e=0,t=0,n=0,i=Lt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eu.setFromEuler(this),this.setFromQuaternion(eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lt.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dm=0;const tu=new F,rs=new Qt,Gn=new Ce,Xr=new F,Ys=new F,hm=new F,fm=new Qt,nu=new F(1,0,0),iu=new F(0,1,0),su=new F(0,0,1),ru={type:"added"},pm={type:"removed"},os={type:"childadded",child:null},da={type:"childremoved",child:null};class gt extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dm++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new F,t=new Lt,n=new Qt,i=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ze}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(nu,e)}rotateY(e){return this.rotateOnAxis(iu,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,t){return tu.copy(e).applyQuaternion(this.quaternion),this.position.add(tu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nu,e)}translateY(e){return this.translateOnAxis(iu,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ys,Xr,this.up):Gn.lookAt(Xr,Ys,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(Gn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ru),os.child=e,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pm),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ru),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,hm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new F(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,Wn=new F,ha=new F,$n=new F,as=new F,ls=new F,ou=new F,fa=new F,pa=new F,ma=new F,ga=new Je,va=new Je,_a=new Je;class Sn{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_n.subVectors(i,t),Wn.subVectors(n,t),ha.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Wn),l=_n.dot(ha),c=Wn.dot(Wn),d=Wn.dot(ha),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,m=(o*d-a*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ga.setScalar(0),va.setScalar(0),_a.setScalar(0),ga.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),_a.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ga,r.x),o.addScaledVector(va,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Wn.subVectors(e,t),_n.cross(Wn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;as.subVectors(i,n),ls.subVectors(r,n),fa.subVectors(e,n);const l=as.dot(fa),c=ls.dot(fa);if(l<=0&&c<=0)return t.copy(n);pa.subVectors(e,i);const d=as.dot(pa),u=ls.dot(pa);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(as,o);ma.subVectors(e,r);const f=as.dot(ma),m=ls.dot(ma);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ls,a);const p=d*m-f*u;if(p<=0&&u-d>=0&&f-m>=0)return ou.subVectors(r,i),a=(u-d)/(u-d+(f-m)),t.copy(i).addScaledVector(ou,a);const g=1/(p+v+h);return o=v*g,a=h*g,t.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},qr={h:0,s:0,l:0};function ya(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=ac(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ya(o,r,e+1/3),this.g=ya(o,r,e),this.b=ya(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Xe.workingToColorSpace(Ht.copy(this),e),Math.round(je(Ht.r*255,0,255))*65536+Math.round(je(Ht.g*255,0,255))*256+Math.round(je(Ht.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Ht.copy(this),t);const n=Ht.r,i=Ht.g,r=Ht.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=ct){Xe.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,n=Ht.g,i=Ht.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(qr);const n=lr(ui.h,qr.h,t),i=lr(ui.s,qr.s,t),r=lr(ui.l,qr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new Be;Be.NAMES=ah;let mm=0,bi=class extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=bs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$c,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$c&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class lh extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new F,jr=new Ke;let gm=0;class On{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xc,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xc&&(e.usage=this.usage),e}}class uc extends On{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ch extends On{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class en extends On{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vm=0;const hn=new Ce,xa=new gt,cs=new F,on=new Yi,Ks=new Yi,Bt=new F;class wn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sh(e)?ch:uc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(on.min,Ks.min),on.expandByPoint(Bt),Bt.addVectors(on.max,Ks.max),on.expandByPoint(Bt)):(on.expandByPoint(Ks.min),on.expandByPoint(Ks.max))}on.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Bt.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(e,c),Bt.add(cs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new F,l[P]=new F;const c=new F,d=new F,u=new F,h=new Ke,f=new Ke,m=new Ke,v=new F,p=new F;function g(P,w,E){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,E),d.sub(c),u.sub(c),f.sub(h),m.sub(h);const I=1/(f.x*m.y-m.x*f.y);isFinite(I)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(I),p.copy(u).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(I),a[P].add(v),a[w].add(v),a[E].add(v),l[P].add(p),l[w].add(p),l[E].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,w=_.length;P<w;++P){const E=_[P],I=E.start,O=E.count;for(let L=I,k=I+O;L<k;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const y=new F,x=new F,b=new F,A=new F;function C(P){b.fromBufferAttribute(i,P),A.copy(b);const w=a[P];y.copy(w),y.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(A,w);const I=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,w=_.length;P<w;++P){const E=_[P],I=E.start,O=E.count;for(let L=I,k=I+O;L<k;L+=3)C(e.getX(L+0)),C(e.getX(L+1)),C(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new F,r=new F,o=new F,a=new F,l=new F,c=new F,d=new F,u=new F;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(d),l.add(d),c.add(d),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let g=0;g<d;g++)h[m++]=c[f++]}return new On(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const au=new Ce,Ri=new cc,Yr=new Hs,lu=new F,Kr=new F,Zr=new F,Jr=new F,Ma=new F,Qr=new F,cu=new F,eo=new F;class En extends gt{constructor(e=new wn,t=new lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Ma.fromBufferAttribute(u,e),o?Qr.addScaledVector(Ma,d):Qr.addScaledVector(Ma.sub(t),d))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Ri.copy(e.ray).recast(e.near),!(Yr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Yr,lu)===null||Ri.origin.distanceToSquared(lu)>(e.far-e.near)**2))&&(au.copy(r).invert(),Ri.copy(e.ray).applyMatrix4(au),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,b=y;x<b;x+=3){const A=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);i=to(this,g,e,n,c,d,u,A,C,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),y=a.getX(p+1),x=a.getX(p+2);i=to(this,o,e,n,c,d,u,_,y,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let x=_,b=y;x<b;x+=3){const A=x,C=x+1,P=x+2;i=to(this,g,e,n,c,d,u,A,C,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=p,y=p+1,x=p+2;i=to(this,o,e,n,c,d,u,_,y,x),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function _m(s,e,t,n,i,r,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===xi,a),l===null)return null;eo.copy(a),eo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(eo);return c<t.near||c>t.far?null:{distance:c,point:eo.clone(),object:s}}function to(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Kr),s.getVertexPosition(l,Zr),s.getVertexPosition(c,Jr);const d=_m(s,e,t,n,Kr,Zr,Jr,cu);if(d){const u=new F;Sn.getBarycoord(cu,Kr,Zr,Jr,u),i&&(d.uv=Sn.getInterpolatedAttribute(i,a,l,c,u,new Ke)),r&&(d.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new Ke)),o&&(d.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new F,materialIndex:0};Sn.getNormal(Kr,Zr,Jr,h.normal),d.face=h,d.barycoord=u}return d}class Dr extends wn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(u,2));function m(v,p,g,_,y,x,b,A,C,P,w){const E=x/C,I=b/P,O=x/2,L=b/2,k=A/2,B=C+1,N=P+1;let X=0,V=0;const j=new F;for(let re=0;re<N;re++){const ce=re*I-L;for(let ne=0;ne<B;ne++){const He=ne*E-O;j[v]=He*_,j[p]=ce*y,j[g]=k,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[g]=A>0?1:-1,d.push(j.x,j.y,j.z),u.push(ne/C),u.push(1-re/P),X+=1}}for(let re=0;re<P;re++)for(let ce=0;ce<C;ce++){const ne=h+ce+B*re,He=h+ce+B*(re+1),Qe=h+(ce+1)+B*(re+1),Ge=h+(ce+1)+B*re;l.push(ne,He,Ge),l.push(He,Qe,Ge),V+=6}a.addGroup(f,V,w),f+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Xt(s){const e={};for(let t=0;t<s.length;t++){const n=Fs(s[t]);for(const i in n)e[i]=n[i]}return e}function ym(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function uh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const xm={clone:Fs,merge:Xt};var Mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mm,this.fragmentShader=Sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=ym(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dh extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new F,uu=new Ke,du=new Ke;class jt extends dh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ns*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,uu,du),t.subVectors(du,uu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ar*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class Em extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new jt(us,ds,e,t);i.layers=this.layers,this.add(i);const r=new jt(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new jt(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new jt(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new jt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new jt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class hh extends zt{constructor(e=[],t=Ps,n,i,r,o,a,l,c,d){super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bm extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dr(5,5,5),r=new Mi({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:vi});r.uniforms.tEquirect.value=t;const o=new En(i,r),a=t.minFilter;return t.minFilter===Hi&&(t.minFilter=Fn),new Em(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class ys extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class Sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lt,this.environmentIntensity=1,this.environmentRotation=new Lt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hu=new F,fu=new Je,pu=new Je,Am=new F,mu=new Ce,no=new F,Ea=new Hs,gu=new Ce,ba=new cc;class Cm extends En{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vc,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingBox.expandByPoint(no)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Hs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,no),this.boundingSphere.expandByPoint(no)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(i),e.ray.intersectsSphere(Ea)!==!1&&(gu.copy(i).invert(),ba.copy(e.ray).applyMatrix4(gu),!(this.boundingBox!==null&&ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;fu.fromBufferAttribute(i.attributes.skinIndex,e),pu.fromBufferAttribute(i.attributes.skinWeight,e),hu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=pu.getComponent(r);if(o!==0){const a=fu.getComponent(r);mu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Am.copy(hu).applyMatrix4(mu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Bl extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rm extends zt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=cn,d=cn,u,h){super(null,o,a,l,c,d,i,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vu=new Ce,Im=new Ce;class dc{constructor(e=[],t=[]){this.uuid=Ei(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Im;vu.multiplyMatrices(a,t[r]),vu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rm(t,e,e,mn,Un);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Bl),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const wa=new F,Pm=new F,Lm=new ze;let Bi=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wa.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),i=this.coplanarPoint(wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ii=new Hs,Dm=new Ke(.5,.5),io=new F;class hc{constructor(e=new Bi,t=new Bi,n=new Bi,i=new Bi,r=new Bi,o=new Bi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],_=r[12],y=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,f-d,g-m,b-_).normalize(),i[1].setComponents(c+o,f+d,g+m,b+_).normalize(),i[2].setComponents(c+a,f+u,g+v,b+y).normalize(),i[3].setComponents(c-a,f-u,g-v,b-y).normalize(),n)i[4].setComponents(l,h,p,x).normalize(),i[5].setComponents(c-l,f-h,g-p,b-x).normalize();else if(i[4].setComponents(c-l,f-h,g-p,b-x).normalize(),t===Bn)i[5].setComponents(c+l,f+h,g+p,b+x).normalize();else if(t===Po)i[5].setComponents(l,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){Ii.center.set(0,0,0);const t=Dm.distanceTo(e.center);return Ii.radius=.7071067811865476+t,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(io.x=i.normal.x>0?e.max.x:e.min.x,io.y=i.normal.y>0?e.max.y:e.min.y,io.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lo=new F,Do=new F,_u=new Ce,Zs=new cc,so=new Hs,Ta=new F,yu=new F;class Nm extends gt{constructor(e=new wn,t=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Lo.fromBufferAttribute(t,i-1),Do.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Lo.distanceTo(Do);e.setAttribute("lineDistance",new en(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),so.copy(n.boundingSphere),so.applyMatrix4(i),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;_u.copy(i).invert(),Zs.copy(e.ray).applyMatrix4(_u);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=d.getX(v),_=d.getX(v+1),y=ro(this,e,Zs,l,g,_,v);y&&t.push(y)}if(this.isLineLoop){const v=d.getX(m-1),p=d.getX(f),g=ro(this,e,Zs,l,v,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=ro(this,e,Zs,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=ro(this,e,Zs,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ro(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Lo.fromBufferAttribute(a,i),Do.fromBufferAttribute(a,r),t.distanceSqToSegment(Lo,Do,Ta,yu)>n)return;Ta.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ta);if(!(c<e.near||c>e.far))return{distance:c,point:yu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class ph extends zt{constructor(e,t,n=$i,i,r,o,a=cn,l=cn,c,d=_r,u=1){if(d!==_r&&d!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mh extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fm{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const d=n[i],h=n[i+1]-d,f=(o-d)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ke:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new F,i=[],r=[],o=[],a=new F,l=new Ce;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function Um(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=gh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Vm(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let d=-1/0,u=-1/0;for(let h=t;h<i;h+=t){const f=s[h],m=s[h+1];f<a&&(a=f),m<l&&(l=m),f>d&&(d=f),m>u&&(u=m)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return Sr(r,o,t,a,l,c,0),o}function gh(s,e,t,n,i){let r;if(i===Jm(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=xu(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=xu(o/n|0,s[o],s[o+1],r);return r&&Us(r,r.next)&&(br(r),r=r.next),r}function qi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Us(t,t.next)||yt(t.prev,t,t.next)===0)){if(br(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Sr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Xm(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Om(s,n,i,r):Bm(s)){e.push(l.i,s.i,c.i),br(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=km(qi(s),e),Sr(s,e,t,n,i,r,2)):o===2&&zm(s,e,t,n,i,r):Sr(qi(s),e,t,n,i,r,1);break}}}function Bm(s){const e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(i,r,o),u=Math.min(a,l,c),h=Math.max(i,r,o),f=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=d&&m.x<=h&&m.y>=u&&m.y<=f&&sr(i,a,r,l,o,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Om(s,e,t,n){const i=s.prev,r=s,o=s.next;if(yt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,d=i.y,u=r.y,h=o.y,f=Math.min(a,l,c),m=Math.min(d,u,h),v=Math.max(a,l,c),p=Math.max(d,u,h),g=Ol(f,m,e,t,n),_=Ol(v,p,e,t,n);let y=s.prevZ,x=s.nextZ;for(;y&&y.z>=g&&x&&x.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&sr(a,d,l,u,c,h,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&sr(a,d,l,u,c,h,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=g;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&sr(a,d,l,u,c,h,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&sr(a,d,l,u,c,h,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function km(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Us(n,i)&&_h(n,t,t.next,i)&&Er(n,i)&&Er(i,n)&&(e.push(n.i,t.i,i.i),br(t),br(t.next),t=s=i),t=t.next}while(t!==s);return qi(t)}function zm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ym(o,a)){let l=yh(o,a);o=qi(o,o.next),l=qi(l,l.next),Sr(o,e,t,n,i,r,0),Sr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Vm(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=gh(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(jm(c))}i.sort(Hm);for(let r=0;r<i.length;r++)t=Gm(i[r],t);return t}function Hm(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Gm(s,e){const t=Wm(s,e);if(!t)return e;const n=yh(t,s);return qi(n,n.next),qi(t,t.next)}function Wm(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Us(s,t))return t;do{if(Us(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&vh(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Er(t,s)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&$m(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function $m(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function Xm(s,e,t,n){let i=s;do i.z===0&&(i.z=Ol(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,qm(i)}function qm(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Ol(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function jm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function vh(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function sr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&vh(s,e,t,n,i,r,o,a)}function Ym(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Km(s,e)&&(Er(s,e)&&Er(e,s)&&Zm(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||Us(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Us(s,e){return s.x===e.x&&s.y===e.y}function _h(s,e,t,n){const i=ao(yt(s,e,t)),r=ao(yt(s,e,n)),o=ao(yt(t,n,s)),a=ao(yt(t,n,e));return!!(i!==r&&o!==a||i===0&&oo(s,t,e)||r===0&&oo(s,n,e)||o===0&&oo(t,s,n)||a===0&&oo(t,e,n))}function oo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ao(s){return s>0?1:s<0?-1:0}function Km(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_h(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Er(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function Zm(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function yh(s,e){const t=kl(s.i,s.x,s.y),n=kl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function xu(s,e,t,n){const i=kl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function br(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function kl(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Jm(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Qm{static triangulate(e,t,n=2){return Um(e,t,n)}}class fc{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return fc.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Mu(e),Su(n,e);let o=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Su(n,t[l]);const a=Qm.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Mu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Su(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ho extends wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=e/a,h=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<d;g++){const _=g*h-o;for(let y=0;y<c;y++){const x=y*u-r;m.push(x,-_,0),v.push(0,0,1),p.push(y/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const y=_+c*g,x=_+c*(g+1),b=_+1+c*(g+1),A=_+1+c*g;f.push(y,x,A),f.push(x,b,A)}this.setIndex(f),this.setAttribute("position",new en(m,3)),this.setAttribute("normal",new en(v,3)),this.setAttribute("uv",new en(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class eg extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lo extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tg extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lt,this.combine=ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ng extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ig extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function co(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function sg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function rg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Eu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function xh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Go{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class og extends Go{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gc:r=e,a=2*t-n;break;case Wc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Gc:o=e,l=2*n-t;break;case Wc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,p=v*m,g=-h*p+2*h*v-h*m,_=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*m+1,y=(-1-f)*p+(1.5+f)*v+.5*m,x=f*p-f*v;for(let b=0;b!==a;++b)r[b]=g*o[d+b]+_*o[c+b]+y*o[l+b]+x*o[u+b];return r}}class ag extends Go{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}}class lg extends Go{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class An{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ag(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ro:t=this.InterpolantFactoryMethodDiscrete;break;case Ul:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ro;case this.InterpolantFactoryMethodLinear:return Ul;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&sg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ta,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,h=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[h+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=Ul;class Gs extends An{constructor(e,t,n){super(e,t,n)}}Gs.prototype.ValueTypeName="bool";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Ro;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mh extends An{constructor(e,t,n,i){super(e,t,n,i)}}Mh.prototype.ValueTypeName="color";class wr extends An{constructor(e,t,n,i){super(e,t,n,i)}}wr.prototype.ValueTypeName="number";class cg extends Go{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Bs extends An{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new cg(this.times,this.values,this.getValueSize(),e)}}Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ws extends An{constructor(e,t,n){super(e,t,n)}}Ws.prototype.ValueTypeName="string";Ws.prototype.ValueBufferType=Array;Ws.prototype.DefaultInterpolation=Ro;Ws.prototype.InterpolantFactoryMethodLinear=void 0;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Tr extends An{constructor(e,t,n,i){super(e,t,n,i)}}Tr.prototype.ValueTypeName="vector";class ug{constructor(e="",t=-1,n=[],i=Ap){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ei(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=rg(l);l=Eu(l,1,d),c=Eu(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new wr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,m,v){if(f.length!==0){const p=[],g=[];xh(f,p,g,m),p.length!==0&&v.push(new u(h,p,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let v=0;v<h[m].morphTargets.length;v++)f[h[m].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let _=0;_!==h[m].morphTargets.length;++_){const y=h[m];p.push(y.time),g.push(y.morphTarget===v?1:0)}i.push(new wr(".morphTargetInfluence["+v+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Tr,f+".position",h,"pos",i),n(Bs,f+".quaternion",h,"rot",i),n(Tr,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wr;case"vector":case"vector2":case"vector3":case"vector4":return Tr;case"color":return Mh;case"quaternion":return Bs;case"bool":case"boolean":return Gs;case"string":return Ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function hg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dg(s.type);if(s.times===void 0){const t=[],n=[];xh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const cr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class fg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pg=new fg;class ji{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class mg extends Error{constructor(e,t){super(e),this.response=t}}class gg extends ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=cr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:n,onError:i});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Xn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){_();function _(){u.read().then(({done:y,value:x})=>{if(y)g.close();else{v+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let A=0,C=d.length;A<C;A++){const P=d[A];P.onProgress&&P.onProgress(b)}g.enqueue(x),_()}},y=>{g.error(y)})}}});return new Response(p)}else throw new mg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{cr.add(`file:${e}`,c);const d=Xn[e];delete Xn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Xn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const hs=new WeakMap;class vg extends ji{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=cr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=hs.get(o);u===void 0&&(u=[],hs.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=xr("img");function l(){d(),t&&t(this);const u=hs.get(this)||[];for(let h=0;h<u.length;h++){const f=u[h];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function c(u){d(),i&&i(u),cr.remove(`image:${e}`);const h=hs.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onError&&m.onError(u)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),cr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Sh extends ji{constructor(e){super(e)}load(e,t,n,i){const r=new zt,o=new vg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Wo extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Aa=new Ce,bu=new F,wu=new F;class pc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;bu.setFromMatrixPosition(e.matrixWorld),t.position.copy(bu),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),Aa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Aa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _g extends pc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ns*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yg extends Wo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _g}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Tu=new Ce,Js=new F,Ca=new F;class xg extends pc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),n.position.copy(Js),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),Tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tu,n.coordinateSystem,n.reversedDepth)}}class Au extends Wo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eh extends dh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mg extends pc{constructor(){super(new Eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends Wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Mg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bh extends Wo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sg{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Eg extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mc="\\[\\]\\.:\\/",bg=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",wg="[^"+mc.replace("\\.","")+"]",Tg=/((?:WC+[\/:])*)/.source.replace("WC",gc),Ag=/(WCOD+)?/.source.replace("WCOD",wg),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),Rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),Ig=new RegExp("^"+Tg+Ag+Cg+Rg+"$"),Pg=["material","materials","bones","map"];class Lg{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){const t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=Lg;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Cu(s,e,t,n){const i=Dg(n);switch(t){case Qd:return s*e;case th:return s*e/i.components*i.byteLength;case sc:return s*e/i.components*i.byteLength;case nh:return s*e*2/i.components*i.byteLength;case rc:return s*e*2/i.components*i.byteLength;case eh:return s*e*3/i.components*i.byteLength;case mn:return s*e*4/i.components*i.byteLength;case oc:return s*e*4/i.components*i.byteLength;case So:case Eo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bo:case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:case dl:return Math.max(s,16)*Math.max(e,8)/4;case ll:case ul:return Math.max(s,8)*Math.max(e,8)/2;case hl:case fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Il:case Pl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ll:case Dl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nl:case Fl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dg(s){switch(s){case kn:case Yd:return{byteLength:1,components:1};case gr:case Kd:case Lr:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case $i:case tc:case Un:return{byteLength:4,components:1};case Zd:case Jd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Ng(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<u.length;f++){const m=u[h],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ug=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ov=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ev=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Av=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,b0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,R0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Fg,alphahash_pars_fragment:Ug,alphamap_fragment:Bg,alphamap_pars_fragment:Og,alphatest_fragment:kg,alphatest_pars_fragment:zg,aomap_fragment:Vg,aomap_pars_fragment:Hg,batching_pars_vertex:Gg,batching_vertex:Wg,begin_vertex:$g,beginnormal_vertex:Xg,bsdfs:qg,iridescence_fragment:jg,bumpmap_pars_fragment:Yg,clipping_planes_fragment:Kg,clipping_planes_pars_fragment:Zg,clipping_planes_pars_vertex:Jg,clipping_planes_vertex:Qg,color_fragment:ev,color_pars_fragment:tv,color_pars_vertex:nv,color_vertex:iv,common:sv,cube_uv_reflection_fragment:rv,defaultnormal_vertex:ov,displacementmap_pars_vertex:av,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:uv,colorspace_fragment:dv,colorspace_pars_fragment:hv,envmap_fragment:fv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:Av,envmap_vertex:vv,fog_vertex:_v,fog_pars_vertex:yv,fog_fragment:xv,fog_pars_fragment:Mv,gradientmap_pars_fragment:Sv,lightmap_pars_fragment:Ev,lights_lambert_fragment:bv,lights_lambert_pars_fragment:wv,lights_pars_begin:Tv,lights_toon_fragment:Cv,lights_toon_pars_fragment:Rv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Nv,lights_fragment_maps:Fv,lights_fragment_end:Uv,logdepthbuf_fragment:Bv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:zv,map_fragment:Vv,map_pars_fragment:Hv,map_particle_fragment:Gv,map_particle_pars_fragment:Wv,metalnessmap_fragment:$v,metalnessmap_pars_fragment:Xv,morphinstance_vertex:qv,morphcolor_vertex:jv,morphnormal_vertex:Yv,morphtarget_pars_vertex:Kv,morphtarget_vertex:Zv,normal_fragment_begin:Jv,normal_fragment_maps:Qv,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:h0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:v0,shadowmap_vertex:_0,shadowmask_pars_fragment:y0,skinbase_vertex:x0,skinning_pars_vertex:M0,skinning_vertex:S0,skinnormal_vertex:E0,specularmap_fragment:b0,specularmap_pars_fragment:w0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:C0,transmission_pars_fragment:R0,uv_pars_fragment:I0,uv_pars_vertex:P0,uv_vertex:L0,worldpos_vertex:D0,background_vert:N0,background_frag:F0,backgroundCube_vert:U0,backgroundCube_frag:B0,cube_vert:O0,cube_frag:k0,depth_vert:z0,depth_frag:V0,distanceRGBA_vert:H0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:$0,linedashed_vert:X0,linedashed_frag:q0,meshbasic_vert:j0,meshbasic_frag:Y0,meshlambert_vert:K0,meshlambert_frag:Z0,meshmatcap_vert:J0,meshmatcap_frag:Q0,meshnormal_vert:e_,meshnormal_frag:t_,meshphong_vert:n_,meshphong_frag:i_,meshphysical_vert:s_,meshphysical_frag:r_,meshtoon_vert:o_,meshtoon_frag:a_,points_vert:l_,points_frag:c_,shadow_vert:u_,shadow_frag:d_,sprite_vert:h_,sprite_frag:f_},le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Nn={basic:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Xt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Xt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Xt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Xt([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Xt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Xt([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Xt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Xt([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Xt([le.common,le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Xt([le.lights,le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Nn.physical={uniforms:Xt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const uo={r:0,b:0,g:0},Pi=new Lt,p_=new Ce;function m_(s,e,t,n,i,r,o){const a=new Be(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function m(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const b=m(y);b===null?g(a,l):b&&b.isColor&&(g(b,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(y,x){const b=m(x);b&&(b.isCubeTexture||b.mapping===zo)?(d===void 0&&(d=new En(new Dr(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Fs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(A,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Pi.copy(x.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),d.material.uniforms.envMap.value=b,d.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(p_.makeRotationFromEuler(Pi)),d.material.toneMapped=Xe.getTransfer(b.colorSpace)!==rt,(u!==b||h!==b.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=b,h=b.version,f=s.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new En(new Ho(2,2),new Mi({name:"BackgroundMaterial",uniforms:Fs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(b.colorSpace)!==rt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||h!==b.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,h=b.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,x){y.getRGB(uo,uh(s)),n.buffers.color.setClear(uo.r,uo.g,uo.b,x,o)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,g(a,l)},render:v,addToRenderList:p,dispose:_}}function g_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(E,I,O,L,k){let B=!1;const N=u(L,O,I);r!==N&&(r=N,c(r.object)),B=f(E,L,O,k),B&&m(E,L,O,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(E,I,O,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(E){return s.bindVertexArray(E)}function d(E){return s.deleteVertexArray(E)}function u(E,I,O){const L=O.wireframe===!0;let k=n[E.id];k===void 0&&(k={},n[E.id]=k);let B=k[I.id];B===void 0&&(B={},k[I.id]=B);let N=B[L];return N===void 0&&(N=h(l()),B[L]=N),N}function h(E){const I=[],O=[],L=[];for(let k=0;k<t;k++)I[k]=0,O[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:L,object:E,attributes:{},index:null}}function f(E,I,O,L){const k=r.attributes,B=I.attributes;let N=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){const re=k[V];let ce=B[V];if(ce===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function m(E,I,O,L){const k={},B=I.attributes;let N=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){let re=B[V];re===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),k[V]=ce,N++}r.attributes=k,r.attributesNum=N,r.index=L}function v(){const E=r.newAttributes;for(let I=0,O=E.length;I<O;I++)E[I]=0}function p(E){g(E,0)}function g(E,I){const O=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;O[E]=1,L[E]===0&&(s.enableVertexAttribArray(E),L[E]=1),k[E]!==I&&(s.vertexAttribDivisor(E,I),k[E]=I)}function _(){const E=r.newAttributes,I=r.enabledAttributes;for(let O=0,L=I.length;O<L;O++)I[O]!==E[O]&&(s.disableVertexAttribArray(O),I[O]=0)}function y(E,I,O,L,k,B,N){N===!0?s.vertexAttribIPointer(E,I,O,k,B):s.vertexAttribPointer(E,I,O,L,k,B)}function x(E,I,O,L){v();const k=L.attributes,B=O.getAttributes(),N=I.defaultAttributeValues;for(const X in B){const V=B[X];if(V.location>=0){let j=k[X];if(j===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){const re=j.normalized,ce=j.itemSize,ne=e.get(j);if(ne===void 0)continue;const He=ne.buffer,Qe=ne.type,Ge=ne.bytesPerElement,Y=Qe===s.INT||Qe===s.UNSIGNED_INT||j.gpuType===tc;if(j.isInterleavedBufferAttribute){const J=j.data,ve=J.stride,Le=j.offset;if(J.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)g(V.location+be,J.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let be=0;be<V.locationSize;be++)p(V.location+be);s.bindBuffer(s.ARRAY_BUFFER,He);for(let be=0;be<V.locationSize;be++)y(V.location+be,ce/V.locationSize,Qe,re,ve*Ge,(Le+ce/V.locationSize*be)*Ge,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)g(V.location+J,j.meshPerAttribute);E.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<V.locationSize;J++)p(V.location+J);s.bindBuffer(s.ARRAY_BUFFER,He);for(let J=0;J<V.locationSize;J++)y(V.location+J,ce/V.locationSize,Qe,re,ce*Ge,ce/V.locationSize*J*Ge,Y)}}else if(N!==void 0){const re=N[X];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}_()}function b(){P();for(const E in n){const I=n[E];for(const O in I){const L=I[O];for(const k in L)d(L[k].object),delete L[k];delete I[O]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const O in I){const L=I[O];for(const k in L)d(L[k].object),delete L[k];delete I[O]}delete n[E.id]}function C(E){for(const I in n){const O=n[I];if(O[E.id]===void 0)continue;const L=O[E.id];for(const k in L)d(L[k].object),delete L[k];delete O[E.id]}}function P(){w(),o=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function v_(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let m=0;m<u;m++)f+=d[m];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],d[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=d[v]*h[v];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function __(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==mn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Un&&!P)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function y_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Bi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=s.get(u);if(!i||m===null||m.length===0||r&&!p)r?d(null):c();else{const _=r?0:n,y=_*4;let x=g.clippingState||null;l.value=x,x=d(m,h,y,f);for(let b=0;b!==y;++b)x[b]=t[b];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,m){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function x_(s){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Ps:a===ol&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===ol)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bm(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const xs=4,Ru=[.125,.215,.35,.446,.526,.582],zi=20,Ra=new Eh,Iu=new Be;let Ia=null,Pa=0,La=0,Da=!1;const Oi=(1+Math.sqrt(5))/2,fs=1/Oi,Pu=[new F(-Oi,fs,0),new F(Oi,fs,0),new F(-fs,0,Oi),new F(fs,0,Oi),new F(0,Oi,-fs),new F(0,Oi,fs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],M_=new F;class Lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=M_}=r;Ia=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ia,Pa,La),this._renderer.xr.enabled=Da,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ia=this._renderer.getRenderTarget(),Pa=this._renderer.getActiveCubeFace(),La=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Lr,format:mn,colorSpace:Ds,depthBuffer:!1},i=Du(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Du(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S_(r)),this._blurMaterial=E_(r,e,t)}return i}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,Ra)}_sceneToCubeUV(e,t,n,i,r){const l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Iu),u.toneMapping=_i,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new lh({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),p=new En(new Dr,v);let g=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,g=!0):(v.color.copy(Iu),g=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[y]));const b=this._cubeSize;ho(i,x*b,y>2?b:0,b,b),u.setRenderTarget(i),g&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ps||e.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ra)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pu[(i-r-1)%Pu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new En(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*zi-1),v=r/m,p=isFinite(r)?1+Math.floor(d*v):zi;p>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${zi}`);const g=[];let _=0;for(let C=0;C<zi;++C){const P=C/v,w=Math.exp(-P*P/2);g.push(w),C===0?_+=w:C<p&&(_+=2*w)}for(let C=0;C<g.length;C++)g[C]=g[C]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-xs?i-y+xs:0),A=4*(this._cubeSize-x);ho(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Ra)}}function S_(s){const e=[],t=[],n=[];let i=s;const r=s-xs+1+Ru.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-xs?l=Ru[o-s+xs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,m=6,v=3,p=2,g=1,_=new Float32Array(v*m*f),y=new Float32Array(p*m*f),x=new Float32Array(g*m*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,P=A>2?0:-1,w=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];_.set(w,v*m*A),y.set(h,p*m*A);const E=[A,A,A,A,A,A];x.set(E,g*m*A)}const b=new wn;b.setAttribute("position",new On(_,v)),b.setAttribute("uv",new On(y,p)),b.setAttribute("faceIndex",new On(x,g)),e.push(b),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Du(s,e,t){const n=new Xi(s,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function E_(s,e,t){const n=new Float32Array(zi),i=new F(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Nu(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Fu(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function vc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function b_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===ol,d=l===Ps||l===Ls;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Lu(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Lu(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function w_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function T_(s,e,t,n){const i={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],A=_[y+1],C=_[y+2];h.push(b,A,A,C,C,b)}}else if(m!==void 0){const _=m.array;v=m.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,A=y+1,C=y+2;h.push(b,A,A,C,C,b)}}else return;const p=new(sh(h)?ch:uc)(h,1);p.version=v;const g=r.get(u);g&&e.remove(g),r.set(u,p)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function A_(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,h*o,m),t.update(f,n,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(h,f,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_]*v[_];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function C_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function R_(s,e,t){const n=new WeakMap,i=new Je;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*A*4*u),P=new rh(C,b,A,u);P.type=Un,P.needsUpdate=!0;const w=x*4;for(let I=0;I<u;I++){const O=g[I],L=_[I],k=y[I],B=b*A*4*I;for(let N=0;N<O.count;N++){const X=N*w;m===!0&&(i.fromBufferAttribute(O,N),C[B+X+0]=i.x,C[B+X+1]=i.y,C[B+X+2]=i.z,C[B+X+3]=0),v===!0&&(i.fromBufferAttribute(L,N),C[B+X+4]=i.x,C[B+X+5]=i.y,C[B+X+6]=i.z,C[B+X+7]=0),p===!0&&(i.fromBufferAttribute(k,N),C[B+X+8]=i.x,C[B+X+9]=i.y,C[B+X+10]=i.z,C[B+X+11]=k.itemSize===4?i.w:1)}}h={count:u,texture:P,size:new Ke(b,A)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function I_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Th=new zt,Uu=new ph(1,1),Ah=new rh,Ch=new am,Rh=new hh,Bu=[],Ou=[],ku=new Float32Array(16),zu=new Float32Array(9),Vu=new Float32Array(4);function $s(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Bu[i];if(r===void 0&&(r=new Float32Array(i),Bu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Nt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function $o(s,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function P_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function L_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),Nt(t,e)}}function D_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),Nt(t,e)}}function N_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),Nt(t,e)}}function F_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;Vu.set(n),s.uniformMatrix2fv(this.addr,!1,Vu),Nt(t,n)}}function U_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;zu.set(n),s.uniformMatrix3fv(this.addr,!1,zu),Nt(t,n)}}function B_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;ku.set(n),s.uniformMatrix4fv(this.addr,!1,ku),Nt(t,n)}}function O_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),Nt(t,e)}}function z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),Nt(t,e)}}function V_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),Nt(t,e)}}function H_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function G_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),Nt(t,e)}}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),Nt(t,e)}}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),Nt(t,e)}}function X_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uu.compareFunction=ih,r=Uu):r=Th,t.setTexture2D(e||r,i)}function q_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ch,i)}function j_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rh,i)}function Y_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ah,i)}function K_(s){switch(s){case 5126:return P_;case 35664:return L_;case 35665:return D_;case 35666:return N_;case 35674:return F_;case 35675:return U_;case 35676:return B_;case 5124:case 35670:return O_;case 35667:case 35671:return k_;case 35668:case 35672:return z_;case 35669:case 35673:return V_;case 5125:return H_;case 36294:return G_;case 36295:return W_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return q_;case 35680:case 36300:case 36308:case 36293:return j_;case 36289:case 36303:case 36311:case 36292:return Y_}}function Z_(s,e){s.uniform1fv(this.addr,e)}function J_(s,e){const t=$s(e,this.size,2);s.uniform2fv(this.addr,t)}function Q_(s,e){const t=$s(e,this.size,3);s.uniform3fv(this.addr,t)}function ey(s,e){const t=$s(e,this.size,4);s.uniform4fv(this.addr,t)}function ty(s,e){const t=$s(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ny(s,e){const t=$s(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iy(s,e){const t=$s(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sy(s,e){s.uniform1iv(this.addr,e)}function ry(s,e){s.uniform2iv(this.addr,e)}function oy(s,e){s.uniform3iv(this.addr,e)}function ay(s,e){s.uniform4iv(this.addr,e)}function ly(s,e){s.uniform1uiv(this.addr,e)}function cy(s,e){s.uniform2uiv(this.addr,e)}function uy(s,e){s.uniform3uiv(this.addr,e)}function dy(s,e){s.uniform4uiv(this.addr,e)}function hy(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Th,r[o])}function fy(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ch,r[o])}function py(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Rh,r[o])}function my(s,e,t){const n=this.cache,i=e.length,r=$o(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),Nt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Ah,r[o])}function gy(s){switch(s){case 5126:return Z_;case 35664:return J_;case 35665:return Q_;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return sy;case 35667:case 35671:return ry;case 35668:case 35672:return oy;case 35669:case 35673:return ay;case 5125:return ly;case 36294:return cy;case 36295:return uy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}class vy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=K_(t.type)}}class _y{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}}class yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Hu(s,e){s.seq.push(e),s.map[e.id]=e}function xy(s,e,t){const n=s.name,i=n.length;for(Na.lastIndex=0;;){const r=Na.exec(n),o=Na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hu(t,c===void 0?new vy(a,s,e):new _y(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new yy(a),Hu(t,u)),t=u}}}class To{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);xy(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const My=37297;let Sy=0;function Ey(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Wu=new ze;function by(s){Xe._getMatrix(Wu,Xe.workingColorSpace,s);const e=`mat3( ${Wu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Io:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $u(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Ey(s.getShaderSource(e),a)}else return r}function wy(s,e){const t=by(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ty(s,e){let t;switch(e){case _p:t="Linear";break;case yp:t="Reinhard";break;case xp:t="Cineon";break;case Mp:t="ACESFilmic";break;case Ep:t="AgX";break;case bp:t="Neutral";break;case Sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new F;function Ay(){Xe.getLuminanceCoefficients(fo);const s=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function Ry(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Iy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function rr(s){return s!==""}function Xu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(s){return s.replace(Py,Dy)}const Ly=new Map;function Dy(s,e){let t=$e[e];if(t===void 0){const n=Ly.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vl(t)}const Ny=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(s){return s.replace(Ny,Fy)}function Fy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Zf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function By(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ps:case Ls:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Oy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function ky(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ko:e="ENVMAP_BLENDING_MULTIPLY";break;case gp:e="ENVMAP_BLENDING_MIX";break;case vp:e="ENVMAP_BLENDING_ADD";break}return e}function zy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vy(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Uy(t),c=By(t),d=Oy(t),u=ky(t),h=zy(t),f=Cy(t),m=Ry(r),v=i.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(rr).join(`
`),g.length>0&&(g+=`
`)):(p=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),g=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?$e.tonemapping_pars_fragment:"",t.toneMapping!==_i?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,wy("linearToOutputTexel",t.outputColorSpace),Ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),o=Vl(o),o=Xu(o,t),o=qu(o,t),a=Vl(a),a=Xu(a,t),a=qu(a,t),o=ju(o),a=ju(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=_+p+o,x=_+g+a,b=Gu(i,i.VERTEX_SHADER,y),A=Gu(i,i.FRAGMENT_SHADER,x);i.attachShader(v,b),i.attachShader(v,A),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(I){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(b)||"",k=i.getShaderInfoLog(A)||"",B=O.trim(),N=L.trim(),X=k.trim();let V=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,A);else{const re=$u(i,b,"vertex"),ce=$u(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+re+`
`+ce)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||X==="")&&(j=!1);j&&(I.diagnostics={runnable:V,programLog:B,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:g}})}i.deleteShader(b),i.deleteShader(A),P=new To(i,v),w=Iy(i,v)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(v,My)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}let Hy=0;class Gy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wy(e),t.set(e,n)),n}}class Wy{constructor(e){this.id=Hy++,this.code=e,this.usedTimes=0}}function $y(s,e,t,n,i,r,o){const a=new oh,l=new Gy,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,E,I,O,L){const k=O.fog,B=L.geometry,N=w.isMeshStandardMaterial?O.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||N),V=X&&X.mapping===zo?X.image.height:null,j=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=re!==void 0?re.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let He,Qe,Ge,Y;if(j){const it=Nn[j];He=it.vertexShader,Qe=it.fragmentShader}else He=w.vertexShader,Qe=w.fragmentShader,l.update(w),Ge=l.getVertexShaderID(w),Y=l.getFragmentShaderID(w);const J=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Le=L.isInstancedMesh===!0,be=L.isBatchedMesh===!0,Ye=!!w.map,Rt=!!w.matcap,D=!!X,ft=!!w.aoMap,ke=!!w.lightMap,Fe=!!w.bumpMap,Me=!!w.normalMap,pt=!!w.displacementMap,Se=!!w.emissiveMap,We=!!w.metalnessMap,Ut=!!w.roughnessMap,Mt=w.anisotropy>0,R=w.clearcoat>0,S=w.dispersion>0,G=w.iridescence>0,K=w.sheen>0,Q=w.transmission>0,q=Mt&&!!w.anisotropyMap,Ae=R&&!!w.clearcoatMap,oe=R&&!!w.clearcoatNormalMap,Ee=R&&!!w.clearcoatRoughnessMap,we=G&&!!w.iridescenceMap,ie=G&&!!w.iridescenceThicknessMap,he=K&&!!w.sheenColorMap,De=K&&!!w.sheenRoughnessMap,Te=!!w.specularMap,ue=!!w.specularColorMap,Ve=!!w.specularIntensityMap,U=Q&&!!w.transmissionMap,se=Q&&!!w.thicknessMap,ae=!!w.gradientMap,_e=!!w.alphaMap,ee=w.alphaTest>0,Z=!!w.alphaHash,xe=!!w.extensions;let Oe=_i;w.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const lt={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:He,fragmentShader:Qe,defines:w.defines,customVertexShaderID:Ge,customFragmentShaderID:Y,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:be,batchingColor:be&&L._colorsTexture!==null,instancing:Le,instancingColor:Le&&L.instanceColor!==null,instancingMorph:Le&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ds,alphaToCoverage:!!w.alphaToCoverage,map:Ye,matcap:Rt,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:V,aoMap:ft,lightMap:ke,bumpMap:Fe,normalMap:Me,displacementMap:h&&pt,emissiveMap:Se,normalMapObjectSpace:Me&&w.normalMapType===Ip,normalMapTangentSpace:Me&&w.normalMapType===Vo,metalnessMap:We,roughnessMap:Ut,anisotropy:Mt,anisotropyMap:q,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:he,sheenRoughnessMap:De,specularMap:Te,specularColorMap:ue,specularIntensityMap:Ve,transmission:Q,transmissionMap:U,thicknessMap:se,gradientMap:ae,opaque:w.transparent===!1&&w.blending===bs&&w.alphaToCoverage===!1,alphaMap:_e,alphaTest:ee,alphaHash:Z,combine:w.combine,mapUv:Ye&&v(w.map.channel),aoMapUv:ft&&v(w.aoMap.channel),lightMapUv:ke&&v(w.lightMap.channel),bumpMapUv:Fe&&v(w.bumpMap.channel),normalMapUv:Me&&v(w.normalMap.channel),displacementMapUv:pt&&v(w.displacementMap.channel),emissiveMapUv:Se&&v(w.emissiveMap.channel),metalnessMapUv:We&&v(w.metalnessMap.channel),roughnessMapUv:Ut&&v(w.roughnessMap.channel),anisotropyMapUv:q&&v(w.anisotropyMap.channel),clearcoatMapUv:Ae&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(w.sheenRoughnessMap.channel),specularMapUv:Te&&v(w.specularMap.channel),specularColorMapUv:ue&&v(w.specularColorMap.channel),specularIntensityMapUv:Ve&&v(w.specularIntensityMap.channel),transmissionMapUv:U&&v(w.transmissionMap.channel),thicknessMapUv:se&&v(w.thicknessMap.channel),alphaMapUv:_e&&v(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Me||Mt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ye||_e),fog:!!k,useFog:w.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ve,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ye&&w.map.isVideoTexture===!0&&Xe.getTransfer(w.map.colorSpace)===rt,decodeVideoTextureEmissive:Se&&w.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(w.emissiveMap.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ei,flipSided:w.side===tn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:xe&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&w.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function g(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)E.push(I),E.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(_(E,w),y(E,w),E.push(s.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function _(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function y(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const E=m[w.type];let I;if(E){const O=Nn[E];I=xm.clone(O.uniforms)}else I=w.uniforms;return I}function b(w,E){let I;for(let O=0,L=d.length;O<L;O++){const k=d[O];if(k.cacheKey===E){I=k,++I.usedTimes;break}}return I===void 0&&(I=new Vy(s,E,w,r),d.push(I)),I}function A(w){if(--w.usedTimes===0){const E=d.indexOf(w);d[E]=d[d.length-1],d.pop(),w.destroy()}}function C(w){l.remove(w)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:P}}function Xy(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function qy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ku(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Zu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,f,m,v,p){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:h,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:p},s[e]=g):(g.id=u.id,g.object=u,g.geometry=h,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=p),e++,g}function a(u,h,f,m,v,p){const g=o(u,h,f,m,v,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(u,h,f,m,v,p){const g=o(u,h,f,m,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,h){t.length>1&&t.sort(u||qy),n.length>1&&n.sort(h||Ku),i.length>1&&i.sort(h||Ku)}function d(){for(let u=e,h=s.length;u<h;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function jy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Zu,s.set(n,[o])):i>=r.length?(o=new Zu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Yy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Be};break;case"SpotLight":t={position:new F,direction:new F,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new F,halfWidth:new F,halfHeight:new F};break}return s[e.id]=t,t}}}function Ky(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Zy=0;function Jy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qy(s){const e=new Yy,t=Ky(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const i=new F,r=new Ce,o=new Ce;function a(c){let d=0,u=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,y=0,x=0,b=0,A=0,C=0;c.sort(Jy);for(let w=0,E=c.length;w<E;w++){const I=c[w],O=I.color,L=I.intensity,k=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=O.r*L,u+=O.g*L,h+=O.b*L;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],L);C++}else if(I.isDirectionalLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const X=I.shadow,V=t.get(I);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=I.shadow.matrix,_++}n.directional[f]=N,f++}else if(I.isSpotLight){const N=e.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(O).multiplyScalar(L),N.distance=k,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[v]=N;const X=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,X.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[v]=X.matrix,I.castShadow){const V=t.get(I);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=B,x++}v++}else if(I.isRectAreaLight){const N=e.get(I);N.color.copy(O).multiplyScalar(L),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=N,p++}else if(I.isPointLight){const N=e.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){const X=I.shadow,V=t.get(I);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=I.shadow.matrix,y++}n.point[m]=N,m++}else if(I.isHemisphereLight){const N=e.get(I);N.skyColor.copy(I.color).multiplyScalar(L),N.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[g]=N,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==p||P.hemiLength!==g||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=p,P.hemiLength=g,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=C,n.version=Zy++)}function l(c,d){let u=0,h=0,f=0,m=0,v=0;const p=d.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const y=c[g];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Ju(s){const e=new Qy(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ex(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Ju(s),e.set(i,[a])):r>=o.length?(a=new Ju(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ix(s,e,t){let n=new hc;const i=new Ke,r=new Ke,o=new Je,a=new ng({depthPacking:Rp}),l=new ig,c={},d=t.maxTextureSize,u={[xi]:tn,[tn]:xi,[ei]:ei},h=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:tx,fragmentShader:nx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new wn;m.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new En(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let g=this.type;this.render=function(A,C,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const w=s.getRenderTarget(),E=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),O=s.state;O.setBlending(vi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=g!==Jn&&this.type===Jn,k=g===Jn&&this.type!==Jn;for(let B=0,N=A.length;B<N;B++){const X=A[B],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();if(i.multiply(j),r.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/j.x),i.x=r.x*j.x,V.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/j.y),i.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||L===!0||k===!0){const ce=this.type!==Jn?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new Xi(i.x,i.y,ce),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let ce=0;ce<re;ce++){const ne=V.getViewport(ce);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),O.viewport(o),V.updateMatrices(X,ce),n=V.getFrustum(),x(C,P,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Jn&&_(V,P),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(w,E,I)};function _(A,C){const P=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xi(i.x,i.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(C,null,P,h,v,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(C,null,P,f,v,null)}function y(A,C,P,w){let E=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)E=I;else if(E=P.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=E.uuid,L=C.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let B=k[L];B===void 0&&(B=E.clone(),k[L]=B,C.addEventListener("dispose",b)),E=B}if(E.visible=C.visible,E.wireframe=C.wireframe,w===Jn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=s.properties.get(E);O.light=P}return E}function x(A,C,P,w,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=e.update(A),k=A.material;if(Array.isArray(k)){const B=L.groups;for(let N=0,X=B.length;N<X;N++){const V=B[N],j=k[V.materialIndex];if(j&&j.visible){const re=y(A,j,w,E);A.onBeforeShadow(s,A,C,P,L,re,V),s.renderBufferDirect(P,null,L,re,A,V),A.onAfterShadow(s,A,C,P,L,re,V)}}}else if(k.visible){const B=y(A,k,w,E);A.onBeforeShadow(s,A,C,P,L,B,null),s.renderBufferDirect(P,null,L,B,A,null),A.onAfterShadow(s,A,C,P,L,B,null)}}const O=A.children;for(let L=0,k=O.length;L<k;L++)x(O[L],C,P,w,E)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const w=c[P],E=A.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const sx={[Qa]:el,[tl]:sl,[nl]:rl,[Is]:il,[el]:Qa,[sl]:tl,[rl]:nl,[il]:Is};function rx(s,e){function t(){let U=!1;const se=new Je;let ae=null;const _e=new Je(0,0,0,0);return{setMask:function(ee){ae!==ee&&!U&&(s.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){U=ee},setClear:function(ee,Z,xe,Oe,lt){lt===!0&&(ee*=Oe,Z*=Oe,xe*=Oe),se.set(ee,Z,xe,Oe),_e.equals(se)===!1&&(s.clearColor(ee,Z,xe,Oe),_e.copy(se))},reset:function(){U=!1,ae=null,_e.set(-1,0,0,0)}}}function n(){let U=!1,se=!1,ae=null,_e=null,ee=null;return{setReversed:function(Z){if(se!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=Z;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(Z){Z?J(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!U&&(s.depthMask(Z),ae=Z)},setFunc:function(Z){if(se&&(Z=sx[Z]),_e!==Z){switch(Z){case Qa:s.depthFunc(s.NEVER);break;case el:s.depthFunc(s.ALWAYS);break;case tl:s.depthFunc(s.LESS);break;case Is:s.depthFunc(s.LEQUAL);break;case nl:s.depthFunc(s.EQUAL);break;case il:s.depthFunc(s.GEQUAL);break;case sl:s.depthFunc(s.GREATER);break;case rl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Z}},setLocked:function(Z){U=Z},setClear:function(Z){ee!==Z&&(se&&(Z=1-Z),s.clearDepth(Z),ee=Z)},reset:function(){U=!1,ae=null,_e=null,ee=null,se=!1}}}function i(){let U=!1,se=null,ae=null,_e=null,ee=null,Z=null,xe=null,Oe=null,lt=null;return{setTest:function(it){U||(it?J(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(it){se!==it&&!U&&(s.stencilMask(it),se=it)},setFunc:function(it,zn,Cn){(ae!==it||_e!==zn||ee!==Cn)&&(s.stencilFunc(it,zn,Cn),ae=it,_e=zn,ee=Cn)},setOp:function(it,zn,Cn){(Z!==it||xe!==zn||Oe!==Cn)&&(s.stencilOp(it,zn,Cn),Z=it,xe=zn,Oe=Cn)},setLocked:function(it){U=it},setClear:function(it){lt!==it&&(s.clearStencil(it),lt=it)},reset:function(){U=!1,se=null,ae=null,_e=null,ee=null,Z=null,xe=null,Oe=null,lt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,y=null,x=null,b=null,A=null,C=new Be(0,0,0),P=0,w=!1,E=null,I=null,O=null,L=null,k=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=X>=2);let j=null,re={};const ce=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),He=new Je().fromArray(ce),Qe=new Je().fromArray(ne);function Ge(U,se,ae,_e){const ee=new Uint8Array(4),Z=s.createTexture();s.bindTexture(U,Z),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ae;xe++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(se+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return Z}const Y={};Y[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(Is),Fe(!1),Me(Bc),J(s.CULL_FACE),ft(vi);function J(U){d[U]!==!0&&(s.enable(U),d[U]=!0)}function ve(U){d[U]!==!1&&(s.disable(U),d[U]=!1)}function Le(U,se){return u[U]!==se?(s.bindFramebuffer(U,se),u[U]=se,U===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=se),U===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=se),!0):!1}function be(U,se){let ae=f,_e=!1;if(U){ae=h.get(se),ae===void 0&&(ae=[],h.set(se,ae));const ee=U.textures;if(ae.length!==ee.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,xe=ee.length;Z<xe;Z++)ae[Z]=s.COLOR_ATTACHMENT0+Z;ae.length=ee.length,_e=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,_e=!0);_e&&s.drawBuffers(ae)}function Ye(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const Rt={[ki]:s.FUNC_ADD,[Qf]:s.FUNC_SUBTRACT,[ep]:s.FUNC_REVERSE_SUBTRACT};Rt[tp]=s.MIN,Rt[np]=s.MAX;const D={[ip]:s.ZERO,[sp]:s.ONE,[rp]:s.SRC_COLOR,[Za]:s.SRC_ALPHA,[dp]:s.SRC_ALPHA_SATURATE,[cp]:s.DST_COLOR,[ap]:s.DST_ALPHA,[op]:s.ONE_MINUS_SRC_COLOR,[Ja]:s.ONE_MINUS_SRC_ALPHA,[up]:s.ONE_MINUS_DST_COLOR,[lp]:s.ONE_MINUS_DST_ALPHA,[hp]:s.CONSTANT_COLOR,[fp]:s.ONE_MINUS_CONSTANT_COLOR,[pp]:s.CONSTANT_ALPHA,[mp]:s.ONE_MINUS_CONSTANT_ALPHA};function ft(U,se,ae,_e,ee,Z,xe,Oe,lt,it){if(U===vi){v===!0&&(ve(s.BLEND),v=!1);return}if(v===!1&&(J(s.BLEND),v=!0),U!==Jf){if(U!==p||it!==w){if((g!==ki||x!==ki)&&(s.blendEquation(s.FUNC_ADD),g=ki,x=ki),it)switch(U){case bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oc:s.blendFunc(s.ONE,s.ONE);break;case kc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Oc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case kc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,y=null,b=null,A=null,C.set(0,0,0),P=0,p=U,w=it}return}ee=ee||se,Z=Z||ae,xe=xe||_e,(se!==g||ee!==x)&&(s.blendEquationSeparate(Rt[se],Rt[ee]),g=se,x=ee),(ae!==_||_e!==y||Z!==b||xe!==A)&&(s.blendFuncSeparate(D[ae],D[_e],D[Z],D[xe]),_=ae,y=_e,b=Z,A=xe),(Oe.equals(C)===!1||lt!==P)&&(s.blendColor(Oe.r,Oe.g,Oe.b,lt),C.copy(Oe),P=lt),p=U,w=!1}function ke(U,se){U.side===ei?ve(s.CULL_FACE):J(s.CULL_FACE);let ae=U.side===tn;se&&(ae=!ae),Fe(ae),U.blending===bs&&U.transparent===!1?ft(vi):ft(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const _e=U.stencilWrite;a.setTest(_e),_e&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Se(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){E!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),E=U)}function Me(U){U!==Yf?(J(s.CULL_FACE),U!==I&&(U===Bc?s.cullFace(s.BACK):U===Kf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),I=U}function pt(U){U!==O&&(N&&s.lineWidth(U),O=U)}function Se(U,se,ae){U?(J(s.POLYGON_OFFSET_FILL),(L!==se||k!==ae)&&(s.polygonOffset(se,ae),L=se,k=ae)):ve(s.POLYGON_OFFSET_FILL)}function We(U){U?J(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function Ut(U){U===void 0&&(U=s.TEXTURE0+B-1),j!==U&&(s.activeTexture(U),j=U)}function Mt(U,se,ae){ae===void 0&&(j===null?ae=s.TEXTURE0+B-1:ae=j);let _e=re[ae];_e===void 0&&(_e={type:void 0,texture:void 0},re[ae]=_e),(_e.type!==U||_e.texture!==se)&&(j!==ae&&(s.activeTexture(ae),j=ae),s.bindTexture(U,se||Y[U]),_e.type=U,_e.texture=se)}function R(){const U=re[j];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{s.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{s.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{s.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{s.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{s.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(U){He.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function De(U){Qe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Qe.copy(U))}function Te(U,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let _e=ae.get(U);_e===void 0&&(_e=s.getUniformBlockIndex(se,U.name),ae.set(U,_e))}function ue(U,se){const _e=c.get(se).get(U);l.get(se)!==_e&&(s.uniformBlockBinding(se,_e,U.__bindingPointIndex),l.set(se,_e))}function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},j=null,re={},u={},h=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,y=null,x=null,b=null,A=null,C=new Be(0,0,0),P=0,w=!1,E=null,I=null,O=null,L=null,k=null,He.set(0,0,s.canvas.width,s.canvas.height),Qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ve,bindFramebuffer:Le,drawBuffers:be,useProgram:Ye,setBlending:ft,setMaterial:ke,setFlipSided:Fe,setCullFace:Me,setLineWidth:pt,setPolygonOffset:Se,setScissorTest:We,activeTexture:Ut,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:we,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:he,viewport:De,reset:Ve}}function ox(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):xr("canvas")}function v(R,S,G){let K=1;const Q=Mt(R);if((Q.width>G||Q.height>G)&&(K=G/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(K*Q.width),Ae=Math.floor(K*Q.height);u===void 0&&(u=m(q,Ae));const oe=S?m(q,Ae):u;return oe.width=q,oe.height=Ae,oe.getContext("2d").drawImage(R,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ae+")."),oe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){s.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,S,G,K,Q=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=S;if(S===s.RED&&(G===s.FLOAT&&(q=s.R32F),G===s.HALF_FLOAT&&(q=s.R16F),G===s.UNSIGNED_BYTE&&(q=s.R8)),S===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.R8UI),G===s.UNSIGNED_SHORT&&(q=s.R16UI),G===s.UNSIGNED_INT&&(q=s.R32UI),G===s.BYTE&&(q=s.R8I),G===s.SHORT&&(q=s.R16I),G===s.INT&&(q=s.R32I)),S===s.RG&&(G===s.FLOAT&&(q=s.RG32F),G===s.HALF_FLOAT&&(q=s.RG16F),G===s.UNSIGNED_BYTE&&(q=s.RG8)),S===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RG8UI),G===s.UNSIGNED_SHORT&&(q=s.RG16UI),G===s.UNSIGNED_INT&&(q=s.RG32UI),G===s.BYTE&&(q=s.RG8I),G===s.SHORT&&(q=s.RG16I),G===s.INT&&(q=s.RG32I)),S===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(q=s.RGB16UI),G===s.UNSIGNED_INT&&(q=s.RGB32UI),G===s.BYTE&&(q=s.RGB8I),G===s.SHORT&&(q=s.RGB16I),G===s.INT&&(q=s.RGB32I)),S===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),G===s.UNSIGNED_INT&&(q=s.RGBA32UI),G===s.BYTE&&(q=s.RGBA8I),G===s.SHORT&&(q=s.RGBA16I),G===s.INT&&(q=s.RGBA32I)),S===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),S===s.RGBA){const Ae=Q?Io:Xe.getTransfer(K);G===s.FLOAT&&(q=s.RGBA32F),G===s.HALF_FLOAT&&(q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(q=Ae===rt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function x(R,S){let G;return R?S===null||S===$i||S===vr?G=s.DEPTH24_STENCIL8:S===Un?G=s.DEPTH32F_STENCIL8:S===gr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$i||S===vr?G=s.DEPTH_COMPONENT24:S===Un?G=s.DEPTH_COMPONENT32F:S===gr&&(G=s.DEPTH_COMPONENT16),G}function b(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==cn&&R.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&d.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),E(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,K=h.get(G);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&w(R),Object.keys(K).length===0&&h.delete(G)}n.remove(R)}function w(R){const S=n.get(R);s.deleteTexture(S.__webglTexture);const G=R.source,K=h.get(G);delete K[S.__cacheKey],o.memory.textures--}function E(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)s.deleteFramebuffer(S.__webglFramebuffer[K]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let K=0,Q=G.length;K<Q;K++){const q=n.get(G[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(R)}let I=0;function O(){I=0}function L(){const R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function k(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function B(R,S){const G=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+S)}function N(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Y(G,R,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+S)}function X(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Y(G,R,S);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+S)}function V(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+S)}const j={[mr]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[al]:s.MIRRORED_REPEAT},re={[cn]:s.NEAREST,[Tp]:s.NEAREST_MIPMAP_NEAREST,[kr]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[ea]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},ce={[Pp]:s.NEVER,[Bp]:s.ALWAYS,[Lp]:s.LESS,[ih]:s.LEQUAL,[Dp]:s.EQUAL,[Up]:s.GEQUAL,[Np]:s.GREATER,[Fp]:s.NOTEQUAL};function ne(R,S){if(S.type===Un&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===ea||S.magFilter===kr||S.magFilter===Hi||S.minFilter===Fn||S.minFilter===ea||S.minFilter===kr||S.minFilter===Hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,j[S.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,j[S.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,j[S.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,re[S.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===cn||S.minFilter!==kr&&S.minFilter!==Hi||S.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let Q=h.get(K);Q===void 0&&(Q={},h.set(K,Q));const q=k(S);if(q!==R.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[q].usedTimes++;const Ae=Q[R.__cacheKey];Ae!==void 0&&(Q[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&w(S)),R.__cacheKey=q,R.__webglTexture=Q[q].texture}return G}function Qe(R,S,G){return Math.floor(Math.floor(R/G)/S)}function Ge(R,S,G,K){const q=R.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,G,K,S.data);else{q.sort((ie,he)=>ie.start-he.start);let Ae=0;for(let ie=1;ie<q.length;ie++){const he=q[Ae],De=q[ie],Te=he.start+he.count,ue=Qe(De.start,S.width,4),Ve=Qe(he.start,S.width,4);De.start<=Te+1&&ue===Ve&&Qe(De.start+De.count-1,S.width,4)===ue?he.count=Math.max(he.count,De.start+De.count-he.start):(++Ae,q[Ae]=De)}q.length=Ae+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let ie=0,he=q.length;ie<he;ie++){const De=q[ie],Te=Math.floor(De.start/4),ue=Math.ceil(De.count/4),Ve=Te%S.width,U=Math.floor(Te/S.width),se=ue,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Ve,U,se,ae,G,K,S.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Y(R,S,G){let K=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=s.TEXTURE_3D);const Q=He(R,S),q=S.source;t.bindTexture(K,R.__webglTexture,s.TEXTURE0+G);const Ae=n.get(q);if(q.version!==Ae.__version||Q===!0){t.activeTexture(s.TEXTURE0+G);const oe=Xe.getPrimaries(Xe.workingColorSpace),Ee=S.colorSpace===pi?null:Xe.getPrimaries(S.colorSpace),we=S.colorSpace===pi||oe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=v(S.image,!1,i.maxTextureSize);ie=Ut(S,ie);const he=r.convert(S.format,S.colorSpace),De=r.convert(S.type);let Te=y(S.internalFormat,he,De,S.colorSpace,S.isVideoTexture);ne(K,S);let ue;const Ve=S.mipmaps,U=S.isVideoTexture!==!0,se=Ae.__version===void 0||Q===!0,ae=q.dataReady,_e=b(S,ie);if(S.isDepthTexture)Te=x(S.format===yr,S.type),se&&(U?t.texStorage2D(s.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,De,null));else if(S.isDataTexture)if(Ve.length>0){U&&se&&t.texStorage2D(s.TEXTURE_2D,_e,Te,Ve[0].width,Ve[0].height);for(let ee=0,Z=Ve.length;ee<Z;ee++)ue=Ve[ee],U?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,De,ue.data):t.texImage2D(s.TEXTURE_2D,ee,Te,ue.width,ue.height,0,he,De,ue.data);S.generateMipmaps=!1}else U?(se&&t.texStorage2D(s.TEXTURE_2D,_e,Te,ie.width,ie.height),ae&&Ge(S,ie,he,De)):t.texImage2D(s.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,De,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Te,Ve[0].width,Ve[0].height,ie.depth);for(let ee=0,Z=Ve.length;ee<Z;ee++)if(ue=Ve[ee],S.format!==mn)if(he!==null)if(U){if(ae)if(S.layerUpdates.size>0){const xe=Cu(ue.width,ue.height,S.format,S.type);for(const Oe of S.layerUpdates){const lt=ue.data.subarray(Oe*xe/ue.data.BYTES_PER_ELEMENT,(Oe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Oe,ue.width,ue.height,1,he,lt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Te,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,he,De,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Te,ue.width,ue.height,ie.depth,0,he,De,ue.data)}else{U&&se&&t.texStorage2D(s.TEXTURE_2D,_e,Te,Ve[0].width,Ve[0].height);for(let ee=0,Z=Ve.length;ee<Z;ee++)ue=Ve[ee],S.format!==mn?he!==null?U?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,De,ue.data):t.texImage2D(s.TEXTURE_2D,ee,Te,ue.width,ue.height,0,he,De,ue.data)}else if(S.isDataArrayTexture)if(U){if(se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Te,ie.width,ie.height,ie.depth),ae)if(S.layerUpdates.size>0){const ee=Cu(ie.width,ie.height,S.format,S.type);for(const Z of S.layerUpdates){const xe=ie.data.subarray(Z*ee/ie.data.BYTES_PER_ELEMENT,(Z+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,he,De,xe)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,De,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,he,De,ie.data);else if(S.isData3DTexture)U?(se&&t.texStorage3D(s.TEXTURE_3D,_e,Te,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,De,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,he,De,ie.data);else if(S.isFramebufferTexture){if(se)if(U)t.texStorage2D(s.TEXTURE_2D,_e,Te,ie.width,ie.height);else{let ee=ie.width,Z=ie.height;for(let xe=0;xe<_e;xe++)t.texImage2D(s.TEXTURE_2D,xe,Te,ee,Z,0,he,De,null),ee>>=1,Z>>=1}}else if(Ve.length>0){if(U&&se){const ee=Mt(Ve[0]);t.texStorage2D(s.TEXTURE_2D,_e,Te,ee.width,ee.height)}for(let ee=0,Z=Ve.length;ee<Z;ee++)ue=Ve[ee],U?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he,De,ue):t.texImage2D(s.TEXTURE_2D,ee,Te,he,De,ue);S.generateMipmaps=!1}else if(U){if(se){const ee=Mt(ie);t.texStorage2D(s.TEXTURE_2D,_e,Te,ee.width,ee.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,De,ie)}else t.texImage2D(s.TEXTURE_2D,0,Te,he,De,ie);p(S)&&g(K),Ae.__version=q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function J(R,S,G){if(S.image.length!==6)return;const K=He(R,S),Q=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);const q=n.get(Q);if(Q.version!==q.__version||K===!0){t.activeTexture(s.TEXTURE0+G);const Ae=Xe.getPrimaries(Xe.workingColorSpace),oe=S.colorSpace===pi?null:Xe.getPrimaries(S.colorSpace),Ee=S.colorSpace===pi||Ae===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!we&&!ie?he[Z]=v(S.image[Z],!0,i.maxCubemapSize):he[Z]=ie?S.image[Z].image:S.image[Z],he[Z]=Ut(S,he[Z]);const De=he[0],Te=r.convert(S.format,S.colorSpace),ue=r.convert(S.type),Ve=y(S.internalFormat,Te,ue,S.colorSpace),U=S.isVideoTexture!==!0,se=q.__version===void 0||K===!0,ae=Q.dataReady;let _e=b(S,De);ne(s.TEXTURE_CUBE_MAP,S);let ee;if(we){U&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Ve,De.width,De.height);for(let Z=0;Z<6;Z++){ee=he[Z].mipmaps;for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];S.format!==mn?Te!==null?U?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Oe.width,Oe.height,Te,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Ve,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Oe.width,Oe.height,Te,ue,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Ve,Oe.width,Oe.height,0,Te,ue,Oe.data)}}}else{if(ee=S.mipmaps,U&&se){ee.length>0&&_e++;const Z=Mt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Te,ue,he[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,he[Z].width,he[Z].height,0,Te,ue,he[Z].data);for(let xe=0;xe<ee.length;xe++){const lt=ee[xe].image[Z].image;U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,lt.width,lt.height,Te,ue,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Ve,lt.width,lt.height,0,Te,ue,lt.data)}}else{U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,ue,he[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Te,ue,he[Z]);for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Te,ue,Oe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Ve,Te,ue,Oe.image[Z])}}}p(S)&&g(s.TEXTURE_CUBE_MAP),q.__version=Q.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ve(R,S,G,K,Q,q){const Ae=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),Ee=y(G.internalFormat,Ae,oe,G.colorSpace),we=n.get(S),ie=n.get(G);if(ie.__renderTarget=S,!we.__hasExternalTextures){const he=Math.max(1,S.width>>q),De=Math.max(1,S.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Ee,he,De,S.depth,0,Ae,oe,null):t.texImage2D(Q,q,Ee,he,De,0,Ae,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,ie.__webglTexture,0,pt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,ie.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(R,S,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=x(S.stencilBuffer,Q),Ae=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=pt(S);Se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,S.width,S.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,R)}else{const K=S.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],Ae=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Ee=y(q.internalFormat,Ae,oe,q.colorSpace),we=pt(S);G&&Se(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ee,S.width,S.height):Se(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,Ee,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const Q=K.__webglTexture,q=pt(S);if(S.depthTexture.format===_r)Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===yr)Se(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=R.texture.mipmaps;K&&K.length>0?be(S.__webglFramebuffer[0],R):be(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=s.createRenderbuffer(),Le(S.__webglDepthbuffer[K],R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else{const K=R.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Le(S.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(R,S,G){const K=n.get(R);S!==void 0&&ve(K.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ye(R)}function D(R){const S=R.texture,G=n.get(R),K=n.get(S);R.addEventListener("dispose",C);const Q=R.textures,q=R.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=S.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)G.__webglFramebuffer[oe][Ee]=s.createFramebuffer()}else G.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[oe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let oe=0,Ee=Q.length;oe<Ee;oe++){const we=n.get(Q[oe]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&Se(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Ee=Q[oe];G.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const we=r.convert(Ee.format,Ee.colorSpace),ie=r.convert(Ee.type),he=y(Ee.internalFormat,we,ie,Ee.colorSpace,R.isXRRenderTarget===!0),De=pt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,he,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ne(s.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)ve(G.__webglFramebuffer[oe][Ee],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else ve(G.__webglFramebuffer[oe],R,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(S)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let oe=0,Ee=Q.length;oe<Ee;oe++){const we=Q[oe],ie=n.get(we);let he=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),ne(he,we),ve(G.__webglFramebuffer,R,we,s.COLOR_ATTACHMENT0+oe,he,0),p(we)&&g(he)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ne(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)ve(G.__webglFramebuffer[Ee],R,S,s.COLOR_ATTACHMENT0,oe,Ee);else ve(G.__webglFramebuffer,R,S,s.COLOR_ATTACHMENT0,oe,0);p(S)&&g(oe),t.unbindTexture()}R.depthBuffer&&Ye(R)}function ft(R){const S=R.textures;for(let G=0,K=S.length;G<K;G++){const Q=S[G];if(p(Q)){const q=_(R),Ae=n.get(Q).__webglTexture;t.bindTexture(q,Ae),g(q),t.unbindTexture()}}}const ke=[],Fe=[];function Me(R){if(R.samples>0){if(Se(R)===!1){const S=R.textures,G=R.width,K=R.height;let Q=s.COLOR_BUFFER_BIT;const q=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(R),oe=S.length>1;if(oe)for(let we=0;we<S.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<S.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=n.get(S[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,G,K,0,0,G,K,Q,s.NEAREST),l===!0&&(ke.length=0,Fe.length=0,ke.push(s.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ke.push(q),Fe.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<S.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=n.get(S[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function pt(R){return Math.min(i.maxSamples,R.samples)}function Se(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(R){const S=o.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Ut(R,S){const G=R.colorSpace,K=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ds&&G!==pi&&(Xe.getTransfer(G)===rt?(K!==mn||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Se}function ax(s,e){function t(n,i=pi){let r;const o=Xe.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===nc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Jd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yd)return s.BYTE;if(n===Kd)return s.SHORT;if(n===gr)return s.UNSIGNED_SHORT;if(n===tc)return s.INT;if(n===$i)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===Lr)return s.HALF_FLOAT;if(n===Qd)return s.ALPHA;if(n===eh)return s.RGB;if(n===mn)return s.RGBA;if(n===_r)return s.DEPTH_COMPONENT;if(n===yr)return s.DEPTH_STENCIL;if(n===th)return s.RED;if(n===sc)return s.RED_INTEGER;if(n===nh)return s.RG;if(n===rc)return s.RG_INTEGER;if(n===oc)return s.RGBA_INTEGER;if(n===So||n===Eo||n===bo||n===wo)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===So)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===So)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===fl)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ml||n===gl||n===vl||n===_l||n===yl||n===xl||n===Ml||n===Sl||n===El||n===bl||n===wl||n===Tl||n===Al||n===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ml)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ml)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Al)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Il||n===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Dl||n===Nl||n===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mi({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Ho(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dx extends Vs{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new ux,g={},_=t.getContextAttributes();let y=null,x=null;const b=[],A=[],C=new Ke;let P=null;const w=new jt;w.viewport=new Je;const E=new jt;E.viewport=new Je;const I=[w,E],O=new Eg;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=b[Y];return J===void 0&&(J=new Sa,b[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=b[Y];return J===void 0&&(J=new Sa,b[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=b[Y];return J===void 0&&(J=new Sa,b[Y]=J),J.getHandSpace()};function B(Y){const J=A.indexOf(Y.inputSource);if(J===-1)return;const ve=b[J];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,c||o),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<b.length;Y++){const J=A[Y];J!==null&&(A[Y]=null,b[Y].disconnect(J))}L=null,k=null,p.reset();for(const Y in g)delete g[Y];e.setRenderTarget(y),f=null,h=null,u=null,i=null,x=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=_.stencil?yr:_r,Le=_.stencil?vr:$i);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ye),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Xi(h.textureWidth,h.textureHeight,{format:mn,type:kn,depthTexture:new ph(h.textureWidth,h.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ve={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ve),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Xi(f.framebufferWidth,f.framebufferHeight,{format:mn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(Y){for(let J=0;J<Y.removed.length;J++){const ve=Y.removed[J],Le=A.indexOf(ve);Le>=0&&(A[Le]=null,b[Le].disconnect(ve))}for(let J=0;J<Y.added.length;J++){const ve=Y.added[J];let Le=A.indexOf(ve);if(Le===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=A.length){A.push(ve),Le=Ye;break}else if(A[Ye]===null){A[Ye]=ve,Le=Ye;break}if(Le===-1)break}const be=b[Le];be&&be.connect(ve)}}const V=new F,j=new F;function re(Y,J,ve){V.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);const Le=V.distanceTo(j),be=J.projectionMatrix.elements,Ye=ve.projectionMatrix.elements,Rt=be[14]/(be[10]-1),D=be[14]/(be[10]+1),ft=(be[9]+1)/be[5],ke=(be[9]-1)/be[5],Fe=(be[8]-1)/be[0],Me=(Ye[8]+1)/Ye[0],pt=Rt*Fe,Se=Rt*Me,We=Le/(-Fe+Me),Ut=We*-Fe;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ut),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Mt=Rt+We,R=D+We,S=pt-Ut,G=Se+(Le-Ut),K=ft*D/R*Mt,Q=ke*D/R*Mt;Y.projectionMatrix.makePerspective(S,G,K,Q,Mt,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,ve=Y.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),O.near=E.near=w.near=J,O.far=E.far=w.far=ve,(L!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,k=O.far),O.layers.mask=Y.layers.mask|6,w.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Le=Y.parent,be=O.cameras;ce(O,Le);for(let Ye=0;Ye<be.length;Ye++)ce(be[Ye],Le);be.length===2?re(O,w,E):O.projectionMatrix.copy(w.projectionMatrix),ne(Y,O,Le)};function ne(Y,J,ve){ve===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ns*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return g[Y]};let He=null;function Qe(Y,J){if(d=J.getViewerPose(c||o),m=J,d!==null){const ve=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Le=!1;ve.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let D=0;D<ve.length;D++){const ft=ve[D];let ke=null;if(f!==null)ke=f.getViewport(ft);else{const Me=u.getViewSubImage(h,ft);ke=Me.viewport,D===0&&(e.setRenderTargetTextures(x,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(x))}let Fe=I[D];Fe===void 0&&(Fe=new jt,Fe.layers.enable(D),Fe.viewport=new Je,I[D]=Fe),Fe.matrix.fromArray(ft.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ft.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ke.x,ke.y,ke.width,ke.height),D===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(Fe)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(ve[0]);D&&D.isValid&&D.texture&&p.init(D,i.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ve.length;D++){const ft=ve[D].camera;if(ft){let ke=g[ft];ke||(ke=new mh,g[ft]=ke);const Fe=u.getCameraImage(ft);ke.sourceTexture=Fe}}}}for(let ve=0;ve<b.length;ve++){const Le=A[ve],be=b[ve];Le!==null&&be!==void 0&&be.update(Le,J,c||o)}He&&He(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Ge=new wh;Ge.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){He=Y},this.dispose=function(){}}}const Li=new Lt,hx=new Ce;function fx(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,uh(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,y,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),d(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,y):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===tn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===tn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g),y=_.envMap,x=_.envMapRotation;y&&(p.envMap.value=y,Li.copy(x),Li.x*=-1,Li.y*=-1,Li.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),p.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(Li)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,y){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=y*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function d(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function px(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(m(_),x=d(_),i[_.id]=x,_.addEventListener("dispose",p));const b=y.program;n.updateUBOMapping(_,b);const A=e.render.frame;r[_.id]!==A&&(h(_),r[_.id]=A)}function d(_){const y=u();_.__bindingPointIndex=y;const x=s.createBuffer(),b=_.__size,A=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=i[_.id],x=_.uniforms,b=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let A=0,C=x.length;A<C;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,E=P.length;w<E;w++){const I=P[w];if(f(I,A,w,b)===!0){const O=I.__offset,L=Array.isArray(I.value)?I.value:[I.value];let k=0;for(let B=0;B<L.length;B++){const N=L[B],X=v(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,O+k,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,x,b){const A=_.value,C=y+"_"+x;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const P=b[C];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[C]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function m(_){const y=_.uniforms;let x=0;const b=16;for(let C=0,P=y.length;C<P;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,I=w.length;E<I;E++){const O=w[E],L=Array.isArray(O.value)?O.value:[O.value];for(let k=0,B=L.length;k<B;k++){const N=L[k],X=v(N),V=x%b,j=V%X.boundary,re=V+j;x+=j,re!==0&&b-re<X.storage&&(x+=b-re),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=X.storage}}}const A=x%b;return A>0&&(x+=b-A),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function p(_){const y=_.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class mx{constructor(e={}){const{canvas:t=em(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let p=null,g=null;const _=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=ct;let A=0,C=0,P=null,w=-1,E=null;const I=new Je,O=new Je;let L=null;const k=new Be(0);let B=0,N=t.width,X=t.height,V=1,j=null,re=null;const ce=new Je(0,0,N,X),ne=new Je(0,0,N,X);let He=!1;const Qe=new hc;let Ge=!1,Y=!1;const J=new Ce,ve=new F,Le=new Je,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Rt(){return P===null?V:1}let D=n;function ft(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const z="webgl2";if(D=ft(z,T),D===null)throw ft(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ke,Fe,Me,pt,Se,We,Ut,Mt,R,S,G,K,Q,q,Ae,oe,Ee,we,ie,he,De,Te,ue,Ve;function U(){ke=new w_(D),ke.init(),Te=new ax(D,ke),Fe=new __(D,ke,e,Te),Me=new rx(D,ke),Fe.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),pt=new C_(D),Se=new Xy,We=new ox(D,ke,Me,Se,Fe,Te,pt),Ut=new x_(x),Mt=new b_(x),R=new Ng(D),ue=new g_(D,R),S=new T_(D,R,pt,ue),G=new I_(D,S,R,pt),ie=new R_(D,Fe,We),oe=new y_(Se),K=new $y(x,Ut,Mt,ke,Fe,ue,oe),Q=new fx(x,Se),q=new jy,Ae=new ex(ke),we=new m_(x,Ut,Mt,Me,G,f,l),Ee=new ix(x,G,Fe),Ve=new px(D,pt,Fe,Me),he=new v_(D,ke,pt),De=new A_(D,ke,pt),pt.programs=K.programs,x.capabilities=Fe,x.extensions=ke,x.properties=Se,x.renderLists=q,x.shadowMap=Ee,x.state=Me,x.info=pt}U();const se=new dx(x,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(N,X,!1))},this.getSize=function(T){return T.set(N,X)},this.setSize=function(T,z,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,X=z,t.width=Math.floor(T*V),t.height=Math.floor(z*V),W===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(N*V,X*V).floor()},this.setDrawingBufferSize=function(T,z,W){N=T,X=z,V=W,t.width=Math.floor(T*W),t.height=Math.floor(z*W),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,z,W,$){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,z,W,$),Me.viewport(I.copy(ce).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,z,W,$){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,z,W,$),Me.scissor(O.copy(ne).multiplyScalar(V).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(T){Me.setScissorTest(He=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,W=!0){let $=0;if(T){let H=!1;if(P!==null){const te=P.texture.format;H=te===oc||te===rc||te===sc}if(H){const te=P.texture.type,de=te===kn||te===$i||te===gr||te===vr||te===nc||te===ic,ye=we.getClearColor(),pe=we.getClearAlpha(),Pe=ye.r,Ue=ye.g,Re=ye.b;de?(m[0]=Pe,m[1]=Ue,m[2]=Re,m[3]=pe,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Pe,v[1]=Ue,v[2]=Re,v[3]=pe,D.clearBufferiv(D.COLOR,0,v))}else $|=D.COLOR_BUFFER_BIT}z&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),q.dispose(),Ae.dispose(),Se.dispose(),Ut.dispose(),Mt.dispose(),G.dispose(),ue.dispose(),Ve.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",Cn),se.removeEventListener("sessionend",Pc),wi.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=pt.autoReset,z=Ee.enabled,W=Ee.autoUpdate,$=Ee.needsUpdate,H=Ee.type;U(),pt.autoReset=T,Ee.enabled=z,Ee.autoUpdate=W,Ee.needsUpdate=$,Ee.type=H}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){const z=T.target;z.removeEventListener("dispose",Z),xe(z)}function xe(T){Oe(T),Se.remove(T)}function Oe(T){const z=Se.get(T).programs;z!==void 0&&(z.forEach(function(W){K.releaseProgram(W)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,W,$,H,te){z===null&&(z=be);const de=H.isMesh&&H.matrixWorld.determinant()<0,ye=Ff(T,z,W,$,H);Me.setMaterial($,de);let pe=W.index,Pe=1;if($.wireframe===!0){if(pe=S.getWireframeAttribute(W),pe===void 0)return;Pe=2}const Ue=W.drawRange,Re=W.attributes.position;let Ze=Ue.start*Pe,st=(Ue.start+Ue.count)*Pe;te!==null&&(Ze=Math.max(Ze,te.start*Pe),st=Math.min(st,(te.start+te.count)*Pe)),pe!==null?(Ze=Math.max(Ze,0),st=Math.min(st,pe.count)):Re!=null&&(Ze=Math.max(Ze,0),st=Math.min(st,Re.count));const xt=st-Ze;if(xt<0||xt===1/0)return;ue.setup(H,$,ye,W,pe);let ut,at=he;if(pe!==null&&(ut=R.get(pe),at=De,at.setIndex(ut)),H.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*Rt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(H.isLine){let Ie=$.linewidth;Ie===void 0&&(Ie=1),Me.setLineWidth(Ie*Rt()),H.isLineSegments?at.setMode(D.LINES):H.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else H.isPoints?at.setMode(D.POINTS):H.isSprite&&at.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ie=H._multiDrawStarts,vt=H._multiDrawCounts,et=H._multiDrawCount,nn=pe?R.get(pe).bytesPerElement:1,Ji=Se.get($).currentProgram.getUniforms();for(let sn=0;sn<et;sn++)Ji.setValue(D,"_gl_DrawID",sn),at.render(Ie[sn]/nn,vt[sn])}else if(H.isInstancedMesh)at.renderInstances(Ze,xt,H.count);else if(W.isInstancedBufferGeometry){const Ie=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,Ie);at.renderInstances(Ze,xt,vt)}else at.render(Ze,xt)};function lt(T,z,W){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Or(T,z,W),T.side=xi,T.needsUpdate=!0,Or(T,z,W),T.side=ei):Or(T,z,W)}this.compile=function(T,z,W=null){W===null&&(W=T),g=Ae.get(W),g.init(z),y.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),T!==W&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const $=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const te=H.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ye=te[de];lt(ye,W,H),$.add(ye)}else lt(te,W,H),$.add(te)}),g=y.pop(),$},this.compileAsync=function(T,z,W=null){const $=this.compile(T,z,W);return new Promise(H=>{function te(){if($.forEach(function(de){Se.get(de).currentProgram.isReady()&&$.delete(de)}),$.size===0){H(T);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let it=null;function zn(T){it&&it(T)}function Cn(){wi.stop()}function Pc(){wi.start()}const wi=new wh;wi.setAnimationLoop(zn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(T){it=T,se.setAnimationLoop(T),T===null?wi.stop():wi.start()},se.addEventListener("sessionstart",Cn),se.addEventListener("sessionend",Pc),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,P),g=Ae.get(T,y.length),g.init(z),y.push(g),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix(J,Bn,z.reversedDepth),Y=this.localClippingEnabled,Ge=oe.init(this.clippingPlanes,Y),p=q.get(T,_.length),p.init(),_.push(p),se.enabled===!0&&se.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Jo(te,z,-1/0,x.sortObjects)}Jo(T,z,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(j,re),Ye=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ye&&we.addToRenderList(p,T),this.info.render.frame++,Ge===!0&&oe.beginShadows();const W=g.state.shadowsArray;Ee.render(W,T,z),Ge===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,H=p.transmissive;if(g.setupLights(),z.isArrayCamera){const te=z.cameras;if(H.length>0)for(let de=0,ye=te.length;de<ye;de++){const pe=te[de];Dc($,H,T,pe)}Ye&&we.render(T);for(let de=0,ye=te.length;de<ye;de++){const pe=te[de];Lc(p,T,pe,pe.viewport)}}else H.length>0&&Dc($,H,T,z),Ye&&we.render(T),Lc(p,T,z);P!==null&&C===0&&(We.updateMultisampleRenderTarget(P),We.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(x,T,z),ue.resetDefaultState(),w=-1,E=null,y.pop(),y.length>0?(g=y[y.length-1],Ge===!0&&oe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Jo(T,z,W,$){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Qe.intersectsSprite(T)){$&&Le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const de=G.update(T),ye=T.material;ye.visible&&p.push(T,de,ye,W,Le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Qe.intersectsObject(T))){const de=G.update(T),ye=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Le.copy(T.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(ye)){const pe=de.groups;for(let Pe=0,Ue=pe.length;Pe<Ue;Pe++){const Re=pe[Pe],Ze=ye[Re.materialIndex];Ze&&Ze.visible&&p.push(T,de,Ze,W,Le.z,Re)}}else ye.visible&&p.push(T,de,ye,W,Le.z,null)}}const te=T.children;for(let de=0,ye=te.length;de<ye;de++)Jo(te[de],z,W,$)}function Lc(T,z,W,$){const H=T.opaque,te=T.transmissive,de=T.transparent;g.setupLightsView(W),Ge===!0&&oe.setGlobalState(x.clippingPlanes,W),$&&Me.viewport(I.copy($)),H.length>0&&Br(H,z,W),te.length>0&&Br(te,z,W),de.length>0&&Br(de,z,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Dc(T,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Xi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Lr:kn,minFilter:Hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const te=g.state.transmissionRenderTarget[$.id],de=$.viewport||I;te.setSize(de.z*x.transmissionResolutionScale,de.w*x.transmissionResolutionScale);const ye=x.getRenderTarget(),pe=x.getActiveCubeFace(),Pe=x.getActiveMipmapLevel();x.setRenderTarget(te),x.getClearColor(k),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&we.render(W);const Ue=x.toneMapping;x.toneMapping=_i;const Re=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),Ge===!0&&oe.setGlobalState(x.clippingPlanes,$),Br(T,W,$),We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let st=0,xt=z.length;st<xt;st++){const ut=z[st],at=ut.object,Ie=ut.geometry,vt=ut.material,et=ut.group;if(vt.side===ei&&at.layers.test($.layers)){const nn=vt.side;vt.side=tn,vt.needsUpdate=!0,Nc(at,W,$,Ie,vt,et),vt.side=nn,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te))}x.setRenderTarget(ye,pe,Pe),x.setClearColor(k,B),Re!==void 0&&($.viewport=Re),x.toneMapping=Ue}function Br(T,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,te=T.length;H<te;H++){const de=T[H],ye=de.object,pe=de.geometry,Pe=de.group;let Ue=de.material;Ue.allowOverride===!0&&$!==null&&(Ue=$),ye.layers.test(W.layers)&&Nc(ye,z,W,pe,Ue,Pe)}}function Nc(T,z,W,$,H,te){T.onBeforeRender(x,z,W,$,H,te),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,z,W,$,T,te),H.transparent===!0&&H.side===ei&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,x.renderBufferDirect(W,z,$,H,T,te),H.side=xi,H.needsUpdate=!0,x.renderBufferDirect(W,z,$,H,T,te),H.side=ei):x.renderBufferDirect(W,z,$,H,T,te),T.onAfterRender(x,z,W,$,H,te)}function Or(T,z,W){z.isScene!==!0&&(z=be);const $=Se.get(T),H=g.state.lights,te=g.state.shadowsArray,de=H.state.version,ye=K.getParameters(T,H.state,te,z,W),pe=K.getProgramCacheKey(ye);let Pe=$.programs;$.environment=T.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(T.isMeshStandardMaterial?Mt:Ut).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",Z),Pe=new Map,$.programs=Pe);let Ue=Pe.get(pe);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===de)return Uc(T,ye),Ue}else ye.uniforms=K.getUniforms(T),T.onBeforeCompile(ye,x),Ue=K.acquireProgram(ye,pe),Pe.set(pe,Ue),$.uniforms=ye.uniforms;const Re=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Uc(T,ye),$.needsLights=Bf(T),$.lightsStateVersion=de,$.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function Fc(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=To.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Uc(T,z){const W=Se.get(T);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Ff(T,z,W,$,H){z.isScene!==!0&&(z=be),We.resetTextureUnits();const te=z.fog,de=$.isMeshStandardMaterial?z.environment:null,ye=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ds,pe=($.isMeshStandardMaterial?Mt:Ut).get($.envMap||de),Pe=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Re=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let xt=_i;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(xt=x.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ut!==void 0?ut.length:0,Ie=Se.get($),vt=g.state.lights;if(Ge===!0&&(Y===!0||T!==E)){const Wt=T===E&&$.id===w;oe.setState($,T,Wt)}let et=!1;$.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==vt.state.version||Ie.outputColorSpace!==ye||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==pe||$.fog===!0&&Ie.fog!==te||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==oe.numPlanes||Ie.numIntersection!==oe.numIntersection)||Ie.vertexAlphas!==Pe||Ie.vertexTangents!==Ue||Ie.morphTargets!==Re||Ie.morphNormals!==Ze||Ie.morphColors!==st||Ie.toneMapping!==xt||Ie.morphTargetsCount!==at)&&(et=!0):(et=!0,Ie.__version=$.version);let nn=Ie.currentProgram;et===!0&&(nn=Or($,z,H));let Ji=!1,sn=!1,Xs=!1;const _t=nn.getUniforms(),un=Ie.uniforms;if(Me.useProgram(nn.program)&&(Ji=!0,sn=!0,Xs=!0),$.id!==w&&(w=$.id,sn=!0),Ji||E!==T){Me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(D,"projectionMatrix",T.projectionMatrix),_t.setValue(D,"viewMatrix",T.matrixWorldInverse);const Zt=_t.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,ve.setFromMatrixPosition(T.matrixWorld)),Fe.logarithmicDepthBuffer&&_t.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_t.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,sn=!0,Xs=!0)}if(H.isSkinnedMesh){_t.setOptional(D,H,"bindMatrix"),_t.setOptional(D,H,"bindMatrixInverse");const Wt=H.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(D,"boneTexture",Wt.boneTexture,We))}H.isBatchedMesh&&(_t.setOptional(D,H,"batchingTexture"),_t.setValue(D,"batchingTexture",H._matricesTexture,We),_t.setOptional(D,H,"batchingIdTexture"),_t.setValue(D,"batchingIdTexture",H._indirectTexture,We),_t.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(D,"batchingColorTexture",H._colorsTexture,We));const dn=W.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ie.update(H,W,nn),(sn||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,_t.setValue(D,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=pe,un.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(un.envMapIntensity.value=z.environmentIntensity),sn&&(_t.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&Uf(un,Xs),te&&$.fog===!0&&Q.refreshFogUniforms(un,te),Q.refreshMaterialUniforms(un,$,V,X,g.state.transmissionRenderTarget[T.id]),To.upload(D,Fc(Ie),un,We)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(To.upload(D,Fc(Ie),un,We),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_t.setValue(D,"center",H.center),_t.setValue(D,"modelViewMatrix",H.modelViewMatrix),_t.setValue(D,"normalMatrix",H.normalMatrix),_t.setValue(D,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Wt=$.uniformsGroups;for(let Zt=0,Qo=Wt.length;Zt<Qo;Zt++){const Ti=Wt[Zt];Ve.update(Ti,nn),Ve.bind(Ti,nn)}}return nn}function Uf(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Bf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,z,W){const $=Se.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Se.get(T.texture).__webglTexture=z,Se.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const W=Se.get(T);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Of=D.createFramebuffer();this.setRenderTarget=function(T,z=0,W=0){P=T,A=z,C=W;let $=!0,H=null,te=!1,de=!1;if(T){const pe=Se.get(T);if(pe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(T);else if(pe.__hasExternalTextures)We.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Re=T.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(de=!0);const Ue=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?H=Ue[z][W]:H=Ue[z],te=!0):T.samples>0&&We.useMultisampledRTT(T)===!1?H=Se.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[W]:H=Ue,I.copy(T.viewport),O.copy(T.scissor),L=T.scissorTest}else I.copy(ce).multiplyScalar(V).floor(),O.copy(ne).multiplyScalar(V).floor(),L=He;if(W!==0&&(H=Of),Me.bindFramebuffer(D.FRAMEBUFFER,H)&&$&&Me.drawBuffers(T,H),Me.viewport(I),Me.scissor(O),Me.setScissorTest(L),te){const pe=Se.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe.__webglTexture,W)}else if(de){const pe=z;for(let Pe=0;Pe<T.textures.length;Pe++){const Ue=Se.get(T.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,W,pe)}}else if(T!==null&&W!==0){const pe=Se.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,W)}w=-1},this.readRenderTargetPixels=function(T,z,W,$,H,te,de,ye=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){Me.bindFramebuffer(D.FRAMEBUFFER,pe);try{const Pe=T.textures[ye],Ue=Pe.format,Re=Pe.type;if(!Fe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-$&&W>=0&&W<=T.height-H&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(z,W,$,H,Te.convert(Ue),Te.convert(Re),te))}finally{const Pe=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,z,W,$,H,te,de,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe)if(z>=0&&z<=T.width-$&&W>=0&&W<=T.height-H){Me.bindFramebuffer(D.FRAMEBUFFER,pe);const Pe=T.textures[ye],Ue=Pe.format,Re=Pe.type;if(!Fe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(z,W,$,H,Te.convert(Ue),Te.convert(Re),0);const st=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,st);const xt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await tm(D,xt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(Ze),D.deleteSync(xt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,W=0){const $=Math.pow(2,-W),H=Math.floor(T.image.width*$),te=Math.floor(T.image.height*$),de=z!==null?z.x:0,ye=z!==null?z.y:0;We.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,de,ye,H,te),Me.unbindTexture()};const kf=D.createFramebuffer(),zf=D.createFramebuffer();this.copyTextureToTexture=function(T,z,W=null,$=null,H=0,te=null){te===null&&(H!==0?(Mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=H,H=0):te=0);let de,ye,pe,Pe,Ue,Re,Ze,st,xt;const ut=T.isCompressedTexture?T.mipmaps[te]:T.image;if(W!==null)de=W.max.x-W.min.x,ye=W.max.y-W.min.y,pe=W.isBox3?W.max.z-W.min.z:1,Pe=W.min.x,Ue=W.min.y,Re=W.isBox3?W.min.z:0;else{const dn=Math.pow(2,-H);de=Math.floor(ut.width*dn),ye=Math.floor(ut.height*dn),T.isDataArrayTexture?pe=ut.depth:T.isData3DTexture?pe=Math.floor(ut.depth*dn):pe=1,Pe=0,Ue=0,Re=0}$!==null?(Ze=$.x,st=$.y,xt=$.z):(Ze=0,st=0,xt=0);const at=Te.convert(z.format),Ie=Te.convert(z.type);let vt;z.isData3DTexture?(We.setTexture3D(z,0),vt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(We.setTexture2DArray(z,0),vt=D.TEXTURE_2D_ARRAY):(We.setTexture2D(z,0),vt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const et=D.getParameter(D.UNPACK_ROW_LENGTH),nn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ji=D.getParameter(D.UNPACK_SKIP_PIXELS),sn=D.getParameter(D.UNPACK_SKIP_ROWS),Xs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);const _t=T.isDataArrayTexture||T.isData3DTexture,un=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const dn=Se.get(T),Wt=Se.get(z),Zt=Se.get(dn.__renderTarget),Qo=Se.get(Wt.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Zt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qo.__webglFramebuffer);for(let Ti=0;Ti<pe;Ti++)_t&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(T).__webglTexture,H,Re+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(z).__webglTexture,te,xt+Ti)),D.blitFramebuffer(Pe,Ue,de,ye,Ze,st,de,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||Se.has(T)){const dn=Se.get(T),Wt=Se.get(z);Me.bindFramebuffer(D.READ_FRAMEBUFFER,kf),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,zf);for(let Zt=0;Zt<pe;Zt++)_t?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,H,Re+Zt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,H),un?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wt.__webglTexture,te,xt+Zt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wt.__webglTexture,te),H!==0?D.blitFramebuffer(Pe,Ue,de,ye,Ze,st,de,ye,D.COLOR_BUFFER_BIT,D.NEAREST):un?D.copyTexSubImage3D(vt,te,Ze,st,xt+Zt,Pe,Ue,de,ye):D.copyTexSubImage2D(vt,te,Ze,st,Pe,Ue,de,ye);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(vt,te,Ze,st,xt,de,ye,pe,at,Ie,ut.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(vt,te,Ze,st,xt,de,ye,pe,at,ut.data):D.texSubImage3D(vt,te,Ze,st,xt,de,ye,pe,at,Ie,ut):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Ze,st,de,ye,at,Ie,ut.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Ze,st,ut.width,ut.height,at,ut.data):D.texSubImage2D(D.TEXTURE_2D,te,Ze,st,de,ye,at,Ie,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ji),D.pixelStorei(D.UNPACK_SKIP_ROWS,sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xs),te===0&&z.generateMipmaps&&D.generateMipmap(vt),Me.unbindTexture()},this.initRenderTarget=function(T){Se.get(T).__webglFramebuffer===void 0&&We.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?We.setTextureCube(T,0):T.isData3DTexture?We.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?We.setTexture2DArray(T,0):We.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){A=0,C=0,P=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class bn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new bn);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],d=n[4],u=n[5],h=n[6],f=n[7],m=n[8],v=i[0],p=i[1],g=i[2],_=i[3],y=i[4],x=i[5],b=i[6],A=i[7],C=i[8];return r[0]=o*v+a*_+l*b,r[1]=o*p+a*y+l*A,r[2]=o*g+a*x+l*C,r[3]=c*v+d*_+u*b,r[4]=c*p+d*y+u*A,r[5]=c*g+d*x+u*C,r[6]=h*v+f*_+m*b,r[7]=h*p+f*y+m*A,r[8]=h*g+f*x+m*C,t}scale(e,t){t===void 0&&(t=new bn);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3;const c=l;let d;const u=4;let h;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){d=u;do h=u-d,r[h+i*o]+=r[h+i*a];while(--d);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];d=u;do h=u-d,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*f;while(--d)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new bn);const t=3,n=6,i=gx;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const d=n;let u;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=d;do u=d-c,i[u+n*r]+=i[u+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const h=i[r+n*o]/i[r+n*r];c=d;do u=d-c,i[u+n*o]=u<=r?0:i[u+n*o]-i[u+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=i[r+n*o]/i[r+n*r];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/i[r+n*r];c=n;do u=n-c,i[u+n*r]=i[u+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(u=i[t+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,u)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,d=t*a,u=t*l,h=n*a,f=n*l,m=i*l,v=r*o,p=r*a,g=r*l,_=this.elements;return _[0]=1-(h+m),_[1]=d-g,_[2]=u+p,_[3]=d+g,_[4]=1-(c+m),_[5]=f-v,_[6]=u-p,_[7]=f+v,_[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new bn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const gx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new bn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=vx,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=_x;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Qu),Qu.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const vx=new M,_x=new M,Qu=new M;class mt{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,ed),c=ed),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new mt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,d=this.upperBound;e.copy(c),t.set(d.x,c.y,c.z),n.set(d.x,d.y,c.z),i.set(c.x,d.y,d.z),r.set(d.x,c.y,d.z),o.set(c.x,d.y,c.z),a.set(c.x,c.y,d.z),l.copy(d)}toLocalFrame(e,t){const n=td,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7];this.getCorners(i,r,o,a,l,c,d,u);for(let h=0;h!==8;h++){const f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=td,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7];this.getCorners(i,r,o,a,l,c,d,u);for(let h=0;h!==8;h++){const f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,d=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,d)),Math.min(u,h)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,d)),Math.max(u,h));return!(m<0||f>m)}}const ed=new M,td=[new M,new M,new M,new M,new M,new M,new M,new M];class nd{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Ih{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class Tt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=yx,i=xx;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Tt);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,d=e.w;return t.x=n*d+o*a+i*c-r*l,t.y=i*d+o*l+r*a-n*c,t.z=r*d+o*c+n*l-i*a,t.w=o*d-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new Tt);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Tt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,d=c*n+a*r-l*i,u=c*i+l*n-o*r,h=c*r+o*i-a*n,f=-o*n-a*i-l*r;return t.x=d*c+f*-o+u*-l-h*-a,t.y=u*c+f*-a+h*-o-d*-l,t.z=h*c+f*-l+d*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const d=o*a+l*c;if(d>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),d<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const u=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*d),r=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*d,this.y=r*c*a-l*o*d,this.z=r*o*d+l*c*a,this.w=r*o*a-l*c*d):i==="YXZ"?(this.x=l*o*a+r*c*d,this.y=r*c*a-l*o*d,this.z=r*o*d-l*c*a,this.w=r*o*a+l*c*d):i==="ZXY"?(this.x=l*o*a-r*c*d,this.y=r*c*a+l*o*d,this.z=r*o*d+l*c*a,this.w=r*o*a-l*c*d):i==="ZYX"?(this.x=l*o*a-r*c*d,this.y=r*c*a+l*o*d,this.z=r*o*d-l*c*a,this.w=r*o*a+l*c*d):i==="YZX"?(this.x=l*o*a+r*c*d,this.y=r*c*a+l*o*d,this.z=r*o*d-l*c*a,this.w=r*o*a-l*c*d):i==="XZY"&&(this.x=l*o*a-r*c*d,this.y=r*c*a-l*o*d,this.z=r*o*d+l*c*a,this.w=r*o*a+l*c*d),this}clone(){return new Tt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Tt);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,d=e.z,u=e.w,h,f,m,v,p;return f=i*l+r*c+o*d+a*u,f<0&&(f=-f,l=-l,c=-c,d=-d,u=-u),1-f>1e-6?(h=Math.acos(f),m=Math.sin(h),v=Math.sin((1-t)*h)/m,p=Math.sin(t*h)/m):(v=1-t,p=t),n.x=v*i+p*l,n.y=v*r+p*c,n.z=v*o+p*d,n.w=v*a+p*u,n}integrate(e,t,n,i){i===void 0&&(i=new Tt);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,d=this.z,u=this.w,h=t*.5;return i.x+=h*(r*u+o*d-a*c),i.y+=h*(o*u+a*l-r*d),i.z+=h*(a*u+r*c-o*l),i.w+=h*(-r*l-o*c-a*d),i}}const yx=new M,xx=new M,Mx={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class fe{constructor(e){e===void 0&&(e={}),this.id=fe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}fe.idCounter=0;fe.types=Mx;class tt{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new Tt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return tt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return tt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(id),id.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const id=new Tt;class ur extends fe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let d=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];ur.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new M,o=new M;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const d=new M;let u=-1,h=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){d.copy(n.faceNormals[m]),r.vmult(d,d);const v=d.dot(o);v>h&&(h=v,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const v=n.vertices[n.faces[u][m]],p=new M;p.copy(v),r.vmult(p,p),i.vadd(p,p),f.push(p)}u>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new M,d=new M,u=new M,h=new M,f=new M,m=new M;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],c);const _=p.testSepAxis(c,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const y=a?a[_]:_;c.copy(p.faceNormals[y]),n.vmult(c,c);const x=p.testSepAxis(c,e,t,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],d);const _=p.testSepAxis(d,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(d))}else{const g=l?l.length:e.faces.length;for(let _=0;_<g;_++){const y=l?l[_]:_;d.copy(e.faceNormals[y]),r.vmult(d,d);const x=p.testSepAxis(d,e,t,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(d))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],h);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],f),h.cross(f,m),!m.almostZero()){m.normalize();const y=p.testSepAxis(m,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(m))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;ur.project(a,e,n,i,Fa),ur.project(t,e,r,o,Ua);const l=Fa[0],c=Fa[1],d=Ua[0],u=Ua[1];if(l<u||d<c)return!1;const h=l-u,f=d-c;return h<f?h:f}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new M,c=new M,d=new M,u=new M,h=new M,f=new M,m=new M,v=new M,p=this,g=[],_=i,y=g;let x=-1,b=Number.MAX_VALUE;for(let E=0;E<p.faces.length;E++){l.copy(p.faceNormals[E]),n.vmult(l,l);const I=l.dot(e);I<b&&(b=I,x=E)}if(x<0)return;const A=p.faces[x];A.connectedFaces=[];for(let E=0;E<p.faces.length;E++)for(let I=0;I<p.faces[E].length;I++)A.indexOf(p.faces[E][I])!==-1&&E!==x&&A.connectedFaces.indexOf(E)===-1&&A.connectedFaces.push(E);const C=A.length;for(let E=0;E<C;E++){const I=p.vertices[A[E]],O=p.vertices[A[(E+1)%C]];I.vsub(O,c),d.copy(c),n.vmult(d,d),t.vadd(d,d),u.copy(this.faceNormals[x]),n.vmult(u,u),t.vadd(u,u),d.cross(u,h),h.negate(h),f.copy(I),n.vmult(f,f),t.vadd(f,f);const L=A.connectedFaces[E];m.copy(this.faceNormals[L]);const k=this.getPlaneConstantOfFace(L);v.copy(m),n.vmult(v,v);const B=k-v.dot(t);for(this.clipFaceAgainstPlane(_,y,v,B);_.length;)_.shift();for(;y.length;)_.push(y.shift())}m.copy(this.faceNormals[x]);const P=this.getPlaneConstantOfFace(x);v.copy(m),n.vmult(v,v);const w=P-v.dot(t);for(let E=0;E<_.length;E++){let I=v.dot(_[E])+w;if(I<=r&&(console.log(`clamped: depth=${I} to minDist=${r}`),I=r),I<=o){const O=_[E];if(I<=1e-6){const L={point:O,normal:v,depth:I};a.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let d=0;d<a;d++){if(c=e[d],o=n.dot(c)+i,r<0)if(o<0){const u=new M;u.copy(c),t.push(u)}else{const u=new M;l.lerp(c,r/(r-o),u),t.push(u)}else if(o<0){const u=new M;l.lerp(c,r/(r-o),u),t.push(u),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,d,u,h=new M;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);const m=h;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(d===void 0||m.y>d)&&(d=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(o,a,l),i.set(c,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new M;e.vsub(l,c);const d=a.dot(c),u=new M;r.vsub(l,u);const h=a.dot(u);if(d<0&&h>0||d>0&&h<0)return!1}return-1}static project(e,t,n,i,r){const o=e.vertices.length,a=Sx;let l=0,c=0;const d=Ex,u=e.vertices;d.setZero(),tt.vectorToLocalFrame(n,i,t,a),tt.pointToLocalFrame(n,i,d,d);const h=d.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const m=u[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Fa=[],Ua=[];new M;const Sx=new M,Ex=new M;class _c extends fe{constructor(e){super({type:fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new ur({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),_c.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)hi.set(r[o][0],r[o][1],r[o][2]),t.vmult(hi,hi),e.vadd(hi,hi),n(hi.x,hi.y,hi.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;Rn[0].set(r.x,r.y,r.z),Rn[1].set(-r.x,r.y,r.z),Rn[2].set(-r.x,-r.y,r.z),Rn[3].set(-r.x,-r.y,-r.z),Rn[4].set(r.x,-r.y,-r.z),Rn[5].set(r.x,r.y,-r.z),Rn[6].set(-r.x,r.y,-r.z),Rn[7].set(r.x,-r.y,r.z);const o=Rn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Rn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,d=l.y,u=l.z;c>i.x&&(i.x=c),d>i.y&&(i.y=d),u>i.z&&(i.z=u),c<n.x&&(n.x=c),d<n.y&&(n.y=d),u<n.z&&(n.z=u)}}}const hi=new M,Rn=[new M,new M,new M,new M,new M,new M,new M,new M],yc={DYNAMIC:1,STATIC:2,KINEMATIC:4},xc={AWAKE:0,SLEEPY:1,SLEEPING:2};class me extends Ih{constructor(e){e===void 0&&(e={}),super(),this.id=me.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?me.STATIC:me.DYNAMIC,typeof e.type==typeof me.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=me.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Tt,this.initQuaternion=new Tt,this.previousQuaternion=new Tt,this.interpolatedQuaternion=new Tt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new bn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new bn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new mt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=me.AWAKE,this.wakeUpAfterNarrowphase=!1,e===me.SLEEPING&&this.dispatchEvent(me.wakeupEvent)}sleep(){this.sleepState=me.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===me.AWAKE&&n<i?(this.sleepState=me.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(me.sleepyEvent)):t===me.SLEEPY&&n>i?this.wakeUp():t===me.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(me.sleepEvent))}}updateSolveMassProperties(){this.sleepState===me.SLEEPING||this.type===me.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,r=new Tt;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=bx,o=wx,a=this.quaternion,l=this.aabb,c=Tx;for(let d=0;d!==i;d++){const u=e[d];a.vmult(t[d],r),r.vadd(this.position,r),a.mult(n[d],o),u.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),d===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=Ax,i=Cx;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;this.sleepState===me.SLEEPING&&this.wakeUp();const n=Rx;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;const n=Ix,i=Px;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===me.DYNAMIC&&(this.sleepState===me.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;this.sleepState===me.SLEEPING&&this.wakeUp();const n=t,i=Lx;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=Dx;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==me.DYNAMIC)return;const n=Nx,i=Fx;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=Ux;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),_c.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===me.DYNAMIC||this.type===me.KINEMATIC)||this.sleepState===me.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,d=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,f=d*e;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const m=u.elements,v=this.angularFactor,p=l.x*v.x,g=l.y*v.y,_=l.z*v.z;r.x+=e*(m[0]*p+m[1]*g+m[2]*_),r.y+=e*(m[3]*p+m[4]*g+m[5]*_),r.z+=e*(m[6]*p+m[7]*g+m[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}me.idCounter=0;me.COLLIDE_EVENT_NAME="collide";me.DYNAMIC=yc.DYNAMIC;me.STATIC=yc.STATIC;me.KINEMATIC=yc.KINEMATIC;me.AWAKE=xc.AWAKE;me.SLEEPY=xc.SLEEPY;me.SLEEPING=xc.SLEEPING;me.wakeupEvent={type:"wakeup"};me.sleepyEvent={type:"sleepy"};me.sleepEvent={type:"sleep"};const bx=new M,wx=new Tt,Tx=new mt,Ax=new bn,Cx=new bn;new bn;const Rx=new M,Ix=new M,Px=new M,Lx=new M,Dx=new M,Nx=new M,Fx=new M,Ux=new M;class Bx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&me.STATIC)!==0||e.sleepState===me.SLEEPING)&&((t.type&me.STATIC)!==0||t.sleepState===me.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=Ox;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=kx,i=zx,r=Vx,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,d=l<c?`${l},${c}`:`${c},${l}`;n[d]=a,n.keys.push(d)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Ox=new M;new M;new Tt;new M;const kx={keys:[]},zx=[],Vx=[];new M;new M;new M;class Hx extends Bx{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class No{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Ph,Lh,Dh,Nh,Fh,Uh,Bh;const Mc={CLOSEST:1,ANY:2,ALL:4};Ph=fe.types.SPHERE;Lh=fe.types.PLANE;Dh=fe.types.BOX;Nh=fe.types.CYLINDER;Fh=fe.types.CONVEXPOLYHEDRON;Uh=fe.types.HEIGHTFIELD;Bh=fe.types.TRIMESH;class wt{get[Ph](){return this._intersectSphere}get[Lh](){return this._intersectPlane}get[Dh](){return this._intersectBox}get[Nh](){return this._intersectConvex}get[Fh](){return this._intersectConvex}get[Uh](){return this._intersectHeightfield}get[Bh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=wt.ANY,this.result=new No,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||wt.ANY,this.result=t.result||new No,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(sd),Ba.length=0,e.broadphase.aabbQuery(e,sd,Ba),this.intersectBodies(Ba),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=Gx,r=Wx;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(sM(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const d=new M;o.vsub(n,d);const u=d.dot(c);a.vsub(n,d);const h=d.dot(c);if(u*h>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new M,v=new M,p=new M;o.vsub(n,m);const g=-c.dot(m)/f;l.scale(g,v),o.vadd(v,p),this.reportIntersection(c,p,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=$x;o.from.copy(this.from),o.to.copy(this.to),tt.pointToLocalFrame(n,t,o.from,o.from),tt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=Xx;let l,c,d,u;l=c=0,d=u=e.data.length-1;const h=new mt;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),d=Math.min(d,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<d;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,m,!1),tt.pointToWorldFrame(n,t,e.pillarOffset,po),this._intersectConvex(e.pillarConvex,t,po,i,r,rd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),tt.pointToWorldFrame(n,t,e.pillarOffset,po),this._intersectConvex(e.pillarConvex,t,po,i,r,rd)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,d=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=d**2-4*c*u,f=qx,m=jx;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1);else{const v=(-d-Math.sqrt(h))/(2*c),p=(-d+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=Yx,l=od,c=o&&o.faceList||null,d=e.faces,u=e.vertices,h=e.faceNormals,f=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=c?c.length:d.length,_=this.result;for(let y=0;!_.shouldStop&&y<g;y++){const x=c?c[y]:y,b=d[x],A=h[x],C=t,P=n;l.copy(u[b[0]]),C.vmult(l,l),l.vadd(P,l),l.vsub(m,l),C.vmult(A,a);const w=f.dot(a);if(Math.abs(w)<this.precision)continue;const E=a.dot(l)/w;if(!(E<0)){f.scale(E,Jt),Jt.vadd(m,Jt),yn.copy(u[b[0]]),C.vmult(yn,yn),P.vadd(yn,yn);for(let I=1;!_.shouldStop&&I<b.length-1;I++){In.copy(u[b[I]]),Pn.copy(u[b[I+1]]),C.vmult(In,In),C.vmult(Pn,Pn),P.vadd(In,In),P.vadd(Pn,Pn);const O=Jt.distanceTo(m);!(wt.pointInTriangle(Jt,yn,In,Pn)||wt.pointInTriangle(Jt,In,yn,Pn))||O>p||this.reportIntersection(a,Jt,r,i,x)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=Kx,l=nM,c=iM,d=od,u=Zx,h=Jx,f=Qx,m=tM,v=eM,p=e.indices;e.vertices;const g=this.from,_=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(t),tt.vectorToLocalFrame(n,t,y,u),tt.pointToLocalFrame(n,t,g,h),tt.pointToLocalFrame(n,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,u),u.normalize();const x=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let b=0,A=l.length;!this.result.shouldStop&&b!==A;b++){const C=l[b];e.getNormal(C,a),e.getVertex(p[C*3],yn),yn.vsub(h,d);const P=u.dot(a),w=a.dot(d)/P;if(w<0)continue;u.scale(w,Jt),Jt.vadd(h,Jt),e.getVertex(p[C*3+1],In),e.getVertex(p[C*3+2],Pn);const E=Jt.distanceSquared(h);!(wt.pointInTriangle(Jt,In,yn,Pn)||wt.pointInTriangle(Jt,yn,In,Pn))||E>x||(tt.vectorToWorldFrame(t,a,v),tt.pointToWorldFrame(n,t,Jt,m),this.reportIntersection(v,m,r,i,C))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case wt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case wt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case wt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Vi),n.vsub(t,Qs),e.vsub(t,Oa);const r=Vi.dot(Vi),o=Vi.dot(Qs),a=Vi.dot(Oa),l=Qs.dot(Qs),c=Qs.dot(Oa);let d,u;return(d=l*a-o*c)>=0&&(u=r*c-o*a)>=0&&d+u<r*l-o*o}}wt.CLOSEST=Mc.CLOSEST;wt.ANY=Mc.ANY;wt.ALL=Mc.ALL;const sd=new mt,Ba=[],Qs=new M,Oa=new M,Gx=new M,Wx=new Tt,Jt=new M,yn=new M,In=new M,Pn=new M;new M;new No;const rd={faceList:[0]},po=new M,$x=new wt,Xx=[],qx=new M,jx=new M,Yx=new M;new M;new M;const od=new M,Kx=new M,Zx=new M,Jx=new M,Qx=new M,eM=new M,tM=new M;new mt;const nM=[],iM=new tt,Vi=new M,mo=new M;function sM(s,e,t){t.vsub(s,Vi);const n=Vi.dot(e);return e.scale(n,mo),mo.vadd(s,mo),t.distanceTo(mo)}class rM{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class ad{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Nr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Nr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ad,this.jacobianElementB=new ad,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,d=i.invMassSolve;return r.scale(c,ld),a.scale(d,cd),n.invInertiaWorldSolve.vmult(o,ud),i.invInertiaWorldSolve.vmult(l,dd),e.multiplyVectors(ld,ud)+t.multiplyVectors(cd,dd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,go),c+=go.dot(e.rotational),l.vmult(t.rotational,go),c+=go.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=oM;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Nr.idCounter=0;const ld=new M,cd=new M,ud=new M,dd=new M,go=new M,oM=new M;class aM extends Nr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=lM,c=cM,d=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const m=uM,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),y=this.restitution+1,x=y*h.dot(g)-y*d.dot(g)+f.dot(c)-u.dot(l),b=this.computeGiMf();return-_*t-x*n-e*b}getImpactVelocityAlongNormal(){const e=dM,t=hM,n=fM,i=pM,r=mM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const lM=new M,cM=new M,uM=new M,dM=new M,hM=new M,fM=new M,pM=new M,mM=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class hd extends Nr{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=gM,o=vM,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const d=this.computeGW(),u=this.computeGiMf();return-d*t-e*u}}const gM=new M,vM=new M;class Gi{constructor(e,t,n){n=rM.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Gi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Gi.idCounter=0;class Wi{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Wi.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Wi.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new wt;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class _M extends fe{constructor(){super({type:fe.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){qn.set(0,0,1),t.vmult(qn,qn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),qn.x===1?i.x=e.x:qn.x===-1&&(n.x=e.x),qn.y===1?i.y=e.y:qn.y===-1&&(n.y=e.y),qn.z===1?i.z=e.z:qn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const qn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Ln{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new mt,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const r=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;r.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(r[l].insert(e,t,n+1))return!0;a&&(r.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Ln({aabb:new mt({lowerBound:new M(0,0,0)})}),new Ln({aabb:new mt({lowerBound:new M(1,0,0)})}),new Ln({aabb:new mt({lowerBound:new M(1,1,0)})}),new Ln({aabb:new mt({lowerBound:new M(1,1,1)})}),new Ln({aabb:new mt({lowerBound:new M(0,1,1)})}),new Ln({aabb:new mt({lowerBound:new M(0,0,1)})}),new Ln({aabb:new mt({lowerBound:new M(1,0,1)})}),new Ln({aabb:new mt({lowerBound:new M(0,1,0)})})),n.vsub(t,Di),Di.scale(.5,Di);const r=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=r;const l=a.aabb.lowerBound;l.x*=Di.x,l.y*=Di.y,l.z*=Di.z,l.vadd(t,l),l.vadd(Di,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(vo),vo.toLocalFrame(t,vo),this.aabbQuery(vo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class yM extends Ln{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const Di=new M,vo=new mt;class Fo extends fe{constructor(e,t){super({type:fe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new mt,this.edges=null,this.scale=new M(1,1,1),this.tree=new yM,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new mt,i=new M,r=new M,o=new M,a=[i,r,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],r),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){_o.copy(e);const n=this.scale,i=n.x,r=n.y,o=n.z,a=_o.lowerBound,l=_o.upperBound;return a.x/=i,a.y/=r,a.z/=o,l.x/=i,l.y/=r,l.z/=o,this.tree.aabbQuery(_o,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=xM,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,r=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(r,md),this.getVertex(o,gd),this.getVertex(a,vd),Fo.computeNormal(gd,md,vd,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,r)=>{const o=i<r?`${i}_${r}`:`${r}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const r=i*3,o=this.indices[r],a=this.indices[r+1],l=this.indices[r+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const r=n[i].split("_");this.edges[2*i]=parseInt(r[0],10),this.edges[2*i+1]=parseInt(r[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=MM,i=SM;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,pd),n.vsub(t,fd),fd.cross(pd,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),tt.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const r=e*3;this.getVertex(this.indices[r],t),this.getVertex(this.indices[r+1],n),this.getVertex(this.indices[r+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(Ni);const n=Ni.upperBound.x-Ni.lowerBound.x,i=Ni.upperBound.y-Ni.lowerBound.y,r=Ni.upperBound.z-Ni.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*r*2*r),1/12*e*(2*n*2*n+2*r*2*r),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const r=EM;this.getVertex(0,r),t.copy(r),n.copy(r);for(let o=0;o!==i;o++)this.getVertex(o,r),r.x<t.x?t.x=r.x:r.x>n.x&&(n.x=r.x),r.y<t.y?t.y=r.y:r.y>n.y&&(n.y=r.y),r.z<t.z?t.z=r.z:r.z>n.z&&(n.z=r.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new M;for(let i=0,r=t.length/3;i!==r;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=bM,o=wM;r.position=e,r.quaternion=t,this.aabb.toWorldFrame(r,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,r){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),r===void 0&&(r=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const d=c/i*r,u=l/n*Math.PI*2,h=(e+t*Math.cos(u))*Math.cos(d),f=(e+t*Math.cos(u))*Math.sin(d),m=t*Math.sin(u);o.push(h,f,m)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const d=(i+1)*l+c-1,u=(i+1)*(l-1)+c-1,h=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(d,u,f),a.push(u,h,f)}return new Fo(o,a)}}const xM=new M,_o=new mt,MM=new M,SM=new M,fd=new M,pd=new M,md=new M,gd=new M,vd=new M,Ni=new mt,EM=new M,bM=new tt,wM=new mt;class TM{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class AM extends TM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,d=e;let u,h,f,m,v,p;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const g=RM,_=IM,y=CM;g.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const b=o[x];y[x]=0,_[x]=b.computeB(d),g[x]=1/b.computeC()}if(a!==0){for(let A=0;A!==c;A++){const C=l[A],P=C.vlambda,w=C.wlambda;P.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let A=0;A!==a;A++){const C=o[A];u=_[A],h=g[A],p=y[A],v=C.computeGWlambda(),f=h*(u-v-C.eps*p),p+f<C.minForce?f=C.minForce-p:p+f>C.maxForce&&(f=C.maxForce-p),y[A]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<r)break}for(let A=0;A!==c;A++){const C=l[A],P=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),P.vadd(C.vlambda,P),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let x=o.length;const b=1/d;for(;x--;)o[x].multiplier=y[x]*b}return n}}const CM=[],RM=[],IM=[];class PM{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class LM extends PM{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const dt={sphereSphere:fe.types.SPHERE,spherePlane:fe.types.SPHERE|fe.types.PLANE,boxBox:fe.types.BOX|fe.types.BOX,sphereBox:fe.types.SPHERE|fe.types.BOX,planeBox:fe.types.PLANE|fe.types.BOX,convexConvex:fe.types.CONVEXPOLYHEDRON,sphereConvex:fe.types.SPHERE|fe.types.CONVEXPOLYHEDRON,planeConvex:fe.types.PLANE|fe.types.CONVEXPOLYHEDRON,boxConvex:fe.types.BOX|fe.types.CONVEXPOLYHEDRON,sphereHeightfield:fe.types.SPHERE|fe.types.HEIGHTFIELD,boxHeightfield:fe.types.BOX|fe.types.HEIGHTFIELD,convexHeightfield:fe.types.CONVEXPOLYHEDRON|fe.types.HEIGHTFIELD,sphereParticle:fe.types.PARTICLE|fe.types.SPHERE,planeParticle:fe.types.PLANE|fe.types.PARTICLE,boxParticle:fe.types.BOX|fe.types.PARTICLE,convexParticle:fe.types.PARTICLE|fe.types.CONVEXPOLYHEDRON,cylinderCylinder:fe.types.CYLINDER,sphereCylinder:fe.types.SPHERE|fe.types.CYLINDER,planeCylinder:fe.types.PLANE|fe.types.CYLINDER,boxCylinder:fe.types.BOX|fe.types.CYLINDER,convexCylinder:fe.types.CONVEXPOLYHEDRON|fe.types.CYLINDER,heightfieldCylinder:fe.types.HEIGHTFIELD|fe.types.CYLINDER,particleCylinder:fe.types.PARTICLE|fe.types.CYLINDER,sphereTrimesh:fe.types.SPHERE|fe.types.TRIMESH,planeTrimesh:fe.types.PLANE|fe.types.TRIMESH};class DM{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new LM,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new aM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,d=i.material||t.material;return c&&d&&c.restitution>=0&&d.restitution>=0&&(a.restitution=c.restitution*d.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const d=r.material||n.material,u=o.material||i.material;if(d&&u&&d.friction>=0&&u.friction>=0&&(c=d.friction*u.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new hd(n,i,h*f),p=m.length?m.pop():new hd(n,i,h*f);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-h*f,v.maxForce=p.maxForce=h*f,v.ri.copy(e.ri),v.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=e.enabled,t.push(v,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Fi.setZero(),ps.setZero(),ms.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Fi.vadd(t.ni,Fi),ps.vadd(t.ri,ps),ms.vadd(t.rj,ms)):(Fi.vsub(t.ni,Fi),ps.vadd(t.rj,ps),ms.vadd(t.ri,ms));const o=1/e;ps.scale(o,n.ri),ms.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Fi.normalize(),Fi.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=UM,c=BM,d=NM,u=FM;for(let h=0,f=e.length;h!==f;h++){const m=e[h],v=t[h];let p=null;m.material&&v.material&&(p=n.getContactMaterial(m.material,v.material)||null);const g=m.type&me.KINEMATIC&&v.type&me.STATIC||m.type&me.STATIC&&v.type&me.KINEMATIC||m.type&me.KINEMATIC&&v.type&me.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],l),m.quaternion.vmult(m.shapeOffsets[_],d),d.vadd(m.position,d);const y=m.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],u),u.vadd(v.position,u);const b=v.shapes[x];if(!(y.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&y.collisionFilterGroup)||d.distanceTo(u)>y.boundingSphereRadius+b.boundingSphereRadius)continue;let A=null;y.material&&b.material&&(A=n.getContactMaterial(y.material,b.material)||null),this.currentContactMaterial=A||p||n.defaultContactMaterial;const C=y.type|b.type,P=this[C];if(P){let w=!1;y.type<b.type?w=P.call(this,y,b,d,u,l,c,m,v,y,b,g):w=P.call(this,b,y,u,d,c,l,v,m,y,b,g),w&&g&&(n.shapeOverlapKeeper.set(y.id,b.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,d,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,d);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,d,u){const h=this.createContactEquation(a,l,e,t,c,d);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,yo),h.ni.scale(h.ni.dot(yo),_d),yo.vsub(_d,h.rj),-yo.dot(h.ni)<=e.radius){if(u)return!0;const f=h.ri,m=h.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,u)}sphereBox(e,t,n,i,r,o,a,l,c,d,u){const h=this.v3pool,f=cS;n.vsub(i,xo),t.getSideNormals(f,o);const m=e.radius;let v=!1;const p=dS,g=hS,_=fS;let y=null,x=0,b=0,A=0,C=null;for(let N=0,X=f.length;N!==X&&v===!1;N++){const V=oS;V.copy(f[N]);const j=V.length();V.normalize();const re=xo.dot(V);if(re<j+m&&re>0){const ce=aS,ne=lS;ce.copy(f[(N+1)%3]),ne.copy(f[(N+2)%3]);const He=ce.length(),Qe=ne.length();ce.normalize(),ne.normalize();const Ge=xo.dot(ce),Y=xo.dot(ne);if(Ge<He&&Ge>-He&&Y<Qe&&Y>-Qe){const J=Math.abs(re-j-m);if((C===null||J<C)&&(C=J,b=Ge,A=Y,y=j,p.copy(V),g.copy(ce),_.copy(ne),x++,u))return!0}}}if(x){v=!0;const N=this.createContactEquation(a,l,e,t,c,d);p.scale(-m,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(y,p),g.scale(b,g),p.vadd(g,p),_.scale(A,_),p.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let P=h.get();const w=uS;for(let N=0;N!==2&&!v;N++)for(let X=0;X!==2&&!v;X++)for(let V=0;V!==2&&!v;V++)if(P.set(0,0,0),N?P.vadd(f[0],P):P.vsub(f[0],P),X?P.vadd(f[1],P):P.vsub(f[1],P),V?P.vadd(f[2],P):P.vsub(f[2],P),i.vadd(P,w),w.vsub(n,w),w.lengthSquared()<m*m){if(u)return!0;v=!0;const j=this.createContactEquation(a,l,e,t,c,d);j.ri.copy(w),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(m,j.ri),j.rj.copy(P),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}h.release(P),P=null;const E=h.get(),I=h.get(),O=h.get(),L=h.get(),k=h.get(),B=f.length;for(let N=0;N!==B&&!v;N++)for(let X=0;X!==B&&!v;X++)if(N%3!==X%3){f[X].cross(f[N],E),E.normalize(),f[N].vadd(f[X],I),O.copy(n),O.vsub(I,O),O.vsub(i,O);const V=O.dot(E);E.scale(V,L);let j=0;for(;j===N%3||j===X%3;)j++;k.copy(n),k.vsub(L,k),k.vsub(I,k),k.vsub(i,k);const re=Math.abs(V),ce=k.length();if(re<f[j].length()&&ce<m){if(u)return!0;v=!0;const ne=this.createContactEquation(a,l,e,t,c,d);I.vadd(L,ne.rj),ne.rj.copy(ne.rj),k.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(n,ne.ri),ne.ri.normalize(),ne.ri.scale(m,ne.ri),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(l.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}h.release(E,I,O,L,k)}planeBox(e,t,n,i,r,o,a,l,c,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,u)}convexConvex(e,t,n,i,r,o,a,l,c,d,u,h,f){const m=CS;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,m,h,f)){const v=[],p=RS;e.clipAgainstHull(n,r,t,i,o,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(u)return!0;const y=this.createContactEquation(a,l,e,t,c,d),x=y.ri,b=y.rj;m.negate(y.ni),v[_].normal.negate(p),p.scale(v[_].depth,p),v[_].point.vadd(p,x),b.copy(v[_].point),x.vsub(n,x),b.vsub(i,b),x.vadd(n,x),x.vsub(a.position,x),b.vadd(i,b),b.vsub(l.position,b),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,r,o,a,l,c,d,u){const h=this.v3pool;n.vsub(i,pS);const f=t.faceNormals,m=t.faces,v=t.vertices,p=e.radius;let g=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=_S;o.vmult(y,x),i.vadd(x,x);const b=vS;if(x.vsub(n,b),b.lengthSquared()<p*p){if(u)return!0;g=!0;const A=this.createContactEquation(a,l,e,t,c,d);A.ri.copy(b),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(p,A.ri),x.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,y=m.length;_!==y&&g===!1;_++){const x=f[_],b=m[_],A=yS;o.vmult(x,A);const C=xS;o.vmult(v[b[0]],C),C.vadd(i,C);const P=MS;A.scale(-p,P),n.vadd(P,P);const w=SS;P.vsub(C,w);const E=w.dot(A),I=ES;if(n.vsub(C,I),E<0&&I.dot(A)>0){const O=[];for(let L=0,k=b.length;L!==k;L++){const B=h.get();o.vmult(v[b[L]],B),i.vadd(B,B),O.push(B)}if(rS(O,A,n)){if(u)return!0;g=!0;const L=this.createContactEquation(a,l,e,t,c,d);A.scale(-p,L.ri),A.negate(L.ni);const k=h.get();A.scale(-E,k);const B=h.get();A.scale(-p,B),n.vsub(i,L.rj),L.rj.vadd(B,L.rj),L.rj.vadd(k,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),h.release(k),h.release(B),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,X=O.length;N!==X;N++)h.release(O[N]);return}else for(let L=0;L!==b.length;L++){const k=h.get(),B=h.get();o.vmult(v[b[(L+1)%b.length]],k),o.vmult(v[b[(L+2)%b.length]],B),i.vadd(k,k),i.vadd(B,B);const N=mS;B.vsub(k,N);const X=gS;N.unit(X);const V=h.get(),j=h.get();n.vsub(k,j);const re=j.dot(X);X.scale(re,V),V.vadd(k,V);const ce=h.get();if(V.vsub(n,ce),re>0&&re*re<N.lengthSquared()&&ce.lengthSquared()<p*p){if(u)return!0;const ne=this.createContactEquation(a,l,e,t,c,d);V.vsub(i,ne.rj),V.vsub(n,ne.ni),ne.ni.normalize(),ne.ni.scale(p,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(l.position,ne.rj),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let He=0,Qe=O.length;He!==Qe;He++)h.release(O[He]);h.release(k),h.release(B),h.release(V),h.release(ce),h.release(j);return}h.release(k),h.release(B),h.release(V),h.release(ce),h.release(j)}for(let L=0,k=O.length;L!==k;L++)h.release(O[L])}}}planeConvex(e,t,n,i,r,o,a,l,c,d,u){const h=bS,f=wS;f.set(0,0,1),r.vmult(f,f);let m=0;const v=TS;for(let p=0;p!==t.vertices.length;p++)if(h.copy(t.vertices[p]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,d),y=AS;f.scale(f.dot(v),y),h.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,u)}sphereHeightfield(e,t,n,i,r,o,a,l,c,d,u){const h=t.data,f=e.radius,m=t.elementSize,v=VS,p=zS;tt.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-f)/m)-1,_=Math.ceil((p.x+f)/m)+1,y=Math.floor((p.y-f)/m)-1,x=Math.ceil((p.y+f)/m)+1;if(_<0||x<0||g>h.length||y>h[0].length)return;g<0&&(g=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const b=[];t.getRectMinMax(g,y,_,x,b);const A=b[0],C=b[1];if(p.z-f>C||p.z+f<A)return;const P=this.result;for(let w=g;w<_;w++)for(let E=y;E<x;E++){const I=P.length;let O=!1;if(t.getConvexTrianglePillar(w,E,!1),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,u)),u&&O||(t.getConvexTrianglePillar(w,E,!0),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,u)),u&&O))return!0;if(P.length-I>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,u)}convexHeightfield(e,t,n,i,r,o,a,l,c,d,u){const h=t.data,f=t.elementSize,m=e.boundingSphereRadius,v=OS,p=kS,g=BS;tt.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/f)-1,y=Math.ceil((g.x+m)/f)+1,x=Math.floor((g.y-m)/f)-1,b=Math.ceil((g.y+m)/f)+1;if(y<0||b<0||_>h.length||x>h[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),b<0&&(b=0),_>=h.length&&(_=h.length-1),y>=h.length&&(y=h.length-1),b>=h[0].length&&(b=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const A=[];t.getRectMinMax(_,x,y,b,A);const C=A[0],P=A[1];if(!(g.z-m>P||g.z+m<C))for(let w=_;w<y;w++)for(let E=x;E<b;E++){let I=!1;if(t.getConvexTrianglePillar(w,E,!1),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,u,p,null)),u&&I||(t.getConvexTrianglePillar(w,E,!0),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(I=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,u,p,null)),u&&I))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,d,u){const h=DS;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(u)return!0;const m=this.createContactEquation(l,a,t,e,c,d);h.normalize(),m.rj.copy(h),m.rj.scale(e.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,d,u){const h=IS;h.set(0,0,1),a.quaternion.vmult(h,h);const f=PS;if(i.vsub(a.position,f),h.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,t,e,c,d);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=LS;h.scale(h.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,u)}convexParticle(e,t,n,i,r,o,a,l,c,d,u){let h=-1;const f=FS,m=US;let v=null;const p=NS;if(p.copy(i),p.vsub(n,p),r.conjugate(yd),yd.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,_=e.faces.length;g!==_;g++){const y=[e.worldVertices[e.faces[g][0]]],x=e.worldFaceNormals[g];i.vsub(y[0],xd);const b=-x.dot(xd);if(v===null||Math.abs(b)<Math.abs(v)){if(u)return!0;v=b,h=g,f.copy(x)}}if(h!==-1){const g=this.createContactEquation(l,a,t,e,c,d);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,y=g.rj;_.vadd(i,_),_.vsub(l.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,d,u){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,d,u)}particleCylinder(e,t,n,i,r,o,a,l,c,d,u){return this.convexParticle(t,e,i,n,o,r,l,a,c,d,u)}sphereTrimesh(e,t,n,i,r,o,a,l,c,d,u){const h=$M,f=XM,m=qM,v=jM,p=YM,g=KM,_=eS,y=WM,x=HM,b=tS;tt.pointToLocalFrame(i,o,n,p);const A=e.radius;_.lowerBound.set(p.x-A,p.y-A,p.z-A),_.upperBound.set(p.x+A,p.y+A,p.z+A),t.getTrianglesInAABB(_,b);const C=GM,P=e.radius*e.radius;for(let L=0;L<b.length;L++)for(let k=0;k<3;k++)if(t.getVertex(t.indices[b[L]*3+k],C),C.vsub(p,x),x.lengthSquared()<=P){if(y.copy(C),tt.pointToWorldFrame(i,o,y,C),C.vsub(n,x),u)return!0;let B=this.createContactEquation(a,l,e,t,c,d);B.ni.copy(x),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(C),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let L=0;L<b.length;L++)for(let k=0;k<3;k++){t.getVertex(t.indices[b[L]*3+k],h),t.getVertex(t.indices[b[L]*3+(k+1)%3],f),f.vsub(h,m),p.vsub(f,g);const B=g.dot(m);p.vsub(h,g);let N=g.dot(m);if(N>0&&B<0&&(p.vsub(h,g),v.copy(m),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(h,g),g.distanceTo(p)<e.radius)){if(u)return!0;const V=this.createContactEquation(a,l,e,t,c,d);g.vsub(p,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),tt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,V.rj),tt.vectorToWorldFrame(o,V.ni,V.ni),tt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const w=ZM,E=JM,I=QM,O=VM;for(let L=0,k=b.length;L!==k;L++){t.getTriangleVertices(b[L],w,E,I),t.getNormal(b[L],O),p.vsub(w,g);let B=g.dot(O);if(O.scale(B,g),p.vsub(g,g),B=g.distanceTo(p),wt.pointInTriangle(g,w,E,I)&&B<e.radius){if(u)return!0;let N=this.createContactEquation(a,l,e,t,c,d);g.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),tt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,N.rj),tt.vectorToWorldFrame(o,N.ni,N.ni),tt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}b.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,d,u){const h=new M,f=OM;f.set(0,0,1),r.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,h);const v=new M;v.copy(h),tt.pointToWorldFrame(i,o,v,h);const p=kM;if(h.vsub(n,p),f.dot(p)<=0){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,d);_.ni.copy(f);const y=zM;f.scale(p.dot(f),y),h.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Fi=new M,ps=new M,ms=new M,NM=new M,FM=new M,UM=new Tt,BM=new Tt,OM=new M,kM=new M,zM=new M,VM=new M,HM=new M;new M;const GM=new M,WM=new M,$M=new M,XM=new M,qM=new M,jM=new M,YM=new M,KM=new M,ZM=new M,JM=new M,QM=new M,eS=new mt,tS=[],yo=new M,_d=new M,nS=new M,iS=new M,sS=new M;function rS(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=nS;s[(r+1)%i].vsub(o,a);const l=iS;a.cross(e,l);const c=sS;t.vsub(o,c);const d=l.dot(c);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const xo=new M,oS=new M,aS=new M,lS=new M,cS=[new M,new M,new M,new M,new M,new M],uS=new M,dS=new M,hS=new M,fS=new M,pS=new M,mS=new M,gS=new M,vS=new M,_S=new M,yS=new M,xS=new M,MS=new M,SS=new M,ES=new M;new M;new M;const bS=new M,wS=new M,TS=new M,AS=new M,CS=new M,RS=new M,IS=new M,PS=new M,LS=new M,DS=new M,yd=new Tt,NS=new M;new M;const FS=new M,xd=new M,US=new M,BS=new M,OS=new M,kS=[0],zS=new M,VS=new M;class Md{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const d=n[l];for(;d>i[a];)a++;c=d===i[a],c||Sd(e,d)}a=0;for(let l=0;l<o;l++){let c=!1;const d=i[l];for(;d>n[a];)a++;c=n[a]===d,c||Sd(t,d)}}}function Sd(s,e){s.push((e&4294901760)>>16,e&65535)}const ka=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class HS{constructor(){this.data={keys:[]}}get(e,t){const n=ka(e,t);return this.data[n]}set(e,t,n){const i=ka(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=ka(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class GS extends Ih{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new Hx,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new AM,this.constraints=[],this.narrowphase=new DM(this),this.collisionMatrix=new nd,this.collisionMatrixPrevious=new nd,this.bodyOverlapKeeper=new Md,this.shapeOverlapKeeper=new Md,this.contactmaterials=[],this.contactMaterialTable=new HS,this.defaultMaterial=new Wi("default"),this.defaultContactMaterial=new Gi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof No?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.ALL,n.from=e,n.to=t,n.callback=i,za.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.ANY,n.from=e,n.to=t,n.result=i,za.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.CLOSEST,n.from=e,n.to=t,n.result=i,za.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof me&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=It.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=It.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(It.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=jS,i=YS,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,d=this.profile,u=me.DYNAMIC;let h=-1/0;const f=this.constraints,m=qS;l.length();const v=l.x,p=l.y,g=l.z;let _=0;for(c&&(h=It.now()),_=0;_!==r;_++){const L=o[_];if(L.type===u){const k=L.force,B=L.mass;k.x+=B*v,k.y+=B*p,k.z+=B*g}}for(let L=0,k=this.subsystems.length;L!==k;L++)this.subsystems[L].update();c&&(h=It.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(d.broadphase=It.now()-h);let y=f.length;for(_=0;_!==y;_++){const L=f[_];if(!L.collideConnected)for(let k=n.length-1;k>=0;k-=1)(L.bodyA===n[k]&&L.bodyB===i[k]||L.bodyB===n[k]&&L.bodyA===i[k])&&(n.splice(k,1),i.splice(k,1))}this.collisionMatrixTick(),c&&(h=It.now());const x=XS,b=t.length;for(_=0;_!==b;_++)x.push(t[_]);t.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,x,this.frictionEquations,m),c&&(d.narrowphase=It.now()-h),c&&(h=It.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=t.length;for(let L=0;L!==C;L++){const k=t[L],B=k.bi,N=k.bj,X=k.si,V=k.sj;let j;if(B.material&&N.material?j=this.getContactMaterial(B.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,B.material&&N.material&&(B.material.friction>=0&&N.material.friction>=0&&B.material.friction*N.material.friction,B.material.restitution>=0&&N.material.restitution>=0&&(k.restitution=B.material.restitution*N.material.restitution)),a.addEquation(k),B.allowSleep&&B.type===me.DYNAMIC&&B.sleepState===me.SLEEPING&&N.sleepState===me.AWAKE&&N.type!==me.STATIC){const re=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ce=N.sleepSpeedLimit**2;re>=ce*2&&(B.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===me.DYNAMIC&&N.sleepState===me.SLEEPING&&B.sleepState===me.AWAKE&&B.type!==me.STATIC){const re=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),ce=B.sleepSpeedLimit**2;re>=ce*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,N,!0),this.collisionMatrixPrevious.get(B,N)||(er.body=N,er.contact=k,B.dispatchEvent(er),er.body=B,N.dispatchEvent(er)),this.bodyOverlapKeeper.set(B.id,N.id),this.shapeOverlapKeeper.set(X.id,V.id)}for(this.emitContactEvents(),c&&(d.makeContactConstraints=It.now()-h,h=It.now()),_=0;_!==r;_++){const L=o[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const L=f[_];L.update();for(let k=0,B=L.equations.length;k!==B;k++){const N=L.equations[k];a.addEquation(N)}}a.solve(e,this),c&&(d.solve=It.now()-h),a.removeAllEquations();const P=Math.pow;for(_=0;_!==r;_++){const L=o[_];if(L.type&u){const k=P(1-L.linearDamping,e),B=L.velocity;B.scale(k,B);const N=L.angularVelocity;if(N){const X=P(1-L.angularDamping,e);N.scale(X,N)}}}this.dispatchEvent($S),c&&(h=It.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(e,E,I);this.clearForces(),this.broadphase.dirty=!0,c&&(d.integrate=It.now()-h),this.stepnumber+=1,this.dispatchEvent(WS);let O=!0;if(this.allowSleep)for(O=!1,_=0;_!==r;_++){const L=o[_];L.sleepTick(this.time),L.sleepState!==me.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(jn,Yn),e){for(let r=0,o=jn.length;r<o;r+=2)tr.bodyA=this.getBodyById(jn[r]),tr.bodyB=this.getBodyById(jn[r+1]),this.dispatchEvent(tr);tr.bodyA=tr.bodyB=null}if(t){for(let r=0,o=Yn.length;r<o;r+=2)nr.bodyA=this.getBodyById(Yn[r]),nr.bodyB=this.getBodyById(Yn[r+1]),this.dispatchEvent(nr);nr.bodyA=nr.bodyB=null}jn.length=Yn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(jn,Yn),n){for(let r=0,o=jn.length;r<o;r+=2){const a=this.getShapeById(jn[r]),l=this.getShapeById(jn[r+1]);Kn.shapeA=a,Kn.shapeB=l,a&&(Kn.bodyA=a.body),l&&(Kn.bodyB=l.body),this.dispatchEvent(Kn)}Kn.bodyA=Kn.bodyB=Kn.shapeA=Kn.shapeB=null}if(i){for(let r=0,o=Yn.length;r<o;r+=2){const a=this.getShapeById(Yn[r]),l=this.getShapeById(Yn[r+1]);Zn.shapeA=a,Zn.shapeB=l,a&&(Zn.bodyA=a.body),l&&(Zn.bodyB=l.body),this.dispatchEvent(Zn)}Zn.bodyA=Zn.bodyB=Zn.shapeA=Zn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new mt;const za=new wt,It=globalThis.performance||{};if(!It.now){let s=Date.now();It.timing&&It.timing.navigationStart&&(s=It.timing.navigationStart),It.now=()=>Date.now()-s}new M;const WS={type:"postStep"},$S={type:"preStep"},er={type:me.COLLIDE_EVENT_NAME,body:null,contact:null},XS=[],qS=[],jS=[],YS=[],jn=[],Yn=[],tr={type:"beginContact",bodyA:null,bodyB:null},nr={type:"endContact",bodyA:null,bodyB:null},Kn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Zn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var pn=Uint8Array,Ms=Uint16Array,KS=Int32Array,Oh=new pn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kh=new pn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ZS=new pn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),zh=function(s,e){for(var t=new Ms(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new KS(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Vh=zh(Oh,2),Hh=Vh.b,JS=Vh.r;Hh[28]=258,JS[258]=28;var QS=zh(kh,0),eE=QS.b,Hl=new Ms(32768);for(var ht=0;ht<32768;++ht){var fi=(ht&43690)>>1|(ht&21845)<<1;fi=(fi&52428)>>2|(fi&13107)<<2,fi=(fi&61680)>>4|(fi&3855)<<4,Hl[ht]=((fi&65280)>>8|(fi&255)<<8)>>1}var dr=(function(s,e,t){for(var n=s.length,i=0,r=new Ms(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new Ms(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new Ms(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],d=e-s[i],u=o[s[i]-1]++<<d,h=u|(1<<d)-1;u<=h;++u)a[Hl[u]>>l]=c}else for(a=new Ms(n),i=0;i<n;++i)s[i]&&(a[i]=Hl[o[s[i]-1]++]>>15-s[i]);return a}),Fr=new pn(288);for(var ht=0;ht<144;++ht)Fr[ht]=8;for(var ht=144;ht<256;++ht)Fr[ht]=9;for(var ht=256;ht<280;++ht)Fr[ht]=7;for(var ht=280;ht<288;++ht)Fr[ht]=8;var Gh=new pn(32);for(var ht=0;ht<32;++ht)Gh[ht]=5;var tE=dr(Fr,9,1),nE=dr(Gh,5,1),Va=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},xn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Ha=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},iE=function(s){return(s+7)/8|0},sE=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new pn(s.subarray(e,t))},rE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(s,e,t){var n=new Error(e||rE[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},oE=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new pn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new pn(i*3));var c=function(Ye){var Rt=t.length;if(Ye>Rt){var D=new pn(Math.max(Rt*2,Ye));D.set(t),t=D}},d=e.f||0,u=e.p||0,h=e.b||0,f=e.l,m=e.d,v=e.m,p=e.n,g=i*8;do{if(!f){d=xn(s,u,1);var _=xn(s,u+1,3);if(u+=3,_)if(_==1)f=tE,m=nE,v=9,p=5;else if(_==2){var A=xn(s,u,31)+257,C=xn(s,u+10,15)+4,P=A+xn(s,u+5,31)+1;u+=14;for(var w=new pn(P),E=new pn(19),I=0;I<C;++I)E[ZS[I]]=xn(s,u+I*3,7);u+=C*3;for(var O=Va(E),L=(1<<O)-1,k=dr(E,O,1),I=0;I<P;){var B=k[xn(s,u,L)];u+=B&15;var y=B>>4;if(y<16)w[I++]=y;else{var N=0,X=0;for(y==16?(X=3+xn(s,u,3),u+=2,N=w[I-1]):y==17?(X=3+xn(s,u,7),u+=3):y==18&&(X=11+xn(s,u,127),u+=7);X--;)w[I++]=N}}var V=w.subarray(0,A),j=w.subarray(A);v=Va(V),p=Va(j),f=dr(V,v,1),m=dr(j,p,1)}else Mn(1);else{var y=iE(u)+4,x=s[y-4]|s[y-3]<<8,b=y+x;if(b>i){l&&Mn(0);break}a&&c(h+x),t.set(s.subarray(y,b),h),e.b=h+=x,e.p=u=b*8,e.f=d;continue}if(u>g){l&&Mn(0);break}}a&&c(h+131072);for(var re=(1<<v)-1,ce=(1<<p)-1,ne=u;;ne=u){var N=f[Ha(s,u)&re],He=N>>4;if(u+=N&15,u>g){l&&Mn(0);break}if(N||Mn(2),He<256)t[h++]=He;else if(He==256){ne=u,f=null;break}else{var Qe=He-254;if(He>264){var I=He-257,Ge=Oh[I];Qe=xn(s,u,(1<<Ge)-1)+Hh[I],u+=Ge}var Y=m[Ha(s,u)&ce],J=Y>>4;Y||Mn(3),u+=Y&15;var j=eE[J];if(J>3){var Ge=kh[J];j+=Ha(s,u)&(1<<Ge)-1,u+=Ge}if(u>g){l&&Mn(0);break}a&&c(h+131072);var ve=h+Qe;if(h<j){var Le=r-j,be=Math.min(j,ve);for(Le+h<0&&Mn(3);h<be;++h)t[h]=n[Le+h]}for(;h<ve;++h)t[h]=t[h-j]}}e.l=f,e.p=ne,e.b=h,e.f=d,f&&(d=1,e.m=v,e.d=m,e.n=p)}while(!d);return h!=t.length&&o?sE(t,0,h):t.subarray(0,h)},aE=new pn(0),lE=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Mn(6,"invalid zlib data"),(s[1]>>5&1)==1&&Mn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function cE(s,e){return oE(s.subarray(lE(s),-4),{i:2},e,e)}var uE=typeof TextDecoder<"u"&&new TextDecoder,dE=0;try{uE.decode(aE,{stream:!0}),dE=1}catch{}function Wh(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function hE(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const d=o[c+1],u=r[a-c],h=i[c]/(d+u);i[c]=l+d*h,l=u*h}i[a]=l}return i}function fE(s,e,t,n){const i=Wh(s,n,e),r=hE(i,n,s,e),o=new Je(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],d=l.w*c;o.x+=l.x*d,o.y+=l.y*d,o.z+=l.z*d,o.w+=l.w*c}return o}function pE(s,e,t,n,i){const r=[];for(let u=0;u<=t;++u)r[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let h=0;for(let f=0;f<u;++f){const m=c[f+1],v=l[u-f];a[u][f]=m+v;const p=a[f][u-1]/a[u][f];a[f][u]=h+m*p,h=v*p}a[u][u]=h}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let h=0,f=1;const m=[];for(let v=0;v<=t;++v)m[v]=r.slice(0);m[0][0]=1;for(let v=1;v<=n;++v){let p=0;const g=u-v,_=t-v;u>=v&&(m[f][0]=m[h][0]/a[_+1][g],p=m[f][0]*a[g][_]);const y=g>=-1?1:-g,x=u-1<=_?v-1:t-u;for(let A=y;A<=x;++A)m[f][A]=(m[h][A]-m[h][A-1])/a[_+1][g+A],p+=m[f][A]*a[g+A][_];u<=_&&(m[f][v]=-m[h][v-1]/a[_+1][u],p+=m[f][v]*a[u][_]),o[v][u]=p;const b=h;h=f,f=b}}let d=t;for(let u=1;u<=n;++u){for(let h=0;h<=t;++h)o[u][h]*=d;d*=t-u}return o}function mE(s,e,t,n,i){const r=i<s?i:s,o=[],a=Wh(s,n,e),l=pE(a,n,s,r,e),c=[];for(let d=0;d<t.length;++d){const u=t[d].clone(),h=u.w;u.x*=h,u.y*=h,u.z*=h,c[d]=u}for(let d=0;d<=r;++d){const u=c[a-s].clone().multiplyScalar(l[d][0]);for(let h=1;h<=s;++h)u.add(c[a-s+h].clone().multiplyScalar(l[d][h]));o[d]=u}for(let d=r+1;d<=i+1;++d)o[d]=new Je(0,0,0);return o}function gE(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function vE(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new F(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(gE(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function _E(s,e,t,n,i){const r=mE(s,e,t,n,i);return vE(r)}class yE extends Fm{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new Je(c.x,c.y,c.z,c.w)}}getPoint(e,t=new F){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=fE(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new F){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=_E(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Je(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let qe,St,qt;class xE extends ji{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?Sg.extractUrlBase(e):r.path,a=new gg(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(TE(e))qe=new wE().parse(e);else{const i=qh(e);if(!AE(i))throw new Error("THREE.FBXLoader: Unknown format.");if(bd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+bd(i));qe=new bE().parse(i)}const n=new Sh(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new ME(n,this.manager).parse(qe)}}class ME{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){St=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new SE().parse(i);return this.parseScene(i,r,n),qt}parseConnections(){const e=new Map;return"Connections"in qe&&qe.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in qe.Objects){const n=qe.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in qe.Objects){const n=qe.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?mr:ti,n.wrapT=a===0?mr:ti,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const r=i.path;r||i.setPath(this.textureLoader.path);const o=St.get(e.id).children;let a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new zt;const l=i.load(a);return i.setPath(r),l}parseMaterials(e){const t=new Map;if("Material"in qe.Objects){const n=qe.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!St.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new lo;break;case"lambert":a=new tg;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new lo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Xe.colorSpaceToWorking(new Be().fromArray(e.Diffuse.value),ct):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Xe.colorSpaceToWorking(new Be().fromArray(e.DiffuseColor.value),ct)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Xe.colorSpaceToWorking(new Be().fromArray(e.Emissive.value),ct):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Xe.colorSpaceToWorking(new Be().fromArray(e.EmissiveColor.value),ct)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Xe.colorSpaceToWorking(new Be().fromArray(e.Specular.value),ct):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Xe.colorSpaceToWorking(new Be().fromArray(e.SpecularColor.value),ct));const r=this;return St.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=ct);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ct);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Co,i.envMap.colorSpace=ct);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ct);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in qe.Objects&&t in qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=St.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in qe.Objects){const n=qe.Objects.Deformer;for(const i in n){const r=n[i],o=St.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ce().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=St.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){qt=new ys;const i=this.parseModels(e.skeletons,t,n),r=qe.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),St.get(l.ID).parents.forEach(function(u){const h=i.get(u.ID);h!==void 0&&h.add(l)}),l.parent===null&&qt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),qt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Xh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new EE().parse();qt.children.length===1&&qt.children[0].isGroup&&(qt.children[0].animations=a,qt=qt.children[0]),qt.animations=a}parseModels(e,t,n){const i=new Map,r=qe.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=St.get(a);let d=this.buildSkeleton(c,e,a,l.attrName);if(!d){switch(l.attrType){case"Camera":d=this.createCamera(c);break;case"Light":d=this.createLight(c);break;case"Mesh":d=this.createMesh(c,t,n);break;case"NurbsCurve":d=this.createCurve(c,t);break;case"LimbNode":case"Root":d=new Bl;break;case"Null":default:d=new ys;break}d.name=l.attrName?nt.sanitizeNodeName(l.attrName):"",d.userData.originalName=l.attrName,d.ID=a}this.getTransformData(d,l),i.set(a,d)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,d){if(c.ID===o.ID){const u=r;r=new Bl,r.matrixWorld.copy(c.transformLink),r.name=i?nt.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[d]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new gt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let d=45;n.FieldOfView!==void 0&&(d=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new jt(d,c,r,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new gt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new gt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new gt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Xe.colorSpaceToWorking(new Be().fromArray(n.Color.value),ct));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Au(r,o,a,l);break;case 1:t=new zl(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Ot.degToRad(n.InnerAngle.value));let d=0;n.OuterAngle!==void 0&&(d=Ot.degToRad(n.OuterAngle.value),d=Math.max(d,1)),t=new yg(r,o,a,c,d,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Au(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new lo({name:ji.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,d=r.groups.length;c<d;c++){const u=r.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){const c=new lo;a.push(c)}}return r.FBX_Deformer?(i=new Cm(r,o),i.normalizeSkinWeights()):i=new En(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new fh({name:ji.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Nm(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Ar(t.RotationOrder.value):n.eulerOrder=Ar(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&St.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=qe.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),qt.add(e.target)):e.lookAt(new F().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];St.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;St.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new dc(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in qe.Objects){const t=qe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ce().fromArray(r.Matrix.a)}):e[i.Node]=new Ce().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in qe){if("AmbientColor"in qe.GlobalSettings){const e=qe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Be().setRGB(t,n,i,ct);qt.add(new bh(r,1))}}"UnitScaleFactor"in qe.GlobalSettings&&(qt.userData.unitScaleFactor=qe.GlobalSettings.UnitScaleFactor.value)}}}class SE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in qe.Objects){const n=qe.Objects.Geometry;for(const i in n){const r=St.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(u){return qe.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,h){return i[h.ID]!==void 0&&(u=i[h.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Ar(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const d=Xh(c);return this.genGeometry(t,a,r,d)}genGeometry(e,t,n,i){const r=new wn;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new en(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new en(a.colors,3)),t&&(r.setAttribute("skinIndex",new uc(a.weightsIndices,4)),r.setAttribute("skinWeight",new en(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new ze().getNormalMatrix(i),d=new en(a.normal,3);d.applyNormalMatrix(c),r.setAttribute("normal",d)}if(a.uvs.forEach(function(c,d){const u=d===0?"uv":`uv${d}`;r.setAttribute(u,new en(a.uvs[d],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],d=0;if(a.materialIndex.forEach(function(u,h){u!==c&&(r.addGroup(d,h-d,c),c=u,d=h)}),r.groups.length>0){const u=r.groups[r.groups.length-1],h=u.start+u.count;h!==a.materialIndex.length&&r.addGroup(h,a.materialIndex.length-h,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],d=[],u=[];const h=this;return e.vertexIndices.forEach(function(f,m){let v,p=!1;f<0&&(f=f^-1,p=!0);let g=[],_=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const y=Mo(m,n,f,e.color);l.push(y[0],y[1],y[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(y){_.push(y.weight),g.push(y.id)}),_.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const y=[0,0,0,0],x=[0,0,0,0];_.forEach(function(b,A){let C=b,P=g[A];x.forEach(function(w,E,I){if(C>w){I[E]=C,C=w;const O=y[E];y[E]=P,P=O}})}),g=y,_=x}for(;_.length<4;)_.push(0),g.push(0);for(let y=0;y<4;++y)d.push(_[y]),u.push(g[y])}if(e.normal){const y=Mo(m,n,f,e.normal);a.push(y[0],y[1],y[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=Mo(m,n,f,e.material)[0],v<0&&(h.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(y,x){const b=Mo(m,n,f,y);c[x]===void 0&&(c[x]=[]),c[x].push(b[0]),c[x].push(b[1])}),i++,p&&(h.genFace(t,e,o,v,a,l,c,d,u,i),n++,i=0,o=[],a=[],l=[],c=[],d=[],u=[])}),t}getNormalNewell(e){const t=new F(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new F(0,1,0):new F(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new Ke(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,d){let u;if(d>3){const h=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)h.push(new F(f[n[g]],f[n[g+1]],f[n[g+2]]));const{tangent:m,bitangent:v}=this.getNormalTangentAndBitangent(h),p=[];for(const g of h)p.push(this.flattenVertex(g,m,v));u=fc.triangulateShape(p,[])}else u=[[0,1,2]];for(const[h,f,m]of u)e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[m*3]),e.normal.push(r[m*3+1]),e.normal.push(r[m*3+2])),t.uv&&t.uv.forEach(function(v,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][h*2]),e.uvs[p].push(a[p][h*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][m*2]),e.uvs[p].push(a[p][m*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=qe.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],d=e.attributes.position.count*3,u=new Float32Array(d);for(let v=0;v<c.length;v++){const p=c[v]*3;u[p]=l[v*3],u[p+1]=l[v*3+1],u[p+2]=l[v*3+2]}const h={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},f=this.genBuffers(h),m=new en(f.vertex,3);m.name=r||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Be;o<i.length;o+=4)a.fromArray(i,o),Xe.colorSpaceToWorking(a,ct),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new wn;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,h=o.length;u<h;u+=4)r.push(new Je().fromArray(o,u));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}const d=new yE(n,i,r,a,l).getPoints(r.length*12);return new wn().setFromPoints(d)}}class EE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=qe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=qe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(CE),values:t[n].KeyValueFloat.a},r=St.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=qe.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=St.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const d=e.get(l.ID);if(d.curves.x!==void 0||d.curves.y!==void 0||d.curves.z!==void 0){if(r[c]===void 0){const u=St.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(u!==void 0){const h=qe.Objects.Model[u.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:h.attrName?nt.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};qt.traverse(function(m){m.ID===h.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ce),"PreRotation"in h&&(f.preRotation=h.PreRotation.value),"PostRotation"in h&&(f.postRotation=h.PostRotation.value),r[c]=f}}r[c]&&(r[c][d.attr]=d)}else if(d.curves.morph!==void 0){if(r[c]===void 0){const u=St.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,h=St.get(u).parents[0].ID,f=St.get(h).parents[0].ID,m=St.get(f).parents[0].ID,v=qe.Objects.Model[m],p={modelName:v.attrName?nt.sanitizeNodeName(v.attrName):"",morphName:qe.Objects.Deformer[u].attrName};r[c]=p}r[c][d.attr]=d}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=qe.Objects.AnimationStack,n={};for(const i in t){const r=St.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new ug(e.name,-1,t)}generateTracks(e){const t=[];let n=new F,i=new F;if(e.transform&&e.transform.decompose(n,new Qt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Tr(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,r);o=h[0],a=h[1]}const l=Ar(0);n!==void 0&&(n=n.map(Ot.degToRad),n.push(l),n=new Lt().fromArray(n),n=new Qt().setFromEuler(n)),i!==void 0&&(i=i.map(Ot.degToRad),i.push(l),i=new Lt().fromArray(i),i=new Qt().setFromEuler(i).invert());const c=new Qt,d=new Lt,u=[];if(!a||!o)return new Bs(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)d.set(a[h],a[h+1],a[h+2],r),c.setFromEuler(d),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new Qt().fromArray(u,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,h/3*4);return new Bs(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=qt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new wr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const d=t.x.values[o];r.push(d),i[0]=d}else r.push(i[0]);if(a!==-1){const d=t.y.values[a];r.push(d),i[1]=d}else r.push(i[1]);if(l!==-1){const d=t.z.values[l];r.push(d),i[2]=d}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Ot.degToRad(e.values[0])),o.push(Ot.degToRad(t.values[0])),o.push(Ot.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Ot.degToRad),d=[e.values[a],t.values[a],n.values[a]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const u=d.map(Ot.degToRad),h=[d[0]-l[0],d[1]-l[1],d[2]-l[2]],f=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,p=new Lt(...c,i),g=new Lt(...u,i),_=new Qt().setFromEuler(p),y=new Qt().setFromEuler(g);_.dot(y)&&y.set(-y.x,-y.y,-y.z,-y.w);const x=e.times[a-1],b=e.times[a]-x,A=new Qt,C=new Lt;for(let P=0;P<1;P+=1/v)A.copy(_.clone().slerp(y.clone(),P)),r.push(x+P*b),C.setFromQuaternion(A,i),o.push(C.x),o.push(C.y),o.push(C.z)}else r.push(e.times[a]),o.push(Ot.degToRad(e.values[a])),o.push(Ot.degToRad(t.values[a])),o.push(Ot.degToRad(n.values[a]))}return[r,o]}}class bE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new $h,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),d=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):d?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),d=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(h){return h.trim().replace(/^"/,"")}),i="connections",r=[c,d],IE(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Wa(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Wa(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(d){return d.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Wa(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class wE{parse(e){const t=new Ed(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new $h;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let h=0;h<r;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",d=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),d!==""&&(n.attrName=d),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=cE(new Uint8Array(e.getArrayBuffer(o))),l=new Ed(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Ed{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class $h{add(e,t){this[e]=t}}function TE(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===qh(s,0,e.length)}function AE(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function bd(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function CE(s){return s/46186158e3}const RE=[];function Mo(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return PE(RE,n.buffer,r,o)}const Ga=new Lt,gs=new F;function Xh(s){const e=new Ce,t=new Ce,n=new Ce,i=new Ce,r=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,d=new Ce,u=new Ce,h=new Ce,f=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(gs.fromArray(s.translation));const m=Ar(0);if(s.preRotation){const I=s.preRotation.map(Ot.degToRad);I.push(m),t.makeRotationFromEuler(Ga.fromArray(I))}if(s.rotation){const I=s.rotation.map(Ot.degToRad);I.push(s.eulerOrder||m),n.makeRotationFromEuler(Ga.fromArray(I))}if(s.postRotation){const I=s.postRotation.map(Ot.degToRad);I.push(m),i.makeRotationFromEuler(Ga.fromArray(I)),i.invert()}s.scale&&r.scale(gs.fromArray(s.scale)),s.scalingOffset&&a.setPosition(gs.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(gs.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(gs.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(gs.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),d.copy(s.parentMatrixWorld));const v=t.clone().multiply(n).multiply(i),p=new Ce;p.extractRotation(d);const g=new Ce;g.copyPosition(d);const _=g.clone().invert().multiply(d),y=p.clone().invert().multiply(_),x=r,b=new Ce;if(f===0)b.copy(p).multiply(v).multiply(y).multiply(x);else if(f===1)b.copy(p).multiply(y).multiply(v).multiply(x);else{const O=new Ce().scale(new F().setFromMatrixScale(u)).clone().invert(),L=y.clone().multiply(O);b.copy(p).multiply(v).multiply(L).multiply(x)}const A=c.clone().invert(),C=o.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(A).multiply(a).multiply(o).multiply(r).multiply(C);const w=new Ce().copyPosition(P),E=d.clone().multiply(w);return h.copyPosition(E),P=h.clone().multiply(b),P.premultiply(d.invert()),P}function Ar(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Wa(s){return s.split(",").map(function(t){return parseFloat(t)})}function qh(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function IE(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function PE(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const LE="2.0.7",ot={gravity:-1,dice:{radius:.01,mass:.01,angularDamping:.1,initialPosition:{xPercent:80,yPercent:80},initialHeight:.05,throw:{speed:{min:.3,max:.4},azimuth:{min:280,max:350},elevation:{min:-10,max:0},angularVelocity:{min:-5,max:5}}},physics:{frictionGround:.1,frictionWall:.1,restitutionGround:.5,restitutionWall:.9},camera:{height:.5,breakpoint_px:768,scaleMobile_m_per_px:2e-4,scalePC_m_per_px:2e-4},tray:{sizeRatio:.9},timeouts:{stopCheck:100,forceResult:3500,hide:1e3}};let gi,ni,mi,ln,_s,$a,wd,Gl=null,Ts=!1,Td,Wl,As,Cs,jh=!1,Dn={x:0,z:0};const DE=5;let Yh=[],Si=[];const NE=[{value:8,normal:new F(0,.894,.447)},{value:10,normal:new F(.851,.447,.276)},{value:2,normal:new F(.526,.447,-.724)},{value:6,normal:new F(-.526,.447,-.724)},{value:4,normal:new F(-.851,.447,.276)},{value:1,normal:new F(0,-.894,-.447)},{value:5,normal:new F(.851,-.447,-.276)},{value:3,normal:new F(.526,-.447,.724)},{value:7,normal:new F(-.526,-.447,.724)},{value:9,normal:new F(-.851,-.447,-.276)}];async function FE(s){As=s;const e=s.clientWidth,t=s.clientHeight;gi=new Tm,ni=new jt(1,e/t||1,.1,10),ni.position.set(0,ot.camera.height,0),ni.lookAt(0,0,0),mi=new mx({antialias:!0,alpha:!0}),mi.setSize(e,t),mi.setPixelRatio(window.devicePixelRatio),mi.setClearColor(0,0),s.appendChild(mi.domElement),gi.add(new bh(16772829,.9));const n=new zl(14544639,5);n.position.set(-1,5,2),gi.add(n);const i=new zl(15663086,.5);i.position.set(5,2,-1),gi.add(i),ln=new GS,ln.gravity.set(0,ot.gravity,0),ln.solver.iterations=30,ln.solver.tolerance=0,_s=new Wi("dice"),$a=new Wi("ground"),wd=new Wi("wall"),ln.addContactMaterial(new Gi(_s,$a,{restitution:ot.physics.restitutionGround,friction:ot.physics.frictionGround})),ln.addContactMaterial(new Gi(_s,wd,{restitution:ot.physics.restitutionWall,friction:ot.physics.frictionWall})),ln.addContactMaterial(new Gi(_s,_s,{restitution:.5,friction:.1}));const r=new me({mass:0,material:$a});r.addShape(new _M),r.quaternion.setFromEuler(-Math.PI/2,0,0),ln.addBody(r),Jh();const o=[];for(let a=0;a<DE;a++)o.push(UE());await Promise.all(o),jh=!0,console.log("3D Dice pool ready."),Qh(),window.addEventListener("resize",Xl),setTimeout(Xl,0)}function $l(s,e){if(Ts||!jh)return;const t=s.dices.length,n=Yh.filter(u=>!u.inUse);if(n.length<t){console.error("リクエストされた数のダイスが不足しています。");return}Si=[],Gl=e,Ts=!0,clearTimeout(Wl),As.classList.add("is-visible"),Xl();const i=Cs.width*ot.tray.sizeRatio,r=Cs.height*ot.tray.sizeRatio,o={1:[{x:0,z:0,y:0}],2:[{x:-1,z:0,y:.01},{x:1,z:0,y:0}],3:[{x:-1,z:1,y:.02},{x:1,z:1,y:.01},{x:0,z:-1,y:0}],4:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:0,y:.05}],5:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:-1.5,y:.04},{x:0,z:0,y:.07}]},a=(ot.dice.initialPosition.xPercent/100-.5)*i,l=(ot.dice.initialPosition.yPercent/100-.5)*r,c=ot.dice.radius*2.5,d=o[t]||o[5];for(let u=0;u<t;u++){const h=n[u],f=s.dices[u];h.inUse=!0,h.model.visible=!0,h.id=f.id,h.model.traverse(L=>{L.isMesh&&L.material.color.set(f.color)});const m=d[u],v=a+m.x*c,p=l+m.z*c,g=ot.dice.initialHeight+m.y;h.body.position.set(v,g,p);const _=L=>Math.random()*(L.max-L.min)+L.min,y=_(ot.dice.throw.speed),x=_(ot.dice.throw.azimuth),b=_(ot.dice.throw.elevation),A=Ot.degToRad(x),C=Ot.degToRad(b),P=y*Math.cos(C),w=y*Math.sin(C),E=P*Math.sin(A),I=-P*Math.cos(A);h.body.velocity.set(E,w,I);const O=ot.dice.throw.angularVelocity;h.body.angularVelocity.set(_(O)*(Math.random()<.5?1:-1),_(O)*(Math.random()<.5?1:-1),_(O)*(Math.random()<.5?1:-1)),ln.addBody(h.body),h.body.wakeUp(),Si.push(h)}Kh(),Wl=setTimeout(()=>{Ts&&(console.warn("Dice roll timed out. Forcing result."),Zh())},ot.timeouts.forceResult)}function UE(){return new Promise((s,e)=>{const t=new xE,n=new Sh,i="/models/",r="Dice_10.fbx",o={map:"Dice_10_Albedo.png",normalMap:"Dice_10_Normal.png",metalnessMap:"Dice_10_Metallic.png",roughnessMap:"Dice_10_Roughness.png",aoMap:"Dice_10_AO.png",displacementMap:"Dice_10_Height.png"},a={};let l=0;const c=Object.keys(o).length;Object.entries(o).forEach(([u,h])=>{n.load(i+h,f=>{f.colorSpace=ct,a[u]=f,l++,l===c&&d()},void 0,f=>e(f))});function d(){t.load(i+r,u=>{u.traverse(_=>{_.isMesh&&(_.material=new eg({map:a.map,normalMap:a.normalMap,displacementMap:a.displacementMap,aoMap:a.aoMap,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,metalness:1,roughness:1,normalScale:new Ke(2,2),displacementScale:0,aoMapIntensity:.5}))}),VE(u);const h=kE(u),f=ot.dice.radius/h;HE(u,f);const{vertices:m,indices:v}=zE(u),p=new Fo(m,v),g=new me({mass:ot.dice.mass,material:_s,shape:p,angularDamping:ot.dice.angularDamping,allowSleep:!0});u.visible=!1,Yh.push({model:u,body:g,inUse:!1,color:null,id:null}),gi.add(u),s()},void 0,u=>e(u))}})}function Kh(){clearTimeout(Td),Si.length>0&&Si.every(e=>e.body.sleepState===me.SLEEPING)?(clearTimeout(Wl),setTimeout(Zh,200)):Ts&&(Td=setTimeout(Kh,ot.timeouts.stopCheck))}function BE(){Si.forEach(s=>{s.inUse=!1,s.model.visible=!1,s.id=null,ln.removeBody(s.body)}),Si=[]}function Zh(){if(!Ts){console.log("finishRoll called, but isRolling is already false. Aborting.");return}console.log("finishRoll triggered. Calculating results and setting up hide timer.");const s=Si.map(e=>{let t=0;const n=e.model.getObjectByProperty("isMesh",!0);return n&&(t=n.material.color.getHex()),{id:e.id,color:t,value:OE(e.model)}});Gl&&Gl(s),Ts=!1,setTimeout(()=>{console.log(`Hiding container and cleaning up dice. (After ${ot.timeouts.hide}ms)`),BE(),As.classList.remove("is-visible")},ot.timeouts.hide)}function OE(s){let e=-2,t=-1;const n=new F(0,1,0);return NE.forEach(i=>{const o=i.normal.clone().applyQuaternion(s.quaternion).dot(n);o>e&&(e=o,t=i.value)}),t}const Ad=[],Cd=[];function Jh(){Ad.forEach(s=>ln.removeBody(s)),Ad.length=0,Cd.forEach(s=>gi.remove(s)),Cd.length=0}function Xl(){if(!As)return;const s=As.clientWidth,e=As.clientHeight;if(s===0||e===0)return;const t=s<=ot.camera.breakpoint_px?ot.camera.scaleMobile_m_per_px:ot.camera.scalePC_m_per_px,n=e*t,i=ni.position.y,r=2*Math.atan(n/(2*i)),o=Ot.radToDeg(r),a=s/e,l=n;Cs={width:l*a,height:l},Dn.x=Cs.width*ot.tray.sizeRatio/2,Dn.z=Cs.height*ot.tray.sizeRatio/2,Jh(),ni.aspect=a,ni.fov=o,ni.updateProjectionMatrix(),mi.setSize(s,e)}let Rd=performance.now();function Qh(){requestAnimationFrame(Qh);const s=performance.now(),e=(s-Rd)/1e3;ln&&ln.step(1/60,e,3),Rd=s,Si.forEach(t=>{t.model.position.copy(t.body.position),t.model.quaternion.copy(t.body.quaternion);const n=t.body.position,i=t.body.velocity,r=t.body.angularVelocity;n.x<-Dn.x?(n.x=-Dn.x,i.x<0&&(i.x*=-1,r.z*=-1)):n.x>Dn.x&&(n.x=Dn.x,i.x>0&&(i.x*=-1,r.z*=-1)),n.z<-Dn.z?(n.z=-Dn.z,i.z<0&&(i.z*=-1,r.x*=-1)):n.z>Dn.z&&(n.z=Dn.z,i.z>0&&(i.z*=-1,r.x*=-1))}),mi&&gi&&ni&&mi.render(gi,ni)}function kE(s){const e=new F;let t=0;return s.traverse(n=>{if(n.isMesh&&n.geometry?.attributes?.position){const i=n.geometry.attributes.position;for(let r=0;r<i.count;r++){e.fromBufferAttribute(i,r);const o=e.length();o>t&&(t=o)}}}),t}function zE(s){const e=[],t=[];let n=0;return s.traverse(i=>{if(i.isMesh&&i.geometry?.attributes?.position){const r=i.geometry,o=r.attributes.position;for(let a=0;a<o.count;a++)e.push(o.getX(a),o.getY(a),o.getZ(a));if(r.index){const a=r.index.array;for(let l=0;l<a.length;l++)t.push(n+a[l])}else for(let a=0;a<o.count;a++)t.push(n+a);n+=o.count}}),{vertices:e,indices:t}}function VE(s){const e=new Yi().setFromObject(s),t=new F;e.getCenter(t),s.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.translate(-t.x,-t.y,-t.z)}),s.position.set(0,0,0)}function HE(s,e){const t=new Ce().makeScale(e,e,e);s.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.applyMatrix4(t)}),s.scale.set(1,1,1)}const GE="1.3.22";let ef={},tf={},nf={},sf={},hr=()=>{},Id=!1;function WE(s){if(ef=s.hintMasterData,tf=s.regretMasterData,nf=s.takaramonoMasterData,sf=s.memoryFragmentsData,hr=s.addLog,!Id){const e=document.getElementById("dice3d-container");e&&(FE(e),Id=!0)}}function $E(){Gt({title:"ダイスロール",items:[{label:"ダイスロール",isTitle:!0},{label:"NA  攻撃判定",onClick:()=>an({command:"NA",showToast:!0})},{label:"NC  判定",onClick:()=>an({command:"NC",showToast:!0})},{label:"NM  姉妹への未練",onClick:()=>an({command:"NM",showToast:!0})},{label:"NME 敵への未練",onClick:()=>an({command:"NME",showToast:!0})},{label:"NMN 中立者への未練",onClick:()=>an({command:"NMN",showToast:!0})},{label:"NT  たからもの表",onClick:()=>an({command:"NT",showToast:!0})},{label:"NK  記憶のカケラ",onClick:()=>an({command:"NK",showToast:!0})},{label:"NH  暗示表",onClick:()=>an({command:"NH",showToast:!0})},{label:"1D10",onClick:()=>an({command:"1d10",showToast:!0})},{label:"1D100",onClick:()=>an({command:"1d100",showToast:!0})},{label:"直接入力",onClick:()=>{Gt({title:"🎲 ダイスロール",bodyHtml:`
                    <p style="text-align: center; margin-bottom: 15px;">ダイスコマンドを入力してください。</p>
                    <input type="text" id="diceCommandInput" value="5NC" 
                           class="modal-input-text" autofocus
                           inputmode="latin" style="ime-mode: disabled;">
                `,footerHtml:'<button id="executeDiceRollBtn" class="welcome-modal-close-btn">ダイスロール</button>',onRender:(n,i)=>{const r=n.querySelector("#diceCommandInput"),o=n.querySelector("#executeDiceRollBtn"),a=()=>{r.value&&an({command:r.value,showToast:!0}),i()};o.onclick=a,r.onkeydown=l=>{l.key==="Enter"&&a()},r.select()}})}}]})}function Pd(s,e){const{command:t,showToast:n,callback:i}=s;$l({dices:[{id:"tens",color:16729156},{id:"ones",color:35071}]},o=>{if(!o||o.length<2){console.error("D100ロールの結果取得に失敗しました。");return}const a=o.find(f=>f.id==="tens"),l=o.find(f=>f.id==="ones");if(!a||!l){console.error("D100ロールの結果取得に失敗しました（ダイスの役割を特定できません）。");return}const c=a.value===10?0:a.value,d=l.value===10?0:l.value;let u=c*10+d;u===0&&(u=100);const h=e(u,c,d);hr(h),n&&Et(h,3e3),i&&i(u,null,h)})}function an(s){const e=typeof s=="string"?s:s.command,t=typeof s=="object"&&s.callback?s.callback:null;if(!e)return;const n=e.toLowerCase().replace(/\s/g,""),i=/^(nm|nme|nmn|nt|nh|1?d10)$/,r=/^(\d*)?(nc|na)([+-]\d+)?$/,o=/^(1?d100)$/,a=n.match(r),l=n.match(i),c=n.match(o);if(a){const[,d,u,h]=a,f=h?parseInt(h,10):0,m=parseInt(d,10)||1,v=s.performer,p=v&&v.type==="enemy"?13369548:16777215,g={dices:Array.from({length:m},(_,y)=>({id:`system_d${y}`,color:p}))};$l(g,_=>{if(!_||_.length<m){console.error("3Dダイスロールの結果が不足しています。");return}const y=_.map(L=>L.value===0?10:L.value),x=y.map(L=>L+f),b=Math.max(...x),A=Math.min(...x);let C="",P="",w=null;b>=11?(C="大成功",u==="na"&&(P=`攻撃側任意（追加ダメージ${b-10}）`,w="任意")):b>=6?(C="成功",u==="na"&&(b>=10?(P="頭（なければ攻撃側任意）",w="頭"):b>=9?(P="腕（なければ攻撃側任意）",w="腕"):b>=8?(P="胴（なければ攻撃側任意）",w="胴"):b>=7?(P="脚（なければ攻撃側任意）",w="脚"):(P="防御側任意",w="任意"))):A<=1?(C="大失敗",u==="na"?P="味方か自身に命中":u==="nc"&&(P="使用パーツ全損")):C="失敗";const E=f>0?`+${f}`:f<0?`${f}`:"",O=`<span style="color: ${C==="大成功"||C==="成功"?"#007bff":"#dc3545"};">🎲 ${e.toUpperCase()} ＞ [${y.join(",")}]${E} ＞ ${b}[${x.join(",")}]<br>${C}<br>${P}</span>`;hr(O),s.showToast&&Et(O,2e3),t&&t(C,w,O,b)})}else if(l){const d=l[1];$l({dices:[{color:16777215}]},h=>{if(!h||h.length===0){console.error("3Dダイスロールの結果がありません。");return}const f=h[0].value,m=f===0?10:f;let v="";switch(d){case"nm":v=Xa("SI-","姉妹への未練表",m);break;case"nme":v=Xa("EN-","敵への未練表",m);break;case"nmn":v=Xa("NP-","中立者への未練表",m);break;case"nt":const p=nf[m];v=p?`🎲 たからもの表(${m})<br>【${p.name}】 ${p.description}`:`たからものデータ[${m}]が見つかりませんでした。`;break;case"nh":const g=ef[m];v=g?`🎲 暗示表(${m})<br>【${g.name}】 ${g.description}`:`暗示データ[${m}]が見つかりませんでした。`;break;case"1d10":case"d10":v=`🎲 D10 ＞ ${m}`;break}hr(v),typeof s=="object"&&s.showToast&&Et(v,3e3)})}else if(c)Pd(s,(d,u,h)=>`🎲 1D100 ＞ ${d} [${u*10} + ${h}]`);else if(n==="nk")Pd(s,d=>{const u=sf[d];return u?`🎲 記憶のカケラ表(${d})<br>【${u.name}】 ${u.description}`:`記憶のカケラデータ[${d}]が見つかりませんでした。`});else{let d=`「${e}」は無効な入力です。`;const u=/^(\d*)d(\d+)([+-]\d+)?$/,h=n.match(u);if(h){const f=h[1]?parseInt(h[1],10):1,m=parseInt(h[2],10),v=h[3]?parseInt(h[3],10):0;if(f>0&&m>0&&f<=100){const p=Array.from({length:f},()=>Math.floor(Math.random()*m)+1),g=p.reduce((x,b)=>x+b,0),_=g+v;let y=v>0?`+${v}`:v<0?`${v}`:"";d=`🎲 ${e.toUpperCase()} ＞ ${g}[${p.join(",")}]${y} ＞ ${_}`}else d=`「${e}」のダイスの数や種類が正しくありません。`}hr(d),(typeof s=="object"&&s.showToast||typeof s=="string")&&Et(d,3e3)}}function Xa(s,e,t){const n=tf;if(!n||Object.keys(n).length===0)return"未練データが見つかりませんでした。";const i=`${s}${String(t).padStart(2,"0")}`,r=n[i];return r?`🎲 ${e}(${i})<br>【${r.name}】[発狂:${r.madnessName}] ${r.madnessEffect}`:`未練データ[${i}]が見つかりませんでした。`}const XE="1.3.1";function Xo(s){if(!s)return console.error("[Converter] 変換対象のデータ(sourceData)が存在しません。"),null;try{const e={};e.name=s.Name||s.pc_name||s.data_title||"名称未設定",e.description=`${s.data_title||""} | ${s.Position_Name||""}（${s.MCLS_Name||""}・${s.SCLS_Name||""}）`,e.img="/images/noimage.png",e.category="ドール",e.initialArea=s.sex||"煉獄",e.baseActionValue=6;const t=s.pc_carma;if(t){const f=Xd();let m=null;for(const v in f){const p=f[v].name;if(t.includes(p)){m=p;break}}if(m){const v=Object.keys(f).find(p=>f[p].name===m);e.hint={key:v,name:m,description:f[v].description}}else e.hint={name:t,description:"マスタデータに詳細が見つかりませんでした。"}}else e.hint=null;e.position=s.Position_Name||"",e.mainClass=s.MCLS_Name||"",e.subClass=s.SCLS_Name||"";const n={1:"武装",2:"変異",3:"改造"};e.enhancementValue={bonus:n[s.ST_Bonus]||"武装"},e.skills=[],e.parts={head:[],arms:[],torso:[],legs:[],body:[]};const i={4:"head",5:"arms",6:"torso",7:"legs"},r={1:"オート",2:"アクション",3:"ジャッジ",4:"ダメージ",5:"ラピッド"},o={1:"攻撃",2:"攻撃",3:"行動値",4:"補助",5:"妨害",6:"防御",7:"移動"},a=s.Power_name?.length||0;let l=null,c=-1;c=s.Power_shozoku?.findIndex(f=>f&&f.includes("たから")),c>-1?l=s.Power_name[c]:(c=s.Power_memo?.findIndex((f,m)=>{const v=s.Power_hantei[m];return!["1","2","3"].includes(v)&&f&&f.includes("たからもの")}),c>-1&&(l=s.Power_name[c])),e.treasure=l;for(let f=0;f<a;f++){const m=s.Power_name[f];if(!m||m===l)continue;const v=s.Power_hantei[f],p=i[v];if(!Yt(m)){const g=s.Power_Type[f],_={name:m,timing:r[s.Power_timing[f]]||"オート",cost:s.Power_cost[f]||"なし",range:s.Power_range[f]||"自身",effect:s.Power_memo[f]||"効果不明",description:s.Power_memo[f]||"効果不明",category:["1","2","3"].includes(v)?"スキル":o[g]||"強化パーツ",tags:[]};jf(_)}["1","2","3"].includes(v)?e.skills.push(m):p?e.parts[p].push(m):e.skills.push(m)}if(l){const f=s.Power_hantei[c],m=i[f];m?e.parts[m].push(l):e.parts.body.push(l)}e.regrets=[];const d=s.roice_name?.length||0;for(let f=0;f<d;f++){const m=s.roice_name[f],v=s.roice_pos[f];if(m&&v){const p={name:`${m}への${v}`,points:parseInt(s.roice_damage[f],10)||3};m==="たからもの"&&e.treasure?(p.name=`${e.treasure}への${v}`,p.category="たからもの"):p.categoryKey="SI",e.regrets.push(p)}}e.memories=[];const u=Ql(),h=s.kakera_name?.length||0;for(let f=0;f<h;f++){const m=s.kakera_name[f],v=s.kakera_memo[f];if(!m)continue;let p=null;for(const _ in u){const y=u[_].name;if(m.includes(y)){p=y;break}}const g=p||m.trim();e.memories.push({name:g,memo:v})}return e.personalData={title:s.data_title||"",tags:s.pc_tags||"",race:s.shuzoku||"ドール",age:s.age||"",sex:s.sex||"",height:s.pc_height||"",weight:s.pc_weight||"",karma:s.pc_carma||"",hairColor:s.color_hair||"",eyeColor:s.color_eye||"",skinColor:s.color_skin||"",memo:s.pc_making_memo||""},e}catch(e){return console.error("キャラクターシートの変換中にエラーが発生しました:",e),null}}const qE="1.0.1";function rf(s){const t=Oo().maneuverCategories.find(n=>n.name===s);return t?t.slug:"other"}const jE="1.2.8";function YE(){const s=document.querySelectorAll('input[name="theme-switcher"]'),e=localStorage.getItem("theme")||"system";qa(e);const t=document.querySelector(`input[name="theme-switcher"][value="${e}"]`);t&&(t.checked=!0),s.forEach(l=>{l.addEventListener("change",c=>{const d=c.target.value;qa(d),localStorage.setItem("theme",d),console.log(`Theme changed to: ${d}`)})}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("theme")||"system")==="system"&&qa("system")});const i=document.querySelectorAll('input[name="autosave-switcher"]'),r=jb();document.querySelector(`input[name="autosave-switcher"][value="${r}"]`).checked=!0,i.forEach(l=>{l.addEventListener("change",c=>{const d=c.target.value==="true";Yb(d)})});const o=document.getElementById("loadStateFromFileBtn"),a=document.getElementById("fileInput");o&&a&&(o.onclick=()=>{a.value="",a.click()},a.onchange=l=>{const c=l.target.files[0];if(!c)return;const d=new FileReader;d.onload=u=>{const h=u.target.result;Kb(h)},d.readAsText(c)}),console.log("Settings Manager initialized.")}function qa(s){s==="system"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",s)}function KE(){let s=0;for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e),n=localStorage.getItem(t);if(t&&n){const i=(t.length+n.length)*2;s+=i}}return s}function ZE(){localStorage.removeItem("userLocalImages"),console.log("Local image cache cleared.")}const JE="1.11.52";let Uo=null;const Os=["奈落","地獄","煉獄","花園","楽園"];let ii=null,ir="宣言";const ql=s=>{const e=document.getElementById("maneuverMenu");e&&!e.contains(s.target)&&Uo&&!Uo.contains(s.target)&&Cr(),ii&&(s.target.closest(".target-selectable")||ii(null))};function Ld(s,e){ii&&(ii(null),ii=null),Cr(),Uo=e;const t=document.getElementById("maneuverMenu");t.innerHTML="";const n=[{id:"宣言",label:"宣言"},{id:"スキル",label:"スキル"},{id:"パーツ",label:"パーツ"},{id:"バフ",label:"バフ"},{id:"移動",label:"移動"},{id:"攻撃",label:"攻撃"},{id:"支援",label:"支援"},{id:"妨害",label:"妨害"},{id:"すべて",label:"すべて"}],i=document.createElement("div");i.className="maneuver-menu-header",i.innerHTML=`
        <span class="header-icon" id="menuHeaderIcon">🪪</span>
        <span class="header-title">${s.name}</span>
        <button class="header-close-btn">&times;</button>
    `,t.appendChild(i),i.querySelector("#menuHeaderIcon").onclick=()=>qo(s),i.querySelector(".header-close-btn").onclick=Cr;const r=document.createElement("div");r.className="maneuver-menu-filter-bar",n.forEach(d=>{const u=document.createElement("button");u.className="filter-btn",u.dataset.filterId=d.id,u.textContent=d.label,d.id===ir&&u.classList.add("is-active"),u.onclick=()=>{ir=d.id,r.querySelectorAll(".filter-btn").forEach(h=>h.classList.remove("is-active")),u.classList.add("is-active"),a()},r.appendChild(u)}),t.appendChild(r);const o=document.createElement("div");o.className="maneuver-menu-list-container",t.appendChild(o);const a=()=>{o.innerHTML="";const d=Sc(s),u=QE(d,ir,s);if(ir!=="パーツ"){const h=Oo().maneuverCategories.map(f=>f.name);u.sort((f,m)=>{const v=f.data.category==="行動値増加"?"行動値":f.data.category,p=m.data.category==="行動値増加"?"行動値":m.data.category;let g=h.indexOf(v);g===-1&&(g=h.length);let _=h.indexOf(p);return _===-1&&(_=h.length),g!==_?g-_:f.data.name.localeCompare(m.data.name)})}ir==="パーツ"?l(u,s):c(u,s)},l=(d,u)=>{["頭","腕","胴","脚","他"].forEach(f=>{const m=d.filter(v=>nb(v.data,u).includes(f));if(m.length>0){const v=document.createElement("div");v.className="maneuver-group",v.innerHTML=`<div class="group-header">${f}</div>`,m.forEach(p=>v.appendChild(Dd(p,u))),o.appendChild(v)}})},c=(d,u)=>{if(d.length===0){o.innerHTML='<div class="maneuver-item is-empty">対象のマニューバはありません</div>';return}d.forEach(h=>o.appendChild(Dd(h,u)))};a(),t.classList.add("is-visible"),setTimeout(()=>{document.addEventListener("click",ql)},0)}function Dd(s,e){const t=s.data,n=document.createElement("div");n.className="maneuver-item-new";const i=document.createElement("div");i.className="item-category-col";const r=t.category||"その他",o=`category-color-${rf(r)}`;n.classList.add(o.replace("bg-","")),i.classList.add(o),i.innerHTML=`<span>${r}</span>`;const a=document.createElement("div");if(a.className="item-icon-col item-passive-icon-col",s.isActiveBuff||t.timing==="オート"){let d=!1;if(s.isActiveBuff)d=!0;else{const u=s.isDamaged;["レギオン","ホラー","合流"].includes(t.name)?d=!0:t.effects&&t.effects.length>0&&(t.effects.some(m=>m.ref==="MODIFY_MAX_ACTION_VALUE_ON_DAMAGE")?u&&(d=!0):t.effects.some(v=>v.ref==="APPLY_BUFF"||v.ref==="REDUCE_MOVE_COST")&&!u&&(d=!0))}d&&(a.innerHTML='<span class="maneuver-icon">💡</span>')}const l=document.createElement("div");if(l.className="item-icon-col item-status-icon-col",s.isActiveBuff)l.innerHTML='<input type="checkbox" class="maneuver-checkbox" checked disabled>';else if(e.turnLimitedManeuvers.has(t.name)){const d=e.usedManeuvers.has(t.name);l.innerHTML=`<input type="checkbox" class="maneuver-checkbox" ${d?"checked":""} disabled>`}const c=document.createElement("div");return c.className="item-right-col",c.innerHTML=`
        <div class="item-row-1">
            <span class="item-name">【${t.name}】</span>
            <span class="item-stats">《${t.timing}/${t.cost}/${t.range}》</span>
        </div>
        <div class="item-row-2">${t.description_raw||""}</div>
    `,n.appendChild(i),n.appendChild(a),n.appendChild(l),n.appendChild(c),n.addEventListener("mouseenter",()=>hf(document.getElementById("maneuverMenu").getBoundingClientRect(),n.getBoundingClientRect(),e,s)),n.addEventListener("mouseleave",()=>fr()),s.isUsable?n.onclick=async d=>{if(d.stopPropagation(),t.tags.includes("攻撃")?Cr():setTimeout(()=>Cr(),0),t.name==="任意"){const f=`<div class="action-cost-form"><div class="action-cost-selector">${[1,2,3,4,5].map(v=>`<label><input type="radio" name="action-cost" value="${v}" ${v===1?"checked":""}> <span>${v}</span></label>`).join("")}</div></div>`;Gt({title:"消費する行動値を選択",bodyHtml:f,footerHtml:'<button id="applyActionCostBtn" class="welcome-modal-close-btn">適用</button>',onRender:(v,p)=>{v.querySelector("#applyActionCostBtn").onclick=()=>{const g=v.querySelector('input[name="action-cost"]:checked').value,_={...t,cost:String(parseInt(g,10))};Qn(e,_),p()}}});return}if(t.effects?.find(f=>f.ref==="TAKE_DAMAGE_FOR_ALLY")){const f=At().damageQueue.filter(v=>!v.applied&&v.target.type===e.type&&v.target.id!==e.id?Rr(e,t,[v.target]).hasTarget:!1);if(f.length===0){Ne("庇う対象がいません。");return}const m=await new Promise(v=>{const p=f.map(g=>({label:`【${g.sourceAction.sourceManeuver.name}】→ ${g.target.name} (${g.amount}点)`,onClick:()=>v(g)}));Gt({title:`【${t.name}】庇う対象を選択`,items:p,onRender:(g,_)=>{g.onclick=y=>{y.target===g&&(_(),v(null))}}})});m&&(Qn(e,t),Xb(m.id,e));return}if(t.timing==="ジャッジ"&&t.range!=="自身"){const f=af(e,t);if(f.length===0){Ne("妨害/支援の対象となるアクションがありません。");return}const m=f.map(v=>({label:`${v.performer.name}: 【${v.sourceManeuver.name}】${v.target?` → ${v.target.name}`:""}`,onClick:()=>{Qn(e,t,null,v)}}));Gt({title:`【${t.name}】の対象を選択`,items:m});return}if(t.tags.includes("移動")){if(t.range==="自身")tb(e,t);else{const f=await Nd(e,t,ql);if(f){const m=await new Promise(v=>{Gt({title:`【${t.name}】移動方向を選択`,items:[{label:"奈落方向へ",onClick:()=>v("奈落方向")},{label:"楽園方向へ",onClick:()=>v("楽園方向")}],onRender:p=>{p.onclick=g=>{g.target===p&&v(null)}}})});if(m){const v={...t,targetArea:m};Qn(e,v,f)}}}return}if(t.tags.includes("攻撃")){const f=await Nd(e,t,ql);f&&Qn(e,t,f);return}Qn(e,t)}:(n.classList.add("is-masked"),s.isDamaged&&n.classList.add("is-damaged")),n}function QE(s,e,t){let n=[];const i=["待機","任意"];switch(e){case"宣言":n=s.filter(r=>r.isUsable&&r.data.timing!=="オート");break;case"スキル":n=s.filter(r=>r.sourceType==="skill"&&!i.includes(r.data.name));break;case"パーツ":n=s.filter(r=>r.sourceType==="part"&&!i.includes(r.data.name));break;case"移動":n=s.filter(r=>r.data.tags.includes("移動")&&!i.includes(r.data.name));break;case"攻撃":n=s.filter(r=>r.data.tags.includes("攻撃")&&!i.includes(r.data.name));break;case"支援":n=s.filter(r=>(r.data.tags.includes("支援")||r.data.tags.includes("強化"))&&!i.includes(r.data.name));break;case"妨害":n=s.filter(r=>(r.data.tags.includes("妨害")||r.data.tags.includes("脆弱"))&&!i.includes(r.data.name));break;case"バフ":case"すべて":default:n=[...s];break}return(e==="バフ"||e==="すべて")&&t.activeBuffs&&t.activeBuffs.length>0&&t.activeBuffs.forEach(r=>{const o=Yt(r.source);if(o){const a=n.findIndex(l=>l.data.name===r.source&&!l.isActiveBuff);a>-1&&n.splice(a,1),n.some(l=>l.isActiveBuff&&l.sourceName===r.source)||n.push({data:o,sourceType:"active_buff",sourceName:r.source,isActiveBuff:!0,isUsable:!1})}}),e==="バフ"?n.filter(r=>r.isActiveBuff||r.data.timing==="オート"&&r.data.effects&&r.data.effects.some(o=>o.ref==="APPLY_BUFF"||o.ref==="REDUCE_MOVE_COST")):n}function qo(s){const e=s.category==="ドール",t=Oo(),n=t.classes;let i={A:0,M:0,R:0};if(e){const d=Object.keys(n).find(v=>n[v].name===s.mainClass),u=Object.keys(n).find(v=>n[v].name===s.subClass),h=d?n[d]:null,f=u?n[u]:null;h&&(i.A+=h.A||0,i.M+=h.M||0,i.R+=h.R||0),f&&(i.A+=f.A||0,i.M+=f.M||0,i.R+=f.R||0);const m=s.enhancementValue.bonus;m==="武装"&&(i.A+=1),m==="変異"&&(i.M+=1),m==="改造"&&(i.R+=1)}const l=(e?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(d=>`<option value="${d}" ${s.area===d?"selected":""}>${d}</option>`).join(""),c=`
    <div class="sheet-grid-container">
        <div class="sheet-img">
            <button class="sheet-edit-image-btn">✏️ 画像の変更</button>
            <img src="${s.img}" alt="${s.name}">
        </div>
        <div class="sheet-header">
            ${s.sheetId?`
            <div class="sheet-charasheet-link">
                <button class="sheet-link-btn" data-sheet-id="${s.sheetId}">保管所で開く ID: ${s.sheetId}</button>
                <button class="sheet-reload-btn" data-sheet-id="${s.sheetId}">保管所から再読込み</button>
            </div>
            `:""}
            ${s.personalData&&s.personalData.title?`
                <div class="sheet-char-title">${s.personalData.title}</div>
            `:""}
        </div>
        <div class="sheet-basic-info">
            <div class="sheet-input-group">
                <label>表示名</label>
                <input type="text" id="displayNameInput" value="${s.displayName}">
            </div>
            <div class="sheet-input-group">
                <label>名前</label>
                <input type="text" value="${s.originalName}" disabled>
            </div>
            ${e?`
            <div class="sheet-input-group">
                <label>享年</label>
                <input type="text" value="${s.personalData?.age||"未設定"}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>暗示</label>
                <input type="text" value="${s.hint?.key?`${s.hint.key}:${s.hint.name}`:"未設定"}" disabled>
            </div>`:""}
            <div class="sheet-input-group">
                <label>最大行動値</label>
                <input type="text" value="${s.maxActionValue}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>初期配置</label>
                <select id="areaSelector" class="sheet-select">${l}</select>
            </div>
        </div>
        <div class="sheet-section sheet-enhancement">
            <h4>基本情報</h4>
            <div class="sheet-input-group">
                <label>カテゴリ</label> <input type="text" value="${s.category}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>ポジション</label> <input type="text" value="${s.position}" disabled>
            </div>
            ${e?`
            <div class="sheet-input-group">
                <label>メインクラス</label> <input type="text" value="${s.mainClass}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>サブクラス</label> <input type="text" value="${s.subClass}" disabled>
            </div>
            <h4>強化点</h4>
             <div class="sheet-input-group">
                <label>ボーナス</label> <input type="text" value="${s.enhancementValue.bonus}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>武装</label> <input type="text" value="${i.A}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>変異</label> <input type="text" value="${i.M}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>改造</label> <input type="text" value="${i.R}" disabled>
            </div>`:""}
        </div>
        ${s.personalData?`
        <div class="sheet-section sheet-personal-data">
            <h4>パーソナルデータ</h4>
            <div class="sheet-input-group"><label>タグ</label><input type="text" value="${s.personalData.tags}" disabled></div>
            <div class="sheet-input-group"><label>種族</label><input type="text" value="${s.personalData.race}" disabled></div>
            <div class="sheet-input-group"><label>身長</label><input type="text" value="${s.personalData.height}" disabled></div>
            <div class="sheet-input-group"><label>髪の色</label><input type="text" value="${s.personalData.hairColor}" disabled></div>
            <div class="sheet-input-group"><label>瞳の色</label><input type="text" value="${s.personalData.eyeColor}" disabled></div>
            <div class="sheet-input-group"><label>肌の色</label><input type="text" value="${s.personalData.skinColor}" disabled></div>
            <h4>その他メモ</h4>
            <textarea class="sheet-textarea" rows="8" disabled>${s.personalData.memo}</textarea>
        </div>
        `:""}
        ${e?`
        <div class="sheet-section sheet-hint">
            <h4>暗示</h4>
            ${s.hint&&s.hint.name?`<p>${s.hint.key||""}<b>【${s.hint.name}】</b><br>${s.hint.description||"（詳細情報なし）"}</p>`:"<p>（暗示は設定されていません）</p>"}
        </div>
        <div class="sheet-section sheet-memory">
            <h4>記憶のカケラ</h4>
            ${(()=>{if(!s.memories||s.memories.length===0)return"<p>（記憶のカケラはありません）</p>";const d=Ql();return s.memories.map(u=>{const h=Object.entries(d).find(([f,m])=>m.name===u.name);if(h){const[f,m]=h,v=m.description,p=u.memo?`<br><span class="sheet-user-memo"><i>${u.memo}</i></span>`:"",g=`${f}【${u.name}】
${v}`;return`
                            <p>
                                <span class="memory-text-container">
                                    ${f}<b>【${u.name}】</b><br>${v}${p}
                                </span>
                                <button class="copy-description-btn" data-copy-text="${encodeURIComponent(g)}">📋</button>
                            </p>`}else{const f=u.memo?`<br><span class="sheet-user-memo"><i>${u.memo}</i></span>`:"";return`<p><span class="memory-text-container"><b>【${u.name}】</b> (カスタム)${f}</span></p>`}}).join("")})()}
        </div>
        <div class="sheet-section sheet-regrets">
            <h4>未練</h4>
            ${s.regrets&&s.regrets.length>0?s.regrets.map(d=>{const u=d.points||0,h="●".repeat(u)+"○".repeat(4-u),f=Jl(),m=Object.values(f).find(p=>d.name.includes(p.name)),v=m?`：${m.madnessName}：${m.madnessEffect}`:"";return`<p>${d.name}：${u}点 ${h}${v}</p>`}).join(""):"<p>（未練はありません）</p>"}
        </div>`:""}
        <div class="sheet-section sheet-skills">
            <h4>スキル</h4>
            ${s.skills.map(d=>{const u=Yt(d);if(!u)return`<div class="part-list-item">${d}</div>`;let h="スキル";if(u.id&&e){const f=u.id,m=f.substring(0,2),v=f.endsWith("-SP"),p=s.mainClass===s.subClass,g=Object.keys(t.positions).find(x=>t.positions[x].name===s.position),_=Object.keys(n).find(x=>n[x].name===s.mainClass),y=Object.keys(n).find(x=>n[x].name===s.subClass);v&&m===_?h="特化スキル":m===g?h="ポジション":m===_?h=p?"クラス":"メインクラス":m===y&&(h=p?"クラス":"サブクラス")}return`<div class="part-list-item"><span class="type">[${h}]</span> <b>【${d}】</b>《${u.timing}/${u.cost}/${u.range}》：${u.description||u.effect}</div>`}).join("")}
        </div>
        <div class="sheet-section sheet-parts">
            <h4>パーツ</h4>
            <div class="sheet-parts-grid">
                ${["head","arms","torso","legs","body"].map(d=>{if(!s.partsStatus[d]||s.partsStatus[d].length===0)return"";const u={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"体"}[d],h=s.partsStatus[d].map(f=>{const m=f.id.includes("_treasure"),v=m?Wf()["TR-00"]:Yt(f.name),p=v?.id?.startsWith("BP-"),g=m?"たからもの":p?"基本":"強化";if(!v)return`<div class="part-list-item"><span class="type">[${g}]</span> <b>${f.name}</b></div>`;const _=m?v.description_raw:v.description_raw||v.effect;return`<div class="part-list-item"><span class="type">[${g}]</span> <b>【${f.name}】</b>《${v.timing}／${v.cost}／${v.range}》：${_}</div>`}).join("");return`<div><h4>〈${u}〉</h4>${h}</div>`}).join("")}
            </div>
        </div>
    </div>
    `;Gt({title:"ネクロニカ 人形設計図",bodyHtml:c,onRender:(d,u)=>{d.querySelector(".modal-content").classList.add("sheet-modal-content"),d.querySelector(".modal-body").classList.add("sheet-modal-body");const h=()=>{yi(),u()};d.querySelector("#closeSimpleMenuModalBtn").onclick=h,d.onclick=_=>{_.target===d&&h()};const f=d.querySelector(".sheet-link-btn");f&&(f.onclick=_=>{_.stopPropagation();const y=f.dataset.sheetId;if(y){const x=`https://charasheet.vampire-blood.net/${y}`;window.open(x,"_blank","noopener,noreferrer")}}),d.querySelectorAll(".copy-description-btn").forEach(_=>{_.onclick=y=>{y.stopPropagation();const x=decodeURIComponent(_.dataset.copyText);navigator.clipboard.writeText(x).then(()=>{Et("コピーしました！",1500)}).catch(b=>{console.error("コピーに失敗しました",b),Et("コピーに失敗しました",1500)})}});const m=d.querySelector(".sheet-edit-image-btn");m&&(m.onclick=()=>{jl(s,u)});const v=d.querySelector("#areaSelector");v&&(v.onchange=_=>{const y=_.target.value;Kt(s.id,{area:y}),kt(),Tn(),yi()});const p=d.querySelector(".sheet-reload-btn");p&&(p.onclick=async()=>{const _=p.dataset.sheetId;if(_&&confirm(`キャラクター「${s.name}」のデータを保管所から再読込みします。
パーツの損傷状態などはリセットされますが、よろしいですか？`))try{Et(`ID: ${_} を再読込み中...`,2e3);const y=await of(_),x=Xo(y);if(x){const b=Nf(s.id,x);kt(),Tn(),Et(`「${b.name}」を更新しました。`,2e3),u(),qo(b)}else throw new Error("データの変換に失敗しました。")}catch(y){alert(`エラー: ${y.message}`)}});const g=d.querySelector("#displayNameInput");g&&(g.onchange=_=>{const y=_.target.value;y&&(Kt(s.id,{displayName:y}),Ki(s.id),Tn(),yi())})}})}function eb(s){const e=document.getElementById("undeadListModal"),t=e.querySelector(".modal-body");t.innerHTML="";const n=document.createElement("div");n.className="import-container";const i=document.createElement("button");i.className="import-btn",i.textContent="保管所から読込み",i.onclick=()=>{e.classList.remove("is-visible"),ib(s,Vf)},n.appendChild(i),t.appendChild(n);const r=document.createElement("div");r.className="undead-filter-container",["すべて",...["ドール","レギオン","ホラー","サヴァント"]].forEach(u=>{const h=document.createElement("button");h.className="filter-btn",h.textContent=u,h.dataset.category=u,u==="すべて"&&h.classList.add("active"),r.appendChild(h)}),t.appendChild(r);const l=document.createElement("div");l.className="undead-list-container",t.appendChild(l);const c=zs(),d=u=>{l.innerHTML="";for(const h in c){if(h.startsWith("//"))continue;const f=c[h];if(u==="すべて"||f.category===u){const m=document.createElement("div");m.className="undead-list-item",m.innerHTML=`<img src="${f.img}" alt="${f.name}"><div class="undead-list-item-name">${f.name}</div>`,m.onclick=()=>{const v=f.category==="レギオン"?5:1;for(let p=0;p<v;p++)Rf(h,s);kt(),e.classList.remove("is-visible"),Ur()},l.appendChild(m)}}};r.querySelectorAll(".filter-btn").forEach(u=>{u.onclick=()=>{r.querySelectorAll(".filter-btn").forEach(h=>h.classList.remove("active")),u.classList.add("active"),d(u.dataset.category)}}),d("すべて"),e.querySelector("#closeModalBtn").onclick=()=>e.classList.remove("is-visible"),e.onclick=u=>{u.target===e&&e.classList.remove("is-visible")},e.classList.add("is-visible")}function tb(s,e,t){const n=Os.indexOf(s.area);let i=1;if(e&&e.effects){const u=e.effects.find(h=>h.ref==="MOVE_CHARACTER");if(u&&u.params&&u.params.distance){const f=String(u.params.distance).split("-");i=parseInt(f[1]||f[0],10)}}const r={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"},o=[],a=s.type==="enemy"&&s.area==="奈落"&&s.category!=="レギオン"&&s.category!=="ホラー",l={label:">>> 逃走 >>>",isDisabled:!a,onClick:()=>{a&&Qn(s,{...e,name:"逃走",isEscapeAttempt:!0})}},c=s.type==="pc"&&s.area==="楽園"&&s.category!=="レギオン"&&s.category!=="ホラー",d={label:"<<< 逃走 <<<",isDisabled:!c,onClick:()=>{c&&Qn(s,{...e,name:"逃走",isEscapeAttempt:!0})}};e.effects.some(u=>u.ref==="MOVE_CHARACTER")&&o.push(l),Os.forEach((u,h)=>{const m=Math.abs(n-h)>i||h===n,p={label:h===n?`${u} (現在地)`:u,isDisabled:m,onClick:()=>{m||Qn(s,{...e,targetArea:u})}},g=r[u];g&&(p.class=`area-color-${g}`),o.push(p)}),e.effects.some(u=>u.ref==="MOVE_CHARACTER")&&o.push(d),Gt({title:`【${e.name}】移動先を選択`,items:o})}function Cr(){const s=document.getElementById("maneuverMenu");s&&s.classList.remove("is-visible"),fr(),Uo=null}function Sc(s){const e=At(),t=[];(s.skills||[]).forEach(a=>{const l=Yt(a);l&&t.push({data:l,sourceType:"skill",sourceName:a})}),Object.values(s.partsStatus||{}).flat().forEach(a=>{const l=Yt(a.name);l&&t.push({data:l,sourceType:"part",sourceName:a.name,isDamaged:a.damaged})});const n=Yt("待機");n&&t.push({data:n,sourceType:"common"});const i=Yt("任意");i&&t.push({data:i,sourceType:"common"});const r=Object.values(s.partsStatus).flat().some(a=>a.damaged),o=new Set;return document.getElementById("actionPhaseIndicator")?.classList.contains("active")&&o.add("アクション"),document.getElementById("rapidPhaseIndicator")?.classList.contains("active")&&o.add("ラピッド"),document.getElementById("judgePhaseIndicator")?.classList.contains("active")&&o.add("ジャッジ"),document.getElementById("damagePhaseIndicator")?.classList.contains("active")&&o.add("ダメージ"),t.map(a=>{const l=a.data;let c=!0;if(s.actionValue<=0&&l.timing!=="オート"&&(c=!1),a.isDamaged&&(c=!1),s.usedManeuvers.has(l.name)&&(c=!1),l.timing!=="オート"&&!o.has(l.timing)&&(c=!1),c&&l.effects&&l.effects.some(u=>u.params?.condition==="is_damaged")&&!r&&(c=!1),c&&l.timing==="ダメージ"&&l.effects?.some(u=>u.ref==="TAKE_DAMAGE_FOR_ALLY")&&(e.damageQueue.some(h=>{if(!h.applied&&h.target.type===s.type&&h.target.id!==s.id){const{hasTarget:f}=Rr(s,l,[h.target]);return f}return!1})||(c=!1)),c&&l.timing==="ジャッジ"&&(l.category==="支援"&&l.range==="自身"?e.actionQueue.some(u=>u.performer.id===s.id&&u.sourceManeuver.tags.includes("攻撃"))||(c=!1):l.range!=="自身"&&af(s,l).length===0&&(c=!1)),l.timing==="アクション"&&c&&(e.actorsForThisCount.has(s.id)||(c=!1)),c&&l.timing!=="オート"&&l.timing!=="ジャッジ"){const{hasTarget:d}=Rr(s,l);d||(c=!1)}return l.timing==="オート"&&(c=!1),{...a,isUsable:c}})}function nb(s,e){if(!e||!e.partsStatus)return"";for(const t in e.partsStatus)if(e.partsStatus[t].some(n=>n.name===s.name))return{head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"他"}[t]||"";return""}function ib(s,e){Gt({title:"保管所からキャラクターを読込み",bodyHtml:`
        <div class="import-method-selector">
            <input type="radio" name="import-method" id="import-by-new" value="new" checked>
            <label for="import-by-new">新着リスト</label>
            <input type="radio" name="import-method" id="import-by-idlist" value="idlist">
            <label for="import-by-idlist">IDリスト</label>
            <input type="radio" name="import-method" id="import-by-id" value="id">
            <label for="import-by-id">ID入力</label>
        </div>
        
        <div id="import-by-list-content">
            <div class="loader">リストを読み込んでいます...</div>
            <div class="sheet-list-container"></div>
        </div>

        <div id="import-by-id-content" style="display: none;">
            <p style="text-align: center; margin: 10px 0;">キャラクターシート保管所のURLまたはIDを入力してください。</p>
            <input type="text" id="sheetIdInput" class="modal-input-text" placeholder="例: 4634334">
            <p class="modal-note">※ https://charasheet.vampire-blood.net/xxxx の形式に対応しています。</p>
            <button id="importSheetBtn" class="import-btn">読込み</button>
        </div>
    `,onRender:(n,i)=>{const r=n.querySelector("#import-by-list-content"),o=n.querySelector("#import-by-id-content"),a=n.querySelector(".sheet-list-container"),l=n.querySelector(".loader"),c=n.querySelector("#sheetIdInput"),d=n.querySelector("#importSheetBtn"),u=async f=>{try{i(),Et(`ID: ${f} を読込み中...`,2e3);const m=await of(f),v=Xo(m);if(v)v.sheetId=f,e.addCharacterFromObject(v,s),kt(),Ur(),Et(`「${v.name}」を読み込みました。`,2e3);else throw new Error("データの変換に失敗しました。")}catch(m){alert(`エラー: ${m.message}`)}},h=f=>{l.style.display="block",a.innerHTML="",l.textContent=`${f==="id"?"ID":"新着"}リストを読み込み中...`,sb(f).then(m=>{l.style.display="none";const v=`
                        <table class="sheet-list-table">
                            <thead>
                                <tr><th>ID</th><th>タイトル / PC名</th><th>ポジション</th><th>クラス</th></tr>
                            </thead>
                            <tbody>
                                ${m.map(p=>{const g=p.title||"(タイトルなし)",_=p.Name?`<br><span class="pc-name-in-list">${p.Name}</span>`:"";return`
                                        <tr data-id="${p.id}">
                                            <td>${p.id}</td>
                                            <td>${g}${_}</td>
                                            <td>${p.Race}</td>
                                            <td>${p.Class}</td>
                                        </tr>
                                    `}).join("")}
                            </tbody>
                        </table>`;a.innerHTML=v,n.querySelectorAll(".sheet-list-table tbody tr").forEach(p=>{p.onclick=()=>u(p.dataset.id)})}).catch(m=>{l.textContent=`リストの読み込みに失敗しました: ${m.message}`})};n.querySelectorAll('input[name="import-method"]').forEach(f=>{f.onchange=m=>{const v=m.target.value;v==="new"?(r.style.display="block",o.style.display="none",h("%21")):v==="idlist"?(r.style.display="block",o.style.display="none",h("id")):(r.style.display="none",o.style.display="block",c.focus())}}),d.onclick=()=>{const f=c.value.trim().match(/(\d+)/)?.[1];f&&u(f)},c.onkeydown=f=>{if(f.key==="Enter"){const m=c.value.trim().match(/(\d+)/)?.[1];m&&u(m)}},h("%21")}})}async function sb(s="%21"){const t=[],n=document.querySelector("#import-by-list-content .loader"),i=r=>new Promise((o,a)=>{const l=`jsonpCallback_list_${Date.now()}_${r}`;window[l]=d=>{document.head.removeChild(c),delete window[l],o(d)};const c=document.createElement("script");c.onerror=()=>{delete window[l],document.head.removeChild(c),a(new Error(`Page ${r}の読込みに失敗`))},c.src=`https://charasheet.vampire-blood.net/list_nechro.js?order=${s}&page=${r}&callback=${l}`,c.charset="UTF-8",document.head.appendChild(c)});for(let r=0;r<6;r++)try{n&&(n.textContent=`リストを読み込み中... (${r+1} / 6ページ)`);const o=await i(r);t.push(...o),await new Promise(a=>setTimeout(a,200))}catch(o){throw console.error(`ページ ${r} の取得に失敗しました。処理を中断します。`,o),new Error(`ページ ${r} の取得中にエラーが発生しました。`)}return t}function of(s){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=r=>{document.head.removeChild(i),delete window[n],e(r)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${s}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}function jl(s,e){const t=()=>{const v=localStorage.getItem("userLocalImages");return v?JSON.parse(v):[]},n=v=>{const p=t();p.includes(v)||(p.push(v),localStorage.setItem("userLocalImages",JSON.stringify(p)))},i=async(v,p,g)=>{const _=v.target.files[0];if(_&&_.type.startsWith("image/"))try{const y=await r(_,300);n(y),g(),jl(s,e)}catch(y){console.error("画像のリサイズに失敗しました:",y),alert("画像の処理に失敗しました。別の画像で試してください。")}v.target.value=""};function r(v,p){return new Promise((g,_)=>{const y=new FileReader;y.readAsDataURL(v),y.onload=x=>{const b=new Image;b.src=x.target.result,b.onload=()=>{let A=b.width,C=b.height;if(A<=p&&C<=p){g(b.src);return}A>C?A>p&&(C*=p/A,A=p):C>p&&(A*=p/C,C=p);const P=document.createElement("canvas");P.width=A,P.height=C,P.getContext("2d").drawImage(b,0,0,A,C);let E;v.type==="image/png"||v.type==="image/gif"?E=P.toDataURL("image/png"):E=P.toDataURL("image/jpeg",.8),g(E)},b.onerror=A=>_(A)},y.onerror=x=>_(x)})}const o=["/images/doll/doll_01.png","/images/doll/doll_02.png","/images/doll/doll_03.png","/images/doll/doll_04.png","/images/doll/doll_05.png","/images/doll/doll_06.png","/images/doll/doll_12.png","/images/doll/doll_13.png","/images/doll/doll_14.png","/images/doll/doll_15.png","/images/doll/doll_16.png","/images/doll/doll_17.png"],a=qf(),l=t(),c=[...new Set([...o,...a])],u=[...l,...c].map(v=>`<div class="image-select-item" data-path="${v}"><img src="${v}" alt="image" loading="lazy"></div>`).join(""),m=`
        <div class="local-image-upload-container">
            <div class="button-group">
                <button id="localImageUploader" class="local-image-upload-btn">ローカルから読込み</button>
                <button id="clearImageCacheBtn" class="local-image-clear-btn">画像キャッシュ消去</button>
            </div>
            <input type="file" id="localImageInput" accept="image/*" style="display: none;">
            <p class="image-upload-note">画像は、300×300px にリサイズされてキャッシュします。</p>
            <p class="image-upload-note">画像キャッシュ使用量: ${(KE()/1024).toFixed(1)} KB / 5.0 MB</p>
        </div>
        <div class="image-select-grid">${u}</div>
    `;Gt({title:"画像を選択",bodyHtml:m,onRender:(v,p)=>{const g=v.querySelector("#localImageUploader"),_=v.querySelector("#localImageInput");g.onclick=()=>_.click(),_.onchange=x=>i(x,v,p);const y=v.querySelector("#clearImageCacheBtn");y&&(y.onclick=()=>{confirm("ローカルに保存した画像をすべて消去します。よろしいですか？")&&(ZE(),Et("画像キャッシュを消去しました。",2e3),p(),jl(s,e))}),v.querySelectorAll(".image-select-item").forEach(x=>{x.onclick=()=>{const b=x.dataset.path;Kt(s.id,{img:b}),kt(),p(),e();const A=Ft(s.id);A&&qo(A)}})}})}function af(s,e){const t=At(),n=Os.indexOf(s.area),i=e.range;if(typeof i!="string"&&typeof i!="number")return[];const r=i.toString().split("～"),o=parseInt(r[0],10),a=parseInt(r[1]||r[0],10);return isNaN(o)?[]:t.actionQueue.filter(l=>{if(l.checked)return!1;const c=l.performer,d=Os.indexOf(c.area);if(d===-1)return!1;const u=Math.abs(n-d);return!(u<o||u>a||e.category==="支援"&&s.type!==c.type||e.category==="妨害"&&s.type===c.type)})}function Rr(s,e,t=null){const n=e.range;if(!n||["自身","効果参照","なし","すべて"].includes(n)||e.timing==="オート")return{hasTarget:!0,targets:[]};let i=0;const r=String(n).toString().split("～"),o=parseInt(r[0],10),a=parseInt(r[1]||r[0],10)+i;if(isNaN(o))return{hasTarget:!0,targets:[]};const l=t||Ct().filter(u=>!u.isDestroyed&&!u.hasWithdrawn),c=Os.indexOf(s.area),d=[];for(const u of l){if(u.id===s.id&&n!=="0"||s.type===u.type&&e.tags.includes("攻撃"))continue;const h=Os.indexOf(u.area);if(h===-1)continue;const f=Math.abs(c-h);f>=o&&f<=a&&d.push(u)}return{hasTarget:d.length>0,targets:d}}function rb(s,e,t){const a=(s.type==="pc"?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(l=>({label:l+(s.area===l?" (現在地)":""),isDisabled:s.area===l,onClick:()=>{Kt(s.id,{area:l}),kt()}}));Gt({title:`${s.name} の配置先を選択`,items:a})}async function Nd(s,e,t){return ii&&ii(null),new Promise(n=>{const i=a=>{ii=null,document.querySelectorAll(".target-selectable").forEach(l=>{l.classList.remove("target-selectable"),l.onclick=null}),document.removeEventListener("click",t),n(a)};ii=i;const{targets:r}=Rr(s,e);if(r.length===0){Ne("＞ 射程内に有効なターゲットがいません。"),i(null);return}r.length>0&&uf(r);const o=new Set(r.map(a=>a.id));document.querySelectorAll(".char, .marker").forEach(a=>{o.has(a.dataset.id)&&(a.classList.add("target-selectable"),a.onclick=l=>{l.stopPropagation(),i(Ft(a.dataset.id))})}),setTimeout(()=>document.addEventListener("click",t),0)})}function ob(s,e,t,n){const i=At(),r=i.actionQueue[n];if(!r)return;let o=0;const a=[],l=[],c=t.effects.find(p=>p.ref==="GENERIC_ATTACK");if(c&&c.params&&c.params.attack_bonus){const p=parseInt(c.params.attack_bonus,10);isNaN(p)||(o+=p,a.push(`【${t.name}】自体 (${p>0?"+":""}${p})`))}Sc(s).filter(p=>p.data.timing==="オート"&&!p.isDamaged).forEach(p=>{p.data.effects&&p.data.effects.forEach(g=>{if(g.ref==="APPLY_BUFF"&&g.params.stat==="attackCheckBonus"){const _=g.params.value||0;o+=_,a.push(`${s.name}の【${p.data.name}】(${_>0?"+":""}${_})`)}})}),s.activeBuffs&&s.activeBuffs.length>0&&s.activeBuffs.forEach(p=>{if(p.stat==="attackCheckBonus"){const g=p.value||0;o+=g,a.push(`${s.name}の【${p.source}】 (+${g})`)}}),i.judgeQueue.forEach(p=>{const g=p.sourceManeuver,_=g.effects.find(y=>y.ref==="GENERIC_JUDGE_MOD");if(_){let y=!1;if((p.judgeTarget&&p.judgeTarget.id===r.id||_.params.target==="self_roll"&&p.performer.id===s.id)&&(y=!0),y){const x=_.params.value||0,b=`${p.performer.name}の【${g.name}】`;x>0?(o+=x,a.push(`${b} (+${x})`)):x<0&&(o+=x,l.push(`${b} (${x})`))}}});const u=a.length>0?a.map(p=>`<div class="modifier-item">${p}</div>`).join(""):'<div class="modifier-none">- なし -</div>',h=l.length>0?l.map(p=>`<div class="modifier-item">${p}</div>`).join(""):'<div class="modifier-none">- なし -</div>',f=o>0?`+${o}`:o<0?`${o}`:"",m=`
        <div class="attack-confirm-summary">
            ${s.name}【${t.name}】 → ${e.name}
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《支援》</div>
            <div class="modifier-list">${u}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《妨害》</div>
            <div class="modifier-list">${h}</div>
        </div>
    `,v=`<button id="executeDiceRollBtn" class="welcome-modal-close-btn">🎲 NA${f} 🎲</button>`;Gt({title:"ジャッジ",bodyHtml:m,footerHtml:v,onRender:(p,g)=>{p.querySelector("#executeDiceRollBtn").onclick=()=>{pf(n,o),g()}}})}const ab="2.5.16";let Ss=!1,fn=null;function lb(){console.log("Interaction Manager initialized.")}function cb(){document.addEventListener("click",r=>{fn&&!fn.contains(r.target)&&(fn.classList.remove("actions-visible"),fn=null)}),jo(),ub(),Fd(document.getElementById("pcContainer")),Fd(document.getElementById("enemyContainer")),db();const s=document.getElementById("startBattleBtn");s&&(s.onclick=()=>{s.disabled||Lb()}),document.getElementById("countdownBtn").onclick=()=>Nb(),document.getElementById("endTurnBtn").onclick=()=>mf();const e=document.getElementById("resetBattleBtn");e&&(e.onclick=async()=>{confirm("バトルパートを終了して、戦闘開始直前の状態に戻します。よろしいですか？")&&(Et("盤面を初期状態に戻しています...",2e3),wc(),await Jb(),kt(),Ir(),Et("初期状態に戻りました。",2e3))});const t=document.getElementById("saveStateToFileBtn");t&&(t.onclick=ew);const n=document.getElementById("saveStateBtn");n&&(n.onclick=Tc);const i=document.getElementById("clearStateBtn");i&&(i.onclick=()=>{confirm("ブラウザに保存されたセッションデータを削除します。この操作は取り消せません。よろしいですか？")&&Mf()})}function jo(){document.querySelectorAll(".char").forEach(s=>{const e=s.dataset.id;if(!e)return;const t=Ft(e);if(t){if(At().isStarted)s.onclick=n=>{if(n.stopPropagation(),Ss){Ss=!1;return}Ld(t,s)};else{s.onclick=d=>{if(d.stopPropagation(),Ss){Ss=!1;return}fn===s?(s.classList.remove("actions-visible"),fn=null):(fn&&fn.classList.remove("actions-visible"),s.classList.add("actions-visible"),fn=s)};const n=s.querySelector('[data-action="delete"]');n&&(n.onclick=d=>{d.stopPropagation(),If(e),kt(),Ur(),fn=null});const i=s.querySelector('[data-action="details"]');i&&(i.onclick=d=>{d.stopPropagation(),qo(t)});const r=s.querySelector('[data-action="place"]');r&&(r.onclick=d=>{d.stopPropagation(),rb(t)});const o=s.querySelector('[data-action="move-left"]');o&&(o.onclick=d=>{d.stopPropagation(),Zl(e,"left"),kt(),fn=null});const a=s.querySelector('[data-action="move-right"]');a&&(a.onclick=d=>{d.stopPropagation(),Zl(e,"right"),kt(),fn=null});const l=Ct().filter(d=>d.type===t.type),c=l.findIndex(d=>d.id===e);o&&(o.disabled=c===0),a&&(a.disabled=c===l.length-1)}s.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.add("hover-highlight")},s.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.remove("hover-highlight")}}}),document.querySelectorAll(".marker").forEach(s=>{const e=s.dataset.id;if(!e)return;const t=Ft(e);t&&(At().isStarted&&(s.onclick=n=>{n.stopPropagation(),Ld(t,s)}),s.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),s.classList.add("hover-highlight")},s.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),s.classList.remove("hover-highlight")})}),document.querySelectorAll(".add-char-card").forEach(s=>{const e=s.closest(".char-container");if(e){const t=e.id==="pcContainer"?"pc":"enemy";s.onclick=null,s.onclick=()=>{eb(t)}}})}function Fd(s){let e=!1,t,n,i;s.addEventListener("mousedown",o=>{e=!0,Ss=!1,t=o.pageX-s.offsetLeft,n=s.scrollLeft,i=0});const r=()=>{e=!1,Math.abs(i)>5&&(Ss=!0)};s.addEventListener("mouseleave",r),s.addEventListener("mouseup",r),s.addEventListener("mousemove",o=>{if(!e)return;o.preventDefault(),i=o.pageX-s.offsetLeft-t,s.scrollLeft=n-i})}function ub(){const s=document.getElementById("diceRoller");let e=!1,t,n,i,r;s.addEventListener("mousedown",l=>{i=l.clientX,r=l.clientY,e=!0,t=l.clientX-s.getBoundingClientRect().left,n=l.clientY-s.getBoundingClientRect().top,s.style.cursor="grabbing",document.addEventListener("mousemove",o),document.addEventListener("mouseup",a),l.preventDefault()});function o(l){e&&(s.style.left=`${l.clientX-t}px`,s.style.top=`${l.clientY-n}px`)}function a(){e=!1,s.style.cursor="grab",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a)}s.addEventListener("click",l=>{Math.abs(l.clientX-i)>3||Math.abs(l.clientY-r)>3||$E()})}function db(){document.querySelectorAll(".accordion-header").forEach(s=>{s.closest("#maneuverMenu")||s.addEventListener("click",()=>{const e=s.closest(".accordion-container");e&&e.classList.toggle("is-closed")})})}function hb(s){const e=document.getElementById("madnessModal"),t=document.getElementById("confirmMadnessBtn"),n=new Map;document.querySelectorAll(".pc-regret-group").forEach(i=>{i.querySelectorAll(".regret-item").forEach(r=>{r.onclick=()=>{i.querySelectorAll(".regret-item").forEach(o=>o.classList.remove("is-selected")),r.classList.add("is-selected"),n.set(i.dataset.pcId,r.dataset.regretId),t.disabled=n.size!==s.length}})}),t.disabled=!0,t.onclick=()=>{n.forEach((i,r)=>Pf(r,i)),e.classList.remove("is-visible"),gf()}}function fb(s){Ub(s)}function pb(s){const t=At().actionQueue[s];if(!t)return;const{performer:n,target:i,sourceManeuver:r}=t;r.tags.includes("攻撃")?ob(n,i,r,s):pf(s)}function mb(s){Bb(s)}function lf(s){const{damageQueue:e}=At(),t=e[s];if(!t||t.applied)return;const n=Ft(t.target.id);n&&_b(t,i=>{const r=()=>{Ob(s)};if(i<=0){Ne(`＞ ${n.name}への攻撃は完全に防がれ、ダメージはありませんでした。`),Yl(n.id),r();return}n.category==="レギオン"||Object.values(n.partsStatus).flat().filter(o=>!o.damaged).length<=i?(n.category==="レギオン"?(Ne(`レギオンへの攻撃！ ${i}体が失われます。`),Cc(n.id,null,i)&&Et(`${n.name}は完全破壊されました`)):(Ne(`＞ ${n.name}は残りパーツ数以上のダメージを受け、完全に破壊されました！`),Kt(n.id,{isDestroyed:!0}),Et(`${n.name}は完全破壊されました`)),Ki(n.id),Tn(),Yl(n.id),r()):gb(n,i,t.location,r)})}function gb(s,e,t,n){const i=document.getElementById("damageModal"),r=i.querySelector("#damageModalTitle"),o=i.querySelector("#damageModalInfo"),a=i.querySelector("#partsGridContainer"),l=i.querySelector("#confirmDamageBtn");r.textContent=`${s.name} へのパーツ損傷処理`,a.innerHTML="";let c=[];const d=()=>{o.textContent=`損傷させるパーツを ${e} 個選択してください (残り: ${e-c.length})`,l.disabled=c.length!==e};d();const u=s.category==="ホラー",h={頭:"head",腕:"arms",胴:"torso",脚:"legs",体:"body"},f=h[t]||null;if((u?["body"]:["head","arms","torso","legs","body"]).forEach(v=>{const p=s.partsStatus[v];if(p&&p.length>0){const g=document.createElement("div");g.className="part-location-group",g.dataset.location=v,g.innerHTML=`<h4>${Object.keys(h).find(y=>h[y]===v)||"他"}</h4>`;const _=document.createElement("div");_.className="parts-wrapper",p.forEach(y=>{const x=document.createElement("div");x.className="part-item",x.textContent=y.name,x.dataset.partId=y.id;const b=Yt(y.name);b&&(x.addEventListener("mouseenter",()=>hf(i.getBoundingClientRect(),x.getBoundingClientRect(),s,{data:b,isDamaged:y.damaged})),x.addEventListener("mouseleave",()=>fr())),y.damaged?x.classList.add("is-damaged"):x.onclick=()=>{const A=y.id,C=c.indexOf(A);C>-1?(x.classList.remove("is-selected"),c.splice(C,1)):c.length<e&&(x.classList.add("is-selected"),c.push(A)),d()},_.appendChild(x)}),g.appendChild(_),a.appendChild(g)}}),f&&a.querySelector(`.part-location-group[data-location="${f}"]`)?.classList.add("is-highlighted"),f&&s.partsStatus[f]){const v=s.partsStatus[f].filter(p=>!p.damaged);v.length>0&&v.length<=e&&v.forEach(p=>{const g=a.querySelector(`.part-item[data-part-id="${p.id}"]`);g&&!g.classList.contains("is-selected")&&(g.classList.add("is-selected"),c.push(p.id))})}d(),l.onclick=()=>{c.forEach(v=>Cc(s.id,v)),i.classList.remove("is-visible"),fr(),Ki(s.id),Tn(),n&&n()},document.getElementById("closeDamageModalBtn").onclick=()=>{i.classList.remove("is-visible"),fr()},i.classList.add("is-visible")}function vb(s){const e=At(),t=e.actionQueue.length>0&&e.actionQueue.every(r=>r.checked);if(!(e.phase==="DAMAGE_RESOLUTION"||t&&e.damageQueue.some(r=>!r.applied)))return;const i=e.damageQueue.find(r=>r.target.id===s&&!r.applied);if(i){const r=e.damageQueue.indexOf(i);lf(r)}else console.warn(`Damage marker clicked for ${s}, but no applicable damage found in the queue.`)}function _b(s,e){const{sourceAction:t,target:n,amount:i,rollValue:r,damageBonusSources:o}=s,{performer:a,sourceManeuver:l}=t;let c=0;const d=[];if(r>=11){const g=r-10;c+=g,d.push(`<div>【大成功】+${g}</div>`)}o&&o.forEach(g=>{c+=g.value,d.push(`<div>【${g.source}】+${g.value}</div>`)}),a.activeBuffs&&a.activeBuffs.forEach(g=>{g.stat==="damageBonus"&&g.duration==="until_damage_applied"&&(c+=g.value||0,d.push(`<div>【${g.source}】+${g.value}</div>`))});let u=0;const h=[];n.activeBuffs&&n.activeBuffs.forEach(g=>{g.stat==="defense"&&g.duration==="until_damage_applied"&&(u+=g.value||0,h.push(`<div>${n.name}の【${g.source}】-${g.value}</div>`))}),Object.values(n.partsStatus).flat().map(g=>g.damaged?null:Yt(g.name)).filter(g=>g&&g.timing==="オート"&&g.effects).forEach(g=>{const _=g.effects.find(y=>y.ref==="GENERIC_DEFENSE"||y.ref==="APPLY_PASSIVE_DEFENSE");if(_){const y=_.params.value||0;u+=y,h.push(`<div>${n.name}の【${g.name}】-${y}</div>`)}});const m=Math.max(0,i+c-u),v=`
        <div class="attack-confirm-summary">
            ${a.name}【${l.name}】 → ${n.name}
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《基本ダメージ》</div>
            <div class="modifier-list"><div>【${l.name}】${i}</div></div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《追加ダメージ》</div>
            <div class="modifier-list">${d.length>0?d.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《防御》</div>
            <div class="modifier-list">${h.length>0?h.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `,p=`<button id="executeDamageBtn" class="welcome-modal-close-btn">${s.location}：${m}点を確定</button>`;Gt({title:"ダメージ計算",bodyHtml:v,footerHtml:p,onRender:(g,_)=>{g.querySelector("#executeDamageBtn").onclick=()=>{e(m),_()}}})}const yb="1.12.75";let Ui=null;const Ao=["奈落","地獄","煉獄","花園","楽園"],ja=Array.from({length:26},(s,e)=>20-e);function xb(){console.log("UI Manager initialized.")}function Mb(){document.documentElement.style.setProperty("--col-count",ja.length),document.documentElement.style.setProperty("--row-count",Ao.length);const s=document.getElementById("battleWrap");s.innerHTML="";const e=document.createElement("div");e.className="current-action-cell",e.id="currentActionValue",s.appendChild(e),ja.forEach((n,i)=>{const r=document.createElement("div");r.className="col-header",r.textContent=n,r.dataset.col=String(n),r.style.gridColumn=(i+2).toString(),r.style.gridRow="1",s.appendChild(r)});const t={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"};Ao.forEach((n,i)=>{const r=document.createElement("div");r.className="row-header";const o=t[n];o&&r.classList.add(`area-color-${o}`),r.textContent=n,r.style.gridColumn="1",r.style.gridRow=(i+2).toString(),s.appendChild(r)}),Ao.forEach((n,i)=>{ja.forEach((r,o)=>{const a=document.createElement("div");a.className="cell";const l=t[n];l&&a.classList.add(`cell-area-${l}`),r===0?a.classList.add("col-zero"):r<0&&a.classList.add("col-negative"),a.dataset.row=String(i),a.dataset.col=String(r),a.style.gridColumn=(o+2).toString(),a.style.gridRow=(i+2).toString(),s.appendChild(a)})})}function Et(s,e=2e3){const t=document.getElementById("toast-notification");t&&(Ui&&clearTimeout(Ui),t.onclick=()=>{t.classList.remove("is-visible"),Ui&&(clearTimeout(Ui),Ui=null),t.onclick=null},t.innerHTML=s,t.classList.add("is-visible"),Ui=setTimeout(()=>{t.classList.remove("is-visible"),t.onclick=null,Ui=null},e))}function kt(){const s=Ct(),e=s.filter(n=>n.type==="pc"),t=s.filter(n=>n.type==="enemy");Ud(document.getElementById("pcContainer"),e,"pc"),Ud(document.getElementById("enemyContainer"),t,"enemy"),Tn(),jo()}function Ud(s,e,t){s.innerHTML="";const n=!At().isStarted;if(e.forEach(i=>{const r=cf(i,n);s.appendChild(r)}),n){const i=document.createElement("div");i.className="add-char-card";const r=t==="pc"?"姉妹ドール":"NCの手駒";i.innerHTML=`<div class="add-char-text-2">UNDEAD</div><div class="add-char-plus">+</div><div class="add-char-text">${r}を追加</div>`,s.appendChild(i)}}function cf(s,e){let t="";s.isMentallyBroken&&(t+=" status-mental-collapse"),s.isDestroyed&&(t+=" status-destroyed"),s.hasWithdrawn&&(t+=" status-withdrawn");let n="";(s.isDestroyed||s.hasWithdrawn)&&(n+=" is-inactive");const i=document.createElement("div");i.className=`char ${n.trim()}`,i.dataset.id=s.id;const r=`
        <div class="card-actions-overlay">
            <div class="card-action-row">
                <button class="card-action-btn" data-action="place">移動</button>
                <button class="card-action-btn" data-action="details">詳細</button>
                <button class="card-action-btn" data-action="delete">削除</button>
            </div>
            <div class="card-action-row">
                <button class="card-action-btn" data-action="move-left">←</button>
                <button class="card-action-btn" data-action="move-right">→</button>
            </div>
        </div>`;let o="";s.regrets&&s.regrets.length>0&&(o=`<div class="char-madness">${s.regrets.map(m=>{const v=m.points||0;let p="";for(let _=0;_<4;_++)p+=_<v?"◆":"◇";return`<div class="${v>=4?"is-madness":""}">${p}</div>`}).join("")}</div>`);let a="";if(s.partsStatus){let f="";if(s.category==="ドール"||s.category==="サヴァント"){const m=["head","arms","torso","legs","body"],v={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"他"},p=s.treasure;f=m.map(g=>{if(!s.partsStatus[g]||s.partsStatus[g].length===0)return"";const y=s.partsStatus[g].map(x=>{const b=Yt(x.name),A=b&&b.id&&b.id.startsWith("BP-"),C=x.name===p;return{part:x,isBasicPart:A,isTreasure:C,damaged:x.damaged}}).sort((x,b)=>x.isTreasure!==b.isTreasure?x.isTreasure?-1:1:x.isBasicPart!==b.isBasicPart?x.isBasicPart?1:-1:x.damaged!==b.damaged?x.damaged?-1:1:0).map(x=>x.isTreasure?x.damaged?"☆":"★":x.isBasicPart?x.damaged?"□":"■":x.damaged?"〇":"●").join("");return g==="body"&&!s.partsStatus[g].some(x=>x.name!==p)?"":`<div>${y}：${v[g]}</div>`}).filter(g=>g!=="").join("")}else if(s.category==="ホラー"){const m=Object.values(s.partsStatus).flat(),v=[],p=[];m.forEach(y=>{const x=Yt(y.name);x&&x.id&&x.id.startsWith("BP-")?v.push(y):p.push(y)});let g="";if(p.length>0){const y=p.filter(b=>b.damaged).length;g=`<div>${"〇".repeat(y)+"●".repeat(p.length-y)}：強</div>`}let _="";if(v.length>0){const y=v.filter(b=>b.damaged).length;_=`<div>${"□".repeat(y)+"■".repeat(v.length-y)}：基</div>`}f=_+g}else if(s.category==="レギオン"){const m=s.isDestroyed?0:s.stackCount,v=Math.ceil(m/10),p=[];for(let g=0;g<v;g++){const _=g*10,y=Math.min(m-_,10);y>0&&p.push(`<div>${"●".repeat(y)}：</div>`)}f=p.reverse().join("")}f&&(a=`<div class="char-parts-status">${f}</div>`)}const l=s.category==="レギオン";let c="";l?c=`<div class="char-stack-count">${s.isDestroyed?0:s.stackCount}体</div>`:c=`<div class="char-parts-count">${s.isDestroyed?0:Object.values(s.partsStatus).flat().filter(m=>!m.damaged).length}</div>`;const d=`
        <div class="char-action-display">
            <div class="char-action-value">${s.actionValue}</div>
            <div class="char-action-subtext">行動値</div>
            <div class="char-action-subtext">最大:${s.maxActionValue}</div>
        </div>
    `,h=`area-color-${{奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"}[s.area]||""}`;return i.innerHTML=`
        <div class="char-status-overlays ${t.trim()}">
            <div class="status-tape status-tape-mental-collapse">BREAKDOWN 精神崩壊 BREAKDOWN</div>
            <div class="status-tape status-tape-destroyed">DESTROYED 完全破壊 DESTROYED</div>
            <div class="status-tape status-tape-withdrawn">ESCAPE 戦場離脱 ESCAPE</div>
        </div>
        <div class="char-img-container">
            <div class="char-bubble-marker-container" data-id="${s.id}"></div>
            <div class="char-action-marker-container" data-id="${s.id}"></div>
            <div class="damage-prompt-container"></div> 
            <div class="char-area-name ${h}">${s.area}</div>
            <div class="char-name-overlay">${s.name}</div>
            ${c}
            ${d}
            ${o} 
            ${a} 
            <img src="${s.img}" alt="${s.name}">
        </div>
        <div class="char-stats">
        </div>
        ${e?r:""}
    `,i}function Sb(s){if(!s)return;const{actionValue:e,area:t,id:n,name:i,img:r,stackCount:o}=s,a=document.getElementById("battleWrap"),l=Ao.indexOf(t);if(l===-1)return;const c=a.querySelector(`.cell[data-row="${l}"][data-col="${e}"]`);if(!c)return;const d=document.createElement("span");d.className="marker",d.dataset.id=n,d.dataset.name=i;const u=new Image;if(u.src=r,u.className="marker-img",u.alt=i,d.appendChild(u),s.category==="レギオン"&&o>1){const h=document.createElement("div");h.className="marker-stack-count",h.textContent=`x${o}`,d.appendChild(h)}c.appendChild(d)}function uf(s){if(!s||s.length===0)return;const e=s[0].id,t=document.querySelector(`.char[data-id="${e}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}function Ne(s){const e=document.getElementById("logEntries");if(!e)return;const t=document.createElement("div");t.className="log-entry",t.innerHTML=s,e.appendChild(t),e.scrollTop=e.scrollHeight}function Eb(){const s=document.getElementById("madnessModal"),e=document.getElementById("madnessModalBody");e.innerHTML="";const t=Ct().filter(n=>n.type==="pc"&&!n.isDestroyed&&!n.hasWithdrawn);if(t.length===0){gf();return}t.forEach(n=>{const i=document.createElement("div");i.className="pc-regret-group",i.dataset.pcId=n.id,i.innerHTML=`<h4>${n.name}の未練 (1つ選択)</h4>`,n.regrets.forEach(r=>{const o=document.createElement("div");o.className="regret-item",o.dataset.regretId=r.id,o.textContent=`${r.name} (狂気点: ${r.points})`,i.appendChild(o)}),e.appendChild(i)}),s.classList.add("is-visible"),hb(t)}function Ki(s){const e=Ft(s);if(!e)return;const t=document.querySelector(`.char[data-id="${s}"]`);if(t){const n=!At().isStarted,i=cf(e,n);t.replaceWith(i),jo()}}function Tn(){document.getElementById("battleWrap").querySelectorAll(".marker").forEach(t=>t.remove()),Ct().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).forEach(t=>{Sb(t)}),jo()}function Ir(){const{isStarted:s,turn:e,count:t,activeActors:n,potentialActors:i,shouldScrollToCount:r}=At(),o=document.getElementById("timingArea"),a=document.getElementById("battleWrap");o&&(s?(o.classList.remove("setup-phase"),o.classList.add("battle-phase"),a.classList.remove("setup-phase")):(o.classList.add("setup-phase"),o.classList.remove("battle-phase"),a.classList.add("setup-phase")));const l=document.getElementById("turnIndicator").textContent;String(e)!==l&&s&&Ne(`【ターン ${e} 開始】`);const c=document.getElementById("turnIndicator"),d=document.getElementById("countIndicator"),u=document.getElementById("currentActionValue");if(!s){c.textContent="-",d.textContent="-",u.textContent="カウント -",document.querySelectorAll(".highlight-char").forEach(f=>f.classList.remove("highlight-char")),a.querySelectorAll(".highlight-col").forEach(f=>f.classList.remove("highlight-col")),Bo(At());return}if(c.textContent=e,d.textContent=t,u.textContent=`カウント ${t}`,document.querySelectorAll(".char").forEach(f=>{f.classList.toggle("highlight-char",n.some(m=>m.id===f.dataset.id))}),a.querySelectorAll(".highlight-col").forEach(f=>f.classList.remove("highlight-col")),a.querySelectorAll(`.cell[data-col="${t}"], .col-header[data-col="${t}"]`).forEach(f=>f.classList.add("highlight-col")),r){const f=document.querySelector(".battle-grid-scroll-wrapper"),m=a.querySelector(`.col-header[data-col="${t}"]`),v=a.querySelector(".row-header");if(f&&m&&v){const p=v.offsetWidth,_=m.offsetLeft-p;f.scrollTo({left:_,behavior:"smooth"})}Db()}n.length>0&&uf(n),Bo(At()),Ec(),Ct().forEach(f=>{if(ff(f.id,"char-bubble-marker-container"),s&&!f.isDestroyed&&!f.hasWithdrawn){const m=Sc(f);m.some(y=>y.data.timing==="アクション"&&y.isUsable)&&Es(f.id,"ACT","char-bubble-marker-container","#36c","white"),m.some(y=>y.data.timing==="ラピッド"&&y.isUsable)&&Es(f.id,"RAP","char-bubble-marker-container","#c63","white"),m.some(y=>y.data.timing==="ジャッジ"&&y.isUsable)&&Es(f.id,"JDG","char-bubble-marker-container","#396","white"),m.some(y=>y.data.timing==="ダメージ"&&y.isUsable)&&Es(f.id,"DMG","char-bubble-marker-container","#933","white")}}),bc()}function Bo(s){if(!s)return;const{phase:e,activeActors:t,actionQueue:n,rapidQueue:i,judgeQueue:r,damageQueue:o}=s,a={action:document.getElementById("actionPhaseIndicator"),rapid:document.getElementById("rapidPhaseIndicator"),judge:document.getElementById("judgePhaseIndicator"),damage:document.getElementById("damagePhaseIndicator")},l=n.some(x=>!x.checked),c=i.some(x=>!x.checked),d=r.some(x=>!x.checked),u=o.some(x=>!x.applied),h=t.length>0,f=n.length>0,m=!c&&!d&&!l;let v=!1;f&&!m&&(v=!0);const p=!h&&l,g=e==="DAMAGE_RESOLUTION"||n.every(x=>x.checked)&&u;a.action.classList.toggle("active",h),a.rapid.classList.toggle("active",v),a.judge.classList.toggle("active",p),a.damage.classList.toggle("active",g);const _=document.getElementById("countdownBtn"),y=document.getElementById("endTurnBtn");!_||!y||(_.disabled=!0,y.disabled=!0,e==="COUNT_END"?_.disabled=!1:e==="TURN_END_PREPARATION"&&(y.disabled=!1))}function Ec(){const{actionQueue:s,rapidQueue:e,judgeQueue:t,damageQueue:n}=At();Ya("actionDeclarationList",s,"アクション宣言"),Ya("rapidDeclarationList",e,"ラピッド宣言"),Ya("judgeDeclarationList",t,"ジャッジ宣言"),bb(n),document.querySelectorAll(".damage-prompt-button").forEach(r=>r.remove());const i={};n.forEach(r=>{if(!r.applied){const o=r.target.id;i[o]||(i[o]=0),i[o]+=r.amount}});for(const r in i)i[r]>0&&df(r,i[r]);document.getElementById("actionDeclarationArea").classList.toggle("is-closed",s.length===0),document.getElementById("rapidDeclarationArea").classList.toggle("is-closed",e.length===0),document.getElementById("judgeDeclarationArea").classList.toggle("is-closed",t.length===0),document.getElementById("damageProcessingArea").classList.toggle("is-closed",n.length===0)}function Ya(s,e,t){const n=document.getElementById(s);if(!n)return;const i=n.closest(".accordion-container"),r=i?i.querySelector(".accordion-header"):null;if(!r)return;const o=At(),a=o.activeActors.length>0,l=o.rapidQueue.some(u=>!u.checked),c=o.judgeQueue.some(u=>!u.checked);let d=r.querySelector("span");if(!d){const u=r.textContent;r.innerHTML="",d=document.createElement("span"),d.textContent=u,r.appendChild(d)}e.length===0?(n.innerHTML="",d.textContent=t+"はありません"):(d.textContent=t,n.innerHTML="",e.forEach((u,h)=>{const f=document.createElement("label");f.className="action-queue-item";let m=!1;s==="rapidDeclarationList"?m=a:s==="judgeDeclarationList"?m=a||l:s==="actionDeclarationList"&&(m=a||l||c),u.checked&&(m=!0),m&&f.classList.add("is-disabled"),u.checked&&f.classList.add("is-checked");const v=document.createElement("input");v.type="checkbox",v.checked=u.checked,v.disabled=!0,m||(s==="rapidDeclarationList"?f.onclick=()=>fb(h):s==="judgeDeclarationList"?f.onclick=()=>mb(h):s==="actionDeclarationList"&&(f.onclick=()=>pb(h))),f.appendChild(v);const p=document.createElement("span");let g=`<b>${u.performer.name}</b>: 【${u.summary.name}】`;u.target&&(g+=` → <b>${u.target.name}</b>`),p.innerHTML=g,f.appendChild(p),n.appendChild(f)}))}function bb(s){const e=document.getElementById("damageProcessingList");if(!e)return;const t=e.closest(".accordion-container"),n=t?t.querySelector(".accordion-header"):null,i=At().phase==="DAMAGE_RESOLUTION";s.length===0?(e.innerHTML="",n&&(n.textContent="ダメージ処理はありません")):(n&&(n.textContent="ダメージ処理"),e.innerHTML="",s.forEach((r,o)=>{const a=document.createElement("label");a.className="action-queue-item damage-item";const l=!i||r.applied;l&&a.classList.add("is-disabled"),r.applied&&a.classList.add("is-checked");const c=document.createElement("input");c.type="checkbox",c.checked=r.applied,c.disabled=!0;const d=document.createElement("span");d.innerHTML=`<b>${r.target.name}</b>: ${r.location}: <b>${r.amount}</b>点`,!r.applied&&!l&&(a.onclick=()=>lf(o)),a.appendChild(c),a.appendChild(d),e.appendChild(a)}))}function df(s,e){const t=document.querySelector(`.char[data-id="${s}"]`);if(!t)return;const n=t.querySelector(".damage-prompt-container");let i=n.querySelector(".damage-prompt-button");i||(i=document.createElement("button"),i.className="damage-prompt-button",n.appendChild(i),i.style.pointerEvents="auto",i.onclick=r=>{r.stopPropagation(),vb(s)}),i.dataset.damage=e,i.textContent=`ダメージ ${e}`}function Yl(s){const e=document.querySelector(`.char[data-id="${s}"]`);if(e){const t=e.querySelector(".damage-prompt-button");t&&t.remove()}}function Ur(){const s=document.getElementById("startBattleBtn");if(!s)return;const e=Ct(),t=e.some(i=>i.type==="pc"),n=e.some(i=>i.type==="enemy");s.disabled=!(t&&n)}function hf(s,e,t,n){const i=document.getElementById("maneuverCard"),r=n.data,o=r.category==="行動値増加"?"行動値":r.category||"その他",a=`category-color-${rf(o)}`,l=wb(r),c=Tb(r,t);let d="";r.source&&(d=r.source.book||"",r.source.page&&(d+=` (p${r.source.page})`),r.source.errata&&(d+=`, エラッタ ${r.source.errata}`)),i.innerHTML=`
        <div class="card-category-bar ${a}">${o}</div>
        <div class="card-content">
            <div class="card-source-header">${l}</div>
            <div class="card-header">
                <span class="card-location-text">${c}</span>
                <span class="card-maneuver-name">【${r.name}】</span>
            </div>
            <div class="card-stats">
                <div><span>T</span>${r.timing}</div>
                <div><span>C</span>${r.cost}</div>
                <div><span>R</span>${r.range}</div>
            </div>
            <div class="card-row"><strong>効果</strong> ${r.description_raw||"---"}</div>
            ${r.flavor_text?`<div class="card-row" style="font-style: italic;">${r.flavor_text}</div>`:""}
            <div class="card-row"><strong>出典</strong> ${d||"---"}</div>
        </div>
    `,i.style.display="flex";const u=i.getBoundingClientRect();let h=40,f=e.top+100;f+u.height>window.innerHeight&&(f=e.top-u.height-40),f<10&&(f=20),i.style.left=`${h}px`,i.style.top=`${f}px`}function wb(s){if(!s.id)return"不明";const e=Oo(),t=s.id,n=t.substring(0,2);if(e.positions[n])return`ポジションスキル：${e.positions[n].name}`;if(e.classes[n])return t.endsWith("-SP")?`特化スキル：${e.classes[n].name}`:`クラススキル：${e.classes[n].name}`;if(n==="BP")return"基本パーツ";const i=t.substring(0,1),r=t.substring(1,2);return e.enhancementTypes[i]&&["1","2","3"].includes(r)?`強化パーツ：${r}レベル${e.enhancementTypes[i].name}`:t.startsWith("P")?`手駒専用パーツ：悪意${parseInt(t.substring(1,2),10)/2}`:e.pawnSkills[n]?e.pawnSkills[n].name:e.commonAction[n]?e.commonAction[n].name:"スキル"}function Tb(s,e){if(!s.id||!e.partsStatus)return"";const t={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"体"};for(const n in e.partsStatus)if(e.partsStatus[n].some(i=>i.name===s.name))return`${t[n]||"体"}：`;return"スキル："}function fr(){document.getElementById("maneuverCard").style.display="none"}function Ab(s){const e=document.getElementById("version-info");if(e&&s){const n=["app","ui-manager","interaction-manager","character-manager","battle-logic","data-handler","ui-helpers","dice-roller","dice-3d","state-manager","menu-builder","settings-manager","character-converter"].map(i=>`<span class="responsive-item">${i}: v${s[i]||"N/A"}</span>`).join('<span class="hide-on-mobile"> | </span>');e.innerHTML=n}}function Gt(s){const e=document.getElementById("simpleMenuModal"),t=document.getElementById("simpleMenuModalTitle"),n=document.getElementById("simpleMenuModalBody"),i=document.getElementById("simpleMenuModalFooter"),r=document.getElementById("closeSimpleMenuModalBtn");if(!e||!t||!n||!i||!r)return;t.textContent=s.title||"",n.innerHTML=s.bodyHtml||"",i.innerHTML=s.footerHtml||"",i.style.display=s.footerHtml?"block":"none",n.classList.remove("attack-confirm-body"),s.bodyHtml&&s.bodyHtml.includes("attack-confirm-summary")&&n.classList.add("attack-confirm-body"),s.items&&s.items.forEach(a=>{const l=document.createElement("div");a.isTitle||(l.textContent=a.label,l.classList.add("maneuver-item"),a.class&&l.classList.add(...a.class.split(" ")),a.isDisabled&&l.classList.add("is-masked"),l.onclick=()=>{a.isDisabled||(o(),a.onClick&&a.onClick())}),n.appendChild(l)});const o=()=>e.classList.remove("is-visible");r.onclick=o,e.onclick=a=>{a.target===e&&o()},s.onRender&&s.onRender(e,o),e.classList.add("is-visible")}function Cb(s){const e=document.getElementById("loading-overlay"),t=document.getElementById("loading-message"),n=document.getElementById("progress-bar-fill");!e||!t||!n||(t.textContent=s,n.style.width="0%",e.classList.add("is-visible"))}function Ka(s,e,t){const n=document.getElementById("loading-message"),i=document.getElementById("progress-bar-fill");if(!n||!i)return;const r=e>0?s/e*100:0;n.textContent=`キャラクターを読み込み中... (${s} / ${e})`,t&&(n.textContent+=`
「${t}」`),i.style.width=`${r}%`}function Rb(){const s=document.getElementById("loading-overlay");s&&s.classList.remove("is-visible")}function Es(s,e,t,n="rgba(0,0,0,0.7)",i="white"){const r=document.querySelector(`.${t}[data-id="${s}"]`);if(!r)return;const o=document.createElement("div");o.className="bubble-marker",o.textContent=e,o.style.backgroundColor=n,o.style.borderColor=i,r.appendChild(o)}function ff(s,e){const t=document.querySelector(`.${e}[data-id="${s}"]`);t&&(t.innerHTML="")}function bc(){const{actionQueue:s,isStarted:e}=At();Ct().forEach(n=>ff(n.id,"char-action-marker-container")),e&&s.forEach(n=>{if(!n.checked){const{performer:i,target:r,sourceManeuver:o}=n;if(i){let a="ACT",l="#666";o.tags.includes("攻撃")?(a="攻撃",l="#c33"):o.tags.includes("移動")?(a="移動",l="#36c"):o.category==="支援"||o.tags.includes("支援")?(a="支援",l="#396"):(o.category==="妨害"||o.tags.includes("妨害"))&&(a="妨害",l="#c63"),Es(i.id,a,"char-action-marker-container",l,"white")}r&&Es(r.id,"TGT","char-action-marker-container","#a33","white")}})}const Ib="1.20.80";let ge={isStarted:!1,turn:1,count:0,activeActors:[],potentialActors:[],actorsForThisCount:new Set,phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],currentAction:null,shouldScrollToCount:!1};function Yo(s){ge.count=s,ge.shouldScrollToCount=!0,Fb(),ri()}function Pb(){const s=ge.actionQueue;let e=new Map;s.forEach(t=>{const{performer:n,target:i,sourceManeuver:r}=t;n&&n.skills.forEach(o=>{const a=Yt(o);!a||a.timing!=="オート"||!a.effects||a.effects.forEach(l=>{if(l.ref!=="APPLY_CONDITIONAL_BUFF")return;const c=l.params;let d=!1;switch(c.trigger){case"attacking_same_target_as_ally_this_count":i&&(d=s.some(h=>h.performer.type==="pc"&&h.performer.id!==n.id&&h.target?.id===i.id));break;case"attacking_with_melee":const u=r.effects?.find(h=>h.ref==="GENERIC_ATTACK");u&&u.params.attack_type==="白兵"&&(d=!0);break}d&&(c.buffs.forEach(u=>{Pr(n.id,{source:a.name,stat:u.stat,value:u.value,duration:"onetime_next_action"})}),e.has(n.id)||e.set(n.id,new Set),e.get(n.id).add(a.name))})})}),e.forEach((t,n)=>{const i=Ft(n);i&&Ne(`${i.name}の【${Array.from(t).join("】【")}】が適用されます。`)}),kt()}function Lb(){ge.isStarted=!0,ge.turn=1;const s=Ct(),e=Math.max(0,...s.map(t=>t.actionValue));kt(),Yo(e)}function At(){return{...ge}}function Db(){ge.shouldScrollToCount=!1}function Qn(s,e,t=null,n=null){const i={id:`decl_${Date.now()}_${Math.random()}`,performer:s,target:t,sourceManeuver:e,timing:e.timing,isResolved:!1,summary:{name:e.name,cost:e.cost,range:e.range,description:e.description}},r=isNaN(Number(e.cost))?0:Number(e.cost);switch(r>0&&Kt(s.id,{actionValue:s.actionValue-r}),e.appliedBonuses&&e.appliedBonuses.length>0&&Ne(`オート効果: 【${e.appliedBonuses.join("】【")}】が適用されます。`),s.turnLimitedManeuvers.has(e.name)&&s.usedManeuvers.add(e.name),e.timing){case"ラピッド":ge.rapidQueue.push(i),Ne(`◆[ラピッド] ${s.name}が【${e.name}】を宣言。`);break;case"ジャッジ":i.judgeTarget=n,ge.judgeQueue.push(i),Ne(`◆[ジャッジ] ${s.name}が【${e.name}】を宣言。`);break;case"ダメージ":Ne(`◆[ダメージ] ${s.name}が【${e.name}】を宣言。`);let o=!1;const a=e.effects?.find(c=>c.ref==="GENERIC_DEFENSE");if(a){const c=a.params.value||0;Pr(s.id,{source:e.name,stat:"defense",value:c,duration:"until_damage_applied"}),o=!0}const l=e.effects?.find(c=>c.ref==="INCREASE_DAMAGE_DEALT");if(l)if(ge.damageQueue.find(d=>d.sourceAction.performer.id===s.id&&!d.applied)){const d=l.params.value||0;Pr(s.id,{source:e.name,stat:"damageBonus",value:d,duration:"until_damage_applied"}),o=!0}else Ne(`＞ 【${e.name}】の効果対象となるダメージが見つかりません。`);o&&Ki(s.id);break;case"アクション":default:Kt(s.id,{hasActedThisCount:!0}),ge.activeActors=ge.activeActors.filter(c=>c.id!==s.id),ge.actionQueue.push(i),Ne(`◆[アクション] ${i.performer.name}が【${e.name}】を宣言。`),bc();break}kt(),Tn(),ri()}function ri(){if(!ge.isStarted){ge.phase="SETUP",ge.activeActors=[],Ir();return}const e=Array.from(ge.actorsForThisCount).filter(l=>{const c=Ft(l);return c&&!c.hasActedThisCount&&c.actionValue>0}).map(l=>Ft(l));ge.potentialActors=e;const t=e.filter(l=>l.type==="enemy");t.length>0?ge.activeActors=t:ge.activeActors=e.filter(l=>l.type==="pc");const n=ge.phase,i=ge.activeActors.length>0,r=ge.rapidQueue.some(l=>!l.checked),o=ge.actionQueue.some(l=>!l.checked),a=ge.damageQueue.some(l=>!l.applied);if(i)ge.phase="ACTION_DECLARATION";else if(r)ge.phase="RAPID_RESOLUTION";else if(o)ge.phase="ACTION_RESOLUTION";else if(a)ge.phase="DAMAGE_RESOLUTION";else{const l=Ct().some(c=>c.actionValue>0&&!c.isDestroyed&&!c.hasWithdrawn);ge.count>0&&l?ge.phase="COUNT_END":ge.phase="TURN_END_PREPARATION"}n==="ACTION_DECLARATION"&&ge.phase!=="ACTION_DECLARATION"&&Pb(),Ir()}function Nb(){Ct().forEach(t=>t.hasActedThisCount=!1);const e=Ct().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).map(t=>t.actionValue).filter(t=>t<ge.count);if(e.length>0){const t=Math.max(...e);Yo(t)}else mf()}function Fb(){ge.phase="ACTION_DECLARATION",ge.actionQueue=[],ge.rapidQueue=[],ge.judgeQueue=[],ge.damageQueue=[],bc();const s=Ct().filter(e=>!e.isDestroyed&&!e.hasWithdrawn);ge.actorsForThisCount=new Set(s.filter(e=>e.actionValue>=ge.count).map(e=>e.id)),s.forEach(e=>e.hasActedThisCount=!1),Ec(),Bo(ge),yi()}async function Ub(s){const e=ge.rapidQueue[s];!e||e.checked||(await vf(e),e.checked=!0,ri())}async function pf(s,e=0){const t=ge.actionQueue[s];if(!t||t.checked)return;const{targets:n}=Rr(t.performer,t.sourceManeuver);if(t.target&&!n.some(r=>r.id===t.target.id)){Ne(`解決失敗: ${t.target.name} は射程外です。`),t.checked=!0,ge.actionQueue.every(o=>o.checked)?Bd():ri();return}await vf(t,e),t.checked=!0,ge.actionQueue.every(r=>r.checked)?Bd():ri()}function Bb(s){const e=ge.judgeQueue[s];e&&!e.checked&&(e.checked=!0,Ne(`＞ [ジャッジ] ${e.performer.name}の【${e.sourceManeuver.name}】を解決(チェック)しました。`)),ri()}function mf(){ge.phase="MADNESS_PHASE",Ne("【ターン終了】各ドールは未練に狂気点を1点加えます。"),Eb(),Bo(ge)}function gf(){ge.turn++,Ct().forEach(t=>{t.activeBuffs&&(t.activeBuffs=t.activeBuffs.filter(n=>n.duration!=="end_of_turn"))}),Lf();const s=Ct().filter(t=>!t.isDestroyed&&!t.hasWithdrawn),e=s.length>0?Math.max(0,...s.map(t=>t.actionValue)):0;kt(),Yo(e)}function Ob(s){const e=ge.damageQueue[s];if(e&&!e.applied){e.applied=!0,e.sourceAction&&(e.sourceAction.damageApplied=!0);const t=e.target.id;Ic(t,"until_damage_applied"),Ki(t)}ri()}function kb(){ge.damageQueue.some(e=>!e.applied)?(ge.phase="DAMAGE_RESOLUTION",Ne("--- ダメージ解決フェーズ開始 ---")):(ge.phase="COUNT_END",Ne("--- カウント終了 ---"))}function Bd(){ge.moveQueue.length>0&&(Ne("--- 移動解決フェーズ ---"),Df(ge.moveQueue),ge.moveQueue=[],Tn()),kb(),ri()}function zb(s,e){let t=JSON.stringify(s);return t=t.replace(/"\$params\.(\w+)"/g,(n,i)=>e.hasOwnProperty(i)?JSON.stringify(e[i]):"null"),JSON.parse(t)}async function Od(s,e){let t=[];const n=Xf(s.ref);if(!n)return console.warn(`[Engine] 汎用効果 '${s.ref}' の定義が見つかりません。`),t;const i=s.params||{};for(const r of n.actions){const o=zb(r,i);switch(o.action_type){case"attack_roll":const{hit:a,on_hit:l}=await Gb(o,e);a&&l&&t.push(...l);break;case"move_character":Vb(o,e);break;case"apply_buff":Hb(o,e);break;case"escape_roll":_f(o,e);break;case"modify_action_value":$b(o,e);break;default:Ne(`＞ [Engine] 未対応のアクションタイプ: ${o.action_type}`),console.warn(`[Engine] 未対応のアクションタイプです: ${o.action_type}`)}}return t}function Vb(s,e){const{performer:t,target:n,declaration:i}=e,r=s.target==="self"?t:n;if(!r){Ne("＞ [Engine] 移動対象が見つかりません。");return}const o=i.sourceManeuver.targetArea;if(!o){Ne("＞ [Engine] 移動先または移動方向が指定されていません。");return}let a=1;if(s.distance){const f=String(s.distance).split("-");a=parseInt(f[1]||f[0],10)}const c=Math.max(0,a-0);if(c===0){Ne(`${r.name}の移動は妨害されました。`);return}const d=["奈落","地獄","煉獄","花園","楽園"],u=d.indexOf(r.area);let h;if(o.endsWith("方向")){let f=u;o==="奈落方向"?f=Math.max(0,u-c):f=Math.min(d.length-1,u+c),h=d[f]}else h=o;i.timing==="ラピッド"?(Ne(`[ラピッド解決] ${r.name}が${h}へ移動しました。`),Kt(r.id,{area:h}),Tn(),Ki(r.id)):(Ne(`移動予約: ${r.name} が ${h} へ`),ge.moveQueue.push({characterId:r.id,targetArea:h}))}function Hb(s,e){const{performer:t}=e;if(s.buffs){let i=!1;if(s.condition==="attacking_same_target_as_ally_this_count"){const r=e.target?.id;r&&(i=ge.actionQueue.some(o=>o.performer.type==="pc"&&o.performer.id!==t.id&&o.target?.id===r))}i&&(Ne(`＞ 【${e.declaration.sourceManeuver.name}】の効果が発動！`),s.buffs.forEach(r=>{Pr(t.id,{source:e.declaration.sourceManeuver.name,stat:r.stat,value:r.value,duration:"onetime_next_action"}),Ne(`＞ (次の攻撃判定に+${r.value}, 与ダメージに+${r.value})`)}));return}const n=s.buff?s.buff:s;switch(n.stat){case"maxActionValue":Kt(t.id,{baseActionValue:(t.baseActionValue||6)+n.value}),Ne(`${t.name}の最大行動値が${n.value>0?"+":""}${n.value}されました。`);break;case"attackCheckBonus":t.activeBuffs.push({source:e.declaration.sourceManeuver.name,stat:n.stat,value:n.value,duration:n.duration}),Ne(`${t.name}は【${e.declaration.sourceManeuver.name}】の効果で、ターン終了まで攻撃判定に+${n.value}の修正を得た！`);break;default:Ne(`＞ [Engine] 未対応のバフタイプ: ${n.stat}`),console.warn(`[Engine] 未対応のバフタイプです: ${n.stat}`)}}async function Gb(s,e){const{performer:t,target:n,declaration:i}=e,r=e.totalAttackBonus||0,o=`NA${r>=0?`+${r}`:r}`,a=s.on_hit_effects||s.on_hit||[];return new Promise(l=>{an({command:o,showToast:!0,performer:t,callback:async(c,d,u,h)=>{if(c==="大失敗"){Ne("＞ 攻撃は大失敗！誤爆の対象を選択してください。");const m=[];m.push(t);const v=n?n.area:t.area,p=Ct().filter(_=>_.type===t.type&&_.id!==t.id&&_.area===v&&!_.isDestroyed&&!_.isWithdrawn);m.push(...p);const g=await new Promise(_=>{const y=m.map(x=>({label:x.name,onClick:()=>_(x)}));Gt({title:"大失敗：誤爆対象を選択",items:y})});if(g){const _=a.includes("EXPLOSION")?["EXPLOSION"]:[];ge.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,target:g,amount:s.damage||0,location:"任意",sourceAction:i,applied:!1,rollValue:h||0,onHitEffects:_}),Ne(`＞ ${g.name}に誤爆！ 【${s.damage||0}】点のダメージ！`)}l({hit:!1,on_hit:[]});return}const f=c.includes("成功");if(f){Ne(`＞ ${n.name}に命中！`);let m=s.damage||0;ge.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,target:n,amount:m,location:d,sourceAction:i,applied:!1,rollValue:h||0,onHitEffects:a}),Ne(`＞ 【${m}】点のダメージ！`)}else Ne("＞ 攻撃は失敗しました。");Ic(t.id,"onetime_next_action"),l({hit:f,on_hit:a})}})})}async function vf(s,e=0){const{performer:t,sourceManeuver:n}=s;if(Ne(`解決: ${t.name} の【${n.name}】`),n.isEscapeAttempt){await _f({},{performer:t});return}if(!n.effects||n.effects.length===0){n.name==="待機"?Ne(`${t.name}は状況をうかがっている。`):Ne("効果の定義がありません。");return}const i={performer:s.performer,target:s.target,declaration:s,totalAttackBonus:e};let r=[];for(const o of s.sourceManeuver.effects){const a=await Od(o,i);r.push(...a)}if(r.length>0){Ne(`＞ 追加効果(${r.join(",")})が発動！`);for(const o of r)await Od({ref:o,params:{}},i)}}function _f(s,e){const{performer:t}=e;Ne(`＞ ${t.name}が逃走判定を行います...`),an({command:"NC",showToast:!0,callback:n=>{n.includes("成功")?(Ne(`＞ 逃走成功！ ${t.name}は戦場から離脱しました。`),Kt(t.id,{hasWithdrawn:!0})):Ne(`＞ 逃走失敗！ ${t.name}は戦場に留まります。`),kt(),Tn(),ri()}})}function Wb(s,e){ge.isStarted=!0,ge.turn=s,kt();const t=Math.max(0,...e.map(n=>n.actionValue));Yo(t)}function wc(){ge={isStarted:!1,turn:1,count:0,activeActors:[],phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],currentAction:null,shouldScrollToCount:!1}}function $b(s,e){const t=e.target;if(!t){Ne("＞ 行動値変更の対象がいません。");return}const n=s.value||0;n!==0&&(Kt(t.id,{actionValue:t.actionValue+n}),n<0?Ne(`＞ ${t.name} は転倒した！ (行動値${n})`):Ne(`＞ ${t.name} の行動値が ${n>0?"+":""}${n} された。`),Tn(),Ki(t.id))}function Xb(s,e){const t=ge.damageQueue.find(n=>n.id===s);if(t&&e){const n=t.target;t.target=e,Ne(`＞ 【庇う】 ${e.name} が ${n.name} へのダメージを肩代わりしました。`),Ec(),Yl(n.id),df(e.id,t.amount)}}const qb="2.1.11",ks="nechronica-battle-session-v2",yf="nechronica-autosave-enabled";let Rs=!1,Kl=!1;function jb(){return Rs=localStorage.getItem(yf)!=="false",console.log(`State Manager initialized. Auto-save is ${Rs?"ON":"OFF"}.`),Rs}function Yb(s){Rs=s,localStorage.setItem(yf,s),s&&Tc()}function yi(){Kl||!Rs||Tc()}function Tc(){try{const s=At(),e=Ct();let t={};try{t=JSON.parse(localStorage.getItem(ks))||{}}catch{t={}}const n=!s.isStarted;let i=Array.isArray(t.initialStates)?[...t.initialStates]:[];e.forEach(a=>{const l=i.findIndex(c=>c.charId===a.id);if(n||l===-1){const c={charId:a.id,sourceType:a.sheetId?"sheet":"template",id:a.sheetId||a.templateId,type:a.type,img:a.img,area:a.area,stackCount:a.stackCount,regrets:a.regrets.map(d=>({name:d.name,points:d.points})),displayName:a.displayName};l===-1?i.push(c):i[l]=c}});const r=new Set(e.map(a=>a.id));i=i.filter(a=>r.has(a.charId));const o={turn:n?0:s.turn,initialStates:i,currentStates:e.map(a=>({charId:a.id,area:a.area,stackCount:a.stackCount,displayName:a.displayName,actionValue:a.actionValue,actionValue:a.actionValue,isDestroyed:a.isDestroyed||!1,hasWithdrawn:a.hasWithdrawn||!1,damagedPartNames:Object.values(a.partsStatus).flat().filter(l=>l.damaged).map(l=>l.name),usedManeuvers:Array.from(a.usedManeuvers)}))};localStorage.setItem(ks,JSON.stringify(o)),Rs?console.log("Session auto-saved."):Et("現在の状態を保存しました",2e3)}catch(s){console.error("状態の保存に失敗しました:",s)}}async function Kb(s){if(!s){Et("ファイルが空か、読み込みに失敗しました。",2e3);return}try{const e=JSON.parse(s);e.initialStates&&e.currentStates||e.characters&&Array.isArray(e.characters)?await xf(e):Et("セッションデータ形式ではありません。",2e3)}catch(e){console.error("ファイルからの状態復元に失敗しました:",e),alert(`ファイルの解析に失敗しました。有効なJSONファイルではありません。
${e.message}`)}}async function Zb(s){const e=localStorage.getItem(ks);if(!e)return!1;try{const t=JSON.parse(e);return await xf(t,s)}catch(t){return console.error("localStorageからの状態復元に失敗しました:",t),!1}}async function xf(s,e){const t=e||zs();Kl=!0,Cb("セッションデータを準備中...");try{const n=s.initialStates||(s.characters||[]).map((c,d)=>({charId:`char_file_${d}`,sourceType:c.sourceType,id:c.id,type:c.type,img:c.img,area:c.area,stackCount:c.stackCount,regrets:c.regrets})),i=s.currentStates||s.characters,r=s.turn||0;Rc(),wc();const o=n.length;let a=0;const l=new Map;for(const c of n){const d=c.id;Ka(a,o,d);let u;if(c.sourceType==="sheet"){const f=await Sf(c.id);u=Xo(f),u.sheetId=c.id}else{const f=t[c.id];if(!f)throw new Error(`テンプレートID: ${c.id} が見つかりません`);u=JSON.parse(JSON.stringify(f)),u.templateId=c.id}const h=Ac(u,c.type);l.set(c.charId,h.id),Kt(h.id,{area:c.area,stackCount:c.stackCount,displayName:currentState.displayName||charToUpdate.originalName,img:c.img,regrets:c.regrets,displayName:c.displayName||h.originalName}),a++,Ka(a,o,h.name),c.sourceType==="sheet"?await new Promise(f=>setTimeout(f,200)):await new Promise(f=>setTimeout(f,50))}return r>0?(i.forEach(c=>{const d=c.charId||n[i.indexOf(c)].charId,u=l.get(d),h=Ft(u);if(h){Kt(h.id,{area:c.area,stackCount:c.stackCount,actionValue:c.actionValue,isDestroyed:c.isDestroyed,hasWithdrawn:c.hasWithdrawn,usedManeuvers:new Set(c.usedManeuvers)});const f=new Set(c.damagedPartNames);Object.values(h.partsStatus).flat().forEach(m=>{f.has(m.name)&&(m.damaged=!0)}),Zi(h)}}),Wb(r,Ct())):(kt(),Ir()),Ur(),Ka(o,o,"読み込み完了"),await new Promise(c=>setTimeout(c,200)),Et("セッションを復元しました。",2e3),!0}catch(n){return console.error("状態の復元に失敗しました:",n),alert(`状態の復元に失敗しました:
${n.message}`),!1}finally{Kl=!1,Rb()}}async function Jb(){const s=localStorage.getItem(ks);if(!s){console.warn("保存されたデータが見つかりません。");return}try{const e=JSON.parse(s);Rc(),wc();const t=e.initialStates||[];for(const n of t){let i;if(n.sourceType==="sheet"){const o=await Sf(n.id);i=Xo(o),i.sheetId=n.id}else i=JSON.parse(JSON.stringify(zs()[n.id])),i.templateId=n.id;const r=Ac(i,n.type);Kt(r.id,{area:n.area,stackCount:n.stackCount,img:n.img,regrets:n.regrets})}}catch(e){console.error("初期状態への復元に失敗しました:",e)}}function Qb(){return localStorage.getItem(ks)!==null}function Mf(){localStorage.removeItem(ks),Et("保存データを削除しました。",2e3)}function Sf(s){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=r=>{document.head.removeChild(i),delete window[n],e(r)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${s}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}function ew(){try{const s=At(),e=Ct(),t={savedAt:new Date().toISOString(),turn:s.isStarted?s.turn:0,characters:e.map(p=>({sourceType:p.sheetId?"sheet":"template",id:p.sheetId||p.templateId,type:p.type,img:p.img,area:p.area,stackCount:p.stackCount,actionValue:p.actionValue,isDestroyed:p.isDestroyed||!1,hasWithdrawn:p.hasWithdrawn||!1,damagedPartNames:Object.values(p.partsStatus).flat().filter(g=>g.damaged).map(g=>g.name),usedManeuvers:Array.from(p.usedManeuvers),activeBuffs:p.activeBuffs,regrets:p.regrets}))},n=JSON.stringify(t,null,2),i=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(i),o=document.createElement("a");o.href=r;const a=new Date,l=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),d=String(a.getDate()).padStart(2,"0"),u=String(a.getHours()).padStart(2,"0"),h=String(a.getMinutes()).padStart(2,"0"),m=`nechronica-session-${`${l}${c}${d}-${u}${h}`}.json`,v=prompt("ファイル名を入力してください:",m);v&&(o.download=v.endsWith(".json")?v:`${v}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),Et(`「${o.download}」を保存しました。`,2e3)),URL.revokeObjectURL(r)}catch(s){console.error("ファイルへの保存に失敗しました:",s),alert("ファイルへの保存に失敗しました。")}}const Ef="1.8.7";let bf={},Pt=[],wf=1;function Zi(s){let e=0;[...s.skills||[],...Object.values(s.partsStatus||{}).flat().map(n=>n.name)].forEach(n=>{const i=Yt(n);if(!i||!i.effects||i.effects.length===0)return;let r=!1;if(s.partsStatus){const o=Object.values(s.partsStatus).flat().find(a=>a.name===n);o&&(r=o.damaged)}for(const o of i.effects)o.ref==="APPLY_BUFF"&&o.params.stat==="maxActionValue"?(isNaN(r)||!r)&&(e+=o.params.value||0):o.ref==="MODIFY_MAX_ACTION_VALUE_ON_DAMAGE"&&r&&(e+=o.params.value||0)}),s.maxActionValue=(s.baseActionValue||6)+e}function tw(s,e,t){const n=bf[s];if(!n)return console.error(`テンプレートIDが見つかりません: ${s}`),null;const i=JSON.parse(JSON.stringify(n));return i.templateId=s,Tf(i,e)}function Tf(s,e,t){const n=JSON.parse(JSON.stringify(s));n.id=`char_${wf++}`,n.type=e,n.originalName=s.name||"名称未設定",n.displayName=s.name||"名称未設定",Object.defineProperty(n,"name",{get(){return this.displayName},set(r){this.displayName=r}}),n.partsStatus={};let i=0;if(n.parts&&typeof n.parts=="object"&&Object.keys(n.parts).forEach(r=>{Array.isArray(n.parts[r])&&(n.partsStatus[r]=n.parts[r].map(o=>({id:`${n.id}_part_${i++}`,name:o,damaged:!1})))}),e==="pc"&&n.treasure)for(const r in n.partsStatus){const o=n.partsStatus[r].find(a=>a.name===n.treasure);if(o){o.id=`${n.id}_part_treasure`;break}}return n.madnessPoints={},n.statusEffects=[],n.activeBuffs=[],n.isMentallyBroken=!1,n.isDestroyed=!1,n.hasWithdrawn=!1,n.regrets=s.regrets||[],n.stackCount=s.stackCount||1,n.hasActedThisCount=!1,n}function Ko(){const s=Pt.filter(n=>n.skills&&n.skills.includes("合流"));if(s.length<2)return;const e=new Map;s.forEach(n=>{const i=`${n.position}-${n.area}`;e.has(i)||e.set(i,[]),e.get(i).push(n)});let t=!1;e.forEach(n=>{if(n.length<2)return;const i=n[0];for(let r=1;r<n.length;r++){const o=n[r];i.stackCount+=o.stackCount;const a=Pt.findIndex(l=>l.id===o.id);a!==-1&&Pt.splice(a,1)}t=!0}),t&&console.log("キャラクターが合流しました。")}function Zo(s){s.usedManeuvers=new Set,s.turnLimitedManeuvers=new Set,[...s.skills||[],...Object.values(s.partsStatus||{}).flat().map(t=>t.name)].forEach(t=>{const n=Yt(t);if(!n)return;let i=!1;n.effects?.some(o=>o.params&&o.params.limit_per_turn==="none")?i=!1:["ジャッジ","ダメージ","ラピッド"].includes(n.timing)&&(i=!0),i&&s.turnLimitedManeuvers.add(t)})}function Af(s){s.regrets=[];const e=Pt.filter(r=>r.type==="pc"&&r.id!==s.id),t=s.treasure||"たからもの";s.regrets.push({id:`treasure_${s.id}`,name:`${t}への依存`,points:3,category:"たからもの"});const n=Jl(),i=Object.keys(n).filter(r=>r.startsWith("SI-"));e.forEach(r=>{if(i.length>0){const o=i[Math.floor(Math.random()*i.length)];s.regrets.push({id:`regret_${s.id}_to_${r.id}`,name:`${r.name}への${n[o].name}`,points:3,categoryKey:"SI"});const a=i[Math.floor(Math.random()*i.length)];r.regrets.push({id:`regret_${r.id}_to_${s.id}`,name:`${s.name}への${n[a].name}`,points:3,categoryKey:"SI"})}})}function Cf(s){bf=s,console.log("Character Manager initialized.")}function Ct(s=!1){return Pt}function Ft(s){return Pt.find(e=>e.id===s)}function Rf(s,e,t){const n=tw(s,e);return n?(n.area=t||n.initialArea||(e==="pc"?"煉獄":"奈落"),e==="pc"&&Af(n),Zi(n),n.actionValue=n.maxActionValue,Zo(n),Pt.push(n),console.log(`${n.name} (${e}) を戦場に追加しました。`),Ko(),yi(),n):null}function Ac(s,e){const t=Tf(s,e);return t.area=s.area||s.initialArea||(e==="pc"?"煉獄":"奈落"),e==="pc"&&(!t.regrets||t.regrets.length===0)&&Af(t),Zi(t),t.actionValue=t.maxActionValue,Zo(t),Pt.push(t),console.log(`${t.name} (imported ${e}) を戦場に追加しました。`),Ko(),yi(),t}function If(s){const e=Ft(s);if(e&&e.stackCount>1)return e.stackCount--,yi(),!0;const t=Pt.findIndex(n=>n.id===s);return t!==-1?(Pt.splice(t,1),yi(),!0):!1}function Zl(s,e){const t=Pt.findIndex(c=>c.id===s);if(t===-1)return;const n=Pt[t],i=Pt.filter(c=>c.type===n.type),r=i.findIndex(c=>c.id===s);let o;if(e==="left"){if(r===0)return;o=r-1}else{if(r===i.length-1)return;o=r+1}Pt.splice(t,1);const a=i[o].id,l=Pt.findIndex(c=>c.id===a);e==="left"?Pt.splice(l,0,n):Pt.splice(l+1,0,n)}function Kt(s,e){const t=Ft(s);t?(e.name&&(e.displayName=e.name,delete e.name),Object.assign(t,e),(t.isDestroyed||t.hasWithdrawn)&&(t.actionValue=0,t.isDestroyed&&t.partsStatus&&Object.values(t.partsStatus).flat().forEach(n=>n.damaged=!0)),Zi(t),Ko()):console.warn(`更新対象のキャラクターが見つかりません: ${s}`)}function Cc(s,e,t=1){const n=Ft(s);if(n){if(n.category==="レギオン")return n.stackCount-=t,n.stackCount<=0?(n.isDestroyed=!0,n.actionValue=0,!0):!1;for(const i in n.partsStatus){const r=n.partsStatus[i].find(o=>o.id===e);if(r)return r.damaged?void 0:(r.damaged=!0,Zi(n),!1)}}}function Pf(s,e){const t=Ft(s);if(!t)return;const n=t.regrets.find(o=>o.id===e);n&&n.points<4&&n.points++,t.regrets&&t.regrets.length>0&&t.regrets.every(o=>o.points>=4)&&(t.isMentallyBroken=!0,console.log(`★★★ ${t.name} は精神崩壊しました。 ★★★`))}function Lf(){Pt.forEach(s=>{if(s.isDestroyed||s.hasWithdrawn){s.actionValue=0;return}s.actionValue+=s.maxActionValue,s.hasActedThisCount=!1,s.usedManeuvers.clear()}),Ko(),console.log("新しいターンが開始され、全キャラクターの行動値が更新されました。")}function Df(s){s.forEach(e=>{const t=Ft(e.characterId);t&&(t.area=e.targetArea)}),console.log("予約された移動を一括で適用しました。")}function Nf(s,e){const t=Ft(s);if(!t)return null;const n={id:t.id,sheetId:t.sheetId,img:t.img,type:t.type,actionValue:t.actionValue,regrets:t.regrets,madnessPoints:t.madnessPoints,isMentallyBroken:t.isMentallyBroken,isDestroyed:!1,hasWithdrawn:!1,hasActedThisCount:t.hasActedThisCount};Object.keys(t).forEach(r=>delete t[r]),Object.assign(t,e),t.area=t.initialArea||(t.type==="pc"?"煉獄":"奈落"),Object.assign(t,n),t.partsStatus={};let i=0;if(t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(r=>{Array.isArray(t.parts[r])&&(t.partsStatus[r]=t.parts[r].map(o=>({id:`${t.id}_part_${i++}`,name:o,damaged:!1})))}),t.type==="pc"&&t.treasure)for(const r in t.partsStatus){const o=t.partsStatus[r].find(a=>a.name===t.treasure);if(o){o.id=`${t.id}_part_treasure`;break}}return Zi(t),t.actionValue=Math.min(t.actionValue,t.maxActionValue),Zo(t),console.log(`キャラクター「${t.name}」が保管所のデータで更新されました。`),t}function Rc(){Pt=[],wf=1,console.log("All characters cleared.")}function Pr(s,e){const t=Ft(s);t&&(t.activeBuffs||(t.activeBuffs=[]),t.activeBuffs.push(e))}function Ic(s,e){const t=Ft(s);t&&t.activeBuffs&&(t.activeBuffs=t.activeBuffs.filter(n=>n.duration!==e))}const nw="1.3.15";document.addEventListener("DOMContentLoaded",async()=>{try{await Gf(),Cf(zs()),xb(),lb(),YE(),WE({hintMasterData:Xd(),regretMasterData:Jl(),takaramonoMasterData:$f(),memoryFragmentsData:Ql(),addLog:Ne}),iw(),await sw(),Qb()&&await rw(),ow()}catch(s){console.error("アプリケーションの初期化に失敗しました。",s),document.body.innerHTML=`<div style="color: red; padding: 20px;">初期化エラー: ${s.stack}</div>`}});function iw(){Mb(),kt(),Ir(),cb(),Ur()}function sw(){return new Promise(s=>{const e=`
        <div class="modal-header modal-header-sub">📢主な更新内容:7.10.8.22</div>
        <div class="modal-body welcome-modal-body">
            <p>◆ <strong>セッションのファイルへの保存・ファイルから読込み</strong>を実装しました。</p>
            <p>◆ <strong>【✏️画像の変更】※透過png対応</strong>：「🪪人形設計図」において<strong>画像の変更</strong>機能を追加しました。
            <p>◆ <strong>防御・妨害・追加ダメージ・転倒</strong>を実装しました。</p>
            <p>◆ <strong>状態の自動保存・復元機能</strong>を実装しました。（自動保存ON/OFF対応）</p>
            <p>◆ <strong>データの誤記を訂正</strong>しました。
            <p>◆ <strong>【保管所から読込み】【保管所で見る】【保管所から再読込み】</strong>：キャラクターシート保管所との連携を強化しました。
            <p>◆ 3Dダイス<strong>複数ダイス、D100に対応</strong>しました。
            <p>◆ 試しに<strong>ダイスが転がる</strong>ようにしてみましたが、動作が怪しいです。
            <p>◆ ジャッジウィンドウで<strong>適用されている支援、妨害を確認</strong>できるようになりました。
            <p>◆ <strong>支援</strong>がダイスロールに適用できるようになりました。
            <p>◆ ユーザーが<strong>画像を追加</strong>できるようになりました。
            <p>◆ <strong>【新着/IDリスト】</strong>：キャラクターシート保管所の<strong>キャラクターリスト表示</strong>機能を追加しました。
            <p>◆ <strong>マニューバリスト</strong>を更新し、<strong>表示機能を拡張</strong>しました。
            <p>◆ その他、軽微なUI調整と不具合の修正を行いました。
        </div>
        `,t=document.getElementById("welcomeModal"),n=document.getElementById("closeWelcomeModalBtn");if(!t||!n)return console.warn("Welcome modal elements not found, skipping."),s();t.classList.add("is-visible");const i=()=>{t.classList.remove("is-visible"),Gt({title:"更新情報",bodyHtml:e,footerHtml:'<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',onRender:(r,o)=>{r.querySelector("#okUpdateBtn").onclick=()=>{o(),s()}}})};n.onclick=i,t.onclick=r=>{r.target===t&&i()}})}function rw(){return new Promise(s=>{Gt({title:"セッションの復元",bodyHtml:"<p>保存された前回のセッションデータが見つかりました。<br>復元しますか？</p>",footerHtml:`
                <button id="restoreBtn" class="welcome-modal-close-btn">はい、復元する</button>
                <button id="discardBtn" class="welcome-modal-close-btn">いいえ、新規に開始</button>
            `,onRender:(e,t)=>{e.querySelector("#restoreBtn").onclick=async()=>{t(),await Zb(zs()),s()},e.querySelector("#discardBtn").onclick=()=>{confirm("自動保存されたデータが削除されます。本当に新規セッションを開始しますか？")&&(Mf(),t(),s())}}})})}function ow(){Ab({app:nw,"battle-logic":Ib,"character-manager":Ef,"data-handler":Hf,"dice-roller":GE,"dice-3d":LE,"interaction-manager":ab,"menu-builder":JE,"ui-helpers":qE,"ui-manager":yb,"settings-manager":jE,"state-manager":qb,"character-converter":XE})}
