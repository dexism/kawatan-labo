const tp=Object.freeze(Object.defineProperty({__proto__:null,get addBuff(){return Wo},get addCharacterFromObject(){return Bc},get addCharacterFromTemplate(){return Gf},get addMadnessPoint(){return $f},get applyQueuedMoves(){return qf},get clearCharacters(){return kc},get clearTemporaryBuffs(){return $o},get damagePart(){return Oc},get getCharacterById(){return pt},get getCharacters(){return Bt},get initialize(){return Hf},get initializeManeuverLimits(){return sa},get moveCharacter(){return oc},get recalculateMaxActionValue(){return es},get removeCharacter(){return Wf},get startNewTurn(){return Xf},get updateCharacter(){return Wt},get updateCharacterFromReload(){return jf},get version(){return Of}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const np="1.4.7";let dr={},yr={},Kd={},Zd={},Jd={},Qd={},eh={},th={},nh={};async function ip(){try{const e=["positions.json","classes.json","basic_parts.json","armed_parts.json","mutant_parts.json","custom_parts.json","tegoma_skills.json","tegoma_parts.json","tegoma_parts0.json"].map(u=>fetch(`/data/maneuvers/${u}`).then(d=>d.json())),[t,n,i,r,o,a,l,...c]=await Promise.all([fetch("/data/hint.json"),fetch("/data/regret.json"),fetch("/data/takaramono.json"),fetch("/data/memory_fragments.json"),fetch("/data/undead.json"),fetch("/data/core-data.json"),fetch("/data/effects_db.json"),...e]);dr=c.reduce((u,d)=>({...u,...d}),{}),[nh,Kd,Zd,Jd,eh,th,Qd]=await Promise.all([t.json(),n.json(),i.json(),r.json(),o.json(),a.json(),l.json()]),yr={};for(const u in dr){const d=dr[u];d&&d.name&&(yr[d.name]={id:u,...d})}console.log("Data handler initialized successfully!")}catch(s){throw console.error("Error in data handler initialization:",s),s}}function ih(){return dr}function Tt(s){return yr[s]}function xr(){return Kd}function sh(){return Zd}function Xo(){return Jd}function Ws(){return eh}function Nr(){return th}function sp(s){return Qd[s]}function ac(){return nh}function rp(){const s=Ws(),e=new Set;for(const t in s)s[t]&&s[t].img&&e.add(s[t].img);return[...e]}function op(s){if(!s||!s.name){console.warn("追加しようとしたマニューバデータが無効です:",s);return}if(yr[s.name])return;const e=`CSTM_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;s.id=e,dr[e]=s,yr[s.name]=s,console.log(`カスタムマニューバ「${s.name}」を動的に追加しました。`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="180",ap=0,Xc=1,lp=2,rh=1,cp=2,ti=3,Ei=0,nn=1,ii=2,xi=0,Ts=1,qc=2,jc=3,Yc=4,up=5,Vi=100,dp=101,hp=102,fp=103,pp=104,mp=200,gp=201,vp=202,_p=203,rl=204,ol=205,yp=206,xp=207,Mp=208,Sp=209,Ep=210,bp=211,wp=212,Tp=213,Ap=214,al=0,ll=1,cl=2,Ls=3,ul=4,dl=5,hl=6,fl=7,qo=0,Cp=1,Rp=2,Mi=0,Pp=1,Ip=2,Lp=3,Dp=4,Np=5,Fp=6,Up=7,Kc="attached",Bp="detached",oh=300,Ds=301,Ns=302,Io=303,pl=304,jo=306,Mr=1e3,si=1001,ml=1002,cn=1003,Op=1004,Vr=1005,On=1006,aa=1007,Wi=1008,Hn=1009,ah=1010,lh=1011,Sr=1012,cc=1013,Yi=1014,kn=1015,Fr=1016,uc=1017,dc=1018,Er=1020,ch=35902,uh=35899,dh=1021,hh=1022,vn=1023,br=1026,wr=1027,fh=1028,hc=1029,ph=1030,fc=1031,pc=1033,bo=33776,wo=33777,To=33778,Ao=33779,gl=35840,vl=35841,_l=35842,yl=35843,xl=36196,Ml=37492,Sl=37496,El=37808,bl=37809,wl=37810,Tl=37811,Al=37812,Cl=37813,Rl=37814,Pl=37815,Il=37816,Ll=37817,Dl=37818,Nl=37819,Fl=37820,Ul=37821,Bl=36492,Ol=36494,kl=36495,zl=36283,Vl=36284,Hl=36285,Gl=36286,Lo=2300,Wl=2301,la=2302,Zc=2400,Jc=2401,Qc=2402,kp=2500,zp=3200,Vp=3201,Yo=0,Hp=1,vi="",ct="srgb",Fs="srgb-linear",Do="linear",ot="srgb",ns=7680,eu=519,Gp=512,Wp=513,$p=514,mh=515,Xp=516,qp=517,jp=518,Yp=519,tu=35044,nu="300 es",zn=2e3,No=2001;class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const hr=Math.PI/180,Us=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[s&255]+Ht[s>>8&255]+Ht[s>>16&255]+Ht[s>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function mc(s,e){return(s%e+e)%e}function Kp(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Zp(s,e,t){return s!==e?(t-s)/(e-s):0}function fr(s,e,t){return(1-t)*s+t*e}function Jp(s,e,t,n){return fr(s,e,1-Math.exp(-t*n))}function Qp(s,e=1){return e-Math.abs(mc(s,e*2)-e)}function em(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function tm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function nm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function im(s,e){return s+Math.random()*(e-s)}function sm(s){return s*(.5-Math.random())}function rm(s){s!==void 0&&(iu=s);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function om(s){return s*hr}function am(s){return s*Us}function lm(s){return(s&s-1)===0&&s!==0}function cm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function um(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*d,l*h,a*c);break;case"YZY":s.set(l*h,a*u,l*d,a*c);break;case"ZXZ":s.set(l*d,l*h,a*u,a*c);break;case"XZX":s.set(a*u,l*m,l*f,a*c);break;case"YXY":s.set(l*f,a*u,l*m,a*c);break;case"ZYZ":s.set(l*m,l*f,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function xs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zt={DEG2RAD:hr,RAD2DEG:Us,generateUUID:wi,clamp:je,euclideanModulo:mc,mapLinear:Kp,inverseLerp:Zp,lerp:fr,damp:Jp,pingpong:Qp,smoothstep:em,smootherstep:tm,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:rm,degToRad:om,radToDeg:am,isPowerOfTwo:lm,ceilPowerOfTwo:cm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:Xt,denormalize:xs};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Jt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==m){let p=1-a;const g=l*h+c*f+u*m+d*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,g*_);p=Math.sin(p*T)/E,a=Math.sin(a*T)/E}const y=a*_;if(l=l*p+h*y,c=c*p+f*y,u=u*p+m*y,d=d*p+v*y,p===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*d+l*f-c*h,e[t+1]=l*m+u*h+c*d-a*f,e[t+2]=c*m+u*f+a*h-l*d,e[t+3]=u*m-a*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(r/2),h=l(n/2),f=l(i/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"YXZ":this._x=h*u*d+c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"ZXY":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d-h*f*m;break;case"ZYX":this._x=h*u*d-c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d+h*f*m;break;case"YZX":this._x=h*u*d+c*f*m,this._y=c*f*d+h*u*m,this._z=c*u*m-h*f*d,this._w=c*u*d-h*f*m;break;case"XZY":this._x=h*u*d-c*f*m,this._y=c*f*d-h*u*m,this._z=c*u*m+h*f*d,this._w=c*u*d+h*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=r*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(su.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(su.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=i+l*d+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ca.copy(this).projectOnVector(e),this.sub(ca)}reflect(e){return this.sub(ca.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ca=new B,su=new Jt;class ze{constructor(e,t,n,i,r,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],_=i[1],x=i[4],y=i[7],E=i[2],T=i[5],C=i[8];return r[0]=o*v+a*_+l*E,r[3]=o*p+a*x+l*T,r[6]=o*g+a*y+l*C,r[1]=c*v+u*_+d*E,r[4]=c*p+u*x+d*T,r[7]=c*g+u*y+d*C,r[2]=h*v+f*_+m*E,r[5]=h*p+f*x+m*T,r[8]=h*g+f*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,m=t*d+n*h+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ua.makeScale(e,t)),this}rotate(e){return this.premultiply(ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ua=new ze;function gh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hm(){const s=Tr("canvas");return s.style.display="block",s}const ru={};function Ar(s){s in ru||(ru[s]=!0,console.warn(s))}function fm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const ou=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),au=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pm(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ot&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?Do:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Fs]:{primaries:e,whitePoint:n,transfer:Do,toXYZ:ou,fromXYZ:au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:ou,fromXYZ:au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),s}const Xe=pm();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function As(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let is;class mm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Tr("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gm=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(da(i[o].image)):r.push(da(i[o]))}else r=da(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vm=0;const ha=new B;class Vt extends $s{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=si,i=si,r=On,o=Wi,a=vn,l=Hn,c=Vt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=wi(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ha).x}get height(){return this.source.getSize(ha).y}get depth(){return this.source.getSize(ha).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case ml:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case ml:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=oh;Vt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,E=(g+1)/2,T=(u+h)/4,C=(d+v)/4,I=(m+p)/4;return x>y&&x>E?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=C/n):y>E?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=T/i,r=I/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=I/r),this.set(n,i,r,t),this}let _=Math.sqrt((p-m)*(p-m)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _m extends $s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Vt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends _m{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class vh extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ym extends Vt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Gr.subVectors(this.max,Js),ss.subVectors(e.a,Js),rs.subVectors(e.b,Js),os.subVectors(e.c,Js),ci.subVectors(rs,ss),ui.subVectors(os,rs),Ri.subVectors(ss,os);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Ri.y,Ri.x,0];return!fa(t,ss,rs,os,Gr)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,ss,rs,os,Gr))?!1:(Wr.crossVectors(ci,ui),t=[Wr.x,Wr.y,Wr.z],fa(t,ss,rs,os,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new B,new B,new B,new B,new B,new B,new B,new B],_n=new B,Hr=new Qi,ss=new B,rs=new B,os=new B,ci=new B,ui=new B,Ri=new B,Js=new B,Gr=new B,Wr=new B,Pi=new B;function fa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pi.fromArray(s,r);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const xm=new Qi,Qs=new B,pa=new B;class Xs{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Qs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(pa)),this.expandByPoint(Qs.copy(e.center).sub(pa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $n=new B,ma=new B,$r=new B,di=new B,ga=new B,Xr=new B,va=new B;let vc=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ma.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),di.copy(this.origin).sub(ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot($r),a=di.dot(this.direction),l=-di.dot($r),c=di.lengthSq(),u=Math.abs(1-o*o);let d,h,f,m;if(u>0)if(d=o*l-a,h=o*a-l,m=r*u,d>=0)if(h>=-m)if(h<=m){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-m?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=m?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ma).addScaledVector($r,h),f}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,r){ga.subVectors(t,e),Xr.subVectors(n,e),va.crossVectors(ga,Xr);let o=this.direction.dot(va),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(di,Xr));if(l<0)return null;const c=a*this.direction.dot(ga.cross(di));if(c<0||l+c>o)return null;const u=-a*di.dot(va);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ce{constructor(e,t,n,i,r,o,a,l,c,u,d,h,f,m,v,p){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,d,h,f,m,v,p)}set(e,t,n,i,r,o,a,l,c,u,d,h,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,m=a*u,v=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+m*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,m=c*u,v=c*d;t[0]=h+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,m=c*u,v=c*d;t[0]=h-v*a,t[4]=-o*d,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,f=o*d,m=a*u,v=a*d;t[0]=l*u,t[4]=m*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=v-h*d,t[8]=m*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*d+m,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-m,t[2]=m*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mm,e,Sm)}lookAt(e,t,n){const i=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(n,on),hi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(n,on)),hi.normalize(),qr.crossVectors(on,hi),i[0]=hi.x,i[4]=qr.x,i[8]=on.x,i[1]=hi.y,i[5]=qr.y,i[9]=on.y,i[2]=hi.z,i[6]=qr.z,i[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],x=n[7],y=n[11],E=n[15],T=i[0],C=i[4],I=i[8],b=i[12],S=i[1],R=i[5],F=i[9],P=i[13],O=i[2],U=i[6],N=i[10],X=i[14],V=i[3],j=i[7],re=i[11],ce=i[15];return r[0]=o*T+a*S+l*O+c*V,r[4]=o*C+a*R+l*U+c*j,r[8]=o*I+a*F+l*N+c*re,r[12]=o*b+a*P+l*X+c*ce,r[1]=u*T+d*S+h*O+f*V,r[5]=u*C+d*R+h*U+f*j,r[9]=u*I+d*F+h*N+f*re,r[13]=u*b+d*P+h*X+f*ce,r[2]=m*T+v*S+p*O+g*V,r[6]=m*C+v*R+p*U+g*j,r[10]=m*I+v*F+p*N+g*re,r[14]=m*b+v*P+p*X+g*ce,r[3]=_*T+x*S+y*O+E*V,r[7]=_*C+x*R+y*U+E*j,r[11]=_*I+x*F+y*N+E*re,r[15]=_*b+x*P+y*X+E*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+r*l*d-i*c*d-r*a*h+n*c*h+i*a*f-n*l*f)+v*(+t*l*f-t*c*h+r*o*h-i*o*f+i*c*u-r*l*u)+p*(+t*c*d-t*a*f-r*o*d+n*o*f+r*a*u-n*c*u)+g*(-i*a*u-t*l*d+t*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],_=d*p*c-v*h*c+v*l*f-a*p*f-d*l*g+a*h*g,x=m*h*c-u*p*c-m*l*f+o*p*f+u*l*g-o*h*g,y=u*v*c-m*d*c+m*a*f-o*v*f-u*a*g+o*d*g,E=m*d*l-u*v*l-m*a*h+o*v*h+u*a*p-o*d*p,T=t*_+n*x+i*y+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(v*h*r-d*p*r-v*i*f+n*p*f+d*i*g-n*h*g)*C,e[2]=(a*p*r-v*l*r+v*i*c-n*p*c-a*i*g+n*l*g)*C,e[3]=(d*l*r-a*h*r-d*i*c+n*h*c+a*i*f-n*l*f)*C,e[4]=x*C,e[5]=(u*p*r-m*h*r+m*i*f-t*p*f-u*i*g+t*h*g)*C,e[6]=(m*l*r-o*p*r-m*i*c+t*p*c+o*i*g-t*l*g)*C,e[7]=(o*h*r-u*l*r+u*i*c-t*h*c-o*i*f+t*l*f)*C,e[8]=y*C,e[9]=(m*d*r-u*v*r-m*n*f+t*v*f+u*n*g-t*d*g)*C,e[10]=(o*v*r-m*a*r+m*n*c-t*v*c-o*n*g+t*a*g)*C,e[11]=(u*a*r-o*d*r-u*n*c+t*d*c+o*n*f-t*a*f)*C,e[12]=E*C,e[13]=(u*v*i-m*d*i+m*n*h-t*v*h-u*n*p+t*d*p)*C,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*p-t*a*p)*C,e[15]=(o*d*i-u*a*i+u*n*l-t*d*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,m=r*d,v=o*u,p=o*d,g=a*d,_=l*c,x=l*u,y=l*d,E=n.x,T=n.y,C=n.z;return i[0]=(1-(v+g))*E,i[1]=(f+y)*E,i[2]=(m-x)*E,i[3]=0,i[4]=(f-y)*T,i[5]=(1-(h+g))*T,i[6]=(p+_)*T,i[7]=0,i[8]=(m+x)*C,i[9]=(p-_)*C,i[10]=(1-(h+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=as.set(i[0],i[1],i[2]).length();const o=as.set(i[4],i[5],i[6]).length(),a=as.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);const c=1/r,u=1/o,d=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,t.setFromRotationMatrix(yn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===zn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===No)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===zn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===No)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const as=new B,yn=new Ce,Mm=new B(0,0,0),Sm=new B(1,1,1),hi=new B,qr=new B,on=new B,lu=new Ce,cu=new Jt;class Nt{constructor(e=0,t=0,n=0,i=Nt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nt.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Em=0;const uu=new B,ls=new Jt,Xn=new Ce,jr=new B,er=new B,bm=new B,wm=new Jt,du=new B(1,0,0),hu=new B(0,1,0),fu=new B(0,0,1),pu={type:"added"},Tm={type:"removed"},cs={type:"childadded",child:null},_a={type:"childremoved",child:null};class _t extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new B,t=new Nt,n=new Jt,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ze}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(du,e)}rotateY(e){return this.rotateOnAxis(hu,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return uu.copy(e).applyQuaternion(this.quaternion),this.position.add(uu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(du,e)}translateY(e){return this.translateOnAxis(hu,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(er,jr,this.up):Xn.lookAt(jr,er,this.up),this.quaternion.setFromRotationMatrix(Xn),i&&(Xn.extractRotation(i.matrixWorld),ls.setFromRotationMatrix(Xn),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tm),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new B(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new B,qn=new B,ya=new B,jn=new B,us=new B,ds=new B,mu=new B,xa=new B,Ma=new B,Sa=new B,Ea=new Je,ba=new Je,wa=new Je;class wn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xn.subVectors(e,t),i.cross(xn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){xn.subVectors(i,t),qn.subVectors(n,t),ya.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(qn),l=xn.dot(ya),c=qn.dot(qn),u=qn.dot(ya),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ea.setScalar(0),ba.setScalar(0),wa.setScalar(0),Ea.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),wa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ea,r.x),o.addScaledVector(ba,r.y),o.addScaledVector(wa,r.z),o}static isFrontFacing(e,t,n,i){return xn.subVectors(n,t),qn.subVectors(e,t),xn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),xn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;us.subVectors(i,n),ds.subVectors(r,n),xa.subVectors(e,n);const l=us.dot(xa),c=ds.dot(xa);if(l<=0&&c<=0)return t.copy(n);Ma.subVectors(e,i);const u=us.dot(Ma),d=ds.dot(Ma);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(us,o);Sa.subVectors(e,r);const f=us.dot(Sa),m=ds.dot(Sa);if(m>=0&&f<=m)return t.copy(r);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ds,a);const p=u*m-f*d;if(p<=0&&d-u>=0&&f-m>=0)return mu.subVectors(r,i),a=(d-u)/(d-u+(f-m)),t.copy(i).addScaledVector(mu,a);const g=1/(p+v+h);return o=v*g,a=h*g,t.copy(n).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function Ta(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=mc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ta(o,r,e+1/3),this.g=Ta(o,r,e),this.b=Ta(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Xe.workingToColorSpace(Gt.copy(this),e),Math.round(je(Gt.r*255,0,255))*65536+Math.round(je(Gt.g*255,0,255))*256+Math.round(je(Gt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Gt.copy(this),t);const n=Gt.r,i=Gt.g,r=Gt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=ct){Xe.workingToColorSpace(Gt.copy(this),e);const t=Gt.r,n=Gt.g,i=Gt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(Yr);const n=fr(fi.h,Yr.h,t),i=fr(fi.s,Yr.s,t),r=fr(fi.l,Yr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Be;Be.NAMES=yh;let Am=0,Ti=class extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Ts,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==Vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class xh extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new B,Kr=new Ke;let Cm=0;class Vn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tu&&(e.usage=this.usage),e}}class _c extends Vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Mh extends Vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends Vn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rm=0;const hn=new Ce,Aa=new _t,hs=new B,an=new Qi,tr=new Qi,kt=new B;class Cn extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gh(e)?Mh:_c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return Aa.lookAt(e),Aa.updateMatrix(),this.applyMatrix4(Aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(an.min,tr.min),an.expandByPoint(kt),kt.addVectors(an.max,tr.max),an.expandByPoint(kt)):(an.expandByPoint(tr.min),an.expandByPoint(tr.max))}an.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),kt.add(hs)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;const c=new B,u=new B,d=new B,h=new Ke,f=new Ke,m=new Ke,v=new B,p=new B;function g(I,b,S){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,S),h.fromBufferAttribute(r,I),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,S),u.sub(c),d.sub(c),f.sub(h),m.sub(h);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(R),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(R),a[I].add(v),a[b].add(v),a[S].add(v),l[I].add(p),l[b].add(p),l[S].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,b=_.length;I<b;++I){const S=_[I],R=S.start,F=S.count;for(let P=R,O=R+F;P<O;P+=3)g(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new B,y=new B,E=new B,T=new B;function C(I){E.fromBufferAttribute(i,I),T.copy(E);const b=a[I];x.copy(b),x.sub(E.multiplyScalar(E.dot(b))).normalize(),y.crossVectors(T,b);const R=y.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,R)}for(let I=0,b=_.length;I<b;++I){const S=_[I],R=S.start,F=S.count;for(let P=R,O=R+F;P<O;P+=3)C(e.getX(P+0)),C(e.getX(P+1)),C(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const m=e.getX(h+0),v=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*u;for(let g=0;g<u;g++)h[m++]=c[f++]}return new Vn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Cn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new Ce,Ii=new vc,Zr=new Xs,vu=new B,Jr=new B,Qr=new B,eo=new B,Ca=new B,to=new B,_u=new B,no=new B;class Tn extends _t{constructor(e=new Cn,t=new xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ca.fromBufferAttribute(d,e),o?to.addScaledVector(Ca,u):to.addScaledVector(Ca.sub(t),u))}t.add(to)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Zr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Zr,vu)===null||Ii.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(gu.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,E=x;y<E;y+=3){const T=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);i=io(this,g,e,n,c,u,d,T,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=io(this,o,e,n,c,u,d,_,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,E=x;y<E;y+=3){const T=y,C=y+1,I=y+2;i=io(this,g,e,n,c,u,d,T,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=p,x=p+1,y=p+2;i=io(this,o,e,n,c,u,d,_,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Pm(s,e,t,n,i,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ei,a),l===null)return null;no.copy(a),no.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:s}}function io(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Jr),s.getVertexPosition(l,Qr),s.getVertexPosition(c,eo);const u=Pm(s,e,t,n,Jr,Qr,eo,_u);if(u){const d=new B;wn.getBarycoord(_u,Jr,Qr,eo,d),i&&(u.uv=wn.getInterpolatedAttribute(i,a,l,c,d,new Ke)),r&&(u.uv1=wn.getInterpolatedAttribute(r,a,l,c,d,new Ke)),o&&(u.normal=wn.getInterpolatedAttribute(o,a,l,c,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new B,materialIndex:0};wn.getNormal(Jr,Qr,eo,h.normal),u.face=h,u.barycoord=d}return u}class Ur extends Cn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function m(v,p,g,_,x,y,E,T,C,I,b){const S=y/C,R=E/I,F=y/2,P=E/2,O=T/2,U=C+1,N=I+1;let X=0,V=0;const j=new B;for(let re=0;re<N;re++){const ce=re*R-P;for(let ne=0;ne<U;ne++){const He=ne*S-F;j[v]=He*_,j[p]=ce*x,j[g]=O,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[g]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(ne/C),d.push(1-re/I),X+=1}}for(let re=0;re<I;re++)for(let ce=0;ce<C;ce++){const ne=h+ce+U*re,He=h+ce+U*(re+1),et=h+(ce+1)+U*(re+1),Ge=h+(ce+1)+U*re;l.push(ne,He,Ge),l.push(He,et,Ge),V+=6}a.addGroup(f,V,b),f+=V,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function qt(s){const e={};for(let t=0;t<s.length;t++){const n=Bs(s[t]);for(const i in n)e[i]=n[i]}return e}function Im(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Lm={clone:Bs,merge:qt};var Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=Im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Eh extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new B,yu=new Ke,xu=new Ke;class Yt extends Eh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,yu,xu),t.subVectors(xu,yu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ps=1;class Fm extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yt(fs,ps,e,t);i.layers=this.layers,this.add(i);const r=new Yt(fs,ps,e,t);r.layers=this.layers,this.add(r);const o=new Yt(fs,ps,e,t);o.layers=this.layers,this.add(o);const a=new Yt(fs,ps,e,t);a.layers=this.layers,this.add(a);const l=new Yt(fs,ps,e,t);l.layers=this.layers,this.add(l);const c=new Yt(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===No)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bh extends Vt{constructor(e=[],t=Ds,n,i,r,o,a,l,c,u){super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Um extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ur(5,5,5),r=new bi({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:xi});r.uniforms.tEquirect.value=t;const o=new Tn(i,r),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=On),new Fm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Ms extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bm={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&h>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bm)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Om extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mu=new B,Su=new Je,Eu=new Je,km=new B,bu=new Ce,so=new B,Pa=new Xs,wu=new Ce,Ia=new vc;class zm extends Tn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kc,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1&&(wu.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(wu),!(this.boundingBox!==null&&Ia.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ia)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Su.fromBufferAttribute(i.attributes.skinIndex,e),Eu.fromBufferAttribute(i.attributes.skinWeight,e),Mu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Eu.getComponent(r);if(o!==0){const a=Su.getComponent(r);bu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(km.copy(Mu).applyMatrix4(bu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $l extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Vm extends Vt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=cn,u=cn,d,h){super(null,o,a,l,c,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tu=new Ce,Hm=new Ce;class yc{constructor(e=[],t=[]){this.uuid=wi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Hm;Tu.multiplyMatrices(a,t[r]),Tu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new yc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Vm(t,e,e,vn,kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new $l),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const La=new B,Gm=new B,Wm=new ze;let ki=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=La.subVectors(n,t).cross(Gm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Wm.getNormalMatrix(e),i=this.coplanarPoint(La).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Li=new Xs,$m=new Ke(.5,.5),ro=new B;class xc{constructor(e=new ki,t=new ki,n=new ki,i=new ki,r=new ki,o=new ki){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],m=r[8],v=r[9],p=r[10],g=r[11],_=r[12],x=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-o,f-u,g-m,E-_).normalize(),i[1].setComponents(c+o,f+u,g+m,E+_).normalize(),i[2].setComponents(c+a,f+d,g+v,E+x).normalize(),i[3].setComponents(c-a,f-d,g-v,E-x).normalize(),n)i[4].setComponents(l,h,p,y).normalize(),i[5].setComponents(c-l,f-h,g-p,E-y).normalize();else if(i[4].setComponents(c-l,f-h,g-p,E-y).normalize(),t===zn)i[5].setComponents(c+l,f+h,g+p,E+y).normalize();else if(t===No)i[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=$m.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ro.x=i.normal.x>0?e.max.x:e.min.x,ro.y=i.normal.y>0?e.max.y:e.min.y,ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wh extends Ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new B,Uo=new B,Au=new Ce,nr=new vc,oo=new Xs,Da=new B,Cu=new B;class Xm extends _t{constructor(e=new Cn,t=new wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Fo.fromBufferAttribute(t,i-1),Uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Fo.distanceTo(Uo);e.setAttribute("lineDistance",new Qt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(i),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Au.copy(i).invert(),nr.copy(e.ray).applyMatrix4(Au);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=u.getX(v),_=u.getX(v+1),x=ao(this,e,nr,l,g,_,v);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(m-1),p=u.getX(f),g=ao(this,e,nr,l,v,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=ao(this,e,nr,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=ao(this,e,nr,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ao(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Fo.fromBufferAttribute(a,i),Uo.fromBufferAttribute(a,r),t.distanceSqToSegment(Fo,Uo,Da,Cu)>n)return;Da.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Da);if(!(c<e.near||c>e.far))return{distance:c,point:Cu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class Th extends Vt{constructor(e,t,n=Yi,i,r,o,a=cn,l=cn,c,u=br,d=1){if(u!==br&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ah extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qm{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ke:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],r=[],o=[],a=new B,l=new Ce;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function jm(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Ch(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Qm(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let u=-1/0,d=-1/0;for(let h=t;h<i;h+=t){const f=s[h],m=s[h+1];f<a&&(a=f),m<l&&(l=m),f>u&&(u=f),m>d&&(d=m)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return Cr(r,o,t,a,l,c,0),o}function Ch(s,e,t,n,i){let r;if(i===ug(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Ru(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Ru(o/n|0,s[o],s[o+1],r);return r&&Os(r,r.next)&&(Pr(r),r=r.next),r}function Zi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Os(t,t.next)||Mt(t.prev,t,t.next)===0)){if(Pr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&sg(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Km(s,n,i,r):Ym(s)){e.push(l.i,s.i,c.i),Pr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Zm(Zi(s),e),Cr(s,e,t,n,i,r,2)):o===2&&Jm(s,e,t,n,i,r):Cr(Zi(s),e,t,n,i,r,1);break}}}function Ym(s){const e=s.prev,t=s,n=s.next;if(Mt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,r,o),d=Math.min(a,l,c),h=Math.max(i,r,o),f=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=d&&m.y<=f&&cr(i,a,r,l,o,c,m.x,m.y)&&Mt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Km(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Mt(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,u=i.y,d=r.y,h=o.y,f=Math.min(a,l,c),m=Math.min(u,d,h),v=Math.max(a,l,c),p=Math.max(u,d,h),g=Xl(f,m,e,t,n),_=Xl(v,p,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=g&&y&&y.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&cr(a,u,l,d,c,h,x.x,x.y)&&Mt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&cr(a,u,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&cr(a,u,l,d,c,h,x.x,x.y)&&Mt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&cr(a,u,l,d,c,h,y.x,y.y)&&Mt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Zm(s,e){let t=s;do{const n=t.prev,i=t.next.next;!Os(n,i)&&Ph(n,t,t.next,i)&&Rr(n,i)&&Rr(i,n)&&(e.push(n.i,t.i,i.i),Pr(t),Pr(t.next),t=s=i),t=t.next}while(t!==s);return Zi(t)}function Jm(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ag(o,a)){let l=Ih(o,a);o=Zi(o,o.next),l=Zi(l,l.next),Cr(o,e,t,n,i,r,0),Cr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Qm(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Ch(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(og(c))}i.sort(eg);for(let r=0;r<i.length;r++)t=tg(i[r],t);return t}function eg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function tg(s,e){const t=ng(s,e);if(!t)return e;const n=Ih(t,s);return Zi(n,n.next),Zi(t,t.next)}function ng(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(Os(s,t))return t;do{if(Os(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Rh(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Rr(t,s)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&ig(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function ig(s,e){return Mt(s.prev,s,e.prev)<0&&Mt(e.next,s,s.next)<0}function sg(s,e,t,n){let i=s;do i.z===0&&(i.z=Xl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rg(i)}function rg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Xl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function og(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Rh(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function cr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Rh(s,e,t,n,i,r,o,a)}function ag(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lg(s,e)&&(Rr(s,e)&&Rr(e,s)&&cg(s,e)&&(Mt(s.prev,s,e.prev)||Mt(s,e.prev,e))||Os(s,e)&&Mt(s.prev,s,s.next)>0&&Mt(e.prev,e,e.next)>0)}function Mt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Os(s,e){return s.x===e.x&&s.y===e.y}function Ph(s,e,t,n){const i=co(Mt(s,e,t)),r=co(Mt(s,e,n)),o=co(Mt(t,n,s)),a=co(Mt(t,n,e));return!!(i!==r&&o!==a||i===0&&lo(s,t,e)||r===0&&lo(s,n,e)||o===0&&lo(t,s,n)||a===0&&lo(t,e,n))}function lo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function co(s){return s>0?1:s<0?-1:0}function lg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ph(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Rr(s,e){return Mt(s.prev,s,s.next)<0?Mt(s,e,s.next)>=0&&Mt(s,s.prev,e)>=0:Mt(s,e,s.prev)<0||Mt(s,s.next,e)<0}function cg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Ih(s,e){const t=ql(s.i,s.x,s.y),n=ql(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ru(s,e,t,n){const i=ql(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Pr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ql(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ug(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class dg{static triangulate(e,t,n=2){return jm(e,t,n)}}class Mc{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Mc.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Pu(e),Iu(n,e);let o=e.length;t.forEach(Pu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Iu(n,t[l]);const a=dg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Pu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Iu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ko extends Cn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=e/a,h=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<u;g++){const _=g*h-o;for(let x=0;x<c;x++){const y=x*d-r;m.push(y,-_,0),v.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,y=_+c*(g+1),E=_+1+c*(g+1),T=_+1+c*g;f.push(x,y,T),f.push(y,E,T)}this.setIndex(f),this.setAttribute("position",new Qt(m,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}class hg extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uo extends Ti{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fg extends Ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pg extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mg extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ho(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function gg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function vg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Lu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Lh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Zo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class _g extends Zo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zc,endingEnd:Zc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jc:r=e,a=2*t-n;break;case Qc:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jc:o=e,l=2*n-t;break;case Qc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,p=v*m,g=-h*p+2*h*v-h*m,_=(1+h)*p+(-1.5-2*h)*v+(-.5+h)*m+1,x=(-1-f)*p+(1.5+f)*v+.5*m,y=f*p-f*v;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+_*o[c+E]+x*o[l+E]+y*o[d+E];return r}}class yg extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*d+o[l+h]*u;return r}}class xg extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ho(t,this.TimeBufferType),this.values=ho(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ho(e.times,Array),values:ho(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _g(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case la:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&gg(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===la,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const d=a*n,h=d-n,f=d+n;for(let m=0;m!==n;++m){const v=t[d+m];if(v!==t[h+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Wl;class qs extends Pn{constructor(e,t,n){super(e,t,n)}}qs.prototype.ValueTypeName="bool";qs.prototype.ValueBufferType=Array;qs.prototype.DefaultInterpolation=Lo;qs.prototype.InterpolantFactoryMethodLinear=void 0;qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Dh extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}Dh.prototype.ValueTypeName="color";class Ir extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}Ir.prototype.ValueTypeName="number";class Mg extends Zo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Jt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ks extends Pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Mg(this.times,this.values,this.getValueSize(),e)}}ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;class js extends Pn{constructor(e,t,n){super(e,t,n)}}js.prototype.ValueTypeName="string";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Lo;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}Lr.prototype.ValueTypeName="vector";class Sg{constructor(e="",t=-1,n=[],i=kp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=wi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(bg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=vg(l);l=Lu(l,1,u),c=Lu(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ir(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,h,f,m,v){if(f.length!==0){const p=[],g=[];Lh(f,p,g,m),p.length!==0&&v.push(new d(h,p,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let v=0;v<h[m].morphTargets.length;v++)f[h[m].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let _=0;_!==h[m].morphTargets.length;++_){const x=h[m];p.push(x.time),g.push(x.morphTarget===v?1:0)}i.push(new Ir(".morphTargetInfluence["+v+"]",p,g))}l=f.length*o}else{const f=".bones["+t[d].name+"]";n(Lr,f+".position",h,"pos",i),n(ks,f+".quaternion",h,"rot",i),n(Lr,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Eg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ir;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return Dh;case"quaternion":return ks;case"bool":case"boolean":return qs;case"string":return js}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function bg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eg(s.type);if(s.times===void 0){const t=[],n=[];Lh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const pr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class wg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Tg=new wg;class Ji{constructor(e){this.manager=e!==void 0?e:Tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yn={};class Ag extends Error{constructor(e,t){super(e),this.response=t}}class Cg extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=pr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:i});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Yn[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){_();function _(){d.read().then(({done:x,value:y})=>{if(x)g.close();else{v+=y.byteLength;const E=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let T=0,C=u.length;T<C;T++){const I=u[T];I.onProgress&&I.onProgress(E)}g.enqueue(y),_()}},x=>{g.error(x)})}}});return new Response(p)}else throw new Ag(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{pr.add(`file:${e}`,c);const u=Yn[e];delete Yn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Yn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Yn[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ms=new WeakMap;class Rg extends Ji{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=pr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=ms.get(o);d===void 0&&(d=[],ms.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=Tr("img");function l(){u(),t&&t(this);const d=ms.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}ms.delete(this),r.manager.itemEnd(e)}function c(d){u(),i&&i(d),pr.remove(`image:${e}`);const h=ms.get(this)||[];for(let f=0;f<h.length;f++){const m=h[f];m.onError&&m.onError(d)}ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Nh extends Ji{constructor(e){super(e)}load(e,t,n,i){const r=new Vt,o=new Rg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Jo extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Na=new Ce,Du=new B,Nu=new B;class Sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Du.setFromMatrixPosition(e.matrixWorld),t.position.copy(Du),Nu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nu),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pg extends Sc{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ig extends Jo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Pg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Fu=new Ce,ir=new B,Fa=new B;class Lg extends Sc{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ir.setFromMatrixPosition(e.matrixWorld),n.position.copy(ir),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),i.makeTranslation(-ir.x,-ir.y,-ir.z),Fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fu,n.coordinateSystem,n.reversedDepth)}}class Uu extends Jo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Fh extends Eh{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dg extends Sc{constructor(){super(new Fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jl extends Jo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uh extends Jo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ng{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fg extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ec="\\[\\]\\.:\\/",Ug=new RegExp("["+Ec+"]","g"),bc="[^"+Ec+"]",Bg="[^"+Ec.replace("\\.","")+"]",Og=/((?:WC+[\/:])*)/.source.replace("WC",bc),kg=/(WCOD+)?/.source.replace("WCOD",Bg),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Vg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Hg=new RegExp("^"+Og+kg+zg+Vg+"$"),Gg=["material","materials","bones","map"];class Wg{constructor(e,t,n){const i=n||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class it{constructor(e,t,n){this.path=t,this.parsedPath=n||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,n):new it(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ug,"")}static parseTrackName(e){const t=Hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=Wg;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Bu(s,e,t,n){const i=$g(n);switch(t){case dh:return s*e;case fh:return s*e/i.components*i.byteLength;case hc:return s*e/i.components*i.byteLength;case ph:return s*e*2/i.components*i.byteLength;case fc:return s*e*2/i.components*i.byteLength;case hh:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case pc:return s*e*4/i.components*i.byteLength;case bo:case wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case To:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case vl:case yl:return Math.max(s,16)*Math.max(e,8)/4;case gl:case _l:return Math.max(s,8)*Math.max(e,8)/2;case xl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Al:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case Ol:case kl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case zl:case Vl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hl:case Gl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $g(s){switch(s){case Hn:case ah:return{byteLength:1,components:1};case Sr:case lh:case Fr:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case Yi:case cc:case kn:return{byteLength:4,components:1};case ch:case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xg(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,u);else{d.sort((f,m)=>f.start-m.start);let h=0;for(let f=1;f<d.length;f++){const m=d[h],v=d[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,m=d.length;f<m;f++){const v=d[f];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var qg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
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
#endif`,Yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qg=`#ifdef USE_AOMAP
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
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gv=`#define PI 3.141592653589793
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
} // validated`,vv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_v=`vec3 transformedNormal = objectNormal;
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
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ev="gl_FragColor = linearToOutputTexel( gl_FragColor );",bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,Fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ov=`uniform bool receiveShadow;
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
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,$v=`struct PhysicalMaterial {
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
}`,Xv=`
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
#endif`,qv=`#if defined( RE_IndirectDiffuse )
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
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n0=`#if defined( USE_POINTS_UV )
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
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
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
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
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
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
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
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
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
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
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
}`,Q0=`#if DEPTH_PACKING == 3200
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
}`,e_=`#define DISTANCE
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
}`,t_=`#define DISTANCE
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s_=`uniform float scale;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define LAMBERT
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
}`,u_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,h_=`#define NORMAL
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
}`,f_=`#define NORMAL
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
}`,p_=`#define PHONG
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
}`,m_=`#define PHONG
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
}`,g_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
}`,__=`#define TOON
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
}`,y_=`#define TOON
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
}`,x_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,S_=`#include <common>
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
}`,E_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:qg,alphahash_pars_fragment:jg,alphamap_fragment:Yg,alphamap_pars_fragment:Kg,alphatest_fragment:Zg,alphatest_pars_fragment:Jg,aomap_fragment:Qg,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:sv,bsdfs:rv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:dv,color_fragment:hv,color_pars_fragment:fv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:vv,defaultnormal_vertex:_v,displacementmap_pars_vertex:yv,displacementmap_vertex:xv,emissivemap_fragment:Mv,emissivemap_pars_fragment:Sv,colorspace_fragment:Ev,colorspace_pars_fragment:bv,envmap_fragment:wv,envmap_common_pars_fragment:Tv,envmap_pars_fragment:Av,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:kv,envmap_vertex:Rv,fog_vertex:Pv,fog_pars_vertex:Iv,fog_fragment:Lv,fog_pars_fragment:Dv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:Fv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Bv,lights_pars_begin:Ov,lights_toon_fragment:zv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Wv,lights_physical_pars_fragment:$v,lights_fragment_begin:Xv,lights_fragment_maps:qv,lights_fragment_end:jv,logdepthbuf_fragment:Yv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:Zv,logdepthbuf_vertex:Jv,map_fragment:Qv,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:o0,morphnormal_vertex:a0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:h0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:y0,opaque_fragment:x0,packing:M0,premultiplied_alpha_fragment:S0,project_vertex:E0,dithering_fragment:b0,dithering_pars_fragment:w0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:R0,shadowmap_vertex:P0,shadowmask_pars_fragment:I0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:N0,skinnormal_vertex:F0,specularmap_fragment:U0,specularmap_pars_fragment:B0,tonemapping_fragment:O0,tonemapping_pars_fragment:k0,transmission_fragment:z0,transmission_pars_fragment:V0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:W0,worldpos_vertex:$0,background_vert:X0,background_frag:q0,backgroundCube_vert:j0,backgroundCube_frag:Y0,cube_vert:K0,cube_frag:Z0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:e_,distanceRGBA_frag:t_,equirect_vert:n_,equirect_frag:i_,linedashed_vert:s_,linedashed_frag:r_,meshbasic_vert:o_,meshbasic_frag:a_,meshlambert_vert:l_,meshlambert_frag:c_,meshmatcap_vert:u_,meshmatcap_frag:d_,meshnormal_vert:h_,meshnormal_frag:f_,meshphong_vert:p_,meshphong_frag:m_,meshphysical_vert:g_,meshphysical_frag:v_,meshtoon_vert:__,meshtoon_frag:y_,points_vert:x_,points_frag:M_,shadow_vert:S_,shadow_frag:E_,sprite_vert:b_,sprite_frag:w_},le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Bn={basic:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Be(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:qt([le.points,le.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:qt([le.common,le.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:qt([le.sprite,le.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:qt([le.common,le.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:qt([le.lights,le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Bn.physical={uniforms:qt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const fo={r:0,b:0,g:0},Di=new Nt,T_=new Ce;function A_(s,e,t,n,i,r,o){const a=new Be(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const E=m(x);E===null?g(a,l):E&&E.isColor&&(g(E,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(x,y){const E=m(y);E&&(E.isCubeTexture||E.mapping===jo)?(u===void 0&&(u=new Tn(new Ur(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Bs(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Di.copy(y.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(Di)),u.material.toneMapped=Xe.getTransfer(E.colorSpace)!==ot,(d!==E||h!==E.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=s.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Tn(new Ko(2,2),new bi({name:"BackgroundMaterial",uniforms:Bs(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,h=E.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(fo,Sh(s)),n.buffers.color.setClear(fo.r,fo.g,fo.b,y,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:p,dispose:_}}function C_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(S,R,F,P,O){let U=!1;const N=d(P,F,R);r!==N&&(r=N,c(r.object)),U=f(S,P,F,O),U&&m(S,P,F,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(S,R,F,P),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function u(S){return s.deleteVertexArray(S)}function d(S,R,F){const P=F.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let U=O[R.id];U===void 0&&(U={},O[R.id]=U);let N=U[P];return N===void 0&&(N=h(l()),U[P]=N),N}function h(S){const R=[],F=[],P=[];for(let O=0;O<t;O++)R[O]=0,F[O]=0,P[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:P,object:S,attributes:{},index:null}}function f(S,R,F,P){const O=r.attributes,U=R.attributes;let N=0;const X=F.getAttributes();for(const V in X)if(X[V].location>=0){const re=O[V];let ce=U[V];if(ce===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;N++}return r.attributesNum!==N||r.index!==P}function m(S,R,F,P){const O={},U=R.attributes;let N=0;const X=F.getAttributes();for(const V in X)if(X[V].location>=0){let re=U[V];re===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(re=S.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),O[V]=ce,N++}r.attributes=O,r.attributesNum=N,r.index=P}function v(){const S=r.newAttributes;for(let R=0,F=S.length;R<F;R++)S[R]=0}function p(S){g(S,0)}function g(S,R){const F=r.newAttributes,P=r.enabledAttributes,O=r.attributeDivisors;F[S]=1,P[S]===0&&(s.enableVertexAttribArray(S),P[S]=1),O[S]!==R&&(s.vertexAttribDivisor(S,R),O[S]=R)}function _(){const S=r.newAttributes,R=r.enabledAttributes;for(let F=0,P=R.length;F<P;F++)R[F]!==S[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function x(S,R,F,P,O,U,N){N===!0?s.vertexAttribIPointer(S,R,F,O,U):s.vertexAttribPointer(S,R,F,P,O,U)}function y(S,R,F,P){v();const O=P.attributes,U=F.getAttributes(),N=R.defaultAttributeValues;for(const X in U){const V=U[X];if(V.location>=0){let j=O[X];if(j===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const re=j.normalized,ce=j.itemSize,ne=e.get(j);if(ne===void 0)continue;const He=ne.buffer,et=ne.type,Ge=ne.bytesPerElement,Y=et===s.INT||et===s.UNSIGNED_INT||j.gpuType===cc;if(j.isInterleavedBufferAttribute){const J=j.data,me=J.stride,De=j.offset;if(J.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)g(V.location+be,J.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let be=0;be<V.locationSize;be++)p(V.location+be);s.bindBuffer(s.ARRAY_BUFFER,He);for(let be=0;be<V.locationSize;be++)x(V.location+be,ce/V.locationSize,et,re,me*Ge,(De+ce/V.locationSize*be)*Ge,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)g(V.location+J,j.meshPerAttribute);S.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<V.locationSize;J++)p(V.location+J);s.bindBuffer(s.ARRAY_BUFFER,He);for(let J=0;J<V.locationSize;J++)x(V.location+J,ce/V.locationSize,et,re,ce*Ge,ce/V.locationSize*J*Ge,Y)}}else if(N!==void 0){const re=N[X];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(V.location,re);break;case 3:s.vertexAttrib3fv(V.location,re);break;case 4:s.vertexAttrib4fv(V.location,re);break;default:s.vertexAttrib1fv(V.location,re)}}}}_()}function E(){I();for(const S in n){const R=n[S];for(const F in R){const P=R[F];for(const O in P)u(P[O].object),delete P[O];delete R[F]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const F in R){const P=R[F];for(const O in P)u(P[O].object),delete P[O];delete R[F]}delete n[S.id]}function C(S){for(const R in n){const F=n[R];if(F[S.id]===void 0)continue;const P=F[S.id];for(const O in P)u(P[O].object),delete P[O];delete F[S.id]}}function I(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function R_(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(s.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let m=0;m<d;m++)f+=u[m];t.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v]*h[v];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==kn&&!I)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:T}}function I_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new ki,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const m=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,g=s.get(d);if(!i||m===null||m.length===0||r&&!p)r?u(null):c();else{const _=r?0:n,x=_*4;let y=g.clippingState||null;l.value=y,y=u(m,h,x,f);for(let E=0;E!==x;++E)y[E]=t[E];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,m){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function L_(s){let e=new WeakMap;function t(o,a){return a===Io?o.mapping=Ds:a===pl&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Io||a===pl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Um(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ss=4,Ou=[.125,.215,.35,.446,.526,.582],Hi=20,Ua=new Fh,ku=new Be;let Ba=null,Oa=0,ka=0,za=!1;const zi=(1+Math.sqrt(5))/2,gs=1/zi,zu=[new B(-zi,gs,0),new B(zi,gs,0),new B(-gs,0,zi),new B(gs,0,zi),new B(0,zi,-gs),new B(0,zi,gs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],D_=new B;class Vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=D_}=r;Ba=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,Oa,ka),this._renderer.xr.enabled=za,e.scissorTest=!1,po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:Fr,format:vn,colorSpace:Fs,depthBuffer:!1},i=Hu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N_(r)),this._blurMaterial=F_(r,e,t)}return i}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,n,i,r){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ku),d.toneMapping=Mi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const v=new xh({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),p=new Tn(new Ur,v);let g=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,g=!0):(v.color.copy(ku),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[x]));const E=this._cubeSize;po(i,y*E,x>2?E:0,E,E),d.setRenderTarget(i),g&&d.render(p,l),d.render(e,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ds||e.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Tn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;po(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ua)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=zu[(i-r-1)%zu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Tn(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hi-1),v=r/m,p=isFinite(r)?1+Math.floor(u*v):Hi;p>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const g=[];let _=0;for(let C=0;C<Hi;++C){const I=C/v,b=Math.exp(-I*I/2);g.push(b),C===0?_+=b:C<p&&(_+=2*b)}for(let C=0;C<g.length;C++)g[C]=g[C]/_;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-n;const y=this._sizeLods[i],E=3*y*(i>x-Ss?i-x+Ss:0),T=4*(this._cubeSize-y);po(t,E,T,3*y,2*y),l.setRenderTarget(t),l.render(d,Ua)}}function N_(s){const e=[],t=[],n=[];let i=s;const r=s-Ss+1+Ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Ss?l=Ou[o-s+Ss-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,m=6,v=3,p=2,g=1,_=new Float32Array(v*m*f),x=new Float32Array(p*m*f),y=new Float32Array(g*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,I=T>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(b,v*m*T),x.set(h,p*m*T);const S=[T,T,T,T,T,T];y.set(S,g*m*T)}const E=new Cn;E.setAttribute("position",new Vn(_,v)),E.setAttribute("uv",new Vn(x,p)),E.setAttribute("faceIndex",new Vn(y,g)),e.push(E),i>Ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hu(s,e,t){const n=new Ki(s,e,t);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function po(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function F_(s,e,t){const n=new Float32Array(Hi),i=new B(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Gu(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Wu(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function U_(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Io||l===pl,u=l===Ds||l===Ns;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Vu(s)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Vu(s)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function B_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O_(s,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,m=d.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){const E=_[x+0],T=_[x+1],C=_[x+2];h.push(E,T,T,C,C,E)}}else if(m!==void 0){const _=m.array;v=m.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const E=x+0,T=x+1,C=x+2;h.push(E,T,T,C,C,E)}}else return;const p=new(gh(h)?Mh:_c)(h,1);p.version=v;const g=r.get(d);g&&e.remove(g),r.set(d,p)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function k_(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,h*o,m),t.update(f,n,m))}function u(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function d(h,f,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_]*v[_];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function z_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function V_(s,e,t){const n=new WeakMap,i=new Je;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let E=a.attributes.position.count*y,T=1;E>e.maxTextureSize&&(T=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const C=new Float32Array(E*T*4*d),I=new vh(C,E,T,d);I.type=kn,I.needsUpdate=!0;const b=y*4;for(let R=0;R<d;R++){const F=g[R],P=_[R],O=x[R],U=E*T*4*R;for(let N=0;N<F.count;N++){const X=N*b;m===!0&&(i.fromBufferAttribute(F,N),C[U+X+0]=i.x,C[U+X+1]=i.y,C[U+X+2]=i.z,C[U+X+3]=0),v===!0&&(i.fromBufferAttribute(P,N),C[U+X+4]=i.x,C[U+X+5]=i.y,C[U+X+6]=i.z,C[U+X+7]=0),p===!0&&(i.fromBufferAttribute(O,N),C[U+X+8]=i.x,C[U+X+9]=i.y,C[U+X+10]=i.z,C[U+X+11]=O.itemSize===4?i.w:1)}}h={count:d,texture:I,size:new Ke(E,T)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function H_(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Oh=new Vt,$u=new Th(1,1),kh=new vh,zh=new ym,Vh=new bh,Xu=[],qu=[],ju=new Float32Array(16),Yu=new Float32Array(9),Ku=new Float32Array(4);function Ys(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Xu[i];if(r===void 0&&(r=new Float32Array(i),Xu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qo(s,e){let t=qu[e];t===void 0&&(t=new Int32Array(e),qu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function G_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function W_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function $_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function X_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function q_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,n))return;Ku.set(n),s.uniformMatrix2fv(this.addr,!1,Ku),Ut(t,n)}}function j_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,n))return;Yu.set(n),s.uniformMatrix3fv(this.addr,!1,Yu),Ut(t,n)}}function Y_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,n))return;ju.set(n),s.uniformMatrix4fv(this.addr,!1,ju),Ut(t,n)}}function K_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Z_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function J_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function Q_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function ey(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function ny(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function sy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?($u.compareFunction=mh,r=$u):r=Oh,t.setTexture2D(e||r,i)}function ry(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zh,i)}function oy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vh,i)}function ay(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||kh,i)}function ly(s){switch(s){case 5126:return G_;case 35664:return W_;case 35665:return $_;case 35666:return X_;case 35674:return q_;case 35675:return j_;case 35676:return Y_;case 5124:case 35670:return K_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ay}}function cy(s,e){s.uniform1fv(this.addr,e)}function uy(s,e){const t=Ys(e,this.size,2);s.uniform2fv(this.addr,t)}function dy(s,e){const t=Ys(e,this.size,3);s.uniform3fv(this.addr,t)}function hy(s,e){const t=Ys(e,this.size,4);s.uniform4fv(this.addr,t)}function fy(s,e){const t=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function py(s,e){const t=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function my(s,e){const t=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function gy(s,e){s.uniform1iv(this.addr,e)}function vy(s,e){s.uniform2iv(this.addr,e)}function _y(s,e){s.uniform3iv(this.addr,e)}function yy(s,e){s.uniform4iv(this.addr,e)}function xy(s,e){s.uniform1uiv(this.addr,e)}function My(s,e){s.uniform2uiv(this.addr,e)}function Sy(s,e){s.uniform3uiv(this.addr,e)}function Ey(s,e){s.uniform4uiv(this.addr,e)}function by(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Oh,r[o])}function wy(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zh,r[o])}function Ty(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vh,r[o])}function Ay(s,e,t){const n=this.cache,i=e.length,r=Qo(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||kh,r[o])}function Cy(s){switch(s){case 5126:return cy;case 35664:return uy;case 35665:return dy;case 35666:return hy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return vy;case 35668:case 35672:return _y;case 35669:case 35673:return yy;case 5125:return xy;case 36294:return My;case 36295:return Sy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}}class Py{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cy(t.type)}}class Iy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Zu(s,e){s.seq.push(e),s.map[e.id]=e}function Ly(s,e,t){const n=s.name,i=n.length;for(Va.lastIndex=0;;){const r=Va.exec(n),o=Va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zu(t,c===void 0?new Ry(a,s,e):new Py(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Iy(a),Zu(t,d)),t=d}}}class Co{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Ly(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Ju(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Dy=37297;let Ny=0;function Fy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Qu=new ze;function Uy(s){Xe._getMatrix(Qu,Xe.workingColorSpace,s);const e=`mat3( ${Qu.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case Do:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ed(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Fy(s.getShaderSource(e),a)}else return r}function By(s,e){const t=Uy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Oy(s,e){let t;switch(e){case Pp:t="Linear";break;case Ip:t="Reinhard";break;case Lp:t="Cineon";break;case Dp:t="ACESFilmic";break;case Fp:t="AgX";break;case Up:t="Neutral";break;case Np:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const mo=new B;function ky(){Xe.getLuminanceCoefficients(mo);const s=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function Vy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ur(s){return s!==""}function td(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(s){return s.replace(Gy,$y)}const Wy=new Map;function $y(s,e){let t=$e[e];if(t===void 0){const n=Wy.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(s){return s.replace(Xy,qy)}function qy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function sd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function jy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Yy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case jo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ky(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Zy(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case Cp:e="ENVMAP_BLENDING_MIX";break;case Rp:e="ENVMAP_BLENDING_ADD";break}return e}function Jy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qy(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=jy(t),c=Yy(t),u=Ky(t),d=Zy(t),h=Jy(t),f=zy(t),m=Vy(r),v=i.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ur).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ur).join(`
`),g.length>0&&(g+=`
`)):(p=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),g=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?$e.tonemapping_pars_fragment:"",t.toneMapping!==Mi?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,By("linearToOutputTexel",t.outputColorSpace),ky(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=Yl(o),o=td(o,t),o=nd(o,t),a=Yl(a),a=td(a,t),a=nd(a,t),o=id(o),a=id(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+p+o,y=_+g+a,E=Ju(i,i.VERTEX_SHADER,x),T=Ju(i,i.FRAGMENT_SHADER,y);i.attachShader(v,E),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(v)||"",P=i.getShaderInfoLog(E)||"",O=i.getShaderInfoLog(T)||"",U=F.trim(),N=P.trim(),X=O.trim();let V=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,E,T);else{const re=ed(i,E,"vertex"),ce=ed(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+re+`
`+ce)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||X==="")&&(j=!1);j&&(R.diagnostics={runnable:V,programLog:U,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:g}})}i.deleteShader(E),i.deleteShader(T),I=new Co(i,v),b=Hy(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Dy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ny++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=T,this}let ex=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nx(e),t.set(e,n)),n}}class nx{constructor(e){this.id=ex++,this.code=e,this.usedTimes=0}}function ix(s,e,t,n,i,r,o){const a=new _h,l=new tx,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,S,R,F,P){const O=F.fog,U=P.geometry,N=b.isMeshStandardMaterial?F.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),V=X&&X.mapping===jo?X.image.height:null,j=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const re=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ce=re!==void 0?re.length:0;let ne=0;U.morphAttributes.position!==void 0&&(ne=1),U.morphAttributes.normal!==void 0&&(ne=2),U.morphAttributes.color!==void 0&&(ne=3);let He,et,Ge,Y;if(j){const st=Bn[j];He=st.vertexShader,et=st.fragmentShader}else He=b.vertexShader,et=b.fragmentShader,l.update(b),Ge=l.getVertexShaderID(b),Y=l.getFragmentShaderID(b);const J=s.getRenderTarget(),me=s.state.buffers.depth.getReversed(),De=P.isInstancedMesh===!0,be=P.isBatchedMesh===!0,Ye=!!b.map,It=!!b.matcap,D=!!X,mt=!!b.aoMap,ke=!!b.lightMap,Fe=!!b.bumpMap,Me=!!b.normalMap,gt=!!b.displacementMap,Se=!!b.emissiveMap,We=!!b.metalnessMap,Ot=!!b.roughnessMap,Et=b.anisotropy>0,L=b.clearcoat>0,w=b.dispersion>0,G=b.iridescence>0,K=b.sheen>0,Q=b.transmission>0,q=Et&&!!b.anisotropyMap,Ae=L&&!!b.clearcoatMap,oe=L&&!!b.clearcoatNormalMap,Ee=L&&!!b.clearcoatRoughnessMap,we=G&&!!b.iridescenceMap,ie=G&&!!b.iridescenceThicknessMap,he=K&&!!b.sheenColorMap,Ne=K&&!!b.sheenRoughnessMap,Te=!!b.specularMap,ue=!!b.specularColorMap,Ve=!!b.specularIntensityMap,k=Q&&!!b.transmissionMap,se=Q&&!!b.thicknessMap,ae=!!b.gradientMap,ve=!!b.alphaMap,ee=b.alphaTest>0,Z=!!b.alphaHash,xe=!!b.extensions;let Oe=Mi;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const lt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:et,defines:b.defines,customVertexShaderID:Ge,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:be,batchingColor:be&&P._colorsTexture!==null,instancing:De,instancingColor:De&&P.instanceColor!==null,instancingMorph:De&&P.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Fs,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:It,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:V,aoMap:mt,lightMap:ke,bumpMap:Fe,normalMap:Me,displacementMap:h&&gt,emissiveMap:Se,normalMapObjectSpace:Me&&b.normalMapType===Hp,normalMapTangentSpace:Me&&b.normalMapType===Yo,metalnessMap:We,roughnessMap:Ot,anisotropy:Et,anisotropyMap:q,clearcoat:L,clearcoatMap:Ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:w,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:he,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:ue,specularIntensityMap:Ve,transmission:Q,transmissionMap:k,thicknessMap:se,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Ts&&b.alphaToCoverage===!1,alphaMap:ve,alphaTest:ee,alphaHash:Z,combine:b.combine,mapUv:Ye&&v(b.map.channel),aoMapUv:mt&&v(b.aoMap.channel),lightMapUv:ke&&v(b.lightMap.channel),bumpMapUv:Fe&&v(b.bumpMap.channel),normalMapUv:Me&&v(b.normalMap.channel),displacementMapUv:gt&&v(b.displacementMap.channel),emissiveMapUv:Se&&v(b.emissiveMap.channel),metalnessMapUv:We&&v(b.metalnessMap.channel),roughnessMapUv:Ot&&v(b.roughnessMap.channel),anisotropyMapUv:q&&v(b.anisotropyMap.channel),clearcoatMapUv:Ae&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(b.sheenRoughnessMap.channel),specularMapUv:Te&&v(b.specularMap.channel),specularColorMapUv:ue&&v(b.specularColorMap.channel),specularIntensityMapUv:Ve&&v(b.specularIntensityMap.channel),transmissionMapUv:k&&v(b.transmissionMap.channel),thicknessMapUv:se&&v(b.thicknessMap.channel),alphaMapUv:ve&&v(b.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Me||Et),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Ye||ve),fog:!!O,useFog:b.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&Xe.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:Se&&b.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ii,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function g(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(_(S,b),x(S,b),S.push(s.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function _(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function x(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const S=m[b.type];let R;if(S){const F=Bn[S];R=Lm.clone(F.uniforms)}else R=b.uniforms;return R}function E(b,S){let R;for(let F=0,P=u.length;F<P;F++){const O=u[F];if(O.cacheKey===S){R=O,++R.usedTimes;break}}return R===void 0&&(R=new Qy(s,S,b,r),u.push(R)),R}function T(b){if(--b.usedTimes===0){const S=u.indexOf(b);u[S]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:E,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:I}}function sx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function rx(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function rd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function od(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(d,h,f,m,v,p){let g=s[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:m,renderOrder:d.renderOrder,z:v,group:p},s[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=m,g.renderOrder=d.renderOrder,g.z=v,g.group=p),e++,g}function a(d,h,f,m,v,p){const g=o(d,h,f,m,v,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(d,h,f,m,v,p){const g=o(d,h,f,m,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(d,h){t.length>1&&t.sort(d||rx),n.length>1&&n.sort(h||rd),i.length>1&&i.sort(h||rd)}function u(){for(let d=e,h=s.length;d<h;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function ox(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new od,s.set(n,[o])):i>=r.length?(o=new od,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ax(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Be};break;case"SpotLight":t={position:new B,direction:new B,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function lx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let cx=0;function ux(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dx(s){const e=new ax,t=lx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,r=new Ce,o=new Ce;function a(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,x=0,y=0,E=0,T=0,C=0;c.sort(ux);for(let b=0,S=c.length;b<S;b++){const R=c[b],F=R.color,P=R.intensity,O=R.distance,U=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*P,d+=F.g*P,h+=F.b*P;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],P);C++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,V=t.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=U,n.directionalShadowMatrix[f]=R.shadow.matrix,_++}n.directional[f]=N,f++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(F).multiplyScalar(P),N.distance=O,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[v]=N;const X=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,X.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=X.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=U,y++}v++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(F).multiplyScalar(P),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=N,p++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const X=R.shadow,V=t.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=U,n.pointShadowMatrix[m]=R.shadow.matrix,x++}n.point[m]=N,m++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(P),N.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[g]=N,g++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==_||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==E||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=_,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=E,I.numLightProbes=C,n.version=cx++)}function l(c,u){let d=0,h=0,f=0,m=0,v=0;const p=u.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const x=c[g];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),d++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function ad(s){const e=new dx(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function hx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new ad(s),e.set(i,[a])):r>=o.length?(a=new ad(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(s,e,t){let n=new xc;const i=new Ke,r=new Ke,o=new Je,a=new pg({depthPacking:Vp}),l=new mg,c={},u=t.maxTextureSize,d={[Ei]:nn,[nn]:Ei,[ii]:ii},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:fx,fragmentShader:px}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const m=new Cn;m.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Tn(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let g=this.type;this.render=function(T,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const b=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(xi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const P=g!==ti&&this.type===ti,O=g===ti&&this.type!==ti;for(let U=0,N=T.length;U<N;U++){const X=T[U],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();if(i.multiply(j),r.copy(V.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,V.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,V.mapSize.y=r.y)),V.map===null||P===!0||O===!0){const ce=this.type!==ti?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new Ki(i.x,i.y,ce),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const re=V.getViewportCount();for(let ce=0;ce<re;ce++){const ne=V.getViewport(ce);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),F.viewport(o),V.updateMatrices(X,ce),n=V.getFrustum(),y(C,I,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&_(V,I),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,s.setRenderTarget(b,S,R)};function _(T,C){const I=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ki(i.x,i.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,I,h,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,I,f,v,null)}function x(T,C,I,b){let S=null;const R=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=I.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=S.uuid,P=C.uuid;let O=c[F];O===void 0&&(O={},c[F]=O);let U=O[P];U===void 0&&(U=S.clone(),O[P]=U,C.addEventListener("dispose",E)),S=U}if(S.visible=C.visible,S.wireframe=C.wireframe,b===ti?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=s.properties.get(S);F.light=I}return S}function y(T,C,I,b,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===ti)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const P=e.update(T),O=T.material;if(Array.isArray(O)){const U=P.groups;for(let N=0,X=U.length;N<X;N++){const V=U[N],j=O[V.materialIndex];if(j&&j.visible){const re=x(T,j,b,S);T.onBeforeShadow(s,T,C,I,P,re,V),s.renderBufferDirect(I,null,P,re,T,V),T.onAfterShadow(s,T,C,I,P,re,V)}}}else if(O.visible){const U=x(T,O,b,S);T.onBeforeShadow(s,T,C,I,P,U,null),s.renderBufferDirect(I,null,P,U,T,null),T.onAfterShadow(s,T,C,I,P,U,null)}}const F=T.children;for(let P=0,O=F.length;P<O;P++)y(F[P],C,I,b,S)}function E(T){T.target.removeEventListener("dispose",E);for(const I in c){const b=c[I],S=T.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const gx={[al]:ll,[cl]:hl,[ul]:fl,[Ls]:dl,[ll]:al,[hl]:cl,[fl]:ul,[dl]:Ls};function vx(s,e){function t(){let k=!1;const se=new Je;let ae=null;const ve=new Je(0,0,0,0);return{setMask:function(ee){ae!==ee&&!k&&(s.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){k=ee},setClear:function(ee,Z,xe,Oe,lt){lt===!0&&(ee*=Oe,Z*=Oe,xe*=Oe),se.set(ee,Z,xe,Oe),ve.equals(se)===!1&&(s.clearColor(ee,Z,xe,Oe),ve.copy(se))},reset:function(){k=!1,ae=null,ve.set(-1,0,0,0)}}}function n(){let k=!1,se=!1,ae=null,ve=null,ee=null;return{setReversed:function(Z){if(se!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),se=Z;const Oe=ee;ee=null,this.setClear(Oe)}},getReversed:function(){return se},setTest:function(Z){Z?J(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!k&&(s.depthMask(Z),ae=Z)},setFunc:function(Z){if(se&&(Z=gx[Z]),ve!==Z){switch(Z){case al:s.depthFunc(s.NEVER);break;case ll:s.depthFunc(s.ALWAYS);break;case cl:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ul:s.depthFunc(s.EQUAL);break;case dl:s.depthFunc(s.GEQUAL);break;case hl:s.depthFunc(s.GREATER);break;case fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ve=Z}},setLocked:function(Z){k=Z},setClear:function(Z){ee!==Z&&(se&&(Z=1-Z),s.clearDepth(Z),ee=Z)},reset:function(){k=!1,ae=null,ve=null,ee=null,se=!1}}}function i(){let k=!1,se=null,ae=null,ve=null,ee=null,Z=null,xe=null,Oe=null,lt=null;return{setTest:function(st){k||(st?J(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(st){se!==st&&!k&&(s.stencilMask(st),se=st)},setFunc:function(st,Gn,In){(ae!==st||ve!==Gn||ee!==In)&&(s.stencilFunc(st,Gn,In),ae=st,ve=Gn,ee=In)},setOp:function(st,Gn,In){(Z!==st||xe!==Gn||Oe!==In)&&(s.stencilOp(st,Gn,In),Z=st,xe=Gn,Oe=In)},setLocked:function(st){k=st},setClear:function(st){lt!==st&&(s.clearStencil(st),lt=st)},reset:function(){k=!1,se=null,ae=null,ve=null,ee=null,Z=null,xe=null,Oe=null,lt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,x=null,y=null,E=null,T=null,C=new Be(0,0,0),I=0,b=!1,S=null,R=null,F=null,P=null,O=null;const U=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=X>=2);let j=null,re={};const ce=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),He=new Je().fromArray(ce),et=new Je().fromArray(ne);function Ge(k,se,ae,ve){const ee=new Uint8Array(4),Z=s.createTexture();s.bindTexture(k,Z),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ae;xe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,ve,0,s.RGBA,s.UNSIGNED_BYTE,ee):s.texImage2D(se+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ee);return Z}const Y={};Y[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(Ls),Fe(!1),Me(Xc),J(s.CULL_FACE),mt(xi);function J(k){u[k]!==!0&&(s.enable(k),u[k]=!0)}function me(k){u[k]!==!1&&(s.disable(k),u[k]=!1)}function De(k,se){return d[k]!==se?(s.bindFramebuffer(k,se),d[k]=se,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=se),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=se),!0):!1}function be(k,se){let ae=f,ve=!1;if(k){ae=h.get(se),ae===void 0&&(ae=[],h.set(se,ae));const ee=k.textures;if(ae.length!==ee.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,xe=ee.length;Z<xe;Z++)ae[Z]=s.COLOR_ATTACHMENT0+Z;ae.length=ee.length,ve=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,ve=!0);ve&&s.drawBuffers(ae)}function Ye(k){return m!==k?(s.useProgram(k),m=k,!0):!1}const It={[Vi]:s.FUNC_ADD,[dp]:s.FUNC_SUBTRACT,[hp]:s.FUNC_REVERSE_SUBTRACT};It[fp]=s.MIN,It[pp]=s.MAX;const D={[mp]:s.ZERO,[gp]:s.ONE,[vp]:s.SRC_COLOR,[rl]:s.SRC_ALPHA,[Ep]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[yp]:s.DST_ALPHA,[_p]:s.ONE_MINUS_SRC_COLOR,[ol]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[xp]:s.ONE_MINUS_DST_ALPHA,[bp]:s.CONSTANT_COLOR,[wp]:s.ONE_MINUS_CONSTANT_COLOR,[Tp]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(k,se,ae,ve,ee,Z,xe,Oe,lt,st){if(k===xi){v===!0&&(me(s.BLEND),v=!1);return}if(v===!1&&(J(s.BLEND),v=!0),k!==up){if(k!==p||st!==b){if((g!==Vi||y!==Vi)&&(s.blendEquation(s.FUNC_ADD),g=Vi,y=Vi),st)switch(k){case Ts:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFunc(s.ONE,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Yc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ts:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case qc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,x=null,E=null,T=null,C.set(0,0,0),I=0,p=k,b=st}return}ee=ee||se,Z=Z||ae,xe=xe||ve,(se!==g||ee!==y)&&(s.blendEquationSeparate(It[se],It[ee]),g=se,y=ee),(ae!==_||ve!==x||Z!==E||xe!==T)&&(s.blendFuncSeparate(D[ae],D[ve],D[Z],D[xe]),_=ae,x=ve,E=Z,T=xe),(Oe.equals(C)===!1||lt!==I)&&(s.blendColor(Oe.r,Oe.g,Oe.b,lt),C.copy(Oe),I=lt),p=k,b=!1}function ke(k,se){k.side===ii?me(s.CULL_FACE):J(s.CULL_FACE);let ae=k.side===nn;se&&(ae=!ae),Fe(ae),k.blending===Ts&&k.transparent===!1?mt(xi):mt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ve=k.stencilWrite;a.setTest(ve),ve&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Se(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(k){S!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),S=k)}function Me(k){k!==ap?(J(s.CULL_FACE),k!==R&&(k===Xc?s.cullFace(s.BACK):k===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),R=k}function gt(k){k!==F&&(N&&s.lineWidth(k),F=k)}function Se(k,se,ae){k?(J(s.POLYGON_OFFSET_FILL),(P!==se||O!==ae)&&(s.polygonOffset(se,ae),P=se,O=ae)):me(s.POLYGON_OFFSET_FILL)}function We(k){k?J(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function Ot(k){k===void 0&&(k=s.TEXTURE0+U-1),j!==k&&(s.activeTexture(k),j=k)}function Et(k,se,ae){ae===void 0&&(j===null?ae=s.TEXTURE0+U-1:ae=j);let ve=re[ae];ve===void 0&&(ve={type:void 0,texture:void 0},re[ae]=ve),(ve.type!==k||ve.texture!==se)&&(j!==ae&&(s.activeTexture(ae),j=ae),s.bindTexture(k,se||Y[k]),ve.type=k,ve.texture=se)}function L(){const k=re[j];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Q(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(k){He.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),He.copy(k))}function Ne(k){et.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),et.copy(k))}function Te(k,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let ve=ae.get(k);ve===void 0&&(ve=s.getUniformBlockIndex(se,k.name),ae.set(k,ve))}function ue(k,se){const ve=c.get(se).get(k);l.get(se)!==ve&&(s.uniformBlockBinding(se,ve,k.__bindingPointIndex),l.set(se,ve))}function Ve(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},j=null,re={},d={},h=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,x=null,y=null,E=null,T=null,C=new Be(0,0,0),I=0,b=!1,S=null,R=null,F=null,P=null,O=null,He.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:me,bindFramebuffer:De,drawBuffers:be,useProgram:Ye,setBlending:mt,setMaterial:ke,setFlipSided:Fe,setCullFace:Me,setLineWidth:gt,setPolygonOffset:Se,setScissorTest:We,activeTexture:Ot,bindTexture:Et,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:we,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:he,viewport:Ne,reset:Ve}}function _x(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return f?new OffscreenCanvas(L,w):Tr("canvas")}function v(L,w,G){let K=1;const Q=Et(L);if((Q.width>G||Q.height>G)&&(K=G/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const q=Math.floor(K*Q.width),Ae=Math.floor(K*Q.height);d===void 0&&(d=m(q,Ae));const oe=w?m(q,Ae):d;return oe.width=q,oe.height=Ae,oe.getContext("2d").drawImage(L,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ae+")."),oe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function p(L){return L.generateMipmaps}function g(L){s.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,w,G,K,Q=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let q=w;if(w===s.RED&&(G===s.FLOAT&&(q=s.R32F),G===s.HALF_FLOAT&&(q=s.R16F),G===s.UNSIGNED_BYTE&&(q=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.R8UI),G===s.UNSIGNED_SHORT&&(q=s.R16UI),G===s.UNSIGNED_INT&&(q=s.R32UI),G===s.BYTE&&(q=s.R8I),G===s.SHORT&&(q=s.R16I),G===s.INT&&(q=s.R32I)),w===s.RG&&(G===s.FLOAT&&(q=s.RG32F),G===s.HALF_FLOAT&&(q=s.RG16F),G===s.UNSIGNED_BYTE&&(q=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RG8UI),G===s.UNSIGNED_SHORT&&(q=s.RG16UI),G===s.UNSIGNED_INT&&(q=s.RG32UI),G===s.BYTE&&(q=s.RG8I),G===s.SHORT&&(q=s.RG16I),G===s.INT&&(q=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGB8UI),G===s.UNSIGNED_SHORT&&(q=s.RGB16UI),G===s.UNSIGNED_INT&&(q=s.RGB32UI),G===s.BYTE&&(q=s.RGB8I),G===s.SHORT&&(q=s.RGB16I),G===s.INT&&(q=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),G===s.UNSIGNED_INT&&(q=s.RGBA32UI),G===s.BYTE&&(q=s.RGBA8I),G===s.SHORT&&(q=s.RGBA16I),G===s.INT&&(q=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),w===s.RGBA){const Ae=Q?Do:Xe.getTransfer(K);G===s.FLOAT&&(q=s.RGBA32F),G===s.HALF_FLOAT&&(q=s.RGBA16F),G===s.UNSIGNED_BYTE&&(q=Ae===ot?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(L,w){let G;return L?w===null||w===Yi||w===Er?G=s.DEPTH24_STENCIL8:w===kn?G=s.DEPTH32F_STENCIL8:w===Sr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yi||w===Er?G=s.DEPTH_COMPONENT24:w===kn?G=s.DEPTH_COMPONENT32F:w===Sr&&(G=s.DEPTH_COMPONENT16),G}function E(L,w){return p(L)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function T(L){const w=L.target;w.removeEventListener("dispose",T),I(w),w.isVideoTexture&&u.delete(w)}function C(L){const w=L.target;w.removeEventListener("dispose",C),S(w)}function I(L){const w=n.get(L);if(w.__webglInit===void 0)return;const G=L.source,K=h.get(G);if(K){const Q=K[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(L),Object.keys(K).length===0&&h.delete(G)}n.remove(L)}function b(L){const w=n.get(L);s.deleteTexture(w.__webglTexture);const G=L.source,K=h.get(G);delete K[w.__cacheKey],o.memory.textures--}function S(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let Q=0;Q<w.__webglFramebuffer[K].length;Q++)s.deleteFramebuffer(w.__webglFramebuffer[K][Q]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=L.textures;for(let K=0,Q=G.length;K<Q;K++){const q=n.get(G[K]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(L)}let R=0;function F(){R=0}function P(){const L=R;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),R+=1,L}function O(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function U(L,w){const G=n.get(L);if(L.isVideoTexture&&We(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,L,w);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function N(L,w){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){Y(G,L,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function X(L,w){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){Y(G,L,w);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function V(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){J(G,L,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const j={[Mr]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[ml]:s.MIRRORED_REPEAT},re={[cn]:s.NEAREST,[Op]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[Wi]:s.LINEAR_MIPMAP_LINEAR},ce={[Gp]:s.NEVER,[Yp]:s.ALWAYS,[Wp]:s.LESS,[mh]:s.LEQUAL,[$p]:s.EQUAL,[jp]:s.GEQUAL,[Xp]:s.GREATER,[qp]:s.NOTEQUAL};function ne(L,w){if(w.type===kn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===aa||w.magFilter===Vr||w.magFilter===Wi||w.minFilter===On||w.minFilter===aa||w.minFilter===Vr||w.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,j[w.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,j[w.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,j[w.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,re[w.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,ce[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===cn||w.minFilter!==Vr&&w.minFilter!==Wi||w.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function He(L,w){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",T));const K=w.source;let Q=h.get(K);Q===void 0&&(Q={},h.set(K,Q));const q=O(w);if(q!==L.__cacheKey){Q[q]===void 0&&(Q[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[q].usedTimes++;const Ae=Q[L.__cacheKey];Ae!==void 0&&(Q[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&b(w)),L.__cacheKey=q,L.__webglTexture=Q[q].texture}return G}function et(L,w,G){return Math.floor(Math.floor(L/G)/w)}function Ge(L,w,G,K){const q=L.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,K,w.data);else{q.sort((ie,he)=>ie.start-he.start);let Ae=0;for(let ie=1;ie<q.length;ie++){const he=q[Ae],Ne=q[ie],Te=he.start+he.count,ue=et(Ne.start,w.width,4),Ve=et(he.start,w.width,4);Ne.start<=Te+1&&ue===Ve&&et(Ne.start+Ne.count-1,w.width,4)===ue?he.count=Math.max(he.count,Ne.start+Ne.count-he.start):(++Ae,q[Ae]=Ne)}q.length=Ae+1;const oe=s.getParameter(s.UNPACK_ROW_LENGTH),Ee=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ie=0,he=q.length;ie<he;ie++){const Ne=q[ie],Te=Math.floor(Ne.start/4),ue=Math.ceil(Ne.count/4),Ve=Te%w.width,k=Math.floor(Te/w.width),se=ue,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,Ve,k,se,ae,G,K,w.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,oe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Y(L,w,G){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);const Q=He(L,w),q=w.source;t.bindTexture(K,L.__webglTexture,s.TEXTURE0+G);const Ae=n.get(q);if(q.version!==Ae.__version||Q===!0){t.activeTexture(s.TEXTURE0+G);const oe=Xe.getPrimaries(Xe.workingColorSpace),Ee=w.colorSpace===vi?null:Xe.getPrimaries(w.colorSpace),we=w.colorSpace===vi||oe===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=v(w.image,!1,i.maxTextureSize);ie=Ot(w,ie);const he=r.convert(w.format,w.colorSpace),Ne=r.convert(w.type);let Te=x(w.internalFormat,he,Ne,w.colorSpace,w.isVideoTexture);ne(K,w);let ue;const Ve=w.mipmaps,k=w.isVideoTexture!==!0,se=Ae.__version===void 0||Q===!0,ae=q.dataReady,ve=E(w,ie);if(w.isDepthTexture)Te=y(w.format===wr,w.type),se&&(k?t.texStorage2D(s.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,Ne,null));else if(w.isDataTexture)if(Ve.length>0){k&&se&&t.texStorage2D(s.TEXTURE_2D,ve,Te,Ve[0].width,Ve[0].height);for(let ee=0,Z=Ve.length;ee<Z;ee++)ue=Ve[ee],k?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,Ne,ue.data):t.texImage2D(s.TEXTURE_2D,ee,Te,ue.width,ue.height,0,he,Ne,ue.data);w.generateMipmaps=!1}else k?(se&&t.texStorage2D(s.TEXTURE_2D,ve,Te,ie.width,ie.height),ae&&Ge(w,ie,he,Ne)):t.texImage2D(s.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,Ne,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){k&&se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Te,Ve[0].width,Ve[0].height,ie.depth);for(let ee=0,Z=Ve.length;ee<Z;ee++)if(ue=Ve[ee],w.format!==vn)if(he!==null)if(k){if(ae)if(w.layerUpdates.size>0){const xe=Bu(ue.width,ue.height,w.format,w.type);for(const Oe of w.layerUpdates){const lt=ue.data.subarray(Oe*xe/ue.data.BYTES_PER_ELEMENT,(Oe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,Oe,ue.width,ue.height,1,he,lt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ee,Te,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,he,Ne,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ee,Te,ue.width,ue.height,ie.depth,0,he,Ne,ue.data)}else{k&&se&&t.texStorage2D(s.TEXTURE_2D,ve,Te,Ve[0].width,Ve[0].height);for(let ee=0,Z=Ve.length;ee<Z;ee++)ue=Ve[ee],w.format!==vn?he!==null?k?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ee,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,Ne,ue.data):t.texImage2D(s.TEXTURE_2D,ee,Te,ue.width,ue.height,0,he,Ne,ue.data)}else if(w.isDataArrayTexture)if(k){if(se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Te,ie.width,ie.height,ie.depth),ae)if(w.layerUpdates.size>0){const ee=Bu(ie.width,ie.height,w.format,w.type);for(const Z of w.layerUpdates){const xe=ie.data.subarray(Z*ee/ie.data.BYTES_PER_ELEMENT,(Z+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,he,Ne,xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Ne,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,he,Ne,ie.data);else if(w.isData3DTexture)k?(se&&t.texStorage3D(s.TEXTURE_3D,ve,Te,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Ne,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,he,Ne,ie.data);else if(w.isFramebufferTexture){if(se)if(k)t.texStorage2D(s.TEXTURE_2D,ve,Te,ie.width,ie.height);else{let ee=ie.width,Z=ie.height;for(let xe=0;xe<ve;xe++)t.texImage2D(s.TEXTURE_2D,xe,Te,ee,Z,0,he,Ne,null),ee>>=1,Z>>=1}}else if(Ve.length>0){if(k&&se){const ee=Et(Ve[0]);t.texStorage2D(s.TEXTURE_2D,ve,Te,ee.width,ee.height)}for(let ee=0,Z=Ve.length;ee<Z;ee++)ue=Ve[ee],k?ae&&t.texSubImage2D(s.TEXTURE_2D,ee,0,0,he,Ne,ue):t.texImage2D(s.TEXTURE_2D,ee,Te,he,Ne,ue);w.generateMipmaps=!1}else if(k){if(se){const ee=Et(ie);t.texStorage2D(s.TEXTURE_2D,ve,Te,ee.width,ee.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Ne,ie)}else t.texImage2D(s.TEXTURE_2D,0,Te,he,Ne,ie);p(w)&&g(K),Ae.__version=q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function J(L,w,G){if(w.image.length!==6)return;const K=He(L,w),Q=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+G);const q=n.get(Q);if(Q.version!==q.__version||K===!0){t.activeTexture(s.TEXTURE0+G);const Ae=Xe.getPrimaries(Xe.workingColorSpace),oe=w.colorSpace===vi?null:Xe.getPrimaries(w.colorSpace),Ee=w.colorSpace===vi||Ae===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!we&&!ie?he[Z]=v(w.image[Z],!0,i.maxCubemapSize):he[Z]=ie?w.image[Z].image:w.image[Z],he[Z]=Ot(w,he[Z]);const Ne=he[0],Te=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),Ve=x(w.internalFormat,Te,ue,w.colorSpace),k=w.isVideoTexture!==!0,se=q.__version===void 0||K===!0,ae=Q.dataReady;let ve=E(w,Ne);ne(s.TEXTURE_CUBE_MAP,w);let ee;if(we){k&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,Ve,Ne.width,Ne.height);for(let Z=0;Z<6;Z++){ee=he[Z].mipmaps;for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];w.format!==vn?Te!==null?k?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Oe.width,Oe.height,Te,Oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Ve,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Oe.width,Oe.height,Te,ue,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Ve,Oe.width,Oe.height,0,Te,ue,Oe.data)}}}else{if(ee=w.mipmaps,k&&se){ee.length>0&&ve++;const Z=Et(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ve,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){k?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Te,ue,he[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,he[Z].width,he[Z].height,0,Te,ue,he[Z].data);for(let xe=0;xe<ee.length;xe++){const lt=ee[xe].image[Z].image;k?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,lt.width,lt.height,Te,ue,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Ve,lt.width,lt.height,0,Te,ue,lt.data)}}else{k?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,ue,he[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Te,ue,he[Z]);for(let xe=0;xe<ee.length;xe++){const Oe=ee[xe];k?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Te,ue,Oe.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Ve,Te,ue,Oe.image[Z])}}}p(w)&&g(s.TEXTURE_CUBE_MAP),q.__version=Q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function me(L,w,G,K,Q,q){const Ae=r.convert(G.format,G.colorSpace),oe=r.convert(G.type),Ee=x(G.internalFormat,Ae,oe,G.colorSpace),we=n.get(w),ie=n.get(G);if(ie.__renderTarget=w,!we.__hasExternalTextures){const he=Math.max(1,w.width>>q),Ne=Math.max(1,w.height>>q);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Ee,he,Ne,w.depth,0,Ae,oe,null):t.texImage2D(Q,q,Ee,he,Ne,0,Ae,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Se(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Q,ie.__webglTexture,0,gt(w)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Q,ie.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(L,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,L),w.depthBuffer){const K=w.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=y(w.stencilBuffer,Q),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=gt(w);Se(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,q,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,q,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,q,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,L)}else{const K=w.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],Ae=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Ee=x(q.internalFormat,Ae,oe,q.colorSpace),we=gt(w);G&&Se(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,Ee,w.width,w.height):Se(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);const Q=K.__webglTexture,q=gt(w);if(w.depthTexture.format===br)Se(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(w.depthTexture.format===wr)Se(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(L){const w=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=K}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=L.texture.mipmaps;K&&K.length>0?be(w.__webglFramebuffer[0],L):be(w.__webglFramebuffer,L)}else if(G){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),De(w.__webglDepthbuffer[K],L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}else{const K=L.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),De(w.__webglDepthbuffer,L,!1);else{const Q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function It(L,w,G){const K=n.get(L);w!==void 0&&me(K.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ye(L)}function D(L){const w=L.texture,G=n.get(L),K=n.get(w);L.addEventListener("dispose",C);const Q=L.textures,q=L.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)G.__webglFramebuffer[oe][Ee]=s.createFramebuffer()}else G.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)G.__webglFramebuffer[oe]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let oe=0,Ee=Q.length;oe<Ee;oe++){const we=n.get(Q[oe]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&Se(L)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Ee=Q[oe];G.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const we=r.convert(Ee.format,Ee.colorSpace),ie=r.convert(Ee.type),he=x(Ee.internalFormat,we,ie,Ee.colorSpace,L.isXRRenderTarget===!0),Ne=gt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,he,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),De(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),ne(s.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)me(G.__webglFramebuffer[oe][Ee],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else me(G.__webglFramebuffer[oe],L,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(w)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let oe=0,Ee=Q.length;oe<Ee;oe++){const we=Q[oe],ie=n.get(we);let he=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(he=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),ne(he,we),me(G.__webglFramebuffer,L,we,s.COLOR_ATTACHMENT0+oe,he,0),p(we)&&g(he)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(oe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ne(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)me(G.__webglFramebuffer[Ee],L,w,s.COLOR_ATTACHMENT0,oe,Ee);else me(G.__webglFramebuffer,L,w,s.COLOR_ATTACHMENT0,oe,0);p(w)&&g(oe),t.unbindTexture()}L.depthBuffer&&Ye(L)}function mt(L){const w=L.textures;for(let G=0,K=w.length;G<K;G++){const Q=w[G];if(p(Q)){const q=_(L),Ae=n.get(Q).__webglTexture;t.bindTexture(q,Ae),g(q),t.unbindTexture()}}}const ke=[],Fe=[];function Me(L){if(L.samples>0){if(Se(L)===!1){const w=L.textures,G=L.width,K=L.height;let Q=s.COLOR_BUFFER_BIT;const q=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(L),oe=w.length>1;if(oe)for(let we=0;we<w.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ee=L.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<w.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=n.get(w[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,G,K,0,0,G,K,Q,s.NEAREST),l===!0&&(ke.length=0,Fe.length=0,ke.push(s.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ke.push(q),Fe.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Fe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<w.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=n.get(w[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function gt(L){return Math.min(i.maxSamples,L.samples)}function Se(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function We(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Ot(L,w){const G=L.colorSpace,K=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Fs&&G!==vi&&(Xe.getTransfer(G)===ot?(K!==vn||Q!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Et(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=F,this.setTexture2D=U,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=D,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Se}function yx(s,e){function t(n,i=vi){let r;const o=Xe.getTransfer(i);if(n===Hn)return s.UNSIGNED_BYTE;if(n===uc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===uh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return s.BYTE;if(n===lh)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===cc)return s.INT;if(n===Yi)return s.UNSIGNED_INT;if(n===kn)return s.FLOAT;if(n===Fr)return s.HALF_FLOAT;if(n===dh)return s.ALPHA;if(n===hh)return s.RGB;if(n===vn)return s.RGBA;if(n===br)return s.DEPTH_COMPONENT;if(n===wr)return s.DEPTH_STENCIL;if(n===fh)return s.RED;if(n===hc)return s.RED_INTEGER;if(n===ph)return s.RG;if(n===fc)return s.RG_INTEGER;if(n===pc)return s.RGBA_INTEGER;if(n===bo||n===wo||n===To||n===Ao)if(o===ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===bo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===vl||n===_l||n===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xl||n===Ml||n===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xl||n===Ml)return o===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===El||n===bl||n===wl||n===Tl||n===Al||n===Cl||n===Rl||n===Pl||n===Il||n===Ll||n===Dl||n===Nl||n===Fl||n===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===El)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Cl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fl)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bl||n===Ol||n===kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Bl)return o===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Vl||n===Hl||n===Gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`;class Sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ah(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bi({vertexShader:xx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new Ko(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ex extends $s{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new Sx,g={},_=t.getContextAttributes();let x=null,y=null;const E=[],T=[],C=new Ke;let I=null;const b=new Yt;b.viewport=new Je;const S=new Yt;S.viewport=new Je;const R=[b,S],F=new Fg;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=E[Y];return J===void 0&&(J=new Ra,E[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=E[Y];return J===void 0&&(J=new Ra,E[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=E[Y];return J===void 0&&(J=new Ra,E[Y]=J),J.getHandSpace()};function U(Y){const J=T.indexOf(Y.inputSource);if(J===-1)return;const me=E[J];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<E.length;Y++){const J=T[Y];J!==null&&(T[Y]=null,E[Y].disconnect(J))}P=null,O=null,p.reset();for(const Y in g)delete g[Y];e.setRenderTarget(x),f=null,h=null,d=null,i=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,De=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?wr:br,De=_.stencil?Er:Yi);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ye),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ki(h.textureWidth,h.textureHeight,{format:vn,type:Hn,depthTexture:new Th(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ki(f.framebufferWidth,f.framebufferHeight,{format:vn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(Y){for(let J=0;J<Y.removed.length;J++){const me=Y.removed[J],De=T.indexOf(me);De>=0&&(T[De]=null,E[De].disconnect(me))}for(let J=0;J<Y.added.length;J++){const me=Y.added[J];let De=T.indexOf(me);if(De===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=T.length){T.push(me),De=Ye;break}else if(T[Ye]===null){T[Ye]=me,De=Ye;break}if(De===-1)break}const be=E[De];be&&be.connect(me)}}const V=new B,j=new B;function re(Y,J,me){V.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(me.matrixWorld);const De=V.distanceTo(j),be=J.projectionMatrix.elements,Ye=me.projectionMatrix.elements,It=be[14]/(be[10]-1),D=be[14]/(be[10]+1),mt=(be[9]+1)/be[5],ke=(be[9]-1)/be[5],Fe=(be[8]-1)/be[0],Me=(Ye[8]+1)/Ye[0],gt=It*Fe,Se=It*Me,We=De/(-Fe+Me),Ot=We*-Fe;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Et=It+We,L=D+We,w=gt-Ot,G=Se+(De-Ot),K=mt*D/L*Et,Q=ke*D/L*Et;Y.projectionMatrix.makePerspective(w,G,K,Q,Et,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,me=Y.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(me=p.depthFar)),F.near=S.near=b.near=J,F.far=S.far=b.far=me,(P!==F.near||O!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),P=F.near,O=F.far),F.layers.mask=Y.layers.mask|6,b.layers.mask=F.layers.mask&3,S.layers.mask=F.layers.mask&5;const De=Y.parent,be=F.cameras;ce(F,De);for(let Ye=0;Ye<be.length;Ye++)ce(be[Ye],De);be.length===2?re(F,b,S):F.projectionMatrix.copy(b.projectionMatrix),ne(Y,F,De)};function ne(Y,J,me){me===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Us*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(Y){return g[Y]};let He=null;function et(Y,J){if(u=J.getViewerPose(c||o),m=J,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let De=!1;me.length!==F.cameras.length&&(F.cameras.length=0,De=!0);for(let D=0;D<me.length;D++){const mt=me[D];let ke=null;if(f!==null)ke=f.getViewport(mt);else{const Me=d.getViewSubImage(h,mt);ke=Me.viewport,D===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let Fe=R[D];Fe===void 0&&(Fe=new Yt,Fe.layers.enable(D),Fe.viewport=new Je,R[D]=Fe),Fe.matrix.fromArray(mt.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(mt.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(ke.x,ke.y,ke.width,ke.height),D===0&&(F.matrix.copy(Fe.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),De===!0&&F.cameras.push(Fe)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const D=d.getDepthInformation(me[0]);D&&D.isValid&&D.texture&&p.init(D,i.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let D=0;D<me.length;D++){const mt=me[D].camera;if(mt){let ke=g[mt];ke||(ke=new Ah,g[mt]=ke);const Fe=d.getCameraImage(mt);ke.sourceTexture=Fe}}}}for(let me=0;me<E.length;me++){const De=T[me],be=E[me];De!==null&&be!==void 0&&be.update(De,J,c||o)}He&&He(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const Ge=new Bh;Ge.setAnimationLoop(et),this.setAnimationLoop=function(Y){He=Y},this.dispose=function(){}}}const Ni=new Nt,bx=new Ce;function wx(s,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Sh(s)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),d(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===nn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===nn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g),x=_.envMap,y=_.envMapRotation;x&&(p.envMap.value=x,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(Ni)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===nn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(m(_),y=u(_),i[_.id]=y,_.addEventListener("dispose",p));const E=x.program;n.updateUBOMapping(_,E);const T=e.render.frame;r[_.id]!==T&&(h(_),r[_.id]=T)}function u(_){const x=d();_.__bindingPointIndex=x;const y=s.createBuffer(),E=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=i[_.id],y=_.uniforms,E=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,C=y.length;T<C;T++){const I=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,S=I.length;b<S;b++){const R=I[b];if(f(R,T,b,E)===!0){const F=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let U=0;U<P.length;U++){const N=P[U],X=v(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,F+O,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,y,E){const T=_.value,C=x+"_"+y;if(E[C]===void 0)return typeof T=="number"||typeof T=="boolean"?E[C]=T:E[C]=T.clone(),!0;{const I=E[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return E[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function m(_){const x=_.uniforms;let y=0;const E=16;for(let C=0,I=x.length;C<I;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,R=b.length;S<R;S++){const F=b[S],P=Array.isArray(F.value)?F.value:[F.value];for(let O=0,U=P.length;O<U;O++){const N=P[O],X=v(N),V=y%E,j=V%X.boundary,re=V+j;y+=j,re!==0&&E-re<X.storage&&(y+=E-re),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=X.storage}}}const T=y%E;return T>0&&(y+=E-T),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class Ax{constructor(e={}){const{canvas:t=hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let p=null,g=null;const _=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let E=!1;this._outputColorSpace=ct;let T=0,C=0,I=null,b=-1,S=null;const R=new Je,F=new Je;let P=null;const O=new Be(0);let U=0,N=t.width,X=t.height,V=1,j=null,re=null;const ce=new Je(0,0,N,X),ne=new Je(0,0,N,X);let He=!1;const et=new xc;let Ge=!1,Y=!1;const J=new Ce,me=new B,De=new Je,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function It(){return I===null?V:1}let D=n;function mt(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ee,!1),D===null){const z="webgl2";if(D=mt(z,A),D===null)throw mt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ke,Fe,Me,gt,Se,We,Ot,Et,L,w,G,K,Q,q,Ae,oe,Ee,we,ie,he,Ne,Te,ue,Ve;function k(){ke=new B_(D),ke.init(),Te=new yx(D,ke),Fe=new P_(D,ke,e,Te),Me=new vx(D,ke),Fe.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),gt=new z_(D),Se=new sx,We=new _x(D,ke,Me,Se,Fe,Te,gt),Ot=new L_(y),Et=new U_(y),L=new Xg(D),ue=new C_(D,L),w=new O_(D,L,gt,ue),G=new H_(D,w,L,gt),ie=new V_(D,Fe,We),oe=new I_(Se),K=new ix(y,Ot,Et,ke,Fe,ue,oe),Q=new wx(y,Se),q=new ox,Ae=new hx(ke),we=new A_(y,Ot,Et,Me,G,f,l),Ee=new mx(y,G,Fe),Ve=new Tx(D,gt,Fe,Me),he=new R_(D,ke,gt),Ne=new k_(D,ke,gt),gt.programs=K.programs,y.capabilities=Fe,y.extensions=ke,y.properties=Se,y.renderLists=q,y.shadowMap=Ee,y.state=Me,y.info=gt}k();const se=new Ex(y,D);this.xr=se,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ke.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ke.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(N,X,!1))},this.getSize=function(A){return A.set(N,X)},this.setSize=function(A,z,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,X=z,t.width=Math.floor(A*V),t.height=Math.floor(z*V),W===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(N*V,X*V).floor()},this.setDrawingBufferSize=function(A,z,W){N=A,X=z,V=W,t.width=Math.floor(A*W),t.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,z,W,$){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,z,W,$),Me.viewport(R.copy(ce).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,z,W,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,z,W,$),Me.scissor(F.copy(ne).multiplyScalar(V).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(A){Me.setScissorTest(He=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,W=!0){let $=0;if(A){let H=!1;if(I!==null){const te=I.texture.format;H=te===pc||te===fc||te===hc}if(H){const te=I.texture.type,de=te===Hn||te===Yi||te===Sr||te===Er||te===uc||te===dc,ye=we.getClearColor(),pe=we.getClearAlpha(),Ie=ye.r,Ue=ye.g,Re=ye.b;de?(m[0]=Ie,m[1]=Ue,m[2]=Re,m[3]=pe,D.clearBufferuiv(D.COLOR,0,m)):(v[0]=Ie,v[1]=Ue,v[2]=Re,v[3]=pe,D.clearBufferiv(D.COLOR,0,v))}else $|=D.COLOR_BUFFER_BIT}z&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),q.dispose(),Ae.dispose(),Se.dispose(),Ot.dispose(),Et.dispose(),G.dispose(),ue.dispose(),Ve.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",In),se.removeEventListener("sessionend",zc),Ai.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=gt.autoReset,z=Ee.enabled,W=Ee.autoUpdate,$=Ee.needsUpdate,H=Ee.type;k(),gt.autoReset=A,Ee.enabled=z,Ee.autoUpdate=W,Ee.needsUpdate=$,Ee.type=H}function ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){const z=A.target;z.removeEventListener("dispose",Z),xe(z)}function xe(A){Oe(A),Se.remove(A)}function Oe(A){const z=Se.get(A).programs;z!==void 0&&(z.forEach(function(W){K.releaseProgram(W)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,$,H,te){z===null&&(z=be);const de=H.isMesh&&H.matrixWorld.determinant()<0,ye=Yf(A,z,W,$,H);Me.setMaterial($,de);let pe=W.index,Ie=1;if($.wireframe===!0){if(pe=w.getWireframeAttribute(W),pe===void 0)return;Ie=2}const Ue=W.drawRange,Re=W.attributes.position;let Ze=Ue.start*Ie,rt=(Ue.start+Ue.count)*Ie;te!==null&&(Ze=Math.max(Ze,te.start*Ie),rt=Math.min(rt,(te.start+te.count)*Ie)),pe!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,pe.count)):Re!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Re.count));const St=rt-Ze;if(St<0||St===1/0)return;ue.setup(H,$,ye,W,pe);let ut,at=he;if(pe!==null&&(ut=L.get(pe),at=Ne,at.setIndex(ut)),H.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*It()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(H.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*It()),H.isLineSegments?at.setMode(D.LINES):H.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else H.isPoints?at.setMode(D.POINTS):H.isSprite&&at.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pe=H._multiDrawStarts,yt=H._multiDrawCounts,tt=H._multiDrawCount,sn=pe?L.get(pe).bytesPerElement:1,ts=Se.get($).currentProgram.getUniforms();for(let rn=0;rn<tt;rn++)ts.setValue(D,"_gl_DrawID",rn),at.render(Pe[rn]/sn,yt[rn])}else if(H.isInstancedMesh)at.renderInstances(Ze,St,H.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yt=Math.min(W.instanceCount,Pe);at.renderInstances(Ze,St,yt)}else at.render(Ze,St)};function lt(A,z,W){A.transparent===!0&&A.side===ii&&A.forceSinglePass===!1?(A.side=nn,A.needsUpdate=!0,zr(A,z,W),A.side=Ei,A.needsUpdate=!0,zr(A,z,W),A.side=ii):zr(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),g=Ae.get(W),g.init(z),x.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const te=H.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const ye=te[de];lt(ye,W,H),$.add(ye)}else lt(te,W,H),$.add(te)}),g=x.pop(),$},this.compileAsync=function(A,z,W=null){const $=this.compile(A,z,W);return new Promise(H=>{function te(){if($.forEach(function(de){Se.get(de).currentProgram.isReady()&&$.delete(de)}),$.size===0){H(A);return}setTimeout(te,10)}ke.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let st=null;function Gn(A){st&&st(A)}function In(){Ai.stop()}function zc(){Ai.start()}const Ai=new Bh;Ai.setAnimationLoop(Gn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(A){st=A,se.setAnimationLoop(A),A===null?Ai.stop():Ai.start()},se.addEventListener("sessionstart",In),se.addEventListener("sessionend",zc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,I),g=Ae.get(A,x.length),g.init(z),x.push(g),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(J,zn,z.reversedDepth),Y=this.localClippingEnabled,Ge=oe.init(this.clippingPlanes,Y),p=q.get(A,_.length),p.init(),_.push(p),se.enabled===!0&&se.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&ra(te,z,-1/0,y.sortObjects)}ra(A,z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(j,re),Ye=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ye&&we.addToRenderList(p,A),this.info.render.frame++,Ge===!0&&oe.beginShadows();const W=g.state.shadowsArray;Ee.render(W,A,z),Ge===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,H=p.transmissive;if(g.setupLights(),z.isArrayCamera){const te=z.cameras;if(H.length>0)for(let de=0,ye=te.length;de<ye;de++){const pe=te[de];Hc($,H,A,pe)}Ye&&we.render(A);for(let de=0,ye=te.length;de<ye;de++){const pe=te[de];Vc(p,A,pe,pe.viewport)}}else H.length>0&&Hc($,H,A,z),Ye&&we.render(A),Vc(p,A,z);I!==null&&C===0&&(We.updateMultisampleRenderTarget(I),We.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,z),ue.resetDefaultState(),b=-1,S=null,x.pop(),x.length>0?(g=x[x.length-1],Ge===!0&&oe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function ra(A,z,W,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||et.intersectsSprite(A)){$&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const de=G.update(A),ye=A.material;ye.visible&&p.push(A,de,ye,W,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||et.intersectsObject(A))){const de=G.update(A),ye=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),De.copy(de.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(ye)){const pe=de.groups;for(let Ie=0,Ue=pe.length;Ie<Ue;Ie++){const Re=pe[Ie],Ze=ye[Re.materialIndex];Ze&&Ze.visible&&p.push(A,de,Ze,W,De.z,Re)}}else ye.visible&&p.push(A,de,ye,W,De.z,null)}}const te=A.children;for(let de=0,ye=te.length;de<ye;de++)ra(te[de],z,W,$)}function Vc(A,z,W,$){const H=A.opaque,te=A.transmissive,de=A.transparent;g.setupLightsView(W),Ge===!0&&oe.setGlobalState(y.clippingPlanes,W),$&&Me.viewport(R.copy($)),H.length>0&&kr(H,z,W),te.length>0&&kr(te,z,W),de.length>0&&kr(de,z,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Hc(A,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Ki(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Fr:Hn,minFilter:Wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const te=g.state.transmissionRenderTarget[$.id],de=$.viewport||R;te.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const ye=y.getRenderTarget(),pe=y.getActiveCubeFace(),Ie=y.getActiveMipmapLevel();y.setRenderTarget(te),y.getClearColor(O),U=y.getClearAlpha(),U<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&we.render(W);const Ue=y.toneMapping;y.toneMapping=Mi;const Re=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),Ge===!0&&oe.setGlobalState(y.clippingPlanes,$),kr(A,W,$),We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let rt=0,St=z.length;rt<St;rt++){const ut=z[rt],at=ut.object,Pe=ut.geometry,yt=ut.material,tt=ut.group;if(yt.side===ii&&at.layers.test($.layers)){const sn=yt.side;yt.side=nn,yt.needsUpdate=!0,Gc(at,W,$,Pe,yt,tt),yt.side=sn,yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(We.updateMultisampleRenderTarget(te),We.updateRenderTargetMipmap(te))}y.setRenderTarget(ye,pe,Ie),y.setClearColor(O,U),Re!==void 0&&($.viewport=Re),y.toneMapping=Ue}function kr(A,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,te=A.length;H<te;H++){const de=A[H],ye=de.object,pe=de.geometry,Ie=de.group;let Ue=de.material;Ue.allowOverride===!0&&$!==null&&(Ue=$),ye.layers.test(W.layers)&&Gc(ye,z,W,pe,Ue,Ie)}}function Gc(A,z,W,$,H,te){A.onBeforeRender(y,z,W,$,H,te),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(y,z,W,$,A,te),H.transparent===!0&&H.side===ii&&H.forceSinglePass===!1?(H.side=nn,H.needsUpdate=!0,y.renderBufferDirect(W,z,$,H,A,te),H.side=Ei,H.needsUpdate=!0,y.renderBufferDirect(W,z,$,H,A,te),H.side=ii):y.renderBufferDirect(W,z,$,H,A,te),A.onAfterRender(y,z,W,$,H,te)}function zr(A,z,W){z.isScene!==!0&&(z=be);const $=Se.get(A),H=g.state.lights,te=g.state.shadowsArray,de=H.state.version,ye=K.getParameters(A,H.state,te,z,W),pe=K.getProgramCacheKey(ye);let Ie=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?Et:Ot).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",Z),Ie=new Map,$.programs=Ie);let Ue=Ie.get(pe);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===de)return $c(A,ye),Ue}else ye.uniforms=K.getUniforms(A),A.onBeforeCompile(ye,y),Ue=K.acquireProgram(ye,pe),Ie.set(pe,Ue),$.uniforms=ye.uniforms;const Re=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=oe.uniform),$c(A,ye),$.needsLights=Zf(A),$.lightsStateVersion=de,$.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function Wc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Co.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function $c(A,z){const W=Se.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Yf(A,z,W,$,H){z.isScene!==!0&&(z=be),We.resetTextureUnits();const te=z.fog,de=$.isMeshStandardMaterial?z.environment:null,ye=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Fs,pe=($.isMeshStandardMaterial?Et:Ot).get($.envMap||de),Ie=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Re=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let St=Mi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(St=y.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ut!==void 0?ut.length:0,Pe=Se.get($),yt=g.state.lights;if(Ge===!0&&(Y===!0||A!==S)){const $t=A===S&&$.id===b;oe.setState($,A,$t)}let tt=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==yt.state.version||Pe.outputColorSpace!==ye||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isBatchedMesh&&Pe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==pe||$.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Ie||Pe.vertexTangents!==Ue||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==rt||Pe.toneMapping!==St||Pe.morphTargetsCount!==at)&&(tt=!0):(tt=!0,Pe.__version=$.version);let sn=Pe.currentProgram;tt===!0&&(sn=zr($,z,H));let ts=!1,rn=!1,Zs=!1;const xt=sn.getUniforms(),un=Pe.uniforms;if(Me.useProgram(sn.program)&&(ts=!0,rn=!0,Zs=!0),$.id!==b&&(b=$.id,rn=!0),ts||S!==A){Me.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(D,"projectionMatrix",A.projectionMatrix),xt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Kt=xt.map.cameraPosition;Kt!==void 0&&Kt.setValue(D,me.setFromMatrixPosition(A.matrixWorld)),Fe.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&xt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,rn=!0,Zs=!0)}if(H.isSkinnedMesh){xt.setOptional(D,H,"bindMatrix"),xt.setOptional(D,H,"bindMatrixInverse");const $t=H.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),xt.setValue(D,"boneTexture",$t.boneTexture,We))}H.isBatchedMesh&&(xt.setOptional(D,H,"batchingTexture"),xt.setValue(D,"batchingTexture",H._matricesTexture,We),xt.setOptional(D,H,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",H._indirectTexture,We),xt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",H._colorsTexture,We));const dn=W.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ie.update(H,W,sn),(rn||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,xt.setValue(D,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=pe,un.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(un.envMapIntensity.value=z.environmentIntensity),rn&&(xt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&Kf(un,Zs),te&&$.fog===!0&&Q.refreshFogUniforms(un,te),Q.refreshMaterialUniforms(un,$,V,X,g.state.transmissionRenderTarget[A.id]),Co.upload(D,Wc(Pe),un,We)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Co.upload(D,Wc(Pe),un,We),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&xt.setValue(D,"center",H.center),xt.setValue(D,"modelViewMatrix",H.modelViewMatrix),xt.setValue(D,"normalMatrix",H.normalMatrix),xt.setValue(D,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const $t=$.uniformsGroups;for(let Kt=0,oa=$t.length;Kt<oa;Kt++){const Ci=$t[Kt];Ve.update(Ci,sn),Ve.bind(Ci,sn)}}return sn}function Kf(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Zf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,z,W){const $=Se.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Se.get(A.texture).__webglTexture=z,Se.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const W=Se.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const Jf=D.createFramebuffer();this.setRenderTarget=function(A,z=0,W=0){I=A,T=z,C=W;let $=!0,H=null,te=!1,de=!1;if(A){const pe=Se.get(A);if(pe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(A);else if(pe.__hasExternalTextures)We.rebindTextures(A,Se.get(A.texture).__webglTexture,Se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Re=A.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&Se.has(Re)&&(A.width!==Re.image.width||A.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const Ue=Se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?H=Ue[z][W]:H=Ue[z],te=!0):A.samples>0&&We.useMultisampledRTT(A)===!1?H=Se.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[W]:H=Ue,R.copy(A.viewport),F.copy(A.scissor),P=A.scissorTest}else R.copy(ce).multiplyScalar(V).floor(),F.copy(ne).multiplyScalar(V).floor(),P=He;if(W!==0&&(H=Jf),Me.bindFramebuffer(D.FRAMEBUFFER,H)&&$&&Me.drawBuffers(A,H),Me.viewport(R),Me.scissor(F),Me.setScissorTest(P),te){const pe=Se.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,pe.__webglTexture,W)}else if(de){const pe=z;for(let Ie=0;Ie<A.textures.length;Ie++){const Ue=Se.get(A.textures[Ie]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,W,pe)}}else if(A!==null&&W!==0){const pe=Se.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(A,z,W,$,H,te,de,ye=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe){Me.bindFramebuffer(D.FRAMEBUFFER,pe);try{const Ie=A.textures[ye],Ue=Ie.format,Re=Ie.type;if(!Fe.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&W>=0&&W<=A.height-H&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(z,W,$,H,Te.convert(Ue),Te.convert(Re),te))}finally{const Ie=I!==null?Se.get(I).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,$,H,te,de,ye=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(pe=pe[de]),pe)if(z>=0&&z<=A.width-$&&W>=0&&W<=A.height-H){Me.bindFramebuffer(D.FRAMEBUFFER,pe);const Ie=A.textures[ye],Ue=Ie.format,Re=Ie.type;if(!Fe.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(z,W,$,H,Te.convert(Ue),Te.convert(Re),0);const rt=I!==null?Se.get(I).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,rt);const St=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await fm(D,St,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te),D.deleteBuffer(Ze),D.deleteSync(St),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,W=0){const $=Math.pow(2,-W),H=Math.floor(A.image.width*$),te=Math.floor(A.image.height*$),de=z!==null?z.x:0,ye=z!==null?z.y:0;We.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,de,ye,H,te),Me.unbindTexture()};const Qf=D.createFramebuffer(),ep=D.createFramebuffer();this.copyTextureToTexture=function(A,z,W=null,$=null,H=0,te=null){te===null&&(H!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=H,H=0):te=0);let de,ye,pe,Ie,Ue,Re,Ze,rt,St;const ut=A.isCompressedTexture?A.mipmaps[te]:A.image;if(W!==null)de=W.max.x-W.min.x,ye=W.max.y-W.min.y,pe=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Ue=W.min.y,Re=W.isBox3?W.min.z:0;else{const dn=Math.pow(2,-H);de=Math.floor(ut.width*dn),ye=Math.floor(ut.height*dn),A.isDataArrayTexture?pe=ut.depth:A.isData3DTexture?pe=Math.floor(ut.depth*dn):pe=1,Ie=0,Ue=0,Re=0}$!==null?(Ze=$.x,rt=$.y,St=$.z):(Ze=0,rt=0,St=0);const at=Te.convert(z.format),Pe=Te.convert(z.type);let yt;z.isData3DTexture?(We.setTexture3D(z,0),yt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(We.setTexture2DArray(z,0),yt=D.TEXTURE_2D_ARRAY):(We.setTexture2D(z,0),yt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const tt=D.getParameter(D.UNPACK_ROW_LENGTH),sn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ts=D.getParameter(D.UNPACK_SKIP_PIXELS),rn=D.getParameter(D.UNPACK_SKIP_ROWS),Zs=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ie),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);const xt=A.isDataArrayTexture||A.isData3DTexture,un=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const dn=Se.get(A),$t=Se.get(z),Kt=Se.get(dn.__renderTarget),oa=Se.get($t.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,oa.__webglFramebuffer);for(let Ci=0;Ci<pe;Ci++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(A).__webglTexture,H,Re+Ci),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(z).__webglTexture,te,St+Ci)),D.blitFramebuffer(Ie,Ue,de,ye,Ze,rt,de,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Se.has(A)){const dn=Se.get(A),$t=Se.get(z);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Qf),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,ep);for(let Kt=0;Kt<pe;Kt++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,dn.__webglTexture,H,Re+Kt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,dn.__webglTexture,H),un?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,te,St+Kt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,te),H!==0?D.blitFramebuffer(Ie,Ue,de,ye,Ze,rt,de,ye,D.COLOR_BUFFER_BIT,D.NEAREST):un?D.copyTexSubImage3D(yt,te,Ze,rt,St+Kt,Ie,Ue,de,ye):D.copyTexSubImage2D(yt,te,Ze,rt,Ie,Ue,de,ye);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else un?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(yt,te,Ze,rt,St,de,ye,pe,at,Pe,ut.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,te,Ze,rt,St,de,ye,pe,at,ut.data):D.texSubImage3D(yt,te,Ze,rt,St,de,ye,pe,at,Pe,ut):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,te,Ze,rt,de,ye,at,Pe,ut.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,te,Ze,rt,ut.width,ut.height,at,ut.data):D.texSubImage2D(D.TEXTURE_2D,te,Ze,rt,de,ye,at,Pe,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,sn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ts),D.pixelStorei(D.UNPACK_SKIP_ROWS,rn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Zs),te===0&&z.generateMipmaps&&D.generateMipmap(yt),Me.unbindTexture()},this.initRenderTarget=function(A){Se.get(A).__webglFramebuffer===void 0&&We.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?We.setTextureCube(A,0):A.isData3DTexture?We.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?We.setTexture2DArray(A,0):We.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){T=0,C=0,I=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class An{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new An);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],m=n[8],v=i[0],p=i[1],g=i[2],_=i[3],x=i[4],y=i[5],E=i[6],T=i[7],C=i[8];return r[0]=o*v+a*_+l*E,r[1]=o*p+a*x+l*T,r[2]=o*g+a*y+l*C,r[3]=c*v+u*_+d*E,r[4]=c*p+u*x+d*T,r[5]=c*g+u*y+d*C,r[6]=h*v+f*_+m*E,r[7]=h*p+f*x+m*T,r[8]=h*g+f*y+m*C,t}scale(e,t){t===void 0&&(t=new An);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){u=d;do h=d-u,r[h+i*o]+=r[h+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];u=d;do h=d-u,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*f;while(--u)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new An);const t=3,n=6,i=Cx;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const u=n;let d;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=u;do d=u-c,i[d+n*r]+=i[d+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const h=i[r+n*o]/i[r+n*r];c=u;do d=u-c,i[d+n*o]=d<=r?0:i[d+n*o]-i[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=i[r+n*o]/i[r+n*r];c=n;do d=n-c,i[d+n*o]=i[d+n*o]-i[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/i[r+n*r];c=n;do d=n-c,i[d+n*r]=i[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=i[t+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,d)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,u=t*a,d=t*l,h=n*a,f=n*l,m=i*l,v=r*o,p=r*a,g=r*l,_=this.elements;return _[0]=1-(h+m),_[1]=u-g,_[2]=d+p,_[3]=u+g,_[4]=1-(c+m),_[5]=f-v,_[6]=d-p,_[7]=f+v,_[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new An);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Cx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new An([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Rx,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Px;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(ld),ld.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Rx=new M,Px=new M,ld=new M;class vt{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,cd),c=cd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new vt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const n=ud,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=ud,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(i,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(m<0||f>m)}}const cd=new M,ud=[new M,new M,new M,new M,new M,new M,new M,new M];class dd{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class Hh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class Rt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Ix,i=Lx;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Rt);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=n*u+o*a+i*c-r*l,t.y=i*u+o*l+r*a-n*c,t.z=r*u+o*c+n*l-i*a,t.w=o*u-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new Rt);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Rt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*i,d=c*i+l*n-o*r,h=c*r+o*i-a*n,f=-o*n-a*i-l*r;return t.x=u*c+f*-o+d*-l-h*-a,t.y=d*c+f*-a+h*-o-u*-l,t.z=h*c+f*-l+u*-a-d*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):i==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):i==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):i==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Rt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Rt);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,d=e.w,h,f,m,v,p;return f=i*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),m=Math.sin(h),v=Math.sin((1-t)*h)/m,p=Math.sin(t*h)/m):(v=1-t,p=t),n.x=v*i+p*l,n.y=v*r+p*c,n.z=v*o+p*u,n.w=v*a+p*d,n}integrate(e,t,n,i){i===void 0&&(i=new Rt);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=t*.5;return i.x+=h*(r*d+o*u-a*c),i.y+=h*(o*d+a*l-r*u),i.z+=h*(a*d+r*c-o*l),i.w+=h*(-r*l-o*c-a*u),i}}const Ix=new M,Lx=new M,Dx={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class fe{constructor(e){e===void 0&&(e={}),this.id=fe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}fe.idCounter=0;fe.types=Dx;class nt{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new Rt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return nt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return nt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(hd),hd.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const hd=new Rt;class mr extends fe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:fe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];mr.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new M,o=new M;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const u=new M;let d=-1,h=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){u.copy(n.faceNormals[m]),r.vmult(u,u);const v=u.dot(o);v>h&&(h=v,d=m)}const f=[];for(let m=0;m<n.faces[d].length;m++){const v=n.vertices[n.faces[d][m]],p=new M;p.copy(v),r.vmult(p,p),i.vadd(p,p),f.push(p)}d>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new M,u=new M,d=new M,h=new M,f=new M,m=new M;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],c);const _=p.testSepAxis(c,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const x=a?a[_]:_;c.copy(p.faceNormals[x]),n.vmult(c,c);const y=p.testSepAxis(c,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],u);const _=p.testSepAxis(u,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const g=l?l.length:e.faces.length;for(let _=0;_<g;_++){const x=l?l[_]:_;u.copy(e.faceNormals[x]),r.vmult(u,u);const y=p.testSepAxis(u,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(u))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],h);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],f),h.cross(f,m),!m.almostZero()){m.normalize();const x=p.testSepAxis(m,e,t,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(m))}}return i.vsub(t,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;mr.project(a,e,n,i,Ha),mr.project(t,e,r,o,Ga);const l=Ha[0],c=Ha[1],u=Ga[0],d=Ga[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new M,c=new M,u=new M,d=new M,h=new M,f=new M,m=new M,v=new M,p=this,g=[],_=i,x=g;let y=-1,E=Number.MAX_VALUE;for(let S=0;S<p.faces.length;S++){l.copy(p.faceNormals[S]),n.vmult(l,l);const R=l.dot(e);R<E&&(E=R,y=S)}if(y<0)return;const T=p.faces[y];T.connectedFaces=[];for(let S=0;S<p.faces.length;S++)for(let R=0;R<p.faces[S].length;R++)T.indexOf(p.faces[S][R])!==-1&&S!==y&&T.connectedFaces.indexOf(S)===-1&&T.connectedFaces.push(S);const C=T.length;for(let S=0;S<C;S++){const R=p.vertices[T[S]],F=p.vertices[T[(S+1)%C]];R.vsub(F,c),u.copy(c),n.vmult(u,u),t.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),t.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(R),n.vmult(f,f),t.vadd(f,f);const P=T.connectedFaces[S];m.copy(this.faceNormals[P]);const O=this.getPlaneConstantOfFace(P);v.copy(m),n.vmult(v,v);const U=O-v.dot(t);for(this.clipFaceAgainstPlane(_,x,v,U);_.length;)_.shift();for(;x.length;)_.push(x.shift())}m.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);v.copy(m),n.vmult(v,v);const b=I-v.dot(t);for(let S=0;S<_.length;S++){let R=v.dot(_[S])+b;if(R<=r&&(console.log(`clamped: depth=${R} to minDist=${r}`),R=r),R<=o){const F=_[S];if(R<=1e-6){const P={point:F,normal:v,depth:R};a.push(P)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let u=0;u<a;u++){if(c=e[u],o=n.dot(c)+i,r<0)if(o<0){const d=new M;d.copy(c),t.push(d)}else{const d=new M;l.lerp(c,r/(r-o),d),t.push(d)}else if(o<0){const d=new M;l.lerp(c,r/(r-o),d),t.push(d),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,u,d,h=new M;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);const m=h;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(u===void 0||m.y>u)&&(u=m.y),(l===void 0||m.z<l)&&(l=m.z),(d===void 0||m.z>d)&&(d=m.z)}n.set(o,a,l),i.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=new M;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new M;e.vsub(l,c);const u=a.dot(c),d=new M;r.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(e,t,n,i,r){const o=e.vertices.length,a=Nx;let l=0,c=0;const u=Fx,d=e.vertices;u.setZero(),nt.vectorToLocalFrame(n,i,t,a),nt.pointToLocalFrame(n,i,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const m=d[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Ha=[],Ga=[];new M;const Nx=new M,Fx=new M;class Tc extends fe{constructor(e){super({type:fe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new mr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),Tc.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)mi.set(r[o][0],r[o][1],r[o][2]),t.vmult(mi,mi),e.vadd(mi,mi),n(mi.x,mi.y,mi.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;Ln[0].set(r.x,r.y,r.z),Ln[1].set(-r.x,r.y,r.z),Ln[2].set(-r.x,-r.y,r.z),Ln[3].set(-r.x,-r.y,-r.z),Ln[4].set(r.x,-r.y,-r.z),Ln[5].set(r.x,r.y,-r.z),Ln[6].set(-r.x,r.y,-r.z),Ln[7].set(r.x,-r.y,r.z);const o=Ln[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Ln[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),d>i.z&&(i.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const mi=new M,Ln=[new M,new M,new M,new M,new M,new M,new M,new M],Ac={DYNAMIC:1,STATIC:2,KINEMATIC:4},Cc={AWAKE:0,SLEEPY:1,SLEEPING:2};class ge extends Hh{constructor(e){e===void 0&&(e={}),super(),this.id=ge.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ge.STATIC:ge.DYNAMIC,typeof e.type==typeof ge.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ge.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Rt,this.initQuaternion=new Rt,this.previousQuaternion=new Rt,this.interpolatedQuaternion=new Rt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new An,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new An,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new vt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ge.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ge.SLEEPING&&this.dispatchEvent(ge.wakeupEvent)}sleep(){this.sleepState=ge.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ge.AWAKE&&n<i?(this.sleepState=ge.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ge.sleepyEvent)):t===ge.SLEEPY&&n>i?this.wakeUp():t===ge.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ge.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ge.SLEEPING||this.type===ge.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,r=new Rt;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=Ux,o=Bx,a=this.quaternion,l=this.aabb,c=Ox;for(let u=0;u!==i;u++){const d=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=kx,i=zx;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const n=Vx;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==ge.DYNAMIC)return;const n=Hx,i=Gx;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ge.DYNAMIC&&(this.sleepState===ge.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ge.DYNAMIC)return;this.sleepState===ge.SLEEPING&&this.wakeUp();const n=t,i=Wx;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=$x;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==ge.DYNAMIC)return;const n=Xx,i=qx;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=jx;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Tc.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ge.DYNAMIC||this.type===ge.KINEMATIC)||this.sleepState===ge.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*e;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const m=d.elements,v=this.angularFactor,p=l.x*v.x,g=l.y*v.y,_=l.z*v.z;r.x+=e*(m[0]*p+m[1]*g+m[2]*_),r.y+=e*(m[3]*p+m[4]*g+m[5]*_),r.z+=e*(m[6]*p+m[7]*g+m[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ge.idCounter=0;ge.COLLIDE_EVENT_NAME="collide";ge.DYNAMIC=Ac.DYNAMIC;ge.STATIC=Ac.STATIC;ge.KINEMATIC=Ac.KINEMATIC;ge.AWAKE=Cc.AWAKE;ge.SLEEPY=Cc.SLEEPY;ge.SLEEPING=Cc.SLEEPING;ge.wakeupEvent={type:"wakeup"};ge.sleepyEvent={type:"sleepy"};ge.sleepEvent={type:"sleep"};const Ux=new M,Bx=new Rt,Ox=new vt,kx=new An,zx=new An;new An;const Vx=new M,Hx=new M,Gx=new M,Wx=new M,$x=new M,Xx=new M,qx=new M,jx=new M;class Yx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ge.STATIC)!==0||e.sleepState===ge.SLEEPING)&&((t.type&ge.STATIC)!==0||t.sleepState===ge.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=Kx;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Zx,i=Jx,r=Qx,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Kx=new M;new M;new Rt;new M;const Zx={keys:[]},Jx=[],Qx=[];new M;new M;new M;class eM extends Yx{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class Bo{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Gh,Wh,$h,Xh,qh,jh,Yh;const Rc={CLOSEST:1,ANY:2,ALL:4};Gh=fe.types.SPHERE;Wh=fe.types.PLANE;$h=fe.types.BOX;Xh=fe.types.CYLINDER;qh=fe.types.CONVEXPOLYHEDRON;jh=fe.types.HEIGHTFIELD;Yh=fe.types.TRIMESH;class Ct{get[Gh](){return this._intersectSphere}get[Wh](){return this._intersectPlane}get[$h](){return this._intersectBox}get[Xh](){return this._intersectConvex}get[qh](){return this._intersectConvex}get[jh](){return this._intersectHeightfield}get[Yh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ct.ANY,this.result=new Bo,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Ct.ANY,this.result=t.result||new Bo,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(fd),Wa.length=0,e.broadphase.aabbQuery(e,fd,Wa),this.intersectBodies(Wa),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=tM,r=nM;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(gM(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const u=new M;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new M,v=new M,p=new M;o.vsub(n,m);const g=-c.dot(m)/f;l.scale(g,v),o.vadd(v,p),this.reportIntersection(c,p,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=iM;o.from.copy(this.from),o.to.copy(this.to),nt.pointToLocalFrame(n,t,o.from,o.from),nt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=sM;let l,c,u,d;l=c=0,u=d=e.data.length-1;const h=new vt;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let m=c;m<d;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,m,!1),nt.pointToWorldFrame(n,t,e.pillarOffset,go),this._intersectConvex(e.pillarConvex,t,go,i,r,pd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),nt.pointToWorldFrame(n,t,e.pillarOffset,go),this._intersectConvex(e.pillarConvex,t,go,i,r,pd)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=rM,m=oM;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1);else{const v=(-u-Math.sqrt(h))/(2*c),p=(-u+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=aM,l=md,c=o&&o.faceList||null,u=e.faces,d=e.vertices,h=e.faceNormals,f=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=c?c.length:u.length,_=this.result;for(let x=0;!_.shouldStop&&x<g;x++){const y=c?c[x]:x,E=u[y],T=h[y],C=t,I=n;l.copy(d[E[0]]),C.vmult(l,l),l.vadd(I,l),l.vsub(m,l),C.vmult(T,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const S=a.dot(l)/b;if(!(S<0)){f.scale(S,Zt),Zt.vadd(m,Zt),Mn.copy(d[E[0]]),C.vmult(Mn,Mn),I.vadd(Mn,Mn);for(let R=1;!_.shouldStop&&R<E.length-1;R++){Dn.copy(d[E[R]]),Nn.copy(d[E[R+1]]),C.vmult(Dn,Dn),C.vmult(Nn,Nn),I.vadd(Dn,Dn),I.vadd(Nn,Nn);const F=Zt.distanceTo(m);!(Ct.pointInTriangle(Zt,Mn,Dn,Nn)||Ct.pointInTriangle(Zt,Dn,Mn,Nn))||F>p||this.reportIntersection(a,Zt,r,i,y)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=lM,l=pM,c=mM,u=md,d=cM,h=uM,f=dM,m=fM,v=hM,p=e.indices;e.vertices;const g=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),nt.vectorToLocalFrame(n,t,x,d),nt.pointToLocalFrame(n,t,g,h),nt.pointToLocalFrame(n,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,d),d.normalize();const y=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let E=0,T=l.length;!this.result.shouldStop&&E!==T;E++){const C=l[E];e.getNormal(C,a),e.getVertex(p[C*3],Mn),Mn.vsub(h,u);const I=d.dot(a),b=a.dot(u)/I;if(b<0)continue;d.scale(b,Zt),Zt.vadd(h,Zt),e.getVertex(p[C*3+1],Dn),e.getVertex(p[C*3+2],Nn);const S=Zt.distanceSquared(h);!(Ct.pointInTriangle(Zt,Dn,Mn,Nn)||Ct.pointInTriangle(Zt,Mn,Dn,Nn))||S>y||(nt.vectorToWorldFrame(t,a,v),nt.pointToWorldFrame(n,t,Zt,m),this.reportIntersection(v,m,r,i,C))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ct.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Ct.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case Ct.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Gi),n.vsub(t,sr),e.vsub(t,$a);const r=Gi.dot(Gi),o=Gi.dot(sr),a=Gi.dot($a),l=sr.dot(sr),c=sr.dot($a);let u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}}Ct.CLOSEST=Rc.CLOSEST;Ct.ANY=Rc.ANY;Ct.ALL=Rc.ALL;const fd=new vt,Wa=[],sr=new M,$a=new M,tM=new M,nM=new Rt,Zt=new M,Mn=new M,Dn=new M,Nn=new M;new M;new Bo;const pd={faceList:[0]},go=new M,iM=new Ct,sM=[],rM=new M,oM=new M,aM=new M;new M;new M;const md=new M,lM=new M,cM=new M,uM=new M,dM=new M,hM=new M,fM=new M;new vt;const pM=[],mM=new nt,Gi=new M,vo=new M;function gM(s,e,t){t.vsub(s,Gi);const n=Gi.dot(e);return e.scale(n,vo),vo.vadd(s,vo),t.distanceTo(vo)}class vM{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class gd{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Br{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Br.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new gd,this.jacobianElementB=new gd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return r.scale(c,vd),a.scale(u,_d),n.invInertiaWorldSolve.vmult(o,yd),i.invInertiaWorldSolve.vmult(l,xd),e.multiplyVectors(vd,yd)+t.multiplyVectors(_d,xd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,_o),c+=_o.dot(e.rotational),l.vmult(t.rotational,_o),c+=_o.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=_M;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Br.idCounter=0;const vd=new M,_d=new M,yd=new M,xd=new M,_o=new M,_M=new M;class yM extends Br{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=xM,c=MM,u=i.velocity,d=i.angularVelocity;i.force,i.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const m=SM,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),x=this.restitution+1,y=x*h.dot(g)-x*u.dot(g)+f.dot(c)-d.dot(l),E=this.computeGiMf();return-_*t-y*n-e*E}getImpactVelocityAlongNormal(){const e=EM,t=bM,n=wM,i=TM,r=AM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const xM=new M,MM=new M,SM=new M,EM=new M,bM=new M,wM=new M,TM=new M,AM=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Md extends Br{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=CM,o=RM,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*t-e*d}}const CM=new M,RM=new M;class zs{constructor(e,t,n){n=vM.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=zs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}zs.idCounter=0;class $i{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=$i.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}$i.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new Ct;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class PM extends fe{constructor(){super({type:fe.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Kn.set(0,0,1),t.vmult(Kn,Kn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Kn.x===1?i.x=e.x:Kn.x===-1&&(n.x=e.x),Kn.y===1?i.y=e.y:Kn.y===-1&&(n.y=e.y),Kn.z===1?i.z=e.z:Kn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Kn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class Fn{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new vt,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const r=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;r.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(r[l].insert(e,t,n+1))return!0;a&&(r.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Fn({aabb:new vt({lowerBound:new M(0,0,0)})}),new Fn({aabb:new vt({lowerBound:new M(1,0,0)})}),new Fn({aabb:new vt({lowerBound:new M(1,1,0)})}),new Fn({aabb:new vt({lowerBound:new M(1,1,1)})}),new Fn({aabb:new vt({lowerBound:new M(0,1,1)})}),new Fn({aabb:new vt({lowerBound:new M(0,0,1)})}),new Fn({aabb:new vt({lowerBound:new M(1,0,1)})}),new Fn({aabb:new vt({lowerBound:new M(0,1,0)})})),n.vsub(t,Fi),Fi.scale(.5,Fi);const r=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=r;const l=a.aabb.lowerBound;l.x*=Fi.x,l.y*=Fi.y,l.z*=Fi.z,l.vadd(t,l),l.vadd(Fi,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(yo),yo.toLocalFrame(t,yo),this.aabbQuery(yo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class IM extends Fn{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const Fi=new M,yo=new vt;class Oo extends fe{constructor(e,t){super({type:fe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new vt,this.edges=null,this.scale=new M(1,1,1),this.tree=new IM,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new vt,i=new M,r=new M,o=new M,a=[i,r,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],r),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){xo.copy(e);const n=this.scale,i=n.x,r=n.y,o=n.z,a=xo.lowerBound,l=xo.upperBound;return a.x/=i,a.y/=r,a.z/=o,l.x/=i,l.y/=r,l.z/=o,this.tree.aabbQuery(xo,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=LM,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,r=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(r,bd),this.getVertex(o,wd),this.getVertex(a,Td),Oo.computeNormal(wd,bd,Td,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,r)=>{const o=i<r?`${i}_${r}`:`${r}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const r=i*3,o=this.indices[r],a=this.indices[r+1],l=this.indices[r+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const r=n[i].split("_");this.edges[2*i]=parseInt(r[0],10),this.edges[2*i+1]=parseInt(r[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=DM,i=NM;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,Ed),n.vsub(t,Sd),Sd.cross(Ed,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),nt.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const r=e*3;this.getVertex(this.indices[r],t),this.getVertex(this.indices[r+1],n),this.getVertex(this.indices[r+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(Ui);const n=Ui.upperBound.x-Ui.lowerBound.x,i=Ui.upperBound.y-Ui.lowerBound.y,r=Ui.upperBound.z-Ui.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*r*2*r),1/12*e*(2*n*2*n+2*r*2*r),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const r=FM;this.getVertex(0,r),t.copy(r),n.copy(r);for(let o=0;o!==i;o++)this.getVertex(o,r),r.x<t.x?t.x=r.x:r.x>n.x&&(n.x=r.x),r.y<t.y?t.y=r.y:r.y>n.y&&(n.y=r.y),r.z<t.z?t.z=r.z:r.z>n.z&&(n.z=r.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new M;for(let i=0,r=t.length/3;i!==r;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=UM,o=BM;r.position=e,r.quaternion=t,this.aabb.toWorldFrame(r,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,r){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),r===void 0&&(r=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const u=c/i*r,d=l/n*Math.PI*2,h=(e+t*Math.cos(d))*Math.cos(u),f=(e+t*Math.cos(d))*Math.sin(u),m=t*Math.sin(d);o.push(h,f,m)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const u=(i+1)*l+c-1,d=(i+1)*(l-1)+c-1,h=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(u,d,f),a.push(d,h,f)}return new Oo(o,a)}}const LM=new M,xo=new vt,DM=new M,NM=new M,Sd=new M,Ed=new M,bd=new M,wd=new M,Td=new M,Ui=new vt,FM=new M,UM=new nt,BM=new vt;class OM{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class kM extends OM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e;let d,h,f,m,v,p;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const g=VM,_=HM,x=zM;g.length=a,_.length=a,x.length=a;for(let y=0;y!==a;y++){const E=o[y];x[y]=0,_[y]=E.computeB(u),g[y]=1/E.computeC()}if(a!==0){for(let T=0;T!==c;T++){const C=l[T],I=C.vlambda,b=C.wlambda;I.set(0,0,0),b.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let T=0;T!==a;T++){const C=o[T];d=_[T],h=g[T],p=x[T],v=C.computeGWlambda(),f=h*(d-v-C.eps*p),p+f<C.minForce?f=C.minForce-p:p+f>C.maxForce&&(f=C.maxForce-p),x[T]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<r)break}for(let T=0;T!==c;T++){const C=l[T],I=C.velocity,b=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),I.vadd(C.vlambda,I),C.wlambda.vmul(C.angularFactor,C.wlambda),b.vadd(C.wlambda,b)}let y=o.length;const E=1/u;for(;y--;)o[y].multiplier=x[y]*E}return n}}const zM=[],VM=[],HM=[];class GM{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class WM extends GM{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const dt={sphereSphere:fe.types.SPHERE,spherePlane:fe.types.SPHERE|fe.types.PLANE,boxBox:fe.types.BOX|fe.types.BOX,sphereBox:fe.types.SPHERE|fe.types.BOX,planeBox:fe.types.PLANE|fe.types.BOX,convexConvex:fe.types.CONVEXPOLYHEDRON,sphereConvex:fe.types.SPHERE|fe.types.CONVEXPOLYHEDRON,planeConvex:fe.types.PLANE|fe.types.CONVEXPOLYHEDRON,boxConvex:fe.types.BOX|fe.types.CONVEXPOLYHEDRON,sphereHeightfield:fe.types.SPHERE|fe.types.HEIGHTFIELD,boxHeightfield:fe.types.BOX|fe.types.HEIGHTFIELD,convexHeightfield:fe.types.CONVEXPOLYHEDRON|fe.types.HEIGHTFIELD,sphereParticle:fe.types.PARTICLE|fe.types.SPHERE,planeParticle:fe.types.PLANE|fe.types.PARTICLE,boxParticle:fe.types.BOX|fe.types.PARTICLE,convexParticle:fe.types.PARTICLE|fe.types.CONVEXPOLYHEDRON,cylinderCylinder:fe.types.CYLINDER,sphereCylinder:fe.types.SPHERE|fe.types.CYLINDER,planeCylinder:fe.types.PLANE|fe.types.CYLINDER,boxCylinder:fe.types.BOX|fe.types.CYLINDER,convexCylinder:fe.types.CONVEXPOLYHEDRON|fe.types.CYLINDER,heightfieldCylinder:fe.types.HEIGHTFIELD|fe.types.CYLINDER,particleCylinder:fe.types.PARTICLE|fe.types.CYLINDER,sphereTrimesh:fe.types.SPHERE|fe.types.TRIMESH,planeTrimesh:fe.types.PLANE|fe.types.TRIMESH};class $M{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new WM,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new yM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,u=i.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,d=o.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new Md(n,i,h*f),p=m.length?m.pop():new Md(n,i,h*f);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-h*f,v.maxForce=p.maxForce=h*f,v.ri.copy(e.ri),v.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=e.enabled,t.push(v,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Bi.setZero(),vs.setZero(),_s.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Bi.vadd(t.ni,Bi),vs.vadd(t.ri,vs),_s.vadd(t.rj,_s)):(Bi.vsub(t.ni,Bi),vs.vadd(t.rj,vs),_s.vadd(t.ri,_s));const o=1/e;vs.scale(o,n.ri),_s.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Bi.normalize(),Bi.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=jM,c=YM,u=XM,d=qM;for(let h=0,f=e.length;h!==f;h++){const m=e[h],v=t[h];let p=null;m.material&&v.material&&(p=n.getContactMaterial(m.material,v.material)||null);const g=m.type&ge.KINEMATIC&&v.type&ge.STATIC||m.type&ge.STATIC&&v.type&ge.KINEMATIC||m.type&ge.KINEMATIC&&v.type&ge.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],l),m.quaternion.vmult(m.shapeOffsets[_],u),u.vadd(m.position,u);const x=m.shapes[_];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);const E=v.shapes[y];if(!(x.collisionFilterMask&E.collisionFilterGroup&&E.collisionFilterMask&x.collisionFilterGroup)||u.distanceTo(d)>x.boundingSphereRadius+E.boundingSphereRadius)continue;let T=null;x.material&&E.material&&(T=n.getContactMaterial(x.material,E.material)||null),this.currentContactMaterial=T||p||n.defaultContactMaterial;const C=x.type|E.type,I=this[C];if(I){let b=!1;x.type<E.type?b=I.call(this,x,E,u,d,l,c,m,v,x,E,g):b=I.call(this,E,x,d,u,c,l,v,m,x,E,g),b&&g&&(n.shapeOverlapKeeper.set(x.id,E.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,u,d){if(d)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,u,d){const h=this.createContactEquation(a,l,e,t,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,Mo),h.ni.scale(h.ni.dot(Mo),Ad),Mo.vsub(Ad,h.rj),-Mo.dot(h.ni)<=e.radius){if(d)return!0;const f=h.ri,m=h.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}sphereBox(e,t,n,i,r,o,a,l,c,u,d){const h=this.v3pool,f=MS;n.vsub(i,So),t.getSideNormals(f,o);const m=e.radius;let v=!1;const p=ES,g=bS,_=wS;let x=null,y=0,E=0,T=0,C=null;for(let N=0,X=f.length;N!==X&&v===!1;N++){const V=_S;V.copy(f[N]);const j=V.length();V.normalize();const re=So.dot(V);if(re<j+m&&re>0){const ce=yS,ne=xS;ce.copy(f[(N+1)%3]),ne.copy(f[(N+2)%3]);const He=ce.length(),et=ne.length();ce.normalize(),ne.normalize();const Ge=So.dot(ce),Y=So.dot(ne);if(Ge<He&&Ge>-He&&Y<et&&Y>-et){const J=Math.abs(re-j-m);if((C===null||J<C)&&(C=J,E=Ge,T=Y,x=j,p.copy(V),g.copy(ce),_.copy(ne),y++,d))return!0}}}if(y){v=!0;const N=this.createContactEquation(a,l,e,t,c,u);p.scale(-m,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(x,p),g.scale(E,g),p.vadd(g,p),_.scale(T,_),p.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let I=h.get();const b=SS;for(let N=0;N!==2&&!v;N++)for(let X=0;X!==2&&!v;X++)for(let V=0;V!==2&&!v;V++)if(I.set(0,0,0),N?I.vadd(f[0],I):I.vsub(f[0],I),X?I.vadd(f[1],I):I.vsub(f[1],I),V?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,b),b.vsub(n,b),b.lengthSquared()<m*m){if(d)return!0;v=!0;const j=this.createContactEquation(a,l,e,t,c,u);j.ri.copy(b),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(m,j.ri),j.rj.copy(I),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}h.release(I),I=null;const S=h.get(),R=h.get(),F=h.get(),P=h.get(),O=h.get(),U=f.length;for(let N=0;N!==U&&!v;N++)for(let X=0;X!==U&&!v;X++)if(N%3!==X%3){f[X].cross(f[N],S),S.normalize(),f[N].vadd(f[X],R),F.copy(n),F.vsub(R,F),F.vsub(i,F);const V=F.dot(S);S.scale(V,P);let j=0;for(;j===N%3||j===X%3;)j++;O.copy(n),O.vsub(P,O),O.vsub(R,O),O.vsub(i,O);const re=Math.abs(V),ce=O.length();if(re<f[j].length()&&ce<m){if(d)return!0;v=!0;const ne=this.createContactEquation(a,l,e,t,c,u);R.vadd(P,ne.rj),ne.rj.copy(ne.rj),O.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(n,ne.ri),ne.ri.normalize(),ne.ri.scale(m,ne.ri),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(l.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}h.release(S,R,F,P,O)}planeBox(e,t,n,i,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,d)}convexConvex(e,t,n,i,r,o,a,l,c,u,d,h,f){const m=zS;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,m,h,f)){const v=[],p=VS;e.clipAgainstHull(n,r,t,i,o,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(d)return!0;const x=this.createContactEquation(a,l,e,t,c,u),y=x.ri,E=x.rj;m.negate(x.ni),v[_].normal.negate(p),p.scale(v[_].depth,p),v[_].point.vadd(p,y),E.copy(v[_].point),y.vsub(n,y),E.vsub(i,E),y.vadd(n,y),y.vsub(a.position,y),E.vadd(i,E),E.vsub(l.position,E),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,r,o,a,l,c,u,d){const h=this.v3pool;n.vsub(i,TS);const f=t.faceNormals,m=t.faces,v=t.vertices,p=e.radius;let g=!1;for(let _=0;_!==v.length;_++){const x=v[_],y=PS;o.vmult(x,y),i.vadd(y,y);const E=RS;if(y.vsub(n,E),E.lengthSquared()<p*p){if(d)return!0;g=!0;const T=this.createContactEquation(a,l,e,t,c,u);T.ri.copy(E),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(p,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let _=0,x=m.length;_!==x&&g===!1;_++){const y=f[_],E=m[_],T=IS;o.vmult(y,T);const C=LS;o.vmult(v[E[0]],C),C.vadd(i,C);const I=DS;T.scale(-p,I),n.vadd(I,I);const b=NS;I.vsub(C,b);const S=b.dot(T),R=FS;if(n.vsub(C,R),S<0&&R.dot(T)>0){const F=[];for(let P=0,O=E.length;P!==O;P++){const U=h.get();o.vmult(v[E[P]],U),i.vadd(U,U),F.push(U)}if(vS(F,T,n)){if(d)return!0;g=!0;const P=this.createContactEquation(a,l,e,t,c,u);T.scale(-p,P.ri),T.negate(P.ni);const O=h.get();T.scale(-S,O);const U=h.get();T.scale(-p,U),n.vsub(i,P.rj),P.rj.vadd(U,P.rj),P.rj.vadd(O,P.rj),P.rj.vadd(i,P.rj),P.rj.vsub(l.position,P.rj),P.ri.vadd(n,P.ri),P.ri.vsub(a.position,P.ri),h.release(O),h.release(U),this.result.push(P),this.createFrictionEquationsFromContact(P,this.frictionResult);for(let N=0,X=F.length;N!==X;N++)h.release(F[N]);return}else for(let P=0;P!==E.length;P++){const O=h.get(),U=h.get();o.vmult(v[E[(P+1)%E.length]],O),o.vmult(v[E[(P+2)%E.length]],U),i.vadd(O,O),i.vadd(U,U);const N=AS;U.vsub(O,N);const X=CS;N.unit(X);const V=h.get(),j=h.get();n.vsub(O,j);const re=j.dot(X);X.scale(re,V),V.vadd(O,V);const ce=h.get();if(V.vsub(n,ce),re>0&&re*re<N.lengthSquared()&&ce.lengthSquared()<p*p){if(d)return!0;const ne=this.createContactEquation(a,l,e,t,c,u);V.vsub(i,ne.rj),V.vsub(n,ne.ni),ne.ni.normalize(),ne.ni.scale(p,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(l.position,ne.rj),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let He=0,et=F.length;He!==et;He++)h.release(F[He]);h.release(O),h.release(U),h.release(V),h.release(ce),h.release(j);return}h.release(O),h.release(U),h.release(V),h.release(ce),h.release(j)}for(let P=0,O=F.length;P!==O;P++)h.release(F[P])}}}planeConvex(e,t,n,i,r,o,a,l,c,u,d){const h=US,f=BS;f.set(0,0,1),r.vmult(f,f);let m=0;const v=OS;for(let p=0;p!==t.vertices.length;p++)if(h.copy(t.vertices[p]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(d)return!0;const _=this.createContactEquation(a,l,e,t,c,u),x=kS;f.scale(f.dot(v),x),h.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}sphereHeightfield(e,t,n,i,r,o,a,l,c,u,d){const h=t.data,f=e.radius,m=t.elementSize,v=QS,p=JS;nt.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-f)/m)-1,_=Math.ceil((p.x+f)/m)+1,x=Math.floor((p.y-f)/m)-1,y=Math.ceil((p.y+f)/m)+1;if(_<0||y<0||g>h.length||x>h[0].length)return;g<0&&(g=0),_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),y>=h[0].length&&(y=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const E=[];t.getRectMinMax(g,x,_,y,E);const T=E[0],C=E[1];if(p.z-f>C||p.z+f<T)return;const I=this.result;for(let b=g;b<_;b++)for(let S=x;S<y;S++){const R=I.length;let F=!1;if(t.getConvexTrianglePillar(b,S,!1),nt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,d)),d&&F||(t.getConvexTrianglePillar(b,S,!0),nt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(F=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,d)),d&&F))return!0;if(I.length-R>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexHeightfield(e,t,n,i,r,o,a,l,c,u,d){const h=t.data,f=t.elementSize,m=e.boundingSphereRadius,v=KS,p=ZS,g=YS;nt.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/f)-1,x=Math.ceil((g.x+m)/f)+1,y=Math.floor((g.y-m)/f)-1,E=Math.ceil((g.y+m)/f)+1;if(x<0||E<0||_>h.length||y>h[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),E<0&&(E=0),_>=h.length&&(_=h.length-1),x>=h.length&&(x=h.length-1),E>=h[0].length&&(E=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const T=[];t.getRectMinMax(_,y,x,E,T);const C=T[0],I=T[1];if(!(g.z-m>I||g.z+m<C))for(let b=_;b<x;b++)for(let S=y;S<E;S++){let R=!1;if(t.getConvexTrianglePillar(b,S,!1),nt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,d,p,null)),d&&R||(t.getConvexTrianglePillar(b,S,!0),nt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,d,p,null)),d&&R))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,u,d){const h=$S;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(d)return!0;const m=this.createContactEquation(l,a,t,e,c,u);h.normalize(),m.rj.copy(h),m.rj.scale(e.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,u,d){const h=HS;h.set(0,0,1),a.quaternion.vmult(h,h);const f=GS;if(i.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const v=this.createContactEquation(l,a,t,e,c,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=WS;h.scale(h.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,d)}convexParticle(e,t,n,i,r,o,a,l,c,u,d){let h=-1;const f=qS,m=jS;let v=null;const p=XS;if(p.copy(i),p.vsub(n,p),r.conjugate(Cd),Cd.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,_=e.faces.length;g!==_;g++){const x=[e.worldVertices[e.faces[g][0]]],y=e.worldFaceNormals[g];i.vsub(x[0],Rd);const E=-y.dot(Rd);if(v===null||Math.abs(E)<Math.abs(v)){if(d)return!0;v=E,h=g,f.copy(y)}}if(h!==-1){const g=this.createContactEquation(l,a,t,e,c,u);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,x=g.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,u,d){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,u,d)}particleCylinder(e,t,n,i,r,o,a,l,c,u,d){return this.convexParticle(t,e,i,n,o,r,l,a,c,u,d)}sphereTrimesh(e,t,n,i,r,o,a,l,c,u,d){const h=iS,f=sS,m=rS,v=oS,p=aS,g=lS,_=hS,x=nS,y=eS,E=fS;nt.pointToLocalFrame(i,o,n,p);const T=e.radius;_.lowerBound.set(p.x-T,p.y-T,p.z-T),_.upperBound.set(p.x+T,p.y+T,p.z+T),t.getTrianglesInAABB(_,E);const C=tS,I=e.radius*e.radius;for(let P=0;P<E.length;P++)for(let O=0;O<3;O++)if(t.getVertex(t.indices[E[P]*3+O],C),C.vsub(p,y),y.lengthSquared()<=I){if(x.copy(C),nt.pointToWorldFrame(i,o,x,C),C.vsub(n,y),d)return!0;let U=this.createContactEquation(a,l,e,t,c,u);U.ni.copy(y),U.ni.normalize(),U.ri.copy(U.ni),U.ri.scale(e.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.copy(C),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}for(let P=0;P<E.length;P++)for(let O=0;O<3;O++){t.getVertex(t.indices[E[P]*3+O],h),t.getVertex(t.indices[E[P]*3+(O+1)%3],f),f.vsub(h,m),p.vsub(f,g);const U=g.dot(m);p.vsub(h,g);let N=g.dot(m);if(N>0&&U<0&&(p.vsub(h,g),v.copy(m),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(h,g),g.distanceTo(p)<e.radius)){if(d)return!0;const V=this.createContactEquation(a,l,e,t,c,u);g.vsub(p,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),nt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,V.rj),nt.vectorToWorldFrame(o,V.ni,V.ni),nt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const b=cS,S=uS,R=dS,F=QM;for(let P=0,O=E.length;P!==O;P++){t.getTriangleVertices(E[P],b,S,R),t.getNormal(E[P],F),p.vsub(b,g);let U=g.dot(F);if(F.scale(U,g),p.vsub(g,g),U=g.distanceTo(p),Ct.pointInTriangle(g,b,S,R)&&U<e.radius){if(d)return!0;let N=this.createContactEquation(a,l,e,t,c,u);g.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),nt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,N.rj),nt.vectorToWorldFrame(o,N.ni,N.ni),nt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}E.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,u,d){const h=new M,f=KM;f.set(0,0,1),r.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,h);const v=new M;v.copy(h),nt.pointToWorldFrame(i,o,v,h);const p=ZM;if(h.vsub(n,p),f.dot(p)<=0){if(d)return!0;const _=this.createContactEquation(a,l,e,t,c,u);_.ni.copy(f);const x=JM;f.scale(p.dot(f),x),h.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Bi=new M,vs=new M,_s=new M,XM=new M,qM=new M,jM=new Rt,YM=new Rt,KM=new M,ZM=new M,JM=new M,QM=new M,eS=new M;new M;const tS=new M,nS=new M,iS=new M,sS=new M,rS=new M,oS=new M,aS=new M,lS=new M,cS=new M,uS=new M,dS=new M,hS=new vt,fS=[],Mo=new M,Ad=new M,pS=new M,mS=new M,gS=new M;function vS(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=pS;s[(r+1)%i].vsub(o,a);const l=mS;a.cross(e,l);const c=gS;t.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const So=new M,_S=new M,yS=new M,xS=new M,MS=[new M,new M,new M,new M,new M,new M],SS=new M,ES=new M,bS=new M,wS=new M,TS=new M,AS=new M,CS=new M,RS=new M,PS=new M,IS=new M,LS=new M,DS=new M,NS=new M,FS=new M;new M;new M;const US=new M,BS=new M,OS=new M,kS=new M,zS=new M,VS=new M,HS=new M,GS=new M,WS=new M,$S=new M,Cd=new Rt,XS=new M;new M;const qS=new M,Rd=new M,jS=new M,YS=new M,KS=new M,ZS=[0],JS=new M,QS=new M;class Pd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>i[a];)a++;c=u===i[a],c||Id(e,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=i[l];for(;u>n[a];)a++;c=n[a]===u,c||Id(t,u)}}}function Id(s,e){s.push((e&4294901760)>>16,e&65535)}const Xa=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class eE{constructor(){this.data={keys:[]}}get(e,t){const n=Xa(e,t);return this.data[n]}set(e,t,n){const i=Xa(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Xa(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class tE extends Hh{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new eM,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new kM,this.constraints=[],this.narrowphase=new $M(this),this.collisionMatrix=new dd,this.collisionMatrixPrevious=new dd,this.bodyOverlapKeeper=new Pd,this.shapeOverlapKeeper=new Pd,this.contactmaterials=[],this.contactMaterialTable=new eE,this.defaultMaterial=new $i("default"),this.defaultContactMaterial=new zs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Bo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Ct.ALL,n.from=e,n.to=t,n.callback=i,qa.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Ct.ANY,n.from=e,n.to=t,n.result=i,qa.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Ct.CLOSEST,n.from=e,n.to=t,n.result=i,qa.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ge&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Lt.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Lt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=oE,i=aE,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=ge.DYNAMIC;let h=-1/0;const f=this.constraints,m=rE;l.length();const v=l.x,p=l.y,g=l.z;let _=0;for(c&&(h=Lt.now()),_=0;_!==r;_++){const P=o[_];if(P.type===d){const O=P.force,U=P.mass;O.x+=U*v,O.y+=U*p,O.z+=U*g}}for(let P=0,O=this.subsystems.length;P!==O;P++)this.subsystems[P].update();c&&(h=Lt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=Lt.now()-h);let x=f.length;for(_=0;_!==x;_++){const P=f[_];if(!P.collideConnected)for(let O=n.length-1;O>=0;O-=1)(P.bodyA===n[O]&&P.bodyB===i[O]||P.bodyB===n[O]&&P.bodyA===i[O])&&(n.splice(O,1),i.splice(O,1))}this.collisionMatrixTick(),c&&(h=Lt.now());const y=sE,E=t.length;for(_=0;_!==E;_++)y.push(t[_]);t.length=0;const T=this.frictionEquations.length;for(_=0;_!==T;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,m),c&&(u.narrowphase=Lt.now()-h),c&&(h=Lt.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=t.length;for(let P=0;P!==C;P++){const O=t[P],U=O.bi,N=O.bj,X=O.si,V=O.sj;let j;if(U.material&&N.material?j=this.getContactMaterial(U.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,U.material&&N.material&&(U.material.friction>=0&&N.material.friction>=0&&U.material.friction*N.material.friction,U.material.restitution>=0&&N.material.restitution>=0&&(O.restitution=U.material.restitution*N.material.restitution)),a.addEquation(O),U.allowSleep&&U.type===ge.DYNAMIC&&U.sleepState===ge.SLEEPING&&N.sleepState===ge.AWAKE&&N.type!==ge.STATIC){const re=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ce=N.sleepSpeedLimit**2;re>=ce*2&&(U.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ge.DYNAMIC&&N.sleepState===ge.SLEEPING&&U.sleepState===ge.AWAKE&&U.type!==ge.STATIC){const re=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),ce=U.sleepSpeedLimit**2;re>=ce*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(U,N,!0),this.collisionMatrixPrevious.get(U,N)||(rr.body=N,rr.contact=O,U.dispatchEvent(rr),rr.body=U,N.dispatchEvent(rr)),this.bodyOverlapKeeper.set(U.id,N.id),this.shapeOverlapKeeper.set(X.id,V.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Lt.now()-h,h=Lt.now()),_=0;_!==r;_++){const P=o[_];P.wakeUpAfterNarrowphase&&(P.wakeUp(),P.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const P=f[_];P.update();for(let O=0,U=P.equations.length;O!==U;O++){const N=P.equations[O];a.addEquation(N)}}a.solve(e,this),c&&(u.solve=Lt.now()-h),a.removeAllEquations();const I=Math.pow;for(_=0;_!==r;_++){const P=o[_];if(P.type&d){const O=I(1-P.linearDamping,e),U=P.velocity;U.scale(O,U);const N=P.angularVelocity;if(N){const X=I(1-P.angularDamping,e);N.scale(X,N)}}}this.dispatchEvent(iE),c&&(h=Lt.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(e,S,R);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Lt.now()-h),this.stepnumber+=1,this.dispatchEvent(nE);let F=!0;if(this.allowSleep)for(F=!1,_=0;_!==r;_++){const P=o[_];P.sleepTick(this.time),P.sleepState!==ge.SLEEPING&&(F=!0)}this.hasActiveBodies=F}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Zn,Jn),e){for(let r=0,o=Zn.length;r<o;r+=2)or.bodyA=this.getBodyById(Zn[r]),or.bodyB=this.getBodyById(Zn[r+1]),this.dispatchEvent(or);or.bodyA=or.bodyB=null}if(t){for(let r=0,o=Jn.length;r<o;r+=2)ar.bodyA=this.getBodyById(Jn[r]),ar.bodyB=this.getBodyById(Jn[r+1]),this.dispatchEvent(ar);ar.bodyA=ar.bodyB=null}Zn.length=Jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Zn,Jn),n){for(let r=0,o=Zn.length;r<o;r+=2){const a=this.getShapeById(Zn[r]),l=this.getShapeById(Zn[r+1]);Qn.shapeA=a,Qn.shapeB=l,a&&(Qn.bodyA=a.body),l&&(Qn.bodyB=l.body),this.dispatchEvent(Qn)}Qn.bodyA=Qn.bodyB=Qn.shapeA=Qn.shapeB=null}if(i){for(let r=0,o=Jn.length;r<o;r+=2){const a=this.getShapeById(Jn[r]),l=this.getShapeById(Jn[r+1]);ei.shapeA=a,ei.shapeB=l,a&&(ei.bodyA=a.body),l&&(ei.bodyB=l.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new vt;const qa=new Ct,Lt=globalThis.performance||{};if(!Lt.now){let s=Date.now();Lt.timing&&Lt.timing.navigationStart&&(s=Lt.timing.navigationStart),Lt.now=()=>Date.now()-s}new M;const nE={type:"postStep"},iE={type:"preStep"},rr={type:ge.COLLIDE_EVENT_NAME,body:null,contact:null},sE=[],rE=[],oE=[],aE=[],Zn=[],Jn=[],or={type:"beginContact",bodyA:null,bodyB:null},ar={type:"endContact",bodyA:null,bodyB:null},Qn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ei={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var mn=Uint8Array,Es=Uint16Array,lE=Int32Array,Kh=new mn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Zh=new mn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),cE=new mn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jh=function(s,e){for(var t=new Es(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new lE(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Qh=Jh(Kh,2),ef=Qh.b,uE=Qh.r;ef[28]=258,uE[258]=28;var dE=Jh(Zh,0),hE=dE.b,Kl=new Es(32768);for(var ht=0;ht<32768;++ht){var gi=(ht&43690)>>1|(ht&21845)<<1;gi=(gi&52428)>>2|(gi&13107)<<2,gi=(gi&61680)>>4|(gi&3855)<<4,Kl[ht]=((gi&65280)>>8|(gi&255)<<8)>>1}var gr=(function(s,e,t){for(var n=s.length,i=0,r=new Es(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new Es(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new Es(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],u=e-s[i],d=o[s[i]-1]++<<u,h=d|(1<<u)-1;d<=h;++d)a[Kl[d]>>l]=c}else for(a=new Es(n),i=0;i<n;++i)s[i]&&(a[i]=Kl[o[s[i]-1]++]>>15-s[i]);return a}),Or=new mn(288);for(var ht=0;ht<144;++ht)Or[ht]=8;for(var ht=144;ht<256;++ht)Or[ht]=9;for(var ht=256;ht<280;++ht)Or[ht]=7;for(var ht=280;ht<288;++ht)Or[ht]=8;var tf=new mn(32);for(var ht=0;ht<32;++ht)tf[ht]=5;var fE=gr(Or,9,1),pE=gr(tf,5,1),ja=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Sn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},Ya=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},mE=function(s){return(s+7)/8|0},gE=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new mn(s.subarray(e,t))},vE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],En=function(s,e,t){var n=new Error(e||vE[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,En),!t)throw n;return n},_E=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new mn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new mn(i*3));var c=function(Ye){var It=t.length;if(Ye>It){var D=new mn(Math.max(It*2,Ye));D.set(t),t=D}},u=e.f||0,d=e.p||0,h=e.b||0,f=e.l,m=e.d,v=e.m,p=e.n,g=i*8;do{if(!f){u=Sn(s,d,1);var _=Sn(s,d+1,3);if(d+=3,_)if(_==1)f=fE,m=pE,v=9,p=5;else if(_==2){var T=Sn(s,d,31)+257,C=Sn(s,d+10,15)+4,I=T+Sn(s,d+5,31)+1;d+=14;for(var b=new mn(I),S=new mn(19),R=0;R<C;++R)S[cE[R]]=Sn(s,d+R*3,7);d+=C*3;for(var F=ja(S),P=(1<<F)-1,O=gr(S,F,1),R=0;R<I;){var U=O[Sn(s,d,P)];d+=U&15;var x=U>>4;if(x<16)b[R++]=x;else{var N=0,X=0;for(x==16?(X=3+Sn(s,d,3),d+=2,N=b[R-1]):x==17?(X=3+Sn(s,d,7),d+=3):x==18&&(X=11+Sn(s,d,127),d+=7);X--;)b[R++]=N}}var V=b.subarray(0,T),j=b.subarray(T);v=ja(V),p=ja(j),f=gr(V,v,1),m=gr(j,p,1)}else En(1);else{var x=mE(d)+4,y=s[x-4]|s[x-3]<<8,E=x+y;if(E>i){l&&En(0);break}a&&c(h+y),t.set(s.subarray(x,E),h),e.b=h+=y,e.p=d=E*8,e.f=u;continue}if(d>g){l&&En(0);break}}a&&c(h+131072);for(var re=(1<<v)-1,ce=(1<<p)-1,ne=d;;ne=d){var N=f[Ya(s,d)&re],He=N>>4;if(d+=N&15,d>g){l&&En(0);break}if(N||En(2),He<256)t[h++]=He;else if(He==256){ne=d,f=null;break}else{var et=He-254;if(He>264){var R=He-257,Ge=Kh[R];et=Sn(s,d,(1<<Ge)-1)+ef[R],d+=Ge}var Y=m[Ya(s,d)&ce],J=Y>>4;Y||En(3),d+=Y&15;var j=hE[J];if(J>3){var Ge=Zh[J];j+=Ya(s,d)&(1<<Ge)-1,d+=Ge}if(d>g){l&&En(0);break}a&&c(h+131072);var me=h+et;if(h<j){var De=r-j,be=Math.min(j,me);for(De+h<0&&En(3);h<be;++h)t[h]=n[De+h]}for(;h<me;++h)t[h]=t[h-j]}}e.l=f,e.p=ne,e.b=h,e.f=u,f&&(u=1,e.m=v,e.d=m,e.n=p)}while(!u);return h!=t.length&&o?gE(t,0,h):t.subarray(0,h)},yE=new mn(0),xE=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&En(6,"invalid zlib data"),(s[1]>>5&1)==1&&En(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function ME(s,e){return _E(s.subarray(xE(s),-4),{i:2},e,e)}var SE=typeof TextDecoder<"u"&&new TextDecoder,EE=0;try{SE.decode(yE,{stream:!0}),EE=1}catch{}function nf(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function bE(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],d=r[a-c],h=i[c]/(u+d);i[c]=l+u*h,l=d*h}i[a]=l}return i}function wE(s,e,t,n){const i=nf(s,n,e),r=bE(i,n,s,e),o=new Je(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function TE(s,e,t,n,i){const r=[];for(let d=0;d<=t;++d)r[d]=0;const o=[];for(let d=0;d<=n;++d)o[d]=r.slice(0);const a=[];for(let d=0;d<=t;++d)a[d]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let d=1;d<=t;++d){l[d]=e-i[s+1-d],c[d]=i[s+d]-e;let h=0;for(let f=0;f<d;++f){const m=c[f+1],v=l[d-f];a[d][f]=m+v;const p=a[f][d-1]/a[d][f];a[f][d]=h+m*p,h=v*p}a[d][d]=h}for(let d=0;d<=t;++d)o[0][d]=a[d][t];for(let d=0;d<=t;++d){let h=0,f=1;const m=[];for(let v=0;v<=t;++v)m[v]=r.slice(0);m[0][0]=1;for(let v=1;v<=n;++v){let p=0;const g=d-v,_=t-v;d>=v&&(m[f][0]=m[h][0]/a[_+1][g],p=m[f][0]*a[g][_]);const x=g>=-1?1:-g,y=d-1<=_?v-1:t-d;for(let T=x;T<=y;++T)m[f][T]=(m[h][T]-m[h][T-1])/a[_+1][g+T],p+=m[f][T]*a[g+T][_];d<=_&&(m[f][v]=-m[h][v-1]/a[_+1][d],p+=m[f][v]*a[d][_]),o[v][d]=p;const E=h;h=f,f=E}}let u=t;for(let d=1;d<=n;++d){for(let h=0;h<=t;++h)o[d][h]*=u;u*=t-d}return o}function AE(s,e,t,n,i){const r=i<s?i:s,o=[],a=nf(s,n,e),l=TE(a,n,s,r,e),c=[];for(let u=0;u<t.length;++u){const d=t[u].clone(),h=d.w;d.x*=h,d.y*=h,d.z*=h,c[u]=d}for(let u=0;u<=r;++u){const d=c[a-s].clone().multiplyScalar(l[u][0]);for(let h=1;h<=s;++h)d.add(c[a-s+h].clone().multiplyScalar(l[u][h]));o[u]=d}for(let u=r+1;u<=i+1;++u)o[u]=new Je(0,0,0);return o}function CE(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function RE(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new B(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(CE(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function PE(s,e,t,n,i){const r=AE(s,e,t,n,i);return RE(r)}class IE extends qm{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new Je(c.x,c.y,c.z,c.w)}}getPoint(e,t=new B){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=wE(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new B){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=PE(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Je(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let qe,bt,jt;class LE extends Ji{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?Ng.extractUrlBase(e):r.path,a=new Cg(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(OE(e))qe=new BE().parse(e);else{const i=of(e);if(!kE(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Dd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Dd(i));qe=new UE().parse(i)}const n=new Nh(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new DE(n,this.manager).parse(qe)}}class DE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){bt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new NE().parse(i);return this.parseScene(i,r,n),jt}parseConnections(){const e=new Map;return"Connections"in qe&&qe.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in qe.Objects){const n=qe.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in qe.Objects){const n=qe.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?Mr:si,n.wrapT=a===0?Mr:si,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const r=i.path;r||i.setPath(this.textureLoader.path);const o=bt.get(e.id).children;let a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Vt;const l=i.load(a);return i.setPath(r),l}parseMaterials(e){const t=new Map;if("Material"in qe.Objects){const n=qe.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!bt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new uo;break;case"lambert":a=new fg;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new uo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Xe.colorSpaceToWorking(new Be().fromArray(e.Diffuse.value),ct):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Xe.colorSpaceToWorking(new Be().fromArray(e.DiffuseColor.value),ct)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Xe.colorSpaceToWorking(new Be().fromArray(e.Emissive.value),ct):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Xe.colorSpaceToWorking(new Be().fromArray(e.EmissiveColor.value),ct)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Xe.colorSpaceToWorking(new Be().fromArray(e.Specular.value),ct):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Xe.colorSpaceToWorking(new Be().fromArray(e.SpecularColor.value),ct));const r=this;return bt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=ct);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ct);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Io,i.envMap.colorSpace=ct);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ct);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in qe.Objects&&t in qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=bt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in qe.Objects){const n=qe.Objects.Deformer;for(const i in n){const r=n[i],o=bt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ce().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=bt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){jt=new Ms;const i=this.parseModels(e.skeletons,t,n),r=qe.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),bt.get(l.ID).parents.forEach(function(d){const h=i.get(d.ID);h!==void 0&&h.add(l)}),l.parent===null&&jt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),jt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=rf(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new FE().parse();jt.children.length===1&&jt.children[0].isGroup&&(jt.children[0].animations=a,jt=jt.children[0]),jt.animations=a}parseModels(e,t,n){const i=new Map,r=qe.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=bt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new $l;break;case"Null":default:u=new Ms;break}u.name=l.attrName?it.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=a}this.getTransformData(u,l),i.set(a,u)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const d=r;r=new $l,r.matrixWorld.copy(c.transformLink),r.name=i?it.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[u]=r,d!==null&&r.add(d)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new _t;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const d=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Yt(u,c,r,o),d!==null&&t.setFocalLength(d);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new _t;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new _t;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new _t;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Xe.colorSpaceToWorking(new Be().fromArray(n.Color.value),ct));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Uu(r,o,a,l);break;case 1:t=new jl(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=zt.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=zt.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Ig(r,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new Uu(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new uo({name:Ji.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,u=r.groups.length;c<u;c++){const d=r.groups[c];(d.materialIndex<0||d.materialIndex>=a.length)&&(d.materialIndex=a.length,l=!0)}if(l){const c=new uo;a.push(c)}}return r.FBX_Deformer?(i=new zm(r,o),i.normalizeSkinWeights()):i=new Tn(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new wh({name:Ji.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Xm(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Dr(t.RotationOrder.value):n.eulerOrder=Dr(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&bt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=qe.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),jt.add(e.target)):e.lookAt(new B().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];bt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;bt.get(c).parents.forEach(function(d){n.has(d.ID)&&n.get(d.ID).bind(new yc(o.bones),i[d.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in qe.Objects){const t=qe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ce().fromArray(r.Matrix.a)}):e[i.Node]=new Ce().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in qe){if("AmbientColor"in qe.GlobalSettings){const e=qe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Be().setRGB(t,n,i,ct);jt.add(new Uh(r,1))}}"UnitScaleFactor"in qe.GlobalSettings&&(jt.userData.unitScaleFactor=qe.GlobalSettings.UnitScaleFactor.value)}}}class NE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in qe.Objects){const n=qe.Objects.Geometry;for(const i in n){const r=bt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(d){return qe.Objects.Model[d.ID]});if(o.length===0)return;const a=e.children.reduce(function(d,h){return i[h.ID]!==void 0&&(d=i[h.ID]),d},null);e.children.forEach(function(d){n.morphTargets[d.ID]!==void 0&&r.push(n.morphTargets[d.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Dr(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=rf(c);return this.genGeometry(t,a,r,u)}genGeometry(e,t,n,i){const r=new Cn;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Qt(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new Qt(a.colors,3)),t&&(r.setAttribute("skinIndex",new _c(a.weightsIndices,4)),r.setAttribute("skinWeight",new Qt(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new ze().getNormalMatrix(i),u=new Qt(a.normal,3);u.applyNormalMatrix(c),r.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){const d=u===0?"uv":`uv${u}`;r.setAttribute(d,new Qt(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(d,h){d!==c&&(r.addGroup(u,h-u,c),c=d,u=h)}),r.groups.length>0){const d=r.groups[r.groups.length-1],h=d.start+d.count;h!==a.materialIndex.length&&r.addGroup(h,a.materialIndex.length-h,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],u=[],d=[];const h=this;return e.vertexIndices.forEach(function(f,m){let v,p=!1;f<0&&(f=f^-1,p=!0);let g=[],_=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const x=Eo(m,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){_.push(x.weight),g.push(x.id)}),_.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],y=[0,0,0,0];_.forEach(function(E,T){let C=E,I=g[T];y.forEach(function(b,S,R){if(C>b){R[S]=C,C=b;const F=x[S];x[S]=I,I=F}})}),g=x,_=y}for(;_.length<4;)_.push(0),g.push(0);for(let x=0;x<4;++x)u.push(_[x]),d.push(g[x])}if(e.normal){const x=Eo(m,n,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=Eo(m,n,f,e.material)[0],v<0&&(h.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(x,y){const E=Eo(m,n,f,x);c[y]===void 0&&(c[y]=[]),c[y].push(E[0]),c[y].push(E[1])}),i++,p&&(h.genFace(t,e,o,v,a,l,c,u,d,i),n++,i=0,o=[],a=[],l=[],c=[],u=[],d=[])}),t}getNormalNewell(e){const t=new B(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new B(0,1,0):new B(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new Ke(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,u){let d;if(u>3){const h=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)h.push(new B(f[n[g]],f[n[g+1]],f[n[g+2]]));const{tangent:m,bitangent:v}=this.getNormalTangentAndBitangent(h),p=[];for(const g of h)p.push(this.flattenVertex(g,m,v));d=Mc.triangulateShape(p,[])}else d=[[0,1,2]];for(const[h,f,m]of d)e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[m*3]),e.normal.push(r[m*3+1]),e.normal.push(r[m*3+2])),t.uv&&t.uv.forEach(function(v,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][h*2]),e.uvs[p].push(a[p][h*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][m*2]),e.uvs[p].push(a[p][m*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=qe.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],u=e.attributes.position.count*3,d=new Float32Array(u);for(let v=0;v<c.length;v++){const p=c[v]*3;d[p]=l[v*3],d[p+1]=l[v*3+1],d[p+2]=l[v*3+2]}const h={vertexIndices:a,vertexPositions:d,baseVertexPositions:o},f=this.genBuffers(h),m=new Qt(f.vertex,3);m.name=r||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Be;o<i.length;o+=4)a.fromArray(i,o),Xe.colorSpaceToWorking(a,ct),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new Cn;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let d=0,h=o.length;d<h;d+=4)r.push(new Je().fromArray(o,d));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let d=0;d<n;++d)r.push(r[d])}const u=new IE(n,i,r,a,l).getPoints(r.length*12);return new Cn().setFromPoints(u)}}class FE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=qe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=qe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(zE),values:t[n].KeyValueFloat.a},r=bt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=qe.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=bt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[c]===void 0){const d=bt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(d!==void 0){const h=qe.Objects.Model[d.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:h.attrName?it.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};jt.traverse(function(m){m.ID===h.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ce),"PreRotation"in h&&(f.preRotation=h.PreRotation.value),"PostRotation"in h&&(f.postRotation=h.PostRotation.value),r[c]=f}}r[c]&&(r[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[c]===void 0){const d=bt.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,h=bt.get(d).parents[0].ID,f=bt.get(h).parents[0].ID,m=bt.get(f).parents[0].ID,v=qe.Objects.Model[m],p={modelName:v.attrName?it.sanitizeNodeName(v.attrName):"",morphName:qe.Objects.Deformer[d].attrName};r[c]=p}r[c][u.attr]=u}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=qe.Objects.AnimationStack,n={};for(const i in t){const r=bt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Sg(e.name,-1,t)}generateTracks(e){const t=[];let n=new B,i=new B;if(e.transform&&e.transform.decompose(n,new Jt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Lr(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,r);o=h[0],a=h[1]}const l=Dr(0);n!==void 0&&(n=n.map(zt.degToRad),n.push(l),n=new Nt().fromArray(n),n=new Jt().setFromEuler(n)),i!==void 0&&(i=i.map(zt.degToRad),i.push(l),i=new Nt().fromArray(i),i=new Jt().setFromEuler(i).invert());const c=new Jt,u=new Nt,d=[];if(!a||!o)return new ks(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)u.set(a[h],a[h+1],a[h+2],r),c.setFromEuler(u),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new Jt().fromArray(d,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(d,h/3*4);return new ks(e+".quaternion",o,d)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=jt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Ir(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];r.push(u),i[0]=u}else r.push(i[0]);if(a!==-1){const u=t.y.values[a];r.push(u),i[1]=u}else r.push(i[1]);if(l!==-1){const u=t.z.values[l];r.push(u),i[2]=u}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(zt.degToRad(e.values[0])),o.push(zt.degToRad(t.values[0])),o.push(zt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(zt.degToRad),u=[e.values[a],t.values[a],n.values[a]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const d=u.map(zt.degToRad),h=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],f=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,p=new Nt(...c,i),g=new Nt(...d,i),_=new Jt().setFromEuler(p),x=new Jt().setFromEuler(g);_.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const y=e.times[a-1],E=e.times[a]-y,T=new Jt,C=new Nt;for(let I=0;I<1;I+=1/v)T.copy(_.clone().slerp(x.clone(),I)),r.push(y+I*E),C.setFromQuaternion(T,i),o.push(C.x),o.push(C.y),o.push(C.z)}else r.push(e.times[a]),o.push(zt.degToRad(e.values[a])),o.push(zt.degToRad(t.values[a])),o.push(zt.degToRad(n.values[a]))}return[r,o]}}class UE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new sf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let d=r.split(",").slice(3);d=d.map(function(h){return h.trim().replace(/^"/,"")}),i="connections",r=[c,u],HE(r,d),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=Za(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Za(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Za(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class BE{parse(e){const t=new Ld(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new sf;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let h=0;h<r;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",d=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),d!==""&&(n.attrType=d),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=ME(new Uint8Array(e.getArrayBuffer(o))),l=new Ld(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Ld{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class sf{add(e,t){this[e]=t}}function OE(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===of(s,0,e.length)}function kE(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Dd(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function zE(s){return s/46186158e3}const VE=[];function Eo(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return GE(VE,n.buffer,r,o)}const Ka=new Nt,ys=new B;function rf(s){const e=new Ce,t=new Ce,n=new Ce,i=new Ce,r=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,u=new Ce,d=new Ce,h=new Ce,f=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(ys.fromArray(s.translation));const m=Dr(0);if(s.preRotation){const R=s.preRotation.map(zt.degToRad);R.push(m),t.makeRotationFromEuler(Ka.fromArray(R))}if(s.rotation){const R=s.rotation.map(zt.degToRad);R.push(s.eulerOrder||m),n.makeRotationFromEuler(Ka.fromArray(R))}if(s.postRotation){const R=s.postRotation.map(zt.degToRad);R.push(m),i.makeRotationFromEuler(Ka.fromArray(R)),i.invert()}s.scale&&r.scale(ys.fromArray(s.scale)),s.scalingOffset&&a.setPosition(ys.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(ys.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(ys.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(ys.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(d.copy(s.parentMatrix),u.copy(s.parentMatrixWorld));const v=t.clone().multiply(n).multiply(i),p=new Ce;p.extractRotation(u);const g=new Ce;g.copyPosition(u);const _=g.clone().invert().multiply(u),x=p.clone().invert().multiply(_),y=r,E=new Ce;if(f===0)E.copy(p).multiply(v).multiply(x).multiply(y);else if(f===1)E.copy(p).multiply(x).multiply(v).multiply(y);else{const F=new Ce().scale(new B().setFromMatrixScale(d)).clone().invert(),P=x.clone().multiply(F);E.copy(p).multiply(v).multiply(P).multiply(y)}const T=c.clone().invert(),C=o.clone().invert();let I=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(T).multiply(a).multiply(o).multiply(r).multiply(C);const b=new Ce().copyPosition(I),S=u.clone().multiply(b);return h.copyPosition(S),I=h.clone().multiply(E),I.premultiply(u.invert()),I}function Dr(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function Za(s){return s.split(",").map(function(t){return parseFloat(t)})}function of(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function HE(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function GE(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const WE="2.1.9",Qe={gravity:-1,dice:{radius:.01,collisionRadius:.017,mass:.01,angularDamping:.1,initialPosition:{xPercent:80,yPercent:80},initialHeight:.05,throw:{speed:{min:.3,max:.4},azimuth:{min:280,max:350},elevation:{min:-10,max:0},angularVelocity:{min:-5,max:5}}},physics:{frictionGround:.1,frictionWall:0,restitutionGround:.5,restitutionWall:.9},camera:{height:.5,breakpoint_px:768,scaleMobile_m_per_px:2e-4,scalePC_m_per_px:2e-4},tray:{sizeRatio:.9},solver:{iterations:30,tolerance:0},timeouts:{stopCheck:100,forceResult:4e3,hide:3e3},manualStopDetection:{velocityThreshold:.001,angularVelocityThreshold:.01,stopDuration:300}};let yi,ri,_i,pn,Ro,Ja,Nd,Zl=null,Cs=!1,Fd,Jl,Rs,Ps,af=!1,Un={x:0,z:0};const $E=5;let lf=[],gn=[];const XE=[{value:8,normal:new B(0,.894,.447)},{value:10,normal:new B(.851,.447,.276)},{value:2,normal:new B(.526,.447,-.724)},{value:6,normal:new B(-.526,.447,-.724)},{value:4,normal:new B(-.851,.447,.276)},{value:1,normal:new B(0,-.894,-.447)},{value:5,normal:new B(.851,-.447,-.276)},{value:3,normal:new B(.526,-.447,.724)},{value:7,normal:new B(-.526,-.447,.724)},{value:9,normal:new B(-.851,-.447,-.276)}];async function qE(s){Rs=s;const e=s.clientWidth,t=s.clientHeight;yi=new Om,ri=new Yt(1,e/t||1,.1,1),ri.position.set(0,Qe.camera.height,0),ri.lookAt(0,0,0),_i=new Ax({antialias:!0,alpha:!0}),_i.setSize(e,t),_i.setPixelRatio(window.devicePixelRatio),_i.setClearColor(0,0),s.appendChild(_i.domElement),yi.add(new Uh(16772829,.9));const n=new jl(14544639,5);n.position.set(-1,5,2),yi.add(n);const i=new jl(15663086,.5);i.position.set(5,2,-1),yi.add(i),pn=new tE,pn.gravity.set(0,Qe.gravity,0),pn.solver.iterations=Qe.solver.iterations,pn.solver.tolerance=Qe.solver.tolerance,Ro=new $i("dice"),Ja=new $i("ground"),Nd=new $i("wall"),pn.addContactMaterial(new zs(Ro,Ja,{restitution:Qe.physics.restitutionGround,friction:Qe.physics.frictionGround})),pn.addContactMaterial(new zs(Ro,Nd,{restitution:Qe.physics.restitutionWall,friction:Qe.physics.frictionWall}));const r=new ge({mass:0,material:Ja});r.addShape(new PM),r.quaternion.setFromEuler(-Math.PI/2,0,0),pn.addBody(r),df();const o=[];for(let a=0;a<$E;a++)o.push(jE());await Promise.all(o),af=!0,console.log("3D Dice pool ready."),hf(),window.addEventListener("resize",ec),setTimeout(ec,0)}function Ql(s,e){if(Cs||!af)return;const t=s.dices.length,n=lf.filter(d=>!d.inUse);if(n.length<t){console.error("リクエストされた数のダイスが不足しています。");return}gn=[],Zl=e,Cs=!0,clearTimeout(Jl),Rs.classList.add("is-visible"),ec();const i=Ps.width*Qe.tray.sizeRatio,r=Ps.height*Qe.tray.sizeRatio,o={1:[{x:0,z:0,y:0}],2:[{x:-1,z:0,y:.01},{x:1,z:0,y:0}],3:[{x:-1,z:1,y:.02},{x:1,z:1,y:.01},{x:0,z:-1,y:0}],4:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:0,y:.05}],5:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:-1.5,y:.04},{x:0,z:0,y:.07}]},a=(Qe.dice.initialPosition.xPercent/100-.5)*i,l=(Qe.dice.initialPosition.yPercent/100-.5)*r,c=Qe.dice.radius*2.5,u=o[t]||o[5];for(let d=0;d<t;d++){const h=n[d],f=s.dices[d];h.inUse=!0,h.model.visible=!0,h.id=f.id,h.stillTime=0,h.model.traverse(P=>{P.isMesh&&P.material.color.set(f.color)});const m=u[d],v=a+m.x*c,p=l+m.z*c,g=Qe.dice.initialHeight+m.y;h.body.position.set(v,g,p);const _=P=>Math.random()*(P.max-P.min)+P.min,x=_(Qe.dice.throw.speed),y=_(Qe.dice.throw.azimuth),E=_(Qe.dice.throw.elevation),T=zt.degToRad(y),C=zt.degToRad(E),I=x*Math.cos(C),b=x*Math.sin(C),S=I*Math.sin(T),R=-I*Math.cos(T);h.body.velocity.set(S,b,R);const F=Qe.dice.throw.angularVelocity;h.body.angularVelocity.set(_(F)*(Math.random()<.5?1:-1),_(F)*(Math.random()<.5?1:-1),_(F)*(Math.random()<.5?1:-1)),pn.addBody(h.body),h.body.wakeUp(),gn.push(h)}cf(),Jl=setTimeout(()=>{Cs&&(console.warn("Dice roll timed out. Forcing result."),uf())},Qe.timeouts.forceResult)}function jE(){return new Promise((s,e)=>{const t=new LE,n=new Nh,i="/models/",r="Dice_10.fbx",o={map:"Dice_10_Albedo.png",normalMap:"Dice_10_Normal.png",metalnessMap:"Dice_10_Metallic.png",roughnessMap:"Dice_10_Roughness.png",aoMap:"Dice_10_AO.png",displacementMap:"Dice_10_Height.png"},a={};let l=0;const c=Object.keys(o).length;Object.entries(o).forEach(([d,h])=>{n.load(i+h,f=>{f.colorSpace=ct,a[d]=f,l++,l===c&&u()},void 0,f=>e(f))});function u(){t.load(i+r,d=>{d.traverse(_=>{_.isMesh&&(_.material=new hg({map:a.map,normalMap:a.normalMap,displacementMap:a.displacementMap,aoMap:a.aoMap,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,metalness:1,roughness:1,normalScale:new Ke(2,2),displacementScale:0,aoMapIntensity:.5}))}),QE(d);const h=ZE(d),f=Qe.dice.radius/h;eb(d,f);const{vertices:m,indices:v}=JE(d),p=new Oo(m,v),g=new ge({mass:Qe.dice.mass,material:Ro,shape:p,angularDamping:Qe.dice.angularDamping,allowSleep:!0});d.visible=!1,lf.push({model:d,body:g,inUse:!1,color:null,id:null,stillTime:0}),yi.add(d),s()},void 0,d=>e(d))}})}function cf(){clearTimeout(Fd);let s=!0;const{velocityThreshold:e,angularVelocityThreshold:t,stopDuration:n}=Qe.manualStopDetection;gn.forEach(i=>{const r=i.body.velocity.length(),o=i.body.angularVelocity.length();r<e&&o<t?i.stillTime+=Qe.timeouts.stopCheck:i.stillTime=0,i.stillTime<n&&(s=!1)}),s&&gn.length>0?(clearTimeout(Jl),setTimeout(uf,200)):Cs&&(Fd=setTimeout(cf,Qe.timeouts.stopCheck))}function YE(){gn.forEach(s=>{s.inUse=!1,s.model.visible=!1,s.id=null,pn.removeBody(s.body)}),gn=[]}function uf(){if(!Cs){console.log("finishRoll called, but isRolling is already false. Aborting.");return}console.log("finishRoll triggered. Calculating results and setting up hide timer.");const s=gn.map(e=>{let t=0;const n=e.model.getObjectByProperty("isMesh",!0);return n&&(t=n.material.color.getHex()),{id:e.id,color:t,value:KE(e.model)}});Zl&&Zl(s),Cs=!1,setTimeout(()=>{console.log(`Hiding container and cleaning up dice. (After ${Qe.timeouts.hide}ms)`),YE(),Rs.classList.remove("is-visible")},Qe.timeouts.hide)}function KE(s){let e=-2,t=-1;const n=new B(0,1,0);return XE.forEach(i=>{const o=i.normal.clone().applyQuaternion(s.quaternion).dot(n);o>e&&(e=o,t=i.value)}),t}const Ud=[],Bd=[];function df(){Ud.forEach(s=>pn.removeBody(s)),Ud.length=0,Bd.forEach(s=>yi.remove(s)),Bd.length=0}function ec(){if(!Rs)return;const s=Rs.clientWidth,e=Rs.clientHeight;if(s===0||e===0)return;const t=s<=Qe.camera.breakpoint_px?Qe.camera.scaleMobile_m_per_px:Qe.camera.scalePC_m_per_px,n=e*t,i=ri.position.y,r=2*Math.atan(n/(2*i)),o=zt.radToDeg(r),a=s/e,l=n;Ps={width:l*a,height:l},Un.x=Ps.width*Qe.tray.sizeRatio/2,Un.z=Ps.height*Qe.tray.sizeRatio/2,df(),ri.aspect=a,ri.fov=o,ri.updateProjectionMatrix(),_i.setSize(s,e)}let Od=performance.now();function hf(){requestAnimationFrame(hf);const s=performance.now(),e=(s-Od)/1e3;pn&&pn.step(1/60,e,3),Od=s;const t=Qe.dice.collisionRadius;for(let n=0;n<gn.length;n++)for(let i=n+1;i<gn.length;i++){const r=gn[n],o=gn[i],a=r.body.position,l=o.body.position,c=l.x-a.x,u=l.z-a.z,d=Math.sqrt(c*c+u*u);if(d<t){const h=new M(c/d,0,u/d),f=t-d;a.x-=h.x*f/2,a.z-=h.z*f/2,l.x+=h.x*f/2,l.z+=h.z*f/2;const m=r.body.velocity,v=o.body.velocity,g=new M(v.x-m.x,0,v.z-m.z).dot(h);if(g<0){const _=-1.8*g/2;m.x-=_*h.x,m.z-=_*h.z,v.x+=_*h.x,v.z+=_*h.z;const x=r.body.angularVelocity,y=o.body.angularVelocity;x.y*=-1,y.y*=-1}}}gn.forEach(n=>{n.model.position.copy(n.body.position),n.model.quaternion.copy(n.body.quaternion);const i=n.body.position,r=n.body.velocity,o=n.body.angularVelocity;i.x<-Un.x?(i.x=-Un.x,r.x<0&&(r.x*=-1,o.z*=-1)):i.x>Un.x&&(i.x=Un.x,r.x>0&&(r.x*=-1,o.z*=-1)),i.z<-Un.z?(i.z=-Un.z,r.z<0&&(r.z*=-1,o.x*=-1)):i.z>Un.z&&(i.z=Un.z,r.z>0&&(r.z*=-1,o.x*=-1))}),_i&&yi&&ri&&_i.render(yi,ri)}function ZE(s){const e=new B;let t=0;return s.traverse(n=>{if(n.isMesh&&n.geometry?.attributes?.position){const i=n.geometry.attributes.position;for(let r=0;r<i.count;r++){e.fromBufferAttribute(i,r);const o=e.length();o>t&&(t=o)}}}),t}function JE(s){const e=[],t=[];let n=0;return s.traverse(i=>{if(i.isMesh&&i.geometry?.attributes?.position){const r=i.geometry,o=r.attributes.position;for(let a=0;a<o.count;a++)e.push(o.getX(a),o.getY(a),o.getZ(a));if(r.index){const a=r.index.array;for(let l=0;l<a.length;l++)t.push(n+a[l])}else for(let a=0;a<o.count;a++)t.push(n+a);n+=o.count}}),{vertices:e,indices:t}}function QE(s){const e=new Qi().setFromObject(s),t=new B;e.getCenter(t),s.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.translate(-t.x,-t.y,-t.z)}),s.position.set(0,0,0)}function eb(s,e){const t=new Ce().makeScale(e,e,e);s.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.applyMatrix4(t)}),s.scale.set(1,1,1)}const tb="1.3.26";let ff={},pf={},mf={},gf={},vr=()=>{},kd=!1;function nb(s){if(ff=s.hintMasterData,pf=s.regretMasterData,mf=s.takaramonoMasterData,gf=s.memoryFragmentsData,vr=s.addLog,!kd){const e=document.getElementById("dice3d-container");e&&(qE(e),kd=!0)}}function ib(){wt({title:"🎲 ダイスロール",items:[{label:"🎲 ダイスロール",isTitle:!0},{label:"NA 攻撃判定",onClick:()=>ln({command:"NA",showToast:!0})},{label:"NC 判定",onClick:()=>ln({command:"NC",showToast:!0})},{label:"NM 姉妹への未練",onClick:()=>ln({command:"NM",showToast:!0})},{label:"NME 敵への未練",onClick:()=>ln({command:"NME",showToast:!0})},{label:"NMN 中立者への未練",onClick:()=>ln({command:"NMN",showToast:!0})},{label:"NT たからもの表",onClick:()=>ln({command:"NT",showToast:!0})},{label:"NK 記憶のカケラ",onClick:()=>ln({command:"NK",showToast:!0})},{label:"NH 暗示表",onClick:()=>ln({command:"NH",showToast:!0})},{label:"1D10",onClick:()=>ln({command:"1d10",showToast:!0})},{label:"1D100",onClick:()=>ln({command:"1d100",showToast:!0})},{label:"直接入力",onClick:()=>{wt({title:"🎲 ダイスロール",bodyHtml:`
                    <p style="text-align: center; margin-bottom: 15px;">ダイスコマンドを入力してください。</p>
                    <input type="text" id="diceCommandInput" value="5NC" 
                           class="modal-input-text" autofocus
                           inputmode="latin" style="ime-mode: disabled;">
                `,footerHtml:'<button id="executeDiceRollBtn" class="welcome-modal-close-btn">ダイスロール</button>',onRender:(n,i)=>{const r=n.querySelector("#diceCommandInput"),o=n.querySelector("#executeDiceRollBtn"),a=()=>{r.value&&ln({command:r.value,showToast:!0}),i()};o.onclick=a,r.onkeydown=l=>{l.key==="Enter"&&a()},r.select()}})}}]})}function zd(s,e){const{command:t,showToast:n,callback:i}=s;Ql({dices:[{id:"tens",color:16729156},{id:"ones",color:35071}]},o=>{if(!o||o.length<2){console.error("D100ロールの結果取得に失敗しました。");return}const a=o.find(f=>f.id==="tens"),l=o.find(f=>f.id==="ones");if(!a||!l){console.error("D100ロールの結果取得に失敗しました（ダイスの役割を特定できません）。");return}const c=a.value===10?0:a.value,u=l.value===10?0:l.value;let d=c*10+u;d===0&&(d=100);const h=e(d,c,u);vr(h),n&&ft(h,3e3),i&&i(d,null,h)})}function ln(s){const e=typeof s=="string"?s:s.command,t=typeof s=="object"&&s.callback?s.callback:null;if(!e)return;const n=e.toLowerCase().replace(/\s/g,""),i=/^(nm|nme|nmn|nt|nh|1?d10)$/,r=/^(\d*)?(nc|na)([+-]\d+|0)?$/,o=/^(1?d100)$/,a=n.match(r),l=n.match(i),c=n.match(o);if(a){const[,u,d,h]=a,f=h?parseInt(h,10):0,m=parseInt(u,10)||1,v=s.performer,p=v&&v.type==="enemy"?13369548:16777215,g={dices:Array.from({length:m},(_,x)=>({id:`system_d${x}`,color:p}))};Ql(g,_=>{if(!_||_.length<m){console.error("3Dダイスロールの結果が不足しています。");return}const x=_.map(P=>P.value===0?10:P.value),y=x.map(P=>P+f);x.sort((P,O)=>P-O),y.sort((P,O)=>P-O);const E=Math.max(...y),T=Math.min(...y);let C="",I="",b=null;E>=11?(C="大成功",d==="na"&&(I=`攻撃側任意（追加ダメージ${E-10}）`,b="任意")):E>=6?(C="成功",d==="na"&&(E>=10?(I="頭（なければ攻撃側任意）",b="頭"):E>=9?(I="腕（なければ攻撃側任意）",b="腕"):E>=8?(I="胴（なければ攻撃側任意）",b="胴"):E>=7?(I="脚（なければ攻撃側任意）",b="脚"):(I="防御側任意",b="任意"))):T<=1?(C="大失敗",d==="na"?I="味方か自身に命中":d==="nc"&&(I="使用パーツ全損")):C="失敗";const S=f>0?`+${f}`:f<0?`${f}`:"",F=`<span style="color: ${C==="大成功"||C==="成功"?"#007bff":"#dc3545"};">🎲 ${e.toUpperCase()} ＞ [${x.join(",")}]${S} ＞ ${E}[${y.join(",")}]<br>${C}<br>${I}</span>`;vr(F),s.showToast&&ft(F,2e3),t&&t(C,b,F,E)})}else if(l){const u=l[1];Ql({dices:[{color:16777215}]},h=>{if(!h||h.length===0){console.error("3Dダイスロールの結果がありません。");return}const f=h[0].value,m=f===0?10:f;let v="";switch(u){case"nm":v=Qa("SI-","姉妹への未練表",m);break;case"nme":v=Qa("EN-","敵への未練表",m);break;case"nmn":v=Qa("NP-","中立者への未練表",m);break;case"nt":const p=mf[m];v=p?`🎲 たからもの表(${m})<br>【${p.name}】 ${p.description}`:`たからものデータ[${m}]が見つかりませんでした。`;break;case"nh":const g=ff[m];v=g?`🎲 暗示表(${m})<br>【${g.name}】 ${g.description}`:`暗示データ[${m}]が見つかりませんでした。`;break;case"1d10":case"d10":v=`🎲 D10 ＞ ${m}`;break}vr(v),typeof s=="object"&&s.showToast&&ft(v,3e3)})}else if(c)zd(s,(u,d,h)=>`🎲 1D100 ＞ ${u} [${d*10} + ${h}]`);else if(n==="nk")zd(s,u=>{const d=gf[u];return d?`🎲 記憶のカケラ表(${u})<br>【${d.name}】 ${d.description}`:`記憶のカケラデータ[${u}]が見つかりませんでした。`});else{let u=`「${e}」は無効な入力です。`;const d=/^(\d*)d(\d+)([+-]\d+)?$/,h=n.match(d);if(h){const f=h[1]?parseInt(h[1],10):1,m=parseInt(h[2],10),v=h[3]?parseInt(h[3],10):0;if(f>0&&m>0&&f<=100){const p=Array.from({length:f},()=>Math.floor(Math.random()*m)+1);p.sort((y,E)=>y-E);const g=p.reduce((y,E)=>y+E,0),_=g+v;let x=v>0?`+${v}`:v<0?`${v}`:"";u=`🎲 ${e.toUpperCase()} ＞ ${g}[${p.join(",")}]${x} ＞ ${_}`}else u=`「${e}」のダイスの数や種類が正しくありません。`}vr(u),(typeof s=="object"&&s.showToast||typeof s=="string")&&ft(u,3e3)}}function Qa(s,e,t){const n=pf;if(!n||Object.keys(n).length===0)return"未練データが見つかりませんでした。";const i=`${s}${String(t).padStart(2,"0")}`,r=n[i];return r?`🎲 ${e}(${i})<br>【${r.name}】[発狂:${r.madnessName}] ${r.madnessEffect}`:`未練データ[${i}]が見つかりませんでした。`}const sb="1.3.1";function ea(s){if(!s)return console.error("[Converter] 変換対象のデータ(sourceData)が存在しません。"),null;try{const e={};e.name=s.Name||s.pc_name||s.data_title||"名称未設定",e.description=`${s.data_title||""} | ${s.Position_Name||""}（${s.MCLS_Name||""}・${s.SCLS_Name||""}）`,e.img="/images/noimage.png",e.category="ドール",e.initialArea=s.sex||"煉獄",e.baseActionValue=6;const t=s.pc_carma;if(t){const f=ac();let m=null;for(const v in f){const p=f[v].name;if(t.includes(p)){m=p;break}}if(m){const v=Object.keys(f).find(p=>f[p].name===m);e.hint={key:v,name:m,description:f[v].description}}else e.hint={name:t,description:"マスタデータに詳細が見つかりませんでした。"}}else e.hint=null;e.position=s.Position_Name||"",e.mainClass=s.MCLS_Name||"",e.subClass=s.SCLS_Name||"";const n={1:"武装",2:"変異",3:"改造"};e.enhancementValue={bonus:n[s.ST_Bonus]||"武装"},e.skills=[],e.parts={head:[],arms:[],torso:[],legs:[],body:[]};const i={4:"head",5:"arms",6:"torso",7:"legs"},r={1:"オート",2:"アクション",3:"ジャッジ",4:"ダメージ",5:"ラピッド"},o={1:"攻撃",2:"攻撃",3:"行動値",4:"補助",5:"妨害",6:"防御",7:"移動"},a=s.Power_name?.length||0;let l=null,c=-1;c=s.Power_shozoku?.findIndex(f=>f&&f.includes("たから")),c>-1?l=s.Power_name[c]:(c=s.Power_memo?.findIndex((f,m)=>{const v=s.Power_hantei[m];return!["1","2","3"].includes(v)&&f&&f.includes("たからもの")}),c>-1&&(l=s.Power_name[c])),e.treasure=l;for(let f=0;f<a;f++){const m=s.Power_name[f];if(!m||m===l)continue;const v=s.Power_hantei[f],p=i[v];if(!Tt(m)){const g=s.Power_Type[f],_={name:m,timing:r[s.Power_timing[f]]||"オート",cost:s.Power_cost[f]||"なし",range:s.Power_range[f]||"自身",effect:s.Power_memo[f]||"効果不明",description:s.Power_memo[f]||"効果不明",category:["1","2","3"].includes(v)?"スキル":o[g]||"強化パーツ",tags:[]};op(_)}["1","2","3"].includes(v)?e.skills.push(m):p?e.parts[p].push(m):e.skills.push(m)}if(l){const f=s.Power_hantei[c],m=i[f];m?e.parts[m].push(l):e.parts.body.push(l)}e.regrets=[];const u=s.roice_name?.length||0;for(let f=0;f<u;f++){const m=s.roice_name[f],v=s.roice_pos[f];if(m&&v){const p={name:`${m}への${v}`,points:parseInt(s.roice_damage[f],10)||3};m==="たからもの"&&e.treasure?(p.name=`${e.treasure}への${v}`,p.category="たからもの"):p.categoryKey="SI",e.regrets.push(p)}}e.memories=[];const d=Xo(),h=s.kakera_name?.length||0;for(let f=0;f<h;f++){const m=s.kakera_name[f],v=s.kakera_memo[f];if(!m)continue;let p=null;for(const _ in d){const x=d[_].name;if(m.includes(x)){p=x;break}}const g=p||m.trim();e.memories.push({name:g,memo:v})}return e.personalData={title:s.data_title||"",tags:s.pc_tags||"",race:s.shuzoku||"ドール",age:s.age||"",sex:s.sex||"",height:s.pc_height||"",weight:s.pc_weight||"",karma:s.pc_carma||"",hairColor:s.color_hair||"",eyeColor:s.color_eye||"",skinColor:s.color_skin||"",memo:s.pc_making_memo||""},e}catch(e){return console.error("キャラクターシートの変換中にエラーが発生しました:",e),null}}const rb="1.2.8";function ob(s){const t=Nr().maneuverCategories.find(n=>n.name===s);return t?t.slug:"other"}function ab(s){if(!s.id)return"その他";const e=Nr();if(!e||!e.positions)return"データ読込中...";const t=s.id,n=t.substring(0,2),i=t.substring(0,1);let r="スキル";e.positions[n]?r=`ポジションスキル：${e.positions[n].name}`:e.classes[n]?t.endsWith("-SP")?r=`特化スキル：${e.classes[n].name}`:r=`クラススキル：${e.classes[n].name}`:n==="BP"?r="基本パーツ":["A","M","R"].includes(i)&&!isNaN(parseInt(t.substring(1,2),10))?r=`強化パーツ：${t.substring(1,2)}レベル${e.enhancementTypes[i].name}`:t.startsWith("P")?r="手駒専用パーツ":e.pawnSkills[n]?r=e.pawnSkills[n].name:e.commonAction&&e.commonAction[n]&&(r=e.commonAction[n].name);let o="";return typeof s.maliceLevel=="number"&&s.maliceLevel>0&&(o=`<span class="malice-level">悪意${s.maliceLevel}</span>`),r+o}function lb(s){let e="その他";if(s.source){let t=s.source.book||"";t==="基本ルールブック"&&(t="基本ルール"),e=t,s.source.page&&(e+=` p${s.source.page}`),s.source.errata&&(e+="（エラッタ適用済）")}return e}const cb="1.3.13";function ub(){const s=document.querySelectorAll('input[name="theme-switcher"]'),e=localStorage.getItem("theme")||"system";el(e);const t=document.querySelector(`input[name="theme-switcher"][value="${e}"]`);t&&(t.checked=!0),s.forEach(l=>{l.addEventListener("change",c=>{const u=c.target.value;el(u),localStorage.setItem("theme",u),console.log(`Theme changed to: ${u}`)})}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("theme")||"system")==="system"&&el("system")});const i=document.querySelector('input[name="autosave-switcher"]'),r=Dw();i&&(i.checked=r,i.addEventListener("change",l=>{const c=l.target.checked;Nw(c)}));const o=document.getElementById("loadStateFromFileBtn"),a=document.getElementById("fileInput");o&&a&&(o.onclick=()=>{a.value="",a.click()},a.onchange=async l=>{const c=l.target.files[0];if(!c)return;const u=new FileReader;u.onload=async d=>{const h=d.target.result;await Uw(h)&&Rn()},u.readAsText(c)}),console.log("Settings Manager initialized.")}function el(s){s==="system"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",s)}function db(){let s=0;for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e),n=localStorage.getItem(t);if(t&&n){const i=(t.length+n.length)*2;s+=i}}return s}function hb(){localStorage.removeItem("userLocalImages"),console.log("Local image cache cleared.")}const fb="1.1.4";function vf(s,e){const t=e.range;if(!t||isNaN(parseInt(t[0],10)))return{minRange:NaN,maxRange:NaN};let n=0;const i=[...(s.skills||[]).map(l=>Tt(l)),...Object.values(s.partsStatus||{}).flat().filter(l=>!l.damaged).map(l=>Tt(l.name))].filter(l=>l);for(const l of i)if(l.timing==="オート"&&l.effects){for(const c of l.effects)if(c.ref==="APPLY_BUFF"&&c.params?.stat==="rangeBonus"){const u=c.params.condition;if(u&&Array.isArray(u)){const d=e.tags||[];u.some(h=>d.includes(h))&&(n+=c.params.value||0)}else n+=c.params.value||0}}const r=String(t).split("～"),o=parseInt(r[0],10),a=parseInt(r[1]||r[0],10)+n;return{minRange:o,maxRange:a}}function Pc(s){if(!s||s.type!=="instance")return{finalAmount:0,baseAmount:0,totalBonus:0,totalDefense:0};const{performer:e}=s.sourceAction,{target:t}=s,n=pt(e.id),i=pt(t.id);if(!n||!i)return{finalAmount:0,baseAmount:0,totalBonus:0,totalDefense:0};const r=s.baseAmount||0;let o=0,a=0;return s.rollValue>=11&&(o+=s.rollValue-10),(n.activeBuffs||[]).forEach(u=>{u.stat==="damageBonus"&&(u.duration==="onetime_next_action"||u.duration==="until_damage_applied")&&(o+=u.value||0)}),(i.activeBuffs||[]).forEach(u=>{u.stat==="defense"&&u.duration==="until_damage_applied"&&(a+=u.value||0)}),Object.values(i.partsStatus).flat().map(u=>u.damaged?null:Tt(u.name)).filter(u=>u?.timing==="オート"&&u.effects).forEach(u=>{u.effects.forEach(d=>{if(d.ref==="APPLY_PASSIVE_DEFENSE"&&d.params?.value){const h=d.params.condition?.replace("hit_location_is_","");s.location.toLowerCase().includes(h)&&(a+=d.params.value)}})}),{finalAmount:Math.max(0,r+o-a),baseAmount:r,totalBonus:o,totalDefense:a}}const pb="1.19.79";let ko=null;const Vs=["奈落","地獄","煉獄","花園","楽園"];let Xi=null,lr="宣言";function zo(){Xi&&(Xi(null),Xi=null,document.querySelectorAll(".target-selectable").forEach(s=>{s.classList.remove("target-selectable"),s.onclick=null}),tn())}const tc=s=>{const e=document.getElementById("maneuverMenu");e&&!e.contains(s.target)&&ko&&!ko.contains(s.target)&&Hs(),Xi&&(s.target.closest(".target-selectable")||zo())};function Vd(s,e){Xi&&zo(),Hs(),ko=e;const t=document.getElementById("maneuverMenu");t.innerHTML="",t.classList.remove("is-reference-mode");const n=[{id:"宣言",label:"宣言"},{id:"スキル",label:"スキル"},{id:"パーツ",label:"パーツ"},{id:"オート",label:"オート"},{id:"アクション",label:"アクション"},{id:"ラピッド",label:"ラピッド"},{id:"ジャッジ",label:"ジャッジ"},{id:"ダメージ",label:"ダメージ"},{id:"バフ",label:"バフ"},{id:"移動",label:"移動"},{id:"攻撃",label:"攻撃"},{id:"支援",label:"支援"},{id:"妨害",label:"妨害"},{id:"防御",label:"防御"},{id:"強化",label:"強化"},{id:"生贄",label:"生贄"},{id:"すべて",label:"すべて"}],i=document.createElement("div");i.className="maneuver-menu-header",i.innerHTML=`
        <span class="header-icon" id="menuHeaderIcon">🪪</span>
        <span class="header-title">${s.name}</span>
        <button class="header-close-btn">&times;</button>
    `,t.appendChild(i),i.querySelector("#menuHeaderIcon").onclick=()=>ta(s),i.querySelector(".header-close-btn").onclick=Hs;const r=document.createElement("div");r.className="maneuver-menu-filter-bar",n.forEach(u=>{const d=document.createElement("button");d.className="filter-btn",d.dataset.filterId=u.id,d.textContent=u.label,u.id===lr&&d.classList.add("is-active"),d.onclick=()=>{lr=u.id,r.querySelectorAll(".filter-btn").forEach(h=>h.classList.remove("is-active")),d.classList.add("is-active"),a()},r.appendChild(d)}),t.appendChild(r);const o=document.createElement("div");o.className="maneuver-menu-list-container",t.appendChild(o);const a=()=>{o.innerHTML="";const u=Ic(s);let d=mb(u,lr,s);lr!=="パーツ"&&(d=bf(d)),lr==="パーツ"?l(d,s):c(d,s)},l=(u,d)=>{["頭","腕","胴","脚","他"].forEach(f=>{const m=u.filter(v=>_f(v.data,d).includes(f));if(m.length>0){const v=document.createElement("div");v.className="maneuver-group",v.innerHTML=`<div class="group-header">${f}</div>`,m.forEach(p=>v.appendChild(nc(p,d))),o.appendChild(v)}})},c=(u,d)=>{if(u.length===0){o.innerHTML='<div class="maneuver-item is-empty">対象のマニューバはありません</div>';return}u.forEach(h=>o.appendChild(nc(h,d)))};a(),t.classList.add("is-visible"),setTimeout(()=>{document.addEventListener("click",tc)},0)}function nc(s,e){const t=s.data,n=document.createElement("div");n.className="maneuver-item-new";const i=!e.id;i&&n.classList.add("is-reference-item");const r=document.createElement("div");r.className="item-category-col";const o=t.category||"その他",a=`category-color-${ob(o)}`;n.classList.add(a.replace("bg-","")),r.classList.add(a),r.innerHTML=`<span>${o}</span>`;const l=document.createElement("div");l.className="item-icon-col";const c=document.createElement("div");if(c.className="item-passive-icon-col",!i&&(s.isActiveBuff||t.timing==="オート")){let y=!1;if(s.isActiveBuff)y=!0;else{const E=s.isDamaged,T=["MODIFY_MAX_ACTION_VALUE_ON_DAMAGE","ATTACK_ON_DAMAGE"],C=["APPLY_BUFF","REDUCE_MOVE_COST","NEGATE_STATUS_EFFECT","APPLY_PASSIVE_DEFENSE","PREVENT_INTERRUPTION","MODIFY_ATTACK_RESULT","IMMUNITY","NEGATE_DAMAGE_EFFECT"];if(t.effects?.some(I=>T.includes(I.ref))&&E&&(y=!0),!y&&!E){for(const I of t.effects||[])if(I.ref==="APPLY_BUFF"&&I.params?.duration==="while_in_area"){if(e.area===I.params.area){y=!0;break}}else if(C.includes(I.ref)){y=!0;break}}}y&&(c.innerHTML='<span class="maneuver-icon">💡</span>')}const u=document.createElement("div");if(u.className="item-status-icon-col",!i&&e.turnLimitedManeuvers&&e.turnLimitedManeuvers.has(t.name)){const y=e.usedManeuvers.has(t.name);u.innerHTML=`<input type="checkbox" class="maneuver-checkbox" ${y?"checked":""} disabled>`}l.appendChild(c),l.appendChild(u);const d=document.createElement("div");d.className="item-right-col";const h=ab(t),f=lb(t);let m="";const v=_f(t,e);v&&(m=`<span class="item-location-prefix">${v}</span>`);const p=`${m}【${t.name}】`,g=t.description_raw||"",_=encodeURIComponent(g);d.innerHTML=`
        <div class="ref-container-top">
            <div class="ref-source-info">${f}</div>
            <div class="ref-source-category">${h}</div>
        </div>
        <div class="ref-container">
            <div class="ref-maneuver-name">${p}</div>
            <div class="ref-stats">《${t.timing}/${t.cost}/${t.range}》</div>
        </div>
        <div class="item-row-2 has-copy-button">
            <span>${g}</span>
            <button class="copy-description-btn" data-copy-text="${_}" title="効果テキストをコピー">📋</button>
        </div>
        ${t.flavor_text?`<div class="item-row-3 item-flavor-text">${t.flavor_text}</div>`:""}
    `,n.appendChild(r),n.appendChild(l),n.appendChild(d);const x=n.querySelector(".copy-description-btn");return x&&(x.onclick=y=>{y.stopPropagation(),navigator.clipboard.writeText(decodeURIComponent(y.currentTarget.dataset.copyText)).then(()=>{ft("コピーしました！",1500)})}),s.isUsable?i||(n.onclick=async y=>{if(y.stopPropagation(),t.tags.includes("攻撃")?Hs():setTimeout(()=>Hs(),0),t.name==="任意"){const b=`<div class="action-cost-form"><div class="action-cost-selector">${[1,2,3,4,5].map(R=>`<label><input type="radio" name="action-cost" value="${R}" ${R===1?"checked":""}> <span>${R}</span></label>`).join("")}</div></div>`;wt({title:"消費する行動値を選択",bodyHtml:b,footerHtml:'<button id="applyActionCostBtn" class="welcome-modal-close-btn">適用</button>',onRender:(R,F)=>{R.querySelector("#applyActionCostBtn").onclick=()=>{const P=R.querySelector('input[name="action-cost"]:checked').value,O={...t,cost:String(parseInt(P,10))};bn(e,O),F()}}});return}if(t.timing==="ダメージ"&&t.tags.includes("防御")&&!t.effects?.some(b=>b.ref==="TAKE_DAMAGE_FOR_ALLY")){const b=Pt().damageQueue.filter(R=>R.type==="instance"&&!R.applied&&R.target.type===e.type&&oi(e,t,[R.target]).hasTarget);if(b.length===0){Le("防御対象となるダメージがありません。");return}const S=await new Promise(R=>{const F=b.map(P=>{const O=P.finalAmount??P.baseAmount??P.amount??0;return{label:`【${P.sourceAction.sourceManeuver.name}】→ ${P.target.name} (${O}点)`,onClick:()=>R(P)}});wt({title:`【${t.name}】防御対象を選択`,items:F,onRender:(P,O)=>{P.onclick=U=>{U.target===P&&(O(),R(null))}}})});S&&bn(e,t,S.target);return}if(t.effects?.find(b=>b.ref==="TAKE_DAMAGE_FOR_ALLY")){const b=Pt().damageQueue.filter(R=>R.type==="instance"&&!R.applied&&R.target.type===e.type&&R.target.id!==e.id&&oi(e,t,[R.target]).hasTarget);if(b.length===0){Le("庇う対象がいません。");return}const S=await new Promise(R=>{const F=b.map(P=>{const O=P.finalAmount??P.baseAmount??P.amount??0;return{label:`【${P.sourceAction.sourceManeuver.name}】→ ${P.target.name} (${O}点)`,onClick:()=>R(P)}});wt({title:`【${t.name}】庇う対象を選択`,items:F,onRender:(P,O)=>{P.onclick=U=>{U.target===P&&(O(),R(null))}}})});S&&bn(e,t,S.target);return}if(t.timing==="ジャッジ"&&t.range!=="自身"){const b=xf(e,t);if(b.length===0){Le("妨害/支援の対象となるアクションがありません。");return}const S=b.map(R=>({label:`${R.performer.name}: 【${R.sourceManeuver.name}】${R.target?` → ${R.target.name}`:""}`,onClick:()=>{bn(e,t,null,R)}}));wt({title:`【${t.name}】の対象を選択`,items:S});return}if(t.tags&&t.tags.includes("移動妨害")){const S=[...Pt().actionQueue,...Pt().rapidQueue].filter(F=>!F.checked&&F.performer.type!==e.type&&F.sourceManeuver.tags.includes("移動")&&oi(e,t,[F.performer]).hasTarget);if(S.length===0){Le("妨害の対象となる移動がありません。");return}const R=S.map(F=>{let P="";const O=F.performer,U=F.sourceManeuver,N=F.target;return N&&N.id!==O.id?P=`${N.name}（${O.name}の【${U.name}】）`:P=`${O.name}: 【${U.name}】`,{label:P,onClick:()=>{bn(e,t,F)}}});wt({title:`【${t.name}】の妨害対象を選択`,items:R});return}if(t.tags.includes("移動")){if(t.range==="自身")vb(e,t);else{const b=await Hd(e,t,tc);if(b){const S=await new Promise(R=>{wt({title:`【${t.name}】移動方向を選択`,items:[{label:"奈落方向へ",onClick:()=>R("奈落方向")},{label:"楽園方向へ",onClick:()=>R("楽園方向")}],onRender:F=>{F.onclick=P=>{P.target===F&&R(null)}}})});if(S){const R={...t,targetArea:S};bn(e,R,b)}}}return}if(t.tags.includes("攻撃")){const b=await Hd(e,t,tc);b&&bn(e,t,b);return}bn(e,t)}):(n.classList.add("is-masked"),!i&&s.isDamaged&&n.classList.add("is-damaged")),n}function mb(s,e,t){let n=[];const i=["待機","任意"];switch(e){case"宣言":n=s.filter(r=>r.isUsable&&r.data.timing!=="オート");break;case"スキル":n=s.filter(r=>r.sourceType==="skill"&&!i.includes(r.data.name));break;case"パーツ":n=s.filter(r=>r.sourceType==="part"&&!i.includes(r.data.name));break;case"オート":n=s.filter(r=>r.data.tags.includes("オート")&&!i.includes(r.data.name));break;case"アクション":n=s.filter(r=>r.data.tags.includes("アクション")&&!i.includes(r.data.name));break;case"ラピッド":n=s.filter(r=>r.data.tags.includes("ラピッド")&&!i.includes(r.data.name));break;case"ジャッジ":n=s.filter(r=>r.data.tags.includes("ジャッジ")&&!i.includes(r.data.name));break;case"ダメージ":n=s.filter(r=>r.data.tags.includes("ダメージ")&&!i.includes(r.data.name));break;case"移動":n=s.filter(r=>(r.data.tags.includes("移動")||r.data.tags.includes("移動妨害"))&&!i.includes(r.data.name));break;case"攻撃":n=s.filter(r=>r.data.tags.includes("攻撃")&&!i.includes(r.data.name));break;case"防御":n=s.filter(r=>r.data.tags.includes("防御")&&!i.includes(r.data.name));break;case"強化":n=s.filter(r=>r.data.tags.includes("強化")&&!i.includes(r.data.name));break;case"支援":n=s.filter(r=>r.data.tags.includes("支援")&&!i.includes(r.data.name));break;case"妨害":n=s.filter(r=>(r.data.tags.includes("妨害")||r.data.tags.includes("脆弱")||r.data.tags.includes("移動妨害"))&&!i.includes(r.data.name));break;case"生贄":n=s.filter(r=>r.data.tags.includes("生贄")&&!i.includes(r.data.name));break;case"バフ":case"すべて":default:n=[...s];break}return(e==="バフ"||e==="すべて")&&t.activeBuffs&&t.activeBuffs.length>0&&t.activeBuffs.forEach(r=>{const o=Tt(r.source);if(o){const a=n.findIndex(l=>l.data.name===r.source&&!l.isActiveBuff);a>-1&&n.splice(a,1),n.some(l=>l.isActiveBuff&&l.sourceName===r.source)||n.push({data:o,sourceType:"active_buff",sourceName:r.source,isActiveBuff:!0,isUsable:!1})}}),e==="バフ"?n.filter(r=>{if(r.isActiveBuff)return!0;if(r.data.timing!=="オート"||!r.data.effects)return!1;let o=!1;const a=r.data,l=r.isDamaged,c=["MODIFY_MAX_ACTION_VALUE_ON_DAMAGE","ATTACK_ON_DAMAGE"];if(a.effects.some(u=>c.includes(u.ref))&&l&&(o=!0),!o&&!l){const u=["APPLY_BUFF","REDUCE_MOVE_COST","NEGATE_STATUS_EFFECT","APPLY_PASSIVE_DEFENSE","PREVENT_INTERRUPTION","MODIFY_ATTACK_RESULT","IMMUNITY","NEGATE_DAMAGE_EFFECT"];for(const d of a.effects)if(d.ref==="APPLY_BUFF"&&d.params?.duration==="while_in_area"){if(t.area===d.params.area){o=!0;break}}else if(u.includes(d.ref)){o=!0;break}}return o}):n}function ta(s){const e=s.category==="ドール",t=Nr(),n=t.classes;let i={A:0,M:0,R:0};if(e){const u=Object.keys(n).find(v=>n[v].name===s.mainClass),d=Object.keys(n).find(v=>n[v].name===s.subClass),h=u?n[u]:null,f=d?n[d]:null;h&&(i.A+=h.A||0,i.M+=h.M||0,i.R+=h.R||0),f&&(i.A+=f.A||0,i.M+=f.M||0,i.R+=f.R||0);const m=s.enhancementValue.bonus;m==="武装"&&(i.A+=1),m==="変異"&&(i.M+=1),m==="改造"&&(i.R+=1)}const l=(e?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(u=>`<option value="${u}" ${s.area===u?"selected":""}>${u}</option>`).join(""),c=`
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
            ${(()=>{if(!s.memories||s.memories.length===0)return"<p>（記憶のカケラはありません）</p>";const u=Xo();return s.memories.map(d=>{const h=Object.entries(u).find(([f,m])=>m.name===d.name);if(h){const[f,m]=h,v=m.description,p=d.memo?`<br><span class="sheet-user-memo"><i>${d.memo}</i></span>`:"",g=`${f}【${d.name}】
${v}`;return`
                            <p>
                                <span class="memory-text-container">
                                    ${f}<b>【${d.name}】</b><br>${v}${p}
                                </span>
                                <button class="copy-description-btn" data-copy-text="${encodeURIComponent(g)}">📋</button>
                            </p>`}else{const f=d.memo?`<br><span class="sheet-user-memo"><i>${d.memo}</i></span>`:"";return`<p><span class="memory-text-container"><b>【${d.name}】</b> (カスタム)${f}</span></p>`}}).join("")})()}
        </div>
        <div class="sheet-section sheet-regrets">
            <h4>未練</h4>
            ${s.regrets&&s.regrets.length>0?s.regrets.map(u=>{const d=u.points||0,h="●".repeat(d)+"○".repeat(4-d),f=xr(),m=Object.values(f).find(p=>u.name.includes(p.name)),v=m?`：${m.madnessName}：${m.madnessEffect}`:"";return`<p>${u.name}：${d}点 ${h}${v}</p>`}).join(""):"<p>（未練はありません）</p>"}
        </div>`:""}
        <div class="sheet-section sheet-skills">
            <h4>スキル</h4>
            ${s.skills.map(u=>{const d=Tt(u);if(!d)return`<div class="part-list-item">${u}</div>`;let h="スキル";if(d.id&&e){const f=d.id,m=f.substring(0,2),v=f.endsWith("-SP"),p=s.mainClass===s.subClass,g=Object.keys(t.positions).find(y=>t.positions[y].name===s.position),_=Object.keys(n).find(y=>n[y].name===s.mainClass),x=Object.keys(n).find(y=>n[y].name===s.subClass);v&&m===_?h="特化スキル":m===g?h="ポジション":m===_?h=p?"クラス":"メインクラス":m===x&&(h=p?"クラス":"サブクラス")}return`<div class="part-list-item"><span class="type">[${h}]</span> <b>【${u}】</b>《${d.timing}/${d.cost}/${d.range}》：${d.description||d.effect}</div>`}).join("")}
        </div>
        <div class="sheet-section sheet-parts">
            <h4>パーツ</h4>
            <div class="sheet-parts-grid">
                ${["head","arms","torso","legs","body"].map(u=>{if(!s.partsStatus[u]||s.partsStatus[u].length===0)return"";const d={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"体"}[u],h=s.partsStatus[u].map(f=>{const m=f.id.includes("_treasure"),v=m?ih()["TR-00"]:Tt(f.name),p=v?.id?.startsWith("BP-"),g=m?"たからもの":p?"基本":"強化";if(!v)return`<div class="part-list-item"><span class="type">[${g}]</span> <b>${f.name}</b></div>`;const _=m?v.description_raw:v.description_raw||v.effect;return`<div class="part-list-item"><span class="type">[${g}]</span> <b>【${f.name}】</b>《${v.timing}／${v.cost}／${v.range}》：${_}</div>`}).join("");return`<div><h4>〈${d}〉</h4>${h}</div>`}).join("")}
            </div>
        </div>
    </div>
    `;wt({title:"ネクロニカ 人形設計図",bodyHtml:c,onRender:(u,d)=>{u.querySelector(".modal-content").classList.add("sheet-modal-content"),u.querySelector(".modal-body").classList.add("sheet-modal-body");const h=()=>{Si(),d()};u.querySelector("#closeSimpleMenuModalBtn").onclick=h,u.onclick=_=>{_.target===u&&h()};const f=u.querySelector(".sheet-link-btn");f&&(f.onclick=_=>{_.stopPropagation();const x=f.dataset.sheetId;if(x){const y=`https://charasheet.vampire-blood.net/${x}`;window.open(y,"_blank","noopener,noreferrer")}}),u.querySelectorAll(".copy-description-btn").forEach(_=>{_.onclick=x=>{x.stopPropagation();const y=decodeURIComponent(_.dataset.copyText);navigator.clipboard.writeText(y).then(()=>{ft("コピーしました！",1500)}).catch(E=>{console.error("コピーに失敗しました",E),ft("コピーに失敗しました",1500)})}});const m=u.querySelector(".sheet-edit-image-btn");m&&(m.onclick=()=>{ic(s,d)});const v=u.querySelector("#areaSelector");v&&(v.onchange=_=>{const x=_.target.value;Wt(s.id,{area:x}),Gs(),_r(),Si()});const p=u.querySelector(".sheet-reload-btn");p&&(p.onclick=async()=>{const _=p.dataset.sheetId;if(_&&confirm(`キャラクター「${s.name}」のデータを保管所から再読込みします。
パーツの損傷状態などはリセットされますが、よろしいですか？`))try{ft(`ID: ${_} を再読込み中...`,2e3);const x=await yf(_),y=ea(x);if(y){const E=jf(s.id,y);Gs(),_r(),ft(`「${E.name}」を更新しました。`,2e3),d(),ta(E)}else throw new Error("データの変換に失敗しました。")}catch(x){alert(`エラー: ${x.message}`)}});const g=u.querySelector("#displayNameInput");g&&(g.onchange=_=>{const x=_.target.value;x&&(Wt(s.id,{displayName:x}),Jb(s.id),_r(),Si())})}})}function gb(s){const e=document.getElementById("undeadListModal"),t=e.querySelector(".modal-body");t.innerHTML="";const n=document.createElement("div");n.className="import-container";const i=document.createElement("button");i.className="import-btn",i.textContent="保管所から読込み",i.onclick=()=>{e.classList.remove("is-visible"),_b(s,tp)},n.appendChild(i),t.appendChild(n);const r=document.createElement("div");r.className="undead-filter-container",["すべて",...["ドール","レギオン","ホラー","サヴァント"]].forEach(d=>{const h=document.createElement("button");h.className="filter-btn",h.textContent=d,h.dataset.category=d,d==="すべて"&&h.classList.add("active"),r.appendChild(h)}),t.appendChild(r);const l=document.createElement("div");l.className="undead-list-container",t.appendChild(l);const c=Ws(),u=d=>{l.innerHTML="";for(const h in c){if(h.startsWith("//"))continue;const f=c[h];if(d==="すべて"||f.category===d){const m=document.createElement("div");m.className="undead-list-item",m.innerHTML=`<img src="${f.img}" alt="${f.name}"><div class="undead-list-item-name">${f.name}</div>`,m.onclick=()=>{Gf(h,s),Rn(),e.classList.remove("is-visible")},l.appendChild(m)}}};r.querySelectorAll(".filter-btn").forEach(d=>{d.onclick=()=>{r.querySelectorAll(".filter-btn").forEach(h=>h.classList.remove("active")),d.classList.add("active"),u(d.dataset.category)}}),u("すべて"),e.querySelector("#closeModalBtn").onclick=()=>e.classList.remove("is-visible"),e.onclick=d=>{d.target===e&&e.classList.remove("is-visible")},e.classList.add("is-visible")}function vb(s,e,t){const n=Vs.indexOf(s.area);let i=1;if(e&&e.effects){const m=e.effects.find(v=>v.ref==="MOVE_CHARACTER");if(m&&m.params&&m.params.distance){const p=String(m.params.distance).split("-");i=parseInt(p[1]||p[0],10)}}let r=0;const o=[...s.skills.map(m=>Tt(m)),...Object.values(s.partsStatus).flat().filter(m=>!m.damaged).map(m=>Tt(m.name))].filter(m=>m);for(const m of o)if(m.timing==="オート"&&m.effects){for(const v of m.effects)if(v.ref==="APPLY_BUFF"&&v.params?.stat==="moveDistanceBonus"){const p=v.params.condition;if(p&&Array.isArray(p)){const g=e.tags||[];p.some(_=>g.includes(_))&&(r+=v.params.value||0)}else r+=v.params.value||0}}const a=i+r,l={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"},c=[],u=s.type==="enemy"&&s.area==="奈落"&&s.category!=="レギオン"&&s.category!=="ホラー",d={label:">>> 逃走 >>>",isDisabled:!u,onClick:()=>{u&&bn(s,{...e,name:"逃走",isEscapeAttempt:!0})}},h=s.type==="pc"&&s.area==="楽園"&&s.category!=="レギオン"&&s.category!=="ホラー",f={label:"<<< 逃走 <<<",isDisabled:!h,onClick:()=>{h&&bn(s,{...e,name:"逃走",isEscapeAttempt:!0})}};e.effects.some(m=>m.ref==="MOVE_CHARACTER")&&c.push(d),Vs.forEach((m,v)=>{const g=Math.abs(n-v)>a||v===n,x={label:v===n?`${m} (現在地)`:m,isDisabled:g,onClick:()=>{g||bn(s,{...e,targetArea:m})}},y=l[m];y&&(x.class=`area-color-${y}`),c.push(x)}),e.effects.some(m=>m.ref==="MOVE_CHARACTER")&&c.push(f),wt({title:`【${e.name}】移動先を選択`,items:c})}function Hs(){const s=document.getElementById("maneuverMenu");s&&s.classList.remove("is-visible"),ko=null}function Ic(s){const e=Pt(),t=[];(s.skills||[]).forEach(f=>{const m=Tt(f);m&&t.push({data:m,sourceType:"skill",sourceName:f})}),Object.values(s.partsStatus||{}).flat().forEach(f=>{const m=Tt(f.name);m&&t.push({data:m,sourceType:"part",sourceName:f.name,isDamaged:f.damaged})});const n=Tt("待機");n&&t.push({data:n,sourceType:"common"});const i=Tt("任意");i&&t.push({data:i,sourceType:"common"});const r=Object.values(s.partsStatus).flat().some(f=>f.damaged),o=new Set,{phase:a,activeActors:l=[],actionQueue:c=[],rapidQueue:u=[],damageQueue:d=[]}=e;l.some(f=>f.id===s.id)&&(o.add("アクション"),o.add("ラピッド")),l.length===0&&o.add("ラピッド");const h=[...c,...u,...d.filter(f=>f.type==="declaration")];return h.some(f=>!f.checked)&&o.add("ジャッジ"),(a==="DAMAGE_RESOLUTION"||c.every(f=>f.checked)&&d.some(f=>!f.applied))&&o.add("ダメージ"),h.some(f=>!f.checked&&f.performer&&f.performer.id===s.id)&&(o.add("ラピッド"),o.add("ジャッジ")),t.map(f=>{const m=f.data;let v=!0;if(s.actionValue<=0&&m.timing!=="オート"&&(v=!1),f.isDamaged&&(v=!1),s.usedManeuvers.has(m.name)&&m.usageLimit!==!1&&(v=!1),m.timing!=="オート"&&!o.has(m.timing)&&(v=!1),v&&m.effects?.some(p=>p.params?.condition==="is_damaged")&&!r&&(v=!1),v&&m.timing==="ジャッジ"&&xf(s,m).length===0&&(v=!1),v&&m.timing==="ダメージ"){let p=!1;m.tags?.includes("防御")&&(m.range==="自身"?e.damageQueue.some(y=>y.type==="instance"&&!y.applied&&y.target.id===s.id)&&(p=!0):e.damageQueue.some(y=>y.type==="instance"&&!y.applied&&y.target.type===s.type&&oi(s,m,[y.target]).hasTarget)&&(p=!0));const _=m.tags.includes("強化");!p&&_&&m.range==="自身"&&e.damageQueue.some(y=>y.type==="instance"&&!y.applied&&y.sourceAction?.performer?.id===s.id)&&(p=!0);const x=m.effects?.some(y=>y.ref==="TAKE_DAMAGE_FOR_ALLY");if(!p&&x){const y=Bt().filter(T=>T.type===s.type&&T.id!==s.id),{targets:E}=oi(s,m,y);if(E.length>0){const T=new Set(E.map(I=>I.id));e.damageQueue.some(I=>I.type==="instance"&&!I.applied&&T.has(I.target.id))&&(p=!0)}}p||(v=!1)}if(v&&m.tags&&m.tags.includes("移動妨害")){let p=!1;const g=[...e.actionQueue,...e.rapidQueue];for(const _ of g)if(!_.checked&&_.performer.type!==s.type&&_.sourceManeuver.tags.includes("移動")&&oi(s,m,[_.performer]).hasTarget){p=!0;break}p||(v=!1)}return v&&m.timing!=="オート"&&m.timing!=="ジャッジ"&&(oi(s,m).hasTarget||(v=!1)),m.timing==="オート"&&(v=!1),{...f,isUsable:v}})}function _f(s,e){if(!e?.id&&s.allowedLocations)return s.allowedLocations;if(e?.partsStatus){const t={head:"頭",arms:"腕",torso:"胴",legs:"脚"};for(const n in e.partsStatus)if(e.partsStatus[n].some(i=>i.name===s.name))return t[n]||""}return""}function _b(s,e){wt({title:"保管所からキャラクターを読込み",bodyHtml:`
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
    `,onRender:(n,i)=>{const r=n.querySelector("#import-by-list-content"),o=n.querySelector("#import-by-id-content"),a=n.querySelector(".sheet-list-container"),l=n.querySelector(".loader"),c=n.querySelector("#sheetIdInput"),u=n.querySelector("#importSheetBtn"),d=async f=>{try{i(),ft(`ID: ${f} を読込み中...`,2e3);const m=await yf(f),v=ea(m);if(v)v.sheetId=f,e.addCharacterFromObject(v,s),Gs(),Lc(),ft(`「${v.name}」を読み込みました。`,2e3);else throw new Error("データの変換に失敗しました。")}catch(m){alert(`エラー: ${m.message}`)}},h=f=>{l.style.display="block",a.innerHTML="",l.textContent=`${f==="id"?"ID":"新着"}リストを読み込み中...`,yb(f).then(m=>{l.style.display="none";const v=`
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
                        </table>`;a.innerHTML=v,n.querySelectorAll(".sheet-list-table tbody tr").forEach(p=>{p.onclick=()=>d(p.dataset.id)})}).catch(m=>{l.textContent=`リストの読み込みに失敗しました: ${m.message}`})};n.querySelectorAll('input[name="import-method"]').forEach(f=>{f.onchange=m=>{const v=m.target.value;v==="new"?(r.style.display="block",o.style.display="none",h("%21")):v==="idlist"?(r.style.display="block",o.style.display="none",h("id")):(r.style.display="none",o.style.display="block",c.focus())}}),u.onclick=()=>{const f=c.value.trim().match(/(\d+)/)?.[1];f&&d(f)},c.onkeydown=f=>{if(f.key==="Enter"){const m=c.value.trim().match(/(\d+)/)?.[1];m&&d(m)}},h("%21")}})}async function yb(s="%21"){const t=[],n=document.querySelector("#import-by-list-content .loader"),i=r=>new Promise((o,a)=>{const l=`jsonpCallback_list_${Date.now()}_${r}`;window[l]=u=>{document.head.removeChild(c),delete window[l],o(u)};const c=document.createElement("script");c.onerror=()=>{delete window[l],document.head.removeChild(c),a(new Error(`Page ${r}の読込みに失敗`))},c.src=`https://charasheet.vampire-blood.net/list_nechro.js?order=${s}&page=${r}&callback=${l}`,c.charset="UTF-8",document.head.appendChild(c)});for(let r=0;r<6;r++)try{n&&(n.textContent=`リストを読み込み中... (${r+1} / 6ページ)`);const o=await i(r);t.push(...o),await new Promise(a=>setTimeout(a,200))}catch(o){throw console.error(`ページ ${r} の取得に失敗しました。処理を中断します。`,o),new Error(`ページ ${r} の取得中にエラーが発生しました。`)}return t}function yf(s){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=r=>{document.head.removeChild(i),delete window[n],e(r)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${s}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}function ic(s,e){const t=()=>{const v=localStorage.getItem("userLocalImages");return v?JSON.parse(v):[]},n=v=>{const p=t();p.includes(v)||(p.push(v),localStorage.setItem("userLocalImages",JSON.stringify(p)))},i=async(v,p,g)=>{const _=v.target.files[0];if(_&&_.type.startsWith("image/"))try{const x=await r(_,300);n(x),g(),ic(s,e)}catch(x){console.error("画像のリサイズに失敗しました:",x),alert("画像の処理に失敗しました。別の画像で試してください。")}v.target.value=""};function r(v,p){return new Promise((g,_)=>{const x=new FileReader;x.readAsDataURL(v),x.onload=y=>{const E=new Image;E.src=y.target.result,E.onload=()=>{let T=E.width,C=E.height;if(T<=p&&C<=p){g(E.src);return}T>C?T>p&&(C*=p/T,T=p):C>p&&(T*=p/C,C=p);const I=document.createElement("canvas");I.width=T,I.height=C,I.getContext("2d").drawImage(E,0,0,T,C);let S;v.type==="image/png"||v.type==="image/gif"?S=I.toDataURL("image/png"):S=I.toDataURL("image/jpeg",.8),g(S)},E.onerror=T=>_(T)},x.onerror=y=>_(y)})}const o=["/images/doll/doll_01.png","/images/doll/doll_02.png","/images/doll/doll_03.png","/images/doll/doll_04.png","/images/doll/doll_05.png","/images/doll/doll_06.png","/images/doll/doll_12.png","/images/doll/doll_13.png","/images/doll/doll_14.png","/images/doll/doll_15.png","/images/doll/doll_16.png","/images/doll/doll_17.png"],a=rp(),l=t(),c=[...new Set([...o,...a])],d=[...l,...c].map(v=>`<div class="image-select-item" data-path="${v}"><img src="${v}" alt="image" loading="lazy"></div>`).join(""),m=`
        <div class="local-image-upload-container">
            <div class="button-group">
                <button id="localImageUploader" class="local-image-upload-btn">ローカルから読込み</button>
                <button id="clearImageCacheBtn" class="local-image-clear-btn">画像キャッシュ消去</button>
            </div>
            <input type="file" id="localImageInput" accept="image/*" style="display: none;">
            <p class="image-upload-note">画像は、300×300px にリサイズされてキャッシュします。</p>
            <p class="image-upload-note">画像キャッシュ使用量: ${(db()/1024).toFixed(1)} KB / 5.0 MB</p>
        </div>
        <div class="image-select-grid">${d}</div>
    `;wt({title:"画像を選択",bodyHtml:m,onRender:(v,p)=>{const g=v.querySelector("#localImageUploader"),_=v.querySelector("#localImageInput");g.onclick=()=>_.click(),_.onchange=y=>i(y,v,p);const x=v.querySelector("#clearImageCacheBtn");x&&(x.onclick=()=>{confirm("ローカルに保存した画像をすべて消去します。よろしいですか？")&&(hb(),ft("画像キャッシュを消去しました。",2e3),p(),ic(s,e))}),v.querySelectorAll(".image-select-item").forEach(y=>{y.onclick=()=>{const E=y.dataset.path;Wt(s.id,{img:E}),Gs(),p(),e();const T=pt(s.id);T&&ta(T)}})}})}function xf(s,e){const t=Pt(),n=[...t.actionQueue,...t.rapidQueue];if(e.range==="自身")return n.filter(i=>{if(i.checked||!i.sourceManeuver.tags?.includes("攻撃")||i.performer.id!==s.id)return!1;const o=e.tags?.includes("支援"),a=e.tags?.includes("妨害"),l=!0;return o&&l||a&&!l});{const i=Vs.indexOf(s.area),{minRange:r,maxRange:o}=vf(s,e);return isNaN(r)?[]:n.filter(a=>{if(a.checked||!a.sourceManeuver.tags?.includes("攻撃"))return!1;const l=a.performer,c=Vs.indexOf(l.area);if(c===-1)return!1;const u=Math.abs(i-c);if(u<r||u>o)return!1;const d=e.tags?.includes("支援"),h=e.tags?.includes("妨害"),f=s.type===l.type;return d&&f||h&&!f})}}function oi(s,e,t=null){const n=e.range;if(!n||["自身","効果参照","なし","すべて"].includes(n)||e.timing==="オート")return{hasTarget:!0,targets:[]};const{minRange:i,maxRange:r}=vf(s,e);if(isNaN(i))return{hasTarget:!0,targets:[]};const o=t||Bt().filter(c=>!c.isDestroyed&&!c.hasWithdrawn),a=Vs.indexOf(s.area),l=[];for(const c of o){if(i===0&&r===0&&c.id===s.id)continue;const u=e.tags&&e.tags.includes("攻撃"),d=e.category==="支援"||e.tags&&e.tags.includes("支援");if(s.type===c.type&&u&&!d)continue;const h=Vs.indexOf(c.area);if(h===-1)continue;const f=Math.abs(a-h);f>=i&&f<=r&&l.push(c)}return{hasTarget:l.length>0,targets:l}}function xb(s,e,t){const a=(s.type==="pc"?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(l=>({label:l+(s.area===l?" (現在地)":""),isDisabled:s.area===l,onClick:()=>{Wt(s.id,{area:l}),Rn()}}));wt({title:`${s.name} の配置先を選択`,items:a})}async function Hd(s,e,t){return zo(),new Promise(n=>{const i=a=>{document.querySelectorAll(".target-selectable").forEach(l=>{l.classList.remove("target-selectable"),l.onclick=null}),document.removeEventListener("click",t),Xi=null,n(a)};Xi=i;const{targets:r}=oi(s,e);if(r.length===0){Le("> 射程内に有効なターゲットがいません"),zo();return}r.length>0&&Kb(r);const o=new Set(r.map(a=>a.id));document.querySelectorAll(".char, .marker").forEach(a=>{o.has(a.dataset.id)&&(a.classList.add("target-selectable"),a.onclick=l=>{l.stopPropagation(),i(pt(a.dataset.id))})}),setTimeout(()=>document.addEventListener("click",t),0)})}function Mb(s,e,t,n,i){const r=Pt(),o=r.actionQueue[n];if(!o)return;let a=0;const l=[],c=[],u=[],d=t.effects?.find(p=>p.ref==="GENERIC_ATTACK");if(d&&d.params&&d.params.attack_bonus){const p=parseInt(d.params.attack_bonus,10);isNaN(p)||(a+=p,l.push(`<div>【${t.name}】自身の効果 (${p>0?"+":""}${p})</div>`))}Ic(s).filter(p=>p.data.timing==="オート"&&!p.isDamaged).forEach(p=>{p.data.effects&&p.data.effects.forEach(g=>{if(g.ref==="APPLY_BUFF"&&g.params.stat==="attackCheckBonus"){const _=g.params.value||0;a+=_,c.push(`<div>${s.name}の【${p.data.name}】(${_>0?"+":""}${_})</div>`)}})}),s.activeBuffs&&s.activeBuffs.length>0&&s.activeBuffs.forEach(p=>{if(p.stat==="attackCheckBonus"){const g=p.value||0;a+=g,c.push(`<div>${s.name}の【${p.source}】 (+${g})</div>`)}}),r.judgeQueue.forEach(p=>{const g=p.sourceManeuver,_=g.effects.find(x=>x.ref==="GENERIC_JUDGE_MOD"||x.ref==="CHOICE_JUDGE_MOD");if(_){let x=!1,y=0,E="";if(_.ref==="GENERIC_JUDGE_MOD")y=_.params.value||0,y>0&&(E="support"),y<0&&(E="hindrance");else if(_.ref==="CHOICE_JUDGE_MOD")if(p.performer.type===s.type){E="support";const C=_.params.options.find(I=>I.type==="支援");C&&(y=C.value)}else{E="hindrance";const C=_.params.options.find(I=>I.type==="妨害");C&&(y=C.value)}if((p.judgeTarget&&p.judgeTarget.id===o.id||E==="support"&&(_.params.target==="self_roll"||_.params.target==="any_roll")&&p.performer.id===s.id)&&(x=!0),x){const T=`${p.performer.name}の【${g.name}】`;E==="support"?(a+=Math.abs(y),c.push(`${T} (+${Math.abs(y)})`)):E==="hindrance"&&(a-=Math.abs(y),u.push(`${T} (-${Math.abs(y)})`))}}});const f=a>0?`+${a}`:a<0?`${a}`:"",m=`
        <div class="attack-confirm-summary">
            ${s.name}【${t.name}】→ ${e.name}
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《固有修正》</div>
            <div class="modifier-list">${l.length>0?l.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《支援》</div>
            <div class="modifier-list">${c.length>0?c.map(p=>`<div class="modifier-item">${p}</div>`).join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《妨害》</div>
            <div class="modifier-list">${u.length>0?u.map(p=>`<div class="modifier-item">${p}</div>`).join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `,v=`<button id="executeDiceRollBtn" class="welcome-modal-close-btn">🎲 NA${f} 🎲</button>`;wt({title:"攻撃判定",bodyHtml:m,footerHtml:v,onRender:(p,g)=>{p.querySelector("#executeDiceRollBtn").onclick=()=>{Le(`> 解決: ${s.name} の【${t.name}】`),i&&i(a),g()}}})}const Sb="2.2.9",qi=[{id:"maneuver",label:"マニューバ"},{id:"regret",label:"未練"},{id:"treasure",label:"たからもの"},{id:"memory",label:"記憶のカケラ"},{id:"hint",label:"暗示"}];let li=0,ni={},Vo=0,Ho=0,en=null,Mf=0,sc=!1,Go=!1;function Eb(){li=0;const s=document.getElementById("maneuverMenu");s.innerHTML="",s.classList.add("is-reference-mode");const e=bb(),t=wb(),n=document.createElement("div");n.className="reference-content-area",en=document.createElement("div"),en.className="reference-swipe-wrapper",qi.forEach(i=>{const r=document.createElement("div");r.className="reference-content-page",r.dataset.tabId=i.id,en.appendChild(r)}),n.appendChild(en),s.appendChild(e),s.appendChild(t),s.appendChild(n),Ef(qi[li].id,en.children[li]),s.classList.add("is-visible"),n.addEventListener("touchstart",Cb,{passive:!0}),n.addEventListener("touchmove",Rb,{passive:!1}),n.addEventListener("touchend",Pb)}function bb(){const s=document.createElement("div");return s.className="maneuver-menu-header",s.innerHTML=`
        <span class="header-icon">📖</span>
        <span class="header-title">リファレンス</span>
        <button class="header-close-btn">&times;</button>
    `,s.querySelector(".header-close-btn").onclick=()=>{Hs()},s}function wb(){const s=document.createElement("div");return s.className="reference-tab-bar",qi.forEach((e,t)=>{const n=document.createElement("button");n.className="reference-tab-button",n.dataset.tabId=e.id,n.textContent=e.label,t===li&&n.classList.add("is-active"),n.onclick=()=>{Sf(t)},s.appendChild(n)}),s}function Sf(s){if(s<0||s>=qi.length)return;li=s;const e=document.querySelector(".reference-tab-bar");if(e){e.querySelectorAll(".reference-tab-button").forEach((n,i)=>{n.classList.toggle("is-active",i===s)});const t=e.querySelector(".is-active");t&&t.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}if(en){const t=en.children[s];t&&t.innerHTML===""&&Ef(qi[s].id,t);const n=-s*(100/qi.length);en.style.transform=`translateX(${n}%)`}}function Ef(s,e){s==="maneuver"?Tb(e):Ab({regret:"regret",treasure:"treasure",memory:"memory",hint:"hint"}[s],e)}function Tb(s){const e=document.createElement("div");e.className="reference-maneuver-tab-container",s.appendChild(e);const t=document.createElement("div");t.className="accordion-container";const n=document.createElement("div");n.className="accordion-header",n.innerHTML='<span class="accordion-title-static">フィルタ</span><span class="accordion-title-dynamic"></span>',n.onclick=()=>t.classList.toggle("is-closed");const i=document.createElement("div");i.className="reference-filter-container accordion-content",t.appendChild(n),t.appendChild(i);const r=document.createElement("div");r.className="maneuver-menu-list-container",e.appendChild(t),e.appendChild(r);const o=()=>{const a=ih();let l=Object.keys(a).map(d=>({data:{id:d,...a[d]},isUsable:!0})).filter(d=>d.data&&d.data.name),c=Lb(l,ni);const u=n.querySelector(".accordion-title-dynamic");if(u){let d=`（${c.length}件）`;Object.keys(ni).forEach(h=>{const f=ni[h];f.length>0&&(d+=`<span class="filter-summary-group"><span class="filter-summary-label">${h}</span>${f.join(" ")}</span>`)}),u.innerHTML=d}r.innerHTML="",c.length===0?r.innerHTML='<div class="maneuver-item is-empty">条件に一致するマニューバはありません</div>':bf(c).forEach(d=>{const h=nc(d,{});r.appendChild(h)})};Ib(i,o),o()}function Ab(s,e){const t=document.createElement("div");if(t.className="maneuver-menu-list-container",s==="regret"){const n=xr(),i={SI:{title:"姉妹への未練",items:[]},EN:{title:"敵への未練",items:[]},NP:{title:"中立者への未練",items:[]}};for(const r in n){if(r.startsWith("//"))continue;const o=r.substring(0,2);i[o]&&i[o].items.push({id:r,...n[r]})}for(const r in i){const o=i[r];if(o.items.length>0){const a=document.createElement("div");a.className="group-header",a.textContent=o.title,e.appendChild(a),o.items.forEach(l=>{const c=Gd(l,s);e.appendChild(c)})}}}else{let n=[];switch(s){case"regret":const i=xr();n=Object.keys(i).map(l=>({id:l,...i[l]}));break;case"treasure":const r=sh();n=Object.keys(r).map(l=>({id:l,...r[l]}));break;case"memory":const o=Xo();n=Object.keys(o).map(l=>({id:l,...o[l]}));break;case"hint":const a=ac();n=Object.keys(a).map(l=>({id:l,...a[l]}));break}n.forEach(i=>{const r=Gd(i,s);t.appendChild(r)})}e.appendChild(t)}function Gd(s,e){const t=document.createElement("div");if(t.className="maneuver-item-new is-reference-item",e==="regret"){const n=s.id.split("-")[1],i=`【${s.name}】`,r=s.description,o=s.madnessName,a=s.madnessQuote,l=s.madnessEffect,c=`${n} ${i}
${r}
発狂：${o}
「${a}」
${l}`.trim();t.innerHTML=`
            <div class="item-right-col" style="width: 100%;">
                <div class="ref-container">
                    <div class="ref-maneuver-name">${n}${i}</div>
                    <div class="ref-regret-madness">発狂<span class="malice-level">${o}</span></div>
                </div>
                <div class="item-row-2">${r}</div>
                <div class="item-row-3 ref-regret-flavor">「${a}」</div>
                <div class="item-row-2 has-copy-button">
                    <span>${l}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(c)}">📋</button>
                </div>
            </div>
        `}else{let n="",i="",r="";n=String(s.id).padStart(2,"0"),i=`【${s.name}】`,r=s.description;const o=`${n}${i}
${r}`.trim();t.innerHTML=`
            <div class="item-right-col" style="width: 100%;">
                <div class="item-row-1 has-copy-button">
                    <span class="item-name">${n}${i}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(o)}">📋</button>
                </div>
                <div class="item-row-2">
                    <span>${r}</span>
                </div>
            </div>
        `}return t.querySelector(".copy-description-btn").onclick=n=>{n.stopPropagation(),navigator.clipboard.writeText(decodeURIComponent(n.currentTarget.dataset.copyText)).then(()=>{ft("コピーしました！",1500)})},t}function Cb(s){s.touches.length===1&&(Vo=s.touches[0].clientX,Mf=s.touches[0].clientY,Ho=Vo,sc=!1,Go=!1,en&&en.classList.add("is-swiping"))}function Rb(s){if(s.touches.length!==1)return;Ho=s.touches[0].clientX;const e=Ho-Vo,t=s.touches[0].clientY-Mf;if(sc||(Math.abs(e)>10||Math.abs(t)>10)&&(Math.abs(e)>Math.abs(t)&&(Go=!0),sc=!0),Go){s.preventDefault();const n=en.parentElement.clientWidth,r=-li*n+e;en.style.transform=`translateX(${r}px)`}}function Pb(s){if(en&&en.classList.remove("is-swiping"),!Go)return;const e=Ho-Vo,t=30;let n=li;Math.abs(e)>t&&(e<0?li<qi.length-1&&n++:li>0&&n--),Sf(n)}const tl={カテゴリ:["移動","配置","攻撃","防御","支援","妨害","強化","修復","補助","コスト","行動値","生贄","対話","狂気点","脆弱"],区分1:["ポジション","クラススキル","特化スキル","基本パーツ","強化パーツ","手駒専用"],区分2:["アリス","ホリック","オートマトン","ジャンク","コート","ソロリティ","ステーシー","タナトス","ゴシック","レクイエム","バロック","ロマネスク","サイケデリック","武装","変異","改造"],攻撃:["肉弾攻撃","白兵攻撃","射撃攻撃","砲撃攻撃","精神攻撃"],効果:["命中補正","支援","妨害","防御","移動","移動妨害","転倒","切断","爆発","全体攻撃","連撃"],悪意:["0.5","1","1.5","2","3","4","その他"],箇所:["頭","腕","胴","脚","任意"],タイミング:["オート","アクション","ジャッジ","ダメージ","ラピッド"],コスト:["なし","0","1","2","3","4","その他"],最大射程:["なし","自身","0","1","2","3","その他"],ルールブック:["基本ルール","ESP"]};function Ib(s,e){Object.keys(ni).length===0&&Object.keys(tl).forEach(t=>{ni[t]=[]});for(const t in tl){const n=document.createElement("div");n.className="filter-group",n.innerHTML=`<h4 class="filter-group-title">${t}</h4>`;const i=document.createElement("div");i.className="filter-buttons",tl[t].forEach(r=>{const o=document.createElement("button");o.className="filter-btn",o.textContent=r,ni[t]?.includes(r)&&o.classList.add("is-active"),o.onclick=()=>{o.classList.toggle("is-active");const a=ni[t].indexOf(r);a>-1?ni[t].splice(a,1):ni[t].push(r),e()},i.appendChild(o)}),n.appendChild(i),s.appendChild(n)}}function Lb(s,e){const t=Nr(),n=t.positions,i=t.classes;return s.filter(r=>{const o=r.data;for(const a in e){const l=e[a];if(l.length===0)continue;if(!l.some(u=>Db(o,a,u,{positions:n,classes:i})))return!1}return!0})}function Db(s,e,t,n){const i=s.id||"",r=i.substring(0,2),o=i.substring(0,1),a=c=>{const u=i.substring(1,2);return o===c&&["1","2","3"].includes(u)},l=()=>{const c=i.substring(1,2);return o==="P"&&!isNaN(parseInt(c,10))};switch(e){case"カテゴリ":return s.category===t||s.tags&&s.tags.includes(t);case"区分1":switch(t){case"ポジション":return!!n.positions[r];case"クラススキル":return!!n.classes[r]&&!i.endsWith("-SP");case"特化スキル":return!!n.classes[r]&&i.endsWith("-SP");case"基本パーツ":return r==="BP";case"強化パーツ":return a("A")||a("M")||a("R");case"手駒専用":return r==="PS"||l();default:return!1}case"区分2":{const c=Object.keys(n.positions).find(d=>n.positions[d].name===t);if(c&&r===c)return!0;const u=Object.keys(n.classes).find(d=>n.classes[d].name===t);return u&&r===u?!0:t==="武装"?a("A"):t==="変異"?a("M"):t==="改造"?a("R"):!1}case"攻撃":return s.category===t||s.tags&&s.tags.includes(t);case"効果":return s.category===t||s.tags&&s.tags.includes(t);case"箇所":return s.allowedLocations===t;case"タイミング":return s.timing===t;case"コスト":{const c=String(s.cost);return t==="その他"?!["なし","0","1","2","3","4"].includes(c):c===t}case"最大射程":{const c=String(s.range||"なし");if(t==="なし")return c==="なし";if(t==="自身")return c==="自身";const u=parseInt(c.split("～").pop(),10);return t==="その他"?!["なし","自身"].includes(c)&&(isNaN(u)||u>3):!isNaN(u)&&u===parseInt(t,10)}case"悪意":{const c=s.maliceLevel;return c==null?!1:t==="その他"?![.5,1,1.5,2,3,4].includes(c):String(c)===t}case"ルールブック":{const c=s.source?.book||"";return t==="基本ルール"?c==="基本ルールブック":t==="ESP"?c==="ESP":!1}default:return!1}}function Wd(s){const e=s.id||"",t=e.substring(0,2),n=e.substring(0,1),r=["AL","HL","AM","JK","CT","SR"].indexOf(t);if(r!==-1)return 1e3+r;const a=["ST","TN","GT","RQ","BR","RM","SY"].indexOf(t);if(a!==-1)return 2e3+a*10+(e.endsWith("-SP")?0:1);if(t==="BP")return 3e3+({頭:0,腕:1,胴:2,脚:3}[s.allowedLocations]??4);const l=parseInt(e.substring(1,2),10);if(!isNaN(l)){if(n==="A")return 4e3+l;if(n==="M")return 5e3+l;if(n==="R")return 6e3+l}if(t==="PS")return 7e3;if(n==="P"){const c=parseInt(e.substring(1,2),10);if(!isNaN(c))return 8e3+c}return t==="TR"?9e3:t==="CA"?9100:9999}function bf(s){const e=Nr().maneuverCategories.map(t=>t.name);return s.sort((t,n)=>{const i=t.data,r=n.data,o=i.category==="行動値増加"?"行動値":i.category,a=r.category==="行動値増加"?"行動値":r.category,l=e.indexOf(o),c=e.indexOf(a);if(l!==c)return(l===-1?99:l)-(c===-1?99:c);const u=Wd(i),d=Wd(r);return u!==d?u-d:(i.id||"").localeCompare(r.id||"")}),s}const Nb="2.11.26";let bs=!1,fn=null;function Fb(){console.log("Interaction Manager initialized.")}function Ub(){document.addEventListener("click",o=>{fn&&!fn.contains(o.target)&&(fn.classList.remove("actions-visible"),fn=null)}),na(),Bb(),$d(document.getElementById("pcContainer")),$d(document.getElementById("enemyContainer")),Ob();const s=document.getElementById("startBattleBtn");s&&(s.onclick=()=>{s.disabled||hw()}),document.getElementById("countdownBtn").onclick=()=>{pw()},document.getElementById("endTurnBtn").onclick=()=>{Cf(),Zb()};const e=document.getElementById("showReferenceBtn");e&&(e.onclick=()=>{Eb()});const t=document.getElementById("resetBattleBtn");t&&(t.onclick=async()=>{confirm("バトルパートを終了して、戦闘開始直前の状態に戻します。よろしいですか？")&&(ft("盤面を初期状態に戻しています...",2e3),await Ow(),Dc(),Rn(),ft("初期状態に戻りました。",2e3))});const n=document.getElementById("saveStateToFileBtn");n&&(n.onclick=Fw);const i=document.getElementById("saveStateBtn");i&&(i.onclick=()=>{Nc(!0)});const r=document.getElementById("clearStateBtn");r&&(r.onclick=()=>{confirm("ブラウザに保存されたセッションデータを削除します。この操作は取り消せません。よろしいですか？")&&Uf()})}function na(){document.querySelectorAll(".char").forEach(s=>{const e=s.dataset.id;if(!e)return;const t=pt(e);if(t){if(Pt().isStarted)s.onclick=n=>{if(n.stopPropagation(),bs){bs=!1;return}Vd(t,s)};else{s.onclick=u=>{if(u.stopPropagation(),bs){bs=!1;return}fn===s?(s.classList.remove("actions-visible"),fn=null):(fn&&fn.classList.remove("actions-visible"),s.classList.add("actions-visible"),fn=s)};const n=s.querySelector('[data-action="delete"]');n&&(n.onclick=u=>{u.stopPropagation(),Wf(e),Rn(),fn=null});const i=s.querySelector('[data-action="details"]');i&&(i.onclick=u=>{u.stopPropagation(),ta(t)});const r=s.querySelector('[data-action="place"]');r&&(r.onclick=u=>{u.stopPropagation(),xb(t)});const o=s.querySelector('[data-action="move-left"]'),a=s.querySelector('[data-action="move-right"]');o&&(o.onclick=u=>{u.stopPropagation(),oc(e,"left"),Rn(),fn=null}),a&&(a.onclick=u=>{u.stopPropagation(),oc(e,"right"),Rn(),fn=null});const l=Bt().filter(u=>u.type===t.type),c=l.findIndex(u=>u.id===e);o&&(o.disabled=c===0),a&&(a.disabled=c===l.length-1)}s.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.add("hover-highlight")},s.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.remove("hover-highlight")}}}),document.querySelectorAll(".marker").forEach(s=>{const e=s.dataset.id;if(!e)return;const t=pt(e);t&&(Pt().isStarted&&(s.onclick=n=>{n.stopPropagation(),Vd(t,s)}),s.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),s.classList.add("hover-highlight")},s.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),s.classList.remove("hover-highlight")})}),document.querySelectorAll(".add-char-card").forEach(s=>{const e=s.closest(".char-container");if(e){const t=e.id==="pcContainer"?"pc":"enemy";s.onclick=null,s.onclick=()=>{gb(t)}}})}function $d(s){let e=!1,t,n,i;s.addEventListener("mousedown",o=>{e=!0,bs=!1,t=o.pageX-s.offsetLeft,n=s.scrollLeft,i=0});const r=()=>{e=!1,Math.abs(i)>5&&(bs=!0)};s.addEventListener("mouseleave",r),s.addEventListener("mouseup",r),s.addEventListener("mousemove",o=>{if(!e)return;o.preventDefault(),i=o.pageX-s.offsetLeft-t,s.scrollLeft=n-i})}function Bb(){const s=document.getElementById("diceRoller");let e=!1,t,n,i,r;s.addEventListener("mousedown",l=>{i=l.clientX,r=l.clientY,e=!0,t=l.clientX-s.getBoundingClientRect().left,n=l.clientY-s.getBoundingClientRect().top,s.style.cursor="grabbing",document.addEventListener("mousemove",o),document.addEventListener("mouseup",a),l.preventDefault()});function o(l){e&&(s.style.left=`${l.clientX-t}px`,s.style.top=`${l.clientY-n}px`)}function a(){e=!1,s.style.cursor="grab",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a)}s.addEventListener("click",l=>{Math.abs(l.clientX-i)>3||Math.abs(l.clientY-r)>3||ib()})}function Ob(){document.querySelectorAll(".accordion-header").forEach(s=>{s.closest("#maneuverMenu")||s.addEventListener("click",()=>{const e=s.closest(".accordion-container");e&&e.classList.toggle("is-closed")})})}function kb(s){const e=document.getElementById("madnessModal"),t=document.getElementById("confirmMadnessBtn"),n=new Map;document.querySelectorAll(".pc-regret-group").forEach(i=>{i.querySelectorAll(".regret-item").forEach(r=>{r.onclick=()=>{i.querySelectorAll(".regret-item").forEach(o=>o.classList.remove("is-selected")),r.classList.add("is-selected"),n.set(i.dataset.pcId,r.dataset.regretId),t.disabled=n.size!==s.length}})}),t.disabled=!0,t.onclick=()=>{n.forEach((i,r)=>$f(r,i)),e.classList.remove("is-visible"),Rf()}}function zb(s){mw(s)}function Vb(s){const t=Pt().actionQueue[s];if(!t)return;const{performer:n,target:i,sourceManeuver:r}=t;r.tags.includes("攻撃")?Mb(n,i,r,s,o=>{ln({command:`NA${o>0?`+${o}`:o}`,showToast:!0,performer:n,callback:(a,l,c,u)=>{jd(s,{result:a,hitLocation:l,resultText:c,rollValue:u})}})}):jd(s)}function Hb(s){gw(s)}function wf(s){const{damageQueue:e}=Pt(),t=e[s];if(t){if(t.type==="instance"){if(t.applied)return;const n=pt(t.target.id);if(!n)return;$b(t,i=>{const r=()=>{vw(s)};if(i<=0){Le(`＞ ${n.name}への攻撃は完全に防がれ、ダメージはありませんでした。`),qd(n.id),r();return}n.category==="レギオン"||Object.values(n.partsStatus).flat().filter(o=>!o.damaged).length<=i?(n.category==="レギオン"?(Le(`レギオンへのダメージ！ ${i}体が失われます。`),Oc(n.id,null,i)&&ft(`${n.name}は完全破壊されました`)):(Le(`＞ ${n.name}は残りパーツ数以上のダメージを受け、完全に破壊されました！`),Wt(n.id,{isDestroyed:!0}),ft(`${n.name}は完全破壊されました`)),qd(n.id),r()):Gb(n,i,t.location,r)})}else if(t.type==="declaration"){if(t.checked)return;const n=t,i=n.sourceManeuver;if(i.effects?.some(l=>l.ref==="TAKE_DAMAGE_FOR_ALLY")){const l=e.find(c=>c.type==="instance"&&!c.applied&&c.target.id===n.target.id);l?(xw(l.id,n.performer),n.checked=!0,tn()):(ft("庇う対象のダメージが見つかりません。",2e3),n.checked=!0,tn());return}if(i.effects?.some(l=>l.ref==="GENERIC_DEFENSE")){n.checked=!0,Wo(n.performer.id,{source:i.name,stat:"defense",value:i.effects.find(l=>l.ref==="GENERIC_DEFENSE").params.value||0,duration:"until_damage_applied"}),Le(`> ${n.performer.name}の【${i.name}】の効果が適用されます。`),tn();return}if(i.effects?.some(l=>l.ref==="INCREASE_DAMAGE_DEALT")){n.checked=!0,Wo(n.performer.id,{source:i.name,stat:"damageBonus",value:i.effects.find(l=>l.ref==="INCREASE_DAMAGE_DEALT").params.value||0,duration:"until_damage_applied"}),Le(`> ${n.performer.name}の【${i.name}】の効果が適用されます。`),tn();return}}}}function Gb(s,e,t,n){const i=document.getElementById("damageModal"),r=i.querySelector("#damageModalTitle"),o=i.querySelector("#damageModalInfo"),a=i.querySelector("#partsGridContainer"),l=i.querySelector("#confirmDamageBtn");r.textContent=`${s.name} へのパーツ損傷処理`,a.innerHTML="";let c=[];const u=()=>{o.textContent=`損傷させるパーツを ${e} 個選択してください (残り: ${e-c.length})`,l.disabled=c.length!==e};u();const d=s.category==="ホラー",h={頭:"head",腕:"arms",胴:"torso",脚:"legs",体:"body"},f=h[t]||null;if((d?["body"]:["head","arms","torso","legs","body"]).forEach(v=>{const p=s.partsStatus[v];if(p&&p.length>0){const g=document.createElement("div");g.className="part-location-group",g.dataset.location=v,g.innerHTML=`<h4>${Object.keys(h).find(x=>h[x]===v)||"他"}</h4>`;const _=document.createElement("div");_.className="parts-wrapper",p.forEach(x=>{const y=document.createElement("div");y.className="part-item",y.textContent=x.name,y.dataset.partId=x.id,x.damaged?y.classList.add("is-damaged"):y.onclick=()=>{const E=x.id,T=c.indexOf(E);T>-1?(y.classList.remove("is-selected"),c.splice(T,1)):c.length<e&&(y.classList.add("is-selected"),c.push(E)),u()},_.appendChild(y)}),g.appendChild(_),a.appendChild(g)}}),f&&a.querySelector(`.part-location-group[data-location="${f}"]`)?.classList.add("is-highlighted"),f&&s.partsStatus[f]){const v=s.partsStatus[f].filter(p=>!p.damaged);v.length>0&&v.length<=e&&v.forEach(p=>{const g=a.querySelector(`.part-item[data-part-id="${p.id}"]`);g&&!g.classList.contains("is-selected")&&(g.classList.add("is-selected"),c.push(p.id))})}u(),l.onclick=()=>{c.forEach(v=>Oc(s.id,v)),i.classList.remove("is-visible"),n&&n()},document.getElementById("closeDamageModalBtn").onclick=()=>{i.classList.remove("is-visible")},i.classList.add("is-visible")}function Wb(s){const e=Pt(),t=e.actionQueue.length>0&&e.actionQueue.every(r=>r.checked);if(!(e.phase==="DAMAGE_RESOLUTION"||t&&e.damageQueue.some(r=>!r.applied)))return;const i=e.damageQueue.find(r=>r.target.id===s&&!r.applied);if(i){const r=e.damageQueue.indexOf(i);wf(r)}else console.warn(`Damage marker clicked for ${s}, but no applicable damage found in the queue.`)}function $b(s,e){const{sourceAction:t,target:n}=s,{performer:i,sourceManeuver:r}=t,{finalAmount:o,baseAmount:a,totalBonus:l,totalDefense:c}=Pc(s),u=[];s.rollValue>=11&&u.push(`<div>【大成功】+${s.rollValue-10}</div>`),(pt(i.id).activeBuffs||[]).forEach(p=>{p.stat==="damageBonus"&&(p.duration==="onetime_next_action"||p.duration==="until_damage_applied")&&u.push(`<div>【${p.source}】+${p.value}</div>`)});const h=[],f=pt(n.id);(f.activeBuffs||[]).forEach(p=>{p.stat==="defense"&&p.duration==="until_damage_applied"&&h.push(`<div>${f.name}の【${p.source}】-${p.value}</div>`)}),Object.values(f.partsStatus).flat().map(p=>p.damaged?null:Tt(p.name)).filter(p=>p?.timing==="オート"&&p.effects).forEach(p=>p.effects.forEach(g=>{g.ref==="APPLY_PASSIVE_DEFENSE"&&g.params.value&&s.location.toLowerCase().includes(g.params.condition.replace("hit_location_is_",""))&&h.push(`<div>${f.name}の【${p.name}】-${g.params.value}</div>`)}));const m=`
        <div class="attack-confirm-summary">
            ${i.name}【${r.name}】 → ${n.name}
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《基本ダメージ》</div>
            <div class="modifier-list"><div>【${r.name}】${a}</div></div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《追加ダメージ 合計: +${l}》</div>
            <div class="modifier-list">${u.length>0?u.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《防御 合計: -${c}》</div>
            <div class="modifier-list">${h.length>0?h.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `,v=`<button id="executeDamageBtn" class="welcome-modal-close-btn">${s.location}：${o}点を確定</button>`;wt({title:"ダメージ計算",bodyHtml:m,footerHtml:v,onRender:(p,g)=>{p.querySelector("#executeDamageBtn").onclick=()=>{e(o),g()}}})}const Xb="1.16.88";let Oi=null;const Po=["奈落","地獄","煉獄","花園","楽園"],nl=Array.from({length:26},(s,e)=>20-e);function qb(){console.log("UI Manager initialized.")}function Rn(){const s=Pt(),e=Bt();Gs(),document.querySelectorAll(".damage-prompt-button").forEach(n=>n.remove());const t={};s.damageQueue.forEach(n=>{if(n.type==="instance"&&!n.applied&&n.target){const i=n.target.id;t[i]||(t[i]=0);const{finalAmount:r}=Pc(n);t[i]+=r}});for(const n in t)t[n]>0&&iw(n,t[n]);_r(),Qb(s,e)}function jb(){document.documentElement.style.setProperty("--col-count",nl.length),document.documentElement.style.setProperty("--row-count",Po.length);const s=document.getElementById("battleWrap");s.innerHTML="";const e=document.createElement("div");e.className="current-action-cell",e.id="currentActionValue",s.appendChild(e),nl.forEach((n,i)=>{const r=document.createElement("div");r.className="col-header",r.textContent=n,r.dataset.col=String(n),r.style.gridColumn=(i+2).toString(),r.style.gridRow="1",s.appendChild(r)});const t={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"};Po.forEach((n,i)=>{const r=document.createElement("div");r.className="row-header";const o=t[n];o&&r.classList.add(`area-color-${o}`),r.textContent=n,r.style.gridColumn="1",r.style.gridRow=(i+2).toString(),s.appendChild(r)}),Po.forEach((n,i)=>{nl.forEach((r,o)=>{const a=document.createElement("div");a.className="cell";const l=t[n];l&&a.classList.add(`cell-area-${l}`),r===0?a.classList.add("col-zero"):r<0&&a.classList.add("col-negative"),a.dataset.row=String(i),a.dataset.col=String(r),a.style.gridColumn=(o+2).toString(),a.style.gridRow=(i+2).toString(),s.appendChild(a)})})}function ft(s,e=2e3){const t=document.getElementById("toast-notification");t&&(Oi&&clearTimeout(Oi),t.onclick=()=>{t.classList.remove("is-visible"),Oi&&(clearTimeout(Oi),Oi=null),t.onclick=null},t.innerHTML=s,t.classList.add("is-visible"),Oi=setTimeout(()=>{t.classList.remove("is-visible"),t.onclick=null,Oi=null},e))}function Gs(){const s=Bt(),e=s.filter(n=>n.type==="pc"),t=s.filter(n=>n.type==="enemy");Xd(document.getElementById("pcContainer"),e,"pc"),Xd(document.getElementById("enemyContainer"),t,"enemy"),_r(),na()}function Xd(s,e,t){s.innerHTML="";const n=!Pt().isStarted;if(e.forEach(i=>{const r=Tf(i,n);s.appendChild(r)}),n){const i=document.createElement("div");i.className="add-char-card";const r=t==="pc"?"姉妹ドール":"NCの手駒";i.innerHTML=`<div class="add-char-text-2">UNDEAD</div><div class="add-char-plus">+</div><div class="add-char-text">${r}を追加</div>`,s.appendChild(i)}}function Tf(s,e){let t="";s.isMentallyBroken&&(t+=" status-mental-collapse"),s.isDestroyed&&(t+=" status-destroyed"),s.hasWithdrawn&&(t+=" status-withdrawn");let n="";(s.isDestroyed||s.hasWithdrawn)&&(n+=" is-inactive");const i=document.createElement("div");i.className=`char ${n.trim()}`,i.dataset.id=s.id;const r=`
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
        </div>`;let o="";s.regrets&&s.regrets.length>0&&(o=`<div class="char-madness">${s.regrets.map(m=>{const v=m.points||0;let p="";for(let _=0;_<4;_++)p+=_<v?"◆":"・";return`<div class="${v>=4?"is-madness":""}">${p}</div>`}).join("")}</div>`);let a="";if(s.partsStatus){let f="";if(s.category==="ドール"||s.category==="サヴァント"){const m=["head","arms","torso","legs","body"],v={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"他"},p=s.treasure;f=m.map(g=>{if(!s.partsStatus[g]||s.partsStatus[g].length===0)return"";const x=s.partsStatus[g].map(y=>{const E=Tt(y.name),T=E&&E.id&&E.id.startsWith("BP-"),C=y.name===p;return{part:y,isBasicPart:T,isTreasure:C,damaged:y.damaged}}).sort((y,E)=>y.isTreasure!==E.isTreasure?y.isTreasure?-1:1:y.isBasicPart!==E.isBasicPart?y.isBasicPart?1:-1:y.damaged!==E.damaged?y.damaged?-1:1:0).map(y=>y.isTreasure?y.damaged?"・":"★":y.isBasicPart?y.damaged?"・":"■":y.damaged?"・":"●").join("");return g==="body"&&!s.partsStatus[g].some(y=>y.name!==p)?"":`<div>${x}：${v[g]}</div>`}).filter(g=>g!=="").join("")}else if(s.category==="ホラー"){const m=Object.values(s.partsStatus).flat(),v=[],p=[];m.forEach(x=>{const y=Tt(x.name);y&&y.id&&y.id.startsWith("BP-")?v.push(x):p.push(x)});let g="";if(p.length>0){const x=p.filter(E=>E.damaged).length;g=`<div>${"・".repeat(x)+"●".repeat(p.length-x)}：強</div>`}let _="";if(v.length>0){const x=v.filter(E=>E.damaged).length;_=`<div>${"・".repeat(x)+"■".repeat(v.length-x)}：基</div>`}f=_+g}else if(s.category==="レギオン"){const m=s.isDestroyed?0:s.stackCount,v=Math.ceil(m/10),p=[];for(let g=0;g<v;g++){const _=g*10,x=Math.min(m-_,10);x>0&&p.push(`<div>${"●".repeat(x)}：</div>`)}f=p.reverse().join("")}f&&(a=`<div class="char-parts-status">${f}</div>`)}const l=s.category==="レギオン";let c="";l?c=`<div class="char-stack-count">${s.isDestroyed?0:s.stackCount}体</div>`:c=`<div class="char-parts-count">${s.isDestroyed?0:Object.values(s.partsStatus).flat().filter(m=>!m.damaged).length}</div>`;const u=`
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
            <img src="${s.img}" alt="${s.name}">
        </div>
        <div class="char-stats"></div>
            <div class="char-bubble-marker-container" data-id="${s.id}"></div>
            <div class="char-action-marker-container" data-id="${s.id}"></div>
            <div class="damage-prompt-container"></div> 
            <div class="char-area-name ${h}">${s.area}</div>
            <div class="char-name-overlay">${s.name}</div>
            ${c}
            ${u}
            ${o} 
            ${a} 
        ${e?r:""}
    `,i}function Yb(s){if(!s)return;const{actionValue:e,area:t,id:n,name:i,img:r,stackCount:o}=s,a=document.getElementById("battleWrap"),l=Po.indexOf(t);if(l===-1)return;const c=a.querySelector(`.cell[data-row="${l}"][data-col="${e}"]`);if(!c)return;const u=document.createElement("span");u.className="marker",u.dataset.id=n,u.dataset.name=i;const d=new Image;if(d.src=r,d.className="marker-img",d.alt=i,u.appendChild(d),s.category==="レギオン"&&o>1){const h=document.createElement("div");h.className="marker-stack-count",h.textContent=`x${o}`,u.appendChild(h)}c.appendChild(u)}function Kb(s){if(!s||s.length===0)return;const e=s[0].id,t=document.querySelector(`.char[data-id="${e}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}function Le(s){const e=document.getElementById("logEntries");if(!e)return;const t=document.createElement("div");t.className="log-entry",t.innerHTML=s,e.appendChild(t),e.scrollTop=e.scrollHeight}function Zb(){const s=document.getElementById("madnessModal"),e=document.getElementById("madnessModalBody");e.innerHTML="";const t=Bt().filter(n=>n.type==="pc"&&!n.isDestroyed&&!n.hasWithdrawn);if(t.length===0){Rf();return}t.forEach(n=>{const i=document.createElement("div");i.className="pc-regret-group",i.dataset.pcId=n.id,i.innerHTML=`<h4>${n.name}の未練 (1つ選択)</h4>`,n.regrets.forEach(r=>{const o=document.createElement("div");o.className="regret-item",o.dataset.regretId=r.id,o.textContent=`${r.name} (狂気点: ${r.points})`,i.appendChild(o)}),e.appendChild(i)}),s.classList.add("is-visible"),kb(t)}function Jb(s){const e=pt(s);if(!e)return;const t=document.querySelector(`.char[data-id="${s}"]`);if(t){const n=!Pt().isStarted,i=Tf(e,n);t.replaceWith(i),na()}}function _r(){document.getElementById("battleWrap").querySelectorAll(".marker").forEach(t=>t.remove()),Bt().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).forEach(t=>{Yb(t)}),na()}function Qb(s,e){const{isStarted:t,turn:n,count:i,phase:r,activeActors:o,potentialActors:a,shouldScrollToCount:l}=s,c=document.getElementById("timingArea"),u=document.getElementById("battleWrap"),d=document.getElementById("turnIndicator"),h=document.getElementById("countIndicator"),f=document.getElementById("currentActionValue"),m=document.getElementById("resetBattleBtn");if(c&&(t?(c.classList.remove("setup-phase"),c.classList.add("battle-phase"),u.classList.remove("setup-phase"),m&&(m.disabled=!1)):(c.classList.add("setup-phase"),c.classList.remove("battle-phase"),u.classList.add("setup-phase"),m&&(m.disabled=!0))),t?(d.textContent=n,h.textContent=i,f.textContent=`カウント ${i}`):(d.textContent="-",h.textContent="-",f.textContent="カウント -"),u.querySelectorAll(".highlight-col").forEach(_=>_.classList.remove("highlight-col")),t&&(u.querySelectorAll(`.cell[data-col="${i}"], .col-header[data-col="${i}"]`).forEach(_=>_.classList.add("highlight-col")),l)){const _=document.querySelector(".battle-grid-scroll-wrapper"),x=u.querySelector(`.col-header[data-col="${i}"]`);_&&x&&_.scrollTo({left:x.offsetLeft-_.offsetLeft-97,behavior:"smooth"}),fw()}const v=new Set(o.map(_=>_.id));document.querySelectorAll(".char").forEach(_=>{_.classList.toggle("highlight-char",v.has(_.dataset.id))});let p=null;switch(r){case"ACTION_DECLARATION":o.length>0&&(p=document.querySelector(`.char[data-id="${o[0].id}"]`));break;case"RAPID_RESOLUTION":p=document.getElementById("rapidDeclarationArea");break;case"ACTION_RESOLUTION":p=document.getElementById("actionDeclarationArea");break;case"DAMAGE_RESOLUTION":p=document.getElementById("damageProcessingArea");break}p&&p.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});const g=new Set(a.map(_=>_.id));e.forEach(_=>{if(Af(_.id,"char-bubble-marker-container"),t&&!_.isDestroyed&&!_.hasWithdrawn){const x=Ic(_);g.has(_.id)&&ws(_.id,"ACT","char-bubble-marker-container","#36c","white"),x.some(y=>y.data.timing==="ラピッド"&&y.isUsable)&&ws(_.id,"RPD","char-bubble-marker-container","#c63","white"),x.some(y=>y.data.timing==="ジャッジ"&&y.isUsable)&&ws(_.id,"JDG","char-bubble-marker-container","#396","white"),x.some(y=>y.data.timing==="ダメージ"&&y.isUsable)&&ws(_.id,"DMG","char-bubble-marker-container","#933","white")}}),ew(s),tw(),aw()}function ew(s){if(!s)return;const{phase:e,activeActors:t,actionQueue:n,rapidQueue:i,judgeQueue:r,damageQueue:o}=s,a={action:document.getElementById("actionPhaseIndicator"),rapid:document.getElementById("rapidPhaseIndicator"),judge:document.getElementById("judgePhaseIndicator"),damage:document.getElementById("damagePhaseIndicator")},l=n.some(y=>!y.checked),c=i.some(y=>!y.checked),u=r.some(y=>!y.checked),d=o.some(y=>!y.applied),h=t.length>0,f=n.length>0,m=!c&&!u&&!l;let v=!1;f&&!m&&(v=!0);const p=!h&&l,g=e==="DAMAGE_RESOLUTION"||n.every(y=>y.checked)&&d;a.action.classList.toggle("active",h),a.rapid.classList.toggle("active",v),a.judge.classList.toggle("active",p),a.damage.classList.toggle("active",g);const _=document.getElementById("countdownBtn"),x=document.getElementById("endTurnBtn");!_||!x||(_.disabled=!0,x.disabled=!0,e==="COUNT_END"?_.disabled=!1:e==="TURN_END_PREPARATION"&&(x.disabled=!1))}function tw(){const{actionQueue:s,rapidQueue:e,judgeQueue:t,damageQueue:n}=Pt();il("actionDeclarationList",s,"アクション宣言"),il("rapidDeclarationList",e,"ラピッド宣言"),il("judgeDeclarationList",t,"ジャッジ宣言"),nw(n),document.getElementById("actionDeclarationArea").classList.toggle("is-closed",s.length===0),document.getElementById("rapidDeclarationArea").classList.toggle("is-closed",e.length===0),document.getElementById("judgeDeclarationArea").classList.toggle("is-closed",t.length===0),document.getElementById("damageProcessingArea").classList.toggle("is-closed",n.length===0)}function il(s,e,t){const n=document.getElementById(s);if(!n)return;const i=n.closest(".accordion-container"),r=i?i.querySelector(".accordion-header"):null;if(!r)return;const o=Pt(),a=o.activeActors.length>0,l=o.rapidQueue.some(d=>!d.checked),c=o.judgeQueue.some(d=>!d.checked);let u=r.querySelector("span");if(!u){const d=r.textContent;r.innerHTML="",u=document.createElement("span"),u.textContent=d,r.appendChild(u)}e.length===0?(n.innerHTML="",u.textContent=t+"はありません"):(u.textContent=t,n.innerHTML="",e.forEach((d,h)=>{const f=document.createElement("label");f.className="action-queue-item";let m=!1;s==="rapidDeclarationList"?m=a:s==="judgeDeclarationList"?m=a||l:s==="actionDeclarationList"&&(m=a||l||c),d.checked&&(m=!0),m&&f.classList.add("is-disabled"),d.checked&&f.classList.add("is-checked");const v=document.createElement("input");v.type="checkbox",v.checked=d.checked,v.disabled=!0,m||(s==="rapidDeclarationList"?f.onclick=()=>zb(h):s==="judgeDeclarationList"?f.onclick=()=>Hb(h):s==="actionDeclarationList"&&(f.onclick=()=>Vb(h))),f.appendChild(v);const p=document.createElement("span");let g=`<b>${d.performer.name}</b> 【${d.summary.name}】`;if(d.target){if(d.target.name)g+=` → <b>${d.target.name}</b>`;else if(d.target.performer&&d.target.sourceManeuver){const _=d.target;_.target&&_.target.id!==_.performer.id?g+=` → <b>${_.target.name}</b>（${_.performer.name}【${_.sourceManeuver.name}】）`:g+=` → <b>${_.performer.name}【${_.sourceManeuver.name}】</b>`}}p.innerHTML=g,f.appendChild(p),n.appendChild(f)}))}function nw(s){const e=document.getElementById("damageProcessingList");if(!e)return;const t=e.closest(".accordion-container"),n=t?t.querySelector(".accordion-header"):null,i=Pt().phase==="DAMAGE_RESOLUTION";s.length===0?(e.innerHTML="",n&&(n.textContent="ダメージ宣言はありません")):(n&&(n.textContent="ダメージ宣言"),e.innerHTML="",s.forEach((r,o)=>{const a=document.createElement("label");a.className="action-queue-item damage-item";let l=!0,c=!1;const u=document.createElement("span");if(r.type==="instance"){c=r.applied,l=!i||c;const{baseAmount:h,totalBonus:f}=Pc(r),m=f>0?`+${f}`:f<0?`${f}`:"";u.innerHTML=`<b>${r.target.name}</b>：${r.location}：<b>${h}${m}</b>点`}else if(r.type==="declaration"){c=r.checked,l=c;let h=`<b>${r.performer.name}</b> 【${r.sourceManeuver.name}】`;r.target&&(h+=` → <b>${r.target.name}</b>`),u.innerHTML=h}l&&a.classList.add("is-disabled"),c&&a.classList.add("is-checked");const d=document.createElement("input");d.type="checkbox",d.checked=c,d.disabled=!0,l||(a.onclick=()=>wf(o)),a.appendChild(d),a.appendChild(u),e.appendChild(a)}))}function iw(s,e){const t=document.querySelector(`.char[data-id="${s}"]`);if(!t)return;const n=t.querySelector(".damage-prompt-container");let i=n.querySelector(".damage-prompt-button");i||(i=document.createElement("button"),i.className="damage-prompt-button",n.appendChild(i),i.style.pointerEvents="auto",i.onclick=r=>{r.stopPropagation(),Wb(s)}),i.dataset.damage=e,i.textContent=`ダメージ ${e}`}function qd(s){const e=document.querySelector(`.char[data-id="${s}"]`);if(e){const t=e.querySelector(".damage-prompt-button");t&&t.remove()}}function Lc(){const s=document.getElementById("startBattleBtn");if(!s)return;const e=Bt(),t=e.some(i=>i.type==="pc"),n=e.some(i=>i.type==="enemy");s.disabled=!(t&&n)}function sw(s){const e=document.getElementById("version-info");if(e&&s){const n=["app","ui-manager","interaction-manager","character-manager","settings-manager","state-manager","battle-logic","dice-3d","dice-roller","menu-builder","battle-helper","data-handler","ui-helpers","reference","character-converter"].map(i=>`<span class="responsive-item">${i}: v${s[i]||"N/A"}</span>`).join('<span class="hide-on-mobile"> | </span>');e.innerHTML=n}}function wt(s){const e=document.getElementById("simpleMenuModal"),t=document.getElementById("simpleMenuModalTitle"),n=document.getElementById("simpleMenuModalBody"),i=document.getElementById("simpleMenuModalFooter"),r=document.getElementById("closeSimpleMenuModalBtn");if(!e||!t||!n||!i||!r)return;const o=s.closable!==!1;e.classList.toggle("is-not-closable",!o),r.style.display=o?"block":"none",t.textContent=s.title||"",n.innerHTML=s.bodyHtml||"",i.innerHTML=s.footerHtml||"",i.style.display=s.footerHtml?"block":"none",n.classList.remove("attack-confirm-body"),s.bodyHtml&&s.bodyHtml.includes("attack-confirm-summary")&&n.classList.add("attack-confirm-body"),s.items&&s.items.forEach(l=>{const c=document.createElement("div");l.isTitle||(c.textContent=l.label,c.classList.add("maneuver-item"),l.class&&c.classList.add(...l.class.split(" ")),l.isDisabled&&c.classList.add("is-masked"),c.onclick=()=>{l.isDisabled||(a(),l.onClick&&l.onClick())}),n.appendChild(c)});const a=()=>e.classList.remove("is-visible");o?(r.onclick=a,e.onclick=l=>{l.target===e&&a()}):(r.onclick=null,e.onclick=null),s.onRender&&s.onRender(e,a),e.classList.add("is-visible")}function rw(s){const e=document.getElementById("loading-overlay"),t=document.getElementById("loading-message"),n=document.getElementById("progress-bar-fill");!e||!t||!n||(t.textContent=s,n.style.width="0%",e.classList.add("is-visible"))}function sl(s,e,t){const n=document.getElementById("loading-message"),i=document.getElementById("progress-bar-fill");if(!n||!i)return;const r=e>0?s/e*100:0;n.textContent=`キャラクターを読み込み中... (${s} / ${e})`,t&&(n.textContent+=`
「${t}」`),i.style.width=`${r}%`}function ow(){const s=document.getElementById("loading-overlay");s&&s.classList.remove("is-visible")}function ws(s,e,t,n="rgba(0,0,0,0.7)",i="white"){const r=document.querySelector(`.${t}[data-id="${s}"]`);if(!r)return;const o=document.createElement("div");o.className="bubble-marker",o.textContent=e,o.style.backgroundColor=n,o.style.borderColor=i,r.appendChild(o)}function Af(s,e){const t=document.querySelector(`.${e}[data-id="${s}"]`);t&&(t.innerHTML="")}function aw(){const{actionQueue:s,isStarted:e}=Pt();Bt().forEach(n=>Af(n.id,"char-action-marker-container")),e&&s.forEach(n=>{if(!n.checked){const{performer:i,target:r,sourceManeuver:o}=n;if(i){let a="ACT",l="#666";o.tags.includes("攻撃")?(a="攻撃",l="#f0f"):o.tags.includes("移動")?(a="移動",l="#0f0"):o.category==="支援"||o.tags.includes("支援")?(a="支援",l="#0ff"):(o.category==="妨害"||o.tags.includes("妨害"))&&(a="妨害",l="#ff0"),ws(i.id,a,"char-action-marker-container",l,"white")}r&&ws(r.id,"TGT","char-action-marker-container","#f00","white")}})}const lw="1.24.89";let _e={isStarted:!1,turn:1,count:0,activeActors:[],potentialActors:[],actorsForThisCount:new Set,phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],shouldScrollToCount:!1};function ia(s){_e.count!==s&&Le(`【カウント ${s}（ターン ${_e.turn}） 開始】`),_e.count=s,_e.shouldScrollToCount=!0,cw(),tn()}function cw(){_e.phase="ACTION_DECLARATION",_e.actionQueue=[],_e.rapidQueue=[],_e.judgeQueue=[],_e.damageQueue=[];const s=Bt().filter(e=>!e.isDestroyed&&!e.hasWithdrawn);_e.actorsForThisCount=new Set(s.filter(e=>e.actionValue>=_e.count).map(e=>e.id)),s.forEach(e=>e.hasActedThisCount=!1),Si()}function uw(){const s=_e.actionQueue;let e=new Map;s.forEach(t=>{const{performer:n,target:i,sourceManeuver:r}=t;n&&n.skills.forEach(o=>{const a=Tt(o);!a||a.timing!=="オート"||!a.effects||a.effects.forEach(l=>{if(l.ref!=="APPLY_CONDITIONAL_BUFF")return;const c=l.params;let u=!1;switch(c.trigger){case"attacking_same_target_as_ally_this_count":i&&(u=s.some(h=>h.performer.type==="pc"&&h.performer.id!==n.id&&h.target?.id===i.id));break;case"attacking_with_melee":const d=r.effects?.find(h=>h.ref==="GENERIC_ATTACK");d&&d.params.attack_type==="白兵"&&(u=!0);break}u&&(c.buffs.forEach(d=>{Wo(n.id,{source:a.name,stat:d.stat,value:d.value,duration:"onetime_next_action"})}),e.has(n.id)||e.set(n.id,new Set),e.get(n.id).add(a.name))})})}),e.forEach((t,n)=>{const i=pt(n);i&&Le(`> [オート] ${i.name}の【${Array.from(t).join("】【")}】が適用されます。`)})}function dw(s,e){let t=JSON.stringify(s);return t=t.replace(/"\$params\.(\w+)"/g,(n,i)=>e.hasOwnProperty(i)?JSON.stringify(e[i]):"null"),JSON.parse(t)}function Pt(){return{..._e,activeActorIds:new Set(_e.activeActors.map(s=>s.id))}}function hw(){_e.isStarted=!0,_e.turn=1;const s=Bt(),e=Math.max(0,...s.map(t=>t.actionValue));ia(e)}function fw(){_e.shouldScrollToCount=!1}function bn(s,e,t=null,n=null){const i=s.id,r=isNaN(Number(e.cost))?0:Number(e.cost);r>0&&Wt(i,{actionValue:s.actionValue-r});const o=pt(i);let a=t;!a&&e.range==="自身"&&(a=o),o.turnLimitedManeuvers.has(e.name)&&o.usedManeuvers.add(e.name);const l=pt(i);if(!l){console.error(`宣言の解決中にパフォーマー(ID: ${i})が見つかりませんでした。`);return}const c={id:`decl_${Date.now()}_${Math.random()}`,performer:l,target:t,sourceManeuver:e,timing:e.timing,summary:{name:e.name},checked:!1,type:"declaration"};switch(e.timing){case"ラピッド":_e.rapidQueue.push(c),Le(`◆ [ラピッド] ${l.name}が【${e.name}】を宣言`);break;case"ジャッジ":c.judgeTarget=n,_e.judgeQueue.push(c),Le(`◆ [ジャッジ] ${l.name}が【${e.name}】を宣言`);break;case"ダメージ":_e.damageQueue.push(c);let u=`◆ [ダメージ] ${o.name}が【${e.name}】を宣言`;a&&a.id!==o.id&&(u+=` (対象: ${a.name})`),Le(u);break;case"アクション":default:e.timing==="アクション"&&(Wt(i,{hasActedThisCount:!0}),c.type="action",_e.actionQueue.push(c),Le(`◆ [アクション] ${l.name}が【${e.name}】を宣言`));break}tn()}function tn(){if(!_e.isStarted){_e.phase="SETUP",_e.activeActors=[],_e.potentialActors=[],Rn();return}const e=Array.from(_e.actorsForThisCount).filter(a=>{const l=pt(a);return l&&!l.hasActedThisCount&&l.actionValue>0}).map(a=>pt(a));_e.potentialActors=e;const t=e.filter(a=>a.type==="enemy");_e.activeActors=t.length>0?t:e.filter(a=>a.type==="pc");const n=_e.phase,i=_e.rapidQueue.some(a=>!a.checked),r=_e.actionQueue.some(a=>!a.checked),o=_e.damageQueue.some(a=>a.type==="instance"?!a.applied:a.type==="declaration"?!a.checked:!1);if(_e.activeActors.length>0)_e.phase="ACTION_DECLARATION";else if(i)_e.phase="RAPID_RESOLUTION";else if(r)_e.phase="ACTION_RESOLUTION";else if(o)_e.phase="DAMAGE_RESOLUTION";else{const a=Bt().some(l=>l.actionValue>0&&!l.isDestroyed&&!l.hasWithdrawn);_e.phase=_e.count>0&&a?"COUNT_END":"TURN_END_PREPARATION"}n==="ACTION_DECLARATION"&&_e.phase!=="ACTION_DECLARATION"&&uw(),Rn()}function pw(){const e=Bt().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).map(t=>t.actionValue).filter(t=>t<_e.count);e.length>0?ia(Math.max(...e)):Cf()}function Cf(){_e.phase="MADNESS_PHASE",Le("【ターン終了】各ドールは未練に狂気点を1点加えます。")}function Rf(){_e.turn++,Bt().forEach(t=>{t.activeBuffs&&(t.activeBuffs=t.activeBuffs.filter(n=>n.duration!=="end_of_turn"))}),Xf();const s=Bt().filter(t=>!t.isDestroyed&&!t.hasWithdrawn),e=s.length>0?Math.max(0,...s.map(t=>t.actionValue)):0;ia(e),tn()}async function mw(s){const e=_e.rapidQueue[s];!e||e.checked||(await Pf(e),e.checked=!0,tn())}async function jd(s,e=null){const t=_e.actionQueue[s];!t||t.checked||(await Pf(t,e),t.checked=!0,_e.actionQueue.every(n=>n.checked)?_w():tn())}function gw(s){const e=_e.judgeQueue[s];e&&!e.checked&&(e.checked=!0,Le(`> 解決：[ジャッジ] ${e.performer.name}【${e.sourceManeuver.name}】`)),tn()}function vw(s){const e=_e.damageQueue[s];if(e&&e.type==="instance"&&!e.applied){e.applied=!0;const t=e.target.id;_e.damageQueue.forEach(n=>{n.type==="declaration"&&(n.target?.id===t&&(n.checked=!0),e.sourceAction?.performer.id===n.performer.id&&(n.checked=!0))}),$o(t,"until_damage_applied"),$o(e.sourceAction.performer.id,"until_damage_applied")}tn()}function _w(){if(_e.moveQueue.length>0){Le("--- 移動解決フェーズ ---");const s=_e.moveQueue.map(e=>{const t=_e.actionQueue.find(h=>h.id===e.declarationId);let n=0;t&&t.debuffs&&t.debuffs.forEach(h=>{n+=h.value||0});const i=["奈落","地獄","煉獄","花園","楽園"],r=pt(e.characterId),o=i.indexOf(r.area),a=i.indexOf(e.targetArea),l=Math.abs(a-o),c=Math.max(0,l+n);if(c<l&&Le(`→ ${r.name}の移動は妨害され、移動距離が${l-c}減少！`),c===0)return l>0&&Le(`→ ${r.name}の移動は完全に妨害された！`),null;let u;a>o?u=Math.min(i.length-1,o+c):u=Math.max(0,o-c);const d=i[u];return r.area!==d&&Le(`→ ${r.name}は「${d}」へ移動`),{characterId:e.characterId,targetArea:d}}).filter(e=>e!==null);qf(s),_e.moveQueue=[]}yw()}function yw(){_e.damageQueue.some(e=>!e.applied)?(_e.phase="DAMAGE_RESOLUTION",Le("--- ダメージ解決フェーズ開始 ---")):_e.phase="COUNT_END",tn()}function xw(s,e){const t=_e.damageQueue.find(n=>n.id===s);t&&e&&(Le(`＞ ${e.name} が ${t.target.name} へのダメージを肩代わりしました。`),t.target=e)}function Mw(s,e){_e.isStarted=!0,_e.turn=s;const t=Math.max(0,...e.map(n=>n.actionValue));ia(t)}function Dc(){_e={isStarted:!1,turn:1,count:0,activeActors:[],potentialActors:[],actorsForThisCount:new Set,phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],shouldScrollToCount:!1},tn()}async function Pf(s,e=null){const{performer:t,sourceManeuver:n,target:i,timing:r}=s;let o=!0,a=null;if(n.tags?.includes("移動妨害")&&i?a=i.performer:i&&(a=i),a){const{hasTarget:u}=oi(t,n,[a]);u||(o=!1)}if(!o){Le(`→ [${r}] ${t.name}の【${n.name}】は 対象が射程外になったため失敗`);return}if(n.isEscapeAttempt){await If({performer:t});return}if(!n.effects||n.effects.length===0){n.name==="待機"?Le(`${t.name}は状況をうかがっている。`):Le("※ 効果の定義がありません");return}const l={performer:t,target:s.target,declaration:s,diceResult:e};let c=[];for(const u of n.effects){const d=await Yd(u,l);c.push(...d)}if(c.length>0){Le(`→ 追加効果(${c.join(",")})が発動！`);for(const u of c)await Yd({ref:u,params:{}},l)}}async function Yd(s,e){let t=[];const n=sp(s.ref);if(!n)return console.warn(`※ [Engine] Effect definition not found for: ${s.ref}`),t;const i=s.params||{};for(const r of n.actions){const o=dw(r,i);switch(o.action_type){case"attack_roll":const{hit:a,on_hit:l}=await Sw(o,e);a&&l&&t.push(...l);break;case"move_character":Ew(o,e);break;case"apply_buff":bw(o,e);break;case"escape_roll":await If(e);break;case"modify_action_value":ww(o,e);break;case"modify_move_distance":const{performer:c,declaration:u}=e,d=u.target;d&&d.sourceManeuver.tags.includes("移動")&&(d.debuffs||(d.debuffs=[]),d.debuffs.push({source:u.sourceManeuver.name,value:o.value||0}),Le(`${c.name}が【${u.sourceManeuver.name}】で${d.performer.name}の移動を妨害！`));break;case"deal_damage":case"chain_attack":case"severance_roll":break;default:Le(`※ [Engine] 未対応: ${o.action_type}`)}}return t}async function Sw(s,e){const{performer:t,target:n,declaration:i,diceResult:r}=e,o=i.performer;if(!n)return Le("攻撃対象がいません"),{hit:!1,on_hit:[]};if(!r)return console.error("performAttackRollにdiceResultが渡されていません。攻撃が解決されませんでした。"),{hit:!1,on_hit:[]};const{result:a,hitLocation:l,rollValue:c}=r,u=s.on_hit_effects||s.on_hit||[];let d=0;if(t.activeBuffs&&t.activeBuffs.forEach(f=>{f.duration==="onetime_next_action"&&f.stat==="damageBonus"&&(d+=f.value)}),a==="大失敗"){i.sourceManeuver;let f=[];const m=n.area,v=Bt().filter(g=>g.type===t.type&&g.area===m&&!g.isDestroyed&&!g.isWithdrawn);f.push(...v),f.some(g=>g.id===t.id)||f.push(t);let p=null;if(f.length>0&&(p=await new Promise(g=>{const _=f.map(x=>({label:x.name,onClick:()=>g(x)}));wt({title:"大失敗：誤爆対象を選択",items:_,closable:!1})})),p){const g=s.damage||0,_=s.on_hit_effects||s.on_hit||[];_e.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,type:"instance",performer:o,target:p,amount:g,finalAmount:g,baseAmount:g,bonusAmount:0,location:"防御側任意",sourceAction:i,applied:!1,checked:!1,rollValue:c||0,isFumble:!0,onHitEffects:_}),Le(`→ ${p.name}に誤爆！ ${g}点のダメージ！`)}else Le("→ 攻撃は大失敗したが、誤爆対象がいなかった。");return{hit:!1,on_hit:[]}}const h=a.includes("成功");if(h){let f=l;c>=11?f="攻撃側任意":c===6&&(f="防御側任意");const m=s.damage||0;let v=m+d;c>=11&&(v+=c-10),Le(`→ ${n.name}に命中！`),_e.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,type:"instance",performer:o,target:n,baseAmount:m,location:f,sourceAction:i,applied:!1,checked:!1,rollValue:c||0,onHitEffects:s.on_hit_effects||s.on_hit||[],damageBonusSources:o.activeBuffs?.filter(p=>p.duration==="onetime_next_action"&&p.stat==="damageBonus").map(p=>({source:p.source,value:p.value}))||[]}),Le(`→ ${n.name}に${v}点のダメージ！`)}else Le("→ 攻撃失敗");return $o(o.id,"onetime_next_action"),{hit:h,on_hit:u}}function Ew(s,e){const{performer:t,target:n,declaration:i}=e,r=s.target==="self"?t:n;if(!r)return;const o=i.sourceManeuver.targetArea;if(!o)return;let a=1;if(s.distance){const p=String(s.distance).split("-");a=parseInt(p[1]||p[0],10)}let l=0;const c=[...r.skills.map(p=>Tt(p)),...Object.values(r.partsStatus).flat().filter(p=>!p.damaged).map(p=>Tt(p.name))].filter(p=>p);for(const p of c)if(p.timing==="オート"&&p.effects){for(const g of p.effects)if(g.ref==="APPLY_BUFF"&&g.params?.stat==="moveDistanceBonus"){const _=g.params.condition;if(_&&Array.isArray(_)){const x=i.sourceManeuver.tags||[];_.some(y=>x.includes(y))&&(l+=g.params.value||0)}else l+=g.params.value||0}}const u=a+l;let d=0;i.debuffs&&i.debuffs.forEach(p=>{d+=p.value||0});const h=Math.max(0,u+d);if(d<0&&Le(`${r.name}は移動妨害により、移動距離 -${Math.abs(d)}`),h===0){u>0&&Le(`→ ${r.name}の移動は完全に妨害された！`);return}const f=["奈落","地獄","煉獄","花園","楽園"],m=f.indexOf(r.area);let v;if(o.endsWith("方向")){let p=m;o==="奈落方向"?p=Math.max(0,m-h):p=Math.min(f.length-1,m+h),v=f[p]}else v=o;i.timing==="ラピッド"?(r.area!==v&&Le(`→ [ラピッド] ${r.name}は「${v}」へ移動`),Wt(r.id,{area:v})):(r.area!==v&&Le(`→ ${r.name}は「${v}」へ移動を企図`),_e.moveQueue.push({characterId:r.id,targetArea:v,declarationId:i.id}))}function bw(s,e){const{performer:t}=e,n=s.buff?s.buff:s;switch(n.stat){case"maxActionValue":Wt(t.id,{baseActionValue:(t.baseActionValue||6)+n.value}),Le(`${t.name}：最大行動値 ${n.value>0?"+":""}${n.value}`);break;case"attackCheckBonus":t.activeBuffs.push({source:e.declaration.sourceManeuver.name,stat:n.stat,value:n.value,duration:n.duration}),Le(`→ ターン終了まで攻撃判定 +${n.value}`);break}}function ww(s,e){const t=e.target;if(!t)return;const n=s.value||0;n!==0&&(Wt(t.id,{actionValue:t.actionValue+n}),n<0?Le(`→ ${t.name} は転倒した！ (行動値${n})`):Le(`→ ${t.name} の行動値が ${n>0?"+":""}${n} された。`))}async function If(s){const{performer:e}=s;return Le(`> ${e.name}の逃走判定`),new Promise(t=>{ln({command:"NC",showToast:!0,callback:n=>{n.includes("成功")?(Le(`→ 逃走成功！ ${e.name}は戦場から離脱`),Wt(e.id,{hasWithdrawn:!0})):Le(`→ 逃走失敗！ ${e.name}は戦場に残留`),t()}})})}const ji="7.10.1603";window.onload=function(){document.title=`『永い後日談のネクロニカ』バトルパート支援ツール Ver.${ji}`};document.addEventListener("DOMContentLoaded",async()=>{try{await ip(),Hf(Ws()),qb(),Fb(),ub(),nb({hintMasterData:ac(),regretMasterData:xr(),takaramonoMasterData:sh(),memoryFragmentsData:Xo(),addLog:Le}),Tw(),await new Promise(e=>setTimeout(e,2e3)),await Lf(),await Aw(),await Cw(),kw()&&await Rw(),Pw(),document.getElementById("splash").classList.add("fade-out"),Iw()}catch(s){console.error("アプリケーションの初期化に失敗しました。",s),document.body.innerHTML=`<div style="color: red; padding: 20px;">初期化エラー: ${s.stack}</div>`}});function Tw(){jb(),Gs(),Rn(),Ub(),Lc()}function Aw(){return new Promise(s=>{const e=document.getElementById("welcomeModal"),t=document.getElementById("closeWelcomeModalBtn");if(!e||!t)return console.warn("Welcome modal elements not found, skipping."),s();e.classList.add("is-visible");const n=()=>{e.classList.remove("is-visible"),s()};t.onclick=n,e.onclick=i=>{i.target===e&&n()}})}function Cw(){return new Promise(s=>{const e=`
        <div class="modal-header modal-header-sub">📢主な更新内容 Ver.${ji}</div>
        <div class="modal-body welcome-modal-body">
            <p>◆ リファレンスを刷新、<strong>未練・たからもの・記憶のカケラ・暗示</strong>を追加しました。</p>
            <p>◆ 最新バージョンへの<strong>自動更新機能</strong>を実装しました。</p>
            <p>◆ <strong>📖全マニューバリファレンス</strong>を実装しました。</p>
            <p>◆ <strong>防御・妨害・追加ダメージ・転倒・移動妨害</strong>を実装しました。</p>
            <p>◆ <strong>セッションのファイルへの保存・ファイルから読込み</strong>を実装しました。</p>
            <p>◆ <strong>【✏️画像の変更】※透過png対応</strong>：「🪪人形設計図」において<strong>画像の変更</strong>機能を追加しました。
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
        `;wt({title:"更新情報",bodyHtml:e,footerHtml:'<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',closable:!1,onRender:(t,n)=>{t.querySelector("#okUpdateBtn").onclick=()=>{n(),s()}}})})}function Rw(){return new Promise(s=>{wt({title:"セッションの復元",bodyHtml:"<p>保存された前回のセッションデータが見つかりました。<br>復元しますか？</p>",footerHtml:`
                <button id="restoreBtn" class="welcome-modal-close-btn">はい、復元する</button>
                <button id="discardBtn" class="welcome-modal-close-btn">いいえ、新規に開始</button>
            `,closable:!1,onRender:(e,t)=>{e.querySelector("#restoreBtn").onclick=async()=>{t(),await Bw(Ws())&&Rn(),s()},e.querySelector("#discardBtn").onclick=()=>{confirm("自動保存されたデータが削除されます。本当に新規セッションを開始しますか？")&&(Uf(),t(),s())}}})})}async function Lf(){return new Promise(async s=>{if(!navigator.onLine){wt({title:"更新の確認",bodyHtml:"<p>ネットワークに接続されていません。<br>接続が良い環境でページを再読み込みすると、最新バージョンを確認できます。</p>",footerHtml:'<button id="okBtn" class="welcome-modal-close-btn">OK</button>',onRender:(e,t)=>{e.querySelector("#okBtn").onclick=()=>{t(),s()}}});return}try{const e=new AbortController,t=setTimeout(()=>e.abort(),2e3),n=await fetch(`/version.json?t=${new Date().getTime()}`,{signal:e.signal});if(clearTimeout(t),!n.ok)throw new Error("バージョンファイルを取得できませんでした。");const r=(await n.json()).version;r&&r!==ji?wt({title:"新しいバージョンが利用可能です",bodyHtml:`
                        <p>アプリケーションが更新されました。</p>
                        <p>最新バージョン (v${r}) を読み込むために、ページをリロードしてください。</p>
                    `,footerHtml:'<button id="reloadBtn" class="welcome-modal-close-btn">リロードして更新</button>',onRender:(o,a)=>{o.querySelector("#reloadBtn").onclick=()=>{location.reload(!0)}}}):s()}catch(e){console.warn("バージョンチェックに失敗しました:",e.name,e.message),wt({title:"更新の確認",bodyHtml:"<p>サーバーへの接続がタイムアウトしました。<br>ネットワーク環境の良い場所で再度お試しいただくと、最新バージョンを確認できます。</p>",footerHtml:'<button id="okBtn" class="welcome-modal-close-btn">OK</button>',onRender:(t,n)=>{t.querySelector("#okBtn").onclick=()=>{n(),s()}}})}})}function Pw(){sw({app:ji,"battle-logic":lw,"battle-helper":fb,"character-manager":Of,"data-handler":np,"dice-roller":tb,"dice-3d":WE,"interaction-manager":Nb,"menu-builder":pb,"ui-helpers":rb,"ui-manager":Xb,"settings-manager":cb,"state-manager":Lw,reference:Sb,"character-converter":sb})}function Iw(){const s="nechronica-app-version",e=localStorage.getItem(s);e&&e!==ji&&ft(`バージョン ${ji} に更新されました！`,3e3),localStorage.setItem(s,ji)}const Lw="2.3.16",Ks="nechronica-battle-session-v3",Df="nechronica-autosave-enabled";let Is=!1,rc=!1;function Dw(){return localStorage.removeItem("nechronica-battle-session-v2"),Is=localStorage.getItem(Df)!=="false",console.log(`State Manager initialized. Auto-save is ${Is?"ON":"OFF"}.`),Is}function Nw(s){Is=s,localStorage.setItem(Df,s),s&&Nc()}function Si(){rc||!Is||Nc()}function Nf(){const s=Pt(),e=Bt(),t=!s.isStarted;let n={};try{n=JSON.parse(localStorage.getItem(Ks))||{}}catch{n={characters:[]}}const i=new Map((n.characters||[]).map(o=>[o.initialState.charId,o.initialState])),r=e.map(o=>{const a=i.get(o.id)||{},l={charId:o.id,sourceType:o.sheetId?"sheet":"template",id:o.sheetId||o.templateId,type:o.type,displayName:o.displayName,img:o.img,regrets:o.regrets,area:a.area,stackCount:a.stackCount};t&&(l.area=o.area,l.stackCount=o.stackCount);const c={charId:o.id,area:o.area,stackCount:o.stackCount,actionValue:o.actionValue,isDestroyed:o.isDestroyed||!1,hasWithdrawn:o.hasWithdrawn||!1,damagedPartNames:Object.values(o.partsStatus).flat().filter(u=>u.damaged).map(u=>u.name),usedManeuvers:Array.from(o.usedManeuvers||[])};return{initialState:l,currentState:c}});return{savedAt:new Date().toISOString(),turn:t?0:s.turn,characters:r}}function Nc(s=!1){try{const e=Nf();localStorage.setItem(Ks,JSON.stringify(e)),s?ft("ブラウザに保存しました",2e3):Is&&console.log("Session auto-saved."),Lf()}catch(e){console.error("状態の保存に失敗しました:",e)}}function Fw(){try{const s=Nf(),e=JSON.stringify(s,null,2),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),i=document.createElement("a");i.href=n;const r=new Date,a=`nechronica-session-${`${r.getFullYear()}${(r.getMonth()+1).toString().padStart(2,"0")}${r.getDate().toString().padStart(2,"0")}-${r.getHours().toString().padStart(2,"0")}${r.getMinutes().toString().padStart(2,"0")}`}.json`,l=prompt("ファイル名を入力してください:",a);l&&(i.download=l.endsWith(".json")?l:`${l}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),ft(`「${i.download}」を保存しました。`,2e3)),URL.revokeObjectURL(n)}catch(s){console.error("ファイルへの保存に失敗しました:",s),alert("ファイルへの保存に失敗しました。")}}async function Uw(s){if(!s)return ft("ファイルが空か、読み込みに失敗しました。",2e3),!1;try{const e=JSON.parse(s);return e.characters&&Array.isArray(e.characters)?await Ff(e):(ft("セッションデータ形式ではありません。",2e3),!1)}catch(e){return console.error("ファイルからの状態復元に失敗しました:",e),alert(`ファイルの解析に失敗しました。
${e.message}`),!1}}async function Bw(s){const e=localStorage.getItem(Ks);if(!e)return!1;try{const t=JSON.parse(e);return await Ff(t,s)}catch(t){return console.error("localStorageからの状態復元に失敗しました:",t),!1}}async function Ff(s,e){const t=e||Ws();rc=!0,rw("セッションデータを準備中...");try{const n=s.characters;if(!n)throw new Error("セーブデータ形式が不正です。");const i=s.turn||0,r=i===0;kc(),Dc();const o=n.length;let a=0;for(const l of n){const c=!!l.initialState,u=c?l.initialState:l,d=c?l.currentState:l,h=u.displayName||u.id;sl(a,o,h);let f;if(u.sourceType==="sheet"){const v=await Bf(u.id);f=ea(v),f.sheetId=u.id}else{const v=t[u.id];if(!v)throw new Error(`テンプレートID: ${u.id} が見つかりません`);f=JSON.parse(JSON.stringify(v)),f.templateId=u.id}const m=Bc(f,u.type);if(Wt(m.id,{displayName:u.displayName||m.originalName,img:u.img,regrets:u.regrets}),r)Wt(m.id,{area:u.area,stackCount:u.stackCount});else{Wt(m.id,{area:d.area,stackCount:d.stackCount,actionValue:d.actionValue,isDestroyed:d.isDestroyed,hasWithdrawn:d.hasWithdrawn,usedManeuvers:new Set(d.usedManeuvers||[])});const v=new Set(d.damagedPartNames);Object.values(m.partsStatus).flat().forEach(p=>{p.damaged=v.has(p.name)}),es(m)}a++,sl(a,o,m.name),u.sourceType==="sheet"?await new Promise(v=>setTimeout(v,200)):await new Promise(v=>setTimeout(v,50))}return r||Mw(i,Bt()),Lc(),sl(o,o,"読み込み完了"),await new Promise(l=>setTimeout(l,200)),ft("セッションを復元しました。",2e3),!0}catch(n){return console.error("状態の復元に失敗しました:",n),alert(`状態の復元に失敗しました:
${n.message}`),!1}finally{rc=!1,ow()}}async function Ow(){const s=localStorage.getItem(Ks);if(!s){console.warn("保存されたデータが見つかりません。");return}try{const e=JSON.parse(s);kc(),Dc();const t=e.characters||[];for(const n of t){const{initialState:i}=n;let r;if(i.sourceType==="sheet"){const a=await Bf(i.id);r=ea(a),r.sheetId=i.id}else r=JSON.parse(JSON.stringify(Ws()[i.id])),r.templateId=i.id;const o=Bc(r,i.type);Wt(o.id,{area:i.area,stackCount:i.stackCount,img:i.img,regrets:i.regrets,displayName:i.displayName||o.originalName})}}catch(e){console.error("初期状態への復元に失敗しました:",e)}}function kw(){return localStorage.getItem(Ks)!==null}function Uf(){localStorage.removeItem(Ks),ft("保存データを削除しました。",2e3)}function Bf(s){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=r=>{document.head.removeChild(i),delete window[n],e(r)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${s}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}const Of="1.8.8";let Fc={},Dt=[],kf=1;function es(s){let e=0;[...s.skills||[],...Object.values(s.partsStatus||{}).flat().map(n=>n.name)].forEach(n=>{const i=Tt(n);if(!i||!i.effects||i.effects.length===0)return;let r=!1;if(s.partsStatus){const o=Object.values(s.partsStatus).flat().find(a=>a.name===n);o&&(r=o.damaged)}for(const o of i.effects)o.ref==="APPLY_BUFF"&&o.params.stat==="maxActionValue"?(isNaN(r)||!r)&&(e+=o.params.value||0):o.ref==="MODIFY_MAX_ACTION_VALUE_ON_DAMAGE"&&r&&(e+=o.params.value||0)}),s.maxActionValue=(s.baseActionValue||6)+e}function zw(s,e,t){const n=Fc[s];if(!n)return console.error(`テンプレートIDが見つかりません: ${s}`),null;const i=JSON.parse(JSON.stringify(n));return i.templateId=s,zf(i,e)}function zf(s,e,t){const n=JSON.parse(JSON.stringify(s));n.id=`char_${kf++}`,n.type=e,n.originalName=s.name||"名称未設定",n.displayName=s.name||"名称未設定",Object.defineProperty(n,"name",{get(){return this.displayName},set(r){this.displayName=r}}),n.partsStatus={};let i=0;if(n.parts&&typeof n.parts=="object"&&Object.keys(n.parts).forEach(r=>{Array.isArray(n.parts[r])&&(n.partsStatus[r]=n.parts[r].map(o=>({id:`${n.id}_part_${i++}`,name:o,damaged:!1})))}),e==="pc"&&n.treasure)for(const r in n.partsStatus){const o=n.partsStatus[r].find(a=>a.name===n.treasure);if(o){o.id=`${n.id}_part_treasure`;break}}return n.madnessPoints={},n.statusEffects=[],n.activeBuffs=[],n.isMentallyBroken=!1,n.isDestroyed=!1,n.hasWithdrawn=!1,n.regrets=s.regrets||[],n.stackCount=s.stackCount||1,n.hasActedThisCount=!1,n}function Uc(){const s=Dt.filter(n=>n.skills&&n.skills.includes("合流"));if(s.length<2)return;const e=new Map;s.forEach(n=>{const i=`${n.name}-${n.area}-${n.type}`;e.has(i)||e.set(i,[]),e.get(i).push(n)});let t=!1;e.forEach(n=>{if(n.length<2)return;const i=n[0];for(let r=1;r<n.length;r++){const o=n[r];i.stackCount+=o.stackCount;const a=Dt.findIndex(l=>l.id===o.id);a!==-1&&Dt.splice(a,1)}t=!0}),t&&console.log("レギオンが合流しました。")}function sa(s){s.usedManeuvers=new Set,s.turnLimitedManeuvers=new Set,[...s.skills||[],...Object.values(s.partsStatus||{}).flat().map(t=>t.name)].forEach(t=>{const n=Tt(t);if(!n)return;let i=!1;n.effects?.some(o=>o.params&&o.params.limit_per_turn==="none")?i=!1:["ジャッジ","ダメージ","ラピッド"].includes(n.timing)&&(i=!0),i&&s.turnLimitedManeuvers.add(t)})}function Vf(s){s.regrets=[];const e=Dt.filter(r=>r.type==="pc"&&r.id!==s.id),t=s.treasure||"たからもの";s.regrets.push({id:`treasure_${s.id}`,name:`${t}への依存`,points:3,category:"たからもの"});const n=xr(),i=Object.keys(n).filter(r=>r.startsWith("SI-"));e.forEach(r=>{if(i.length>0){const o=i[Math.floor(Math.random()*i.length)];s.regrets.push({id:`regret_${s.id}_to_${r.id}`,name:`${r.name}への${n[o].name}`,points:3,categoryKey:"SI"});const a=i[Math.floor(Math.random()*i.length)];r.regrets.push({id:`regret_${r.id}_to_${s.id}`,name:`${s.name}への${n[a].name}`,points:3,categoryKey:"SI"})}})}function Hf(s){Fc=s,console.log("Character Manager initialized.")}function Bt(s=!1){return Dt}function pt(s){return Dt.find(e=>e.id===s)}function Gf(s,e,t){const n=Fc[s];if(!n){console.error(`テンプレートIDが見つかりません: ${s}`);return}const i=n.category==="レギオン"?5:1;let r="";for(let o=0;o<i;o++){const a=zw(s,e);a&&(a.area=t||a.initialArea||(e==="pc"?"煉獄":"奈落"),e==="pc"&&Vf(a),es(a),a.actionValue=a.maxActionValue,sa(a),Dt.push(a),r=a.name)}r&&console.log(`${r} (${e}) を${i>1?i+"体":""}戦場に追加しました。`),Uc(),Si()}function Bc(s,e){const t=zf(s,e);return t.area=s.area||s.initialArea||(e==="pc"?"煉獄":"奈落"),e==="pc"&&(!t.regrets||t.regrets.length===0)&&Vf(t),es(t),t.actionValue=t.maxActionValue,sa(t),Dt.push(t),console.log(`${t.name} (imported ${e}) を戦場に追加しました。`),Si(),t}function Wf(s){const e=pt(s);if(e&&e.stackCount>1)return e.stackCount--,Si(),!0;const t=Dt.findIndex(n=>n.id===s);return t!==-1?(Dt.splice(t,1),Si(),!0):!1}function oc(s,e){const t=Dt.findIndex(c=>c.id===s);if(t===-1)return;const n=Dt[t],i=Dt.filter(c=>c.type===n.type),r=i.findIndex(c=>c.id===s);let o;if(e==="left"){if(r===0)return;o=r-1}else{if(r===i.length-1)return;o=r+1}Dt.splice(t,1);const a=i[o].id,l=Dt.findIndex(c=>c.id===a);e==="left"?Dt.splice(l,0,n):Dt.splice(l+1,0,n)}function Wt(s,e){const t=pt(s);t?(e.name&&(e.displayName=e.name,delete e.name),Object.assign(t,e),(t.isDestroyed||t.hasWithdrawn)&&(t.actionValue=0,t.isDestroyed&&t.partsStatus&&Object.values(t.partsStatus).flat().forEach(n=>n.damaged=!0)),es(t),Uc()):console.warn(`更新対象のキャラクターが見つかりません: ${s}`)}function Oc(s,e,t=1){const n=pt(s);if(n){if(n.category==="レギオン")return n.stackCount-=t,n.stackCount<=0?(n.isDestroyed=!0,n.actionValue=0,!0):!1;for(const i in n.partsStatus){const r=n.partsStatus[i].find(o=>o.id===e);if(r)return r.damaged?void 0:(r.damaged=!0,es(n),!1)}}}function $f(s,e){const t=pt(s);if(!t)return;const n=t.regrets.find(o=>o.id===e);n&&n.points<4&&n.points++,t.regrets&&t.regrets.length>0&&t.regrets.every(o=>o.points>=4)&&(t.isMentallyBroken=!0,console.log(`★★★ ${t.name} は精神崩壊しました。 ★★★`))}function Xf(){Dt.forEach(s=>{if(s.isDestroyed||s.hasWithdrawn){s.actionValue=0;return}s.actionValue+=s.maxActionValue,s.hasActedThisCount=!1,s.usedManeuvers.clear()}),Uc(),console.log("新しいターンが開始され、全キャラクターの行動値が更新されました。")}function qf(s){s.forEach(e=>{const t=pt(e.characterId);t&&(t.area=e.targetArea)}),console.log("予約された移動を一括で適用しました。")}function jf(s,e){const t=pt(s);if(!t)return null;const n={id:t.id,sheetId:t.sheetId,img:t.img,type:t.type,actionValue:t.actionValue,regrets:t.regrets,madnessPoints:t.madnessPoints,isMentallyBroken:t.isMentallyBroken,isDestroyed:!1,hasWithdrawn:!1,hasActedThisCount:t.hasActedThisCount};Object.keys(t).forEach(r=>delete t[r]),Object.assign(t,e),t.area=t.initialArea||(t.type==="pc"?"煉獄":"奈落"),Object.assign(t,n),t.partsStatus={};let i=0;if(t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(r=>{Array.isArray(t.parts[r])&&(t.partsStatus[r]=t.parts[r].map(o=>({id:`${t.id}_part_${i++}`,name:o,damaged:!1})))}),t.type==="pc"&&t.treasure)for(const r in t.partsStatus){const o=t.partsStatus[r].find(a=>a.name===t.treasure);if(o){o.id=`${t.id}_part_treasure`;break}}return es(t),t.actionValue=Math.min(t.actionValue,t.maxActionValue),sa(t),console.log(`キャラクター「${t.name}」が保管所のデータで更新されました。`),t}function kc(){Dt=[],kf=1,console.log("All characters cleared.")}function Wo(s,e){const t=pt(s);t&&(t.activeBuffs||(t.activeBuffs=[]),t.activeBuffs.push(e))}function $o(s,e){const t=pt(s);t&&t.activeBuffs&&(t.activeBuffs=t.activeBuffs.filter(n=>n.duration!==e))}
