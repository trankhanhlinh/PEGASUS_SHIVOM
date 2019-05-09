(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+Ltg":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,i,a,s){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,a,s],l=0;(c=new Error(t.replace(/%s/g,function(){return u[l++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},"+TSP":function(e,t,n){e.exports=window.fetch||(window.fetch=n("CJ1a").default||n("CJ1a"))},"/m4v":function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var o=n("mXGw"),i=n.n(o),a=n("W0B4"),s=n.n(a),c=i.a.createContext(null),u=function(e){function t(t){var n;n=e.call(this,t)||this;var r=t.store;return n.state={storeState:r.getState(),store:r},n}r(t,e);var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.subscribe()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(e){this.props.store!==e.store&&(this.unsubscribe&&this.unsubscribe(),this.subscribe())},n.subscribe=function(){var e=this,t=this.props.store;this.unsubscribe=t.subscribe(function(){var n=t.getState();e._isMounted&&e.setState(function(e){return e.storeState===n?null:{storeState:n}})});var n=t.getState();n!==this.state.storeState&&this.setState({storeState:n})},n.render=function(){var e=this.props.context||c;return i.a.createElement(e.Provider,{value:this.state},this.props.children)},t}(o.Component);u.propTypes={store:s.a.shape({subscribe:s.a.func.isRequired,dispatch:s.a.func.isRequired,getState:s.a.func.isRequired}),context:s.a.object,children:s.a.any};var l=u;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var d=n("kB9Y"),h=n.n(d),m=n("+Ltg"),y=n.n(m),v=n("xVO4");function b(e,t){void 0===t&&(t={});var n=t,a=n.getDisplayName,s=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,u=n.methodName,l=void 0===u?"connectAdvanced":u,d=n.renderCountProp,m=void 0===d?void 0:d,b=n.shouldHandleStateChanges,g=void 0===b||b,w=n.storeKey,E=void 0===w?"store":w,P=n.withRef,O=void 0!==P&&P,x=n.forwardRef,C=void 0!==x&&x,S=n.context,k=void 0===S?c:S,j=f(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);y()(void 0===m,"renderCountProp is removed. render counting is built into the latest React dev tools profiling extension"),y()(!O,"withRef is removed. To access the wrapped instance, use a ref on the connected component");var T="To use a custom Redux store for specific components,  create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like:  <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect";y()("store"===E,"storeKey has been removed and does not do anything. "+T);var N=k;return function(t){var n=t.displayName||t.name||"Component",a=s(n),c=p({},j,{getDisplayName:s,methodName:l,renderCountProp:m,shouldHandleStateChanges:g,storeKey:E,displayName:a,wrappedComponentName:n,WrappedComponent:t}),u=j.pure,f=o.Component;u&&(f=o.PureComponent);var d=function(n){function o(t){var r,o,a,s,c,l,f,d,h,m,v;return r=n.call(this,t)||this,y()(C?!t.wrapperProps[E]:!t[E],"Passing redux store in props has been removed and does not do anything. "+T),r.selectDerivedProps=function(t,n,r,i){if(u&&o===n&&a===t)return s;r===c&&l===i||(c=r,l=i,f=e(r.dispatch,i)),o=n,a=t;var p=f(t,n);return s=p},r.selectChildElement=function(e,t,n){return t===d&&n===h&&v===e||(d=t,h=n,v=e,m=i.a.createElement(e,p({},t,{ref:n}))),m},r.indirectRenderWrappedComponent=r.indirectRenderWrappedComponent.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}r(o,n);var s=o.prototype;return s.indirectRenderWrappedComponent=function(e){return this.renderWrappedComponent(e)},s.renderWrappedComponent=function(e){y()(e,'Could not find "store" in the context of "'+a+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+a+" in connect options.");var n,r=e.storeState,o=e.store,i=this.props;C&&(i=this.props.wrapperProps,n=this.props.forwardedRef);var s=this.selectDerivedProps(r,i,o,c);return this.selectChildElement(t,s,n)},s.render=function(){var e=this.props.context&&this.props.context.Consumer&&Object(v.isContextConsumer)(i.a.createElement(this.props.context.Consumer,null))?this.props.context:N;return i.a.createElement(e.Consumer,null,this.indirectRenderWrappedComponent)},o}(f);if(d.WrappedComponent=t,d.displayName=a,C){var b=i.a.forwardRef(function(e,t){return i.a.createElement(d,{wrapperProps:e,forwardedRef:t})});return b.displayName=a,b.WrappedComponent=t,h()(b,t)}return h()(d,t)}}var g=Object.prototype.hasOwnProperty;function w(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function E(e,t){if(w(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!g.call(t,n[o])||!w(e[n[o]],t[n[o]]))return!1;return!0}var P=n("cnbf");function O(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function x(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function C(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=x(e);var o=r(t,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=x(o),o=r(t,n)),o},r}}var S=[function(e){return"function"==typeof e?C(e):void 0},function(e){return e?void 0:O(function(e){return{dispatch:e}})},function(e){return e&&"object"==typeof e?O(function(t){return Object(P.b)(e,t)}):void 0}];var k=[function(e){return"function"==typeof e?C(e):void 0},function(e){return e?void 0:O(function(){return{}})}];function j(e,t,n){return p({},n,e,t)}var T=[function(e){return"function"==typeof e?function(e){return function(t,n){n.displayName;var r,o=n.pure,i=n.areMergedPropsEqual,a=!1;return function(t,n,s){var c=e(t,n,s);return a?o&&i(c,r)||(r=c):(a=!0,r=c),r}}}(e):void 0},function(e){return e?void 0:function(){return j}}];function N(e,t,n,r){return function(o,i){return n(e(o,i),t(r,i),i)}}function R(e,t,n,r,o){var i,a,s,c,u,l=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,d=!1;function h(o,d){var h,m,y=!p(d,a),v=!l(o,i);return i=o,a=d,y&&v?(s=e(i,a),t.dependsOnOwnProps&&(c=t(r,a)),u=n(s,c,a)):y?(e.dependsOnOwnProps&&(s=e(i,a)),t.dependsOnOwnProps&&(c=t(r,a)),u=n(s,c,a)):v?(h=e(i,a),m=!f(h,s),s=h,m&&(u=n(s,c,a)),u):u}return function(o,l){return d?h(o,l):(s=e(i=o,a=l),c=t(r,a),u=n(s,c,a),d=!0,u)}}function M(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,o=t.initMergeProps,i=f(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),a=n(e,i),s=r(e,i),c=o(e,i);return(i.pure?R:N)(a,s,c,e,i)}function I(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function L(e,t){return e===t}var _,W,q,D,$,A,F,U,B,G,H,K,X=(q=(W=void 0===_?{}:_).connectHOC,D=void 0===q?b:q,$=W.mapStateToPropsFactories,A=void 0===$?k:$,F=W.mapDispatchToPropsFactories,U=void 0===F?S:F,B=W.mergePropsFactories,G=void 0===B?T:B,H=W.selectorFactory,K=void 0===H?M:H,function(e,t,n,r){void 0===r&&(r={});var o=r,i=o.pure,a=void 0===i||i,s=o.areStatesEqual,c=void 0===s?L:s,u=o.areOwnPropsEqual,l=void 0===u?E:u,d=o.areStatePropsEqual,h=void 0===d?E:d,m=o.areMergedPropsEqual,y=void 0===m?E:m,v=f(o,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),b=I(e,A,"mapStateToProps"),g=I(t,U,"mapDispatchToProps"),w=I(n,G,"mergeProps");return D(K,p({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:b,initMapDispatchToProps:g,initMergeProps:w,pure:a,areStatesEqual:c,areOwnPropsEqual:l,areStatePropsEqual:h,areMergedPropsEqual:y},v))});n.d(t,"a",function(){return l}),n.d(t,"b",function(){return X})},"1Xk4":function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},"9K2m":function(e,t,n){"use strict";
/** @license React v16.8.3
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,h=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116;function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case f:case a:case c:case s:case h:return e;default:switch(e=e&&e.$$typeof){case l:case d:case u:return e;default:return t}}case y:case m:case i:return t}}}function b(e){return v(e)===f}t.typeOf=v,t.AsyncMode=p,t.ConcurrentMode=f,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=y,t.Memo=m,t.Portal=i,t.Profiler=c,t.StrictMode=s,t.Suspense=h,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===f||e===c||e===s||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===u||e.$$typeof===l||e.$$typeof===d)},t.isAsyncMode=function(e){return b(e)||v(e)===p},t.isConcurrentMode=b,t.isContextConsumer=function(e){return v(e)===l},t.isContextProvider=function(e){return v(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===a},t.isLazy=function(e){return v(e)===y},t.isMemo=function(e){return v(e)===m},t.isPortal=function(e){return v(e)===i},t.isProfiler=function(e){return v(e)===c},t.isStrictMode=function(e){return v(e)===s},t.isSuspense=function(e){return v(e)===h}},CJ1a:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,i=[],a=[],s={},c=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:c,headers:{keys:function(){return i},entries:function(){return a},get:function(e){return s[e.toLowerCase()]},has:function(e){return e.toLowerCase()in s}}}};for(var u in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){i.push(t=t.toLowerCase()),a.push([t,n]),s[t]=s[t]?s[t]+","+n:n}),n(c())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(u,t.headers[u]);o.send(t.body||null)})}},EZLL:function(e,t,n){"use strict";n.r(t);var r=n("UrUy"),o=n.n(r),i=n("R3/3"),a=n("LkAs"),s=n("Moms"),c=n("bMj6"),u=n("hZod"),l=n("YKN3"),p=n("tEuJ"),f=n("mXGw"),d=(n("+TSP"),n("/m4v")),h=n("bc/i"),m=n("t4GJ"),y=n.n(m),v=(n("5dyF"),n("dAGg")),b=n.n(v),g=(n("Cg0e"),n("re7v")),w=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(c.default)(this,Object(u.default)(t).call(this,e))).state={showLoading:!0},n.login=n.login.bind(Object(l.default)(n)),n.onSignUpClick=n.onSignUpClick.bind(Object(l.default)(n)),n}return Object(p.default)(t,e),Object(s.default)(t,[{key:"componentDidMount",value:function(){var e=Object(i.default)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.authenticated;case 2:!0===e.sent?b.a.push("/"):this.setState({showLoading:!1});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(i.default)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.signInWithGoogle();case 2:e.sent&&b.a.push("/");case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"onOpenSignInClick",value:function(){document.getElementById("container").classList.remove("right-panel-active")}},{key:"onOpenSignUpClick",value:function(){document.getElementById("container").classList.add("right-panel-active")}},{key:"onSignInClick",value:function(){}},{key:"onSignUpClick",value:function(e){e.preventDefault();this.refs.name.value,this.refs.email.value,this.refs.password.value}},{key:"loginWithFacebook",value:function(){var e=Object(i.default)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signInWithFacebook();case 3:e.sent,b.a.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Đăng nhập không thành công");case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"loginWithGoogle",value:function(){var e=Object(i.default)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signInWithGoogle();case 3:e.sent,b.a.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Đăng nhập không thành công");case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return f.createElement("div",null,f.createElement(y.a,null,f.createElement("title",null,"Đăng nhập"),f.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css"})),this.state.showLoading?f.createElement(h.e,null):f.createElement("div",{className:"login-main"},f.createElement("div",{class:"container",id:"container"},f.createElement("div",{class:"form-container sign-up-container"},f.createElement("form",{action:"#"},f.createElement("h1",null,"Create Account"),f.createElement("div",{class:"social-container"},f.createElement("a",{href:"#",class:"social",onClick:this.loginWithFacebook},f.createElement("i",{class:"fab fa-facebook-f"})),f.createElement("a",{href:"#",class:"social",onClick:this.loginWithGoogle},f.createElement("i",{class:"fab fa-google-plus-g"})),f.createElement("a",{href:"#",class:"social"},f.createElement("i",{class:"fab fa-instagram"}))),f.createElement("span",null,"or use your email for registration"),f.createElement("input",{type:"text",placeholder:"Name",name:"name",ref:"name"}),f.createElement("input",{type:"email",placeholder:"Email",name:"email",ref:"email"}),f.createElement("input",{type:"password",placeholder:"Password",name:"password",ref:"password"}),f.createElement("button",{onClick:this.onSignUpClick},"Sign Up"))),f.createElement("div",{class:"form-container sign-in-container"},f.createElement("form",{action:"#"},f.createElement("h1",null,"Sign in"),f.createElement("div",{class:"social-container"},f.createElement("a",{href:"#",class:"social",onClick:this.loginWithFacebook},f.createElement("i",{class:"fab fa-facebook-f"})),f.createElement("a",{href:"#",class:"social",onClick:this.loginWithGoogle},f.createElement("i",{class:"fab fa-google-plus-g"})),f.createElement("a",{href:"#",class:"social"},f.createElement("i",{class:"fab fa-instagram"}))),f.createElement("span",null,"or use your account"),f.createElement("input",{type:"email",placeholder:"Email",ref:"emailLogin"}),f.createElement("input",{type:"password",placeholder:"Password",ref:"passwordLogin"}),f.createElement("a",{href:"#"},"Forgot your password?"),f.createElement("button",{onClick:this.onSignInClick},"Sign In"))),f.createElement("div",{class:"overlay-container"},f.createElement("div",{class:"overlay"},f.createElement("div",{class:"overlay-panel overlay-left"},f.createElement("h1",null,"Welcome Back!"),f.createElement("p",null,"To keep connected with us please login with your personal info"),f.createElement("button",{class:"ghost",id:"signIn",onClick:this.onOpenSignInClick},"Sign In")),f.createElement("div",{class:"overlay-panel overlay-right"},f.createElement("h1",null,"Hello, Friend!"),f.createElement("p",null,"Enter your personal details and start journey with us"),f.createElement("button",{class:"ghost",id:"signUp",onClick:this.onOpenSignUpClick},"Sign Up")))))))}}],[{key:"getInitialProps",value:function(){var e=Object(i.default)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,t.query,e.abrupt("return",{showLoading:!0});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}]),t}(f.Component);t.default=Object(d.b)(function(e){return e})(w)},NYsx:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/login",function(){var e=n("EZLL");return{page:e.default||e}}])},Rblx:function(e,t,n){"use strict";(function(e,r){var o,i=n("XNbM");o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("dm4u"),n("1Xk4")(e))},XNbM:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},cnbf:function(e,t,n){"use strict";n.d(t,"d",function(){return s}),n.d(t,"c",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"a",function(){return d});var r=n("Rblx"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function s(e,t,n){var o;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(s)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,u=t,l=[],p=l,f=!1;function d(){p===l&&(p=l.slice())}function h(){if(f)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(f)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),p.push(e),function(){if(t){if(f)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=p.indexOf(e);p.splice(n,1)}}}function y(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(f)throw new Error("Reducers may not dispatch actions.");try{f=!0,u=c(u,e)}finally{f=!1}for(var t=l=p,n=0;n<t.length;n++){(0,t[n])()}return e}return y({type:i.INIT}),(o={dispatch:y,subscribe:m,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,y({type:i.REPLACE})}})[r.a]=function(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var a,s=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(u){a=u}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<s.length;i++){var u=s[i],l=n[u],p=e[u],f=l(p,t);if(void 0===f){var d=c(u,t);throw new Error(d)}o[u]=f,r=r||f!==p}return r?o:e}}function l(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"==typeof e)return l(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],a=e[i];"function"==typeof a&&(r[i]=l(a,t))}return r}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}({},n,{dispatch:r=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}.apply(void 0,i)(n.dispatch)})}}}},kB9Y:function(e,t,n){"use strict";var r=n("xVO4"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function c(e){return r.isMemo(e)?a:s[e.$$typeof]||o}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0};var u=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var a=l(n);p&&(a=a.concat(p(n)));for(var s=c(t),m=c(n),y=0;y<a.length;++y){var v=a[y];if(!(i[v]||r&&r[v]||m&&m[v]||s&&s[v])){var b=f(n,v);try{u(t,v,b)}catch(g){}}}return t}return t}},xVO4:function(e,t,n){"use strict";e.exports=n("9K2m")}},[["NYsx",1,0,2]]]);