const Sf=Object.freeze(Object.defineProperty({__proto__:null,get addCharacterFromObject(){return Ob},get addCharacterFromTemplate(){return lf},get addMadnessPoint(){return uf},get applyQueuedMoves(){return hf},get clearAllCharacters(){return mf},get createCharacterForLoad(){return pf},get damagePart(){return xc},get getCharacterById(){return an},get getCharacters(){return Vt},get initialize(){return af},get moveCharacter(){return Xl},get recalculateMaxActionValue(){return Mi},get removeCharacter(){return cf},get startNewTurn(){return df},get updateCharacter(){return On},get updateCharacterFromReload(){return ff},get version(){return sf}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Ef="1.4.7";let er={},lr={},wd={},Td={},Ad={},Cd={},Rd={},Pd={},Id={};async function bf(){try{const e=["positions.json","classes.json","basic_parts.json","armed_parts.json","mutant_parts.json","custom_parts.json","tegoma_skills.json","tegoma_parts.json","tegoma_parts0.json"].map(h=>fetch(`/data/maneuvers/${h}`).then(u=>u.json())),[t,n,i,s,o,a,l,...c]=await Promise.all([fetch("/data/hint.json"),fetch("/data/regret.json"),fetch("/data/takaramono.json"),fetch("/data/memory_fragments.json"),fetch("/data/undead.json"),fetch("/data/core-data.json"),fetch("/data/effects_db.json"),...e]);er=c.reduce((h,u)=>({...h,...u}),{}),[Id,wd,Td,Ad,Rd,Pd,Cd]=await Promise.all([t.json(),n.json(),i.json(),s.json(),o.json(),a.json(),l.json()]),lr={};for(const h in er){const u=er[h];u&&u.name&&(lr[u.name]={id:h,...u})}console.log("Data handler initialized successfully!")}catch(r){throw console.error("Error in data handler initialization:",r),r}}function wf(){return er}function rn(r){return lr[r]}function ql(){return wd}function Tf(){return Td}function Af(){return Ad}function Do(){return Rd}function No(){return Pd}function Cf(r){return Cd[r]}function Ld(){return Id}function Rf(){const r=Do(),e=new Set;for(const t in r)r[t]&&r[t].img&&e.add(r[t].img);return[...e]}function Pf(r){if(!r||!r.name){console.warn("追加しようとしたマニューバデータが無効です:",r);return}if(lr[r.name])return;const e=`CSTM_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;r.id=e,er[e]=r,lr[r.name]=r,console.log(`カスタムマニューバ「${r.name}」を動的に追加しました。`)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="180",If=0,Ac=1,Lf=2,Dd=1,Df=2,Zn=3,gi=0,Jt=1,Jn=2,pi=0,xs=1,Cc=2,Rc=3,Pc=4,Nf=5,Fi=100,Uf=101,Ff=102,Bf=103,Of=104,kf=200,zf=201,Vf=202,Hf=203,ja=204,Ya=205,Gf=206,Wf=207,$f=208,Xf=209,qf=210,jf=211,Yf=212,Kf=213,Zf=214,Ka=0,Za=1,Ja=2,Ts=3,Qa=4,el=5,tl=6,nl=7,Uo=0,Jf=1,Qf=2,mi=0,ep=1,tp=2,np=3,ip=4,sp=5,rp=6,op=7,Ic="attached",ap="detached",Nd=300,As=301,Cs=302,Mo=303,il=304,Fo=306,cr=1e3,Qn=1001,sl=1002,on=1003,lp=1004,Ir=1005,Dn=1006,Zo=1007,ki=1008,Bn=1009,Ud=1010,Fd=1011,ur=1012,Yl=1013,Gi=1014,Nn=1015,Er=1016,Kl=1017,Zl=1018,dr=1020,Bd=35902,Od=35899,kd=1021,zd=1022,fn=1023,hr=1026,fr=1027,Vd=1028,Jl=1029,Hd=1030,Ql=1031,ec=1033,mo=33776,go=33777,vo=33778,_o=33779,rl=35840,ol=35841,al=35842,ll=35843,cl=36196,ul=37492,dl=37496,hl=37808,fl=37809,pl=37810,ml=37811,gl=37812,vl=37813,_l=37814,yl=37815,xl=37816,Ml=37817,Sl=37818,El=37819,bl=37820,wl=37821,Tl=36492,Al=36494,Cl=36495,Rl=36283,Pl=36284,Il=36285,Ll=36286,So=2300,Dl=2301,Jo=2302,Lc=2400,Dc=2401,Nc=2402,cp=2500,up=3200,dp=3201,Bo=0,hp=1,di="",ct="srgb",Rs="srgb-linear",Eo="linear",ot="srgb",Yi=7680,Uc=519,fp=512,pp=513,mp=514,Gd=515,gp=516,vp=517,_p=518,yp=519,Fc=35044,Bc="300 es",Un=2e3,bo=2001;class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oc=1234567;const tr=Math.PI/180,Ps=180/Math.PI;function yi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function tc(r,e){return(r%e+e)%e}function xp(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Mp(r,e,t){return r!==e?(t-r)/(e-r):0}function nr(r,e,t){return(1-t)*r+t*e}function Sp(r,e,t,n){return nr(r,e,1-Math.exp(-t*n))}function Ep(r,e=1){return e-Math.abs(tc(r,e*2)-e)}function bp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function wp(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Tp(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ap(r,e){return r+Math.random()*(e-r)}function Cp(r){return r*(.5-Math.random())}function Rp(r){r!==void 0&&(Oc=r);let e=Oc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Pp(r){return r*tr}function Ip(r){return r*Ps}function Lp(r){return(r&r-1)===0&&r!==0}function Dp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Np(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Up(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),f=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Nt={DEG2RAD:tr,RAD2DEG:Ps,generateUUID:yi,clamp:je,euclideanModulo:tc,mapLinear:xp,inverseLerp:Mp,lerp:nr,damp:Sp,pingpong:Ep,smoothstep:bp,smootherstep:wp,randInt:Tp,randFloat:Ap,randFloatSpread:Cp,seededRandom:Rp,degToRad:Pp,radToDeg:Ip,isPowerOfTwo:Lp,ceilPowerOfTwo:Dp,floorPowerOfTwo:Np,setQuaternionFromProperEuler:Up,normalize:Gt,denormalize:fs};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Yt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==m){let p=1-a;const g=l*d+c*f+h*m+u*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const b=Math.sqrt(x),w=Math.atan2(b,g*_);p=Math.sin(p*w)/b,a=Math.sin(a*w)/b}const y=a*_;if(l=l*p+d*y,c=c*p+f*y,h=h*p+m*y,u=u*p+v*y,p===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new U,kc=new Yt;class ke{constructor(e,t,n,i,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],p=i[3],g=i[6],_=i[1],x=i[4],y=i[7],b=i[2],w=i[5],C=i[8];return s[0]=o*v+a*_+l*b,s[3]=o*p+a*x+l*w,s[6]=o*g+a*y+l*C,s[1]=c*v+h*_+u*b,s[4]=c*p+h*x+u*w,s[7]=c*g+h*y+u*C,s[2]=d*v+f*_+m*b,s[5]=d*p+f*x+m*w,s[8]=d*g+f*y+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-a*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new ke;function Wd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Fp(){const r=pr("canvas");return r.style.display="block",r}const zc={};function mr(r){r in zc||(zc[r]=!0,console.warn(r))}function Bp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Vc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Op(){const r={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===di?Eo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Rs]:{primaries:e,whitePoint:n,transfer:Eo,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ct},outputColorSpaceConfig:{drawingBufferColorSpace:ct}},[ct]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ct}}}),r}const $e=Op();function ti(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ms(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ki;class kp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=pr("canvas")),Ki.width=e.width,Ki.height=e.height;const i=Ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zp=0;class nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ta(i[o].image)):s.push(ta(i[o]))}else s=ta(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ta(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?kp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vp=0;const na=new U;class Ut extends Us{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Qn,i=Qn,s=Dn,o=ki,a=fn,l=Bn,c=Ut.DEFAULT_ANISOTROPY,h=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=yi(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(na).x}get height(){return this.source.getSize(na).y}get depth(){return this.source.getSize(na).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cr:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cr:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Nd;Ut.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,i=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(f+1)/2,b=(g+1)/2,w=(h+d)/4,C=(u+v)/4,I=(m+p)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=C/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=I/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=I/s),this.set(n,i,s,t),this}let _=Math.sqrt((p-m)*(p-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hp extends Us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Ut(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Hp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $d extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gp extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),Dr.subVectors(this.max,Vs),Zi.subVectors(e.a,Vs),Ji.subVectors(e.b,Vs),Qi.subVectors(e.c,Vs),ii.subVectors(Ji,Zi),si.subVectors(Qi,Ji),bi.subVectors(Zi,Qi);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-bi.z,bi.y,ii.z,0,-ii.x,si.z,0,-si.x,bi.z,0,-bi.x,-ii.y,ii.x,0,-si.y,si.x,0,-bi.y,bi.x,0];return!ia(t,Zi,Ji,Qi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Zi,Ji,Qi,Dr))?!1:(Nr.crossVectors(ii,si),t=[Nr.x,Nr.y,Nr.z],ia(t,Zi,Ji,Qi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const zn=[new U,new U,new U,new U,new U,new U,new U,new U],gn=new U,Lr=new qi,Zi=new U,Ji=new U,Qi=new U,ii=new U,si=new U,bi=new U,Vs=new U,Dr=new U,Nr=new U,wi=new U;function ia(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){wi.fromArray(r,s);const a=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Wp=new qi,Hs=new U,sa=new U;class Fs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hs.subVectors(e,this.center);const t=Hs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hs.copy(e.center).add(sa)),this.expandByPoint(Hs.copy(e.center).sub(sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new U,ra=new U,Ur=new U,ri=new U,oa=new U,Fr=new U,aa=new U;let ic=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ra.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(ra);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ur),a=ri.dot(this.direction),l=-ri.dot(Ur),c=ri.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ra).addScaledVector(Ur,d),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,i,s){oa.subVectors(t,e),Fr.subVectors(n,e),aa.crossVectors(oa,Fr);let o=this.direction.dot(aa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ri.subVectors(this.origin,e);const l=a*this.direction.dot(Fr.crossVectors(ri,Fr));if(l<0)return null;const c=a*this.direction.dot(oa.cross(ri));if(c<0||l+c>o)return null;const h=-a*ri.dot(aa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ce{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,m,v,p){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,v,p)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,m,v,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),o=1/es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d+v*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,v=c*u;t[0]=d-v*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Xp)}lookAt(e,t,n){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),oi.crossVectors(n,tn),oi.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),oi.crossVectors(n,tn)),oi.normalize(),Br.crossVectors(tn,oi),i[0]=oi.x,i[4]=Br.x,i[8]=tn.x,i[1]=oi.y,i[5]=Br.y,i[9]=tn.y,i[2]=oi.z,i[6]=Br.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],x=n[7],y=n[11],b=n[15],w=i[0],C=i[4],I=i[8],T=i[12],E=i[1],R=i[5],O=i[9],D=i[13],k=i[2],B=i[6],N=i[10],X=i[14],V=i[3],j=i[7],re=i[11],ce=i[15];return s[0]=o*w+a*E+l*k+c*V,s[4]=o*C+a*R+l*B+c*j,s[8]=o*I+a*O+l*N+c*re,s[12]=o*T+a*D+l*X+c*ce,s[1]=h*w+u*E+d*k+f*V,s[5]=h*C+u*R+d*B+f*j,s[9]=h*I+u*O+d*N+f*re,s[13]=h*T+u*D+d*X+f*ce,s[2]=m*w+v*E+p*k+g*V,s[6]=m*C+v*R+p*B+g*j,s[10]=m*I+v*O+p*N+g*re,s[14]=m*T+v*D+p*X+g*ce,s[3]=_*w+x*E+y*k+b*V,s[7]=_*C+x*R+y*B+b*j,s[11]=_*I+x*O+y*N+b*re,s[15]=_*T+x*D+y*X+b*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],p=e[11],g=e[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+t*l*f-t*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+t*c*u-t*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+g*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],p=e[14],g=e[15],_=u*p*c-v*d*c+v*l*f-a*p*f-u*l*g+a*d*g,x=m*d*c-h*p*c-m*l*f+o*p*f+h*l*g-o*d*g,y=h*v*c-m*u*c+m*a*f-o*v*f-h*a*g+o*u*g,b=m*u*l-h*v*l-m*a*d+o*v*d+h*a*p-o*u*p,w=t*_+n*x+i*y+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(v*d*s-u*p*s-v*i*f+n*p*f+u*i*g-n*d*g)*C,e[2]=(a*p*s-v*l*s+v*i*c-n*p*c-a*i*g+n*l*g)*C,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*C,e[4]=x*C,e[5]=(h*p*s-m*d*s+m*i*f-t*p*f-h*i*g+t*d*g)*C,e[6]=(m*l*s-o*p*s-m*i*c+t*p*c+o*i*g-t*l*g)*C,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*C,e[8]=y*C,e[9]=(m*u*s-h*v*s-m*n*f+t*v*f+h*n*g-t*u*g)*C,e[10]=(o*v*s-m*a*s+m*n*c-t*v*c-o*n*g+t*a*g)*C,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=b*C,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*p+t*u*p)*C,e[14]=(m*a*i-o*v*i-m*n*l+t*v*l+o*n*p-t*a*p)*C,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,v=o*h,p=o*u,g=a*u,_=l*c,x=l*h,y=l*u,b=n.x,w=n.y,C=n.z;return i[0]=(1-(v+g))*b,i[1]=(f+y)*b,i[2]=(m-x)*b,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+g))*w,i[6]=(p+_)*w,i[7]=0,i[8]=(m+x)*C,i[9]=(p-_)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=es.set(i[0],i[1],i[2]).length();const o=es.set(i[4],i[5],i[6]).length(),a=es.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);const c=1/s,h=1/o,u=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,t.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Un,l=!1){const c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,v;if(l)m=s/(o-s),v=o*s/(o-s);else if(a===Un)m=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===bo)m=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Un,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,v;if(l)m=1/(o-s),v=o/(o-s);else if(a===Un)m=-2/(o-s),v=-(o+s)/(o-s);else if(a===bo)m=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const es=new U,vn=new Ce,$p=new U(0,0,0),Xp=new U(1,1,1),oi=new U,Br=new U,tn=new U,Gc=new Ce,Wc=new Yt;class Rt{constructor(e=0,t=0,n=0,i=Rt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rt.DEFAULT_ORDER="XYZ";class Xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qp=0;const $c=new U,ts=new Yt,Hn=new Ce,Or=new U,Gs=new U,jp=new U,Yp=new Yt,Xc=new U(1,0,0),qc=new U(0,1,0),jc=new U(0,0,1),Yc={type:"added"},Kp={type:"removed"},ns={type:"childadded",child:null},la={type:"childremoved",child:null};class gt extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new U,t=new Rt,n=new Yt,i=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new ke}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,t){return ts.setFromAxisAngle(e,t),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(qc,e)}rotateZ(e){return this.rotateOnAxis(jc,e)}translateOnAxis(e,t){return $c.copy(e).applyQuaternion(this.quaternion),this.position.add($c.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(qc,e)}translateZ(e){return this.translateOnAxis(jc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Or.copy(e):Or.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Gs,Or,this.up):Hn.lookAt(Or,Gs,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ts.setFromRotationMatrix(Hn),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yc),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kp),la.child=e,this.dispatchEvent(la),la.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yc),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Yp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new U(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new U,Gn=new U,ca=new U,Wn=new U,is=new U,ss=new U,Kc=new U,ua=new U,da=new U,ha=new U,fa=new Je,pa=new Je,ma=new Je;class Sn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),Gn.subVectors(n,t),ca.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Gn),l=_n.dot(ca),c=Gn.dot(Gn),h=Gn.dot(ca),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return fa.setScalar(0),pa.setScalar(0),ma.setScalar(0),fa.fromBufferAttribute(e,t),pa.fromBufferAttribute(e,n),ma.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(fa,s.x),o.addScaledVector(pa,s.y),o.addScaledVector(ma,s.z),o}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Gn.subVectors(e,t),_n.cross(Gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;is.subVectors(i,n),ss.subVectors(s,n),ua.subVectors(e,n);const l=is.dot(ua),c=ss.dot(ua);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,i);const h=is.dot(da),u=ss.dot(da);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(is,o);ha.subVectors(e,s);const f=is.dot(ha),m=ss.dot(ha);if(m>=0&&f<=m)return t.copy(s);const v=f*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ss,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return Kc.subVectors(s,i),a=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Kc,a);const g=1/(p+v+d);return o=v*g,a=d*g,t.copy(n).addScaledVector(is,o).addScaledVector(ss,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},kr={h:0,s:0,l:0};function ga(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=tc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ga(o,s,e+1/3),this.g=ga(o,s,e),this.b=ga(o,s,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return $e.workingToColorSpace(kt.copy(this),e),Math.round(je(kt.r*255,0,255))*65536+Math.round(je(kt.g*255,0,255))*256+Math.round(je(kt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,s=kt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=ct){$e.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(kr);const n=nr(ai.h,kr.h,t),i=nr(ai.s,kr.s,t),s=nr(ai.l,kr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Fe;Fe.NAMES=qd;let Zp=0,xi=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=xs,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ya,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==Fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class jd extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new U,zr=new Ke;let Jp=0;class Fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fc&&(e.usage=this.usage),e}}class sc extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zt extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qp=0;const un=new Ce,va=new gt,rs=new U,nn=new qi,Ws=new qi,Dt=new U;class wn extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?Yd:sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(nn.min,Ws.min),nn.expandByPoint(Dt),Dt.addVectors(nn.max,Ws.max),nn.expandByPoint(Dt)):(nn.expandByPoint(Ws.min),nn.expandByPoint(Ws.max))}nn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),Dt.add(rs)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new U,l[I]=new U;const c=new U,h=new U,u=new U,d=new Ke,f=new Ke,m=new Ke,v=new U,p=new U;function g(I,T,E){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,E),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),m.fromBufferAttribute(s,E),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[I].add(v),a[T].add(v),a[E].add(v),l[I].add(p),l[T].add(p),l[E].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,T=_.length;I<T;++I){const E=_[I],R=E.start,O=E.count;for(let D=R,k=R+O;D<k;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new U,y=new U,b=new U,w=new U;function C(I){b.fromBufferAttribute(i,I),w.copy(b);const T=a[I];x.copy(T),x.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(w,T);const R=y.dot(l[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,R)}for(let I=0,T=_.length;I<T;++I){const E=_[I],R=E.start,O=E.count;for(let D=R,k=R+O;D<k;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)d[m++]=c[f++]}return new Fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Ce,Ti=new ic,Vr=new Fs,Jc=new U,Hr=new U,Gr=new U,Wr=new U,_a=new U,$r=new U,Qc=new U,Xr=new U;class En extends gt{constructor(e=new wn,t=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){$r.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(_a.fromBufferAttribute(u,e),o?$r.addScaledVector(_a,h):$r.addScaledVector(_a.sub(t),h))}t.add($r)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Vr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Vr,Jc)===null||Ti.origin.distanceToSquared(Jc)>(e.far-e.near)**2))&&(Zc.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,b=x;y<b;y+=3){const w=a.getX(y),C=a.getX(y+1),I=a.getX(y+2);i=qr(this,g,e,n,c,h,u,w,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=qr(this,o,e,n,c,h,u,_,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],g=o[p.materialIndex],_=Math.max(p.start,f.start),x=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=_,b=x;y<b;y+=3){const w=y,C=y+1,I=y+2;i=qr(this,g,e,n,c,h,u,w,C,I),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let p=m,g=v;p<g;p+=3){const _=p,x=p+1,y=p+2;i=qr(this,o,e,n,c,h,u,_,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function em(r,e,t,n,i,s,o,a){let l;if(e.side===Jt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===gi,a),l===null)return null;Xr.copy(a),Xr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:r}}function qr(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Hr),r.getVertexPosition(l,Gr),r.getVertexPosition(c,Wr);const h=em(r,e,t,n,Hr,Gr,Wr,Qc);if(h){const u=new U;Sn.getBarycoord(Qc,Hr,Gr,Wr,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,a,l,c,u,new Ke)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,a,l,c,u,new Ke)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Sn.getNormal(Hr,Gr,Wr,d.normal),h.face=d,h.barycoord=u}return h}class br extends wn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function m(v,p,g,_,x,y,b,w,C,I,T){const E=y/C,R=b/I,O=y/2,D=b/2,k=w/2,B=C+1,N=I+1;let X=0,V=0;const j=new U;for(let re=0;re<N;re++){const ce=re*R-D;for(let ne=0;ne<B;ne++){const Ve=ne*E-O;j[v]=Ve*_,j[p]=ce*x,j[g]=k,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[g]=w>0?1:-1,h.push(j.x,j.y,j.z),u.push(ne/C),u.push(1-re/I),X+=1}}for(let re=0;re<I;re++)for(let ce=0;ce<C;ce++){const ne=d+ce+B*re,Ve=d+ce+B*(re+1),Qe=d+(ce+1)+B*(re+1),He=d+(ce+1)+B*re;l.push(ne,Ve,He),l.push(Ve,Qe,He),V+=6}a.addGroup(f,V,T),f+=V,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(r){const e={};for(let t=0;t<r.length;t++){const n=Is(r[t]);for(const i in n)e[i]=n[i]}return e}function tm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Kd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const nm={clone:Is,merge:Wt};var im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=im,this.fragmentShader=sm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Zd extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new U,eu=new Ke,tu=new Ke;class Xt extends Zd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const os=-90,as=1;class rm extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xt(os,as,e,t);i.layers=this.layers,this.add(i);const s=new Xt(os,as,e,t);s.layers=this.layers,this.add(s);const o=new Xt(os,as,e,t);o.layers=this.layers,this.add(o);const a=new Xt(os,as,e,t);a.layers=this.layers,this.add(a);const l=new Xt(os,as,e,t);l.layers=this.layers,this.add(l);const c=new Xt(os,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Jd extends Ut{constructor(e=[],t=As,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class om extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new br(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:pi});s.uniforms.tEquirect.value=t;const o=new En(i,s),a=t.minFilter;return t.minFilter===ki&&(t.minFilter=Dn),new rm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ms extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const am={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(am)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rt,this.environmentIntensity=1,this.environmentRotation=new Rt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const nu=new U,iu=new Je,su=new Je,cm=new U,ru=new Ce,jr=new U,xa=new Fs,ou=new Ce,Ma=new ic;class um extends En{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ic,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingBox.expandByPoint(jr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,jr),this.boundingSphere.expandByPoint(jr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1&&(ou.copy(i).invert(),Ma.copy(e.ray).applyMatrix4(ou),!(this.boundingBox!==null&&Ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ma)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;iu.fromBufferAttribute(i.attributes.skinIndex,e),su.fromBufferAttribute(i.attributes.skinWeight,e),nu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=su.getComponent(s);if(o!==0){const a=iu.getComponent(s);ru.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(cm.copy(nu).applyMatrix4(ru),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nl extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dm extends Ut{constructor(e=null,t=1,n=1,i,s,o,a,l,c=on,h=on,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const au=new Ce,hm=new Ce;class rc{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:hm;au.multiplyMatrices(a,t[s]),au.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new rc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dm(t,e,e,fn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Nl),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}const Sa=new U,fm=new U,pm=new ke;let Ni=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sa.subVectors(n,t).cross(fm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pm.getNormalMatrix(e),i=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Ai=new Fs,mm=new Ke(.5,.5),Yr=new U;class oc{constructor(e=new Ni,t=new Ni,n=new Ni,i=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],v=s[9],p=s[10],g=s[11],_=s[12],x=s[13],y=s[14],b=s[15];if(i[0].setComponents(c-o,f-h,g-m,b-_).normalize(),i[1].setComponents(c+o,f+h,g+m,b+_).normalize(),i[2].setComponents(c+a,f+u,g+v,b+x).normalize(),i[3].setComponents(c-a,f-u,g-v,b-x).normalize(),n)i[4].setComponents(l,d,p,y).normalize(),i[5].setComponents(c-l,f-d,g-p,b-y).normalize();else if(i[4].setComponents(c-l,f-d,g-p,b-y).normalize(),t===Un)i[5].setComponents(c+l,f+d,g+p,b+y).normalize();else if(t===bo)i[5].setComponents(l,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=mm.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yr.x=i.normal.x>0?e.max.x:e.min.x,Yr.y=i.normal.y>0?e.max.y:e.min.y,Yr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qd extends xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wo=new U,To=new U,lu=new Ce,$s=new ic,Kr=new Fs,Ea=new U,cu=new U;class gm extends gt{constructor(e=new wn,t=new Qd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)wo.fromBufferAttribute(t,i-1),To.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wo.distanceTo(To);e.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere),Kr.applyMatrix4(i),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;lu.copy(i).invert(),$s.copy(e.ray).applyMatrix4(lu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=h.getX(v),_=h.getX(v+1),x=Zr(this,e,$s,l,g,_,v);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(m-1),p=h.getX(f),g=Zr(this,e,$s,l,v,p,m-1);g&&t.push(g)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,p=m-1;v<p;v+=c){const g=Zr(this,e,$s,l,v,v+1,v);g&&t.push(g)}if(this.isLineLoop){const v=Zr(this,e,$s,l,m-1,f,m-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zr(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(wo.fromBufferAttribute(a,i),To.fromBufferAttribute(a,s),t.distanceSqToSegment(wo,To,Ea,cu)>n)return;Ea.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Ea);if(!(c<e.near||c>e.far))return{distance:c,point:cu.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}class eh extends Ut{constructor(e,t,n=Gi,i,s,o,a=on,l=on,c,h=hr,u=1){if(h!==hr&&h!==fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class th extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vm{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Ke:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,i=[],s=[],o=[],a=new U,l=new Ce;for(let f=0;f<=e;f++){const m=f/e;i[f]=this.getTangentAt(m,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(je(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(je(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function _m(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=nh(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Em(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){const f=r[d],m=r[d+1];f<a&&(a=f),m<l&&(l=m),f>h&&(h=f),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return gr(s,o,t,a,l,c,0),o}function nh(r,e,t,n,i){let s;if(i===Nm(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=uu(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=uu(o/n|0,r[o],r[o+1],s);return s&&Ls(s,s.next)&&(_r(s),s=s.next),s}function $i(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ls(t,t.next)||yt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function gr(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Cm(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?xm(r,n,i,s):ym(r)){e.push(l.i,r.i,c.i),_r(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Mm($i(r),e),gr(r,e,t,n,i,s,2)):o===2&&Sm(r,e,t,n,i,s):gr($i(r),e,t,n,i,s,1);break}}}function ym(r){const e=r.prev,t=r,n=r.next;if(yt(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),d=Math.max(i,s,o),f=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Js(i,a,s,l,o,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function xm(r,e,t,n){const i=r.prev,s=r,o=r.next;if(yt(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=Math.min(a,l,c),m=Math.min(h,u,d),v=Math.max(a,l,c),p=Math.max(h,u,d),g=Ul(f,m,e,t,n),_=Ul(v,p,e,t,n);let x=r.prevZ,y=r.nextZ;for(;x&&x.z>=g&&y&&y.z<=_;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&Js(a,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&Js(a,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=p&&x!==i&&x!==o&&Js(a,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=f&&y.x<=v&&y.y>=m&&y.y<=p&&y!==i&&y!==o&&Js(a,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Mm(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ls(n,i)&&sh(n,t,t.next,i)&&vr(n,i)&&vr(i,n)&&(e.push(n.i,t.i,i.i),_r(t),_r(t.next),t=r=i),t=t.next}while(t!==r);return $i(t)}function Sm(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Im(o,a)){let l=rh(o,a);o=$i(o,o.next),l=$i(l,l.next),gr(o,e,t,n,i,s,0),gr(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Em(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=nh(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Pm(c))}i.sort(bm);for(let s=0;s<i.length;s++)t=wm(i[s],t);return t}function bm(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function wm(r,e){const t=Tm(r,e);if(!t)return e;const n=rh(t,r);return $i(n,n.next),$i(t,t.next)}function Tm(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Ls(r,t))return t;do{if(Ls(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ih(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const u=Math.abs(i-t.y)/(n-t.x);vr(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Am(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Am(r,e){return yt(r.prev,r,e.prev)<0&&yt(e.next,r,r.next)<0}function Cm(r,e,t,n){let i=r;do i.z===0&&(i.z=Ul(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Rm(i)}function Rm(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Ul(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Pm(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ih(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Js(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&ih(r,e,t,n,i,s,o,a)}function Im(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Lm(r,e)&&(vr(r,e)&&vr(e,r)&&Dm(r,e)&&(yt(r.prev,r,e.prev)||yt(r,e.prev,e))||Ls(r,e)&&yt(r.prev,r,r.next)>0&&yt(e.prev,e,e.next)>0)}function yt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ls(r,e){return r.x===e.x&&r.y===e.y}function sh(r,e,t,n){const i=Qr(yt(r,e,t)),s=Qr(yt(r,e,n)),o=Qr(yt(t,n,r)),a=Qr(yt(t,n,e));return!!(i!==s&&o!==a||i===0&&Jr(r,t,e)||s===0&&Jr(r,n,e)||o===0&&Jr(t,r,n)||a===0&&Jr(t,e,n))}function Jr(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Qr(r){return r>0?1:r<0?-1:0}function Lm(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&sh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function vr(r,e){return yt(r.prev,r,r.next)<0?yt(r,e,r.next)>=0&&yt(r,r.prev,e)>=0:yt(r,e,r.prev)<0||yt(r,r.next,e)<0}function Dm(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function rh(r,e){const t=Fl(r.i,r.x,r.y),n=Fl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function uu(r,e,t,n){const i=Fl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function _r(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Fl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Nm(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class Um{static triangulate(e,t,n=2){return _m(e,t,n)}}class ac{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ac.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];du(e),hu(n,e);let o=e.length;t.forEach(du);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,hu(n,t[l]);const a=Um.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function du(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function hu(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Oo extends wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],v=[],p=[];for(let g=0;g<h;g++){const _=g*d-o;for(let x=0;x<c;x++){const y=x*u-s;m.push(y,-_,0),v.push(0,0,1),p.push(x/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const x=_+c*g,y=_+c*(g+1),b=_+1+c*(g+1),w=_+1+c*g;f.push(x,y,w),f.push(y,b,w)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fm extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eo extends xi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Fe(16777215),this.specular=new Fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bm extends xi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rt,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Om extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=up,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class km extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function to(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function zm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vm(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function oh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class ko{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Hm extends ko{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lc,endingEnd:Lc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dc:s=e,a=2*t-n;break;case Nc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dc:o=e,l=2*n-t;break;case Nc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,p=v*m,g=-d*p+2*d*v-d*m,_=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*m+1,x=(-1-f)*p+(1.5+f)*v+.5*m,y=f*p-f*v;for(let b=0;b!==a;++b)s[b]=g*o[h+b]+_*o[c+b]+x*o[l+b]+y*o[u+b];return s}}class Gm extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class Wm extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Tn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Hm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case So:t=this.InterpolantFactoryMethodDiscrete;break;case Dl:t=this.InterpolantFactoryMethodLinear;break;case Jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return Dl;case this.InterpolantFactoryMethodSmooth:return Jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&zm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jo,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=Dl;class Bs extends Tn{constructor(e,t,n){super(e,t,n)}}Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=So;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class ah extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}ah.prototype.ValueTypeName="color";class yr extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}yr.prototype.ValueTypeName="number";class $m extends ko{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Yt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Ds extends Tn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new $m(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Tn{constructor(e,t,n){super(e,t,n)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=So;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Tn{constructor(e,t,n,i){super(e,t,n,i)}}xr.prototype.ValueTypeName="vector";class Xm{constructor(e="",t=-1,n=[],i=cp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jm(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(Tn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Vm(l);l=fu(l,1,h),c=fu(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new yr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,v){if(f.length!==0){const p=[],g=[];oh(f,p,g,m),p.length!==0&&v.push(new u(d,p,g))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(const v in f){const p=[],g=[];for(let _=0;_!==d[m].morphTargets.length;++_){const x=d[m];p.push(x.time),g.push(x.morphTarget===v?1:0)}i.push(new yr(".morphTargetInfluence["+v+"]",p,g))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(xr,f+".position",d,"pos",i),n(Ds,f+".quaternion",d,"rot",i),n(xr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function qm(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yr;case"vector":case"vector2":case"vector3":case"vector4":return xr;case"color":return ah;case"quaternion":return Ds;case"bool":case"boolean":return Bs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function jm(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qm(r.type);if(r.times===void 0){const t=[],n=[];oh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const ir={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ym{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Km=new Ym;class Xi{constructor(e){this.manager=e!==void 0?e:Km,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";const $n={};class Zm extends Error{constructor(e,t){super(e),this.response=t}}class Jm extends Xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ir.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($n[e]!==void 0){$n[e].push({onLoad:t,onProgress:n,onError:i});return}$n[e]=[],$n[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$n[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let v=0;const p=new ReadableStream({start(g){_();function _(){u.read().then(({done:x,value:y})=>{if(x)g.close();else{v+=y.byteLength;const b=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let w=0,C=h.length;w<C;w++){const I=h[w];I.onProgress&&I.onProgress(b)}g.enqueue(y),_()}},x=>{g.error(x)})}}});return new Response(p)}else throw new Zm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{ir.add(`file:${e}`,c);const h=$n[e];delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=$n[e];if(h===void 0)throw this.manager.itemError(e),c;delete $n[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ls=new WeakMap;class Qm extends Xi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ir.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=ls.get(o);u===void 0&&(u=[],ls.set(o,u)),u.push({onLoad:t,onError:i})}return o}const a=pr("img");function l(){h(),t&&t(this);const u=ls.get(this)||[];for(let d=0;d<u.length;d++){const f=u[d];f.onLoad&&f.onLoad(this)}ls.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),ir.remove(`image:${e}`);const d=ls.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(u)}ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ir.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class lh extends Xi{constructor(e){super(e)}load(e,t,n,i){const s=new Ut,o=new Qm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class zo extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ba=new Ce,pu=new U,mu=new U;class lc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),ba.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ba)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class eg extends lc{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class tg extends zo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new eg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gu=new Ce,Xs=new U,wa=new U;class ng extends lc{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Xs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xs),wa.copy(n.position),wa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wa),n.updateMatrixWorld(),i.makeTranslation(-Xs.x,-Xs.y,-Xs.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu,n.coordinateSystem,n.reversedDepth)}}class vu extends zo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ng}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ch extends Zd{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ig extends lc{constructor(){super(new ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bl extends zo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new ig}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class uh extends zo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class sg{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rg extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cc="\\[\\]\\.:\\/",og=new RegExp("["+cc+"]","g"),uc="[^"+cc+"]",ag="[^"+cc.replace("\\.","")+"]",lg=/((?:WC+[\/:])*)/.source.replace("WC",uc),cg=/(WCOD+)?/.source.replace("WCOD",ag),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uc),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uc),hg=new RegExp("^"+lg+cg+ug+dg+"$"),fg=["material","materials","bones","map"];class pg{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(og,"")}static parseTrackName(e){const t=hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);fg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=pg;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function _u(r,e,t,n){const i=mg(n);switch(t){case kd:return r*e;case Vd:return r*e/i.components*i.byteLength;case Jl:return r*e/i.components*i.byteLength;case Hd:return r*e*2/i.components*i.byteLength;case Ql:return r*e*2/i.components*i.byteLength;case zd:return r*e*3/i.components*i.byteLength;case fn:return r*e*4/i.components*i.byteLength;case ec:return r*e*4/i.components*i.byteLength;case mo:case go:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vo:case _o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ol:case ll:return Math.max(r,16)*Math.max(e,8)/4;case rl:case al:return Math.max(r,8)*Math.max(e,8)/2;case cl:case ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case hl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case pl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ml:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case gl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case yl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case wl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Al:case Cl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Rl:case Pl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Il:case Ll:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(r){switch(r){case Bn:case Ud:return{byteLength:1,components:1};case ur:case Fd:case Er:return{byteLength:2,components:1};case Kl:case Zl:return{byteLength:2,components:4};case Gi:case Yl:case Nn:return{byteLength:4,components:1};case Bd:case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dh(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function gg(r){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,bg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
#endif`,Tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ig=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zg=`#define PI 3.141592653589793
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",jg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ov=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
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
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,uv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pv=`PhysicalMaterial material;
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
#endif`,mv=`struct PhysicalMaterial {
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
}`,gv=`
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
#endif`,vv=`#if defined( RE_IndirectDiffuse )
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
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tv=`#if defined( USE_POINTS_UV )
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
#endif`,Av=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kv=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
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
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,o0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
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
}`,E0=`#if DEPTH_PACKING == 3200
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
}`,b0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,N0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,B0=`#define NORMAL
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
}`,O0=`#define PHONG
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
}`,k0=`#define PHONG
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
}`,z0=`#define STANDARD
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
}`,V0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,G0=`#define TOON
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
}`,W0=`uniform float size;
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
}`,$0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,j0=`uniform float rotation;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:vg,alphahash_pars_fragment:_g,alphamap_fragment:yg,alphamap_pars_fragment:xg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:Eg,aomap_pars_fragment:bg,batching_pars_vertex:wg,batching_vertex:Tg,begin_vertex:Ag,beginnormal_vertex:Cg,bsdfs:Rg,iridescence_fragment:Pg,bumpmap_pars_fragment:Ig,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Ug,color_fragment:Fg,color_pars_fragment:Bg,color_pars_vertex:Og,color_vertex:kg,common:zg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Wg,emissivemap_fragment:$g,emissivemap_pars_fragment:Xg,colorspace_fragment:qg,colorspace_pars_fragment:jg,envmap_fragment:Yg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Zg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:cv,envmap_vertex:Qg,fog_vertex:ev,fog_pars_vertex:tv,fog_fragment:nv,fog_pars_fragment:iv,gradientmap_pars_fragment:sv,lightmap_pars_fragment:rv,lights_lambert_fragment:ov,lights_lambert_pars_fragment:av,lights_pars_begin:lv,lights_toon_fragment:uv,lights_toon_pars_fragment:dv,lights_phong_fragment:hv,lights_phong_pars_fragment:fv,lights_physical_fragment:pv,lights_physical_pars_fragment:mv,lights_fragment_begin:gv,lights_fragment_maps:vv,lights_fragment_end:_v,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:Mv,logdepthbuf_vertex:Sv,map_fragment:Ev,map_pars_fragment:bv,map_particle_fragment:wv,map_particle_pars_fragment:Tv,metalnessmap_fragment:Av,metalnessmap_pars_fragment:Cv,morphinstance_vertex:Rv,morphcolor_vertex:Pv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Dv,normal_fragment_begin:Nv,normal_fragment_maps:Uv,normal_pars_fragment:Fv,normal_pars_vertex:Bv,normal_vertex:Ov,normalmap_pars_fragment:kv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:Vv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Gv,opaque_fragment:Wv,packing:$v,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:jv,dithering_pars_fragment:Yv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:o0,specularmap_pars_fragment:a0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:u0,transmission_pars_fragment:d0,uv_pars_fragment:h0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:v0,backgroundCube_vert:_0,backgroundCube_frag:y0,cube_vert:x0,cube_frag:M0,depth_vert:S0,depth_frag:E0,distanceRGBA_vert:b0,distanceRGBA_frag:w0,equirect_vert:T0,equirect_frag:A0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:P0,meshbasic_frag:I0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:F0,meshnormal_frag:B0,meshphong_vert:O0,meshphong_frag:k0,meshphysical_vert:z0,meshphysical_frag:V0,meshtoon_vert:H0,meshtoon_frag:G0,points_vert:W0,points_frag:$0,shadow_vert:X0,shadow_frag:q0,sprite_vert:j0,sprite_frag:Y0},le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Ln={basic:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Wt([le.common,le.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Wt([le.lights,le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ln.physical={uniforms:Wt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const no={r:0,b:0,g:0},Ci=new Rt,K0=new Ce;function Z0(r,e,t,n,i,s,o){const a=new Fe(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function v(x){let y=!1;const b=m(x);b===null?g(a,l):b&&b.isColor&&(g(b,1),y=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,y){const b=m(y);b&&(b.isCubeTexture||b.mapping===Fo)?(h===void 0&&(h=new En(new br(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Is(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ci.copy(y.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(Ci)),h.material.toneMapped=$e.getTransfer(b.colorSpace)!==ot,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new En(new Oo(2,2),new vi({name:"BackgroundMaterial",uniforms:Is(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(no,Kd(r)),n.buffers.color.setClear(no.r,no.g,no.b,y,o)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:v,addToRenderList:p,dispose:_}}function J0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(E,R,O,D,k){let B=!1;const N=u(D,O,R);s!==N&&(s=N,c(s.object)),B=f(E,D,O,k),B&&m(E,D,O,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(E,R,O,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,R,O){const D=O.wireframe===!0;let k=n[E.id];k===void 0&&(k={},n[E.id]=k);let B=k[R.id];B===void 0&&(B={},k[R.id]=B);let N=B[D];return N===void 0&&(N=d(l()),B[D]=N),N}function d(E){const R=[],O=[],D=[];for(let k=0;k<t;k++)R[k]=0,O[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:D,object:E,attributes:{},index:null}}function f(E,R,O,D){const k=s.attributes,B=R.attributes;let N=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){const re=k[V];let ce=B[V];if(ce===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),re===void 0||re.attribute!==ce||ce&&re.data!==ce.data)return!0;N++}return s.attributesNum!==N||s.index!==D}function m(E,R,O,D){const k={},B=R.attributes;let N=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){let re=B[V];re===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(re=E.instanceColor));const ce={};ce.attribute=re,re&&re.data&&(ce.data=re.data),k[V]=ce,N++}s.attributes=k,s.attributesNum=N,s.index=D}function v(){const E=s.newAttributes;for(let R=0,O=E.length;R<O;R++)E[R]=0}function p(E){g(E,0)}function g(E,R){const O=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;O[E]=1,D[E]===0&&(r.enableVertexAttribArray(E),D[E]=1),k[E]!==R&&(r.vertexAttribDivisor(E,R),k[E]=R)}function _(){const E=s.newAttributes,R=s.enabledAttributes;for(let O=0,D=R.length;O<D;O++)R[O]!==E[O]&&(r.disableVertexAttribArray(O),R[O]=0)}function x(E,R,O,D,k,B,N){N===!0?r.vertexAttribIPointer(E,R,O,k,B):r.vertexAttribPointer(E,R,O,D,k,B)}function y(E,R,O,D){v();const k=D.attributes,B=O.getAttributes(),N=R.defaultAttributeValues;for(const X in B){const V=B[X];if(V.location>=0){let j=k[X];if(j===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),j!==void 0){const re=j.normalized,ce=j.itemSize,ne=e.get(j);if(ne===void 0)continue;const Ve=ne.buffer,Qe=ne.type,He=ne.bytesPerElement,Y=Qe===r.INT||Qe===r.UNSIGNED_INT||j.gpuType===Yl;if(j.isInterleavedBufferAttribute){const J=j.data,ge=J.stride,Le=j.offset;if(J.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)g(V.location+be,J.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let be=0;be<V.locationSize;be++)p(V.location+be);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let be=0;be<V.locationSize;be++)x(V.location+be,ce/V.locationSize,Qe,re,ge*He,(Le+ce/V.locationSize*be)*He,Y)}else{if(j.isInstancedBufferAttribute){for(let J=0;J<V.locationSize;J++)g(V.location+J,j.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let J=0;J<V.locationSize;J++)p(V.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let J=0;J<V.locationSize;J++)x(V.location+J,ce/V.locationSize,Qe,re,ce*He,ce/V.locationSize*J*He,Y)}}else if(N!==void 0){const re=N[X];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(V.location,re);break;case 3:r.vertexAttrib3fv(V.location,re);break;case 4:r.vertexAttrib4fv(V.location,re);break;default:r.vertexAttrib1fv(V.location,re)}}}}_()}function b(){I();for(const E in n){const R=n[E];for(const O in R){const D=R[O];for(const k in D)h(D[k].object),delete D[k];delete R[O]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const R=n[E.id];for(const O in R){const D=R[O];for(const k in D)h(D[k].object),delete D[k];delete R[O]}delete n[E.id]}function C(E){for(const R in n){const O=n[R];if(O[E.id]===void 0)continue;const D=O[E.id];for(const k in D)h(D[k].object),delete D[k];delete O[E.id]}}function I(){T(),o=!0,s!==i&&(s=i,c(s.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Q0(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function e_(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==fn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Bn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!I)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:b,maxSamples:w}}function t_(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Ni,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const _=s?0:n,x=_*4;let y=g.clippingState||null;l.value=y,y=h(m,d,x,f);for(let b=0;b!==x;++b)y[b]=t[b];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let x=0,y=f;x!==v;++x,y+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function n_(r){let e=new WeakMap;function t(o,a){return a===Mo?o.mapping=As:a===il&&(o.mapping=Cs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mo||a===il)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new om(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const gs=4,yu=[.125,.215,.35,.446,.526,.582],Bi=20,Ta=new ch,xu=new Fe;let Aa=null,Ca=0,Ra=0,Pa=!1;const Ui=(1+Math.sqrt(5))/2,cs=1/Ui,Mu=[new U(-Ui,cs,0),new U(Ui,cs,0),new U(-cs,0,Ui),new U(cs,0,Ui),new U(0,Ui,-cs),new U(0,Ui,cs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],i_=new U;class Su{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=i_}=s;Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Aa,Ca,Ra),this._renderer.xr.enabled=Pa,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Aa=this._renderer.getRenderTarget(),Ca=this._renderer.getActiveCubeFace(),Ra=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Er,format:fn,colorSpace:Rs,depthBuffer:!1},i=Eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=s_(s)),this._blurMaterial=r_(s,e,t)}return i}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,i,s){const l=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(xu),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const v=new jd({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),p=new En(new br,v);let g=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,g=!0):(v.color.copy(xu),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const b=this._cubeSize;io(i,y*b,x>2?b:0,b,b),u.setRenderTarget(i),g&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===As||e.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bu());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new En(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;io(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mu[(i-s-1)%Mu.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new En(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Bi-1),v=s/m,p=isFinite(s)?1+Math.floor(h*v):Bi;p>Bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Bi}`);const g=[];let _=0;for(let C=0;C<Bi;++C){const I=C/v,T=Math.exp(-I*I/2);g.push(T),C===0?_+=T:C<p&&(_+=2*T)}for(let C=0;C<g.length;C++)g[C]=g[C]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-n;const y=this._sizeLods[i],b=3*y*(i>x-gs?i-x+gs:0),w=4*(this._cubeSize-y);io(t,b,w,3*y,2*y),l.setRenderTarget(t),l.render(u,Ta)}}function s_(r){const e=[],t=[],n=[];let i=r;const s=r-gs+1+yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-gs?l=yu[o-r+gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,p=2,g=1,_=new Float32Array(v*m*f),x=new Float32Array(p*m*f),y=new Float32Array(g*m*f);for(let w=0;w<f;w++){const C=w%3*2/3-1,I=w>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(T,v*m*w),x.set(d,p*m*w);const E=[w,w,w,w,w,w];y.set(E,g*m*w)}const b=new wn;b.setAttribute("position",new Fn(_,v)),b.setAttribute("uv",new Fn(x,p)),b.setAttribute("faceIndex",new Fn(y,g)),e.push(b),i>gs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eu(r,e,t){const n=new Wi(r,e,t);return n.texture.mapping=Fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function io(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function r_(r,e,t){const n=new Float32Array(Bi),i=new U(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function bu(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function wu(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}function o_(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mo||l===il,h=l===As||l===Cs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Su(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Su(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function a_(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function l_(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let x=0,y=_.length;x<y;x+=3){const b=_[x+0],w=_[x+1],C=_[x+2];d.push(b,w,w,C,C,b)}}else if(m!==void 0){const _=m.array;v=m.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const b=x+0,w=x+1,C=x+2;d.push(b,w,w,C,C,b)}}else return;const p=new(Wd(d)?Yd:sc)(d,1);p.version=v;const g=s.get(u);g&&e.remove(g),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function c_(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function u(d,f,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/o,f[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_]*v[_];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function u_(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function d_(r,e,t){const n=new WeakMap,i=new Je;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),v===!0&&(y=2),p===!0&&(y=3);let b=a.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*w*4*u),I=new $d(C,b,w,u);I.type=Nn,I.needsUpdate=!0;const T=y*4;for(let R=0;R<u;R++){const O=g[R],D=_[R],k=x[R],B=b*w*4*R;for(let N=0;N<O.count;N++){const X=N*T;m===!0&&(i.fromBufferAttribute(O,N),C[B+X+0]=i.x,C[B+X+1]=i.y,C[B+X+2]=i.z,C[B+X+3]=0),v===!0&&(i.fromBufferAttribute(D,N),C[B+X+4]=i.x,C[B+X+5]=i.y,C[B+X+6]=i.z,C[B+X+7]=0),p===!0&&(i.fromBufferAttribute(k,N),C[B+X+8]=i.x,C[B+X+9]=i.y,C[B+X+10]=i.z,C[B+X+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Ke(b,w)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function h_(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const hh=new Ut,Tu=new eh(1,1),fh=new $d,ph=new Gp,mh=new Jd,Au=[],Cu=[],Ru=new Float32Array(16),Pu=new Float32Array(9),Iu=new Float32Array(4);function ks(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Au[i];if(s===void 0&&(s=new Float32Array(i),Au[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vo(r,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function f_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function p_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function m_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function g_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function v_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Iu.set(n),r.uniformMatrix2fv(this.addr,!1,Iu),It(t,n)}}function __(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Pu.set(n),r.uniformMatrix3fv(this.addr,!1,Pu),It(t,n)}}function y_(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Ru.set(n),r.uniformMatrix4fv(this.addr,!1,Ru),It(t,n)}}function x_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function M_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function S_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function E_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function b_(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function w_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function T_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function A_(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function C_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Tu.compareFunction=Gd,s=Tu):s=hh,t.setTexture2D(e||s,i)}function R_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ph,i)}function P_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mh,i)}function I_(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fh,i)}function L_(r){switch(r){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return v_;case 35675:return __;case 35676:return y_;case 5124:case 35670:return x_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return E_;case 5125:return b_;case 36294:return w_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function D_(r,e){r.uniform1fv(this.addr,e)}function N_(r,e){const t=ks(e,this.size,2);r.uniform2fv(this.addr,t)}function U_(r,e){const t=ks(e,this.size,3);r.uniform3fv(this.addr,t)}function F_(r,e){const t=ks(e,this.size,4);r.uniform4fv(this.addr,t)}function B_(r,e){const t=ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function O_(r,e){const t=ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function k_(r,e){const t=ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function z_(r,e){r.uniform1iv(this.addr,e)}function V_(r,e){r.uniform2iv(this.addr,e)}function H_(r,e){r.uniform3iv(this.addr,e)}function G_(r,e){r.uniform4iv(this.addr,e)}function W_(r,e){r.uniform1uiv(this.addr,e)}function $_(r,e){r.uniform2uiv(this.addr,e)}function X_(r,e){r.uniform3uiv(this.addr,e)}function q_(r,e){r.uniform4uiv(this.addr,e)}function j_(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||hh,s[o])}function Y_(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||ph,s[o])}function K_(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||mh,s[o])}function Z_(r,e,t){const n=this.cache,i=e.length,s=Vo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||fh,s[o])}function J_(r){switch(r){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return B_;case 35675:return O_;case 35676:return k_;case 5124:case 35670:return z_;case 35667:case 35671:return V_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return W_;case 36294:return $_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}class Q_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=L_(t.type)}}class ey{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}}class ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Lu(r,e){r.seq.push(e),r.map[e.id]=e}function ny(r,e,t){const n=r.name,i=n.length;for(Ia.lastIndex=0;;){const s=Ia.exec(n),o=Ia.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lu(t,c===void 0?new Q_(a,r,e):new ey(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new ty(a),Lu(t,u)),t=u}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);ny(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Du(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const iy=37297;let sy=0;function ry(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Nu=new ke;function oy(r){$e._getMatrix(Nu,$e.workingColorSpace,r);const e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(r)){case Eo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Uu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+ry(r.getShaderSource(e),a)}else return s}function ay(r,e){const t=oy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ly(r,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="Cineon";break;case ip:t="ACESFilmic";break;case rp:t="AgX";break;case op:t="Neutral";break;case sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const so=new U;function cy(){$e.getLuminanceCoefficients(so);const r=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function dy(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Qs(r){return r!==""}function Fu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(r){return r.replace(fy,my)}const py=new Map;function my(r,e){let t=We[e];if(t===void 0){const n=py.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ol(t)}const gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ou(r){return r.replace(gy,vy)}function vy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ku(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _y(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Df?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function yy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case As:case Cs:e="ENVMAP_TYPE_CUBE";break;case Fo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xy(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function My(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uo:e="ENVMAP_BLENDING_MULTIPLY";break;case Jf:e="ENVMAP_BLENDING_MIX";break;case Qf:e="ENVMAP_BLENDING_ADD";break}return e}function Sy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ey(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=_y(t),c=yy(t),h=xy(t),u=My(t),d=Sy(t),f=uy(t),m=dy(s),v=i.createProgram();let p,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qs).join(`
`),g.length>0&&(g+=`
`)):(p=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),g=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?We.tonemapping_pars_fragment:"",t.toneMapping!==mi?ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),cy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Ol(o),o=Fu(o,t),o=Bu(o,t),a=Ol(a),a=Fu(a,t),a=Bu(a,t),o=Ou(o),a=Ou(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=_+p+o,y=_+g+a,b=Du(i,i.VERTEX_SHADER,x),w=Du(i,i.FRAGMENT_SHADER,y);i.attachShader(v,b),i.attachShader(v,w),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(R){if(r.debug.checkShaderErrors){const O=i.getProgramInfoLog(v)||"",D=i.getShaderInfoLog(b)||"",k=i.getShaderInfoLog(w)||"",B=O.trim(),N=D.trim(),X=k.trim();let V=!0,j=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,b,w);else{const re=Uu(i,b,"vertex"),ce=Uu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+re+`
`+ce)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||X==="")&&(j=!1);j&&(R.diagnostics={runnable:V,programLog:B,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:g}})}i.deleteShader(b),i.deleteShader(w),I=new yo(i,v),T=hy(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(v,iy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=w,this}let by=0;class wy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ty(e),t.set(e,n)),n}}class Ty{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}}function Ay(r,e,t,n,i,s,o){const a=new Xd,l=new wy,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,E,R,O,D){const k=O.fog,B=D.geometry,N=T.isMeshStandardMaterial?O.environment:null,X=(T.isMeshStandardMaterial?t:e).get(T.envMap||N),V=X&&X.mapping===Fo?X.image.height:null,j=m[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const re=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=re!==void 0?re.length:0;let ne=0;B.morphAttributes.position!==void 0&&(ne=1),B.morphAttributes.normal!==void 0&&(ne=2),B.morphAttributes.color!==void 0&&(ne=3);let Ve,Qe,He,Y;if(j){const it=Ln[j];Ve=it.vertexShader,Qe=it.fragmentShader}else Ve=T.vertexShader,Qe=T.fragmentShader,l.update(T),He=l.getVertexShaderID(T),Y=l.getFragmentShaderID(T);const J=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Le=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,Ye=!!T.map,At=!!T.matcap,L=!!X,ft=!!T.aoMap,Oe=!!T.lightMap,Ne=!!T.bumpMap,xe=!!T.normalMap,pt=!!T.displacementMap,Me=!!T.emissiveMap,Ge=!!T.metalnessMap,Lt=!!T.roughnessMap,Mt=T.anisotropy>0,P=T.clearcoat>0,S=T.dispersion>0,G=T.iridescence>0,K=T.sheen>0,Q=T.transmission>0,q=Mt&&!!T.anisotropyMap,Ae=P&&!!T.clearcoatMap,oe=P&&!!T.clearcoatNormalMap,Se=P&&!!T.clearcoatRoughnessMap,we=G&&!!T.iridescenceMap,ie=G&&!!T.iridescenceThicknessMap,he=K&&!!T.sheenColorMap,De=K&&!!T.sheenRoughnessMap,Te=!!T.specularMap,ue=!!T.specularColorMap,ze=!!T.specularIntensityMap,F=Q&&!!T.transmissionMap,se=Q&&!!T.thicknessMap,ae=!!T.gradientMap,ve=!!T.alphaMap,ee=T.alphaTest>0,Z=!!T.alphaHash,ye=!!T.extensions;let Be=mi;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=r.toneMapping);const lt={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:Qe,defines:T.defines,customVertexShaderID:He,customFragmentShaderID:Y,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:be,batchingColor:be&&D._colorsTexture!==null,instancing:Le,instancingColor:Le&&D.instanceColor!==null,instancingMorph:Le&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Rs,alphaToCoverage:!!T.alphaToCoverage,map:Ye,matcap:At,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:V,aoMap:ft,lightMap:Oe,bumpMap:Ne,normalMap:xe,displacementMap:d&&pt,emissiveMap:Me,normalMapObjectSpace:xe&&T.normalMapType===hp,normalMapTangentSpace:xe&&T.normalMapType===Bo,metalnessMap:Ge,roughnessMap:Lt,anisotropy:Mt,anisotropyMap:q,clearcoat:P,clearcoatMap:Ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:Se,dispersion:S,iridescence:G,iridescenceMap:we,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:he,sheenRoughnessMap:De,specularMap:Te,specularColorMap:ue,specularIntensityMap:ze,transmission:Q,transmissionMap:F,thicknessMap:se,gradientMap:ae,opaque:T.transparent===!1&&T.blending===xs&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:ee,alphaHash:Z,combine:T.combine,mapUv:Ye&&v(T.map.channel),aoMapUv:ft&&v(T.aoMap.channel),lightMapUv:Oe&&v(T.lightMap.channel),bumpMapUv:Ne&&v(T.bumpMap.channel),normalMapUv:xe&&v(T.normalMap.channel),displacementMapUv:pt&&v(T.displacementMap.channel),emissiveMapUv:Me&&v(T.emissiveMap.channel),metalnessMapUv:Ge&&v(T.metalnessMap.channel),roughnessMapUv:Lt&&v(T.roughnessMap.channel),anisotropyMapUv:q&&v(T.anisotropyMap.channel),clearcoatMapUv:Ae&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:oe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:De&&v(T.sheenRoughnessMap.channel),specularMapUv:Te&&v(T.specularMap.channel),specularColorMapUv:ue&&v(T.specularColorMap.channel),specularIntensityMapUv:ze&&v(T.specularIntensityMap.channel),transmissionMapUv:F&&v(T.transmissionMap.channel),thicknessMapUv:se&&v(T.thicknessMap.channel),alphaMapUv:ve&&v(T.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xe||Mt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ye||ve),fog:!!k,useFog:T.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:D.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ye&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:Me&&T.emissiveMap.isVideoTexture===!0&&$e.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Jn,flipSided:T.side===Jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ye&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&T.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function g(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)E.push(R),E.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(_(E,T),x(E,T),E.push(r.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function _(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function x(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const E=m[T.type];let R;if(E){const O=Ln[E];R=nm.clone(O.uniforms)}else R=T.uniforms;return R}function b(T,E){let R;for(let O=0,D=h.length;O<D;O++){const k=h[O];if(k.cacheKey===E){R=k,++R.usedTimes;break}}return R===void 0&&(R=new Ey(r,E,T,s),h.push(R)),R}function w(T){if(--T.usedTimes===0){const E=h.indexOf(T);h[E]=h[h.length-1],h.pop(),T.destroy()}}function C(T){l.remove(T)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:I}}function Cy(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ry(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function zu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,m,v,p){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:p},r[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=v,g.group=p),e++,g}function a(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(u,d,f,m,v,p){const g=o(u,d,f,m,v,p);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||Ry),n.length>1&&n.sort(d||zu),i.length>1&&i.sort(d||zu)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Py(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vu,r.set(n,[o])):i>=s.length?(o=new Vu,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Iy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Fe};break;case"SpotLight":t={position:new U,direction:new U,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new U,halfWidth:new U,halfHeight:new U};break}return r[e.id]=t,t}}}function Ly(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Dy=0;function Ny(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Uy(r){const e=new Iy,t=Ly(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,v=0,p=0,g=0,_=0,x=0,y=0,b=0,w=0,C=0;c.sort(Ny);for(let T=0,E=c.length;T<E;T++){const R=c[T],O=R.color,D=R.intensity,k=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*D,u+=O.g*D,d+=O.b*D;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],D);C++}else if(R.isDirectionalLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,V=t.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,_++}n.directional[f]=N,f++}else if(R.isSpotLight){const N=e.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(O).multiplyScalar(D),N.distance=k,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[v]=N;const X=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,X.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[v]=X.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=B,y++}v++}else if(R.isRectAreaLight){const N=e.get(R);N.color.copy(O).multiplyScalar(D),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=N,p++}else if(R.isPointLight){const N=e.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){const X=R.shadow,V=t.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=R.shadow.matrix,x++}n.point[m]=N,m++}else if(R.isHemisphereLight){const N=e.get(R);N.skyColor.copy(R.color).multiplyScalar(D),N.groundColor.copy(R.groundColor).multiplyScalar(D),n.hemi[g]=N,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==p||I.hemiLength!==g||I.numDirectionalShadows!==_||I.numPointShadows!==x||I.numSpotShadows!==y||I.numSpotMaps!==b||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,I.directionalLength=f,I.pointLength=m,I.spotLength=v,I.rectAreaLength=p,I.hemiLength=g,I.numDirectionalShadows=_,I.numPointShadows=x,I.numSpotShadows=y,I.numSpotMaps=b,I.numLightProbes=C,n.version=Dy++)}function l(c,h){let u=0,d=0,f=0,m=0,v=0;const p=h.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const x=c[g];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),u++}else if(x.isSpotLight){const y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),f++}else if(x.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function Hu(r){const e=new Uy(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Fy(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Hu(r),e.set(i,[a])):s>=o.length?(a=new Hu(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
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
}`;function ky(r,e,t){let n=new oc;const i=new Ke,s=new Ke,o=new Je,a=new Om({depthPacking:dp}),l=new km,c={},h=t.maxTextureSize,u={[gi]:Jt,[Jt]:gi,[Jn]:Jn},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:By,fragmentShader:Oy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new wn;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new En(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let g=this.type;this.render=function(w,C,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const T=r.getRenderTarget(),E=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),O=r.state;O.setBlending(pi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const D=g!==Zn&&this.type===Zn,k=g===Zn&&this.type!==Zn;for(let B=0,N=w.length;B<N;B++){const X=w[B],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const j=V.getFrameExtents();if(i.multiply(j),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,V.mapSize.y=s.y)),V.map===null||D===!0||k===!0){const ce=this.type!==Zn?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new Wi(i.x,i.y,ce),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const re=V.getViewportCount();for(let ce=0;ce<re;ce++){const ne=V.getViewport(ce);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),O.viewport(o),V.updateMatrices(X,ce),n=V.getFrustum(),y(C,I,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Zn&&_(V,I),V.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(T,E,R)};function _(w,C){const I=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Wi(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(C,null,I,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(C,null,I,f,v,null)}function x(w,C,I,T){let E=null;const R=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=I.isPointLight===!0?l:a,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=E.uuid,D=C.uuid;let k=c[O];k===void 0&&(k={},c[O]=k);let B=k[D];B===void 0&&(B=E.clone(),k[D]=B,C.addEventListener("dispose",b)),E=B}if(E.visible=C.visible,E.wireframe=C.wireframe,T===Zn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const O=r.properties.get(E);O.light=I}return E}function y(w,C,I,T,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const D=e.update(w),k=w.material;if(Array.isArray(k)){const B=D.groups;for(let N=0,X=B.length;N<X;N++){const V=B[N],j=k[V.materialIndex];if(j&&j.visible){const re=x(w,j,T,E);w.onBeforeShadow(r,w,C,I,D,re,V),r.renderBufferDirect(I,null,D,re,w,V),w.onAfterShadow(r,w,C,I,D,re,V)}}}else if(k.visible){const B=x(w,k,T,E);w.onBeforeShadow(r,w,C,I,D,B,null),r.renderBufferDirect(I,null,D,B,w,null),w.onAfterShadow(r,w,C,I,D,B,null)}}const O=w.children;for(let D=0,k=O.length;D<k;D++)y(O[D],C,I,T,E)}function b(w){w.target.removeEventListener("dispose",b);for(const I in c){const T=c[I],E=w.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const zy={[Ka]:Za,[Ja]:tl,[Qa]:nl,[Ts]:el,[Za]:Ka,[tl]:Ja,[nl]:Qa,[el]:Ts};function Vy(r,e){function t(){let F=!1;const se=new Je;let ae=null;const ve=new Je(0,0,0,0);return{setMask:function(ee){ae!==ee&&!F&&(r.colorMask(ee,ee,ee,ee),ae=ee)},setLocked:function(ee){F=ee},setClear:function(ee,Z,ye,Be,lt){lt===!0&&(ee*=Be,Z*=Be,ye*=Be),se.set(ee,Z,ye,Be),ve.equals(se)===!1&&(r.clearColor(ee,Z,ye,Be),ve.copy(se))},reset:function(){F=!1,ae=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,se=!1,ae=null,ve=null,ee=null;return{setReversed:function(Z){if(se!==Z){const ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),se=Z;const Be=ee;ee=null,this.setClear(Be)}},getReversed:function(){return se},setTest:function(Z){Z?J(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!F&&(r.depthMask(Z),ae=Z)},setFunc:function(Z){if(se&&(Z=zy[Z]),ve!==Z){switch(Z){case Ka:r.depthFunc(r.NEVER);break;case Za:r.depthFunc(r.ALWAYS);break;case Ja:r.depthFunc(r.LESS);break;case Ts:r.depthFunc(r.LEQUAL);break;case Qa:r.depthFunc(r.EQUAL);break;case el:r.depthFunc(r.GEQUAL);break;case tl:r.depthFunc(r.GREATER);break;case nl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Z}},setLocked:function(Z){F=Z},setClear:function(Z){ee!==Z&&(se&&(Z=1-Z),r.clearDepth(Z),ee=Z)},reset:function(){F=!1,ae=null,ve=null,ee=null,se=!1}}}function i(){let F=!1,se=null,ae=null,ve=null,ee=null,Z=null,ye=null,Be=null,lt=null;return{setTest:function(it){F||(it?J(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(it){se!==it&&!F&&(r.stencilMask(it),se=it)},setFunc:function(it,kn,An){(ae!==it||ve!==kn||ee!==An)&&(r.stencilFunc(it,kn,An),ae=it,ve=kn,ee=An)},setOp:function(it,kn,An){(Z!==it||ye!==kn||Be!==An)&&(r.stencilOp(it,kn,An),Z=it,ye=kn,Be=An)},setLocked:function(it){F=it},setClear:function(it){lt!==it&&(r.clearStencil(it),lt=it)},reset:function(){F=!1,se=null,ae=null,ve=null,ee=null,Z=null,ye=null,Be=null,lt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,x=null,y=null,b=null,w=null,C=new Fe(0,0,0),I=0,T=!1,E=null,R=null,O=null,D=null,k=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,X=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=X>=2);let j=null,re={};const ce=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ve=new Je().fromArray(ce),Qe=new Je().fromArray(ne);function He(F,se,ae,ve){const ee=new Uint8Array(4),Z=r.createTexture();r.bindTexture(F,Z),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ye=0;ye<ae;ye++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(se+ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return Z}const Y={};Y[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Ts),Ne(!1),xe(Ac),J(r.CULL_FACE),ft(pi);function J(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function ge(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Le(F,se){return u[F]!==se?(r.bindFramebuffer(F,se),u[F]=se,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=se),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=se),!0):!1}function be(F,se){let ae=f,ve=!1;if(F){ae=d.get(se),ae===void 0&&(ae=[],d.set(se,ae));const ee=F.textures;if(ae.length!==ee.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,ye=ee.length;Z<ye;Z++)ae[Z]=r.COLOR_ATTACHMENT0+Z;ae.length=ee.length,ve=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ae)}function Ye(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const At={[Fi]:r.FUNC_ADD,[Uf]:r.FUNC_SUBTRACT,[Ff]:r.FUNC_REVERSE_SUBTRACT};At[Bf]=r.MIN,At[Of]=r.MAX;const L={[kf]:r.ZERO,[zf]:r.ONE,[Vf]:r.SRC_COLOR,[ja]:r.SRC_ALPHA,[qf]:r.SRC_ALPHA_SATURATE,[$f]:r.DST_COLOR,[Gf]:r.DST_ALPHA,[Hf]:r.ONE_MINUS_SRC_COLOR,[Ya]:r.ONE_MINUS_SRC_ALPHA,[Xf]:r.ONE_MINUS_DST_COLOR,[Wf]:r.ONE_MINUS_DST_ALPHA,[jf]:r.CONSTANT_COLOR,[Yf]:r.ONE_MINUS_CONSTANT_COLOR,[Kf]:r.CONSTANT_ALPHA,[Zf]:r.ONE_MINUS_CONSTANT_ALPHA};function ft(F,se,ae,ve,ee,Z,ye,Be,lt,it){if(F===pi){v===!0&&(ge(r.BLEND),v=!1);return}if(v===!1&&(J(r.BLEND),v=!0),F!==Nf){if(F!==p||it!==T){if((g!==Fi||y!==Fi)&&(r.blendEquation(r.FUNC_ADD),g=Fi,y=Fi),it)switch(F){case xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cc:r.blendFunc(r.ONE,r.ONE);break;case Rc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Pc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Cc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Rc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,x=null,b=null,w=null,C.set(0,0,0),I=0,p=F,T=it}return}ee=ee||se,Z=Z||ae,ye=ye||ve,(se!==g||ee!==y)&&(r.blendEquationSeparate(At[se],At[ee]),g=se,y=ee),(ae!==_||ve!==x||Z!==b||ye!==w)&&(r.blendFuncSeparate(L[ae],L[ve],L[Z],L[ye]),_=ae,x=ve,b=Z,w=ye),(Be.equals(C)===!1||lt!==I)&&(r.blendColor(Be.r,Be.g,Be.b,lt),C.copy(Be),I=lt),p=F,T=!1}function Oe(F,se){F.side===Jn?ge(r.CULL_FACE):J(r.CULL_FACE);let ae=F.side===Jt;se&&(ae=!ae),Ne(ae),F.blending===xs&&F.transparent===!1?ft(pi):ft(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;a.setTest(ve),ve&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(F){E!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),E=F)}function xe(F){F!==If?(J(r.CULL_FACE),F!==R&&(F===Ac?r.cullFace(r.BACK):F===Lf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),R=F}function pt(F){F!==O&&(N&&r.lineWidth(F),O=F)}function Me(F,se,ae){F?(J(r.POLYGON_OFFSET_FILL),(D!==se||k!==ae)&&(r.polygonOffset(se,ae),D=se,k=ae)):ge(r.POLYGON_OFFSET_FILL)}function Ge(F){F?J(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function Lt(F){F===void 0&&(F=r.TEXTURE0+B-1),j!==F&&(r.activeTexture(F),j=F)}function Mt(F,se,ae){ae===void 0&&(j===null?ae=r.TEXTURE0+B-1:ae=j);let ve=re[ae];ve===void 0&&(ve={type:void 0,texture:void 0},re[ae]=ve),(ve.type!==F||ve.texture!==se)&&(j!==ae&&(r.activeTexture(ae),j=ae),r.bindTexture(F,se||Y[F]),ve.type=F,ve.texture=se)}function P(){const F=re[j];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(F){Ve.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ve.copy(F))}function De(F){Qe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Qe.copy(F))}function Te(F,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let ve=ae.get(F);ve===void 0&&(ve=r.getUniformBlockIndex(se,F.name),ae.set(F,ve))}function ue(F,se){const ve=c.get(se).get(F);l.get(se)!==ve&&(r.uniformBlockBinding(se,ve,F.__bindingPointIndex),l.set(se,ve))}function ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,re={},u={},d=new WeakMap,f=[],m=null,v=!1,p=null,g=null,_=null,x=null,y=null,b=null,w=null,C=new Fe(0,0,0),I=0,T=!1,E=null,R=null,O=null,D=null,k=null,Ve.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:ge,bindFramebuffer:Le,drawBuffers:be,useProgram:Ye,setBlending:ft,setMaterial:Oe,setFlipSided:Ne,setCullFace:xe,setLineWidth:pt,setPolygonOffset:Me,setScissorTest:Ge,activeTexture:Lt,bindTexture:Mt,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:G,texImage2D:we,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:Se,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:he,viewport:De,reset:ze}}function Hy(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return f?new OffscreenCanvas(P,S):pr("canvas")}function v(P,S,G){let K=1;const Q=Mt(P);if((Q.width>G||Q.height>G)&&(K=G/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const q=Math.floor(K*Q.width),Ae=Math.floor(K*Q.height);u===void 0&&(u=m(q,Ae));const oe=S?m(q,Ae):u;return oe.width=q,oe.height=Ae,oe.getContext("2d").drawImage(P,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+q+"x"+Ae+")."),oe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),P;return P}function p(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(P,S,G,K,Q=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q=S;if(S===r.RED&&(G===r.FLOAT&&(q=r.R32F),G===r.HALF_FLOAT&&(q=r.R16F),G===r.UNSIGNED_BYTE&&(q=r.R8)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(q=r.R8UI),G===r.UNSIGNED_SHORT&&(q=r.R16UI),G===r.UNSIGNED_INT&&(q=r.R32UI),G===r.BYTE&&(q=r.R8I),G===r.SHORT&&(q=r.R16I),G===r.INT&&(q=r.R32I)),S===r.RG&&(G===r.FLOAT&&(q=r.RG32F),G===r.HALF_FLOAT&&(q=r.RG16F),G===r.UNSIGNED_BYTE&&(q=r.RG8)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(q=r.RG8UI),G===r.UNSIGNED_SHORT&&(q=r.RG16UI),G===r.UNSIGNED_INT&&(q=r.RG32UI),G===r.BYTE&&(q=r.RG8I),G===r.SHORT&&(q=r.RG16I),G===r.INT&&(q=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(q=r.RGB8UI),G===r.UNSIGNED_SHORT&&(q=r.RGB16UI),G===r.UNSIGNED_INT&&(q=r.RGB32UI),G===r.BYTE&&(q=r.RGB8I),G===r.SHORT&&(q=r.RGB16I),G===r.INT&&(q=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),G===r.UNSIGNED_INT&&(q=r.RGBA32UI),G===r.BYTE&&(q=r.RGBA8I),G===r.SHORT&&(q=r.RGBA16I),G===r.INT&&(q=r.RGBA32I)),S===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),S===r.RGBA){const Ae=Q?Eo:$e.getTransfer(K);G===r.FLOAT&&(q=r.RGBA32F),G===r.HALF_FLOAT&&(q=r.RGBA16F),G===r.UNSIGNED_BYTE&&(q=Ae===ot?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(P,S){let G;return P?S===null||S===Gi||S===dr?G=r.DEPTH24_STENCIL8:S===Nn?G=r.DEPTH32F_STENCIL8:S===ur&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===dr?G=r.DEPTH_COMPONENT24:S===Nn?G=r.DEPTH_COMPONENT32F:S===ur&&(G=r.DEPTH_COMPONENT16),G}function b(P,S){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==on&&P.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){const S=P.target;S.removeEventListener("dispose",w),I(S),S.isVideoTexture&&h.delete(S)}function C(P){const S=P.target;S.removeEventListener("dispose",C),E(S)}function I(P){const S=n.get(P);if(S.__webglInit===void 0)return;const G=P.source,K=d.get(G);if(K){const Q=K[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(P),Object.keys(K).length===0&&d.delete(G)}n.remove(P)}function T(P){const S=n.get(P);r.deleteTexture(S.__webglTexture);const G=P.source,K=d.get(G);delete K[S.__cacheKey],o.memory.textures--}function E(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Q=0;Q<S.__webglFramebuffer[K].length;Q++)r.deleteFramebuffer(S.__webglFramebuffer[K][Q]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=P.textures;for(let K=0,Q=G.length;K<Q;K++){const q=n.get(G[K]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(P)}let R=0;function O(){R=0}function D(){const P=R;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),R+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function B(P,S){const G=n.get(P);if(P.isVideoTexture&&Ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(G,P,S);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function N(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Y(G,P,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function X(P,S){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Y(G,P,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function V(P,S){const G=n.get(P);if(P.version>0&&G.__version!==P.version){J(G,P,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const j={[cr]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[sl]:r.MIRRORED_REPEAT},re={[on]:r.NEAREST,[lp]:r.NEAREST_MIPMAP_NEAREST,[Ir]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Zo]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},ce={[fp]:r.NEVER,[yp]:r.ALWAYS,[pp]:r.LESS,[Gd]:r.LEQUAL,[mp]:r.EQUAL,[_p]:r.GEQUAL,[gp]:r.GREATER,[vp]:r.NOTEQUAL};function ne(P,S){if(S.type===Nn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Dn||S.magFilter===Zo||S.magFilter===Ir||S.magFilter===ki||S.minFilter===Dn||S.minFilter===Zo||S.minFilter===Ir||S.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,j[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,j[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,j[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,re[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,re[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===on||S.minFilter!==Ir&&S.minFilter!==ki||S.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(P,S){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));const K=S.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const q=k(S);if(q!==P.__cacheKey){Q[q]===void 0&&(Q[q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[q].usedTimes++;const Ae=Q[P.__cacheKey];Ae!==void 0&&(Q[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(S)),P.__cacheKey=q,P.__webglTexture=Q[q].texture}return G}function Qe(P,S,G){return Math.floor(Math.floor(P/G)/S)}function He(P,S,G,K){const q=P.updateRanges;if(q.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,K,S.data);else{q.sort((ie,he)=>ie.start-he.start);let Ae=0;for(let ie=1;ie<q.length;ie++){const he=q[Ae],De=q[ie],Te=he.start+he.count,ue=Qe(De.start,S.width,4),ze=Qe(he.start,S.width,4);De.start<=Te+1&&ue===ze&&Qe(De.start+De.count-1,S.width,4)===ue?he.count=Math.max(he.count,De.start+De.count-he.start):(++Ae,q[Ae]=De)}q.length=Ae+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),Se=r.getParameter(r.UNPACK_SKIP_PIXELS),we=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ie=0,he=q.length;ie<he;ie++){const De=q[ie],Te=Math.floor(De.start/4),ue=Math.ceil(De.count/4),ze=Te%S.width,F=Math.floor(Te/S.width),se=ue,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,ze,F,se,ae,G,K,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),r.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function Y(P,S,G){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const Q=Ve(P,S),q=S.source;t.bindTexture(K,P.__webglTexture,r.TEXTURE0+G);const Ae=n.get(q);if(q.version!==Ae.__version||Q===!0){t.activeTexture(r.TEXTURE0+G);const oe=$e.getPrimaries($e.workingColorSpace),Se=S.colorSpace===di?null:$e.getPrimaries(S.colorSpace),we=S.colorSpace===di||oe===Se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=v(S.image,!1,i.maxTextureSize);ie=Lt(S,ie);const he=s.convert(S.format,S.colorSpace),De=s.convert(S.type);let Te=x(S.internalFormat,he,De,S.colorSpace,S.isVideoTexture);ne(K,S);let ue;const ze=S.mipmaps,F=S.isVideoTexture!==!0,se=Ae.__version===void 0||Q===!0,ae=q.dataReady,ve=b(S,ie);if(S.isDepthTexture)Te=y(S.format===fr,S.type),se&&(F?t.texStorage2D(r.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,De,null));else if(S.isDataTexture)if(ze.length>0){F&&se&&t.texStorage2D(r.TEXTURE_2D,ve,Te,ze[0].width,ze[0].height);for(let ee=0,Z=ze.length;ee<Z;ee++)ue=ze[ee],F?ae&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,De,ue.data):t.texImage2D(r.TEXTURE_2D,ee,Te,ue.width,ue.height,0,he,De,ue.data);S.generateMipmaps=!1}else F?(se&&t.texStorage2D(r.TEXTURE_2D,ve,Te,ie.width,ie.height),ae&&He(S,ie,he,De)):t.texImage2D(r.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,De,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Te,ze[0].width,ze[0].height,ie.depth);for(let ee=0,Z=ze.length;ee<Z;ee++)if(ue=ze[ee],S.format!==fn)if(he!==null)if(F){if(ae)if(S.layerUpdates.size>0){const ye=_u(ue.width,ue.height,S.format,S.type);for(const Be of S.layerUpdates){const lt=ue.data.subarray(Be*ye/ue.data.BYTES_PER_ELEMENT,(Be+1)*ye/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Be,ue.width,ue.height,1,he,lt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,he,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Te,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ie.depth,he,De,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Te,ue.width,ue.height,ie.depth,0,he,De,ue.data)}else{F&&se&&t.texStorage2D(r.TEXTURE_2D,ve,Te,ze[0].width,ze[0].height);for(let ee=0,Z=ze.length;ee<Z;ee++)ue=ze[ee],S.format!==fn?he!==null?F?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ae&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ue.width,ue.height,he,De,ue.data):t.texImage2D(r.TEXTURE_2D,ee,Te,ue.width,ue.height,0,he,De,ue.data)}else if(S.isDataArrayTexture)if(F){if(se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Te,ie.width,ie.height,ie.depth),ae)if(S.layerUpdates.size>0){const ee=_u(ie.width,ie.height,S.format,S.type);for(const Z of S.layerUpdates){const ye=ie.data.subarray(Z*ee/ie.data.BYTES_PER_ELEMENT,(Z+1)*ee/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ie.width,ie.height,1,he,De,ye)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,De,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,he,De,ie.data);else if(S.isData3DTexture)F?(se&&t.texStorage3D(r.TEXTURE_3D,ve,Te,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,De,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,he,De,ie.data);else if(S.isFramebufferTexture){if(se)if(F)t.texStorage2D(r.TEXTURE_2D,ve,Te,ie.width,ie.height);else{let ee=ie.width,Z=ie.height;for(let ye=0;ye<ve;ye++)t.texImage2D(r.TEXTURE_2D,ye,Te,ee,Z,0,he,De,null),ee>>=1,Z>>=1}}else if(ze.length>0){if(F&&se){const ee=Mt(ze[0]);t.texStorage2D(r.TEXTURE_2D,ve,Te,ee.width,ee.height)}for(let ee=0,Z=ze.length;ee<Z;ee++)ue=ze[ee],F?ae&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,he,De,ue):t.texImage2D(r.TEXTURE_2D,ee,Te,he,De,ue);S.generateMipmaps=!1}else if(F){if(se){const ee=Mt(ie);t.texStorage2D(r.TEXTURE_2D,ve,Te,ee.width,ee.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,De,ie)}else t.texImage2D(r.TEXTURE_2D,0,Te,he,De,ie);p(S)&&g(K),Ae.__version=q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function J(P,S,G){if(S.image.length!==6)return;const K=Ve(P,S),Q=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+G);const q=n.get(Q);if(Q.version!==q.__version||K===!0){t.activeTexture(r.TEXTURE0+G);const Ae=$e.getPrimaries($e.workingColorSpace),oe=S.colorSpace===di?null:$e.getPrimaries(S.colorSpace),Se=S.colorSpace===di||Ae===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const we=S.isCompressedTexture||S.image[0].isCompressedTexture,ie=S.image[0]&&S.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!we&&!ie?he[Z]=v(S.image[Z],!0,i.maxCubemapSize):he[Z]=ie?S.image[Z].image:S.image[Z],he[Z]=Lt(S,he[Z]);const De=he[0],Te=s.convert(S.format,S.colorSpace),ue=s.convert(S.type),ze=x(S.internalFormat,Te,ue,S.colorSpace),F=S.isVideoTexture!==!0,se=q.__version===void 0||K===!0,ae=Q.dataReady;let ve=b(S,De);ne(r.TEXTURE_CUBE_MAP,S);let ee;if(we){F&&se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,ze,De.width,De.height);for(let Z=0;Z<6;Z++){ee=he[Z].mipmaps;for(let ye=0;ye<ee.length;ye++){const Be=ee[ye];S.format!==fn?Te!==null?F?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Be.width,Be.height,Te,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,ze,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,Be.width,Be.height,Te,ue,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,ze,Be.width,Be.height,0,Te,ue,Be.data)}}}else{if(ee=S.mipmaps,F&&se){ee.length>0&&ve++;const Z=Mt(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ie){F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Te,ue,he[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,he[Z].width,he[Z].height,0,Te,ue,he[Z].data);for(let ye=0;ye<ee.length;ye++){const lt=ee[ye].image[Z].image;F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,lt.width,lt.height,Te,ue,lt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,ze,lt.width,lt.height,0,Te,ue,lt.data)}}else{F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Te,ue,he[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,ze,Te,ue,he[Z]);for(let ye=0;ye<ee.length;ye++){const Be=ee[ye];F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,Te,ue,Be.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,ze,Te,ue,Be.image[Z])}}}p(S)&&g(r.TEXTURE_CUBE_MAP),q.__version=Q.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ge(P,S,G,K,Q,q){const Ae=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Se=x(G.internalFormat,Ae,oe,G.colorSpace),we=n.get(S),ie=n.get(G);if(ie.__renderTarget=S,!we.__hasExternalTextures){const he=Math.max(1,S.width>>q),De=Math.max(1,S.height>>q);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,q,Se,he,De,S.depth,0,Ae,oe,null):t.texImage2D(Q,q,Se,he,De,0,Ae,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Me(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Q,ie.__webglTexture,0,pt(S)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Q,ie.__webglTexture,q),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(P,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){const K=S.depthTexture,Q=K&&K.isDepthTexture?K.type:null,q=y(S.stencilBuffer,Q),Ae=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=pt(S);Me(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,q,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,q,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,q,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,P)}else{const K=S.textures;for(let Q=0;Q<K.length;Q++){const q=K[Q],Ae=s.convert(q.format,q.colorSpace),oe=s.convert(q.type),Se=x(q.internalFormat,Ae,oe,q.colorSpace),we=pt(S);G&&Me(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,Se,S.width,S.height):Me(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,Se,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Se,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const Q=K.__webglTexture,q=pt(S);if(S.depthTexture.format===hr)Me(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(S.depthTexture.format===fr)Me(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ye(P){const S=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=K}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=P.texture.mipmaps;K&&K.length>0?be(S.__webglFramebuffer[0],P):be(S.__webglFramebuffer,P)}else if(G){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),Le(S.__webglDepthbuffer[K],P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,q)}}else{const K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Le(S.__webglDepthbuffer,P,!1);else{const Q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,q)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function At(P,S,G){const K=n.get(P);S!==void 0&&ge(K.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ye(P)}function L(P){const S=P.texture,G=n.get(P),K=n.get(S);P.addEventListener("dispose",C);const Q=P.textures,q=P.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,o.memory.textures++),q){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let Se=0;Se<S.mipmaps.length;Se++)G.__webglFramebuffer[oe][Se]=r.createFramebuffer()}else G.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<S.mipmaps.length;oe++)G.__webglFramebuffer[oe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let oe=0,Se=Q.length;oe<Se;oe++){const we=n.get(Q[oe]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&Me(P)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const Se=Q[oe];G.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const we=s.convert(Se.format,Se.colorSpace),ie=s.convert(Se.type),he=x(Se.internalFormat,we,ie,Se.colorSpace,P.isXRRenderTarget===!0),De=pt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,he,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),ne(r.TEXTURE_CUBE_MAP,S);for(let oe=0;oe<6;oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)ge(G.__webglFramebuffer[oe][Se],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Se);else ge(G.__webglFramebuffer[oe],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);p(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let oe=0,Se=Q.length;oe<Se;oe++){const we=Q[oe],ie=n.get(we);let he=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),ne(he,we),ge(G.__webglFramebuffer,P,we,r.COLOR_ATTACHMENT0+oe,he,0),p(we)&&g(he)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(oe=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),ne(oe,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)ge(G.__webglFramebuffer[Se],P,S,r.COLOR_ATTACHMENT0,oe,Se);else ge(G.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,oe,0);p(S)&&g(oe),t.unbindTexture()}P.depthBuffer&&Ye(P)}function ft(P){const S=P.textures;for(let G=0,K=S.length;G<K;G++){const Q=S[G];if(p(Q)){const q=_(P),Ae=n.get(Q).__webglTexture;t.bindTexture(q,Ae),g(q),t.unbindTexture()}}}const Oe=[],Ne=[];function xe(P){if(P.samples>0){if(Me(P)===!1){const S=P.textures,G=P.width,K=P.height;let Q=r.COLOR_BUFFER_BIT;const q=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=n.get(P),oe=S.length>1;if(oe)for(let we=0;we<S.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Se=P.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let we=0;we<S.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=n.get(S[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,G,K,0,0,G,K,Q,r.NEAREST),l===!0&&(Oe.length=0,Ne.length=0,Oe.push(r.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Oe.push(q),Ne.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<S.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[we]);const ie=n.get(S[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function pt(P){return Math.min(i.maxSamples,P.samples)}function Me(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ge(P){const S=o.render.frame;h.get(P)!==S&&(h.set(P,S),P.update())}function Lt(P,S){const G=P.colorSpace,K=P.format,Q=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Rs&&G!==di&&($e.getTransfer(G)===ot?(K!==fn||Q!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=At,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Me}function Gy(r,e){function t(n,i=di){let s;const o=$e.getTransfer(i);if(n===Bn)return r.UNSIGNED_BYTE;if(n===Kl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Bd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Od)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ud)return r.BYTE;if(n===Fd)return r.SHORT;if(n===ur)return r.UNSIGNED_SHORT;if(n===Yl)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===Nn)return r.FLOAT;if(n===Er)return r.HALF_FLOAT;if(n===kd)return r.ALPHA;if(n===zd)return r.RGB;if(n===fn)return r.RGBA;if(n===hr)return r.DEPTH_COMPONENT;if(n===fr)return r.DEPTH_STENCIL;if(n===Vd)return r.RED;if(n===Jl)return r.RED_INTEGER;if(n===Hd)return r.RG;if(n===Ql)return r.RG_INTEGER;if(n===ec)return r.RGBA_INTEGER;if(n===mo||n===go||n===vo||n===_o)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===ol||n===al||n===ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cl||n===ul||n===dl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cl||n===ul)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===dl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hl||n===fl||n===pl||n===ml||n===gl||n===vl||n===_l||n===yl||n===xl||n===Ml||n===Sl||n===El||n===bl||n===wl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ml)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===wl)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===Al||n===Cl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Tl)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Al)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Pl||n===Il||n===Ll)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Rl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`;class Xy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new th(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:Wy,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new Oo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qy extends Us{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const v=typeof XRWebGLBinding<"u",p=new Xy,g={},_=t.getContextAttributes();let x=null,y=null;const b=[],w=[],C=new Ke;let I=null;const T=new Xt;T.viewport=new Je;const E=new Xt;E.viewport=new Je;const R=[T,E],O=new rg;let D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=b[Y];return J===void 0&&(J=new ya,b[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=b[Y];return J===void 0&&(J=new ya,b[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=b[Y];return J===void 0&&(J=new ya,b[Y]=J),J.getHandSpace()};function B(Y){const J=w.indexOf(Y.inputSource);if(J===-1)return;const ge=b[J];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,c||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function N(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<b.length;Y++){const J=w[Y];J!==null&&(w[Y]=null,b[Y].disconnect(J))}D=null,k=null,p.reset();for(const Y in g)delete g[Y];e.setRenderTarget(x),f=null,d=null,u=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",N),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,be=null;_.depth&&(be=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=_.stencil?fr:hr,Le=_.stencil?dr:Gi);const Ye={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Wi(d.textureWidth,d.textureHeight,{format:fn,type:Bn,depthTexture:new eh(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wi(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(Y){for(let J=0;J<Y.removed.length;J++){const ge=Y.removed[J],Le=w.indexOf(ge);Le>=0&&(w[Le]=null,b[Le].disconnect(ge))}for(let J=0;J<Y.added.length;J++){const ge=Y.added[J];let Le=w.indexOf(ge);if(Le===-1){for(let Ye=0;Ye<b.length;Ye++)if(Ye>=w.length){w.push(ge),Le=Ye;break}else if(w[Ye]===null){w[Ye]=ge,Le=Ye;break}if(Le===-1)break}const be=b[Le];be&&be.connect(ge)}}const V=new U,j=new U;function re(Y,J,ge){V.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const Le=V.distanceTo(j),be=J.projectionMatrix.elements,Ye=ge.projectionMatrix.elements,At=be[14]/(be[10]-1),L=be[14]/(be[10]+1),ft=(be[9]+1)/be[5],Oe=(be[9]-1)/be[5],Ne=(be[8]-1)/be[0],xe=(Ye[8]+1)/Ye[0],pt=At*Ne,Me=At*xe,Ge=Le/(-Ne+xe),Lt=Ge*-Ne;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(Ge),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),be[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Mt=At+Ge,P=L+Ge,S=pt-Lt,G=Me+(Le-Lt),K=ft*L/P*Mt,Q=Oe*L/P*Mt;Y.projectionMatrix.makePerspective(S,G,K,Q,Mt,P),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ce(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let J=Y.near,ge=Y.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),O.near=E.near=T.near=J,O.far=E.far=T.far=ge,(D!==O.near||k!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,k=O.far),O.layers.mask=Y.layers.mask|6,T.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;const Le=Y.parent,be=O.cameras;ce(O,Le);for(let Ye=0;Ye<be.length;Ye++)ce(be[Ye],Le);be.length===2?re(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),ne(Y,O,Le)};function ne(Y,J,ge){ge===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ps*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return g[Y]};let Ve=null;function Qe(Y,J){if(h=J.getViewerPose(c||o),m=J,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Le=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Le=!0);for(let L=0;L<ge.length;L++){const ft=ge[L];let Oe=null;if(f!==null)Oe=f.getViewport(ft);else{const xe=u.getViewSubImage(d,ft);Oe=xe.viewport,L===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let Ne=R[L];Ne===void 0&&(Ne=new Xt,Ne.layers.enable(L),Ne.viewport=new Je,R[L]=Ne),Ne.matrix.fromArray(ft.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ft.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),L===0&&(O.matrix.copy(Ne.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Le===!0&&O.cameras.push(Ne)}const be=i.enabledFeatures;if(be&&be.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const L=u.getDepthInformation(ge[0]);L&&L.isValid&&L.texture&&p.init(L,i.renderState)}if(be&&be.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<ge.length;L++){const ft=ge[L].camera;if(ft){let Oe=g[ft];Oe||(Oe=new th,g[ft]=Oe);const Ne=u.getCameraImage(ft);Oe.sourceTexture=Ne}}}}for(let ge=0;ge<b.length;ge++){const Le=w[ge],be=b[ge];Le!==null&&be!==void 0&&be.update(Le,J,c||o)}Ve&&Ve(Y,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}const He=new dh;He.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){Ve=Y},this.dispose=function(){}}}const Ri=new Rt,jy=new Ce;function Yy(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Kd(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,_,x,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(p,g):g.isMeshToonMaterial?(s(p,g),u(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),v(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,x):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Jt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Jt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=e.get(g),x=_.envMap,y=_.envMapRotation;x&&(p.envMap.value=x,Ri.copy(y),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),p.envMapRotation.value.setFromMatrix4(jy.makeRotationFromEuler(Ri)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,x){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=x*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Jt&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ky(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function c(_,x){let y=i[_.id];y===void 0&&(m(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",p));const b=x.program;n.updateUBOMapping(_,b);const w=e.render.frame;s[_.id]!==w&&(d(_),s[_.id]=w)}function h(_){const x=u();_.__bindingPointIndex=x;const y=r.createBuffer(),b=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=i[_.id],y=_.uniforms,b=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,C=y.length;w<C;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,E=I.length;T<E;T++){const R=I[T];if(f(R,w,T,b)===!0){const O=R.__offset,D=Array.isArray(R.value)?R.value:[R.value];let k=0;for(let B=0;B<D.length;B++){const N=D[B],X=v(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,O+k,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,O,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,x,y,b){const w=_.value,C=x+"_"+y;if(b[C]===void 0)return typeof w=="number"||typeof w=="boolean"?b[C]=w:b[C]=w.clone(),!0;{const I=b[C];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return b[C]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function m(_){const x=_.uniforms;let y=0;const b=16;for(let C=0,I=x.length;C<I;C++){const T=Array.isArray(x[C])?x[C]:[x[C]];for(let E=0,R=T.length;E<R;E++){const O=T[E],D=Array.isArray(O.value)?O.value:[O.value];for(let k=0,B=D.length;k<B;k++){const N=D[k],X=v(N),V=y%b,j=V%X.boundary,re=V+j;y+=j,re!==0&&b-re<X.storage&&(y+=b-re),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=X.storage}}}const w=y%b;return w>0&&(y+=b-w),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}class Zy{constructor(e={}){const{canvas:t=Fp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let p=null,g=null;const _=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let b=!1;this._outputColorSpace=ct;let w=0,C=0,I=null,T=-1,E=null;const R=new Je,O=new Je;let D=null;const k=new Fe(0);let B=0,N=t.width,X=t.height,V=1,j=null,re=null;const ce=new Je(0,0,N,X),ne=new Je(0,0,N,X);let Ve=!1;const Qe=new oc;let He=!1,Y=!1;const J=new Ce,ge=new U,Le=new Je,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function At(){return I===null?V:1}let L=n;function ft(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jl}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ee,!1),L===null){const z="webgl2";if(L=ft(z,A),L===null)throw ft(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Oe,Ne,xe,pt,Me,Ge,Lt,Mt,P,S,G,K,Q,q,Ae,oe,Se,we,ie,he,De,Te,ue,ze;function F(){Oe=new a_(L),Oe.init(),Te=new Gy(L,Oe),Ne=new e_(L,Oe,e,Te),xe=new Vy(L,Oe),Ne.reversedDepthBuffer&&d&&xe.buffers.depth.setReversed(!0),pt=new u_(L),Me=new Cy,Ge=new Hy(L,Oe,xe,Me,Ne,Te,pt),Lt=new n_(y),Mt=new o_(y),P=new gg(L),ue=new J0(L,P),S=new l_(L,P,pt,ue),G=new h_(L,S,P,pt),ie=new d_(L,Ne,Ge),oe=new t_(Me),K=new Ay(y,Lt,Mt,Oe,Ne,ue,oe),Q=new Yy(y,Me),q=new Py,Ae=new Fy(Oe),we=new Z0(y,Lt,Mt,xe,G,f,l),Se=new ky(y,G,Ne),ze=new Ky(L,pt,Ne,xe),he=new Q0(L,Oe,pt),De=new c_(L,Oe,pt),pt.programs=K.programs,y.capabilities=Ne,y.extensions=Oe,y.properties=Me,y.renderLists=q,y.shadowMap=Se,y.state=xe,y.info=pt}F();const se=new qy(y,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(N,X,!1))},this.getSize=function(A){return A.set(N,X)},this.setSize=function(A,z,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,X=z,t.width=Math.floor(A*V),t.height=Math.floor(z*V),W===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(N*V,X*V).floor()},this.setDrawingBufferSize=function(A,z,W){N=A,X=z,V=W,t.width=Math.floor(A*W),t.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ce)},this.setViewport=function(A,z,W,$){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,z,W,$),xe.viewport(R.copy(ce).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,z,W,$){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,z,W,$),xe.scissor(O.copy(ne).multiplyScalar(V).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){xe.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,W=!0){let $=0;if(A){let H=!1;if(I!==null){const te=I.texture.format;H=te===ec||te===Ql||te===Jl}if(H){const te=I.texture.type,de=te===Bn||te===Gi||te===ur||te===dr||te===Kl||te===Zl,_e=we.getClearColor(),me=we.getClearAlpha(),Ie=_e.r,Ue=_e.g,Re=_e.b;de?(m[0]=Ie,m[1]=Ue,m[2]=Re,m[3]=me,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Ie,v[1]=Ue,v[2]=Re,v[3]=me,L.clearBufferiv(L.COLOR,0,v))}else $|=L.COLOR_BUFFER_BIT}z&&($|=L.DEPTH_BUFFER_BIT),W&&($|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),q.dispose(),Ae.dispose(),Me.dispose(),Lt.dispose(),Mt.dispose(),G.dispose(),ue.dispose(),ze.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",An),se.removeEventListener("sessionend",Mc),Si.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=pt.autoReset,z=Se.enabled,W=Se.autoUpdate,$=Se.needsUpdate,H=Se.type;F(),pt.autoReset=A,Se.enabled=z,Se.autoUpdate=W,Se.needsUpdate=$,Se.type=H}function ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Z(A){const z=A.target;z.removeEventListener("dispose",Z),ye(z)}function ye(A){Be(A),Me.remove(A)}function Be(A){const z=Me.get(A).programs;z!==void 0&&(z.forEach(function(W){K.releaseProgram(W)}),A.isShaderMaterial&&K.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,$,H,te){z===null&&(z=be);const de=H.isMesh&&H.matrixWorld.determinant()<0,_e=gf(A,z,W,$,H);xe.setMaterial($,de);let me=W.index,Ie=1;if($.wireframe===!0){if(me=S.getWireframeAttribute(W),me===void 0)return;Ie=2}const Ue=W.drawRange,Re=W.attributes.position;let Ze=Ue.start*Ie,rt=(Ue.start+Ue.count)*Ie;te!==null&&(Ze=Math.max(Ze,te.start*Ie),rt=Math.min(rt,(te.start+te.count)*Ie)),me!==null?(Ze=Math.max(Ze,0),rt=Math.min(rt,me.count)):Re!=null&&(Ze=Math.max(Ze,0),rt=Math.min(rt,Re.count));const xt=rt-Ze;if(xt<0||xt===1/0)return;ue.setup(H,$,_e,W,me);let ut,at=he;if(me!==null&&(ut=P.get(me),at=De,at.setIndex(ut)),H.isMesh)$.wireframe===!0?(xe.setLineWidth($.wireframeLinewidth*At()),at.setMode(L.LINES)):at.setMode(L.TRIANGLES);else if(H.isLine){let Pe=$.linewidth;Pe===void 0&&(Pe=1),xe.setLineWidth(Pe*At()),H.isLineSegments?at.setMode(L.LINES):H.isLineLoop?at.setMode(L.LINE_LOOP):at.setMode(L.LINE_STRIP)}else H.isPoints?at.setMode(L.POINTS):H.isSprite&&at.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))at.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Pe=H._multiDrawStarts,vt=H._multiDrawCounts,et=H._multiDrawCount,Qt=me?P.get(me).bytesPerElement:1,ji=Me.get($).currentProgram.getUniforms();for(let en=0;en<et;en++)ji.setValue(L,"_gl_DrawID",en),at.render(Pe[en]/Qt,vt[en])}else if(H.isInstancedMesh)at.renderInstances(Ze,xt,H.count);else if(W.isInstancedBufferGeometry){const Pe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,Pe);at.renderInstances(Ze,xt,vt)}else at.render(Ze,xt)};function lt(A,z,W){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,Pr(A,z,W),A.side=gi,A.needsUpdate=!0,Pr(A,z,W),A.side=Jn):Pr(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),g=Ae.get(W),g.init(z),x.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),A!==W&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights();const $=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const te=H.material;if(te)if(Array.isArray(te))for(let de=0;de<te.length;de++){const _e=te[de];lt(_e,W,H),$.add(_e)}else lt(te,W,H),$.add(te)}),g=x.pop(),$},this.compileAsync=function(A,z,W=null){const $=this.compile(A,z,W);return new Promise(H=>{function te(){if($.forEach(function(de){Me.get(de).currentProgram.isReady()&&$.delete(de)}),$.size===0){H(A);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let it=null;function kn(A){it&&it(A)}function An(){Si.stop()}function Mc(){Si.start()}const Si=new dh;Si.setAnimationLoop(kn),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(A){it=A,se.setAnimationLoop(A),A===null?Si.stop():Si.start()},se.addEventListener("sessionstart",An),se.addEventListener("sessionend",Mc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,z,I),g=Ae.get(A,x.length),g.init(z),x.push(g),J.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix(J,Un,z.reversedDepth),Y=this.localClippingEnabled,He=oe.init(this.clippingPlanes,Y),p=q.get(A,_.length),p.init(),_.push(p),se.enabled===!0&&se.isPresenting===!0){const te=y.xr.getDepthSensingMesh();te!==null&&Yo(te,z,-1/0,y.sortObjects)}Yo(A,z,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(j,re),Ye=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ye&&we.addToRenderList(p,A),this.info.render.frame++,He===!0&&oe.beginShadows();const W=g.state.shadowsArray;Se.render(W,A,z),He===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,H=p.transmissive;if(g.setupLights(),z.isArrayCamera){const te=z.cameras;if(H.length>0)for(let de=0,_e=te.length;de<_e;de++){const me=te[de];Ec($,H,A,me)}Ye&&we.render(A);for(let de=0,_e=te.length;de<_e;de++){const me=te[de];Sc(p,A,me,me.viewport)}}else H.length>0&&Ec($,H,A,z),Ye&&we.render(A),Sc(p,A,z);I!==null&&C===0&&(Ge.updateMultisampleRenderTarget(I),Ge.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(y,A,z),ue.resetDefaultState(),T=-1,E=null,x.pop(),x.length>0?(g=x[x.length-1],He===!0&&oe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function Yo(A,z,W,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qe.intersectsSprite(A)){$&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);const de=G.update(A),_e=A.material;_e.visible&&p.push(A,de,_e,W,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qe.intersectsObject(A))){const de=G.update(A),_e=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(_e)){const me=de.groups;for(let Ie=0,Ue=me.length;Ie<Ue;Ie++){const Re=me[Ie],Ze=_e[Re.materialIndex];Ze&&Ze.visible&&p.push(A,de,Ze,W,Le.z,Re)}}else _e.visible&&p.push(A,de,_e,W,Le.z,null)}}const te=A.children;for(let de=0,_e=te.length;de<_e;de++)Yo(te[de],z,W,$)}function Sc(A,z,W,$){const H=A.opaque,te=A.transmissive,de=A.transparent;g.setupLightsView(W),He===!0&&oe.setGlobalState(y.clippingPlanes,W),$&&xe.viewport(R.copy($)),H.length>0&&Rr(H,z,W),te.length>0&&Rr(te,z,W),de.length>0&&Rr(de,z,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Ec(A,z,W,$){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Wi(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Er:Bn,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const te=g.state.transmissionRenderTarget[$.id],de=$.viewport||R;te.setSize(de.z*y.transmissionResolutionScale,de.w*y.transmissionResolutionScale);const _e=y.getRenderTarget(),me=y.getActiveCubeFace(),Ie=y.getActiveMipmapLevel();y.setRenderTarget(te),y.getClearColor(k),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),Ye&&we.render(W);const Ue=y.toneMapping;y.toneMapping=mi;const Re=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),He===!0&&oe.setGlobalState(y.clippingPlanes,$),Rr(A,W,$),Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let rt=0,xt=z.length;rt<xt;rt++){const ut=z[rt],at=ut.object,Pe=ut.geometry,vt=ut.material,et=ut.group;if(vt.side===Jn&&at.layers.test($.layers)){const Qt=vt.side;vt.side=Jt,vt.needsUpdate=!0,bc(at,W,$,Pe,vt,et),vt.side=Qt,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(te),Ge.updateRenderTargetMipmap(te))}y.setRenderTarget(_e,me,Ie),y.setClearColor(k,B),Re!==void 0&&($.viewport=Re),y.toneMapping=Ue}function Rr(A,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let H=0,te=A.length;H<te;H++){const de=A[H],_e=de.object,me=de.geometry,Ie=de.group;let Ue=de.material;Ue.allowOverride===!0&&$!==null&&(Ue=$),_e.layers.test(W.layers)&&bc(_e,z,W,me,Ue,Ie)}}function bc(A,z,W,$,H,te){A.onBeforeRender(y,z,W,$,H,te),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(y,z,W,$,A,te),H.transparent===!0&&H.side===Jn&&H.forceSinglePass===!1?(H.side=Jt,H.needsUpdate=!0,y.renderBufferDirect(W,z,$,H,A,te),H.side=gi,H.needsUpdate=!0,y.renderBufferDirect(W,z,$,H,A,te),H.side=Jn):y.renderBufferDirect(W,z,$,H,A,te),A.onAfterRender(y,z,W,$,H,te)}function Pr(A,z,W){z.isScene!==!0&&(z=be);const $=Me.get(A),H=g.state.lights,te=g.state.shadowsArray,de=H.state.version,_e=K.getParameters(A,H.state,te,z,W),me=K.getProgramCacheKey(_e);let Ie=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?Mt:Lt).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ie===void 0&&(A.addEventListener("dispose",Z),Ie=new Map,$.programs=Ie);let Ue=Ie.get(me);if(Ue!==void 0){if($.currentProgram===Ue&&$.lightsStateVersion===de)return Tc(A,_e),Ue}else _e.uniforms=K.getUniforms(A),A.onBeforeCompile(_e,y),Ue=K.acquireProgram(_e,me),Ie.set(me,Ue),$.uniforms=_e.uniforms;const Re=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Tc(A,_e),$.needsLights=_f(A),$.lightsStateVersion=de,$.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Ue,$.uniformsList=null,Ue}function wc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=yo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Tc(A,z){const W=Me.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function gf(A,z,W,$,H){z.isScene!==!0&&(z=be),Ge.resetTextureUnits();const te=z.fog,de=$.isMeshStandardMaterial?z.environment:null,_e=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Rs,me=($.isMeshStandardMaterial?Mt:Lt).get($.envMap||de),Ie=$.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Re=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let xt=mi;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=y.toneMapping);const ut=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ut!==void 0?ut.length:0,Pe=Me.get($),vt=g.state.lights;if(He===!0&&(Y===!0||A!==E)){const Ht=A===E&&$.id===T;oe.setState($,A,Ht)}let et=!1;$.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==vt.state.version||Pe.outputColorSpace!==_e||H.isBatchedMesh&&Pe.batching===!1||!H.isBatchedMesh&&Pe.batching===!0||H.isBatchedMesh&&Pe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Pe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Pe.instancing===!1||!H.isInstancedMesh&&Pe.instancing===!0||H.isSkinnedMesh&&Pe.skinning===!1||!H.isSkinnedMesh&&Pe.skinning===!0||H.isInstancedMesh&&Pe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Pe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Pe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Pe.instancingMorph===!1&&H.morphTexture!==null||Pe.envMap!==me||$.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==oe.numPlanes||Pe.numIntersection!==oe.numIntersection)||Pe.vertexAlphas!==Ie||Pe.vertexTangents!==Ue||Pe.morphTargets!==Re||Pe.morphNormals!==Ze||Pe.morphColors!==rt||Pe.toneMapping!==xt||Pe.morphTargetsCount!==at)&&(et=!0):(et=!0,Pe.__version=$.version);let Qt=Pe.currentProgram;et===!0&&(Qt=Pr($,z,H));let ji=!1,en=!1,zs=!1;const _t=Qt.getUniforms(),ln=Pe.uniforms;if(xe.useProgram(Qt.program)&&(ji=!0,en=!0,zs=!0),$.id!==T&&(T=$.id,en=!0),ji||E!==A){xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),_t.setValue(L,"projectionMatrix",A.projectionMatrix),_t.setValue(L,"viewMatrix",A.matrixWorldInverse);const qt=_t.map.cameraPosition;qt!==void 0&&qt.setValue(L,ge.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&_t.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,en=!0,zs=!0)}if(H.isSkinnedMesh){_t.setOptional(L,H,"bindMatrix"),_t.setOptional(L,H,"bindMatrixInverse");const Ht=H.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),_t.setValue(L,"boneTexture",Ht.boneTexture,Ge))}H.isBatchedMesh&&(_t.setOptional(L,H,"batchingTexture"),_t.setValue(L,"batchingTexture",H._matricesTexture,Ge),_t.setOptional(L,H,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",H._indirectTexture,Ge),_t.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",H._colorsTexture,Ge));const cn=W.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&ie.update(H,W,Qt),(en||Pe.receiveShadow!==H.receiveShadow)&&(Pe.receiveShadow=H.receiveShadow,_t.setValue(L,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(ln.envMap.value=me,ln.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),en&&(_t.setValue(L,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&vf(ln,zs),te&&$.fog===!0&&Q.refreshFogUniforms(ln,te),Q.refreshMaterialUniforms(ln,$,V,X,g.state.transmissionRenderTarget[A.id]),yo.upload(L,wc(Pe),ln,Ge)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(yo.upload(L,wc(Pe),ln,Ge),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&_t.setValue(L,"center",H.center),_t.setValue(L,"modelViewMatrix",H.modelViewMatrix),_t.setValue(L,"normalMatrix",H.normalMatrix),_t.setValue(L,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ht=$.uniformsGroups;for(let qt=0,Ko=Ht.length;qt<Ko;qt++){const Ei=Ht[qt];ze.update(Ei,Qt),ze.bind(Ei,Qt)}}return Qt}function vf(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function _f(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,z,W){const $=Me.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Me.get(A.texture).__webglTexture=z,Me.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:W,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const W=Me.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const yf=L.createFramebuffer();this.setRenderTarget=function(A,z=0,W=0){I=A,w=z,C=W;let $=!0,H=null,te=!1,de=!1;if(A){const me=Me.get(A);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),$=!1;else if(me.__webglFramebuffer===void 0)Ge.setupRenderTarget(A);else if(me.__hasExternalTextures)Ge.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Re=A.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&Me.has(Re)&&(A.width!==Re.image.width||A.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(A)}}const Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(de=!0);const Ue=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ue[z])?H=Ue[z][W]:H=Ue[z],te=!0):A.samples>0&&Ge.useMultisampledRTT(A)===!1?H=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[W]:H=Ue,R.copy(A.viewport),O.copy(A.scissor),D=A.scissorTest}else R.copy(ce).multiplyScalar(V).floor(),O.copy(ne).multiplyScalar(V).floor(),D=Ve;if(W!==0&&(H=yf),xe.bindFramebuffer(L.FRAMEBUFFER,H)&&$&&xe.drawBuffers(A,H),xe.viewport(R),xe.scissor(O),xe.setScissorTest(D),te){const me=Me.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,me.__webglTexture,W)}else if(de){const me=z;for(let Ie=0;Ie<A.textures.length;Ie++){const Ue=Me.get(A.textures[Ie]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,W,me)}}else if(A!==null&&W!==0){const me=Me.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,me.__webglTexture,W)}T=-1},this.readRenderTargetPixels=function(A,z,W,$,H,te,de,_e=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){xe.bindFramebuffer(L.FRAMEBUFFER,me);try{const Ie=A.textures[_e],Ue=Ie.format,Re=Ie.type;if(!Ne.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&W>=0&&W<=A.height-H&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(z,W,$,H,Te.convert(Ue),Te.convert(Re),te))}finally{const Ie=I!==null?Me.get(I).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,$,H,te,de,_e=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(z>=0&&z<=A.width-$&&W>=0&&W<=A.height-H){xe.bindFramebuffer(L.FRAMEBUFFER,me);const Ie=A.textures[_e],Ue=Ie.format,Re=Ie.type;if(!Ne.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+_e),L.readPixels(z,W,$,H,Te.convert(Ue),Te.convert(Re),0);const rt=I!==null?Me.get(I).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,rt);const xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Bp(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ze),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Ze),L.deleteSync(xt),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,W=0){const $=Math.pow(2,-W),H=Math.floor(A.image.width*$),te=Math.floor(A.image.height*$),de=z!==null?z.x:0,_e=z!==null?z.y:0;Ge.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,de,_e,H,te),xe.unbindTexture()};const xf=L.createFramebuffer(),Mf=L.createFramebuffer();this.copyTextureToTexture=function(A,z,W=null,$=null,H=0,te=null){te===null&&(H!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=H,H=0):te=0);let de,_e,me,Ie,Ue,Re,Ze,rt,xt;const ut=A.isCompressedTexture?A.mipmaps[te]:A.image;if(W!==null)de=W.max.x-W.min.x,_e=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Ie=W.min.x,Ue=W.min.y,Re=W.isBox3?W.min.z:0;else{const cn=Math.pow(2,-H);de=Math.floor(ut.width*cn),_e=Math.floor(ut.height*cn),A.isDataArrayTexture?me=ut.depth:A.isData3DTexture?me=Math.floor(ut.depth*cn):me=1,Ie=0,Ue=0,Re=0}$!==null?(Ze=$.x,rt=$.y,xt=$.z):(Ze=0,rt=0,xt=0);const at=Te.convert(z.format),Pe=Te.convert(z.type);let vt;z.isData3DTexture?(Ge.setTexture3D(z,0),vt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ge.setTexture2DArray(z,0),vt=L.TEXTURE_2D_ARRAY):(Ge.setTexture2D(z,0),vt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const et=L.getParameter(L.UNPACK_ROW_LENGTH),Qt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ji=L.getParameter(L.UNPACK_SKIP_PIXELS),en=L.getParameter(L.UNPACK_SKIP_ROWS),zs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ut.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ut.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ie),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const _t=A.isDataArrayTexture||A.isData3DTexture,ln=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const cn=Me.get(A),Ht=Me.get(z),qt=Me.get(cn.__renderTarget),Ko=Me.get(Ht.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,qt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let Ei=0;Ei<me;Ei++)_t&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(A).__webglTexture,H,Re+Ei),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(z).__webglTexture,te,xt+Ei)),L.blitFramebuffer(Ie,Ue,de,_e,Ze,rt,de,_e,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||Me.has(A)){const cn=Me.get(A),Ht=Me.get(z);xe.bindFramebuffer(L.READ_FRAMEBUFFER,xf),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mf);for(let qt=0;qt<me;qt++)_t?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,cn.__webglTexture,H,Re+qt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,cn.__webglTexture,H),ln?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.__webglTexture,te,xt+qt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ht.__webglTexture,te),H!==0?L.blitFramebuffer(Ie,Ue,de,_e,Ze,rt,de,_e,L.COLOR_BUFFER_BIT,L.NEAREST):ln?L.copyTexSubImage3D(vt,te,Ze,rt,xt+qt,Ie,Ue,de,_e):L.copyTexSubImage2D(vt,te,Ze,rt,Ie,Ue,de,_e);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ln?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(vt,te,Ze,rt,xt,de,_e,me,at,Pe,ut.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(vt,te,Ze,rt,xt,de,_e,me,at,ut.data):L.texSubImage3D(vt,te,Ze,rt,xt,de,_e,me,at,Pe,ut):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,Ze,rt,de,_e,at,Pe,ut.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,Ze,rt,ut.width,ut.height,at,ut.data):L.texSubImage2D(L.TEXTURE_2D,te,Ze,rt,de,_e,at,Pe,ut);L.pixelStorei(L.UNPACK_ROW_LENGTH,et),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Qt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,en),L.pixelStorei(L.UNPACK_SKIP_IMAGES,zs),te===0&&z.generateMipmaps&&L.generateMipmap(vt),xe.unbindTexture()},this.initRenderTarget=function(A){Me.get(A).__webglFramebuffer===void 0&&Ge.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ge.setTextureCube(A,0):A.isData3DTexture?Ge.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ge.setTexture2DArray(A,0):Ge.setTexture2D(A,0),xe.unbindTexture()},this.resetState=function(){w=0,C=0,I=null,xe.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}class bn{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new M);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new M);const n=this.elements,i=e.x,s=e.y,o=e.z;return t.x=n[0]*i+n[1]*s+n[2]*o,t.y=n[3]*i+n[4]*s+n[5]*o,t.z=n[6]*i+n[7]*s+n[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new bn);const n=this.elements,i=e.elements,s=t.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],f=n[7],m=n[8],v=i[0],p=i[1],g=i[2],_=i[3],x=i[4],y=i[5],b=i[6],w=i[7],C=i[8];return s[0]=o*v+a*_+l*b,s[1]=o*p+a*x+l*w,s[2]=o*g+a*y+l*C,s[3]=c*v+h*_+u*b,s[4]=c*p+h*x+u*w,s[5]=c*g+h*y+u*C,s[6]=d*v+f*_+m*b,s[7]=d*p+f*x+m*w,s[8]=d*g+f*y+m*C,t}scale(e,t){t===void 0&&(t=new bn);const n=this.elements,i=t.elements;for(let s=0;s!==3;s++)i[3*s+0]=e.x*n[3*s+0],i[3*s+1]=e.y*n[3*s+1],i[3*s+2]=e.z*n[3*s+2];return t}solve(e,t){t===void 0&&(t=new M);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=e.x,s[7]=e.y,s[11]=e.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--l);if(t.z=s[2*i+3]/s[2*i+2],t.y=(s[1*i+3]-s[1*i+2]*t.z)/s[1*i+1],t.x=(s[0*i+3]-s[0*i+2]*t.z-s[0*i+1]*t.y)/s[0*i+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";for(let n=0;n<9;n++)e+=this.elements[n]+",";return e}reverse(e){e===void 0&&(e=new bn);const t=3,n=6,i=Jy;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[t+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,o,u)}while(o--)}while(s--);return e}setRotationFromQuaternion(e){const t=e.x,n=e.y,i=e.z,s=e.w,o=t+t,a=n+n,l=i+i,c=t*o,h=t*a,u=t*l,d=n*a,f=n*l,m=i*l,v=s*o,p=s*a,g=s*l,_=this.elements;return _[0]=1-(d+m),_[1]=h-g,_[2]=u+p,_[3]=h+g,_[4]=1-(c+m),_[5]=f-v,_[6]=u-p,_[7]=f+v,_[8]=1-(c+d),this}transpose(e){e===void 0&&(e=new bn);const t=this.elements,n=e.elements;let i;return n[0]=t[0],n[4]=t[4],n[8]=t[8],i=t[1],n[1]=t[3],n[3]=i,i=t[2],n[2]=t[6],n[6]=i,i=t[5],n[5]=t[7],n[7]=i,e}}const Jy=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class M{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*s-l*i,t.y=l*n-o*s,t.z=o*i-a*n,t}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new M(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new M(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new bn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,n=this.z,i=Math.sqrt(e*e+t*t+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(e){e===void 0&&(e=new M);const t=this.x,n=this.y,i=this.z;let s=Math.sqrt(t*t+n*n+i*i);return s>0?(s=1/s,e.x=t*s,e.y=n*s,e.z=i*s):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return Math.sqrt((s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z;return(s-t)*(s-t)+(o-n)*(o-n)+(a-i)*(a-i)}scale(e,t){t===void 0&&(t=new M);const n=this.x,i=this.y,s=this.z;return t.x=e*n,t.y=e*i,t.z=e*s,t}vmul(e,t){return t===void 0&&(t=new M),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,n){return n===void 0&&(n=new M),n.x=this.x+e*t.x,n.y=this.y+e*t.y,n.z=this.z+e*t.z,n}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new M),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const n=this.length();if(n>0){const i=Qy,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=ex;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,e)):(o.set(0,1,0),i.cross(o,e)),i.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){const i=this.x,s=this.y,o=this.z;n.x=i+(e.x-i)*t,n.y=s+(e.y-s)*t,n.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Gu),Gu.almostEquals(e,t)}clone(){return new M(this.x,this.y,this.z)}}M.ZERO=new M(0,0,0);M.UNIT_X=new M(1,0,0);M.UNIT_Y=new M(0,1,0);M.UNIT_Z=new M(0,0,1);const Qy=new M,ex=new M,Gu=new M;class mt{constructor(e){e===void 0&&(e={}),this.lowerBound=new M,this.upperBound=new M,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(e[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,Wu),c=Wu),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return t&&(t.vadd(s,s),t.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new mt().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound,o=i.x<=n.x&&n.x<=s.x||t.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||t.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||t.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,n=this.upperBound,i=e.lowerBound,s=e.upperBound;return t.x<=i.x&&n.x>=s.x&&t.y<=i.y&&n.y>=s.y&&t.z<=i.z&&n.z>=s.z}getCorners(e,t,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;e.copy(c),t.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(e,t){const n=$u,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToLocal(f,f)}return t.setFromPoints(n)}toWorldFrame(e,t){const n=$u,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];e.pointToWorld(f,f)}return t.setFromPoints(n)}overlapsRay(e){const{direction:t,from:n}=e,i=1/t.x,s=1/t.y,o=1/t.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(m<0||f>m)}}const Wu=new M,$u=[new M,new M,new M,new M,new M,new M,new M,new M];class Xu{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:i}=t;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(e,t,n){let{index:i}=e,{index:s}=t;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class gh{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const n=this._listeners;if(n[e]===void 0)return this;const i=n[e].indexOf(t);return i!==-1&&n[e].splice(i,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const n=this._listeners[e.type];if(n!==void 0){e.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,e)}return this}}class Tt{constructor(e,t,n,i){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new M),this.normalize();const t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const n=tx,i=nx;e.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Tt);const n=this.x,i=this.y,s=this.z,o=this.w,a=e.x,l=e.y,c=e.z,h=e.w;return t.x=n*h+o*a+i*c-s*l,t.y=i*h+o*l+s*a-n*c,t.z=s*h+o*c+n*l-i*a,t.w=o*h-n*a-i*l-s*c,t}inverse(e){e===void 0&&(e=new Tt);const t=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(e);const o=1/(t*t+n*n+i*i+s*s);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Tt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new M);const n=e.x,i=e.y,s=e.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,f=-o*n-a*i-l*s;return t.x=h*c+f*-o+u*-l-d*-a,t.y=u*c+f*-a+d*-o-h*-l,t.z=d*c+f*-l+h*-a-u*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=i,e.x=s}setFromEuler(e,t,n,i){i===void 0&&(i="XYZ");const s=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(n/2),l=Math.sin(e/2),c=Math.sin(t/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new Tt(this.x,this.y,this.z,this.w)}slerp(e,t,n){n===void 0&&(n=new Tt);const i=this.x,s=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,h=e.z,u=e.w,d,f,m,v,p;return f=i*l+s*c+o*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),m=Math.sin(d),v=Math.sin((1-t)*d)/m,p=Math.sin(t*d)/m):(v=1-t,p=t),n.x=v*i+p*l,n.y=v*s+p*c,n.z=v*o+p*h,n.w=v*a+p*u,n}integrate(e,t,n,i){i===void 0&&(i=new Tt);const s=e.x*n.x,o=e.y*n.y,a=e.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=t*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const tx=new M,nx=new M,ix={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class pe{constructor(e){e===void 0&&(e={}),this.id=pe.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}pe.idCounter=0;pe.types=ix;class tt{constructor(e){e===void 0&&(e={}),this.position=new M,this.quaternion=new Tt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return tt.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return tt.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),n.vsub(e,i),t.conjugate(qu),qu.vmult(i,i),i}static pointToWorldFrame(e,t,n,i){return i===void 0&&(i=new M),t.vmult(n,i),i.vadd(e,i),i}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new M),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,i){return i===void 0&&(i=new M),t.w*=-1,t.vmult(n,i),t.w*=-1,i}}const qu=new Tt;class sr extends pe{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=e;super({type:pe.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;const i=new M;for(let s=0;s!==e.length;s++){const o=e[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let i=0;i<this.faces[e].length;i++)if(!this.vertices[this.faces[e][i]])throw new Error(`Vertex ${this.faces[e][i]} not found!`);const t=this.faceNormals[e]||new M;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[e].length;i++)console.warn(`.vertices[${this.faces[e][i]}] = Vec3(${this.vertices[this.faces[e][i]].toString()})`)}}}getFaceNormal(e,t){const n=this.faces[e],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];sr.computeNormal(i,s,o,t)}static computeNormal(e,t,n,i){const s=new M,o=new M;t.vsub(e,o),n.vsub(t,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(e,t,n,i,s,o,a,l,c){const h=new M;let u=-1,d=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){h.copy(n.faceNormals[m]),s.vmult(h,h);const v=h.dot(o);v>d&&(d=v,u=m)}const f=[];for(let m=0;m<n.faces[u].length;m++){const v=n.vertices[n.faces[u][m]],p=new M;p.copy(v),s.vmult(p,p),i.vadd(p,p),f.push(p)}u>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,n,i,s,o,a,l){const c=new M,h=new M,u=new M,d=new M,f=new M,m=new M;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],c);const _=p.testSepAxis(c,e,t,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const x=a?a[_]:_;c.copy(p.faceNormals[x]),n.vmult(c,c);const y=p.testSepAxis(c,e,t,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(c))}}if(e.uniqueAxes)for(let g=0;g!==e.uniqueAxes.length;g++){s.vmult(e.uniqueAxes[g],h);const _=p.testSepAxis(h,e,t,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const g=l?l.length:e.faces.length;for(let _=0;_<g;_++){const x=l?l[_]:_;h.copy(e.faceNormals[x]),s.vmult(h,h);const y=p.testSepAxis(h,e,t,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(h))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],d);for(let _=0;_!==e.uniqueEdges.length;_++)if(s.vmult(e.uniqueEdges[_],f),d.cross(f,m),!m.almostZero()){m.normalize();const x=p.testSepAxis(m,e,t,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(m))}}return i.vsub(t,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,n,i,s,o){const a=this;sr.project(a,e,n,i,La),sr.project(t,e,s,o,Da);const l=La[0],c=La[1],h=Da[0],u=Da[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(e,t){const n=new M,i=new M;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*s*2*s+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(e){const t=this.faces[e],n=this.faceNormals[e],i=this.vertices[t[0]];return-n.dot(i)}clipFaceAgainstHull(e,t,n,i,s,o,a){const l=new M,c=new M,h=new M,u=new M,d=new M,f=new M,m=new M,v=new M,p=this,g=[],_=i,x=g;let y=-1,b=Number.MAX_VALUE;for(let E=0;E<p.faces.length;E++){l.copy(p.faceNormals[E]),n.vmult(l,l);const R=l.dot(e);R<b&&(b=R,y=E)}if(y<0)return;const w=p.faces[y];w.connectedFaces=[];for(let E=0;E<p.faces.length;E++)for(let R=0;R<p.faces[E].length;R++)w.indexOf(p.faces[E][R])!==-1&&E!==y&&w.connectedFaces.indexOf(E)===-1&&w.connectedFaces.push(E);const C=w.length;for(let E=0;E<C;E++){const R=p.vertices[w[E]],O=p.vertices[w[(E+1)%C]];R.vsub(O,c),h.copy(c),n.vmult(h,h),t.vadd(h,h),u.copy(this.faceNormals[y]),n.vmult(u,u),t.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(R),n.vmult(f,f),t.vadd(f,f);const D=w.connectedFaces[E];m.copy(this.faceNormals[D]);const k=this.getPlaneConstantOfFace(D);v.copy(m),n.vmult(v,v);const B=k-v.dot(t);for(this.clipFaceAgainstPlane(_,x,v,B);_.length;)_.shift();for(;x.length;)_.push(x.shift())}m.copy(this.faceNormals[y]);const I=this.getPlaneConstantOfFace(y);v.copy(m),n.vmult(v,v);const T=I-v.dot(t);for(let E=0;E<_.length;E++){let R=v.dot(_[E])+T;if(R<=s&&(console.log(`clamped: depth=${R} to minDist=${s}`),R=s),R<=o){const O=_[E];if(R<=1e-6){const D={point:O,normal:v,depth:R};a.push(D)}}}}clipFaceAgainstPlane(e,t,n,i){let s,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=e[h],o=n.dot(c)+i,s<0)if(o<0){const u=new M;u.copy(c),t.push(u)}else{const u=new M;l.lerp(c,s/(s-o),u),t.push(u)}else if(o<0){const u=new M;l.lerp(c,s/(s-o),u),t.push(u),t.push(c)}l=c,s=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new M);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)t.vmult(n[s],i[s]),e.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<e.x?e.x=s.x:s.x>t.x&&(t.x=s.x),s.y<e.y?e.y=s.y:s.y>t.y&&(t.y=s.y),s.z<e.z?e.z=s.z:s.z>t.z&&(t.z=s.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new M);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==t;s++)e.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let n=0;n!==t.length;n++){const i=t[n].lengthSquared();i>e&&(e=i)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new M;for(let f=0;f<s.length;f++){d.copy(s[f]),t.vmult(d,d),e.vadd(d,d);const m=d;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(h===void 0||m.y>h)&&(h=m.y),(l===void 0||m.z<l)&&(l=m.z),(u===void 0||m.z>u)&&(u=m.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new M);const t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const n=this.vertices.length,i=this.vertices;if(t){for(let s=0;s<n;s++){const o=i[s];t.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];t.vmult(o,o)}}if(e)for(let s=0;s<n;s++){const o=i[s];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,n=this.faces,i=this.faceNormals,s=new M;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=t[n[o][0]],c=new M;e.vsub(l,c);const h=a.dot(c),u=new M;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(e,t,n,i,s){const o=e.vertices.length,a=sx;let l=0,c=0;const h=rx,u=e.vertices;h.setZero(),tt.vectorToLocalFrame(n,i,t,a),tt.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const m=u[f].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const La=[],Da=[];new M;const sx=new M,rx=new M;class Mr extends pe{constructor(e){super({type:pe.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,i=M,s=[new i(-e,-t,-n),new i(e,-t,-n),new i(e,t,-n),new i(-e,t,-n),new i(-e,-t,n),new i(e,-t,n),new i(e,t,n),new i(-e,t,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new sr({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new M),Mr.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,n){const i=e;n.x=1/12*t*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*t*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*t*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(e,t){const n=e,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),t!==void 0)for(let s=0;s!==n.length;s++)t.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)ci.set(s[o][0],s[o][1],s[o][2]),t.vmult(ci,ci),e.vadd(ci,ci),n(ci.x,ci.y,ci.z)}calculateWorldAABB(e,t,n,i){const s=this.halfExtents;Cn[0].set(s.x,s.y,s.z),Cn[1].set(-s.x,s.y,s.z),Cn[2].set(-s.x,-s.y,s.z),Cn[3].set(-s.x,-s.y,-s.z),Cn[4].set(s.x,-s.y,-s.z),Cn[5].set(s.x,s.y,-s.z),Cn[6].set(-s.x,s.y,-s.z),Cn[7].set(s.x,-s.y,s.z);const o=Cn[0];t.vmult(o,o),e.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Cn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const ci=new M,Cn=[new M,new M,new M,new M,new M,new M,new M,new M],hc={DYNAMIC:1,STATIC:2,KINEMATIC:4},fc={AWAKE:0,SLEEPY:1,SLEEPING:2};class fe extends gh{constructor(e){e===void 0&&(e={}),super(),this.id=fe.idCounter++,this.index=-1,this.world=null,this.vlambda=new M,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new M,this.previousPosition=new M,this.interpolatedPosition=new M,this.initPosition=new M,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new M,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new M,this.force=new M;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?fe.STATIC:fe.DYNAMIC,typeof e.type==typeof fe.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=fe.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new M,this.quaternion=new Tt,this.initQuaternion=new Tt,this.previousQuaternion=new Tt,this.interpolatedQuaternion=new Tt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new M,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new M,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new M,this.invInertia=new M,this.invInertiaWorld=new bn,this.invMassSolve=0,this.invInertiaSolve=new M,this.invInertiaWorldSolve=new bn,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new M(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new M(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new mt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new M,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=fe.AWAKE,this.wakeUpAfterNarrowphase=!1,e===fe.SLEEPING&&this.dispatchEvent(fe.wakeupEvent)}sleep(){this.sleepState=fe.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;t===fe.AWAKE&&n<i?(this.sleepState=fe.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(fe.sleepyEvent)):t===fe.SLEEPY&&n>i?this.wakeUp():t===fe.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(fe.sleepEvent))}}updateSolveMassProperties(){this.sleepState===fe.SLEEPING||this.type===fe.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new M),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new M),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new M),this.quaternion.vmult(e,t),t}addShape(e,t,n){const i=new M,s=new Tt;return t&&i.copy(t),n&&s.copy(n),this.shapes.push(e),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,n=e.length;let i=0;for(let s=0;s!==n;s++){const o=e[s];o.updateBoundingSphereRadius();const a=t[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,i=e.length,s=ox,o=ax,a=this.quaternion,l=this.aabb,c=lx;for(let h=0;h!==i;h++){const u=e[h];a.vmult(t[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const n=cx,i=ux;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(t,n),n.mmult(i,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;this.sleepState===fe.SLEEPING&&this.wakeUp();const n=dx;t.cross(e,n),this.force.vadd(e,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;const n=hx,i=fx;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyForce(n,i)}applyTorque(e){this.type===fe.DYNAMIC&&(this.sleepState===fe.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;this.sleepState===fe.SLEEPING&&this.wakeUp();const n=t,i=px;i.copy(e),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=mx;n.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new M),this.type!==fe.DYNAMIC)return;const n=gx,i=vx;this.vectorToWorldFrame(e,n),this.vectorToWorldFrame(t,i),this.applyImpulse(n,i)}updateMassProperties(){const e=_x;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Mr.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const n=new M;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(e,t,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===fe.DYNAMIC||this.type===fe.KINEMATIC)||this.sleepState===fe.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*e;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const m=u.elements,v=this.angularFactor,p=l.x*v.x,g=l.y*v.y,_=l.z*v.z;s.x+=e*(m[0]*p+m[1]*g+m[2]*_),s.y+=e*(m[3]*p+m[4]*g+m[5]*_),s.z+=e*(m[6]*p+m[7]*g+m[8]*_),o.x+=i.x*e,o.y+=i.y*e,o.z+=i.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}fe.idCounter=0;fe.COLLIDE_EVENT_NAME="collide";fe.DYNAMIC=hc.DYNAMIC;fe.STATIC=hc.STATIC;fe.KINEMATIC=hc.KINEMATIC;fe.AWAKE=fc.AWAKE;fe.SLEEPY=fc.SLEEPY;fe.SLEEPING=fc.SLEEPING;fe.wakeupEvent={type:"wakeup"};fe.sleepyEvent={type:"sleepy"};fe.sleepEvent={type:"sleep"};const ox=new M,ax=new Tt,lx=new mt,cx=new bn,ux=new bn;new bn;const dx=new M,hx=new M,fx=new M,px=new M,mx=new M,gx=new M,vx=new M,_x=new M;class yx{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!((e.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&fe.STATIC)!==0||e.sleepState===fe.SLEEPING)&&((t.type&fe.STATIC)!==0||t.sleepState===fe.SLEEPING))}intersectionTest(e,t,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,i):this.doBoundingSphereBroadphase(e,t,n,i)}doBoundingSphereBroadphase(e,t,n,i){const s=xx;t.position.vsub(e.position,s);const o=(e.boundingRadius+t.boundingRadius)**2;s.lengthSquared()<o&&(n.push(e),i.push(t))}doBoundingBoxBroadphase(e,t,n,i){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),i.push(t))}makePairsUnique(e,t){const n=Mx,i=Sx,s=Ex,o=e.length;for(let a=0;a!==o;a++)i[a]=e[a],s[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];e.push(i[c]),t.push(s[c]),delete n[l]}}setWorld(e){}static boundingSphereCheck(e,t){const n=new M;e.position.vsub(t.position,n);const i=e.shapes[0],s=t.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const xx=new M;new M;new Tt;new M;const Mx={keys:[]},Sx=[],Ex=[];new M;new M;new M;class bx extends yx{constructor(){super()}collisionPairs(e,t,n){const i=e.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let i=0;i<e.bodies.length;i++){const s=e.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(t)&&n.push(s)}return n}}class Ao{constructor(){this.rayFromWorld=new M,this.rayToWorld=new M,this.hitNormalWorld=new M,this.hitPointWorld=new M,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,i,s,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let vh,_h,yh,xh,Mh,Sh,Eh;const pc={CLOSEST:1,ANY:2,ALL:4};vh=pe.types.SPHERE;_h=pe.types.PLANE;yh=pe.types.BOX;xh=pe.types.CYLINDER;Mh=pe.types.CONVEXPOLYHEDRON;Sh=pe.types.HEIGHTFIELD;Eh=pe.types.TRIMESH;class wt{get[vh](){return this._intersectSphere}get[_h](){return this._intersectPlane}get[yh](){return this._intersectBox}get[xh](){return this._intersectConvex}get[Mh](){return this._intersectConvex}get[Sh](){return this._intersectHeightfield}get[Eh](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new M),t===void 0&&(t=new M),this.from=e.clone(),this.to=t.clone(),this.direction=new M,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=wt.ANY,this.result=new Ao,this.hasHit=!1,this.callback=n=>{}}intersectWorld(e,t){return this.mode=t.mode||wt.ANY,this.result=t.result||new Ao,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ju),Na.length=0,e.broadphase.aabbQuery(e,ju,Na),this.intersectBodies(Na),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=wx,s=Tx;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(n&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],s),e.quaternion.vmult(e.shapeOffsets[o],i),i.vadd(e.position,i),this.intersectShape(l,s,i,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let n=0,i=e.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(e[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,i){const s=this.from;if(zx(s,this.direction,n)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,n,i,e)}_intersectBox(e,t,n,i,s){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,i,s)}_intersectPlane(e,t,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new M(0,0,1);t.vmult(c,c);const h=new M;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const m=new M,v=new M,p=new M;o.vsub(n,m);const g=-c.dot(m)/f;l.scale(g,v),o.vadd(v,p),this.reportIntersection(c,p,s,i,-1)}getAABB(e){const{lowerBound:t,upperBound:n}=e,i=this.to,s=this.from;t.x=Math.min(i.x,s.x),t.y=Math.min(i.y,s.y),t.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(e,t,n,i,s){e.data,e.elementSize;const o=Ax;o.from.copy(this.from),o.to.copy(this.to),tt.pointToLocalFrame(n,t,o.from,o.from),tt.pointToLocalFrame(n,t,o.to,o.to),o.updateDirection();const a=Cx;let l,c,h,u;l=c=0,h=u=e.data.length-1;const d=new mt;o.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let m=c;m<u;m++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,m,d),!!d.overlapsRay(o)){if(e.getConvexTrianglePillar(f,m,!1),tt.pointToWorldFrame(n,t,e.pillarOffset,ro),this._intersectConvex(e.pillarConvex,t,ro,i,s,Yu),this.result.shouldStop)return;e.getConvexTrianglePillar(f,m,!0),tt.pointToWorldFrame(n,t,e.pillarOffset,ro),this._intersectConvex(e.pillarConvex,t,ro,i,s,Yu)}}}_intersectSphere(e,t,n,i,s){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,f=Rx,m=Px;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1);else{const v=(-h-Math.sqrt(d))/(2*c),p=(-h+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,f),f.vsub(n,m),m.normalize(),this.reportIntersection(m,f,s,i,-1))}}_intersectConvex(e,t,n,i,s,o){const a=Ix,l=Ku,c=o&&o.faceList||null,h=e.faces,u=e.vertices,d=e.faceNormals,f=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=c?c.length:h.length,_=this.result;for(let x=0;!_.shouldStop&&x<g;x++){const y=c?c[x]:x,b=h[y],w=d[y],C=t,I=n;l.copy(u[b[0]]),C.vmult(l,l),l.vadd(I,l),l.vsub(m,l),C.vmult(w,a);const T=f.dot(a);if(Math.abs(T)<this.precision)continue;const E=a.dot(l)/T;if(!(E<0)){f.scale(E,jt),jt.vadd(m,jt),yn.copy(u[b[0]]),C.vmult(yn,yn),I.vadd(yn,yn);for(let R=1;!_.shouldStop&&R<b.length-1;R++){Rn.copy(u[b[R]]),Pn.copy(u[b[R+1]]),C.vmult(Rn,Rn),C.vmult(Pn,Pn),I.vadd(Rn,Rn),I.vadd(Pn,Pn);const O=jt.distanceTo(m);!(wt.pointInTriangle(jt,yn,Rn,Pn)||wt.pointInTriangle(jt,Rn,yn,Pn))||O>p||this.reportIntersection(a,jt,s,i,y)}}}}_intersectTrimesh(e,t,n,i,s,o){const a=Lx,l=Ox,c=kx,h=Ku,u=Dx,d=Nx,f=Ux,m=Bx,v=Fx,p=e.indices;e.vertices;const g=this.from,_=this.to,x=this.direction;c.position.copy(n),c.quaternion.copy(t),tt.vectorToLocalFrame(n,t,x,u),tt.pointToLocalFrame(n,t,g,d),tt.pointToLocalFrame(n,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,u),u.normalize();const y=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let b=0,w=l.length;!this.result.shouldStop&&b!==w;b++){const C=l[b];e.getNormal(C,a),e.getVertex(p[C*3],yn),yn.vsub(d,h);const I=u.dot(a),T=a.dot(h)/I;if(T<0)continue;u.scale(T,jt),jt.vadd(d,jt),e.getVertex(p[C*3+1],Rn),e.getVertex(p[C*3+2],Pn);const E=jt.distanceSquared(d);!(wt.pointInTriangle(jt,Rn,yn,Pn)||wt.pointInTriangle(jt,yn,Rn,Pn))||E>y||(tt.vectorToWorldFrame(t,a,v),tt.pointToWorldFrame(n,t,jt,m),this.reportIntersection(v,m,s,i,C))}l.length=0}reportIntersection(e,t,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case wt.ALL:this.hasHit=!0,c.set(o,a,e,t,n,i,l),c.hasHit=!0,this.callback(c);break;case wt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l));break;case wt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,n,i){i.vsub(t,Oi),n.vsub(t,qs),e.vsub(t,Ua);const s=Oi.dot(Oi),o=Oi.dot(qs),a=Oi.dot(Ua),l=qs.dot(qs),c=qs.dot(Ua);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}wt.CLOSEST=pc.CLOSEST;wt.ANY=pc.ANY;wt.ALL=pc.ALL;const ju=new mt,Na=[],qs=new M,Ua=new M,wx=new M,Tx=new Tt,jt=new M,yn=new M,Rn=new M,Pn=new M;new M;new Ao;const Yu={faceList:[0]},ro=new M,Ax=new wt,Cx=[],Rx=new M,Px=new M,Ix=new M;new M;new M;const Ku=new M,Lx=new M,Dx=new M,Nx=new M,Ux=new M,Fx=new M,Bx=new M;new mt;const Ox=[],kx=new tt,Oi=new M,oo=new M;function zx(r,e,t){t.vsub(r,Oi);const n=Oi.dot(e);return e.scale(n,oo),oo.vadd(r,oo),t.distanceTo(oo)}class Vx{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}}class Zu{constructor(){this.spatial=new M,this.rotational=new M}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class wr{constructor(e,t,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=wr.idCounter++,this.minForce=n,this.maxForce=i,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Zu,this.jacobianElementB=new Zu,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){const i=t,s=e,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(e,t,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*e-i*t-o*n}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return e.spatial.dot(s)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return e.multiplyVectors(s,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,Ju),a.scale(h,Qu),n.invInertiaWorldSolve.vmult(o,ed),i.invInertiaWorldSolve.vmult(l,td),e.multiplyVectors(Ju,ed)+t.multiplyVectors(Qu,td)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(e.rotational,ao),c+=ao.dot(e.rotational),l.vmult(t.rotational,ao),c+=ao.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=Hx;i.vlambda.addScaledVector(i.invMassSolve*e,t.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(t.rotational,o),i.wlambda.addScaledVector(e,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}wr.idCounter=0;const Ju=new M,Qu=new M,ed=new M,td=new M,ao=new M,Hx=new M;class Gx extends wr{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new M,this.rj=new M,this.ni=new M}computeB(e){const t=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=Wx,c=$x,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const m=Xx,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(s.position),m.vadd(a,m),m.vsub(i.position,m),m.vsub(o,m);const _=g.dot(m),x=this.restitution+1,y=x*d.dot(g)-x*h.dot(g)+f.dot(c)-u.dot(l),b=this.computeGiMf();return-_*t-y*n-e*b}getImpactVelocityAlongNormal(){const e=qx,t=jx,n=Yx,i=Kx,s=Zx;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(i,t),e.vsub(t,s),this.ni.dot(s)}}const Wx=new M,$x=new M,Xx=new M,qx=new M,jx=new M,Yx=new M,Kx=new M,Zx=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class nd extends wr{constructor(e,t,n){super(e,t,-n,n),this.ri=new M,this.rj=new M,this.t=new M}computeB(e){this.a;const t=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Jx,o=Qx,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*t-e*u}}const Jx=new M,Qx=new M;class Vi{constructor(e,t,n){n=Vx.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Vi.idCounter++,this.materials=[e,t],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Vi.idCounter=0;class Hi{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Hi.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Hi.idCounter=0;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new wt;new M;new M;new M;new M(1,0,0),new M(0,1,0),new M(0,0,1);new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class eM extends pe{constructor(){super({type:pe.types.PLANE}),this.worldNormal=new M,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new M),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,i){Xn.set(0,0,1),t.vmult(Xn,Xn);const s=Number.MAX_VALUE;n.set(-s,-s,-s),i.set(s,s,s),Xn.x===1?i.x=e.x:Xn.x===-1&&(n.x=e.x),Xn.y===1?i.y=e.y:Xn.y===-1&&(n.y=e.y),Xn.z===1?i.z=e.z:Xn.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Xn=new M;new M;new M;new M;new M;new M;new M;new M;new M;new M;class In{constructor(e){e===void 0&&(e={}),this.root=e.root||null,this.aabb=e.aabb?e.aabb.clone():new mt,this.data=[],this.children=[]}reset(){this.children.length=this.data.length=0}insert(e,t,n){n===void 0&&(n=0);const i=this.data;if(!this.aabb.contains(e))return!1;const s=this.children,o=this.maxDepth||this.root.maxDepth;if(n<o){let a=!1;s.length||(this.subdivide(),a=!0);for(let l=0;l!==8;l++)if(s[l].insert(e,t,n+1))return!0;a&&(s.length=0)}return i.push(t),!0}subdivide(){const e=this.aabb,t=e.lowerBound,n=e.upperBound,i=this.children;i.push(new In({aabb:new mt({lowerBound:new M(0,0,0)})}),new In({aabb:new mt({lowerBound:new M(1,0,0)})}),new In({aabb:new mt({lowerBound:new M(1,1,0)})}),new In({aabb:new mt({lowerBound:new M(1,1,1)})}),new In({aabb:new mt({lowerBound:new M(0,1,1)})}),new In({aabb:new mt({lowerBound:new M(0,0,1)})}),new In({aabb:new mt({lowerBound:new M(1,0,1)})}),new In({aabb:new mt({lowerBound:new M(0,1,0)})})),n.vsub(t,Pi),Pi.scale(.5,Pi);const s=this.root||this;for(let o=0;o!==8;o++){const a=i[o];a.root=s;const l=a.aabb.lowerBound;l.x*=Pi.x,l.y*=Pi.y,l.z*=Pi.z,l.vadd(t,l),l.vadd(Pi,a.aabb.upperBound)}}aabbQuery(e,t){this.data,this.children;const n=[this];for(;n.length;){const i=n.pop();i.aabb.overlaps(e)&&Array.prototype.push.apply(t,i.data),Array.prototype.push.apply(n,i.children)}return t}rayQuery(e,t,n){return e.getAABB(lo),lo.toLocalFrame(t,lo),this.aabbQuery(lo,n),n}removeEmptyNodes(){for(let e=this.children.length-1;e>=0;e--)this.children[e].removeEmptyNodes(),!this.children[e].children.length&&!this.children[e].data.length&&this.children.splice(e,1)}}class tM extends In{constructor(e,t){t===void 0&&(t={}),super({root:null,aabb:e}),this.maxDepth=typeof t.maxDepth<"u"?t.maxDepth:8}}const Pi=new M,lo=new mt;class Co extends pe{constructor(e,t){super({type:pe.types.TRIMESH}),this.vertices=new Float32Array(e),this.indices=new Int16Array(t),this.normals=new Float32Array(t.length),this.aabb=new mt,this.edges=null,this.scale=new M(1,1,1),this.tree=new tM,this.updateEdges(),this.updateNormals(),this.updateAABB(),this.updateBoundingSphereRadius(),this.updateTree()}updateTree(){const e=this.tree;e.reset(),e.aabb.copy(this.aabb);const t=this.scale;e.aabb.lowerBound.x*=1/t.x,e.aabb.lowerBound.y*=1/t.y,e.aabb.lowerBound.z*=1/t.z,e.aabb.upperBound.x*=1/t.x,e.aabb.upperBound.y*=1/t.y,e.aabb.upperBound.z*=1/t.z;const n=new mt,i=new M,s=new M,o=new M,a=[i,s,o];for(let l=0;l<this.indices.length/3;l++){const c=l*3;this._getUnscaledVertex(this.indices[c],i),this._getUnscaledVertex(this.indices[c+1],s),this._getUnscaledVertex(this.indices[c+2],o),n.setFromPoints(a),e.insert(n,l)}e.removeEmptyNodes()}getTrianglesInAABB(e,t){co.copy(e);const n=this.scale,i=n.x,s=n.y,o=n.z,a=co.lowerBound,l=co.upperBound;return a.x/=i,a.y/=s,a.z/=o,l.x/=i,l.y/=s,l.z/=o,this.tree.aabbQuery(co,t)}setScale(e){const t=this.scale.x===this.scale.y&&this.scale.y===this.scale.z,n=e.x===e.y&&e.y===e.z;t&&n||this.updateNormals(),this.scale.copy(e),this.updateAABB(),this.updateBoundingSphereRadius()}updateNormals(){const e=nM,t=this.normals;for(let n=0;n<this.indices.length/3;n++){const i=n*3,s=this.indices[i],o=this.indices[i+1],a=this.indices[i+2];this.getVertex(s,rd),this.getVertex(o,od),this.getVertex(a,ad),Co.computeNormal(od,rd,ad,e),t[i]=e.x,t[i+1]=e.y,t[i+2]=e.z}}updateEdges(){const e={},t=(i,s)=>{const o=i<s?`${i}_${s}`:`${s}_${i}`;e[o]=!0};for(let i=0;i<this.indices.length/3;i++){const s=i*3,o=this.indices[s],a=this.indices[s+1],l=this.indices[s+2];t(o,a),t(a,l),t(l,o)}const n=Object.keys(e);this.edges=new Int16Array(n.length*2);for(let i=0;i<n.length;i++){const s=n[i].split("_");this.edges[2*i]=parseInt(s[0],10),this.edges[2*i+1]=parseInt(s[1],10)}}getEdgeVertex(e,t,n){const i=this.edges[e*2+(t?1:0)];this.getVertex(i,n)}getEdgeVector(e,t){const n=iM,i=sM;this.getEdgeVertex(e,0,n),this.getEdgeVertex(e,1,i),i.vsub(n,t)}static computeNormal(e,t,n,i){t.vsub(e,sd),n.vsub(t,id),id.cross(sd,i),i.isZero()||i.normalize()}getVertex(e,t){const n=this.scale;return this._getUnscaledVertex(e,t),t.x*=n.x,t.y*=n.y,t.z*=n.z,t}_getUnscaledVertex(e,t){const n=e*3,i=this.vertices;return t.set(i[n],i[n+1],i[n+2])}getWorldVertex(e,t,n,i){return this.getVertex(e,i),tt.pointToWorldFrame(t,n,i,i),i}getTriangleVertices(e,t,n,i){const s=e*3;this.getVertex(this.indices[s],t),this.getVertex(this.indices[s+1],n),this.getVertex(this.indices[s+2],i)}getNormal(e,t){const n=e*3;return t.set(this.normals[n],this.normals[n+1],this.normals[n+2])}calculateLocalInertia(e,t){this.computeLocalAABB(Ii);const n=Ii.upperBound.x-Ii.lowerBound.x,i=Ii.upperBound.y-Ii.lowerBound.y,s=Ii.upperBound.z-Ii.lowerBound.z;return t.set(1/12*e*(2*i*2*i+2*s*2*s),1/12*e*(2*n*2*n+2*s*2*s),1/12*e*(2*i*2*i+2*n*2*n))}computeLocalAABB(e){const t=e.lowerBound,n=e.upperBound,i=this.vertices.length;this.vertices;const s=rM;this.getVertex(0,s),t.copy(s),n.copy(s);for(let o=0;o!==i;o++)this.getVertex(o,s),s.x<t.x?t.x=s.x:s.x>n.x&&(n.x=s.x),s.y<t.y?t.y=s.y:s.y>n.y&&(n.y=s.y),s.z<t.z?t.z=s.z:s.z>n.z&&(n.z=s.z)}updateAABB(){this.computeLocalAABB(this.aabb)}updateBoundingSphereRadius(){let e=0;const t=this.vertices,n=new M;for(let i=0,s=t.length/3;i!==s;i++){this.getVertex(i,n);const o=n.lengthSquared();o>e&&(e=o)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,i){const s=oM,o=aM;s.position=e,s.quaternion=t,this.aabb.toWorldFrame(s,o),n.copy(o.lowerBound),i.copy(o.upperBound)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}static createTorus(e,t,n,i,s){e===void 0&&(e=1),t===void 0&&(t=.5),n===void 0&&(n=8),i===void 0&&(i=6),s===void 0&&(s=Math.PI*2);const o=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=i;c++){const h=c/i*s,u=l/n*Math.PI*2,d=(e+t*Math.cos(u))*Math.cos(h),f=(e+t*Math.cos(u))*Math.sin(h),m=t*Math.sin(u);o.push(d,f,m)}for(let l=1;l<=n;l++)for(let c=1;c<=i;c++){const h=(i+1)*l+c-1,u=(i+1)*(l-1)+c-1,d=(i+1)*(l-1)+c,f=(i+1)*l+c;a.push(h,u,f),a.push(u,d,f)}return new Co(o,a)}}const nM=new M,co=new mt,iM=new M,sM=new M,id=new M,sd=new M,rd=new M,od=new M,ad=new M,Ii=new mt,rM=new M,oM=new tt,aM=new mt;class lM{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}}class cM extends lM{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,h=e;let u,d,f,m,v,p;if(a!==0)for(let y=0;y!==c;y++)l[y].updateSolveMassProperties();const g=dM,_=hM,x=uM;g.length=a,_.length=a,x.length=a;for(let y=0;y!==a;y++){const b=o[y];x[y]=0,_[y]=b.computeB(h),g[y]=1/b.computeC()}if(a!==0){for(let w=0;w!==c;w++){const C=l[w],I=C.vlambda,T=C.wlambda;I.set(0,0,0),T.set(0,0,0)}for(n=0;n!==i;n++){m=0;for(let w=0;w!==a;w++){const C=o[w];u=_[w],d=g[w],p=x[w],v=C.computeGWlambda(),f=d*(u-v-C.eps*p),p+f<C.minForce?f=C.minForce-p:p+f>C.maxForce&&(f=C.maxForce-p),x[w]+=f,m+=f>0?f:-f,C.addToWlambda(f)}if(m*m<s)break}for(let w=0;w!==c;w++){const C=l[w],I=C.velocity,T=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),I.vadd(C.vlambda,I),C.wlambda.vmul(C.angularFactor,C.wlambda),T.vadd(C.wlambda,T)}let y=o.length;const b=1/h;for(;y--;)o[y].multiplier=x[y]*b}return n}}const uM=[],dM=[],hM=[];class fM{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class pM extends fM{constructor(){super(...arguments),this.type=M}constructObject(){return new M}}const dt={sphereSphere:pe.types.SPHERE,spherePlane:pe.types.SPHERE|pe.types.PLANE,boxBox:pe.types.BOX|pe.types.BOX,sphereBox:pe.types.SPHERE|pe.types.BOX,planeBox:pe.types.PLANE|pe.types.BOX,convexConvex:pe.types.CONVEXPOLYHEDRON,sphereConvex:pe.types.SPHERE|pe.types.CONVEXPOLYHEDRON,planeConvex:pe.types.PLANE|pe.types.CONVEXPOLYHEDRON,boxConvex:pe.types.BOX|pe.types.CONVEXPOLYHEDRON,sphereHeightfield:pe.types.SPHERE|pe.types.HEIGHTFIELD,boxHeightfield:pe.types.BOX|pe.types.HEIGHTFIELD,convexHeightfield:pe.types.CONVEXPOLYHEDRON|pe.types.HEIGHTFIELD,sphereParticle:pe.types.PARTICLE|pe.types.SPHERE,planeParticle:pe.types.PLANE|pe.types.PARTICLE,boxParticle:pe.types.BOX|pe.types.PARTICLE,convexParticle:pe.types.PARTICLE|pe.types.CONVEXPOLYHEDRON,cylinderCylinder:pe.types.CYLINDER,sphereCylinder:pe.types.SPHERE|pe.types.CYLINDER,planeCylinder:pe.types.PLANE|pe.types.CYLINDER,boxCylinder:pe.types.BOX|pe.types.CYLINDER,convexCylinder:pe.types.CONVEXPOLYHEDRON|pe.types.CYLINDER,heightfieldCylinder:pe.types.HEIGHTFIELD|pe.types.CYLINDER,particleCylinder:pe.types.PARTICLE|pe.types.CYLINDER,sphereTrimesh:pe.types.SPHERE|pe.types.TRIMESH,planeTrimesh:pe.types.PLANE|pe.types.TRIMESH};class mM{get[dt.sphereSphere](){return this.sphereSphere}get[dt.spherePlane](){return this.spherePlane}get[dt.boxBox](){return this.boxBox}get[dt.sphereBox](){return this.sphereBox}get[dt.planeBox](){return this.planeBox}get[dt.convexConvex](){return this.convexConvex}get[dt.sphereConvex](){return this.sphereConvex}get[dt.planeConvex](){return this.planeConvex}get[dt.boxConvex](){return this.boxConvex}get[dt.sphereHeightfield](){return this.sphereHeightfield}get[dt.boxHeightfield](){return this.boxHeightfield}get[dt.convexHeightfield](){return this.convexHeightfield}get[dt.sphereParticle](){return this.sphereParticle}get[dt.planeParticle](){return this.planeParticle}get[dt.boxParticle](){return this.boxParticle}get[dt.convexParticle](){return this.convexParticle}get[dt.cylinderCylinder](){return this.convexConvex}get[dt.sphereCylinder](){return this.sphereConvex}get[dt.planeCylinder](){return this.planeConvex}get[dt.boxCylinder](){return this.boxConvex}get[dt.convexCylinder](){return this.convexConvex}get[dt.heightfieldCylinder](){return this.heightfieldCylinder}get[dt.particleCylinder](){return this.particleCylinder}get[dt.sphereTrimesh](){return this.sphereTrimesh}get[dt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new pM,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new Gx(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||e.material,h=i.material||t.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(e,t){const n=e.bi,i=e.bj,s=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const m=this.frictionEquationPool,v=m.length?m.pop():new nd(n,i,d*f),p=m.length?m.pop():new nd(n,i,d*f);return v.bi=p.bi=n,v.bj=p.bj=i,v.minForce=p.minForce=-d*f,v.maxForce=p.maxForce=d*f,v.ri.copy(e.ri),v.rj.copy(e.rj),p.ri.copy(e.ri),p.rj.copy(e.rj),e.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=e.enabled,t.push(v,p),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Li.setZero(),us.setZero(),ds.setZero();const s=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==s?(Li.vadd(t.ni,Li),us.vadd(t.ri,us),ds.vadd(t.rj,ds)):(Li.vsub(t.ni,Li),us.vadd(t.rj,us),ds.vadd(t.ri,ds));const o=1/e;us.scale(o,n.ri),ds.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Li.normalize(),Li.tangents(n.t,i.t)}getContacts(e,t,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=_M,c=yM,h=gM,u=vM;for(let d=0,f=e.length;d!==f;d++){const m=e[d],v=t[d];let p=null;m.material&&v.material&&(p=n.getContactMaterial(m.material,v.material)||null);const g=m.type&fe.KINEMATIC&&v.type&fe.STATIC||m.type&fe.STATIC&&v.type&fe.KINEMATIC||m.type&fe.KINEMATIC&&v.type&fe.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],l),m.quaternion.vmult(m.shapeOffsets[_],h),h.vadd(m.position,h);const x=m.shapes[_];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],c),v.quaternion.vmult(v.shapeOffsets[y],u),u.vadd(v.position,u);const b=v.shapes[y];if(!(x.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&x.collisionFilterGroup)||h.distanceTo(u)>x.boundingSphereRadius+b.boundingSphereRadius)continue;let w=null;x.material&&b.material&&(w=n.getContactMaterial(x.material,b.material)||null),this.currentContactMaterial=w||p||n.defaultContactMaterial;const C=x.type|b.type,I=this[C];if(I){let T=!1;x.type<b.type?T=I.call(this,x,b,h,u,l,c,m,v,x,b,g):T=I.call(this,b,x,u,h,c,l,v,m,x,b,g),T&&g&&(n.shapeOverlapKeeper.set(x.id,b.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(e,t,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,e,t,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(i,uo),d.ni.scale(d.ni.dot(uo),ld),uo.vsub(ld,d.rj),-uo.dot(d.ni)<=e.radius){if(u)return!0;const f=d.ri,m=d.rj;f.vadd(n,f),f.vsub(a.position,f),m.vadd(i,m),m.vsub(l.position,m),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}sphereBox(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool,f=$M;n.vsub(i,ho),t.getSideNormals(f,o);const m=e.radius;let v=!1;const p=qM,g=jM,_=YM;let x=null,y=0,b=0,w=0,C=null;for(let N=0,X=f.length;N!==X&&v===!1;N++){const V=HM;V.copy(f[N]);const j=V.length();V.normalize();const re=ho.dot(V);if(re<j+m&&re>0){const ce=GM,ne=WM;ce.copy(f[(N+1)%3]),ne.copy(f[(N+2)%3]);const Ve=ce.length(),Qe=ne.length();ce.normalize(),ne.normalize();const He=ho.dot(ce),Y=ho.dot(ne);if(He<Ve&&He>-Ve&&Y<Qe&&Y>-Qe){const J=Math.abs(re-j-m);if((C===null||J<C)&&(C=J,b=He,w=Y,x=j,p.copy(V),g.copy(ce),_.copy(ne),y++,u))return!0}}}if(y){v=!0;const N=this.createContactEquation(a,l,e,t,c,h);p.scale(-m,N.ri),N.ni.copy(p),N.ni.negate(N.ni),p.scale(x,p),g.scale(b,g),p.vadd(g,p),_.scale(w,_),p.vadd(_,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let I=d.get();const T=XM;for(let N=0;N!==2&&!v;N++)for(let X=0;X!==2&&!v;X++)for(let V=0;V!==2&&!v;V++)if(I.set(0,0,0),N?I.vadd(f[0],I):I.vsub(f[0],I),X?I.vadd(f[1],I):I.vsub(f[1],I),V?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,T),T.vsub(n,T),T.lengthSquared()<m*m){if(u)return!0;v=!0;const j=this.createContactEquation(a,l,e,t,c,h);j.ri.copy(T),j.ri.normalize(),j.ni.copy(j.ri),j.ri.scale(m,j.ri),j.rj.copy(I),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),j.rj.vadd(i,j.rj),j.rj.vsub(l.position,j.rj),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}d.release(I),I=null;const E=d.get(),R=d.get(),O=d.get(),D=d.get(),k=d.get(),B=f.length;for(let N=0;N!==B&&!v;N++)for(let X=0;X!==B&&!v;X++)if(N%3!==X%3){f[X].cross(f[N],E),E.normalize(),f[N].vadd(f[X],R),O.copy(n),O.vsub(R,O),O.vsub(i,O);const V=O.dot(E);E.scale(V,D);let j=0;for(;j===N%3||j===X%3;)j++;k.copy(n),k.vsub(D,k),k.vsub(R,k),k.vsub(i,k);const re=Math.abs(V),ce=k.length();if(re<f[j].length()&&ce<m){if(u)return!0;v=!0;const ne=this.createContactEquation(a,l,e,t,c,h);R.vadd(D,ne.rj),ne.rj.copy(ne.rj),k.negate(ne.ni),ne.ni.normalize(),ne.ri.copy(ne.rj),ne.ri.vadd(i,ne.ri),ne.ri.vsub(n,ne.ri),ne.ri.normalize(),ne.ri.scale(m,ne.ri),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(l.position,ne.rj),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult)}}d.release(E,R,O,D,k)}planeBox(e,t,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,i,s,o,a,l,e,t,u)}convexConvex(e,t,n,i,s,o,a,l,c,h,u,d,f){const m=uS;if(!(n.distanceTo(i)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,s,i,o,m,d,f)){const v=[],p=dS;e.clipAgainstHull(n,s,t,i,o,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(u)return!0;const x=this.createContactEquation(a,l,e,t,c,h),y=x.ri,b=x.rj;m.negate(x.ni),v[_].normal.negate(p),p.scale(v[_].depth,p),v[_].point.vadd(p,y),b.copy(v[_].point),y.vsub(n,y),b.vsub(i,b),y.vadd(n,y),y.vsub(a.position,y),b.vadd(i,b),b.vsub(l.position,b),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(e,t,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,KM);const f=t.faceNormals,m=t.faces,v=t.vertices,p=e.radius;let g=!1;for(let _=0;_!==v.length;_++){const x=v[_],y=eS;o.vmult(x,y),i.vadd(y,y);const b=QM;if(y.vsub(n,b),b.lengthSquared()<p*p){if(u)return!0;g=!0;const w=this.createContactEquation(a,l,e,t,c,h);w.ri.copy(b),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(p,w.ri),y.vsub(i,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(i,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let _=0,x=m.length;_!==x&&g===!1;_++){const y=f[_],b=m[_],w=tS;o.vmult(y,w);const C=nS;o.vmult(v[b[0]],C),C.vadd(i,C);const I=iS;w.scale(-p,I),n.vadd(I,I);const T=sS;I.vsub(C,T);const E=T.dot(w),R=rS;if(n.vsub(C,R),E<0&&R.dot(w)>0){const O=[];for(let D=0,k=b.length;D!==k;D++){const B=d.get();o.vmult(v[b[D]],B),i.vadd(B,B),O.push(B)}if(VM(O,w,n)){if(u)return!0;g=!0;const D=this.createContactEquation(a,l,e,t,c,h);w.scale(-p,D.ri),w.negate(D.ni);const k=d.get();w.scale(-E,k);const B=d.get();w.scale(-p,B),n.vsub(i,D.rj),D.rj.vadd(B,D.rj),D.rj.vadd(k,D.rj),D.rj.vadd(i,D.rj),D.rj.vsub(l.position,D.rj),D.ri.vadd(n,D.ri),D.ri.vsub(a.position,D.ri),d.release(k),d.release(B),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult);for(let N=0,X=O.length;N!==X;N++)d.release(O[N]);return}else for(let D=0;D!==b.length;D++){const k=d.get(),B=d.get();o.vmult(v[b[(D+1)%b.length]],k),o.vmult(v[b[(D+2)%b.length]],B),i.vadd(k,k),i.vadd(B,B);const N=ZM;B.vsub(k,N);const X=JM;N.unit(X);const V=d.get(),j=d.get();n.vsub(k,j);const re=j.dot(X);X.scale(re,V),V.vadd(k,V);const ce=d.get();if(V.vsub(n,ce),re>0&&re*re<N.lengthSquared()&&ce.lengthSquared()<p*p){if(u)return!0;const ne=this.createContactEquation(a,l,e,t,c,h);V.vsub(i,ne.rj),V.vsub(n,ne.ni),ne.ni.normalize(),ne.ni.scale(p,ne.ri),ne.rj.vadd(i,ne.rj),ne.rj.vsub(l.position,ne.rj),ne.ri.vadd(n,ne.ri),ne.ri.vsub(a.position,ne.ri),this.result.push(ne),this.createFrictionEquationsFromContact(ne,this.frictionResult);for(let Ve=0,Qe=O.length;Ve!==Qe;Ve++)d.release(O[Ve]);d.release(k),d.release(B),d.release(V),d.release(ce),d.release(j);return}d.release(k),d.release(B),d.release(V),d.release(ce),d.release(j)}for(let D=0,k=O.length;D!==k;D++)d.release(O[D])}}}planeConvex(e,t,n,i,s,o,a,l,c,h,u){const d=oS,f=aS;f.set(0,0,1),s.vmult(f,f);let m=0;const v=lS;for(let p=0;p!==t.vertices.length;p++)if(d.copy(t.vertices[p]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,h),x=cS;f.scale(f.dot(v),x),d.vsub(x,x),x.vsub(n,_.ri),_.ni.copy(f),d.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}sphereHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=e.radius,m=t.elementSize,v=ES,p=SS;tt.pointToLocalFrame(i,o,n,p);let g=Math.floor((p.x-f)/m)-1,_=Math.ceil((p.x+f)/m)+1,x=Math.floor((p.y-f)/m)-1,y=Math.ceil((p.y+f)/m)+1;if(_<0||y<0||g>d.length||x>d[0].length)return;g<0&&(g=0),_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),g>=d.length&&(g=d.length-1),_>=d.length&&(_=d.length-1),y>=d[0].length&&(y=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const b=[];t.getRectMinMax(g,x,_,y,b);const w=b[0],C=b[1];if(p.z-f>C||p.z+f<w)return;const I=this.result;for(let T=g;T<_;T++)for(let E=x;E<y;E++){const R=I.length;let O=!1;if(t.getConvexTrianglePillar(T,E,!1),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,s,o,a,l,e,t,u)),u&&O||(t.getConvexTrianglePillar(T,E,!0),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(O=this.sphereConvex(e,t.pillarConvex,n,v,s,o,a,l,e,t,u)),u&&O))return!0;if(I.length-R>2)return}}boxHeightfield(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexHeightfield(e,t,n,i,s,o,a,l,c,h,u){const d=t.data,f=t.elementSize,m=e.boundingSphereRadius,v=xS,p=MS,g=yS;tt.pointToLocalFrame(i,o,n,g);let _=Math.floor((g.x-m)/f)-1,x=Math.ceil((g.x+m)/f)+1,y=Math.floor((g.y-m)/f)-1,b=Math.ceil((g.y+m)/f)+1;if(x<0||b<0||_>d.length||y>d[0].length)return;_<0&&(_=0),x<0&&(x=0),y<0&&(y=0),b<0&&(b=0),_>=d.length&&(_=d.length-1),x>=d.length&&(x=d.length-1),b>=d[0].length&&(b=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const w=[];t.getRectMinMax(_,y,x,b,w);const C=w[0],I=w[1];if(!(g.z-m>I||g.z+m<C))for(let T=_;T<x;T++)for(let E=y;E<b;E++){let R=!1;if(t.getConvexTrianglePillar(T,E,!1),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.convexConvex(e,t.pillarConvex,n,v,s,o,a,l,null,null,u,p,null)),u&&R||(t.getConvexTrianglePillar(T,E,!0),tt.pointToWorldFrame(i,o,t.pillarOffset,v),n.distanceTo(v)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(R=this.convexConvex(e,t.pillarConvex,n,v,s,o,a,l,null,null,u,p,null)),u&&R))return!0}}sphereParticle(e,t,n,i,s,o,a,l,c,h,u){const d=mS;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;const m=this.createContactEquation(l,a,t,e,c,h);d.normalize(),m.rj.copy(d),m.rj.scale(e.radius,m.rj),m.ni.copy(d),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(e,t,n,i,s,o,a,l,c,h,u){const d=hS;d.set(0,0,1),a.quaternion.vmult(d,d);const f=fS;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,t,e,c,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=pS;d.scale(d.dot(i),p),i.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,t,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,i,s,o,a,l,e,t,u)}convexParticle(e,t,n,i,s,o,a,l,c,h,u){let d=-1;const f=vS,m=_S;let v=null;const p=gS;if(p.copy(i),p.vsub(n,p),s.conjugate(cd),cd.vmult(p,p),e.pointIsInside(p)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let g=0,_=e.faces.length;g!==_;g++){const x=[e.worldVertices[e.faces[g][0]]],y=e.worldFaceNormals[g];i.vsub(x[0],ud);const b=-y.dot(ud);if(v===null||Math.abs(b)<Math.abs(v)){if(u)return!0;v=b,d=g,f.copy(y)}}if(d!==-1){const g=this.createContactEquation(l,a,t,e,c,h);f.scale(v,m),m.vadd(i,m),m.vsub(n,m),g.rj.copy(m),f.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,x=g.rj;_.vadd(i,_),_.vsub(l.position,_),x.vadd(n,x),x.vsub(a.position,x),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(t,e,i,n,o,s,l,a,c,h,u)}particleCylinder(e,t,n,i,s,o,a,l,c,h,u){return this.convexParticle(t,e,i,n,o,s,l,a,c,h,u)}sphereTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=AM,f=CM,m=RM,v=PM,p=IM,g=LM,_=FM,x=TM,y=bM,b=BM;tt.pointToLocalFrame(i,o,n,p);const w=e.radius;_.lowerBound.set(p.x-w,p.y-w,p.z-w),_.upperBound.set(p.x+w,p.y+w,p.z+w),t.getTrianglesInAABB(_,b);const C=wM,I=e.radius*e.radius;for(let D=0;D<b.length;D++)for(let k=0;k<3;k++)if(t.getVertex(t.indices[b[D]*3+k],C),C.vsub(p,y),y.lengthSquared()<=I){if(x.copy(C),tt.pointToWorldFrame(i,o,x,C),C.vsub(n,y),u)return!0;let B=this.createContactEquation(a,l,e,t,c,h);B.ni.copy(y),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(e.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(C),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let D=0;D<b.length;D++)for(let k=0;k<3;k++){t.getVertex(t.indices[b[D]*3+k],d),t.getVertex(t.indices[b[D]*3+(k+1)%3],f),f.vsub(d,m),p.vsub(f,g);const B=g.dot(m);p.vsub(d,g);let N=g.dot(m);if(N>0&&B<0&&(p.vsub(d,g),v.copy(m),v.normalize(),N=g.dot(v),v.scale(N,g),g.vadd(d,g),g.distanceTo(p)<e.radius)){if(u)return!0;const V=this.createContactEquation(a,l,e,t,c,h);g.vsub(p,V.ni),V.ni.normalize(),V.ni.scale(e.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),tt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,V.rj),tt.vectorToWorldFrame(o,V.ni,V.ni),tt.vectorToWorldFrame(o,V.ri,V.ri),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}}const T=DM,E=NM,R=UM,O=EM;for(let D=0,k=b.length;D!==k;D++){t.getTriangleVertices(b[D],T,E,R),t.getNormal(b[D],O),p.vsub(T,g);let B=g.dot(O);if(O.scale(B,g),p.vsub(g,g),B=g.distanceTo(p),wt.pointInTriangle(g,T,E,R)&&B<e.radius){if(u)return!0;let N=this.createContactEquation(a,l,e,t,c,h);g.vsub(p,N.ni),N.ni.normalize(),N.ni.scale(e.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),tt.pointToWorldFrame(i,o,g,g),g.vsub(l.position,N.rj),tt.vectorToWorldFrame(o,N.ni,N.ni),tt.vectorToWorldFrame(o,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}b.length=0}planeTrimesh(e,t,n,i,s,o,a,l,c,h,u){const d=new M,f=xM;f.set(0,0,1),s.vmult(f,f);for(let m=0;m<t.vertices.length/3;m++){t.getVertex(m,d);const v=new M;v.copy(d),tt.pointToWorldFrame(i,o,v,d);const p=MM;if(d.vsub(n,p),f.dot(p)<=0){if(u)return!0;const _=this.createContactEquation(a,l,e,t,c,h);_.ni.copy(f);const x=SM;f.scale(p.dot(f),x),d.vsub(x,x),_.ri.copy(x),_.ri.vsub(a.position,_.ri),_.rj.copy(d),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Li=new M,us=new M,ds=new M,gM=new M,vM=new M,_M=new Tt,yM=new Tt,xM=new M,MM=new M,SM=new M,EM=new M,bM=new M;new M;const wM=new M,TM=new M,AM=new M,CM=new M,RM=new M,PM=new M,IM=new M,LM=new M,DM=new M,NM=new M,UM=new M,FM=new mt,BM=[],uo=new M,ld=new M,OM=new M,kM=new M,zM=new M;function VM(r,e,t){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=OM;r[(s+1)%i].vsub(o,a);const l=kM;a.cross(e,l);const c=zM;t.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const ho=new M,HM=new M,GM=new M,WM=new M,$M=[new M,new M,new M,new M,new M,new M],XM=new M,qM=new M,jM=new M,YM=new M,KM=new M,ZM=new M,JM=new M,QM=new M,eS=new M,tS=new M,nS=new M,iS=new M,sS=new M,rS=new M;new M;new M;const oS=new M,aS=new M,lS=new M,cS=new M,uS=new M,dS=new M,hS=new M,fS=new M,pS=new M,mS=new M,cd=new Tt,gS=new M;new M;const vS=new M,ud=new M,_S=new M,yS=new M,xS=new M,MS=[0],SS=new M,ES=new M;class dd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const n=t;t=e,e=n}return e<<16|t}set(e,t){const n=this.getKey(e,t),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||hd(e,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||hd(t,h)}}}function hd(r,e){r.push((e&4294901760)>>16,e&65535)}const Fa=(r,e)=>r<e?`${r}-${e}`:`${e}-${r}`;class bS{constructor(){this.data={keys:[]}}get(e,t){const n=Fa(e,t);return this.data[n]}set(e,t,n){const i=Fa(e,t);this.get(e,t)||this.data.keys.push(i),this.data[i]=n}delete(e,t){const n=Fa(e,t),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const n=t.pop();delete e[n]}}}class wS extends gh{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new M,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new M,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new bx,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new cM,this.constraints=[],this.narrowphase=new mM(this),this.collisionMatrix=new Xu,this.collisionMatrixPrevious=new Xu,this.bodyOverlapKeeper=new dd,this.shapeOverlapKeeper=new dd,this.contactmaterials=[],this.contactMaterialTable=new bS,this.defaultMaterial=new Hi("default"),this.defaultContactMaterial=new Vi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Ao?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.ALL,n.from=e,n.to=t,n.callback=i,Ba.intersectWorld(this,n)}raycastAny(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.ANY,n.from=e,n.to=t,n.result=i,Ba.intersectWorld(this,n)}raycastClosest(e,t,n,i){return n===void 0&&(n={}),n.mode=wt.CLOSEST,n.from=e,n.to=t,n.result=i,Ba.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof fe&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,n=this.bodies,i=n.indexOf(e);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let n=0;n<t.length;n++){const i=t[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const n=Ct.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const i=n-this.lastCallTime;this.step(e,i,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const i=Ct.now();let s=0;for(;this.accumulator>=e&&s<n&&(this.internalStep(e),this.accumulator-=e,s++,!(Ct.now()-i>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,n=PS,i=IS,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=fe.DYNAMIC;let d=-1/0;const f=this.constraints,m=RS;l.length();const v=l.x,p=l.y,g=l.z;let _=0;for(c&&(d=Ct.now()),_=0;_!==s;_++){const D=o[_];if(D.type===u){const k=D.force,B=D.mass;k.x+=B*v,k.y+=B*p,k.z+=B*g}}for(let D=0,k=this.subsystems.length;D!==k;D++)this.subsystems[D].update();c&&(d=Ct.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=Ct.now()-d);let x=f.length;for(_=0;_!==x;_++){const D=f[_];if(!D.collideConnected)for(let k=n.length-1;k>=0;k-=1)(D.bodyA===n[k]&&D.bodyB===i[k]||D.bodyB===n[k]&&D.bodyA===i[k])&&(n.splice(k,1),i.splice(k,1))}this.collisionMatrixTick(),c&&(d=Ct.now());const y=CS,b=t.length;for(_=0;_!==b;_++)y.push(t[_]);t.length=0;const w=this.frictionEquations.length;for(_=0;_!==w;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,t,y,this.frictionEquations,m),c&&(h.narrowphase=Ct.now()-d),c&&(d=Ct.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=t.length;for(let D=0;D!==C;D++){const k=t[D],B=k.bi,N=k.bj,X=k.si,V=k.sj;let j;if(B.material&&N.material?j=this.getContactMaterial(B.material,N.material)||this.defaultContactMaterial:j=this.defaultContactMaterial,j.friction,B.material&&N.material&&(B.material.friction>=0&&N.material.friction>=0&&B.material.friction*N.material.friction,B.material.restitution>=0&&N.material.restitution>=0&&(k.restitution=B.material.restitution*N.material.restitution)),a.addEquation(k),B.allowSleep&&B.type===fe.DYNAMIC&&B.sleepState===fe.SLEEPING&&N.sleepState===fe.AWAKE&&N.type!==fe.STATIC){const re=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ce=N.sleepSpeedLimit**2;re>=ce*2&&(B.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===fe.DYNAMIC&&N.sleepState===fe.SLEEPING&&B.sleepState===fe.AWAKE&&B.type!==fe.STATIC){const re=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),ce=B.sleepSpeedLimit**2;re>=ce*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,N,!0),this.collisionMatrixPrevious.get(B,N)||(js.body=N,js.contact=k,B.dispatchEvent(js),js.body=B,N.dispatchEvent(js)),this.bodyOverlapKeeper.set(B.id,N.id),this.shapeOverlapKeeper.set(X.id,V.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=Ct.now()-d,d=Ct.now()),_=0;_!==s;_++){const D=o[_];D.wakeUpAfterNarrowphase&&(D.wakeUp(),D.wakeUpAfterNarrowphase=!1)}for(x=f.length,_=0;_!==x;_++){const D=f[_];D.update();for(let k=0,B=D.equations.length;k!==B;k++){const N=D.equations[k];a.addEquation(N)}}a.solve(e,this),c&&(h.solve=Ct.now()-d),a.removeAllEquations();const I=Math.pow;for(_=0;_!==s;_++){const D=o[_];if(D.type&u){const k=I(1-D.linearDamping,e),B=D.velocity;B.scale(k,B);const N=D.angularVelocity;if(N){const X=I(1-D.angularDamping,e);N.scale(X,N)}}}this.dispatchEvent(AS),c&&(d=Ct.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,R=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(e,E,R);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=Ct.now()-d),this.stepnumber+=1,this.dispatchEvent(TS);let O=!0;if(this.allowSleep)for(O=!1,_=0;_!==s;_++){const D=o[_];D.sleepTick(this.time),D.sleepState!==fe.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(qn,jn),e){for(let s=0,o=qn.length;s<o;s+=2)Ys.bodyA=this.getBodyById(qn[s]),Ys.bodyB=this.getBodyById(qn[s+1]),this.dispatchEvent(Ys);Ys.bodyA=Ys.bodyB=null}if(t){for(let s=0,o=jn.length;s<o;s+=2)Ks.bodyA=this.getBodyById(jn[s]),Ks.bodyB=this.getBodyById(jn[s+1]),this.dispatchEvent(Ks);Ks.bodyA=Ks.bodyB=null}qn.length=jn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(qn,jn),n){for(let s=0,o=qn.length;s<o;s+=2){const a=this.getShapeById(qn[s]),l=this.getShapeById(qn[s+1]);Yn.shapeA=a,Yn.shapeB=l,a&&(Yn.bodyA=a.body),l&&(Yn.bodyB=l.body),this.dispatchEvent(Yn)}Yn.bodyA=Yn.bodyB=Yn.shapeA=Yn.shapeB=null}if(i){for(let s=0,o=jn.length;s<o;s+=2){const a=this.getShapeById(jn[s]),l=this.getShapeById(jn[s+1]);Kn.shapeA=a,Kn.shapeB=l,a&&(Kn.bodyA=a.body),l&&(Kn.bodyB=l.body),this.dispatchEvent(Kn)}Kn.bodyA=Kn.bodyB=Kn.shapeA=Kn.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let n=0;n!==t;n++){const i=e[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new mt;const Ba=new wt,Ct=globalThis.performance||{};if(!Ct.now){let r=Date.now();Ct.timing&&Ct.timing.navigationStart&&(r=Ct.timing.navigationStart),Ct.now=()=>Date.now()-r}new M;const TS={type:"postStep"},AS={type:"preStep"},js={type:fe.COLLIDE_EVENT_NAME,body:null,contact:null},CS=[],RS=[],PS=[],IS=[],qn=[],jn=[],Ys={type:"beginContact",bodyA:null,bodyB:null},Ks={type:"endContact",bodyA:null,bodyB:null},Yn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Kn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var hn=Uint8Array,vs=Uint16Array,LS=Int32Array,bh=new hn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),wh=new hn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),DS=new hn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Th=function(r,e){for(var t=new vs(31),n=0;n<31;++n)t[n]=e+=1<<r[n-1];for(var i=new LS(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)i[s]=s-t[n]<<5|n;return{b:t,r:i}},Ah=Th(bh,2),Ch=Ah.b,NS=Ah.r;Ch[28]=258,NS[258]=28;var US=Th(wh,0),FS=US.b,kl=new vs(32768);for(var ht=0;ht<32768;++ht){var ui=(ht&43690)>>1|(ht&21845)<<1;ui=(ui&52428)>>2|(ui&13107)<<2,ui=(ui&61680)>>4|(ui&3855)<<4,kl[ht]=((ui&65280)>>8|(ui&255)<<8)>>1}var rr=(function(r,e,t){for(var n=r.length,i=0,s=new vs(e);i<n;++i)r[i]&&++s[r[i]-1];var o=new vs(e);for(i=1;i<e;++i)o[i]=o[i-1]+s[i-1]<<1;var a;if(t){a=new vs(1<<e);var l=15-e;for(i=0;i<n;++i)if(r[i])for(var c=i<<4|r[i],h=e-r[i],u=o[r[i]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[kl[u]>>l]=c}else for(a=new vs(n),i=0;i<n;++i)r[i]&&(a[i]=kl[o[r[i]-1]++]>>15-r[i]);return a}),Tr=new hn(288);for(var ht=0;ht<144;++ht)Tr[ht]=8;for(var ht=144;ht<256;++ht)Tr[ht]=9;for(var ht=256;ht<280;++ht)Tr[ht]=7;for(var ht=280;ht<288;++ht)Tr[ht]=8;var Rh=new hn(32);for(var ht=0;ht<32;++ht)Rh[ht]=5;var BS=rr(Tr,9,1),OS=rr(Rh,5,1),Oa=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},xn=function(r,e,t){var n=e/8|0;return(r[n]|r[n+1]<<8)>>(e&7)&t},ka=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},kS=function(r){return(r+7)/8|0},zS=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new hn(r.subarray(e,t))},VS=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Mn=function(r,e,t){var n=new Error(e||VS[r]);if(n.code=r,Error.captureStackTrace&&Error.captureStackTrace(n,Mn),!t)throw n;return n},HS=function(r,e,t,n){var i=r.length,s=0;if(!i||e.f&&!e.l)return t||new hn(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new hn(i*3));var c=function(Ye){var At=t.length;if(Ye>At){var L=new hn(Math.max(At*2,Ye));L.set(t),t=L}},h=e.f||0,u=e.p||0,d=e.b||0,f=e.l,m=e.d,v=e.m,p=e.n,g=i*8;do{if(!f){h=xn(r,u,1);var _=xn(r,u+1,3);if(u+=3,_)if(_==1)f=BS,m=OS,v=9,p=5;else if(_==2){var w=xn(r,u,31)+257,C=xn(r,u+10,15)+4,I=w+xn(r,u+5,31)+1;u+=14;for(var T=new hn(I),E=new hn(19),R=0;R<C;++R)E[DS[R]]=xn(r,u+R*3,7);u+=C*3;for(var O=Oa(E),D=(1<<O)-1,k=rr(E,O,1),R=0;R<I;){var B=k[xn(r,u,D)];u+=B&15;var x=B>>4;if(x<16)T[R++]=x;else{var N=0,X=0;for(x==16?(X=3+xn(r,u,3),u+=2,N=T[R-1]):x==17?(X=3+xn(r,u,7),u+=3):x==18&&(X=11+xn(r,u,127),u+=7);X--;)T[R++]=N}}var V=T.subarray(0,w),j=T.subarray(w);v=Oa(V),p=Oa(j),f=rr(V,v,1),m=rr(j,p,1)}else Mn(1);else{var x=kS(u)+4,y=r[x-4]|r[x-3]<<8,b=x+y;if(b>i){l&&Mn(0);break}a&&c(d+y),t.set(r.subarray(x,b),d),e.b=d+=y,e.p=u=b*8,e.f=h;continue}if(u>g){l&&Mn(0);break}}a&&c(d+131072);for(var re=(1<<v)-1,ce=(1<<p)-1,ne=u;;ne=u){var N=f[ka(r,u)&re],Ve=N>>4;if(u+=N&15,u>g){l&&Mn(0);break}if(N||Mn(2),Ve<256)t[d++]=Ve;else if(Ve==256){ne=u,f=null;break}else{var Qe=Ve-254;if(Ve>264){var R=Ve-257,He=bh[R];Qe=xn(r,u,(1<<He)-1)+Ch[R],u+=He}var Y=m[ka(r,u)&ce],J=Y>>4;Y||Mn(3),u+=Y&15;var j=FS[J];if(J>3){var He=wh[J];j+=ka(r,u)&(1<<He)-1,u+=He}if(u>g){l&&Mn(0);break}a&&c(d+131072);var ge=d+Qe;if(d<j){var Le=s-j,be=Math.min(j,ge);for(Le+d<0&&Mn(3);d<be;++d)t[d]=n[Le+d]}for(;d<ge;++d)t[d]=t[d-j]}}e.l=f,e.p=ne,e.b=d,e.f=h,f&&(h=1,e.m=v,e.d=m,e.n=p)}while(!h);return d!=t.length&&o?zS(t,0,d):t.subarray(0,d)},GS=new hn(0),WS=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Mn(6,"invalid zlib data"),(r[1]>>5&1)==1&&Mn(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function $S(r,e){return HS(r.subarray(WS(r),-4),{i:2},e,e)}var XS=typeof TextDecoder<"u"&&new TextDecoder,qS=0;try{XS.decode(GS,{stream:!0}),qS=1}catch{}function Ph(r,e,t){const n=t.length-r-1;if(e>=t[n])return n-1;if(e<=t[r])return r;let i=r,s=n,o=Math.floor((i+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:i=o,o=Math.floor((i+s)/2);return o}function jS(r,e,t,n){const i=[],s=[],o=[];i[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[r+1-a],o[a]=n[r+a]-e;let l=0;for(let c=0;c<a;++c){const h=o[c+1],u=s[a-c],d=i[c]/(h+u);i[c]=l+h*d,l=u*d}i[a]=l}return i}function YS(r,e,t,n){const i=Ph(r,n,e),s=jS(i,n,r,e),o=new Je(0,0,0,0);for(let a=0;a<=r;++a){const l=t[i-r+a],c=s[a],h=l.w*c;o.x+=l.x*h,o.y+=l.y*h,o.z+=l.z*h,o.w+=l.w*c}return o}function KS(r,e,t,n,i){const s=[];for(let u=0;u<=t;++u)s[u]=0;const o=[];for(let u=0;u<=n;++u)o[u]=s.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let u=1;u<=t;++u){l[u]=e-i[r+1-u],c[u]=i[r+u]-e;let d=0;for(let f=0;f<u;++f){const m=c[f+1],v=l[u-f];a[u][f]=m+v;const p=a[f][u-1]/a[u][f];a[f][u]=d+m*p,d=v*p}a[u][u]=d}for(let u=0;u<=t;++u)o[0][u]=a[u][t];for(let u=0;u<=t;++u){let d=0,f=1;const m=[];for(let v=0;v<=t;++v)m[v]=s.slice(0);m[0][0]=1;for(let v=1;v<=n;++v){let p=0;const g=u-v,_=t-v;u>=v&&(m[f][0]=m[d][0]/a[_+1][g],p=m[f][0]*a[g][_]);const x=g>=-1?1:-g,y=u-1<=_?v-1:t-u;for(let w=x;w<=y;++w)m[f][w]=(m[d][w]-m[d][w-1])/a[_+1][g+w],p+=m[f][w]*a[g+w][_];u<=_&&(m[f][v]=-m[d][v-1]/a[_+1][u],p+=m[f][v]*a[u][_]),o[v][u]=p;const b=d;d=f,f=b}}let h=t;for(let u=1;u<=n;++u){for(let d=0;d<=t;++d)o[u][d]*=h;h*=t-u}return o}function ZS(r,e,t,n,i){const s=i<r?i:r,o=[],a=Ph(r,n,e),l=KS(a,n,r,s,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=s;++h){const u=c[a-r].clone().multiplyScalar(l[h][0]);for(let d=1;d<=r;++d)u.add(c[a-r+d].clone().multiplyScalar(l[h][d]));o[h]=u}for(let h=s+1;h<=i+1;++h)o[h]=new Je(0,0,0);return o}function JS(r,e){let t=1;for(let i=2;i<=r;++i)t*=i;let n=1;for(let i=2;i<=e;++i)n*=i;for(let i=2;i<=r-e;++i)n*=i;return t/n}function QS(r){const e=r.length,t=[],n=[];for(let s=0;s<e;++s){const o=r[s];t[s]=new U(o.x,o.y,o.z),n[s]=o.w}const i=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(i[s-a].clone().multiplyScalar(JS(s,a)*n[a]));i[s]=o.divideScalar(n[0])}return i}function eE(r,e,t,n,i){const s=ZS(r,e,t,n,i);return QS(s)}class tE extends vm{constructor(e,t,n,i,s){super();const o=t?t.length-1:0,a=n?n.length:0;this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=s||o;for(let l=0;l<a;++l){const c=n[l];this.controlPoints[l]=new Je(c.x,c.y,c.z,c.w)}}getPoint(e,t=new U){const n=t,i=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=YS(this.degree,this.knots,this.controlPoints,i);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new U){const n=t,i=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=eE(this.degree,this.knots,this.controlPoints,i,1);return n.copy(s[1]).normalize(),n}toJSON(){const e=super.toJSON();return e.degree=this.degree,e.knots=[...this.knots],e.controlPoints=this.controlPoints.map(t=>t.toArray()),e.startKnot=this.startKnot,e.endKnot=this.endKnot,e}fromJSON(e){return super.fromJSON(e),this.degree=e.degree,this.knots=[...e.knots],this.controlPoints=e.controlPoints.map(t=>new Je(t[0],t[1],t[2],t[3])),this.startKnot=e.startKnot,this.endKnot=e.endKnot,this}}let Xe,St,$t;class nE extends Xi{constructor(e){super(e)}load(e,t,n,i){const s=this,o=s.path===""?sg.extractUrlBase(e):s.path,a=new Jm(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){i?i(c):console.error(c),s.manager.itemError(e)}},n,i)}parse(e,t){if(lE(e))Xe=new aE().parse(e);else{const i=Dh(e);if(!cE(i))throw new Error("THREE.FBXLoader: Unknown format.");if(pd(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+pd(i));Xe=new oE().parse(i)}const n=new lh(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new iE(n,this.manager).parse(Xe)}}class iE{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){St=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),i=this.parseDeformers(),s=new sE().parse(i);return this.parseScene(i,s,n),$t}parseConnections(){const e=new Map;return"Connections"in Xe&&Xe.Connections.connections.forEach(function(n){const i=n[0],s=n[1],o=n[2];e.has(i)||e.set(i,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(i).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:i,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in Xe.Objects){const n=Xe.Objects.Video;for(const i in n){const s=n[i],o=parseInt(i);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[i]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const i=e[n];t[i]!==void 0?e[n]=t[i]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,i=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(i){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;case"webp":s="image/webp";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in Xe.Objects){const n=Xe.Objects.Texture;for(const i in n){const s=this.parseTexture(n[i],e);t.set(parseInt(i),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const i=e.WrapModeU,s=e.WrapModeV,o=i!==void 0?i.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?cr:Qn,n.wrapT=a===0?cr:Qn,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){const n=e.FileName.split(".").pop().toLowerCase();let i=this.manager.getHandler(`.${n}`);i===null&&(i=this.textureLoader);const s=i.path;s||i.setPath(this.textureLoader.path);const o=St.get(e.id).children;let a;if(o!==void 0&&o.length>0&&t[o[0].ID]!==void 0&&(a=t[o[0].ID],(a.indexOf("blob:")===0||a.indexOf("data:")===0)&&i.setPath(void 0)),a===void 0)return console.warn("FBXLoader: Undefined filename, creating placeholder texture."),new Ut;const l=i.load(a);return i.setPath(s),l}parseMaterials(e){const t=new Map;if("Material"in Xe.Objects){const n=Xe.Objects.Material;for(const i in n){const s=this.parseMaterial(n[i],e);s!==null&&t.set(parseInt(i),s)}}return t}parseMaterial(e,t){const n=e.id,i=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!St.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new eo;break;case"lambert":a=new Bm;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new eo;break}return a.setValues(o),a.name=i,a}parseParameters(e,t,n){const i={};e.BumpFactor&&(i.bumpScale=e.BumpFactor.value),e.Diffuse?i.color=$e.colorSpaceToWorking(new Fe().fromArray(e.Diffuse.value),ct):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(i.color=$e.colorSpaceToWorking(new Fe().fromArray(e.DiffuseColor.value),ct)),e.DisplacementFactor&&(i.displacementScale=e.DisplacementFactor.value),e.Emissive?i.emissive=$e.colorSpaceToWorking(new Fe().fromArray(e.Emissive.value),ct):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(i.emissive=$e.colorSpaceToWorking(new Fe().fromArray(e.EmissiveColor.value),ct)),e.EmissiveFactor&&(i.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),i.opacity=1-(e.TransparencyFactor?parseFloat(e.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=e.Opacity?parseFloat(e.Opacity.value):null,i.opacity===null&&(i.opacity=1-(e.TransparentColor?parseFloat(e.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),e.ReflectionFactor&&(i.reflectivity=e.ReflectionFactor.value),e.Shininess&&(i.shininess=e.Shininess.value),e.Specular?i.specular=$e.colorSpaceToWorking(new Fe().fromArray(e.Specular.value),ct):e.SpecularColor&&e.SpecularColor.type==="Color"&&(i.specular=$e.colorSpaceToWorking(new Fe().fromArray(e.SpecularColor.value),ct));const s=this;return St.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":i.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=s.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=ct);break;case"DisplacementColor":i.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=s.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=ct);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=s.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=Mo,i.envMap.colorSpace=ct);break;case"SpecularColor":i.specularMap=s.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=ct);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=s.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),i}getTexture(e,t){return"LayeredTexture"in Xe.Objects&&t in Xe.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=St.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in Xe.Objects){const n=Xe.Objects.Deformer;for(const i in n){const s=n[i],o=St.get(parseInt(i));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[i]=a}else if(s.attrType==="BlendShape"){const a={id:i};a.rawTargets=this.parseMorphTargets(o,n),a.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(i){const s=t[i.ID];if(s.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new Ce().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let i=0;i<e.children.length;i++){const s=e.children[i],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=St.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){$t=new ms;const i=this.parseModels(e.skeletons,t,n),s=Xe.Objects.Model,o=this;i.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),St.get(l.ID).parents.forEach(function(u){const d=i.get(u.ID);d!==void 0&&d.add(l)}),l.parent===null&&$t.add(l)}),this.bindSkeleton(e.skeletons,t,i),this.addGlobalSceneSettings(),$t.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Lh(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new rE().parse();$t.children.length===1&&$t.children[0].isGroup&&($t.children[0].animations=a,$t=$t.children[0]),$t.animations=a}parseModels(e,t,n){const i=new Map,s=Xe.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=St.get(a);let h=this.buildSkeleton(c,e,a,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,n);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new Nl;break;case"Null":default:h=new ms;break}h.name=l.attrName?nt.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=a}this.getTransformData(h,l),i.set(a,h)}return i}buildSkeleton(e,t,n,i){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,h){if(c.ID===o.ID){const u=s;s=new Nl,s.matrixWorld.copy(c.transformLink),s.name=i?nt.sanitizeNodeName(i):"",s.userData.originalName=i,s.ID=n,l.bones[h]=s,u!==null&&s.add(u)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(i){const s=Xe.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new gt;else{let i=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(i=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let h=45;n.FieldOfView!==void 0&&(h=n.FieldOfView.value);const u=n.FocalLength?n.FocalLength.value:null;switch(i){case 0:t=new Xt(h,c,s,o),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new gt;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new gt;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(i){const s=Xe.Objects.NodeAttribute[i.ID];s!==void 0&&(n=s)}),n===void 0)t=new gt;else{let i;n.LightType===void 0?i=0:i=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=$e.colorSpaceToWorking(new Fe().fromArray(n.Color.value),ct));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new vu(s,o,a,l);break;case 1:t=new Bl(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Nt.degToRad(n.InnerAngle.value));let h=0;n.OuterAngle!==void 0&&(h=Nt.degToRad(n.OuterAngle.value),h=Math.max(h,1)),t=new tg(s,o,a,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new vu(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let i,s=null,o=null;const a=[];if(e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new eo({name:Xi.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.groups.length>0){let l=!1;for(let c=0,h=s.groups.length;c<h;c++){const u=s.groups[c];(u.materialIndex<0||u.materialIndex>=a.length)&&(u.materialIndex=a.length,l=!0)}if(l){const c=new eo;a.push(c)}}return s.FBX_Deformer?(i=new um(s,o),i.normalizeSkinWeights()):i=new En(s,o),i}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),i=new Qd({name:Xi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new gm(n,i)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=Sr(t.RotationOrder.value):n.eulerOrder=Sr(0),"Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&St.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const s=Xe.Objects.Model[i.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),$t.add(e.target)):e.lookAt(new U().fromArray(o))}}})}bindSkeleton(e,t,n){const i=this.parsePoseNodes();for(const s in e){const o=e[s];St.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;St.get(c).parents.forEach(function(u){n.has(u.ID)&&n.get(u.ID).bind(new rc(o.bones),i[u.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in Xe.Objects){const t=Xe.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const i=t[n].PoseNode;Array.isArray(i)?i.forEach(function(s){e[s.Node]=new Ce().fromArray(s.Matrix.a)}):e[i.Node]=new Ce().fromArray(i.Matrix.a)}}return e}addGlobalSceneSettings(){if("GlobalSettings"in Xe){if("AmbientColor"in Xe.GlobalSettings){const e=Xe.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],i=e[2];if(t!==0||n!==0||i!==0){const s=new Fe().setRGB(t,n,i,ct);$t.add(new uh(s,1))}}"UnitScaleFactor"in Xe.GlobalSettings&&($t.userData.unitScaleFactor=Xe.GlobalSettings.UnitScaleFactor.value)}}}class sE{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in Xe.Objects){const n=Xe.Objects.Geometry;for(const i in n){const s=St.get(parseInt(i)),o=this.parseGeometry(s,n[i],e);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const i=n.skeletons,s=[],o=e.parents.map(function(u){return Xe.Objects.Model[u.ID]});if(o.length===0)return;const a=e.children.reduce(function(u,d){return i[d.ID]!==void 0&&(u=i[d.ID]),u},null);e.children.forEach(function(u){n.morphTargets[u.ID]!==void 0&&s.push(n.morphTargets[u.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=Sr(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Lh(c);return this.genGeometry(t,a,s,h)}genGeometry(e,t,n,i){const s=new wn;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new Zt(a.vertex,3);if(l.applyMatrix4(i),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new Zt(a.colors,3)),t&&(s.setAttribute("skinIndex",new sc(a.weightsIndices,4)),s.setAttribute("skinWeight",new Zt(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new ke().getNormalMatrix(i),h=new Zt(a.normal,3);h.applyNormalMatrix(c),s.setAttribute("normal",h)}if(a.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;s.setAttribute(u,new Zt(a.uvs[h],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],h=0;if(a.materialIndex.forEach(function(u,d){u!==c&&(s.addGroup(h,d-h,c),c=u,h=d)}),s.groups.length>0){const u=s.groups[s.groups.length-1],d=u.start+u.count;d!==a.materialIndex.length&&s.addGroup(d,a.materialIndex.length-d,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,i),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&e.LayerElementColor[0].Colors&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let i=0;for(;e.LayerElementUV[i];)e.LayerElementUV[i].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[i])),i++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(i,s){i.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:i.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,i=0,s=!1,o=[],a=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(f,m){let v,p=!1;f<0&&(f=f^-1,p=!0);let g=[],_=[];if(o.push(f*3,f*3+1,f*3+2),e.color){const x=fo(m,n,f,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[f]!==void 0&&e.weightTable[f].forEach(function(x){_.push(x.weight),g.push(x.id)}),_.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],y=[0,0,0,0];_.forEach(function(b,w){let C=b,I=g[w];y.forEach(function(T,E,R){if(C>T){R[E]=C,C=T;const O=x[E];x[E]=I,I=O}})}),g=x,_=y}for(;_.length<4;)_.push(0),g.push(0);for(let x=0;x<4;++x)h.push(_[x]),u.push(g[x])}if(e.normal){const x=fo(m,n,f,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(v=fo(m,n,f,e.material)[0],v<0&&(d.negativeMaterialIndices=!0,v=0)),e.uv&&e.uv.forEach(function(x,y){const b=fo(m,n,f,x);c[y]===void 0&&(c[y]=[]),c[y].push(b[0]),c[y].push(b[1])}),i++,p&&(d.genFace(t,e,o,v,a,l,c,h,u,i),n++,i=0,o=[],a=[],l=[],c=[],h=[],u=[])}),t}getNormalNewell(e){const t=new U(0,0,0);for(let n=0;n<e.length;n++){const i=e[n],s=e[(n+1)%e.length];t.x+=(i.y-s.y)*(i.z+s.z),t.y+=(i.z-s.z)*(i.x+s.x),t.z+=(i.x-s.x)*(i.y+s.y)}return t.normalize(),t}getNormalTangentAndBitangent(e){const t=this.getNormalNewell(e),i=(Math.abs(t.z)>.5?new U(0,1,0):new U(0,0,1)).cross(t).normalize(),s=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:s}}flattenVertex(e,t,n){return new Ke(e.dot(t),e.dot(n))}genFace(e,t,n,i,s,o,a,l,c,h){let u;if(h>3){const d=[],f=t.baseVertexPositions||t.vertexPositions;for(let g=0;g<n.length;g+=3)d.push(new U(f[n[g]],f[n[g+1]],f[n[g+2]]));const{tangent:m,bitangent:v}=this.getNormalTangentAndBitangent(d),p=[];for(const g of d)p.push(this.flattenVertex(g,m,v));u=ac.triangulateShape(p,[])}else u=[[0,1,2]];for(const[d,f,m]of u)e.vertex.push(t.vertexPositions[n[d*3]]),e.vertex.push(t.vertexPositions[n[d*3+1]]),e.vertex.push(t.vertexPositions[n[d*3+2]]),e.vertex.push(t.vertexPositions[n[f*3]]),e.vertex.push(t.vertexPositions[n[f*3+1]]),e.vertex.push(t.vertexPositions[n[f*3+2]]),e.vertex.push(t.vertexPositions[n[m*3]]),e.vertex.push(t.vertexPositions[n[m*3+1]]),e.vertex.push(t.vertexPositions[n[m*3+2]]),t.skeleton&&(e.vertexWeights.push(l[d*4]),e.vertexWeights.push(l[d*4+1]),e.vertexWeights.push(l[d*4+2]),e.vertexWeights.push(l[d*4+3]),e.vertexWeights.push(l[f*4]),e.vertexWeights.push(l[f*4+1]),e.vertexWeights.push(l[f*4+2]),e.vertexWeights.push(l[f*4+3]),e.vertexWeights.push(l[m*4]),e.vertexWeights.push(l[m*4+1]),e.vertexWeights.push(l[m*4+2]),e.vertexWeights.push(l[m*4+3]),e.weightsIndices.push(c[d*4]),e.weightsIndices.push(c[d*4+1]),e.weightsIndices.push(c[d*4+2]),e.weightsIndices.push(c[d*4+3]),e.weightsIndices.push(c[f*4]),e.weightsIndices.push(c[f*4+1]),e.weightsIndices.push(c[f*4+2]),e.weightsIndices.push(c[f*4+3]),e.weightsIndices.push(c[m*4]),e.weightsIndices.push(c[m*4+1]),e.weightsIndices.push(c[m*4+2]),e.weightsIndices.push(c[m*4+3])),t.color&&(e.colors.push(o[d*3]),e.colors.push(o[d*3+1]),e.colors.push(o[d*3+2]),e.colors.push(o[f*3]),e.colors.push(o[f*3+1]),e.colors.push(o[f*3+2]),e.colors.push(o[m*3]),e.colors.push(o[m*3+1]),e.colors.push(o[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(i),e.materialIndex.push(i),e.materialIndex.push(i)),t.normal&&(e.normal.push(s[d*3]),e.normal.push(s[d*3+1]),e.normal.push(s[d*3+2]),e.normal.push(s[f*3]),e.normal.push(s[f*3+1]),e.normal.push(s[f*3+2]),e.normal.push(s[m*3]),e.normal.push(s[m*3+1]),e.normal.push(s[m*3+2])),t.uv&&t.uv.forEach(function(v,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(a[p][d*2]),e.uvs[p].push(a[p][d*2+1]),e.uvs[p].push(a[p][f*2]),e.uvs[p].push(a[p][f*2+1]),e.uvs[p].push(a[p][m*2]),e.uvs[p].push(a[p][m*2+1])})}addMorphTargets(e,t,n,i){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=Xe.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,i,a.name)})})}genMorphGeometry(e,t,n,i,s){const o=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=n.Vertices!==void 0?n.Vertices.a:[],c=n.Indexes!==void 0?n.Indexes.a:[],h=e.attributes.position.count*3,u=new Float32Array(h);for(let v=0;v<c.length;v++){const p=c[v]*3;u[p]=l[v*3],u[p+1]=l[v*3+1],u[p+2]=l[v*3+2]}const d={vertexIndices:a,vertexPositions:u,baseVertexPositions:o},f=this.genBuffers(d),m=new Zt(f.vertex,3);m.name=s||n.attrName,m.applyMatrix4(i),e.morphAttributes.position.push(m)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:i,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:i,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,i=e.Colors.a;let s=[];n==="IndexToDirect"&&(s=e.ColorIndex.a);for(let o=0,a=new Fe;o<i.length;o+=4)a.fromArray(i,o),$e.colorSpaceToWorking(a,ct),a.toArray(i,o);return{dataSize:4,buffer:i,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const i=e.Materials.a,s=[];for(let o=0;o<i.length;++o)s.push(o);return{dataSize:1,buffer:i,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new wn;const n=t-1,i=e.KnotVector.a,s=[],o=e.Points.a;for(let u=0,d=o.length;u<d;u+=4)s.push(new Je().fromArray(o,u));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=i.length-1-a;for(let u=0;u<n;++u)s.push(s[u])}const h=new tE(n,i,s,a,l).getPoints(s.length*12);return new wn().setFromPoints(h)}}class rE{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const i=t[n],s=this.addClip(i);e.push(s)}return e}parseClips(){if(Xe.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=Xe.Objects.AnimationCurveNode,t=new Map;for(const n in e){const i=e[n];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:i.id,attr:i.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=Xe.Objects.AnimationCurve;for(const n in t){const i={id:t[n].id,times:t[n].KeyTime.a.map(uE),values:t[n].KeyValueFloat.a},s=St.get(i.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=i:a.match(/Y/)?e.get(o).curves.y=i:a.match(/Z/)?e.get(o).curves.z=i:a.match(/DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=i)}}}parseAnimationLayers(e){const t=Xe.Objects.AnimationLayer,n=new Map;for(const i in t){const s=[],o=St.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const h=e.get(l.ID);if(h.curves.x!==void 0||h.curves.y!==void 0||h.curves.z!==void 0){if(s[c]===void 0){const u=St.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(u!==void 0){const d=Xe.Objects.Model[u.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const f={modelName:d.attrName?nt.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};$t.traverse(function(m){m.ID===d.id&&(f.transform=m.matrix,m.userData.transformData&&(f.eulerOrder=m.userData.transformData.eulerOrder))}),f.transform||(f.transform=new Ce),"PreRotation"in d&&(f.preRotation=d.PreRotation.value),"PostRotation"in d&&(f.postRotation=d.PostRotation.value),s[c]=f}}s[c]&&(s[c][h.attr]=h)}else if(h.curves.morph!==void 0){if(s[c]===void 0){const u=St.get(l.ID).parents.filter(function(g){return g.relationship!==void 0})[0].ID,d=St.get(u).parents[0].ID,f=St.get(d).parents[0].ID,m=St.get(f).parents[0].ID,v=Xe.Objects.Model[m],p={modelName:v.attrName?nt.sanitizeNodeName(v.attrName):"",morphName:Xe.Objects.Deformer[u].attrName};s[c]=p}s[c][h.attr]=h}}}),n.set(parseInt(i),s))}return n}parseAnimStacks(e){const t=Xe.Objects.AnimationStack,n={};for(const i in t){const s=St.get(parseInt(i)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[i]={name:t[i].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(i){t=t.concat(n.generateTracks(i))}),new Xm(e.name,-1,t)}generateTracks(e){const t=[];let n=new U,i=new U;if(e.transform&&e.transform.decompose(n,new Yt,i),n=n.toArray(),i=i.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,i,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,n,i){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new xr(e+"."+i,s,o)}generateRotationTrack(e,t,n,i,s){let o,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,s);o=d[0],a=d[1]}const l=Sr(0);n!==void 0&&(n=n.map(Nt.degToRad),n.push(l),n=new Rt().fromArray(n),n=new Yt().setFromEuler(n)),i!==void 0&&(i=i.map(Nt.degToRad),i.push(l),i=new Rt().fromArray(i),i=new Yt().setFromEuler(i).invert());const c=new Yt,h=new Rt,u=[];if(!a||!o)return new Ds(e+".quaternion",[0],[0]);for(let d=0;d<a.length;d+=3)h.set(a[d],a[d+1],a[d+2],s),c.setFromEuler(h),n!==void 0&&c.premultiply(n),i!==void 0&&c.multiply(i),d>2&&new Yt().fromArray(u,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,d/3*4);return new Ds(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),i=$t.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new yr(e.modelName+".morphTargetInfluences["+i+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,i){return n-i}),t.length>1){let n=1,i=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==i&&(t[n]=o,i=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const i=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const h=t.x.values[o];s.push(h),i[0]=h}else s.push(i[0]);if(a!==-1){const h=t.y.values[a];s.push(h),i[1]=h}else s.push(i[1]);if(l!==-1){const h=t.z.values[l];s.push(h),i[2]=h}else s.push(i[2])}),s}interpolateRotations(e,t,n,i){const s=[],o=[];s.push(e.times[0]),o.push(Nt.degToRad(e.values[0])),o.push(Nt.degToRad(t.values[0])),o.push(Nt.degToRad(n.values[0]));for(let a=1;a<e.values.length;a++){const l=[e.values[a-1],t.values[a-1],n.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Nt.degToRad),h=[e.values[a],t.values[a],n.values[a]];if(isNaN(h[0])||isNaN(h[1])||isNaN(h[2]))continue;const u=h.map(Nt.degToRad),d=[h[0]-l[0],h[1]-l[1],h[2]-l[2]],f=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(f[0]>=180||f[1]>=180||f[2]>=180){const v=Math.max(...f)/180,p=new Rt(...c,i),g=new Rt(...u,i),_=new Yt().setFromEuler(p),x=new Yt().setFromEuler(g);_.dot(x)&&x.set(-x.x,-x.y,-x.z,-x.w);const y=e.times[a-1],b=e.times[a]-y,w=new Yt,C=new Rt;for(let I=0;I<1;I+=1/v)w.copy(_.clone().slerp(x.clone(),I)),s.push(y+I*b),C.setFromQuaternion(w,i),o.push(C.x),o.push(C.y),o.push(C.z)}else s.push(e.times[a]),o.push(Nt.degToRad(e.values[a])),o.push(Nt.degToRad(t.values[a])),o.push(Nt.degToRad(n.values[a]))}return[s,o]}}class oE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Ih,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(i,s){const o=i.match(/^[\s\t]*;/),a=i.match(/^[\s\t]*$/);if(o||a)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,n[++s]):h?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(i),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",i="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),i=e[2]),{id:t,name:n,type:i}}parseNodeProperty(e,t,n){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,i,s);return}if(i==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),h=parseInt(l[1]);let u=s.split(",").slice(3);u=u.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",s=[c,h],hE(s,u),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=s),i in o&&Array.isArray(o[i])?o[i].push(s):i!=="a"?o[i]=s:o.a=s,this.setCurrentProp(o,i),i==="a"&&s.slice(-1)!==","&&(o.a=Va(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Va(t.a))}parseNodeSpecialProperty(e,t,n){const i=n.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=i[0],o=i[1],a=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Va(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class aE{parse(e){const t=new fd(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const i=new Ih;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&i.add(s.name,s)}return i}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},i=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(i===0)return null;const l=[];for(let d=0;d<s;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===i;i>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(a,n,d)}return n.propertyList=l,typeof c=="number"&&(n.id=c),h!==""&&(n.attrName=h),u!==""&&(n.attrType=u),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const i=n.propertyList[0];Array.isArray(i)?(t[n.name]=n,n.a=i):t[n.name]=i}else if(e==="Connections"&&n.name==="C"){const i=[];n.propertyList.forEach(function(s,o){o!==0&&i.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let i=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[i]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(i);case"d":return e.getFloat64Array(i);case"f":return e.getFloat32Array(i);case"i":return e.getInt32Array(i);case"l":return e.getInt64Array(i)}const a=$S(new Uint8Array(e.getArrayBuffer(o))),l=new fd(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class fd{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let n=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const i=n.indexOf(0);return i>=0&&(n=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(n)}}class Ih{add(e,t){this[e]=t}}function lE(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===Dh(r,0,e.length)}function cE(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(i){const s=r[i-1];return r=r.slice(t+i),t++,s}for(let i=0;i<e.length;++i)if(n(1)===e[i])return!1;return!0}function pd(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function uE(r){return r/46186158e3}const dE=[];function fo(r,e,t,n){let i;switch(n.mappingType){case"ByPolygonVertex":i=r;break;case"ByPolygon":i=e;break;case"ByVertice":i=t;break;case"AllSame":i=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(i=n.indices[i]);const s=i*n.dataSize,o=s+n.dataSize;return fE(dE,n.buffer,s,o)}const za=new Rt,hs=new U;function Lh(r){const e=new Ce,t=new Ce,n=new Ce,i=new Ce,s=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,h=new Ce,u=new Ce,d=new Ce,f=r.inheritType?r.inheritType:0;r.translation&&e.setPosition(hs.fromArray(r.translation));const m=Sr(0);if(r.preRotation){const R=r.preRotation.map(Nt.degToRad);R.push(m),t.makeRotationFromEuler(za.fromArray(R))}if(r.rotation){const R=r.rotation.map(Nt.degToRad);R.push(r.eulerOrder||m),n.makeRotationFromEuler(za.fromArray(R))}if(r.postRotation){const R=r.postRotation.map(Nt.degToRad);R.push(m),i.makeRotationFromEuler(za.fromArray(R)),i.invert()}r.scale&&s.scale(hs.fromArray(r.scale)),r.scalingOffset&&a.setPosition(hs.fromArray(r.scalingOffset)),r.scalingPivot&&o.setPosition(hs.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(hs.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(hs.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const v=t.clone().multiply(n).multiply(i),p=new Ce;p.extractRotation(h);const g=new Ce;g.copyPosition(h);const _=g.clone().invert().multiply(h),x=p.clone().invert().multiply(_),y=s,b=new Ce;if(f===0)b.copy(p).multiply(v).multiply(x).multiply(y);else if(f===1)b.copy(p).multiply(x).multiply(v).multiply(y);else{const O=new Ce().scale(new U().setFromMatrixScale(u)).clone().invert(),D=x.clone().multiply(O);b.copy(p).multiply(v).multiply(D).multiply(y)}const w=c.clone().invert(),C=o.clone().invert();let I=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(i).multiply(w).multiply(a).multiply(o).multiply(s).multiply(C);const T=new Ce().copyPosition(I),E=h.clone().multiply(T);return d.copyPosition(E),I=d.clone().multiply(b),I.premultiply(h.invert()),I}function Sr(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Va(r){return r.split(",").map(function(t){return parseFloat(t)})}function Dh(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function hE(r,e){for(let t=0,n=r.length,i=e.length;t<i;t++,n++)r[n]=e[t]}function fE(r,e,t,n){for(let i=t,s=0;i<n;i++,s++)r[s]=e[i];return r}const pE="2.0.7",st={gravity:-1,dice:{radius:.01,mass:.005,angularDamping:.1,initialPosition:{xPercent:80,yPercent:80},initialHeight:.1,throw:{speed:{min:.1,max:.2},azimuth:{min:320,max:350},elevation:{min:-10,max:40},angularVelocity:{min:5,max:10}}},physics:{frictionGround:.1,frictionWall:.1,restitutionGround:.3,restitutionWall:.9},camera:{height:.5,breakpoint_px:768,scaleMobile_m_per_px:2e-4,scalePC_m_per_px:2e-4},tray:{sizeRatio:.9,wallHeight:.5,wallThickness:.1},timeouts:{stopCheck:100,forceResult:3e3,hide:1e3}};let fi,ei,hi,Kt,ps,Ha,_s,zl=null,Ss=!1,md,Vl,Es,bs,Nh=!1;const mE=5;let Uh=[],_i=[];const gE=[{value:8,normal:new U(0,.894,.447)},{value:10,normal:new U(.851,.447,.276)},{value:2,normal:new U(.526,.447,-.724)},{value:6,normal:new U(-.526,.447,-.724)},{value:4,normal:new U(-.851,.447,.276)},{value:1,normal:new U(0,-.894,-.447)},{value:5,normal:new U(.851,-.447,-.276)},{value:3,normal:new U(.526,-.447,.724)},{value:7,normal:new U(-.526,-.447,.724)},{value:9,normal:new U(-.851,-.447,-.276)}];async function vE(r){Es=r;const e=r.clientWidth,t=r.clientHeight;fi=new lm,ei=new Xt(1,e/t||1,.1,10),ei.position.set(0,st.camera.height,0),ei.lookAt(0,0,0),hi=new Zy({antialias:!0,alpha:!0}),hi.setSize(e,t),hi.setPixelRatio(window.devicePixelRatio),hi.setClearColor(0,0),r.appendChild(hi.domElement),fi.add(new uh(16772829,.9));const n=new Bl(14544639,5);n.position.set(-1,5,2),fi.add(n);const i=new Bl(15663086,.5);i.position.set(5,2,-1),fi.add(i),Kt=new wS,Kt.gravity.set(0,st.gravity,0),Kt.solver.iterations=30,Kt.solver.tolerance=0,ps=new Hi("dice"),Ha=new Hi("ground"),_s=new Hi("wall"),Kt.addContactMaterial(new Vi(ps,Ha,{restitution:st.physics.restitutionGround,friction:st.physics.frictionGround})),Kt.addContactMaterial(new Vi(ps,_s,{restitution:st.physics.restitutionWall,friction:st.physics.frictionWall})),Kt.addContactMaterial(new Vi(ps,ps,{restitution:.5,friction:.1}));const s=new fe({mass:0,material:Ha});s.addShape(new eM),s.quaternion.setFromEuler(-Math.PI/2,0,0),Kt.addBody(s),Oh();const o=[];for(let a=0;a<mE;a++)o.push(_E());await Promise.all(o),Nh=!0,console.log("3D Dice pool ready."),kh(),window.addEventListener("resize",Gl),setTimeout(Gl,0)}function Hl(r,e){if(Ss||!Nh)return;const t=r.dices.length,n=Uh.filter(u=>!u.inUse);if(n.length<t){console.error("リクエストされた数のダイスが不足しています。");return}_i=[],zl=e,Ss=!0,clearTimeout(Vl),Es.classList.add("is-visible"),Gl();const i=bs.width*st.tray.sizeRatio,s=bs.height*st.tray.sizeRatio,o={1:[{x:0,z:0,y:0}],2:[{x:-1,z:0,y:.01},{x:1,z:0,y:0}],3:[{x:-1,z:1,y:.02},{x:1,z:1,y:.01},{x:0,z:-1,y:0}],4:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:0,y:.05}],5:[{x:0,z:1.5,y:0},{x:-1.2,z:-.5,y:.01},{x:1.2,z:-.5,y:.02},{x:0,z:-1.5,y:.04},{x:0,z:0,y:.07}]},a=(st.dice.initialPosition.xPercent/100-.5)*i,l=(st.dice.initialPosition.yPercent/100-.5)*s,c=st.dice.radius*2.5,h=o[t]||o[5];for(let u=0;u<t;u++){const d=n[u],f=r.dices[u];d.inUse=!0,d.model.visible=!0,d.id=f.id,d.model.traverse(D=>{D.isMesh&&D.material.color.set(f.color)});const m=h[u],v=a+m.x*c,p=l+m.z*c,g=st.dice.initialHeight+m.y;d.body.position.set(v,g,p);const _=D=>Math.random()*(D.max-D.min)+D.min,x=_(st.dice.throw.speed),y=_(st.dice.throw.azimuth),b=_(st.dice.throw.elevation),w=Nt.degToRad(y),C=Nt.degToRad(b),I=x*Math.cos(C),T=x*Math.sin(C),E=I*Math.sin(w),R=-I*Math.cos(w);d.body.velocity.set(E,T,R);const O=st.dice.throw.angularVelocity;d.body.angularVelocity.set(_(O)*(Math.random()<.5?1:-1),_(O)*(Math.random()<.5?1:-1),_(O)*(Math.random()<.5?1:-1)),Kt.addBody(d.body),d.body.wakeUp(),_i.push(d)}Fh(),Vl=setTimeout(()=>{Ss&&(console.warn("Dice roll timed out. Forcing result."),Bh())},st.timeouts.forceResult)}function _E(){return new Promise((r,e)=>{const t=new nE,n=new lh,i="/models/",s="Dice_10.fbx",o={map:"Dice_10_Albedo.png",normalMap:"Dice_10_Normal.png",metalnessMap:"Dice_10_Metallic.png",roughnessMap:"Dice_10_Roughness.png",aoMap:"Dice_10_AO.png",displacementMap:"Dice_10_Height.png"},a={};let l=0;const c=Object.keys(o).length;Object.entries(o).forEach(([u,d])=>{n.load(i+d,f=>{f.colorSpace=ct,a[u]=f,l++,l===c&&h()},void 0,f=>e(f))});function h(){t.load(i+s,u=>{u.traverse(_=>{_.isMesh&&(_.material=new Fm({map:a.map,normalMap:a.normalMap,displacementMap:a.displacementMap,aoMap:a.aoMap,metalnessMap:a.metalnessMap,roughnessMap:a.roughnessMap,metalness:1,roughness:1,normalScale:new Ke(2,2),displacementScale:0,aoMapIntensity:.5}))}),EE(u);const d=ME(u),f=st.dice.radius/d;bE(u,f);const{vertices:m,indices:v}=SE(u),p=new Co(m,v),g=new fe({mass:st.dice.mass,material:ps,shape:p,angularDamping:st.dice.angularDamping,allowSleep:!0});u.visible=!1,Uh.push({model:u,body:g,inUse:!1,color:null,id:null}),fi.add(u),r()},void 0,u=>e(u))}})}function Fh(){clearTimeout(md),_i.length>0&&_i.every(e=>e.body.sleepState===fe.SLEEPING)?(clearTimeout(Vl),setTimeout(Bh,200)):Ss&&(md=setTimeout(Fh,st.timeouts.stopCheck))}function yE(){_i.forEach(r=>{r.inUse=!1,r.model.visible=!1,r.id=null,Kt.removeBody(r.body)}),_i=[]}function Bh(){if(!Ss){console.log("finishRoll called, but isRolling is already false. Aborting.");return}console.log("finishRoll triggered. Calculating results and setting up hide timer.");const r=_i.map(e=>{let t=0;const n=e.model.getObjectByProperty("isMesh",!0);return n&&(t=n.material.color.getHex()),{id:e.id,color:t,value:xE(e.model)}});zl&&zl(r),Ss=!1,setTimeout(()=>{console.log(`Hiding container and cleaning up dice. (After ${st.timeouts.hide}ms)`),yE(),Es.classList.remove("is-visible")},st.timeouts.hide)}function xE(r){let e=-2,t=-1;const n=new U(0,1,0);return gE.forEach(i=>{const o=i.normal.clone().applyQuaternion(r.quaternion).dot(n);o>e&&(e=o,t=i.value)}),t}const Ga=[],gd=[];function Oh(){if(Ga.forEach(l=>Kt.removeBody(l)),Ga.length=0,gd.forEach(l=>fi.remove(l)),gd.length=0,!bs)return;const r=bs.width*st.tray.sizeRatio,e=bs.height*st.tray.sizeRatio,t=st.tray.wallHeight,n=st.tray.wallThickness,i=new Mr(new M(r/2,t/2,n/2)),s=new Mr(new M(n/2,t/2,e/2)),o=[new M(0,t/2,e/2),new M(0,t/2,-e/2),new M(r/2,t/2,0),new M(-r/2,t/2,0)];[new fe({mass:0,shape:i,position:o[0],material:_s}),new fe({mass:0,shape:i,position:o[1],material:_s}),new fe({mass:0,shape:s,position:o[2],material:_s}),new fe({mass:0,shape:s,position:o[3],material:_s})].forEach(l=>{Kt.addBody(l),Ga.push(l)})}function Gl(){if(!Es)return;const r=Es.clientWidth,e=Es.clientHeight;if(r===0||e===0)return;const t=r<=st.camera.breakpoint_px?st.camera.scaleMobile_m_per_px:st.camera.scalePC_m_per_px,n=e*t,i=ei.position.y,s=2*Math.atan(n/(2*i)),o=Nt.radToDeg(s),a=r/e,l=n;bs={width:l*a,height:l},Oh(),ei.aspect=a,ei.fov=o,ei.updateProjectionMatrix(),hi.setSize(r,e)}let vd=performance.now();function kh(){requestAnimationFrame(kh);const r=performance.now(),e=(r-vd)/1e3;Kt&&Kt.step(1/60,e,3),vd=r,_i.forEach(t=>{t.model.position.copy(t.body.position),t.model.quaternion.copy(t.body.quaternion)}),hi&&fi&&ei&&hi.render(fi,ei)}function ME(r){const e=new U;let t=0;return r.traverse(n=>{if(n.isMesh&&n.geometry?.attributes?.position){const i=n.geometry.attributes.position;for(let s=0;s<i.count;s++){e.fromBufferAttribute(i,s);const o=e.length();o>t&&(t=o)}}}),t}function SE(r){const e=[],t=[];let n=0;return r.traverse(i=>{if(i.isMesh&&i.geometry?.attributes?.position){const s=i.geometry,o=s.attributes.position;for(let a=0;a<o.count;a++)e.push(o.getX(a),o.getY(a),o.getZ(a));if(s.index){const a=s.index.array;for(let l=0;l<a.length;l++)t.push(n+a[l])}else for(let a=0;a<o.count;a++)t.push(n+a);n+=o.count}}),{vertices:e,indices:t}}function EE(r){const e=new qi().setFromObject(r),t=new U;e.getCenter(t),r.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.translate(-t.x,-t.y,-t.z)}),r.position.set(0,0,0)}function bE(r,e){const t=new Ce().makeScale(e,e,e);r.traverse(n=>{n.isMesh&&n.geometry&&n.geometry.applyMatrix4(t)}),r.scale.set(1,1,1)}const wE="1.3.20";let zh={},Vh={},Hh={},Gh={},or=()=>{},_d=!1;function TE(r){if(zh=r.hintMasterData,Vh=r.regretMasterData,Hh=r.takaramonoMasterData,Gh=r.memoryFragmentsData,or=r.addLog,!_d){const e=document.getElementById("dice3d-container");e&&(vE(e),_d=!0)}}function AE(){pn({title:"ダイスロール",items:[{label:"ダイスロール",isTitle:!0},{label:"NA  攻撃判定",onClick:()=>sn({command:"NA",showToast:!0})},{label:"NC  判定",onClick:()=>sn({command:"NC",showToast:!0})},{label:"NM  姉妹への未練",onClick:()=>sn({command:"NM",showToast:!0})},{label:"NME 敵への未練",onClick:()=>sn({command:"NME",showToast:!0})},{label:"NMN 中立者への未練",onClick:()=>sn({command:"NMN",showToast:!0})},{label:"NT  たからもの表",onClick:()=>sn({command:"NT",showToast:!0})},{label:"NK  記憶のカケラ",onClick:()=>sn({command:"NK",showToast:!0})},{label:"NH  暗示表",onClick:()=>sn({command:"NH",showToast:!0})},{label:"1D10",onClick:()=>sn({command:"1d10",showToast:!0})},{label:"1D100",onClick:()=>sn({command:"1d100",showToast:!0})},{label:"直接入力",onClick:()=>{pn({title:"🎲 ダイスロール",bodyHtml:`
                    <p style="text-align: center; margin-bottom: 15px;">ダイスコマンドを入力してください。</p>
                    <input type="text" id="diceCommandInput" value="3d6" 
                           class="modal-input-text" autofocus
                           inputmode="latin" style="ime-mode: disabled;">
                `,footerHtml:'<button id="executeDiceRollBtn" class="welcome-modal-close-btn">ダイスロール</button>',onRender:(n,i)=>{const s=n.querySelector("#diceCommandInput"),o=n.querySelector("#executeDiceRollBtn"),a=()=>{s.value&&sn({command:s.value,showToast:!0}),i()};o.onclick=a,s.onkeydown=l=>{l.key==="Enter"&&a()},s.select()}})}}]})}function yd(r,e){const{command:t,showToast:n,callback:i}=r;Hl({dices:[{id:"tens",color:16729156},{id:"ones",color:35071}]},o=>{if(!o||o.length<2){console.error("D100ロールの結果取得に失敗しました。");return}const a=o.find(f=>f.id==="tens"),l=o.find(f=>f.id==="ones");if(!a||!l){console.error("D100ロールの結果取得に失敗しました（ダイスの役割を特定できません）。");return}const c=a.value===10?0:a.value,h=l.value===10?0:l.value;let u=c*10+h;u===0&&(u=100);const d=e(u,c,h);or(d),n&&zt(d,3e3),i&&i(u,null,d)})}function sn(r){const e=typeof r=="string"?r:r.command,t=typeof r=="object"&&r.callback?r.callback:null;if(!e)return;const n=e.toLowerCase().replace(/\s/g,""),i=/^(nm|nme|nmn|nt|nh|1?d10)$/,s=/^(\d*)?(nc|na)([+-]\d+)?$/,o=/^(1?d100)$/,a=n.match(s),l=n.match(i),c=n.match(o);if(a){const[,h,u,d]=a,f=d?parseInt(d,10):0,m=parseInt(h,10)||1,v={dices:Array.from({length:m},(p,g)=>({id:`system_d${g}`,color:16777215}))};Hl(v,p=>{if(!p||p.length<m){console.error("3Dダイスロールの結果が不足しています。");return}const g=p.map(R=>R.value===0?10:R.value),_=g.map(R=>R+f),x=Math.max(..._),y=Math.min(..._);let b="",w="",C=null;x>=11?(b="大成功",u==="na"&&(w=`攻撃側任意（追加ダメージ${x-10}）`,C="任意")):x>=6?(b="成功",u==="na"&&(x>=10?(w="頭（なければ攻撃側任意）",C="頭"):x>=9?(w="腕（なければ攻撃側任意）",C="腕"):x>=8?(w="胴（なければ攻撃側任意）",C="胴"):x>=7?(w="脚（なければ攻撃側任意）",C="脚"):(w="防御側任意",C="任意"))):y<=1?(b="大失敗",u==="na"?w="味方か自身に命中":u==="nc"&&(w="使用パーツ全損")):b="失敗";const I=f>0?`+${f}`:f<0?`${f}`:"",E=`<span style="color: ${b==="大成功"||b==="成功"?"#007bff":"#dc3545"};">🎲 ${e.toUpperCase()} ＞ [${g.join(",")}]${I} ＞ ${x}[${_.join(",")}]<br>${b}<br>${w}</span>`;or(E),r.showToast&&zt(E,2e3),t&&t(b,C,E)})}else if(l){const h=l[1];Hl({dices:[{color:16777215}]},d=>{if(!d||d.length===0){console.error("3Dダイスロールの結果がありません。");return}const f=d[0].value,m=f===0?10:f;let v="";switch(h){case"nm":v=Wa("SI-","姉妹への未練表",m);break;case"nme":v=Wa("EN-","敵への未練表",m);break;case"nmn":v=Wa("NP-","中立者への未練表",m);break;case"nt":const p=Hh[m];v=p?`🎲 たからもの表(${m})<br>【${p.name}】 ${p.description}`:`たからものデータ[${m}]が見つかりませんでした。`;break;case"nh":const g=zh[m];v=g?`🎲 暗示表(${m})<br>【${g.name}】 ${g.description}`:`暗示データ[${m}]が見つかりませんでした。`;break;case"1d10":case"d10":v=`🎲 D10 ＞ ${m}`;break}or(v),typeof r=="object"&&r.showToast&&zt(v,3e3)})}else if(c)yd(r,(h,u,d)=>`🎲 1D100 ＞ ${h} [${u*10} + ${d}]`);else if(n==="nk")yd(r,h=>{const u=Gh[h];return u?`🎲 記憶のカケラ表(${h})<br>【${u.name}】 ${u.description}`:`記憶のカケラデータ[${h}]が見つかりませんでした。`});else{let h=`「${e}」は無効な入力です。`;const u=/^(\d*)d(\d+)([+-]\d+)?$/,d=n.match(u);if(d){const f=d[1]?parseInt(d[1],10):1,m=parseInt(d[2],10),v=d[3]?parseInt(d[3],10):0;if(f>0&&m>0&&f<=100){const p=Array.from({length:f},()=>Math.floor(Math.random()*m)+1),g=p.reduce((y,b)=>y+b,0),_=g+v;let x=v>0?`+${v}`:v<0?`${v}`:"";h=`🎲 ${e.toUpperCase()} ＞ ${g}[${p.join(",")}]${x} ＞ ${_}`}else h=`「${e}」のダイスの数や種類が正しくありません。`}or(h),(typeof r=="object"&&r.showToast||typeof r=="string")&&zt(h,3e3)}}function Wa(r,e,t){const n=Vh;if(!n||Object.keys(n).length===0)return"未練データが見つかりませんでした。";const i=`${r}${String(t).padStart(2,"0")}`,s=n[i];return s?`🎲 ${e}(${i})<br>【${s.name}】[発狂:${s.madnessName}] ${s.madnessEffect}`:`未練データ[${i}]が見つかりませんでした。`}const CE="1.1.18";function mc(r){if(!r)return console.error("[Converter] 変換対象のデータ(sourceData)が存在しません。"),null;try{const e={};e.name=r.Name||r.pc_name||r.data_title||"名称未設定",e.description=`${r.data_title||""} | ${r.Position_Name||""}（${r.MCLS_Name||""}・${r.SCLS_Name||""}）`,e.img="/images/noimage.png",e.category="ドール",e.initialArea=r.sex||"煉獄",e.baseActionValue=6;const t=r.pc_carma;if(t){const d=Ld(),f=Object.keys(d).find(m=>d[m].name===t);f?e.hint={key:f,name:d[f].name,description:d[f].description}:e.hint={name:t,description:"マスタデータに詳細が見つかりませんでした。"}}else e.hint=null;e.position=r.Position_Name||"",e.mainClass=r.MCLS_Name||"",e.subClass=r.SCLS_Name||"";const n={1:"武装",2:"変異",3:"改造"};e.enhancementValue={bonus:n[r.ST_Bonus]||"武装"},e.skills=[],e.parts={head:[],arms:[],torso:[],legs:[],body:[]};const i={4:"head",5:"arms",6:"torso",7:"legs"},s={1:"オート",2:"アクション",3:"ジャッジ",4:"ダメージ",5:"ラピッド"},o={1:"攻撃",2:"攻撃",3:"行動値",4:"補助",5:"妨害",6:"防御",7:"移動"},a=r.Power_name?.length||0;let l=null,c=-1;c=r.Power_shozoku?.findIndex(d=>d&&d.includes("たから")),c>-1?l=r.Power_name[c]:(c=r.Power_memo?.findIndex((d,f)=>{const m=r.Power_hantei[f];return!["1","2","3"].includes(m)&&d&&d.includes("たからもの")}),c>-1&&(l=r.Power_name[c])),e.treasure=l;for(let d=0;d<a;d++){const f=r.Power_name[d];if(!f||f===l)continue;const m=r.Power_hantei[d],v=i[m];if(!rn(f)){const p=r.Power_Type[d],g={name:f,timing:s[r.Power_timing[d]]||"オート",cost:r.Power_cost[d]||"なし",range:r.Power_range[d]||"自身",effect:r.Power_memo[d]||"効果不明",description:r.Power_memo[d]||"効果不明",category:["1","2","3"].includes(m)?"スキル":o[p]||"強化パーツ"};Pf(g)}["1","2","3"].includes(m)?e.skills.push(f):v?e.parts[v].push(f):e.skills.push(f)}if(l){const d=r.Power_hantei[c],f=i[d];f?e.parts[f].push(l):e.parts.body.push(l)}e.regrets=[];const h=r.roice_name?.length||0;for(let d=0;d<h;d++){const f=r.roice_name[d],m=r.roice_pos[d];if(f&&m){const v={name:`${f}への${m}`,points:parseInt(r.roice_damage[d],10)||3};f==="たからもの"&&e.treasure?(v.name=`${e.treasure}への${m}`,v.category="たからもの"):v.categoryKey="SI",e.regrets.push(v)}}e.memories=[];const u=r.kakera_name?.length||0;for(let d=0;d<u;d++){const f=r.kakera_name[d],m=r.kakera_memo[d];f&&e.memories.push({name:f,memo:m})}return e.personalData={title:r.data_title||"",tags:r.pc_tags||"",race:r.shuzoku||"ドール",age:r.age||"",sex:r.sex||"",height:r.pc_height||"",weight:r.pc_weight||"",karma:r.pc_carma||"",hairColor:r.color_hair||"",eyeColor:r.color_eye||"",skinColor:r.color_skin||"",memo:r.pc_making_memo||""},e}catch(e){return console.error("キャラクターシートの変換中にエラーが発生しました:",e),null}}const RE="1.0.1";function Wh(r){const t=No().maneuverCategories.find(n=>n.name===r);return t?t.slug:"other"}const PE="1.2.6";function IE(){const r=document.querySelectorAll('input[name="theme-switcher"]'),e=localStorage.getItem("theme")||"system";$a(e);const t=document.querySelector(`input[name="theme-switcher"][value="${e}"]`);t&&(t.checked=!0),r.forEach(o=>{o.addEventListener("change",a=>{const l=a.target.value;$a(l),localStorage.setItem("theme",l),console.log(`Theme changed to: ${l}`)})}),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{(localStorage.getItem("theme")||"system")==="system"&&$a("system")});const i=document.querySelectorAll('input[name="autosave-switcher"]'),s=Ib();document.querySelector(`input[name="autosave-switcher"][value="${s}"]`).checked=!0,i.forEach(o=>{o.addEventListener("change",a=>{const l=a.target.value==="true";Lb(l)})}),console.log("Settings Manager initialized.")}function $a(r){r==="system"?document.documentElement.removeAttribute("data-theme"):document.documentElement.setAttribute("data-theme",r)}function LE(){let r=0;for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e),n=localStorage.getItem(t);if(t&&n){const i=(t.length+n.length)*2;r+=i}}return r}function DE(){localStorage.removeItem("userLocalImages"),console.log("Local image cache cleared.")}const NE="1.10.39";let Ro=null;const Ns=["奈落","地獄","煉獄","花園","楽園"];let po=null,Zs="宣言";const $h=r=>{const e=document.getElementById("maneuverMenu");e&&!e.contains(r.target)&&Ro&&!Ro.contains(r.target)&&Po()};function xd(r,e){Po(),Ro=e;const t=document.getElementById("maneuverMenu");t.innerHTML="";const n=[{id:"宣言",label:"宣言"},{id:"スキル",label:"スキル"},{id:"パーツ",label:"パーツ"},{id:"バフ",label:"バフ"},{id:"移動",label:"移動"},{id:"攻撃",label:"攻撃"},{id:"支援",label:"支援"},{id:"妨害",label:"妨害"},{id:"すべて",label:"すべて"}],i=document.createElement("div");i.className="maneuver-menu-header",i.innerHTML=`
        <span class="header-icon" id="menuHeaderIcon">🪪</span>
        <span class="header-title">${r.name}</span>
        <button class="header-close-btn">&times;</button>
    `,t.appendChild(i),i.querySelector("#menuHeaderIcon").onclick=()=>Ho(r),i.querySelector(".header-close-btn").onclick=Po;const s=document.createElement("div");s.className="maneuver-menu-filter-bar",n.forEach(h=>{const u=document.createElement("button");u.className="filter-btn",u.dataset.filterId=h.id,u.textContent=h.label,h.id===Zs&&u.classList.add("is-active"),u.onclick=()=>{Zs=h.id,s.querySelectorAll(".filter-btn").forEach(d=>d.classList.remove("is-active")),u.classList.add("is-active"),a()},s.appendChild(u)}),t.appendChild(s);const o=document.createElement("div");o.className="maneuver-menu-list-container",t.appendChild(o);const a=()=>{o.innerHTML="";const h=Xh(r),u=UE(h,Zs,r);if(Zs!=="パーツ"){const d=No().maneuverCategories.map(f=>f.name);u.sort((f,m)=>{const v=f.data.category==="行動値増加"?"行動値":f.data.category,p=m.data.category==="行動値増加"?"行動値":m.data.category;let g=d.indexOf(v);g===-1&&(g=d.length);let _=d.indexOf(p);return _===-1&&(_=d.length),g!==_?g-_:f.data.name.localeCompare(m.data.name)})}Zs==="パーツ"?l(u,r):c(u,r)},l=(h,u)=>{["頭","腕","胴","脚","他"].forEach(f=>{const m=h.filter(v=>OE(v.data,u).includes(f));if(m.length>0){const v=document.createElement("div");v.className="maneuver-group",v.innerHTML=`<div class="group-header">${f}</div>`,m.forEach(p=>v.appendChild(Md(p,u))),o.appendChild(v)}})},c=(h,u)=>{if(h.length===0){o.innerHTML='<div class="maneuver-item is-empty">対象のマニューバはありません</div>';return}h.forEach(d=>o.appendChild(Md(d,u)))};a(),t.classList.add("is-visible"),setTimeout(()=>{document.addEventListener("click",$h)},0)}function Md(r,e){const t=r.data,n=document.createElement("div");n.className="maneuver-item-new";const i=document.createElement("div");i.className="item-category-col";const s=t.category||"その他",o=`category-color-${Wh(s)}`;n.classList.add(o.replace("bg-","")),i.classList.add(o),i.innerHTML=`<span>${s}</span>`;const a=document.createElement("div");if(a.className="item-icon-col item-passive-icon-col",r.isActiveBuff||t.timing==="オート"){let h=!1;if(r.isActiveBuff)h=!0;else{const u=r.isDamaged;["レギオン","ホラー","合流"].includes(t.name)?h=!0:t.effects&&t.effects.length>0&&(t.effects.some(m=>m.ref==="MODIFY_MAX_ACTION_VALUE_ON_DAMAGE")?u&&(h=!0):t.effects.some(v=>v.ref==="APPLY_BUFF"||v.ref==="REDUCE_MOVE_COST")&&!u&&(h=!0))}h&&(a.innerHTML='<span class="maneuver-icon">💡</span>')}const l=document.createElement("div");if(l.className="item-icon-col item-status-icon-col",r.isActiveBuff)l.innerHTML='<input type="checkbox" class="maneuver-checkbox" checked disabled>';else if(e.turnLimitedManeuvers.has(t.name)){const h=e.usedManeuvers.has(t.name);l.innerHTML=`<input type="checkbox" class="maneuver-checkbox" ${h?"checked":""} disabled>`}const c=document.createElement("div");return c.className="item-right-col",c.innerHTML=`
        <div class="item-row-1">
            <span class="item-name">【${t.name}】</span>
            <span class="item-stats">《${t.timing}/${t.cost}/${t.range}》</span>
        </div>
        <div class="item-row-2">${t.description_raw||""}</div>
    `,n.appendChild(i),n.appendChild(a),n.appendChild(l),n.appendChild(c),n.addEventListener("mouseenter",()=>Kh(document.getElementById("maneuverMenu").getBoundingClientRect(),n.getBoundingClientRect(),e,r)),n.addEventListener("mouseleave",()=>ar()),r.isUsable?n.onclick=async h=>{if(h.stopPropagation(),Po(),t.name==="任意"){const d=`<div class="action-cost-form"><div class="action-cost-selector">${[1,2,3,4,5].map(m=>`<label><input type="radio" name="action-cost" value="${m}" ${m===1?"checked":""}> <span>${m}</span></label>`).join("")}</div></div>`;pn({title:"消費する行動値を選択",bodyHtml:d,footerHtml:'<button id="applyActionCostBtn" class="welcome-modal-close-btn">適用</button>',onRender:(m,v)=>{m.querySelector("#applyActionCostBtn").onclick=()=>{const p=m.querySelector('input[name="action-cost"]:checked').value,g={...t,cost:String(parseInt(p,10))};zi(e,g),v()}}});return}if(t.timing==="ジャッジ"&&t.range!=="自身"){const d=VE(e,t);if(d.length===0){qe("支援/妨害の対象となるアクションがありません。");return}const f=d.map(m=>({label:`${m.performer.name}: 【${m.sourceManeuver.name}】${m.target?` → ${m.target.name}`:""}`,onClick:()=>zi(e,t,null,m)}));pn({title:`【${t.name}】の対象を選択`,items:f});return}if(t.tags.includes("移動")){BE(e,t);return}if(t.tags.includes("攻撃")){const d=await HE(e,t,$h);d&&zi(e,t,d);return}zi(e,t)}:(n.classList.add("is-masked"),r.isDamaged&&n.classList.add("is-damaged")),n}function UE(r,e,t){let n=[];const i=["待機","任意"];switch(e){case"宣言":n=r.filter(s=>s.isUsable&&s.data.timing!=="オート");break;case"スキル":n=r.filter(s=>s.sourceType==="skill"&&!i.includes(s.data.name));break;case"パーツ":n=r.filter(s=>s.sourceType==="part"&&!i.includes(s.data.name));break;case"移動":n=r.filter(s=>s.data.tags.includes("移動")&&!i.includes(s.data.name));break;case"攻撃":n=r.filter(s=>s.data.tags.includes("攻撃")&&!i.includes(s.data.name));break;case"支援":n=r.filter(s=>(s.data.tags.includes("支援")||s.data.tags.includes("強化"))&&!i.includes(s.data.name));break;case"妨害":n=r.filter(s=>(s.data.tags.includes("妨害")||s.data.tags.includes("脆弱"))&&!i.includes(s.data.name));break;case"バフ":case"すべて":default:n=[...r];break}return(e==="バフ"||e==="すべて")&&t.activeBuffs&&t.activeBuffs.length>0&&t.activeBuffs.forEach(s=>{const o=rn(s.source);if(o){const a=n.findIndex(l=>l.data.name===s.source&&!l.isActiveBuff);a>-1&&n.splice(a,1),n.some(l=>l.isActiveBuff&&l.sourceName===s.source)||n.push({data:o,sourceType:"active_buff",sourceName:s.source,isActiveBuff:!0,isUsable:!1})}}),e==="バフ"?n.filter(s=>s.isActiveBuff||s.data.timing==="オート"&&s.data.effects&&s.data.effects.some(o=>o.ref==="APPLY_BUFF"||o.ref==="REDUCE_MOVE_COST")):n}function Ho(r){const e=r.category==="ドール",t=No(),n=t.classes;let i={A:0,M:0,R:0};if(e){const h=Object.keys(n).find(v=>n[v].name===r.mainClass),u=Object.keys(n).find(v=>n[v].name===r.subClass),d=h?n[h]:null,f=u?n[u]:null;d&&(i.A+=d.A||0,i.M+=d.M||0,i.R+=d.R||0),f&&(i.A+=f.A||0,i.M+=f.M||0,i.R+=f.R||0);const m=r.enhancementValue.bonus;m==="武装"&&(i.A+=1),m==="変異"&&(i.M+=1),m==="改造"&&(i.R+=1)}const l=(e?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(h=>`<option value="${h}" ${r.area===h?"selected":""}>${h}</option>`).join(""),c=`
    <div class="sheet-grid-container">
        <div class="sheet-img">
            <button class="sheet-edit-image-btn">✏️ 画像の変更</button>
            <img src="${r.img}" alt="${r.name}">
        </div>
        <div class="sheet-header">
            ${r.sheetId?`
            <div class="sheet-charasheet-link">
                <button class="sheet-link-btn" data-sheet-id="${r.sheetId}">保管所で見る ID: ${r.sheetId}</button>
                <button class="sheet-reload-btn" data-sheet-id="${r.sheetId}">保管所から再読込み</button>
            </div>
            `:""}
            ${r.personalData&&r.personalData.title?`
                <div class="sheet-char-title">${r.personalData.title}</div>
            `:""}
        </div>
        <div class="sheet-basic-info">
            <div class="sheet-input-group">
                <label>名前</label>
                <input type="text" value="${r.name}" disabled>
            </div>
            ${e?`
            <div class="sheet-input-group">
                <label>享年</label>
                <input type="text" value="${r.personalData?.age||"未設定"}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>暗示</label>
                <input type="text" value="${r.hint?.key?`${r.hint.key}:${r.hint.name}`:"未設定"}" disabled>
            </div>`:""}
            <div class="sheet-input-group">
                <label>最大行動値</label>
                <input type="text" value="${r.maxActionValue}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>初期配置</label>
                <select id="areaSelector" class="sheet-select">${l}</select>
            </div>
        </div>
        <div class="sheet-section sheet-enhancement">
            <h4>基本情報</h4>
            <div class="sheet-input-group">
                <label>カテゴリ</label> <input type="text" value="${r.category}" disabled>
            </div>
             <div class="sheet-input-group">
                <label>ポジション</label> <input type="text" value="${r.position}" disabled>
            </div>
            ${e?`
            <div class="sheet-input-group">
                <label>メインクラス</label> <input type="text" value="${r.mainClass}" disabled>
            </div>
            <div class="sheet-input-group">
                <label>サブクラス</label> <input type="text" value="${r.subClass}" disabled>
            </div>
            <h4>強化点</h4>
             <div class="sheet-input-group">
                <label>ボーナス</label> <input type="text" value="${r.enhancementValue.bonus}" disabled>
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
        ${r.personalData?`
        <div class="sheet-section sheet-personal-data">
            <h4>パーソナルデータ</h4>
            <div class="sheet-input-group"><label>タグ</label><input type="text" value="${r.personalData.tags}" disabled></div>
            <div class="sheet-input-group"><label>種族</label><input type="text" value="${r.personalData.race}" disabled></div>
            <div class="sheet-input-group"><label>身長</label><input type="text" value="${r.personalData.height}" disabled></div>
            <div class="sheet-input-group"><label>髪の色</label><input type="text" value="${r.personalData.hairColor}" disabled></div>
            <div class="sheet-input-group"><label>瞳の色</label><input type="text" value="${r.personalData.eyeColor}" disabled></div>
            <div class="sheet-input-group"><label>肌の色</label><input type="text" value="${r.personalData.skinColor}" disabled></div>
            <h4>その他メモ</h4>
            <textarea class="sheet-textarea" rows="8" disabled>${r.personalData.memo}</textarea>
        </div>
        `:""}
        ${e?`
        <div class="sheet-section sheet-hint">
            <h4>暗示</h4>
            ${r.hint&&r.hint.name?`<p><b>【${r.hint.key}:${r.hint.name}】</b><br>${r.hint.description}</p>`:"<p>（暗示は設定されていません）</p>"}
        </div>
        <div class="sheet-section sheet-memory">
            <h4>記憶のカケラ</h4>
            ${r.memories&&r.memories.length>0?r.memories.map(h=>`<p><b>【${h.name}】</b><br>${h.memo}</p>`).join(""):"<p>（記憶のカケラはありません）</p>"}
        </div>
        <div class="sheet-section sheet-regrets">
            <h4>未練</h4>
            ${r.regrets&&r.regrets.length>0?r.regrets.map(h=>{const u=h.points||0,d="●".repeat(u)+"○".repeat(4-u),f=ql(),m=Object.values(f).find(p=>h.name.includes(p.name)),v=m?`：${m.madnessName}：${m.madnessEffect}`:"";return`<p>${h.name}：${u}点 ${d}${v}</p>`}).join(""):"<p>（未練はありません）</p>"}
        </div>`:""}
        <div class="sheet-section sheet-skills">
            <h4>スキル</h4>
            ${r.skills.map(h=>{const u=rn(h);if(!u)return`<div class="part-list-item">${h}</div>`;let d="スキル";if(u.id&&e){const f=u.id,m=f.substring(0,2),v=f.endsWith("-SP"),p=r.mainClass===r.subClass,g=Object.keys(t.positions).find(y=>t.positions[y].name===r.position),_=Object.keys(n).find(y=>n[y].name===r.mainClass),x=Object.keys(n).find(y=>n[y].name===r.subClass);v&&m===_?d="特化スキル":m===g?d="ポジション":m===_?d=p?"クラス":"メインクラス":m===x&&(d=p?"クラス":"サブクラス")}return`<div class="part-list-item"><span class="type">[${d}]</span> <b>【${h}】</b>《${u.timing}/${u.cost}/${u.range}》：${u.description||u.effect}</div>`}).join("")}
        </div>
        <div class="sheet-section sheet-parts">
            <h4>パーツ</h4>
            <div class="sheet-parts-grid">
                ${["head","arms","torso","legs","body"].map(h=>{if(!r.partsStatus[h]||r.partsStatus[h].length===0)return"";const u={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"体"}[h],d=r.partsStatus[h].map(f=>{const m=f.id.includes("_treasure"),v=m?wf()["TR-00"]:rn(f.name),p=v?.id?.startsWith("BP-"),g=m?"たからもの":p?"基本":"強化";if(!v)return`<div class="part-list-item"><span class="type">[${g}]</span> <b>${f.name}</b></div>`;const _=m?v.description_raw:v.description_raw||v.effect;return`<div class="part-list-item"><span class="type">[${g}]</span> <b>【${f.name}】</b>《${v.timing}／${v.cost}／${v.range}》：${_}</div>`}).join("");return`<div><h4>〈${u}〉</h4>${d}</div>`}).join("")}
            </div>
        </div>
    </div>
    `;pn({title:"ネクロニカ 人形設計図",bodyHtml:c,onRender:(h,u)=>{h.querySelector(".modal-content").classList.add("sheet-modal-content"),h.querySelector(".modal-body").classList.add("sheet-modal-body");const d=h.querySelector(".sheet-edit-image-btn");d&&(d.onclick=()=>{Wl(r,u)});const f=h.querySelector("#areaSelector");f&&(f.onchange=p=>{const g=p.target.value;On(r.id,{area:g}),Ft(),ni()});const m=h.querySelector(".sheet-link-btn");m&&(m.onclick=()=>{const p=m.dataset.sheetId;p&&window.open(`https://charasheet.vampire-blood.net/${p}`,"_blank")});const v=h.querySelector(".sheet-reload-btn");v&&(v.onclick=async()=>{const p=v.dataset.sheetId;if(p&&confirm(`キャラクター「${r.name}」のデータを保管所から再読込みします。
パーツの損傷状態などはリセットされますが、よろしいですか？`))try{zt(`ID: ${p} を再読込み中...`,2e3);const g=await qh(p),_=mc(g);if(_){const x=ff(r.id,_);Ft(),ni(),zt(`「${x.name}」を更新しました。`,2e3),u(),Ho(x)}else throw new Error("データの変換に失敗しました。")}catch(g){alert(`エラー: ${g.message}`)}})}})}function FE(r){const e=document.getElementById("undeadListModal"),t=e.querySelector(".modal-body");t.innerHTML="";const n=document.createElement("div");n.className="import-container";const i=document.createElement("button");i.className="import-btn",i.textContent="保管所から読込み",i.onclick=()=>{e.classList.remove("is-visible"),kE(r,Sf)},n.appendChild(i),t.appendChild(n);const s=document.createElement("div");s.className="undead-filter-container",["すべて",...["ドール","レギオン","ホラー","サヴァント"]].forEach(u=>{const d=document.createElement("button");d.className="filter-btn",d.textContent=u,d.dataset.category=u,u==="すべて"&&d.classList.add("active"),s.appendChild(d)}),t.appendChild(s);const l=document.createElement("div");l.className="undead-list-container",t.appendChild(l);const c=Do(),h=u=>{l.innerHTML="";for(const d in c){if(d.startsWith("//"))continue;const f=c[d];if(u==="すべて"||f.category===u){const m=document.createElement("div");m.className="undead-list-item",m.innerHTML=`<img src="${f.img}" alt="${f.name}"><div class="undead-list-item-name">${f.name}</div>`,m.onclick=()=>{const v=f.category==="レギオン"?5:1;for(let p=0;p<v;p++)lf(d,r);Ft(),e.classList.remove("is-visible"),Ar()},l.appendChild(m)}}};s.querySelectorAll(".filter-btn").forEach(u=>{u.onclick=()=>{s.querySelectorAll(".filter-btn").forEach(d=>d.classList.remove("active")),u.classList.add("active"),h(u.dataset.category)}}),h("すべて"),e.querySelector("#closeModalBtn").onclick=()=>e.classList.remove("is-visible"),e.onclick=u=>{u.target===e&&e.classList.remove("is-visible")},e.classList.add("is-visible")}function BE(r,e,t){const n=Ns.indexOf(r.area);let i=1;if(e&&e.effects){const u=e.effects.find(d=>d.ref==="MOVE_CHARACTER");if(u&&u.params&&u.params.distance){const f=String(u.params.distance).split("-");i=parseInt(f[1]||f[0],10)}}const s={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"},o=[],a=r.type==="enemy"&&r.area==="奈落"&&r.category!=="レギオン"&&r.category!=="ホラー",l={label:">>> 逃走 >>>",isDisabled:!a,onClick:()=>{a&&zi(r,{...e,name:"逃走",isEscapeAttempt:!0})}},c=r.type==="pc"&&r.area==="楽園"&&r.category!=="レギオン"&&r.category!=="ホラー",h={label:"<<< 逃走 <<<",isDisabled:!c,onClick:()=>{c&&zi(r,{...e,name:"逃走",isEscapeAttempt:!0})}};e.effects.some(u=>u.ref==="MOVE_CHARACTER")&&o.push(l),Ns.forEach((u,d)=>{const m=Math.abs(n-d)>i||d===n,p={label:d===n?`${u} (現在地)`:u,isDisabled:m,onClick:()=>{m||zi(r,{...e,targetArea:u})}},g=s[u];g&&(p.class=`area-color-${g}`),o.push(p)}),e.effects.some(u=>u.ref==="MOVE_CHARACTER")&&o.push(h),pn({title:`【${e.name}】移動先を選択`,items:o})}function Po(){const r=document.getElementById("maneuverMenu");r&&r.classList.remove("is-visible"),ar(),Ro=null}function Xh(r){const e=Bt(),t=[];(r.skills||[]).forEach(o=>{const a=rn(o);a&&t.push({data:a,sourceType:"skill",sourceName:o})}),Object.values(r.partsStatus||{}).flat().forEach(o=>{const a=rn(o.name);a&&t.push({data:a,sourceType:"part",sourceName:o.name,isDamaged:o.damaged})});const n=rn("待機");n&&t.push({data:n,sourceType:"common"});const i=rn("任意");i&&t.push({data:i,sourceType:"common"});const s=new Set;return document.getElementById("actionPhaseIndicator")?.classList.contains("active")&&s.add("アクション"),document.getElementById("rapidPhaseIndicator")?.classList.contains("active")&&s.add("ラピッド"),document.getElementById("judgePhaseIndicator")?.classList.contains("active")&&s.add("ジャッジ"),document.getElementById("damagePhaseIndicator")?.classList.contains("active")&&s.add("ダメージ"),t.map(o=>{const a=o.data;let l=!0;if(o.isDamaged&&(l=!1),r.usedManeuvers.has(a.name)&&(l=!1),(isNaN(Number(a.cost))?0:Number(a.cost))>r.actionValue&&(l=!1),a.timing!=="オート"&&s.has(a.timing)||(l=!1),a.timing==="アクション"&&l&&(e.activeActors.some(u=>u.id===r.id)||(l=!1)),l&&a.timing!=="オート"){const{hasTarget:h}=gc(r,a);h||(l=!1)}return{...o,isUsable:l}})}function OE(r,e){if(!e||!e.partsStatus)return"";for(const t in e.partsStatus)if(e.partsStatus[t].some(n=>n.name===r.name))return{head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"他"}[t]||"";return""}function kE(r,e){pn({title:"保管所からキャラクターを読込み",bodyHtml:`
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
    `,onRender:(n,i)=>{const s=n.querySelector("#import-by-list-content"),o=n.querySelector("#import-by-id-content"),a=n.querySelector(".sheet-list-container"),l=n.querySelector(".loader"),c=n.querySelector("#sheetIdInput"),h=n.querySelector("#importSheetBtn"),u=async f=>{try{i(),zt(`ID: ${f} を読込み中...`,2e3);const m=await qh(f),v=mc(m);if(v)v.sheetId=f,e.addCharacterFromObject(v,r),Ft(),Ar(),zt(`「${v.name}」を読み込みました。`,2e3);else throw new Error("データの変換に失敗しました。")}catch(m){alert(`エラー: ${m.message}`)}},d=f=>{l.style.display="block",a.innerHTML="",l.textContent=`${f==="id"?"ID":"新着"}リストを読み込み中...`,zE(f).then(m=>{l.style.display="none";const v=`
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
                        </table>`;a.innerHTML=v,n.querySelectorAll(".sheet-list-table tbody tr").forEach(p=>{p.onclick=()=>u(p.dataset.id)})}).catch(m=>{l.textContent=`リストの読み込みに失敗しました: ${m.message}`})};n.querySelectorAll('input[name="import-method"]').forEach(f=>{f.onchange=m=>{const v=m.target.value;v==="new"?(s.style.display="block",o.style.display="none",d("%21")):v==="idlist"?(s.style.display="block",o.style.display="none",d("id")):(s.style.display="none",o.style.display="block",c.focus())}}),h.onclick=()=>{const f=c.value.trim().match(/(\d+)/)?.[1];f&&u(f)},c.onkeydown=f=>{if(f.key==="Enter"){const m=c.value.trim().match(/(\d+)/)?.[1];m&&u(m)}},d("%21")}})}async function zE(r="%21"){const t=[],n=document.querySelector("#import-by-list-content .loader"),i=s=>new Promise((o,a)=>{const l=`jsonpCallback_list_${Date.now()}_${s}`;window[l]=h=>{document.head.removeChild(c),delete window[l],o(h)};const c=document.createElement("script");c.onerror=()=>{delete window[l],document.head.removeChild(c),a(new Error(`Page ${s}の読込みに失敗`))},c.src=`https://charasheet.vampire-blood.net/list_nechro.js?order=${r}&page=${s}&callback=${l}`,c.charset="UTF-8",document.head.appendChild(c)});for(let s=0;s<6;s++)try{n&&(n.textContent=`リストを読み込み中... (${s+1} / 6ページ)`);const o=await i(s);t.push(...o),await new Promise(a=>setTimeout(a,200))}catch(o){throw console.error(`ページ ${s} の取得に失敗しました。処理を中断します。`,o),new Error(`ページ ${s} の取得中にエラーが発生しました。`)}return t}function qh(r){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=s=>{document.head.removeChild(i),delete window[n],e(s)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${r}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}function Wl(r,e){const t=()=>{const v=localStorage.getItem("userLocalImages");return v?JSON.parse(v):[]},n=v=>{const p=t();p.includes(v)||(p.push(v),localStorage.setItem("userLocalImages",JSON.stringify(p)))},i=async(v,p,g)=>{const _=v.target.files[0];if(_&&_.type.startsWith("image/"))try{const x=await s(_,300);n(x),g(),Wl(r,e)}catch(x){console.error("画像のリサイズに失敗しました:",x),alert("画像の処理に失敗しました。別の画像で試してください。")}v.target.value=""};function s(v,p){return new Promise((g,_)=>{const x=new FileReader;x.readAsDataURL(v),x.onload=y=>{const b=new Image;b.src=y.target.result,b.onload=()=>{let w=b.width,C=b.height;if(w<=p&&C<=p){g(b.src);return}w>C?w>p&&(C*=p/w,w=p):C>p&&(w*=p/C,C=p);const I=document.createElement("canvas");I.width=w,I.height=C,I.getContext("2d").drawImage(b,0,0,w,C);const E=I.toDataURL("image/jpeg",.8);g(E)},b.onerror=w=>_(w)},x.onerror=y=>_(y)})}const o=["/images/doll/doll_01.png","/images/doll/doll_02.png","/images/doll/doll_03.png","/images/doll/doll_04.png","/images/doll/doll_05.png","/images/doll/doll_06.png","/images/doll/doll_12.png","/images/doll/doll_13.png","/images/doll/doll_14.png","/images/doll/doll_15.png","/images/doll/doll_16.png","/images/doll/doll_17.png"],a=Rf(),l=t(),c=[...new Set([...o,...a])],u=[...l,...c].map(v=>`<div class="image-select-item" data-path="${v}"><img src="${v}" alt="image" loading="lazy"></div>`).join(""),m=`
        <div class="local-image-upload-container">
            <div class="button-group">
                <button id="localImageUploader" class="local-image-upload-btn">ローカルから読込み</button>
                <button id="clearImageCacheBtn" class="local-image-clear-btn">画像キャッシュ消去</button>
            </div>
            <input type="file" id="localImageInput" accept="image/*" style="display: none;">
            <p class="image-upload-note">画像は、300×300px にリサイズされてキャッシュします。</p>
            <p class="image-upload-note">画像キャッシュ使用量: ${(LE()/1024).toFixed(1)} KB / 5.0 MB</p>
        </div>
        <div class="image-select-grid">${u}</div>
    `;pn({title:"画像を選択",bodyHtml:m,onRender:(v,p)=>{const g=v.querySelector("#localImageUploader"),_=v.querySelector("#localImageInput");g.onclick=()=>_.click(),_.onchange=y=>i(y,v,p);const x=v.querySelector("#clearImageCacheBtn");x&&(x.onclick=()=>{confirm("ローカルに保存した画像をすべて消去します。よろしいですか？")&&(DE(),zt("画像キャッシュを消去しました。",2e3),p(),Wl(r,e))}),v.querySelectorAll(".image-select-item").forEach(y=>{y.onclick=()=>{const b=y.dataset.path;On(r.id,{img:b}),Cr(),Ft(),p(),e();const w=an(r.id);w&&Ho(w)}})}})}function VE(r,e){const t=Bt(),n=Ns.indexOf(r.area),i=e.range;if(typeof i!="string"&&typeof i!="number")return[];const s=i.toString().split("～"),o=parseInt(s[0],10),a=parseInt(s[1]||s[0],10);return isNaN(o)?[]:t.actionQueue.filter(l=>{if(l.checked)return!1;const c=l.performer,h=Ns.indexOf(c.area);if(h===-1)return!1;const u=Math.abs(n-h);return!(u<o||u>a||e.category==="支援"&&r.type!==c.type||e.category==="妨害"&&r.type===c.type)})}function gc(r,e){const t=e.range;if(!t||["自身","効果参照","なし","すべて"].includes(t)||e.timing==="オート")return{hasTarget:!0,targets:[]};let n=0;const i=t.toString().split("～"),s=parseInt(i[0],10),o=parseInt(i[1]||i[0],10)+n;if(isNaN(s))return{hasTarget:!0,targets:[]};const a=Vt(),l=Ns.indexOf(r.area),c=[],h=a.filter(u=>!u.isDestroyed&&!u.hasWithdrawn);for(const u of h){if(u.id===r.id&&t!=="0"||r.type===u.type&&e.tags.includes("攻撃"))continue;const d=Ns.indexOf(u.area);if(d===-1)continue;const f=Math.abs(l-d);f>=s&&f<=o&&c.push(u)}return{hasTarget:c.length>0,targets:c}}async function HE(r,e,t){return new Promise(n=>{const i=l=>{if(!po)return;const c=po;s(),c(l)},s=()=>{po=null,document.querySelectorAll(".target-selectable").forEach(l=>l.classList.remove("target-selectable")),document.removeEventListener("click",t)};po=n,qe(`>> ${r.name}のターゲットを選択してください。(対象外クリックでキャンセル)`);const{targets:o}=gc(r,e);o.length>0&&Yh(o);const a=new Set(o.map(l=>l.id));document.querySelectorAll(".char, .marker").forEach(l=>{a.has(l.dataset.id)&&(l.classList.add("target-selectable"),l.onclick=c=>{c.stopPropagation(),i(an(l.dataset.id))})}),document.addEventListener("click",t)})}function GE(r,e,t){const a=(r.type==="pc"?["煉獄","花園","楽園"]:["奈落","地獄","煉獄","花園","楽園"]).map(l=>({label:l+(r.area===l?" (現在地)":""),isDisabled:r.area===l,onClick:()=>{On(r.id,{area:l}),Ft()}}));pn({title:`${r.name} の配置先を選択`,items:a})}function WE(r,e,t,n){const i=Bt(),s=i.actionQueue[n];if(!s)return;let o=0;const a=[],l=[],c=t.effects.find(p=>p.ref==="GENERIC_ATTACK");if(c&&c.params&&c.params.attack_bonus){const p=parseInt(c.params.attack_bonus,10);isNaN(p)||(o+=p,a.push(`【${t.name}】自体 (${p>0?"+":""}${p})`))}Xh(r).filter(p=>p.data.timing==="オート"&&!p.isDamaged).forEach(p=>{p.data.effects&&p.data.effects.forEach(g=>{if(g.ref==="APPLY_BUFF"&&g.params.stat==="attackCheckBonus"){const _=g.params.value||0;o+=_,a.push(`${r.name}の【${p.data.name}】(${_>0?"+":""}${_})`)}})}),r.activeBuffs&&r.activeBuffs.length>0&&r.activeBuffs.forEach(p=>{if(p.stat==="attackCheckBonus"){const g=p.value||0;o+=g,a.push(`${r.name}の【${p.source}】効果 (+${g})`)}}),i.judgeQueue.forEach(p=>{const g=p.sourceManeuver,_=g.effects.find(x=>x.ref==="GENERIC_JUDGE_MOD");if(_){let x=!1;if((p.judgeTarget&&p.judgeTarget.id===s.id||_.params.target==="self_roll"&&p.performer.id===r.id)&&(x=!0),x){const y=_.params.value||0,b=`${p.performer.name}の【${g.name}】`;y>0?(o+=y,a.push(`${b} (+${y})`)):y<0&&(o+=y,l.push(`${b} (${y})`))}}});const u=a.length>0?a.map(p=>`<div class="modifier-item">${p}</div>`).join(""):'<div class="modifier-none">- なし -</div>',d=l.length>0?l.map(p=>`<div class="modifier-item">${p}</div>`).join(""):'<div class="modifier-none">- なし -</div>',f=o>0?`+${o}`:o<0?`${o}`:"",m=`
        <div class="attack-confirm-summary">
            ${r.name}【${t.name}】 → ${e.name}
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《支援》</div>
            <div class="modifier-list">${u}</div>
        </div>
        <div class="attack-confirm-section">
            <div class="section-header">《妨害》</div>
            <div class="modifier-list">${d}</div>
        </div>
    `,v=`<button id="executeDiceRollBtn" class="welcome-modal-close-btn">🎲 NA${f} 🎲</button>`;pn({title:"ジャッジ",bodyHtml:m,footerHtml:v,onRender:(p,g)=>{p.querySelector("#executeDiceRollBtn").onclick=()=>{Zh(n,o),g()}}})}const $E="2.2.9";let ys=!1,dn=null;function XE(){console.log("Interaction Manager initialized.")}function qE(){document.addEventListener("click",i=>{dn&&!dn.contains(i.target)&&(dn.classList.remove("actions-visible"),dn=null)}),Go(),jE(),Sd(document.getElementById("pcContainer")),Sd(document.getElementById("enemyContainer")),YE();const r=document.getElementById("startBattleBtn");r&&(r.onclick=()=>{r.disabled||gb()}),document.getElementById("countdownBtn").onclick=()=>_b(),document.getElementById("endTurnBtn").onclick=()=>Jh();const e=document.getElementById("saveStateToFileBtn");e&&(e.onclick=Fb);const t=document.getElementById("saveStateBtn");t&&(t.onclick=_c);const n=document.getElementById("clearStateBtn");n&&(n.onclick=()=>{confirm("ブラウザに保存されたセッションデータを削除します。この操作は取り消せません。よろしいですか？")&&yc()})}function Go(){document.querySelectorAll(".char").forEach(r=>{const e=r.dataset.id;if(!e)return;const t=an(e);if(t){if(Bt().isStarted)r.onclick=n=>{if(n.stopPropagation(),ys){ys=!1;return}xd(t,r)};else{r.onclick=h=>{if(h.stopPropagation(),ys){ys=!1;return}dn===r?(r.classList.remove("actions-visible"),dn=null):(dn&&dn.classList.remove("actions-visible"),r.classList.add("actions-visible"),dn=r)};const n=r.querySelector('[data-action="delete"]');n&&(n.onclick=h=>{h.stopPropagation(),cf(e),Ft(),Ar(),dn=null});const i=r.querySelector('[data-action="details"]');i&&(i.onclick=h=>{h.stopPropagation(),Ho(t)});const s=r.querySelector('[data-action="place"]');s&&(s.onclick=h=>{h.stopPropagation(),GE(t)});const o=r.querySelector('[data-action="move-left"]');o&&(o.onclick=h=>{h.stopPropagation(),Xl(e,"left"),Ft(),dn=null});const a=r.querySelector('[data-action="move-right"]');a&&(a.onclick=h=>{h.stopPropagation(),Xl(e,"right"),Ft(),dn=null});const l=Vt().filter(h=>h.type===t.type),c=l.findIndex(h=>h.id===e);o&&(o.disabled=c===0),a&&(a.disabled=c===l.length-1)}r.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.add("hover-highlight")},r.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),document.querySelector(`.marker[data-id="${e}"]`)?.classList.remove("hover-highlight")}}}),document.querySelectorAll(".marker").forEach(r=>{const e=r.dataset.id;if(!e)return;const t=an(e);t&&(Bt().isStarted&&(r.onclick=n=>{n.stopPropagation(),xd(t,r)}),r.onmouseenter=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.add("hover-highlight"),r.classList.add("hover-highlight")},r.onmouseleave=()=>{document.querySelector(`.char[data-id="${e}"]`)?.classList.remove("hover-highlight"),r.classList.remove("hover-highlight")})}),document.querySelectorAll(".add-char-card").forEach(r=>{const e=r.closest(".char-container");if(e){const t=e.id==="pcContainer"?"pc":"enemy";r.onclick=null,r.onclick=()=>{FE(t)}}})}function Sd(r){let e=!1,t,n,i;r.addEventListener("mousedown",o=>{e=!0,ys=!1,t=o.pageX-r.offsetLeft,n=r.scrollLeft,i=0});const s=()=>{e=!1,Math.abs(i)>5&&(ys=!0)};r.addEventListener("mouseleave",s),r.addEventListener("mouseup",s),r.addEventListener("mousemove",o=>{if(!e)return;o.preventDefault(),i=o.pageX-r.offsetLeft-t,r.scrollLeft=n-i})}function jE(){const r=document.getElementById("diceRoller");let e=!1,t,n,i,s;r.addEventListener("mousedown",l=>{i=l.clientX,s=l.clientY,e=!0,t=l.clientX-r.getBoundingClientRect().left,n=l.clientY-r.getBoundingClientRect().top,r.style.cursor="grabbing",document.addEventListener("mousemove",o),document.addEventListener("mouseup",a),l.preventDefault()});function o(l){e&&(r.style.left=`${l.clientX-t}px`,r.style.top=`${l.clientY-n}px`)}function a(){e=!1,r.style.cursor="grab",document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",a)}r.addEventListener("click",l=>{Math.abs(l.clientX-i)>3||Math.abs(l.clientY-s)>3||AE()})}function YE(){document.querySelectorAll(".accordion-header").forEach(r=>{r.closest("#maneuverMenu")||r.addEventListener("click",()=>{const e=r.closest(".accordion-container");e&&e.classList.toggle("is-closed")})})}function KE(r){const e=document.getElementById("madnessModal"),t=document.getElementById("confirmMadnessBtn"),n=new Map;document.querySelectorAll(".pc-regret-group").forEach(i=>{i.querySelectorAll(".regret-item").forEach(s=>{s.onclick=()=>{i.querySelectorAll(".regret-item").forEach(o=>o.classList.remove("is-selected")),s.classList.add("is-selected"),n.set(i.dataset.pcId,s.dataset.regretId),t.disabled=n.size!==r.length}})}),t.disabled=!0,t.onclick=()=>{n.forEach((i,s)=>uf(s,i)),e.classList.remove("is-visible"),Qh()}}function ZE(r){yb(r)}function JE(r){const t=Bt().actionQueue[r];if(!t)return;const{performer:n,target:i,sourceManeuver:s}=t;s.tags.includes("攻撃")?WE(n,i,s,r):Zh(r)}function QE(r){xb(r)}function eb(r){const{damageQueue:e}=Bt(),t=e[r];if(t&&!t.applied){const n=an(t.target.id);if(!n)return;const i=()=>{Mb(r)};n.category==="レギオン"||Object.values(n.partsStatus).flat().filter(s=>!s.damaged).length<=t.amount?(n.category==="レギオン"?(qe(`レギオンへの攻撃！ ${t.amount}体が失われます。`),xc(n.id,null,t.amount)&&zt(`${n.name}は完全破壊されました`)):(qe(`＞ ${n.name}は残りパーツ数以上のダメージを受け、完全に破壊されました！`),On(n.id,{isDestroyed:!0}),zt(`${n.name}は完全破壊されました`)),db(n.id),i()):tb(n,t.amount,t.location,i)}}function tb(r,e,t,n){const i=document.getElementById("damageModal"),s=i.querySelector("#damageModalTitle"),o=i.querySelector("#damageModalInfo"),a=i.querySelector("#partsGridContainer"),l=i.querySelector("#confirmDamageBtn");s.textContent=`${r.name} へのパーツ損傷処理`,a.innerHTML="";let c=[];const h=()=>{o.textContent=`損傷させるパーツを ${e} 個選択してください (残り: ${e-c.length})`,l.disabled=c.length!==e};h();const u=r.category==="ホラー",d={頭:"head",腕:"arms",胴:"torso",脚:"legs",体:"body"},f=d[t]||null;if((u?["body"]:["head","arms","torso","legs","body"]).forEach(v=>{const p=r.partsStatus[v];if(p&&p.length>0){const g=document.createElement("div");g.className="part-location-group",g.dataset.location=v,g.innerHTML=`<h4>${Object.keys(d).find(x=>d[x]===v)||"他"}</h4>`;const _=document.createElement("div");_.className="parts-wrapper",p.forEach(x=>{const y=document.createElement("div");y.className="part-item",y.textContent=x.name,y.dataset.partId=x.id;const b=rn(x.name);b&&(y.addEventListener("mouseenter",()=>Kh(i.getBoundingClientRect(),y.getBoundingClientRect(),r,{data:b,isDamaged:x.damaged})),y.addEventListener("mouseleave",()=>ar())),x.damaged?y.classList.add("is-damaged"):y.onclick=()=>{const w=x.id,C=c.indexOf(w);C>-1?(y.classList.remove("is-selected"),c.splice(C,1)):c.length<e&&(y.classList.add("is-selected"),c.push(w)),h()},_.appendChild(y)}),g.appendChild(_),a.appendChild(g)}}),f&&a.querySelector(`.part-location-group[data-location="${f}"]`)?.classList.add("is-highlighted"),f&&r.partsStatus[f]){const v=r.partsStatus[f].filter(p=>!p.damaged);v.length>0&&v.length<=e&&v.forEach(p=>{const g=a.querySelector(`.part-item[data-part-id="${p.id}"]`);g&&!g.classList.contains("is-selected")&&(g.classList.add("is-selected"),c.push(p.id))})}h(),l.onclick=()=>{c.forEach(v=>xc(r.id,v)),i.classList.remove("is-visible"),ar(),ab(r.id),ni(),n&&n()},document.getElementById("closeDamageModalBtn").onclick=()=>{i.classList.remove("is-visible"),ar()},i.classList.add("is-visible")}const nb="1.12.73";let Di=null;const xo=["奈落","地獄","煉獄","花園","楽園"],Xa=Array.from({length:26},(r,e)=>20-e);function ib(){console.log("UI Manager initialized.")}function sb(){document.documentElement.style.setProperty("--col-count",Xa.length),document.documentElement.style.setProperty("--row-count",xo.length);const r=document.getElementById("battleWrap");r.innerHTML="";const e=document.createElement("div");e.className="current-action-cell",e.id="currentActionValue",r.appendChild(e),Xa.forEach((n,i)=>{const s=document.createElement("div");s.className="col-header",s.textContent=n,s.dataset.col=String(n),s.style.gridColumn=(i+2).toString(),s.style.gridRow="1",r.appendChild(s)});const t={奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"};xo.forEach((n,i)=>{const s=document.createElement("div");s.className="row-header";const o=t[n];o&&s.classList.add(`area-color-${o}`),s.textContent=n,s.style.gridColumn="1",s.style.gridRow=(i+2).toString(),r.appendChild(s)}),xo.forEach((n,i)=>{Xa.forEach((s,o)=>{const a=document.createElement("div");a.className="cell";const l=t[n];l&&a.classList.add(`cell-area-${l}`),s===0?a.classList.add("col-zero"):s<0&&a.classList.add("col-negative"),a.dataset.row=String(i),a.dataset.col=String(s),a.style.gridColumn=(o+2).toString(),a.style.gridRow=(i+2).toString(),r.appendChild(a)})})}function zt(r,e=2e3){const t=document.getElementById("toast-notification");t&&(Di&&clearTimeout(Di),t.onclick=()=>{t.classList.remove("is-visible"),Di&&(clearTimeout(Di),Di=null),t.onclick=null},t.innerHTML=r,t.classList.add("is-visible"),Di=setTimeout(()=>{t.classList.remove("is-visible"),t.onclick=null,Di=null},e))}function Ft(){const r=Vt(),e=r.filter(n=>n.type==="pc"),t=r.filter(n=>n.type==="enemy");Ed(document.getElementById("pcContainer"),e,"pc"),Ed(document.getElementById("enemyContainer"),t,"enemy"),ni(),Go()}function Ed(r,e,t){r.innerHTML="";const n=!Bt().isStarted;if(e.forEach(i=>{const s=jh(i,n);r.appendChild(s)}),n){const i=document.createElement("div");i.className="add-char-card";const s=t==="pc"?"姉妹ドール":"NCの手駒";i.innerHTML=`<div class="add-char-text-2">UNDEAD</div><div class="add-char-plus">+</div><div class="add-char-text">${s}を追加</div>`,r.appendChild(i)}}function jh(r,e){let t="";r.isMentallyBroken&&(t+=" status-mental-collapse"),r.isDestroyed&&(t+=" status-destroyed"),r.hasWithdrawn&&(t+=" status-withdrawn");let n="";(r.isDestroyed||r.hasWithdrawn)&&(n+=" is-inactive");const i=document.createElement("div");i.className=`char ${n.trim()}`,i.dataset.id=r.id;const s=`
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
        </div>`;let o="";r.regrets&&r.regrets.length>0&&(o=`<div class="char-madness">${r.regrets.map(m=>{const v=m.points||0;let p="";for(let _=0;_<4;_++)p+=_<v?"◆":"◇";return`<div class="${v>=4?"is-madness":""}">${p}</div>`}).join("")}</div>`);let a="";if(r.partsStatus){let f="";if(r.category==="ドール"||r.category==="サヴァント"){const m=["head","arms","torso","legs","body"],v={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"他"},p=r.treasure;f=m.map(g=>{if(!r.partsStatus[g]||r.partsStatus[g].length===0)return"";const x=r.partsStatus[g].map(y=>{const b=rn(y.name),w=b&&b.id&&b.id.startsWith("BP-"),C=y.name===p;return{part:y,isBasicPart:w,isTreasure:C,damaged:y.damaged}}).sort((y,b)=>y.isTreasure!==b.isTreasure?y.isTreasure?-1:1:y.isBasicPart!==b.isBasicPart?y.isBasicPart?1:-1:y.damaged!==b.damaged?y.damaged?-1:1:0).map(y=>y.isTreasure?y.damaged?"☆":"★":y.isBasicPart?y.damaged?"□":"■":y.damaged?"〇":"●").join("");return g==="body"&&!r.partsStatus[g].some(y=>y.name!==p)?"":`<div>${x}：${v[g]}</div>`}).filter(g=>g!=="").join("")}else if(r.category==="ホラー"){const m=Object.values(r.partsStatus).flat(),v=[],p=[];m.forEach(x=>{const y=rn(x.name);y&&y.id&&y.id.startsWith("BP-")?v.push(x):p.push(x)});let g="";if(p.length>0){const x=p.filter(b=>b.damaged).length;g=`<div>${"〇".repeat(x)+"●".repeat(p.length-x)}：強</div>`}let _="";if(v.length>0){const x=v.filter(b=>b.damaged).length;_=`<div>${"□".repeat(x)+"■".repeat(v.length-x)}：基</div>`}f=_+g}else if(r.category==="レギオン"){const m=r.isDestroyed?0:r.stackCount,v=Math.ceil(m/10),p=[];for(let g=0;g<v;g++){const _=g*10,x=Math.min(m-_,10);x>0&&p.push(`<div>${"●".repeat(x)}：</div>`)}f=p.reverse().join("")}f&&(a=`<div class="char-parts-status">${f}</div>`)}const l=r.category==="レギオン";let c="";l?c=`<div class="char-stack-count">${r.isDestroyed?0:r.stackCount}体</div>`:c=`<div class="char-parts-count">${r.isDestroyed?0:Object.values(r.partsStatus).flat().filter(m=>!m.damaged).length}</div>`;const h=`
        <div class="char-action-display">
            <div class="char-action-value">${r.actionValue}</div>
            <div class="char-action-subtext">行動値</div>
            <div class="char-action-subtext">最大:${r.maxActionValue}</div>
        </div>
    `,d=`area-color-${{奈落:"naraku",地獄:"jigoku",煉獄:"rengoku",花園:"hanazono",楽園:"rakuen"}[r.area]||""}`;return i.innerHTML=`
        <div class="char-status-overlays ${t.trim()}">
            <div class="status-tape status-tape-mental-collapse">BREAKDOWN 精神崩壊 BREAKDOWN</div>
            <div class="status-tape status-tape-destroyed">DESTROYED 完全破壊 DESTROYED</div>
            <div class="status-tape status-tape-withdrawn">ESCAPE 戦場離脱 ESCAPE</div>
        </div>
        <div class="char-img-container">
            <div class="damage-prompt-container"></div> 
            <div class="char-area-name ${d}">${r.area}</div>
            <div class="char-name-overlay">${r.name}</div>
            ${c}
            ${h}
            ${o} 
            ${a} 
            <img src="${r.img}" alt="${r.name}">
        </div>
        <div class="char-stats">
        </div>
        ${e?s:""}
    `,i}function rb(r){if(!r)return;const{actionValue:e,area:t,id:n,name:i,img:s,stackCount:o}=r,a=document.getElementById("battleWrap"),l=xo.indexOf(t);if(l===-1)return;const c=a.querySelector(`.cell[data-row="${l}"][data-col="${e}"]`);if(!c)return;const h=document.createElement("span");h.className="marker",h.dataset.id=n,h.dataset.name=i;const u=new Image;if(u.src=s,u.className="marker-img",u.alt=i,h.appendChild(u),r.category==="レギオン"&&o>1){const d=document.createElement("div");d.className="marker-stack-count",d.textContent=`x${o}`,h.appendChild(d)}c.appendChild(h)}function Yh(r){if(!r||r.length===0)return;const e=r[0].id,t=document.querySelector(`.char[data-id="${e}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"})}function qe(r){const e=document.getElementById("logEntries");if(!e)return;const t=document.createElement("div");t.className="log-entry",t.innerHTML=r,e.appendChild(t),e.scrollTop=e.scrollHeight}function ob(){const r=document.getElementById("madnessModal"),e=document.getElementById("madnessModalBody");e.innerHTML="";const t=Vt().filter(n=>n.type==="pc"&&!n.isDestroyed&&!n.hasWithdrawn);if(t.length===0){Qh();return}t.forEach(n=>{const i=document.createElement("div");i.className="pc-regret-group",i.dataset.pcId=n.id,i.innerHTML=`<h4>${n.name}の未練 (1つ選択)</h4>`,n.regrets.forEach(s=>{const o=document.createElement("div");o.className="regret-item",o.dataset.regretId=s.id,o.textContent=`${s.name} (狂気点: ${s.points})`,i.appendChild(o)}),e.appendChild(i)}),r.classList.add("is-visible"),KE(t)}function ab(r){const e=an(r);if(!e)return;const t=document.querySelector(`.char[data-id="${r}"]`);if(t){const n=!Bt().isStarted,i=jh(e,n);t.replaceWith(i),Go()}}function ni(){document.getElementById("battleWrap").querySelectorAll(".marker").forEach(t=>t.remove()),Vt().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).forEach(t=>{rb(t)}),Go()}function Io(){const{isStarted:r,turn:e,count:t,activeActors:n,shouldScrollToCount:i}=Bt(),s=document.getElementById("timingArea"),o=document.getElementById("battleWrap");s&&(r?(s.classList.remove("setup-phase"),s.classList.add("battle-phase"),o.classList.remove("setup-phase")):(s.classList.add("setup-phase"),s.classList.remove("battle-phase"),o.classList.add("setup-phase")));const a=document.getElementById("turnIndicator").textContent;String(e)!==a&&r&&qe(`【ターン ${e} 開始】`);const l=document.getElementById("turnIndicator"),c=document.getElementById("countIndicator"),h=document.getElementById("currentActionValue");if(!r){l.textContent="-",c.textContent="-",h.textContent="カウント -",document.querySelectorAll(".highlight-char").forEach(u=>u.classList.remove("highlight-char")),o.querySelectorAll(".highlight-col").forEach(u=>u.classList.remove("highlight-col")),Lo(Bt());return}if(l.textContent=e,c.textContent=t,h.textContent=`カウント ${t}`,document.querySelectorAll(".char").forEach(u=>{u.classList.toggle("highlight-char",n.some(d=>d.id===u.dataset.id))}),o.querySelectorAll(".highlight-col").forEach(u=>u.classList.remove("highlight-col")),o.querySelectorAll(`.cell[data-col="${t}"], .col-header[data-col="${t}"]`).forEach(u=>u.classList.add("highlight-col")),i){const u=document.querySelector(".battle-grid-scroll-wrapper"),d=o.querySelector(`.col-header[data-col="${t}"]`),f=o.querySelector(".row-header");if(u&&d&&f){const m=f.offsetWidth,p=d.offsetLeft-m;u.scrollTo({left:p,behavior:"smooth"})}vb()}n.length>0&&Yh(n),Lo(Bt()),vc()}function lb(r){const e=new Set(r.map(t=>t.id));document.querySelectorAll(".char").forEach(t=>{t.classList.toggle("highlight-char",e.has(t.dataset.id))})}function Lo(r){if(!r)return;const{phase:e,actionQueue:t,activeActors:n,count:i}=r,s={action:document.getElementById("actionPhaseIndicator"),rapid:document.getElementById("rapidPhaseIndicator"),judge:document.getElementById("judgePhaseIndicator"),damage:document.getElementById("damagePhaseIndicator")};Object.values(s).forEach(l=>l.classList.remove("active")),n.length>0&&s.action.classList.add("active"),t.length>0&&(s.rapid.classList.add("active"),s.judge.classList.add("active")),(e==="JUDGE_RESOLUTION"||e==="ACTION_RESOLUTION")&&s.judge.classList.add("active"),e==="DAMAGE_RESOLUTION"&&s.damage.classList.add("active");const o=document.getElementById("countdownBtn"),a=document.getElementById("endTurnBtn");o.disabled=!0,a.disabled=!0,e==="COUNT_END"?o.disabled=!1:e==="TURN_END_PREPARATION"&&(a.disabled=!1)}function vc(){const{actionQueue:r,rapidQueue:e,judgeQueue:t,damageQueue:n}=Bt();qa("actionDeclarationList",r,"アクション宣言"),qa("rapidDeclarationList",e,"ラピッド宣言"),qa("judgeDeclarationList",t,"ジャッジ宣言"),cb(n),document.querySelectorAll(".damage-prompt-button").forEach(s=>s.remove());const i={};n.forEach(s=>{if(!s.applied){const o=s.target.id;i[o]||(i[o]=0),i[o]+=s.amount}});for(const s in i)i[s]>0&&ub(s,i[s]);document.getElementById("actionDeclarationArea").classList.toggle("is-closed",r.length===0),document.getElementById("rapidDeclarationArea").classList.toggle("is-closed",e.length===0),document.getElementById("judgeDeclarationArea").classList.toggle("is-closed",t.length===0),document.getElementById("damageProcessingArea").classList.toggle("is-closed",n.length===0)}function qa(r,e,t){const n=document.getElementById(r);if(!n)return;const i=n.closest(".accordion-container"),s=i?i.querySelector(".accordion-header"):null;if(!s)return;const o=Bt(),a=o.phase==="RAPID_RESOLUTION",l=o.phase==="JUDGE_RESOLUTION",c=o.phase==="ACTION_RESOLUTION",h=o.rapidQueue.some(f=>!f.checked),u=o.judgeQueue.some(f=>!f.checked);let d=s.querySelector("span");if(!d){const f=s.textContent;s.innerHTML="",d=document.createElement("span"),d.textContent=f,s.appendChild(d)}e.length===0?(n.innerHTML="",d.textContent=t+"はありません"):(d.textContent=t,n.innerHTML="",e.forEach((f,m)=>{const v=document.createElement("label");v.className="action-queue-item";let p=!1;r==="rapidDeclarationList"?p=!a:r==="judgeDeclarationList"?p=!l||h:r==="actionDeclarationList"&&(p=!c||h||u),f.checked&&(p=!0),p&&v.classList.add("is-disabled"),f.checked&&v.classList.add("is-checked");const g=document.createElement("input");g.type="checkbox",g.checked=f.checked,g.disabled=!0,p||(r==="rapidDeclarationList"?v.onclick=()=>ZE(m):r==="judgeDeclarationList"?v.onclick=()=>QE(m):r==="actionDeclarationList"&&(v.onclick=()=>JE(m))),v.appendChild(g);const _=document.createElement("span");let x=`<b>${f.performer.name}</b>: 【${f.summary.name}】`;f.target&&(x+=` → <b>${f.target.name}</b>`),_.innerHTML=x,v.appendChild(_),n.appendChild(v)}))}function cb(r){const e=document.getElementById("damageProcessingList");if(!e)return;const t=e.closest(".accordion-container"),n=t?t.querySelector(".accordion-header"):null,i=Bt().phase==="DAMAGE_RESOLUTION";r.length===0?(e.innerHTML="",n&&(n.textContent="ダメージ処理はありません")):(n&&(n.textContent="ダメージ処理"),e.innerHTML="",r.forEach((s,o)=>{const a=document.createElement("label");a.className="action-queue-item damage-item";const l=!i||s.applied;l&&a.classList.add("is-disabled"),s.applied&&a.classList.add("is-checked");const c=document.createElement("input");c.type="checkbox",c.checked=s.applied,c.disabled=!0;const h=document.createElement("span");h.innerHTML=`<b>${s.target.name}</b>: ${s.location}: <b>${s.amount}</b>点`,!s.applied&&!l&&(a.onclick=()=>eb(o)),a.appendChild(c),a.appendChild(h),e.appendChild(a)}))}function ub(r,e){const t=document.querySelector(`.char[data-id="${r}"]`);if(!t)return;const n=t.querySelector(".damage-prompt-container");let i=n.querySelector(".damage-prompt-button");if(i){const o=parseInt(i.dataset.damage,10)+e;i.dataset.damage=o,i.textContent=`ダメージ ${o}`}else i=document.createElement("button"),i.className="damage-prompt-button",i.dataset.damage=e,i.textContent=`ダメージ ${e}`,i.onclick=s=>{s.stopPropagation()},i.style.pointerEvents="none",n.appendChild(i)}function db(r){const e=document.querySelector(`.char[data-id="${r}"]`);if(e){const t=e.querySelector(".damage-prompt-button");t&&t.remove()}}function Ar(){const r=document.getElementById("startBattleBtn");if(!r)return;const e=Vt(),t=e.some(i=>i.type==="pc"),n=e.some(i=>i.type==="enemy");r.disabled=!(t&&n)}function Kh(r,e,t,n){const i=document.getElementById("maneuverCard"),s=n.data,o=s.category==="行動値増加"?"行動値":s.category||"その他",a=`category-color-${Wh(o)}`,l=hb(s),c=fb(s,t);let h="";s.source&&(h=s.source.book||"",s.source.page&&(h+=` (p${s.source.page})`),s.source.errata&&(h+=`, エラッタ ${s.source.errata}`)),i.innerHTML=`
        <div class="card-category-bar ${a}">${o}</div>
        <div class="card-content">
            <div class="card-source-header">${l}</div>
            <div class="card-header">
                <span class="card-location-text">${c}</span>
                <span class="card-maneuver-name">【${s.name}】</span>
            </div>
            <div class="card-stats">
                <div><span>T</span>${s.timing}</div>
                <div><span>C</span>${s.cost}</div>
                <div><span>R</span>${s.range}</div>
            </div>
            <div class="card-row"><strong>効果</strong> ${s.description_raw||"---"}</div>
            ${s.flavor_text?`<div class="card-row" style="font-style: italic;">${s.flavor_text}</div>`:""}
            <div class="card-row"><strong>出典</strong> ${h||"---"}</div>
        </div>
    `,i.style.display="flex";const u=i.getBoundingClientRect();let d=40,f=e.top+100;f+u.height>window.innerHeight&&(f=e.top-u.height-40),f<10&&(f=20),i.style.left=`${d}px`,i.style.top=`${f}px`}function hb(r){if(!r.id)return"不明";const e=No(),t=r.id,n=t.substring(0,2);if(e.positions[n])return`ポジションスキル：${e.positions[n].name}`;if(e.classes[n])return t.endsWith("-SP")?`特化スキル：${e.classes[n].name}`:`クラススキル：${e.classes[n].name}`;if(n==="BP")return"基本パーツ";const i=t.substring(0,1),s=t.substring(1,2);return e.enhancementTypes[i]&&["1","2","3"].includes(s)?`強化パーツ：${s}レベル${e.enhancementTypes[i].name}`:t.startsWith("P")?`手駒専用パーツ：悪意${parseInt(t.substring(1,2),10)/2}`:e.pawnSkills[n]?e.pawnSkills[n].name:e.commonAction[n]?e.commonAction[n].name:"スキル"}function fb(r,e){if(!r.id||!e.partsStatus)return"";const t={head:"頭",arms:"腕",torso:"胴",legs:"脚",body:"体"};for(const n in e.partsStatus)if(e.partsStatus[n].some(i=>i.name===r.name))return`${t[n]||"体"}：`;return"スキル："}function ar(){document.getElementById("maneuverCard").style.display="none"}function pb(r){const e=document.getElementById("version-info");if(e&&r){const n=["app","battle-logic","ui-manager","interaction-manager","character-manager","settings-manager","state-manager","menu-builder","data-handler","ui-helpers","dice-roller","dice-3d","character-converter"].map(i=>`<span class="responsive-item">${i}: v${r[i]||"N/A"}</span>`).join('<span class="hide-on-mobile"> | </span>');e.innerHTML=n}}function pn(r){const e=document.getElementById("simpleMenuModal"),t=document.getElementById("simpleMenuModalTitle"),n=document.getElementById("simpleMenuModalBody"),i=document.getElementById("simpleMenuModalFooter"),s=document.getElementById("closeSimpleMenuModalBtn");if(!e||!t||!n||!i||!s)return;t.textContent=r.title||"",n.innerHTML=r.bodyHtml||"",i.innerHTML=r.footerHtml||"",i.style.display=r.footerHtml?"block":"none",n.classList.remove("attack-confirm-body"),r.bodyHtml&&r.bodyHtml.includes("attack-confirm-summary")&&n.classList.add("attack-confirm-body"),r.items&&r.items.forEach(a=>{const l=document.createElement("div");a.isTitle||(l.textContent=a.label,l.classList.add("maneuver-item"),a.class&&l.classList.add(...a.class.split(" ")),a.isDisabled&&l.classList.add("is-masked"),l.onclick=()=>{a.isDisabled||(o(),a.onClick&&a.onClick())}),n.appendChild(l)});const o=()=>e.classList.remove("is-visible");s.onclick=o,e.onclick=a=>{a.target===e&&o()},r.onRender&&r.onRender(e,o),e.classList.add("is-visible")}const mb="1.15.60";let Ee={isStarted:!1,turn:1,count:0,activeActors:[],phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],currentAction:null,shouldScrollToCount:!1};function gb(){Ee.isStarted=!0,Ee.turn=1;const r=Vt();Ee.count=Math.max(0,...r.map(e=>e.actionValue)),Ft(),Ee.shouldScrollToCount=!0,Wo(),mn()}function Bt(){return{...Ee}}function vb(){Ee.shouldScrollToCount=!1}function zi(r,e,t=null,n=null){const i={id:`decl_${Date.now()}_${Math.random()}`,performer:r,target:t,sourceManeuver:e,timing:e.timing,isResolved:!1,summary:{name:e.name,cost:e.cost,range:e.range,description:e.description}},s=isNaN(Number(e.cost))?0:Number(e.cost);switch(s>0&&On(r.id,{actionValue:r.actionValue-s}),e.name!=="待機"&&On(r.id,{hasActedThisCount:!0}),e.timing){case"ラピッド":Ee.rapidQueue.push(i),qe(`◆[ラピッド] ${r.name}が【${e.name}】を宣言。`);break;case"ジャッジ":i.judgeTarget=n,Ee.judgeQueue.push(i),qe(`◆[ジャッジ] ${r.name}が【${e.name}】を宣言。`);break;case"ダメージ":qe(`◆[ダメージ] ${r.name}が【${e.name}】を宣言。`);break;default:Ee.actionQueue.push(i),qe(`◆[アクション] ${r.name}が【${e.name}】を宣言。`);break}r.turnLimitedManeuvers.has(e.name)&&r.usedManeuvers.add(e.name),Ft(),ni(),mn()}function mn(){if(!Ee.isStarted)return;const r=Vt();if(r.length===0){Ee.count=0,Ee.activeActors=[],Io();return}const e=r.filter(f=>f.actionValue>=Ee.count&&!f.hasActedThisCount),t=e.some(f=>f.type==="enemy");let n=[];t?n=e.filter(f=>f.type==="enemy"):n=e,Ee.activeActors=n;const i=Ee.phase;let s=Ee.phase;const o=Vt().filter(f=>!f.isDestroyed&&!f.hasWithdrawn),a=o.filter(f=>f.actionValue>=Ee.count&&!f.hasActedThisCount),l=Ee.rapidQueue.some(f=>!f.checked),c=Ee.judgeQueue.some(f=>!f.checked),h=Ee.actionQueue.some(f=>!f.checked),u=Ee.damageQueue.some(f=>!f.applied),d=o.some(f=>f.actionValue>0);if(a.length>0?s="ACTION_DECLARATION":l?s="RAPID_RESOLUTION":c?s="JUDGE_RESOLUTION":h?s="ACTION_RESOLUTION":u?s="DAMAGE_RESOLUTION":Ee.count>0&&d?s="COUNT_END":s="TURN_END_PREPARATION",Ee.phase=s,i!==Ee.phase)switch(Ee.phase){case"RAPID_RESOLUTION":qe("--- ラピッド解決フェーズ開始 ---");break;case"JUDGE_RESOLUTION":qe("--- ジャッジ解決フェーズ開始 ---");break;case"ACTION_RESOLUTION":qe("--- アクション解決フェーズ開始 ---");break;case"DAMAGE_RESOLUTION":qe("--- ダメージ解決フェーズ開始 ---");break;case"COUNT_END":qe("--- カウント終了 ---");break;case"TURN_END_PREPARATION":qe("--- ターン終了準備 ---");break}Io(),Ft(),ni(),vc(),lb(Ee.activeActors)}function _b(){Vt().forEach(t=>t.hasActedThisCount=!1);const e=Vt().filter(t=>!t.isDestroyed&&!t.hasWithdrawn).map(t=>t.actionValue).filter(t=>t<Ee.count);e.length>0?(Ee.count=Math.max(...e),Ee.shouldScrollToCount=!0,Wo(),mn()):Jh()}function Wo(){Ee.phase="ACTION_DECLARATION",Ee.actionQueue=[],Ee.rapidQueue=[],Ee.judgeQueue=[],Ee.damageQueue=[],vc(),Lo(Ee),Cr()}async function yb(r){const e=Ee.rapidQueue[r];!e||e.checked||(await ef(e),e.checked=!0,mn())}async function Zh(r,e=0){const t=Ee.actionQueue[r];if(!t||t.checked)return;const{targets:n}=gc(t.performer,t.sourceManeuver);if(t.target&&!n.some(s=>s.id===t.target.id)){qe(`＞ 解決失敗: ${t.target.name} は射程外です。`),t.checked=!0,mn();return}await ef(t,e),t.checked=!0,Ee.actionQueue.every(s=>s.checked)?Eb():mn()}function xb(r){const e=Ee.judgeQueue[r];e&&!e.checked&&(e.checked=!0,qe(`＞ [ジャッジ] ${e.performer.name}の【${e.sourceManeuver.name}】を解決(チェック)しました。`)),mn()}function Jh(){Ee.phase="MADNESS_PHASE",qe("【ターン終了】各ドールは未練に狂気点を1点加えます。"),ob(),Lo(Ee)}function Qh(){Ee.turn++,Vt().forEach(t=>{t.activeBuffs=t.activeBuffs.filter(n=>n.duration!=="end_of_turn")}),df();const r=Vt(),e=Math.max(0,...r.map(t=>t.actionValue));Ee.count=e>0?e:0,Ee.shouldScrollToCount=!0,Ft(),Wo(),mn()}function Mb(r){const e=Ee.damageQueue[r];e&&!e.applied&&(e.applied=!0,e.sourceAction&&(e.sourceAction.damageApplied=!0)),mn()}function Sb(){Ee.damageQueue.some(e=>!e.applied)?(Ee.phase="DAMAGE_RESOLUTION",qe("--- ダメージ解決フェーズ開始 ---")):(Ee.phase="COUNT_END",qe("--- カウント終了 ---"))}function Eb(){Ee.moveQueue.length>0&&(qe("--- 移動解決フェーズ ---"),hf(Ee.moveQueue),Ee.moveQueue=[],ni()),Sb(),mn()}function bb(r,e){let t=JSON.stringify(r);return t=t.replace(/"\$params\.(\w+)"/g,(n,i)=>e.hasOwnProperty(i)?JSON.stringify(e[i]):"null"),JSON.parse(t)}async function wb(r,e){const t=Cf(r.ref);if(!t){console.warn(`[Engine] 汎用効果 '${r.ref}' の定義が見つかりません。`);return}const n=r.params||{};for(const i of t.actions){const s=bb(i,n);switch(s.action_type){case"attack_roll":await Cb(s,e);break;case"move_character":Tb(s,e);break;case"apply_buff":Ab(s,e);break;case"escape_roll":tf(s,e);break;default:qe(`＞ [Engine] 未対応のアクションタイプ: ${s.action_type}`),console.warn(`[Engine] 未対応のアクションタイプです: ${s.action_type}`)}}}function Tb(r,e){const{performer:t,declaration:n}=e,i=n.sourceManeuver.targetArea;if(!i){qe("＞ [Engine] 移動先が指定されていません。");return}qe(`＞ 移動予約: ${t.name} が ${i} へ`),Ee.moveQueue.push({characterId:t.id,targetArea:i})}function Ab(r,e){const{performer:t}=e,n=r.buff?r.buff:r;switch(n.stat){case"maxActionValue":On(t.id,{baseActionValue:(t.baseActionValue||6)+n.value}),qe(`＞ ${t.name}の最大行動値が${n.value>0?"+":""}${n.value}されました。`);break;case"attackCheckBonus":t.activeBuffs.push({source:e.declaration.sourceManeuver.name,stat:n.stat,value:n.value,duration:n.duration}),qe(`＞ ${t.name}は【${e.declaration.sourceManeuver.name}】の効果で、ターン終了まで攻撃判定に+${n.value}の修正を得た！`);break;default:qe(`＞ [Engine] 未対応のバフタイプ: ${n.stat}`),console.warn(`[Engine] 未対応のバフタイプです: ${n.stat}`)}}async function Cb(r,e){const{target:t,declaration:n}=e;if(!t){qe("＞ 攻撃対象がいません。");return}const i=e.totalAttackBonus||0,s=`NA${i>=0?`+${i}`:i}`;return new Promise(o=>{sn({command:s,showToast:!0,callback:(a,l)=>{if(a&&!a.includes("失敗")){qe(`＞ ${t.name}に命中！`);let c=r.damage||0;Ee.damageQueue.push({id:`damage_${Date.now()}_${Math.random()}`,target:t,amount:c,location:l,sourceAction:n,applied:!1}),qe(`＞ 【${c}】点のダメージ！`),r.on_hit&&r.on_hit.length>0&&qe(`＞ 追加効果(${r.on_hit.join(",")})が発動！`)}else qe("＞ 攻撃は失敗しました。");o()}})})}async function ef(r,e=0){const{performer:t,sourceManeuver:n}=r;if(qe(`＞ 解決: ${t.name} の【${n.name}】`),n.isEscapeAttempt){await tf({},{performer:t});return}if(!n.effects||n.effects.length===0){n.name==="待機"?qe(`＞ ${t.name}は状況をうかがっている。`):qe("＞ 効果の定義がありません。");return}const i={performer:r.performer,target:r.target,declaration:r,totalAttackBonus:e};for(const s of n.effects)await wb(s,i)}function tf(r,e){const{performer:t}=e;qe(`＞ ${t.name}が逃走判定を行います...`),sn({command:"NC",showToast:!0,callback:n=>{n.includes("成功")?(qe(`＞ 逃走成功！ ${t.name}は戦場から離脱しました。`),On(t.id,{hasWithdrawn:!0})):qe(`＞ 逃走失敗！ ${t.name}は戦場に留まります。`),Ft(),ni(),mn()}})}function Rb(r,e){Ee.isStarted=!0,Ee.turn=r,Ee.count=Math.max(0,...e.map(t=>t.actionValue)),Ee.shouldScrollToCount=!0,Ft(),Wo(),mn()}function bd(){Ee={isStarted:!1,turn:1,count:0,activeActors:[],phase:"SETUP",actionQueue:[],rapidQueue:[],judgeQueue:[],damageQueue:[],moveQueue:[],currentAction:null,shouldScrollToCount:!1},Io()}const Pb="1.2.8",$o="nechronica-battle-session",nf="nechronica-autosave-enabled";let ws=!1,$l=!1;function Ib(){return ws=localStorage.getItem(nf)!=="false",console.log(`State Manager initialized. Auto-save is ${ws?"ON":"OFF"}.`),ws}function Lb(r){ws=r,localStorage.setItem(nf,r),console.log(`Auto-save has been set to ${r?"ON":"OFF"}.`),r&&_c()}function Cr(){$l||!ws||_c()}function _c(){try{const r=Bt(),e=Vt(),t={savedAt:new Date().toISOString(),turn:r.isStarted?r.turn:0,characters:e.map(n=>({sourceType:n.sheetId?"sheet":"template",id:n.sheetId||n.templateId,type:n.type,img:n.img,area:n.area,stackCount:n.stackCount,actionValue:n.actionValue,isDestroyed:n.isDestroyed||!1,hasWithdrawn:n.hasWithdrawn||!1,damagedPartNames:Object.values(n.partsStatus).flat().filter(i=>i.damaged).map(i=>i.name),usedManeuvers:Array.from(n.usedManeuvers),activeBuffs:n.activeBuffs,regrets:n.regrets}))};localStorage.setItem($o,JSON.stringify(t)),ws?console.log("Session auto-saved."):zt("現在の状態を保存しました",2e3)}catch(r){console.error("状態の保存に失敗しました:",r),alert("状態の保存に失敗しました。")}}async function Db(r){const e=localStorage.getItem($o);if(!e)return console.warn("loadState was called, but no saved data was found."),!1;$l=!0,zt("状態を復元しています...",5e3);try{const t=JSON.parse(e);mf(),bd();const i=(await Promise.all(t.characters.map(async s=>{let o;if(s.sourceType==="sheet"){const a=await Ub(s.id),l=mc(a);if(!l)throw new Error(`ID: ${s.id} の変換に失敗`);l.sheetId=s.id,o=l}else{const a=r[s.id];if(!a)throw new Error(`テンプレートID: ${s.id} が見つかりません`);o=JSON.parse(JSON.stringify(a)),o.templateId=s.id}return{baseData:o,savedState:s}}))).map(({baseData:s,savedState:o})=>{const a=pf(s,o.type);On(a.id,{img:o.img,area:o.area,actionValue:o.actionValue,stackCount:o.stackCount,isDestroyed:o.isDestroyed,hasWithdrawn:o.hasWithdrawn,usedManeuvers:new Set(o.usedManeuvers),activeBuffs:o.activeBuffs||[],regrets:o.regrets});const l=new Set(o.damagedPartNames);return Object.values(a.partsStatus).flat().forEach(c=>{l.has(c.name)&&(c.damaged=!0)}),Mi(a),a});return t.turn===0?(bd(),Ft(),ni(),Ar()):Rb(t.turn,i),zt("セッションを復元しました。",2e3),!0}catch(t){return console.error("状態の復元に失敗しました:",t),alert(`状態の復元に失敗しました:
${t.message}`),yc(),setTimeout(()=>window.location.reload(),1e3),!1}finally{$l=!1}}function Nb(){return localStorage.getItem($o)!==null}function yc(){localStorage.removeItem($o),zt("保存データを削除しました。",2e3)}function Ub(r){return new Promise((e,t)=>{const n=`jsonpCallback_${Date.now()}`;window[n]=s=>{document.head.removeChild(i),delete window[n],e(s)};const i=document.createElement("script");i.onerror=()=>{delete window[n],document.head.removeChild(i),t(new Error("シートの読込みに失敗しました。"))},i.src=`https://charasheet.vampire-blood.net/${r}.js?callback=${n}`,i.charset="UTF-8",document.head.appendChild(i)})}function Fb(){try{const r=Bt(),e=Vt(),t={savedAt:new Date().toISOString(),turn:r.isStarted?r.turn:0,characters:e.map(p=>({sourceType:p.sheetId?"sheet":"template",id:p.sheetId||p.templateId,type:p.type,img:p.img,area:p.area,stackCount:p.stackCount,actionValue:p.actionValue,isDestroyed:p.isDestroyed||!1,hasWithdrawn:p.hasWithdrawn||!1,damagedPartNames:Object.values(p.partsStatus).flat().filter(g=>g.damaged).map(g=>g.name),usedManeuvers:Array.from(p.usedManeuvers),activeBuffs:p.activeBuffs,regrets:p.regrets}))},n=JSON.stringify(t,null,2),i=new Blob([n],{type:"application/json"}),s=URL.createObjectURL(i),o=document.createElement("a");o.href=s;const a=new Date,l=a.getFullYear(),c=String(a.getMonth()+1).padStart(2,"0"),h=String(a.getDate()).padStart(2,"0"),u=String(a.getHours()).padStart(2,"0"),d=String(a.getMinutes()).padStart(2,"0"),m=`nechronica-session-${`${l}${c}${h}-${u}${d}`}.json`,v=prompt("ファイル名を入力してください:",m);v&&(o.download=v.endsWith(".json")?v:`${v}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),zt(`「${o.download}」を保存しました。`,2e3)),URL.revokeObjectURL(s)}catch(r){console.error("ファイルへの保存に失敗しました:",r),alert("ファイルへの保存に失敗しました。")}}const sf="1.6.24";let rf={},Et=[],Xo=1;function Mi(r){let e=0;[...r.skills||[],...Object.values(r.partsStatus||{}).flat().map(n=>n.name)].forEach(n=>{const i=rn(n);if(!i||!i.effects||i.effects.length===0)return;let s=!1;if(r.partsStatus){const o=Object.values(r.partsStatus).flat().find(a=>a.name===n);o&&(s=o.damaged)}for(const o of i.effects)o.ref==="APPLY_BUFF"&&o.params.stat==="maxActionValue"?(isNaN(s)||!s)&&(e+=o.params.value||0):o.ref==="MODIFY_MAX_ACTION_VALUE_ON_DAMAGE"&&s&&(e+=o.params.value||0)}),r.maxActionValue=(r.baseActionValue||6)+e}function Bb(r,e,t){const n=rf[r];if(!n)return console.error(`テンプレートIDが見つかりません: ${r}`),null;const i=JSON.parse(JSON.stringify(n));i.templateId=r,i.id=`char_${Xo++}`,i.type=e,i.area=t||n.initialArea||(e==="pc"?"煉獄":"奈落"),i.partsStatus={};let s=0;if(n.parts&&typeof n.parts=="object"&&Object.keys(n.parts).forEach(o=>{Array.isArray(n.parts[o])&&(i.partsStatus[o]=n.parts[o].map(a=>({id:`${i.id}_part_${s++}`,name:a,damaged:!1})))}),e==="pc"&&n.treasure){let o=!1;for(const a in i.partsStatus){const l=i.partsStatus[a].find(c=>c.name===n.treasure);if(l){l.id=`${i.id}_part_treasure`,o=!0;break}}o||(i.partsStatus.body||(i.partsStatus.body=[]),i.partsStatus.body.push({id:`${i.id}_part_treasure`,name:n.treasure,damaged:!1}))}return i.madnessPoints={},i.statusEffects=[],i.activeBuffs=[],i.isMentallyBroken=!1,i.isDestroyed=!1,i.hasWithdrawn=!1,i.regrets=[],Mi(i),i.actionValue=i.maxActionValue,i.skills=n.skills||[],i.stackCount=1,i.hasActedThisCount=!1,jo(i),i}function qo(){const r=Et.filter(n=>n.skills&&n.skills.includes("合流"));if(r.length<2)return;const e=new Map;r.forEach(n=>{const i=`${n.position}-${n.area}`;e.has(i)||e.set(i,[]),e.get(i).push(n)});let t=!1;e.forEach(n=>{if(n.length<2)return;const i=n[0];for(let s=1;s<n.length;s++){const o=n[s];i.stackCount+=o.stackCount;const a=Et.findIndex(l=>l.id===o.id);a!==-1&&Et.splice(a,1)}t=!0}),t&&console.log("キャラクターが合流しました。")}function jo(r){r.usedManeuvers=new Set,r.turnLimitedManeuvers=new Set,[...r.skills||[],...Object.values(r.partsStatus||{}).flat().map(t=>t.name)].forEach(t=>{const n=rn(t);if(!n)return;let i=!1;n.hasOwnProperty("usageLimit")?i=n.usageLimit:["ジャッジ","ダメージ","ラピッド"].includes(n.timing)&&(i=!0),i&&r.turnLimitedManeuvers.add(t)})}function of(r){r.regrets=[];const e=Et.filter(s=>s.type==="pc"&&s.id!==r.id),t=r.treasure||"たからもの";r.regrets.push({id:`treasure_${r.id}`,name:`${t}への依存`,points:3,category:"たからもの"});const n=ql(),i=Object.keys(n).filter(s=>s.startsWith("SI-"));e.forEach(s=>{if(i.length>0){const o=i[Math.floor(Math.random()*i.length)];r.regrets.push({id:`regret_${r.id}_to_${s.id}`,name:`${s.name}への${n[o].name}`,points:3,categoryKey:"SI"});const a=i[Math.floor(Math.random()*i.length)];s.regrets.push({id:`regret_${s.id}_to_${r.id}`,name:`${r.name}への${n[a].name}`,points:3,categoryKey:"SI"})}})}function af(r){rf=r,console.log("Character Manager initialized.")}function Vt(r=!1){return Et}function an(r){return Et.find(e=>e.id===r)}function lf(r,e,t){const n=Bb(r,e,t);return n?(e==="pc"&&of(n),Et.push(n),console.log(`${n.name} (${e}) を戦場に追加しました。`),qo(),Cr(),n):null}function cf(r){const e=an(r);if(e&&e.stackCount>1)return e.stackCount--,console.log(`${e.name}のスタックが1減少しました。`),!0;const t=Et.findIndex(n=>n.id===r);if(t!==-1){const n=Et[t].name;return Et.splice(t,1),console.log(`${n} を戦場から削除しました。`),Cr(),!0}return!1}function Xl(r,e){const t=Et.findIndex(c=>c.id===r);if(t===-1)return;const n=Et[t],i=Et.filter(c=>c.type===n.type),s=i.findIndex(c=>c.id===r);let o;if(e==="left"){if(s===0)return;o=s-1}else{if(s===i.length-1)return;o=s+1}Et.splice(t,1);const a=i[o].id,l=Et.findIndex(c=>c.id===a);e==="left"?Et.splice(l,0,n):Et.splice(l+1,0,n)}function On(r,e){const t=an(r);t?(Object.assign(t,e),(t.isDestroyed||t.hasWithdrawn)&&(t.actionValue=0,t.isDestroyed&&t.partsStatus&&Object.values(t.partsStatus).flat().forEach(n=>n.damaged=!0)),Mi(t),qo()):console.warn(`更新対象のキャラクターが見つかりません: ${r}`)}function xc(r,e,t=1){const n=an(r);if(!n){console.error("損傷対象のキャラクターが見つかりません。",{characterId:r});return}if(n.category==="レギオン")return n.stackCount-=t,console.log(`${n.name}のスタックが${t}減少しました。残り: ${n.stackCount}`),n.stackCount<=0?(n.isDestroyed=!0,n.actionValue=0,console.log(`${n.name}は完全に破壊されました。`),!0):!1;for(const i in n.partsStatus){const s=n.partsStatus[i].find(o=>o.id===e);if(s)return s.damaged?void 0:(s.damaged=!0,console.log(`${n.name}の[${i}]にある「${s.name}」が損傷しました。`),Mi(n),!1)}console.error("損傷対象のパーツIDが見つかりません。",{characterId:r,partId:e})}function uf(r,e){const t=an(r);if(!t)return;const n=t.regrets.find(o=>o.id===e);n&&n.points<4&&(n.points++,console.log(`${t.name}の未練「${n.name}」に狂気点が1追加されました。(現在: ${n.points})`)),t.regrets&&t.regrets.length>0&&t.regrets.every(o=>o.points>=4)&&(t.isMentallyBroken=!0,console.log(`★★★ ${t.name} は精神崩壊しました。 ★★★`))}function df(){Et.forEach(r=>{if(r.isDestroyed||r.hasWithdrawn){r.actionValue=0;return}r.actionValue+=r.maxActionValue,r.hasActedThisCount=!1,r.usedManeuvers.clear()}),qo(),console.log("新しいターンが開始され、全キャラクターの行動値が更新されました。")}function hf(r){r.forEach(e=>{const t=an(e.characterId);t&&(t.area=e.targetArea)}),console.log("予約された移動を一括で適用しました。")}function Ob(r,e){const t=JSON.parse(JSON.stringify(r));t.id=`char_${Xo++}`,t.type=e,t.area=t.initialArea||(e==="pc"?"煉獄":"奈落"),t.partsStatus={};let n=0;if(t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(i=>{Array.isArray(t.parts[i])&&(t.partsStatus[i]=t.parts[i].map(s=>({id:`${t.id}_part_${n++}`,name:s,damaged:!1})))}),e==="pc"&&t.treasure)for(const i in t.partsStatus){const s=t.partsStatus[i].find(o=>o.name===t.treasure);if(s){s.id=`${t.id}_part_treasure`;break}}return t.isMentallyBroken=!1,t.isDestroyed=!1,t.activeBuffs=[],t.hasWithdrawn=!1,t.stackCount=1,t.hasActedThisCount=!1,e==="pc"?of(t):t.regrets=[],Mi(t),t.actionValue=t.maxActionValue,jo(t),Et.push(t),console.log(`${t.name} (imported ${e}) を戦場に追加しました。`),qo(),Cr(),t}function ff(r,e){const t=an(r);if(!t)return console.error(`再読込み対象のキャラクターが見つかりません: ${r}`),null;const n={id:t.id,sheetId:t.sheetId,img:t.img,type:t.type,actionValue:t.actionValue,regrets:t.regrets,madnessPoints:t.madnessPoints,isMentallyBroken:t.isMentallyBroken,isDestroyed:!1,hasWithdrawn:!1,hasActedThisCount:t.hasActedThisCount};Object.keys(t).forEach(s=>delete t[s]),Object.assign(t,e),t.area=t.initialArea||(t.type==="pc"?"煉獄":"奈落"),Object.assign(t,n),t.partsStatus={};let i=0;if(t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(s=>{Array.isArray(t.parts[s])&&(t.partsStatus[s]=t.parts[s].map(o=>({id:`${t.id}_part_${i++}`,name:o,damaged:!1})))}),t.type==="pc"&&t.treasure)for(const s in t.partsStatus){const o=t.partsStatus[s].find(a=>a.name===t.treasure);if(o){o.id=`${t.id}_part_treasure`;break}}return Mi(t),t.actionValue=Math.min(t.actionValue,t.maxActionValue),jo(t),console.log(`キャラクター「${t.name}」が保管所のデータで更新されました。`),t}function pf(r,e){const t=JSON.parse(JSON.stringify(r));t.id=`char_${Xo++}`,t.type=e,t.area=t.initialArea||(e==="pc"?"煉獄":"奈落"),t.partsStatus={};let n=0;if(t.parts&&typeof t.parts=="object"&&Object.keys(t.parts).forEach(i=>{Array.isArray(t.parts[i])&&(t.partsStatus[i]=t.parts[i].map(s=>({id:`${t.id}_part_${n++}`,name:s,damaged:!1})))}),e==="pc"&&t.treasure)for(const i in t.partsStatus){const s=t.partsStatus[i].find(o=>o.name===t.treasure);if(s){s.id=`${t.id}_part_treasure`;break}}return t.regrets=[],t.madnessPoints={},t.statusEffects=[],t.activeBuffs=[],t.isMentallyBroken=!1,t.isDestroyed=!1,t.hasWithdrawn=!1,t.stackCount=1,t.hasActedThisCount=!1,Mi(t),t.actionValue=t.maxActionValue,jo(t),Et.push(t),t}function mf(){Et=[],Xo=1,console.log("All characters cleared from the board.")}const kb="1.3.14";document.addEventListener("DOMContentLoaded",async()=>{try{await bf(),af(Do()),ib(),XE(),IE(),TE({hintMasterData:Ld(),regretMasterData:ql(),takaramonoMasterData:Tf(),memoryFragmentsData:Af(),addLog:qe}),zb(),await Vb(),Nb()&&await Hb(),Gb()}catch(r){console.error("アプリケーションの初期化に失敗しました。",r),document.body.innerHTML=`<div style="color: red; padding: 20px;">初期化エラー: ${r.stack}</div>`}});function zb(){sb(),Ft(),Io(),qE(),Ar()}function Vb(){return new Promise(r=>{const e=`
        <div class="modal-header modal-header-sub">📢主な更新内容:7.10.6.2</div>
        <div class="modal-body welcome-modal-body">
            <p>◆ <strong>状態の自動保存・復元機能</strong>を実装しました。（自動保存ON/OFF対応）</p>
            <p>◆ <strong>データの誤記を訂正</strong>しました。
            <p>◆ <strong>【保管所から読込み】【保管所で見る】【保管所から再読込み】</strong>：キャラクターシート保管所との連携を強化しました。
            <p>◆ 3Dダイス<strong>複数ダイス、D100に対応</strong>しました。
            <p>◆ 試しに<strong>ダイスが転がる</strong>ようにしてみましたが、動作が怪しいです。
            <p>◆ ジャッジウィンドウで<strong>適用されている支援、妨害を確認</strong>できるようになりました。
            <p>◆ <strong>支援</strong>がダイスロールに適用できるようになりました。
            <p>◆ ユーザーが<strong>画像を追加</strong>できるようになりました。
            <p>◆ <strong>【新着/IDリスト】</strong>：キャラクターシート保管所の<strong>キャラクターリスト表示</strong>機能を追加しました。
            <p>◆ <strong>【✏️画像の変更】</strong>：「🪪人形設計図」において<strong>画像の変更</strong>機能を追加しました。
            <p>◆ <strong>マニューバリスト</strong>を更新し、<strong>表示機能を拡張</strong>しました。
            <p>◆ その他、軽微なUI調整と不具合の修正を行いました。
        </div>
        `,t=document.getElementById("welcomeModal"),n=document.getElementById("closeWelcomeModalBtn");if(!t||!n)return console.warn("Welcome modal elements not found, skipping."),r();t.classList.add("is-visible");const i=()=>{t.classList.remove("is-visible"),pn({title:"更新情報",bodyHtml:e,footerHtml:'<button id="okUpdateBtn" class="welcome-modal-close-btn">OK</button>',onRender:(s,o)=>{s.querySelector("#okUpdateBtn").onclick=()=>{o(),r()}}})};n.onclick=i,t.onclick=s=>{s.target===t&&i()}})}function Hb(){return new Promise(r=>{pn({title:"セッションの復元",bodyHtml:"<p>保存された前回のセッションデータが見つかりました。<br>復元しますか？</p>",footerHtml:`
                <button id="restoreBtn" class="welcome-modal-close-btn">はい、復元する</button>
                <button id="discardBtn" class="welcome-modal-close-btn">いいえ、新規に開始</button>
            `,onRender:(e,t)=>{e.querySelector("#restoreBtn").onclick=async()=>{t(),await Db(Do()),r()},e.querySelector("#discardBtn").onclick=()=>{confirm("自動保存されたデータが削除されます。本当に新規セッションを開始しますか？")&&(yc(),t(),r())}}})})}function Gb(){pb({app:kb,"battle-logic":mb,"character-manager":sf,"data-handler":Ef,"dice-roller":wE,"dice-3d":pE,"interaction-manager":$E,"menu-builder":NE,"ui-helpers":RE,"ui-manager":nb,"settings-manager":PE,"state-manager":Pb,"character-converter":CE})}
