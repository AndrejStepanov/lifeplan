webpackJsonp([1],{

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(219)
/* template */
var __vue_template__ = __webpack_require__(225)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/c-dialog.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-99dcc3ee", Component.options)
  } else {
    hotAPI.reload("data-v-99dcc3ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_x_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_x_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_x_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c_drag_resize_c_drag_resize__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__c_drag_resize_c_drag_resize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__c_drag_resize_c_drag_resize__);
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
	name: 'c-dialog',
	data: function data() {
		return {
			heightSlot: '',
			dragReInitEvent: ''
		};
	},
	props: {
		dialogId: { type: Number, required: true },
		widthOrig: { type: Number, default: 500 },
		heightOrig: { type: Number, default: 1000 },
		buttons: { type: Array, default: function _default() {
				return [{ id: 1, title: '$vuetify.texts.simple.actions.close', icon: 'close', allig: 'right', click: 'dialogClose' }];
			} },
		dragActive: { type: Boolean, default: true },
		dragDraggable: { type: Boolean, default: true },
		dragActiveBehavior: { type: Boolean, default: true },
		dragResizable: { type: Boolean, default: true },
		dragLimitation: { type: Boolean, default: false },
		dragSticks: { type: Array, default: function _default() {
				return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml'];
			} }, //тягальщики
		dragNoLineStyle: { type: Boolean, default: true }
	},
	computed: {
		dialogConfigGet: function dialogConfigGet() {
			var vm = this;
			return vm.dialogConfig(vm.dialogId);
		},
		buttonsLeft: function buttonsLeft() {
			return this.buttons.filter(function (row) {
				return row.allig == 'left';
			});
		},
		buttonsRight: function buttonsRight() {
			return this.buttons.filter(function (row) {
				return row.allig != 'left';
			});
		},
		width: function width() {
			return this.widthOrig > document.documentElement.clientWidth - 100 ? document.documentElement.clientWidth - 100 : this.widthOrig;
		},
		height: function height() {
			return this.heightOrig > document.documentElement.clientHeight - 100 ? document.documentElement.clientHeight - 100 : this.heightOrig;
		},
		x: function x() {
			return (document.documentElement.clientWidth - this.width) / 2;
		},
		y: function y() {
			return (document.documentElement.clientHeight - this.height) / 2;
		}
	},
	components: {
		cDragResize: __WEBPACK_IMPORTED_MODULE_1__c_drag_resize_c_drag_resize___default.a
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_x_store___default.a],
	methods: {
		changeSize: function changeSize(newRect) {
			var vm = this;
			vm.heightSlot = newRect.height - 130 + '';
		},
		buttonClick: function buttonClick(button) {
			var vm = this;
			if (Array.isArray(button.click)) button.click.forEach(function (row) {
				return vm.buttonClickFunc(row);
			});else vm.buttonClickFunc(button.click);
		},
		buttonClickFunc: function buttonClickFunc(event) {
			if (event == 'dialogClose') this.dialogClose();else this.$emit(event);
		},
		dialogClose: function dialogClose() {
			this.dialogShowChange({ id: this.dialogId, isShow: false });
		}
	},
	mounted: function mounted() {
		this.changeSize({ height: this.height, width: this.width });
	}
});

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(223)
/* template */
var __vue_template__ = __webpack_require__(224)
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
Component.options.__file = "resources/assets/js/components/c-drag-resize/c-drag-resize.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f70f39a0", Component.options)
  } else {
    hotAPI.reload("data-v-f70f39a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("68ecb6b4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f70f39a0\",\"scoped\":false,\"hasInlineConfig\":true}!./_c-drag-resize.css", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f70f39a0\",\"scoped\":false,\"hasInlineConfig\":true}!./_c-drag-resize.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n:root{    --stick-size: 8px;\n}\n.cdr {    position: absolute;    -webkit-box-sizing: border-box;    box-sizing: border-box;\n}\n.cdr.active:before{    content: '';    width: 100%;    height: 100%;    position: absolute;    top: 0;    -webkit-box-sizing: border-box;    box-sizing: border-box;    outline: 1px dashed #d6d6d6;\n}\n.cdr.noLine.active:before{ outline: none;\n}\n.cdr>.cdr-stick {    -webkit-box-sizing: border-box;    box-sizing: border-box;    position: absolute;    width: var(--stick-size);    height: var(--stick-size);    font-size: 1px;    background: #ffffff;    border: 1px solid #6c6c6c;    -webkit-box-shadow: 0 0 2px #bbb;    box-shadow: 0 0 2px #bbb;\n}\n.cdr.noLine>.cdr-stick {   background: none;    border:none;    -webkit-box-shadow: none;    box-shadow: none;\n}\n.cdr>.inactive .cdr-stick {    display: none;\n}\n.cdr>.cdr-stick-tl {    top: calc(var(--stick-size)/-2);    left: calc(var(--stick-size)/-2);    cursor: nwse-resize;\n}\n.cdr>.cdr-stick-tm {    top: calc(var(--stick-size)/-2);    left: 50%;    margin-left: calc(var(--stick-size)/-2);    cursor: ns-resize;\n}\n.cdr>.cdr-stick-tr {    top: calc(var(--stick-size)/-2);    right: calc(var(--stick-size)/-2);    cursor: nesw-resize;\n}\n.cdr>.cdr-stick-ml {    top: 50%;    margin-top: calc(var(--stick-size)/-2);    left: calc(var(--stick-size)/-2);    cursor: ew-resize;\n}\n.cdr>.cdr-stick-mr {    top: 50%;    margin-top: calc(var(--stick-size)/-2);    right: calc(var(--stick-size)/-2);    cursor: ew-resize;\n}\n.cdr>.cdr-stick-bl {    left: calc(var(--stick-size)/-2);    cursor: nesw-resize;\n}\n.cdr>.cdr-stick-bm {    left: 50%;    margin-left: calc(var(--stick-size)/-2);    cursor: ns-resize;\n}\n.cdr>.cdr-stick-br {    right: calc(var(--stick-size)/-2);    cursor: nwse-resize;\n}\n.cdr>.cdr-stick.not-resizable{    display: none;\n}", ""]);

// exports


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'c-drag-resize',
	props: {
		isActive: { type: Boolean, default: false },
		noLineStyle: { type: Boolean, default: false },
		preventActiveBehavior: { type: Boolean, default: false },
		isDraggable: { type: Boolean, default: true },
		isResizable: { type: Boolean, default: true },
		aspectRatio: { type: Boolean, default: false },
		parentLimitation: { type: Boolean, default: false },
		parentW: { type: Number, default: 0, validator: function validator(val) {
				return val >= 0;
			} },
		parentH: { type: Number, default: 0, validator: function validator(val) {
				return val >= 0;
			} },
		w: { type: Number, default: 100, validator: function validator(val) {
				return val > 0;
			} },
		h: { type: Number, default: 100, validator: function validator(val) {
				return val > 0;
			} },
		minw: { type: Number, default: 50, validator: function validator(val) {
				return val > 0;
			} },
		minh: { type: Number, default: 50, validator: function validator(val) {
				return val > 0;
			} },
		x: { type: Number, default: 0, validator: function validator(val) {
				return typeof val === 'number';
			} },
		y: { type: Number, default: 0, validator: function validator(val) {
				return typeof val === 'number';
			} },
		z: { type: [String, Number], default: 'auto', validator: function validator(val) {
				var valid = typeof val === 'string' ? val === 'auto' : val >= 0;return valid;
			} },
		dragHandle: { type: String, default: null },
		dragCancel: { type: String, default: null },
		reInitEvent: { type: String, default: null },
		sticks: { type: Array, default: function _default() {
				return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml'];
			} },
		axis: { type: String, default: 'both', validator: function validator(val) {
				return ['x', 'y', 'both', 'none'].indexOf(val) !== -1;
			} }
	},

	data: function data() {
		return {
			active: this.isActive,
			rawWidth: this.w,
			rawHeight: this.h,
			rawLeft: this.x,
			rawTop: this.y,
			rawRight: null,
			rawBottom: null,
			zIndex: this.z,
			aspectFactor: this.w / this.h,
			parentWidth: null,
			parentHeight: null,
			left: this.x,
			top: this.y,
			right: null,
			bottom: null,
			minWidth: this.minw,
			minHeight: this.minh
		};
	},

	created: function created() {
		var vm = this;
		vm.stickDrag = vm.bodyDrag = false;
		vm.stickAxis = null;
		vm.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 };
		vm.limits = {
			minLeft: null,
			maxLeft: null,
			minRight: null,
			maxRight: null,
			minTop: null,
			maxTop: null,
			minBottom: null,
			maxBottom: null
		};
		vm.currentStick = [];
		//vm.$root.$on(vm.reInitEvent, (obj)=>{vm.initVals();}); надо как то придумать, что бы окно после этого вызова центроалось.		
	},

	mounted: function mounted() {
		this.initVals();

		document.documentElement.addEventListener('mousemove', this.move);
		document.documentElement.addEventListener('mouseup', this.up);
		document.documentElement.addEventListener('mouseleave', this.up);

		document.documentElement.addEventListener('mousedown', this.deselect);

		document.documentElement.addEventListener('touchmove', this.move, true);
		document.documentElement.addEventListener('touchend touchcancel', this.up, true);
		document.documentElement.addEventListener('touchstart', this.up, true);

		if (this.dragHandle) {
			var dragHandles = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragHandle));
			for (var i in dragHandles) {
				dragHandles[i].setAttribute('data-drag-handle', this._uid);
			}
		}

		if (this.dragCancel) {
			var cancelHandles = Array.prototype.slice.call(this.$el.querySelectorAll(this.dragCancel));
			for (var _i in cancelHandles) {
				cancelHandles[_i].setAttribute('data-drag-cancel', this._uid);
			}
		}
	},

	beforeDestroy: function beforeDestroy() {
		document.documentElement.removeEventListener('mousemove', this.move);
		document.documentElement.removeEventListener('mouseup', this.up);
		document.documentElement.removeEventListener('mouseleave', this.up);

		document.documentElement.removeEventListener('mousedown', this.deselect);

		document.documentElement.removeEventListener('touchmove', this.move, true);
		document.documentElement.removeEventListener('touchend touchcancel', this.up, true);
		document.documentElement.removeEventListener('touchstart', this.up, true);
	},

	methods: {
		initVals: function initVals() {
			this.parentElement = this.$el.parentNode;
			this.parentWidth = this.parentW ? this.parentW : this.parentElement.clientWidth;
			this.parentHeight = this.parentH ? this.parentH : this.parentElement.clientHeight;

			this.rawRight = this.parentWidth - this.rawWidth - this.rawLeft;
			this.rawBottom = this.parentHeight - this.rawHeight - this.rawTop;
		},
		deselect: function deselect(ev) {
			if (this.preventActiveBehavior) return;
			this.active = false;
		},
		move: function move(ev) {
			if (!this.stickDrag && !this.bodyDrag) return;
			ev.stopPropagation();
			if (this.stickDrag) this.stickMove(ev);
			if (this.bodyDrag) this.bodyMove(ev);
		},
		up: function up(ev) {
			if (this.stickDrag) this.stickUp(ev);
			if (this.bodyDrag) this.bodyUp(ev);
		},

		bodyDown: function bodyDown(ev) {
			var target = ev.target || ev.srcElement;
			if (!this.preventActiveBehavior) this.active = true;
			this.$emit('clicked');
			if (!this.isDraggable || !this.active) return;
			if (this.dragHandle && target.getAttribute('data-drag-handle') !== this._uid.toString()) return;
			if (this.dragCancel && target.getAttribute('data-drag-cancel') === this._uid.toString()) return;
			this.bodyDrag = true;

			this.stickStartPos.mouseX = ev.x;
			this.stickStartPos.mouseY = ev.y;

			this.stickStartPos.left = this.left;
			this.stickStartPos.right = this.right;
			this.stickStartPos.top = this.top;
			this.stickStartPos.bottom = this.bottom;

			if (this.parentLimitation) this.limits = this.calcDragLimitation();
		},
		calcDragLimitation: function calcDragLimitation() {
			var parentWidth = this.parentWidth;
			var parentHeight = this.parentHeight;

			return {
				minLeft: 0,
				maxLeft: parentWidth - this.width,
				minRight: 0,
				maxRight: parentWidth - this.width,
				minTop: 0,
				maxTop: parentHeight - this.height,
				minBottom: 0,
				maxBottom: parentHeight - this.height
			};
		},
		bodyMove: function bodyMove(ev) {
			var stickStartPos = this.stickStartPos;
			var delta = {
				x: this.axis !== 'y' && this.axis !== 'none' ? stickStartPos.mouseX - ev.x : 0,
				y: this.axis !== 'x' && this.axis !== 'none' ? stickStartPos.mouseY - ev.y : 0
			};
			this.rawTop = stickStartPos.top - delta.y;
			this.rawBottom = stickStartPos.bottom + delta.y;
			this.rawLeft = stickStartPos.left - delta.x;
			this.rawRight = stickStartPos.right + delta.x;
			this.$emit('dragging', this.rect);
		},
		bodyUp: function bodyUp() {
			this.bodyDrag = false;
			this.$emit('dragging', this.rect);
			this.$emit('dragstop', this.rect);
			this.stickStartPos = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 };
			this.limits = {
				minLeft: null,
				maxLeft: null,
				minRight: null,
				maxRight: null,
				minTop: null,
				maxTop: null,
				minBottom: null,
				maxBottom: null
			};
		},

		stickDown: function stickDown(stick, ev) {
			if (!this.isResizable || !this.active) return;
			this.stickDrag = true;
			this.stickStartPos.mouseX = ev.x;
			this.stickStartPos.mouseY = ev.y;
			this.stickStartPos.left = this.left;
			this.stickStartPos.right = this.right;
			this.stickStartPos.top = this.top;
			this.stickStartPos.bottom = this.bottom;
			this.currentStick = stick.split('');
			this.stickAxis = null;

			switch (this.currentStick[0]) {
				case 'b':
					this.stickAxis = 'y';break;
				case 't':
					this.stickAxis = 'y';break;
			}
			switch (this.currentStick[1]) {
				case 'r':
					this.stickAxis = this.stickAxis === 'y' ? 'xy' : 'x';break;
				case 'l':
					this.stickAxis = this.stickAxis === 'y' ? 'xy' : 'x';break;
			}
			this.limits = this.calcResizeLimitation();
		},
		calcResizeLimitation: function calcResizeLimitation() {
			var minw = this.minWidth;
			var minh = this.minHeight;
			var aspectFactor = this.aspectFactor;
			var width = this.width;
			var height = this.height;
			var bottom = this.bottom;
			var top = this.top;
			var left = this.left;
			var right = this.right;
			var stickAxis = this.stickAxis;
			var parentLim = this.parentLimitation ? 0 : null;
			if (this.aspectRatio) {
				if (minw / minh > aspectFactor) minh = minw / aspectFactor;else minw = aspectFactor * minh;
			}
			var limits = {
				minLeft: parentLim,
				maxLeft: left + (width - minw),
				minRight: parentLim,
				maxRight: right + (width - minw),
				minTop: parentLim,
				maxTop: top + (height - minh),
				minBottom: parentLim,
				maxBottom: bottom + (height - minh)
			};

			if (this.aspectRatio) {
				var aspectLimits = {
					minLeft: left - Math.min(top, bottom) * aspectFactor * 2,
					maxLeft: left + (height - minh) / 2 * aspectFactor * 2,

					minRight: right - Math.min(top, bottom) * aspectFactor * 2,
					maxRight: right + (height - minh) / 2 * aspectFactor * 2,

					minTop: top - Math.min(left, right) / aspectFactor * 2,
					maxTop: top + (width - minw) / 2 / aspectFactor * 2,

					minBottom: bottom - Math.min(left, right) / aspectFactor * 2,
					maxBottom: bottom + (width - minw) / 2 / aspectFactor * 2
				};

				if (stickAxis === 'x') limits = {
					minLeft: Math.max(limits.minLeft, aspectLimits.minLeft),
					maxLeft: Math.min(limits.maxLeft, aspectLimits.maxLeft),
					minRight: Math.max(limits.minRight, aspectLimits.minRight),
					maxRight: Math.min(limits.maxRight, aspectLimits.maxRight)
				};else if (stickAxis === 'y') limits = {
					minTop: Math.max(limits.minTop, aspectLimits.minTop),
					maxTop: Math.min(limits.maxTop, aspectLimits.maxTop),
					minBottom: Math.max(limits.minBottom, aspectLimits.minBottom),
					maxBottom: Math.min(limits.maxBottom, aspectLimits.maxBottom)
				};
			}
			return limits;
		},
		stickMove: function stickMove(ev) {
			var stickStartPos = this.stickStartPos;
			var delta = {
				x: stickStartPos.mouseX - ev.x,
				y: stickStartPos.mouseY - ev.y
			};
			switch (this.currentStick[0]) {
				case 'b':
					this.rawBottom = stickStartPos.bottom + delta.y;break;
				case 't':
					this.rawTop = stickStartPos.top - delta.y;break;
			}
			switch (this.currentStick[1]) {
				case 'r':
					this.rawRight = stickStartPos.right + delta.x;break;
				case 'l':
					this.rawLeft = stickStartPos.left - delta.x;break;
			}
			this.$emit('resizing', this.rect);
		},
		stickUp: function stickUp() {
			this.stickDrag = false;
			this.stickStartPos = {
				mouseX: 0,
				mouseY: 0,
				x: 0,
				y: 0,
				w: 0,
				h: 0
			};
			this.limits = {
				minLeft: null,
				maxLeft: null,
				minRight: null,
				maxRight: null,
				minTop: null,
				maxTop: null,
				minBottom: null,
				maxBottom: null
			};
			this.rawTop = this.top;
			this.rawBottom = this.bottom;
			this.rawLeft = this.left;
			this.rawRight = this.right;

			this.stickAxis = null;

			this.$emit('resizing', this.rect);
			this.$emit('resizestop', this.rect);
		},
		aspectRatioCorrection: function aspectRatioCorrection() {
			if (!this.aspectRatio) return;
			var bottom = this.bottom;
			var top = this.top;
			var left = this.left;
			var right = this.right;
			var width = this.width;
			var height = this.height;
			var aspectFactor = this.aspectFactor;
			var currentStick = this.currentStick;
			if (width / height > aspectFactor) {
				var newWidth = aspectFactor * height;
				if (currentStick[1] === 'l') this.left = left + width - newWidth;else this.right = right + width - newWidth;
			} else {
				var newHeight = width / aspectFactor;
				if (currentStick[0] === 't') this.top = top + height - newHeight;else this.bottom = bottom + height - newHeight;
			}
		}
	},

	computed: {
		style: function style() {
			return {
				top: this.top + 'px',
				left: this.left + 'px',
				width: this.width + 'px',
				height: this.height + 'px',
				zIndex: this.zIndex
			};
		},
		width: function width() {
			return this.parentWidth - this.left - this.right;
		},
		height: function height() {
			return this.parentHeight - this.top - this.bottom;
		},
		rect: function rect() {
			return {
				left: Math.round(this.left),
				top: Math.round(this.top),
				width: Math.round(this.width),
				height: Math.round(this.height)
			};
		}
	},

	watch: {
		rawLeft: function rawLeft(newLeft) {
			var limits = this.limits;
			var stickAxis = this.stickAxis;
			var aspectFactor = this.aspectFactor;
			var aspectRatio = this.aspectRatio;
			var left = this.left;
			var bottom = this.bottom;
			var top = this.top;

			if (limits.minLeft !== null && newLeft < limits.minLeft) newLeft = limits.minLeft;else if (limits.maxLeft !== null && limits.maxLeft < newLeft) newLeft = limits.maxLeft;

			if (aspectRatio && stickAxis === 'x') {
				var delta = left - newLeft;
				this.rawTop = top - delta / aspectFactor / 2;
				this.rawBottom = bottom - delta / aspectFactor / 2;
			}
			this.left = newLeft;
		},
		rawRight: function rawRight(newRight) {
			var limits = this.limits;
			var stickAxis = this.stickAxis;
			var aspectFactor = this.aspectFactor;
			var aspectRatio = this.aspectRatio;
			var right = this.right;
			var bottom = this.bottom;
			var top = this.top;

			if (limits.minRight !== null && newRight < limits.minRight) newRight = limits.minRight;else if (limits.maxRight !== null && limits.maxRight < newRight) newRight = limits.maxRight;

			if (aspectRatio && stickAxis === 'x') {
				var delta = right - newRight;
				this.rawTop = top - delta / aspectFactor / 2;
				this.rawBottom = bottom - delta / aspectFactor / 2;
			}
			this.right = newRight;
		},
		rawTop: function rawTop(newTop) {
			var limits = this.limits;
			var stickAxis = this.stickAxis;
			var aspectFactor = this.aspectFactor;
			var aspectRatio = this.aspectRatio;
			var right = this.right;
			var left = this.left;
			var top = this.top;

			if (limits.minTop !== null && newTop < limits.minTop) newTop = limits.minTop;else if (limits.maxTop !== null && limits.maxTop < newTop) newTop = limits.maxTop;

			if (aspectRatio && stickAxis === 'y') {
				var delta = top - newTop;
				this.rawLeft = left - delta * aspectFactor / 2;
				this.rawRight = right - delta * aspectFactor / 2;
			}
			this.top = newTop;
		},
		rawBottom: function rawBottom(newBottom) {
			var limits = this.limits;
			var stickAxis = this.stickAxis;
			var aspectFactor = this.aspectFactor;
			var aspectRatio = this.aspectRatio;
			var right = this.right;
			var left = this.left;
			var bottom = this.bottom;

			if (limits.minBottom !== null && newBottom < limits.minBottom) newBottom = limits.minBottom;else if (limits.maxBottom !== null && limits.maxBottom < newBottom) newBottom = limits.maxBottom;

			if (aspectRatio && stickAxis === 'y') {
				var delta = bottom - newBottom;
				this.rawLeft = left - delta * aspectFactor / 2;
				this.rawRight = right - delta * aspectFactor / 2;
			}
			this.bottom = newBottom;
		},
		width: function width() {
			this.aspectRatioCorrection();
		},
		height: function height() {
			this.aspectRatioCorrection();
		},
		active: function active(isActive) {
			if (isActive) this.$emit('activated');else this.$emit('deactivated');
		},
		isActive: function isActive(val) {
			this.active = val;
		},
		z: function z(val) {
			if (val >= 0 || val === 'auto') this.zIndex = val;
		},
		aspectRatio: function aspectRatio(val) {
			if (val) this.aspectFactor = this.width / this.height;
		},
		minw: function minw(val) {
			if (val > 0 && val <= this.width) this.minWidth = val;
		},
		minh: function minh(val) {
			if (val > 0 && val <= this.height) this.minHeight = val;
		},
		x: function x() {
			if (this.stickDrag || this.bodyDrag) return;
			if (this.parentLimitation) this.limits = this.calcDragLimitation();
			var delta = this.x - this.left;
			this.rawLeft = this.x;
			this.rawRight = this.right - delta;
		},
		y: function y() {
			if (this.stickDrag || this.bodyDrag) return;
			if (this.parentLimitation) this.limits = this.calcDragLimitation();
			var delta = this.y - this.top;
			this.rawTop = this.y;
			this.rawBottom = this.bottom - delta;
		},
		w: function w() {
			if (this.stickDrag || this.bodyDrag) return;
			this.currentStick = ['m', 'r'];
			this.stickAxis = 'x';
			if (this.parentLimitation) this.limits = this.calcResizeLimitation();
			var delta = this.width - this.w;
			this.rawRight = this.right + delta;
		},
		h: function h() {
			if (this.stickDrag || this.bodyDrag) return;
			this.currentStick = ['b', 'm'];
			this.stickAxis = 'y';
			if (this.parentLimitation) this.limits = this.calcResizeLimitation();
			var delta = this.height - this.h;
			this.rawBottom = this.bottom + delta;
		},
		parentW: function parentW(val) {
			this.right = val - this.width - this.left;
			this.parentWidth = val;
		},
		parentH: function parentH(val) {
			this.bottom = val - this.height - this.top;
			this.parentHeight = val;
		}
	}
});

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "cdr",
      class: [
        _vm.active ? "active" : "inactive",
        _vm.noLineStyle ? "noLine" : ""
      ],
      style: _vm.style
    },
    [
      _c(
        "div",
        {
          on: {
            mousedown: function($event) {
              _vm.bodyDown($event)
            },
            touchstart: function($event) {
              _vm.bodyDown($event)
            }
          }
        },
        [_vm._t("header")],
        2
      ),
      _vm._v(" "),
      _vm._t("default"),
      _vm._v(" "),
      _vm._l(_vm.sticks, function(stick) {
        return _c("div", {
          staticClass: "cdr-stick",
          class: ["cdr-stick-" + stick, _vm.isResizable ? "" : "not-resizable"],
          on: {
            mousedown: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              _vm.stickDown(stick, $event)
            },
            touchstart: function($event) {
              $event.stopPropagation()
              $event.preventDefault()
              _vm.stickDown(stick, $event)
            }
          }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f70f39a0", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: {
        value: "true",
        persistent: _vm.dialogConfigGet.persistent,
        "no-click-animation": ""
      }
    },
    [
      _c(
        "c-drag-resize",
        {
          attrs: {
            isActive: _vm.dragActive,
            isDraggable: _vm.dragDraggable,
            isResizable: _vm.dragResizable,
            preventActiveBehavior: _vm.dragActiveBehavior,
            parentLimitation: _vm.dragLimitation,
            sticks: _vm.dragSticks,
            noLineStyle: _vm.dragNoLineStyle,
            w: _vm.width,
            h: _vm.height,
            x: _vm.x,
            y: _vm.y,
            reInitEvent: _vm.dragReInitEvent
          },
          on: {
            resizing: function($event) {
              _vm.changeSize($event)
            }
          }
        },
        [
          _c(
            "v-toolbar",
            {
              attrs: { slot: "header", color: "primary", dark: "" },
              slot: "header"
            },
            [
              _c("v-toolbar-side-icon"),
              _vm._v(" "),
              _c("v-toolbar-title", [
                _vm._v(_vm._s(_vm.$vuetify.t(_vm.dialogConfigGet.title)))
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "" } },
                [_c("v-icon", [_vm._v("more_vert")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { icon: "" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.dialogClose($event)
                    }
                  }
                },
                [_c("v-icon", [_vm._v("clear")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card",
            {
              staticStyle: { "overflow-y": "auto" },
              attrs: { height: _vm.heightSlot }
            },
            [_vm._t("default")],
            2
          ),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              attrs: {
                row: "",
                "justify-center": "",
                color: "primary",
                dark: ""
              }
            },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dense: "", color: "primary" } },
                    [
                      _vm._l(_vm.buttonsLeft, function(row) {
                        return _c(
                          "v-btn",
                          {
                            key: row.id,
                            attrs: {
                              small: "",
                              color: "accent",
                              disabled: row.disabled
                            },
                            nativeOn: {
                              click: function($event) {
                                _vm.buttonClick(row)
                              }
                            }
                          },
                          [
                            row.icon != ""
                              ? _c("v-icon", [_vm._v(_vm._s(row.icon))])
                              : _vm._e(),
                            _vm._v(" " + _vm._s(_vm.$vuetify.t(row.title)))
                          ],
                          1
                        )
                      }),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _vm._l(_vm.buttonsRight, function(row) {
                        return _c(
                          "v-btn",
                          {
                            key: row.id,
                            attrs: {
                              small: "",
                              color: "accent",
                              disabled: row.disabled
                            },
                            nativeOn: {
                              click: function($event) {
                                _vm.buttonClick(row)
                              }
                            }
                          },
                          [
                            row.icon != ""
                              ? _c("v-icon", [_vm._v(_vm._s(row.icon))])
                              : _vm._e(),
                            _vm._v(" " + _vm._s(_vm.$vuetify.t(row.title)))
                          ],
                          1
                        )
                      })
                    ],
                    2
                  )
                ],
                1
              )
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
    require("vue-hot-reload-api")      .rerender("data-v-99dcc3ee", module.exports)
  }
}

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("179b722e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cc426360\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./m-error-desc.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-cc426360\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./m-error-desc.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.overXAutoLi>li {overflow-x: auto;\n}\n.traceLine{clear: right;    display: block; font-size: 11px;\n}\n", ""]);

// exports


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_x_store__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_x_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_x_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_c_dialog__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_c_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_c_dialog__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
	name: 'm-error-desc',
	data: function data() {
		return {
			inputsValid: true,
			panel: [true]
		};
	},
	props: {
		dialogId: { type: Number, required: true },
		dialogButtons: { type: Array, default: function _default() {
				return [{ id: 1, title: '$vuetify.texts.simple.actions.close', icon: 'close', allig: 'right', click: 'dialogClose' }];
			} }
	},
	computed: {
		buttons: function buttons() {
			var vm = this;
			var tmp = [],
			    buttons = vm.dialogButtons;
			buttons.forEach(function (row) {
				tmp.push(_extends({}, row, { disabled: row.needCheck == true && !vm.inputsValid ? true : false }));
			});
			return tmp;
		},
		dialogConfigGet: function dialogConfigGet() {
			var vm = this;
			return vm.dialogConfig(vm.dialogId);
		},
		dialogParamsGet: function dialogParamsGet() {
			var vm = this;
			return vm.dialogParams(vm.dialogId);
		}
	},
	components: {
		CDialog: __WEBPACK_IMPORTED_MODULE_1__components_c_dialog___default.a
	},
	mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_x_store___default.a],
	methods: {},
	created: function created() {
		var vm = this;
	}
});

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "c-dialog",
    {
      attrs: {
        dialogId: _vm.dialogId,
        widthOrig: _vm.dialogConfigGet.width,
        heightOrig: _vm.dialogConfigGet.height,
        buttons: _vm.buttons
      }
    },
    [
      _c(
        "v-expansion-panel",
        {
          staticClass: "overXAutoLi",
          attrs: { expand: "" },
          model: {
            value: _vm.panel,
            callback: function($$v) {
              _vm.panel = $$v
            },
            expression: "panel"
          }
        },
        [
          _c(
            "v-expansion-panel-content",
            [
              _c("template", { slot: "header" }, [
                _vm._v(
                  _vm._s(_vm.dialogParamsGet.msg.title) +
                    " : " +
                    _vm._s(_vm.dialogParamsGet.msg.text) +
                    " "
                ),
                _c("br"),
                _vm._v(
                  " " +
                    _vm._s(_vm.dialogParamsGet.msg.file) +
                    " (" +
                    _vm._s(_vm.dialogParamsGet.msg.line) +
                    ")"
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card",
                [
                  _c(
                    "v-card-text",
                    _vm._l(JSON.parse(_vm.dialogParamsGet.msg.trace), function(
                      obj
                    ) {
                      return _c("span", { staticClass: "traceLine" }, [
                        _vm._v(
                          "\n\t\t\t\t\t\t" +
                            _vm._s(obj.file) +
                            "(" +
                            _vm._s(obj.line) +
                            "): " +
                            _vm._s(obj.class) +
                            " " +
                            _vm._s(obj.type) +
                            " " +
                            _vm._s(obj.function) +
                            "\n\t\t\t\t\t"
                        )
                      ])
                    })
                  )
                ],
                1
              )
            ],
            2
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
    require("vue-hot-reload-api")      .rerender("data-v-cc426360", module.exports)
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(226)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(228)
/* template */
var __vue_template__ = __webpack_require__(229)
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
Component.options.__file = "resources/assets/js/modules/m-error-desc.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc426360", Component.options)
  } else {
    hotAPI.reload("data-v-cc426360", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});