(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Ep="1.6.1";let gr={},Er={},hh={},fh={},ph={},mh={},gh={},vh={},_h={},yh={},xh={},Mh={},Sh={};async function wp(){try{const e=["positions.json","classes.json","basic_parts.json","armed_parts.json","mutant_parts.json","custom_parts.json","tegoma_skills.json","tegoma_parts.json","tegoma_parts0.json"].map(p=>fetch(`/data/maneuvers/${p}`).then(v=>v.json())),[t,n,i,r,o,a,l,c,d,u,h,...f]=await Promise.all([fetch("/data/hint.json"),fetch("/data/regret.json"),fetch("/data/takaramono.json"),fetch("/data/memory_fragments.json"),fetch("/data/undead.json"),fetch("/data/core-data.json"),fetch("/data/effects_db.json"),fetch("/data/awakening_locations.json"),fetch("/data/posthumous_history.json"),fetch("/data/memory_fragments_alpha.json"),fetch("/data/memory_fragments_beta.json"),...e]);gr=f.reduce((p,v)=>({...p,...v}),{}),[Sh,hh,fh,ph,xh,Mh,yh,vh,_h,mh,gh]=await Promise.all([t.json(),n.json(),i.json(),r.json(),o.json(),a.json(),l.json(),c.json(),d.json(),u.json(),h.json()]),Er={};for(const p in gr){const v=gr[p];v&&v.name&&(Er[v.name]={id:p,...v})}console.log("Data handler initialized successfully with new datasets!")}catch(s){throw console.error("Error in data handler initialization:",s),s}}function Uo(){return gr}function Ft(s){return Er[s]}function _c(){return hh}function yc(){return fh}function Zo(){return ph}function bh(){return mh}function Eh(){return gh}function wh(){return vh}function Th(){return _h}function qs(){return xh}function Or(){return Mh}function Tp(s){return yh[s]}function xc(){return Sh}function Ap(){const s=qs(),e=new Set;for(const t in s)s[t]&&s[t].img&&e.add(s[t].img);return[...e]}function Cp(s){if(!s||!s.name){console.warn("追加しようとしたマニューバデータが無効です:",s);return}if(Er[s.name])return;const e=`CSTM_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;s.id=e,gr[e]=s,Er[s.name]=s,console.log(`カスタムマニューバ「${s.name}」を動的に追加しました。`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="180",Rp=0,iu=1,Ip=2,Ah=1,Pp=2,ni=3,Ei=0,rn=1,si=2,Si=0,Cs=1,su=2,ru=3,ou=4,Lp=5,Hi=100,Dp=101,Np=102,Fp=103,Up=104,Bp=200,Op=201,kp=202,zp=203,fl=204,pl=205,Vp=206,Hp=207,Gp=208,Wp=209,$p=210,Xp=211,qp=212,jp=213,Yp=214,ml=0,gl=1,vl=2,Ns=3,_l=4,yl=5,xl=6,Ml=7,Jo=0,Kp=1,Zp=2,bi=0,Jp=1,Qp=2,em=3,tm=4,nm=5,im=6,sm=7,au="attached",rm="detached",Ch=300,Fs=301,Us=302,Bo=303,Sl=304,Qo=306,wr=1e3,ri=1001,bl=1002,un=1003,om=1004,$r=1005,kn=1006,fa=1007,$i=1008,Gn=1009,Rh=1010,Ih=1011,Tr=1012,Sc=1013,Ji=1014,zn=1015,kr=1016,bc=1017,Ec=1018,Ar=1020,Ph=35902,Lh=35899,Dh=1021,Nh=1022,yn=1023,Cr=1026,Rr=1027,Fh=1028,wc=1029,Uh=1030,Tc=1031,Ac=1033,Ro=33776,Io=33777,Po=33778,Lo=33779,El=35840,wl=35841,Tl=35842,Al=35843,Cl=36196,Rl=37492,Il=37496,Pl=37808,Ll=37809,Dl=37810,Nl=37811,Fl=37812,Ul=37813,Bl=37814,Ol=37815,kl=37816,zl=37817,Vl=37818,Hl=37819,Gl=37820,Wl=37821,$l=36492,Xl=36494,ql=36495,jl=36283,Yl=36284,Kl=36285,Zl=36286,Oo=2300,Jl=2301,pa=2302,lu=2400,cu=2401,uu=2402,am=2500,lm=3200,cm=3201,ea=0,um=1,_i="",ht="srgb",Bs="srgb-linear",ko="linear",at="srgb",ss=7680,du=519,dm=512,hm=513,fm=514,Bh=515,pm=516,mm=517,gm=518,vm=519,hu=35044,fu="300 es",Vn=2e3,zo=2001;class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const vr=Math.PI/180,Os=180/Math.PI;function Ti(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Cc(s,e){return(s%e+e)%e}function _m(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ym(s,e,t){return s!==e?(t-s)/(e-s):0}function _r(s,e,t){return(1-t)*s+t*e}function xm(s,e,t,n){return _r(s,e,1-Math.exp(-t*n))}function Mm(s,e=1){return e-Math.abs(Cc(s,e*2)-e)}function Sm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function bm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Em(s,e){return s+Math.floor(Math.random()*(e-s+1))}function wm(s,e){return s+Math.random()*(e-s)}function Tm(s){return s*(.5-Math.random())}function Am(s){s!==void 0&&(pu=s);let e=pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cm(s){return s*vr}function Rm(s){return s*Os}function Im(s){return(s&s-1)===0&&s!==0}function Pm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Lm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dm(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*d,l*u,l*h,a*c);break;case"YZY":s.set(l*h,a*d,l*u,a*c);break;case"ZXZ":s.set(l*u,l*h,a*d,a*c);break;case"XZX":s.set(a*d,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*d,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ss(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:vr,RAD2DEG:Os,generateUUID:Ti,clamp:je,euclideanModulo:Cc,mapLinear:_m,inverseLerp:ym,lerp:_r,damp:xm,pingpong:Mm,smoothstep:Sm,smootherstep:bm,randInt:Em,randFloat:wm,randFloatSpread:Tm,seededRandom:Am,degToRad:Cm,radToDeg:Rm,isPowerOfTwo:Im,ceilPowerOfTwo:Pm,floorPowerOfTwo:Lm,setQuaternionFromProperEuler:Dm,normalize:jt,denormalize:Ss};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let en=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],d=n[i+2],u=n[i+3];const h=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==h||c!==f||d!==p){let m=1-a;const g=l*h+c*f+d*p+u*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,g*_);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const y=a*_;if(l=l*m+h*y,c=c*m+f*y,d=d*m+p*y,u=u*m+v*y,m===1-a){const M=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=M,c*=M,d*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],d=n[i+3],u=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+d*u+l*f-c*h,e[t+1]=l*p+d*h+c*u-a*f,e[t+2]=c*p+d*f+a*h-l*u,e[t+3]=d*p-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(i/2),u=a(r/2),h=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"YXZ":this._x=h*d*u+c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"ZXY":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u-h*f*p;break;case"ZYX":this._x=h*d*u-c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u+h*f*p;break;case"YZX":this._x=h*d*u+c*f*p,this._y=c*f*u+h*d*p,this._z=c*d*p-h*f*u,this._w=c*d*u-h*f*p;break;case"XZY":this._x=h*d*u-c*f*p,this._y=c*f*u-h*d*p,this._z=c*d*p+h*f*u,this._w=c*d*u+h*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+i*c-r*l,this._y=i*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-i*a,this._w=o*d-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),d=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=i+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new U,mu=new en;class Ve{constructor(e,t,n,i,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],_=i[1],x=i[4],y=i[7],M=i[2],E=i[5],A=i[8];return r[0]=o*v+a*_+l*M,r[3]=o*m+a*x+l*E,r[6]=o*g+a*y+l*A,r[1]=c*v+d*_+u*M,r[4]=c*m+d*x+u*E,r[7]=c*g+d*y+u*A,r[2]=h*v+f*_+p*M,r[5]=h*m+f*x+p*E,r[8]=h*g+f*y+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,p=t*u+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(i*c-d*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(d*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Ve;function Oh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nm(){const s=Ir("canvas");return s.style.display="block",s}const gu={};function Pr(s){s in gu||(gu[s]=!0,console.warn(s))}function Fm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const vu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_u=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Um(){const s={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===at&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_i?ko:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Bs]:{primaries:e,whitePoint:n,transfer:ko,toXYZ:vu,fromXYZ:_u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ht},outputColorSpaceConfig:{drawingBufferColorSpace:ht}},[ht]:{primaries:e,whitePoint:n,transfer:at,toXYZ:vu,fromXYZ:_u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ht}}}),s}const Xe=Um();function ai(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let rs;class Bm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=Ir("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ai(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ai(t[n]/255)*255):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Om=0;class Rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(va(i[o].image)):r.push(va(i[o]))}else r=va(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let km=0;const _a=new U;class Wt extends js{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,n=ri,i=ri,r=kn,o=$i,a=yn,l=Gn,c=Wt.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:km++}),this.uuid=Ti(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_a).x}get height(){return this.source.getSize(_a).y}get depth(){return this.source.getSize(_a).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ch)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wr:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wr:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ch;Wt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,M=(g+1)/2,E=(d+h)/4,A=(u+v)/4,P=(p+m)/4;return x>y&&x>M?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=A/n):y>M?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=P/i):M<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(M),n=A/r,i=P/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-v)/_,this.z=(h-d)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zm extends js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Wt(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends zm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kh extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vm extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=un,this.minFilter=un,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),qr.subVectors(this.max,nr),os.subVectors(e.a,nr),as.subVectors(e.b,nr),ls.subVectors(e.c,nr),ui.subVectors(as,os),di.subVectors(ls,as),Ii.subVectors(os,ls);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!ya(t,os,as,ls,qr)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,os,as,ls,qr))?!1:(jr.crossVectors(ui,di),t=[jr.x,jr.y,jr.z],ya(t,os,as,ls,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $n=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Xr=new ns,os=new U,as=new U,ls=new U,ui=new U,di=new U,Ii=new U,nr=new U,qr=new U,jr=new U,Pi=new U;function ya(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Pi.fromArray(s,r);const a=i.x*Math.abs(Pi.x)+i.y*Math.abs(Pi.y)+i.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),d=n.dot(Pi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Hm=new ns,ir=new U,xa=new U;class Ys{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);const t=ir.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ir,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(xa)),this.expandByPoint(ir.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new U,Ma=new U,Yr=new U,hi=new U,Sa=new U,Kr=new U,ba=new U;let Ic=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ma.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Ma);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Yr),a=hi.dot(this.direction),l=-hi.dot(Yr),c=hi.lengthSq(),d=Math.abs(1-o*o);let u,h,f,p;if(d>0)if(u=o*l-a,h=o*a-l,p=r*d,u>=0)if(h>=-p)if(h<=p){const v=1/d;u*=v,h*=v,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ma).addScaledVector(Yr,h),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),i=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,i,r){Sa.subVectors(t,e),Kr.subVectors(n,e),ba.crossVectors(Sa,Kr);let o=this.direction.dot(ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,e);const l=a*this.direction.dot(Kr.crossVectors(hi,Kr));if(l<0)return null;const c=a*this.direction.dot(Sa.cross(hi));if(c<0||l+c>o)return null;const d=-a*hi.dot(ba);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ce{constructor(e,t,n,i,r,o,a,l,c,d,u,h,f,p,v,m){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,d,u,h,f,p,v,m)}set(e,t,n,i,r,o,a,l,c,d,u,h,f,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=d,g[10]=u,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/cs.setFromMatrixColumn(e,0).length(),r=1/cs.setFromMatrixColumn(e,1).length(),o=1/cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const h=o*d,f=o*u,p=a*d,v=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,p=c*d,v=c*u;t[0]=h+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-p,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,p=c*d,v=c*u;t[0]=h-v*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*d,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*d,f=o*u,p=a*d,v=a*u;t[0]=l*d,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*d,t[4]=v-h*u,t[8]=p*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+p,t[10]=h-v*u}else if(e.order==="XZY"){const h=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=o*d,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gm,e,Wm)}lookAt(e,t,n){const i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),fi.crossVectors(n,ln),fi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),fi.crossVectors(n,ln)),fi.normalize(),Zr.crossVectors(ln,fi),i[0]=fi.x,i[4]=Zr.x,i[8]=ln.x,i[1]=fi.y,i[5]=Zr.y,i[9]=ln.y,i[2]=fi.z,i[6]=Zr.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],_=n[3],x=n[7],y=n[11],M=n[15],E=i[0],A=i[4],P=i[8],T=i[12],S=i[1],R=i[5],O=i[9],L=i[13],k=i[2],F=i[6],N=i[10],X=i[14],z=i[3],q=i[7],Q=i[11],oe=i[15];return r[0]=o*E+a*S+l*k+c*z,r[4]=o*A+a*R+l*F+c*q,r[8]=o*P+a*O+l*N+c*Q,r[12]=o*T+a*L+l*X+c*oe,r[1]=d*E+u*S+h*k+f*z,r[5]=d*A+u*R+h*F+f*q,r[9]=d*P+u*O+h*N+f*Q,r[13]=d*T+u*L+h*X+f*oe,r[2]=p*E+v*S+m*k+g*z,r[6]=p*A+v*R+m*F+g*q,r[10]=p*P+v*O+m*N+g*Q,r[14]=p*T+v*L+m*X+g*oe,r[3]=_*E+x*S+y*k+M*z,r[7]=_*A+x*R+y*F+M*q,r[11]=_*P+x*O+y*N+M*Q,r[15]=_*T+x*L+y*X+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15];return p*(+r*l*u-i*c*u-r*a*h+n*c*h+i*a*f-n*l*f)+v*(+t*l*f-t*c*h+r*o*h-i*o*f+i*c*d-r*l*d)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+g*(-i*a*d-t*l*u+t*a*h+i*o*u-n*o*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],_=u*m*c-v*h*c+v*l*f-a*m*f-u*l*g+a*h*g,x=p*h*c-d*m*c-p*l*f+o*m*f+d*l*g-o*h*g,y=d*v*c-p*u*c+p*a*f-o*v*f-d*a*g+o*u*g,M=p*u*l-d*v*l-p*a*h+o*v*h+d*a*m-o*u*m,E=t*_+n*x+i*y+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(v*h*r-u*m*r-v*i*f+n*m*f+u*i*g-n*h*g)*A,e[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*g+n*l*g)*A,e[3]=(u*l*r-a*h*r-u*i*c+n*h*c+a*i*f-n*l*f)*A,e[4]=x*A,e[5]=(d*m*r-p*h*r+p*i*f-t*m*f-d*i*g+t*h*g)*A,e[6]=(p*l*r-o*m*r-p*i*c+t*m*c+o*i*g-t*l*g)*A,e[7]=(o*h*r-d*l*r+d*i*c-t*h*c-o*i*f+t*l*f)*A,e[8]=y*A,e[9]=(p*u*r-d*v*r-p*n*f+t*v*f+d*n*g-t*u*g)*A,e[10]=(o*v*r-p*a*r+p*n*c-t*v*c-o*n*g+t*a*g)*A,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=M*A,e[13]=(d*v*i-p*u*i+p*n*h-t*v*h-d*n*m+t*u*m)*A,e[14]=(p*a*i-o*v*i-p*n*l+t*v*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-d*a*i+d*n*l-t*u*l-o*n*h+t*a*h)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,d*a+n,d*l-i*o,0,c*l-i*a,d*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,p=r*u,v=o*d,m=o*u,g=a*u,_=l*c,x=l*d,y=l*u,M=n.x,E=n.y,A=n.z;return i[0]=(1-(v+g))*M,i[1]=(f+y)*M,i[2]=(p-x)*M,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(h+g))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(p+x)*A,i[9]=(m-_)*A,i[10]=(1-(h+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=cs.set(i[0],i[1],i[2]).length();const o=cs.set(i[4],i[5],i[6]).length(),a=cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Sn.copy(this);const c=1/r,d=1/o,u=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=d,Sn.elements[5]*=d,Sn.elements[6]*=d,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vn,l=!1){const c=this.elements,d=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===Vn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===zo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vn,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===Vn)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===zo)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cs=new U,Sn=new Ce,Gm=new U(0,0,0),Wm=new U(1,1,1),fi=new U,Zr=new U,ln=new U,yu=new Ce,xu=new en;class Nt{constructor(e=0,t=0,n=0,i=Nt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],d=i[9],u=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nt.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $m=0;const Mu=new U,us=new en,qn=new Ce,Jr=new U,sr=new U,Xm=new U,qm=new en,Su=new U(1,0,0),bu=new U(0,1,0),Eu=new U(0,0,1),wu={type:"added"},jm={type:"removed"},ds={type:"childadded",child:null},Ea={type:"childremoved",child:null};class yt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$m++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new U,t=new Nt,n=new en,i=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Ve}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,t){return us.setFromAxisAngle(e,t),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(bu,e)}rotateZ(e){return this.rotateOnAxis(Eu,e)}translateOnAxis(e,t){return Mu.copy(e).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(bu,e)}translateZ(e){return this.translateOnAxis(Eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jr.copy(e):Jr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(sr,Jr,this.up):qn.lookAt(Jr,sr,this.up),this.quaternion.setFromRotationMatrix(qn),i&&(qn.extractRotation(i.matrixWorld),us.setFromRotationMatrix(qn),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wu),ds.child=e,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jm),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wu),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,e,Xm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,qm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}yt.DEFAULT_UP=new U(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,jn=new U,wa=new U,Yn=new U,hs=new U,fs=new U,Tu=new U,Ta=new U,Aa=new U,Ca=new U,Ra=new Je,Ia=new Je,Pa=new Je;class An{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),bn.subVectors(e,t),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){bn.subVectors(i,t),jn.subVectors(n,t),wa.subVectors(e,t);const o=bn.dot(bn),a=bn.dot(jn),l=bn.dot(wa),c=jn.dot(jn),d=jn.dot(wa),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const h=1/u,f=(c*l-a*d)*h,p=(o*d-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(o,Yn.y),l.addScaledVector(a,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Ra.setScalar(0),Ia.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ia.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Ra,r.x),o.addScaledVector(Ia,r.y),o.addScaledVector(Pa,r.z),o}static isFrontFacing(e,t,n,i){return bn.subVectors(n,t),jn.subVectors(e,t),bn.cross(jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),bn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return An.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;hs.subVectors(i,n),fs.subVectors(r,n),Ta.subVectors(e,n);const l=hs.dot(Ta),c=fs.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Aa.subVectors(e,i);const d=hs.dot(Aa),u=fs.dot(Aa);if(d>=0&&u<=d)return t.copy(i);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(hs,o);Ca.subVectors(e,r);const f=hs.dot(Ca),p=fs.dot(Ca);if(p>=0&&f<=p)return t.copy(r);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(fs,a);const m=d*p-f*u;if(m<=0&&u-d>=0&&f-p>=0)return Tu.subVectors(r,i),a=(u-d)/(u-d+(f-p)),t.copy(i).addScaledVector(Tu,a);const g=1/(m+v+h);return o=v*g,a=h*g,t.copy(n).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function La(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Cc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=La(o,r,e+1/3),this.g=La(o,r,e),this.b=La(o,r,e-1/3)}return Xe.colorSpaceToWorking(this,i),this}setStyle(e,t=ht){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ht){const n=Vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ht){return Xe.workingToColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=ht){Xe.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Qr);const n=_r(pi.h,Qr.h,t),i=_r(pi.s,Qr.s,t),r=_r(pi.l,Qr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Oe;Oe.NAMES=Vh;let Ym=0,Ai=class extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=Cs,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=pl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==pl&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class Hh extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,eo=new Ke;let Km=0;class Hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Km++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}}class Pc extends Hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gh extends Hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class tn extends Hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zm=0;const fn=new Ce,Da=new yt,ps=new U,cn=new ns,rr=new ns,kt=new U;class In extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?Gh:Pc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new tn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(cn.min,rr.min),cn.expandByPoint(kt),kt.addVectors(cn.max,rr.max),cn.expandByPoint(kt)):(cn.expandByPoint(rr.min),cn.expandByPoint(rr.max))}cn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)kt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),kt.add(ps)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new U,l[P]=new U;const c=new U,d=new U,u=new U,h=new Ke,f=new Ke,p=new Ke,v=new U,m=new U;function g(P,T,S){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,S),d.sub(c),u.sub(c),f.sub(h),p.sub(h);const R=1/(f.x*p.y-p.x*f.y);isFinite(R)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-p.x).multiplyScalar(R),a[P].add(v),a[T].add(v),a[S].add(v),l[P].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,T=_.length;P<T;++P){const S=_[P],R=S.start,O=S.count;for(let L=R,k=R+O;L<k;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const x=new U,y=new U,M=new U,E=new U;function A(P){M.fromBufferAttribute(i,P),E.copy(M);const T=a[P];x.copy(T),x.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(E,T);const R=y.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,R)}for(let P=0,T=_.length;P<T;++P){const S=_[P],R=S.start,O=S.count;for(let L=R,k=R+O;L<k;L+=3)A(e.getX(L+0)),A(e.getX(L+1)),A(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,d=new U,u=new U;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(i,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d);let f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*d;for(let g=0;g<d;g++)h[p++]=c[f++]}return new Hn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(i[l]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new Ce,Li=new Ic,to=new Ys,Cu=new U,no=new U,io=new U,so=new U,Na=new U,ro=new U,Ru=new U,oo=new U;class Cn extends yt{constructor(e=new In,t=new Hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=a[l],u=r[l];d!==0&&(Na.fromBufferAttribute(u,e),o?ro.addScaledVector(Na,d):ro.addScaledVector(Na.sub(t),d))}t.add(ro)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(to.containsPoint(Li.origin)===!1&&(Li.intersectSphere(to,Cu)===null||Li.origin.distanceToSquared(Cu)>(e.far-e.near)**2))&&(Au.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Au),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=x;y<M;y+=3){const E=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);i=ao(this,g,e,n,c,d,u,E,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);i=ao(this,o,e,n,c,d,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const m=h[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=_,M=x;y<M;y+=3){const E=y,A=y+1,P=y+2;i=ao(this,g,e,n,c,d,u,E,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){const _=m,x=m+1,y=m+2;i=ao(this,o,e,n,c,d,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jm(s,e,t,n,i,r,o,a){let l;if(e.side===rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Ei,a),l===null)return null;oo.copy(a),oo.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:s}}function ao(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,no),s.getVertexPosition(l,io),s.getVertexPosition(c,so);const d=Jm(s,e,t,n,no,io,so,Ru);if(d){const u=new U;An.getBarycoord(Ru,no,io,so,u),i&&(d.uv=An.getInterpolatedAttribute(i,a,l,c,u,new Ke)),r&&(d.uv1=An.getInterpolatedAttribute(r,a,l,c,u,new Ke)),o&&(d.normal=An.getInterpolatedAttribute(o,a,l,c,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new U,materialIndex:0};An.getNormal(no,io,so,h.normal),d.face=h,d.barycoord=u}return d}class zr extends In{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],d=[],u=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new tn(c,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(u,2));function p(v,m,g,_,x,y,M,E,A,P,T){const S=y/A,R=M/P,O=y/2,L=M/2,k=E/2,F=A+1,N=P+1;let X=0,z=0;const q=new U;for(let Q=0;Q<N;Q++){const oe=Q*R-L;for(let te=0;te<F;te++){const De=te*S-O;q[v]=De*_,q[m]=oe*x,q[g]=k,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[g]=E>0?1:-1,d.push(q.x,q.y,q.z),u.push(te/A),u.push(1-Q/P),X+=1}}for(let Q=0;Q<P;Q++)for(let oe=0;oe<A;oe++){const te=h+oe+F*Q,De=h+oe+F*(Q+1),et=h+(oe+1)+F*(Q+1),He=h+(oe+1)+F*Q;l.push(te,De,He),l.push(De,et,He),z+=6}a.addGroup(f,z,T),f+=z,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(s){const e={};for(let t=0;t<s.length;t++){const n=ks(s[t]);for(const i in n)e[i]=n[i]}return e}function Qm(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const eg={clone:ks,merge:Yt};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=Qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new U,Iu=new Ke,Pu=new Ke;class Zt extends $h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Pu),t.subVectors(Pu,Iu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ms=-90,gs=1;class ig extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Zt(ms,gs,e,t);i.layers=this.layers,this.add(i);const r=new Zt(ms,gs,e,t);r.layers=this.layers,this.add(r);const o=new Zt(ms,gs,e,t);o.layers=this.layers,this.add(o);const a=new Zt(ms,gs,e,t);a.layers=this.layers,this.add(a);const l=new Zt(ms,gs,e,t);l.layers=this.layers,this.add(l);const c=new Zt(ms,gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Xh extends Wt{constructor(e=[],t=Fs,n,i,r,o,a,l,c,d){super(e,t,n,i,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zr(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Si});r.uniforms.tEquirect.value=t;const o=new Cn(i,r),a=t.minFilter;return t.minFilter===$i&&(t.minFilter=kn),new ig(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class bs extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rg={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class og extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Lu=new U,Du=new Je,Nu=new Je,ag=new U,Fu=new Ce,lo=new U,Ua=new Ys,Uu=new Ce,Ba=new Ic;class lg extends Cn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ns),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ys),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1&&(Uu.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(Uu),!(this.boundingBox!==null&&Ba.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ba)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===rm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Du.fromBufferAttribute(i.attributes.skinIndex,e),Nu.fromBufferAttribute(i.attributes.skinWeight,e),Lu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nu.getComponent(r);if(o!==0){const a=Du.getComponent(r);Fu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ag.copy(Lu).applyMatrix4(Fu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Ql extends yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cg extends Wt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=un,d=un,u,h){super(null,o,a,l,c,d,i,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bu=new Ce,ug=new Ce;class Lc{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:ug;Bu.multiplyMatrices(a,t[r]),Bu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cg(t,e,e,yn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ql),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const Oa=new U,dg=new U,hg=new Ve;let zi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Oa.subVectors(n,t).cross(dg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||hg.getNormalMatrix(e),i=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Di=new Ys,fg=new Ke(.5,.5),co=new U;class Dc{constructor(e=new zi,t=new zi,n=new zi,i=new zi,r=new zi,o=new zi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],d=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],_=r[12],x=r[13],y=r[14],M=r[15];if(i[0].setComponents(c-o,f-d,g-p,M-_).normalize(),i[1].setComponents(c+o,f+d,g+p,M+_).normalize(),i[2].setComponents(c+a,f+u,g+v,M+x).normalize(),i[3].setComponents(c-a,f-u,g-v,M-x).normalize(),n)i[4].setComponents(l,h,m,y).normalize(),i[5].setComponents(c-l,f-h,g-m,M-y).normalize();else if(i[4].setComponents(c-l,f-h,g-m,M-y).normalize(),t===Vn)i[5].setComponents(c+l,f+h,g+m,M+y).normalize();else if(t===zo)i[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=fg.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(co.x=i.normal.x>0?e.max.x:e.min.x,co.y=i.normal.y>0?e.max.y:e.min.y,co.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qh extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vo=new U,Ho=new U,Ou=new Ce,or=new Ic,uo=new Ys,ka=new U,ku=new U;class pg extends yt{constructor(e=new In,t=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Vo.fromBufferAttribute(t,i-1),Ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Vo.distanceTo(Ho);e.setAttribute("lineDistance",new tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=r,e.ray.intersectsSphere(uo)===!1)return;Ou.copy(i).invert(),or.copy(e.ray).applyMatrix4(Ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){const g=d.getX(v),_=d.getX(v+1),x=ho(this,e,or,l,g,_,v);x&&t.push(x)}if(this.isLineLoop){const v=d.getX(p-1),m=d.getX(f),g=ho(this,e,or,l,v,m,p-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,m=p-1;v<m;v+=c){const g=ho(this,e,or,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=ho(this,e,or,l,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ho(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Vo.fromBufferAttribute(a,i),Ho.fromBufferAttribute(a,r),t.distanceSqToSegment(Vo,Ho,ka,ku)>n)return;ka.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ka);if(!(c<e.near||c>e.far))return{distance:c,point:ku.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}class jh extends Wt{constructor(e,t,n=Ji,i,r,o,a=un,l=un,c,d=Cr,u=1){if(d!==Cr&&d!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,i,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Yh extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class mg{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const d=n[i],h=n[i+1]-d,f=(o-d)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ke:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],r=[],o=[],a=new U,l=new Ce;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const d=Math.abs(i[0].x),u=Math.abs(i[0].y),h=Math.abs(i[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function gg(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Kh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Mg(s,e,r,t)),s.length>80*t){a=1/0,l=1/0;let d=-1/0,u=-1/0;for(let h=t;h<i;h+=t){const f=s[h],p=s[h+1];f<a&&(a=f),p<l&&(l=p),f>d&&(d=f),p>u&&(u=p)}c=Math.max(d-a,u-l),c=c!==0?32767/c:0}return Lr(r,o,t,a,l,c,0),o}function Kh(s,e,t,n,i){let r;if(i===Lg(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=zu(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=zu(o/n|0,s[o],s[o+1],r);return r&&zs(r,r.next)&&(Nr(r),r=r.next),r}function es(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(zs(t,t.next)||St(t.prev,t,t.next)===0)){if(Nr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Lr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Tg(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?_g(s,n,i,r):vg(s)){e.push(l.i,s.i,c.i),Nr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=yg(es(s),e),Lr(s,e,t,n,i,r,2)):o===2&&xg(s,e,t,n,i,r):Lr(es(s),e,t,n,i,r,1);break}}}function vg(s){const e=s.prev,t=s,n=s.next;if(St(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(i,r,o),u=Math.min(a,l,c),h=Math.max(i,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==e;){if(p.x>=d&&p.x<=h&&p.y>=u&&p.y<=f&&fr(i,a,r,l,o,c,p.x,p.y)&&St(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function _g(s,e,t,n){const i=s.prev,r=s,o=s.next;if(St(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,d=i.y,u=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(d,u,h),v=Math.max(a,l,c),m=Math.max(d,u,h),g=ec(f,p,e,t,n),_=ec(v,m,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=g&&y&&y.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&fr(a,d,l,u,c,h,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&fr(a,d,l,u,c,h,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=m&&x!==i&&x!==o&&fr(a,d,l,u,c,h,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==i&&y!==o&&fr(a,d,l,u,c,h,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function yg(s,e){let t=s;do{const n=t.prev,i=t.next.next;!zs(n,i)&&Jh(n,t,t.next,i)&&Dr(n,i)&&Dr(i,n)&&(e.push(n.i,t.i,i.i),Nr(t),Nr(t.next),t=s=i),t=t.next}while(t!==s);return es(t)}function xg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rg(o,a)){let l=Qh(o,a);o=es(o,o.next),l=es(l,l.next),Lr(o,e,t,n,i,r,0),Lr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Mg(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Kh(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Cg(c))}i.sort(Sg);for(let r=0;r<i.length;r++)t=bg(i[r],t);return t}function Sg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function bg(s,e){const t=Eg(s,e);if(!t)return e;const n=Qh(t,s);return es(n,n.next),es(t,t.next)}function Eg(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(zs(s,t))return t;do{if(zs(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Zh(i<c?n:r,i,l,c,i<c?r:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);Dr(t,s)&&(u<d||u===d&&(t.x>o.x||t.x===o.x&&wg(o,t)))&&(o=t,d=u)}t=t.next}while(t!==a);return o}function wg(s,e){return St(s.prev,s,e.prev)<0&&St(e.next,s,s.next)<0}function Tg(s,e,t,n){let i=s;do i.z===0&&(i.z=ec(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Ag(i)}function Ag(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function ec(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Cg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Zh(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function fr(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Zh(s,e,t,n,i,r,o,a)}function Rg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Ig(s,e)&&(Dr(s,e)&&Dr(e,s)&&Pg(s,e)&&(St(s.prev,s,e.prev)||St(s,e.prev,e))||zs(s,e)&&St(s.prev,s,s.next)>0&&St(e.prev,e,e.next)>0)}function St(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function zs(s,e){return s.x===e.x&&s.y===e.y}function Jh(s,e,t,n){const i=po(St(s,e,t)),r=po(St(s,e,n)),o=po(St(t,n,s)),a=po(St(t,n,e));return!!(i!==r&&o!==a||i===0&&fo(s,t,e)||r===0&&fo(s,n,e)||o===0&&fo(t,s,n)||a===0&&fo(t,e,n))}function fo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function po(s){return s>0?1:s<0?-1:0}function Ig(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jh(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Dr(s,e){return St(s.prev,s,s.next)<0?St(s,e,s.next)>=0&&St(s,s.prev,e)>=0:St(s,e,s.prev)<0||St(s,s.next,e)<0}function Pg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Qh(s,e){const t=tc(s.i,s.x,s.y),n=tc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function zu(s,e,t,n){const i=tc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Nr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function tc(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Lg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Dg{static triangulate(e,t,n=2){return gg(e,t,n)}}class Nc{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Nc.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Vu(e),Hu(n,e);let o=e.length;t.forEach(Vu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Hu(n,t[l]);const a=Dg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Vu(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Hu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ta extends In{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,d=l+1,u=e/a,h=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<d;g++){const _=g*h-o;for(let x=0;x<c;x++){const y=x*u-r;p.push(y,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,y=_+c*(g+1),M=_+1+c*(g+1),E=_+1+c*g;f.push(x,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute("position",new tn(p,3)),this.setAttribute("normal",new tn(v,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ng extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mo extends Ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Oe(16777215),this.specular=new Oe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fg extends Ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ug extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bg extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function go(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Og(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Gu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function ef(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class na{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zg extends na{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case cu:r=e,a=2*t-n;break;case uu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:o=e,l=2*n-t;break;case uu:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,g=-h*m+2*h*v-h*p,_=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*p+1,x=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let M=0;M!==a;++M)r[M]=g*o[d+M]+_*o[c+M]+x*o[l+M]+y*o[u+M];return r}}class Vg extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(i-t),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}}class Hg extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Pn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Vg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oo:t=this.InterpolantFactoryMethodDiscrete;break;case Jl:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oo;case this.InterpolantFactoryMethodLinear:return Jl;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Og(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,h=u-n,f=u+n;for(let p=0;p!==n;++p){const v=t[u+p];if(v!==t[h+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Pn.prototype.ValueTypeName="";Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=Jl;class Ks extends Pn{constructor(e,t,n){super(e,t,n)}}Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=Oo;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;class tf extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}tf.prototype.ValueTypeName="color";class Fr extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}Fr.prototype.ValueTypeName="number";class Gg extends na{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let d=c+a;c!==d;c+=4)en.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Vs extends Pn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Gg(this.times,this.values,this.getValueSize(),e)}}Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Zs extends Pn{constructor(e,t,n){super(e,t,n)}}Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Oo;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Pn{constructor(e,t,n,i){super(e,t,n,i)}}Ur.prototype.ValueTypeName="vector";class Wg{constructor(e="",t=-1,n=[],i=am){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Xg(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const d=kg(l);l=Gu(l,1,d),c=Gu(c,1,d),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Fr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(r);if(d&&d.length>1){const u=d[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,f,p,v){if(f.length!==0){const m=[],g=[];ef(f,m,g,p),m.length!==0&&v.push(new u(h,m,g))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let v=0;v<h[p].morphTargets.length;v++)f[h[p].morphTargets[v]]=-1;for(const v in f){const m=[],g=[];for(let _=0;_!==h[p].morphTargets.length;++_){const x=h[p];m.push(x.time),g.push(x.morphTarget===v?1:0)}i.push(new Fr(".morphTargetInfluence["+v+"]",m,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(Ur,f+".position",h,"pos",i),n(Vs,f+".quaternion",h,"rot",i),n(Ur,f+".scale",h,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function $g(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fr;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return tf;case"quaternion":return Vs;case"bool":case"boolean":return Ks;case"string":return Zs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=$g(s.type);if(s.times===void 0){const t=[],n=[];ef(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const yr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class qg{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,r===!1&&i.onStart!==void 0&&i.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,i.onProgress!==void 0&&i.onProgress(d,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){const f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const jg=new qg;class ts{constructor(e){this.manager=e!==void 0?e:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ts.DEFAULT_MATERIAL_NAME="__DEFAULT";const Kn={};class Yg extends Error{constructor(e,t){super(e),this.response=t}}class Kg extends ts{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=yr.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Kn[e]!==void 0){Kn[e].push({onLoad:t,onProgress:n,onError:i});return}Kn[e]=[],Kn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Kn[e],u=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const m=new ReadableStream({start(g){_();function _(){u.read().then(({done:x,value:y})=>{if(x)g.close();else{v+=y.byteLength;const M=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let E=0,A=d.length;E<A;E++){const P=d[E];P.onProgress&&P.onProgress(M)}g.enqueue(y),_()}},x=>{g.error(x)})}}});return new Response(m)}else throw new Yg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{yr.add(`file:${e}`,c);const d=Kn[e];delete Kn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const d=Kn[e];if(d===void 0)throw this.manager.itemError(e),c;delete Kn[e];for(let u=0,h=d.length;u<h;u++){const f=d[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const vs=new WeakMap;class Zg extends ts{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=yr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=vs.get(o);u===void 0&&(u=[],vs.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=Ir("img");function l(){d(),t&&t(this);const u=vs.get(this)||[];for(let h=0;h<u.length;h++){const f=u[h];f.onLoad&&f.onLoad(this)}vs.delete(this),r.manager.itemEnd(e)}function c(u){d(),i&&i(u),yr.remove(`image:${e}`);const h=vs.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(u)}vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),yr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class nf extends ts{constructor(e){super(e)}load(e,t,n,i){const r=new Wt,o=new Zg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ia extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const za=new Ce,Wu=new U,$u=new U;class Fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),$u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($u),t.updateMatrixWorld(),za.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jg extends Fc{constructor(){super(new Zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qg extends ia{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xu=new Ce,ar=new U,Va=new U;class ev extends Fc{constructor(){super(new Zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(ar),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-ar.x,-ar.y,-ar.z),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,n.coordinateSystem,n.reversedDepth)}}class qu extends ia{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ev}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sf extends $h{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class tv extends Fc{constructor(){super(new sf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nc extends ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new tv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rf extends ia{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class nv{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class iv extends Zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uc="\\[\\]\\.:\\/",sv=new RegExp("["+Uc+"]","g"),Bc="[^"+Uc+"]",rv="[^"+Uc.replace("\\.","")+"]",ov=/((?:WC+[\/:])*)/.source.replace("WC",Bc),av=/(WCOD+)?/.source.replace("WCOD",rv),lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),uv=new RegExp("^"+ov+av+lv+cv+"$"),dv=["material","materials","bones","map"];class hv{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sv,"")}static parseTrackName(e){const t=uv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);dv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=hv;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function ju(s,e,t,n){const i=fv(n);switch(t){case Dh:return s*e;case Fh:return s*e/i.components*i.byteLength;case wc:return s*e/i.components*i.byteLength;case Uh:return s*e*2/i.components*i.byteLength;case Tc:return s*e*2/i.components*i.byteLength;case Nh:return s*e*3/i.components*i.byteLength;case yn:return s*e*4/i.components*i.byteLength;case Ac:return s*e*4/i.components*i.byteLength;case Ro:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Po:case Lo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wl:case Al:return Math.max(s,16)*Math.max(e,8)/4;case El:case Tl:return Math.max(s,8)*Math.max(e,8)/2;case Cl:case Rl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Il:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case $l:case Xl:case ql:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jl:case Yl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Kl:case Zl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fv(s){switch(s){case Gn:case Rh:return{byteLength:1,components:1};case Tr:case Ih:case kr:return{byteLength:2,components:1};case bc:case Ec:return{byteLength:2,components:4};case Ji:case Sc:case zn:return{byteLength:4,components:1};case Ph:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function of(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function pv(s){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,h=s.createBuffer();s.bindBuffer(l,h),s.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const d=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,d);else{u.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<u.length;f++){const p=u[h],v=u[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,p=u.length;f<p;f++){const v=u[f];s.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gv=`#ifdef USE_ALPHAHASH
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
#endif`,vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_v=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mv=`#ifdef USE_AOMAP
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
#endif`,Sv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bv=`#ifdef USE_BATCHING
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
#endif`,Ev=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Av=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cv=`#ifdef USE_IRIDESCENCE
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
#endif`,Rv=`#ifdef USE_BUMPMAP
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
#endif`,Iv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ov=`#define PI 3.141592653589793
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
} // validated`,kv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zv=`vec3 transformedNormal = objectNormal;
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
#endif`,Vv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qv=`#ifdef USE_ENVMAP
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
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yv=`#ifdef USE_ENVMAP
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
#endif`,Kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zv=`#ifdef USE_ENVMAP
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
#endif`,Jv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,n0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,s0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,r0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,l0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
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
#endif`,f0=`struct PhysicalMaterial {
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
}`,p0=`
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,S0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,k0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,W0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Q0=`float getShadowMask() {
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
}`,e_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,M_=`#if DEPTH_PACKING == 3200
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
}`,S_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,C_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,I_=`#define LAMBERT
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
}`,P_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,U_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,k_=`#define STANDARD
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
}`,z_=`#define TOON
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
}`,V_=`#define TOON
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
}`,H_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,$_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:mv,alphahash_pars_fragment:gv,alphamap_fragment:vv,alphamap_pars_fragment:_v,alphatest_fragment:yv,alphatest_pars_fragment:xv,aomap_fragment:Mv,aomap_pars_fragment:Sv,batching_pars_vertex:bv,batching_vertex:Ev,begin_vertex:wv,beginnormal_vertex:Tv,bsdfs:Av,iridescence_fragment:Cv,bumpmap_pars_fragment:Rv,clipping_planes_fragment:Iv,clipping_planes_pars_fragment:Pv,clipping_planes_pars_vertex:Lv,clipping_planes_vertex:Dv,color_fragment:Nv,color_pars_fragment:Fv,color_pars_vertex:Uv,color_vertex:Bv,common:Ov,cube_uv_reflection_fragment:kv,defaultnormal_vertex:zv,displacementmap_pars_vertex:Vv,displacementmap_vertex:Hv,emissivemap_fragment:Gv,emissivemap_pars_fragment:Wv,colorspace_fragment:$v,colorspace_pars_fragment:Xv,envmap_fragment:qv,envmap_common_pars_fragment:jv,envmap_pars_fragment:Yv,envmap_pars_vertex:Kv,envmap_physical_pars_fragment:a0,envmap_vertex:Zv,fog_vertex:Jv,fog_pars_vertex:Qv,fog_fragment:e0,fog_pars_fragment:t0,gradientmap_pars_fragment:n0,lightmap_pars_fragment:i0,lights_lambert_fragment:s0,lights_lambert_pars_fragment:r0,lights_pars_begin:o0,lights_toon_fragment:l0,lights_toon_pars_fragment:c0,lights_phong_fragment:u0,lights_phong_pars_fragment:d0,lights_physical_fragment:h0,lights_physical_pars_fragment:f0,lights_fragment_begin:p0,lights_fragment_maps:m0,lights_fragment_end:g0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:x0,map_fragment:M0,map_pars_fragment:S0,map_particle_fragment:b0,map_particle_pars_fragment:E0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:T0,morphinstance_vertex:A0,morphcolor_vertex:C0,morphnormal_vertex:R0,morphtarget_pars_vertex:I0,morphtarget_vertex:P0,normal_fragment_begin:L0,normal_fragment_maps:D0,normal_pars_fragment:N0,normal_pars_vertex:F0,normal_vertex:U0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:k0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:V0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:W0,project_vertex:$0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:Z0,shadowmap_vertex:J0,shadowmask_pars_fragment:Q0,skinbase_vertex:e_,skinning_pars_vertex:t_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:s_,specularmap_pars_fragment:r_,tonemapping_fragment:o_,tonemapping_pars_fragment:a_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:u_,uv_pars_vertex:d_,uv_vertex:h_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:v_,cube_vert:__,cube_frag:y_,depth_vert:x_,depth_frag:M_,distanceRGBA_vert:S_,distanceRGBA_frag:b_,equirect_vert:E_,equirect_frag:w_,linedashed_vert:T_,linedashed_frag:A_,meshbasic_vert:C_,meshbasic_frag:R_,meshlambert_vert:I_,meshlambert_frag:P_,meshmatcap_vert:L_,meshmatcap_frag:D_,meshnormal_vert:N_,meshnormal_frag:F_,meshphong_vert:U_,meshphong_frag:B_,meshphysical_vert:O_,meshphysical_frag:k_,meshtoon_vert:z_,meshtoon_frag:V_,points_vert:H_,points_frag:G_,shadow_vert:W_,shadow_frag:$_,sprite_vert:X_,sprite_frag:q_},ce={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},On={basic:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Oe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([ce.points,ce.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([ce.common,ce.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([ce.sprite,ce.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([ce.lights,ce.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};On.physical={uniforms:Yt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const vo={r:0,b:0,g:0},Ni=new Nt,j_=new Ce;function Y_(s,e,t,n,i,r,o){const a=new Oe(0);let l=r===!0?0:1,c,d,u=null,h=0,f=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const M=p(x);M===null?g(a,l):M&&M.isColor&&(g(M,1),y=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const M=p(y);M&&(M.isCubeTexture||M.mapping===Qo)?(d===void 0&&(d=new Cn(new zr(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ks(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),Ni.copy(y.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Ni)),d.material.toneMapped=Xe.getTransfer(M.colorSpace)!==at,(u!==M||h!==M.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=M,h=M.version,f=s.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Cn(new ta(2,2),new wi({name:"BackgroundMaterial",uniforms:ks(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Xe.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(vo,Wh(s)),n.buffers.color.setClear(vo.r,vo.g,vo.b,y,o)}function _(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:m,dispose:_}}function K_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(S,R,O,L,k){let F=!1;const N=u(L,O,R);r!==N&&(r=N,c(r.object)),F=f(S,L,O,k),F&&p(S,L,O,k),k!==null&&e.update(k,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,y(S,R,O,L),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function d(S){return s.deleteVertexArray(S)}function u(S,R,O){const L=O.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let F=k[R.id];F===void 0&&(F={},k[R.id]=F);let N=F[L];return N===void 0&&(N=h(l()),F[L]=N),N}function h(S){const R=[],O=[],L=[];for(let k=0;k<t;k++)R[k]=0,O[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:L,object:S,attributes:{},index:null}}function f(S,R,O,L){const k=r.attributes,F=R.attributes;let N=0;const X=O.getAttributes();for(const z in X)if(X[z].location>=0){const Q=k[z];let oe=F[z];if(oe===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Q===void 0||Q.attribute!==oe||oe&&Q.data!==oe.data)return!0;N++}return r.attributesNum!==N||r.index!==L}function p(S,R,O,L){const k={},F=R.attributes;let N=0;const X=O.getAttributes();for(const z in X)if(X[z].location>=0){let Q=F[z];Q===void 0&&(z==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),z==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const oe={};oe.attribute=Q,Q&&Q.data&&(oe.data=Q.data),k[z]=oe,N++}r.attributes=k,r.attributesNum=N,r.index=L}function v(){const S=r.newAttributes;for(let R=0,O=S.length;R<O;R++)S[R]=0}function m(S){g(S,0)}function g(S,R){const O=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;O[S]=1,L[S]===0&&(s.enableVertexAttribArray(S),L[S]=1),k[S]!==R&&(s.vertexAttribDivisor(S,R),k[S]=R)}function _(){const S=r.newAttributes,R=r.enabledAttributes;for(let O=0,L=R.length;O<L;O++)R[O]!==S[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function x(S,R,O,L,k,F,N){N===!0?s.vertexAttribIPointer(S,R,O,k,F):s.vertexAttribPointer(S,R,O,L,k,F)}function y(S,R,O,L){v();const k=L.attributes,F=O.getAttributes(),N=R.defaultAttributeValues;for(const X in F){const z=F[X];if(z.location>=0){let q=k[X];if(q===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const Q=q.normalized,oe=q.itemSize,te=e.get(q);if(te===void 0)continue;const De=te.buffer,et=te.type,He=te.bytesPerElement,Y=et===s.INT||et===s.UNSIGNED_INT||q.gpuType===Sc;if(q.isInterleavedBufferAttribute){const J=q.data,ge=J.stride,Ne=q.offset;if(J.isInstancedInterleavedBuffer){for(let Ee=0;Ee<z.locationSize;Ee++)g(z.location+Ee,J.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)m(z.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Ee=0;Ee<z.locationSize;Ee++)x(z.location+Ee,oe/z.locationSize,et,Q,ge*He,(Ne+oe/z.locationSize*Ee)*He,Y)}else{if(q.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)g(z.location+J,q.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);s.bindBuffer(s.ARRAY_BUFFER,De);for(let J=0;J<z.locationSize;J++)x(z.location+J,oe/z.locationSize,et,Q,oe*He,oe/z.locationSize*J*He,Y)}}else if(N!==void 0){const Q=N[X];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(z.location,Q);break;case 3:s.vertexAttrib3fv(z.location,Q);break;case 4:s.vertexAttrib4fv(z.location,Q);break;default:s.vertexAttrib1fv(z.location,Q)}}}}_()}function M(){P();for(const S in n){const R=n[S];for(const O in R){const L=R[O];for(const k in L)d(L[k].object),delete L[k];delete R[O]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const O in R){const L=R[O];for(const k in L)d(L[k].object),delete L[k];delete R[O]}delete n[S.id]}function A(S){for(const R in n){const O=n[R];if(O[S.id]===void 0)continue;const L=O[S.id];for(const k in L)d(L[k].object),delete L[k];delete O[S.id]}}function P(){T(),o=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Z_(s,e,t){let n;function i(c){n=c}function r(c,d){s.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(s.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let p=0;p<u;p++)f+=d[p];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],d[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=d[v]*h[v];t.update(p,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function J_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==yn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Gn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==zn&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:M,maxSamples:E}}function Q_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new zi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||n!==0||i;return i=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?d(null):c();else{const _=r?0:n,x=_*4;let y=g.clippingState||null;l.value=y,y=d(p,h,x,f);for(let M=0;M!==x;++M)y[M]=t[M];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=f+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function ey(s){let e=new WeakMap;function t(o,a){return a===Bo?o.mapping=Fs:a===Sl&&(o.mapping=Us),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bo||a===Sl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sg(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Es=4,Yu=[.125,.215,.35,.446,.526,.582],Gi=20,Ha=new sf,Ku=new Oe;let Ga=null,Wa=0,$a=0,Xa=!1;const Vi=(1+Math.sqrt(5))/2,_s=1/Vi,Zu=[new U(-Vi,_s,0),new U(Vi,_s,0),new U(-_s,0,Vi),new U(_s,0,Vi),new U(0,Vi,-_s),new U(0,Vi,_s),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],ty=new U;class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=ty}=r;Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Wa,$a),this._renderer.xr.enabled=Xa,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Wa=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:kr,format:yn,colorSpace:Bs,depthBuffer:!1},i=Qu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(r)),this._blurMaterial=iy(r,e,t)}return i}_compileMaterial(e){const t=new Cn(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,n,i,r){const l=new Zt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ku),u.toneMapping=bi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new Hh({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),m=new Cn(new zr,v);let g=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,g=!0):(v.color.copy(Ku),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[x]));const M=this._cubeSize;_o(i,y*M,x>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===Us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=td()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;_o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zu[(i-r-1)%Zu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new Cn(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Gi-1),v=r/p,m=isFinite(r)?1+Math.floor(d*v):Gi;m>Gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gi}`);const g=[];let _=0;for(let A=0;A<Gi;++A){const P=A/v,T=Math.exp(-P*P/2);g.push(T),A===0?_+=T:A<m&&(_+=2*T)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=p,h.mipInt.value=x-n;const y=this._sizeLods[i],M=3*y*(i>x-Es?i-x+Es:0),E=4*(this._cubeSize-y);_o(t,M,E,3*y,2*y),l.setRenderTarget(t),l.render(u,Ha)}}function ny(s){const e=[],t=[],n=[];let i=s;const r=s-Es+1+Yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Es?l=Yu[o-s+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,p=6,v=3,m=2,g=1,_=new Float32Array(v*p*f),x=new Float32Array(m*p*f),y=new Float32Array(g*p*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,P=E>2?0:-1,T=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(T,v*p*E),x.set(h,m*p*E);const S=[E,E,E,E,E,E];y.set(S,g*p*E)}const M=new In;M.setAttribute("position",new Hn(_,v)),M.setAttribute("uv",new Hn(x,m)),M.setAttribute("faceIndex",new Hn(y,g)),e.push(M),i>Es&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qu(s,e,t){const n=new Qi(s,e,t);return n.texture.mapping=Qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _o(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function iy(s,e,t){const n=new Float32Array(Gi),i=new U(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function ed(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function td(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function sy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Bo||l===Sl,d=l===Fs||l===Us;if(c||d){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ju(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||d&&f&&i(f)?(t===null&&(t=new Ju(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ry(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oy(s,e,t,n){const i={},r=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function c(u){const h=[],f=u.index,p=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){const M=_[x+0],E=_[x+1],A=_[x+2];h.push(M,E,E,A,A,M)}}else if(p!==void 0){const _=p.array;v=p.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const M=x+0,E=x+1,A=x+2;h.push(M,E,E,A,A,M)}}else return;const m=new(Oh(h)?Gh:Pc)(h,1);m.version=v;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function d(u){const h=r.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function ay(s,e,t){let n;function i(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){s.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,h*o,p),t.update(f,n,p))}function d(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}function u(h,f,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/o,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,v,0,p);let g=0;for(let _=0;_<p;_++)g+=f[_]*v[_];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function ly(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function cy(s,e,t){const n=new WeakMap,i=new Je;function r(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let h=n.get(a);if(h===void 0||h.count!==u){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let M=a.attributes.position.count*y,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*E*4*u),P=new kh(A,M,E,u);P.type=zn,P.needsUpdate=!0;const T=y*4;for(let R=0;R<u;R++){const O=g[R],L=_[R],k=x[R],F=M*E*4*R;for(let N=0;N<O.count;N++){const X=N*T;p===!0&&(i.fromBufferAttribute(O,N),A[F+X+0]=i.x,A[F+X+1]=i.y,A[F+X+2]=i.z,A[F+X+3]=0),v===!0&&(i.fromBufferAttribute(L,N),A[F+X+4]=i.x,A[F+X+5]=i.y,A[F+X+6]=i.z,A[F+X+7]=0),m===!0&&(i.fromBufferAttribute(k,N),A[F+X+8]=i.x,A[F+X+9]=i.y,A[F+X+10]=i.z,A[F+X+11]=k.itemSize===4?i.w:1)}}h={count:u,texture:P,size:new Ke(M,E)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",v),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function uy(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const af=new Wt,nd=new jh(1,1),lf=new kh,cf=new Vm,uf=new Xh,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Js(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=id[i];if(r===void 0&&(r=new Float32Array(i),id[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Bt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function sa(s,e){let t=sd[e];t===void 0&&(t=new Int32Array(e),sd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function dy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Bt(t,e)}}function fy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Bt(t,e)}}function py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Bt(t,e)}}function my(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,n))return;ad.set(n),s.uniformMatrix2fv(this.addr,!1,ad),Bt(t,n)}}function gy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,n))return;od.set(n),s.uniformMatrix3fv(this.addr,!1,od),Bt(t,n)}}function vy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ut(t,n))return;rd.set(n),s.uniformMatrix4fv(this.addr,!1,rd),Bt(t,n)}}function _y(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Bt(t,e)}}function xy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Bt(t,e)}}function My(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Bt(t,e)}}function Sy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function by(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Bt(t,e)}}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Bt(t,e)}}function wy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Bt(t,e)}}function Ty(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nd.compareFunction=Bh,r=nd):r=af,t.setTexture2D(e||r,i)}function Ay(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cf,i)}function Cy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uf,i)}function Ry(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lf,i)}function Iy(s){switch(s){case 5126:return dy;case 35664:return hy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return vy;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return xy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return by;case 36295:return Ey;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ay;case 35680:case 36300:case 36308:case 36293:return Cy;case 36289:case 36303:case 36311:case 36292:return Ry}}function Py(s,e){s.uniform1fv(this.addr,e)}function Ly(s,e){const t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function Dy(s,e){const t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function Ny(s,e){const t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function Fy(s,e){const t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Uy(s,e){const t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function By(s,e){const t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Oy(s,e){s.uniform1iv(this.addr,e)}function ky(s,e){s.uniform2iv(this.addr,e)}function zy(s,e){s.uniform3iv(this.addr,e)}function Vy(s,e){s.uniform4iv(this.addr,e)}function Hy(s,e){s.uniform1uiv(this.addr,e)}function Gy(s,e){s.uniform2uiv(this.addr,e)}function Wy(s,e){s.uniform3uiv(this.addr,e)}function $y(s,e){s.uniform4uiv(this.addr,e)}function Xy(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||af,r[o])}function qy(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||cf,r[o])}function jy(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uf,r[o])}function Yy(s,e,t){const n=this.cache,i=e.length,r=sa(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Bt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||lf,r[o])}function Ky(s){switch(s){case 5126:return Py;case 35664:return Ly;case 35665:return Dy;case 35666:return Ny;case 35674:return Fy;case 35675:return Uy;case 35676:return By;case 5124:case 35670:return Oy;case 35667:case 35671:return ky;case 35668:case 35672:return zy;case 35669:case 35673:return Vy;case 5125:return Hy;case 36294:return Gy;case 36295:return Wy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return qy;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Yy}}class Zy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}}class Jy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ky(t.type)}}class Qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function ld(s,e){s.seq.push(e),s.map[e.id]=e}function ex(s,e,t){const n=s.name,i=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),o=qa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ld(t,c===void 0?new Zy(a,s,e):new Jy(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Qy(a),ld(t,u)),t=u}}}class Do{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);ex(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function cd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tx=37297;let nx=0;function ix(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ud=new Ve;function sx(s){Xe._getMatrix(ud,Xe.workingColorSpace,s);const e=`mat3( ${ud.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(s)){case ko:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+ix(s.getShaderSource(e),a)}else return r}function rx(s,e){const t=sx(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ox(s,e){let t;switch(e){case Jp:t="Linear";break;case Qp:t="Reinhard";break;case em:t="Cineon";break;case tm:t="ACESFilmic";break;case im:t="AgX";break;case sm:t="Neutral";break;case nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yo=new U;function ax(){Xe.getLuminanceCoefficients(yo);const s=yo.x.toFixed(4),e=yo.y.toFixed(4),t=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function cx(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ux(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function pr(s){return s!==""}function hd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(s){return s.replace(dx,fx)}const hx=new Map;function fx(s,e){let t=$e[e];if(t===void 0){const n=hx.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ic(t)}const px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(s){return s.replace(px,mx)}function mx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function md(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function gx(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ah?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Pp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function vx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Us:e="ENVMAP_TYPE_CUBE";break;case Qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _x(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function yx(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jo:e="ENVMAP_BLENDING_MULTIPLY";break;case Kp:e="ENVMAP_BLENDING_MIX";break;case Zp:e="ENVMAP_BLENDING_ADD";break}return e}function xx(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gx(t),c=vx(t),d=_x(t),u=yx(t),h=xx(t),f=lx(t),p=cx(r),v=i.createProgram();let m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(pr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(pr).join(`
`),g.length>0&&(g+=`
`)):(m=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),g=[md(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?$e.tonemapping_pars_fragment:"",t.toneMapping!==bi?ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,rx("linearToOutputTexel",t.outputColorSpace),ax(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pr).join(`
`)),o=ic(o),o=hd(o,t),o=fd(o,t),a=ic(a),a=hd(a,t),a=fd(a,t),o=pd(o),a=pd(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+m+o,y=_+g+a,M=cd(i,i.VERTEX_SHADER,x),E=cd(i,i.FRAGMENT_SHADER,y);i.attachShader(v,M),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(R){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",L=i.getShaderInfoLog(M)||"",k=i.getShaderInfoLog(E)||"",F=O.trim(),N=L.trim(),X=k.trim();let z=!0,q=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,M,E);else{const Q=dd(i,M,"vertex"),oe=dd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+Q+`
`+oe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||X==="")&&(q=!1);q&&(R.diagnostics={runnable:z,programLog:F,vertexShader:{log:N,prefix:m},fragmentShader:{log:X,prefix:g}})}i.deleteShader(M),i.deleteShader(E),P=new Do(i,v),T=ux(i,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,tx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nx++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=E,this}let Sx=0;class bx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ex(e),t.set(e,n)),n}}class Ex{constructor(e){this.id=Sx++,this.code=e,this.usedTimes=0}}function wx(s,e,t,n,i,r,o){const a=new zh,l=new bx,c=new Set,d=[],u=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,R,O,L){const k=O.fog,F=L.geometry,N=T.isMeshStandardMaterial?O.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||N),z=X&&X.mapping===Qo?X.image.height:null,q=p[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=Q!==void 0?Q.length:0;let te=0;F.morphAttributes.position!==void 0&&(te=1),F.morphAttributes.normal!==void 0&&(te=2),F.morphAttributes.color!==void 0&&(te=3);let De,et,He,Y;if(q){const rt=On[q];De=rt.vertexShader,et=rt.fragmentShader}else De=T.vertexShader,et=T.fragmentShader,l.update(T),He=l.getVertexShaderID(T),Y=l.getFragmentShaderID(T);const J=s.getRenderTarget(),ge=s.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,Ye=!!T.map,Pt=!!T.matcap,D=!!X,gt=!!T.aoMap,ze=!!T.lightMap,Ue=!!T.bumpMap,Me=!!T.normalMap,vt=!!T.displacementMap,Se=!!T.emissiveMap,We=!!T.metalnessMap,Ot=!!T.roughnessMap,wt=T.anisotropy>0,I=T.clearcoat>0,w=T.dispersion>0,G=T.iridescence>0,K=T.sheen>0,ee=T.transmission>0,j=wt&&!!T.anisotropyMap,Ae=I&&!!T.clearcoatMap,ae=I&&!!T.clearcoatNormalMap,be=I&&!!T.clearcoatRoughnessMap,we=G&&!!T.iridescenceMap,se=G&&!!T.iridescenceThicknessMap,he=K&&!!T.sheenColorMap,Fe=K&&!!T.sheenRoughnessMap,Te=!!T.specularMap,ue=!!T.specularColorMap,Ge=!!T.specularIntensityMap,B=ee&&!!T.transmissionMap,re=ee&&!!T.thicknessMap,le=!!T.gradientMap,_e=!!T.alphaMap,ne=T.alphaTest>0,Z=!!T.alphaHash,xe=!!T.extensions;let ke=bi;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ke=s.toneMapping);const dt={shaderID:q,shaderType:T.type,shaderName:T.name,vertexShader:De,fragmentShader:et,defines:T.defines,customVertexShaderID:He,customFragmentShaderID:Y,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Bs,alphaToCoverage:!!T.alphaToCoverage,map:Ye,matcap:Pt,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:z,aoMap:gt,lightMap:ze,bumpMap:Ue,normalMap:Me,displacementMap:h&&vt,emissiveMap:Se,normalMapObjectSpace:Me&&T.normalMapType===um,normalMapTangentSpace:Me&&T.normalMapType===ea,metalnessMap:We,roughnessMap:Ot,anisotropy:wt,anisotropyMap:j,clearcoat:I,clearcoatMap:Ae,clearcoatNormalMap:ae,clearcoatRoughnessMap:be,dispersion:w,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:se,sheen:K,sheenColorMap:he,sheenRoughnessMap:Fe,specularMap:Te,specularColorMap:ue,specularIntensityMap:Ge,transmission:ee,transmissionMap:B,thicknessMap:re,gradientMap:le,opaque:T.transparent===!1&&T.blending===Cs&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Z,combine:T.combine,mapUv:Ye&&v(T.map.channel),aoMapUv:gt&&v(T.aoMap.channel),lightMapUv:ze&&v(T.lightMap.channel),bumpMapUv:Ue&&v(T.bumpMap.channel),normalMapUv:Me&&v(T.normalMap.channel),displacementMapUv:vt&&v(T.displacementMap.channel),emissiveMapUv:Se&&v(T.emissiveMap.channel),metalnessMapUv:We&&v(T.metalnessMap.channel),roughnessMapUv:Ot&&v(T.roughnessMap.channel),anisotropyMapUv:j&&v(T.anisotropyMap.channel),clearcoatMapUv:Ae&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:se&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(T.sheenRoughnessMap.channel),specularMapUv:Te&&v(T.specularMap.channel),specularColorMapUv:ue&&v(T.specularColorMap.channel),specularIntensityMapUv:Ge&&v(T.specularIntensityMap.channel),transmissionMapUv:B&&v(T.transmissionMap.channel),thicknessMapUv:re&&v(T.thicknessMap.channel),alphaMapUv:_e&&v(T.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Me||wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ye||_e),fog:!!k,useFog:T.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:Ye&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===at,decodeVideoTextureEmissive:Se&&T.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(T.emissiveMap.colorSpace)===at,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===si,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&T.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function g(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)S.push(R),S.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(_(S,T),x(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function x(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=p[T.type];let R;if(S){const O=On[S];R=eg.clone(O.uniforms)}else R=T.uniforms;return R}function M(T,S){let R;for(let O=0,L=d.length;O<L;O++){const k=d[O];if(k.cacheKey===S){R=k,++R.usedTimes;break}}return R===void 0&&(R=new Mx(s,S,T,r),d.push(R)),R}function E(T){if(--T.usedTimes===0){const S=d.indexOf(T);d[S]=d[d.length-1],d.pop(),T.destroy()}}function A(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:y,acquireProgram:M,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:P}}function Tx(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Ax(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,f,p,v,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:h,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=h,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=v,g.group=m),e++,g}function a(u,h,f,p,v,m){const g=o(u,h,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(u,h,f,p,v,m){const g=o(u,h,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,h){t.length>1&&t.sort(u||Ax),n.length>1&&n.sort(h||gd),i.length>1&&i.sort(h||gd)}function d(){for(let u=e,h=s.length;u<h;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:d,sort:c}}function Cx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new vd,s.set(n,[o])):i>=r.length?(o=new vd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Rx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Oe};break;case"SpotLight":t={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return s[e.id]=t,t}}}function Ix(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Px=0;function Lx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dx(s){const e=new Rx,t=Ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,r=new Ce,o=new Ce;function a(c){let d=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,_=0,x=0,y=0,M=0,E=0,A=0;c.sort(Lx);for(let T=0,S=c.length;T<S;T++){const R=c[T],O=R.color,L=R.intensity,k=R.distance,F=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=O.r*L,u+=O.g*L,h+=O.b*L;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],L);A++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.directionalShadow[f]=z,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=R.shadow.matrix,_++}n.directional[f]=N,f++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(O).multiplyScalar(L),N.distance=k,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[v]=N;const X=R.shadow;if(R.map&&(n.spotLightMap[M]=R.map,M++,X.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[v]=X.matrix,R.castShadow){const z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=F,y++}v++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(O).multiplyScalar(L),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=N,m++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const X=R.shadow,z=t.get(R);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=F,n.pointShadowMatrix[p]=R.shadow.matrix,x++}n.point[p]=N,p++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(L),N.groundColor.copy(R.groundColor).multiplyScalar(L),n.hemi[g]=N,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==f||P.pointLength!==p||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==g||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==M||P.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=f,P.pointLength=p,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=g,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=M,P.numLightProbes=A,n.version=Px++)}function l(c,d){let u=0,h=0,f=0,p=0,v=0;const m=d.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const x=c[g];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function _d(s){const e=new Dx(s),t=[],n=[];function i(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Nx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new _d(s),e.set(i,[a])):r>=o.length?(a=new _d(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Fx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`;function Bx(s,e,t){let n=new Dc;const i=new Ke,r=new Ke,o=new Je,a=new Ug({depthPacking:cm}),l=new Bg,c={},d=t.maxTextureSize,u={[Ei]:rn,[rn]:Ei,[si]:si},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Fx,fragmentShader:Ux}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new In;p.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Cn(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ah;let g=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const L=g!==ni&&this.type===ni,k=g===ni&&this.type!==ni;for(let F=0,N=E.length;F<N;F++){const X=E[F],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const q=z.getFrameExtents();if(i.multiply(q),r.copy(z.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/q.x),i.x=r.x*q.x,z.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/q.y),i.y=r.y*q.y,z.mapSize.y=r.y)),z.map===null||L===!0||k===!0){const oe=this.type!==ni?{minFilter:un,magFilter:un}:{};z.map!==null&&z.map.dispose(),z.map=new Qi(i.x,i.y,oe),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const Q=z.getViewportCount();for(let oe=0;oe<Q;oe++){const te=z.getViewport(oe);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),O.viewport(o),z.updateMatrices(X,oe),n=z.getFrustum(),y(A,P,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===ni&&_(z,P),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,S,R)};function _(E,A){const P=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qi(i.x,i.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,f,v,null)}function x(E,A,P,T){let S=null;const R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=S.uuid,L=A.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let F=k[L];F===void 0&&(F=S.clone(),k[L]=F,A.addEventListener("dispose",M)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,T===ni?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=s.properties.get(S);O.light=P}return S}function y(E,A,P,T,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ni)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const L=e.update(E),k=E.material;if(Array.isArray(k)){const F=L.groups;for(let N=0,X=F.length;N<X;N++){const z=F[N],q=k[z.materialIndex];if(q&&q.visible){const Q=x(E,q,T,S);E.onBeforeShadow(s,E,A,P,L,Q,z),s.renderBufferDirect(P,null,L,Q,E,z),E.onAfterShadow(s,E,A,P,L,Q,z)}}}else if(k.visible){const F=x(E,k,T,S);E.onBeforeShadow(s,E,A,P,L,F,null),s.renderBufferDirect(P,null,L,F,E,null),E.onAfterShadow(s,E,A,P,L,F,null)}}const O=E.children;for(let L=0,k=O.length;L<k;L++)y(O[L],A,P,T,S)}function M(E){E.target.removeEventListener("dispose",M);for(const P in c){const T=c[P],S=E.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const Ox={[ml]:gl,[vl]:xl,[_l]:Ml,[Ns]:yl,[gl]:ml,[xl]:vl,[Ml]:_l,[yl]:Ns};function kx(s,e){function t(){let B=!1;const re=new Je;let le=null;const _e=new Je(0,0,0,0);return{setMask:function(ne){le!==ne&&!B&&(s.colorMask(ne,ne,ne,ne),le=ne)},setLocked:function(ne){B=ne},setClear:function(ne,Z,xe,ke,dt){dt===!0&&(ne*=ke,Z*=ke,xe*=ke),re.set(ne,Z,xe,ke),_e.equals(re)===!1&&(s.clearColor(ne,Z,xe,ke),_e.copy(re))},reset:function(){B=!1,le=null,_e.set(-1,0,0,0)}}}function n(){let B=!1,re=!1,le=null,_e=null,ne=null;return{setReversed:function(Z){if(re!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const ke=ne;ne=null,this.setClear(ke)}},getReversed:function(){return re},setTest:function(Z){Z?J(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Z){le!==Z&&!B&&(s.depthMask(Z),le=Z)},setFunc:function(Z){if(re&&(Z=Ox[Z]),_e!==Z){switch(Z){case ml:s.depthFunc(s.NEVER);break;case gl:s.depthFunc(s.ALWAYS);break;case vl:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case _l:s.depthFunc(s.EQUAL);break;case yl:s.depthFunc(s.GEQUAL);break;case xl:s.depthFunc(s.GREATER);break;case Ml:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_e=Z}},setLocked:function(Z){B=Z},setClear:function(Z){ne!==Z&&(re&&(Z=1-Z),s.clearDepth(Z),ne=Z)},reset:function(){B=!1,le=null,_e=null,ne=null,re=!1}}}function i(){let B=!1,re=null,le=null,_e=null,ne=null,Z=null,xe=null,ke=null,dt=null;return{setTest:function(rt){B||(rt?J(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(rt){re!==rt&&!B&&(s.stencilMask(rt),re=rt)},setFunc:function(rt,Wn,Ln){(le!==rt||_e!==Wn||ne!==Ln)&&(s.stencilFunc(rt,Wn,Ln),le=rt,_e=Wn,ne=Ln)},setOp:function(rt,Wn,Ln){(Z!==rt||xe!==Wn||ke!==Ln)&&(s.stencilOp(rt,Wn,Ln),Z=rt,xe=Wn,ke=Ln)},setLocked:function(rt){B=rt},setClear:function(rt){dt!==rt&&(s.clearStencil(rt),dt=rt)},reset:function(){B=!1,re=null,le=null,_e=null,ne=null,Z=null,xe=null,ke=null,dt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],p=null,v=!1,m=null,g=null,_=null,x=null,y=null,M=null,E=null,A=new Oe(0,0,0),P=0,T=!1,S=null,R=null,O=null,L=null,k=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=X>=2);let q=null,Q={};const oe=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),De=new Je().fromArray(oe),et=new Je().fromArray(te);function He(B,re,le,_e){const ne=new Uint8Array(4),Z=s.createTexture();s.bindTexture(B,Z),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<le;xe++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(re,0,s.RGBA,1,1,_e,0,s.RGBA,s.UNSIGNED_BYTE,ne):s.texImage2D(re+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ne);return Z}const Y={};Y[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),Y[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Y[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(s.DEPTH_TEST),o.setFunc(Ns),Ue(!1),Me(iu),J(s.CULL_FACE),gt(Si);function J(B){d[B]!==!0&&(s.enable(B),d[B]=!0)}function ge(B){d[B]!==!1&&(s.disable(B),d[B]=!1)}function Ne(B,re){return u[B]!==re?(s.bindFramebuffer(B,re),u[B]=re,B===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=re),B===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(B,re){let le=f,_e=!1;if(B){le=h.get(re),le===void 0&&(le=[],h.set(re,le));const ne=B.textures;if(le.length!==ne.length||le[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,xe=ne.length;Z<xe;Z++)le[Z]=s.COLOR_ATTACHMENT0+Z;le.length=ne.length,_e=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,_e=!0);_e&&s.drawBuffers(le)}function Ye(B){return p!==B?(s.useProgram(B),p=B,!0):!1}const Pt={[Hi]:s.FUNC_ADD,[Dp]:s.FUNC_SUBTRACT,[Np]:s.FUNC_REVERSE_SUBTRACT};Pt[Fp]=s.MIN,Pt[Up]=s.MAX;const D={[Bp]:s.ZERO,[Op]:s.ONE,[kp]:s.SRC_COLOR,[fl]:s.SRC_ALPHA,[$p]:s.SRC_ALPHA_SATURATE,[Gp]:s.DST_COLOR,[Vp]:s.DST_ALPHA,[zp]:s.ONE_MINUS_SRC_COLOR,[pl]:s.ONE_MINUS_SRC_ALPHA,[Wp]:s.ONE_MINUS_DST_COLOR,[Hp]:s.ONE_MINUS_DST_ALPHA,[Xp]:s.CONSTANT_COLOR,[qp]:s.ONE_MINUS_CONSTANT_COLOR,[jp]:s.CONSTANT_ALPHA,[Yp]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(B,re,le,_e,ne,Z,xe,ke,dt,rt){if(B===Si){v===!0&&(ge(s.BLEND),v=!1);return}if(v===!1&&(J(s.BLEND),v=!0),B!==Lp){if(B!==m||rt!==T){if((g!==Hi||y!==Hi)&&(s.blendEquation(s.FUNC_ADD),g=Hi,y=Hi),rt)switch(B){case Cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case su:s.blendFunc(s.ONE,s.ONE);break;case ru:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ou:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case su:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case ru:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ou:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}_=null,x=null,M=null,E=null,A.set(0,0,0),P=0,m=B,T=rt}return}ne=ne||re,Z=Z||le,xe=xe||_e,(re!==g||ne!==y)&&(s.blendEquationSeparate(Pt[re],Pt[ne]),g=re,y=ne),(le!==_||_e!==x||Z!==M||xe!==E)&&(s.blendFuncSeparate(D[le],D[_e],D[Z],D[xe]),_=le,x=_e,M=Z,E=xe),(ke.equals(A)===!1||dt!==P)&&(s.blendColor(ke.r,ke.g,ke.b,dt),A.copy(ke),P=dt),m=B,T=!1}function ze(B,re){B.side===si?ge(s.CULL_FACE):J(s.CULL_FACE);let le=B.side===rn;re&&(le=!le),Ue(le),B.blending===Cs&&B.transparent===!1?gt(Si):gt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const _e=B.stencilWrite;a.setTest(_e),_e&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Se(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(B){S!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),S=B)}function Me(B){B!==Rp?(J(s.CULL_FACE),B!==R&&(B===iu?s.cullFace(s.BACK):B===Ip?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),R=B}function vt(B){B!==O&&(N&&s.lineWidth(B),O=B)}function Se(B,re,le){B?(J(s.POLYGON_OFFSET_FILL),(L!==re||k!==le)&&(s.polygonOffset(re,le),L=re,k=le)):ge(s.POLYGON_OFFSET_FILL)}function We(B){B?J(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function Ot(B){B===void 0&&(B=s.TEXTURE0+F-1),q!==B&&(s.activeTexture(B),q=B)}function wt(B,re,le){le===void 0&&(q===null?le=s.TEXTURE0+F-1:le=q);let _e=Q[le];_e===void 0&&(_e={type:void 0,texture:void 0},Q[le]=_e),(_e.type!==B||_e.texture!==re)&&(q!==le&&(s.activeTexture(le),q=le),s.bindTexture(B,re||Y[B]),_e.type=B,_e.texture=re)}function I(){const B=Q[q];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{s.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{s.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{s.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{s.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function be(){try{s.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{s.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{s.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(B){De.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),De.copy(B))}function Fe(B){et.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),et.copy(B))}function Te(B,re){let le=c.get(re);le===void 0&&(le=new WeakMap,c.set(re,le));let _e=le.get(B);_e===void 0&&(_e=s.getUniformBlockIndex(re,B.name),le.set(B,_e))}function ue(B,re){const _e=c.get(re).get(B);l.get(re)!==_e&&(s.uniformBlockBinding(re,_e,B.__bindingPointIndex),l.set(re,_e))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},q=null,Q={},u={},h=new WeakMap,f=[],p=null,v=!1,m=null,g=null,_=null,x=null,y=null,M=null,E=null,A=new Oe(0,0,0),P=0,T=!1,S=null,R=null,O=null,L=null,k=null,De.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:Ne,drawBuffers:Ee,useProgram:Ye,setBlending:gt,setMaterial:ze,setFlipSided:Ue,setCullFace:Me,setLineWidth:vt,setPolygonOffset:Se,setScissorTest:We,activeTexture:Ot,bindTexture:wt,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:we,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:ae,texStorage3D:be,texSubImage2D:K,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:Ae,scissor:he,viewport:Fe,reset:Ge}}function zx(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,w){return f?new OffscreenCanvas(I,w):Ir("canvas")}function v(I,w,G){let K=1;const ee=wt(I);if((ee.width>G||ee.height>G)&&(K=G/Math.max(ee.width,ee.height)),K<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(K*ee.width),Ae=Math.floor(K*ee.height);u===void 0&&(u=p(j,Ae));const ae=w?p(j,Ae):u;return ae.width=j,ae.height=Ae,ae.getContext("2d").drawImage(I,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Ae+")."),ae}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function _(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,w,G,K,ee=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=w;if(w===s.RED&&(G===s.FLOAT&&(j=s.R32F),G===s.HALF_FLOAT&&(j=s.R16F),G===s.UNSIGNED_BYTE&&(j=s.R8)),w===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.R8UI),G===s.UNSIGNED_SHORT&&(j=s.R16UI),G===s.UNSIGNED_INT&&(j=s.R32UI),G===s.BYTE&&(j=s.R8I),G===s.SHORT&&(j=s.R16I),G===s.INT&&(j=s.R32I)),w===s.RG&&(G===s.FLOAT&&(j=s.RG32F),G===s.HALF_FLOAT&&(j=s.RG16F),G===s.UNSIGNED_BYTE&&(j=s.RG8)),w===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RG8UI),G===s.UNSIGNED_SHORT&&(j=s.RG16UI),G===s.UNSIGNED_INT&&(j=s.RG32UI),G===s.BYTE&&(j=s.RG8I),G===s.SHORT&&(j=s.RG16I),G===s.INT&&(j=s.RG32I)),w===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGB8UI),G===s.UNSIGNED_SHORT&&(j=s.RGB16UI),G===s.UNSIGNED_INT&&(j=s.RGB32UI),G===s.BYTE&&(j=s.RGB8I),G===s.SHORT&&(j=s.RGB16I),G===s.INT&&(j=s.RGB32I)),w===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),G===s.UNSIGNED_INT&&(j=s.RGBA32UI),G===s.BYTE&&(j=s.RGBA8I),G===s.SHORT&&(j=s.RGBA16I),G===s.INT&&(j=s.RGBA32I)),w===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),w===s.RGBA){const Ae=ee?ko:Xe.getTransfer(K);G===s.FLOAT&&(j=s.RGBA32F),G===s.HALF_FLOAT&&(j=s.RGBA16F),G===s.UNSIGNED_BYTE&&(j=Ae===at?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(I,w){let G;return I?w===null||w===Ji||w===Ar?G=s.DEPTH24_STENCIL8:w===zn?G=s.DEPTH32F_STENCIL8:w===Tr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ji||w===Ar?G=s.DEPTH_COMPONENT24:w===zn?G=s.DEPTH_COMPONENT32F:w===Tr&&(G=s.DEPTH_COMPONENT16),G}function M(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==un&&I.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){const w=I.target;w.removeEventListener("dispose",E),P(w),w.isVideoTexture&&d.delete(w)}function A(I){const w=I.target;w.removeEventListener("dispose",A),S(w)}function P(I){const w=n.get(I);if(w.__webglInit===void 0)return;const G=I.source,K=h.get(G);if(K){const ee=K[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(I),Object.keys(K).length===0&&h.delete(G)}n.remove(I)}function T(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const G=I.source,K=h.get(G);delete K[w.__cacheKey],o.memory.textures--}function S(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let ee=0;ee<w.__webglFramebuffer[K].length;ee++)s.deleteFramebuffer(w.__webglFramebuffer[K][ee]);else s.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)s.deleteFramebuffer(w.__webglFramebuffer[K]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=I.textures;for(let K=0,ee=G.length;K<ee;K++){const j=n.get(G[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(I)}let R=0;function O(){R=0}function L(){const I=R;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),R+=1,I}function k(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function F(I,w){const G=n.get(I);if(I.isVideoTexture&&We(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&G.__version!==I.version){const K=I.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,I,w);return}}else I.isExternalTexture&&(G.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+w)}function N(I,w){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Y(G,I,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+w)}function X(I,w){const G=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){Y(G,I,w);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+w)}function z(I,w){const G=n.get(I);if(I.version>0&&G.__version!==I.version){J(G,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+w)}const q={[wr]:s.REPEAT,[ri]:s.CLAMP_TO_EDGE,[bl]:s.MIRRORED_REPEAT},Q={[un]:s.NEAREST,[om]:s.NEAREST_MIPMAP_NEAREST,[$r]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[fa]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},oe={[dm]:s.NEVER,[vm]:s.ALWAYS,[hm]:s.LESS,[Bh]:s.LEQUAL,[fm]:s.EQUAL,[gm]:s.GEQUAL,[pm]:s.GREATER,[mm]:s.NOTEQUAL};function te(I,w){if(w.type===zn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===kn||w.magFilter===fa||w.magFilter===$r||w.magFilter===$i||w.minFilter===kn||w.minFilter===fa||w.minFilter===$r||w.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,q[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,q[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,q[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Q[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Q[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===un||w.minFilter!==$r&&w.minFilter!==$i||w.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function De(I,w){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));const K=w.source;let ee=h.get(K);ee===void 0&&(ee={},h.set(K,ee));const j=k(w);if(j!==I.__cacheKey){ee[j]===void 0&&(ee[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[j].usedTimes++;const Ae=ee[I.__cacheKey];Ae!==void 0&&(ee[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(w)),I.__cacheKey=j,I.__webglTexture=ee[j].texture}return G}function et(I,w,G){return Math.floor(Math.floor(I/G)/w)}function He(I,w,G,K){const j=I.updateRanges;if(j.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,G,K,w.data);else{j.sort((se,he)=>se.start-he.start);let Ae=0;for(let se=1;se<j.length;se++){const he=j[Ae],Fe=j[se],Te=he.start+he.count,ue=et(Fe.start,w.width,4),Ge=et(he.start,w.width,4);Fe.start<=Te+1&&ue===Ge&&et(Fe.start+Fe.count-1,w.width,4)===ue?he.count=Math.max(he.count,Fe.start+Fe.count-he.start):(++Ae,j[Ae]=Fe)}j.length=Ae+1;const ae=s.getParameter(s.UNPACK_ROW_LENGTH),be=s.getParameter(s.UNPACK_SKIP_PIXELS),we=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let se=0,he=j.length;se<he;se++){const Fe=j[se],Te=Math.floor(Fe.start/4),ue=Math.ceil(Fe.count/4),Ge=Te%w.width,B=Math.floor(Te/w.width),re=ue,le=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,B),t.texSubImage2D(s.TEXTURE_2D,0,Ge,B,re,le,G,K,w.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,be),s.pixelStorei(s.UNPACK_SKIP_ROWS,we)}}function Y(I,w,G){let K=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=s.TEXTURE_3D);const ee=De(I,w),j=w.source;t.bindTexture(K,I.__webglTexture,s.TEXTURE0+G);const Ae=n.get(j);if(j.version!==Ae.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const ae=Xe.getPrimaries(Xe.workingColorSpace),be=w.colorSpace===_i?null:Xe.getPrimaries(w.colorSpace),we=w.colorSpace===_i||ae===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let se=v(w.image,!1,i.maxTextureSize);se=Ot(w,se);const he=r.convert(w.format,w.colorSpace),Fe=r.convert(w.type);let Te=x(w.internalFormat,he,Fe,w.colorSpace,w.isVideoTexture);te(K,w);let ue;const Ge=w.mipmaps,B=w.isVideoTexture!==!0,re=Ae.__version===void 0||ee===!0,le=j.dataReady,_e=M(w,se);if(w.isDepthTexture)Te=y(w.format===Rr,w.type),re&&(B?t.texStorage2D(s.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Te,se.width,se.height,0,he,Fe,null));else if(w.isDataTexture)if(Ge.length>0){B&&re&&t.texStorage2D(s.TEXTURE_2D,_e,Te,Ge[0].width,Ge[0].height);for(let ne=0,Z=Ge.length;ne<Z;ne++)ue=Ge[ne],B?le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Fe,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Te,ue.width,ue.height,0,he,Fe,ue.data);w.generateMipmaps=!1}else B?(re&&t.texStorage2D(s.TEXTURE_2D,_e,Te,se.width,se.height),le&&He(w,se,he,Fe)):t.texImage2D(s.TEXTURE_2D,0,Te,se.width,se.height,0,he,Fe,se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){B&&re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Te,Ge[0].width,Ge[0].height,se.depth);for(let ne=0,Z=Ge.length;ne<Z;ne++)if(ue=Ge[ne],w.format!==yn)if(he!==null)if(B){if(le)if(w.layerUpdates.size>0){const xe=ju(ue.width,ue.height,w.format,w.type);for(const ke of w.layerUpdates){const dt=ue.data.subarray(ke*xe/ue.data.BYTES_PER_ELEMENT,(ke+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,ke,ue.width,ue.height,1,he,dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,he,ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ne,Te,ue.width,ue.height,se.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?le&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ne,0,0,0,ue.width,ue.height,se.depth,he,Fe,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ne,Te,ue.width,ue.height,se.depth,0,he,Fe,ue.data)}else{B&&re&&t.texStorage2D(s.TEXTURE_2D,_e,Te,Ge[0].width,Ge[0].height);for(let ne=0,Z=Ge.length;ne<Z;ne++)ue=Ge[ne],w.format!==yn?he!==null?B?le&&t.compressedTexSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,ne,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,ue.width,ue.height,he,Fe,ue.data):t.texImage2D(s.TEXTURE_2D,ne,Te,ue.width,ue.height,0,he,Fe,ue.data)}else if(w.isDataArrayTexture)if(B){if(re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,_e,Te,se.width,se.height,se.depth),le)if(w.layerUpdates.size>0){const ne=ju(se.width,se.height,w.format,w.type);for(const Z of w.layerUpdates){const xe=se.data.subarray(Z*ne/se.data.BYTES_PER_ELEMENT,(Z+1)*ne/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,he,Fe,xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,he,Fe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,he,Fe,se.data);else if(w.isData3DTexture)B?(re&&t.texStorage3D(s.TEXTURE_3D,_e,Te,se.width,se.height,se.depth),le&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,he,Fe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,he,Fe,se.data);else if(w.isFramebufferTexture){if(re)if(B)t.texStorage2D(s.TEXTURE_2D,_e,Te,se.width,se.height);else{let ne=se.width,Z=se.height;for(let xe=0;xe<_e;xe++)t.texImage2D(s.TEXTURE_2D,xe,Te,ne,Z,0,he,Fe,null),ne>>=1,Z>>=1}}else if(Ge.length>0){if(B&&re){const ne=wt(Ge[0]);t.texStorage2D(s.TEXTURE_2D,_e,Te,ne.width,ne.height)}for(let ne=0,Z=Ge.length;ne<Z;ne++)ue=Ge[ne],B?le&&t.texSubImage2D(s.TEXTURE_2D,ne,0,0,he,Fe,ue):t.texImage2D(s.TEXTURE_2D,ne,Te,he,Fe,ue);w.generateMipmaps=!1}else if(B){if(re){const ne=wt(se);t.texStorage2D(s.TEXTURE_2D,_e,Te,ne.width,ne.height)}le&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Fe,se)}else t.texImage2D(s.TEXTURE_2D,0,Te,he,Fe,se);m(w)&&g(K),Ae.__version=j.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function J(I,w,G){if(w.image.length!==6)return;const K=De(I,w),ee=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+G);const j=n.get(ee);if(ee.version!==j.__version||K===!0){t.activeTexture(s.TEXTURE0+G);const Ae=Xe.getPrimaries(Xe.workingColorSpace),ae=w.colorSpace===_i?null:Xe.getPrimaries(w.colorSpace),be=w.colorSpace===_i||Ae===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,se=w.image[0]&&w.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!we&&!se?he[Z]=v(w.image[Z],!0,i.maxCubemapSize):he[Z]=se?w.image[Z].image:w.image[Z],he[Z]=Ot(w,he[Z]);const Fe=he[0],Te=r.convert(w.format,w.colorSpace),ue=r.convert(w.type),Ge=x(w.internalFormat,Te,ue,w.colorSpace),B=w.isVideoTexture!==!0,re=j.__version===void 0||K===!0,le=ee.dataReady;let _e=M(w,Fe);te(s.TEXTURE_CUBE_MAP,w);let ne;if(we){B&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Ge,Fe.width,Fe.height);for(let Z=0;Z<6;Z++){ne=he[Z].mipmaps;for(let xe=0;xe<ne.length;xe++){const ke=ne[xe];w.format!==yn?Te!==null?B?le&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,ke.width,ke.height,Te,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Ge,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,ke.width,ke.height,Te,ue,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Ge,ke.width,ke.height,0,Te,ue,ke.data)}}}else{if(ne=w.mipmaps,B&&re){ne.length>0&&_e++;const Z=wt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,_e,Ge,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){B?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Te,ue,he[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,he[Z].width,he[Z].height,0,Te,ue,he[Z].data);for(let xe=0;xe<ne.length;xe++){const dt=ne[xe].image[Z].image;B?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,dt.width,dt.height,Te,ue,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Ge,dt.width,dt.height,0,Te,ue,dt.data)}}else{B?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,ue,he[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ge,Te,ue,he[Z]);for(let xe=0;xe<ne.length;xe++){const ke=ne[xe];B?le&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,Te,ue,ke.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Ge,Te,ue,ke.image[Z])}}}m(w)&&g(s.TEXTURE_CUBE_MAP),j.__version=ee.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ge(I,w,G,K,ee,j){const Ae=r.convert(G.format,G.colorSpace),ae=r.convert(G.type),be=x(G.internalFormat,Ae,ae,G.colorSpace),we=n.get(w),se=n.get(G);if(se.__renderTarget=w,!we.__hasExternalTextures){const he=Math.max(1,w.width>>j),Fe=Math.max(1,w.height>>j);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,be,he,Fe,w.depth,0,Ae,ae,null):t.texImage2D(ee,j,be,he,Fe,0,Ae,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Se(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,ee,se.__webglTexture,0,vt(w)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,ee,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(I,w,G){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const K=w.depthTexture,ee=K&&K.isDepthTexture?K.type:null,j=y(w.stencilBuffer,ee),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=vt(w);Se(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,j,w.width,w.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,j,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,j,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,I)}else{const K=w.textures;for(let ee=0;ee<K.length;ee++){const j=K[ee],Ae=r.convert(j.format,j.colorSpace),ae=r.convert(j.type),be=x(j.internalFormat,Ae,ae,j.colorSpace),we=vt(w);G&&Se(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,be,w.width,w.height):Se(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,be,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,be,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(w.depthTexture);K.__renderTarget=w,(!K.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const ee=K.__webglTexture,j=vt(w);if(w.depthTexture.format===Cr)Se(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(w.depthTexture.format===Rr)Se(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ye(I){const w=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const K=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const ee=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",ee)};K.addEventListener("dispose",ee),w.__depthDisposeCallback=ee}w.__boundDepthTexture=K}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=I.texture.mipmaps;K&&K.length>0?Ee(w.__webglFramebuffer[0],I):Ee(w.__webglFramebuffer,I)}else if(G){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=s.createRenderbuffer(),Ne(w.__webglDepthbuffer[K],I,!1);else{const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,j)}}else{const K=I.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Ne(w.__webglDepthbuffer,I,!1);else{const ee=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,j)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(I,w,G){const K=n.get(I);w!==void 0&&ge(K.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Ye(I)}function D(I){const w=I.texture,G=n.get(I),K=n.get(w);I.addEventListener("dispose",A);const ee=I.textures,j=I.isWebGLCubeRenderTarget===!0,Ae=ee.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=w.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let be=0;be<w.mipmaps.length;be++)G.__webglFramebuffer[ae][be]=s.createFramebuffer()}else G.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<w.mipmaps.length;ae++)G.__webglFramebuffer[ae]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let ae=0,be=ee.length;ae<be;ae++){const we=n.get(ee[ae]);we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&Se(I)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ae=0;ae<ee.length;ae++){const be=ee[ae];G.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ae]);const we=r.convert(be.format,be.colorSpace),se=r.convert(be.type),he=x(be.internalFormat,we,se,be.colorSpace,I.isXRRenderTarget===!0),Fe=vt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,he,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,G.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),te(s.TEXTURE_CUBE_MAP,w);for(let ae=0;ae<6;ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)ge(G.__webglFramebuffer[ae][be],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,be);else ge(G.__webglFramebuffer[ae],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(w)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,be=ee.length;ae<be;ae++){const we=ee[ae],se=n.get(we);let he=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),te(he,we),ge(G.__webglFramebuffer,I,we,s.COLOR_ATTACHMENT0+ae,he,0),m(we)&&g(he)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ae=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),te(ae,w),w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)ge(G.__webglFramebuffer[be],I,w,s.COLOR_ATTACHMENT0,ae,be);else ge(G.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,ae,0);m(w)&&g(ae),t.unbindTexture()}I.depthBuffer&&Ye(I)}function gt(I){const w=I.textures;for(let G=0,K=w.length;G<K;G++){const ee=w[G];if(m(ee)){const j=_(I),Ae=n.get(ee).__webglTexture;t.bindTexture(j,Ae),g(j),t.unbindTexture()}}}const ze=[],Ue=[];function Me(I){if(I.samples>0){if(Se(I)===!1){const w=I.textures,G=I.width,K=I.height;let ee=s.COLOR_BUFFER_BIT;const j=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(I),ae=w.length>1;if(ae)for(let we=0;we<w.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const be=I.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<w.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const se=n.get(w[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,G,K,0,0,G,K,ee,s.NEAREST),l===!0&&(ze.length=0,Ue.length=0,ze.push(s.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ze.push(j),Ue.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ue)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<w.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const se=n.get(w[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function vt(I){return Math.min(i.maxSamples,I.samples)}function Se(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function We(I){const w=o.render.frame;d.get(I)!==w&&(d.set(I,w),I.update())}function Ot(I,w){const G=I.colorSpace,K=I.format,ee=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Bs&&G!==_i&&(Xe.getTransfer(G)===at?(K!==yn||ee!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function wt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=O,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Pt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Se}function Vx(s,e){function t(n,i=_i){let r;const o=Xe.getTransfer(i);if(n===Gn)return s.UNSIGNED_BYTE;if(n===bc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ec)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return s.BYTE;if(n===Ih)return s.SHORT;if(n===Tr)return s.UNSIGNED_SHORT;if(n===Sc)return s.INT;if(n===Ji)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===kr)return s.HALF_FLOAT;if(n===Dh)return s.ALPHA;if(n===Nh)return s.RGB;if(n===yn)return s.RGBA;if(n===Cr)return s.DEPTH_COMPONENT;if(n===Rr)return s.DEPTH_STENCIL;if(n===Fh)return s.RED;if(n===wc)return s.RED_INTEGER;if(n===Uh)return s.RG;if(n===Tc)return s.RG_INTEGER;if(n===Ac)return s.RGBA_INTEGER;if(n===Ro||n===Io||n===Po||n===Lo)if(o===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===wl||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Cl||n===Rl||n===Il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Cl||n===Rl)return o===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Il)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Ll||n===Dl||n===Nl||n===Fl||n===Ul||n===Bl||n===Ol||n===kl||n===zl||n===Vl||n===Hl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return o===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Xl||n===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$l)return o===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===Yl||n===Kl||n===Zl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`;class Wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wi({vertexShader:Hx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Cn(new ta(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $x extends js{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",m=new Wx,g={},_=t.getContextAttributes();let x=null,y=null;const M=[],E=[],A=new Ke;let P=null;const T=new Zt;T.viewport=new Je;const S=new Zt;S.viewport=new Je;const R=[T,S],O=new iv;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=M[Y];return J===void 0&&(J=new Fa,M[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=M[Y];return J===void 0&&(J=new Fa,M[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=M[Y];return J===void 0&&(J=new Fa,M[Y]=J),J.getHandSpace()};function F(Y){const J=E.indexOf(Y.inputSource);if(J===-1)return;const ge=M[J];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<M.length;Y++){const J=E[Y];J!==null&&(E[Y]=null,M[Y].disconnect(J))}L=null,k=null,m.reset();for(const Y in g)delete g[Y];e.setRenderTarget(x),f=null,h=null,u=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Ne=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?Rr:Cr,Ne=_.stencil?Ar:Ji);const Ye={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),h=u.createProjectionLayer(Ye),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Qi(h.textureWidth,h.textureHeight,{format:yn,type:Gn,depthTexture:new jh(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Qi(f.framebufferWidth,f.framebufferHeight,{format:yn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(Y){for(let J=0;J<Y.removed.length;J++){const ge=Y.removed[J],Ne=E.indexOf(ge);Ne>=0&&(E[Ne]=null,M[Ne].disconnect(ge))}for(let J=0;J<Y.added.length;J++){const ge=Y.added[J];let Ne=E.indexOf(ge);if(Ne===-1){for(let Ye=0;Ye<M.length;Ye++)if(Ye>=E.length){E.push(ge),Ne=Ye;break}else if(E[Ye]===null){E[Ye]=ge,Ne=Ye;break}if(Ne===-1)break}const Ee=M[Ne];Ee&&Ee.connect(ge)}}const z=new U,q=new U;function Q(Y,J,ge){z.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ge.matrixWorld);const Ne=z.distanceTo(q),Ee=J.projectionMatrix.elements,Ye=ge.projectionMatrix.elements,Pt=Ee[14]/(Ee[10]-1),D=Ee[14]/(Ee[10]+1),gt=(Ee[9]+1)/Ee[5],ze=(Ee[9]-1)/Ee[5],Ue=(Ee[8]-1)/Ee[0],Me=(Ye[8]+1)/Ye[0],vt=Pt*Ue,Se=Pt*Me,We=Ne/(-Ue+Me),Ot=We*-Ue;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const wt=Pt+We,I=D+We,w=vt-Ot,G=Se+(Ne-Ot),K=gt*D/I*wt,ee=ze*D/I*wt;Y.projectionMatrix.makePerspective(w,G,K,ee,wt,I),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function oe(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,ge=Y.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),O.near=S.near=T.near=J,O.far=S.far=T.far=ge,(L!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,k=O.far),O.layers.mask=Y.layers.mask|6,T.layers.mask=O.layers.mask&3,S.layers.mask=O.layers.mask&5;const Ne=Y.parent,Ee=O.cameras;oe(O,Ne);for(let Ye=0;Ye<Ee.length;Ye++)oe(Ee[Ye],Ne);Ee.length===2?Q(O,T,S):O.projectionMatrix.copy(T.projectionMatrix),te(Y,O,Ne)};function te(Y,J,ge){ge===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Os*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return g[Y]};let De=null;function et(Y,J){if(d=J.getViewerPose(c||o),p=J,d!==null){const ge=d.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ne=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Ne=!0);for(let D=0;D<ge.length;D++){const gt=ge[D];let ze=null;if(f!==null)ze=f.getViewport(gt);else{const Me=u.getViewSubImage(h,gt);ze=Me.viewport,D===0&&(e.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),e.setRenderTarget(y))}let Ue=R[D];Ue===void 0&&(Ue=new Zt,Ue.layers.enable(D),Ue.viewport=new Je,R[D]=Ue),Ue.matrix.fromArray(gt.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(gt.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ze.x,ze.y,ze.width,ze.height),D===0&&(O.matrix.copy(Ue.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ne===!0&&O.cameras.push(Ue)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(ge[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<ge.length;D++){const gt=ge[D].camera;if(gt){let ze=g[gt];ze||(ze=new Yh,g[gt]=ze);const Ue=u.getCameraImage(gt);ze.sourceTexture=Ue}}}}for(let ge=0;ge<M.length;ge++){const Ne=E[ge],Ee=M[ge];Ne!==null&&Ee!==void 0&&Ee.update(Ne,J,c||o)}De&&De(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const He=new of;He.setAnimationLoop(et),this.setAnimationLoop=function(Y){De=Y},this.dispose=function(){}}}const Fi=new Nt,Xx=new Ce;function qx(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Wh(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,_,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),d(m,g)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===rn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===rn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const _=e.get(g),x=_.envMap,y=_.envMapRotation;x&&(m.envMap.value=x,Fi.copy(y),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(Fi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function d(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===rn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jx(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(p(_),y=d(_),i[_.id]=y,_.addEventListener("dispose",m));const M=x.program;n.updateUBOMapping(_,M);const E=e.render.frame;r[_.id]!==E&&(h(_),r[_.id]=E)}function d(_){const x=u();_.__bindingPointIndex=x;const y=s.createBuffer(),M=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,M,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=i[_.id],y=_.uniforms,M=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,A=y.length;E<A;E++){const P=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,S=P.length;T<S;T++){const R=P[T];if(f(R,E,T,M)===!0){const O=R.__offset,L=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let F=0;F<L.length;F++){const N=L[F],X=v(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,O+k,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,x,y,M){const E=_.value,A=x+"_"+y;if(M[A]===void 0)return typeof E=="number"||typeof E=="boolean"?M[A]=E:M[A]=E.clone(),!0;{const P=M[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return M[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function p(_){const x=_.uniforms;let y=0;const M=16;for(let A=0,P=x.length;A<P;A++){const T=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,R=T.length;S<R;S++){const O=T[S],L=Array.isArray(O.value)?O.value:[O.value];for(let k=0,F=L.length;k<F;k++){const N=L[k],X=v(N),z=y%M,q=z%X.boundary,Q=z+q;y+=q,Q!==0&&M-Q<X.storage&&(y+=M-Q),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=X.storage}}}const E=y%M;return E>0&&(y+=M-E),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function g(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:l,update:c,dispose:g}}class Yx{constructor(e={}){const{canvas:t=Nm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const _=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let M=!1;this._outputColorSpace=ht;let E=0,A=0,P=null,T=-1,S=null;const R=new Je,O=new Je;let L=null;const k=new Oe(0);let F=0,N=t.width,X=t.height,z=1,q=null,Q=null;const oe=new Je(0,0,N,X),te=new Je(0,0,N,X);let De=!1;const et=new Dc;let He=!1,Y=!1;const J=new Ce,ge=new U,Ne=new Je,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Pt(){return P===null?z:1}let D=n;function gt(C,V){return t.getContext(C,V)}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ne,!1),D===null){const V="webgl2";if(D=gt(V,C),D===null)throw gt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ze,Ue,Me,vt,Se,We,Ot,wt,I,w,G,K,ee,j,Ae,ae,be,we,se,he,Fe,Te,ue,Ge;function B(){ze=new ry(D),ze.init(),Te=new Vx(D,ze),Ue=new J_(D,ze,e,Te),Me=new kx(D,ze),Ue.reversedDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),vt=new ly(D),Se=new Tx,We=new zx(D,ze,Me,Se,Ue,Te,vt),Ot=new ey(y),wt=new sy(y),I=new pv(D),ue=new K_(D,I),w=new oy(D,I,vt,ue),G=new uy(D,w,I,vt),se=new cy(D,Ue,We),ae=new Q_(Se),K=new wx(y,Ot,wt,ze,Ue,ue,ae),ee=new qx(y,Se),j=new Cx,Ae=new Nx(ze),we=new Y_(y,Ot,wt,Me,G,f,l),be=new Bx(y,G,Ue),Ge=new jx(D,vt,Ue,Me),he=new Z_(D,ze,vt),Fe=new ay(D,ze,vt),vt.programs=K.programs,y.capabilities=Ue,y.extensions=ze,y.properties=Se,y.renderLists=j,y.shadowMap=be,y.state=Me,y.info=vt}B();const re=new $x(y,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(C){C!==void 0&&(z=C,this.setSize(N,X,!1))},this.getSize=function(C){return C.set(N,X)},this.setSize=function(C,V,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,X=V,t.width=Math.floor(C*z),t.height=Math.floor(V*z),W===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(N*z,X*z).floor()},this.setDrawingBufferSize=function(C,V,W){N=C,X=V,z=W,t.width=Math.floor(C*W),t.height=Math.floor(V*W),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,V,W,$){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,V,W,$),Me.viewport(R.copy(oe).multiplyScalar(z).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,V,W,$){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,V,W,$),Me.scissor(O.copy(te).multiplyScalar(z).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){Me.setScissorTest(De=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(C=!0,V=!0,W=!0){let $=0;if(C){let H=!1;if(P!==null){const ie=P.texture.format;H=ie===Ac||ie===Tc||ie===wc}if(H){const ie=P.texture.type,de=ie===Gn||ie===Ji||ie===Tr||ie===Ar||ie===bc||ie===Ec,ye=we.getClearColor(),me=we.getClearAlpha(),Le=ye.r,Be=ye.g,Ie=ye.b;de?(p[0]=Le,p[1]=Be,p[2]=Ie,p[3]=me,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Le,v[1]=Be,v[2]=Ie,v[3]=me,D.clearBufferiv(D.COLOR,0,v))}else $|=D.COLOR_BUFFER_BIT}V&&($|=D.DEPTH_BUFFER_BIT),W&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),we.dispose(),j.dispose(),Ae.dispose(),Se.dispose(),Ot.dispose(),wt.dispose(),G.dispose(),ue.dispose(),Ge.dispose(),K.dispose(),re.dispose(),re.removeEventListener("sessionstart",Ln),re.removeEventListener("sessionend",Zc),Ci.stop()};function le(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=vt.autoReset,V=be.enabled,W=be.autoUpdate,$=be.needsUpdate,H=be.type;B(),vt.autoReset=C,be.enabled=V,be.autoUpdate=W,be.needsUpdate=$,be.type=H}function ne(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Z(C){const V=C.target;V.removeEventListener("dispose",Z),xe(V)}function xe(C){ke(C),Se.remove(C)}function ke(C){const V=Se.get(C).programs;V!==void 0&&(V.forEach(function(W){K.releaseProgram(W)}),C.isShaderMaterial&&K.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,W,$,H,ie){V===null&&(V=Ee);const de=H.isMesh&&H.matrixWorld.determinant()<0,ye=_p(C,V,W,$,H);Me.setMaterial($,de);let me=W.index,Le=1;if($.wireframe===!0){if(me=w.getWireframeAttribute(W),me===void 0)return;Le=2}const Be=W.drawRange,Ie=W.attributes.position;let Ze=Be.start*Le,ot=(Be.start+Be.count)*Le;ie!==null&&(Ze=Math.max(Ze,ie.start*Le),ot=Math.min(ot,(ie.start+ie.count)*Le)),me!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,me.count)):Ie!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,Ie.count));const bt=ot-Ze;if(bt<0||bt===1/0)return;ue.setup(H,$,ye,W,me);let ft,lt=he;if(me!==null&&(ft=I.get(me),lt=Fe,lt.setIndex(ft)),H.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*Pt()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(H.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),Me.setLineWidth(Pe*Pt()),H.isLineSegments?lt.setMode(D.LINES):H.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else H.isPoints?lt.setMode(D.POINTS):H.isSprite&&lt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))lt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pe=H._multiDrawStarts,xt=H._multiDrawCounts,nt=H._multiDrawCount,on=me?I.get(me).bytesPerElement:1,is=Se.get($).currentProgram.getUniforms();for(let an=0;an<nt;an++)is.setValue(D,"_gl_DrawID",an),lt.render(Pe[an]/on,xt[an])}else if(H.isInstancedMesh)lt.renderInstances(Ze,bt,H.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,xt=Math.min(W.instanceCount,Pe);lt.renderInstances(Ze,bt,xt)}else lt.render(Ze,bt)};function dt(C,V,W){C.transparent===!0&&C.side===si&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,Wr(C,V,W),C.side=Ei,C.needsUpdate=!0,Wr(C,V,W),C.side=si):Wr(C,V,W)}this.compile=function(C,V,W=null){W===null&&(W=C),g=Ae.get(W),g.init(V),x.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),C!==W&&C.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const $=new Set;return C.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let de=0;de<ie.length;de++){const ye=ie[de];dt(ye,W,H),$.add(ye)}else dt(ie,W,H),$.add(ie)}),g=x.pop(),$},this.compileAsync=function(C,V,W=null){const $=this.compile(C,V,W);return new Promise(H=>{function ie(){if($.forEach(function(de){Se.get(de).currentProgram.isReady()&&$.delete(de)}),$.size===0){H(C);return}setTimeout(ie,10)}ze.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function Wn(C){rt&&rt(C)}function Ln(){Ci.stop()}function Zc(){Ci.start()}const Ci=new of;Ci.setAnimationLoop(Wn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(C){rt=C,re.setAnimationLoop(C),C===null?Ci.stop():Ci.start()},re.addEventListener("sessionstart",Ln),re.addEventListener("sessionend",Zc),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,V,P),g=Ae.get(C,x.length),g.init(V),x.push(g),J.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),et.setFromProjectionMatrix(J,Vn,V.reversedDepth),Y=this.localClippingEnabled,He=ae.init(this.clippingPlanes,Y),m=j.get(C,_.length),m.init(),_.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=y.xr.getDepthSensingMesh();ie!==null&&da(ie,V,-1/0,y.sortObjects)}da(C,V,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(q,Q),Ye=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Ye&&we.addToRenderList(m,C),this.info.render.frame++,He===!0&&ae.beginShadows();const W=g.state.shadowsArray;be.render(W,C,V),He===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,H=m.transmissive;if(g.setupLights(),V.isArrayCamera){const ie=V.cameras;if(H.length>0)for(let de=0,ye=ie.length;de<ye;de++){const me=ie[de];Qc($,H,C,me)}Ye&&we.render(C);for(let de=0,ye=ie.length;de<ye;de++){const me=ie[de];Jc(m,C,me,me.viewport)}}else H.length>0&&Qc($,H,C,V),Ye&&we.render(C),Jc(m,C,V);P!==null&&A===0&&(We.updateMultisampleRenderTarget(P),We.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(y,C,V),ue.resetDefaultState(),T=-1,S=null,x.pop(),x.length>0?(g=x[x.length-1],He===!0&&ae.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function da(C,V,W,$){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||et.intersectsSprite(C)){$&&Ne.setFromMatrixPosition(C.matrixWorld).applyMatrix4(J);const de=G.update(C),ye=C.material;ye.visible&&m.push(C,de,ye,W,Ne.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||et.intersectsObject(C))){const de=G.update(C),ye=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ne.copy(C.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Ne.copy(de.boundingSphere.center)),Ne.applyMatrix4(C.matrixWorld).applyMatrix4(J)),Array.isArray(ye)){const me=de.groups;for(let Le=0,Be=me.length;Le<Be;Le++){const Ie=me[Le],Ze=ye[Ie.materialIndex];Ze&&Ze.visible&&m.push(C,de,Ze,W,Ne.z,Ie)}}else ye.visible&&m.push(C,de,ye,W,Ne.z,null)}}const ie=C.children;for(let de=0,ye=ie.length;de<ye;de++)da(ie[de],V,W,$)}function Jc(C,V,W,$){const H=C.opaque,ie=C.transmissive,de=C.transparent;g.setupLightsView(W),He===!0&&ae.setGlobalState(y.clippingPlanes,W),$&&Me.viewport(R.copy($)),H.length>0&&Gr(H,V,W),ie.length>0&&Gr(ie,V,W),de.length>0&&Gr(de,V,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Qc(C,V,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Qi(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?kr:Gn,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ie=g.state.transmissionRenderTarget[$.id],de=$.viewport||R;ie.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const ye=y.getRenderTarget(),me=y.getActiveCubeFace(),Le=y.getActiveMipmapLevel();y.setRenderTarget(ie),y.getClearColor(k),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&we.render(W);const Be=y.toneMapping;y.toneMapping=bi;const Ie=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),He===!0&&ae.setGlobalState(y.clippingPlanes,$),Gr(C,W,$),We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,bt=V.length;ot<bt;ot++){const ft=V[ot],lt=ft.object,Pe=ft.geometry,xt=ft.material,nt=ft.group;if(xt.side===si&&lt.layers.test($.layers)){const on=xt.side;xt.side=rn,xt.needsUpdate=!0,eu(lt,W,$,Pe,xt,nt),xt.side=on,xt.needsUpdate=!0,Ze=!0}}Ze===!0&&(We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie))}y.setRenderTarget(ye,me,Le),y.setClearColor(k,F),Ie!==void 0&&($.viewport=Ie),y.toneMapping=Be}function Gr(C,V,W){const $=V.isScene===!0?V.overrideMaterial:null;for(let H=0,ie=C.length;H<ie;H++){const de=C[H],ye=de.object,me=de.geometry,Le=de.group;let Be=de.material;Be.allowOverride===!0&&$!==null&&(Be=$),ye.layers.test(W.layers)&&eu(ye,V,W,me,Be,Le)}}function eu(C,V,W,$,H,ie){C.onBeforeRender(y,V,W,$,H,ie),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(y,V,W,$,C,ie),H.transparent===!0&&H.side===si&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,y.renderBufferDirect(W,V,$,H,C,ie),H.side=Ei,H.needsUpdate=!0,y.renderBufferDirect(W,V,$,H,C,ie),H.side=si):y.renderBufferDirect(W,V,$,H,C,ie),C.onAfterRender(y,V,W,$,H,ie)}function Wr(C,V,W){V.isScene!==!0&&(V=Ee);const $=Se.get(C),H=g.state.lights,ie=g.state.shadowsArray,de=H.state.version,ye=K.getParameters(C,H.state,ie,V,W),me=K.getProgramCacheKey(ye);let Le=$.programs;$.environment=C.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(C.isMeshStandardMaterial?wt:Ot).get(C.envMap||$.environment),$.envMapRotation=$.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Le===void 0&&(C.addEventListener("dispose",Z),Le=new Map,$.programs=Le);let Be=Le.get(me);if(Be!==void 0){if($.currentProgram===Be&&$.lightsStateVersion===de)return nu(C,ye),Be}else ye.uniforms=K.getUniforms(C),C.onBeforeCompile(ye,y),Be=K.acquireProgram(ye,me),Le.set(me,Be),$.uniforms=ye.uniforms;const Ie=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),nu(C,ye),$.needsLights=xp(C),$.lightsStateVersion=de,$.needsLights&&(Ie.ambientLightColor.value=H.state.ambient,Ie.lightProbe.value=H.state.probe,Ie.directionalLights.value=H.state.directional,Ie.directionalLightShadows.value=H.state.directionalShadow,Ie.spotLights.value=H.state.spot,Ie.spotLightShadows.value=H.state.spotShadow,Ie.rectAreaLights.value=H.state.rectArea,Ie.ltc_1.value=H.state.rectAreaLTC1,Ie.ltc_2.value=H.state.rectAreaLTC2,Ie.pointLights.value=H.state.point,Ie.pointLightShadows.value=H.state.pointShadow,Ie.hemisphereLights.value=H.state.hemi,Ie.directionalShadowMap.value=H.state.directionalShadowMap,Ie.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ie.spotShadowMap.value=H.state.spotShadowMap,Ie.spotLightMatrix.value=H.state.spotLightMatrix,Ie.spotLightMap.value=H.state.spotLightMap,Ie.pointShadowMap.value=H.state.pointShadowMap,Ie.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Be,$.uniformsList=null,Be}function tu(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Do.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function nu(C,V){const W=Se.get(C);W.outputColorSpace=V.outputColorSpace,W.batching=V.batching,W.batchingColor=V.batchingColor,W.instancing=V.instancing,W.instancingColor=V.instancingColor,W.instancingMorph=V.instancingMorph,W.skinning=V.skinning,W.morphTargets=V.morphTargets,W.morphNormals=V.morphNormals,W.morphColors=V.morphColors,W.morphTargetsCount=V.morphTargetsCount,W.numClippingPlanes=V.numClippingPlanes,W.numIntersection=V.numClipIntersection,W.vertexAlphas=V.vertexAlphas,W.vertexTangents=V.vertexTangents,W.toneMapping=V.toneMapping}function _p(C,V,W,$,H){V.isScene!==!0&&(V=Ee),We.resetTextureUnits();const ie=V.fog,de=$.isMeshStandardMaterial?V.environment:null,ye=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bs,me=($.isMeshStandardMaterial?wt:Ot).get($.envMap||de),Le=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ie=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let bt=bi;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=y.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=ft!==void 0?ft.length:0,Pe=Se.get($),xt=g.state.lights;if(He===!0&&(Y===!0||C!==S)){const qt=C===S&&$.id===T;ae.setState($,C,qt)}let nt=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==xt.state.version||Pe.outputColorSpace!==ye||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isBatchedMesh&&Pe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==me||$.fog===!0&&Pe.fog!==ie||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ae.numPlanes||Pe.numIntersection!==ae.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Be||Pe.morphTargets!==Ie||Pe.morphNormals!==Ze||Pe.morphColors!==ot||Pe.toneMapping!==bt||Pe.morphTargetsCount!==lt)&&(nt=!0):(nt=!0,Pe.__version=$.version);let on=Pe.currentProgram;nt===!0&&(on=Wr($,V,H));let is=!1,an=!1,tr=!1;const Mt=on.getUniforms(),dn=Pe.uniforms;if(Me.useProgram(on.program)&&(is=!0,an=!0,tr=!0),$.id!==T&&(T=$.id,an=!0),is||S!==C){Me.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Mt.setValue(D,"projectionMatrix",C.projectionMatrix),Mt.setValue(D,"viewMatrix",C.matrixWorldInverse);const Jt=Mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(D,ge.setFromMatrixPosition(C.matrixWorld)),Ue.logarithmicDepthBuffer&&Mt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Mt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,an=!0,tr=!0)}if(H.isSkinnedMesh){Mt.setOptional(D,H,"bindMatrix"),Mt.setOptional(D,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Mt.setValue(D,"boneTexture",qt.boneTexture,We))}H.isBatchedMesh&&(Mt.setOptional(D,H,"batchingTexture"),Mt.setValue(D,"batchingTexture",H._matricesTexture,We),Mt.setOptional(D,H,"batchingIdTexture"),Mt.setValue(D,"batchingIdTexture",H._indirectTexture,We),Mt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(D,"batchingColorTexture",H._colorsTexture,We));const hn=W.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&se.update(H,W,on),(an||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,Mt.setValue(D,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(dn.envMap.value=me,dn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(dn.envMapIntensity.value=V.environmentIntensity),an&&(Mt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&yp(dn,tr),ie&&$.fog===!0&&ee.refreshFogUniforms(dn,ie),ee.refreshMaterialUniforms(dn,$,z,X,g.state.transmissionRenderTarget[C.id]),Do.upload(D,tu(Pe),dn,We)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Do.upload(D,tu(Pe),dn,We),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Mt.setValue(D,"center",H.center),Mt.setValue(D,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(D,"normalMatrix",H.normalMatrix),Mt.setValue(D,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let Jt=0,ha=qt.length;Jt<ha;Jt++){const Ri=qt[Jt];Ge.update(Ri,on),Ge.bind(Ri,on)}}return on}function yp(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function xp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,V,W){const $=Se.get(C);$.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Se.get(C.texture).__webglTexture=V,Se.get(C.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,V){const W=Se.get(C);W.__webglFramebuffer=V,W.__useDefaultFramebuffer=V===void 0};const Mp=D.createFramebuffer();this.setRenderTarget=function(C,V=0,W=0){P=C,E=V,A=W;let $=!0,H=null,ie=!1,de=!1;if(C){const me=Se.get(C);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(me.__webglFramebuffer===void 0)We.setupRenderTarget(C);else if(me.__hasExternalTextures)We.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ie=C.depthTexture;if(me.__boundDepthTexture!==Ie){if(Ie!==null&&Se.has(Ie)&&(C.width!==Ie.image.width||C.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(C)}}const Le=C.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);const Be=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Be[V])?H=Be[V][W]:H=Be[V],ie=!0):C.samples>0&&We.useMultisampledRTT(C)===!1?H=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[W]:H=Be,R.copy(C.viewport),O.copy(C.scissor),L=C.scissorTest}else R.copy(oe).multiplyScalar(z).floor(),O.copy(te).multiplyScalar(z).floor(),L=De;if(W!==0&&(H=Mp),Me.bindFramebuffer(D.FRAMEBUFFER,H)&&$&&Me.drawBuffers(C,H),Me.viewport(R),Me.scissor(O),Me.setScissorTest(L),ie){const me=Se.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,me.__webglTexture,W)}else if(de){const me=V;for(let Le=0;Le<C.textures.length;Le++){const Be=Se.get(C.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Be.__webglTexture,W,me)}}else if(C!==null&&W!==0){const me=Se.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(C,V,W,$,H,ie,de,ye=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){Me.bindFramebuffer(D.FRAMEBUFFER,me);try{const Le=C.textures[ye],Be=Le.format,Ie=Le.type;if(!Ue.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-$&&W>=0&&W<=C.height-H&&(C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(V,W,$,H,Te.convert(Be),Te.convert(Ie),ie))}finally{const Le=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(C,V,W,$,H,ie,de,ye=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(V>=0&&V<=C.width-$&&W>=0&&W<=C.height-H){Me.bindFramebuffer(D.FRAMEBUFFER,me);const Le=C.textures[ye],Be=Le.format,Ie=Le.type;if(!Ue.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),C.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ye),D.readPixels(V,W,$,H,Te.convert(Be),Te.convert(Ie),0);const ot=P!==null?Se.get(P).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,ot);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fm(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Ze),D.deleteSync(bt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,V=null,W=0){const $=Math.pow(2,-W),H=Math.floor(C.image.width*$),ie=Math.floor(C.image.height*$),de=V!==null?V.x:0,ye=V!==null?V.y:0;We.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,de,ye,H,ie),Me.unbindTexture()};const Sp=D.createFramebuffer(),bp=D.createFramebuffer();this.copyTextureToTexture=function(C,V,W=null,$=null,H=0,ie=null){ie===null&&(H!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let de,ye,me,Le,Be,Ie,Ze,ot,bt;const ft=C.isCompressedTexture?C.mipmaps[ie]:C.image;if(W!==null)de=W.max.x-W.min.x,ye=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Be=W.min.y,Ie=W.isBox3?W.min.z:0;else{const hn=Math.pow(2,-H);de=Math.floor(ft.width*hn),ye=Math.floor(ft.height*hn),C.isDataArrayTexture?me=ft.depth:C.isData3DTexture?me=Math.floor(ft.depth*hn):me=1,Le=0,Be=0,Ie=0}$!==null?(Ze=$.x,ot=$.y,bt=$.z):(Ze=0,ot=0,bt=0);const lt=Te.convert(V.format),Pe=Te.convert(V.type);let xt;V.isData3DTexture?(We.setTexture3D(V,0),xt=D.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(We.setTexture2DArray(V,0),xt=D.TEXTURE_2D_ARRAY):(We.setTexture2D(V,0),xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),on=D.getParameter(D.UNPACK_IMAGE_HEIGHT),is=D.getParameter(D.UNPACK_SKIP_PIXELS),an=D.getParameter(D.UNPACK_SKIP_ROWS),tr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie);const Mt=C.isDataArrayTexture||C.isData3DTexture,dn=V.isDataArrayTexture||V.isData3DTexture;if(C.isDepthTexture){const hn=Se.get(C),qt=Se.get(V),Jt=Se.get(hn.__renderTarget),ha=Se.get(qt.__renderTarget);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Ri=0;Ri<me;Ri++)Mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(C).__webglTexture,H,Ie+Ri),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(V).__webglTexture,ie,bt+Ri)),D.blitFramebuffer(Le,Be,de,ye,Ze,ot,de,ye,D.DEPTH_BUFFER_BIT,D.NEAREST);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||C.isRenderTargetTexture||Se.has(C)){const hn=Se.get(C),qt=Se.get(V);Me.bindFramebuffer(D.READ_FRAMEBUFFER,Sp),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,bp);for(let Jt=0;Jt<me;Jt++)Mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,hn.__webglTexture,H,Ie+Jt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,hn.__webglTexture,H),dn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,ie,bt+Jt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,ie),H!==0?D.blitFramebuffer(Le,Be,de,ye,Ze,ot,de,ye,D.COLOR_BUFFER_BIT,D.NEAREST):dn?D.copyTexSubImage3D(xt,ie,Ze,ot,bt+Jt,Le,Be,de,ye):D.copyTexSubImage2D(xt,ie,Ze,ot,Le,Be,de,ye);Me.bindFramebuffer(D.READ_FRAMEBUFFER,null),Me.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else dn?C.isDataTexture||C.isData3DTexture?D.texSubImage3D(xt,ie,Ze,ot,bt,de,ye,me,lt,Pe,ft.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(xt,ie,Ze,ot,bt,de,ye,me,lt,ft.data):D.texSubImage3D(xt,ie,Ze,ot,bt,de,ye,me,lt,Pe,ft):C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,Ze,ot,de,ye,lt,Pe,ft.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,Ze,ot,ft.width,ft.height,lt,ft.data):D.texSubImage2D(D.TEXTURE_2D,ie,Ze,ot,de,ye,lt,Pe,ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,on),D.pixelStorei(D.UNPACK_SKIP_PIXELS,is),D.pixelStorei(D.UNPACK_SKIP_ROWS,an),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tr),ie===0&&V.generateMipmaps&&D.generateMipmap(xt),Me.unbindTexture()},this.initRenderTarget=function(C){Se.get(C).__webglFramebuffer===void 0&&We.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?We.setTextureCube(C,0):C.isData3DTexture?We.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?We.setTexture2DArray(C,0):We.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){E=0,A=0,P=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}class Rn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new b);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new b);const n=this.elements,i=e.x,r=e.y,o=e.z;return t.x=n[0]*i+n[1]*r+n[2]*o,t.y=n[3]*i+n[4]*r+n[5]*o,t.z=n[6]*i+n[7]*r+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Rn);const n=this.elements,i=e.elements,r=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],d=n[4],u=n[5],h=n[6],f=n[7],p=n[8],v=i[0],m=i[1],g=i[2],_=i[3],x=i[4],y=i[5],M=i[6],E=i[7],A=i[8];return r[0]=o*v+a*_+l*M,r[1]=o*m+a*x+l*E,r[2]=o*g+a*y+l*A,r[3]=c*v+d*_+u*M,r[4]=c*m+d*x+u*E,r[5]=c*g+d*y+u*A,r[6]=h*v+f*_+p*M,r[7]=h*m+f*x+p*E,r[8]=h*g+f*y+p*A,t}scale(e,t){t===void 0&&(t=new Rn);const n=this.elements,i=t.elements;for(let r=0;r!==3;r++)i[3*r+0]=e.x*n[3*r+0],i[3*r+1]=e.y*n[3*r+1],i[3*r+2]=e.z*n[3*r+2];return t}solve(e,t){t===void 0&&(t=new b);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=e.x,r[7]=e.y,r[11]=e.z;let l=3;const c=l;let d;const u=4;let h;do{if(o=c-l,r[o+i*o]===0){for(a=o+1;a<c;a++)if(r[o+i*a]!==0){d=u;do h=u-d,r[h+i*o]+=r[h+i*a];while(--d);break}}if(r[o+i*o]!==0)for(a=o+1;a<c;a++){const f=r[o+i*a]/r[o+i*o];d=u;do h=u-d,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*f;while(--d)}}while(--l);if(t.z=r[2*i+3]/r[2*i+2],t.y=(r[1*i+3]-r[1*i+2]*t.z)/r[1*i+1],t.x=(r[0*i+3]-r[0*i+2]*t.z-r[0*i+1]*t.y)/r[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new Rn);const t=3,n=6,i=Kx;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const d=n;let u;do{if(r=l-a,i[r+n*r]===0){for(o=r+1;o<l;o++)if(i[r+n*o]!==0){c=d;do u=d-c,i[u+n*r]+=i[u+n*o];while(--c);break}}if(i[r+n*r]!==0)for(o=r+1;o<l;o++){const h=i[r+n*o]/i[r+n*r];c=d;do u=d-c,i[u+n*o]=u<=r?0:i[u+n*o]-i[u+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=i[r+n*o]/i[r+n*r];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/i[r+n*r];c=n;do u=n-c,i[u+n*r]=i[u+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(u=i[t+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,u)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,r=e.w,o=t+t,a=n+n,l=i+i,c=t*o,d=t*a,u=t*l,h=n*a,f=n*l,p=i*l,v=r*o,m=r*a,g=r*l,_=this.elements;return _[0]=1-(h+p),_[1]=d-g,_[2]=u+m,_[3]=d+g,_[4]=1-(c+p),_[5]=f-v,_[6]=u-m,_[7]=f+v,_[8]=1-(c+h),this}transpose(e){e===void 0&&(e=new Rn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Kx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new b);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*i,t.y=l*n-o*r,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new b(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new b(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Rn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new b);const t=this.x,n=this.y,i=this.z;let r=Math.sqrt(t*t+n*n+i*i);return r>0?(r=1/r,e.x=t*r,e.y=n*r,e.z=i*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new b);const n=this.x,i=this.y,r=this.z;return t.x=e*n,t.y=e*i,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new b),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new b),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new b),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Zx,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Jx;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,r=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=r+(e.y-r)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(yd),yd.almostEquals(e,t)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Zx=new b,Jx=new b,yd=new b;class _t{constructor(e){e===void 0&&(e={}),this.lowerBound=new b,this.upperBound=new b,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,xd),c=xd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new _t().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound,o=i.x<=n.x&&n.x<=r.x||t.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||t.y<=r.y&&r.y<=n.y,l=i.z<=n.z&&n.z<=r.z||t.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,r=e.upperBound;return t.x<=i.x&&n.x>=r.x&&t.y<=i.y&&n.y>=r.y&&t.z<=i.z&&n.z>=r.z}getCorners(e,t,n,i,r,o,a,l){const c=this.lowerBound,d=this.upperBound;e.copy(c),t.set(d.x,c.y,c.z),n.set(d.x,d.y,c.z),i.set(c.x,d.y,d.z),r.set(d.x,c.y,d.z),o.set(c.x,d.y,c.z),a.set(c.x,c.y,d.z),l.copy(d)}toLocalFrame(e,t){const n=Md,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7];this.getCorners(i,r,o,a,l,c,d,u);for(let h=0;h!==8;h++){const f=n[h];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=Md,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],d=n[6],u=n[7];this.getCorners(i,r,o,a,l,c,d,u);for(let h=0;h!==8;h++){const f=n[h];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*r,d=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,d)),Math.min(u,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,d)),Math.max(u,h));return!(p<0||f>p)}}const xd=new b,Md=[new b,new b,new b,new b,new b,new b,new b,new b];class Sd{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:r}=t;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class df{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,e)}return this}}class It{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new b),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=Qx,i=eM;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new It);const n=this.x,i=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,d=e.w;return t.x=n*d+o*a+i*c-r*l,t.y=i*d+o*l+r*a-n*c,t.z=r*d+o*c+n*l-i*a,t.w=o*d-n*a-i*l-r*c,t}inverse(e){e===void 0&&(e=new It);const t=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new It),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new b);const n=e.x,i=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,d=c*n+a*r-l*i,u=c*i+l*n-o*r,h=c*r+o*i-a*n,f=-o*n-a*i-l*r;return t.x=d*c+f*-o+u*-l-h*-a,t.y=u*c+f*-a+h*-o-d*-l,t.z=h*c+f*-l+d*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const d=o*a+l*c;if(d>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,r=0),d<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,r=0),n===void 0){const u=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),i=Math.asin(2*d),r=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=r}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),d=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+r*c*d,this.y=r*c*a-l*o*d,this.z=r*o*d+l*c*a,this.w=r*o*a-l*c*d):i==="YXZ"?(this.x=l*o*a+r*c*d,this.y=r*c*a-l*o*d,this.z=r*o*d-l*c*a,this.w=r*o*a+l*c*d):i==="ZXY"?(this.x=l*o*a-r*c*d,this.y=r*c*a+l*o*d,this.z=r*o*d+l*c*a,this.w=r*o*a-l*c*d):i==="ZYX"?(this.x=l*o*a-r*c*d,this.y=r*c*a+l*o*d,this.z=r*o*d-l*c*a,this.w=r*o*a+l*c*d):i==="YZX"?(this.x=l*o*a+r*c*d,this.y=r*c*a+l*o*d,this.z=r*o*d-l*c*a,this.w=r*o*a-l*c*d):i==="XZY"&&(this.x=l*o*a-r*c*d,this.y=r*c*a-l*o*d,this.z=r*o*d+l*c*a,this.w=r*o*a+l*c*d),this}clone(){return new It(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new It);const i=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,d=e.z,u=e.w,h,f,p,v,m;return f=i*l+r*c+o*d+a*u,f<0&&(f=-f,l=-l,c=-c,d=-d,u=-u),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),v=Math.sin((1-t)*h)/p,m=Math.sin(t*h)/p):(v=1-t,m=t),n.x=v*i+m*l,n.y=v*r+m*c,n.z=v*o+m*d,n.w=v*a+m*u,n}integrate(e,t,n,i){i===void 0&&(i=new It);const r=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,d=this.z,u=this.w,h=t*.5;return i.x+=h*(r*u+o*d-a*c),i.y+=h*(o*u+a*l-r*d),i.z+=h*(a*u+r*c-o*l),i.w+=h*(-r*l-o*c-a*d),i}}const Qx=new b,eM=new b,tM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class pe{constructor(e){e===void 0&&(e={}),this.id=pe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}pe.idCounter=0;pe.types=tM;class it{constructor(e){e===void 0&&(e={}),this.position=new b,this.quaternion=new It,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return it.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return it.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new b),n.vsub(e,i),t.conjugate(bd),bd.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new b),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new b),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new b),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const bd=new It;class xr extends pe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=e;super({type:pe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let d=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){d=!0;break}d||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new b;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];xr.computeNormal(i,r,o,t)}static computeNormal(e,t,n,i){const r=new b,o=new b;t.vsub(e,o),n.vsub(t,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,r,o,a,l,c){const d=new b;let u=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){d.copy(n.faceNormals[p]),r.vmult(d,d);const v=d.dot(o);v>h&&(h=v,u=p)}const f=[];for(let p=0;p<n.faces[u].length;p++){const v=n.vertices[n.faces[u][p]],m=new b;m.copy(v),r.vmult(m,m),i.vadd(m,m),f.push(m)}u>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,r,o,a,l){const c=new b,d=new b,u=new b,h=new b,f=new b,p=new b;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const _=m.testSepAxis(c,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let _=0;_<g;_++){const x=a?a[_]:_;c.copy(m.faceNormals[x]),n.vmult(c,c);const y=m.testSepAxis(c,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){r.vmult(e.uniqueAxes[g],d);const _=m.testSepAxis(d,e,t,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(d))}else{const g=l?l.length:e.faces.length;for(let _=0;_<g;_++){const x=l?l[_]:_;d.copy(e.faceNormals[x]),r.vmult(d,d);const y=m.testSepAxis(d,e,t,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(d))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],f),h.cross(f,p),!p.almostZero()){p.normalize();const x=m.testSepAxis(p,e,t,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(p))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,r,o){const a=this;xr.project(a,e,n,i,ja),xr.project(t,e,r,o,Ya);const l=ja[0],c=ja[1],d=Ya[0],u=Ya[1];if(l<u||d<c)return!1;const h=l-u,f=d-c;return h<f?h:f}calculateLocalInertia(e,t){const n=new b,i=new b;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,r,o,a){const l=new b,c=new b,d=new b,u=new b,h=new b,f=new b,p=new b,v=new b,m=this,g=[],_=i,x=g;let y=-1,M=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const R=l.dot(e);R<M&&(M=R,y=S)}if(y<0)return;const E=m.faces[y];E.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let R=0;R<m.faces[S].length;R++)E.indexOf(m.faces[S][R])!==-1&&S!==y&&E.connectedFaces.indexOf(S)===-1&&E.connectedFaces.push(S);const A=E.length;for(let S=0;S<A;S++){const R=m.vertices[E[S]],O=m.vertices[E[(S+1)%A]];R.vsub(O,c),d.copy(c),n.vmult(d,d),t.vadd(d,d),u.copy(this.faceNormals[y]),n.vmult(u,u),t.vadd(u,u),d.cross(u,h),h.negate(h),f.copy(R),n.vmult(f,f),t.vadd(f,f);const L=E.connectedFaces[S];p.copy(this.faceNormals[L]);const k=this.getPlaneConstantOfFace(L);v.copy(p),n.vmult(v,v);const F=k-v.dot(t);for(this.clipFaceAgainstPlane(_,x,v,F);_.length;)_.shift();for(;x.length;)_.push(x.shift())}p.copy(this.faceNormals[y]);const P=this.getPlaneConstantOfFace(y);v.copy(p),n.vmult(v,v);const T=P-v.dot(t);for(let S=0;S<_.length;S++){let R=v.dot(_[S])+T;if(R<=r&&(console.log(`clamped: depth=${R} to minDist=${r}`),R=r),R<=o){const O=_[S];if(R<=1e-6){const L={point:O,normal:v,depth:R};a.push(L)}}}}clipFaceAgainstPlane(e,t,n,i){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=n.dot(l)+i;for(let d=0;d<a;d++){if(c=e[d],o=n.dot(c)+i,r<0)if(o<0){const u=new b;u.copy(c),t.push(u)}else{const u=new b;l.lerp(c,r/(r-o),u),t.push(u)}else if(o<0){const u=new b;l.lerp(c,r/(r-o),u),t.push(u),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(n[r],i[r]),e.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=this.vertices;let o,a,l,c,d,u,h=new b;for(let f=0;f<r.length;f++){h.copy(r[f]),t.vmult(h,h),e.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(d===void 0||p.y>d)&&(d=p.y),(l===void 0||p.z<l)&&(l=p.z),(u===void 0||p.z>u)&&(u=p.z)}n.set(o,a,l),i.set(c,d,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new b);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let r=0;r<n;r++){const o=i[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<n;r++){const o=i[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,r=new b;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new b;e.vsub(l,c);const d=a.dot(c),u=new b;r.vsub(l,u);const h=a.dot(u);if(d<0&&h>0||d>0&&h<0)return!1}return-1}static project(e,t,n,i,r){const o=e.vertices.length,a=nM;let l=0,c=0;const d=iM,u=e.vertices;d.setZero(),it.vectorToLocalFrame(n,i,t,a),it.pointToLocalFrame(n,i,d,d);const h=d.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const p=u[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const ja=[],Ya=[];new b;const nM=new b,iM=new b;class kc extends pe{constructor(e){super({type:pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=b,r=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new xr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new b),kc.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let r=0;r!==n.length;r++)t.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)gi.set(r[o][0],r[o][1],r[o][2]),t.vmult(gi,gi),e.vadd(gi,gi),n(gi.x,gi.y,gi.z)}calculateWorldAABB(e,t,n,i){const r=this.halfExtents;Dn[0].set(r.x,r.y,r.z),Dn[1].set(-r.x,r.y,r.z),Dn[2].set(-r.x,-r.y,r.z),Dn[3].set(-r.x,-r.y,-r.z),Dn[4].set(r.x,-r.y,-r.z),Dn[5].set(r.x,r.y,-r.z),Dn[6].set(-r.x,r.y,-r.z),Dn[7].set(r.x,-r.y,r.z);const o=Dn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Dn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,d=l.y,u=l.z;c>i.x&&(i.x=c),d>i.y&&(i.y=d),u>i.z&&(i.z=u),c<n.x&&(n.x=c),d<n.y&&(n.y=d),u<n.z&&(n.z=u)}}}const gi=new b,Dn=[new b,new b,new b,new b,new b,new b,new b,new b],zc={DYNAMIC:1,STATIC:2,KINEMATIC:4},Vc={AWAKE:0,SLEEPY:1,SLEEPING:2};class ve extends df{constructor(e){e===void 0&&(e={}),super(),this.id=ve.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new b,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new b,this.force=new b;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?ve.STATIC:ve.DYNAMIC,typeof e.type==typeof ve.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=ve.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new It,this.initQuaternion=new It,this.previousQuaternion=new It,this.interpolatedQuaternion=new It,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new b,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new Rn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new Rn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new b(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new b(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new _t,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=ve.AWAKE,this.wakeUpAfterNarrowphase=!1,e===ve.SLEEPING&&this.dispatchEvent(ve.wakeupEvent)}sleep(){this.sleepState=ve.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===ve.AWAKE&&n<i?(this.sleepState=ve.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(ve.sleepyEvent)):t===ve.SLEEPY&&n>i?this.wakeUp():t===ve.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ve.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ve.SLEEPING||this.type===ve.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new b),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new b),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new b),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new b,r=new It;return t&&i.copy(t),n&&r.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let r=0;r!==n;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,r=sM,o=rM,a=this.quaternion,l=this.aabb,c=oM;for(let d=0;d!==i;d++){const u=e[d];a.vmult(t[d],r),r.vadd(this.position,r),a.mult(n[d],o),u.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),d===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=aM,i=lM;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new b),this.type!==ve.DYNAMIC)return;this.sleepState===ve.SLEEPING&&this.wakeUp();const n=cM;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new b),this.type!==ve.DYNAMIC)return;const n=uM,i=dM;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===ve.DYNAMIC&&(this.sleepState===ve.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new b),this.type!==ve.DYNAMIC)return;this.sleepState===ve.SLEEPING&&this.wakeUp();const n=t,i=hM;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=fM;n.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new b),this.type!==ve.DYNAMIC)return;const n=pM,i=mM;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=gM;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),kc.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new b;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ve.DYNAMIC||this.type===ve.KINEMATIC)||this.sleepState===ve.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,d=this.invMass,u=this.invInertiaWorld,h=this.linearFactor,f=d*e;i.x+=a.x*f*h.x,i.y+=a.y*f*h.y,i.z+=a.z*f*h.z;const p=u.elements,v=this.angularFactor,m=l.x*v.x,g=l.y*v.y,_=l.z*v.z;r.x+=e*(p[0]*m+p[1]*g+p[2]*_),r.y+=e*(p[3]*m+p[4]*g+p[5]*_),r.z+=e*(p[6]*m+p[7]*g+p[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ve.idCounter=0;ve.COLLIDE_EVENT_NAME="collide";ve.DYNAMIC=zc.DYNAMIC;ve.STATIC=zc.STATIC;ve.KINEMATIC=zc.KINEMATIC;ve.AWAKE=Vc.AWAKE;ve.SLEEPY=Vc.SLEEPY;ve.SLEEPING=Vc.SLEEPING;ve.wakeupEvent={type:"wakeup"};ve.sleepyEvent={type:"sleepy"};ve.sleepEvent={type:"sleep"};const sM=new b,rM=new It,oM=new _t,aM=new Rn,lM=new Rn;new Rn;const cM=new b,uM=new b,dM=new b,hM=new b,fM=new b,pM=new b,mM=new b,gM=new b;class vM{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&ve.STATIC)!==0||e.sleepState===ve.SLEEPING)&&((t.type&ve.STATIC)!==0||t.sleepState===ve.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const r=_M;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=yM,i=xM,r=MM,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=r[a].id,d=l<c?`${l},${c}`:`${c},${l}`;n[d]=a,n.keys.push(d)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(r[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new b;e.position.vsub(t.position,n);const i=e.shapes[0],r=t.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const _M=new b;new b;new It;new b;const yM={keys:[]},xM=[],MM=[];new b;new b;new b;class SM extends vM{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,r=i.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const r=e.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}}class Go{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let hf,ff,pf,mf,gf,vf,_f;const Hc={CLOSEST:1,ANY:2,ALL:4};hf=pe.types.SPHERE;ff=pe.types.PLANE;pf=pe.types.BOX;mf=pe.types.CYLINDER;gf=pe.types.CONVEXPOLYHEDRON;vf=pe.types.HEIGHTFIELD;_f=pe.types.TRIMESH;class Rt{get[hf](){return this._intersectSphere}get[ff](){return this._intersectPlane}get[pf](){return this._intersectBox}get[mf](){return this._intersectConvex}get[gf](){return this._intersectConvex}get[vf](){return this._intersectHeightfield}get[_f](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new b),t===void 0&&(t=new b),this.from=e.clone(),this.to=t.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Rt.ANY,this.result=new Go,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||Rt.ANY,this.result=t.result||new Go,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Ed),Ka.length=0,e.broadphase.aabbQuery(e,Ed,Ka),this.intersectBodies(Ka),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=bM,r=EM;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,r,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const r=this.from;if(OM(r,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,r)}_intersectPlane(e,t,n,i,r){const o=this.from,a=this.to,l=this.direction,c=new b(0,0,1);t.vmult(c,c);const d=new b;o.vsub(n,d);const u=d.dot(c);a.vsub(n,d);const h=d.dot(c);if(u*h>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new b,v=new b,m=new b;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,v),o.vadd(v,m),this.reportIntersection(c,m,r,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,r=this.from;t.x=Math.min(i.x,r.x),t.y=Math.min(i.y,r.y),t.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(e,t,n,i,r){e.data,e.elementSize;const o=wM;o.from.copy(this.from),o.to.copy(this.to),it.pointToLocalFrame(n,t,o.from,o.from),it.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=TM;let l,c,d,u;l=c=0,d=u=e.data.length-1;const h=new _t;o.getAABB(h),e.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),d=Math.min(d,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<d;f++)for(let p=c;p<u;p++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(e.getConvexTrianglePillar(f,p,!1),it.pointToWorldFrame(n,t,e.pillarOffset,xo),this._intersectConvex(e.pillarConvex,t,xo,i,r,wd),this.result.shouldStop)return;e.getConvexTrianglePillar(f,p,!0),it.pointToWorldFrame(n,t,e.pillarOffset,xo),this._intersectConvex(e.pillarConvex,t,xo,i,r,wd)}}}_intersectSphere(e,t,n,i,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,d=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=d**2-4*c*u,f=AM,p=CM;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1);else{const v=(-d-Math.sqrt(h))/(2*c),m=(-d+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,i,-1))}}_intersectConvex(e,t,n,i,r,o){const a=RM,l=Td,c=o&&o.faceList||null,d=e.faces,u=e.vertices,h=e.faceNormals,f=this.direction,p=this.from,v=this.to,m=p.distanceTo(v),g=c?c.length:d.length,_=this.result;for(let x=0;!_.shouldStop&&x<g;x++){const y=c?c[x]:x,M=d[y],E=h[y],A=t,P=n;l.copy(u[M[0]]),A.vmult(l,l),l.vadd(P,l),l.vsub(p,l),A.vmult(E,a);const T=f.dot(a);if(Math.abs(T)<this.precision)continue;const S=a.dot(l)/T;if(!(S<0)){f.scale(S,Qt),Qt.vadd(p,Qt),En.copy(u[M[0]]),A.vmult(En,En),P.vadd(En,En);for(let R=1;!_.shouldStop&&R<M.length-1;R++){Nn.copy(u[M[R]]),Fn.copy(u[M[R+1]]),A.vmult(Nn,Nn),A.vmult(Fn,Fn),P.vadd(Nn,Nn),P.vadd(Fn,Fn);const O=Qt.distanceTo(p);!(Rt.pointInTriangle(Qt,En,Nn,Fn)||Rt.pointInTriangle(Qt,Nn,En,Fn))||O>m||this.reportIntersection(a,Qt,r,i,y)}}}}_intersectTrimesh(e,t,n,i,r,o){const a=IM,l=UM,c=BM,d=Td,u=PM,h=LM,f=DM,p=FM,v=NM,m=e.indices;e.vertices;const g=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),it.vectorToLocalFrame(n,t,x,u),it.pointToLocalFrame(n,t,g,h),it.pointToLocalFrame(n,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,h.x*=e.scale.x,h.y*=e.scale.y,h.z*=e.scale.z,f.vsub(h,u),u.normalize();const y=h.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let M=0,E=l.length;!this.result.shouldStop&&M!==E;M++){const A=l[M];e.getNormal(A,a),e.getVertex(m[A*3],En),En.vsub(h,d);const P=u.dot(a),T=a.dot(d)/P;if(T<0)continue;u.scale(T,Qt),Qt.vadd(h,Qt),e.getVertex(m[A*3+1],Nn),e.getVertex(m[A*3+2],Fn);const S=Qt.distanceSquared(h);!(Rt.pointInTriangle(Qt,Nn,En,Fn)||Rt.pointInTriangle(Qt,En,Nn,Fn))||S>y||(it.vectorToWorldFrame(t,a,v),it.pointToWorldFrame(n,t,Qt,p),this.reportIntersection(v,p,r,i,A))}l.length=0}reportIntersection(e,t,n,i,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Rt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case Rt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case Rt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Wi),n.vsub(t,lr),e.vsub(t,Za);const r=Wi.dot(Wi),o=Wi.dot(lr),a=Wi.dot(Za),l=lr.dot(lr),c=lr.dot(Za);let d,u;return(d=l*a-o*c)>=0&&(u=r*c-o*a)>=0&&d+u<r*l-o*o}}Rt.CLOSEST=Hc.CLOSEST;Rt.ANY=Hc.ANY;Rt.ALL=Hc.ALL;const Ed=new _t,Ka=[],lr=new b,Za=new b,bM=new b,EM=new It,Qt=new b,En=new b,Nn=new b,Fn=new b;new b;new Go;const wd={faceList:[0]},xo=new b,wM=new Rt,TM=[],AM=new b,CM=new b,RM=new b;new b;new b;const Td=new b,IM=new b,PM=new b,LM=new b,DM=new b,NM=new b,FM=new b;new _t;const UM=[],BM=new it,Wi=new b,Mo=new b;function OM(s,e,t){t.vsub(s,Wi);const n=Wi.dot(e);return e.scale(n,Mo),Mo.vadd(s,Mo),t.distanceTo(Mo)}class kM{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Ad{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class Vr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Vr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Ad,this.jacobianElementB=new Ad,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,r=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,d=i.invMassSolve;return r.scale(c,Cd),a.scale(d,Rd),n.invInertiaWorldSolve.vmult(o,Id),i.invInertiaWorldSolve.vmult(l,Pd),e.multiplyVectors(Cd,Id)+t.multiplyVectors(Rd,Pd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,So),c+=So.dot(e.rotational),l.vmult(t.rotational,So),c+=So.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=zM;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Vr.idCounter=0;const Cd=new b,Rd=new b,Id=new b,Pd=new b,So=new b,zM=new b;class VM extends Vr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(e){const t=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,l=HM,c=GM,d=i.velocity,u=i.angularVelocity;i.force,i.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const p=WM,v=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(i.position,p),p.vsub(o,p);const _=g.dot(p),x=this.restitution+1,y=x*h.dot(g)-x*d.dot(g)+f.dot(c)-u.dot(l),M=this.computeGiMf();return-_*t-y*n-e*M}getImpactVelocityAlongNormal(){const e=$M,t=XM,n=qM,i=jM,r=YM;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,r),this.ni.dot(r)}}const HM=new b,GM=new b,WM=new b,$M=new b,XM=new b,qM=new b,jM=new b,YM=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Ld extends Vr{constructor(e,t,n){super(e,t,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=KM,o=ZM,a=this.t;n.cross(a,r),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const d=this.computeGW(),u=this.computeGiMf();return-d*t-e*u}}const KM=new b,ZM=new b;class Hs{constructor(e,t,n){n=kM.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Hs.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Hs.idCounter=0;class ji{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=ji.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}ji.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Rt;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class JM extends pe{constructor(){super({type:pe.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new b),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Zn.set(0,0,1),t.vmult(Zn,Zn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),Zn.x===1?i.x=e.x:Zn.x===-1&&(n.x=e.x),Zn.y===1?i.y=e.y:Zn.y===-1&&(n.y=e.y),Zn.z===1?i.z=e.z:Zn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Zn=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Un{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new _t,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const r=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;r.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(r[l].insert(e,t,n+1))return!0;a&&(r.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new Un({aabb:new _t({lowerBound:new b(0,0,0)})}),new Un({aabb:new _t({lowerBound:new b(1,0,0)})}),new Un({aabb:new _t({lowerBound:new b(1,1,0)})}),new Un({aabb:new _t({lowerBound:new b(1,1,1)})}),new Un({aabb:new _t({lowerBound:new b(0,1,1)})}),new Un({aabb:new _t({lowerBound:new b(0,0,1)})}),new Un({aabb:new _t({lowerBound:new b(1,0,1)})}),new Un({aabb:new _t({lowerBound:new b(0,1,0)})})),n.vsub(t,Ui),Ui.scale(.5,Ui);const r=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=r;const l=a.aabb.lowerBound;l.x*=Ui.x,l.y*=Ui.y,l.z*=Ui.z,l.vadd(t,l),l.vadd(Ui,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(bo),bo.toLocalFrame(t,bo),this.aabbQuery(bo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class QM extends Un{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const Ui=new b,bo=new _t;class Wo extends pe{constructor(e,t){super({type:pe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new _t,this.edges=null,this.scale=new b(1,1,1),this.tree=new QM,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new _t,i=new b,r=new b,o=new b,a=[i,r,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],r),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){Eo.copy(e);const n=this.scale,i=n.x,r=n.y,o=n.z,a=Eo.lowerBound,l=Eo.upperBound;return a.x/=i,a.y/=r,a.z/=o,l.x/=i,l.y/=r,l.z/=o,this.tree.aabbQuery(Eo,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=eS,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,r=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(r,Fd),this.getVertex(o,Ud),this.getVertex(a,Bd),Wo.computeNormal(Ud,Fd,Bd,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,r)=>{const o=i<r?`${i}_${r}`:`${r}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const r=i*3,o=this.indices[r],a=this.indices[r+1],l=this.indices[r+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const r=n[i].split("_");this.edges[2*i]=parseInt(r[0],10),this.edges[2*i+1]=parseInt(r[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=tS,i=nS;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,Nd),n.vsub(t,Dd),Dd.cross(Nd,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),it.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const r=e*3;this.getVertex(this.indices[r],t),this.getVertex(this.indices[r+1],n),this.getVertex(this.indices[r+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(Bi);const n=Bi.upperBound.x-Bi.lowerBound.x,i=Bi.upperBound.y-Bi.lowerBound.y,r=Bi.upperBound.z-Bi.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*r*2*r),1/12*e*(2*n*2*n+2*r*2*r),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const r=iS;this.getVertex(0,r),t.copy(r),n.copy(r);for(let o=0;o!==i;o++)this.getVertex(o,r),r.x<t.x?t.x=r.x:r.x>n.x&&(n.x=r.x),r.y<t.y?t.y=r.y:r.y>n.y&&(n.y=r.y),r.z<t.z?t.z=r.z:r.z>n.z&&(n.z=r.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new b;for(let i=0,r=t.length/3;i!==r;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const r=sS,o=rS;r.position=e,r.quaternion=t,this.aabb.toWorldFrame(r,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,r){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),r===void 0&&(r=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const d=c/i*r,u=l/n*Math.PI*2,h=(e+t*Math.cos(u))*Math.cos(d),f=(e+t*Math.cos(u))*Math.sin(d),p=t*Math.sin(u);o.push(h,f,p)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const d=(i+1)*l+c-1,u=(i+1)*(l-1)+c-1,h=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(d,u,f),a.push(u,h,f)}return new Wo(o,a)}}const eS=new b,Eo=new _t,tS=new b,nS=new b,Dd=new b,Nd=new b,Fd=new b,Ud=new b,Bd=new b,Bi=new _t,iS=new b,sS=new it,rS=new _t;class oS{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class aS extends oS{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,d=e;let u,h,f,p,v,m;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const g=cS,_=uS,x=lS;g.length=a,_.length=a,x.length=a;for(let y=0;y!==a;y++){const M=o[y];x[y]=0,_[y]=M.computeB(d),g[y]=1/M.computeC()}if(a!==0){for(let E=0;E!==c;E++){const A=l[E],P=A.vlambda,T=A.wlambda;P.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){p=0;for(let E=0;E!==a;E++){const A=o[E];u=_[E],h=g[E],m=x[E],v=A.computeGWlambda(),f=h*(u-v-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),x[E]+=f,p+=f>0?f:-f,A.addToWlambda(f)}if(p*p<r)break}for(let E=0;E!==c;E++){const A=l[E],P=A.velocity,T=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),P.vadd(A.vlambda,P),A.wlambda.vmul(A.angularFactor,A.wlambda),T.vadd(A.wlambda,T)}let y=o.length;const M=1/d;for(;y--;)o[y].multiplier=x[y]*M}return n}}const lS=[],cS=[],uS=[];class dS{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class hS extends dS{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const pt={sphereSphere:pe.types.SPHERE,spherePlane:pe.types.SPHERE|pe.types.PLANE,boxBox:pe.types.BOX|pe.types.BOX,sphereBox:pe.types.SPHERE|pe.types.BOX,planeBox:pe.types.PLANE|pe.types.BOX,convexConvex:pe.types.CONVEXPOLYHEDRON,sphereConvex:pe.types.SPHERE|pe.types.CONVEXPOLYHEDRON,planeConvex:pe.types.PLANE|pe.types.CONVEXPOLYHEDRON,boxConvex:pe.types.BOX|pe.types.CONVEXPOLYHEDRON,sphereHeightfield:pe.types.SPHERE|pe.types.HEIGHTFIELD,boxHeightfield:pe.types.BOX|pe.types.HEIGHTFIELD,convexHeightfield:pe.types.CONVEXPOLYHEDRON|pe.types.HEIGHTFIELD,sphereParticle:pe.types.PARTICLE|pe.types.SPHERE,planeParticle:pe.types.PLANE|pe.types.PARTICLE,boxParticle:pe.types.BOX|pe.types.PARTICLE,convexParticle:pe.types.PARTICLE|pe.types.CONVEXPOLYHEDRON,cylinderCylinder:pe.types.CYLINDER,sphereCylinder:pe.types.SPHERE|pe.types.CYLINDER,planeCylinder:pe.types.PLANE|pe.types.CYLINDER,boxCylinder:pe.types.BOX|pe.types.CYLINDER,convexCylinder:pe.types.CONVEXPOLYHEDRON|pe.types.CYLINDER,heightfieldCylinder:pe.types.HEIGHTFIELD|pe.types.CYLINDER,particleCylinder:pe.types.PARTICLE|pe.types.CYLINDER,sphereTrimesh:pe.types.SPHERE|pe.types.TRIMESH,planeTrimesh:pe.types.PLANE|pe.types.TRIMESH};class fS{get[pt.sphereSphere](){return this.sphereSphere}get[pt.spherePlane](){return this.spherePlane}get[pt.boxBox](){return this.boxBox}get[pt.sphereBox](){return this.sphereBox}get[pt.planeBox](){return this.planeBox}get[pt.convexConvex](){return this.convexConvex}get[pt.sphereConvex](){return this.sphereConvex}get[pt.planeConvex](){return this.planeConvex}get[pt.boxConvex](){return this.boxConvex}get[pt.sphereHeightfield](){return this.sphereHeightfield}get[pt.boxHeightfield](){return this.boxHeightfield}get[pt.convexHeightfield](){return this.convexHeightfield}get[pt.sphereParticle](){return this.sphereParticle}get[pt.planeParticle](){return this.planeParticle}get[pt.boxParticle](){return this.boxParticle}get[pt.convexParticle](){return this.convexParticle}get[pt.cylinderCylinder](){return this.convexConvex}get[pt.sphereCylinder](){return this.sphereConvex}get[pt.planeCylinder](){return this.planeConvex}get[pt.boxCylinder](){return this.boxConvex}get[pt.convexCylinder](){return this.convexConvex}get[pt.heightfieldCylinder](){return this.heightfieldCylinder}get[pt.particleCylinder](){return this.particleCylinder}get[pt.sphereTrimesh](){return this.sphereTrimesh}get[pt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new hS,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new VM(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,d=i.material||t.material;return c&&d&&c.restitution>=0&&d.restitution>=0&&(a.restitution=c.restitution*d.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const d=r.material||n.material,u=o.material||i.material;if(d&&u&&d.friction>=0&&u.friction>=0&&(c=d.friction*u.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,v=p.length?p.pop():new Ld(n,i,h*f),m=p.length?p.pop():new Ld(n,i,h*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-h*f,v.maxForce=m.maxForce=h*f,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=e.enabled,t.push(v,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Oi.setZero(),ys.setZero(),xs.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(Oi.vadd(t.ni,Oi),ys.vadd(t.ri,ys),xs.vadd(t.rj,xs)):(Oi.vsub(t.ni,Oi),ys.vadd(t.rj,ys),xs.vadd(t.ri,xs));const o=1/e;ys.scale(o,n.ri),xs.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Oi.normalize(),Oi.tangents(n.t,i.t)}getContacts(e,t,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=gS,c=vS,d=pS,u=mS;for(let h=0,f=e.length;h!==f;h++){const p=e[h],v=t[h];let m=null;p.material&&v.material&&(m=n.getContactMaterial(p.material,v.material)||null);const g=p.type&ve.KINEMATIC&&v.type&ve.STATIC||p.type&ve.STATIC&&v.type&ve.KINEMATIC||p.type&ve.KINEMATIC&&v.type&ve.KINEMATIC;for(let _=0;_<p.shapes.length;_++){p.quaternion.mult(p.shapeOrientations[_],l),p.quaternion.vmult(p.shapeOffsets[_],d),d.vadd(p.position,d);const x=p.shapes[_];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],u),u.vadd(v.position,u);const M=v.shapes[y];if(!(x.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&x.collisionFilterGroup)||d.distanceTo(u)>x.boundingSphereRadius+M.boundingSphereRadius)continue;let E=null;x.material&&M.material&&(E=n.getContactMaterial(x.material,M.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const A=x.type|M.type,P=this[A];if(P){let T=!1;x.type<M.type?T=P.call(this,x,M,d,u,l,c,p,v,x,M,g):T=P.call(this,M,x,u,d,c,l,v,p,x,M,g),T&&g&&(n.shapeOverlapKeeper.set(x.id,M.id),n.bodyOverlapKeeper.set(p.id,v.id))}}}}}sphereSphere(e,t,n,i,r,o,a,l,c,d,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const h=this.createContactEquation(a,l,e,t,c,d);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(e.radius,h.ri),h.rj.scale(-t.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(e,t,n,i,r,o,a,l,c,d,u){const h=this.createContactEquation(a,l,e,t,c,d);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(e.radius,h.ri),n.vsub(i,wo),h.ni.scale(h.ni.dot(wo),Od),wo.vsub(Od,h.rj),-wo.dot(h.ni)<=e.radius){if(u)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(i,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,u)}sphereBox(e,t,n,i,r,o,a,l,c,d,u){const h=this.v3pool,f=GS;n.vsub(i,To),t.getSideNormals(f,o);const p=e.radius;let v=!1;const m=$S,g=XS,_=qS;let x=null,y=0,M=0,E=0,A=null;for(let N=0,X=f.length;N!==X&&v===!1;N++){const z=zS;z.copy(f[N]);const q=z.length();z.normalize();const Q=To.dot(z);if(Q<q+p&&Q>0){const oe=VS,te=HS;oe.copy(f[(N+1)%3]),te.copy(f[(N+2)%3]);const De=oe.length(),et=te.length();oe.normalize(),te.normalize();const He=To.dot(oe),Y=To.dot(te);if(He<De&&He>-De&&Y<et&&Y>-et){const J=Math.abs(Q-q-p);if((A===null||J<A)&&(A=J,M=He,E=Y,x=q,m.copy(z),g.copy(oe),_.copy(te),y++,u))return!0}}}if(y){v=!0;const N=this.createContactEquation(a,l,e,t,c,d);m.scale(-p,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(x,m),g.scale(M,g),m.vadd(g,m),_.scale(E,_),m.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let P=h.get();const T=WS;for(let N=0;N!==2&&!v;N++)for(let X=0;X!==2&&!v;X++)for(let z=0;z!==2&&!v;z++)if(P.set(0,0,0),N?P.vadd(f[0],P):P.vsub(f[0],P),X?P.vadd(f[1],P):P.vsub(f[1],P),z?P.vadd(f[2],P):P.vsub(f[2],P),i.vadd(P,T),T.vsub(n,T),T.lengthSquared()<p*p){if(u)return!0;v=!0;const q=this.createContactEquation(a,l,e,t,c,d);q.ri.copy(T),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(p,q.ri),q.rj.copy(P),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),q.rj.vadd(i,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}h.release(P),P=null;const S=h.get(),R=h.get(),O=h.get(),L=h.get(),k=h.get(),F=f.length;for(let N=0;N!==F&&!v;N++)for(let X=0;X!==F&&!v;X++)if(N%3!==X%3){f[X].cross(f[N],S),S.normalize(),f[N].vadd(f[X],R),O.copy(n),O.vsub(R,O),O.vsub(i,O);const z=O.dot(S);S.scale(z,L);let q=0;for(;q===N%3||q===X%3;)q++;k.copy(n),k.vsub(L,k),k.vsub(R,k),k.vsub(i,k);const Q=Math.abs(z),oe=k.length();if(Q<f[q].length()&&oe<p){if(u)return!0;v=!0;const te=this.createContactEquation(a,l,e,t,c,d);R.vadd(L,te.rj),te.rj.copy(te.rj),k.negate(te.ni),te.ni.normalize(),te.ri.copy(te.rj),te.ri.vadd(i,te.ri),te.ri.vsub(n,te.ri),te.ri.normalize(),te.ri.scale(p,te.ri),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),te.rj.vadd(i,te.rj),te.rj.vsub(l.position,te.rj),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}}h.release(S,R,O,L,k)}planeBox(e,t,n,i,r,o,a,l,c,d,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,r,o,a,l,e,t,u)}convexConvex(e,t,n,i,r,o,a,l,c,d,u,h,f){const p=lb;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,r,i,o,p,h,f)){const v=[],m=cb;e.clipAgainstHull(n,r,t,i,o,p,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(u)return!0;const x=this.createContactEquation(a,l,e,t,c,d),y=x.ri,M=x.rj;p.negate(x.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,y),M.copy(v[_].point),y.vsub(n,y),M.vsub(i,M),y.vadd(n,y),y.vsub(a.position,y),M.vadd(i,M),M.vsub(l.position,M),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,r,o,a,l,c,d,u){const h=this.v3pool;n.vsub(i,jS);const f=t.faceNormals,p=t.faces,v=t.vertices,m=e.radius;let g=!1;for(let _=0;_!==v.length;_++){const x=v[_],y=JS;o.vmult(x,y),i.vadd(y,y);const M=ZS;if(y.vsub(n,M),M.lengthSquared()<m*m){if(u)return!0;g=!0;const E=this.createContactEquation(a,l,e,t,c,d);E.ri.copy(M),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),y.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let _=0,x=p.length;_!==x&&g===!1;_++){const y=f[_],M=p[_],E=QS;o.vmult(y,E);const A=eb;o.vmult(v[M[0]],A),A.vadd(i,A);const P=tb;E.scale(-m,P),n.vadd(P,P);const T=nb;P.vsub(A,T);const S=T.dot(E),R=ib;if(n.vsub(A,R),S<0&&R.dot(E)>0){const O=[];for(let L=0,k=M.length;L!==k;L++){const F=h.get();o.vmult(v[M[L]],F),i.vadd(F,F),O.push(F)}if(kS(O,E,n)){if(u)return!0;g=!0;const L=this.createContactEquation(a,l,e,t,c,d);E.scale(-m,L.ri),E.negate(L.ni);const k=h.get();E.scale(-S,k);const F=h.get();E.scale(-m,F),n.vsub(i,L.rj),L.rj.vadd(F,L.rj),L.rj.vadd(k,L.rj),L.rj.vadd(i,L.rj),L.rj.vsub(l.position,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(a.position,L.ri),h.release(k),h.release(F),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult);for(let N=0,X=O.length;N!==X;N++)h.release(O[N]);return}else for(let L=0;L!==M.length;L++){const k=h.get(),F=h.get();o.vmult(v[M[(L+1)%M.length]],k),o.vmult(v[M[(L+2)%M.length]],F),i.vadd(k,k),i.vadd(F,F);const N=YS;F.vsub(k,N);const X=KS;N.unit(X);const z=h.get(),q=h.get();n.vsub(k,q);const Q=q.dot(X);X.scale(Q,z),z.vadd(k,z);const oe=h.get();if(z.vsub(n,oe),Q>0&&Q*Q<N.lengthSquared()&&oe.lengthSquared()<m*m){if(u)return!0;const te=this.createContactEquation(a,l,e,t,c,d);z.vsub(i,te.rj),z.vsub(n,te.ni),te.ni.normalize(),te.ni.scale(m,te.ri),te.rj.vadd(i,te.rj),te.rj.vsub(l.position,te.rj),te.ri.vadd(n,te.ri),te.ri.vsub(a.position,te.ri),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult);for(let De=0,et=O.length;De!==et;De++)h.release(O[De]);h.release(k),h.release(F),h.release(z),h.release(oe),h.release(q);return}h.release(k),h.release(F),h.release(z),h.release(oe),h.release(q)}for(let L=0,k=O.length;L!==k;L++)h.release(O[L])}}}planeConvex(e,t,n,i,r,o,a,l,c,d,u){const h=sb,f=rb;f.set(0,0,1),r.vmult(f,f);let p=0;const v=ob;for(let m=0;m!==t.vertices.length;m++)if(h.copy(t.vertices[m]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,d),x=ab;f.scale(f.dot(v),x),h.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(f),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,u)}sphereHeightfield(e,t,n,i,r,o,a,l,c,d,u){const h=t.data,f=e.radius,p=t.elementSize,v=Mb,m=xb;it.pointToLocalFrame(i,o,n,m);let g=Math.floor((m.x-f)/p)-1,_=Math.ceil((m.x+f)/p)+1,x=Math.floor((m.y-f)/p)-1,y=Math.ceil((m.y+f)/p)+1;if(_<0||y<0||g>h.length||x>h[0].length)return;g<0&&(g=0),_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),y>=h[0].length&&(y=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const M=[];t.getRectMinMax(g,x,_,y,M);const E=M[0],A=M[1];if(m.z-f>A||m.z+f<E)return;const P=this.result;for(let T=g;T<_;T++)for(let S=x;S<y;S++){const R=P.length;let O=!1;if(t.getConvexTrianglePillar(T,S,!1),it.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,u)),u&&O||(t.getConvexTrianglePillar(T,S,!0),it.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,r,o,a,l,e,t,u)),u&&O))return!0;if(P.length-R>2)return}}boxHeightfield(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,u)}convexHeightfield(e,t,n,i,r,o,a,l,c,d,u){const h=t.data,f=t.elementSize,p=e.boundingSphereRadius,v=_b,m=yb,g=vb;it.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-p)/f)-1,x=Math.ceil((g.x+p)/f)+1,y=Math.floor((g.y-p)/f)-1,M=Math.ceil((g.y+p)/f)+1;if(x<0||M<0||_>h.length||y>h[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),M<0&&(M=0),_>=h.length&&(_=h.length-1),x>=h.length&&(x=h.length-1),M>=h[0].length&&(M=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const E=[];t.getRectMinMax(_,y,x,M,E);const A=E[0],P=E[1];if(!(g.z-p>P||g.z+p<A))for(let T=_;T<x;T++)for(let S=y;S<M;S++){let R=!1;if(t.getConvexTrianglePillar(T,S,!1),it.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,u,m,null)),u&&R||(t.getConvexTrianglePillar(T,S,!0),it.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.convexConvex(e,t.pillarConvex,n,v,r,o,a,l,null,null,u,m,null)),u&&R))return!0}}sphereParticle(e,t,n,i,r,o,a,l,c,d,u){const h=fb;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=e.radius*e.radius){if(u)return!0;const p=this.createContactEquation(l,a,t,e,c,d);h.normalize(),p.rj.copy(h),p.rj.scale(e.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(e,t,n,i,r,o,a,l,c,d,u){const h=ub;h.set(0,0,1),a.quaternion.vmult(h,h);const f=db;if(i.vsub(a.position,f),h.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,t,e,c,d);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=hb;h.scale(h.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,r,o,a,l,c,d,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,r,o,a,l,e,t,u)}convexParticle(e,t,n,i,r,o,a,l,c,d,u){let h=-1;const f=mb,p=gb;let v=null;const m=pb;if(m.copy(i),m.vsub(n,m),r.conjugate(kd),kd.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let g=0,_=e.faces.length;g!==_;g++){const x=[e.worldVertices[e.faces[g][0]]],y=e.worldFaceNormals[g];i.vsub(x[0],zd);const M=-y.dot(zd);if(v===null||Math.abs(M)<Math.abs(v)){if(u)return!0;v=M,h=g,f.copy(y)}}if(h!==-1){const g=this.createContactEquation(l,a,t,e,c,d);f.scale(v,p),p.vadd(i,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,x=g.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,r,o,a,l,c,d,u){return this.convexHeightfield(t,e,i,n,o,r,l,a,c,d,u)}particleCylinder(e,t,n,i,r,o,a,l,c,d,u){return this.convexParticle(t,e,i,n,o,r,l,a,c,d,u)}sphereTrimesh(e,t,n,i,r,o,a,l,c,d,u){const h=wS,f=TS,p=AS,v=CS,m=RS,g=IS,_=NS,x=ES,y=SS,M=FS;it.pointToLocalFrame(i,o,n,m);const E=e.radius;_.lowerBound.set(m.x-E,m.y-E,m.z-E),_.upperBound.set(m.x+E,m.y+E,m.z+E),t.getTrianglesInAABB(_,M);const A=bS,P=e.radius*e.radius;for(let L=0;L<M.length;L++)for(let k=0;k<3;k++)if(t.getVertex(t.indices[M[L]*3+k],A),A.vsub(m,y),y.lengthSquared()<=P){if(x.copy(A),it.pointToWorldFrame(i,o,x,A),A.vsub(n,y),u)return!0;let F=this.createContactEquation(a,l,e,t,c,d);F.ni.copy(y),F.ni.normalize(),F.ri.copy(F.ni),F.ri.scale(e.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.copy(A),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}for(let L=0;L<M.length;L++)for(let k=0;k<3;k++){t.getVertex(t.indices[M[L]*3+k],h),t.getVertex(t.indices[M[L]*3+(k+1)%3],f),f.vsub(h,p),m.vsub(f,g);const F=g.dot(p);m.vsub(h,g);let N=g.dot(p);if(N>0&&F<0&&(m.vsub(h,g),v.copy(p),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(h,g),g.distanceTo(m)<e.radius)){if(u)return!0;const z=this.createContactEquation(a,l,e,t,c,d);g.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(n,z.ri),z.ri.vsub(a.position,z.ri),it.pointToWorldFrame(i,o,g,g),g.vsub(l.position,z.rj),it.vectorToWorldFrame(o,z.ni,z.ni),it.vectorToWorldFrame(o,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}const T=PS,S=LS,R=DS,O=MS;for(let L=0,k=M.length;L!==k;L++){t.getTriangleVertices(M[L],T,S,R),t.getNormal(M[L],O),m.vsub(T,g);let F=g.dot(O);if(O.scale(F,g),m.vsub(g,g),F=g.distanceTo(m),Rt.pointInTriangle(g,T,S,R)&&F<e.radius){if(u)return!0;let N=this.createContactEquation(a,l,e,t,c,d);g.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),it.pointToWorldFrame(i,o,g,g),g.vsub(l.position,N.rj),it.vectorToWorldFrame(o,N.ni,N.ni),it.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}M.length=0}planeTrimesh(e,t,n,i,r,o,a,l,c,d,u){const h=new b,f=_S;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<t.vertices.length/3;p++){t.getVertex(p,h);const v=new b;v.copy(h),it.pointToWorldFrame(i,o,v,h);const m=yS;if(h.vsub(n,m),f.dot(m)<=0){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,d);_.ni.copy(f);const x=xS;f.scale(m.dot(f),x),h.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Oi=new b,ys=new b,xs=new b,pS=new b,mS=new b,gS=new It,vS=new It,_S=new b,yS=new b,xS=new b,MS=new b,SS=new b;new b;const bS=new b,ES=new b,wS=new b,TS=new b,AS=new b,CS=new b,RS=new b,IS=new b,PS=new b,LS=new b,DS=new b,NS=new _t,FS=[],wo=new b,Od=new b,US=new b,BS=new b,OS=new b;function kS(s,e,t){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=US;s[(r+1)%i].vsub(o,a);const l=BS;a.cross(e,l);const c=OS;t.vsub(o,c);const d=l.dot(c);if(n===null||d>0&&n===!0||d<=0&&n===!1){n===null&&(n=d>0);continue}else return!1}return!0}const To=new b,zS=new b,VS=new b,HS=new b,GS=[new b,new b,new b,new b,new b,new b],WS=new b,$S=new b,XS=new b,qS=new b,jS=new b,YS=new b,KS=new b,ZS=new b,JS=new b,QS=new b,eb=new b,tb=new b,nb=new b,ib=new b;new b;new b;const sb=new b,rb=new b,ob=new b,ab=new b,lb=new b,cb=new b,ub=new b,db=new b,hb=new b,fb=new b,kd=new It,pb=new b;new b;const mb=new b,zd=new b,gb=new b,vb=new b,_b=new b,yb=[0],xb=new b,Mb=new b;class Vd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let l=0;l<r;l++){let c=!1;const d=n[l];for(;d>i[a];)a++;c=d===i[a],c||Hd(e,d)}a=0;for(let l=0;l<o;l++){let c=!1;const d=i[l];for(;d>n[a];)a++;c=n[a]===d,c||Hd(t,d)}}}function Hd(s,e){s.push((e&4294901760)>>16,e&65535)}const Ja=(s,e)=>s<e?`${s}-${e}`:`${e}-${s}`;class Sb{constructor(){this.data={keys:[]}}get(e,t){const n=Ja(e,t);return this.data[n]}set(e,t,n){const i=Ja(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Ja(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class bb extends df{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new SM,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new aS,this.constraints=[],this.narrowphase=new fS(this),this.collisionMatrix=new Sd,this.collisionMatrixPrevious=new Sd,this.bodyOverlapKeeper=new Vd,this.shapeOverlapKeeper=new Vd,this.contactmaterials=[],this.contactMaterialTable=new Sb,this.defaultMaterial=new ji("default"),this.defaultContactMaterial=new Hs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Go?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=Rt.ALL,n.from=e,n.to=t,n.callback=i,Qa.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=Rt.ANY,n.from=e,n.to=t,n.result=i,Qa.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=Rt.CLOSEST,n.from=e,n.to=t,n.result=i,Qa.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof ve&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Lt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Lt.now();let r=0;for(;this.accumulator>=e&&r<n&&(this.internalStep(e),this.accumulator-=e,r++,!(Lt.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=Cb,i=Rb,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,d=this.profile,u=ve.DYNAMIC;let h=-1/0;const f=this.constraints,p=Ab;l.length();const v=l.x,m=l.y,g=l.z;let _=0;for(c&&(h=Lt.now()),_=0;_!==r;_++){const L=o[_];if(L.type===u){const k=L.force,F=L.mass;k.x+=F*v,k.y+=F*m,k.z+=F*g}}for(let L=0,k=this.subsystems.length;L!==k;L++)this.subsystems[L].update();c&&(h=Lt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(d.broadphase=Lt.now()-h);let x=f.length;for(_=0;_!==x;_++){const L=f[_];if(!L.collideConnected)for(let k=n.length-1;k>=0;k-=1)(L.bodyA===n[k]&&L.bodyB===i[k]||L.bodyB===n[k]&&L.bodyA===i[k])&&(n.splice(k,1),i.splice(k,1))}this.collisionMatrixTick(),c&&(h=Lt.now());const y=Tb,M=t.length;for(_=0;_!==M;_++)y.push(t[_]);t.length=0;const E=this.frictionEquations.length;for(_=0;_!==E;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,p),c&&(d.narrowphase=Lt.now()-h),c&&(h=Lt.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const A=t.length;for(let L=0;L!==A;L++){const k=t[L],F=k.bi,N=k.bj,X=k.si,z=k.sj;let q;if(F.material&&N.material?q=this.getContactMaterial(F.material,N.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,F.material&&N.material&&(F.material.friction>=0&&N.material.friction>=0&&F.material.friction*N.material.friction,F.material.restitution>=0&&N.material.restitution>=0&&(k.restitution=F.material.restitution*N.material.restitution)),a.addEquation(k),F.allowSleep&&F.type===ve.DYNAMIC&&F.sleepState===ve.SLEEPING&&N.sleepState===ve.AWAKE&&N.type!==ve.STATIC){const Q=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),oe=N.sleepSpeedLimit**2;Q>=oe*2&&(F.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===ve.DYNAMIC&&N.sleepState===ve.SLEEPING&&F.sleepState===ve.AWAKE&&F.type!==ve.STATIC){const Q=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),oe=F.sleepSpeedLimit**2;Q>=oe*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(F,N,!0),this.collisionMatrixPrevious.get(F,N)||(cr.body=N,cr.contact=k,F.dispatchEvent(cr),cr.body=F,N.dispatchEvent(cr)),this.bodyOverlapKeeper.set(F.id,N.id),this.shapeOverlapKeeper.set(X.id,z.id)}for(this.emitContactEvents(),c&&(d.makeContactConstraints=Lt.now()-h,h=Lt.now()),_=0;_!==r;_++){const L=o[_];L.wakeUpAfterNarrowphase&&(L.wakeUp(),L.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const L=f[_];L.update();for(let k=0,F=L.equations.length;k!==F;k++){const N=L.equations[k];a.addEquation(N)}}a.solve(e,this),c&&(d.solve=Lt.now()-h),a.removeAllEquations();const P=Math.pow;for(_=0;_!==r;_++){const L=o[_];if(L.type&u){const k=P(1-L.linearDamping,e),F=L.velocity;F.scale(k,F);const N=L.angularVelocity;if(N){const X=P(1-L.angularDamping,e);N.scale(X,N)}}}this.dispatchEvent(wb),c&&(h=Lt.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(e,S,R);this.clearForces(),this.broadphase.dirty=!0,c&&(d.integrate=Lt.now()-h),this.stepnumber+=1,this.dispatchEvent(Eb);let O=!0;if(this.allowSleep)for(O=!1,_=0;_!==r;_++){const L=o[_];L.sleepTick(this.time),L.sleepState!==ve.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(Jn,Qn),e){for(let r=0,o=Jn.length;r<o;r+=2)ur.bodyA=this.getBodyById(Jn[r]),ur.bodyB=this.getBodyById(Jn[r+1]),this.dispatchEvent(ur);ur.bodyA=ur.bodyB=null}if(t){for(let r=0,o=Qn.length;r<o;r+=2)dr.bodyA=this.getBodyById(Qn[r]),dr.bodyB=this.getBodyById(Qn[r+1]),this.dispatchEvent(dr);dr.bodyA=dr.bodyB=null}Jn.length=Qn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Jn,Qn),n){for(let r=0,o=Jn.length;r<o;r+=2){const a=this.getShapeById(Jn[r]),l=this.getShapeById(Jn[r+1]);ei.shapeA=a,ei.shapeB=l,a&&(ei.bodyA=a.body),l&&(ei.bodyB=l.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}if(i){for(let r=0,o=Qn.length;r<o;r+=2){const a=this.getShapeById(Qn[r]),l=this.getShapeById(Qn[r+1]);ti.shapeA=a,ti.shapeB=l,a&&(ti.bodyA=a.body),l&&(ti.bodyB=l.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new _t;const Qa=new Rt,Lt=globalThis.performance||{};if(!Lt.now){let s=Date.now();Lt.timing&&Lt.timing.navigationStart&&(s=Lt.timing.navigationStart),Lt.now=()=>Date.now()-s}new b;const Eb={type:"postStep"},wb={type:"preStep"},cr={type:ve.COLLIDE_EVENT_NAME,body:null,contact:null},Tb=[],Ab=[],Cb=[],Rb=[],Jn=[],Qn=[],ur={type:"beginContact",bodyA:null,bodyB:null},dr={type:"endContact",bodyA:null,bodyB:null},ei={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ti={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var vn=Uint8Array,ws=Uint16Array,Ib=Int32Array,yf=new vn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),xf=new vn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Pb=new vn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Mf=function(s,e){for(var t=new ws(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new Ib(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Sf=Mf(yf,2),bf=Sf.b,Lb=Sf.r;bf[28]=258,Lb[258]=28;var Db=Mf(xf,0),Nb=Db.b,sc=new ws(32768);for(var mt=0;mt<32768;++mt){var vi=(mt&43690)>>1|(mt&21845)<<1;vi=(vi&52428)>>2|(vi&13107)<<2,vi=(vi&61680)>>4|(vi&3855)<<4,sc[mt]=((vi&65280)>>8|(vi&255)<<8)>>1}var Mr=(function(s,e,t){for(var n=s.length,i=0,r=new ws(e);i<n;++i)s[i]&&++r[s[i]-1];var o=new ws(e);for(i=1;i<e;++i)o[i]=o[i-1]+r[i-1]<<1;var a;if(t){a=new ws(1<<e);var l=15-e;for(i=0;i<n;++i)if(s[i])for(var c=i<<4|s[i],d=e-s[i],u=o[s[i]-1]++<<d,h=u|(1<<d)-1;u<=h;++u)a[sc[u]>>l]=c}else for(a=new ws(n),i=0;i<n;++i)s[i]&&(a[i]=sc[o[s[i]-1]++]>>15-s[i]);return a}),Hr=new vn(288);for(var mt=0;mt<144;++mt)Hr[mt]=8;for(var mt=144;mt<256;++mt)Hr[mt]=9;for(var mt=256;mt<280;++mt)Hr[mt]=7;for(var mt=280;mt<288;++mt)Hr[mt]=8;var Ef=new vn(32);for(var mt=0;mt<32;++mt)Ef[mt]=5;var Fb=Mr(Hr,9,1),Ub=Mr(Ef,5,1),el=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},wn=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},tl=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},Bb=function(s){return(s+7)/8|0},Ob=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new vn(s.subarray(e,t))},kb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Tn=function(s,e,t){var n=new Error(e||kb[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Tn),!t)throw n;return n},zb=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new vn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new vn(i*3));var c=function(Ye){var Pt=t.length;if(Ye>Pt){var D=new vn(Math.max(Pt*2,Ye));D.set(t),t=D}},d=e.f||0,u=e.p||0,h=e.b||0,f=e.l,p=e.d,v=e.m,m=e.n,g=i*8;do{if(!f){d=wn(s,u,1);var _=wn(s,u+1,3);if(u+=3,_)if(_==1)f=Fb,p=Ub,v=9,m=5;else if(_==2){var E=wn(s,u,31)+257,A=wn(s,u+10,15)+4,P=E+wn(s,u+5,31)+1;u+=14;for(var T=new vn(P),S=new vn(19),R=0;R<A;++R)S[Pb[R]]=wn(s,u+R*3,7);u+=A*3;for(var O=el(S),L=(1<<O)-1,k=Mr(S,O,1),R=0;R<P;){var F=k[wn(s,u,L)];u+=F&15;var x=F>>4;if(x<16)T[R++]=x;else{var N=0,X=0;for(x==16?(X=3+wn(s,u,3),u+=2,N=T[R-1]):x==17?(X=3+wn(s,u,7),u+=3):x==18&&(X=11+wn(s,u,127),u+=7);X--;)T[R++]=N}}var z=T.subarray(0,E),q=T.subarray(E);v=el(z),m=el(q),f=Mr(z,v,1),p=Mr(q,m,1)}else Tn(1);else{var x=Bb(u)+4,y=s[x-4]|s[x-3]<<8,M=x+y;if(M>i){l&&Tn(0);break}a&&c(h+y),t.set(s.subarray(x,M),h),e.b=h+=y,e.p=u=M*8,e.f=d;continue}if(u>g){l&&Tn(0);break}}a&&c(h+131072);for(var Q=(1<<v)-1,oe=(1<<m)-1,te=u;;te=u){var N=f[tl(s,u)&Q],De=N>>4;if(u+=N&15,u>g){l&&Tn(0);break}if(N||Tn(2),De<256)t[h++]=De;else if(De==256){te=u,f=null;break}else{var et=De-254;if(De>264){var R=De-257,He=yf[R];et=wn(s,u,(1<<He)-1)+bf[R],u+=He}var Y=p[tl(s,u)&oe],J=Y>>4;Y||Tn(3),u+=Y&15;var q=Nb[J];if(J>3){var He=xf[J];q+=tl(s,u)&(1<<He)-1,u+=He}if(u>g){l&&Tn(0);break}a&&c(h+131072);var ge=h+et;if(h<q){var Ne=r-q,Ee=Math.min(q,ge);for(Ne+h<0&&Tn(3);h<Ee;++h)t[h]=n[Ne+h]}for(;h<ge;++h)t[h]=t[h-q]}}e.l=f,e.p=te,e.b=h,e.f=d,f&&(d=1,e.m=v,e.d=p,e.n=m)}while(!d);return h!=t.length&&o?Ob(t,0,h):t.subarray(0,h)},Vb=new vn(0),Hb=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Tn(6,"invalid zlib data"),(s[1]>>5&1)==1&&Tn(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function Gb(s,e){return zb(s.subarray(Hb(s),-4),{i:2},e,e)}var Wb=typeof TextDecoder<"u"&&new TextDecoder,$b=0;try{Wb.decode(Vb,{stream:!0}),$b=1}catch{}function wf(s,e,t){const n=t.length-s-1;if(e>=t[n])return n-1;if(e<=t[s])return s;let i=s,r=n,o=Math.floor((i+r)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?r=o:i=o,o=Math.floor((i+r)/2);return o}function Xb(s,e,t,n){const i=[],r=[],o=[];i[0]=1;for(let a=1;a<=t;++a){r[a]=e-n[s+1-a],o[a]=n[s+a]-e;let l=0;for(let c=0;c<a;++c){const d=o[c+1],u=r[a-c],h=i[c]/(d+u);i[c]=l+d*h,l=u*h}i[a]=l}return i}function qb(s,e,t,n){const i=wf(s,n,e),r=Xb(i,n,s,e),o=new Je(0,0,0,0);for(let a=0;a<=s;++a){const l=t[i-s+a],c=r[a],d=l.w*c;o.x+=l.x*d,o.y+=l.y*d,o.z+=l.z*d,o.w+=l.w*c}return o}function jb(s,e,t,n,i){const r=[];for(let u=0;u<=t;++u)r[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=r.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=r.slice(0);a[0][0]=1;const l=r.slice(0),c=r.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[s+1-u],c[u]=i[s+u]-e;let h=0;for(let f=0;f<u;++f){const p=c[f+1],v=l[u-f];a[u][f]=p+v;const m=a[f][u-1]/a[u][f];a[f][u]=h+p*m,h=v*m}a[u][u]=h}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let h=0,f=1;const p=[];for(let v=0;v<=t;++v)p[v]=r.slice(0);p[0][0]=1;for(let v=1;v<=n;++v){let m=0;const g=u-v,_=t-v;u>=v&&(p[f][0]=p[h][0]/a[_+1][g],m=p[f][0]*a[g][_]);const x=g>=-1?1:-g,y=u-1<=_?v-1:t-u;for(let E=x;E<=y;++E)p[f][E]=(p[h][E]-p[h][E-1])/a[_+1][g+E],m+=p[f][E]*a[g+E][_];u<=_&&(p[f][v]=-p[h][v-1]/a[_+1][u],m+=p[f][v]*a[u][_]),o[v][u]=m;const M=h;h=f,f=M}}let d=t;for(let u=1;u<=n;++u){for(let h=0;h<=t;++h)o[u][h]*=d;d*=t-u}return o}function Yb(s,e,t,n,i){const r=i<s?i:s,o=[],a=wf(s,n,e),l=jb(a,n,s,r,e),c=[];for(let d=0;d<t.length;++d){const u=t[d].clone(),h=u.w;u.x*=h,u.y*=h,u.z*=h,c[d]=u}for(let d=0;d<=r;++d){const u=c[a-s].clone().multiplyScalar(l[d][0]);for(let h=1;h<=s;++h)u.add(c[a-s+h].clone().multiplyScalar(l[d][h]));o[d]=u}for(let d=r+1;d<=i+1;++d)o[d]=new Je(0,0,0);return o}function Kb(s,e){let t=1;for(let i=2;i<=s;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=s-e;++i)n*=i;return t/n}function Zb(s){const e=s.length,t=[],n=[];for(let r=0;r<e;++r){const o=s[r];t[r]=new U(o.x,o.y,o.z),n[r]=o.w}const i=[];for(let r=0;r<e;++r){const o=t[r].clone();for(let a=1;a<=r;++a)o.sub(i[r-a].clone().multiplyScalar(Kb(r,a)*n[a]));i[r]=o.divideScalar(n[0])}return i}function Jb(s,e,t,n,i){const r=Yb(s,e,t,n,i);return Zb(r)}class Qb extends mg{constructor(e,t,n,i,r){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=r||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new Je(c.x,c.y,c.z,c.w)}}getPoint(e,t=new U){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=qb(this.degree,this.knots,this.controlPoints,i);return r.w!==1&&r.divideScalar(r.w),n.set(r.x,r.y,r.z)}getTangent(e,t=new U){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),r=Jb(this.degree,this.knots,this.controlPoints,i,1);return n.copy(r[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Je(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let qe,Tt,Kt;class eE extends ts{constructor(e){super(e)}load(e,t,n,i){const r=this,o=r.path===""?nv.extractUrlBase(e):r.path,a=new Kg(this.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(l){try{t(r.parse(l,o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e,t){if(oE(e))qe=new rE().parse(e);else{const i=Cf(e);if(!aE(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Wd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Wd(i));qe=new sE().parse(i)}const n=new nf(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new tE(n,this.manager).parse(qe)}}class tE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){Tt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),r=new nE().parse(i);return this.parseScene(i,r,n),Kt}parseConnections(){const e=new Map;return"Connections"in qe&&qe.Connections.connections.forEach(function(n){const i=n[0],r=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:r,relationship:o};e.get(i).parents.push(a),e.has(r)||e.set(r,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(r).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in qe.Objects){const n=qe.Objects.Video;for(const i in n){const r=n[i],o=parseInt(i);if(e[o]=r.RelativeFilename||r.Filename,"Content"in r){const a=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,l=typeof r.Content=="string"&&r.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[r.RelativeFilename||r.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let r;switch(i){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),r="image/tga";break;case"webp":r="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:r}))}}parseTextures(e){const t=new Map;if("Texture"in qe.Objects){const n=qe.Objects.Texture;for(const i in n){const r=this.parseTexture(n[i],e);t.set(parseInt(i),r)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,r=e.WrapModeV,o=i!==void 0?i.value:0,a=r!==void 0?r.value:0;if(n.wrapS=o===0?wr:ri,n.wrapT=a===0?wr:ri,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const r=i.path;r||i.setPath(this.textureLoader.path);const o=Tt.get(e.id).children;let a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Wt;const l=i.load(a);return i.setPath(r),l}parseMaterials(e){const t=new Map;if("Material"in qe.Objects){const n=qe.Objects.Material;for(const i in n){const r=this.parseMaterial(n[i],e);r!==null&&t.set(parseInt(i),r)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let r=e.ShadingModel;if(typeof r=="object"&&(r=r.value),!Tt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(r.toLowerCase()){case"phong":a=new mo;break;case"lambert":a=new Fg;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),a=new mo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=Xe.colorSpaceToWorking(new Oe().fromArray(e.Diffuse.value),ht):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=Xe.colorSpaceToWorking(new Oe().fromArray(e.DiffuseColor.value),ht)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=Xe.colorSpaceToWorking(new Oe().fromArray(e.Emissive.value),ht):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=Xe.colorSpaceToWorking(new Oe().fromArray(e.EmissiveColor.value),ht)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=Xe.colorSpaceToWorking(new Oe().fromArray(e.Specular.value),ht):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=Xe.colorSpaceToWorking(new Oe().fromArray(e.SpecularColor.value),ht));const r=this;return Tt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=r.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=r.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=r.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=ht);break;case"DisplacementColor":i.displacementMap=r.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=r.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ht);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=r.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=r.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Bo,i.envMap.colorSpace=ht);break;case"SpecularColor":i.specularMap=r.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ht);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=r.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in qe.Objects&&t in qe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Tt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in qe.Objects){const n=qe.Objects.Deformer;for(const i in n){const r=n[i],o=Tt.get(parseInt(i));if(r.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(r.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const r=t[i.ID];if(r.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ce().fromArray(r.TransformLink.a)};"Indexes"in r&&(o.indices=r.Indexes.a,o.weights=r.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const r=e.children[i],o=t[r.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=Tt.get(parseInt(r.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){Kt=new bs;const i=this.parseModels(e.skeletons,t,n),r=qe.Objects.Model,o=this;i.forEach(function(l){const c=r[l.ID];o.setLookAtProperties(l,c),Tt.get(l.ID).parents.forEach(function(u){const h=i.get(u.ID);h!==void 0&&h.add(l)}),l.parent===null&&Kt.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),Kt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Af(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new iE().parse();Kt.children.length===1&&Kt.children[0].isGroup&&(Kt.children[0].animations=a,Kt=Kt.children[0]),Kt.animations=a}parseModels(e,t,n){const i=new Map,r=qe.Objects.Model;for(const o in r){const a=parseInt(o),l=r[o],c=Tt.get(a);let d=this.buildSkeleton(c,e,a,l.attrName);if(!d){switch(l.attrType){case"Camera":d=this.createCamera(c);break;case"Light":d=this.createLight(c);break;case"Mesh":d=this.createMesh(c,t,n);break;case"NurbsCurve":d=this.createCurve(c,t);break;case"LimbNode":case"Root":d=new Ql;break;case"Null":default:d=new bs;break}d.name=l.attrName?st.sanitizeNodeName(l.attrName):"",d.userData.originalName=l.attrName,d.ID=a}this.getTransformData(d,l),i.set(a,d)}return i}buildSkeleton(e,t,n,i){let r=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,d){if(c.ID===o.ID){const u=r;r=new Ql,r.matrixWorld.copy(c.transformLink),r.name=i?st.sanitizeNodeName(i):"",r.userData.originalName=i,r.ID=n,l.bones[d]=r,u!==null&&r.add(u)}})}}),r}createCamera(e){let t,n;if(e.children.forEach(function(i){const r=qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new yt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let r=1;n.NearPlane!==void 0&&(r=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let d=45;n.FieldOfView!==void 0&&(d=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Zt(d,c,r,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new yt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new yt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const r=qe.Objects.NodeAttribute[i.ID];r!==void 0&&(n=r)}),n===void 0)t=new yt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let r=16777215;n.Color!==void 0&&(r=Xe.colorSpaceToWorking(new Oe().fromArray(n.Color.value),ht));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new qu(r,o,a,l);break;case 1:t=new nc(r,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Vt.degToRad(n.InnerAngle.value));let d=0;n.OuterAngle!==void 0&&(d=Vt.degToRad(n.OuterAngle.value),d=Math.max(d,1)),t=new Qg(r,o,a,c,d,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new qu(r,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,r=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(r=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new mo({name:ts.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in r.attributes&&a.forEach(function(l){l.vertexColors=!0}),r.groups.length>0){let l=!1;for(let c=0,d=r.groups.length;c<d;c++){const u=r.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){const c=new mo;a.push(c)}}return r.FBX_Deformer?(i=new lg(r,o),i.normalizeSkinWeights()):i=new Cn(r,o),i}createCurve(e,t){const n=e.children.reduce(function(r,o){return t.has(o.ID)&&(r=t.get(o.ID)),r},null),i=new qh({name:ts.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new pg(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Br(t.RotationOrder.value):n.eulerOrder=Br(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&Tt.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const r=qe.Objects.Model[i.ID];if("Lcl_Translation"in r){const o=r.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),Kt.add(e.target)):e.lookAt(new U().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const r in e){const o=e[r];Tt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Tt.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new Lc(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in qe.Objects){const t=qe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(r){e[r.Node]=new Ce().fromArray(r.Matrix.a)}):e[i.Node]=new Ce().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in qe){if("AmbientColor"in qe.GlobalSettings){const e=qe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const r=new Oe().setRGB(t,n,i,ht);Kt.add(new rf(r,1))}}"UnitScaleFactor"in qe.GlobalSettings&&(Kt.userData.unitScaleFactor=qe.GlobalSettings.UnitScaleFactor.value)}}}class nE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in qe.Objects){const n=qe.Objects.Geometry;for(const i in n){const r=Tt.get(parseInt(i)),o=this.parseGeometry(r,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,r=[],o=e.parents.map(function(u){return qe.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,h){return i[h.ID]!==void 0&&(u=i[h.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&r.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Br(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const d=Af(c);return this.genGeometry(t,a,r,d)}genGeometry(e,t,n,i){const r=new In;e.attrName&&(r.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new tn(a.vertex,3);if(l.applyMatrix4(i),r.setAttribute("position",l),a.colors.length>0&&r.setAttribute("color",new tn(a.colors,3)),t&&(r.setAttribute("skinIndex",new Pc(a.weightsIndices,4)),r.setAttribute("skinWeight",new tn(a.vertexWeights,4)),r.FBX_Deformer=t),a.normal.length>0){const c=new Ve().getNormalMatrix(i),d=new tn(a.normal,3);d.applyNormalMatrix(c),r.setAttribute("normal",d)}if(a.uvs.forEach(function(c,d){const u=d===0?"uv":`uv${d}`;r.setAttribute(u,new tn(a.uvs[d],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],d=0;if(a.materialIndex.forEach(function(u,h){u!==c&&(r.addGroup(d,h-d,c),c=u,d=h)}),r.groups.length>0){const u=r.groups[r.groups.length-1],h=u.start+u.count;h!==a.materialIndex.length&&r.addGroup(h,a.materialIndex.length-h,c)}r.groups.length===0&&r.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(r,e,n,i),r}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,r){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:r,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,r=!1,o=[],a=[],l=[],c=[],d=[],u=[];const h=this;return e.vertexIndices.forEach(function(f,p){let v,m=!1;f<0&&(f=f^-1,m=!0);let g=[],_=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const x=Ao(p,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){_.push(x.weight),g.push(x.id)}),_.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const x=[0,0,0,0],y=[0,0,0,0];_.forEach(function(M,E){let A=M,P=g[E];y.forEach(function(T,S,R){if(A>T){R[S]=A,A=T;const O=x[S];x[S]=P,P=O}})}),g=x,_=y}for(;_.length<4;)_.push(0),g.push(0);for(let x=0;x<4;++x)d.push(_[x]),u.push(g[x])}if(e.normal){const x=Ao(p,n,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=Ao(p,n,f,e.material)[0],v<0&&(h.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(x,y){const M=Ao(p,n,f,x);c[y]===void 0&&(c[y]=[]),c[y].push(M[0]),c[y].push(M[1])}),i++,m&&(h.genFace(t,e,o,v,a,l,c,d,u,i),n++,i=0,o=[],a=[],l=[],c=[],d=[],u=[])}),t}getNormalNewell(e){const t=new U(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],r=e[(n+1)%e.length];t.x+=(i.y-r.y)*(i.z+r.z),t.y+=(i.z-r.z)*(i.x+r.x),t.z+=(i.x-r.x)*(i.y+r.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new U(0,1,0):new U(0,0,1)).cross(t).normalize(),r=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:r}}flattenVertex(e,t,n){return new Ke(e.dot(t),e.dot(n))}genFace(e,t,n,i,r,o,a,l,c,d){let u;if(d>3){const h=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)h.push(new U(f[n[g]],f[n[g+1]],f[n[g+2]]));const{tangent:p,bitangent:v}=this.getNormalTangentAndBitangent(h),m=[];for(const g of h)m.push(this.flattenVertex(g,p,v));u=Nc.triangulateShape(m,[])}else u=[[0,1,2]];for(const[h,f,p]of u)e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[p*3]]),e.vertex.push(t.vertexPositions[n[p*3+1]]),e.vertex.push(t.vertexPositions[n[p*3+2]]),t.skeleton&&(e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[p*4]),e.vertexWeights.push(l[p*4+1]),e.vertexWeights.push(l[p*4+2]),e.vertexWeights.push(l[p*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[p*4]),e.weightsIndices.push(c[p*4+1]),e.weightsIndices.push(c[p*4+2]),e.weightsIndices.push(c[p*4+3])),t.color&&(e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[p*3]),e.colors.push(o[p*3+1]),e.colors.push(o[p*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(r[h*3]),e.normal.push(r[h*3+1]),e.normal.push(r[h*3+2]),e.normal.push(r[f*3]),e.normal.push(r[f*3+1]),e.normal.push(r[f*3+2]),e.normal.push(r[p*3]),e.normal.push(r[p*3+1]),e.normal.push(r[p*3+2])),t.uv&&t.uv.forEach(function(v,m){e.uvs[m]===void 0&&(e.uvs[m]=[]),e.uvs[m].push(a[m][h*2]),e.uvs[m].push(a[m][h*2+1]),e.uvs[m].push(a[m][f*2]),e.uvs[m].push(a[m][f*2+1]),e.uvs[m].push(a[m][p*2]),e.uvs[m].push(a[m][p*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const r=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=qe.Objects.Geometry[a.geoID];l!==void 0&&r.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,r){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],d=e.attributes.position.count*3,u=new Float32Array(d);for(let v=0;v<c.length;v++){const m=c[v]*3;u[m]=l[v*3],u[m+1]=l[v*3+1],u[m+2]=l[v*3+2]}const h={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},f=this.genBuffers(h),p=new tn(f.vertex,3);p.name=r||n.attrName,p.applyMatrix4(i),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let r=[];return n==="IndexToDirect"&&("NormalIndex"in e?r=e.NormalIndex.a:"NormalsIndex"in e&&(r=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:r,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let r=[];return n==="IndexToDirect"&&(r=e.UVIndex.a),{dataSize:2,buffer:i,indices:r,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let r=[];n==="IndexToDirect"&&(r=e.ColorIndex.a);for(let o=0,a=new Oe;o<i.length;o+=4)a.fromArray(i,o),Xe.colorSpaceToWorking(a,ht),a.toArray(i,o);return{dataSize:4,buffer:i,indices:r,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,r=[];for(let o=0;o<i.length;++o)r.push(o);return{dataSize:1,buffer:i,indices:r,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new In;const n=t-1,i=e.KnotVector.a,r=[],o=e.Points.a;for(let u=0,h=o.length;u<h;u+=4)r.push(new Je().fromArray(o,u));let a,l;if(e.Form==="Closed")r.push(r[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)r.push(r[u])}const d=new Qb(n,i,r,a,l).getPoints(r.length*12);return new In().setFromPoints(d)}}class iE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],r=this.addClip(i);e.push(r)}return e}parseClips(){if(qe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=qe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:i.id,attr:i.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(e){const t=qe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(lE),values:t[n].KeyValueFloat.a},r=Tt.get(i.id);if(r!==void 0){const o=r.parents[0].ID,a=r.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=qe.Objects.AnimationLayer,n=new Map;for(const i in t){const r=[],o=Tt.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const d=e.get(l.ID);if(d.curves.x!==void 0||d.curves.y!==void 0||d.curves.z!==void 0){if(r[c]===void 0){const u=Tt.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID;if(u!==void 0){const h=qe.Objects.Model[u.toString()];if(h===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:h.attrName?st.sanitizeNodeName(h.attrName):"",ID:h.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Kt.traverse(function(p){p.ID===h.id&&(f.transform=p.matrix,p.userData.transformData&&(f.eulerOrder=p.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ce),"PreRotation"in h&&(f.preRotation=h.PreRotation.value),"PostRotation"in h&&(f.postRotation=h.PostRotation.value),r[c]=f}}r[c]&&(r[c][d.attr]=d)}else if(d.curves.morph!==void 0){if(r[c]===void 0){const u=Tt.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,h=Tt.get(u).parents[0].ID,f=Tt.get(h).parents[0].ID,p=Tt.get(f).parents[0].ID,v=qe.Objects.Model[p],m={modelName:v.attrName?st.sanitizeNodeName(v.attrName):"",morphName:qe.Objects.Deformer[u].attrName};r[c]=m}r[c][d.attr]=d}}}),n.set(parseInt(i),r))}return n}parseAnimStacks(e){const t=qe.Objects.AnimationStack,n={};for(const i in t){const r=Tt.get(parseInt(i)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(r[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Wg(e.name,-1,t)}generateTracks(e){const t=[];let n=new U,i=new U;if(e.transform&&e.transform.decompose(n,new en,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");r!==void 0&&t.push(r)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const r=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);r!==void 0&&t.push(r)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const r=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");r!==void 0&&t.push(r)}if(e.DeformPercent!==void 0){const r=this.generateMorphTrack(e);r!==void 0&&t.push(r)}return t}generateVectorTrack(e,t,n,i){const r=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(r,t,n);return new Ur(e+"."+i,r,o)}generateRotationTrack(e,t,n,i,r){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const h=this.interpolateRotations(t.x,t.y,t.z,r);o=h[0],a=h[1]}const l=Br(0);n!==void 0&&(n=n.map(Vt.degToRad),n.push(l),n=new Nt().fromArray(n),n=new en().setFromEuler(n)),i!==void 0&&(i=i.map(Vt.degToRad),i.push(l),i=new Nt().fromArray(i),i=new en().setFromEuler(i).invert());const c=new en,d=new Nt,u=[];if(!a||!o)return new Vs(e+".quaternion",[0],[0]);for(let h=0;h<a.length;h+=3)d.set(a[h],a[h+1],a[h+2],r),c.setFromEuler(d),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),h>2&&new en().fromArray(u,(h-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,h/3*4);return new Vs(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(r){return r/100}),i=Kt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new Fr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let r=1;r<t.length;r++){const o=t[r];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,r=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const d=t.x.values[o];r.push(d),i[0]=d}else r.push(i[0]);if(a!==-1){const d=t.y.values[a];r.push(d),i[1]=d}else r.push(i[1]);if(l!==-1){const d=t.z.values[l];r.push(d),i[2]=d}else r.push(i[2])}),r}interpolateRotations(e,t,n,i){const r=[],o=[];r.push(e.times[0]),o.push(Vt.degToRad(e.values[0])),o.push(Vt.degToRad(t.values[0])),o.push(Vt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Vt.degToRad),d=[e.values[a],t.values[a],n.values[a]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const u=d.map(Vt.degToRad),h=[d[0]-l[0],d[1]-l[1],d[2]-l[2]],f=[Math.abs(h[0]),Math.abs(h[1]),Math.abs(h[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,m=new Nt(...c,i),g=new Nt(...u,i),_=new en().setFromEuler(m),x=new en().setFromEuler(g);_.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const y=e.times[a-1],M=e.times[a]-y,E=new en,A=new Nt;for(let P=0;P<1;P+=1/v)E.copy(_.clone().slerp(x.clone(),P)),r.push(y+P*M),A.setFromQuaternion(E,i),o.push(A.x),o.push(A.y),o.push(A.z)}else r.push(e.times[a]),o.push(Vt.degToRad(e.values[a])),o.push(Vt.degToRad(t.values[a])),o.push(Vt.degToRad(n.values[a]))}return[r,o]}}class sE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Tf,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,r){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),d=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++r]):d?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,r):n in a?(n==="PoseNode"?a.PoseNode.push(r):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=r)):typeof o.id=="number"?(a[n]={},a[n][o.id]=r):n!=="Properties70"&&(n==="PoseNode"?a[n]=[r]:a[n]=r),typeof o.id=="number"&&(r.id=o.id),o.name!==""&&(r.attrName=o.name),o.type!==""&&(r.attrType=o.type),this.pushStack(r)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&r===","&&(r=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,r);return}if(i==="C"){const l=r.split(",").slice(1),c=parseInt(l[0]),d=parseInt(l[1]);let u=r.split(",").slice(3);u=u.map(function(h){return h.trim().replace(/^"/,"")}),i="connections",r=[c,d],uE(r,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=r),i in o&&Array.isArray(o[i])?o[i].push(r):i!=="a"?o[i]=r:o.a=r,this.setCurrentProp(o,i),i==="a"&&r.slice(-1)!==","&&(o.a=il(r))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=il(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(d){return d.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=il(c);break}this.getPrevNode()[r]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),r)}}class rE{parse(e){const t=new Gd(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Tf;for(;!this.endOfContent(t);){const r=this.parseNode(t,n);r!==null&&i.add(r.name,r)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),r=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let h=0;h<r;h++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",d=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=r===1&&e.getOffset()===i;i>e.getOffset();){const h=this.parseNode(e,t);h!==null&&this.parseSubNode(a,n,h)}return n.propertyList=l,typeof c=="number"&&(n.id=c),d!==""&&(n.attrName=d),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(r,o){o!==0&&i.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(r){t[r]=n[r]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],r=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:r,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),r=e.getUint32(),o=e.getUint32();if(r===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=Gb(new Uint8Array(e.getArrayBuffer(o))),l=new Gd(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Gd{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Tf{add(e,t){this[e]=t}}function oE(s){const e="Kaydara FBX Binary  \0";return s.byteLength>=e.length&&e===Cf(s,0,e.length)}function aE(s){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const r=s[i-1];return s=s.slice(t+i),t++,r}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function Wd(s){const e=/FBXVersion: (\d+)/,t=s.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function lE(s){return s/46186158e3}const cE=[];function Ao(s,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=s;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const r=i*n.dataSize,o=r+n.dataSize;return dE(cE,n.buffer,r,o)}const nl=new Nt,Ms=new U;function Af(s){const e=new Ce,t=new Ce,n=new Ce,i=new Ce,r=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,d=new Ce,u=new Ce,h=new Ce,f=s.inheritType?s.inheritType:0;s.translation&&e.setPosition(Ms.fromArray(s.translation));const p=Br(0);if(s.preRotation){const R=s.preRotation.map(Vt.degToRad);R.push(p),t.makeRotationFromEuler(nl.fromArray(R))}if(s.rotation){const R=s.rotation.map(Vt.degToRad);R.push(s.eulerOrder||p),n.makeRotationFromEuler(nl.fromArray(R))}if(s.postRotation){const R=s.postRotation.map(Vt.degToRad);R.push(p),i.makeRotationFromEuler(nl.fromArray(R)),i.invert()}s.scale&&r.scale(Ms.fromArray(s.scale)),s.scalingOffset&&a.setPosition(Ms.fromArray(s.scalingOffset)),s.scalingPivot&&o.setPosition(Ms.fromArray(s.scalingPivot)),s.rotationOffset&&l.setPosition(Ms.fromArray(s.rotationOffset)),s.rotationPivot&&c.setPosition(Ms.fromArray(s.rotationPivot)),s.parentMatrixWorld&&(u.copy(s.parentMatrix),d.copy(s.parentMatrixWorld));const v=t.clone().multiply(n).multiply(i),m=new Ce;m.extractRotation(d);const g=new Ce;g.copyPosition(d);const _=g.clone().invert().multiply(d),x=m.clone().invert().multiply(_),y=r,M=new Ce;if(f===0)M.copy(m).multiply(v).multiply(x).multiply(y);else if(f===1)M.copy(m).multiply(x).multiply(v).multiply(y);else{const O=new Ce().scale(new U().setFromMatrixScale(u)).clone().invert(),L=x.clone().multiply(O);M.copy(m).multiply(v).multiply(L).multiply(y)}const E=c.clone().invert(),A=o.clone().invert();let P=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(E).multiply(a).multiply(o).multiply(r).multiply(A);const T=new Ce().copyPosition(P),S=d.clone().multiply(T);return h.copyPosition(S),P=h.clone().multiply(M),P.premultiply(d.invert()),P}function Br(s){s=s||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return s===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[s]}function il(s){return s.split(",").map(function(t){return parseFloat(t)})}function Cf(s,e,t){return e===void 0&&(e=0),t===void 0&&(t=s.byteLength),new TextDecoder().decode(new Uint8Array(s,e,t))}function uE(s,e){for(let t=0,n=s.length,i=e.length;t<i;t++,n++)s[n]=e[t]}function dE(s,e,t,n){for(let i=t,r=0;i<n;i++,r++)s[r]=e[i];return s}const hE="2.1.10",tt={gravity:-1,dice:{radius:.01,collisionRadius:.017,mass:.01,angularDamping:.1,initialPosition:{xPercent:80,yPercent:80},initialHeight:.05,throw:{speed:{min:.3,max:.4},azimuth:{min:280,max:350},elevation:{min:-10,max:0},angularVelocity:{min:-5,max:5}}},physics:{frictionGround:.1,frictionWall:0,restitutionGround:.5,restitutionWall:.9},camera:{height:.5,breakpoint_px:768,scaleMobile_m_per_px:2e-4,scalePC_m_per_px:2e-4},tray:{sizeRatio:.9},solver:{iterations:30,tolerance:0},timeouts:{stopCheck:100,forceResult:4e3,hide:2e3},manualStopDetection:{velocityThreshold:.001,angularVelocityThreshold:.01,stopDuration:300}};let xi,oi,yi,gn,No,sl,$d,rc=null,Is=!1,Xd,oc,Ps,Ls,Rf=!1,Bn={x:0,z:0};const fE=5;let If=[],_n=[];const pE=[{value:8,normal:new U(0,.894,.447)},{value:10,normal:new U(.851,.447,.276)},{value:2,normal:new U(.526,.447,-.724)},{value:6,normal:new U(-.526,.447,-.724)},{value:4,normal:new U(-.851,.447,.276)},{value:1,normal:new U(0,-.894,-.447)},{value:5,normal:new U(.851,-.447,-.276)},{value:3,normal:new U(.526,-.447,.724)},{value:7,normal:new U(-.526,-.447,.724)},{value:9,normal:new U(-.851,-.447,-.276)}];async function mE(s){Ps=s;const e=s.clientWidth,t=s.clientHeight;xi=new og,oi=new Zt(1,e/t||1,.1,1),oi.position.set(0,tt.camera.height,0),oi.lookAt(0,0,0),yi=new Yx({antialias:!0,alpha:!0}),yi.setSize(e,t),yi.setPixelRatio(window.devicePixelRatio),yi.setClearColor(0,0),s.appendChild(yi.domElement),xi.add(new rf(16772829,.9));const n=new nc(14544639,5);n.position.set(-1,5,2),xi.add(n);const i=new nc(15663086,.5);i.position.set(5,2,-1),xi.add(i),gn=new bb,gn.gravity.set(0,tt.gravity,0),gn.solver.iterations=tt.solver.iterations,gn.solver.tolerance=tt.solver.tolerance,No=new ji("dice"),sl=new ji("ground"),$d=new ji("wall"),gn.addContactMaterial(new Hs(No,sl,{restitution:tt.physics.restitutionGround,friction:tt.physics.frictionGround})),gn.addContactMaterial(new Hs(No,$d,{restitution:tt.physics.restitutionWall,friction:tt.physics.frictionWall}));const r=new ve({mass:0,material:sl});r.addShape(new JM),r.quaternion.setFromEuler(-Math.PI/2,0,0),gn.addBody(r),Df();const o=[];for(let a=0;a<fE;a++)o.push(gE());await Promise.all(o),Rf=!0,console.log("3D Dice pool ready."),Nf(),window.addEventListener("resize",lc),setTimeout(lc,0)}function ac(s,e){if(Is||!Rf)return;const t=s.dices.length,n=If.filter(u=>!u.inUse);if(n.length<t){console.error("リクエストされた数のダイスが不足しています。");return}_n=[],rc=e,Is=!0,clearTimeout(oc),Ps.classList.add("is-visible"),lc();const i=Ls.width*tt.tray.sizeRatio,r=Ls.height*tt.tray.sizeRatio,o={1:[{x:0,z:0,y:0}],2:[{x:-1,z:0,y:.01},{x:1,z:0,y:0}],3:[{x:-1,z:1,y:.02},{x:1,z:1,y:.01},{x:0,z:-1,y:0}],4:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:0,y:.05}],5:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:-1.5,y:.04},{x:0,z:0,y:.07}]},a=(tt.dice.initialPosition.xPercent/100-.5)*i,l=(tt.dice.initialPosition.yPercent/100-.5)*r,c=tt.dice.radius*2.5,d=o[t]||o[5];for(let u=0;u<t;u++){const h=n[u],f=s.dices[u];h.inUse=!0,h.model.visible=!0,h.id=f.id,h.stillTime=0,h.model.traverse(L=>{L.isMesh&&L.material.color.set(f.color)});const p=d[u],v=a+p.x*c,m=l+p.z*c,g=tt.dice.initialHeight+p.y;h.body.position.set(v,g,m);const _=L=>Math.random()*(L.max-L.min)+L.min,x=_(tt.dice.throw.speed),y=_(tt.dice.throw.azimuth),M=_(tt.dice.throw.elevation),E=Vt.degToRad(y),A=Vt.degToRad(M),P=x*Math.cos(A),T=x*Math.sin(A),S=P*Math.sin(E),R=-P*Math.cos(E);h.body.velocity.set(S,T,R);const O=tt.dice.throw.angularVelocity;h.body.angularVelocity.set(_(O)*(Math.random()<.5?1:-1),_(O)*(Math.random()<.5?1:-1),_(O)*(Math.random()<.5?1:-1)),gn.addBody(h.body),h.body.wakeUp(),_n.push(h)}Pf(),oc=setTimeout(()=>{Is&&(console.warn("Dice roll timed out. Forcing result."),Lf())},tt.timeouts.forceResult)}function gE(){return new Promise((s,e)=>{const t=new eE,n=new nf,i="/models/",r="Dice_10.fbx",o={map:"Dice_10_Albedo.png",normalMap:"Dice_10_Normal.png",metalnessMap:"Dice_10_Metallic.png",roughnessMap:"Dice_10_Roughness.png",aoMap:"Dice_10_AO.png",displacementMap:"Dice_10_Height.png"},a={};let l=0;const c=Object.keys(o).length;Object.entries(o).forEach(([u,h])=>{n.load(i+h,f=>{f.colorSpace=ht,a[u]=f,l++,l===c&&d()},void 0,f=>e(f))});function d(){t.load(i+r,u=>{u.traverse(_=>{_.isMesh&&(_.material=new Ng({map:a.map,normalMap:a.normalMap,displacementMap:a.displacementMap,aoMap:a.aoMap,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,metalness:1,roughness:1,normalScale:new Ke(2,2),displacementScale:0,aoMapIntensity:.5}))}),ME(u);const h=yE(u),f=tt.dice.radius/h;SE(u,f);const{vertices:p,indices:v}=xE(u),m=new Wo(p,v),g=new ve({mass:tt.dice.mass,material:No,shape:m,angularDamping:tt.dice.angularDamping,allowSleep:!0});u.visible=!1,If.push({model:u,body:g,inUse:!1,color:null,id:null,stillTime:0}),xi.add(u),s()},void 0,u=>e(u))}})}function Pf(){clearTimeout(Xd);let s=!0;const{velocityThreshold:e,angularVelocityThreshold:t,stopDuration:n}=tt.manualStopDetection;_n.forEach(i=>{const r=i.body.velocity.length(),o=i.body.angularVelocity.length();r<e&&o<t?i.stillTime+=tt.timeouts.stopCheck:i.stillTime=0,i.stillTime<n&&(s=!1)}),s&&_n.length>0?(clearTimeout(oc),setTimeout(Lf,200)):Is&&(Xd=setTimeout(Pf,tt.timeouts.stopCheck))}function vE(){_n.forEach(s=>{s.inUse=!1,s.model.visible=!1,s.id=null,gn.removeBody(s.body)}),_n=[]}function Lf(){if(!Is){console.log("finishRoll called, but isRolling is already false. Aborting.");return}console.log("finishRoll triggered. Calculating results and setting up hide timer.");const s=_n.map(e=>{let t=0;const n=e.model.getObjectByProperty("isMesh",!0);return n&&(t=n.material.color.getHex()),{id:e.id,color:t,value:_E(e.model)}});rc&&rc(s),Is=!1,setTimeout(()=>{console.log(`Hiding container and cleaning up dice. (After ${tt.timeouts.hide}ms)`),vE(),Ps.classList.remove("is-visible")},tt.timeouts.hide)}function _E(s){let e=-2,t=-1;const n=new U(0,1,0);return pE.forEach(i=>{const o=i.normal.clone().applyQuaternion(s.quaternion).dot(n);o>e&&(e=o,t=i.value)}),t}const qd=[],jd=[];function Df(){qd.forEach(s=>gn.removeBody(s)),qd.length=0,jd.forEach(s=>xi.remove(s)),jd.length=0}function lc(){if(!Ps)return;const s=Ps.clientWidth,e=Ps.clientHeight;if(s===0||e===0)return;const t=s<=tt.camera.breakpoint_px?tt.camera.scaleMobile_m_per_px:tt.camera.scalePC_m_per_px,n=e*t,i=oi.position.y,r=2*Math.atan(n/(2*i)),o=Vt.radToDeg(r),a=s/e,l=n;Ls={width:l*a,height:l},Bn.x=Ls.width*tt.tray.sizeRatio/2,Bn.z=Ls.height*tt.tray.sizeRatio/2,Df(),oi.aspect=a,oi.fov=o,oi.updateProjectionMatrix(),yi.setSize(s,e)}let Yd=performance.now();function Nf(){requestAnimationFrame(Nf);const s=performance.now(),e=(s-Yd)/1e3;gn&&gn.step(1/60,e,3),Yd=s;const t=tt.dice.collisionRadius;for(let n=0;n<_n.length;n++)for(let i=n+1;i<_n.length;i++){const r=_n[n],o=_n[i],a=r.body.position,l=o.body.position,c=l.x-a.x,d=l.z-a.z,u=Math.sqrt(c*c+d*d);if(u<t){const h=new b(c/u,0,d/u),f=t-u;a.x-=h.x*f/2,a.z-=h.z*f/2,l.x+=h.x*f/2,l.z+=h.z*f/2;const p=r.body.velocity,v=o.body.velocity,g=new b(v.x-p.x,0,v.z-p.z).dot(h);if(g<0){const _=-1.8*g/2;p.x-=_*h.x,p.z-=_*h.z,v.x+=_*h.x,v.z+=_*h.z;const x=r.body.angularVelocity,y=o.body.angularVelocity;x.y*=-1,y.y*=-1}}}_n.forEach(n=>{n.model.position.copy(n.body.position),n.model.quaternion.copy(n.body.quaternion);const i=n.body.position,r=n.body.velocity,o=n.body.angularVelocity;i.x<-Bn.x?(i.x=-Bn.x,r.x<0&&(r.x*=-1,o.z*=-1)):i.x>Bn.x&&(i.x=Bn.x,r.x>0&&(r.x*=-1,o.z*=-1)),i.z<-Bn.z?(i.z=-Bn.z,r.z<0&&(r.z*=-1,o.x*=-1)):i.z>Bn.z&&(i.z=Bn.z,r.z>0&&(r.z*=-1,o.x*=-1))}),yi&&xi&&oi&&yi.render(xi,oi)}function yE(s){const e=new U;let t=0;return s.traverse(n=>{if(n.isMesh&&n.geometry?.attributes?.position){const i=n.geometry.attributes.position;for(let r=0;r<i.count;r++){e.fromBufferAttribute(i,r);const o=e.length();o>t&&(t=o)}}}),t}function xE(s){const e=[],t=[];let n=0;return s.traverse(i=>{if(i.isMesh&&i.geometry?.attributes?.position){const r=i.geometry,o=r.attributes.position;for(let a=0;a<o.count;a++)e.push(o.getX(a),o.getY(a),o.getZ(a));if(r.index){const a=r.index.array;for(let l=0;l<a.length;l++)t.push(n+a[l])}else for(let a=0;a<o.count;a++)t.push(n+a);n+=o.count}}),{vertices:e,indices:t}}function ME(s){const e=new ns().setFromObject(s),t=new U;e.getCenter(t),s.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.translate(-t.x,-t.y,-t.z)}),s.position.set(0,0,0)}function SE(s,e){const t=new Ce().makeScale(e,e,e);s.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.applyMatrix4(t)}),s.scale.set(1,1,1)}const bE="1.5.28";let Ff={},Sr={},Uf={},Bf={},Of={},kf={},zf={},Vf={},br=()=>{},Kd=!1;function EE(s){if(Ff=s.hintMasterData,Sr=s.regretMasterData,Uf=s.takaramonoMasterData,Bf=s.memoryFragmentsData,Of=s.memoryFragmentsAlphaData,kf=s.memoryFragmentsBetaData,zf=s.awakeningLocationsData,Vf=s.posthumousHistoryData,br=s.addLog,!Kd){const e=document.getElementById("dice3d-container");e&&(mE(e),Kd=!0)}}function wE(){Et({title:"🎲 ダイスロール",items:[{label:"🎲 ダイスロール",isTitle:!0},{label:"NA 攻撃判定",onClick:()=>zt({command:"NA",showToast:!0})},{label:"NC 判定",onClick:()=>zt({command:"NC",showToast:!0})},{label:"NM 姉妹への未練",onClick:()=>zt({command:"NM",showToast:!0})},{label:"NME 敵への未練 (歪曲の舞踏)",onClick:()=>zt({command:"NME",showToast:!0})},{label:"NMN 中立者への未練 (歪曲の舞踏)",onClick:()=>zt({command:"NMN",showToast:!0})},{label:"NT たからもの表",onClick:()=>zt({command:"NT",showToast:!0})},{label:"NK 記憶のカケラ",onClick:()=>zt({command:"NK",showToast:!0})},{label:"NKA 記憶のカケラ-α (最果ての戯曲)",onClick:()=>zt({command:"NKA",showToast:!0})},{label:"NKB 記憶のカケラ-β (最果ての戯曲)",onClick:()=>zt({command:"NKB",showToast:!0})},{label:"NPH 死後経歴 (最果ての戯曲)",onClick:()=>zt({command:"NPH",showToast:!0})},{label:"NAL 目覚めの場所 (最果ての戯曲)",onClick:()=>zt({command:"NAL",showToast:!0})},{label:"NH 暗示表",onClick:()=>zt({command:"NH",showToast:!0})},{label:"1D10",onClick:()=>zt({command:"1d10",showToast:!0})},{label:"1D100",onClick:()=>zt({command:"1d100",showToast:!0})},{label:"直接入力",onClick:()=>{Et({title:"🎲 ダイスロール",bodyHtml:`
                    <p style="text-align: center; margin-bottom: 15px;">ダイスコマンドを入力してください。</p>
                    <input type="text" id="diceCommandInput" value="5NC" 
                           class="modal-input-text" autofocus
                           inputmode="latin" style="ime-mode: disabled;">
                `,footerHtml:'<button id="executeDiceRollBtn" class="welcome-modal-close-btn">ダイスロール</button>',onRender:(n,i)=>{const r=n.querySelector("#diceCommandInput"),o=n.querySelector("#executeDiceRollBtn"),a=()=>{r.value&&zt({command:r.value,showToast:!0}),i()};o.onclick=a,r.onkeydown=l=>{l.key==="Enter"&&a()},r.select()}})}}]})}function Zd(s,e){const{command:t,showToast:n,callback:i}=s;ac({dices:[{id:"tens",color:16729156},{id:"ones",color:35071}]},o=>{if(!o||o.length<2){console.error("D100ロールの結果取得に失敗しました。");return}const a=o.find(f=>f.id==="tens"),l=o.find(f=>f.id==="ones");if(!a||!l){console.error("D100ロールの結果取得に失敗しました（ダイスの役割を特定できません）。");return}const c=a.value===10?0:a.value,d=l.value===10?0:l.value;let u=c*10+d;u===0&&(u=100);const h=e(u,c,d);br(h),n&&Qe(h,3e3),i&&i(u,null,h)})}function Jd(s,e,t){const n=Object.keys(e).find(a=>parseInt(a,10)===t),i=n?e[n]:null,r=n||t;return{resultText:i?`🎲 ${s}(${r})<br>【${i.name}】 ${i.description}`:`${s}データ[${r}]が見つかりませんでした。`,selectedMasterData:i}}function zt(s){const e=typeof s=="string"?s:s.command,t=typeof s=="object"&&s.callback?s.callback:null;if(!e)return;const n=e.toLowerCase().replace(/\s/g,""),i=/^(nm|nme|nmn|nt|nh|nal|1?d10)$/,r=/^(\d*)?(nc|na)([+-]\d+|0)?$/,o=/^(1?d100)$/,a=/^(nk|nka|nkb|nph)$/,l=n.match(r),c=n.match(i),d=n.match(o),u=n.match(a);if(l){const[,h,f,p]=l,v=p?parseInt(p,10):0,m=parseInt(h,10)||1,g=s.performer,_=g&&g.type==="enemy"?13369548:16777215,x={dices:Array.from({length:m},(y,M)=>({id:`system_d${M}`,color:_}))};ac(x,y=>{if(!y||y.length<m){console.error("3Dダイスロールの結果が不足しています。");return}const M=y.map(F=>F.value===0?10:F.value),E=M.map(F=>F+v);M.sort((F,N)=>F-N),E.sort((F,N)=>F-N);const A=Math.max(...E),P=Math.min(...E);let T="",S="",R=null;A>=11?(T="大成功",f==="na"&&(S=`攻撃側任意（追加ダメージ${A-10}）`,R="任意")):A>=6?(T="成功",f==="na"&&(A>=10?(S="頭（なければ攻撃側任意）",R="頭"):A>=9?(S="腕（なければ攻撃側任意）",R="腕"):A>=8?(S="胴（なければ攻撃側任意）",R="胴"):A>=7?(S="脚（なければ攻撃側任意）",R="脚"):(S="防御側任意",R="任意"))):P<=1?(T="大失敗",f==="na"?S="味方か自身に命中":f==="nc"&&(S="使用パーツ全損")):T="失敗";const O=v>0?`+${v}`:v<0?`${v}`:"",k=`<span style="color: ${T==="大成功"||T==="成功"?"#007bff":"#dc3545"};">🎲 ${e.toUpperCase()} ＞ [${M.join(",")}]${O} ＞ ${A}[${E.join(",")}]<br>${T}<br>${S}</span>`;br(k),s.showToast&&Qe(k,2e3),t&&t(T,R,k,A)})}else if(c){const h=c[1];ac({dices:[{color:16777215}]},p=>{if(!p||p.length===0){console.error("3Dダイスロールの結果がありません。");return}let v=null;const m=p[0].value,g=m===0?10:m;let _="";switch(h){case"nm":_=rl("SI-","姉妹への未練表",g),v=Sr[`SI-${String(g).padStart(2,"0")}`];break;case"nme":_=rl("EN-","敵への未練表",g),v=Sr[`EN-${String(g).padStart(2,"0")}`];break;case"nmn":_=rl("NP-","中立者への未練表",g),v=Sr[`NP-${String(g).padStart(2,"0")}`];break;case"nt":const x=Jd("たからもの表",Uf,g);_=x.resultText,v=x.selectedMasterData;break;case"nh":const y=Jd("暗示表",Ff,g);_=y.resultText,v=y.selectedMasterData;break;case"nal":const M=g===10?"0":String(g);v=zf[M],_=v?`🎲 目覚めの場所表(${M})<br>【${v.name}】 ${v.description}`:`目覚めの場所データ[${M}]が見つかりませんでした。`;break;case"1d10":case"d10":_=`🎲 D10 ＞ ${g}`;break}br(_),typeof s=="object"&&s.showToast&&Qe(_,3e3),t&&t(g,null,_,v)})}else if(d)Zd(s,(h,f,p)=>`🎲 1D100 ＞ ${h} [${f*10} + ${p}]`);else if(u)Zd(s,h=>{let f,p,v,m;switch(n){case"nk":m=Bf,p="記憶のカケラ表";break;case"nka":m=Of,p="記憶のカケラ-α表";break;case"nkb":m=kf,p="記憶のカケラ-β表";break;case"nph":m=Vf,p="死後経歴表";break}const g=h,_=Object.keys(m).find(x=>{let y;return x==="0"?y=10:x==="00"?y=100:y=parseInt(x,10),y===g});return f=_?m[_]:null,v=_||h,f?`🎲 ${p}(${v})<br>【${f.name}】 ${f.description}`:`${p}データ[${v}]が見つかりませんでした。`});else{let h=`「${e}」は無効な入力です。`;const f=/^(\d*)d(\d+)([+-]\d+)?$/,p=n.match(f);if(p){const v=p[1]?parseInt(p[1],10):1,m=parseInt(p[2],10),g=p[3]?parseInt(p[3],10):0;if(v>0&&m>0&&v<=100){const _=Array.from({length:v},()=>Math.floor(Math.random()*m)+1);_.sort((E,A)=>E-A);const x=_.reduce((E,A)=>E+A,0),y=x+g;let M=g>0?`+${g}`:g<0?`${g}`:"";h=`🎲 ${e.toUpperCase()} ＞ ${x}[${_.join(",")}]${M} ＞ ${y}`}else h=`「${e}」のダイスの数や種類が正しくありません。`}br(h),(typeof s=="object"&&s.showToast||typeof s=="string")&&Qe(h,3e3)}}function rl(s,e,t){const n=Sr;if(!n||Object.keys(n).length===0)return"未練データが見つかりませんでした。";const i=`${s}${String(t).padStart(2,"0")}`,r=n[i];return r?`🎲 ${e}(${i})<br>【${r.name}】[発狂:${r.madnessName}] ${r.madnessEffect}`:`未練データ[${i}]が見つかりませんでした。`}const TE="1.4.5";function ra(s){if(!s)return console.error("[Converter] 変換対象のデータ(sourceData)が存在しません。"),null;try{const e={},t=s.Name||s.pc_name||s.data_title||"名称未設定";e.name=t,e.displayName=t,e.originalName=t,e.description=`${s.data_title||""} | ${s.Position_Name||""}（${s.MCLS_Name||""}・${s.SCLS_Name||""}）`,e.img="/images/noimage.png",e.category="ドール",e.initialArea=s.sex||"煉獄",e.baseActionValue=6;const n=s.pc_carma;if(n){const p=xc();let v=null;for(const m in p){const g=p[m].name;if(n.includes(g)){v=g;break}}if(v){const m=Object.keys(p).find(g=>p[g].name===v);e.hint={key:m,name:v,description:p[m].description}}else e.hint={name:n,description:"マスタデータに詳細が見つかりませんでした。"}}else e.hint=null;e.position=s.Position_Name||"",e.mainClass=s.MCLS_Name||"",e.subClass=s.SCLS_Name||"";const i={1:"武装",2:"変異",3:"改造"};e.enhancementValue={bonus:i[s.ST_Bonus]||"武装"},e.skills=[],e.parts={head:[],arms:[],torso:[],legs:[],body:[]},e.treasures=[];const r={4:"head",5:"arms",6:"torso",7:"legs"},o={1:"オート",2:"アクション",3:"ジャッジ",4:"ダメージ",5:"ラピッド"},a={1:"攻撃",2:"攻撃",3:"行動値",4:"補助",5:"妨害",6:"防御",7:"移動"},l=s.Power_name?.length||0,c=yc(),d=Object.values(c).map(p=>p.name);for(let p=0;p<l;p++){const v=s.Power_name[p];if(!v)continue;const m=s.Power_hantei[p],g=r[m];if(d.includes(v)&&(e.treasures.includes(v)||e.treasures.push(v)),!Ft(v)){const x=s.Power_Type[p],y={name:v,timing:o[s.Power_timing[p]]||"オート",cost:s.Power_cost[p]||"なし",range:s.Power_range[p]||"自身",effect:s.Power_memo[p]||"効果不明",description:s.Power_memo[p]||"効果不明",category:["1","2","3"].includes(m)?"スキル":a[x]||"強化パーツ",tags:[]};Cp(y)}["1","2","3"].includes(m)?e.skills.push(v):g?e.parts[g].push(v):e.skills.push(v)}e.regrets=[];const u=s.roice_name?.length||0;for(let p=0;p<u;p++){const v=s.roice_name[p],m=s.roice_pos[p];if(v&&m){const g=parseInt(s.roice_damage[p],10),_=isNaN(g)?3:g,x=v.includes("たからもの"),y=d.some(A=>v.includes(A)),M=x||y,E={name:`${v}への${m}`,points:_,targetName:v,regretName:m,isForTreasure:M};e.regrets.push(E)}}e.memories=[];const h=Zo(),f=s.kakera_name?.length||0;for(let p=0;p<f;p++){const v=s.kakera_name[p],m=s.kakera_memo[p];if(!v)continue;let g=null;for(const x in h){const y=h[x].name;if(v.includes(y)){g=y;break}}const _=g||v.trim();e.memories.push({name:_,memo:m})}return e.personalData={title:s.data_title||"",tags:s.pc_tags||"",race:s.shuzoku||"ドール",age:s.age||"",sex:s.sex||"",height:s.pc_height||"",weight:s.pc_weight||"",karma:s.pc_carma||"",hairColor:s.color_hair||"",eyeColor:s.color_eye||"",skinColor:s.color_skin||"",memo:s.pc_making_memo||""},e}catch(e){return console.error("キャラクターシートの変換中にエラーが発生しました:",e),null}}const AE="1.2.10";function CE(s){const t=Or().maneuverCategories.find(n=>n.name===s);return t?t.slug:"other"}function RE(s){if(s.tags&&s.tags.includes("たからもの"))return"たからもの";if(!s.id)return"その他";const e=Or();if(!e||!e.positions)return"データ読込中...";const t=s.id,n=t.substring(0,2),i=t.substring(0,1);let r="スキル";e.positions[n]?r=`ポジションスキル：${e.positions[n].name}`:e.classes[n]?t.endsWith("-SP")?r=`特化スキル：${e.classes[n].name}`:r=`クラススキル：${e.classes[n].name}`:n==="BP"?r="基本パーツ":["A","M","R"].includes(i)&&!isNaN(parseInt(t.substring(1,2),10))?r=`強化パーツ：${t.substring(1,2)}レベル${e.enhancementTypes[i].name}`:t.startsWith("P")?r="手駒専用パーツ":e.pawnSkills[n]?r=e.pawnSkills[n].name:e.commonAction&&e.commonAction[n]&&(r=e.commonAction[n].name);let o="";return typeof s.maliceLevel=="number"&&s.maliceLevel>0&&(o=`<span class="malice-level">悪意${s.maliceLevel}</span>`),r+o}function IE(s){let e="その他";if(s.source){let t=s.source.book||"";t==="基本ルールブック"&&(t="基本ルール"),e=t,s.source.page&&(e+=` p${s.source.page}`),s.source.errata&&(e+="（エラッタ適用済）")}return e}const PE="1.2.6",LE={apiKey:"AIzaSyA-BGPA0Ym9pUAuBPTrSYvMYjW5orT8v9U",authDomain:"nechronica-st.firebaseapp.com",databaseURL:"https://nechronica-st-default-rtdb.firebaseio.com",projectId:"nechronica-st",storageBucket:"nechronica-st.firebasestorage.app",messagingSenderId:"482404051345",appId:"1:482404051345:web:2ca518f33dadc4d8f5d230",measurementId:"G-LKEH0S06E3"};firebase.initializeApp(LE);const Xi=firebase.database(),Hf={iceServers:[{urls:"stun:stun.l.google.com:19302"}]};let Gs=new Map,Ws=new Map,cc,mr,uc,Gf,Ht=null,qi=null;const dc="nechronica-session-host-room-id";async function Wf(s){const t=new TextEncoder().encode(s),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return btoa(String.fromCharCode.apply(null,i))}function DE(s,e,t){cc=s,mr=e,uc=t,Gf=`user_${Math.random().toString(36).substr(2,9)}`}async function Qd(s=null){const e=Xi.ref("rooms");let t=!1;if(!s){t=!0;let i=!0;for(;i;)s=Math.floor(Math.random()*1e4).toString().padStart(4,"0"),i=(await e.child(s).once("value")).exists()}if(Ht=Xi.ref(`rooms/${s}`),t)await Ht.set({createdAt:firebase.database.ServerValue.TIMESTAMP,meta:{status:"public",passcodeHash:""}}),console.log(`Firebase: 新規セッション[${s}]を初期化しました。`);else{if(!(await Ht.once("value")).exists())throw localStorage.removeItem(dc),new Error(`ルーム[${s}]が見つかりませんでした。`);await Ht.child("nc").remove(),console.log(`Firebase: 既存セッション[${s}]に復帰します。`)}localStorage.setItem(dc,s);const n=Ht.child("pls");return n.on("value",i=>{const r=i.val(),o=r?Object.keys(r):[];console.log("接続中のPLリスト:",o),uc&&uc(o)}),n.on("child_added",async i=>{const r=i.key;if(!r)return;console.log(`Firebase: PL[${r}]との接続を開始します。`);const o=new RTCPeerConnection(Hf);Gs.set(r,o),o.onicecandidate=u=>{u.candidate&&Ht.child("nc/iceCandidates").push(u.candidate.toJSON())};const a=o.createDataChannel("data");$f(r,a);const l=n.child(r);l.child("sdp").on("value",u=>{u.exists()&&(!o.remoteDescription||o.remoteDescription.sdp!==u.val().sdp)&&o.setRemoteDescription(new RTCSessionDescription(u.val()))}),l.child("iceCandidates").on("child_added",u=>{u.exists()&&o.addIceCandidate(new RTCIceCandidate(u.val()))});const c=await o.createOffer();await o.setLocalDescription(c);const d={sdp:c.sdp,type:c.type};await Ht.child("nc/sdp").set(d)}),s}async function eh(s,e){Ht=Xi.ref(`rooms/${s}`);const t=await Ht.child("meta").once("value");if(!t.exists())throw new Error(`ルーム番号「${s}」は存在しないか、準備ができていません。`);const n=t.val();if(n.status==="restricted")throw new Error("このルームは現在、新しい参加者を募集していません。");if(n.status==="locked"){let r=!1;for(;!r;){const o=prompt(`このルームはパスコードで保護されています。
4桁のパスコードを入力してください：`);if(o===null)throw new Error("入室をキャンセルしました。");await Wf(o)===n.passcodeHash?r=!0:alert("パスコードが違います。")}}qi=Ht.child(`pls/${Gf}`),console.log(`Firebase: ルーム[${s}]への参加を開始します。`);const i=new RTCPeerConnection(Hf);Gs.set("nc",i),i.onicecandidate=r=>{r.candidate&&qi.child("iceCandidates").push(r.candidate.toJSON())},i.ondatachannel=r=>{const o=r.channel;$f("nc",o)},Ht.child("nc/sdp").on("value",async r=>{if(r.exists()){await i.setRemoteDescription(new RTCSessionDescription(r.val()));const o=await i.createAnswer();await i.setLocalDescription(o);const a={sdp:o.sdp,type:o.type};await qi.child("sdp").set(a)}}),Ht.child("nc/iceCandidates").on("child_added",r=>{r.exists()&&i.addIceCandidate(new RTCIceCandidate(r.val()))}),await qi.child("profile").set({name:e,joinedAt:firebase.database.ServerValue.TIMESTAMP})}function $f(s,e){e.onopen=()=>{console.log(`Data channel with [${s}] is open!`),Ws.set(s,e),mr&&mr(s,"connected")},e.onclose=()=>{console.log(`Data channel with [${s}] is closed.`),mr&&mr(s,"disconnected")},e.onmessage=t=>{cc&&cc(JSON.parse(t.data))}}function NE(s){for(const e of Ws.values())e.readyState==="open"&&e.send(JSON.stringify(s))}async function FE(s){if(!Ht)return;const e=Ws.get(s);e&&e.readyState==="open"&&e.send(JSON.stringify({type:"kicked"})),Gs.get(s)?.close(),Gs.delete(s),Ws.delete(s),await Ht.child(`pls/${s}`).remove(),console.log(`Firebase: PL[${s}]を追放しました。`),NE({type:"log",payload:`PL「${s}」がセッションから追放されました。`})}function ol(){Ws.forEach(s=>s.close()),Ws.clear(),Gs.forEach(s=>s.close()),Gs.clear(),Ht&&(Ht.off(),qi?(qi.remove().then(()=>console.log("Firebaseから自身のデータを削除しました。")).catch(s=>console.error("データ削除エラー:",s)),qi=null):(localStorage.removeItem(dc),Ht.remove().then(()=>console.log("Firebaseからルーム全体を削除しました。")).catch(s=>console.error("ルーム削除エラー:",s))),Ht=null),console.log("セッションから切断しました。")}const UE="2.1.15";async function BE(){const s=localStorage.getItem("theme")||"system";al(s),document.querySelector(`input[name="theme-switcher"][value="${s}"]`).checked=!0,document.querySelectorAll('input[name="theme-switcher"]').forEach(h=>{h.addEventListener("change",f=>{al(f.target.value),localStorage.setItem("theme",f.target.value)})}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("theme")||"system")==="system"&&al("system")});const e=document.querySelector('input[name="autosave-switcher"]');e.checked=uT(),e.addEventListener("change",h=>dT(h.target.checked));const t=document.getElementById("sessionStartBtn"),n=document.getElementById("sessionJoinContainer"),i=document.getElementById("sessionNcPanel"),r=document.getElementById("sessionPlPanel");DE(h=>{console.log("受信:",h),h.type==="notification"?Qe(h.payload,3e3):h.type==="kicked"&&(alert("ルームから追放されました。"),ol(),window.location.href=window.location.pathname)},(h,f)=>{console.log(`接続状態: ${h} is ${f}`);const p=document.getElementById("plConnectionStatus");p&&(p.textContent=f==="connected"?"接続完了":"接続待機中...")},h=>{const f=document.getElementById("ncPeerList"),p=document.getElementById("ncPeerCount");f&&p&&(f.innerHTML="",h.forEach(v=>{Xi.ref(`rooms/${document.getElementById("ncRoomId").textContent}/pls/${v}/profile`).once("value",g=>{const _=g.val();if(_){const x=document.createElement("div");x.className="peer-list-item",x.innerHTML=`
                                <span class="peer-name">${_.name}</span>
                                <button class="kick-btn" data-pl-id="${v}">追放</button>
                            `,f.appendChild(x),x.querySelector(".kick-btn").addEventListener("click",y=>{const M=y.target.dataset.plId;confirm(`PL「${_.name}」を追放しますか？`)&&FE(M)})}})}),p.textContent=h.length)});const o=()=>{const h=ut(),f=h.some(v=>v.type==="pc"),p=h.some(v=>v.type==="enemy");t.disabled=!(f&&p)};o(),new MutationObserver(o).observe(document.getElementById("pcContainer"),{childList:!0}),new MutationObserver(o).observe(document.getElementById("enemyContainer"),{childList:!0});const a=new URLSearchParams(window.location.search),l=a.get("room"),c=a.get("plName"),d="nechronica-session-host-room-id",u=localStorage.getItem(d);if(l&&c){document.body.classList.add("pl-mode"),t.style.display="none",n.style.display="none",i.style.display="none",r.style.display="block",document.getElementById("plRoomId").textContent=l;try{await eh(l,decodeURIComponent(c))}catch(h){alert(h.message+`
通常モードで起動します。`),window.location.href=window.location.pathname}}else if(l&&!c)alert("PL名が指定されていません。入室画面に戻ります。"),window.location.href=window.location.pathname;else if(u)if(confirm(`前回のセッション[${u}]が中断されています。復帰しますか？`))try{Qe(`セッション[${u}]に復帰しています...`,2e3);const h=await Qd(u);t.style.display="none",n.style.display="none",i.style.display="block";const f=`${window.location.origin}${window.location.pathname}?room=${h}`;document.getElementById("ncInviteUrl").value=f,document.getElementById("ncRoomId").textContent=h,document.body.classList.add("nc-mode"),Qe(`セッション[${h}]に復帰しました`,2e3)}catch(h){alert(`セッションへの復帰に失敗しました: ${h.message}
新規セッションとして開始します。`),localStorage.removeItem(d)}else localStorage.removeItem(d),Xi.ref(`rooms/${u}`).remove(),alert("セッションへの復帰をキャンセルし、古いルーム情報を削除しました。新規セッションとして開始します。");else document.body.classList.add("nc-mode");if(t.addEventListener("click",async()=>{Qe("ルームを作成しています...",2e3);try{const h=await Qd();t.style.display="none",n.style.display="none",i.style.display="block";const f=`${window.location.origin}${window.location.pathname}?room=${h}`;document.getElementById("ncInviteUrl").value=f,document.getElementById("ncRoomId").textContent=h,Qe(`ルーム[${h}]を作成しました`,2e3)}catch(h){console.error("ルーム作成エラー:",h),alert("ルームの作成に失敗しました。")}}),document.getElementById("ncCopyUrlBtn").addEventListener("click",()=>{navigator.clipboard.writeText(document.getElementById("ncInviteUrl").value).then(()=>{Qe("招待URLをコピーしました！",1500)})}),document.getElementById("sessionJoinBtn").addEventListener("click",()=>{const h=document.getElementById("plNameInput").value.trim(),f=document.getElementById("sessionRoomIdInput").value.trim();if(!h){alert("PL名を入力してください。");return}if(/^\d{4}$/.test(f)){const p=new URL(window.location.href);p.searchParams.set("room",f),p.searchParams.set("plName",encodeURIComponent(h)),window.location.href=p.toString()}else alert("4桁のルーム番号を正しく入力してください。")}),l&&c){document.body.classList.add("pl-mode"),t.style.display="none",n.style.display="none",i.style.display="none",r.style.display="block",document.getElementById("plRoomId").textContent=l;try{await eh(l,decodeURIComponent(c))}catch(h){alert(h.message+`
通常モードで起動します。`),window.location.href=window.location.pathname}}else l&&!c&&(alert("PL名が指定されていません。入室画面に戻ります。"),window.location.href=window.location.pathname);document.querySelectorAll('input[name="room-status"]').forEach(h=>{h.addEventListener("change",async f=>{const p=f.target.value,v=document.getElementById("ncRoomId").textContent;if(!v)return;await Xi.ref(`rooms/${v}/meta/status`).set(p),document.getElementById("passcodeArea").style.display=p==="locked"?"grid":"none";const m={public:"参加受付中",locked:"鍵付き部屋",restricted:"入室制限中"};document.getElementById("ncRoomStatusLabel").textContent=m[p],Qe(`ルームを「${m[p]}」状態に変更しました。`,1500)})}),document.getElementById("setPasscodeBtn").addEventListener("click",async()=>{const h=document.getElementById("passcodeInput").value,f=document.getElementById("ncRoomId").textContent;if(!/^\d{4}$/.test(h)){alert("パスコードは4桁の数字で入力してください。");return}if(f)try{const p=await Wf(h);await Xi.ref(`rooms/${f}/meta`).update({passcodeHash:p}),Qe("パスコードを設定/変更しました。",1500)}catch(p){console.error("パスコード設定エラー:",p),alert("パスコードの設定に失敗しました。")}}),document.getElementById("sessionLeaveBtn").addEventListener("click",()=>{confirm("現在のセッションから退席します。よろしいですか？")&&(ol(),Qe("セッションから退席しました。",2e3),setTimeout(()=>{window.location.href=window.location.pathname},1e3))}),document.getElementById("sessionEndBtn").addEventListener("click",()=>{confirm("セッションを終了し、全員の接続を切断します。よろしいですか？")&&(ol(),Qe("セッションを終了しました。",2e3),setTimeout(()=>{window.location.reload()},1e3))}),console.log("Settings Manager initialized.")}function al(s){s==="system"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",s)}function OE(){let s=0;for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e),n=localStorage.getItem(t);if(t&&n){const i=(t.length+n.length)*2;s+=i}}return s}function kE(){localStorage.removeItem("userLocalImages"),console.log("Local image cache cleared.")}const zE="1.1.5";function Xf(s,e){const t=e.range;if(!t||isNaN(parseInt(t[0],10)))return{minRange:NaN,maxRange:NaN};let n=0;const i=[...(s.skills||[]).map(l=>Ft(l)),...Object.values(s.partsStatus||{}).flat().filter(l=>!l.damaged).map(l=>Ft(l.name))].filter(l=>l);for(const l of i)if(l.timing==="オート"&&l.effects){for(const c of l.effects)if(c.ref==="APPLY_BUFF"&&c.params?.stat==="rangeBonus"){const d=c.params.condition;if(d&&Array.isArray(d)){const u=e.tags||[];d.some(h=>u.includes(h))&&(n+=c.params.value||0)}else n+=c.params.value||0}}const r=String(t).split("～"),o=parseInt(r[0],10),a=parseInt(r[1]||r[0],10)+n;return{minRange:o,maxRange:a}}function Gc(s){if(!s||s.type!=="instance")return{finalAmount:0,baseAmount:0,totalBonus:0,totalDefense:0};const{performer:e}=s.sourceAction,{target:t}=s,n=ct(e.id),i=ct(t.id);if(!n||!i)return{finalAmount:0,baseAmount:0,totalBonus:0,totalDefense:0};const r=s.baseAmount||0;let o=0,a=0;return s.rollValue>=11&&(o+=s.rollValue-10),(n.activeBuffs||[]).forEach(d=>{d.stat==="damageBonus"&&(d.duration==="onetime_next_action"||d.duration==="until_damage_applied")&&(o+=d.value||0)}),(i.activeBuffs||[]).forEach(d=>{d.stat==="defense"&&d.duration==="until_damage_applied"&&(a+=d.value||0)}),Object.values(i.partsStatus).flat().map(d=>d.damaged?null:Ft(d.name)).filter(d=>d?.timing==="オート"&&d.effects).forEach(d=>{d.effects.forEach(u=>{if(u.ref==="APPLY_PASSIVE_DEFENSE"&&u.params?.value){const h=u.params.condition?.replace("hit_location_is_","");s.location.toLowerCase().includes(h)&&(a+=u.params.value)}})}),{finalAmount:Math.max(0,r+o-a),baseAmount:r,totalBonus:o,totalDefense:a}}const VE="1.1.1",HE={cores:{嫌悪:"厭世家",独占:"束縛者",依存:"甘えん坊",執着:"追跡者",恋心:"夢見る乙女",対抗:"挑戦者",友情:"博愛主義者",保護:"守護者",憧憬:"崇拝者",信頼:"信奉者"},modifiers:{嫌悪:"排他的で",独占:"独占欲の強い",依存:"かまってほしがりな",執着:"執念深い",恋心:"ロマンチストな",対抗:"負けず嫌いの",友情:"友好的な",保護:"過保護な",憧憬:"理想主義の",信頼:"献身的な"},special_cores:{嫌悪:"人間不信の批評家",独占:"歪んだ愛の信奉者",依存:"共依存体質の寂しがり",執着:"ストーカー気質の粘着マン",恋心:"恋に恋するお嬢様",対抗:"一番じゃないと気が済まない生粋のライバル",友情:"友達のためなら全てを捧げる親友",保護:"聖母コンプレックスの世話焼き",憧憬:"理想の幻影を追い求める夢想家",信頼:"盲目的に相手を信じ込む純粋な魂"},triples:{嫌悪:"絶対的排他主義者",独占:"完全なる支配者",依存:"自立を忘れた雛鳥",執着:"執念の化身",恋心:"純粋無垢な恋の殉教者",対抗:"勝利以外は無価値と見なす求道者",友情:"無限の愛を振りまく聖人",保護:"自己犠牲を厭わない絶対守護者",憧憬:"神格化された偶像の熱狂的信者",信頼:"疑うことを知らない無垢な魂"},special_combos:{"嫌悪,独占,恋心":"愛憎渦巻くヤンデレ","嫌悪,対抗,執着":"敵意に満ちた執念深いウォッチャー","依存,保護,恋心":"献身を求める甘え上手","依存,友情,保護":"仲間外れを恐れる世話焼き","執着,恋心,憧憬":"憧れの人をどこまでも追いかける一途なストーカー","対抗,憧憬,信頼":"好敵手を認め、高め合う求道者","友情,保護,信頼":"仲間を信じ守る献身的なリーダー","独占,保護,執着":"守るためなら閉じ込めたい過保護な監視者","恋心,友情,信頼":"信じた相手にどこまでも尽くす乙女","嫌悪,信頼,依存":"信じたいのに信じきれない不安定な懐疑主義者","対抗,友情,独占":"親友にだけは負けたくない独占欲の強いライバル","憧憬,保護,依存":"理想の人に守られたい甘えん坊","嫌悪,友情,恋心":"好きだけど素直になれないツンデレ","独占,信頼,恋心":"愛する人を自分だけのものにしたいと願う一途な信者","執着,対抗,憧憬":"憧れのライバルに執着する努力家"}};function GE(s){const e=HE,t=s.map(o=>o.regretName).filter(Boolean);if(!t||t.length===0)return"？？？";let n=[];t.length===1?n=[t[0],t[0],t[0]]:t.length===2?n=[t[0],t[0],t[1]]:n=t.slice(0,3);const i={};n.forEach(o=>{i[o]=(i[o]||0)+1});const r=Object.keys(i).sort();if(r.length===1){const o=r[0];return e.triples[o]||`純粋な${e.cores[o]}`}if(r.length===2){const o=Object.keys(i).find(d=>i[d]===2),a=Object.keys(i).find(d=>i[d]===1),l=e.special_cores[o];return`${e.modifiers[a]}、${l}`}if(r.length===3){const o=r.join(",");if(e.special_combos[o])return e.special_combos[o];const a=e.modifiers[r[0]],l=e.cores[r[1]],c=e.modifiers[r[2]];return`${a}${l}だが、時折${c}一面を見せる`}return"定義不能な性格"}const WE={"嫌悪,嫌悪":"互いの破滅を望む不倶戴天の敵","独占,独占":"互いを所有物と見なし、傷つけ合う共犯者","依存,依存":"互いがいないと精神が崩壊する共依存","執着,執着":"四六時中互いを監視し合う、逃れられない運命共同体","恋心,恋心":"互いを想うあまりに自らを傷つける、悲劇的な恋人たち","対抗,対抗":"互いを打ち負かすことだけが存在意義の、永遠の好敵手","友情,友情":"相手の痛みすら分かち合おうとする、自己犠牲的な親友","保護,保護":"互いを無力と見なし、過剰なまでに庇い合う窒息した関係","憧憬,憧憬":"互いに歪んだ理想像を押し付け合う、幻影の崇拝者","信頼,信頼":"互いを信じるあまり、世界中の全てを疑う排他的なパートナー","嫌悪,依存":"憎みながらも、見捨てられることを恐れる腐れ縁","嫌悪,執着":"憎悪の対象から片時も目を離さない、粘着質な監視者","嫌悪,恋心":"「好き」と「殺したい」が同居する、破滅的な愛憎関係","嫌悪,独占":"憎い相手を誰にも渡したくない、屈折した所有者","嫌悪,対抗":"軽蔑と敵意が渦巻く、不毛な競争相手","嫌悪,友情":"友情を求めながらも、素直になれず攻撃してしまう天邪鬼","嫌悪,保護":"守りたいはずが、その弱さを憎んでしまう歪んだ庇護","嫌悪,憧憬":"かつての憧れが、嫉妬と憎悪に転化した元崇拝者","嫌悪,信頼":"信じようとする度に裏切られたと感じる、人間不信の対象","依存,執着":"見捨てられる不安から、相手の一挙一動に執着する関係","依存,恋心":"恋愛感情を、己の生存意義と勘違いしている依存者","依存,独占":"支配されることで安心感を得る、歪んだ隷属関係","依存,対抗":"好敵手の存在そのものに依存してしまっている競争者","依存,友情":"友情を履き違え、際限なく相手に寄りかかる甘えん坊","依存,保護":"庇護されることを当然と受け入れる、無垢なる被保護者","依存,憧憬":"憧れの対象の言葉を、己の意思なく実行する追随者","依存,信頼":"絶対的な信頼を寄せ、思考すら放棄した信奉者","執着,恋心":"恋愛感情が行き過ぎ、ストーキングに発展した一方的な思慕","執着,独占":"相手の全てを把握し、管理しようとする支配的な粘着","執着,対抗":"好敵手の全てを知り尽くそうとする、狂気的な研究者","執着,友情":"親友という立場を利用し、どこまでもついてくる影","執着,保護":"「守るため」という大義名分で、相手を常に監視する看守","執着,憧憬":"神格化した相手の幻影を、現実でも追い続ける狂信者","執着,信頼":"信頼を逆手に取り、相手のプライベートに踏み入る侵害者","恋心,独占":"愛するが故に、相手を世界から隔離したいと願う籠の管理者","恋心,対抗":"同じ相手を想う恋敵、あるいは好敵手への歪んだ恋慕","恋心,友情":"親友という関係を壊したくない、臆病な片思い","恋心,保護":"庇護欲を恋愛感情と錯覚している守護者と、それに甘える姫","恋心,憧憬":"手の届かない偶像に、報われないと知りながら恋い焦がれるファン","恋心,信頼":"信頼から芽生えた、盲目的で純粋な恋愛感情","独占,対抗":"好敵手を自分だけのものにしたい、歪んだ独占欲を持つライバル","独占,友情":"親友を誰にも渡さない、友情を名目にした束縛","独占,保護":"保護の名目で相手を囲い込み、外部から隔離する支配者","独占,憧憬":"憧れの対象を穢させまいと、独り占めしようとする狂信的な崇拝者","独占,信頼":"信頼関係を悪用し、相手の交友関係を支配する操縦者","対抗,友情":"互いを高め合う、健全に見えて熾烈な競争を繰り広げる親友","対抗,保護":"見下している相手を守らざるを得ない、屈辱的な庇護関係","対抗,憧憬":"憧れの背中をいつか超えることを誓う、好敵手兼崇拝者","対抗,信頼":"信頼する相手だからこそ、絶対に負けたくない真剣な勝負相手","友情,保護":"友のために、危険を顧みずに行動する献身的な守護者","友情,憧憬":"尊敬する友のようになりたいと願う、純粋な追随者","友情,信頼":"固い友情と信頼で結ばれた、戦場における唯一の心の支え","保護,憧憬":"神聖な憧れの対象を、どんな脅威からも守ろうとする狂信的な騎士","保護,信頼":"絶対的な信頼に基づき、命を懸けて相手を守る守護者","憧憬,信頼":"尊敬と信頼が入り混じった、師弟あるいはそれ以上の関係"};function $E(s){if(!s||s.length!==2)return"不明な関係";const e=[...s].sort().join(",");return WE[e]||"定義不能な関係"}const XE="1.23.1";let $o=null;const $s=["奈落","地獄","煉獄","花園","楽園"];let Yi=null,hr="宣言",th=null;function Xo(){Yi&&(Yi(null),Yi=null,document.querySelectorAll(".target-selectable").forEach(s=>{s.classList.remove("target-selectable"),s.onclick=null}),sn())}const hc=s=>{const e=document.getElementById("maneuverMenu");e&&!e.contains(s.target)&&$o&&!$o.contains(s.target)&&Xs(),Yi&&(s.target.closest(".target-selectable")||Xo())};function nh(s,e){Yi&&Xo(),Xs(),$o=e;const t=document.getElementById("maneuverMenu");t.innerHTML="",t.classList.remove("is-reference-mode");const n=[{id:"宣言",label:"宣言"},{id:"スキル",label:"スキル"},{id:"パーツ",label:"パーツ"},{id:"オート",label:"オート"},{id:"アクション",label:"アクション"},{id:"ラピッド",label:"ラピッド"},{id:"ジャッジ",label:"ジャッジ"},{id:"ダメージ",label:"ダメージ"},{id:"バフ",label:"バフ"},{id:"移動",label:"移動"},{id:"攻撃",label:"攻撃"},{id:"支援",label:"支援"},{id:"妨害",label:"妨害"},{id:"強化",label:"強化"},{id:"防御",label:"防御"},{id:"生贄",label:"生贄"},{id:"すべて",label:"すべて"}],i=document.createElement("div");i.className="maneuver-menu-header",i.innerHTML=`
        <span class="header-icon" id="menuHeaderIcon">人形設計図 🪪</span>
        <span class="header-title">${s.name}</span>
        <button class="header-close-btn">&times;</button>
    `,t.appendChild(i),i.querySelector("#menuHeaderIcon").onclick=()=>oa(s),i.querySelector(".header-close-btn").onclick=Xs;const r=document.createElement("div");r.className="maneuver-menu-filter-bar",n.forEach(d=>{const u=document.createElement("button");u.className="filter-btn",u.dataset.filterId=d.id,u.textContent=d.label,d.id===hr&&u.classList.add("is-active"),u.onclick=()=>{hr=d.id,r.querySelectorAll(".filter-btn").forEach(h=>h.classList.remove("is-active")),u.classList.add("is-active"),a()},r.appendChild(u)}),t.appendChild(r);const o=document.createElement("div");o.className="maneuver-menu-list-container",t.appendChild(o);const a=()=>{o.innerHTML="";const d=Wc(s);let u=jE(d,hr,s);hr!=="パーツ"&&(u=ep(u)),hr==="パーツ"?l(u,s):c(u,s)},l=(d,u)=>{["頭","腕","胴","脚","他"].forEach(f=>{const p=d.filter(v=>jf(v.data,u).includes(f));if(p.length>0){const v=document.createElement("div");v.className="maneuver-group",v.innerHTML=`<div class="group-header">${f}</div>`,p.forEach(m=>v.appendChild(fc(m,u))),o.appendChild(v)}})},c=(d,u)=>{if(d.length===0){o.innerHTML='<div class="maneuver-item is-empty">対象のマニューバはありません</div>';return}d.forEach(h=>o.appendChild(fc(h,u)))};a(),t.classList.add("is-visible"),setTimeout(()=>{document.addEventListener("click",hc)},0)}function qf(s,e){const t=s.data;let n=!1;if(!e||!e.id)return!1;if(s.isActiveBuff&&(n=!0),t.effects?.some(r=>r.ref==="REDUCE_NEXT_MANEUVER_COST")&&e.spineBonus>0&&(n=!0),t.timing==="オート"){const r=s.isDamaged,o=["MODIFY_MAX_ACTION_VALUE_ON_DAMAGE","ATTACK_ON_DAMAGE"];if(t.effects?.some(a=>o.includes(a.ref))&&r&&(n=!0),!n&&!r){const a=t.effects?.find(l=>l.params?.duration==="while_in_area");if(a)e.area===a.params.area&&(n=!0);else{const l=["REDUCE_MOVE_COST","NEGATE_STATUS_EFFECT","APPLY_PASSIVE_DEFENSE","PREVENT_INTERRUPTION","MODIFY_ATTACK_RESULT","IMMUNITY","NEGATE_DAMAGE_EFFECT","APPLY_BUFF"];t.effects?.some(c=>l.includes(c.ref)&&c.ref!=="APPLY_CONDITIONAL_BUFF")&&(n=!0)}}}return n}function fc(s,e){const t=s.data,n=document.createElement("div");n.className="maneuver-item-new";const i=!e.id;i&&n.classList.add("is-reference-item");const r=document.createElement("div");r.className="item-category-col";const o=t.category||"その他",a=`category-color-${CE(o)}`;n.classList.add(a.replace("bg-","")),r.classList.add(a),r.innerHTML=`<span>${o}</span>`;const l=document.createElement("div");l.className="item-passive-icon-col",i||qf(s,e)&&(l.innerHTML='<span class="maneuver-icon">💡</span>');const c=document.createElement("div");if(c.className="item-status-icon-col",!i&&e.turnLimitedManeuvers&&e.turnLimitedManeuvers.has(t.name)){const y=e.usedManeuvers.has(t.name);c.innerHTML=`<input type="checkbox" class="maneuver-checkbox" ${y?"checked":""} disabled>`}const d=document.createElement("div");d.className="item-icon-col",d.appendChild(l),d.appendChild(c);const u=document.createElement("div");u.className="item-right-col";const h=RE(t),f=IE(t);let p="";const v=jf(t,e);v&&(p=`<span class="item-location-prefix">${v}</span>`);const m=`${p}<span class="item-maneuver-name">【${t.name}】</span>`,g=t.description_raw||"",_=encodeURIComponent(g);u.innerHTML=`
        <div class="ref-container-top">
            <div class="ref-source-info">${f}</div>
            <div class="ref-source-category">${h}</div>
        </div>
        <div class="ref-container">
            <div class="ref-maneuver-name">${m}</div>
            <div class="ref-stats">《${t.timing}/${t.cost}/${t.range}》</div>
        </div>
        <div class="item-row-2 has-copy-button">
            <span class="item-description">${g}</span>
            <button class="copy-description-btn" data-copy-text="${_}" title="効果テキストをコピー">📋</button>
        </div>
        ${t.flavor_text?`<div class="item-row-3 item-flavor-text">${t.flavor_text}</div>`:""}
    `,n.appendChild(r),n.appendChild(d),n.appendChild(u);const x=n.querySelector(".copy-description-btn");return x&&(x.onclick=y=>{y.stopPropagation(),navigator.clipboard.writeText(decodeURIComponent(y.currentTarget.dataset.copyText)).then(()=>{Qe("コピーしました！",1500)})}),s.isUsable?i||(n.onclick=y=>qE(y,e,s)):(n.classList.add("is-masked"),!i&&s.isDamaged&&n.classList.add("is-damaged")),n}async function qE(s,e,t){s.stopPropagation();const n=t.data;if(n.tags.includes("攻撃")?Xs():setTimeout(()=>Xs(),0),n.name==="任意"){const l=`<div class="action-cost-form"><div class="action-cost-selector">${[1,2,3,4,5].map(d=>`<label><input type="radio" name="action-cost" value="${d}" ${d===1?"checked":""}> <span>${d}</span></label>`).join("")}</div></div>`;Et({title:"消費する行動値を選択",bodyHtml:l,footerHtml:'<button id="applyActionCostBtn" class="welcome-modal-close-btn">適用</button>',onRender:(d,u)=>{d.querySelector("#applyActionCostBtn").onclick=()=>{const h=d.querySelector('input[name="action-cost"]:checked').value,f={...n,cost:String(parseInt(h,10))};pn(e,f),u()}}});return}if(n.timing==="ダメージ"&&n.tags.includes("防御")&&!n.effects?.some(l=>l.ref==="TAKE_DAMAGE_FOR_ALLY")){if(n.range==="自身"){At().damageQueue.find(d=>d.type==="instance"&&!d.applied&&d.target.id===e.id)?pn(e,n,e):Re("防御対象となる自身へのダメージがありません。");return}if(targetableDamages.length===0){Re("防御対象となるダメージがありません。");return}const l=await new Promise(c=>{const d=targetableDamages.map(u=>{const h=u.finalAmount??u.baseAmount??u.amount??0;return{label:`【${u.sourceAction.sourceManeuver.name}】→ ${u.target.name} (${h}点)`,onClick:()=>c(u)}});Et({title:`【${n.name}】防御対象を選択`,items:d,onRender:(u,h)=>{u.onclick=f=>{f.target===u&&(h(),c(null))}}})});l&&pn(e,n,l.target);return}if(n.effects?.find(l=>l.ref==="TAKE_DAMAGE_FOR_ALLY")){const l=At().damageQueue.filter(d=>d.type==="instance"&&!d.applied&&d.target.type===e.type&&d.target.id!==e.id&&Mi(e,n,[d.target]).hasTarget);if(l.length===0){Re("庇う対象がいません。");return}const c=await new Promise(d=>{const u=l.map(h=>{const f=h.finalAmount??h.baseAmount??h.amount??0;return{label:`【${h.sourceAction.sourceManeuver.name}】→ ${h.target.name} (${f}点)`,onClick:()=>d(h)}});Et({title:`【${n.name}】庇う対象を選択`,items:u,onRender:(h,f)=>{h.onclick=p=>{p.target===h&&(f(),d(null))}}})});c&&pn(e,n,c.target);return}if(n.timing==="ジャッジ"&&n.range!=="自身"){const l=Kf(e,n);if(l.length===0){Re("妨害/支援の対象となるアクションがありません。");return}const c=l.map(d=>({label:`${d.performer.name}: 【${d.sourceManeuver.name}】${d.target?` → ${d.target.name}`:""}`,onClick:()=>{pn(e,n,null,d)}}));Et({title:`【${n.name}】の対象を選択`,items:c});return}if(n.tags&&n.tags.includes("移動妨害")){const c=[...At().actionQueue,...At().rapidQueue].filter(u=>!u.checked&&u.performer.type!==e.type&&u.sourceManeuver.tags.includes("移動")&&Mi(e,n,[u.performer]).hasTarget);if(c.length===0){Re("妨害の対象となる移動がありません。");return}const d=c.map(u=>{let h="";const f=u.performer,p=u.sourceManeuver,v=u.target;return v&&v.id!==f.id?h=`${v.name}（${f.name}の【${p.name}】）`:h=`${f.name}: 【${p.name}】`,{label:h,onClick:()=>{pn(e,n,u)}}});Et({title:`【${n.name}】の妨害対象を選択`,items:d});return}if(n.tags.includes("移動")){if(n.range==="自身")KE(e,n);else{const l=await ih(e,n,hc);if(l){const c=await new Promise(d=>{Et({title:`【${n.name}】移動方向を選択`,items:[{label:"奈落方向へ",onClick:()=>d("奈落方向")},{label:"楽園方向へ",onClick:()=>d("楽園方向")}],onRender:u=>{u.onclick=h=>{h.target===u&&d(null)}}})});if(c){const d={...n,targetArea:c};pn(e,d,l)}}}return}if(n.tags.includes("攻撃")){const l=await ih(e,n,hc);l&&pn(e,n,l);return}pn(e,n)}function jE(s,e,t){let n=[];const i=["待機","任意"];switch(e){case"宣言":n=s.filter(r=>r.isUsable&&r.data.timing!=="オート");break;case"スキル":n=s.filter(r=>r.sourceType==="skill"&&!i.includes(r.data.name));break;case"パーツ":n=s.filter(r=>r.sourceType==="part"&&!i.includes(r.data.name));break;case"オート":n=s.filter(r=>r.data.tags.includes("オート")&&!i.includes(r.data.name));break;case"アクション":n=s.filter(r=>r.data.tags.includes("アクション")&&!i.includes(r.data.name));break;case"ラピッド":n=s.filter(r=>r.data.tags.includes("ラピッド")&&!i.includes(r.data.name));break;case"ジャッジ":n=s.filter(r=>r.data.tags.includes("ジャッジ")&&!i.includes(r.data.name));break;case"ダメージ":n=s.filter(r=>r.data.tags.includes("ダメージ")&&!i.includes(r.data.name));break;case"移動":n=s.filter(r=>(r.data.tags.includes("移動")||r.data.tags.includes("移動妨害"))&&!i.includes(r.data.name));break;case"攻撃":n=s.filter(r=>r.data.tags.includes("攻撃")&&!i.includes(r.data.name));break;case"防御":n=s.filter(r=>r.data.tags.includes("防御")&&!i.includes(r.data.name));break;case"強化":n=s.filter(r=>r.data.tags.includes("強化")&&!i.includes(r.data.name));break;case"支援":n=s.filter(r=>r.data.tags.includes("支援")&&!i.includes(r.data.name));break;case"妨害":n=s.filter(r=>(r.data.tags.includes("妨害")||r.data.tags.includes("脆弱")||r.data.tags.includes("移動妨害"))&&!i.includes(r.data.name));break;case"生贄":n=s.filter(r=>r.data.tags.includes("生贄")&&!i.includes(r.data.name));break;case"バフ":case"すべて":default:n=[...s];break}return(e==="バフ"||e==="すべて")&&t.activeBuffs&&t.activeBuffs.length>0&&t.activeBuffs.forEach(r=>{const o=Ft(r.source);if(o){const a=n.findIndex(l=>l.data.name===r.source&&!l.isActiveBuff);a>-1&&n.splice(a,1),n.some(l=>l.isActiveBuff&&l.sourceName===r.source)||n.push({data:o,sourceType:"active_buff",sourceName:r.source,isActiveBuff:!0,isUsable:!1})}}),e==="バフ"?n.filter(r=>{if(r.isActiveBuff)return!0;if(r.data.timing!=="オート"||!r.data.effects)return!1;let o=!1;const a=r.data,l=r.isDamaged,c=["MODIFY_MAX_ACTION_VALUE_ON_DAMAGE","ATTACK_ON_DAMAGE"];if(a.effects.some(d=>c.includes(d.ref))&&l&&(o=!0),!o&&!l){const d=["APPLY_BUFF","REDUCE_MOVE_COST","NEGATE_STATUS_EFFECT","APPLY_PASSIVE_DEFENSE","PREVENT_INTERRUPTION","MODIFY_ATTACK_RESULT","IMMUNITY","NEGATE_DAMAGE_EFFECT"];for(const u of a.effects)if(u.ref==="APPLY_BUFF"&&u.params?.duration==="while_in_area"){if(t.area===u.params.area){o=!0;break}}else if(d.includes(u.ref)){o=!0;break}}return o}):n}function oa(s){const e=s.category==="ドール",t=Or(),n=t.classes;let i={A:0,M:0,R:0};if(e){const u=Object.keys(n).find(m=>n[m].name===s.mainClass),h=Object.keys(n).find(m=>n[m].name===s.subClass),f=u?n[u]:null,p=h?n[h]:null;f&&(i.A+=f.A||0,i.M+=f.M||0,i.R+=f.R||0),p&&(i.A+=p.A||0,i.M+=p.M||0,i.R+=p.R||0);const v=s.enhancementValue.bonus;v==="武装"&&(i.A+=1),v==="変異"&&(i.M+=1),v==="改造"&&(i.R+=1)}const l=(e?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(u=>`<option value="${u}" ${s.area===u?"selected":""}>${u}</option>`).join("");let c="";if(e){const u=s.regrets.filter(f=>f.isChecked&&!f.isForTreasure&&!f.isUnset);c=`<div class="sheet-personality-title">【 ${GE(u)} 】</div>`}const d=`
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
            ${c}
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
            ${(()=>{if(!s.memories||s.memories.length===0)return"<p>（記憶のカケラはありません）</p>";const u=Zo();return s.memories.map(h=>{const f=Object.entries(u).find(([p,v])=>v.name===h.name);if(f){const[p,v]=f,m=v.description,g=h.memo?`<br><span class="sheet-user-memo"><i>${h.memo}</i></span>`:"",_=`${p}【${h.name}】
${m}`;return`
                            <p>
                                <span class="memory-text-container">
                                    ${p}<b>【${h.name}】</b><br>${m}${g}
                                </span>
                                <button class="copy-description-btn" data-copy-text="${encodeURIComponent(_)}">📋</button>
                            </p>`}else{const p=h.memo?`<br><span class="sheet-user-memo"><i>${h.memo}</i></span>`:"";return`<p><span class="memory-text-container"><b>【${h.name}】</b> (カスタム)${p}</span></p>`}}).join("")})()}
        </div>
        
        <div class="sheet-section sheet-regrets">
            <h4>未練</h4>
            <div id="regretListContainer" class="regret-list-container">
                <!-- ここに未練が描画される -->
            </div>
        </div>`:""};
        
        <div class="sheet-section sheet-skills">
            <h4>スキル</h4>
            ${s.skills.map(u=>{const h=Ft(u);if(!h)return`<div class="part-list-item">${u}</div>`;let f="スキル";if(h.id&&e){const p=h.id,v=p.substring(0,2),m=p.endsWith("-SP"),g=s.mainClass===s.subClass,_=Object.keys(t.positions).find(M=>t.positions[M].name===s.position),x=Object.keys(n).find(M=>n[M].name===s.mainClass),y=Object.keys(n).find(M=>n[M].name===s.subClass);m&&v===x?f="特化スキル":v===_?f="ポジション":v===x?f=g?"クラス":"メインクラス":v===y&&(f=g?"クラス":"サブクラス")}return`<div class="part-list-item"><span class="type">[${f}]</span> <b>【${u}】</b>《${h.timing}/${h.cost}/${h.range}》：${h.description||h.effect}</div>`}).join("")}
        </div>

        <div class="sheet-section sheet-parts">
            <h4>パーツ</h4>
            <div class="sheet-parts-grid">
                ${["head","arms","torso","legs","body"].map(u=>{if(!s.partsStatus[u]||s.partsStatus[u].length===0)return"";const h={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"体"}[u],f=s.partsStatus[u].map(p=>{let v,m;const g=s.treasures&&s.treasures.includes(p.name);if(g?(v=Uo()["TR-00"],m="たからもの"):(v=Ft(p.name),v?.id?.startsWith("BP-")?m="基本":m="強化"),!v)return`<div class="part-list-item"><span class="type">[${m||"不明"}]</span> <b>${p.name}</b></div>`;const _=g?v.description_raw:v.description_raw||v.effect,x=g?p.name:v.name;return`<div class="part-list-item"><span class="type">[${m}]</span> <b>【${x}】</b>《${v.timing}／${v.cost}／${v.range}》：${_}</div>`}).join("");return`<div><h4>〈${h}〉</h4>${f}</div>`}).join("")}
            </div>
        </div>
    </div>
    
    `;Et({title:"🪪 人形設計図",bodyHtml:d,onRender:(u,h)=>{u.querySelector(".modal-content").classList.add("sheet-modal-content"),u.querySelector(".modal-body").classList.add("sheet-modal-body");const f=()=>{ci(),h()};u.querySelector("#closeSimpleMenuModalBtn").onclick=f,u.onclick=y=>{y.target===u&&f()};const p=u.querySelector(".sheet-link-btn");p&&(p.onclick=y=>{y.stopPropagation();const M=p.dataset.sheetId;if(M){const E=`https://charasheet.vampire-blood.net/${M}`;window.open(E,"_blank","noopener,noreferrer")}}),u.querySelectorAll(".copy-description-btn").forEach(y=>{y.onclick=M=>{M.stopPropagation();const E=decodeURIComponent(y.dataset.copyText);navigator.clipboard.writeText(E).then(()=>{Qe("コピーしました！",1500)}).catch(A=>{console.error("コピーに失敗しました",A),Qe("コピーに失敗しました",1500)})}});const v=u.querySelector(".sheet-edit-image-btn");v&&(v.onclick=()=>{pc(s,h)});const m=u.querySelector("#areaSelector");m&&(m.onchange=y=>{const M=y.target.value;Gt(s.id,{area:M}),la(),Ko(),ci()});const g=u.querySelector(".sheet-reload-btn");g&&(g.onclick=async()=>{const y=g.dataset.sheetId;if(y&&confirm(`キャラクター「${s.name}」のデータを保管所から再読込みします。
パーツの損傷状態などはリセットされますが、よろしいですか？`))try{Qe(`ID: ${y} を再読込み中...`,2e3);const M=await Yf(y),E=ra(M);if(E){const A=ET(s.id,E);xn(),Qe(`「${A.name}」を更新しました。`,2e3),h(),oa(A)}else throw new Error("データの変換に失敗しました。")}catch(M){alert(`エラー: ${M.message}`)}});const _=u.querySelector("#displayNameInput");_&&(_.onchange=y=>{const M=y.target.value;M&&(Gt(s.id,{displayName:M}),np(s.id),Ko(),ci())});const x=u.querySelector("#regretListContainer");if(x){ua(s),x.innerHTML="";const y=s.regrets.filter(A=>A.isForTreasure),M=s.regrets.filter(A=>A.isChecked&&!A.isForTreasure),E=s.regrets.filter(A=>!A.isChecked);y.forEach(A=>{const P={...A,name:`たからものへの${A.regretName||"依存"}`};x.appendChild(ll(P,s))}),M.forEach(A=>{x.appendChild(ll(A,s))}),E.forEach(A=>{x.appendChild(ll(A,s))})}}})}function ll(s,e){const t=document.createElement("p");t.className="regret-list-item";const n=s.points||0,i="●".repeat(n)+"○".repeat(4-n),r=`regret_check_${e.id}_${Math.random().toString(36).substr(2,9)}`,o=s.isForTreasure||s.isUnset||ut().some(a=>a.type==="pc"&&(a.name===s.targetName||a.displayName===s.targetName));return t.innerHTML=`
        <input type="checkbox" id="${r}" ${s.isChecked?"checked":""} ${o?"disabled":""}>
        <label for="${r}">
            <span class="regret-name">${s.name}</span>
            <span class="regret-points">：${n}点 ${i}</span>
        </label>
    `,o||t.querySelector('input[type="checkbox"]').addEventListener("change",a=>{const l=e.regrets.find(c=>c.name===s.name);l&&(l.isChecked=a.target.checked),np(e.id)}),t}function YE(s){const e=document.getElementById("undeadListModal"),t=e.querySelector(".modal-body");t.innerHTML="";const n=document.createElement("div");n.className="import-container";const i=document.createElement("button");i.className="import-btn",i.textContent="保管所から読込み",i.onclick=()=>{e.classList.remove("is-visible"),ZE(s)},n.appendChild(i),t.appendChild(n);const r=document.createElement("div");r.className="undead-filter-container",["すべて",...["ドール","レギオン","ホラー","サヴァント"]].forEach(u=>{const h=document.createElement("button");h.className="filter-btn",h.textContent=u,h.dataset.category=u,u==="すべて"&&h.classList.add("active"),r.appendChild(h)}),t.appendChild(r);const l=document.createElement("div");l.className="undead-list-container",t.appendChild(l);const c=qs(),d=u=>{l.innerHTML="";for(const h in c){if(h.startsWith("//"))continue;const f=c[h];if(u==="すべて"||f.category===u){const p=document.createElement("div");p.className="undead-list-item",p.innerHTML=`<img src="${f.img}" alt="${f.name}"><div class="undead-list-item-name">${f.name}</div>`,p.onclick=()=>{yT(h,s),s==="pc"&&ut().forEach(v=>{v.type==="pc"&&ua(v)}),xn(),e.classList.remove("is-visible")},l.appendChild(p)}}};r.querySelectorAll(".filter-btn").forEach(u=>{u.onclick=()=>{r.querySelectorAll(".filter-btn").forEach(h=>h.classList.remove("active")),u.classList.add("active"),d(u.dataset.category)}}),d("すべて"),e.querySelector("#closeModalBtn").onclick=()=>e.classList.remove("is-visible"),e.onclick=u=>{u.target===e&&e.classList.remove("is-visible")},e.classList.add("is-visible")}function KE(s,e,t){const n=$s.indexOf(s.area);let i=1;if(e&&e.effects){const p=e.effects.find(v=>v.ref==="MOVE_CHARACTER");if(p&&p.params&&p.params.distance){const m=String(p.params.distance).split("-");i=parseInt(m[1]||m[0],10)}}let r=0;const o=[...s.skills.map(p=>Ft(p)),...Object.values(s.partsStatus).flat().filter(p=>!p.damaged).map(p=>Ft(p.name))].filter(p=>p);for(const p of o)if(p.timing==="オート"&&p.effects){for(const v of p.effects)if(v.ref==="APPLY_BUFF"&&v.params?.stat==="moveDistanceBonus"){const m=v.params.condition;if(m&&Array.isArray(m)){const g=e.tags||[];m.some(_=>g.includes(_))&&(r+=v.params.value||0)}else r+=v.params.value||0}}const a=i+r,l={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"},c=[],d=s.type==="enemy"&&s.area==="奈落"&&s.category!=="レギオン"&&s.category!=="ホラー",u={label:">>> 逃走 >>>",isDisabled:!d,onClick:()=>{d&&pn(s,{...e,name:"逃走",isEscapeAttempt:!0})}},h=s.type==="pc"&&s.area==="楽園"&&s.category!=="レギオン"&&s.category!=="ホラー",f={label:"<<< 逃走 <<<",isDisabled:!h,onClick:()=>{h&&pn(s,{...e,name:"逃走",isEscapeAttempt:!0})}};e.effects.some(p=>p.ref==="MOVE_CHARACTER")&&c.push(u),$s.forEach((p,v)=>{const g=Math.abs(n-v)>a||v===n,x={label:v===n?`${p} (現在地)`:p,isDisabled:g,onClick:()=>{g||pn(s,{...e,targetArea:p})}},y=l[p];y&&(x.class=`area-color-${y}`),c.push(x)}),e.effects.some(p=>p.ref==="MOVE_CHARACTER")&&c.push(f),Et({title:`【${e.name}】移動先を選択`,items:c})}function Xs(){const s=document.getElementById("maneuverMenu");s&&s.classList.remove("is-visible"),$o=null}function Wc(s){const e=At(),t=[],n=new Set;(s.skills||[]).forEach(p=>{const v=Ft(p);v&&(t.push({data:v,sourceType:"skill",sourceName:p}),n.add(p))}),Object.values(s.partsStatus||{}).flat().forEach(p=>{if(n.has(p.name))return;let v;s.treasures&&s.treasures.includes(p.name)?(v=JSON.parse(JSON.stringify(Uo()["TR-00"])),v&&(v.name=p.name)):v=Ft(p.name),v&&(t.push({data:v,sourceType:"part",sourceName:p.name,isDamaged:p.damaged}),n.add(p.name))});const i=Uo();for(const p in i)if(p.startsWith("CA-")){const v=i[p];t.push({data:v,sourceType:"common"})}let r=[...t];if(s.type==="enemy"){const p=new Set(["行動判定","対話判定","狂気判定"]);if(r=r.filter(v=>!p.has(v.data.name)),s.category==="レギオン"||s.category==="ホラー"){const v=new Set(["逃走判定","切断判定"]);r=r.filter(m=>!v.has(m.data.name))}}const o=Object.values(s.partsStatus).flat().some(p=>p.damaged),a=new Set,{phase:l,activeActors:c=[],actionQueue:d=[],rapidQueue:u=[],damageQueue:h=[]}=e;c.some(p=>p.id===s.id)&&(a.add("アクション"),a.add("ラピッド")),c.length===0&&a.add("ラピッド");const f=[...d,...u,...h.filter(p=>p.type==="declaration")];return f.some(p=>!p.checked)&&a.add("ジャッジ"),(l==="DAMAGE_RESOLUTION"||d.every(p=>p.checked)&&h.some(p=>!p.applied))&&a.add("ダメージ"),f.some(p=>!p.checked&&p.performer&&p.performer.id===s.id)&&(a.add("ラピッド"),a.add("ジャッジ")),r.map(p=>{const v=p.data;let m=!0;if(s.actionValue<=0&&v.timing!=="オート"&&(m=!1),p.isDamaged&&(m=!1),s.usedManeuvers.has(v.name)&&v.usageLimit!==!1&&(m=!1),v.timing!=="オート"&&!a.has(v.timing)&&(v.timing,m=!1),m&&v.effects?.some(g=>g.params?.condition==="is_damaged")&&!o&&(m=!1),m&&v.timing==="ジャッジ"&&Kf(s,v).length===0&&(m=!1),m&&v.timing==="ダメージ"){let g=!1;v.tags?.includes("防御")&&(v.range==="自身"?e.damageQueue.some(M=>M.type==="instance"&&!M.applied&&M.target.id===s.id)&&(g=!0):e.damageQueue.some(M=>M.type==="instance"&&!M.applied&&M.target.type===s.type&&Mi(s,v,[M.target]).hasTarget)&&(g=!0));const x=v.tags.includes("強化");!g&&x&&v.range==="自身"&&e.damageQueue.some(M=>M.type==="instance"&&!M.applied&&M.sourceAction?.performer?.id===s.id)&&(g=!0);const y=v.effects?.some(M=>M.ref==="TAKE_DAMAGE_FOR_ALLY");if(!g&&y){const M=ut().filter(A=>A.type===s.type&&A.id!==s.id),{targets:E}=Mi(s,v,M);if(E.length>0){const A=new Set(E.map(T=>T.id));e.damageQueue.some(T=>T.type==="instance"&&!T.applied&&A.has(T.target.id))&&(g=!0)}}g||(m=!1)}if(m&&v.tags&&v.tags.includes("移動妨害")){let g=!1;const _=[...e.actionQueue,...e.rapidQueue];for(const x of _)if(!x.checked&&x.performer.type!==s.type&&x.sourceManeuver.tags.includes("移動")&&Mi(s,v,[x.performer]).hasTarget){g=!0;break}g||(m=!1)}return m&&v.timing!=="オート"&&v.timing!=="ジャッジ"&&(Mi(s,v).hasTarget||(m=!1)),v.timing==="オート"&&(m=!1),{...p,isUsable:m}})}function jf(s,e){if(!e?.id&&s.allowedLocations)return s.allowedLocations;if(e?.partsStatus){const t={head:"頭",arms:"腕",torso:"胴",legs:"脚"};for(const n in e.partsStatus)if(e.partsStatus[n].some(i=>i.name===s.name))return t[n]||""}return""}function ZE(s,e){Et({title:"保管所からキャラクターを読込み",bodyHtml:`
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
    `,onRender:(n,i)=>{const r=n.querySelector("#import-by-list-content"),o=n.querySelector("#import-by-id-content"),a=n.querySelector(".sheet-list-container"),l=n.querySelector(".loader"),c=n.querySelector("#sheetIdInput"),d=n.querySelector("#importSheetBtn"),u=async f=>{try{i(),Qe(`ID: ${f} を読込み中...`,2e3);const p=await Yf(f),v=ra(p);if(v)v.sheetId=f,Kc(v,s).type==="pc"&&ut().forEach(g=>{g.type==="pc"&&ua(g)}),xn(),Qe(`「${v.name}」を読み込みました。`,2e3);else throw new Error("データの変換に失敗しました。")}catch(p){alert(`エラー: ${p.message}`)}},h=f=>{l.style.display="block",a.innerHTML="",l.textContent=`${f==="id"?"ID":"新着"}リストを読み込み中...`,JE(f).then(p=>{l.style.display="none";const v=`
                        <table class="sheet-list-table">
                            <thead>
                                <tr><th>ID</th><th>タイトル / PC名</th><th>ポジション</th><th>クラス</th></tr>
                            </thead>
                            <tbody>
                                ${p.map(m=>{const g=m.title||"(タイトルなし)",_=m.Name?`<br><span class="pc-name-in-list">${m.Name}</span>`:"";return`
                                        <tr data-id="${m.id}">
                                            <td>${m.id}</td>
                                            <td>${g}${_}</td>
                                            <td>${m.Race}</td>
                                            <td>${m.Class}</td>
                                        </tr>
                                    `}).join("")}
                            </tbody>
                        </table>`;a.innerHTML=v,n.querySelectorAll(".sheet-list-table tbody tr").forEach(m=>{m.onclick=()=>u(m.dataset.id)})}).catch(p=>{l.textContent=`リストの読み込みに失敗しました: ${p.message}`})};n.querySelectorAll('input[name="import-method"]').forEach(f=>{f.onchange=p=>{const v=p.target.value;v==="new"?(r.style.display="block",o.style.display="none",h("%21")):v==="idlist"?(r.style.display="block",o.style.display="none",h("id")):(r.style.display="none",o.style.display="block",c.focus())}}),d.onclick=()=>{const f=c.value.trim().match(/(\d+)/)?.[1];f&&u(f)},c.onkeydown=f=>{if(f.key==="Enter"){const p=c.value.trim().match(/(\d+)/)?.[1];p&&u(p)}},h("%21")}})}async function JE(s="%21"){const t=[],n=document.querySelector("#import-by-list-content .loader"),i=r=>new Promise((o,a)=>{const l=`jsonpCallback_list_${Date.now()}_${r}`;window[l]=d=>{document.head.removeChild(c),delete window[l],o(d)};const c=document.createElement("script");c.onerror=()=>{delete window[l],document.head.removeChild(c),a(new Error(`Page ${r}の読込みに失敗`))},c.src=`https://charasheet.vampire-blood.net/list_nechro.js?order=${s}&page=${r}&callback=${l}`,c.charset="UTF-8",document.head.appendChild(c)});for(let r=0;r<6;r++)try{n&&(n.textContent=`リストを読み込み中... (${r+1} / 6ページ)`);const o=await i(r);t.push(...o),await new Promise(a=>setTimeout(a,200))}catch(o){throw console.error(`ページ ${r} の取得に失敗しました。処理を中断します。`,o),new Error(`ページ ${r} の取得中にエラーが発生しました。`)}return t}function Yf(s){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=r=>{document.head.removeChild(i),delete window[n],e(r)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${s}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}function pc(s,e){const t=()=>{const v=localStorage.getItem("userLocalImages");return v?JSON.parse(v):[]},n=v=>{const m=t();m.includes(v)||(m.push(v),localStorage.setItem("userLocalImages",JSON.stringify(m)))},i=async(v,m,g)=>{const _=v.target.files[0];if(_&&_.type.startsWith("image/"))try{const x=await r(_,300);n(x),g(),pc(s,e)}catch(x){console.error("画像のリサイズに失敗しました:",x),alert("画像の処理に失敗しました。別の画像で試してください。")}v.target.value=""};function r(v,m){return new Promise((g,_)=>{const x=new FileReader;x.readAsDataURL(v),x.onload=y=>{const M=new Image;M.src=y.target.result,M.onload=()=>{let E=M.width,A=M.height;if(E<=m&&A<=m){g(M.src);return}E>A?E>m&&(A*=m/E,E=m):A>m&&(E*=m/A,A=m);const P=document.createElement("canvas");P.width=E,P.height=A,P.getContext("2d").drawImage(M,0,0,E,A);let S;v.type==="image/png"||v.type==="image/gif"?S=P.toDataURL("image/png"):S=P.toDataURL("image/jpeg",.8),g(S)},M.onerror=E=>_(E)},x.onerror=y=>_(y)})}const o=["/images/doll/doll_01.png","/images/doll/doll_02.png","/images/doll/doll_03.png","/images/doll/doll_04.png","/images/doll/doll_05.png","/images/doll/doll_06.png","/images/doll/doll_12.png","/images/doll/doll_13.png","/images/doll/doll_14.png","/images/doll/doll_15.png","/images/doll/doll_16.png","/images/doll/doll_17.png"],a=Ap(),l=t(),c=[...new Set([...o,...a])],u=[...l,...c].map(v=>`<div class="image-select-item" data-path="${v}"><img src="${v}" alt="image" loading="lazy"></div>`).join(""),p=`
        <div class="local-image-upload-container">
            <div class="button-group">
                <button id="localImageUploader" class="local-image-upload-btn">ローカルから読込み</button>
                <button id="clearImageCacheBtn" class="local-image-clear-btn">画像キャッシュ消去</button>
            </div>
            <input type="file" id="localImageInput" accept="image/*" style="display: none;">
            <p class="image-upload-note">画像は、300×300px にリサイズされてキャッシュします。</p>
            <p class="image-upload-note">画像キャッシュ使用量: ${(OE()/1024).toFixed(1)} KB / 5.0 MB</p>
        </div>
        <div class="image-select-grid">${u}</div>
    `;Et({title:"画像を選択",bodyHtml:p,onRender:(v,m)=>{const g=v.querySelector("#localImageUploader"),_=v.querySelector("#localImageInput");g.onclick=()=>_.click(),_.onchange=y=>i(y,v,m);const x=v.querySelector("#clearImageCacheBtn");x&&(x.onclick=()=>{confirm("ローカルに保存した画像をすべて消去します。よろしいですか？")&&(kE(),Qe("画像キャッシュを消去しました。",2e3),m(),pc(s,e))}),v.querySelectorAll(".image-select-item").forEach(y=>{y.onclick=()=>{const M=y.dataset.path;Gt(s.id,{img:M}),la(),m(),e();const E=ct(s.id);E&&oa(E)}})}})}function Kf(s,e){const t=At(),n=[...t.actionQueue,...t.rapidQueue];if(e.range==="自身")return n.filter(i=>{if(i.checked||!i.sourceManeuver.tags?.includes("攻撃")||i.performer.id!==s.id)return!1;const o=e.tags?.includes("支援"),a=e.tags?.includes("妨害"),l=!0;return o&&l||a&&!l});{const i=$s.indexOf(s.area),{minRange:r,maxRange:o}=Xf(s,e);return isNaN(r)?[]:n.filter(a=>{if(a.checked||!a.sourceManeuver.tags?.includes("攻撃"))return!1;const l=a.performer,c=$s.indexOf(l.area);if(c===-1)return!1;const d=Math.abs(i-c);if(d<r||d>o)return!1;const u=e.tags?.includes("支援"),h=e.tags?.includes("妨害"),f=s.type===l.type;return u&&f||h&&!f})}}function Mi(s,e,t=null){const n=e.range;if(!n||["自身","効果参照","なし","すべて"].includes(n)||e.timing==="オート")return{hasTarget:!0,targets:[]};const{minRange:i,maxRange:r}=Xf(s,e);if(isNaN(i))return{hasTarget:!0,targets:[]};const o=t||ut().filter(c=>!c.isDestroyed&&!c.hasWithdrawn),a=$s.indexOf(s.area),l=[];for(const c of o){if(i===0&&r===0&&c.id===s.id)continue;const d=e.tags&&e.tags.includes("攻撃"),u=e.category==="支援"||e.tags&&e.tags.includes("支援");if(s.type===c.type&&d&&!u)continue;const h=$s.indexOf(c.area);if(h===-1)continue;const f=Math.abs(a-h);f>=i&&f<=r&&l.push(c)}return{hasTarget:l.length>0,targets:l}}function QE(s,e,t){const a=(s.type==="pc"?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(l=>({label:l+(s.area===l?" (現在地)":""),isDisabled:s.area===l,onClick:()=>{Gt(s.id,{area:l}),xn()}}));Et({title:`${s.name} の配置先を選択`,items:a})}async function ih(s,e,t){return Xo(),new Promise(n=>{const i=a=>{document.querySelectorAll(".target-selectable").forEach(l=>{l.classList.remove("target-selectable"),l.onclick=null}),document.removeEventListener("click",t),Yi=null,n(a)};Yi=i;const{targets:r}=Mi(s,e);if(r.length===0){Re("> 射程内に有効なターゲットがいません"),Xo();return}r.length>0&&Aw(r);const o=new Set(r.map(a=>a.id));document.querySelectorAll(".char, .marker").forEach(a=>{o.has(a.dataset.id)&&(a.classList.add("target-selectable"),a.onclick=l=>{l.stopPropagation(),i(ct(a.dataset.id))})}),setTimeout(()=>document.addEventListener("click",t),0)})}function ew(s,e,t,n,i){const r=At(),o=r.actionQueue[n];if(!o)return;let a=0;const l=[],c=[],d=[],u=t.effects?.find(m=>m.ref==="GENERIC_ATTACK");if(u&&u.params&&u.params.attack_bonus){const m=parseInt(u.params.attack_bonus,10);isNaN(m)||(a+=m,l.push(`<div>【${t.name}】自身の効果 (${m>0?"+":""}${m})</div>`))}Wc(s).forEach(m=>{if(qf(m,s)){const g=m.data;g.effects&&g.effects.forEach(_=>{if(_.ref==="APPLY_BUFF"&&_.params.stat==="attackCheckBonus"){const x=_.params.value||0;a+=x,c.push(`<div>${s.name}の【${g.name}】(${x>0?"+":""}${x})</div>`)}})}}),s.activeBuffs&&s.activeBuffs.length>0&&s.activeBuffs.forEach(m=>{if(m.stat==="attackCheckBonus"){const g=m.value||0;a+=g,c.push(`<div>${s.name}の【${m.source}】 (+${g})</div>`)}}),r.judgeQueue.forEach(m=>{const g=m.sourceManeuver,_=g.effects.find(x=>x.ref==="GENERIC_JUDGE_MOD"||x.ref==="CHOICE_JUDGE_MOD");if(_){if(m.judgeTarget?.id!==o.id)return;let x=!1,y=0,M="";if(_.ref==="GENERIC_JUDGE_MOD")y=_.params.value||0,y>0&&(M="support"),y<0&&(M="hindrance");else if(_.ref==="CHOICE_JUDGE_MOD")if(m.performer.type===s.type){M="support";const A=_.params.options.find(P=>P.type==="支援");A&&(y=A.value)}else{M="hindrance";const A=_.params.options.find(P=>P.type==="妨害");A&&(y=A.value)}if((m.judgeTarget&&m.judgeTarget.id===o.id||M==="support"&&(_.params.target==="self_roll"||_.params.target==="any_roll")&&m.performer.id===s.id)&&(x=!0),x){const E=`${m.performer.name}の【${g.name}】`;M==="support"?(a+=Math.abs(y),c.push(`${E} (+${Math.abs(y)})`)):M==="hindrance"&&(a-=Math.abs(y),d.push(`${E} (-${Math.abs(y)})`))}}});const f=a>0?`+${a}`:a<0?`${a}`:"",p=`
        <div class="attack-confirm-summary">
            ${s.name}【${t.name}】→ ${e.name}
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《固有修正》</div>
            <div class="modifier-list">${l.length>0?l.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《支援》</div>
            <div class="modifier-list">${c.length>0?c.map(m=>`<div class="modifier-item">${m}</div>`).join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《妨害》</div>
            <div class="modifier-list">${d.length>0?d.map(m=>`<div class="modifier-item">${m}</div>`).join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `,v=`<button id="executeDiceRollBtn" class="welcome-modal-close-btn">🎲 NA${f} 🎲</button>`;Et({title:"攻撃判定",bodyHtml:p,footerHtml:v,onRender:(m,g)=>{m.querySelector("#executeDiceRollBtn").onclick=()=>{Re(`> 解決: ${s.name} の【${t.name}】`),i&&i(a),g()}}})}function tw(){const s=document.getElementById("relationshipModal"),e=document.getElementById("relationshipChartContainer"),t=document.getElementById("closeRelationshipModalBtn");if(!s||!e||!t)return;const n=()=>{e.innerHTML="";const a=ut().filter(y=>y.type==="pc"&&!y.isDestroyed&&!y.hasWithdrawn),l=a.length;if(l<2){r();return}const c=e.offsetWidth,d=e.offsetHeight,u=document.createElement("div");u.className="doll-node",u.style.visibility="hidden",e.appendChild(u);const f=u.getBoundingClientRect().width;e.removeChild(u);const p=(c-f)/2,v=(d-f)/2,m=c/2,g=d/2,_=[],x=Math.PI/3/l;a.forEach((y,M)=>{const E=M/l*2*Math.PI-Math.PI/2+x,A=m+p*Math.cos(E),P=g+v*Math.sin(E);_.push({x:A,y:P});const T=document.createElement("div");T.className="doll-node",T.style.left=`${A}px`,T.style.top=`${P}px`;const S=E*(180/Math.PI);T.style.setProperty("--angle",`${S}deg`),T.innerHTML=`
                <img src="${y.img}" alt="${y.name}">
                <div class="name-label">${y.name}</div>
            `,e.appendChild(T)});for(let y=0;y<l;y++){for(let M=y+1;M<l;M++){const E=a[y],A=a[M],P=_[y],T=_[M],S=T.x-P.x,R=T.y-P.y,O=Math.sqrt(S*S+R*R);let k=Math.atan2(R,S)*(180/Math.PI);const F=document.createElement("div");F.className="relationship-line",F.style.width=`${O}px`,F.style.left=`${P.x}px`,F.style.top=`${P.y}px`,F.style.transform=`rotate(${k}deg)`,e.appendChild(F);const N=E.regrets.find(Q=>(Q.targetName===A.name||Q.targetName===A.displayName)&&!Q.isForTreasure),X=A.regrets.find(Q=>(Q.targetName===E.name||Q.targetName===E.displayName)&&!Q.isForTreasure),z=N?N.regretName:null,q=X?X.regretName:null;if(z&&q){const Q=$E([z,q]),oe=P.x+S/2,te=P.y+R/2,De=document.createElement("div");De.className="relationship-label",De.textContent=Q,De.style.setProperty("--x",`${oe}px`),De.style.setProperty("--y",`${te}px`),k>90?k-=180:k<-90&&(k+=180),De.style.setProperty("--angle",`${k}deg`),e.appendChild(De)}}for(let M=0;M<l;M++){if(y===M)continue;const E=a[y],A=a[M],P=_[y],T=_[M],S=T.x-P.x,R=T.y-P.y,O=Math.sqrt(S*S+R*R),L=80,k=S/O,F=R/O,N=P.x+k*L,X=P.y+F*L,z=document.createElement("div");z.className="regret-textbox",z.style.left=`${N}px`,z.style.top=`${X}px`;const q=E.regrets.find(oe=>(oe.targetName===A.name||oe.targetName===A.displayName)&&!oe.isForTreasure);let Q=null;if(q&&(Q=Object.values(_c()).find(te=>q.name.includes(te.name))),Q){const oe=q.points>=4;z.title=`発狂：${Q.madnessName}
効果：${Q.madnessEffect}`,oe?(z.classList.add("is-madness"),z.textContent=Q.madnessName):(z.textContent=Q.name,Q.color&&(z.style.color=Q.color))}else z.textContent="未設定",z.classList.add("is-unset");e.appendChild(z),z.addEventListener("click",oe=>{oe.stopPropagation();const te=[{label:"未練変更",onClick:()=>{zt({command:"NM",showToast:!0,callback:(De,et,He,Y)=>{Y&&(TT(E.id,A.displayName,Y),n())}})}},{label:"発狂切替",onClick:()=>{q?(q.points=q.points>=4?0:4,n()):Qe("未設定の未練は発狂状態を変更できません。",2e3)}}];Et({title:`${E.name} -> ${A.name}`,items:te})})}}},i=()=>{clearTimeout(th),th=setTimeout(()=>{s.classList.contains("is-visible")&&n()},250)},r=()=>{s.classList.remove("is-visible"),window.removeEventListener("resize",i)};if(ut().filter(a=>a.type==="pc"&&!a.isDestroyed&&!a.hasWithdrawn).length<2){Qe("関係性を表示するには姉妹が2人以上必要です。",2e3);return}n(),t.onclick=r,s.onclick=a=>{a.target===s&&r()},window.addEventListener("resize",i),s.classList.add("is-visible")}const nw="2.4.2",Ki=[{id:"maneuver",label:"マニューバ"},{id:"hint",label:"暗示"},{id:"treasure",label:"たからもの"},{id:"regret",label:"未練"},{id:"memory_base",label:"記憶のカケラ"},{id:"memory_alpha",label:"記憶のカケラ α"},{id:"memory_beta",label:"記憶のカケラ β"},{id:"posthumous_history",label:"死後経歴"},{id:"awakening_location",label:"目覚めの場所"}];let li=0,ii={},qo=0,jo=0,nn=null,Zf=0,mc=!1,Yo=!1;function iw(){li=0;const s=document.getElementById("maneuverMenu");s.innerHTML="",s.classList.add("is-reference-mode");const e=sw(),t=rw(),n=document.createElement("div");n.className="reference-content-area",nn=document.createElement("div"),nn.className="reference-swipe-wrapper",Ki.forEach(i=>{const r=document.createElement("div");r.className="reference-content-page",r.dataset.tabId=i.id,nn.appendChild(r)}),n.appendChild(nn),s.appendChild(e),s.appendChild(t),s.appendChild(n),Qf(Ki[li].id,nn.children[li]),s.classList.add("is-visible"),n.addEventListener("touchstart",lw,{passive:!0}),n.addEventListener("touchmove",cw,{passive:!1}),n.addEventListener("touchend",uw)}function sw(){const s=document.createElement("div");return s.className="maneuver-menu-header",s.innerHTML=`
        <span class="header-icon">📖</span>
        <span class="header-title">Nechronica - リファレンス</span>
        <button class="header-close-btn">&times;</button>
    `,s.querySelector(".header-close-btn").onclick=()=>{Xs()},s}function rw(){const s=document.createElement("div");return s.className="reference-tab-bar",Ki.forEach((e,t)=>{const n=document.createElement("button");n.className="reference-tab-button",n.dataset.tabId=e.id,n.textContent=e.label,t===li&&n.classList.add("is-active"),n.onclick=()=>{Jf(t)},s.appendChild(n)}),s}function Jf(s){if(s<0||s>=Ki.length)return;li=s;const e=document.querySelector(".reference-tab-bar");if(e){e.querySelectorAll(".reference-tab-button").forEach((n,i)=>{n.classList.toggle("is-active",i===s)});const t=e.querySelector(".is-active");t&&t.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})}if(nn){const t=nn.children[s];t&&t.innerHTML===""&&Qf(Ki[s].id,t);const n=-s*(100/Ki.length);nn.style.transform=`translateX(${n}%)`}}function Qf(s,e){const t={regret:"regret",treasure:"treasure",memory_base:"memory_base",memory_alpha:"memory_alpha",memory_beta:"memory_beta",posthumous_history:"posthumous_history",awakening_location:"awakening_location",hint:"hint"};s==="maneuver"?ow(e):t[s]&&aw(t[s],e)}function ow(s){const e=document.createElement("div");e.className="reference-maneuver-tab-container",s.appendChild(e);const t=document.createElement("div");t.className="accordion-container";const n=document.createElement("div");n.className="accordion-header",n.innerHTML='<span class="accordion-title-static">フィルタ</span><span class="accordion-title-dynamic"></span>',n.onclick=()=>t.classList.toggle("is-closed");const i=document.createElement("div");i.className="reference-filter-container accordion-content",t.appendChild(n),t.appendChild(i);const r=document.createElement("div");r.className="maneuver-menu-list-container",e.appendChild(t),e.appendChild(r);const o=()=>{const a=Uo();let l=Object.keys(a).map(u=>({data:{id:u,...a[u]},isUsable:!0})).filter(u=>u.data&&u.data.name),c=hw(l,ii);const d=n.querySelector(".accordion-title-dynamic");if(d){let u=`（${c.length}件）`;Object.keys(ii).forEach(h=>{const f=ii[h];f.length>0&&(u+=`<span class="filter-summary-group"><span class="filter-summary-label">${h}</span>${f.join(", ")}</span>`)}),d.innerHTML=u}r.innerHTML="",c.length===0?r.innerHTML='<div class="maneuver-item is-empty">条件に一致するマニューバはありません</div>':ep(c).forEach(u=>{const h=fc(u,{});r.appendChild(h)})};dw(i,o),o()}function aw(s,e){const t=document.createElement("div");if(t.className="maneuver-menu-list-container",s==="regret"){const n=_c(),i={SI:{title:"姉妹への未練",items:[]},EN:{title:"敵への未練",items:[]},NP:{title:"中立者への未練",items:[]}};for(const r in n){if(r.startsWith("//"))continue;const o=r.substring(0,2);i[o]&&i[o].items.push({id:r,...n[r]})}for(const r in i){const o=i[r];if(o.items.length>0){const a=document.createElement("div");a.className="group-header",a.textContent=o.title,e.appendChild(a),o.items.forEach(l=>{const c=sh(l,s);e.appendChild(c)})}}}else{let n=[];switch(s){case"treasure":const r=yc();n=Object.keys(r).map(h=>({id:h,...r[h]}));break;case"memory_base":const o=Zo();n=Object.keys(o).map(h=>({id:h,...o[h]}));break;case"memory_alpha":const a=bh();n=Object.keys(a).map(h=>({id:h,...a[h]}));break;case"memory_beta":const l=Eh();n=Object.keys(l).map(h=>({id:h,...l[h]}));break;case"posthumous_history":const c=Th();n=Object.keys(c).map(h=>({id:h,...c[h]}));break;case"awakening_location":const d=wh();n=Object.keys(d).map(h=>({id:h,...d[h]}));break;case"hint":const u=xc();n=Object.keys(u).map(h=>({id:h,...u[h]}));break}n.sort((r,o)=>{const a=d=>d==="0"?10:d==="00"?100:parseInt(d,10),l=a(r.id),c=a(o.id);return l-c});const i={};n.forEach(r=>{const o=sh(r,s,i);t.appendChild(o)}),e.appendChild(t)}}function sh(s,e,t={}){const n=document.createElement("div");if(n.className="maneuver-item-new is-reference-item",e==="regret"){const i=s.id.split("-")[1],r=`【${s.name}】`,o=s.description,a=s.madnessName,l=s.madnessQuote,c=s.madnessEffect,d=s.source,u=d?`${d.book} p${d.page}`:"",h=`${i} ${r}
${o}
発狂：${a}
「${l}」
${c}`.trim();n.innerHTML=`
            <div class="item-right-col" style="width: 100%;">
                <div class="ref-container-top">
                    <div class="ref-source-info">${u}</div>
                    <div class="ref-maneuver-name">${i}${r}<div class="ref-regret-madness">発狂<span class="malice-level">${a}</span></div></div>
                </div>
                <div class="item-row-2">${o}</div>
                <div class="item-row-3 ref-regret-flavor">「${l}」</div>
                <div class="item-row-2 has-copy-button">
                    <span>${c}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(h)}">📋</button>
                </div>
            </div>
        `}else{let i="",r="",o="";r=`【${s.name}】`,o=s.description,["posthumous_history","memory_alpha","memory_beta"].includes(e)?i=String(s.id).padStart(2,"0"):i=String(s.id);const l=`${i}${r}
${o}`.trim(),c=s.source,d=c?`${c.book} p${c.page}`:"";n.innerHTML=`
            <div class="item-right-col" style="width: 100%;">
                <div class="ref-container-top">
                    <div class="ref-source-info">${d}</div>
                    <span class="item-name">${i}${r}</span>
                </div>
                <div class="item-row-2 has-copy-button">
                    <span>${o}</span>
                    <button class="copy-description-btn" data-copy-text="${encodeURIComponent(l)}">📋</button>
                </div>
            </div>
        `}return n.querySelector(".copy-description-btn").onclick=i=>{i.stopPropagation(),navigator.clipboard.writeText(decodeURIComponent(i.currentTarget.dataset.copyText)).then(()=>{Qe("コピーしました！",1500)})},n}function lw(s){s.touches.length===1&&(qo=s.touches[0].clientX,Zf=s.touches[0].clientY,jo=qo,mc=!1,Yo=!1,nn&&nn.classList.add("is-swiping"))}function cw(s){if(s.touches.length!==1)return;jo=s.touches[0].clientX;const e=jo-qo,t=s.touches[0].clientY-Zf;if(mc||(Math.abs(e)>10||Math.abs(t)>10)&&(Math.abs(e)>Math.abs(t)&&(Yo=!0),mc=!0),Yo){s.preventDefault();const n=nn.parentElement.clientWidth,r=-li*n+e;nn.style.transform=`translateX(${r}px)`}}function uw(s){if(nn&&nn.classList.remove("is-swiping"),!Yo)return;const e=jo-qo,t=30;let n=li;Math.abs(e)>t&&(e<0?li<Ki.length-1&&n++:li>0&&n--),Jf(n)}const cl={カテゴリ:["移動","配置","攻撃","支援","妨害","強化","防御","脆弱","補助","難易度変更","移動妨害","無効化","コスト","修復","対話","狂気点","行動値","生贄","増援","一般"],区分1:["ポジション","クラススキル","特化スキル","基本パーツ","強化パーツ","手駒専用"],区分2:["アリス","ホリック","オートマトン","ジャンク","コート","ソロリティ","ステーシー","タナトス","ゴシック","レクイエム","バロック","ロマネスク","サイケデリック","武装","変異","改造"],攻撃:["肉弾攻撃","白兵攻撃","射撃攻撃","砲撃攻撃","精神攻撃"],効果:["攻撃判定修正","支援","妨害","防御","強化","移動","移動妨害","転倒","切断","爆発","全体攻撃","連撃"],無効化:["妨害無効","防御無効","移動無効","移動妨害無効","転倒無効","切断無効","爆発無効","全体攻撃無効","連撃無効","損傷無効","大失敗無効"],悪意:["0.5","1","1.5","2","3","4","その他"],箇所:["頭","腕","胴","脚","任意"],タイミング:["オート","アクション","ジャッジ","ダメージ","ラピッド"],コスト:["なし","0","1","2","3","4","その他"],最大射程:["なし","自身","0","1","2","3","その他"],ルールブック:["基本ルール","歪曲の舞踏"]};function dw(s,e){Object.keys(ii).length===0&&Object.keys(cl).forEach(t=>{ii[t]=[]});for(const t in cl){const n=document.createElement("div");n.className="filter-group",n.innerHTML=`<h4 class="filter-group-title">${t}</h4>`;const i=document.createElement("div");i.className="filter-buttons",cl[t].forEach(r=>{const o=document.createElement("button");o.className="filter-btn",o.textContent=r,ii[t]?.includes(r)&&o.classList.add("is-active"),o.onclick=()=>{o.classList.toggle("is-active");const a=ii[t].indexOf(r);a>-1?ii[t].splice(a,1):ii[t].push(r),e()},i.appendChild(o)}),n.appendChild(i),s.appendChild(n)}}function hw(s,e){const t=Or(),n=t.positions,i=t.classes;return s.filter(r=>{const o=r.data;for(const a in e){const l=e[a];if(l.length===0)continue;if(!l.some(d=>fw(o,a,d,{positions:n,classes:i})))return!1}return!0})}function fw(s,e,t,n){const i=s.id||"",r=i.substring(0,2),o=i.substring(0,1),a=c=>{const d=i.substring(1,2);return o===c&&["1","2","3"].includes(d)},l=()=>{const c=i.substring(1,2);return o==="P"&&!isNaN(parseInt(c,10))};switch(e){case"カテゴリ":return s.category===t||s.tags&&s.tags.includes(t);case"区分1":switch(t){case"ポジション":return!!n.positions[r];case"クラススキル":return!!n.classes[r]&&!i.endsWith("-SP");case"特化スキル":return!!n.classes[r]&&i.endsWith("-SP");case"基本パーツ":return r==="BP";case"強化パーツ":return a("A")||a("M")||a("R");case"手駒専用":return r==="PS"||l();default:return!1}case"区分2":{const c=Object.keys(n.positions).find(u=>n.positions[u].name===t);if(c&&r===c)return!0;const d=Object.keys(n.classes).find(u=>n.classes[u].name===t);return d&&r===d?!0:t==="武装"?a("A"):t==="変異"?a("M"):t==="改造"?a("R"):!1}case"攻撃":return s.category===t||s.tags&&s.tags.includes(t);case"効果":return s.category===t||s.tags&&s.tags.includes(t);case"無効化":return s.tags&&s.tags.includes(t);case"箇所":return s.allowedLocations===t;case"タイミング":return s.timing===t;case"コスト":{const c=String(s.cost);return t==="その他"?!["なし","0","1","2","3","4"].includes(c):c===t}case"最大射程":{const c=String(s.range||"なし");if(t==="なし")return c==="なし";if(t==="自身")return c==="自身";const d=parseInt(c.split("～").pop(),10);return t==="その他"?!["なし","自身"].includes(c)&&(isNaN(d)||d>3):!isNaN(d)&&d===parseInt(t,10)}case"悪意":{const c=s.maliceLevel;return c==null?!1:t==="その他"?![.5,1,1.5,2,3,4].includes(c):String(c)===t}case"ルールブック":{const c=s.source?.book||"";return t==="基本ルール"?c==="基本ルールブック":t==="歪曲の舞踏"?c==="歪曲の舞踏":!1}default:return!1}}function rh(s){const e=s.id||"",t=e.substring(0,2),n=e.substring(0,1),r=["AL","HL","AM","JK","CT","SR"].indexOf(t);if(r!==-1)return 1e3+r;const a=["ST","TN","GT","RQ","BR","RM","SY"].indexOf(t);if(a!==-1)return 2e3+a*10+(e.endsWith("-SP")?0:1);if(t==="BP")return 3e3+({頭:0,腕:1,胴:2,脚:3}[s.allowedLocations]??4);const l=parseInt(e.substring(1,2),10);if(!isNaN(l)){if(n==="A")return 4e3+l;if(n==="M")return 5e3+l;if(n==="R")return 6e3+l}if(t==="PS")return 7e3;if(n==="P"){const c=parseInt(e.substring(1,2),10);if(!isNaN(c))return 8e3+c}return t==="TR"?9e3:t==="CA"?9100:9999}function ep(s){const e=Or().maneuverCategories.map(t=>t.name);return s.sort((t,n)=>{const i=t.data,r=n.data,o=i.category==="行動値増加"?"行動値":i.category,a=r.category==="行動値増加"?"行動値":r.category,l=e.indexOf(o),c=e.indexOf(a);if(l!==c)return(l===-1?99:l)-(c===-1?99:c);const d=rh(i),u=rh(r);return d!==u?d-u:(i.id||"").localeCompare(r.id||"")}),s}const pw="2.15.36";let Ts=!1,mn=null;function mw(){console.log("Interaction Manager initialized.")}function gw(){document.addEventListener("click",l=>{mn&&!mn.contains(l.target)&&(mn.classList.remove("actions-visible"),mn=null)});const s=document.querySelector(".right-column");s&&s.addEventListener("click",l=>{const c=l.target.closest(".action-queue-item");if(c&&!c.classList.contains("is-disabled")){const d=c.dataset.action,u=parseInt(c.dataset.index,10);if(d==="resolve-action"){const f=At().actionQueue[u];if(!f)return;Re(`> 解決：[${f.timing}] ${f.performer.name}【${f.sourceManeuver.name}】`);const{performer:p,target:v,sourceManeuver:m}=f;m.tags.includes("攻撃")?ew(p,v,m,u,g=>{zt({command:`NA${g>0?`+${g}`:g}`,showToast:!0,performer:p,callback:(_,x,y,M)=>{Co({type:"resolve-action",index:u,diceResult:{result:_,hitLocation:x,resultText:y,rollValue:M}})}})}):Co({type:"resolve-action",index:u})}else if(d==="resolve-damage"){const f=At().damageQueue[u];if(!f)return;if(f.type==="instance"?Re(`> 解決：[ダメージ] ${f.target.name}`):f.type==="declaration"&&Re(`> 解決：[ダメージ] ${f.performer.name}【${f.sourceManeuver.name}】`),f.type==="instance"){if(f.applied)return;const p=ct(f.target.id);if(!p)return;Sw(f,v=>{const m=()=>{jw(u)};if(v<=0){Re(`→ ${p.name}への攻撃は完全に防がれ、ダメージはありませんでした。`),lh(p.id),m();return}p.category==="レギオン"||Object.values(p.partsStatus).flat().filter(g=>!g.damaged).length<=v?(p.category==="レギオン"?(Re(`→ ${v}体が失われます（レギオン）`),gp(p.id,null,v)&&Qe(`${p.name}は完全破壊されました`)):(Re(`→ ${p.name}は残りパーツ数以上のダメージを受け、完全に破壊されました！`),Gt(p.id,{isDestroyed:!0}),Qe(`${p.name}は完全破壊されました`)),lh(p.id),m()):xw(p,v,f.location,m)})}else f.type==="declaration"&&Co({type:"resolve-damage",index:u})}else if(d&&!isNaN(u)){const h=At();let f;d==="resolve-rapid"?f=h.rapidQueue[u]:d==="resolve-judge"&&(f=h.judgeQueue[u]),f&&Re(`> 解決：[${f.timing}] ${f.performer.name}【${f.sourceManeuver.name}】`),Co({type:d,index:u})}}}),aa(),vw(),oh(document.getElementById("pcContainer")),oh(document.getElementById("enemyContainer")),_w();const e=document.getElementById("startBattleBtn");e&&(e.onclick=()=>{e.disabled||Hw()}),document.getElementById("countdownBtn").onclick=()=>{Ww()},document.getElementById("endTurnBtn").onclick=()=>{sp(),Cw()};const t=document.getElementById("showReferenceBtn");t&&(t.onclick=()=>{iw()});const n=document.getElementById("showRelationshipBtn");n&&(n.onclick=()=>{tw()});const i=document.getElementById("resetBattleBtn");i&&(i.onclick=async()=>{confirm("バトルパートを終了して、戦闘開始直前の状態に戻します。よろしいですか？")&&(Qe("盤面を初期状態に戻しています...",2e3),await mT(),Xc(),xn(),Qe("初期状態に戻りました。",2e3))});const r=document.getElementById("saveStateToFileBtn");r&&(r.onclick=hT);const o=document.getElementById("saveStateBtn");o&&(o.onclick=()=>{qc(!0)});const a=document.getElementById("clearStateBtn");a&&(a.onclick=()=>{confirm("ブラウザに保存されたセッションデータを削除します。この操作は取り消せません。よろしいですか？")&&dp()})}function aa(){document.querySelectorAll(".char").forEach(s=>{const e=s.dataset.id;if(!e)return;const t=ct(e);if(t){if(At().isStarted)s.onclick=n=>{if(n.stopPropagation(),Ts){Ts=!1;return}nh(t,s)};else{s.onclick=d=>{if(d.stopPropagation(),Ts){Ts=!1;return}mn===s?(s.classList.remove("actions-visible"),mn=null):(mn&&mn.classList.remove("actions-visible"),s.classList.add("actions-visible"),mn=s)};const n=s.querySelector('[data-action="delete"]');n&&(n.onclick=d=>{d.stopPropagation();const u=ct(e);xT(e),u&&u.type==="pc"&&ut().forEach(h=>{h.type==="pc"&&ua(h)}),xn(),mn=null});const i=s.querySelector('[data-action="details"]');i&&(i.onclick=d=>{d.stopPropagation(),oa(t)});const r=s.querySelector('[data-action="place"]');r&&(r.onclick=d=>{d.stopPropagation(),QE(t)});const o=s.querySelector('[data-action="move-left"]'),a=s.querySelector('[data-action="move-right"]');o&&(o.onclick=d=>{d.stopPropagation(),uh(e,"left"),xn(),mn=null}),a&&(a.onclick=d=>{d.stopPropagation(),uh(e,"right"),xn(),mn=null});const l=ut().filter(d=>d.type===t.type),c=l.findIndex(d=>d.id===e);o&&(o.disabled=c===0),a&&(a.disabled=c===l.length-1)}s.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.add("hover-highlight")},s.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.remove("hover-highlight")}}}),document.querySelectorAll(".marker").forEach(s=>{const e=s.dataset.id;if(!e)return;const t=ct(e);t&&(At().isStarted&&(s.onclick=n=>{n.stopPropagation(),nh(t,s)}),s.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),s.classList.add("hover-highlight")},s.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),s.classList.remove("hover-highlight")})}),document.querySelectorAll(".add-char-card").forEach(s=>{const e=s.closest(".char-container");if(e){const t=e.id==="pcContainer"?"pc":"enemy";s.onclick=null,s.onclick=()=>{YE(t)}}})}function oh(s){let e=!1,t,n,i;s.addEventListener("mousedown",o=>{e=!0,Ts=!1,t=o.pageX-s.offsetLeft,n=s.scrollLeft,i=0});const r=()=>{e=!1,Math.abs(i)>5&&(Ts=!0)};s.addEventListener("mouseleave",r),s.addEventListener("mouseup",r),s.addEventListener("mousemove",o=>{if(!e)return;o.preventDefault(),i=o.pageX-s.offsetLeft-t,s.scrollLeft=n-i}),s.addEventListener("wheel",o=>{o.shiftKey||(o.preventDefault(),s.scrollLeft+=o.deltaY)})}function vw(){const s=document.getElementById("diceRoller");let e=!1,t,n,i,r;s.addEventListener("mousedown",l=>{i=l.clientX,r=l.clientY,e=!0,t=l.clientX-s.getBoundingClientRect().left,n=l.clientY-s.getBoundingClientRect().top,s.style.cursor="grabbing",document.addEventListener("mousemove",o),document.addEventListener("mouseup",a),l.preventDefault()});function o(l){e&&(s.style.left=`${l.clientX-t}px`,s.style.top=`${l.clientY-n}px`)}function a(){e=!1,s.style.cursor="grab",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a)}s.addEventListener("click",l=>{Math.abs(l.clientX-i)>3||Math.abs(l.clientY-r)>3||wE()})}function _w(){document.querySelectorAll(".accordion-header").forEach(s=>{s.closest("#maneuverMenu")||s.addEventListener("click",()=>{const e=s.closest(".accordion-container");e&&e.classList.toggle("is-closed")})})}function yw(s){const e=document.getElementById("madnessModal"),t=document.getElementById("confirmMadnessBtn"),n=new Map;document.querySelectorAll(".pc-regret-group").forEach(i=>{i.querySelectorAll(".regret-item").forEach(r=>{r.onclick=()=>{i.querySelectorAll(".regret-item").forEach(o=>o.classList.remove("is-selected")),r.classList.add("is-selected"),n.set(i.dataset.pcId,r.dataset.regretId),t.disabled=n.size!==s.length}})}),t.disabled=!0,t.onclick=()=>{n.forEach((i,r)=>MT(r,i)),e.classList.remove("is-visible"),rp()}}function xw(s,e,t,n){const i=document.getElementById("damageModal"),r=i.querySelector("#damageModalTitle"),o=i.querySelector("#damageModalInfo"),a=i.querySelector("#partsGridContainer"),l=i.querySelector("#confirmDamageBtn");r.textContent=`${s.name} へのパーツ損傷処理`,a.innerHTML="";let c=[];const d=()=>{o.textContent=`損傷させるパーツを ${e} 個選択してください (残り: ${e-c.length})`,l.disabled=c.length!==e};d();const u=s.category==="ホラー",h={頭:"head",腕:"arms",胴:"torso",脚:"legs",体:"body"},f=h[t]||null;if((u?["body"]:["head","arms","torso","legs","body"]).forEach(v=>{const m=s.partsStatus[v];if(m&&m.length>0){const g=document.createElement("div");g.className="part-location-group",g.dataset.location=v,g.innerHTML=`<h4>${Object.keys(h).find(x=>h[x]===v)||"他"}</h4>`;const _=document.createElement("div");_.className="parts-wrapper",m.forEach(x=>{const y=document.createElement("div");y.className="part-item",y.textContent=x.name,y.dataset.partId=x.id,x.damaged?y.classList.add("is-damaged"):y.onclick=()=>{const M=x.id,E=c.indexOf(M);E>-1?(y.classList.remove("is-selected"),c.splice(E,1)):c.length<e&&(y.classList.add("is-selected"),c.push(M)),d()},_.appendChild(y)}),g.appendChild(_),a.appendChild(g)}}),f&&a.querySelector(`.part-location-group[data-location="${f}"]`)?.classList.add("is-highlighted"),f&&s.partsStatus[f]){const v=s.partsStatus[f].filter(m=>!m.damaged);v.length>0&&v.length<=e&&v.forEach(m=>{const g=a.querySelector(`.part-item[data-part-id="${m.id}"]`);g&&!g.classList.contains("is-selected")&&(g.classList.add("is-selected"),c.push(m.id))})}d(),l.onclick=()=>{c.forEach(v=>gp(s.id,v)),i.classList.remove("is-visible"),n&&n()},document.getElementById("closeDamageModalBtn").onclick=()=>{i.classList.remove("is-visible")},i.classList.add("is-visible")}function Mw(s){const e=At(),t=e.actionQueue.length>0&&e.actionQueue.every(r=>r.checked);if(!(e.phase==="DAMAGE_RESOLUTION"||t&&e.damageQueue.some(r=>!r.applied)))return;const i=e.damageQueue.find(r=>r.target.id===s&&!r.applied);if(i){const r=e.damageQueue.indexOf(i);handleDamageItemClick(r)}else console.warn(`Damage marker clicked for ${s}, but no applicable damage found in the queue.`)}function Sw(s,e){const{sourceAction:t,target:n}=s,{performer:i,sourceManeuver:r}=t,{finalAmount:o,baseAmount:a,totalBonus:l,totalDefense:c}=Gc(s),d=[];s.rollValue>=11&&d.push(`<div>【大成功】+${s.rollValue-10}</div>`),(ct(i.id).activeBuffs||[]).forEach(m=>{m.stat==="damageBonus"&&(m.duration==="onetime_next_action"||m.duration==="until_damage_applied")&&d.push(`<div>【${m.source}】+${m.value}</div>`)});const h=[],f=ct(n.id);(f.activeBuffs||[]).forEach(m=>{m.stat==="defense"&&m.duration==="until_damage_applied"&&h.push(`<div>${f.name}の【${m.source}】-${m.value}</div>`)}),Object.values(f.partsStatus).flat().map(m=>m.damaged?null:Ft(m.name)).filter(m=>m?.timing==="オート"&&m.effects).forEach(m=>m.effects.forEach(g=>{g.ref==="APPLY_PASSIVE_DEFENSE"&&g.params.value&&s.location.toLowerCase().includes(g.params.condition.replace("hit_location_is_",""))&&h.push(`<div>${f.name}の【${m.name}】-${g.params.value}</div>`)}));const p=`
        <div class="attack-confirm-summary">
            ${i.name}【${r.name}】 → ${n.name}
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《基本ダメージ》</div>
            <div class="modifier-list"><div>【${r.name}】${a}</div></div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《追加ダメージ 合計: +${l}》</div>
            <div class="modifier-list">${d.length>0?d.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
        <div class="damage-calc-section">
            <div class="section-header">《防御 合計: -${c}》</div>
            <div class="modifier-list">${h.length>0?h.join(""):'<div class="modifier-none">- なし -</div>'}</div>
        </div>
    `,v=`<button id="executeDamageBtn" class="welcome-modal-close-btn">${s.location}：${o}点を確定</button>`;Et({title:"ダメージ計算",bodyHtml:p,footerHtml:v,onRender:(m,g)=>{m.querySelector("#executeDamageBtn").onclick=()=>{e(o),g()}}})}const bw="1.19.99";let ki=null;const Fo=["奈落","地獄","煉獄","花園","楽園"],ul=Array.from({length:26},(s,e)=>20-e);function Ew(){console.log("UI Manager initialized.")}function xn(){const s=At(),e=ut();la(),document.querySelectorAll(".damage-prompt-button").forEach(n=>n.remove());const t={};s.damageQueue.forEach(n=>{if(n.type==="instance"&&!n.applied&&n.target){const i=n.target.id;t[i]||(t[i]=0);const{finalAmount:r}=Gc(n);t[i]+=r}});for(const n in t)Dw(n,t[n]);Ko(),Rw(s,e),$c()}function ww(){document.documentElement.style.setProperty("--col-count",ul.length),document.documentElement.style.setProperty("--row-count",Fo.length);const s=document.getElementById("battleWrap");s.innerHTML="";const e=document.createElement("div");e.className="current-action-cell",e.id="currentActionValue",s.appendChild(e),ul.forEach((n,i)=>{const r=document.createElement("div");r.className="col-header",r.textContent=n,r.dataset.col=String(n),r.style.gridColumn=(i+2).toString(),r.style.gridRow="1",s.appendChild(r)});const t={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"};Fo.forEach((n,i)=>{const r=document.createElement("div");r.className="row-header";const o=t[n];o&&r.classList.add(`area-color-${o}`),r.textContent=n,r.style.gridColumn="1",r.style.gridRow=(i+2).toString(),s.appendChild(r)}),Fo.forEach((n,i)=>{ul.forEach((r,o)=>{const a=document.createElement("div");a.className="cell";const l=t[n];l&&a.classList.add(`cell-area-${l}`),r===0?a.classList.add("col-zero"):r<0&&a.classList.add("col-negative"),a.dataset.row=String(i),a.dataset.col=String(r),a.style.gridColumn=(o+2).toString(),a.style.gridRow=(i+2).toString(),s.appendChild(a)})})}function Qe(s,e=2e3){const t=document.getElementById("toast-notification");t&&(ki&&clearTimeout(ki),t.onclick=()=>{t.classList.remove("is-visible"),ki&&(clearTimeout(ki),ki=null),t.onclick=null},t.innerHTML=s,t.classList.add("is-visible"),ki=setTimeout(()=>{t.classList.remove("is-visible"),t.onclick=null,ki=null},e))}function la(){const s=ut(),e=s.filter(n=>n.type==="pc"),t=s.filter(n=>n.type==="enemy");ah(document.getElementById("pcContainer"),e,"pc"),ah(document.getElementById("enemyContainer"),t,"enemy"),Ko(),aa()}function ah(s,e,t){s.innerHTML="";const n=!At().isStarted;if(e.forEach(i=>{const r=tp(i,n);s.appendChild(r)}),n){const i=document.createElement("div");i.className="add-char-card";const r=t==="pc"?"姉妹ドール":"NCの手駒";i.innerHTML=`<div class="add-char-text-2">UNDEAD</div><div class="add-char-plus">+</div><div class="add-char-text">${r}を追加</div>`,s.appendChild(i)}}function tp(s,e){let t="";s.isMentallyBroken&&(t+=" status-mental-collapse"),s.isDestroyed&&(t+=" status-destroyed"),s.hasWithdrawn&&(t+=" status-withdrawn");let n="";(s.isDestroyed||s.hasWithdrawn)&&(n+=" is-inactive");const i=document.createElement("div");i.className=`char ${n.trim()}`,i.dataset.id=s.id;const r=`
        <div class="card-actions-overlay">
            <div class="card-action-row">
                <button class="card-action-btn" data-action="place">配置</button>
                <button class="card-action-btn" data-action="details">詳細</button>
                <button class="card-action-btn" data-action="delete">削除</button>
            </div>
            <div class="card-action-row">
                <button class="card-action-btn" data-action="move-left">←</button>
                <button class="card-action-btn" data-action="move-right">→</button>
            </div>
        </div>`;let o="";const a=s.regrets?s.regrets.filter(p=>p.isChecked):[];a.length>0&&(o=`<div class="char-madness">${a.map(v=>{const m=v.points||0;let g="";const _=v.isForTreasure?"♥":"◆";for(let y=0;y<4;y++)g+=y<m?_:"・";return`<div class="${m>=4?"is-madness":""}">${g}</div>`}).join("")}</div>`);let l="";if(s.partsStatus){let p="";if(s.category==="ドール"||s.category==="サヴァント"){const v=["head","arms","torso","legs","body"],m={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"他"},g=new Set(s.treasures||[]);p=v.map(_=>{if(!s.partsStatus[_]||s.partsStatus[_].length===0)return"";const y=s.partsStatus[_].map(M=>{const E=Ft(M.name),A=E&&E.id&&E.id.startsWith("BP-"),P=g.has(M.name);return{part:M,isBasicPart:A,isTreasure:P,damaged:M.damaged}}).sort((M,E)=>M.isTreasure!==E.isTreasure?M.isTreasure?-1:1:M.isBasicPart!==E.isBasicPart?M.isBasicPart?1:-1:M.damaged!==E.damaged?M.damaged?-1:1:0).map(M=>M.isTreasure?M.damaged?"・":"♥":M.isBasicPart?M.damaged?"・":"■":M.damaged?"・":"●").join("");return _==="body"&&s.partsStatus[_].every(M=>g.has(M.name))?"":`<div>${y}：${m[_]}</div>`}).filter(_=>_!=="").join("")}else if(s.category==="ホラー"){const v=Object.values(s.partsStatus).flat(),m=[],g=[];v.forEach(y=>{const M=Ft(y.name);M&&M.id&&M.id.startsWith("BP-")?m.push(y):g.push(y)});let _="";if(g.length>0){const y=g.filter(E=>E.damaged).length;_=`<div>${"・".repeat(y)+"●".repeat(g.length-y)}：強</div>`}let x="";if(m.length>0){const y=m.filter(E=>E.damaged).length;x=`<div>${"・".repeat(y)+"■".repeat(m.length-y)}：基</div>`}p=x+_}else if(s.category==="レギオン"){const v=s.isDestroyed?0:s.stackCount,m=Math.ceil(v/10),g=[];for(let _=0;_<m;_++){const x=_*10,y=Math.min(v-x,10);y>0&&g.push(`<div>${"●".repeat(y)}：</div>`)}p=g.reverse().join("")}p&&(l=`<div class="char-parts-status">${p}</div>`)}const c=s.category==="レギオン";let d="";c?d=`<div class="char-stack-count">${s.isDestroyed?0:s.stackCount}体</div>`:d=`<div class="char-parts-count">${s.isDestroyed?0:Object.values(s.partsStatus).flat().filter(v=>!v.damaged).length}</div>`;const u=`
        <div class="char-action-display">
            <div class="char-action-value">${s.actionValue}</div>
            <div class="char-action-subtext">行動値</div>
            <div class="char-action-subtext">最大:${s.maxActionValue}</div>
        </div>
    `,f=`area-color-${{奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"}[s.area]||""}`;return i.innerHTML=`
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
            <div class="char-area-name ${f}">${s.area}</div>
            <div class="char-name-overlay">${s.name}</div>
            ${d}
            ${u}
            ${o} 
            ${l} 
        ${e?r:""}
    `,i}function Tw(s){if(!s)return;const{actionValue:e,area:t,id:n,name:i,img:r,stackCount:o}=s,a=document.getElementById("battleWrap"),l=Fo.indexOf(t);if(l===-1)return;const c=a.querySelector(`.cell[data-row="${l}"][data-col="${e}"]`);if(!c)return;const d=document.createElement("span");d.className="marker",d.dataset.id=n,d.dataset.name=i;const u=new Image;if(u.src=r,u.className="marker-img",u.alt=i,d.appendChild(u),s.category==="レギオン"&&o>1){const h=document.createElement("div");h.className="marker-stack-count",h.textContent=`x${o}`,d.appendChild(h)}c.appendChild(d)}function Aw(s){if(!s||s.length===0)return;const e=s[0].id,t=document.querySelector(`.char[data-id="${e}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center",inline:"center"})}function Re(s){const e=document.getElementById("logEntries");if(!e)return;const t=document.createElement("div");t.className="log-entry",t.innerHTML=s,e.appendChild(t),e.scrollTop=e.scrollHeight}function Cw(){const s=document.getElementById("madnessModal"),e=document.getElementById("madnessModalBody");e.innerHTML="";const t=ut().filter(n=>n.type==="pc"&&!n.isDestroyed&&!n.hasWithdrawn);if(t.length===0){rp();return}t.forEach(n=>{const i=document.createElement("div");i.className="pc-regret-group",i.dataset.pcId=n.id,i.innerHTML=`<h4>${n.name}の未練 (1つ選択)</h4>`,n.regrets.forEach(r=>{const o=document.createElement("div");o.className="regret-item",o.dataset.regretId=r.id,o.textContent=`${r.name} (狂気点: ${r.points})`,i.appendChild(o)}),e.appendChild(i)}),s.classList.add("is-visible"),yw(t)}function np(s){const e=ct(s);if(!e)return;const t=document.querySelector(`.char[data-id="${s}"]`);if(t){const n=!At().isStarted,i=tp(e,n);t.replaceWith(i),aa()}}function Ko(){document.getElementById("battleWrap").querySelectorAll(".marker").forEach(t=>t.remove()),ut().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).forEach(t=>{Tw(t)}),aa()}function Rw(s,e){const{isStarted:t,turn:n,count:i,phase:r,activeActors:o,potentialActors:a,shouldScrollToCount:l}=s,c=document.getElementById("timingArea"),d=document.getElementById("battleWrap"),u=document.getElementById("turnIndicator"),h=document.getElementById("countIndicator"),f=document.getElementById("currentActionValue"),p=document.getElementById("resetBattleBtn");if(c&&(t?(c.classList.remove("setup-phase"),c.classList.add("battle-phase"),d.classList.remove("setup-phase"),p&&(p.disabled=!1)):(c.classList.add("setup-phase"),c.classList.remove("battle-phase"),d.classList.add("setup-phase"),p&&(p.disabled=!0))),t?(u.textContent=n,h.textContent=i,f.textContent=`カウント ${i}`):(u.textContent="-",h.textContent="-",f.textContent="カウント -"),d.querySelectorAll(".highlight-col").forEach(_=>_.classList.remove("highlight-col")),t&&(d.querySelectorAll(`.cell[data-col="${i}"], .col-header[data-col="${i}"]`).forEach(_=>_.classList.add("highlight-col")),l)){const _=document.querySelector(".battle-grid-scroll-wrapper"),x=d.querySelector(`.col-header[data-col="${i}"]`);_&&x&&_.scrollTo({left:x.offsetLeft-_.offsetLeft-97,behavior:"smooth"}),Gw()}const v=new Set(o.map(_=>_.id));document.querySelectorAll(".char").forEach(_=>{_.classList.toggle("highlight-char",v.has(_.dataset.id))});let m=null;switch(r){case"ACTION_DECLARATION":o.length>0&&(m=document.querySelector(`.char[data-id="${o[0].id}"]`));break;case"RAPID_RESOLUTION":m=document.getElementById("rapidDeclarationArea");break;case"ACTION_RESOLUTION":m=document.getElementById("actionDeclarationArea");break;case"DAMAGE_RESOLUTION":m=document.getElementById("damageProcessingArea");break}m&&m.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"});const g=new Set(a.map(_=>_.id));e.forEach(_=>{if(ip(_.id,"char-bubble-marker-container"),t&&!_.isDestroyed&&!_.hasWithdrawn){const x=Wc(_);g.has(_.id)&&As(_.id,"ACT","char-bubble-marker-container","#36c","white"),x.some(y=>y.data.timing==="ラピッド"&&y.isUsable)&&As(_.id,"RPD","char-bubble-marker-container","#c63","white"),x.some(y=>y.data.timing==="ジャッジ"&&y.isUsable)&&As(_.id,"JDG","char-bubble-marker-container","#396","white"),x.some(y=>y.data.timing==="ダメージ"&&y.isUsable)&&As(_.id,"DMG","char-bubble-marker-container","#933","white")}}),Iw(s),Pw(),Bw()}function Iw(s){if(!s)return;const{phase:e,activeActors:t,actionQueue:n,rapidQueue:i,judgeQueue:r,damageQueue:o}=s,a={action:document.getElementById("actionPhaseIndicator"),rapid:document.getElementById("rapidPhaseIndicator"),judge:document.getElementById("judgePhaseIndicator"),damage:document.getElementById("damagePhaseIndicator")},l=n.some(y=>!y.checked),c=i.some(y=>!y.checked),d=r.some(y=>!y.checked),u=o.some(y=>!y.applied),h=t.length>0,f=n.length>0,p=!c&&!d&&!l;let v=!1;f&&!p&&(v=!0);const m=!h&&l,g=e==="DAMAGE_RESOLUTION"||n.every(y=>y.checked)&&u;a.action.classList.toggle("active",h),a.rapid.classList.toggle("active",v),a.judge.classList.toggle("active",m),a.damage.classList.toggle("active",g);const _=document.getElementById("countdownBtn"),x=document.getElementById("endTurnBtn");!_||!x||(_.disabled=!0,x.disabled=!0,e==="COUNT_END"?_.disabled=!1:e==="TURN_END_PREPARATION"&&(x.disabled=!1))}function Pw(){const{actionQueue:s,rapidQueue:e,judgeQueue:t,damageQueue:n}=At();dl("actionDeclarationList",s,"アクション宣言"),dl("rapidDeclarationList",e,"ラピッド宣言"),dl("judgeDeclarationList",t,"ジャッジ宣言"),Lw(n),document.getElementById("actionDeclarationArea").classList.toggle("is-closed",s.length===0),document.getElementById("rapidDeclarationArea").classList.toggle("is-closed",e.length===0),document.getElementById("judgeDeclarationArea").classList.toggle("is-closed",t.length===0),document.getElementById("damageProcessingArea").classList.toggle("is-closed",n.length===0)}function dl(s,e,t){const n=document.getElementById(s);if(!n)return;const i=n.closest(".accordion-container"),r=i?i.querySelector(".accordion-header"):null;if(!r)return;const o=At(),a=o.activeActors.length>0,l=o.rapidQueue.some(u=>!u.checked),c=o.judgeQueue.some(u=>!u.checked);let d=r.querySelector("span");if(!d){const u=r.textContent;r.innerHTML="",d=document.createElement("span"),d.textContent=u,r.appendChild(d)}e.length===0?(n.innerHTML="",d.textContent=t+"はありません"):(d.textContent=t,n.innerHTML="",e.forEach((u,h)=>{const f=document.createElement("label");f.className="action-queue-item",s==="rapidDeclarationList"?f.dataset.action="resolve-rapid":s==="judgeDeclarationList"?f.dataset.action="resolve-judge":s==="actionDeclarationList"&&(f.dataset.action="resolve-action"),f.dataset.index=h;let p=!1;s==="rapidDeclarationList"?p=a:s==="judgeDeclarationList"?p=a||l:s==="actionDeclarationList"&&(p=a||l||c),u.checked&&(p=!0),p&&f.classList.add("is-disabled"),u.checked&&f.classList.add("is-checked");const v=document.createElement("input");v.type="checkbox",v.checked=u.checked,v.disabled=!0,f.appendChild(v);const m=document.createElement("span");let g=`<b>${u.performer.name}</b>【${u.summary.name}】`,_=null;if(u.judgeTarget)_=u.judgeTarget.performer;else if(u.target){if(u.target.name)_=u.target;else if(u.target.performer){const x=u.target;x.target&&x.target.id!==x.performer.id?g+=`→ <b>${x.target.name}</b>（${x.performer.name}【${x.sourceManeuver.name}】）`:_=x.performer}}_&&(g+=`→ <b>${_.name}</b>`),m.innerHTML=g,f.appendChild(m),n.appendChild(f)}))}function Lw(s){const e=document.getElementById("damageProcessingList");if(!e)return;const t=e.closest(".accordion-container"),n=t?t.querySelector(".accordion-header"):null,i=At().phase==="DAMAGE_RESOLUTION";s.length===0?(e.innerHTML="",n&&(n.textContent="ダメージ宣言はありません")):(n&&(n.textContent="ダメージ宣言"),e.innerHTML="",s.forEach((r,o)=>{const a=document.createElement("label");a.className="action-queue-item damage-item",a.dataset.action="resolve-damage",a.dataset.index=o;let l=!0,c=!1;const d=document.createElement("span");if(r.type==="instance"){c=r.applied,l=!i||c;const{finalAmount:h,baseAmount:f,totalBonus:p,totalDefense:v}=Gc(r),m=r.sourceAction.performer.name;let g="";if(p>0||v>0){const _=p>0?`+${p}`:"",x=v>0?`-${v}`:"";g=` (${f}${_}${x})`}d.innerHTML=`<b>${m}</b> → <b>${r.target.name}</b>：${r.location}：<b>${h}</b>点${g}`}else if(r.type==="declaration"){c=r.checked,l=c;let h=`<b>${r.performer.name}</b> 【${r.sourceManeuver.name}】`;r.target&&(h+=` → <b>${r.target.name}</b>`),d.innerHTML=h}l&&a.classList.add("is-disabled"),c&&a.classList.add("is-checked");const u=document.createElement("input");u.type="checkbox",u.checked=c,u.disabled=!0,a.appendChild(u),a.appendChild(d),e.appendChild(a)}))}function Dw(s,e){const t=document.querySelector(`.char[data-id="${s}"]`);if(!t)return;const n=t.querySelector(".damage-prompt-container");let i=n.querySelector(".damage-prompt-button");i||(i=document.createElement("button"),i.className="damage-prompt-button",n.appendChild(i),i.style.pointerEvents="auto",i.onclick=r=>{r.stopPropagation(),Mw(s)}),i.dataset.damage=e,i.textContent=`ダメージ ${e}`}function lh(s){const e=document.querySelector(`.char[data-id="${s}"]`);if(e){const t=e.querySelector(".damage-prompt-button");t&&t.remove()}}function $c(){const s=document.getElementById("startBattleBtn");if(!s)return;const e=ut(),t=e.some(i=>i.type==="pc"),n=e.some(i=>i.type==="enemy");s.disabled=!(t&&n)}function Nw(s){const e=document.getElementById("version-info");if(e&&s){const n=["app","ui-manager","interaction-manager","character-manager","settings-manager","state-manager","battle-logic","dice-3d","dice-roller","menu-builder","battle-helper","data-handler","ui-helpers","reference","p2p-manager","character-converter","personality-generator"].map(i=>`<span class="responsive-item">${i}: v${s[i]||"N/A"}</span>`).join('<span class="hide-on-mobile"> | </span>');e.innerHTML=n}}function Et(s){const e=document.getElementById("simpleMenuModal"),t=document.getElementById("simpleMenuModalTitle"),n=document.getElementById("simpleMenuModalBody"),i=document.getElementById("simpleMenuModalFooter"),r=document.getElementById("closeSimpleMenuModalBtn");if(!e||!t||!n||!i||!r)return;const o=s.closable!==!1;e.classList.toggle("is-not-closable",!o),r.style.display=o?"block":"none",t.textContent=s.title||"",n.innerHTML=s.bodyHtml||"",i.innerHTML=s.footerHtml||"",i.style.display=s.footerHtml?"block":"none",n.classList.remove("attack-confirm-body"),s.bodyHtml&&s.bodyHtml.includes("attack-confirm-summary")&&n.classList.add("attack-confirm-body"),s.items&&s.items.forEach(l=>{const c=document.createElement("div");l.isTitle||(c.textContent=l.label,c.classList.add("maneuver-item"),l.class&&c.classList.add(...l.class.split(" ")),l.isDisabled&&c.classList.add("is-masked"),c.onclick=()=>{l.isDisabled||(a(),l.onClick&&l.onClick())}),n.appendChild(c)});const a=()=>e.classList.remove("is-visible");o?(r.onclick=a,e.onclick=l=>{l.target===e&&a()}):(r.onclick=null,e.onclick=null),s.onRender&&s.onRender(e,a),e.classList.add("is-visible")}function Fw(s){const e=document.getElementById("loading-overlay"),t=document.getElementById("loading-message"),n=document.getElementById("progress-bar-fill");!e||!t||!n||(t.textContent=s,n.style.width="0%",e.classList.add("is-visible"))}function hl(s,e,t){const n=document.getElementById("loading-message"),i=document.getElementById("progress-bar-fill");if(!n||!i)return;const r=e>0?s/e*100:0;n.textContent=`キャラクターを読み込み中... (${s} / ${e})`,t&&(n.textContent+=`
「${t}」`),i.style.width=`${r}%`}function Uw(){const s=document.getElementById("loading-overlay");s&&s.classList.remove("is-visible")}function As(s,e,t,n="rgba(0,0,0,0.7)",i="white"){const r=document.querySelector(`.${t}[data-id="${s}"]`);if(!r)return;const o=document.createElement("div");o.className="bubble-marker",o.textContent=e,o.style.backgroundColor=n,o.style.borderColor=i,r.appendChild(o)}function ip(s,e){const t=document.querySelector(`.${e}[data-id="${s}"]`);t&&(t.innerHTML="")}function Bw(){const{actionQueue:s,isStarted:e}=At();ut().forEach(n=>ip(n.id,"char-action-marker-container")),e&&s.forEach(n=>{if(!n.checked){const{performer:i,target:r,sourceManeuver:o}=n;if(i){let a="ACT",l="#666";o.tags.includes("攻撃")?(a="攻撃",l="#f0f"):o.tags.includes("移動")?(a="移動",l="#0f0"):o.category==="支援"||o.tags.includes("支援")?(a="支援",l="#0ff"):(o.category==="妨害"||o.tags.includes("妨害"))&&(a="妨害",l="#ff0"),As(i.id,a,"char-action-marker-container",l,"white")}r&&As(r.id,"TGT","char-action-marker-container","#f00","white")}})}const Ow="1.26.98";let fe={isStarted:!1,turn:1,count:0,activeActors:[],potentialActors:[],actorsForThisCount:new Set,phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],shouldScrollToCount:!1};function ca(s){fe.count!==s&&Re(`■■■■ ターン ${fe.turn} カウント ${s} 開始 ■■■■`),fe.count=s,fe.shouldScrollToCount=!0,kw(),sn()}function kw(){fe.phase="ACTION_DECLARATION",fe.actionQueue=[],fe.rapidQueue=[],fe.judgeQueue=[],fe.damageQueue=[];const s=ut().filter(e=>!e.isDestroyed&&!e.hasWithdrawn);fe.actorsForThisCount=new Set(s.filter(e=>e.actionValue>=fe.count).map(e=>e.id)),s.forEach(e=>e.hasActedThisCount=!1),ci()}function zw(){const s=fe.actionQueue;let e=new Map;s.forEach(t=>{const{performer:n,target:i,sourceManeuver:r}=t;n&&n.skills.forEach(o=>{const a=Ft(o);!a||a.timing!=="オート"||!a.effects||a.effects.forEach(l=>{if(l.params?.duration==="while_in_area"&&n.area!==l.params.area||l.ref!=="APPLY_CONDITIONAL_BUFF")return;const c=l.params;let d=!1;switch(c.trigger){case"attacking_same_target_as_ally_this_count":i&&(d=s.some(h=>h.performer.type==="pc"&&h.performer.id!==n.id&&h.target?.id===i.id));break;case"attacking_with_melee":const u=r.effects?.find(h=>h.ref==="GENERIC_ATTACK");u&&u.params.attack_type==="白兵"&&(d=!0);break}d&&(c.buffs.forEach(u=>{vc(n.id,{source:a.name,stat:u.stat,value:u.value,duration:"onetime_next_action"})}),e.has(n.id)||e.set(n.id,new Set),e.get(n.id).add(a.name))})})}),e.forEach((t,n)=>{const i=ct(n);i&&Re(`> [オート] ${i.name}の【${Array.from(t).join("】【")}】が適用されます。`)})}function Vw(s,e){let t=JSON.stringify(s);return t=t.replace(/"\$params\.(\w+)"/g,(n,i)=>e.hasOwnProperty(i)?JSON.stringify(e[i]):"null"),JSON.parse(t)}function Co(s){if(!(!s||!s.type))switch(s.type){case"resolve-action":Xw(s.index,s.diceResult||null);break;case"resolve-rapid":$w(s.index);break;case"resolve-judge":qw(s.index);break;case"resolve-damage":const e=fe.damageQueue[s.index];if(!e)return;if(e.type==="declaration"){if(e.checked)return;const t=e,n=t.sourceManeuver;if(n.effects?.some(a=>a.ref==="TAKE_DAMAGE_FOR_ALLY")){const a=fe.damageQueue.find(l=>l.type==="instance"&&!l.applied&&l.target.id===t.target.id);a?(Zw(a.id,t.performer),t.checked=!0,sn()):(Qe("庇う対象のダメージが見つかりません。",2e3),t.checked=!0,sn());return}if(n.effects?.some(a=>a.ref==="GENERIC_DEFENSE")){t.checked=!0,vc(t.performer.id,{source:n.name,stat:"defense",value:n.effects.find(a=>a.ref==="GENERIC_DEFENSE").params.value||0,duration:"until_damage_applied"}),Re(`→ ${t.performer.name}【${n.name}】：ダメージ軽減`),sn();return}if(n.effects?.some(a=>a.ref==="INCREASE_DAMAGE_DEALT")){t.checked=!0,vc(t.performer.id,{source:n.name,stat:"damageBonus",value:n.effects.find(a=>a.ref==="INCREASE_DAMAGE_DEALT").params.value||0,duration:"until_damage_applied"}),Re(`→ ${t.performer.name}【${n.name}】：ダメージ増加`),sn();return}}break}}function At(){return{...fe,activeActorIds:new Set(fe.activeActors.map(s=>s.id))}}function Hw(){fe.isStarted=!0,fe.turn=1;const s=ut(),e=Math.max(0,...s.map(t=>t.actionValue));ca(e)}function Gw(){fe.shouldScrollToCount=!1}function pn(s,e,t=null,n=null){const i=s.id,r=ct(i);let o=isNaN(Number(e.cost))?0:Number(e.cost);const a=o;let l=!1;if(e.effects?.some(p=>p.ref==="REDUCE_NEXT_MANEUVER_COST")){const p=(r.spineBonus||0)+1;Gt(i,{spineBonus:p,lastUsedSpineCount:fe.count})}else r.spineBonus>0&&(o=Math.max(0,a-r.spineBonus),l=!0);o>0&&Gt(i,{actionValue:r.actionValue-o});const d=ct(i);d.turnLimitedManeuvers.has(e.name)&&d.usedManeuvers.add(e.name);let u=t;!u&&e.range==="自身"&&(u=d);const h=ct(i);if(!h){console.error(`宣言の解決中にパフォーマー(ID: ${i})が見つかりませんでした。`);return}const f={id:`decl_${Date.now()}_${Math.random()}`,performer:h,target:t,sourceManeuver:e,timing:e.timing,summary:{name:e.name},checked:!1,type:"declaration"};switch(e.timing){case"ラピッド":fe.rapidQueue.push(f),Re(`◆ [ラピッド] ${h.name}が【${e.name}】を宣言`);break;case"ジャッジ":f.judgeTarget=n,fe.judgeQueue.push(f),Re(`◆ [ジャッジ] ${h.name}が【${e.name}】を宣言`);break;case"ダメージ":fe.damageQueue.push(f);let p=`◆ [ダメージ] ${h.name}が【${e.name}】を宣言`;u&&u.id!==d.id&&(p+=` (対象: ${u.name})`),Re(p);break;case"アクション":default:e.timing==="アクション"&&(Gt(i,{hasActedThisCount:!0}),f.type="action",fe.actionQueue.push(f),Re(`◆ [アクション] ${h.name}が【${e.name}】を宣言`));break}l&&(Re(`> 【${e.name}】のコストが${a}から${o}になります。（コスト軽減 ${r.spineBonus}）`),Gt(i,{spineBonus:0,lastUsedSpineCount:-1})),sn()}function sn(){if(ut().forEach(a=>{a.spineBonus>0&&a.lastUsedSpineCount!==-1&&a.lastUsedSpineCount-fe.count>1&&(Gt(a.id,{spineBonus:0,lastUsedSpineCount:-1}),Re(`> ${a.name}の【せぼね】の効果は使用されなかったため失われました。`))}),!fe.isStarted){fe.phase="SETUP",fe.activeActors=[],fe.potentialActors=[],xn();return}const e=Array.from(fe.actorsForThisCount).filter(a=>{const l=ct(a);return l&&!l.hasActedThisCount&&l.actionValue>0}).map(a=>ct(a));fe.potentialActors=e;const t=e.filter(a=>a.type==="enemy");fe.activeActors=t.length>0?t:e.filter(a=>a.type==="pc");const n=fe.phase,i=fe.rapidQueue.some(a=>!a.checked),r=fe.actionQueue.some(a=>!a.checked),o=fe.damageQueue.some(a=>a.type==="instance"?!a.applied:a.type==="declaration"?!a.checked:!1);if(fe.activeActors.length>0)fe.phase="ACTION_DECLARATION";else if(i)fe.phase="RAPID_RESOLUTION";else if(r)fe.phase="ACTION_RESOLUTION";else if(o)fe.phase="DAMAGE_RESOLUTION";else{const a=ut().some(l=>l.actionValue>0&&!l.isDestroyed&&!l.hasWithdrawn);fe.phase=fe.count>0&&a?"COUNT_END":"TURN_END_PREPARATION"}n==="ACTION_DECLARATION"&&fe.phase!=="ACTION_DECLARATION"&&zw(),xn()}function Ww(){const e=ut().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).map(t=>t.actionValue).filter(t=>t<fe.count);e.length>0?ca(Math.max(...e)):sp()}function sp(){fe.phase="MADNESS_PHASE",Re("【ターン終了】各ドールは未練に狂気点を1点加えます。")}function rp(){fe.turn++,ut().forEach(t=>{t.activeBuffs&&(t.activeBuffs=t.activeBuffs.filter(n=>n.duration!=="end_of_turn"))}),ST();const s=ut().filter(t=>!t.isDestroyed&&!t.hasWithdrawn),e=s.length>0?Math.max(0,...s.map(t=>t.actionValue)):0;ca(e),sn()}async function $w(s){const e=fe.rapidQueue[s];!e||e.checked||(await op(e),e.checked=!0,sn())}async function Xw(s,e=null){const t=fe.actionQueue[s];!t||t.checked||(await op(t,e),t.checked=!0,fe.actionQueue.every(n=>n.checked)?Yw():sn())}function qw(s){const e=fe.judgeQueue[s];e&&!e.checked&&(e.checked=!0),sn()}function jw(s){const e=fe.damageQueue[s];if(e&&e.type==="instance"&&!e.applied){e.applied=!0;const t=e.target.id,n=e.sourceAction.performer.id;dh(n,"onetime_next_action"),fe.damageQueue.forEach(i=>{i.type==="declaration"&&(i.target?.id===t&&(i.checked=!0),e.sourceAction?.performer.id===i.performer.id&&(i.checked=!0))}),dh(t,"until_damage_applied")}sn()}function Yw(){if(fe.moveQueue.length>0){Re("--- アクション移動解決フェーズ ---");const s=fe.moveQueue.map(e=>{const t=fe.actionQueue.find(h=>h.id===e.declarationId);let n=0;t&&t.debuffs&&t.debuffs.forEach(h=>{n+=h.value||0});const i=["奈落","地獄","煉獄","花園","楽園"],r=ct(e.characterId),o=i.indexOf(r.area),a=i.indexOf(e.targetArea),l=Math.abs(a-o),c=Math.max(0,l+n);if(c<l&&Re(`→ ${r.name}の移動は妨害され、移動距離が${l-c}減少！`),c===0)return l>0&&Re(`→ ${r.name}の移動は完全に妨害された！`),null;let d;a>o?d=Math.min(i.length-1,o+c):d=Math.max(0,o-c);const u=i[d];return r.area!==u&&Re(`→ ${r.name}は「${u}」へ移動`),{characterId:e.characterId,targetArea:u}}).filter(e=>e!==null);bT(s),fe.moveQueue=[]}Kw()}function Kw(){fe.damageQueue.some(e=>!e.applied)?(fe.phase="DAMAGE_RESOLUTION",Re("--- ダメージタイミング開始 ---")):fe.phase="COUNT_END",sn()}function Zw(s,e){const t=fe.damageQueue.find(n=>n.id===s);t&&e&&(Re(`→ ${e.name} が ${t.target.name} へのダメージを肩代わりしました。`),t.target=e)}function Jw(s,e){fe.isStarted=!0,fe.turn=s;const t=Math.max(0,...e.map(n=>n.actionValue));ca(t)}function Xc(){fe={isStarted:!1,turn:1,count:0,activeActors:[],potentialActors:[],actorsForThisCount:new Set,phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],shouldScrollToCount:!1},sn()}async function op(s,e=null){const{performer:t,sourceManeuver:n,target:i,timing:r}=s;n.effects?.some(u=>u.ref==="REDUCE_NEXT_MANEUVER_COST")&&Re(`→ 次カウントのコスト軽減 ${t.spineBonus}`);let a=!0,l=null;if(n.tags?.includes("移動妨害")&&i?l=i.performer:i&&(l=i),l){const{hasTarget:u}=Mi(t,n,[l]);u||(a=!1)}if(!a){Re(`→ [${r}] ${t.name}の【${n.name}】は 対象が射程外になったため失敗`);return}if(n.isEscapeAttempt){await ap({performer:t});return}if(!n.effects||n.effects.length===0){n.name==="待機"?Re(`${t.name}は状況をうかがっている。`):Re("※ 効果の定義がありません");return}const c={performer:t,target:s.target,declaration:s,diceResult:e};let d=[];for(const u of n.effects){const h=await ch(u,c);d.push(...h)}if(d.length>0){Re(`→ 追加効果(${d.join(",")})が発動！`);for(const u of d)await ch({ref:u,params:{}},c)}}async function ch(s,e){let t=[];const n=Tp(s.ref);if(!n)return console.warn(`※ [Engine] Effect definition not found for: ${s.ref}`),t;const i=s.params||{};for(const r of n.actions){const o=Vw(r,i);switch(o.action_type){case"attack_roll":const{hit:a,on_hit:l}=await Qw(o,e);a&&l&&t.push(...l);break;case"move_character":eT(o,e);break;case"apply_buff":tT(o,e);break;case"escape_roll":await ap(e);break;case"modify_action_value":nT(o,e);break;case"modify_move_distance":const{performer:c,declaration:d}=e,u=d.target;u&&u.sourceManeuver.tags.includes("移動")&&(u.debuffs||(u.debuffs=[]),u.debuffs.push({source:d.sourceManeuver.name,value:o.value||0}),Re(`${c.name}が【${d.sourceManeuver.name}】で${u.performer.name}の移動を妨害！`));break;case"deal_damage":case"chain_attack":case"severance_roll":break;default:Re(`※ [Engine] 未対応: ${o.action_type}`)}}return t}async function Qw(s,e){const{performer:t,target:n,declaration:i,diceResult:r}=e,o=i.performer;if(!n)return Re("攻撃対象がいません"),{hit:!1,on_hit:[]};if(!r)return console.error("performAttackRollにdiceResultが渡されていません。攻撃が解決されませんでした。"),{hit:!1,on_hit:[]};const{result:a,hitLocation:l,rollValue:c}=r,d=s.on_hit_effects||s.on_hit||[];let u=0;if(t.activeBuffs&&t.activeBuffs.forEach(f=>{f.duration==="onetime_next_action"&&f.stat==="damageBonus"&&(u+=f.value)}),a==="大失敗"){i.sourceManeuver;let f=[];const p=n.area,v=ut().filter(g=>g.type===t.type&&g.area===p&&!g.isDestroyed&&!g.isWithdrawn);f.push(...v),f.some(g=>g.id===t.id)||f.push(t);let m=null;if(f.length>0&&(m=await new Promise(g=>{const _=f.map(x=>({label:x.name,onClick:()=>g(x)}));Et({title:"大失敗：誤爆対象を選択",items:_,closable:!1})})),m){const g=s.damage||0,_=s.on_hit_effects||s.on_hit||[];fe.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,type:"instance",performer:o,target:m,amount:g,finalAmount:g,baseAmount:g,bonusAmount:0,location:"防御側任意",sourceAction:i,applied:!1,checked:!1,rollValue:c||0,isFumble:!0,onHitEffects:_}),Re(`→ ${m.name}に誤爆！ ${g}点のダメージ！`)}else Re("→ 攻撃は大失敗したが、誤爆対象がいなかった。");return{hit:!1,on_hit:[]}}const h=a.includes("成功");if(h){let f=l;c>=11?f="攻撃側任意":c===6&&(f="防御側任意");const p=s.damage||0;let v=p+u;c>=11&&(v+=c-10),fe.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,type:"instance",performer:o,target:n,baseAmount:p,location:f,sourceAction:i,applied:!1,checked:!1,rollValue:c||0,onHitEffects:s.on_hit_effects||s.on_hit||[],damageBonusSources:o.activeBuffs?.filter(m=>m.duration==="onetime_next_action"&&m.stat==="damageBonus").map(m=>({source:m.source,value:m.value}))||[]}),Re(`→ ${n.name}に${v}点のダメージ！`)}else Re("→ 攻撃失敗");return{hit:h,on_hit:d}}function eT(s,e){const{performer:t,target:n,declaration:i}=e,r=s.target==="self"?t:n;if(!r)return;const o=i.sourceManeuver.targetArea;if(!o)return;let a=1;if(s.distance){const m=String(s.distance).split("-");a=parseInt(m[1]||m[0],10)}let l=0;const c=[...r.skills.map(m=>Ft(m)),...Object.values(r.partsStatus).flat().filter(m=>!m.damaged).map(m=>Ft(m.name))].filter(m=>m);for(const m of c)if(m.timing==="オート"&&m.effects){for(const g of m.effects)if(g.ref==="APPLY_BUFF"&&g.params?.stat==="moveDistanceBonus"){const _=g.params.condition;if(_&&Array.isArray(_)){const x=i.sourceManeuver.tags||[];_.some(y=>x.includes(y))&&(l+=g.params.value||0)}else l+=g.params.value||0}}const d=a+l;let u=0;i.debuffs&&i.debuffs.forEach(m=>{u+=m.value||0});const h=Math.max(0,d+u);if(u<0&&Re(`${r.name}は移動妨害により、移動距離 -${Math.abs(u)}`),h===0){d>0&&Re(`→ ${r.name}の移動は完全に妨害された！`);return}const f=["奈落","地獄","煉獄","花園","楽園"],p=f.indexOf(r.area);let v;if(o.endsWith("方向")){let m=p;o==="奈落方向"?m=Math.max(0,p-h):m=Math.min(f.length-1,p+h),v=f[m]}else v=o;i.timing==="ラピッド"?(r.area!==v&&Re(`→ [ラピッド] ${r.name}は「${v}」へ移動`),Gt(r.id,{area:v})):(r.area!==v&&Re(`→ ${r.name}は「${v}」へ移動を企図`),fe.moveQueue.push({characterId:r.id,targetArea:v,declarationId:i.id}))}function tT(s,e){const{performer:t}=e,n=s.buff?s.buff:s;switch(n.stat){case"maxActionValue":Gt(t.id,{baseActionValue:(t.baseActionValue||6)+n.value}),Re(`${t.name}：最大行動値 ${n.value>0?"+":""}${n.value}`);break;case"attackCheckBonus":t.activeBuffs.push({source:e.declaration.sourceManeuver.name,stat:n.stat,value:n.value,duration:n.duration}),Re(`→ ターン終了まで攻撃判定 +${n.value}`);break}}function nT(s,e){const t=e.target;if(!t)return;const n=s.value||0;n!==0&&(Gt(t.id,{actionValue:t.actionValue+n}),n<0?Re(`→ ${t.name} は転倒した！ (行動値${n})`):Re(`→ ${t.name} の行動値が ${n>0?"+":""}${n} された。`))}async function ap(s){const{performer:e}=s;return Re(`> ${e.name}の逃走判定`),new Promise(t=>{zt({command:"NC",showToast:!0,callback:n=>{n.includes("成功")?(Re(`→ 逃走成功！ ${e.name}は戦場から離脱`),Gt(e.id,{hasWithdrawn:!0})):Re(`→ 逃走失敗！ ${e.name}は戦場に残留`),t()}})})}const Zi="7.10.2203";window.onload=function(){document.title=`『永い後日談のネクロニカ』バトルパート支援ツール Ver.${Zi}`};document.addEventListener("DOMContentLoaded",async()=>{try{await wp(),_T(qs()),Ew(),mw(),await BE(),EE({hintMasterData:xc(),regretMasterData:_c(),takaramonoMasterData:yc(),memoryFragmentsData:Zo(),memoryFragmentsAlphaData:bh(),memoryFragmentsBetaData:Eh(),awakeningLocationsData:wh(),posthumousHistoryData:Th(),addLog:Re}),iT(),await new Promise(e=>setTimeout(e,2e3)),await lp(),await sT(),await rT(),gT()&&await oT(),aT(),document.getElementById("splash").classList.add("fade-out"),lT()}catch(s){console.error("アプリケーションの初期化に失敗しました。",s),document.body.innerHTML=`<div style="color: red; padding: 20px;">初期化エラー: ${s.stack}</div>`}});function iT(){ww(),la(),xn(),gw(),$c()}function sT(){return new Promise(s=>{const e=document.getElementById("welcomeModal"),t=document.getElementById("closeWelcomeModalBtn");if(!e||!t)return console.warn("Welcome modal elements not found, skipping."),s();e.classList.add("is-visible");const n=()=>{e.classList.remove("is-visible"),s()};t.onclick=n,e.onclick=i=>{i.target===e&&n()}})}function rT(){return new Promise(s=>{const e=`
        <div class="modal-header modal-header-sub">📢主な更新内容 Ver.${Zi}</div>
        <div class="modal-body welcome-modal-body">
            <p>◆ 📖待望の<b>セッション通信機能</b>を追加しました。（テスト段階）</p>
            <p>◆ <b>💛姉妹の関係</b>に<b>二人の関係フレーバー</b>を追加しました。</p>
            <p>◆ 📖リファレンスに<b>記憶のカケラ（α・β）・死後経歴・目覚めの場所</b>を追加しました。</p>
            <p>◆ リファレンスを刷新、<b>未練・たからもの・記憶のカケラ・暗示</b>を追加しました。</p>
            <p>◆ 最新バージョンへの<b>自動更新機能</b>を実装しました。</p>
            <p>◆ <b>📖全マニューバリファレンス</b>を実装しました。</p>
            <p>◆ <b>防御・妨害・追加ダメージ・転倒・移動妨害</b>を実装しました。</p>
            <p>◆ <b>セッションのファイルへの保存・ファイルから読込み</b>を実装しました。</p>
            <p>◆ <b>【✏️画像の変更】※透過png対応</b>：「🪪人形設計図」において<b>画像の変更</b>機能を追加しました。
            <p>◆ <b>状態の自動保存・復元機能</b>を実装しました。（自動保存ON/OFF対応）</p>
            <p>◆ <b>データの誤記を訂正</b>しました。
            <p>◆ <b>【保管所から読込み】【保管所で見る】【保管所から再読込み】</b>：キャラクターシート保管所との連携を強化しました。
            <p>◆ 3Dダイス<b>複数ダイス、D100に対応</b>しました。
            <p>◆ 試しに<b>ダイスが転がる</b>ようにしてみましたが、動作が怪しいです。
            <p>◆ ジャッジウィンドウで<b>適用されている支援、妨害を確認</b>できるようになりました。
            <p>◆ <b>支援</b>がダイスロールに適用できるようになりました。
            <p>◆ ユーザーが<b>画像を追加</b>できるようになりました。
            <p>◆ <b>【新着/IDリスト】</b>：キャラクターシート保管所の<b>キャラクターリスト表示</b>機能を追加しました。
            <p>◆ <b>マニューバリスト</b>を更新し、<b>表示機能を拡張</b>しました。
            <p>◆ その他、軽微なUI調整と不具合の修正を行いました。
        </div>
        `;Et({title:"更新情報",bodyHtml:e,footerHtml:'<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',closable:!1,onRender:(t,n)=>{t.querySelector("#okUpdateBtn").onclick=()=>{n(),s()}}})})}function oT(){return new Promise(s=>{Et({title:"セッションの復元",bodyHtml:"<p>保存された前回のセッションデータが見つかりました。<br>復元しますか？</p>",footerHtml:`
                <button id="restoreBtn" class="welcome-modal-close-btn">はい、復元する</button>
                <button id="discardBtn" class="welcome-modal-close-btn">いいえ、新規に開始</button>
            `,closable:!1,onRender:(e,t)=>{e.querySelector("#restoreBtn").onclick=async()=>{t(),await fT(qs())&&xn(),s()},e.querySelector("#discardBtn").onclick=()=>{confirm("自動保存されたデータが削除されます。本当に新規セッションを開始しますか？")&&(dp(),t(),s())}}})})}async function lp(){return new Promise(async s=>{if(!navigator.onLine){Et({title:"更新の確認",bodyHtml:"<p>ネットワークに接続されていません。<br>接続が良い環境でページを再読み込みすると、最新バージョンを確認できます。</p>",footerHtml:'<button id="okBtn" class="welcome-modal-close-btn">OK</button>',onRender:(e,t)=>{e.querySelector("#okBtn").onclick=()=>{t(),s()}}});return}try{const e=new AbortController,t=setTimeout(()=>e.abort(),2e3),n=await fetch(`/version.json?t=${new Date().getTime()}`,{signal:e.signal});if(clearTimeout(t),!n.ok)throw new Error("バージョンファイルを取得できませんでした。");const r=(await n.json()).version;r&&r!==Zi?Et({title:"新しいバージョンが利用可能です",bodyHtml:`
                        <p>アプリケーションが更新されました。</p>
                        <p>最新バージョン (v${r}) を読み込むために、ページをリロードしてください。</p>
                    `,footerHtml:'<button id="reloadBtn" class="welcome-modal-close-btn">リロードして更新</button>',onRender:(o,a)=>{o.querySelector("#reloadBtn").onclick=()=>{location.reload(!0)}}}):s()}catch(e){console.warn("バージョンチェックに失敗しました:",e.name,e.message),Et({title:"更新の確認",bodyHtml:"<p>サーバーへの接続がタイムアウトしました。<br>ネットワーク環境の良い場所で再度お試しいただくと、最新バージョンを確認できます。</p>",footerHtml:'<button id="okBtn" class="welcome-modal-close-btn">OK</button>',onRender:(t,n)=>{t.querySelector("#okBtn").onclick=()=>{n(),s()}}})}})}function aT(){Nw({app:Zi,"battle-logic":Ow,"battle-helper":zE,"character-manager":vT,"data-handler":Ep,"dice-roller":bE,"dice-3d":hE,"interaction-manager":pw,"menu-builder":XE,"ui-helpers":AE,"ui-manager":bw,"settings-manager":UE,"state-manager":cT,reference:nw,"character-converter":TE,"p2p-manager":PE,"personality-generator":VE})}function lT(){const s="nechronica-app-version",e=localStorage.getItem(s);e&&e!==Zi&&Qe(`バージョン ${Zi} に更新されました！`,3e3),localStorage.setItem(s,Zi)}const cT="2.5.1",Qs="nechronica-battle-session-v3",cp="nechronica-autosave-enabled";let Ds=!1,gc=!1;function uT(){return localStorage.removeItem("nechronica-battle-session-v2"),Ds=localStorage.getItem(cp)!=="false",console.log(`State Manager initialized. Auto-save is ${Ds?"ON":"OFF"}.`),Ds}function dT(s){Ds=s,localStorage.setItem(cp,s),s&&qc()}function ci(){gc||!Ds||qc()}function up(){const s=At(),e=ut(),t=!s.isStarted;let n={};try{const o=localStorage.getItem(Qs);o&&(n=JSON.parse(o))}catch(o){console.error("既存のセーブデータの解析に失敗:",o),n={characters:[]}}const i=new Map((n.characters||[]).map(o=>o.initialState&&[o.initialState.charId,o.initialState]).filter(Boolean)),r=e.map(o=>{const a=i.get(o.id)||{},l=o.regrets.filter(f=>f.isChecked),c=o.sheetId?"sheet":"template",d=o.sheetId||o.templateId;d||console.error(`保存エラー: キャラクター「${o.name}」に sourceId (sheetId or templateId) がありません。`,o);const u={charId:o.id,sourceType:c,id:d,type:o.type,displayName:o.displayName,img:o.img,regrets:l,area:a.area,stackCount:a.stackCount};t&&(u.area=o.area,u.stackCount=o.stackCount);const h={charId:o.id,area:o.area,stackCount:o.stackCount,actionValue:o.actionValue,isDestroyed:o.isDestroyed||!1,hasWithdrawn:o.hasWithdrawn||!1,damagedPartNames:Object.values(o.partsStatus||{}).flat().filter(f=>f.damaged).map(f=>f.name),usedManeuvers:Array.from(o.usedManeuvers||[])};return{initialState:u,currentState:h}});return{savedAt:new Date().toISOString(),turn:t?0:s.turn,characters:r}}function qc(s=!1){try{const e=up();localStorage.setItem(Qs,JSON.stringify(e)),s?Qe("ブラウザに保存しました",2e3):Ds&&console.log("Session auto-saved."),lp()}catch(e){console.error("状態の保存に失敗しました:",e)}}function hT(){try{const s=up(),e=JSON.stringify(s,null,2),t=new Blob([e],{type:"application/json"}),n=URL.createObjectURL(t),i=document.createElement("a");i.href=n;const r=new Date,a=`nechronica-session-${`${r.getFullYear()}${(r.getMonth()+1).toString().padStart(2,"0")}${r.getDate().toString().padStart(2,"0")}-${r.getHours().toString().padStart(2,"0")}${r.getMinutes().toString().padStart(2,"0")}`}.json`,l=prompt("ファイル名を入力してください:",a);l&&(i.download=l.endsWith(".json")?l:`${l}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),Qe(`「${i.download}」を保存しました。`,2e3)),URL.revokeObjectURL(n)}catch(s){console.error("ファイルへの保存に失敗しました:",s),alert("ファイルへの保存に失敗しました。")}}async function fT(s){const e=localStorage.getItem(Qs);if(!e)return!1;try{const t=JSON.parse(e);return await pT(t,s)}catch(t){return console.error("localStorageからの状態復元に失敗しました:",t),!1}}async function pT(s,e){const t=e||qs();gc=!0,Fw("セッションデータを準備中...");try{const n=s.characters;if(!n)throw new Error("セーブデータ形式が不正です。");const i=s.turn||0,r=i===0;vp(),Xc();const o=n.length;let a=0;for(const l of n){const c=!!l.initialState,d=c?l.initialState:l,u=c?l.currentState:l,h=d.displayName||d.id;hl(a,o,h);let f;if(d.sourceType==="sheet"){const v=await hp(d.id);f=ra(v),f.sheetId=d.id}else{const v=t[d.id];if(!v)throw new Error(`テンプレートID: ${d.id} が見つかりません`);f=JSON.parse(JSON.stringify(v)),f.templateId=d.id}const p=Kc(f,d.type);if(Gt(p.id,{displayName:d.displayName||p.originalName,img:d.img,regrets:d.regrets}),r)Gt(p.id,{area:d.area,stackCount:d.stackCount});else{Gt(p.id,{area:u.area,stackCount:u.stackCount,actionValue:u.actionValue,isDestroyed:u.isDestroyed,hasWithdrawn:u.hasWithdrawn,usedManeuvers:new Set(u.usedManeuvers||[])});const v=new Set(u.damagedPartNames);Object.values(p.partsStatus).flat().forEach(m=>{m.damaged=v.has(m.name)}),er(p)}a++,hl(a,o,p.name),d.sourceType==="sheet"?await new Promise(v=>setTimeout(v,200)):await new Promise(v=>setTimeout(v,50))}return r||Jw(i,ut()),$c(),hl(o,o,"読み込み完了"),await new Promise(l=>setTimeout(l,200)),Qe("セッションを復元しました。",2e3),!0}catch(n){return console.error("状態の復元に失敗しました:",n),alert(`状態の復元に失敗しました:
${n.message}`),!1}finally{gc=!1,Uw()}}async function mT(){const s=localStorage.getItem(Qs);if(!s){console.warn("保存されたデータが見つかりません。");return}try{const e=JSON.parse(s);vp(),Xc();const t=e.characters||[];for(const n of t){const{initialState:i}=n;let r;if(i.sourceType==="sheet"){const a=await hp(i.id);r=ra(a),r.sheetId=i.id}else r=JSON.parse(JSON.stringify(qs()[i.id])),r.templateId=i.id;const o=Kc(r,i.type);Gt(o.id,{area:i.area,stackCount:i.stackCount,img:i.img,regrets:i.regrets,displayName:i.displayName||o.originalName})}}catch(e){console.error("初期状態への復元に失敗しました:",e)}}function gT(){return localStorage.getItem(Qs)!==null}function dp(){localStorage.removeItem(Qs),Qe("保存データを削除しました。",2e3)}function hp(s){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=r=>{document.head.removeChild(i),delete window[n],e(r)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${s}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}const vT="1.9.17";let fp={},Dt=[],pp=1;function er(s){let e=0;[...s.skills||[],...Object.values(s.partsStatus||{}).flat().map(n=>n.name)].forEach(n=>{const i=Ft(n);if(!i||!i.effects||i.effects.length===0)return;let r=!1;if(s.partsStatus){const o=Object.values(s.partsStatus).flat().find(a=>a.name===n);o&&(r=o.damaged)}for(const o of i.effects)o.ref==="APPLY_BUFF"&&o.params.stat==="maxActionValue"?(isNaN(r)||!r)&&(e+=o.params.value||0):o.ref==="MODIFY_MAX_ACTION_VALUE_ON_DAMAGE"&&r&&(e+=o.params.value||0)}),s.maxActionValue=(s.baseActionValue||6)+e}function mp(s,e){const t=JSON.parse(JSON.stringify(s));t.id=`char_${pp++}`,t.type=e,t.originalName=s.name||"名称未設定",t.displayName=s.name||"名称未設定",Object.defineProperty(t,"name",{get(){return this.displayName},set(i){this.displayName=i}}),t.treasures=s.treasures||[],t.partsStatus={};let n=0;return t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(i=>{Array.isArray(t.parts[i])&&(t.partsStatus[i]=t.parts[i].map(r=>({id:`${t.id}_part_${n++}`,name:r,damaged:!1})))}),t.madnessPoints={},t.statusEffects=[],t.activeBuffs=[],t.isMentallyBroken=!1,t.isDestroyed=!1,t.hasWithdrawn=!1,t.regrets=s.regrets||[],t.stackCount=s.stackCount||1,t.hasActedThisCount=!1,t.spineBonus=0,t.lastUsedSpineCount=-1,t}function jc(){const s=Dt.filter(n=>n.skills&&n.skills.includes("合流"));if(s.length<2)return;const e=new Map;s.forEach(n=>{const i=`${n.name}-${n.area}-${n.type}`;e.has(i)||e.set(i,[]),e.get(i).push(n)});let t=!1;e.forEach(n=>{if(n.length<2)return;const i=n[0];for(let r=1;r<n.length;r++){const o=n[r];i.stackCount+=o.stackCount;const a=Dt.findIndex(l=>l.id===o.id);a!==-1&&Dt.splice(a,1)}t=!0}),t&&console.log("レギオンが合流しました。")}function Yc(s){s.usedManeuvers=new Set,s.turnLimitedManeuvers=new Set,[...s.skills||[],...Object.values(s.partsStatus||{}).flat().map(t=>t.name)].forEach(t=>{const n=Ft(t);if(!n)return;let i=!1;n.effects?.some(o=>o.params&&o.params.limit_per_turn==="none")?i=!1:["ジャッジ","ダメージ","ラピッド"].includes(n.timing)&&(i=!0),i&&s.turnLimitedManeuvers.add(t)})}function _T(s){fp=s,console.log("Character Manager initialized.")}function ut(){return Dt}function ct(s){return Dt.find(e=>e.id===s)}function yT(s,e,t){const n=fp[s];if(!n){console.error(`テンプレートIDが見つかりません: ${s}`);return}const i=n.category==="レギオン"?5:1;let r="";for(let o=0;o<i;o++){const a=JSON.parse(JSON.stringify(n));a.templateId=s;const l=mp(a,e);l&&(l.area=l.initialArea||(e==="pc"?"煉獄":"奈落"),e==="pc"&&l.treasures&&l.treasures.length>0&&(l.regrets.some(c=>c.isForTreasure)||l.regrets.push({id:`treasure_${l.id}`,name:"たからものへの依存",points:3,isForTreasure:!0,targetName:"たからもの",regretName:"依存"})),er(l),l.actionValue=l.maxActionValue,Yc(l),Dt.push(l),r=l.name)}r&&console.log(`${r} (${e}) を${i>1?i+"体":""}戦場に追加しました。`),jc(),ci()}function Kc(s,e){const t=mp(s,e);return t.area=s.area||s.initialArea||(e==="pc"?"煉獄":"奈落"),e==="pc"&&t.treasures&&t.treasures.length>0&&(t.regrets.some(n=>n.isForTreasure)||t.regrets.push({id:`treasure_${t.id}`,name:"たからものへの依存",points:3,isForTreasure:!0,targetName:"たからもの",regretName:"依存"})),er(t),t.actionValue=t.maxActionValue,Yc(t),Dt.push(t),ci(),t}function xT(s){const e=ct(s);if(!e)return!1;if(e.stackCount>1)return e.stackCount--,ci(),!0;const t=Dt.findIndex(n=>n.id===s);return t!==-1?(Dt.splice(t,1),ci(),!0):!1}function uh(s,e){const t=Dt.findIndex(c=>c.id===s);if(t===-1)return;const n=Dt[t],i=Dt.filter(c=>c.type===n.type),r=i.findIndex(c=>c.id===s);let o;if(e==="left"){if(r===0)return;o=r-1}else{if(r===i.length-1)return;o=r+1}Dt.splice(t,1);const a=i[o].id,l=Dt.findIndex(c=>c.id===a);e==="left"?Dt.splice(l,0,n):Dt.splice(l+1,0,n)}function Gt(s,e){const t=ct(s);t&&(e.name&&(e.displayName=e.name,delete e.name),Object.assign(t,e),(t.isDestroyed||t.hasWithdrawn)&&(t.actionValue=0,t.isDestroyed&&t.partsStatus&&Object.values(t.partsStatus).flat().forEach(n=>n.damaged=!0)),er(t),jc())}function gp(s,e,t=1){const n=ct(s);if(n){if(n.category==="レギオン")return n.stackCount-=t,n.stackCount<=0?(n.isDestroyed=!0,n.actionValue=0,!0):!1;for(const i in n.partsStatus){const r=n.partsStatus[i].find(o=>o.id===e);if(r)return r.damaged?void 0:(r.damaged=!0,er(n),!1)}}}function MT(s,e){const t=ct(s);if(!t)return;const n=t.regrets.find(o=>o.id===e);n&&n.points<4&&n.points++,t.regrets&&t.regrets.length>0&&t.regrets.every(o=>o.points>=4)&&(t.isMentallyBroken=!0,console.log(`★★★ ${t.name} は精神崩壊しました。 ★★★`))}function ST(){Dt.forEach(s=>{if(s.isDestroyed||s.hasWithdrawn){s.actionValue=0;return}s.actionValue+=s.maxActionValue,s.hasActedThisCount=!1,s.usedManeuvers.clear(),s.spineBonus=0,s.lastUsedSpineCount=-1}),jc(),console.log("新しいターンが開始され、全キャラクターの行動値が更新されました。")}function bT(s){s.forEach(e=>{const t=ct(e.characterId);t&&(t.area=e.targetArea)}),console.log("予約された移動を一括で適用しました。")}function ET(s,e){const t=ct(s);if(!t)return null;const n={id:t.id,sheetId:t.sheetId,type:t.type,displayName:t.displayName,img:t.img,area:t.area,actionValue:t.actionValue,isMentallyBroken:t.isMentallyBroken,hasActedThisCount:t.hasActedThisCount,isDestroyed:!1,hasWithdrawn:!1},i=t.originalName;Object.keys(t).forEach(o=>delete t[o]),Object.assign(t,e),t.originalName=t.name,(n.displayName===i||!n.displayName)&&(n.displayName=t.name),Object.assign(t,n),t.partsStatus={};let r=0;if(t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(o=>{Array.isArray(t.parts[o])&&(t.partsStatus[o]=t.parts[o].map(a=>({id:`${t.id}_part_${r++}`,name:a,damaged:!1})))}),t.type==="pc"&&t.treasure)for(const o in t.partsStatus){const a=t.partsStatus[o].find(l=>l.name===t.treasure);if(a){a.id=`${t.id}_part_treasure`;break}}return er(t),t.actionValue=Math.min(t.actionValue,t.maxActionValue),Yc(t),wT(),console.log(`キャラクター「${t.name}」が保管所のデータで更新されました。`),t}function vp(){Dt=[],pp=1,console.log("All characters cleared.")}function vc(s,e){const t=ct(s);t&&(t.activeBuffs||(t.activeBuffs=[]),t.activeBuffs.push(e))}function dh(s,e){const t=ct(s);t&&t.activeBuffs&&(t.activeBuffs=t.activeBuffs.filter(n=>n.duration!==e))}function wT(){const s=Dt.filter(e=>e.type==="pc");s.length!==0&&(s.flatMap(e=>[e.name,e.displayName]),s.forEach(e=>{const n=s.filter(r=>r.id!==e.id).flatMap(r=>[r.name,r.displayName]),i=new Set;e.regrets.forEach(r=>{r.isForTreasure?r.isChecked=!0:n.includes(r.targetName)?(r.isChecked=!0,i.add(r.targetName)):r.isChecked=!1})}),console.log("全姉妹の未練データを再検証しました。"))}function ua(s){if(!s||s.type!=="pc"||!s.regrets)return;const t=ut().filter(i=>i.type==="pc").filter(i=>i.id!==s.id),n=t.flatMap(i=>[i.name,i.displayName]);s.regrets=s.regrets.filter(i=>!i.isUnset),s.regrets.forEach(i=>{i.isForTreasure||n.includes(i.targetName)?i.isChecked=!0:i.isChecked=!1}),t.forEach(i=>{s.regrets.some(o=>o.targetName===i.name||o.targetName===i.displayName)||s.regrets.push({name:`${i.displayName}への未練（未設定）`,points:3,isChecked:!0,isUnset:!0,targetName:i.displayName,regretName:"未練（未設定）"})})}function TT(s,e,t){const n=ct(s);if(!n)return;n.regrets=n.regrets.filter(r=>!(r.isUnset&&r.targetName===e));const i=n.regrets.find(r=>r.targetName===e&&!r.isForTreasure);i?(i.name=`${e}への${t.name}`,i.regretName=t.name):n.regrets.push({id:`regret_${n.id}_to_${e}_${Date.now()}`,name:`${e}への${t.name}`,points:3,isForTreasure:!1,isChecked:!0,targetName:e,regretName:t.name}),ci()}
