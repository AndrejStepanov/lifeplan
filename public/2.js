webpackJsonp([2],{

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(201);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("26137df6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-294a2398\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-layouts.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-294a2398\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./c-layouts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "\n.custom-resizer {\n  width: 100%;\n  height: 100%;\n}\n.custom-resizer > .pane {\n  text-align: center;\n  margin: 10px;\n  overflow: auto;\n}\n.custom-resizer.layout-v > .multipane-resizer {\n  margin: 0;\n  left: 0;\n  position: relative;\n  border-style: solid;\n  border-width: 0 thin 0 0;\n  -o-border-image: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n     border-image: repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n}\n.custom-resizer.layout-h > .multipane-resizer {\n  margin: 0;\n  left: 0;\n  position: relative;\n  border-style: solid;\n  border-width: thin 0 0;\n  -o-border-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n     border-image: repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0, rgba(255, 255, 255, 0.5) 2px, transparent 0, transparent 4px) 1 repeat;\n}\n", ""]);

// exports


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multipane__ = __webpack_require__(203);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'c-layouts',
	data: function data() {
		return {
			slotNames: ['fst', 'scnd']
		};
	},
	props: {
		panelsConfig: { type: Array, default: function _default() {
				return [{ name: 'first', width: '50%', height: '100%', type: 'horizontal', data: [] }];
			} }
	},
	computed: {},
	components: {
		Multipane: __WEBPACK_IMPORTED_MODULE_0_vue_multipane__["a" /* Multipane */], MultipaneResizer: __WEBPACK_IMPORTED_MODULE_0_vue_multipane__["b" /* MultipaneResizer */]
	},
	methods: {},
	created: function created() {
		var vm = this;
	}
});

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __$__vue_module__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MultipaneResizer; });
var LAYOUT_HORIZONTAL="horizontal",LAYOUT_VERTICAL="vertical",__vue_module__={name:"multipane",props:{layout:{type:String,default:LAYOUT_VERTICAL}},data:function(){return{isResizing:!1}},computed:{classnames:function(){return["multipane","layout-"+this.layout.slice(0,1),this.isResizing?"is-resizing":""]},cursor:function(){return this.isResizing?this.layout==LAYOUT_VERTICAL?"col-resize":"row-resize":""},userSelect:function(){return this.isResizing?"none":""}},methods:{onMouseDown:function(e){var t=e.target,i=e.pageX,n=e.pageY;if(t.className&&t.className.match("multipane-resizer")){var s=this,o=s.$el,a=s.layout,u=t.previousElementSibling,r=u.offsetWidth,l=u.offsetHeight,d=!!(u.style.width+"").match("%"),c=window.addEventListener,p=window.removeEventListener,m=function(e,t){if(void 0===t&&(t=0),a==LAYOUT_VERTICAL){var i=o.clientWidth,n=e+t;return u.style.width=d?n/i*100+"%":n+"px"}if(a==LAYOUT_HORIZONTAL){var s=o.clientHeight,r=e+t;return u.style.height=d?r/s*100+"%":r+"px"}};s.isResizing=!0;var _=m();s.$emit("paneResizeStart",u,t,_);var h=function(e){var o=e.pageX,d=e.pageY;_=a==LAYOUT_VERTICAL?m(r,o-i):m(l,d-n),s.$emit("paneResize",u,t,_)},f=function(){_=m(a==LAYOUT_VERTICAL?u.clientWidth:u.clientHeight),s.isResizing=!1,p("mousemove",h),p("mouseup",f),s.$emit("paneResizeStop",u,t,_)};c("mousemove",h),c("mouseup",f)}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),i=".multipane { display: flex; } .multipane.layout-h { flex-direction: column; } .multipane.layout-v { flex-direction: row; } .multipane > div { position: relative; z-index: 1; } .multipane-resizer { display: block; position: relative; z-index: 2; } .layout-h > .multipane-resizer { width: 100%; height: 10px; margin-top: -10px; top: 5px; cursor: row-resize; } .layout-v > .multipane-resizer { width: 10px; height: 100%; margin-left: -10px; left: 5px; cursor: col-resize; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=i:t.appendChild(document.createTextNode(i)),e.appendChild(t)}}();var __$__vue_module__=Object.assign(__vue_module__,{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classnames,style:{cursor:e.cursor,userSelect:e.userSelect},on:{mousedown:e.onMouseDown}},[e._t("default")],2)},staticRenderFns:[]});__$__vue_module__.prototype=__vue_module__.prototype,function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var MultipaneResizer={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"multipane-resizer"},[e._t("default")],2)},staticRenderFns:[]};"undefined"!=typeof window&&window.Vue&&(window.Vue.component("multipane",__$__vue_module__),window.Vue.component("multipane-resizer",MultipaneResizer));


/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "multipane",
    { staticClass: "custom-resizer", attrs: { layout: "vertical" } },
    [
      _c(
        "div",
        { staticClass: "pane" },
        [
          _c("h6", { staticClass: "title is-6" }, [_vm._v("Pane 1")]),
          _vm._v("\n\t\twjehfvblw fblawejva \n\t\t"),
          _vm._t(_vm.slotNames[0])
        ],
        2
      ),
      _vm._v(" "),
      _c("multipane-resizer"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pane" },
        [
          _c("h6", { staticClass: "title is-6" }, [_vm._v("Pane 2")]),
          _vm._v("\n\t\twjehfvblw fblawejv \n\t\t"),
          _vm._t(_vm.slotNames[1])
        ],
        2
      ),
      _vm._v(" "),
      _c("multipane-resizer"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pane", style: { flexGrow: 1 } },
        [
          _c(
            "multipane",
            { staticClass: "custom-resizer", attrs: { layout: "horizontal" } },
            [
              _c("div", { staticClass: "pane" }, [
                _c("h6", { staticClass: "title is-6" }, [_vm._v("Pane 1")]),
                _vm._v("\n\t\t\t\twjehfvblw fblawejv \n\t\t\t\t\n\t\t\t")
              ]),
              _vm._v(" "),
              _c("multipane-resizer"),
              _vm._v(" "),
              _c("div", { staticClass: "pane" }, [
                _c("h6", { staticClass: "title is-6" }, [_vm._v("Pane 2")]),
                _vm._v("\n\t\t\t\twjehfvblw fblawejv \n\t\t\t")
              ]),
              _vm._v(" "),
              _c("multipane-resizer"),
              _vm._v(" "),
              _c("div", { staticClass: "pane", style: { flexGrow: 1 } }, [
                _c("h6", { staticClass: "title is-6" }, [_vm._v("Pane 3")]),
                _vm._v("\n\t\t\t\twjehfvblw fblawejv \n\t\t\t")
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-294a2398", module.exports)
  }
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(200)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(202)
/* template */
var __vue_template__ = __webpack_require__(204)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/c-layouts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-294a2398", Component.options)
  } else {
    hotAPI.reload("data-v-294a2398", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});