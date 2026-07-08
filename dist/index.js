"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var i=a(function(y,t){
var v=require('@stdlib/math-base-special-sind/dist'),d=require('@stdlib/math-base-special-cosd/dist');function o(e,r,s,n){return r[n]=v(e),r[n+s]=d(e),r}t.exports=o
});var c=a(function(O,u){
var g=i();function p(e){return g(e,[0,0],1,0)}u.exports=p
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),l=i();x(q,"assign",l);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
