(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e){for(var n in e)r(e,n)&&(t[n]=e[n])};e.require=a,e.require.define=f,e.require.brunch=!0})(),window.require.define({"controllers/base/controller":function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("chaplin"),n.exports=i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return o(t,e),t}(r.Controller)}}),window.require.define({"controllers/header_controller":function(e,t,n){var r,i,s,o,u,a={}.hasOwnProperty,f=function(e,t){function r(){this.constructor=e}for(var n in t)a.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("controllers/base/controller"),u=t("mediator"),i=t("models/header"),o=t("views/header_view"),n.exports=s=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return f(t,e),t.prototype.initialize=function(){return t.__super__.initialize.apply(this,arguments),this.model=new i,this.view=new o({model:this.model})},t}(r)}}),window.require.define({"controllers/home_controller":function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("controllers/base/controller"),s=t("views/home_page_view"),n.exports=i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return u(t,e),t.prototype.historyURL="home",t.prototype.index=function(){return this.view=new s},t}(r)}}),window.require.define({"controllers/session_controller":function(e,t,n){var r,i,s,o,u,a=function(e,t){return function(){return e.apply(t,arguments)}},f={}.hasOwnProperty,l=function(e,t){function r(){this.constructor=e}for(var n in t)f.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};u=t("mediator"),r=t("controllers/base/controller"),o=t("models/user"),i=t("views/login_view"),n.exports=s=function(e){function t(){return this.logout=a(this.logout,this),this.serviceProviderSession=a(this.serviceProviderSession,this),this.triggerLogin=a(this.triggerLogin,this),t.__super__.constructor.apply(this,arguments)}return l(t,e),t.serviceProviders={},t.prototype.loginStatusDetermined=!1,t.prototype.loginView=null,t.prototype.serviceProviderName=null,t.prototype.initialize=function(){return this.subscribeEvent("serviceProviderSession",this.serviceProviderSession),this.subscribeEvent("logout",this.logout),this.subscribeEvent("userData",this.userData),this.subscribeEvent("!showLogin",this.showLoginView),this.subscribeEvent("!login",this.triggerLogin),this.subscribeEvent("!logout",this.triggerLogout),this.getSession()},t.prototype.loadServiceProviders=function(){var e,n,r,i;r=t.serviceProviders,i=[];for(e in r)n=r[e],i.push(n.load());return i},t.prototype.createUser=function(e){return u.user=new o(e)},t.prototype.getSession=function(){var e,n,r,i;this.loadServiceProviders(),r=t.serviceProviders,i=[];for(e in r)n=r[e],i.push(n.done(n.getLoginStatus));return i},t.prototype.showLoginView=function(){if(this.loginView)return;return this.loadServiceProviders(),this.loginView=new i({serviceProviders:t.serviceProviders})},t.prototype.triggerLogin=function(e){var n;n=t.serviceProviders[e];if(!n.isLoaded()){u.publish("serviceProviderMissing",e);return}return u.publish("loginAttempt",e),n.triggerLogin()},t.prototype.serviceProviderSession=function(e){return this.serviceProviderName=e.provider.name,this.disposeLoginView(),e.id=e.userId,delete e.userId,this.createUser(e),this.publishLogin()},t.prototype.publishLogin=function(){return this.loginStatusDetermined=!0,u.publish("login",u.user),u.publish("loginStatus",!0)},t.prototype.triggerLogout=function(){return u.publish("logout")},t.prototype.logout=function(){return this.loginStatusDetermined=!0,this.disposeUser(),this.serviceProviderName=null,this.showLoginView(),u.publish("loginStatus",!1)},t.prototype.userData=function(e){return u.user.set(e)},t.prototype.disposeLoginView=function(){if(!this.loginView)return;return this.loginView.dispose(),this.loginView=null},t.prototype.disposeUser=function(){if(!u.user)return;return u.user.dispose(),u.user=null},t}(r)}}),window.require.define({initialize:function(e,t,n){$(function(){return $(".btn-tweet").click(function(){var e,t,n,r,i;return i=$("input.username").val(),n=$("select.rule_number").val(),t=encodeURI(""+i+" won a GitCup for breaking rule "+n),e="rule"+n,r="https://twitter.com/intent/tweet?hashtags="+e+"&text="+t+"&url=http%3A%2F%2Fgitcup.com&via=git_cup",window.open(r)})})}}),window.require.define({"lib/services/service_provider":function(e,t,n){var r,i,s;s=t("lib/utils"),r=t("chaplin"),n.exports=i=function(){function e(){_(this).extend($.Deferred()),s.deferMethods({deferred:this,methods:["triggerLogin","getLoginStatus"],onDeferral:this.load})}return _(e.prototype).extend(r.Subscriber),e.prototype.loading=!1,e.prototype.disposed=!1,e.prototype.dispose=function(){if(this.disposed)return;return this.unsubscribeAllEvents(),this.disposed=!0,typeof Object.freeze=="function"?Object.freeze(this):void 0},e}()}}),window.require.define({"lib/support":function(e,t,n){var r,i,s;r=t("chaplin"),s=t("lib/utils"),i=s.beget(r.support),n.exports=i}}),window.require.define({"lib/utils":function(e,t,n){var r,i,s,o={}.hasOwnProperty;r=t("chaplin"),i=t("mediator"),s=r.utils.beget(r.utils),_(s).extend({deferMethods:function(e){var t,n,r,i,u,a,f,l,c,h,p;t=e.deferred,i=e.methods,r=e.host||t,l=e.target||r,f=e.onDeferral,u={};if(typeof i=="string")u[i]=r[i];else if(i.length&&i[0])for(c=0,h=i.length;c<h;c++){a=i[c],n=r[a];if(typeof n!="function")throw new TypeError("utils.deferMethods: method "+a+" notfound on host "+r);u[a]=n}else u=i;p=[];for(a in u){if(!o.call(u,a))continue;n=u[a];if(typeof n!="function")continue;p.push(l[a]=s.createDeferredFunction(t,n,l,f))}return p},createDeferredFunction:function(e,t,n,r){return n==null&&(n=e),function(){var i;i=arguments;if(e.state()==="resolved")return t.apply(n,i);e.done(function(){return t.apply(n,i)});if(typeof r=="function")return r.apply(n)}}}),n.exports=s}}),window.require.define({"lib/view_helper":function(e,t,n){var r,i;r=t("mediator"),i=t("chaplin/lib/utils"),Handlebars.registerHelper("if_logged_in",function(e){return r.user?e.fn(this):e.inverse(this)}),Handlebars.registerHelper("with",function(e,t){return!e||Handlebars.Utils.isEmpty(e)?t.inverse(this):t.fn(e)}),Handlebars.registerHelper("without",function(e,t){var n;return n=t.inverse,t.inverse=t.fn,t.fn=n,Handlebars.helpers["with"].call(this,e,t)}),Handlebars.registerHelper("with_user",function(e){var t;return t=r.user||{},Handlebars.helpers["with"].call(this,t,e)})}}),window.require.define({"models/base/collection":function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("chaplin"),n.exports=i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return o(t,e),t}(r.Collection)}}),window.require.define({"models/base/model":function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("chaplin"),n.exports=i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return o(t,e),t}(r.Model)}}),window.require.define({"models/header":function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("models/base/model"),n.exports=r=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return o(t,e),t.prototype.defaults={items:[{href:"http://brunch.readthedocs.org/",title:"Documentation"},{href:"https://github.com/brunch/brunch/issues",title:"Github Issues"},{href:"https://github.com/paulmillr/ostio",title:"Ost.io Example App"}]},t}(i)}}),window.require.define({"models/user":function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};r=t("models/base/model"),n.exports=i=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return o(t,e),t}(r)}})