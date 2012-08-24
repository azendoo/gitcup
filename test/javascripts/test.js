(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e){for(var n in e)r(e,n)&&(t[n]=e[n])};e.require=a,e.require.define=f,e.require.brunch=!0})(),window.require.define({"test/models/header_test":function(e,t,n){var r;r=t("models/header"),describe("Header",function(){return beforeEach(function(){return this.model=new r}),afterEach(function(){return this.model.dispose()}),it("should contain 3 items",function(){return expect(this.model.get("items")).to.have.length(3)})})}}),window.require.define({"test/test-helpers":function(e,t,n){n.exports={expect:t("chai").expect,sinon:t("sinon")}}}),window.require.define({"test/views/header_view_test":function(e,t,n){var r,i,s,o,u={}.hasOwnProperty,a=function(e,t){function r(){this.constructor=e}for(var n in t)u.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};o=t("mediator"),r=t("models/header"),i=t("views/header_view"),s=function(e){function t(){return t.__super__.constructor.apply(this,arguments)}return a(t,e),t.prototype.renderTimes=0,t.prototype.render=function(){return t.__super__.render.apply(this,arguments),this.renderTimes+=1},t}(i),describe("HeaderView",function(){return beforeEach(function(){return this.model=new r,this.view=new s({model:this.model})}),afterEach(function(){return this.view.dispose(),this.model.dispose()}),it("should display 3 links",function(){return expect(this.view.$el.find("a")).to.have.length(3)}),it("should re-render on login event",function(){return expect(this.view.renderTimes).to.equal(1),o.publish("loginStatus"),expect(this.view.renderTimes).to.equal(2)})})}}),window.require.define({"test/views/home_page_view_test":function(e,t,n){var r;r=t("views/home_page_view"),describe("HomePageView",function(){return beforeEach(function(){return this.view=new r}),afterEach(function(){return this.view.dispose()}),it("should auto-render",function(){return expect(this.view.$el.find("img")).to.have.length(1)})})}}),window.require("test/models/header_test"),window.require("test/views/header_view_test"),window.require("test/views/home_page_view_test")