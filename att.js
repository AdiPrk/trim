console.log("hi how doing!!!");

(function() {
	var e = {
		996: function(e) {
			"use strict";
			var t = function(e) {
				return i(e) && !n(e)
			};
			function i(e) {
				return !!e && "object" === typeof e
			}
			function n(e) {
				var t = Object.prototype.toString.call(e);
				return "[object RegExp]" === t || "[object Date]" === t || r(e)
			}
			var o = "function" === typeof Symbol && Symbol.for
			  , a = o ? Symbol.for("react.element") : 60103;
			function r(e) {
				return e.$$typeof === a
			}
			function s(e) {
				return Array.isArray(e) ? [] : {}
			}
			function l(e, i) {
				var n = i && !0 === i.clone;
				return n && t(e) ? u(s(e), e, i) : e
			}
			function c(e, i, n) {
				var o = e.slice();
				return i.forEach((function(i, a) {
					"undefined" === typeof o[a] ? o[a] = l(i, n) : t(i) ? o[a] = u(e[a], i, n) : -1 === e.indexOf(i) && o.push(l(i, n))
				}
				)),
				o
			}
			function d(e, i, n) {
				var o = {};
				return t(e) && Object.keys(e).forEach((function(t) {
					o[t] = l(e[t], n)
				}
				)),
				Object.keys(i).forEach((function(a) {
					t(i[a]) && e[a] ? o[a] = u(e[a], i[a], n) : o[a] = l(i[a], n)
				}
				)),
				o
			}
			function u(e, t, i) {
				var n = Array.isArray(t)
				  , o = Array.isArray(e)
				  , a = i || {
					arrayMerge: c
				}
				  , r = n === o;
				if (r) {
					if (n) {
						var s = a.arrayMerge || c;
						return s(e, t, i)
					}
					return d(e, t, i)
				}
				return l(t, i)
			}
			u.all = function(e, t) {
				if (!Array.isArray(e) || e.length < 2)
					throw new Error("first argument should be an array with at least two elements");
				return e.reduce((function(e, i) {
					return u(e, i, t)
				}
				))
			}
			;
			var h = u;
			e.exports = h
		},
		957: function(e) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 96)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				96: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "el-button-group"
						}, [e._t("default")], 2)
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						name: "ElButtonGroup"
					}
					  , r = a
					  , s = i(0)
					  , l = Object(s["a"])(r, n, o, !1, null, null, null);
					l.options.__file = "packages/button/src/button-group.vue";
					var c = l.exports;
					c.install = function(e) {
						e.component(c.name, c)
					}
					;
					t["default"] = c
				}
			})
		},
		426: function(e) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 95)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				95: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("button", {
							staticClass: "el-button",
							class: [e.type ? "el-button--" + e.type : "", e.buttonSize ? "el-button--" + e.buttonSize : "", {
								"is-disabled": e.buttonDisabled,
								"is-loading": e.loading,
								"is-plain": e.plain,
								"is-round": e.round,
								"is-circle": e.circle
							}],
							attrs: {
								disabled: e.buttonDisabled || e.loading,
								autofocus: e.autofocus,
								type: e.nativeType
							},
							on: {
								click: e.handleClick
							}
						}, [e.loading ? i("i", {
							staticClass: "el-icon-loading"
						}) : e._e(), e.icon && !e.loading ? i("i", {
							class: e.icon
						}) : e._e(), e.$slots.default ? i("span", [e._t("default")], 2) : e._e()])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						name: "ElButton",
						inject: {
							elForm: {
								default: ""
							},
							elFormItem: {
								default: ""
							}
						},
						props: {
							type: {
								type: String,
								default: "default"
							},
							size: String,
							icon: {
								type: String,
								default: ""
							},
							nativeType: {
								type: String,
								default: "button"
							},
							loading: Boolean,
							disabled: Boolean,
							plain: Boolean,
							autofocus: Boolean,
							round: Boolean,
							circle: Boolean
						},
						computed: {
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							buttonSize: function() {
								return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
							},
							buttonDisabled: function() {
								return this.$options.propsData.hasOwnProperty("disabled") ? this.disabled : (this.elForm || {}).disabled
							}
						},
						methods: {
							handleClick: function(e) {
								this.$emit("click", e)
							}
						}
					}
					  , r = a
					  , s = i(0)
					  , l = Object(s["a"])(r, n, o, !1, null, null, null);
					l.options.__file = "packages/button/src/button.vue";
					var c = l.exports;
					c.install = function(e) {
						e.component(c.name, c)
					}
					;
					t["default"] = c
				}
			})
		},
		810: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 91)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				91: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("label", {
							staticClass: "el-checkbox-button",
							class: [e.size ? "el-checkbox-button--" + e.size : "", {
								"is-disabled": e.isDisabled
							}, {
								"is-checked": e.isChecked
							}, {
								"is-focus": e.focus
							}],
							attrs: {
								role: "checkbox",
								"aria-checked": e.isChecked,
								"aria-disabled": e.isDisabled
							}
						}, [e.trueLabel || e.falseLabel ? i("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: e.model,
								expression: "model"
							}],
							staticClass: "el-checkbox-button__original",
							attrs: {
								type: "checkbox",
								name: e.name,
								disabled: e.isDisabled,
								"true-value": e.trueLabel,
								"false-value": e.falseLabel
							},
							domProps: {
								checked: Array.isArray(e.model) ? e._i(e.model, null) > -1 : e._q(e.model, e.trueLabel)
							},
							on: {
								change: [function(t) {
									var i = e.model
									  , n = t.target
									  , o = n.checked ? e.trueLabel : e.falseLabel;
									if (Array.isArray(i)) {
										var a = null
										  , r = e._i(i, a);
										n.checked ? r < 0 && (e.model = i.concat([a])) : r > -1 && (e.model = i.slice(0, r).concat(i.slice(r + 1)))
									} else
										e.model = o
								}
								, e.handleChange],
								focus: function(t) {
									e.focus = !0
								},
								blur: function(t) {
									e.focus = !1
								}
							}
						}) : i("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: e.model,
								expression: "model"
							}],
							staticClass: "el-checkbox-button__original",
							attrs: {
								type: "checkbox",
								name: e.name,
								disabled: e.isDisabled
							},
							domProps: {
								value: e.label,
								checked: Array.isArray(e.model) ? e._i(e.model, e.label) > -1 : e.model
							},
							on: {
								change: [function(t) {
									var i = e.model
									  , n = t.target
									  , o = !!n.checked;
									if (Array.isArray(i)) {
										var a = e.label
										  , r = e._i(i, a);
										n.checked ? r < 0 && (e.model = i.concat([a])) : r > -1 && (e.model = i.slice(0, r).concat(i.slice(r + 1)))
									} else
										e.model = o
								}
								, e.handleChange],
								focus: function(t) {
									e.focus = !0
								},
								blur: function(t) {
									e.focus = !1
								}
							}
						}), e.$slots.default || e.label ? i("span", {
							staticClass: "el-checkbox-button__inner",
							style: e.isChecked ? e.activeStyle : null
						}, [e._t("default", [e._v(e._s(e.label))])], 2) : e._e()])
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = {
						name: "ElCheckboxButton",
						mixins: [r.a],
						inject: {
							elForm: {
								default: ""
							},
							elFormItem: {
								default: ""
							}
						},
						data: function() {
							return {
								selfModel: !1,
								focus: !1,
								isLimitExceeded: !1
							}
						},
						props: {
							value: {},
							label: {},
							disabled: Boolean,
							checked: Boolean,
							name: String,
							trueLabel: [String, Number],
							falseLabel: [String, Number]
						},
						computed: {
							model: {
								get: function() {
									return this._checkboxGroup ? this.store : void 0 !== this.value ? this.value : this.selfModel
								},
								set: function(e) {
									this._checkboxGroup ? (this.isLimitExceeded = !1,
									void 0 !== this._checkboxGroup.min && e.length < this._checkboxGroup.min && (this.isLimitExceeded = !0),
									void 0 !== this._checkboxGroup.max && e.length > this._checkboxGroup.max && (this.isLimitExceeded = !0),
									!1 === this.isLimitExceeded && this.dispatch("ElCheckboxGroup", "input", [e])) : void 0 !== this.value ? this.$emit("input", e) : this.selfModel = e
								}
							},
							isChecked: function() {
								return "[object Boolean]" === {}.toString.call(this.model) ? this.model : Array.isArray(this.model) ? this.model.indexOf(this.label) > -1 : null !== this.model && void 0 !== this.model ? this.model === this.trueLabel : void 0
							},
							_checkboxGroup: function() {
								var e = this.$parent;
								while (e) {
									if ("ElCheckboxGroup" === e.$options.componentName)
										return e;
									e = e.$parent
								}
								return !1
							},
							store: function() {
								return this._checkboxGroup ? this._checkboxGroup.value : this.value
							},
							activeStyle: function() {
								return {
									backgroundColor: this._checkboxGroup.fill || "",
									borderColor: this._checkboxGroup.fill || "",
									color: this._checkboxGroup.textColor || "",
									"box-shadow": "-1px 0 0 0 " + this._checkboxGroup.fill
								}
							},
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							size: function() {
								return this._checkboxGroup.checkboxGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size
							},
							isLimitDisabled: function() {
								var e = this._checkboxGroup
								  , t = e.max
								  , i = e.min;
								return !(!t && !i) && this.model.length >= t && !this.isChecked || this.model.length <= i && this.isChecked
							},
							isDisabled: function() {
								return this._checkboxGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled : this.disabled || (this.elForm || {}).disabled
							}
						},
						methods: {
							addToStore: function() {
								Array.isArray(this.model) && -1 === this.model.indexOf(this.label) ? this.model.push(this.label) : this.model = this.trueLabel || !0
							},
							handleChange: function(e) {
								var t = this;
								if (!this.isLimitExceeded) {
									var i = void 0;
									i = e.target.checked ? void 0 === this.trueLabel || this.trueLabel : void 0 !== this.falseLabel && this.falseLabel,
									this.$emit("change", i, e),
									this.$nextTick((function() {
										t._checkboxGroup && t.dispatch("ElCheckboxGroup", "change", [t._checkboxGroup.value])
									}
									))
								}
							}
						},
						created: function() {
							this.checked && this.addToStore()
						}
					}
					  , l = s
					  , c = i(0)
					  , d = Object(c["a"])(l, n, o, !1, null, null, null);
					d.options.__file = "packages/checkbox/src/checkbox-button.vue";
					var u = d.exports;
					u.install = function(e) {
						e.component(u.name, u)
					}
					;
					t["default"] = u
				}
			})
		},
		235: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 92)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				92: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "el-checkbox-group",
							attrs: {
								role: "group",
								"aria-label": "checkbox-group"
							}
						}, [e._t("default")], 2)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = {
						name: "ElCheckboxGroup",
						componentName: "ElCheckboxGroup",
						mixins: [r.a],
						inject: {
							elFormItem: {
								default: ""
							}
						},
						props: {
							value: {},
							disabled: Boolean,
							min: Number,
							max: Number,
							size: String,
							fill: String,
							textColor: String
						},
						computed: {
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							checkboxGroupSize: function() {
								return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
							}
						},
						watch: {
							value: function(e) {
								this.dispatch("ElFormItem", "el.form.change", [e])
							}
						}
					}
					  , l = s
					  , c = i(0)
					  , d = Object(c["a"])(l, n, o, !1, null, null, null);
					d.options.__file = "packages/checkbox/src/checkbox-group.vue";
					var u = d.exports;
					u.install = function(e) {
						e.component(u.name, u)
					}
					;
					t["default"] = u
				}
			})
		},
		626: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 90)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				90: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("label", {
							staticClass: "el-checkbox",
							class: [e.border && e.checkboxSize ? "el-checkbox--" + e.checkboxSize : "", {
								"is-disabled": e.isDisabled
							}, {
								"is-bordered": e.border
							}, {
								"is-checked": e.isChecked
							}],
							attrs: {
								id: e.id
							}
						}, [i("span", {
							staticClass: "el-checkbox__input",
							class: {
								"is-disabled": e.isDisabled,
								"is-checked": e.isChecked,
								"is-indeterminate": e.indeterminate,
								"is-focus": e.focus
							},
							attrs: {
								tabindex: !!e.indeterminate && 0,
								role: !!e.indeterminate && "checkbox",
								"aria-checked": !!e.indeterminate && "mixed"
							}
						}, [i("span", {
							staticClass: "el-checkbox__inner"
						}), e.trueLabel || e.falseLabel ? i("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: e.model,
								expression: "model"
							}],
							staticClass: "el-checkbox__original",
							attrs: {
								type: "checkbox",
								"aria-hidden": e.indeterminate ? "true" : "false",
								name: e.name,
								disabled: e.isDisabled,
								"true-value": e.trueLabel,
								"false-value": e.falseLabel
							},
							domProps: {
								checked: Array.isArray(e.model) ? e._i(e.model, null) > -1 : e._q(e.model, e.trueLabel)
							},
							on: {
								change: [function(t) {
									var i = e.model
									  , n = t.target
									  , o = n.checked ? e.trueLabel : e.falseLabel;
									if (Array.isArray(i)) {
										var a = null
										  , r = e._i(i, a);
										n.checked ? r < 0 && (e.model = i.concat([a])) : r > -1 && (e.model = i.slice(0, r).concat(i.slice(r + 1)))
									} else
										e.model = o
								}
								, e.handleChange],
								focus: function(t) {
									e.focus = !0
								},
								blur: function(t) {
									e.focus = !1
								}
							}
						}) : i("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: e.model,
								expression: "model"
							}],
							staticClass: "el-checkbox__original",
							attrs: {
								type: "checkbox",
								"aria-hidden": e.indeterminate ? "true" : "false",
								disabled: e.isDisabled,
								name: e.name
							},
							domProps: {
								value: e.label,
								checked: Array.isArray(e.model) ? e._i(e.model, e.label) > -1 : e.model
							},
							on: {
								change: [function(t) {
									var i = e.model
									  , n = t.target
									  , o = !!n.checked;
									if (Array.isArray(i)) {
										var a = e.label
										  , r = e._i(i, a);
										n.checked ? r < 0 && (e.model = i.concat([a])) : r > -1 && (e.model = i.slice(0, r).concat(i.slice(r + 1)))
									} else
										e.model = o
								}
								, e.handleChange],
								focus: function(t) {
									e.focus = !0
								},
								blur: function(t) {
									e.focus = !1
								}
							}
						})]), e.$slots.default || e.label ? i("span", {
							staticClass: "el-checkbox__label"
						}, [e._t("default"), e.$slots.default ? e._e() : [e._v(e._s(e.label))]], 2) : e._e()])
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = {
						name: "ElCheckbox",
						mixins: [r.a],
						inject: {
							elForm: {
								default: ""
							},
							elFormItem: {
								default: ""
							}
						},
						componentName: "ElCheckbox",
						data: function() {
							return {
								selfModel: !1,
								focus: !1,
								isLimitExceeded: !1
							}
						},
						computed: {
							model: {
								get: function() {
									return this.isGroup ? this.store : void 0 !== this.value ? this.value : this.selfModel
								},
								set: function(e) {
									this.isGroup ? (this.isLimitExceeded = !1,
									void 0 !== this._checkboxGroup.min && e.length < this._checkboxGroup.min && (this.isLimitExceeded = !0),
									void 0 !== this._checkboxGroup.max && e.length > this._checkboxGroup.max && (this.isLimitExceeded = !0),
									!1 === this.isLimitExceeded && this.dispatch("ElCheckboxGroup", "input", [e])) : (this.$emit("input", e),
									this.selfModel = e)
								}
							},
							isChecked: function() {
								return "[object Boolean]" === {}.toString.call(this.model) ? this.model : Array.isArray(this.model) ? this.model.indexOf(this.label) > -1 : null !== this.model && void 0 !== this.model ? this.model === this.trueLabel : void 0
							},
							isGroup: function() {
								var e = this.$parent;
								while (e) {
									if ("ElCheckboxGroup" === e.$options.componentName)
										return this._checkboxGroup = e,
										!0;
									e = e.$parent
								}
								return !1
							},
							store: function() {
								return this._checkboxGroup ? this._checkboxGroup.value : this.value
							},
							isLimitDisabled: function() {
								var e = this._checkboxGroup
								  , t = e.max
								  , i = e.min;
								return !(!t && !i) && this.model.length >= t && !this.isChecked || this.model.length <= i && this.isChecked
							},
							isDisabled: function() {
								return this.isGroup ? this._checkboxGroup.disabled || this.disabled || (this.elForm || {}).disabled || this.isLimitDisabled : this.disabled || (this.elForm || {}).disabled
							},
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							checkboxSize: function() {
								var e = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
								return this.isGroup && this._checkboxGroup.checkboxGroupSize || e
							}
						},
						props: {
							value: {},
							label: {},
							indeterminate: Boolean,
							disabled: Boolean,
							checked: Boolean,
							name: String,
							trueLabel: [String, Number],
							falseLabel: [String, Number],
							id: String,
							controls: String,
							border: Boolean,
							size: String
						},
						methods: {
							addToStore: function() {
								Array.isArray(this.model) && -1 === this.model.indexOf(this.label) ? this.model.push(this.label) : this.model = this.trueLabel || !0
							},
							handleChange: function(e) {
								var t = this;
								if (!this.isLimitExceeded) {
									var i = void 0;
									i = e.target.checked ? void 0 === this.trueLabel || this.trueLabel : void 0 !== this.falseLabel && this.falseLabel,
									this.$emit("change", i, e),
									this.$nextTick((function() {
										t.isGroup && t.dispatch("ElCheckboxGroup", "change", [t._checkboxGroup.value])
									}
									))
								}
							}
						},
						created: function() {
							this.checked && this.addToStore()
						},
						mounted: function() {
							this.indeterminate && this.$el.setAttribute("aria-controls", this.controls)
						},
						watch: {
							value: function(e) {
								this.dispatch("ElFormItem", "el.form.change", e)
							}
						}
					}
					  , l = s
					  , c = i(0)
					  , d = Object(c["a"])(l, n, o, !1, null, null, null);
					d.options.__file = "packages/checkbox/src/checkbox.vue";
					var u = d.exports;
					u.install = function(e) {
						e.component(u.name, u)
					}
					;
					t["default"] = u
				}
			})
		},
		879: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 83)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				83: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("li", {
							staticClass: "el-dropdown-menu__item",
							class: {
								"is-disabled": e.disabled,
								"el-dropdown-menu__item--divided": e.divided
							},
							attrs: {
								"aria-disabled": e.disabled,
								tabindex: e.disabled ? null : -1
							},
							on: {
								click: e.handleClick
							}
						}, [e.icon ? i("i", {
							class: e.icon
						}) : e._e(), e._t("default")], 2)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = {
						name: "ElDropdownItem",
						mixins: [r.a],
						props: {
							command: {},
							disabled: Boolean,
							divided: Boolean,
							icon: String
						},
						methods: {
							handleClick: function(e) {
								this.dispatch("ElDropdown", "menu-item-click", [this.command, this])
							}
						}
					}
					  , l = s
					  , c = i(0)
					  , d = Object(c["a"])(l, n, o, !1, null, null, null);
					d.options.__file = "packages/dropdown/src/dropdown-item.vue";
					var u = d.exports;
					u.install = function(e) {
						e.component(u.name, u)
					}
					;
					t["default"] = u
				}
			})
		},
		229: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 82)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				5: function(e, t) {
					e.exports = i(499)
				},
				82: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("transition", {
							attrs: {
								name: "el-zoom-in-top"
							},
							on: {
								"after-leave": e.doDestroy
							}
						}, [i("ul", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: e.showPopper,
								expression: "showPopper"
							}],
							staticClass: "el-dropdown-menu el-popper",
							class: [e.size && "el-dropdown-menu--" + e.size]
						}, [e._t("default")], 2)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(5)
					  , r = i.n(a)
					  , s = {
						name: "ElDropdownMenu",
						componentName: "ElDropdownMenu",
						mixins: [r.a],
						props: {
							visibleArrow: {
								type: Boolean,
								default: !0
							},
							arrowOffset: {
								type: Number,
								default: 0
							}
						},
						data: function() {
							return {
								size: this.dropdown.dropdownSize
							}
						},
						inject: ["dropdown"],
						created: function() {
							var e = this;
							this.$on("updatePopper", (function() {
								e.showPopper && e.updatePopper()
							}
							)),
							this.$on("visible", (function(t) {
								e.showPopper = t
							}
							))
						},
						mounted: function() {
							this.dropdown.popperElm = this.popperElm = this.$el,
							this.referenceElm = this.dropdown.$el,
							this.dropdown.initDomOperation()
						},
						watch: {
							"dropdown.placement": {
								immediate: !0,
								handler: function(e) {
									this.currentPlacement = e
								}
							}
						}
					}
					  , l = s
					  , c = i(0)
					  , d = Object(c["a"])(l, n, o, !1, null, null, null);
					d.options.__file = "packages/dropdown/src/dropdown-menu.vue";
					var u = d.exports;
					u.install = function(e) {
						e.component(u.name, u)
					}
					;
					t["default"] = u
				}
			})
		},
		99: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 128)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				11: function(e, t) {
					e.exports = i(222)
				},
				12: function(e, t) {
					e.exports = i(80)
				},
				128: function(e, t, i) {
					"use strict";
					i.r(t);
					var n, o, a = i(12), r = i.n(a), s = i(4), l = i.n(s), c = i(11), d = i.n(c), u = i(14), h = i.n(u), p = i(35), f = i.n(p), m = i(3), v = {
						name: "ElDropdown",
						componentName: "ElDropdown",
						mixins: [l.a, d.a],
						directives: {
							Clickoutside: r.a
						},
						components: {
							ElButton: h.a,
							ElButtonGroup: f.a
						},
						provide: function() {
							return {
								dropdown: this
							}
						},
						props: {
							trigger: {
								type: String,
								default: "hover"
							},
							type: String,
							size: {
								type: String,
								default: ""
							},
							splitButton: Boolean,
							hideOnClick: {
								type: Boolean,
								default: !0
							},
							placement: {
								type: String,
								default: "bottom-end"
							},
							visibleArrow: {
								default: !0
							},
							showTimeout: {
								type: Number,
								default: 250
							},
							hideTimeout: {
								type: Number,
								default: 150
							},
							tabindex: {
								type: Number,
								default: 0
							},
							disabled: {
								type: Boolean,
								default: !1
							}
						},
						data: function() {
							return {
								timeout: null,
								visible: !1,
								triggerElm: null,
								menuItems: null,
								menuItemsArray: null,
								dropdownElm: null,
								focusing: !1,
								listId: "dropdown-menu-" + Object(m["generateId"])()
							}
						},
						computed: {
							dropdownSize: function() {
								return this.size || (this.$ELEMENT || {}).size
							}
						},
						mounted: function() {
							this.$on("menu-item-click", this.handleMenuItemClick)
						},
						watch: {
							visible: function(e) {
								this.broadcast("ElDropdownMenu", "visible", e),
								this.$emit("visible-change", e)
							},
							focusing: function(e) {
								var t = this.$el.querySelector(".el-dropdown-selfdefine");
								t && (e ? t.className += " focusing" : t.className = t.className.replace("focusing", ""))
							}
						},
						methods: {
							getMigratingConfig: function() {
								return {
									props: {
										"menu-align": "menu-align is renamed to placement."
									}
								}
							},
							show: function() {
								var e = this;
								this.disabled || (clearTimeout(this.timeout),
								this.timeout = setTimeout((function() {
									e.visible = !0
								}
								), "click" === this.trigger ? 0 : this.showTimeout))
							},
							hide: function() {
								var e = this;
								this.disabled || (this.removeTabindex(),
								this.tabindex >= 0 && this.resetTabindex(this.triggerElm),
								clearTimeout(this.timeout),
								this.timeout = setTimeout((function() {
									e.visible = !1
								}
								), "click" === this.trigger ? 0 : this.hideTimeout))
							},
							handleClick: function() {
								this.disabled || (this.visible ? this.hide() : this.show())
							},
							handleTriggerKeyDown: function(e) {
								var t = e.keyCode;
								[38, 40].indexOf(t) > -1 ? (this.removeTabindex(),
								this.resetTabindex(this.menuItems[0]),
								this.menuItems[0].focus(),
								e.preventDefault(),
								e.stopPropagation()) : 13 === t ? this.handleClick() : [9, 27].indexOf(t) > -1 && this.hide()
							},
							handleItemKeyDown: function(e) {
								var t = e.keyCode
								  , i = e.target
								  , n = this.menuItemsArray.indexOf(i)
								  , o = this.menuItemsArray.length - 1
								  , a = void 0;
								[38, 40].indexOf(t) > -1 ? (a = 38 === t ? 0 !== n ? n - 1 : 0 : n < o ? n + 1 : o,
								this.removeTabindex(),
								this.resetTabindex(this.menuItems[a]),
								this.menuItems[a].focus(),
								e.preventDefault(),
								e.stopPropagation()) : 13 === t ? (this.triggerElmFocus(),
								i.click(),
								this.hideOnClick && (this.visible = !1)) : [9, 27].indexOf(t) > -1 && (this.hide(),
								this.triggerElmFocus())
							},
							resetTabindex: function(e) {
								this.removeTabindex(),
								e.setAttribute("tabindex", "0")
							},
							removeTabindex: function() {
								this.triggerElm.setAttribute("tabindex", "-1"),
								this.menuItemsArray.forEach((function(e) {
									e.setAttribute("tabindex", "-1")
								}
								))
							},
							initAria: function() {
								this.dropdownElm.setAttribute("id", this.listId),
								this.triggerElm.setAttribute("aria-haspopup", "list"),
								this.triggerElm.setAttribute("aria-controls", this.listId),
								this.splitButton || (this.triggerElm.setAttribute("role", "button"),
								this.triggerElm.setAttribute("tabindex", this.tabindex),
								this.triggerElm.setAttribute("class", (this.triggerElm.getAttribute("class") || "") + " el-dropdown-selfdefine"))
							},
							initEvent: function() {
								var e = this
								  , t = this.trigger
								  , i = this.show
								  , n = this.hide
								  , o = this.handleClick
								  , a = this.splitButton
								  , r = this.handleTriggerKeyDown
								  , s = this.handleItemKeyDown;
								this.triggerElm = a ? this.$refs.trigger.$el : this.$slots.default[0].elm;
								var l = this.dropdownElm;
								this.triggerElm.addEventListener("keydown", r),
								l.addEventListener("keydown", s, !0),
								a || (this.triggerElm.addEventListener("focus", (function() {
									e.focusing = !0
								}
								)),
								this.triggerElm.addEventListener("blur", (function() {
									e.focusing = !1
								}
								)),
								this.triggerElm.addEventListener("click", (function() {
									e.focusing = !1
								}
								))),
								"hover" === t ? (this.triggerElm.addEventListener("mouseenter", i),
								this.triggerElm.addEventListener("mouseleave", n),
								l.addEventListener("mouseenter", i),
								l.addEventListener("mouseleave", n)) : "click" === t && this.triggerElm.addEventListener("click", o)
							},
							handleMenuItemClick: function(e, t) {
								this.hideOnClick && (this.visible = !1),
								this.$emit("command", e, t)
							},
							triggerElmFocus: function() {
								this.triggerElm.focus && this.triggerElm.focus()
							},
							initDomOperation: function() {
								this.dropdownElm = this.popperElm,
								this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']"),
								this.menuItemsArray = [].slice.call(this.menuItems),
								this.initEvent(),
								this.initAria()
							}
						},
						render: function(e) {
							var t = this
							  , i = this.hide
							  , n = this.splitButton
							  , o = this.type
							  , a = this.dropdownSize
							  , r = this.disabled
							  , s = function(e) {
								t.$emit("click", e),
								i()
							}
							  , l = null;
							if (n)
								l = e("el-button-group", [e("el-button", {
									attrs: {
										type: o,
										size: a,
										disabled: r
									},
									nativeOn: {
										click: s
									}
								}, [this.$slots.default]), e("el-button", {
									ref: "trigger",
									attrs: {
										type: o,
										size: a,
										disabled: r
									},
									class: "el-dropdown__caret-button"
								}, [e("i", {
									class: "el-dropdown__icon el-icon-arrow-down"
								})])]);
							else {
								l = this.$slots.default;
								var c = l[0].data || {}
								  , d = c.attrs
								  , u = void 0 === d ? {} : d;
								r && !u.disabled && (u.disabled = !0,
								c.attrs = u)
							}
							var h = r ? null : this.$slots.dropdown;
							return e("div", {
								class: "el-dropdown",
								directives: [{
									name: "clickoutside",
									value: i
								}],
								attrs: {
									"aria-disabled": r
								}
							}, [l, h])
						}
					}, g = v, b = i(0), _ = Object(b["a"])(g, n, o, !1, null, null, null);
					_.options.__file = "packages/dropdown/src/dropdown.vue";
					var y = _.exports;
					y.install = function(e) {
						e.component(y.name, y)
					}
					;
					t["default"] = y
				},
				14: function(e, t) {
					e.exports = i(426)
				},
				3: function(e, t) {
					e.exports = i(104)
				},
				35: function(e, t) {
					e.exports = i(957)
				},
				4: function(e, t) {
					e.exports = i(477)
				}
			})
		},
		987: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 86)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				10: function(e, t) {
					e.exports = i(19)
				},
				2: function(e, t) {
					e.exports = i(594)
				},
				22: function(e, t) {
					e.exports = i(618)
				},
				30: function(e, t, i) {
					"use strict";
					var n = i(2);
					t["a"] = {
						bind: function(e, t, i) {
							var o = null
							  , a = void 0
							  , r = function() {
								return i.context[t.expression].apply()
							}
							  , s = function() {
								Date.now() - a < 100 && r(),
								clearInterval(o),
								o = null
							};
							Object(n["on"])(e, "mousedown", (function(e) {
								0 === e.button && (a = Date.now(),
								Object(n["once"])(document, "mouseup", s),
								clearInterval(o),
								o = setInterval(r, 100))
							}
							))
						}
					}
				},
				86: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							class: ["el-input-number", e.inputNumberSize ? "el-input-number--" + e.inputNumberSize : "", {
								"is-disabled": e.inputNumberDisabled
							}, {
								"is-without-controls": !e.controls
							}, {
								"is-controls-right": e.controlsAtRight
							}],
							on: {
								dragstart: function(e) {
									e.preventDefault()
								}
							}
						}, [e.controls ? i("span", {
							directives: [{
								name: "repeat-click",
								rawName: "v-repeat-click",
								value: e.decrease,
								expression: "decrease"
							}],
							staticClass: "el-input-number__decrease",
							class: {
								"is-disabled": e.minDisabled
							},
							attrs: {
								role: "button"
							},
							on: {
								keydown: function(t) {
									return !("button"in t) && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.decrease(t)
								}
							}
						}, [i("i", {
							class: "el-icon-" + (e.controlsAtRight ? "arrow-down" : "minus")
						})]) : e._e(), e.controls ? i("span", {
							directives: [{
								name: "repeat-click",
								rawName: "v-repeat-click",
								value: e.increase,
								expression: "increase"
							}],
							staticClass: "el-input-number__increase",
							class: {
								"is-disabled": e.maxDisabled
							},
							attrs: {
								role: "button"
							},
							on: {
								keydown: function(t) {
									return !("button"in t) && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.increase(t)
								}
							}
						}, [i("i", {
							class: "el-icon-" + (e.controlsAtRight ? "arrow-up" : "plus")
						})]) : e._e(), i("el-input", {
							ref: "input",
							attrs: {
								value: e.displayValue,
								placeholder: e.placeholder,
								disabled: e.inputNumberDisabled,
								size: e.inputNumberSize,
								max: e.max,
								min: e.min,
								name: e.name,
								label: e.label
							},
							on: {
								blur: e.handleBlur,
								focus: e.handleFocus,
								input: e.handleInput,
								change: e.handleInputChange
							},
							nativeOn: {
								keydown: [function(t) {
									return !("button"in t) && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) ? null : (t.preventDefault(),
									e.increase(t))
								}
								, function(t) {
									return !("button"in t) && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) ? null : (t.preventDefault(),
									e.decrease(t))
								}
								]
							}
						})], 1)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(10)
					  , r = i.n(a)
					  , s = i(22)
					  , l = i.n(s)
					  , c = i(30)
					  , d = {
						name: "ElInputNumber",
						mixins: [l()("input")],
						inject: {
							elForm: {
								default: ""
							},
							elFormItem: {
								default: ""
							}
						},
						directives: {
							repeatClick: c["a"]
						},
						components: {
							ElInput: r.a
						},
						props: {
							step: {
								type: Number,
								default: 1
							},
							stepStrictly: {
								type: Boolean,
								default: !1
							},
							max: {
								type: Number,
								default: 1 / 0
							},
							min: {
								type: Number,
								default: -1 / 0
							},
							value: {},
							disabled: Boolean,
							size: String,
							controls: {
								type: Boolean,
								default: !0
							},
							controlsPosition: {
								type: String,
								default: ""
							},
							name: String,
							label: String,
							placeholder: String,
							precision: {
								type: Number,
								validator: function(e) {
									return e >= 0 && e === parseInt(e, 10)
								}
							}
						},
						data: function() {
							return {
								currentValue: 0,
								userInput: null
							}
						},
						watch: {
							value: {
								immediate: !0,
								handler: function(e) {
									var t = void 0 === e ? e : Number(e);
									if (void 0 !== t) {
										if (isNaN(t))
											return;
										if (this.stepStrictly) {
											var i = this.getPrecision(this.step)
											  , n = Math.pow(10, i);
											t = Math.round(t / this.step) * n * this.step / n
										}
										void 0 !== this.precision && (t = this.toPrecision(t, this.precision))
									}
									t >= this.max && (t = this.max),
									t <= this.min && (t = this.min),
									this.currentValue = t,
									this.userInput = null,
									this.$emit("input", t)
								}
							}
						},
						computed: {
							minDisabled: function() {
								return this._decrease(this.value, this.step) < this.min
							},
							maxDisabled: function() {
								return this._increase(this.value, this.step) > this.max
							},
							numPrecision: function() {
								var e = this.value
								  , t = this.step
								  , i = this.getPrecision
								  , n = this.precision
								  , o = i(t);
								return void 0 !== n ? (o > n && console.warn("[Element Warn][InputNumber]precision should not be less than the decimal places of step"),
								n) : Math.max(i(e), o)
							},
							controlsAtRight: function() {
								return this.controls && "right" === this.controlsPosition
							},
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							inputNumberSize: function() {
								return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
							},
							inputNumberDisabled: function() {
								return this.disabled || !!(this.elForm || {}).disabled
							},
							displayValue: function() {
								if (null !== this.userInput)
									return this.userInput;
								var e = this.currentValue;
								if ("number" === typeof e) {
									if (this.stepStrictly) {
										var t = this.getPrecision(this.step)
										  , i = Math.pow(10, t);
										e = Math.round(e / this.step) * i * this.step / i
									}
									void 0 !== this.precision && (e = e.toFixed(this.precision))
								}
								return e
							}
						},
						methods: {
							toPrecision: function(e, t) {
								return void 0 === t && (t = this.numPrecision),
								parseFloat(Math.round(e * Math.pow(10, t)) / Math.pow(10, t))
							},
							getPrecision: function(e) {
								if (void 0 === e)
									return 0;
								var t = e.toString()
								  , i = t.indexOf(".")
								  , n = 0;
								return -1 !== i && (n = t.length - i - 1),
								n
							},
							_increase: function(e, t) {
								if ("number" !== typeof e && void 0 !== e)
									return this.currentValue;
								var i = Math.pow(10, this.numPrecision);
								return this.toPrecision((i * e + i * t) / i)
							},
							_decrease: function(e, t) {
								if ("number" !== typeof e && void 0 !== e)
									return this.currentValue;
								var i = Math.pow(10, this.numPrecision);
								return this.toPrecision((i * e - i * t) / i)
							},
							increase: function() {
								if (!this.inputNumberDisabled && !this.maxDisabled) {
									var e = this.value || 0
									  , t = this._increase(e, this.step);
									this.setCurrentValue(t)
								}
							},
							decrease: function() {
								if (!this.inputNumberDisabled && !this.minDisabled) {
									var e = this.value || 0
									  , t = this._decrease(e, this.step);
									this.setCurrentValue(t)
								}
							},
							handleBlur: function(e) {
								this.$emit("blur", e)
							},
							handleFocus: function(e) {
								this.$emit("focus", e)
							},
							setCurrentValue: function(e) {
								var t = this.currentValue;
								"number" === typeof e && void 0 !== this.precision && (e = this.toPrecision(e, this.precision)),
								e >= this.max && (e = this.max),
								e <= this.min && (e = this.min),
								t !== e && (this.userInput = null,
								this.$emit("input", e),
								this.$emit("change", e, t),
								this.currentValue = e)
							},
							handleInput: function(e) {
								this.userInput = e
							},
							handleInputChange: function(e) {
								var t = "" === e ? void 0 : Number(e);
								isNaN(t) && "" !== e || this.setCurrentValue(t),
								this.userInput = null
							},
							select: function() {
								this.$refs.input.select()
							}
						},
						mounted: function() {
							var e = this.$refs.input.$refs.input;
							e.setAttribute("role", "spinbutton"),
							e.setAttribute("aria-valuemax", this.max),
							e.setAttribute("aria-valuemin", this.min),
							e.setAttribute("aria-valuenow", this.currentValue),
							e.setAttribute("aria-disabled", this.inputNumberDisabled)
						},
						updated: function() {
							if (this.$refs && this.$refs.input) {
								var e = this.$refs.input.$refs.input;
								e.setAttribute("aria-valuenow", this.currentValue)
							}
						}
					}
					  , u = d
					  , h = i(0)
					  , p = Object(h["a"])(u, n, o, !1, null, null, null);
					p.options.__file = "packages/input-number/src/input-number.vue";
					var f = p.exports;
					f.install = function(e) {
						e.component(f.name, f)
					}
					;
					t["default"] = f
				}
			})
		},
		19: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 74)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				11: function(e, t) {
					e.exports = i(222)
				},
				21: function(e, t) {
					e.exports = i(167)
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				74: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							class: ["textarea" === e.type ? "el-textarea" : "el-input", e.inputSize ? "el-input--" + e.inputSize : "", {
								"is-disabled": e.inputDisabled,
								"is-exceed": e.inputExceed,
								"el-input-group": e.$slots.prepend || e.$slots.append,
								"el-input-group--append": e.$slots.append,
								"el-input-group--prepend": e.$slots.prepend,
								"el-input--prefix": e.$slots.prefix || e.prefixIcon,
								"el-input--suffix": e.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword
							}],
							on: {
								mouseenter: function(t) {
									e.hovering = !0
								},
								mouseleave: function(t) {
									e.hovering = !1
								}
							}
						}, ["textarea" !== e.type ? [e.$slots.prepend ? i("div", {
							staticClass: "el-input-group__prepend"
						}, [e._t("prepend")], 2) : e._e(), "textarea" !== e.type ? i("input", e._b({
							ref: "input",
							staticClass: "el-input__inner",
							attrs: {
								tabindex: e.tabindex,
								type: e.showPassword ? e.passwordVisible ? "text" : "password" : e.type,
								disabled: e.inputDisabled,
								readonly: e.readonly,
								autocomplete: e.autoComplete || e.autocomplete,
								"aria-label": e.label
							},
							on: {
								compositionstart: e.handleCompositionStart,
								compositionupdate: e.handleCompositionUpdate,
								compositionend: e.handleCompositionEnd,
								input: e.handleInput,
								focus: e.handleFocus,
								blur: e.handleBlur,
								change: e.handleChange
							}
						}, "input", e.$attrs, !1)) : e._e(), e.$slots.prefix || e.prefixIcon ? i("span", {
							staticClass: "el-input__prefix"
						}, [e._t("prefix"), e.prefixIcon ? i("i", {
							staticClass: "el-input__icon",
							class: e.prefixIcon
						}) : e._e()], 2) : e._e(), e.getSuffixVisible() ? i("span", {
							staticClass: "el-input__suffix"
						}, [i("span", {
							staticClass: "el-input__suffix-inner"
						}, [e.showClear && e.showPwdVisible && e.isWordLimitVisible ? e._e() : [e._t("suffix"), e.suffixIcon ? i("i", {
							staticClass: "el-input__icon",
							class: e.suffixIcon
						}) : e._e()], e.showClear ? i("i", {
							staticClass: "el-input__icon el-icon-circle-close el-input__clear",
							on: {
								mousedown: function(e) {
									e.preventDefault()
								},
								click: e.clear
							}
						}) : e._e(), e.showPwdVisible ? i("i", {
							staticClass: "el-input__icon el-icon-view el-input__clear",
							on: {
								click: e.handlePasswordVisible
							}
						}) : e._e(), e.isWordLimitVisible ? i("span", {
							staticClass: "el-input__count"
						}, [i("span", {
							staticClass: "el-input__count-inner"
						}, [e._v("\n            " + e._s(e.textLength) + "/" + e._s(e.upperLimit) + "\n          ")])]) : e._e()], 2), e.validateState ? i("i", {
							staticClass: "el-input__icon",
							class: ["el-input__validateIcon", e.validateIcon]
						}) : e._e()]) : e._e(), e.$slots.append ? i("div", {
							staticClass: "el-input-group__append"
						}, [e._t("append")], 2) : e._e()] : i("textarea", e._b({
							ref: "textarea",
							staticClass: "el-textarea__inner",
							style: e.textareaStyle,
							attrs: {
								tabindex: e.tabindex,
								disabled: e.inputDisabled,
								readonly: e.readonly,
								autocomplete: e.autoComplete || e.autocomplete,
								"aria-label": e.label
							},
							on: {
								compositionstart: e.handleCompositionStart,
								compositionupdate: e.handleCompositionUpdate,
								compositionend: e.handleCompositionEnd,
								input: e.handleInput,
								focus: e.handleFocus,
								blur: e.handleBlur,
								change: e.handleChange
							}
						}, "textarea", e.$attrs, !1)), e.isWordLimitVisible && "textarea" === e.type ? i("span", {
							staticClass: "el-input__count"
						}, [e._v(e._s(e.textLength) + "/" + e._s(e.upperLimit))]) : e._e()], 2)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = i(11)
					  , l = i.n(s)
					  , c = void 0
					  , d = "\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n"
					  , u = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing"];
					function h(e) {
						var t = window.getComputedStyle(e)
						  , i = t.getPropertyValue("box-sizing")
						  , n = parseFloat(t.getPropertyValue("padding-bottom")) + parseFloat(t.getPropertyValue("padding-top"))
						  , o = parseFloat(t.getPropertyValue("border-bottom-width")) + parseFloat(t.getPropertyValue("border-top-width"))
						  , a = u.map((function(e) {
							return e + ":" + t.getPropertyValue(e)
						}
						)).join(";");
						return {
							contextStyle: a,
							paddingSize: n,
							borderSize: o,
							boxSizing: i
						}
					}
					function p(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
						  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
						c || (c = document.createElement("textarea"),
						document.body.appendChild(c));
						var n = h(e)
						  , o = n.paddingSize
						  , a = n.borderSize
						  , r = n.boxSizing
						  , s = n.contextStyle;
						c.setAttribute("style", s + ";" + d),
						c.value = e.value || e.placeholder || "";
						var l = c.scrollHeight
						  , u = {};
						"border-box" === r ? l += a : "content-box" === r && (l -= o),
						c.value = "";
						var p = c.scrollHeight - o;
						if (null !== t) {
							var f = p * t;
							"border-box" === r && (f = f + o + a),
							l = Math.max(f, l),
							u.minHeight = f + "px"
						}
						if (null !== i) {
							var m = p * i;
							"border-box" === r && (m = m + o + a),
							l = Math.min(m, l)
						}
						return u.height = l + "px",
						c.parentNode && c.parentNode.removeChild(c),
						c = null,
						u
					}
					var f = i(9)
					  , m = i.n(f)
					  , v = i(21)
					  , g = {
						name: "ElInput",
						componentName: "ElInput",
						mixins: [r.a, l.a],
						inheritAttrs: !1,
						inject: {
							elForm: {
								default: ""
							},
							elFormItem: {
								default: ""
							}
						},
						data: function() {
							return {
								textareaCalcStyle: {},
								hovering: !1,
								focused: !1,
								isComposing: !1,
								passwordVisible: !1
							}
						},
						props: {
							value: [String, Number],
							size: String,
							resize: String,
							form: String,
							disabled: Boolean,
							readonly: Boolean,
							type: {
								type: String,
								default: "text"
							},
							autosize: {
								type: [Boolean, Object],
								default: !1
							},
							autocomplete: {
								type: String,
								default: "off"
							},
							autoComplete: {
								type: String,
								validator: function(e) {
									return !0
								}
							},
							validateEvent: {
								type: Boolean,
								default: !0
							},
							suffixIcon: String,
							prefixIcon: String,
							label: String,
							clearable: {
								type: Boolean,
								default: !1
							},
							showPassword: {
								type: Boolean,
								default: !1
							},
							showWordLimit: {
								type: Boolean,
								default: !1
							},
							tabindex: String
						},
						computed: {
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							validateState: function() {
								return this.elFormItem ? this.elFormItem.validateState : ""
							},
							needStatusIcon: function() {
								return !!this.elForm && this.elForm.statusIcon
							},
							validateIcon: function() {
								return {
									validating: "el-icon-loading",
									success: "el-icon-circle-check",
									error: "el-icon-circle-close"
								}[this.validateState]
							},
							textareaStyle: function() {
								return m()({}, this.textareaCalcStyle, {
									resize: this.resize
								})
							},
							inputSize: function() {
								return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
							},
							inputDisabled: function() {
								return this.disabled || (this.elForm || {}).disabled
							},
							nativeInputValue: function() {
								return null === this.value || void 0 === this.value ? "" : String(this.value)
							},
							showClear: function() {
								return this.clearable && !this.inputDisabled && !this.readonly && this.nativeInputValue && (this.focused || this.hovering)
							},
							showPwdVisible: function() {
								return this.showPassword && !this.inputDisabled && !this.readonly && (!!this.nativeInputValue || this.focused)
							},
							isWordLimitVisible: function() {
								return this.showWordLimit && this.$attrs.maxlength && ("text" === this.type || "textarea" === this.type) && !this.inputDisabled && !this.readonly && !this.showPassword
							},
							upperLimit: function() {
								return this.$attrs.maxlength
							},
							textLength: function() {
								return "number" === typeof this.value ? String(this.value).length : (this.value || "").length
							},
							inputExceed: function() {
								return this.isWordLimitVisible && this.textLength > this.upperLimit
							}
						},
						watch: {
							value: function(e) {
								this.$nextTick(this.resizeTextarea),
								this.validateEvent && this.dispatch("ElFormItem", "el.form.change", [e])
							},
							nativeInputValue: function() {
								this.setNativeInputValue()
							},
							type: function() {
								var e = this;
								this.$nextTick((function() {
									e.setNativeInputValue(),
									e.resizeTextarea(),
									e.updateIconOffset()
								}
								))
							}
						},
						methods: {
							focus: function() {
								this.getInput().focus()
							},
							blur: function() {
								this.getInput().blur()
							},
							getMigratingConfig: function() {
								return {
									props: {
										icon: "icon is removed, use suffix-icon / prefix-icon instead.",
										"on-icon-click": "on-icon-click is removed."
									},
									events: {
										click: "click is removed."
									}
								}
							},
							handleBlur: function(e) {
								this.focused = !1,
								this.$emit("blur", e),
								this.validateEvent && this.dispatch("ElFormItem", "el.form.blur", [this.value])
							},
							select: function() {
								this.getInput().select()
							},
							resizeTextarea: function() {
								if (!this.$isServer) {
									var e = this.autosize
									  , t = this.type;
									if ("textarea" === t)
										if (e) {
											var i = e.minRows
											  , n = e.maxRows;
											this.textareaCalcStyle = p(this.$refs.textarea, i, n)
										} else
											this.textareaCalcStyle = {
												minHeight: p(this.$refs.textarea).minHeight
											}
								}
							},
							setNativeInputValue: function() {
								var e = this.getInput();
								e && e.value !== this.nativeInputValue && (e.value = this.nativeInputValue)
							},
							handleFocus: function(e) {
								this.focused = !0,
								this.$emit("focus", e)
							},
							handleCompositionStart: function(e) {
								this.$emit("compositionstart", e),
								this.isComposing = !0
							},
							handleCompositionUpdate: function(e) {
								this.$emit("compositionupdate", e);
								var t = e.target.value
								  , i = t[t.length - 1] || "";
								this.isComposing = !Object(v["isKorean"])(i)
							},
							handleCompositionEnd: function(e) {
								this.$emit("compositionend", e),
								this.isComposing && (this.isComposing = !1,
								this.handleInput(e))
							},
							handleInput: function(e) {
								this.isComposing || e.target.value !== this.nativeInputValue && (this.$emit("input", e.target.value),
								this.$nextTick(this.setNativeInputValue))
							},
							handleChange: function(e) {
								this.$emit("change", e.target.value)
							},
							calcIconOffset: function(e) {
								var t = [].slice.call(this.$el.querySelectorAll(".el-input__" + e) || []);
								if (t.length) {
									for (var i = null, n = 0; n < t.length; n++)
										if (t[n].parentNode === this.$el) {
											i = t[n];
											break
										}
									if (i) {
										var o = {
											suffix: "append",
											prefix: "prepend"
										}
										  , a = o[e];
										this.$slots[a] ? i.style.transform = "translateX(" + ("suffix" === e ? "-" : "") + this.$el.querySelector(".el-input-group__" + a).offsetWidth + "px)" : i.removeAttribute("style")
									}
								}
							},
							updateIconOffset: function() {
								this.calcIconOffset("prefix"),
								this.calcIconOffset("suffix")
							},
							clear: function() {
								this.$emit("input", ""),
								this.$emit("change", ""),
								this.$emit("clear")
							},
							handlePasswordVisible: function() {
								var e = this;
								this.passwordVisible = !this.passwordVisible,
								this.$nextTick((function() {
									e.focus()
								}
								))
							},
							getInput: function() {
								return this.$refs.input || this.$refs.textarea
							},
							getSuffixVisible: function() {
								return this.$slots.suffix || this.suffixIcon || this.showClear || this.showPassword || this.isWordLimitVisible || this.validateState && this.needStatusIcon
							}
						},
						created: function() {
							this.$on("inputSelect", this.select)
						},
						mounted: function() {
							this.setNativeInputValue(),
							this.resizeTextarea(),
							this.updateIconOffset()
						},
						updated: function() {
							this.$nextTick(this.updateIconOffset)
						}
					}
					  , b = g
					  , _ = i(0)
					  , y = Object(_["a"])(b, n, o, !1, null, null, null);
					y.options.__file = "packages/input/src/input.vue";
					var w = y.exports;
					w.install = function(e) {
						e.component(w.name, w)
					}
					;
					t["default"] = w
				},
				9: function(e, t) {
					e.exports = i(615)
				}
			})
		},
		445: function(e, t, i) {
			"use strict";
			t.__esModule = !0;
			var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			}
			: function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}
			;
			t["default"] = function(e) {
				function t(e) {
					for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
						i[r - 1] = arguments[r];
					return 1 === i.length && "object" === n(i[0]) && (i = i[0]),
					i && i.hasOwnProperty || (i = {}),
					e.replace(a, (function(t, n, a, r) {
						var s = void 0;
						return "{" === e[r - 1] && "}" === e[r + t.length] ? a : (s = (0,
						o.hasOwn)(i, a) ? i[a] : null,
						null === s || void 0 === s ? "" : s)
					}
					))
				}
				return t
			}
			;
			var o = i(104)
			  , a = /(%|)\{([0-9a-zA-Z_]+)\}/g
		},
		802: function(e, t, i) {
			"use strict";
			var n = i(877)
			  , o = u(n)
			  , a = i(144)
			  , r = u(a)
			  , s = i(996)
			  , l = u(s)
			  , c = i(445)
			  , d = u(c);
			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var h = (0,
			d.default)(r.default)
			  , p = o.default
			  , f = !1
			  , m = function() {
				var e = Object.getPrototypeOf(this || r.default).$t;
				if ("function" === typeof e && r.default.locale)
					return f || (f = !0,
					r.default.locale(r.default.config.lang, (0,
					l.default)(p, r.default.locale(r.default.config.lang) || {}, {
						clone: !0
					}))),
					e.apply(this, arguments)
			}
			  , v = function(e, t) {
				var i = m.apply(this, arguments);
				if (null !== i && void 0 !== i)
					return i;
				for (var n = e.split("."), o = p, a = 0, r = n.length; a < r; a++) {
					var s = n[a];
					if (i = o[s],
					a === r - 1)
						return h(i, t);
					if (!i)
						return "";
					o = i
				}
				return ""
			}
			  , g = function(e) {
				p = e || p
			}
			  , b = function(e) {
				m = e || m
			};
			t.ZP = {
				use: g,
				t: v,
				i18n: b
			}
		},
		903: function(e, t) {
			"use strict";
			t.Z = {
				el: {
					colorpicker: {
						confirm: "OK",
						clear: "Clear"
					},
					datepicker: {
						now: "Now",
						today: "Today",
						cancel: "Cancel",
						clear: "Clear",
						confirm: "OK",
						selectDate: "Select date",
						selectTime: "Select time",
						startDate: "Start Date",
						startTime: "Start Time",
						endDate: "End Date",
						endTime: "End Time",
						prevYear: "Previous Year",
						nextYear: "Next Year",
						prevMonth: "Previous Month",
						nextMonth: "Next Month",
						year: "",
						month1: "January",
						month2: "February",
						month3: "March",
						month4: "April",
						month5: "May",
						month6: "June",
						month7: "July",
						month8: "August",
						month9: "September",
						month10: "October",
						month11: "November",
						month12: "December",
						week: "week",
						weeks: {
							sun: "Sun",
							mon: "Mon",
							tue: "Tue",
							wed: "Wed",
							thu: "Thu",
							fri: "Fri",
							sat: "Sat"
						},
						months: {
							jan: "Jan",
							feb: "Feb",
							mar: "Mar",
							apr: "Apr",
							may: "May",
							jun: "Jun",
							jul: "Jul",
							aug: "Aug",
							sep: "Sep",
							oct: "Oct",
							nov: "Nov",
							dec: "Dec"
						}
					},
					select: {
						loading: "Loading",
						noMatch: "No matching data",
						noData: "No data",
						placeholder: "Select"
					},
					cascader: {
						noMatch: "No matching data",
						loading: "Loading",
						placeholder: "Select",
						noData: "No data"
					},
					pagination: {
						goto: "Go to",
						pagesize: "/page",
						total: "Total {total}",
						pageClassifier: ""
					},
					messagebox: {
						title: "Message",
						confirm: "OK",
						cancel: "Cancel",
						error: "Illegal input"
					},
					upload: {
						deleteTip: "press delete to remove",
						delete: "Delete",
						preview: "Preview",
						continue: "Continue"
					},
					table: {
						emptyText: "No Data",
						confirmFilter: "Confirm",
						resetFilter: "Reset",
						clearFilter: "All",
						sumText: "Sum"
					},
					tree: {
						emptyText: "No Data"
					},
					transfer: {
						noMatch: "No matching data",
						noData: "No data",
						titles: ["List 1", "List 2"],
						filterPlaceholder: "Enter keyword",
						noCheckedFormat: "{total} items",
						hasCheckedFormat: "{checked}/{total} checked"
					},
					image: {
						error: "FAILED"
					},
					pageHeader: {
						title: "Back"
					},
					popconfirm: {
						confirmButtonText: "Yes",
						cancelButtonText: "No"
					},
					empty: {
						description: "No Data"
					}
				}
			}
		},
		877: function(e, t) {
			"use strict";
			t.__esModule = !0,
			t["default"] = {
				el: {
					colorpicker: {
						confirm: "确定",
						clear: "清空"
					},
					datepicker: {
						now: "此刻",
						today: "今天",
						cancel: "取消",
						clear: "清空",
						confirm: "确定",
						selectDate: "选择日期",
						selectTime: "选择时间",
						startDate: "开始日期",
						startTime: "开始时间",
						endDate: "结束日期",
						endTime: "结束时间",
						prevYear: "前一年",
						nextYear: "后一年",
						prevMonth: "上个月",
						nextMonth: "下个月",
						year: "年",
						month1: "1 月",
						month2: "2 月",
						month3: "3 月",
						month4: "4 月",
						month5: "5 月",
						month6: "6 月",
						month7: "7 月",
						month8: "8 月",
						month9: "9 月",
						month10: "10 月",
						month11: "11 月",
						month12: "12 月",
						weeks: {
							sun: "日",
							mon: "一",
							tue: "二",
							wed: "三",
							thu: "四",
							fri: "五",
							sat: "六"
						},
						months: {
							jan: "一月",
							feb: "二月",
							mar: "三月",
							apr: "四月",
							may: "五月",
							jun: "六月",
							jul: "七月",
							aug: "八月",
							sep: "九月",
							oct: "十月",
							nov: "十一月",
							dec: "十二月"
						}
					},
					select: {
						loading: "加载中",
						noMatch: "无匹配数据",
						noData: "无数据",
						placeholder: "请选择"
					},
					cascader: {
						noMatch: "无匹配数据",
						loading: "加载中",
						placeholder: "请选择",
						noData: "暂无数据"
					},
					pagination: {
						goto: "前往",
						pagesize: "条/页",
						total: "共 {total} 条",
						pageClassifier: "页"
					},
					messagebox: {
						title: "提示",
						confirm: "确定",
						cancel: "取消",
						error: "输入的数据不合法!"
					},
					upload: {
						deleteTip: "按 delete 键可删除",
						delete: "删除",
						preview: "查看图片",
						continue: "继续上传"
					},
					table: {
						emptyText: "暂无数据",
						confirmFilter: "筛选",
						resetFilter: "重置",
						clearFilter: "全部",
						sumText: "合计"
					},
					tree: {
						emptyText: "暂无数据"
					},
					transfer: {
						noMatch: "无匹配数据",
						noData: "无数据",
						titles: ["列表 1", "列表 2"],
						filterPlaceholder: "请输入搜索内容",
						noCheckedFormat: "共 {total} 项",
						hasCheckedFormat: "已选 {checked}/{total} 项"
					},
					image: {
						error: "加载失败"
					},
					pageHeader: {
						title: "返回"
					},
					popconfirm: {
						confirmButtonText: "确定",
						cancelButtonText: "取消"
					},
					empty: {
						description: "暂无数据"
					}
				}
			}
		},
		477: function(e, t) {
			"use strict";
			function i(e, t, n) {
				this.$children.forEach((function(o) {
					var a = o.$options.componentName;
					a === e ? o.$emit.apply(o, [t].concat(n)) : i.apply(o, [e, t].concat([n]))
				}
				))
			}
			t.__esModule = !0,
			t["default"] = {
				methods: {
					dispatch: function(e, t, i) {
						var n = this.$parent || this.$root
						  , o = n.$options.componentName;
						while (n && (!o || o !== e))
							n = n.$parent,
							n && (o = n.$options.componentName);
						n && n.$emit.apply(n, [t].concat(i))
					},
					broadcast: function(e, t, n) {
						i.call(this, e, t, n)
					}
				}
			}
		},
		618: function(e, t) {
			"use strict";
			t.__esModule = !0,
			t["default"] = function(e) {
				return {
					methods: {
						focus: function() {
							this.$refs[e].focus()
						}
					}
				}
			}
		},
		222: function(e, t, i) {
			"use strict";
			t.__esModule = !0;
			i(104);
			t["default"] = {
				mounted: function() {},
				methods: {
					getMigratingConfig: function() {
						return {
							props: {},
							events: {}
						}
					}
				}
			}
		},
		650: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 77)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				2: function(e, t) {
					e.exports = i(594)
				},
				3: function(e, t) {
					e.exports = i(104)
				},
				5: function(e, t) {
					e.exports = i(499)
				},
				7: function(e, t) {
					e.exports = i(144)
				},
				77: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("span", [i("transition", {
							attrs: {
								name: e.transition
							},
							on: {
								"after-enter": e.handleAfterEnter,
								"after-leave": e.handleAfterLeave
							}
						}, [i("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: !e.disabled && e.showPopper,
								expression: "!disabled && showPopper"
							}],
							ref: "popper",
							staticClass: "el-popover el-popper",
							class: [e.popperClass, e.content && "el-popover--plain"],
							style: {
								width: e.width + "px"
							},
							attrs: {
								role: "tooltip",
								id: e.tooltipId,
								"aria-hidden": e.disabled || !e.showPopper ? "true" : "false"
							}
						}, [e.title ? i("div", {
							staticClass: "el-popover__title",
							domProps: {
								textContent: e._s(e.title)
							}
						}) : e._e(), e._t("default", [e._v(e._s(e.content))])], 2)]), i("span", {
							ref: "wrapper",
							staticClass: "el-popover__reference-wrapper"
						}, [e._t("reference")], 2)], 1)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(5)
					  , r = i.n(a)
					  , s = i(2)
					  , l = i(3)
					  , c = {
						name: "ElPopover",
						mixins: [r.a],
						props: {
							trigger: {
								type: String,
								default: "click",
								validator: function(e) {
									return ["click", "focus", "hover", "manual"].indexOf(e) > -1
								}
							},
							openDelay: {
								type: Number,
								default: 0
							},
							closeDelay: {
								type: Number,
								default: 200
							},
							title: String,
							disabled: Boolean,
							content: String,
							reference: {},
							popperClass: String,
							width: {},
							visibleArrow: {
								default: !0
							},
							arrowOffset: {
								type: Number,
								default: 0
							},
							transition: {
								type: String,
								default: "fade-in-linear"
							},
							tabindex: {
								type: Number,
								default: 0
							}
						},
						computed: {
							tooltipId: function() {
								return "el-popover-" + Object(l["generateId"])()
							}
						},
						watch: {
							showPopper: function(e) {
								this.disabled || (e ? this.$emit("show") : this.$emit("hide"))
							}
						},
						mounted: function() {
							var e = this
							  , t = this.referenceElm = this.reference || this.$refs.reference
							  , i = this.popper || this.$refs.popper;
							!t && this.$refs.wrapper.children && (t = this.referenceElm = this.$refs.wrapper.children[0]),
							t && (Object(s["addClass"])(t, "el-popover__reference"),
							t.setAttribute("aria-describedby", this.tooltipId),
							t.setAttribute("tabindex", this.tabindex),
							i.setAttribute("tabindex", 0),
							"click" !== this.trigger && (Object(s["on"])(t, "focusin", (function() {
								e.handleFocus();
								var i = t.__vue__;
								i && "function" === typeof i.focus && i.focus()
							}
							)),
							Object(s["on"])(i, "focusin", this.handleFocus),
							Object(s["on"])(t, "focusout", this.handleBlur),
							Object(s["on"])(i, "focusout", this.handleBlur)),
							Object(s["on"])(t, "keydown", this.handleKeydown),
							Object(s["on"])(t, "click", this.handleClick)),
							"click" === this.trigger ? (Object(s["on"])(t, "click", this.doToggle),
							Object(s["on"])(document, "click", this.handleDocumentClick)) : "hover" === this.trigger ? (Object(s["on"])(t, "mouseenter", this.handleMouseEnter),
							Object(s["on"])(i, "mouseenter", this.handleMouseEnter),
							Object(s["on"])(t, "mouseleave", this.handleMouseLeave),
							Object(s["on"])(i, "mouseleave", this.handleMouseLeave)) : "focus" === this.trigger && (this.tabindex < 0 && console.warn("[Element Warn][Popover]a negative taindex means that the element cannot be focused by tab key"),
							t.querySelector("input, textarea") ? (Object(s["on"])(t, "focusin", this.doShow),
							Object(s["on"])(t, "focusout", this.doClose)) : (Object(s["on"])(t, "mousedown", this.doShow),
							Object(s["on"])(t, "mouseup", this.doClose)))
						},
						beforeDestroy: function() {
							this.cleanup()
						},
						deactivated: function() {
							this.cleanup()
						},
						methods: {
							doToggle: function() {
								this.showPopper = !this.showPopper
							},
							doShow: function() {
								this.showPopper = !0
							},
							doClose: function() {
								this.showPopper = !1
							},
							handleFocus: function() {
								Object(s["addClass"])(this.referenceElm, "focusing"),
								"click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !0)
							},
							handleClick: function() {
								Object(s["removeClass"])(this.referenceElm, "focusing")
							},
							handleBlur: function() {
								Object(s["removeClass"])(this.referenceElm, "focusing"),
								"click" !== this.trigger && "focus" !== this.trigger || (this.showPopper = !1)
							},
							handleMouseEnter: function() {
								var e = this;
								clearTimeout(this._timer),
								this.openDelay ? this._timer = setTimeout((function() {
									e.showPopper = !0
								}
								), this.openDelay) : this.showPopper = !0
							},
							handleKeydown: function(e) {
								27 === e.keyCode && "manual" !== this.trigger && this.doClose()
							},
							handleMouseLeave: function() {
								var e = this;
								clearTimeout(this._timer),
								this.closeDelay ? this._timer = setTimeout((function() {
									e.showPopper = !1
								}
								), this.closeDelay) : this.showPopper = !1
							},
							handleDocumentClick: function(e) {
								var t = this.reference || this.$refs.reference
								  , i = this.popper || this.$refs.popper;
								!t && this.$refs.wrapper.children && (t = this.referenceElm = this.$refs.wrapper.children[0]),
								this.$el && t && !this.$el.contains(e.target) && !t.contains(e.target) && i && !i.contains(e.target) && (this.showPopper = !1)
							},
							handleAfterEnter: function() {
								this.$emit("after-enter")
							},
							handleAfterLeave: function() {
								this.$emit("after-leave"),
								this.doDestroy()
							},
							cleanup: function() {
								(this.openDelay || this.closeDelay) && clearTimeout(this._timer)
							}
						},
						destroyed: function() {
							var e = this.reference;
							Object(s["off"])(e, "click", this.doToggle),
							Object(s["off"])(e, "mouseup", this.doClose),
							Object(s["off"])(e, "mousedown", this.doShow),
							Object(s["off"])(e, "focusin", this.doShow),
							Object(s["off"])(e, "focusout", this.doClose),
							Object(s["off"])(e, "mousedown", this.doShow),
							Object(s["off"])(e, "mouseup", this.doClose),
							Object(s["off"])(e, "mouseleave", this.handleMouseLeave),
							Object(s["off"])(e, "mouseenter", this.handleMouseEnter),
							Object(s["off"])(document, "click", this.handleDocumentClick)
						}
					}
					  , d = c
					  , u = i(0)
					  , h = Object(u["a"])(d, n, o, !1, null, null, null);
					h.options.__file = "packages/popover/src/main.vue";
					var p = h.exports
					  , f = function(e, t, i) {
						var n = t.expression ? t.value : t.arg
						  , o = i.context.$refs[n];
						o && (Array.isArray(o) ? o[0].$refs.reference = e : o.$refs.reference = e)
					}
					  , m = {
						bind: function(e, t, i) {
							f(e, t, i)
						},
						inserted: function(e, t, i) {
							f(e, t, i)
						}
					}
					  , v = i(7)
					  , g = i.n(v);
					g.a.directive("popover", m),
					p.install = function(e) {
						e.directive("popover", m),
						e.component(p.name, p)
					}
					,
					p.directive = m;
					t["default"] = p
				}
			})
		},
		331: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 89)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				89: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("label", {
							staticClass: "el-radio-button",
							class: [e.size ? "el-radio-button--" + e.size : "", {
								"is-active": e.value === e.label
							}, {
								"is-disabled": e.isDisabled
							}, {
								"is-focus": e.focus
							}],
							attrs: {
								role: "radio",
								"aria-checked": e.value === e.label,
								"aria-disabled": e.isDisabled,
								tabindex: e.tabIndex
							},
							on: {
								keydown: function(t) {
									if (!("button"in t) && e._k(t.keyCode, "space", 32, t.key, [" ", "Spacebar"]))
										return null;
									t.stopPropagation(),
									t.preventDefault(),
									e.value = e.isDisabled ? e.value : e.label
								}
							}
						}, [i("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: e.value,
								expression: "value"
							}],
							staticClass: "el-radio-button__orig-radio",
							attrs: {
								type: "radio",
								name: e.name,
								disabled: e.isDisabled,
								tabindex: "-1",
								autocomplete: "off"
							},
							domProps: {
								value: e.label,
								checked: e._q(e.value, e.label)
							},
							on: {
								change: [function(t) {
									e.value = e.label
								}
								, e.handleChange],
								focus: function(t) {
									e.focus = !0
								},
								blur: function(t) {
									e.focus = !1
								}
							}
						}), i("span", {
							staticClass: "el-radio-button__inner",
							style: e.value === e.label ? e.activeStyle : null,
							on: {
								keydown: function(e) {
									e.stopPropagation()
								}
							}
						}, [e._t("default"), e.$slots.default ? e._e() : [e._v(e._s(e.label))]], 2)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = {
						name: "ElRadioButton",
						mixins: [r.a],
						inject: {
							elForm: {
								default: ""
							},
							elFormItem: {
								default: ""
							}
						},
						props: {
							label: {},
							disabled: Boolean,
							name: String
						},
						data: function() {
							return {
								focus: !1
							}
						},
						computed: {
							value: {
								get: function() {
									return this._radioGroup.value
								},
								set: function(e) {
									this._radioGroup.$emit("input", e)
								}
							},
							_radioGroup: function() {
								var e = this.$parent;
								while (e) {
									if ("ElRadioGroup" === e.$options.componentName)
										return e;
									e = e.$parent
								}
								return !1
							},
							activeStyle: function() {
								return {
									backgroundColor: this._radioGroup.fill || "",
									borderColor: this._radioGroup.fill || "",
									boxShadow: this._radioGroup.fill ? "-1px 0 0 0 " + this._radioGroup.fill : "",
									color: this._radioGroup.textColor || ""
								}
							},
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							size: function() {
								return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size
							},
							isDisabled: function() {
								return this.disabled || this._radioGroup.disabled || (this.elForm || {}).disabled
							},
							tabIndex: function() {
								return this.isDisabled || this._radioGroup && this.value !== this.label ? -1 : 0
							}
						},
						methods: {
							handleChange: function() {
								var e = this;
								this.$nextTick((function() {
									e.dispatch("ElRadioGroup", "handleChange", e.value)
								}
								))
							}
						}
					}
					  , l = s
					  , c = i(0)
					  , d = Object(c["a"])(l, n, o, !1, null, null, null);
					d.options.__file = "packages/radio/src/radio-button.vue";
					var u = d.exports;
					u.install = function(e) {
						e.component(u.name, u)
					}
					;
					t["default"] = u
				}
			})
		},
		337: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 88)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				88: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i(e._elTag, {
							tag: "component",
							staticClass: "el-radio-group",
							attrs: {
								role: "radiogroup"
							},
							on: {
								keydown: e.handleKeydown
							}
						}, [e._t("default")], 2)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = Object.freeze({
						LEFT: 37,
						UP: 38,
						RIGHT: 39,
						DOWN: 40
					})
					  , l = {
						name: "ElRadioGroup",
						componentName: "ElRadioGroup",
						inject: {
							elFormItem: {
								default: ""
							}
						},
						mixins: [r.a],
						props: {
							value: {},
							size: String,
							fill: String,
							textColor: String,
							disabled: Boolean
						},
						computed: {
							_elFormItemSize: function() {
								return (this.elFormItem || {}).elFormItemSize
							},
							_elTag: function() {
								var e = (this.$vnode.data || {}).tag;
								return e && "component" !== e || (e = "div"),
								e
							},
							radioGroupSize: function() {
								return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size
							}
						},
						created: function() {
							var e = this;
							this.$on("handleChange", (function(t) {
								e.$emit("change", t)
							}
							))
						},
						mounted: function() {
							var e = this.$el.querySelectorAll("[type=radio]")
							  , t = this.$el.querySelectorAll("[role=radio]")[0];
							![].some.call(e, (function(e) {
								return e.checked
							}
							)) && t && (t.tabIndex = 0)
						},
						methods: {
							handleKeydown: function(e) {
								var t = e.target
								  , i = "INPUT" === t.nodeName ? "[type=radio]" : "[role=radio]"
								  , n = this.$el.querySelectorAll(i)
								  , o = n.length
								  , a = [].indexOf.call(n, t)
								  , r = this.$el.querySelectorAll("[role=radio]");
								switch (e.keyCode) {
								case s.LEFT:
								case s.UP:
									e.stopPropagation(),
									e.preventDefault(),
									0 === a ? (r[o - 1].click(),
									r[o - 1].focus()) : (r[a - 1].click(),
									r[a - 1].focus());
									break;
								case s.RIGHT:
								case s.DOWN:
									a === o - 1 ? (e.stopPropagation(),
									e.preventDefault(),
									r[0].click(),
									r[0].focus()) : (r[a + 1].click(),
									r[a + 1].focus());
									break;
								default:
									break
								}
							}
						},
						watch: {
							value: function(e) {
								this.dispatch("ElFormItem", "el.form.change", [this.value])
							}
						}
					}
					  , c = l
					  , d = i(0)
					  , u = Object(d["a"])(c, n, o, !1, null, null, null);
					u.options.__file = "packages/radio/src/radio-group.vue";
					var h = u.exports;
					h.install = function(e) {
						e.component(h.name, h)
					}
					;
					t["default"] = h
				}
			})
		},
		652: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 63)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				29: function(e, t) {
					e.exports = i(561)
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				49: function(e, t) {
					e.exports = i(987)
				},
				63: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "el-slider",
							class: {
								"is-vertical": e.vertical,
								"el-slider--with-input": e.showInput
							},
							attrs: {
								role: "slider",
								"aria-valuemin": e.min,
								"aria-valuemax": e.max,
								"aria-orientation": e.vertical ? "vertical" : "horizontal",
								"aria-disabled": e.sliderDisabled
							}
						}, [e.showInput && !e.range ? i("el-input-number", {
							ref: "input",
							staticClass: "el-slider__input",
							attrs: {
								step: e.step,
								disabled: e.sliderDisabled,
								controls: e.showInputControls,
								min: e.min,
								max: e.max,
								debounce: e.debounce,
								size: e.inputSize
							},
							on: {
								change: e.emitChange
							},
							model: {
								value: e.firstValue,
								callback: function(t) {
									e.firstValue = t
								},
								expression: "firstValue"
							}
						}) : e._e(), i("div", {
							ref: "slider",
							staticClass: "el-slider__runway",
							class: {
								"show-input": e.showInput,
								disabled: e.sliderDisabled
							},
							style: e.runwayStyle,
							on: {
								click: e.onSliderClick
							}
						}, [i("div", {
							staticClass: "el-slider__bar",
							style: e.barStyle
						}), i("slider-button", {
							ref: "button1",
							attrs: {
								vertical: e.vertical,
								"tooltip-class": e.tooltipClass
							},
							model: {
								value: e.firstValue,
								callback: function(t) {
									e.firstValue = t
								},
								expression: "firstValue"
							}
						}), e.range ? i("slider-button", {
							ref: "button2",
							attrs: {
								vertical: e.vertical,
								"tooltip-class": e.tooltipClass
							},
							model: {
								value: e.secondValue,
								callback: function(t) {
									e.secondValue = t
								},
								expression: "secondValue"
							}
						}) : e._e(), e._l(e.stops, (function(t, n) {
							return e.showStops ? i("div", {
								key: n,
								staticClass: "el-slider__stop",
								style: e.getStopStyle(t)
							}) : e._e()
						}
						)), e.markList.length > 0 ? [i("div", e._l(e.markList, (function(t, n) {
							return i("div", {
								key: n,
								staticClass: "el-slider__stop el-slider__marks-stop",
								style: e.getStopStyle(t.position)
							})
						}
						)), 0), i("div", {
							staticClass: "el-slider__marks"
						}, e._l(e.markList, (function(t, n) {
							return i("slider-marker", {
								key: n,
								style: e.getStopStyle(t.position),
								attrs: {
									mark: t.mark
								}
							})
						}
						)), 1)] : e._e()], 2)], 1)
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(49)
					  , r = i.n(a)
					  , s = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							ref: "button",
							staticClass: "el-slider__button-wrapper",
							class: {
								hover: e.hovering,
								dragging: e.dragging
							},
							style: e.wrapperStyle,
							attrs: {
								tabindex: "0"
							},
							on: {
								mouseenter: e.handleMouseEnter,
								mouseleave: e.handleMouseLeave,
								mousedown: e.onButtonDown,
								touchstart: e.onButtonDown,
								focus: e.handleMouseEnter,
								blur: e.handleMouseLeave,
								keydown: [function(t) {
									return !("button"in t) && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e.onLeftKeyDown(t)
								}
								, function(t) {
									return !("button"in t) && e._k(t.keyCode, "right", 39, t.key, ["Right", "ArrowRight"]) || "button"in t && 2 !== t.button ? null : e.onRightKeyDown(t)
								}
								, function(t) {
									return !("button"in t) && e._k(t.keyCode, "down", 40, t.key, ["Down", "ArrowDown"]) ? null : (t.preventDefault(),
									e.onLeftKeyDown(t))
								}
								, function(t) {
									return !("button"in t) && e._k(t.keyCode, "up", 38, t.key, ["Up", "ArrowUp"]) ? null : (t.preventDefault(),
									e.onRightKeyDown(t))
								}
								]
							}
						}, [i("el-tooltip", {
							ref: "tooltip",
							attrs: {
								placement: "top",
								"popper-class": e.tooltipClass,
								disabled: !e.showTooltip
							}
						}, [i("span", {
							attrs: {
								slot: "content"
							},
							slot: "content"
						}, [e._v(e._s(e.formatValue))]), i("div", {
							staticClass: "el-slider__button",
							class: {
								hover: e.hovering,
								dragging: e.dragging
							}
						})])], 1)
					}
					  , l = [];
					s._withStripped = !0;
					var c = i(29)
					  , d = i.n(c)
					  , u = {
						name: "ElSliderButton",
						components: {
							ElTooltip: d.a
						},
						props: {
							value: {
								type: Number,
								default: 0
							},
							vertical: {
								type: Boolean,
								default: !1
							},
							tooltipClass: String
						},
						data: function() {
							return {
								hovering: !1,
								dragging: !1,
								isClick: !1,
								startX: 0,
								currentX: 0,
								startY: 0,
								currentY: 0,
								startPosition: 0,
								newPosition: null,
								oldValue: this.value
							}
						},
						computed: {
							disabled: function() {
								return this.$parent.sliderDisabled
							},
							max: function() {
								return this.$parent.max
							},
							min: function() {
								return this.$parent.min
							},
							step: function() {
								return this.$parent.step
							},
							showTooltip: function() {
								return this.$parent.showTooltip
							},
							precision: function() {
								return this.$parent.precision
							},
							currentPosition: function() {
								return (this.value - this.min) / (this.max - this.min) * 100 + "%"
							},
							enableFormat: function() {
								return this.$parent.formatTooltip instanceof Function
							},
							formatValue: function() {
								return this.enableFormat && this.$parent.formatTooltip(this.value) || this.value
							},
							wrapperStyle: function() {
								return this.vertical ? {
									bottom: this.currentPosition
								} : {
									left: this.currentPosition
								}
							}
						},
						watch: {
							dragging: function(e) {
								this.$parent.dragging = e
							}
						},
						methods: {
							displayTooltip: function() {
								this.$refs.tooltip && (this.$refs.tooltip.showPopper = !0)
							},
							hideTooltip: function() {
								this.$refs.tooltip && (this.$refs.tooltip.showPopper = !1)
							},
							handleMouseEnter: function() {
								this.hovering = !0,
								this.displayTooltip()
							},
							handleMouseLeave: function() {
								this.hovering = !1,
								this.hideTooltip()
							},
							onButtonDown: function(e) {
								this.disabled || (e.preventDefault(),
								this.onDragStart(e),
								window.addEventListener("mousemove", this.onDragging),
								window.addEventListener("touchmove", this.onDragging),
								window.addEventListener("mouseup", this.onDragEnd),
								window.addEventListener("touchend", this.onDragEnd),
								window.addEventListener("contextmenu", this.onDragEnd))
							},
							onLeftKeyDown: function() {
								this.disabled || (this.newPosition = parseFloat(this.currentPosition) - this.step / (this.max - this.min) * 100,
								this.setPosition(this.newPosition),
								this.$parent.emitChange())
							},
							onRightKeyDown: function() {
								this.disabled || (this.newPosition = parseFloat(this.currentPosition) + this.step / (this.max - this.min) * 100,
								this.setPosition(this.newPosition),
								this.$parent.emitChange())
							},
							onDragStart: function(e) {
								this.dragging = !0,
								this.isClick = !0,
								"touchstart" === e.type && (e.clientY = e.touches[0].clientY,
								e.clientX = e.touches[0].clientX),
								this.vertical ? this.startY = e.clientY : this.startX = e.clientX,
								this.startPosition = parseFloat(this.currentPosition),
								this.newPosition = this.startPosition
							},
							onDragging: function(e) {
								if (this.dragging) {
									this.isClick = !1,
									this.displayTooltip(),
									this.$parent.resetSize();
									var t = 0;
									"touchmove" === e.type && (e.clientY = e.touches[0].clientY,
									e.clientX = e.touches[0].clientX),
									this.vertical ? (this.currentY = e.clientY,
									t = (this.startY - this.currentY) / this.$parent.sliderSize * 100) : (this.currentX = e.clientX,
									t = (this.currentX - this.startX) / this.$parent.sliderSize * 100),
									this.newPosition = this.startPosition + t,
									this.setPosition(this.newPosition)
								}
							},
							onDragEnd: function() {
								var e = this;
								this.dragging && (setTimeout((function() {
									e.dragging = !1,
									e.hideTooltip(),
									e.isClick || (e.setPosition(e.newPosition),
									e.$parent.emitChange())
								}
								), 0),
								window.removeEventListener("mousemove", this.onDragging),
								window.removeEventListener("touchmove", this.onDragging),
								window.removeEventListener("mouseup", this.onDragEnd),
								window.removeEventListener("touchend", this.onDragEnd),
								window.removeEventListener("contextmenu", this.onDragEnd))
							},
							setPosition: function(e) {
								var t = this;
								if (null !== e && !isNaN(e)) {
									e < 0 ? e = 0 : e > 100 && (e = 100);
									var i = 100 / ((this.max - this.min) / this.step)
									  , n = Math.round(e / i)
									  , o = n * i * (this.max - this.min) * .01 + this.min;
									o = parseFloat(o.toFixed(this.precision)),
									this.$emit("input", o),
									this.$nextTick((function() {
										t.displayTooltip(),
										t.$refs.tooltip && t.$refs.tooltip.updatePopper()
									}
									)),
									this.dragging || this.value === this.oldValue || (this.oldValue = this.value)
								}
							}
						}
					}
					  , h = u
					  , p = i(0)
					  , f = Object(p["a"])(h, s, l, !1, null, null, null);
					f.options.__file = "packages/slider/src/button.vue";
					var m = f.exports
					  , v = {
						name: "ElMarker",
						props: {
							mark: {
								type: [String, Object]
							}
						},
						render: function() {
							var e = arguments[0]
							  , t = "string" === typeof this.mark ? this.mark : this.mark.label;
							return e("div", {
								class: "el-slider__marks-text",
								style: this.mark.style || {}
							}, [t])
						}
					}
					  , g = i(4)
					  , b = i.n(g)
					  , _ = {
						name: "ElSlider",
						mixins: [b.a],
						inject: {
							elForm: {
								default: ""
							}
						},
						props: {
							min: {
								type: Number,
								default: 0
							},
							max: {
								type: Number,
								default: 100
							},
							step: {
								type: Number,
								default: 1
							},
							value: {
								type: [Number, Array],
								default: 0
							},
							showInput: {
								type: Boolean,
								default: !1
							},
							showInputControls: {
								type: Boolean,
								default: !0
							},
							inputSize: {
								type: String,
								default: "small"
							},
							showStops: {
								type: Boolean,
								default: !1
							},
							showTooltip: {
								type: Boolean,
								default: !0
							},
							formatTooltip: Function,
							disabled: {
								type: Boolean,
								default: !1
							},
							range: {
								type: Boolean,
								default: !1
							},
							vertical: {
								type: Boolean,
								default: !1
							},
							height: {
								type: String
							},
							debounce: {
								type: Number,
								default: 300
							},
							label: {
								type: String
							},
							tooltipClass: String,
							marks: Object
						},
						components: {
							ElInputNumber: r.a,
							SliderButton: m,
							SliderMarker: v
						},
						data: function() {
							return {
								firstValue: null,
								secondValue: null,
								oldValue: null,
								dragging: !1,
								sliderSize: 1
							}
						},
						watch: {
							value: function(e, t) {
								this.dragging || Array.isArray(e) && Array.isArray(t) && e.every((function(e, i) {
									return e === t[i]
								}
								)) || this.setValues()
							},
							dragging: function(e) {
								e || this.setValues()
							},
							firstValue: function(e) {
								this.range ? this.$emit("input", [this.minValue, this.maxValue]) : this.$emit("input", e)
							},
							secondValue: function() {
								this.range && this.$emit("input", [this.minValue, this.maxValue])
							},
							min: function() {
								this.setValues()
							},
							max: function() {
								this.setValues()
							}
						},
						methods: {
							valueChanged: function() {
								var e = this;
								return this.range ? ![this.minValue, this.maxValue].every((function(t, i) {
									return t === e.oldValue[i]
								}
								)) : this.value !== this.oldValue
							},
							setValues: function() {
								if (this.min > this.max)
									console.error("[Element Error][Slider]min should not be greater than max.");
								else {
									var e = this.value;
									this.range && Array.isArray(e) ? e[1] < this.min ? this.$emit("input", [this.min, this.min]) : e[0] > this.max ? this.$emit("input", [this.max, this.max]) : e[0] < this.min ? this.$emit("input", [this.min, e[1]]) : e[1] > this.max ? this.$emit("input", [e[0], this.max]) : (this.firstValue = e[0],
									this.secondValue = e[1],
									this.valueChanged() && (this.dispatch("ElFormItem", "el.form.change", [this.minValue, this.maxValue]),
									this.oldValue = e.slice())) : this.range || "number" !== typeof e || isNaN(e) || (e < this.min ? this.$emit("input", this.min) : e > this.max ? this.$emit("input", this.max) : (this.firstValue = e,
									this.valueChanged() && (this.dispatch("ElFormItem", "el.form.change", e),
									this.oldValue = e)))
								}
							},
							setPosition: function(e) {
								var t = this.min + e * (this.max - this.min) / 100;
								if (this.range) {
									var i = void 0;
									i = Math.abs(this.minValue - t) < Math.abs(this.maxValue - t) ? this.firstValue < this.secondValue ? "button1" : "button2" : this.firstValue > this.secondValue ? "button1" : "button2",
									this.$refs[i].setPosition(e)
								} else
									this.$refs.button1.setPosition(e)
							},
							onSliderClick: function(e) {
								if (!this.sliderDisabled && !this.dragging) {
									if (this.resetSize(),
									this.vertical) {
										var t = this.$refs.slider.getBoundingClientRect().bottom;
										this.setPosition((t - e.clientY) / this.sliderSize * 100)
									} else {
										var i = this.$refs.slider.getBoundingClientRect().left;
										this.setPosition((e.clientX - i) / this.sliderSize * 100)
									}
									this.emitChange()
								}
							},
							resetSize: function() {
								this.$refs.slider && (this.sliderSize = this.$refs.slider["client" + (this.vertical ? "Height" : "Width")])
							},
							emitChange: function() {
								var e = this;
								this.$nextTick((function() {
									e.$emit("change", e.range ? [e.minValue, e.maxValue] : e.value)
								}
								))
							},
							getStopStyle: function(e) {
								return this.vertical ? {
									bottom: e + "%"
								} : {
									left: e + "%"
								}
							}
						},
						computed: {
							stops: function() {
								var e = this;
								if (!this.showStops || this.min > this.max)
									return [];
								if (0 === this.step)
									return [];
								for (var t = (this.max - this.min) / this.step, i = 100 * this.step / (this.max - this.min), n = [], o = 1; o < t; o++)
									n.push(o * i);
								return this.range ? n.filter((function(t) {
									return t < 100 * (e.minValue - e.min) / (e.max - e.min) || t > 100 * (e.maxValue - e.min) / (e.max - e.min)
								}
								)) : n.filter((function(t) {
									return t > 100 * (e.firstValue - e.min) / (e.max - e.min)
								}
								))
							},
							markList: function() {
								var e = this;
								if (!this.marks)
									return [];
								var t = Object.keys(this.marks);
								return t.map(parseFloat).sort((function(e, t) {
									return e - t
								}
								)).filter((function(t) {
									return t <= e.max && t >= e.min
								}
								)).map((function(t) {
									return {
										point: t,
										position: 100 * (t - e.min) / (e.max - e.min),
										mark: e.marks[t]
									}
								}
								))
							},
							minValue: function() {
								return Math.min(this.firstValue, this.secondValue)
							},
							maxValue: function() {
								return Math.max(this.firstValue, this.secondValue)
							},
							barSize: function() {
								return this.range ? 100 * (this.maxValue - this.minValue) / (this.max - this.min) + "%" : 100 * (this.firstValue - this.min) / (this.max - this.min) + "%"
							},
							barStart: function() {
								return this.range ? 100 * (this.minValue - this.min) / (this.max - this.min) + "%" : "0%"
							},
							precision: function() {
								var e = [this.min, this.max, this.step].map((function(e) {
									var t = ("" + e).split(".")[1];
									return t ? t.length : 0
								}
								));
								return Math.max.apply(null, e)
							},
							runwayStyle: function() {
								return this.vertical ? {
									height: this.height
								} : {}
							},
							barStyle: function() {
								return this.vertical ? {
									height: this.barSize,
									bottom: this.barStart
								} : {
									width: this.barSize,
									left: this.barStart
								}
							},
							sliderDisabled: function() {
								return this.disabled || (this.elForm || {}).disabled
							}
						},
						mounted: function() {
							var e = void 0;
							this.range ? (Array.isArray(this.value) ? (this.firstValue = Math.max(this.min, this.value[0]),
							this.secondValue = Math.min(this.max, this.value[1])) : (this.firstValue = this.min,
							this.secondValue = this.max),
							this.oldValue = [this.firstValue, this.secondValue],
							e = this.firstValue + "-" + this.secondValue) : ("number" !== typeof this.value || isNaN(this.value) ? this.firstValue = this.min : this.firstValue = Math.min(this.max, Math.max(this.min, this.value)),
							this.oldValue = this.firstValue,
							e = this.firstValue),
							this.$el.setAttribute("aria-valuetext", e),
							this.$el.setAttribute("aria-label", this.label ? this.label : "slider between " + this.min + " and " + this.max),
							this.resetSize(),
							window.addEventListener("resize", this.resetSize)
						},
						beforeDestroy: function() {
							window.removeEventListener("resize", this.resetSize)
						}
					}
					  , y = _
					  , w = Object(p["a"])(y, n, o, !1, null, null, null);
					w.options.__file = "packages/slider/src/main.vue";
					var x = w.exports;
					x.install = function(e) {
						e.component(x.name, x)
					}
					;
					t["default"] = x
				}
			})
		},
		970: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 93)
			}({
				0: function(e, t, i) {
					"use strict";
					function n(e, t, i, n, o, a, r, s) {
						var l, c = "function" === typeof e ? e.options : e;
						if (t && (c.render = t,
						c.staticRenderFns = i,
						c._compiled = !0),
						n && (c.functional = !0),
						a && (c._scopeId = "data-v-" + a),
						r ? (l = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							o && o.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(r)
						}
						,
						c._ssrRegister = l) : o && (l = s ? function() {
							o.call(this, this.$root.$options.shadowRoot)
						}
						: o),
						l)
							if (c.functional) {
								c._injectStyles = l;
								var d = c.render;
								c.render = function(e, t) {
									return l.call(t),
									d(e, t)
								}
							} else {
								var u = c.beforeCreate;
								c.beforeCreate = u ? [].concat(u, l) : [l]
							}
						return {
							exports: e,
							options: c
						}
					}
					i.d(t, "a", (function() {
						return n
					}
					))
				},
				11: function(e, t) {
					e.exports = i(222)
				},
				22: function(e, t) {
					e.exports = i(618)
				},
				4: function(e, t) {
					e.exports = i(477)
				},
				93: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "el-switch",
							class: {
								"is-disabled": e.switchDisabled,
								"is-checked": e.checked
							},
							attrs: {
								role: "switch",
								"aria-checked": e.checked,
								"aria-disabled": e.switchDisabled
							},
							on: {
								click: function(t) {
									return t.preventDefault(),
									e.switchValue(t)
								}
							}
						}, [i("input", {
							ref: "input",
							staticClass: "el-switch__input",
							attrs: {
								type: "checkbox",
								id: e.id,
								name: e.name,
								"true-value": e.activeValue,
								"false-value": e.inactiveValue,
								disabled: e.switchDisabled
							},
							on: {
								change: e.handleChange,
								keydown: function(t) {
									return !("button"in t) && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.switchValue(t)
								}
							}
						}), e.inactiveIconClass || e.inactiveText ? i("span", {
							class: ["el-switch__label", "el-switch__label--left", e.checked ? "" : "is-active"]
						}, [e.inactiveIconClass ? i("i", {
							class: [e.inactiveIconClass]
						}) : e._e(), !e.inactiveIconClass && e.inactiveText ? i("span", {
							attrs: {
								"aria-hidden": e.checked
							}
						}, [e._v(e._s(e.inactiveText))]) : e._e()]) : e._e(), i("span", {
							ref: "core",
							staticClass: "el-switch__core",
							style: {
								width: e.coreWidth + "px"
							}
						}), e.activeIconClass || e.activeText ? i("span", {
							class: ["el-switch__label", "el-switch__label--right", e.checked ? "is-active" : ""]
						}, [e.activeIconClass ? i("i", {
							class: [e.activeIconClass]
						}) : e._e(), !e.activeIconClass && e.activeText ? i("span", {
							attrs: {
								"aria-hidden": !e.checked
							}
						}, [e._v(e._s(e.activeText))]) : e._e()]) : e._e()])
					}
					  , o = [];
					n._withStripped = !0;
					var a = i(4)
					  , r = i.n(a)
					  , s = i(22)
					  , l = i.n(s)
					  , c = i(11)
					  , d = i.n(c)
					  , u = {
						name: "ElSwitch",
						mixins: [l()("input"), d.a, r.a],
						inject: {
							elForm: {
								default: ""
							}
						},
						props: {
							value: {
								type: [Boolean, String, Number],
								default: !1
							},
							disabled: {
								type: Boolean,
								default: !1
							},
							width: {
								type: Number,
								default: 40
							},
							activeIconClass: {
								type: String,
								default: ""
							},
							inactiveIconClass: {
								type: String,
								default: ""
							},
							activeText: String,
							inactiveText: String,
							activeColor: {
								type: String,
								default: ""
							},
							inactiveColor: {
								type: String,
								default: ""
							},
							activeValue: {
								type: [Boolean, String, Number],
								default: !0
							},
							inactiveValue: {
								type: [Boolean, String, Number],
								default: !1
							},
							name: {
								type: String,
								default: ""
							},
							validateEvent: {
								type: Boolean,
								default: !0
							},
							id: String
						},
						data: function() {
							return {
								coreWidth: this.width
							}
						},
						created: function() {
							~[this.activeValue, this.inactiveValue].indexOf(this.value) || this.$emit("input", this.inactiveValue)
						},
						computed: {
							checked: function() {
								return this.value === this.activeValue
							},
							switchDisabled: function() {
								return this.disabled || (this.elForm || {}).disabled
							}
						},
						watch: {
							checked: function() {
								this.$refs.input.checked = this.checked,
								(this.activeColor || this.inactiveColor) && this.setBackgroundColor(),
								this.validateEvent && this.dispatch("ElFormItem", "el.form.change", [this.value])
							}
						},
						methods: {
							handleChange: function(e) {
								var t = this
								  , i = this.checked ? this.inactiveValue : this.activeValue;
								this.$emit("input", i),
								this.$emit("change", i),
								this.$nextTick((function() {
									t.$refs.input && (t.$refs.input.checked = t.checked)
								}
								))
							},
							setBackgroundColor: function() {
								var e = this.checked ? this.activeColor : this.inactiveColor;
								this.$refs.core.style.borderColor = e,
								this.$refs.core.style.backgroundColor = e
							},
							switchValue: function() {
								!this.switchDisabled && this.handleChange()
							},
							getMigratingConfig: function() {
								return {
									props: {
										"on-color": "on-color is renamed to active-color.",
										"off-color": "off-color is renamed to inactive-color.",
										"on-text": "on-text is renamed to active-text.",
										"off-text": "off-text is renamed to inactive-text.",
										"on-value": "on-value is renamed to active-value.",
										"off-value": "off-value is renamed to inactive-value.",
										"on-icon-class": "on-icon-class is renamed to active-icon-class.",
										"off-icon-class": "off-icon-class is renamed to inactive-icon-class."
									}
								}
							}
						},
						mounted: function() {
							this.coreWidth = this.width || 40,
							(this.activeColor || this.inactiveColor) && this.setBackgroundColor(),
							this.$refs.input.checked = this.checked
						}
					}
					  , h = u
					  , p = i(0)
					  , f = Object(p["a"])(h, n, o, !1, null, null, null);
					f.options.__file = "packages/switch/src/component.vue";
					var m = f.exports;
					m.install = function(e) {
						e.component(m.name, m)
					}
					;
					t["default"] = m
				}
			})
		},
		561: function(e, t, i) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						enumerable: !0,
						get: n
					})
				}
				,
				i.r = function(e) {
					"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
						value: "Module"
					}),
					Object.defineProperty(e, "__esModule", {
						value: !0
					})
				}
				,
				i.t = function(e, t) {
					if (1 & t && (e = i(e)),
					8 & t)
						return e;
					if (4 & t && "object" === typeof e && e && e.__esModule)
						return e;
					var n = Object.create(null);
					if (i.r(n),
					Object.defineProperty(n, "default", {
						enumerable: !0,
						value: e
					}),
					2 & t && "string" != typeof e)
						for (var o in e)
							i.d(n, o, function(t) {
								return e[t]
							}
							.bind(null, o));
					return n
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "/dist/",
				i(i.s = 136)
			}({
				136: function(e, t, i) {
					"use strict";
					i.r(t);
					var n = i(5)
					  , o = i.n(n)
					  , a = i(19)
					  , r = i.n(a)
					  , s = i(2)
					  , l = i(3)
					  , c = i(7)
					  , d = i.n(c)
					  , u = {
						name: "ElTooltip",
						mixins: [o.a],
						props: {
							openDelay: {
								type: Number,
								default: 0
							},
							disabled: Boolean,
							manual: Boolean,
							effect: {
								type: String,
								default: "dark"
							},
							arrowOffset: {
								type: Number,
								default: 0
							},
							popperClass: String,
							content: String,
							visibleArrow: {
								default: !0
							},
							transition: {
								type: String,
								default: "el-fade-in-linear"
							},
							popperOptions: {
								default: function() {
									return {
										boundariesPadding: 10,
										gpuAcceleration: !1
									}
								}
							},
							enterable: {
								type: Boolean,
								default: !0
							},
							hideAfter: {
								type: Number,
								default: 0
							},
							tabindex: {
								type: Number,
								default: 0
							}
						},
						data: function() {
							return {
								tooltipId: "el-tooltip-" + Object(l["generateId"])(),
								timeoutPending: null,
								focusing: !1
							}
						},
						beforeCreate: function() {
							var e = this;
							this.$isServer || (this.popperVM = new d.a({
								data: {
									node: ""
								},
								render: function(e) {
									return this.node
								}
							}).$mount(),
							this.debounceClose = r()(200, (function() {
								return e.handleClosePopper()
							}
							)))
						},
						render: function(e) {
							var t = this;
							this.popperVM && (this.popperVM.node = e("transition", {
								attrs: {
									name: this.transition
								},
								on: {
									afterLeave: this.doDestroy
								}
							}, [e("div", {
								on: {
									mouseleave: function() {
										t.setExpectedState(!1),
										t.debounceClose()
									},
									mouseenter: function() {
										t.setExpectedState(!0)
									}
								},
								ref: "popper",
								attrs: {
									role: "tooltip",
									id: this.tooltipId,
									"aria-hidden": this.disabled || !this.showPopper ? "true" : "false"
								},
								directives: [{
									name: "show",
									value: !this.disabled && this.showPopper
								}],
								class: ["el-tooltip__popper", "is-" + this.effect, this.popperClass]
							}, [this.$slots.content || this.content])]));
							var i = this.getFirstElement();
							if (!i)
								return null;
							var n = i.data = i.data || {};
							return n.staticClass = this.addTooltipClass(n.staticClass),
							i
						},
						mounted: function() {
							var e = this;
							this.referenceElm = this.$el,
							1 === this.$el.nodeType && (this.$el.setAttribute("aria-describedby", this.tooltipId),
							this.$el.setAttribute("tabindex", this.tabindex),
							Object(s["on"])(this.referenceElm, "mouseenter", this.show),
							Object(s["on"])(this.referenceElm, "mouseleave", this.hide),
							Object(s["on"])(this.referenceElm, "focus", (function() {
								if (e.$slots.default && e.$slots.default.length) {
									var t = e.$slots.default[0].componentInstance;
									t && t.focus ? t.focus() : e.handleFocus()
								} else
									e.handleFocus()
							}
							)),
							Object(s["on"])(this.referenceElm, "blur", this.handleBlur),
							Object(s["on"])(this.referenceElm, "click", this.removeFocusing)),
							this.value && this.popperVM && this.popperVM.$nextTick((function() {
								e.value && e.updatePopper()
							}
							))
						},
						watch: {
							focusing: function(e) {
								e ? Object(s["addClass"])(this.referenceElm, "focusing") : Object(s["removeClass"])(this.referenceElm, "focusing")
							}
						},
						methods: {
							show: function() {
								this.setExpectedState(!0),
								this.handleShowPopper()
							},
							hide: function() {
								this.setExpectedState(!1),
								this.debounceClose()
							},
							handleFocus: function() {
								this.focusing = !0,
								this.show()
							},
							handleBlur: function() {
								this.focusing = !1,
								this.hide()
							},
							removeFocusing: function() {
								this.focusing = !1
							},
							addTooltipClass: function(e) {
								return e ? "el-tooltip " + e.replace("el-tooltip", "") : "el-tooltip"
							},
							handleShowPopper: function() {
								var e = this;
								this.expectedState && !this.manual && (clearTimeout(this.timeout),
								this.timeout = setTimeout((function() {
									e.showPopper = !0
								}
								), this.openDelay),
								this.hideAfter > 0 && (this.timeoutPending = setTimeout((function() {
									e.showPopper = !1
								}
								), this.hideAfter)))
							},
							handleClosePopper: function() {
								this.enterable && this.expectedState || this.manual || (clearTimeout(this.timeout),
								this.timeoutPending && clearTimeout(this.timeoutPending),
								this.showPopper = !1,
								this.disabled && this.doDestroy())
							},
							setExpectedState: function(e) {
								!1 === e && clearTimeout(this.timeoutPending),
								this.expectedState = e
							},
							getFirstElement: function() {
								var e = this.$slots.default;
								if (!Array.isArray(e))
									return null;
								for (var t = null, i = 0; i < e.length; i++)
									if (e[i] && e[i].tag) {
										t = e[i];
										break
									}
								return t
							}
						},
						beforeDestroy: function() {
							this.popperVM && this.popperVM.$destroy()
						},
						destroyed: function() {
							var e = this.referenceElm;
							1 === e.nodeType && (Object(s["off"])(e, "mouseenter", this.show),
							Object(s["off"])(e, "mouseleave", this.hide),
							Object(s["off"])(e, "focus", this.handleFocus),
							Object(s["off"])(e, "blur", this.handleBlur),
							Object(s["off"])(e, "click", this.removeFocusing))
						},
						install: function(e) {
							e.component(u.name, u)
						}
					};
					t["default"] = u
				},
				19: function(e, t) {
					e.exports = i(823)
				},
				2: function(e, t) {
					e.exports = i(594)
				},
				3: function(e, t) {
					e.exports = i(104)
				},
				5: function(e, t) {
					e.exports = i(499)
				},
				7: function(e, t) {
					e.exports = i(144)
				}
			})
		},
		80: function(e, t, i) {
			"use strict";
			t.__esModule = !0;
			var n = i(144)
			  , o = r(n)
			  , a = i(594);
			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = []
			  , l = "@@clickoutsideContext"
			  , c = void 0
			  , d = 0;
			function u(e, t, i) {
				return function() {
					var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
					  , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					!(i && i.context && n.target && o.target) || e.contains(n.target) || e.contains(o.target) || e === n.target || i.context.popperElm && (i.context.popperElm.contains(n.target) || i.context.popperElm.contains(o.target)) || (t.expression && e[l].methodName && i.context[e[l].methodName] ? i.context[e[l].methodName]() : e[l].bindingFn && e[l].bindingFn())
				}
			}
			!o.default.prototype.$isServer && (0,
			a.on)(document, "mousedown", (function(e) {
				return c = e
			}
			)),
			!o.default.prototype.$isServer && (0,
			a.on)(document, "mouseup", (function(e) {
				s.forEach((function(t) {
					return t[l].documentHandler(e, c)
				}
				))
			}
			)),
			t["default"] = {
				bind: function(e, t, i) {
					s.push(e);
					var n = d++;
					e[l] = {
						id: n,
						documentHandler: u(e, t, i),
						methodName: t.expression,
						bindingFn: t.value
					}
				},
				update: function(e, t, i) {
					e[l].documentHandler = u(e, t, i),
					e[l].methodName = t.expression,
					e[l].bindingFn = t.value
				},
				unbind: function(e) {
					for (var t = s.length, i = 0; i < t; i++)
						if (s[i][l].id === e[l].id) {
							s.splice(i, 1);
							break
						}
					delete e[l]
				}
			}
		},
		594: function(e, t, i) {
			"use strict";
			t.__esModule = !0,
			t.isInContainer = t.getScrollContainer = t.isScroll = t.getStyle = t.once = t.off = t.on = void 0;
			var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			}
			: function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}
			;
			t.hasClass = m,
			t.addClass = v,
			t.removeClass = g,
			t.setStyle = _;
			var o = i(144)
			  , a = r(o);
			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a.default.prototype.$isServer
			  , l = /([\:\-\_]+(.))/g
			  , c = /^moz([A-Z])/
			  , d = s ? 0 : Number(document.documentMode)
			  , u = function(e) {
				return (e || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "")
			}
			  , h = function(e) {
				return e.replace(l, (function(e, t, i, n) {
					return n ? i.toUpperCase() : i
				}
				)).replace(c, "Moz$1")
			}
			  , p = t.on = function() {
				return !s && document.addEventListener ? function(e, t, i) {
					e && t && i && e.addEventListener(t, i, !1)
				}
				: function(e, t, i) {
					e && t && i && e.attachEvent("on" + t, i)
				}
			}()
			  , f = t.off = function() {
				return !s && document.removeEventListener ? function(e, t, i) {
					e && t && e.removeEventListener(t, i, !1)
				}
				: function(e, t, i) {
					e && t && e.detachEvent("on" + t, i)
				}
			}();
			t.once = function(e, t, i) {
				var n = function n() {
					i && i.apply(this, arguments),
					f(e, t, n)
				};
				p(e, t, n)
			}
			;
			function m(e, t) {
				if (!e || !t)
					return !1;
				if (-1 !== t.indexOf(" "))
					throw new Error("className should not contain space.");
				return e.classList ? e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1
			}
			function v(e, t) {
				if (e) {
					for (var i = e.className, n = (t || "").split(" "), o = 0, a = n.length; o < a; o++) {
						var r = n[o];
						r && (e.classList ? e.classList.add(r) : m(e, r) || (i += " " + r))
					}
					e.classList || e.setAttribute("class", i)
				}
			}
			function g(e, t) {
				if (e && t) {
					for (var i = t.split(" "), n = " " + e.className + " ", o = 0, a = i.length; o < a; o++) {
						var r = i[o];
						r && (e.classList ? e.classList.remove(r) : m(e, r) && (n = n.replace(" " + r + " ", " ")))
					}
					e.classList || e.setAttribute("class", u(n))
				}
			}
			var b = t.getStyle = d < 9 ? function(e, t) {
				if (!s) {
					if (!e || !t)
						return null;
					t = h(t),
					"float" === t && (t = "styleFloat");
					try {
						switch (t) {
						case "opacity":
							try {
								return e.filters.item("alpha").opacity / 100
							} catch (i) {
								return 1
							}
						default:
							return e.style[t] || e.currentStyle ? e.currentStyle[t] : null
						}
					} catch (i) {
						return e.style[t]
					}
				}
			}
			: function(e, t) {
				if (!s) {
					if (!e || !t)
						return null;
					t = h(t),
					"float" === t && (t = "cssFloat");
					try {
						var i = document.defaultView.getComputedStyle(e, "");
						return e.style[t] || i ? i[t] : null
					} catch (n) {
						return e.style[t]
					}
				}
			}
			;
			function _(e, t, i) {
				if (e && t)
					if ("object" === ("undefined" === typeof t ? "undefined" : n(t)))
						for (var o in t)
							t.hasOwnProperty(o) && _(e, o, t[o]);
					else
						t = h(t),
						"opacity" === t && d < 9 ? e.style.filter = isNaN(i) ? "" : "alpha(opacity=" + 100 * i + ")" : e.style[t] = i
			}
			var y = t.isScroll = function(e, t) {
				if (!s) {
					var i = null !== t && void 0 !== t
					  , n = b(e, i ? t ? "overflow-y" : "overflow-x" : "overflow");
					return n.match(/(scroll|auto|overlay)/)
				}
			}
			;
			t.getScrollContainer = function(e, t) {
				if (!s) {
					var i = e;
					while (i) {
						if ([window, document, document.documentElement].includes(i))
							return window;
						if (y(i, t))
							return i;
						i = i.parentNode
					}
					return i
				}
			}
			,
			t.isInContainer = function(e, t) {
				if (s || !e || !t)
					return !1;
				var i = e.getBoundingClientRect()
				  , n = void 0;
				return n = [window, document, document.documentElement, null, void 0].includes(t) ? {
					top: 0,
					right: window.innerWidth,
					bottom: window.innerHeight,
					left: 0
				} : t.getBoundingClientRect(),
				i.top < n.bottom && i.bottom > n.top && i.right > n.left && i.left < n.right
			}
		},
		615: function(e, t) {
			"use strict";
			t.__esModule = !0,
			t["default"] = function(e) {
				for (var t = 1, i = arguments.length; t < i; t++) {
					var n = arguments[t] || {};
					for (var o in n)
						if (n.hasOwnProperty(o)) {
							var a = n[o];
							void 0 !== a && (e[o] = a)
						}
				}
				return e
			}
		},
		335: function(e, t, i) {
			"use strict";
			var n, o;
			"function" === typeof Symbol && Symbol.iterator;
			(function(a, r) {
				n = r,
				o = "function" === typeof n ? n.call(t, i, t, e) : n,
				void 0 === o || (e.exports = o)
			}
			)(0, (function() {
				var e = window
				  , t = {
					placement: "bottom",
					gpuAcceleration: !0,
					offset: 0,
					boundariesElement: "viewport",
					boundariesPadding: 5,
					preventOverflowOrder: ["left", "right", "top", "bottom"],
					flipBehavior: "flip",
					arrowElement: "[x-arrow]",
					arrowOffset: 0,
					modifiers: ["shift", "offset", "preventOverflow", "keepTogether", "arrow", "flip", "applyStyle"],
					modifiersIgnored: [],
					forceAbsolute: !1
				};
				function i(e, i, n) {
					this._reference = e.jquery ? e[0] : e,
					this.state = {};
					var o = "undefined" === typeof i || null === i
					  , a = i && "[object Object]" === Object.prototype.toString.call(i);
					return this._popper = o || a ? this.parse(a ? i : {}) : i.jquery ? i[0] : i,
					this._options = Object.assign({}, t, n),
					this._options.modifiers = this._options.modifiers.map(function(e) {
						if (-1 === this._options.modifiersIgnored.indexOf(e))
							return "applyStyle" === e && this._popper.setAttribute("x-placement", this._options.placement),
							this.modifiers[e] || e
					}
					.bind(this)),
					this.state.position = this._getPosition(this._popper, this._reference),
					u(this._popper, {
						position: this.state.position,
						top: 0
					}),
					this.update(),
					this._setupEventListeners(),
					this
				}
				function n(t) {
					var i = t.style.display
					  , n = t.style.visibility;
					t.style.display = "block",
					t.style.visibility = "hidden";
					t.offsetWidth;
					var o = e.getComputedStyle(t)
					  , a = parseFloat(o.marginTop) + parseFloat(o.marginBottom)
					  , r = parseFloat(o.marginLeft) + parseFloat(o.marginRight)
					  , s = {
						width: t.offsetWidth + r,
						height: t.offsetHeight + a
					};
					return t.style.display = i,
					t.style.visibility = n,
					s
				}
				function o(e) {
					var t = {
						left: "right",
						right: "left",
						bottom: "top",
						top: "bottom"
					};
					return e.replace(/left|right|bottom|top/g, (function(e) {
						return t[e]
					}
					))
				}
				function a(e) {
					var t = Object.assign({}, e);
					return t.right = t.left + t.width,
					t.bottom = t.top + t.height,
					t
				}
				function r(e, t) {
					var i, n = 0;
					for (i in e) {
						if (e[i] === t)
							return n;
						n++
					}
					return null
				}
				function s(t, i) {
					var n = e.getComputedStyle(t, null);
					return n[i]
				}
				function l(t) {
					var i = t.offsetParent;
					return i !== e.document.body && i ? i : e.document.documentElement
				}
				function c(t) {
					var i = t.parentNode;
					return i ? i === e.document ? e.document.body.scrollTop || e.document.body.scrollLeft ? e.document.body : e.document.documentElement : -1 !== ["scroll", "auto"].indexOf(s(i, "overflow")) || -1 !== ["scroll", "auto"].indexOf(s(i, "overflow-x")) || -1 !== ["scroll", "auto"].indexOf(s(i, "overflow-y")) ? i : c(t.parentNode) : t
				}
				function d(t) {
					return t !== e.document.body && ("fixed" === s(t, "position") || (t.parentNode ? d(t.parentNode) : t))
				}
				function u(e, t) {
					function i(e) {
						return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
					}
					Object.keys(t).forEach((function(n) {
						var o = "";
						-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && i(t[n]) && (o = "px"),
						e.style[n] = t[n] + o
					}
					))
				}
				function h(e) {
					var t = {};
					return e && "[object Function]" === t.toString.call(e)
				}
				function p(e) {
					var t = {
						width: e.offsetWidth,
						height: e.offsetHeight,
						left: e.offsetLeft,
						top: e.offsetTop
					};
					return t.right = t.left + t.width,
					t.bottom = t.top + t.height,
					t
				}
				function f(e) {
					var t = e.getBoundingClientRect()
					  , i = -1 != navigator.userAgent.indexOf("MSIE")
					  , n = i && "HTML" === e.tagName ? -e.scrollTop : t.top;
					return {
						left: t.left,
						top: n,
						right: t.right,
						bottom: t.bottom,
						width: t.right - t.left,
						height: t.bottom - n
					}
				}
				function m(e, t, i) {
					var n = f(e)
					  , o = f(t);
					if (i) {
						var a = c(t);
						o.top += a.scrollTop,
						o.bottom += a.scrollTop,
						o.left += a.scrollLeft,
						o.right += a.scrollLeft
					}
					var r = {
						top: n.top - o.top,
						left: n.left - o.left,
						bottom: n.top - o.top + n.height,
						right: n.left - o.left + n.width,
						width: n.width,
						height: n.height
					};
					return r
				}
				function v(t) {
					for (var i = ["", "ms", "webkit", "moz", "o"], n = 0; n < i.length; n++) {
						var o = i[n] ? i[n] + t.charAt(0).toUpperCase() + t.slice(1) : t;
						if ("undefined" !== typeof e.document.body.style[o])
							return o
					}
					return null
				}
				return i.prototype.destroy = function() {
					return this._popper.removeAttribute("x-placement"),
					this._popper.style.left = "",
					this._popper.style.position = "",
					this._popper.style.top = "",
					this._popper.style[v("transform")] = "",
					this._removeEventListeners(),
					this._options.removeOnDestroy && this._popper.remove(),
					this
				}
				,
				i.prototype.update = function() {
					var e = {
						instance: this,
						styles: {}
					};
					e.placement = this._options.placement,
					e._originalPlacement = this._options.placement,
					e.offsets = this._getOffsets(this._popper, this._reference, e.placement),
					e.boundaries = this._getBoundaries(e, this._options.boundariesPadding, this._options.boundariesElement),
					e = this.runModifiers(e, this._options.modifiers),
					"function" === typeof this.state.updateCallback && this.state.updateCallback(e)
				}
				,
				i.prototype.onCreate = function(e) {
					return e(this),
					this
				}
				,
				i.prototype.onUpdate = function(e) {
					return this.state.updateCallback = e,
					this
				}
				,
				i.prototype.parse = function(t) {
					var i = {
						tagName: "div",
						classNames: ["popper"],
						attributes: [],
						parent: e.document.body,
						content: "",
						contentType: "text",
						arrowTagName: "div",
						arrowClassNames: ["popper__arrow"],
						arrowAttributes: ["x-arrow"]
					};
					t = Object.assign({}, i, t);
					var n = e.document
					  , o = n.createElement(t.tagName);
					if (s(o, t.classNames),
					l(o, t.attributes),
					"node" === t.contentType ? o.appendChild(t.content.jquery ? t.content[0] : t.content) : "html" === t.contentType ? o.innerHTML = t.content : o.textContent = t.content,
					t.arrowTagName) {
						var a = n.createElement(t.arrowTagName);
						s(a, t.arrowClassNames),
						l(a, t.arrowAttributes),
						o.appendChild(a)
					}
					var r = t.parent.jquery ? t.parent[0] : t.parent;
					if ("string" === typeof r) {
						if (r = n.querySelectorAll(t.parent),
						r.length > 1 && console.warn("WARNING: the given `parent` query(" + t.parent + ") matched more than one element, the first one will be used"),
						0 === r.length)
							throw "ERROR: the given `parent` doesn't exists!";
						r = r[0]
					}
					return r.length > 1 && r instanceof Element === !1 && (console.warn("WARNING: you have passed as parent a list of elements, the first one will be used"),
					r = r[0]),
					r.appendChild(o),
					o;
					function s(e, t) {
						t.forEach((function(t) {
							e.classList.add(t)
						}
						))
					}
					function l(e, t) {
						t.forEach((function(t) {
							e.setAttribute(t.split(":")[0], t.split(":")[1] || "")
						}
						))
					}
				}
				,
				i.prototype._getPosition = function(e, t) {
					var i = l(t);
					if (this._options.forceAbsolute)
						return "absolute";
					var n = d(t, i);
					return n ? "fixed" : "absolute"
				}
				,
				i.prototype._getOffsets = function(e, t, i) {
					i = i.split("-")[0];
					var o = {};
					o.position = this.state.position;
					var a = "fixed" === o.position
					  , r = m(t, l(e), a)
					  , s = n(e);
					return -1 !== ["right", "left"].indexOf(i) ? (o.top = r.top + r.height / 2 - s.height / 2,
					o.left = "left" === i ? r.left - s.width : r.right) : (o.left = r.left + r.width / 2 - s.width / 2,
					o.top = "top" === i ? r.top - s.height : r.bottom),
					o.width = s.width,
					o.height = s.height,
					{
						popper: o,
						reference: r
					}
				}
				,
				i.prototype._setupEventListeners = function() {
					if (this.state.updateBound = this.update.bind(this),
					e.addEventListener("resize", this.state.updateBound),
					"window" !== this._options.boundariesElement) {
						var t = c(this._reference);
						t !== e.document.body && t !== e.document.documentElement || (t = e),
						t.addEventListener("scroll", this.state.updateBound),
						this.state.scrollTarget = t
					}
				}
				,
				i.prototype._removeEventListeners = function() {
					e.removeEventListener("resize", this.state.updateBound),
					"window" !== this._options.boundariesElement && this.state.scrollTarget && (this.state.scrollTarget.removeEventListener("scroll", this.state.updateBound),
					this.state.scrollTarget = null),
					this.state.updateBound = null
				}
				,
				i.prototype._getBoundaries = function(t, i, n) {
					var o, a, r = {};
					if ("window" === n) {
						var s = e.document.body
						  , d = e.document.documentElement;
						a = Math.max(s.scrollHeight, s.offsetHeight, d.clientHeight, d.scrollHeight, d.offsetHeight),
						o = Math.max(s.scrollWidth, s.offsetWidth, d.clientWidth, d.scrollWidth, d.offsetWidth),
						r = {
							top: 0,
							right: o,
							bottom: a,
							left: 0
						}
					} else if ("viewport" === n) {
						var u = l(this._popper)
						  , h = c(this._popper)
						  , f = p(u)
						  , m = function(e) {
							return e == document.body ? Math.max(document.documentElement.scrollTop, document.body.scrollTop) : e.scrollTop
						}
						  , v = function(e) {
							return e == document.body ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft) : e.scrollLeft
						}
						  , g = "fixed" === t.offsets.popper.position ? 0 : m(h)
						  , b = "fixed" === t.offsets.popper.position ? 0 : v(h);
						r = {
							top: 0 - (f.top - g),
							right: e.document.documentElement.clientWidth - (f.left - b),
							bottom: e.document.documentElement.clientHeight - (f.top - g),
							left: 0 - (f.left - b)
						}
					} else
						r = l(this._popper) === n ? {
							top: 0,
							left: 0,
							right: n.clientWidth,
							bottom: n.clientHeight
						} : p(n);
					return r.left += i,
					r.right -= i,
					r.top = r.top + i,
					r.bottom = r.bottom - i,
					r
				}
				,
				i.prototype.runModifiers = function(e, t, i) {
					var n = t.slice();
					return void 0 !== i && (n = this._options.modifiers.slice(0, r(this._options.modifiers, i))),
					n.forEach(function(t) {
						h(t) && (e = t.call(this, e))
					}
					.bind(this)),
					e
				}
				,
				i.prototype.isModifierRequired = function(e, t) {
					var i = r(this._options.modifiers, e);
					return !!this._options.modifiers.slice(0, i).filter((function(e) {
						return e === t
					}
					)).length
				}
				,
				i.prototype.modifiers = {},
				i.prototype.modifiers.applyStyle = function(e) {
					var t, i = {
						position: e.offsets.popper.position
					}, n = Math.round(e.offsets.popper.left), o = Math.round(e.offsets.popper.top);
					return this._options.gpuAcceleration && (t = v("transform")) ? (i[t] = "translate3d(" + n + "px, " + o + "px, 0)",
					i.top = 0,
					i.left = 0) : (i.left = n,
					i.top = o),
					Object.assign(i, e.styles),
					u(this._popper, i),
					this._popper.setAttribute("x-placement", e.placement),
					this.isModifierRequired(this.modifiers.applyStyle, this.modifiers.arrow) && e.offsets.arrow && u(e.arrowElement, e.offsets.arrow),
					e
				}
				,
				i.prototype.modifiers.shift = function(e) {
					var t = e.placement
					  , i = t.split("-")[0]
					  , n = t.split("-")[1];
					if (n) {
						var o = e.offsets.reference
						  , r = a(e.offsets.popper)
						  , s = {
							y: {
								start: {
									top: o.top
								},
								end: {
									top: o.top + o.height - r.height
								}
							},
							x: {
								start: {
									left: o.left
								},
								end: {
									left: o.left + o.width - r.width
								}
							}
						}
						  , l = -1 !== ["bottom", "top"].indexOf(i) ? "x" : "y";
						e.offsets.popper = Object.assign(r, s[l][n])
					}
					return e
				}
				,
				i.prototype.modifiers.preventOverflow = function(e) {
					var t = this._options.preventOverflowOrder
					  , i = a(e.offsets.popper)
					  , n = {
						left: function() {
							var t = i.left;
							return i.left < e.boundaries.left && (t = Math.max(i.left, e.boundaries.left)),
							{
								left: t
							}
						},
						right: function() {
							var t = i.left;
							return i.right > e.boundaries.right && (t = Math.min(i.left, e.boundaries.right - i.width)),
							{
								left: t
							}
						},
						top: function() {
							var t = i.top;
							return i.top < e.boundaries.top && (t = Math.max(i.top, e.boundaries.top)),
							{
								top: t
							}
						},
						bottom: function() {
							var t = i.top;
							return i.bottom > e.boundaries.bottom && (t = Math.min(i.top, e.boundaries.bottom - i.height)),
							{
								top: t
							}
						}
					};
					return t.forEach((function(t) {
						e.offsets.popper = Object.assign(i, n[t]())
					}
					)),
					e
				}
				,
				i.prototype.modifiers.keepTogether = function(e) {
					var t = a(e.offsets.popper)
					  , i = e.offsets.reference
					  , n = Math.floor;
					return t.right < n(i.left) && (e.offsets.popper.left = n(i.left) - t.width),
					t.left > n(i.right) && (e.offsets.popper.left = n(i.right)),
					t.bottom < n(i.top) && (e.offsets.popper.top = n(i.top) - t.height),
					t.top > n(i.bottom) && (e.offsets.popper.top = n(i.bottom)),
					e
				}
				,
				i.prototype.modifiers.flip = function(e) {
					if (!this.isModifierRequired(this.modifiers.flip, this.modifiers.preventOverflow))
						return console.warn("WARNING: preventOverflow modifier is required by flip modifier in order to work, be sure to include it before flip!"),
						e;
					if (e.flipped && e.placement === e._originalPlacement)
						return e;
					var t = e.placement.split("-")[0]
					  , i = o(t)
					  , n = e.placement.split("-")[1] || ""
					  , r = [];
					return r = "flip" === this._options.flipBehavior ? [t, i] : this._options.flipBehavior,
					r.forEach(function(s, l) {
						if (t === s && r.length !== l + 1) {
							t = e.placement.split("-")[0],
							i = o(t);
							var c = a(e.offsets.popper)
							  , d = -1 !== ["right", "bottom"].indexOf(t);
							(d && Math.floor(e.offsets.reference[t]) > Math.floor(c[i]) || !d && Math.floor(e.offsets.reference[t]) < Math.floor(c[i])) && (e.flipped = !0,
							e.placement = r[l + 1],
							n && (e.placement += "-" + n),
							e.offsets.popper = this._getOffsets(this._popper, this._reference, e.placement).popper,
							e = this.runModifiers(e, this._options.modifiers, this._flip))
						}
					}
					.bind(this)),
					e
				}
				,
				i.prototype.modifiers.offset = function(e) {
					var t = this._options.offset
					  , i = e.offsets.popper;
					return -1 !== e.placement.indexOf("left") ? i.top -= t : -1 !== e.placement.indexOf("right") ? i.top += t : -1 !== e.placement.indexOf("top") ? i.left -= t : -1 !== e.placement.indexOf("bottom") && (i.left += t),
					e
				}
				,
				i.prototype.modifiers.arrow = function(e) {
					var t = this._options.arrowElement
					  , i = this._options.arrowOffset;
					if ("string" === typeof t && (t = this._popper.querySelector(t)),
					!t)
						return e;
					if (!this._popper.contains(t))
						return console.warn("WARNING: `arrowElement` must be child of its popper element!"),
						e;
					if (!this.isModifierRequired(this.modifiers.arrow, this.modifiers.keepTogether))
						return console.warn("WARNING: keepTogether modifier is required by arrow modifier in order to work, be sure to include it before arrow!"),
						e;
					var o = {}
					  , r = e.placement.split("-")[0]
					  , s = a(e.offsets.popper)
					  , l = e.offsets.reference
					  , c = -1 !== ["left", "right"].indexOf(r)
					  , d = c ? "height" : "width"
					  , u = c ? "top" : "left"
					  , h = c ? "left" : "top"
					  , p = c ? "bottom" : "right"
					  , f = n(t)[d];
					l[p] - f < s[u] && (e.offsets.popper[u] -= s[u] - (l[p] - f)),
					l[u] + f > s[p] && (e.offsets.popper[u] += l[u] + f - s[p]);
					var m = l[u] + (i || l[d] / 2 - f / 2)
					  , v = m - s[u];
					return v = Math.max(Math.min(s[d] - f - 8, v), 8),
					o[u] = v,
					o[h] = "",
					e.offsets.arrow = o,
					e.arrowElement = t,
					e
				}
				,
				Object.assign || Object.defineProperty(Object, "assign", {
					enumerable: !1,
					configurable: !0,
					writable: !0,
					value: function(e) {
						if (void 0 === e || null === e)
							throw new TypeError("Cannot convert first argument to object");
						for (var t = Object(e), i = 1; i < arguments.length; i++) {
							var n = arguments[i];
							if (void 0 !== n && null !== n) {
								n = Object(n);
								for (var o = Object.keys(n), a = 0, r = o.length; a < r; a++) {
									var s = o[a]
									  , l = Object.getOwnPropertyDescriptor(n, s);
									void 0 !== l && l.enumerable && (t[s] = n[s])
								}
							}
						}
						return t
					}
				}),
				i
			}
			))
		},
		680: function(e, t, i) {
			"use strict";
			t.__esModule = !0,
			t.PopupManager = void 0;
			var n = i(144)
			  , o = h(n)
			  , a = i(615)
			  , r = h(a)
			  , s = i(562)
			  , l = h(s)
			  , c = i(301)
			  , d = h(c)
			  , u = i(594);
			function h(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var p = 1
			  , f = void 0;
			t["default"] = {
				props: {
					visible: {
						type: Boolean,
						default: !1
					},
					openDelay: {},
					closeDelay: {},
					zIndex: {},
					modal: {
						type: Boolean,
						default: !1
					},
					modalFade: {
						type: Boolean,
						default: !0
					},
					modalClass: {},
					modalAppendToBody: {
						type: Boolean,
						default: !1
					},
					lockScroll: {
						type: Boolean,
						default: !0
					},
					closeOnPressEscape: {
						type: Boolean,
						default: !1
					},
					closeOnClickModal: {
						type: Boolean,
						default: !1
					}
				},
				beforeMount: function() {
					this._popupId = "popup-" + p++,
					l.default.register(this._popupId, this)
				},
				beforeDestroy: function() {
					l.default.deregister(this._popupId),
					l.default.closeModal(this._popupId),
					this.restoreBodyStyle()
				},
				data: function() {
					return {
						opened: !1,
						bodyPaddingRight: null,
						computedBodyPaddingRight: 0,
						withoutHiddenClass: !0,
						rendered: !1
					}
				},
				watch: {
					visible: function(e) {
						var t = this;
						if (e) {
							if (this._opening)
								return;
							this.rendered ? this.open() : (this.rendered = !0,
							o.default.nextTick((function() {
								t.open()
							}
							)))
						} else
							this.close()
					}
				},
				methods: {
					open: function(e) {
						var t = this;
						this.rendered || (this.rendered = !0);
						var i = (0,
						r.default)({}, this.$props || this, e);
						this._closeTimer && (clearTimeout(this._closeTimer),
						this._closeTimer = null),
						clearTimeout(this._openTimer);
						var n = Number(i.openDelay);
						n > 0 ? this._openTimer = setTimeout((function() {
							t._openTimer = null,
							t.doOpen(i)
						}
						), n) : this.doOpen(i)
					},
					doOpen: function(e) {
						if (!this.$isServer && (!this.willOpen || this.willOpen()) && !this.opened) {
							this._opening = !0;
							var t = this.$el
							  , i = e.modal
							  , n = e.zIndex;
							if (n && (l.default.zIndex = n),
							i && (this._closing && (l.default.closeModal(this._popupId),
							this._closing = !1),
							l.default.openModal(this._popupId, l.default.nextZIndex(), this.modalAppendToBody ? void 0 : t, e.modalClass, e.modalFade),
							e.lockScroll)) {
								this.withoutHiddenClass = !(0,
								u.hasClass)(document.body, "el-popup-parent--hidden"),
								this.withoutHiddenClass && (this.bodyPaddingRight = document.body.style.paddingRight,
								this.computedBodyPaddingRight = parseInt((0,
								u.getStyle)(document.body, "paddingRight"), 10)),
								f = (0,
								d.default)();
								var o = document.documentElement.clientHeight < document.body.scrollHeight
								  , a = (0,
								u.getStyle)(document.body, "overflowY");
								f > 0 && (o || "scroll" === a) && this.withoutHiddenClass && (document.body.style.paddingRight = this.computedBodyPaddingRight + f + "px"),
								(0,
								u.addClass)(document.body, "el-popup-parent--hidden")
							}
							"static" === getComputedStyle(t).position && (t.style.position = "absolute"),
							t.style.zIndex = l.default.nextZIndex(),
							this.opened = !0,
							this.onOpen && this.onOpen(),
							this.doAfterOpen()
						}
					},
					doAfterOpen: function() {
						this._opening = !1
					},
					close: function() {
						var e = this;
						if (!this.willClose || this.willClose()) {
							null !== this._openTimer && (clearTimeout(this._openTimer),
							this._openTimer = null),
							clearTimeout(this._closeTimer);
							var t = Number(this.closeDelay);
							t > 0 ? this._closeTimer = setTimeout((function() {
								e._closeTimer = null,
								e.doClose()
							}
							), t) : this.doClose()
						}
					},
					doClose: function() {
						this._closing = !0,
						this.onClose && this.onClose(),
						this.lockScroll && setTimeout(this.restoreBodyStyle, 200),
						this.opened = !1,
						this.doAfterClose()
					},
					doAfterClose: function() {
						l.default.closeModal(this._popupId),
						this._closing = !1
					},
					restoreBodyStyle: function() {
						this.modal && this.withoutHiddenClass && (document.body.style.paddingRight = this.bodyPaddingRight,
						(0,
						u.removeClass)(document.body, "el-popup-parent--hidden")),
						this.withoutHiddenClass = !0
					}
				}
			},
			t.PopupManager = l.default
		},
		562: function(e, t, i) {
			"use strict";
			t.__esModule = !0;
			var n = i(144)
			  , o = r(n)
			  , a = i(594);
			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = !1
			  , l = !1
			  , c = void 0
			  , d = function() {
				if (!o.default.prototype.$isServer) {
					var e = h.modalDom;
					return e ? s = !0 : (s = !1,
					e = document.createElement("div"),
					h.modalDom = e,
					e.addEventListener("touchmove", (function(e) {
						e.preventDefault(),
						e.stopPropagation()
					}
					)),
					e.addEventListener("click", (function() {
						h.doOnModalClick && h.doOnModalClick()
					}
					))),
					e
				}
			}
			  , u = {}
			  , h = {
				modalFade: !0,
				getInstance: function(e) {
					return u[e]
				},
				register: function(e, t) {
					e && t && (u[e] = t)
				},
				deregister: function(e) {
					e && (u[e] = null,
					delete u[e])
				},
				nextZIndex: function() {
					return h.zIndex++
				},
				modalStack: [],
				doOnModalClick: function() {
					var e = h.modalStack[h.modalStack.length - 1];
					if (e) {
						var t = h.getInstance(e.id);
						t && t.closeOnClickModal && t.close()
					}
				},
				openModal: function(e, t, i, n, r) {
					if (!o.default.prototype.$isServer && e && void 0 !== t) {
						this.modalFade = r;
						for (var l = this.modalStack, c = 0, u = l.length; c < u; c++) {
							var h = l[c];
							if (h.id === e)
								return
						}
						var p = d();
						if ((0,
						a.addClass)(p, "v-modal"),
						this.modalFade && !s && (0,
						a.addClass)(p, "v-modal-enter"),
						n) {
							var f = n.trim().split(/\s+/);
							f.forEach((function(e) {
								return (0,
								a.addClass)(p, e)
							}
							))
						}
						setTimeout((function() {
							(0,
							a.removeClass)(p, "v-modal-enter")
						}
						), 200),
						i && i.parentNode && 11 !== i.parentNode.nodeType ? i.parentNode.appendChild(p) : document.body.appendChild(p),
						t && (p.style.zIndex = t),
						p.tabIndex = 0,
						p.style.display = "",
						this.modalStack.push({
							id: e,
							zIndex: t,
							modalClass: n
						})
					}
				},
				closeModal: function(e) {
					var t = this.modalStack
					  , i = d();
					if (t.length > 0) {
						var n = t[t.length - 1];
						if (n.id === e) {
							if (n.modalClass) {
								var o = n.modalClass.trim().split(/\s+/);
								o.forEach((function(e) {
									return (0,
									a.removeClass)(i, e)
								}
								))
							}
							t.pop(),
							t.length > 0 && (i.style.zIndex = t[t.length - 1].zIndex)
						} else
							for (var r = t.length - 1; r >= 0; r--)
								if (t[r].id === e) {
									t.splice(r, 1);
									break
								}
					}
					0 === t.length && (this.modalFade && (0,
					a.addClass)(i, "v-modal-leave"),
					setTimeout((function() {
						0 === t.length && (i.parentNode && i.parentNode.removeChild(i),
						i.style.display = "none",
						h.modalDom = void 0),
						(0,
						a.removeClass)(i, "v-modal-leave")
					}
					), 200))
				}
			};
			Object.defineProperty(h, "zIndex", {
				configurable: !0,
				get: function() {
					return l || (c = c || (o.default.prototype.$ELEMENT || {}).zIndex || 2e3,
					l = !0),
					c
				},
				set: function(e) {
					c = e
				}
			});
			var p = function() {
				if (!o.default.prototype.$isServer && h.modalStack.length > 0) {
					var e = h.modalStack[h.modalStack.length - 1];
					if (!e)
						return;
					var t = h.getInstance(e.id);
					return t
				}
			};
			o.default.prototype.$isServer || window.addEventListener("keydown", (function(e) {
				if (27 === e.keyCode) {
					var t = p();
					t && t.closeOnPressEscape && (t.handleClose ? t.handleClose() : t.handleAction ? t.handleAction("cancel") : t.close())
				}
			}
			)),
			t["default"] = h
		},
		301: function(e, t, i) {
			"use strict";
			t.__esModule = !0,
			t["default"] = function() {
				if (o.default.prototype.$isServer)
					return 0;
				if (void 0 !== r)
					return r;
				var e = document.createElement("div");
				e.className = "el-scrollbar__wrap",
				e.style.visibility = "hidden",
				e.style.width = "100px",
				e.style.position = "absolute",
				e.style.top = "-9999px",
				document.body.appendChild(e);
				var t = e.offsetWidth;
				e.style.overflow = "scroll";
				var i = document.createElement("div");
				i.style.width = "100%",
				e.appendChild(i);
				var n = i.offsetWidth;
				return e.parentNode.removeChild(e),
				r = t - n,
				r
			}
			;
			var n = i(144)
			  , o = a(n);
			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var r = void 0
		},
		167: function(e, t) {
			"use strict";
			function i(e) {
				return void 0 !== e && null !== e
			}
			function n(e) {
				var t = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
				return t.test(e)
			}
			t.__esModule = !0,
			t.isDef = i,
			t.isKorean = n
		},
		389: function(e, t, i) {
			"use strict";
			t.__esModule = !0,
			t.isDefined = t.isUndefined = t.isFunction = void 0;
			var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			}
			: function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}
			;
			t.isString = s,
			t.isObject = l,
			t.isHtmlElement = c;
			var o = i(144)
			  , a = r(o);
			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			function s(e) {
				return "[object String]" === Object.prototype.toString.call(e)
			}
			function l(e) {
				return "[object Object]" === Object.prototype.toString.call(e)
			}
			function c(e) {
				return e && e.nodeType === Node.ELEMENT_NODE
			}
			var d = function(e) {
				var t = {};
				return e && "[object Function]" === t.toString.call(e)
			};
			"object" === ("undefined" === typeof Int8Array ? "undefined" : n(Int8Array)) || !a.default.prototype.$isServer && "function" === typeof document.childNodes || (t.isFunction = d = function(e) {
				return "function" === typeof e || !1
			}
			),
			t.isFunction = d;
			t.isUndefined = function(e) {
				return void 0 === e
			}
			,
			t.isDefined = function(e) {
				return void 0 !== e && null !== e
			}
		},
		104: function(e, t, i) {
			"use strict";
			t.__esModule = !0,
			t.isEmpty = t.isEqual = t.arrayEquals = t.looseEqual = t.capitalize = t.kebabCase = t.autoprefixer = t.isFirefox = t.isEdge = t.isIE = t.coerceTruthyValueToArray = t.arrayFind = t.arrayFindIndex = t.escapeRegexpString = t.valueEquals = t.generateId = t.getValueByPath = void 0;
			var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
				return typeof e
			}
			: function(e) {
				return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			}
			;
			t.noop = c,
			t.hasOwn = d,
			t.toObject = h,
			t.getPropByPath = p,
			t.rafThrottle = b,
			t.objToArray = _;
			var o = i(144)
			  , a = s(o)
			  , r = i(389);
			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var l = Object.prototype.hasOwnProperty;
			function c() {}
			function d(e, t) {
				return l.call(e, t)
			}
			function u(e, t) {
				for (var i in t)
					e[i] = t[i];
				return e
			}
			function h(e) {
				for (var t = {}, i = 0; i < e.length; i++)
					e[i] && u(t, e[i]);
				return t
			}
			t.getValueByPath = function(e, t) {
				t = t || "";
				for (var i = t.split("."), n = e, o = null, a = 0, r = i.length; a < r; a++) {
					var s = i[a];
					if (!n)
						break;
					if (a === r - 1) {
						o = n[s];
						break
					}
					n = n[s]
				}
				return o
			}
			;
			function p(e, t, i) {
				var n = e;
				t = t.replace(/\[(\w+)\]/g, ".$1"),
				t = t.replace(/^\./, "");
				for (var o = t.split("."), a = 0, r = o.length; a < r - 1; ++a) {
					if (!n && !i)
						break;
					var s = o[a];
					if (!(s in n)) {
						if (i)
							throw new Error("please transfer a valid prop path to form item!");
						break
					}
					n = n[s]
				}
				return {
					o: n,
					k: o[a],
					v: n ? n[o[a]] : null
				}
			}
			t.generateId = function() {
				return Math.floor(1e4 * Math.random())
			}
			,
			t.valueEquals = function(e, t) {
				if (e === t)
					return !0;
				if (!(e instanceof Array))
					return !1;
				if (!(t instanceof Array))
					return !1;
				if (e.length !== t.length)
					return !1;
				for (var i = 0; i !== e.length; ++i)
					if (e[i] !== t[i])
						return !1;
				return !0
			}
			,
			t.escapeRegexpString = function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
				return String(e).replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
			}
			;
			var f = t.arrayFindIndex = function(e, t) {
				for (var i = 0; i !== e.length; ++i)
					if (t(e[i]))
						return i;
				return -1
			}
			  , m = (t.arrayFind = function(e, t) {
				var i = f(e, t);
				return -1 !== i ? e[i] : void 0
			}
			,
			t.coerceTruthyValueToArray = function(e) {
				return Array.isArray(e) ? e : e ? [e] : []
			}
			,
			t.isIE = function() {
				return !a.default.prototype.$isServer && !isNaN(Number(document.documentMode))
			}
			,
			t.isEdge = function() {
				return !a.default.prototype.$isServer && navigator.userAgent.indexOf("Edge") > -1
			}
			,
			t.isFirefox = function() {
				return !a.default.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i)
			}
			,
			t.autoprefixer = function(e) {
				if ("object" !== ("undefined" === typeof e ? "undefined" : n(e)))
					return e;
				var t = ["transform", "transition", "animation"]
				  , i = ["ms-", "webkit-"];
				return t.forEach((function(t) {
					var n = e[t];
					t && n && i.forEach((function(i) {
						e[i + t] = n
					}
					))
				}
				)),
				e
			}
			,
			t.kebabCase = function(e) {
				var t = /([^-])([A-Z])/g;
				return e.replace(t, "$1-$2").replace(t, "$1-$2").toLowerCase()
			}
			,
			t.capitalize = function(e) {
				return (0,
				r.isString)(e) ? e.charAt(0).toUpperCase() + e.slice(1) : e
			}
			,
			t.looseEqual = function(e, t) {
				var i = (0,
				r.isObject)(e)
				  , n = (0,
				r.isObject)(t);
				return i && n ? JSON.stringify(e) === JSON.stringify(t) : !i && !n && String(e) === String(t)
			}
			)
			  , v = t.arrayEquals = function(e, t) {
				if (e = e || [],
				t = t || [],
				e.length !== t.length)
					return !1;
				for (var i = 0; i < e.length; i++)
					if (!m(e[i], t[i]))
						return !1;
				return !0
			}
			  , g = (t.isEqual = function(e, t) {
				return Array.isArray(e) && Array.isArray(t) ? v(e, t) : m(e, t)
			}
			,
			t.isEmpty = function(e) {
				if (null == e)
					return !0;
				if ("boolean" === typeof e)
					return !1;
				if ("number" === typeof e)
					return !e;
				if (e instanceof Error)
					return "" === e.message;
				switch (Object.prototype.toString.call(e)) {
				case "[object String]":
				case "[object Array]":
					return !e.length;
				case "[object File]":
				case "[object Map]":
				case "[object Set]":
					return !e.size;
				case "[object Object]":
					return !Object.keys(e).length
				}
				return !1
			}
			);
			function b(e) {
				var t = !1;
				return function() {
					for (var i = this, n = arguments.length, o = Array(n), a = 0; a < n; a++)
						o[a] = arguments[a];
					t || (t = !0,
					window.requestAnimationFrame((function(n) {
						e.apply(i, o),
						t = !1
					}
					)))
				}
			}
			function _(e) {
				return Array.isArray(e) ? e : g(e) ? [] : [e]
			}
		},
		499: function(e, t, i) {
			"use strict";
			t.__esModule = !0;
			var n = i(144)
			  , o = r(n)
			  , a = i(680);
			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = o.default.prototype.$isServer ? function() {}
			: i(335)
			  , l = function(e) {
				return e.stopPropagation()
			};
			t["default"] = {
				props: {
					transformOrigin: {
						type: [Boolean, String],
						default: !0
					},
					placement: {
						type: String,
						default: "bottom"
					},
					boundariesPadding: {
						type: Number,
						default: 5
					},
					reference: {},
					popper: {},
					offset: {
						default: 0
					},
					value: Boolean,
					visibleArrow: Boolean,
					arrowOffset: {
						type: Number,
						default: 35
					},
					appendToBody: {
						type: Boolean,
						default: !0
					},
					popperOptions: {
						type: Object,
						default: function() {
							return {
								gpuAcceleration: !1
							}
						}
					}
				},
				data: function() {
					return {
						showPopper: !1,
						currentPlacement: ""
					}
				},
				watch: {
					value: {
						immediate: !0,
						handler: function(e) {
							this.showPopper = e,
							this.$emit("input", e)
						}
					},
					showPopper: function(e) {
						this.disabled || (e ? this.updatePopper() : this.destroyPopper(),
						this.$emit("input", e))
					}
				},
				methods: {
					createPopper: function() {
						var e = this;
						if (!this.$isServer && (this.currentPlacement = this.currentPlacement || this.placement,
						/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement))) {
							var t = this.popperOptions
							  , i = this.popperElm = this.popperElm || this.popper || this.$refs.popper
							  , n = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
							!n && this.$slots.reference && this.$slots.reference[0] && (n = this.referenceElm = this.$slots.reference[0].elm),
							i && n && (this.visibleArrow && this.appendArrow(i),
							this.appendToBody && document.body.appendChild(this.popperElm),
							this.popperJS && this.popperJS.destroy && this.popperJS.destroy(),
							t.placement = this.currentPlacement,
							t.offset = this.offset,
							t.arrowOffset = this.arrowOffset,
							this.popperJS = new s(n,i,t),
							this.popperJS.onCreate((function(t) {
								e.$emit("created", e),
								e.resetTransformOrigin(),
								e.$nextTick(e.updatePopper)
							}
							)),
							"function" === typeof t.onUpdate && this.popperJS.onUpdate(t.onUpdate),
							this.popperJS._popper.style.zIndex = a.PopupManager.nextZIndex(),
							this.popperElm.addEventListener("click", l))
						}
					},
					updatePopper: function() {
						var e = this.popperJS;
						e ? (e.update(),
						e._popper && (e._popper.style.zIndex = a.PopupManager.nextZIndex())) : this.createPopper()
					},
					doDestroy: function(e) {
						!this.popperJS || this.showPopper && !e || (this.popperJS.destroy(),
						this.popperJS = null)
					},
					destroyPopper: function() {
						this.popperJS && this.resetTransformOrigin()
					},
					resetTransformOrigin: function() {
						if (this.transformOrigin) {
							var e = {
								top: "bottom",
								bottom: "top",
								left: "right",
								right: "left"
							}
							  , t = this.popperJS._popper.getAttribute("x-placement").split("-")[0]
							  , i = e[t];
							this.popperJS._popper.style.transformOrigin = "string" === typeof this.transformOrigin ? this.transformOrigin : ["top", "bottom"].indexOf(t) > -1 ? "center " + i : i + " center"
						}
					},
					appendArrow: function(e) {
						var t = void 0;
						if (!this.appended) {
							for (var i in this.appended = !0,
							e.attributes)
								if (/^_v-/.test(e.attributes[i].name)) {
									t = e.attributes[i].name;
									break
								}
							var n = document.createElement("div");
							t && n.setAttribute(t, ""),
							n.setAttribute("x-arrow", ""),
							n.className = "popper__arrow",
							e.appendChild(n)
						}
					}
				},
				beforeDestroy: function() {
					this.doDestroy(!0),
					this.popperElm && this.popperElm.parentNode === document.body && (this.popperElm.removeEventListener("click", l),
					document.body.removeChild(this.popperElm))
				},
				deactivated: function() {
					this.$options.beforeDestroy[0].call(this)
				}
			}
		},
		88: function(e) {
			e.exports = function(e) {
				var t = {};
				function i(n) {
					if (t[n])
						return t[n].exports;
					var o = t[n] = {
						i: n,
						l: !1,
						exports: {}
					};
					return e[n].call(o.exports, o, o.exports, i),
					o.l = !0,
					o.exports
				}
				return i.m = e,
				i.c = t,
				i.d = function(e, t, n) {
					i.o(e, t) || Object.defineProperty(e, t, {
						configurable: !1,
						enumerable: !0,
						get: n
					})
				}
				,
				i.n = function(e) {
					var t = e && e.__esModule ? function() {
						return e["default"]
					}
					: function() {
						return e
					}
					;
					return i.d(t, "a", t),
					t
				}
				,
				i.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}
				,
				i.p = "",
				i(i.s = 1)
			}([function(e, t, i) {
				"use strict";
				var n = {
					MOBILE: "mobile",
					TABLET: "tablet",
					SMART_TV: "smarttv",
					CONSOLE: "console",
					WEARABLE: "wearable",
					BROWSER: void 0
				}
				  , o = {
					CHROME: "Chrome",
					FIREFOX: "Firefox",
					OPERA: "Opera",
					YANDEX: "Yandex",
					SAFARI: "Safari",
					INTERNET_EXPLORER: "Internet Explorer",
					EDGE: "Edge",
					CHROMIUM: "Chromium",
					IE: "IE",
					MOBILE_SAFARI: "Mobile Safari",
					EDGE_CHROMIUM: "Edge Chromium"
				}
				  , a = {
					IOS: "iOS",
					ANDROID: "Android",
					WINDOWS_PHONE: "Windows Phone",
					WINDOWS: "Windows",
					MAC_OS: "Mac OS"
				}
				  , r = {
					isMobile: !1,
					isTablet: !1,
					isBrowser: !1,
					isSmartTV: !1,
					isConsole: !1,
					isWearable: !1
				};
				e.exports = {
					BROWSER_TYPES: o,
					DEVICE_TYPES: n,
					OS_TYPES: a,
					defaultData: r
				}
			}
			, function(e, t, i) {
				"use strict";
				var n = i(2)
				  , o = i(0)
				  , a = o.BROWSER_TYPES
				  , r = o.OS_TYPES
				  , s = o.DEVICE_TYPES
				  , l = i(4)
				  , c = l.checkType
				  , d = l.broPayload
				  , u = l.mobilePayload
				  , h = l.wearPayload
				  , p = l.consolePayload
				  , f = l.stvPayload
				  , m = l.getNavigatorInstance
				  , v = l.isIOS13Check
				  , g = new n
				  , b = g.getBrowser()
				  , _ = g.getDevice()
				  , y = g.getEngine()
				  , w = g.getOS()
				  , x = g.getUA()
				  , C = a.CHROME
				  , $ = a.CHROMIUM
				  , S = a.IE
				  , k = a.INTERNET_EXPLORER
				  , T = a.OPERA
				  , M = a.FIREFOX
				  , E = a.SAFARI
				  , O = a.EDGE
				  , A = a.YANDEX
				  , I = a.MOBILE_SAFARI
				  , F = s.MOBILE
				  , D = s.TABLET
				  , R = s.SMART_TV
				  , P = s.BROWSER
				  , L = s.WEARABLE
				  , B = s.CONSOLE
				  , N = r.ANDROID
				  , j = r.WINDOWS_PHONE
				  , z = r.IOS
				  , G = r.WINDOWS
				  , V = r.MAC_OS
				  , H = function() {
					return _.type === F
				}
				  , W = function() {
					return _.type === D
				}
				  , U = function() {
					switch (_.type) {
					case F:
					case D:
						return !0;
					default:
						return !1
					}
				}
				  , X = function() {
					return w.name === r.WINDOWS && "10" === w.version && ("string" === typeof x && -1 !== x.indexOf("Edg/"))
				}
				  , q = function() {
					return _.type === R
				}
				  , K = function() {
					return _.type === P
				}
				  , Y = function() {
					return _.type === L
				}
				  , J = function() {
					return _.type === B
				}
				  , Q = function() {
					return w.name === N
				}
				  , Z = function() {
					return w.name === G
				}
				  , ee = function() {
					return w.name === V
				}
				  , te = function() {
					return w.name === j
				}
				  , ie = function() {
					return w.name === z
				}
				  , ne = function() {
					return b.name === C
				}
				  , oe = function() {
					return b.name === M
				}
				  , ae = function() {
					return b.name === $
				}
				  , re = function() {
					return b.name === O
				}
				  , se = function() {
					return b.name === A
				}
				  , le = function() {
					return b.name === E || b.name === I
				}
				  , ce = function() {
					return b.name === I
				}
				  , de = function() {
					return b.name === T
				}
				  , ue = function() {
					return b.name === k || b.name === S
				}
				  , he = function() {
					var e = m()
					  , t = e && e.userAgent.toLowerCase();
					return "string" === typeof t && /electron/.test(t)
				}
				  , pe = function() {
					var e = m();
					return e && (/iPad|iPhone|iPod/.test(e.platform) || "MacIntel" === e.platform && e.maxTouchPoints > 1) && !window.MSStream
				}
				  , fe = function() {
					return v("iPad")
				}
				  , me = function() {
					return v("iPhone")
				}
				  , ve = function() {
					return v("iPod")
				}
				  , ge = function() {
					return b.major
				}
				  , be = function() {
					return b.version
				}
				  , _e = function() {
					return w.version ? w.version : "none"
				}
				  , ye = function() {
					return w.name ? w.name : "none"
				}
				  , we = function() {
					return b.name
				}
				  , xe = function() {
					return _.vendor ? _.vendor : "none"
				}
				  , Ce = function() {
					return _.model ? _.model : "none"
				}
				  , $e = function() {
					return y.name
				}
				  , Se = function() {
					return y.version
				}
				  , ke = function() {
					return x
				}
				  , Te = function() {
					return _.type
				}
				  , Me = q()
				  , Ee = J()
				  , Oe = Y()
				  , Ae = ce() || fe()
				  , Ie = ae()
				  , Fe = U() || fe()
				  , De = H()
				  , Re = W() || fe()
				  , Pe = K()
				  , Le = Q()
				  , Be = te()
				  , Ne = ie() || fe()
				  , je = ne()
				  , ze = oe()
				  , Ge = le()
				  , Ve = de()
				  , He = ue()
				  , We = _e()
				  , Ue = ye()
				  , Xe = ge()
				  , qe = be()
				  , Ke = we()
				  , Ye = xe()
				  , Je = Ce()
				  , Qe = $e()
				  , Ze = Se()
				  , et = ke()
				  , tt = re() || X()
				  , it = se()
				  , nt = Te()
				  , ot = pe()
				  , at = fe()
				  , rt = me()
				  , st = ve()
				  , lt = he()
				  , ct = X()
				  , dt = re()
				  , ut = Z()
				  , ht = ee()
				  , pt = c(_.type);
				function ft() {
					var e = pt.isBrowser
					  , t = pt.isMobile
					  , i = pt.isTablet
					  , n = pt.isSmartTV
					  , o = pt.isConsole
					  , a = pt.isWearable;
					return e ? d(e, b, y, w, x) : n ? f(n, y, w, x) : o ? p(o, y, w, x) : t || i ? u(pt, _, w, x) : a ? h(a, y, w, x) : void 0
				}
				e.exports = {
					deviceDetect: ft,
					isSmartTV: Me,
					isConsole: Ee,
					isWearable: Oe,
					isMobileSafari: Ae,
					isChromium: Ie,
					isMobile: Fe,
					isMobileOnly: De,
					isTablet: Re,
					isBrowser: Pe,
					isAndroid: Le,
					isWinPhone: Be,
					isIOS: Ne,
					isChrome: je,
					isFirefox: ze,
					isSafari: Ge,
					isOpera: Ve,
					isIE: He,
					osVersion: We,
					osName: Ue,
					fullBrowserVersion: Xe,
					browserVersion: qe,
					browserName: Ke,
					mobileVendor: Ye,
					mobileModel: Je,
					engineName: Qe,
					engineVersion: Ze,
					getUA: et,
					isEdge: tt,
					isYandex: it,
					deviceType: nt,
					isIOS13: ot,
					isIPad13: at,
					isIPhone13: rt,
					isIPod13: st,
					isElectron: lt,
					isEdgeChromium: ct,
					isLegacyEdge: dt,
					isWindows: ut,
					isMacOs: ht
				}
			}
			, function(e, t, i) {
				var n;
				/*!
 * UAParser.js v0.7.18
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 or MIT
 */
				(function(o, a) {
					"use strict";
					var r = "0.7.18"
					  , s = ""
					  , l = "?"
					  , c = "function"
					  , d = "undefined"
					  , u = "object"
					  , h = "string"
					  , p = "major"
					  , f = "model"
					  , m = "name"
					  , v = "type"
					  , g = "vendor"
					  , b = "version"
					  , _ = "architecture"
					  , y = "console"
					  , w = "mobile"
					  , x = "tablet"
					  , C = "smarttv"
					  , $ = "wearable"
					  , S = "embedded"
					  , k = {
						extend: function(e, t) {
							var i = {};
							for (var n in e)
								t[n] && t[n].length % 2 === 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
							return i
						},
						has: function(e, t) {
							return "string" === typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
						},
						lowerize: function(e) {
							return e.toLowerCase()
						},
						major: function(e) {
							return typeof e === h ? e.replace(/[^\d\.]/g, "").split(".")[0] : a
						},
						trim: function(e) {
							return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
						}
					}
					  , T = {
						rgx: function(e, t) {
							var i, n, o, r, s, l, d = 0;
							while (d < t.length && !s) {
								var h = t[d]
								  , p = t[d + 1];
								i = n = 0;
								while (i < h.length && !s)
									if (s = h[i++].exec(e),
									s)
										for (o = 0; o < p.length; o++)
											l = s[++n],
											r = p[o],
											typeof r === u && r.length > 0 ? 2 == r.length ? typeof r[1] == c ? this[r[0]] = r[1].call(this, l) : this[r[0]] = r[1] : 3 == r.length ? typeof r[1] !== c || r[1].exec && r[1].test ? this[r[0]] = l ? l.replace(r[1], r[2]) : a : this[r[0]] = l ? r[1].call(this, l, r[2]) : a : 4 == r.length && (this[r[0]] = l ? r[3].call(this, l.replace(r[1], r[2])) : a) : this[r] = l || a;
								d += 2
							}
						},
						str: function(e, t) {
							for (var i in t)
								if (typeof t[i] === u && t[i].length > 0) {
									for (var n = 0; n < t[i].length; n++)
										if (k.has(t[i][n], e))
											return i === l ? a : i
								} else if (k.has(t[i], e))
									return i === l ? a : i;
							return e
						}
					}
					  , M = {
						browser: {
							oldsafari: {
								version: {
									"1.0": "/8",
									1.2: "/1",
									1.3: "/3",
									"2.0": "/412",
									"2.0.2": "/416",
									"2.0.3": "/417",
									"2.0.4": "/419",
									"?": "/"
								}
							}
						},
						device: {
							amazon: {
								model: {
									"Fire Phone": ["SD", "KF"]
								}
							},
							sprint: {
								model: {
									"Evo Shift 4G": "7373KT"
								},
								vendor: {
									HTC: "APA",
									Sprint: "Sprint"
								}
							}
						},
						os: {
							windows: {
								version: {
									ME: "4.90",
									"NT 3.11": "NT3.51",
									"NT 4.0": "NT4.0",
									2e3: "NT 5.0",
									XP: ["NT 5.1", "NT 5.2"],
									Vista: "NT 6.0",
									7: "NT 6.1",
									8: "NT 6.2",
									8.1: "NT 6.3",
									10: ["NT 6.4", "NT 10.0"],
									RT: "ARM"
								}
							}
						}
					}
					  , E = {
						browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [m, b], [/(opios)[\/\s]+([\w\.]+)/i], [[m, "Opera Mini"], b], [/\s(opr)\/([\w\.]+)/i], [[m, "Opera"], b], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [m, b], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[m, "IE"], b], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[m, "Edge"], b], [/(yabrowser)\/([\w\.]+)/i], [[m, "Yandex"], b], [/(puffin)\/([\w\.]+)/i], [[m, "Puffin"], b], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[m, "UCBrowser"], b], [/(comodo_dragon)\/([\w\.]+)/i], [[m, /_/g, " "], b], [/(micromessenger)\/([\w\.]+)/i], [[m, "WeChat"], b], [/(qqbrowserlite)\/([\w\.]+)/i], [m, b], [/(QQ)\/([\d\.]+)/i], [m, b], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [m, b], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [m, b], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [m, b], [/(MetaSr)[\/\s]?([\w\.]+)/i], [m], [/(LBBROWSER)/i], [m], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [b, [m, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [b, [m, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [b, [m, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[m, /(.+)/, "$1 WebView"], b], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[m, /(.+(?:g|us))(.+)/, "$1 $2"], b], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [b, [m, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [m, b], [/(dolfin)\/([\w\.]+)/i], [[m, "Dolphin"], b], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[m, "Chrome"], b], [/(coast)\/([\w\.]+)/i], [[m, "Opera Coast"], b], [/fxios\/([\w\.-]+)/i], [b, [m, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [b, [m, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [b, m], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[m, "GSA"], b], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [m, [b, T.str, M.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [m, b], [/(navigator|netscape)\/([\w\.-]+)/i], [[m, "Netscape"], b], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [m, b]],
						cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[_, "amd64"]], [/(ia32(?=;))/i], [[_, k.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[_, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[_, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[_, /ower/, "", k.lowerize]], [/(sun4\w)[;\)]/i], [[_, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[_, k.lowerize]]],
						device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [f, g, [v, x]], [/applecoremedia\/[\w\.]+ \((ipad)/], [f, [g, "Apple"], [v, x]], [/(apple\s{0,1}tv)/i], [[f, "Apple TV"], [g, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [g, f, [v, x]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [f, [g, "Amazon"], [v, x]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[f, T.str, M.device.amazon.model], [g, "Amazon"], [v, w]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [f, g, [v, w]], [/\((ip[honed|\s\w*]+);/i], [f, [g, "Apple"], [v, w]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [g, f, [v, w]], [/\(bb10;\s(\w+)/i], [f, [g, "BlackBerry"], [v, w]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [f, [g, "Asus"], [v, x]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[g, "Sony"], [f, "Xperia Tablet"], [v, x]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [f, [g, "Sony"], [v, w]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [g, f, [v, y]], [/android.+;\s(shield)\sbuild/i], [f, [g, "Nvidia"], [v, y]], [/(playstation\s[34portablevi]+)/i], [f, [g, "Sony"], [v, y]], [/(sprint\s(\w+))/i], [[g, T.str, M.device.sprint.vendor], [f, T.str, M.device.sprint.model], [v, w]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [g, f, [v, x]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [g, [f, /_/g, " "], [v, w]], [/(nexus\s9)/i], [f, [g, "HTC"], [v, x]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [f, [g, "Huawei"], [v, w]], [/(microsoft);\s(lumia[\s\w]+)/i], [g, f, [v, w]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [f, [g, "Microsoft"], [v, y]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [g, "Microsoft"], [v, w]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [f, [g, "Motorola"], [v, w]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [f, [g, "Motorola"], [v, x]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[g, k.trim], [f, k.trim], [v, C]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [g, "Samsung"], [v, C]], [/\(dtv[\);].+(aquos)/i], [f, [g, "Sharp"], [v, C]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[g, "Samsung"], f, [v, x]], [/smart-tv.+(samsung)/i], [g, [v, C], f], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[g, "Samsung"], f, [v, w]], [/sie-(\w*)/i], [f, [g, "Siemens"], [v, w]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[g, "Nokia"], f, [v, w]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [f, [g, "Acer"], [v, x]], [/android.+([vl]k\-?\d{3})\s+build/i], [f, [g, "LG"], [v, x]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[g, "LG"], f, [v, x]], [/(lg) netcast\.tv/i], [g, f, [v, C]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [f, [g, "LG"], [v, w]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [f, [g, "Lenovo"], [v, x]], [/linux;.+((jolla));/i], [g, f, [v, w]], [/((pebble))app\/[\d\.]+\s/i], [g, f, [v, $]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [g, f, [v, w]], [/crkey/i], [[f, "Chromecast"], [g, "Google"]], [/android.+;\s(glass)\s\d/i], [f, [g, "Google"], [v, $]], [/android.+;\s(pixel c)\s/i], [f, [g, "Google"], [v, x]], [/android.+;\s(pixel xl|pixel)\s/i], [f, [g, "Google"], [v, w]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[f, /_/g, " "], [g, "Xiaomi"], [v, w]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[f, /_/g, " "], [g, "Xiaomi"], [v, x]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [f, [g, "Meizu"], [v, x]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [f, [g, "OnePlus"], [v, w]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [f, [g, "RCA"], [v, x]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [f, [g, "Dell"], [v, x]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [f, [g, "Verizon"], [v, x]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[g, "Barnes & Noble"], f, [v, x]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [f, [g, "NuVision"], [v, x]], [/android.+;\s(k88)\sbuild/i], [f, [g, "ZTE"], [v, x]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [f, [g, "Swiss"], [v, w]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [f, [g, "Swiss"], [v, x]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [f, [g, "Zeki"], [v, x]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[g, "Dragon Touch"], f, [v, x]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [f, [g, "Insignia"], [v, x]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [f, [g, "NextBook"], [v, x]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[g, "Voice"], f, [v, w]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[g, "LvTel"], f, [v, w]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [f, [g, "Envizen"], [v, x]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [g, f, [v, x]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [f, [g, "MachSpeed"], [v, x]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [g, f, [v, x]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [f, [g, "Rotor"], [v, x]], [/android.+(KS(.+))\s+build/i], [f, [g, "Amazon"], [v, x]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [g, f, [v, x]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[v, k.lowerize], g, f], [/(android[\w\.\s\-]{0,9});.+build/i], [f, [g, "Generic"]]],
						engine: [[/windows.+\sedge\/([\w\.]+)/i], [b, [m, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [m, b], [/rv\:([\w\.]{1,9}).+(gecko)/i], [b, m]],
						os: [[/microsoft\s(windows)\s(vista|xp)/i], [m, b], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [m, [b, T.str, M.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[m, "Windows"], [b, T.str, M.os.windows.version]], [/\((bb)(10);/i], [[m, "BlackBerry"], b], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [m, b], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[m, "Symbian"], b], [/\((series40);/i], [m], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[m, "Firefox OS"], b], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [m, b], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[m, "Chromium OS"], b], [/(sunos)\s?([\w\.\d]*)/i], [[m, "Solaris"], b], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [m, b], [/(haiku)\s(\w+)/i], [m, b], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[b, /_/g, "."], [m, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[m, "Mac OS"], [b, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [m, b]]
					}
					  , O = function(e, t) {
						if ("object" === typeof e && (t = e,
						e = a),
						!(this instanceof O))
							return new O(e,t).getResult();
						var i = e || (o && o.navigator && o.navigator.userAgent ? o.navigator.userAgent : s)
						  , n = t ? k.extend(E, t) : E;
						return this.getBrowser = function() {
							var e = {
								name: a,
								version: a
							};
							return T.rgx.call(e, i, n.browser),
							e.major = k.major(e.version),
							e
						}
						,
						this.getCPU = function() {
							var e = {
								architecture: a
							};
							return T.rgx.call(e, i, n.cpu),
							e
						}
						,
						this.getDevice = function() {
							var e = {
								vendor: a,
								model: a,
								type: a
							};
							return T.rgx.call(e, i, n.device),
							e
						}
						,
						this.getEngine = function() {
							var e = {
								name: a,
								version: a
							};
							return T.rgx.call(e, i, n.engine),
							e
						}
						,
						this.getOS = function() {
							var e = {
								name: a,
								version: a
							};
							return T.rgx.call(e, i, n.os),
							e
						}
						,
						this.getResult = function() {
							return {
								ua: this.getUA(),
								browser: this.getBrowser(),
								engine: this.getEngine(),
								os: this.getOS(),
								device: this.getDevice(),
								cpu: this.getCPU()
							}
						}
						,
						this.getUA = function() {
							return i
						}
						,
						this.setUA = function(e) {
							return i = e,
							this
						}
						,
						this
					};
					O.VERSION = r,
					O.BROWSER = {
						NAME: m,
						MAJOR: p,
						VERSION: b
					},
					O.CPU = {
						ARCHITECTURE: _
					},
					O.DEVICE = {
						MODEL: f,
						VENDOR: g,
						TYPE: v,
						CONSOLE: y,
						MOBILE: w,
						SMARTTV: C,
						TABLET: x,
						WEARABLE: $,
						EMBEDDED: S
					},
					O.ENGINE = {
						NAME: m,
						VERSION: b
					},
					O.OS = {
						NAME: m,
						VERSION: b
					},
					typeof t !== d ? (typeof e !== d && e.exports && (t = e.exports = O),
					t.UAParser = O) : "function" === c && i(3) ? (n = function() {
						return O
					}
					.call(t, i, t, e),
					n === a || (e.exports = n)) : o && (o.UAParser = O);
					var A = o && (o.jQuery || o.Zepto);
					if (typeof A !== d) {
						var I = new O;
						A.ua = I.getResult(),
						A.ua.get = function() {
							return I.getUA()
						}
						,
						A.ua.set = function(e) {
							I.setUA(e);
							var t = I.getResult();
							for (var i in t)
								A.ua[i] = t[i]
						}
					}
				}
				)("object" === typeof window ? window : this)
			}
			, function(e, t) {
				(function(t) {
					e.exports = t
				}
				).call(t, {})
			}
			, function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var n in i)
							Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
					}
					return e
				}
				  , o = i(0)
				  , a = o.DEVICE_TYPES
				  , r = o.defaultData
				  , s = function(e) {
					switch (e) {
					case a.MOBILE:
						return {
							isMobile: !0
						};
					case a.TABLET:
						return {
							isTablet: !0
						};
					case a.SMART_TV:
						return {
							isSmartTV: !0
						};
					case a.CONSOLE:
						return {
							isConsole: !0
						};
					case a.WEARABLE:
						return {
							isWearable: !0
						};
					case a.BROWSER:
						return {
							isBrowser: !0
						};
					default:
						return r
					}
				}
				  , l = function(e, t, i, n, o) {
					return {
						isBrowser: e,
						browserMajorVersion: t.major,
						browserFullVersion: t.version,
						browserName: t.name,
						engineName: i.name || !1,
						engineVersion: i.version,
						osName: n.name,
						osVersion: n.version,
						userAgent: o
					}
				}
				  , c = function(e, t, i, o) {
					return n({}, e, {
						vendor: t.vendor,
						model: t.model,
						os: i.name,
						osVersion: i.version,
						ua: o
					})
				}
				  , d = function(e, t, i, n) {
					return {
						isSmartTV: e,
						engineName: t.name,
						engineVersion: t.version,
						osName: i.name,
						osVersion: i.version,
						userAgent: n
					}
				}
				  , u = function(e, t, i, n) {
					return {
						isConsole: e,
						engineName: t.name,
						engineVersion: t.version,
						osName: i.name,
						osVersion: i.version,
						userAgent: n
					}
				}
				  , h = function(e, t, i, n) {
					return {
						isWearable: e,
						engineName: t.name,
						engineVersion: t.version,
						osName: i.name,
						osVersion: i.version,
						userAgent: n
					}
				}
				  , p = t.getNavigatorInstance = function() {
					return !("undefined" === typeof window || !window.navigator && !navigator) && (window.navigator || navigator)
				}
				  , f = t.isIOS13Check = function(e) {
					var t = p();
					return t && t.platform && (-1 !== t.platform.indexOf(e) || "MacIntel" === t.platform && t.maxTouchPoints > 1 && !window.MSStream)
				}
				;
				e.exports = {
					checkType: s,
					broPayload: l,
					mobilePayload: c,
					stvPayload: d,
					consolePayload: u,
					wearPayload: h,
					getNavigatorInstance: p,
					isIOS13Check: f
				}
			}
			])
		},
		823: function(e, t, i) {
			var n = i(563);
			e.exports = function(e, t, i) {
				return void 0 === i ? n(e, t, !1) : n(e, i, !1 !== t)
			}
		},
		563: function(e) {
			e.exports = function(e, t, i, n) {
				var o, a = 0;
				function r() {
					var r = this
					  , s = Number(new Date) - a
					  , l = arguments;
					function c() {
						a = Number(new Date),
						i.apply(r, l)
					}
					function d() {
						o = void 0
					}
					n && !o && c(),
					o && clearTimeout(o),
					void 0 === n && s > e ? c() : !0 !== t && (o = setTimeout(n ? d : c, void 0 === n ? e - s : e))
				}
				return "boolean" !== typeof t && (n = i,
				i = t,
				t = void 0),
				r
			}
		},
		23: function(e, t, i) {
			!function(t, i) {
				e.exports = i()
			}("undefined" != typeof self && self, (function() {
				return function(e) {
					function t(n) {
						if (i[n])
							return i[n].exports;
						var o = i[n] = {
							i: n,
							l: !1,
							exports: {}
						};
						return e[n].call(o.exports, o, o.exports, t),
						o.l = !0,
						o.exports
					}
					var i = {};
					return t.m = e,
					t.c = i,
					t.d = function(e, i, n) {
						t.o(e, i) || Object.defineProperty(e, i, {
							configurable: !1,
							enumerable: !0,
							get: n
						})
					}
					,
					t.n = function(e) {
						var i = e && e.__esModule ? function() {
							return e.default
						}
						: function() {
							return e
						}
						;
						return t.d(i, "a", i),
						i
					}
					,
					t.o = function(e, t) {
						return Object.prototype.hasOwnProperty.call(e, t)
					}
					,
					t.p = "",
					t(t.s = 60)
				}([function(e, t) {
					function i(e, t) {
						var i = e[1] || ""
						  , o = e[3];
						if (!o)
							return i;
						if (t && "function" == typeof btoa) {
							var a = n(o);
							return [i].concat(o.sources.map((function(e) {
								return "/*# sourceURL=" + o.sourceRoot + e + " */"
							}
							))).concat([a]).join("\n")
						}
						return [i].join("\n")
					}
					function n(e) {
						return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
					}
					e.exports = function(e) {
						var t = [];
						return t.toString = function() {
							return this.map((function(t) {
								var n = i(t, e);
								return t[2] ? "@media " + t[2] + "{" + n + "}" : n
							}
							)).join("")
						}
						,
						t.i = function(e, i) {
							"string" == typeof e && (e = [[null, e, ""]]);
							for (var n = {}, o = 0; o < this.length; o++) {
								var a = this[o][0];
								"number" == typeof a && (n[a] = !0)
							}
							for (o = 0; o < e.length; o++) {
								var r = e[o];
								"number" == typeof r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"),
								t.push(r))
							}
						}
						,
						t
					}
				}
				, function(e, t, i) {
					function n(e) {
						for (var t = 0; t < e.length; t++) {
							var i = e[t]
							  , n = d[i.id];
							if (n) {
								n.refs++;
								for (var o = 0; o < n.parts.length; o++)
									n.parts[o](i.parts[o]);
								for (; o < i.parts.length; o++)
									n.parts.push(a(i.parts[o]));
								n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
							} else {
								var r = [];
								for (o = 0; o < i.parts.length; o++)
									r.push(a(i.parts[o]));
								d[i.id] = {
									id: i.id,
									refs: 1,
									parts: r
								}
							}
						}
					}
					function o() {
						var e = document.createElement("style");
						return e.type = "text/css",
						u.appendChild(e),
						e
					}
					function a(e) {
						var t, i, n = document.querySelector("style[" + g + '~="' + e.id + '"]');
						if (n) {
							if (f)
								return m;
							n.parentNode.removeChild(n)
						}
						if (b) {
							var a = p++;
							n = h || (h = o()),
							t = r.bind(null, n, a, !1),
							i = r.bind(null, n, a, !0)
						} else
							n = o(),
							t = s.bind(null, n),
							i = function() {
								n.parentNode.removeChild(n)
							}
							;
						return t(e),
						function(n) {
							if (n) {
								if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap)
									return;
								t(e = n)
							} else
								i()
						}
					}
					function r(e, t, i, n) {
						var o = i ? "" : n.css;
						if (e.styleSheet)
							e.styleSheet.cssText = _(t, o);
						else {
							var a = document.createTextNode(o)
							  , r = e.childNodes;
							r[t] && e.removeChild(r[t]),
							r.length ? e.insertBefore(a, r[t]) : e.appendChild(a)
						}
					}
					function s(e, t) {
						var i = t.css
						  , n = t.media
						  , o = t.sourceMap;
						if (n && e.setAttribute("media", n),
						v.ssrId && e.setAttribute(g, t.id),
						o && (i += "\n/*# sourceURL=" + o.sources[0] + " */",
						i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */"),
						e.styleSheet)
							e.styleSheet.cssText = i;
						else {
							for (; e.firstChild; )
								e.removeChild(e.firstChild);
							e.appendChild(document.createTextNode(i))
						}
					}
					var l = "undefined" != typeof document;
					if ("undefined" != typeof DEBUG && DEBUG && !l)
						throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
					var c = i(64)
					  , d = {}
					  , u = l && (document.head || document.getElementsByTagName("head")[0])
					  , h = null
					  , p = 0
					  , f = !1
					  , m = function() {}
					  , v = null
					  , g = "data-vue-ssr-id"
					  , b = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
					e.exports = function(e, t, i, o) {
						f = i,
						v = o || {};
						var a = c(e, t);
						return n(a),
						function(t) {
							for (var i = [], o = 0; o < a.length; o++) {
								var r = a[o]
								  , s = d[r.id];
								s.refs--,
								i.push(s)
							}
							t ? (a = c(e, t),
							n(a)) : a = [];
							for (o = 0; o < i.length; o++) {
								s = i[o];
								if (0 === s.refs) {
									for (var l = 0; l < s.parts.length; l++)
										s.parts[l]();
									delete d[s.id]
								}
							}
						}
					}
					;
					var _ = function() {
						var e = [];
						return function(t, i) {
							return e[t] = i,
							e.filter(Boolean).join("\n")
						}
					}()
				}
				, function(e, t) {
					e.exports = function(e, t, i, n, o, a) {
						var r, s = e = e || {}, l = typeof e.default;
						"object" !== l && "function" !== l || (r = e,
						s = e.default);
						var c, d = "function" == typeof s ? s.options : s;
						if (t && (d.render = t.render,
						d.staticRenderFns = t.staticRenderFns,
						d._compiled = !0),
						i && (d.functional = !0),
						o && (d._scopeId = o),
						a ? (c = function(e) {
							e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
							e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
							n && n.call(this, e),
							e && e._registeredComponents && e._registeredComponents.add(a)
						}
						,
						d._ssrRegister = c) : n && (c = n),
						c) {
							var u = d.functional
							  , h = u ? d.render : d.beforeCreate;
							u ? (d._injectStyles = c,
							d.render = function(e, t) {
								return c.call(t),
								h(e, t)
							}
							) : d.beforeCreate = h ? [].concat(h, c) : [c]
						}
						return {
							esModule: r,
							exports: s,
							options: d
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e, t) {
						var i, n = e && e.a;
						!(i = e && e.hsl ? (0,
						a.default)(e.hsl) : e && e.hex && e.hex.length > 0 ? (0,
						a.default)(e.hex) : e && e.hsv ? (0,
						a.default)(e.hsv) : e && e.rgba ? (0,
						a.default)(e.rgba) : e && e.rgb ? (0,
						a.default)(e.rgb) : (0,
						a.default)(e)) || void 0 !== i._a && null !== i._a || i.setAlpha(n || 1);
						var o = i.toHsl()
						  , r = i.toHsv();
						return 0 === o.s && (r.h = o.h = e.h || e.hsl && e.hsl.h || t || 0),
						{
							hsl: o,
							hex: i.toHexString().toUpperCase(),
							hex8: i.toHex8String().toUpperCase(),
							rgba: i.toRgb(),
							hsv: r,
							oldHue: e.h || t || o.h,
							source: e.source,
							a: e.a || i.getAlpha()
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(65)
					  , a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(o);
					t.default = {
						props: ["value"],
						data: function() {
							return {
								val: n(this.value)
							}
						},
						computed: {
							colors: {
								get: function() {
									return this.val
								},
								set: function(e) {
									this.val = e,
									this.$emit("input", e)
								}
							}
						},
						watch: {
							value: function(e) {
								this.val = n(e)
							}
						},
						methods: {
							colorChange: function(e, t) {
								this.oldHue = this.colors.hsl.h,
								this.colors = n(e, t || this.oldHue)
							},
							isValidHex: function(e) {
								return (0,
								a.default)(e).isValid()
							},
							simpleCheckForValidColor: function(e) {
								for (var t = ["r", "g", "b", "a", "h", "s", "l", "v"], i = 0, n = 0, o = 0; o < t.length; o++) {
									var a = t[o];
									e[a] && (i++,
									isNaN(e[a]) || n++)
								}
								if (i === n)
									return e
							},
							paletteUpperCase: function(e) {
								return e.map((function(e) {
									return e.toUpperCase()
								}
								))
							},
							isTransparent: function(e) {
								return 0 === (0,
								a.default)(e).getAlpha()
							}
						}
					}
				}
				, function(e, t) {
					var i = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
					"number" == typeof __g && (__g = i)
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(66)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(36)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(68)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/common/EditableInput.vue",
					t.default = u.exports
				}
				, function(e, t) {
					var i = {}.hasOwnProperty;
					e.exports = function(e, t) {
						return i.call(e, t)
					}
				}
				, function(e, t, i) {
					var n = i(8)
					  , o = i(18);
					e.exports = i(9) ? function(e, t, i) {
						return n.f(e, t, o(1, i))
					}
					: function(e, t, i) {
						return e[t] = i,
						e
					}
				}
				, function(e, t, i) {
					var n = i(16)
					  , o = i(42)
					  , a = i(25)
					  , r = Object.defineProperty;
					t.f = i(9) ? Object.defineProperty : function(e, t, i) {
						if (n(e),
						t = a(t, !0),
						n(i),
						o)
							try {
								return r(e, t, i)
							} catch (e) {}
						if ("get"in i || "set"in i)
							throw TypeError("Accessors not supported!");
						return "value"in i && (e[t] = i.value),
						e
					}
				}
				, function(e, t, i) {
					e.exports = !i(17)((function() {
						return 7 != Object.defineProperty({}, "a", {
							get: function() {
								return 7
							}
						}).a
					}
					))
				}
				, function(e, t, i) {
					var n = i(90)
					  , o = i(24);
					e.exports = function(e) {
						return n(o(e))
					}
				}
				, function(e, t, i) {
					var n = i(29)("wks")
					  , o = i(19)
					  , a = i(4).Symbol
					  , r = "function" == typeof a;
					(e.exports = function(e) {
						return n[e] || (n[e] = r && a[e] || (r ? a : o)("Symbol." + e))
					}
					).store = n
				}
				, function(e, t) {
					e.exports = function(e) {
						return "object" == typeof e ? null !== e : "function" == typeof e
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(111)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(51)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(113)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/common/Hue.vue",
					t.default = u.exports
				}
				, function(e, t) {
					e.exports = !0
				}
				, function(e, t) {
					var i = e.exports = {
						version: "2.6.11"
					};
					"number" == typeof __e && (__e = i)
				}
				, function(e, t, i) {
					var n = i(12);
					e.exports = function(e) {
						if (!n(e))
							throw TypeError(e + " is not an object!");
						return e
					}
				}
				, function(e, t) {
					e.exports = function(e) {
						try {
							return !!e()
						} catch (e) {
							return !0
						}
					}
				}
				, function(e, t) {
					e.exports = function(e, t) {
						return {
							enumerable: !(1 & e),
							configurable: !(2 & e),
							writable: !(4 & e),
							value: t
						}
					}
				}
				, function(e, t) {
					var i = 0
					  , n = Math.random();
					e.exports = function(e) {
						return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + n).toString(36))
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(123)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(54)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(127)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/common/Saturation.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(128)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(55)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(133)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/common/Alpha.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(130)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(56)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(132)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/common/Checkboard.vue",
					t.default = u.exports
				}
				, function(e, t) {
					var i = Math.ceil
					  , n = Math.floor;
					e.exports = function(e) {
						return isNaN(e = +e) ? 0 : (e > 0 ? n : i)(e)
					}
				}
				, function(e, t) {
					e.exports = function(e) {
						if (void 0 == e)
							throw TypeError("Can't call method on  " + e);
						return e
					}
				}
				, function(e, t, i) {
					var n = i(12);
					e.exports = function(e, t) {
						if (!n(e))
							return e;
						var i, o;
						if (t && "function" == typeof (i = e.toString) && !n(o = i.call(e)))
							return o;
						if ("function" == typeof (i = e.valueOf) && !n(o = i.call(e)))
							return o;
						if (!t && "function" == typeof (i = e.toString) && !n(o = i.call(e)))
							return o;
						throw TypeError("Can't convert object to primitive value")
					}
				}
				, function(e, t) {
					e.exports = {}
				}
				, function(e, t, i) {
					var n = i(46)
					  , o = i(30);
					e.exports = Object.keys || function(e) {
						return n(e, o)
					}
				}
				, function(e, t, i) {
					var n = i(29)("keys")
					  , o = i(19);
					e.exports = function(e) {
						return n[e] || (n[e] = o(e))
					}
				}
				, function(e, t, i) {
					var n = i(15)
					  , o = i(4)
					  , a = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
					(e.exports = function(e, t) {
						return a[e] || (a[e] = void 0 !== t ? t : {})
					}
					)("versions", []).push({
						version: n.version,
						mode: i(14) ? "pure" : "global",
						copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
					})
				}
				, function(e, t) {
					e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
				}
				, function(e, t, i) {
					var n = i(8).f
					  , o = i(6)
					  , a = i(11)("toStringTag");
					e.exports = function(e, t, i) {
						e && !o(e = i ? e : e.prototype, a) && n(e, a, {
							configurable: !0,
							value: t
						})
					}
				}
				, function(e, t, i) {
					t.f = i(11)
				}
				, function(e, t, i) {
					var n = i(4)
					  , o = i(15)
					  , a = i(14)
					  , r = i(32)
					  , s = i(8).f;
					e.exports = function(e) {
						var t = o.Symbol || (o.Symbol = a ? {} : n.Symbol || {});
						"_" == e.charAt(0) || e in t || s(t, e, {
							value: r.f(e)
						})
					}
				}
				, function(e, t) {
					t.f = {}.propertyIsEnumerable
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(3)
					  , a = n(o)
					  , r = i(5)
					  , s = n(r)
					  , l = ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#CCCCCC", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"];
					t.default = {
						name: "Compact",
						mixins: [a.default],
						props: {
							palette: {
								type: Array,
								default: function() {
									return l
								}
							}
						},
						components: {
							"ed-in": s.default
						},
						computed: {
							pick: function() {
								return this.colors.hex.toUpperCase()
							}
						},
						methods: {
							handlerClick: function(e) {
								this.colorChange({
									hex: e,
									source: "hex"
								})
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}),
					t.default = {
						name: "editableInput",
						props: {
							label: String,
							labelText: String,
							desc: String,
							value: [String, Number],
							max: Number,
							min: Number,
							arrowOffset: {
								type: Number,
								default: 1
							}
						},
						computed: {
							val: {
								get: function() {
									return this.value
								},
								set: function(e) {
									if (!(void 0 !== this.max && +e > this.max))
										return e;
									this.$refs.input.value = this.max
								}
							},
							labelId: function() {
								return "input__label__" + this.label + "__" + Math.random().toString().slice(2, 5)
							},
							labelSpanText: function() {
								return this.labelText || this.label
							}
						},
						methods: {
							update: function(e) {
								this.handleChange(e.target.value)
							},
							handleChange: function(e) {
								var t = {};
								t[this.label] = e,
								(void 0 === t.hex && void 0 === t["#"] || e.length > 5) && this.$emit("change", t)
							},
							handleKeyDown: function(e) {
								var t = this.val
								  , i = Number(t);
								if (i) {
									var n = this.arrowOffset || 1;
									38 === e.keyCode && (t = i + n,
									this.handleChange(t),
									e.preventDefault()),
									40 === e.keyCode && (t = i - n,
									this.handleChange(t),
									e.preventDefault())
								}
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var n = i(3)
					  , o = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(n)
					  , a = ["#FFFFFF", "#F2F2F2", "#E6E6E6", "#D9D9D9", "#CCCCCC", "#BFBFBF", "#B3B3B3", "#A6A6A6", "#999999", "#8C8C8C", "#808080", "#737373", "#666666", "#595959", "#4D4D4D", "#404040", "#333333", "#262626", "#0D0D0D", "#000000"];
					t.default = {
						name: "Grayscale",
						mixins: [o.default],
						props: {
							palette: {
								type: Array,
								default: function() {
									return a
								}
							}
						},
						components: {},
						computed: {
							pick: function() {
								return this.colors.hex.toUpperCase()
							}
						},
						methods: {
							handlerClick: function(e) {
								this.colorChange({
									hex: e,
									source: "hex"
								})
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(5)
					  , a = n(o)
					  , r = i(3)
					  , s = n(r);
					t.default = {
						name: "Material",
						mixins: [s.default],
						components: {
							"ed-in": a.default
						},
						methods: {
							onChange: function(e) {
								e && (e.hex ? this.isValidHex(e.hex) && this.colorChange({
									hex: e.hex,
									source: "hex"
								}) : (e.r || e.g || e.b) && this.colorChange({
									r: e.r || this.colors.rgba.r,
									g: e.g || this.colors.rgba.g,
									b: e.b || this.colors.rgba.b,
									a: e.a || this.colors.rgba.a,
									source: "rgba"
								}))
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(81)
					  , a = n(o)
					  , r = i(3)
					  , s = n(r)
					  , l = i(13)
					  , c = n(l);
					t.default = {
						name: "Slider",
						mixins: [s.default],
						props: {
							swatches: {
								type: Array,
								default: function() {
									return [{
										s: .5,
										l: .8
									}, {
										s: .5,
										l: .65
									}, {
										s: .5,
										l: .5
									}, {
										s: .5,
										l: .35
									}, {
										s: .5,
										l: .2
									}]
								}
							}
						},
						components: {
							hue: c.default
						},
						computed: {
							normalizedSwatches: function() {
								return this.swatches.map((function(e) {
									return "object" !== (void 0 === e ? "undefined" : (0,
									a.default)(e)) ? {
										s: .5,
										l: e
									} : e
								}
								))
							}
						},
						methods: {
							isActive: function(e, t) {
								var i = this.colors.hsl;
								return 1 === i.l && 1 === e.l || 0 === i.l && 0 === e.l || Math.abs(i.l - e.l) < .01 && Math.abs(i.s - e.s) < .01
							},
							hueChange: function(e) {
								this.colorChange(e)
							},
							handleSwClick: function(e, t) {
								this.colorChange({
									h: this.colors.hsl.h,
									s: t.s,
									l: t.l,
									source: "hsl"
								})
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					var n = i(14)
					  , o = i(41)
					  , a = i(44)
					  , r = i(7)
					  , s = i(26)
					  , l = i(88)
					  , c = i(31)
					  , d = i(95)
					  , u = i(11)("iterator")
					  , h = !([].keys && "next"in [].keys())
					  , p = function() {
						return this
					};
					e.exports = function(e, t, i, f, m, v, g) {
						l(i, t, f);
						var b, _, y, w = function(e) {
							if (!h && e in S)
								return S[e];
							switch (e) {
							case "keys":
							case "values":
								return function() {
									return new i(this,e)
								}
							}
							return function() {
								return new i(this,e)
							}
						}, x = t + " Iterator", C = "values" == m, $ = !1, S = e.prototype, k = S[u] || S["@@iterator"] || m && S[m], T = k || w(m), M = m ? C ? w("entries") : T : void 0, E = "Array" == t && S.entries || k;
						if (E && (y = d(E.call(new e))) !== Object.prototype && y.next && (c(y, x, !0),
						n || "function" == typeof y[u] || r(y, u, p)),
						C && k && "values" !== k.name && ($ = !0,
						T = function() {
							return k.call(this)
						}
						),
						n && !g || !h && !$ && S[u] || r(S, u, T),
						s[t] = T,
						s[x] = p,
						m)
							if (b = {
								values: C ? T : w("values"),
								keys: v ? T : w("keys"),
								entries: M
							},
							g)
								for (_ in b)
									_ in S || a(S, _, b[_]);
							else
								o(o.P + o.F * (h || $), t, b);
						return b
					}
				}
				, function(e, t, i) {
					var n = i(4)
					  , o = i(15)
					  , a = i(86)
					  , r = i(7)
					  , s = i(6)
					  , l = function(e, t, i) {
						var c, d, u, h = e & l.F, p = e & l.G, f = e & l.S, m = e & l.P, v = e & l.B, g = e & l.W, b = p ? o : o[t] || (o[t] = {}), _ = b.prototype, y = p ? n : f ? n[t] : (n[t] || {}).prototype;
						for (c in p && (i = t),
						i)
							(d = !h && y && void 0 !== y[c]) && s(b, c) || (u = d ? y[c] : i[c],
							b[c] = p && "function" != typeof y[c] ? i[c] : v && d ? a(u, n) : g && y[c] == u ? function(e) {
								var t = function(t, i, n) {
									if (this instanceof e) {
										switch (arguments.length) {
										case 0:
											return new e;
										case 1:
											return new e(t);
										case 2:
											return new e(t,i)
										}
										return new e(t,i,n)
									}
									return e.apply(this, arguments)
								};
								return t.prototype = e.prototype,
								t
							}(u) : m && "function" == typeof u ? a(Function.call, u) : u,
							m && ((b.virtual || (b.virtual = {}))[c] = u,
							e & l.R && _ && !_[c] && r(_, c, u)))
					};
					l.F = 1,
					l.G = 2,
					l.S = 4,
					l.P = 8,
					l.B = 16,
					l.W = 32,
					l.U = 64,
					l.R = 128,
					e.exports = l
				}
				, function(e, t, i) {
					e.exports = !i(9) && !i(17)((function() {
						return 7 != Object.defineProperty(i(43)("div"), "a", {
							get: function() {
								return 7
							}
						}).a
					}
					))
				}
				, function(e, t, i) {
					var n = i(12)
					  , o = i(4).document
					  , a = n(o) && n(o.createElement);
					e.exports = function(e) {
						return a ? o.createElement(e) : {}
					}
				}
				, function(e, t, i) {
					e.exports = i(7)
				}
				, function(e, t, i) {
					var n = i(16)
					  , o = i(89)
					  , a = i(30)
					  , r = i(28)("IE_PROTO")
					  , s = function() {}
					  , l = function() {
						var e, t = i(43)("iframe"), n = a.length;
						for (t.style.display = "none",
						i(94).appendChild(t),
						t.src = "javascript:",
						e = t.contentWindow.document,
						e.open(),
						e.write("<script>document.F=Object<\/script>"),
						e.close(),
						l = e.F; n--; )
							delete l.prototype[a[n]];
						return l()
					};
					e.exports = Object.create || function(e, t) {
						var i;
						return null !== e ? (s.prototype = n(e),
						i = new s,
						s.prototype = null,
						i[r] = e) : i = l(),
						void 0 === t ? i : o(i, t)
					}
				}
				, function(e, t, i) {
					var n = i(6)
					  , o = i(10)
					  , a = i(91)(!1)
					  , r = i(28)("IE_PROTO");
					e.exports = function(e, t) {
						var i, s = o(e), l = 0, c = [];
						for (i in s)
							i != r && n(s, i) && c.push(i);
						for (; t.length > l; )
							n(s, i = t[l++]) && (~a(c, i) || c.push(i));
						return c
					}
				}
				, function(e, t) {
					var i = {}.toString;
					e.exports = function(e) {
						return i.call(e).slice(8, -1)
					}
				}
				, function(e, t, i) {
					var n = i(24);
					e.exports = function(e) {
						return Object(n(e))
					}
				}
				, function(e, t) {
					t.f = Object.getOwnPropertySymbols
				}
				, function(e, t, i) {
					var n = i(46)
					  , o = i(30).concat("length", "prototype");
					t.f = Object.getOwnPropertyNames || function(e) {
						return n(e, o)
					}
				}
				, function(e, t, i) {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}),
					t.default = {
						name: "Hue",
						props: {
							value: Object,
							direction: {
								type: String,
								default: "horizontal"
							}
						},
						data: function() {
							return {
								oldHue: 0,
								pullDirection: ""
							}
						},
						computed: {
							colors: function() {
								var e = this.value.hsl.h;
								return 0 !== e && e - this.oldHue > 0 && (this.pullDirection = "right"),
								0 !== e && e - this.oldHue < 0 && (this.pullDirection = "left"),
								this.oldHue = e,
								this.value
							},
							directionClass: function() {
								return {
									"vc-hue--horizontal": "horizontal" === this.direction,
									"vc-hue--vertical": "vertical" === this.direction
								}
							},
							pointerTop: function() {
								return "vertical" === this.direction ? 0 === this.colors.hsl.h && "right" === this.pullDirection ? 0 : -100 * this.colors.hsl.h / 360 + 100 + "%" : 0
							},
							pointerLeft: function() {
								return "vertical" === this.direction ? 0 : 0 === this.colors.hsl.h && "right" === this.pullDirection ? "100%" : 100 * this.colors.hsl.h / 360 + "%"
							}
						},
						methods: {
							handleChange: function(e, t) {
								!t && e.preventDefault();
								var i = this.$refs.container;
								if (i) {
									var n, o, a = i.clientWidth, r = i.clientHeight, s = i.getBoundingClientRect().left + window.pageXOffset, l = i.getBoundingClientRect().top + window.pageYOffset, c = e.pageX || (e.touches ? e.touches[0].pageX : 0), d = e.pageY || (e.touches ? e.touches[0].pageY : 0), u = c - s, h = d - l;
									"vertical" === this.direction ? (h < 0 ? n = 360 : h > r ? n = 0 : (o = -100 * h / r + 100,
									n = 360 * o / 100),
									this.colors.hsl.h !== n && this.$emit("change", {
										h: n,
										s: this.colors.hsl.s,
										l: this.colors.hsl.l,
										a: this.colors.hsl.a,
										source: "hsl"
									})) : (u < 0 ? n = 0 : u > a ? n = 360 : (o = 100 * u / a,
									n = 360 * o / 100),
									this.colors.hsl.h !== n && this.$emit("change", {
										h: n,
										s: this.colors.hsl.s,
										l: this.colors.hsl.l,
										a: this.colors.hsl.a,
										source: "hsl"
									}))
								}
							},
							handleMouseDown: function(e) {
								this.handleChange(e, !0),
								window.addEventListener("mousemove", this.handleChange),
								window.addEventListener("mouseup", this.handleMouseUp)
							},
							handleMouseUp: function(e) {
								this.unbindEventListeners()
							},
							unbindEventListeners: function() {
								window.removeEventListener("mousemove", this.handleChange),
								window.removeEventListener("mouseup", this.handleMouseUp)
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(118)
					  , a = n(o)
					  , r = i(3)
					  , s = n(r)
					  , l = ["red", "pink", "purple", "deepPurple", "indigo", "blue", "lightBlue", "cyan", "teal", "green", "lightGreen", "lime", "yellow", "amber", "orange", "deepOrange", "brown", "blueGrey", "black"]
					  , c = ["900", "700", "500", "300", "100"]
					  , d = function() {
						var e = [];
						return l.forEach((function(t) {
							var i = [];
							"black" === t.toLowerCase() || "white" === t.toLowerCase() ? i = i.concat(["#000000", "#FFFFFF"]) : c.forEach((function(e) {
								var n = a.default[t][e];
								i.push(n.toUpperCase())
							}
							)),
							e.push(i)
						}
						)),
						e
					}();
					t.default = {
						name: "Swatches",
						mixins: [s.default],
						props: {
							palette: {
								type: Array,
								default: function() {
									return d
								}
							}
						},
						computed: {
							pick: function() {
								return this.colors.hex
							}
						},
						methods: {
							equal: function(e) {
								return e.toLowerCase() === this.colors.hex.toLowerCase()
							},
							handlerClick: function(e) {
								this.colorChange({
									hex: e,
									source: "hex"
								})
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(3)
					  , a = n(o)
					  , r = i(5)
					  , s = n(r)
					  , l = i(20)
					  , c = n(l)
					  , d = i(13)
					  , u = n(d)
					  , h = i(21)
					  , p = n(h);
					t.default = {
						name: "Photoshop",
						mixins: [a.default],
						props: {
							head: {
								type: String,
								default: "Color Picker"
							},
							disableFields: {
								type: Boolean,
								default: !1
							},
							hasResetButton: {
								type: Boolean,
								default: !1
							},
							acceptLabel: {
								type: String,
								default: "OK"
							},
							cancelLabel: {
								type: String,
								default: "Cancel"
							},
							resetLabel: {
								type: String,
								default: "Reset"
							},
							newLabel: {
								type: String,
								default: "new"
							},
							currentLabel: {
								type: String,
								default: "current"
							}
						},
						components: {
							saturation: c.default,
							hue: u.default,
							alpha: p.default,
							"ed-in": s.default
						},
						data: function() {
							return {
								currentColor: "#FFF"
							}
						},
						computed: {
							hsv: function() {
								var e = this.colors.hsv;
								return {
									h: e.h.toFixed(),
									s: (100 * e.s).toFixed(),
									v: (100 * e.v).toFixed()
								}
							},
							hex: function() {
								var e = this.colors.hex;
								return e && e.replace("#", "")
							}
						},
						created: function() {
							this.currentColor = this.colors.hex
						},
						methods: {
							childChange: function(e) {
								this.colorChange(e)
							},
							inputChange: function(e) {
								e && (e["#"] ? this.isValidHex(e["#"]) && this.colorChange({
									hex: e["#"],
									source: "hex"
								}) : e.r || e.g || e.b || e.a ? this.colorChange({
									r: e.r || this.colors.rgba.r,
									g: e.g || this.colors.rgba.g,
									b: e.b || this.colors.rgba.b,
									a: e.a || this.colors.rgba.a,
									source: "rgba"
								}) : (e.h || e.s || e.v) && this.colorChange({
									h: e.h || this.colors.hsv.h,
									s: e.s / 100 || this.colors.hsv.s,
									v: e.v / 100 || this.colors.hsv.v,
									source: "hsv"
								}))
							},
							clickCurrentColor: function() {
								this.colorChange({
									hex: this.currentColor,
									source: "hex"
								})
							},
							handleAccept: function() {
								this.$emit("ok")
							},
							handleCancel: function() {
								this.$emit("cancel")
							},
							handleReset: function() {
								this.$emit("reset")
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(125)
					  , a = n(o)
					  , r = i(126)
					  , s = n(r);
					t.default = {
						name: "Saturation",
						props: {
							value: Object
						},
						computed: {
							colors: function() {
								return this.value
							},
							bgColor: function() {
								return "hsl(" + this.colors.hsv.h + ", 100%, 50%)"
							},
							pointerTop: function() {
								return -100 * this.colors.hsv.v + 1 + 100 + "%"
							},
							pointerLeft: function() {
								return 100 * this.colors.hsv.s + "%"
							}
						},
						methods: {
							throttle: (0,
							s.default)((function(e, t) {
								e(t)
							}
							), 20, {
								leading: !0,
								trailing: !1
							}),
							handleChange: function(e, t) {
								!t && e.preventDefault();
								var i = this.$refs.container;
								if (i) {
									var n = i.clientWidth
									  , o = i.clientHeight
									  , r = i.getBoundingClientRect().left + window.pageXOffset
									  , s = i.getBoundingClientRect().top + window.pageYOffset
									  , l = e.pageX || (e.touches ? e.touches[0].pageX : 0)
									  , c = e.pageY || (e.touches ? e.touches[0].pageY : 0)
									  , d = (0,
									a.default)(l - r, 0, n)
									  , u = (0,
									a.default)(c - s, 0, o)
									  , h = d / n
									  , p = (0,
									a.default)(-u / o + 1, 0, 1);
									this.throttle(this.onChange, {
										h: this.colors.hsv.h,
										s: h,
										v: p,
										a: this.colors.hsv.a,
										source: "hsva"
									})
								}
							},
							onChange: function(e) {
								this.$emit("change", e)
							},
							handleMouseDown: function(e) {
								window.addEventListener("mousemove", this.handleChange),
								window.addEventListener("mouseup", this.handleChange),
								window.addEventListener("mouseup", this.handleMouseUp)
							},
							handleMouseUp: function(e) {
								this.unbindEventListeners()
							},
							unbindEventListeners: function() {
								window.removeEventListener("mousemove", this.handleChange),
								window.removeEventListener("mouseup", this.handleChange),
								window.removeEventListener("mouseup", this.handleMouseUp)
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var n = i(22)
					  , o = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(n);
					t.default = {
						name: "Alpha",
						props: {
							value: Object,
							onChange: Function
						},
						components: {
							checkboard: o.default
						},
						computed: {
							colors: function() {
								return this.value
							},
							gradientColor: function() {
								var e = this.colors.rgba
								  , t = [e.r, e.g, e.b].join(",");
								return "linear-gradient(to right, rgba(" + t + ", 0) 0%, rgba(" + t + ", 1) 100%)"
							}
						},
						methods: {
							handleChange: function(e, t) {
								!t && e.preventDefault();
								var i = this.$refs.container;
								if (i) {
									var n, o = i.clientWidth, a = i.getBoundingClientRect().left + window.pageXOffset, r = e.pageX || (e.touches ? e.touches[0].pageX : 0), s = r - a;
									n = s < 0 ? 0 : s > o ? 1 : Math.round(100 * s / o) / 100,
									this.colors.a !== n && this.$emit("change", {
										h: this.colors.hsl.h,
										s: this.colors.hsl.s,
										l: this.colors.hsl.l,
										a: n,
										source: "rgba"
									})
								}
							},
							handleMouseDown: function(e) {
								this.handleChange(e, !0),
								window.addEventListener("mousemove", this.handleChange),
								window.addEventListener("mouseup", this.handleMouseUp)
							},
							handleMouseUp: function() {
								this.unbindEventListeners()
							},
							unbindEventListeners: function() {
								window.removeEventListener("mousemove", this.handleChange),
								window.removeEventListener("mouseup", this.handleMouseUp)
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e, t, i) {
						if ("undefined" == typeof document)
							return null;
						var n = document.createElement("canvas");
						n.width = n.height = 2 * i;
						var o = n.getContext("2d");
						return o ? (o.fillStyle = e,
						o.fillRect(0, 0, n.width, n.height),
						o.fillStyle = t,
						o.fillRect(0, 0, i, i),
						o.translate(i, i),
						o.fillRect(0, 0, i, i),
						n.toDataURL()) : null
					}
					function o(e, t, i) {
						var o = e + "," + t + "," + i;
						if (a[o])
							return a[o];
						var r = n(e, t, i);
						return a[o] = r,
						r
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var a = {};
					t.default = {
						name: "Checkboard",
						props: {
							size: {
								type: [Number, String],
								default: 8
							},
							white: {
								type: String,
								default: "#fff"
							},
							grey: {
								type: String,
								default: "#e6e6e6"
							}
						},
						computed: {
							bgStyle: function() {
								return {
									"background-image": "url(" + o(this.white, this.grey, this.size) + ")"
								}
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(3)
					  , a = n(o)
					  , r = i(5)
					  , s = n(r)
					  , l = i(20)
					  , c = n(l)
					  , d = i(13)
					  , u = n(d)
					  , h = i(21)
					  , p = n(h)
					  , f = i(22)
					  , m = n(f)
					  , v = ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF", "rgba(0,0,0,0)"];
					t.default = {
						name: "Sketch",
						mixins: [a.default],
						components: {
							saturation: c.default,
							hue: u.default,
							alpha: p.default,
							"ed-in": s.default,
							checkboard: m.default
						},
						props: {
							presetColors: {
								type: Array,
								default: function() {
									return v
								}
							},
							disableAlpha: {
								type: Boolean,
								default: !1
							},
							disableFields: {
								type: Boolean,
								default: !1
							}
						},
						computed: {
							hex: function() {
								var e = void 0;
								return e = this.colors.a < 1 ? this.colors.hex8 : this.colors.hex,
								e.replace("#", "")
							},
							activeColor: function() {
								var e = this.colors.rgba;
								return "rgba(" + [e.r, e.g, e.b, e.a].join(",") + ")"
							}
						},
						methods: {
							handlePreset: function(e) {
								this.colorChange({
									hex: e,
									source: "hex"
								})
							},
							childChange: function(e) {
								this.colorChange(e)
							},
							inputChange: function(e) {
								e && (e.hex ? this.isValidHex(e.hex) && this.colorChange({
									hex: e.hex,
									source: "hex"
								}) : (e.r || e.g || e.b || e.a) && this.colorChange({
									r: e.r || this.colors.rgba.r,
									g: e.g || this.colors.rgba.g,
									b: e.b || this.colors.rgba.b,
									a: e.a || this.colors.rgba.a,
									source: "rgba"
								}))
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(3)
					  , a = n(o)
					  , r = i(5)
					  , s = n(r)
					  , l = i(20)
					  , c = n(l)
					  , d = i(13)
					  , u = n(d)
					  , h = i(21)
					  , p = n(h)
					  , f = i(22)
					  , m = n(f);
					t.default = {
						name: "Chrome",
						mixins: [a.default],
						props: {
							disableAlpha: {
								type: Boolean,
								default: !1
							},
							disableFields: {
								type: Boolean,
								default: !1
							}
						},
						components: {
							saturation: c.default,
							hue: u.default,
							alpha: p.default,
							"ed-in": s.default,
							checkboard: m.default
						},
						data: function() {
							return {
								fieldsIndex: 0,
								highlight: !1
							}
						},
						computed: {
							hsl: function() {
								var e = this.colors.hsl
								  , t = e.h
								  , i = e.s
								  , n = e.l;
								return {
									h: t.toFixed(),
									s: (100 * i).toFixed() + "%",
									l: (100 * n).toFixed() + "%"
								}
							},
							activeColor: function() {
								var e = this.colors.rgba;
								return "rgba(" + [e.r, e.g, e.b, e.a].join(",") + ")"
							},
							hasAlpha: function() {
								return this.colors.a < 1
							}
						},
						methods: {
							childChange: function(e) {
								this.colorChange(e)
							},
							inputChange: function(e) {
								if (e)
									if (e.hex)
										this.isValidHex(e.hex) && this.colorChange({
											hex: e.hex,
											source: "hex"
										});
									else if (e.r || e.g || e.b || e.a)
										this.colorChange({
											r: e.r || this.colors.rgba.r,
											g: e.g || this.colors.rgba.g,
											b: e.b || this.colors.rgba.b,
											a: e.a || this.colors.rgba.a,
											source: "rgba"
										});
									else if (e.h || e.s || e.l) {
										var t = e.s ? e.s.replace("%", "") / 100 : this.colors.hsl.s
										  , i = e.l ? e.l.replace("%", "") / 100 : this.colors.hsl.l;
										this.colorChange({
											h: e.h || this.colors.hsl.h,
											s: t,
											l: i,
											source: "hsl"
										})
									}
							},
							toggleViews: function() {
								this.fieldsIndex >= 2 ? this.fieldsIndex = 0 : this.fieldsIndex++
							},
							showHighlight: function() {
								this.highlight = !0
							},
							hideHighlight: function() {
								this.highlight = !1
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(5)
					  , a = n(o)
					  , r = i(3)
					  , s = n(r)
					  , l = ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"];
					t.default = {
						name: "Twitter",
						mixins: [s.default],
						components: {
							editableInput: a.default
						},
						props: {
							width: {
								type: [String, Number],
								default: 276
							},
							defaultColors: {
								type: Array,
								default: function() {
									return l
								}
							},
							triangle: {
								default: "top-left",
								validator: function(e) {
									return ["hide", "top-left", "top-right"].includes(e)
								}
							}
						},
						computed: {
							hsv: function() {
								var e = this.colors.hsv;
								return {
									h: e.h.toFixed(),
									s: (100 * e.s).toFixed(),
									v: (100 * e.v).toFixed()
								}
							},
							hex: function() {
								var e = this.colors.hex;
								return e && e.replace("#", "")
							}
						},
						methods: {
							equal: function(e) {
								return e.toLowerCase() === this.colors.hex.toLowerCase()
							},
							handlerClick: function(e) {
								this.colorChange({
									hex: e,
									source: "hex"
								})
							},
							inputChange: function(e) {
								e && (e["#"] ? this.isValidHex(e["#"]) && this.colorChange({
									hex: e["#"],
									source: "hex"
								}) : e.r || e.g || e.b || e.a ? this.colorChange({
									r: e.r || this.colors.rgba.r,
									g: e.g || this.colors.rgba.g,
									b: e.b || this.colors.rgba.b,
									a: e.a || this.colors.rgba.a,
									source: "rgba"
								}) : (e.h || e.s || e.v) && this.colorChange({
									h: e.h || this.colors.hsv.h,
									s: e.s / 100 || this.colors.hsv.s,
									v: e.v / 100 || this.colors.hsv.v,
									source: "hsv"
								}))
							}
						}
					}
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					var o = i(61)
					  , a = n(o)
					  , r = i(70)
					  , s = n(r)
					  , l = i(74)
					  , c = n(l)
					  , d = i(78)
					  , u = n(d)
					  , h = i(115)
					  , p = n(h)
					  , f = i(120)
					  , m = n(f)
					  , v = i(135)
					  , g = n(v)
					  , b = i(139)
					  , _ = n(b)
					  , y = i(143)
					  , w = n(y)
					  , x = i(21)
					  , C = n(x)
					  , $ = i(22)
					  , S = n($)
					  , k = i(5)
					  , T = n(k)
					  , M = i(13)
					  , E = n(M)
					  , O = i(20)
					  , A = n(O)
					  , I = i(3)
					  , F = n(I)
					  , D = {
						version: "2.8.1",
						Compact: a.default,
						Grayscale: s.default,
						Twitter: w.default,
						Material: c.default,
						Slider: u.default,
						Swatches: p.default,
						Photoshop: m.default,
						Sketch: g.default,
						Chrome: _.default,
						Alpha: C.default,
						Checkboard: S.default,
						EditableInput: T.default,
						Hue: E.default,
						Saturation: A.default,
						ColorMixin: F.default
					};
					e.exports = D
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(62)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(35)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(69)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Compact.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(63);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("6ce8a5a8", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-compact {\n  padding-top: 5px;\n  padding-left: 5px;\n  width: 245px;\n  border-radius: 2px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-compact-colors {\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-compact-color-item {\n  list-style: none;\n  width: 15px;\n  height: 15px;\n  float: left;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  cursor: pointer;\n}\n.vc-compact-color-item--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-compact-color-item--white .vc-compact-dot {\n  background: #000;\n}\n.vc-compact-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  bottom: 5px;\n  left: 5px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n", ""])
				}
				, function(e, t) {
					e.exports = function(e, t) {
						for (var i = [], n = {}, o = 0; o < t.length; o++) {
							var a = t[o]
							  , r = a[0]
							  , s = a[1]
							  , l = a[2]
							  , c = a[3]
							  , d = {
								id: e + ":" + o,
								css: s,
								media: l,
								sourceMap: c
							};
							n[r] ? n[r].parts.push(d) : i.push(n[r] = {
								id: r,
								parts: [d]
							})
						}
						return i
					}
				}
				, function(e, t, i) {
					var n;
					!function(o) {
						function a(e, t) {
							if (e = e || "",
							t = t || {},
							e instanceof a)
								return e;
							if (!(this instanceof a))
								return new a(e,t);
							var i = r(e);
							this._originalInput = e,
							this._r = i.r,
							this._g = i.g,
							this._b = i.b,
							this._a = i.a,
							this._roundA = H(100 * this._a) / 100,
							this._format = t.format || i.format,
							this._gradientType = t.gradientType,
							this._r < 1 && (this._r = H(this._r)),
							this._g < 1 && (this._g = H(this._g)),
							this._b < 1 && (this._b = H(this._b)),
							this._ok = i.ok,
							this._tc_id = V++
						}
						function r(e) {
							var t = {
								r: 0,
								g: 0,
								b: 0
							}
							  , i = 1
							  , n = null
							  , o = null
							  , a = null
							  , r = !1
							  , l = !1;
							return "string" == typeof e && (e = N(e)),
							"object" == typeof e && (B(e.r) && B(e.g) && B(e.b) ? (t = s(e.r, e.g, e.b),
							r = !0,
							l = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : B(e.h) && B(e.s) && B(e.v) ? (n = R(e.s),
							o = R(e.v),
							t = u(e.h, n, o),
							r = !0,
							l = "hsv") : B(e.h) && B(e.s) && B(e.l) && (n = R(e.s),
							a = R(e.l),
							t = c(e.h, n, a),
							r = !0,
							l = "hsl"),
							e.hasOwnProperty("a") && (i = e.a)),
							i = M(i),
							{
								ok: r,
								format: e.format || l,
								r: W(255, U(t.r, 0)),
								g: W(255, U(t.g, 0)),
								b: W(255, U(t.b, 0)),
								a: i
							}
						}
						function s(e, t, i) {
							return {
								r: 255 * E(e, 255),
								g: 255 * E(t, 255),
								b: 255 * E(i, 255)
							}
						}
						function l(e, t, i) {
							e = E(e, 255),
							t = E(t, 255),
							i = E(i, 255);
							var n, o, a = U(e, t, i), r = W(e, t, i), s = (a + r) / 2;
							if (a == r)
								n = o = 0;
							else {
								var l = a - r;
								switch (o = s > .5 ? l / (2 - a - r) : l / (a + r),
								a) {
								case e:
									n = (t - i) / l + (t < i ? 6 : 0);
									break;
								case t:
									n = (i - e) / l + 2;
									break;
								case i:
									n = (e - t) / l + 4
								}
								n /= 6
							}
							return {
								h: n,
								s: o,
								l: s
							}
						}
						function c(e, t, i) {
							function n(e, t, i) {
								return i < 0 && (i += 1),
								i > 1 && (i -= 1),
								i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
							}
							var o, a, r;
							if (e = E(e, 360),
							t = E(t, 100),
							i = E(i, 100),
							0 === t)
								o = a = r = i;
							else {
								var s = i < .5 ? i * (1 + t) : i + t - i * t
								  , l = 2 * i - s;
								o = n(l, s, e + 1 / 3),
								a = n(l, s, e),
								r = n(l, s, e - 1 / 3)
							}
							return {
								r: 255 * o,
								g: 255 * a,
								b: 255 * r
							}
						}
						function d(e, t, i) {
							e = E(e, 255),
							t = E(t, 255),
							i = E(i, 255);
							var n, o, a = U(e, t, i), r = W(e, t, i), s = a, l = a - r;
							if (o = 0 === a ? 0 : l / a,
							a == r)
								n = 0;
							else {
								switch (a) {
								case e:
									n = (t - i) / l + (t < i ? 6 : 0);
									break;
								case t:
									n = (i - e) / l + 2;
									break;
								case i:
									n = (e - t) / l + 4
								}
								n /= 6
							}
							return {
								h: n,
								s: o,
								v: s
							}
						}
						function u(e, t, i) {
							e = 6 * E(e, 360),
							t = E(t, 100),
							i = E(i, 100);
							var n = o.floor(e)
							  , a = e - n
							  , r = i * (1 - t)
							  , s = i * (1 - a * t)
							  , l = i * (1 - (1 - a) * t)
							  , c = n % 6;
							return {
								r: 255 * [i, s, r, r, l, i][c],
								g: 255 * [l, i, i, s, r, r][c],
								b: 255 * [r, r, l, i, i, s][c]
							}
						}
						function h(e, t, i, n) {
							var o = [D(H(e).toString(16)), D(H(t).toString(16)), D(H(i).toString(16))];
							return n && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
						}
						function p(e, t, i, n, o) {
							var a = [D(H(e).toString(16)), D(H(t).toString(16)), D(H(i).toString(16)), D(P(n))];
							return o && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) && a[3].charAt(0) == a[3].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) + a[3].charAt(0) : a.join("")
						}
						function f(e, t, i, n) {
							return [D(P(n)), D(H(e).toString(16)), D(H(t).toString(16)), D(H(i).toString(16))].join("")
						}
						function m(e, t) {
							t = 0 === t ? 0 : t || 10;
							var i = a(e).toHsl();
							return i.s -= t / 100,
							i.s = O(i.s),
							a(i)
						}
						function v(e, t) {
							t = 0 === t ? 0 : t || 10;
							var i = a(e).toHsl();
							return i.s += t / 100,
							i.s = O(i.s),
							a(i)
						}
						function g(e) {
							return a(e).desaturate(100)
						}
						function b(e, t) {
							t = 0 === t ? 0 : t || 10;
							var i = a(e).toHsl();
							return i.l += t / 100,
							i.l = O(i.l),
							a(i)
						}
						function _(e, t) {
							t = 0 === t ? 0 : t || 10;
							var i = a(e).toRgb();
							return i.r = U(0, W(255, i.r - H(-t / 100 * 255))),
							i.g = U(0, W(255, i.g - H(-t / 100 * 255))),
							i.b = U(0, W(255, i.b - H(-t / 100 * 255))),
							a(i)
						}
						function y(e, t) {
							t = 0 === t ? 0 : t || 10;
							var i = a(e).toHsl();
							return i.l -= t / 100,
							i.l = O(i.l),
							a(i)
						}
						function w(e, t) {
							var i = a(e).toHsl()
							  , n = (i.h + t) % 360;
							return i.h = n < 0 ? 360 + n : n,
							a(i)
						}
						function x(e) {
							var t = a(e).toHsl();
							return t.h = (t.h + 180) % 360,
							a(t)
						}
						function C(e) {
							var t = a(e).toHsl()
							  , i = t.h;
							return [a(e), a({
								h: (i + 120) % 360,
								s: t.s,
								l: t.l
							}), a({
								h: (i + 240) % 360,
								s: t.s,
								l: t.l
							})]
						}
						function $(e) {
							var t = a(e).toHsl()
							  , i = t.h;
							return [a(e), a({
								h: (i + 90) % 360,
								s: t.s,
								l: t.l
							}), a({
								h: (i + 180) % 360,
								s: t.s,
								l: t.l
							}), a({
								h: (i + 270) % 360,
								s: t.s,
								l: t.l
							})]
						}
						function S(e) {
							var t = a(e).toHsl()
							  , i = t.h;
							return [a(e), a({
								h: (i + 72) % 360,
								s: t.s,
								l: t.l
							}), a({
								h: (i + 216) % 360,
								s: t.s,
								l: t.l
							})]
						}
						function k(e, t, i) {
							t = t || 6,
							i = i || 30;
							var n = a(e).toHsl()
							  , o = 360 / i
							  , r = [a(e)];
							for (n.h = (n.h - (o * t >> 1) + 720) % 360; --t; )
								n.h = (n.h + o) % 360,
								r.push(a(n));
							return r
						}
						function T(e, t) {
							t = t || 6;
							for (var i = a(e).toHsv(), n = i.h, o = i.s, r = i.v, s = [], l = 1 / t; t--; )
								s.push(a({
									h: n,
									s: o,
									v: r
								})),
								r = (r + l) % 1;
							return s
						}
						function M(e) {
							return e = parseFloat(e),
							(isNaN(e) || e < 0 || e > 1) && (e = 1),
							e
						}
						function E(e, t) {
							I(e) && (e = "100%");
							var i = F(e);
							return e = W(t, U(0, parseFloat(e))),
							i && (e = parseInt(e * t, 10) / 100),
							o.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
						}
						function O(e) {
							return W(1, U(0, e))
						}
						function A(e) {
							return parseInt(e, 16)
						}
						function I(e) {
							return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
						}
						function F(e) {
							return "string" == typeof e && -1 != e.indexOf("%")
						}
						function D(e) {
							return 1 == e.length ? "0" + e : "" + e
						}
						function R(e) {
							return e <= 1 && (e = 100 * e + "%"),
							e
						}
						function P(e) {
							return o.round(255 * parseFloat(e)).toString(16)
						}
						function L(e) {
							return A(e) / 255
						}
						function B(e) {
							return !!Y.CSS_UNIT.exec(e)
						}
						function N(e) {
							e = e.replace(z, "").replace(G, "").toLowerCase();
							var t, i = !1;
							if (q[e])
								e = q[e],
								i = !0;
							else if ("transparent" == e)
								return {
									r: 0,
									g: 0,
									b: 0,
									a: 0,
									format: "name"
								};
							return (t = Y.rgb.exec(e)) ? {
								r: t[1],
								g: t[2],
								b: t[3]
							} : (t = Y.rgba.exec(e)) ? {
								r: t[1],
								g: t[2],
								b: t[3],
								a: t[4]
							} : (t = Y.hsl.exec(e)) ? {
								h: t[1],
								s: t[2],
								l: t[3]
							} : (t = Y.hsla.exec(e)) ? {
								h: t[1],
								s: t[2],
								l: t[3],
								a: t[4]
							} : (t = Y.hsv.exec(e)) ? {
								h: t[1],
								s: t[2],
								v: t[3]
							} : (t = Y.hsva.exec(e)) ? {
								h: t[1],
								s: t[2],
								v: t[3],
								a: t[4]
							} : (t = Y.hex8.exec(e)) ? {
								r: A(t[1]),
								g: A(t[2]),
								b: A(t[3]),
								a: L(t[4]),
								format: i ? "name" : "hex8"
							} : (t = Y.hex6.exec(e)) ? {
								r: A(t[1]),
								g: A(t[2]),
								b: A(t[3]),
								format: i ? "name" : "hex"
							} : (t = Y.hex4.exec(e)) ? {
								r: A(t[1] + "" + t[1]),
								g: A(t[2] + "" + t[2]),
								b: A(t[3] + "" + t[3]),
								a: L(t[4] + "" + t[4]),
								format: i ? "name" : "hex8"
							} : !!(t = Y.hex3.exec(e)) && {
								r: A(t[1] + "" + t[1]),
								g: A(t[2] + "" + t[2]),
								b: A(t[3] + "" + t[3]),
								format: i ? "name" : "hex"
							}
						}
						function j(e) {
							var t, i;
							return e = e || {
								level: "AA",
								size: "small"
							},
							t = (e.level || "AA").toUpperCase(),
							i = (e.size || "small").toLowerCase(),
							"AA" !== t && "AAA" !== t && (t = "AA"),
							"small" !== i && "large" !== i && (i = "small"),
							{
								level: t,
								size: i
							}
						}
						var z = /^\s+/
						  , G = /\s+$/
						  , V = 0
						  , H = o.round
						  , W = o.min
						  , U = o.max
						  , X = o.random;
						a.prototype = {
							isDark: function() {
								return this.getBrightness() < 128
							},
							isLight: function() {
								return !this.isDark()
							},
							isValid: function() {
								return this._ok
							},
							getOriginalInput: function() {
								return this._originalInput
							},
							getFormat: function() {
								return this._format
							},
							getAlpha: function() {
								return this._a
							},
							getBrightness: function() {
								var e = this.toRgb();
								return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
							},
							getLuminance: function() {
								var e, t, i, n, a, r, s = this.toRgb();
								return e = s.r / 255,
								t = s.g / 255,
								i = s.b / 255,
								n = e <= .03928 ? e / 12.92 : o.pow((e + .055) / 1.055, 2.4),
								a = t <= .03928 ? t / 12.92 : o.pow((t + .055) / 1.055, 2.4),
								r = i <= .03928 ? i / 12.92 : o.pow((i + .055) / 1.055, 2.4),
								.2126 * n + .7152 * a + .0722 * r
							},
							setAlpha: function(e) {
								return this._a = M(e),
								this._roundA = H(100 * this._a) / 100,
								this
							},
							toHsv: function() {
								var e = d(this._r, this._g, this._b);
								return {
									h: 360 * e.h,
									s: e.s,
									v: e.v,
									a: this._a
								}
							},
							toHsvString: function() {
								var e = d(this._r, this._g, this._b)
								  , t = H(360 * e.h)
								  , i = H(100 * e.s)
								  , n = H(100 * e.v);
								return 1 == this._a ? "hsv(" + t + ", " + i + "%, " + n + "%)" : "hsva(" + t + ", " + i + "%, " + n + "%, " + this._roundA + ")"
							},
							toHsl: function() {
								var e = l(this._r, this._g, this._b);
								return {
									h: 360 * e.h,
									s: e.s,
									l: e.l,
									a: this._a
								}
							},
							toHslString: function() {
								var e = l(this._r, this._g, this._b)
								  , t = H(360 * e.h)
								  , i = H(100 * e.s)
								  , n = H(100 * e.l);
								return 1 == this._a ? "hsl(" + t + ", " + i + "%, " + n + "%)" : "hsla(" + t + ", " + i + "%, " + n + "%, " + this._roundA + ")"
							},
							toHex: function(e) {
								return h(this._r, this._g, this._b, e)
							},
							toHexString: function(e) {
								return "#" + this.toHex(e)
							},
							toHex8: function(e) {
								return p(this._r, this._g, this._b, this._a, e)
							},
							toHex8String: function(e) {
								return "#" + this.toHex8(e)
							},
							toRgb: function() {
								return {
									r: H(this._r),
									g: H(this._g),
									b: H(this._b),
									a: this._a
								}
							},
							toRgbString: function() {
								return 1 == this._a ? "rgb(" + H(this._r) + ", " + H(this._g) + ", " + H(this._b) + ")" : "rgba(" + H(this._r) + ", " + H(this._g) + ", " + H(this._b) + ", " + this._roundA + ")"
							},
							toPercentageRgb: function() {
								return {
									r: H(100 * E(this._r, 255)) + "%",
									g: H(100 * E(this._g, 255)) + "%",
									b: H(100 * E(this._b, 255)) + "%",
									a: this._a
								}
							},
							toPercentageRgbString: function() {
								return 1 == this._a ? "rgb(" + H(100 * E(this._r, 255)) + "%, " + H(100 * E(this._g, 255)) + "%, " + H(100 * E(this._b, 255)) + "%)" : "rgba(" + H(100 * E(this._r, 255)) + "%, " + H(100 * E(this._g, 255)) + "%, " + H(100 * E(this._b, 255)) + "%, " + this._roundA + ")"
							},
							toName: function() {
								return 0 === this._a ? "transparent" : !(this._a < 1) && (K[h(this._r, this._g, this._b, !0)] || !1)
							},
							toFilter: function(e) {
								var t = "#" + f(this._r, this._g, this._b, this._a)
								  , i = t
								  , n = this._gradientType ? "GradientType = 1, " : "";
								if (e) {
									var o = a(e);
									i = "#" + f(o._r, o._g, o._b, o._a)
								}
								return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + t + ",endColorstr=" + i + ")"
							},
							toString: function(e) {
								var t = !!e;
								e = e || this._format;
								var i = !1
								  , n = this._a < 1 && this._a >= 0;
								return t || !n || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (i = this.toRgbString()),
								"prgb" === e && (i = this.toPercentageRgbString()),
								"hex" !== e && "hex6" !== e || (i = this.toHexString()),
								"hex3" === e && (i = this.toHexString(!0)),
								"hex4" === e && (i = this.toHex8String(!0)),
								"hex8" === e && (i = this.toHex8String()),
								"name" === e && (i = this.toName()),
								"hsl" === e && (i = this.toHslString()),
								"hsv" === e && (i = this.toHsvString()),
								i || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
							},
							clone: function() {
								return a(this.toString())
							},
							_applyModification: function(e, t) {
								var i = e.apply(null, [this].concat([].slice.call(t)));
								return this._r = i._r,
								this._g = i._g,
								this._b = i._b,
								this.setAlpha(i._a),
								this
							},
							lighten: function() {
								return this._applyModification(b, arguments)
							},
							brighten: function() {
								return this._applyModification(_, arguments)
							},
							darken: function() {
								return this._applyModification(y, arguments)
							},
							desaturate: function() {
								return this._applyModification(m, arguments)
							},
							saturate: function() {
								return this._applyModification(v, arguments)
							},
							greyscale: function() {
								return this._applyModification(g, arguments)
							},
							spin: function() {
								return this._applyModification(w, arguments)
							},
							_applyCombination: function(e, t) {
								return e.apply(null, [this].concat([].slice.call(t)))
							},
							analogous: function() {
								return this._applyCombination(k, arguments)
							},
							complement: function() {
								return this._applyCombination(x, arguments)
							},
							monochromatic: function() {
								return this._applyCombination(T, arguments)
							},
							splitcomplement: function() {
								return this._applyCombination(S, arguments)
							},
							triad: function() {
								return this._applyCombination(C, arguments)
							},
							tetrad: function() {
								return this._applyCombination($, arguments)
							}
						},
						a.fromRatio = function(e, t) {
							if ("object" == typeof e) {
								var i = {};
								for (var n in e)
									e.hasOwnProperty(n) && (i[n] = "a" === n ? e[n] : R(e[n]));
								e = i
							}
							return a(e, t)
						}
						,
						a.equals = function(e, t) {
							return !(!e || !t) && a(e).toRgbString() == a(t).toRgbString()
						}
						,
						a.random = function() {
							return a.fromRatio({
								r: X(),
								g: X(),
								b: X()
							})
						}
						,
						a.mix = function(e, t, i) {
							i = 0 === i ? 0 : i || 50;
							var n = a(e).toRgb()
							  , o = a(t).toRgb()
							  , r = i / 100;
							return a({
								r: (o.r - n.r) * r + n.r,
								g: (o.g - n.g) * r + n.g,
								b: (o.b - n.b) * r + n.b,
								a: (o.a - n.a) * r + n.a
							})
						}
						,
						a.readability = function(e, t) {
							var i = a(e)
							  , n = a(t);
							return (o.max(i.getLuminance(), n.getLuminance()) + .05) / (o.min(i.getLuminance(), n.getLuminance()) + .05)
						}
						,
						a.isReadable = function(e, t, i) {
							var n, o, r = a.readability(e, t);
							switch (o = !1,
							n = j(i),
							n.level + n.size) {
							case "AAsmall":
							case "AAAlarge":
								o = r >= 4.5;
								break;
							case "AAlarge":
								o = r >= 3;
								break;
							case "AAAsmall":
								o = r >= 7
							}
							return o
						}
						,
						a.mostReadable = function(e, t, i) {
							var n, o, r, s, l = null, c = 0;
							i = i || {},
							o = i.includeFallbackColors,
							r = i.level,
							s = i.size;
							for (var d = 0; d < t.length; d++)
								(n = a.readability(e, t[d])) > c && (c = n,
								l = a(t[d]));
							return a.isReadable(e, l, {
								level: r,
								size: s
							}) || !o ? l : (i.includeFallbackColors = !1,
							a.mostReadable(e, ["#fff", "#000"], i))
						}
						;
						var q = a.names = {
							aliceblue: "f0f8ff",
							antiquewhite: "faebd7",
							aqua: "0ff",
							aquamarine: "7fffd4",
							azure: "f0ffff",
							beige: "f5f5dc",
							bisque: "ffe4c4",
							black: "000",
							blanchedalmond: "ffebcd",
							blue: "00f",
							blueviolet: "8a2be2",
							brown: "a52a2a",
							burlywood: "deb887",
							burntsienna: "ea7e5d",
							cadetblue: "5f9ea0",
							chartreuse: "7fff00",
							chocolate: "d2691e",
							coral: "ff7f50",
							cornflowerblue: "6495ed",
							cornsilk: "fff8dc",
							crimson: "dc143c",
							cyan: "0ff",
							darkblue: "00008b",
							darkcyan: "008b8b",
							darkgoldenrod: "b8860b",
							darkgray: "a9a9a9",
							darkgreen: "006400",
							darkgrey: "a9a9a9",
							darkkhaki: "bdb76b",
							darkmagenta: "8b008b",
							darkolivegreen: "556b2f",
							darkorange: "ff8c00",
							darkorchid: "9932cc",
							darkred: "8b0000",
							darksalmon: "e9967a",
							darkseagreen: "8fbc8f",
							darkslateblue: "483d8b",
							darkslategray: "2f4f4f",
							darkslategrey: "2f4f4f",
							darkturquoise: "00ced1",
							darkviolet: "9400d3",
							deeppink: "ff1493",
							deepskyblue: "00bfff",
							dimgray: "696969",
							dimgrey: "696969",
							dodgerblue: "1e90ff",
							firebrick: "b22222",
							floralwhite: "fffaf0",
							forestgreen: "228b22",
							fuchsia: "f0f",
							gainsboro: "dcdcdc",
							ghostwhite: "f8f8ff",
							gold: "ffd700",
							goldenrod: "daa520",
							gray: "808080",
							green: "008000",
							greenyellow: "adff2f",
							grey: "808080",
							honeydew: "f0fff0",
							hotpink: "ff69b4",
							indianred: "cd5c5c",
							indigo: "4b0082",
							ivory: "fffff0",
							khaki: "f0e68c",
							lavender: "e6e6fa",
							lavenderblush: "fff0f5",
							lawngreen: "7cfc00",
							lemonchiffon: "fffacd",
							lightblue: "add8e6",
							lightcoral: "f08080",
							lightcyan: "e0ffff",
							lightgoldenrodyellow: "fafad2",
							lightgray: "d3d3d3",
							lightgreen: "90ee90",
							lightgrey: "d3d3d3",
							lightpink: "ffb6c1",
							lightsalmon: "ffa07a",
							lightseagreen: "20b2aa",
							lightskyblue: "87cefa",
							lightslategray: "789",
							lightslategrey: "789",
							lightsteelblue: "b0c4de",
							lightyellow: "ffffe0",
							lime: "0f0",
							limegreen: "32cd32",
							linen: "faf0e6",
							magenta: "f0f",
							maroon: "800000",
							mediumaquamarine: "66cdaa",
							mediumblue: "0000cd",
							mediumorchid: "ba55d3",
							mediumpurple: "9370db",
							mediumseagreen: "3cb371",
							mediumslateblue: "7b68ee",
							mediumspringgreen: "00fa9a",
							mediumturquoise: "48d1cc",
							mediumvioletred: "c71585",
							midnightblue: "191970",
							mintcream: "f5fffa",
							mistyrose: "ffe4e1",
							moccasin: "ffe4b5",
							navajowhite: "ffdead",
							navy: "000080",
							oldlace: "fdf5e6",
							olive: "808000",
							olivedrab: "6b8e23",
							orange: "ffa500",
							orangered: "ff4500",
							orchid: "da70d6",
							palegoldenrod: "eee8aa",
							palegreen: "98fb98",
							paleturquoise: "afeeee",
							palevioletred: "db7093",
							papayawhip: "ffefd5",
							peachpuff: "ffdab9",
							peru: "cd853f",
							pink: "ffc0cb",
							plum: "dda0dd",
							powderblue: "b0e0e6",
							purple: "800080",
							rebeccapurple: "663399",
							red: "f00",
							rosybrown: "bc8f8f",
							royalblue: "4169e1",
							saddlebrown: "8b4513",
							salmon: "fa8072",
							sandybrown: "f4a460",
							seagreen: "2e8b57",
							seashell: "fff5ee",
							sienna: "a0522d",
							silver: "c0c0c0",
							skyblue: "87ceeb",
							slateblue: "6a5acd",
							slategray: "708090",
							slategrey: "708090",
							snow: "fffafa",
							springgreen: "00ff7f",
							steelblue: "4682b4",
							tan: "d2b48c",
							teal: "008080",
							thistle: "d8bfd8",
							tomato: "ff6347",
							turquoise: "40e0d0",
							violet: "ee82ee",
							wheat: "f5deb3",
							white: "fff",
							whitesmoke: "f5f5f5",
							yellow: "ff0",
							yellowgreen: "9acd32"
						}
						  , K = a.hexNames = function(e) {
							var t = {};
							for (var i in e)
								e.hasOwnProperty(i) && (t[e[i]] = i);
							return t
						}(q)
						  , Y = function() {
							var e = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)"
							  , t = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?"
							  , i = "[\\s|\\(]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")[,|\\s]+(" + e + ")\\s*\\)?";
							return {
								CSS_UNIT: new RegExp(e),
								rgb: new RegExp("rgb" + t),
								rgba: new RegExp("rgba" + i),
								hsl: new RegExp("hsl" + t),
								hsla: new RegExp("hsla" + i),
								hsv: new RegExp("hsv" + t),
								hsva: new RegExp("hsva" + i),
								hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
								hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
								hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
								hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
							}
						}();
						void 0 !== e && e.exports ? e.exports = a : void 0 !== (n = function() {
							return a
						}
						.call(t, i, t, e)) && (e.exports = n)
					}(Math)
				}
				, function(e, t, i) {
					var n = i(67);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("0f73e73c", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-editable-input {\n  position: relative;\n}\n.vc-input__input {\n  padding: 0;\n  border: 0;\n  outline: none;\n}\n.vc-input__label {\n  text-transform: capitalize;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-editable-input"
						}, [i("input", {
							directives: [{
								name: "model",
								rawName: "v-model",
								value: e.val,
								expression: "val"
							}],
							ref: "input",
							staticClass: "vc-input__input",
							attrs: {
								"aria-labelledby": e.labelId
							},
							domProps: {
								value: e.val
							},
							on: {
								keydown: e.handleKeyDown,
								input: [function(t) {
									t.target.composing || (e.val = t.target.value)
								}
								, e.update]
							}
						}), e._v(" "), i("span", {
							staticClass: "vc-input__label",
							attrs: {
								for: e.label,
								id: e.labelId
							}
						}, [e._v(e._s(e.labelSpanText))]), e._v(" "), i("span", {
							staticClass: "vc-input__desc"
						}, [e._v(e._s(e.desc))])])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-compact",
							attrs: {
								role: "application",
								"aria-label": "Compact color picker"
							}
						}, [i("ul", {
							staticClass: "vc-compact-colors",
							attrs: {
								role: "listbox"
							}
						}, e._l(e.paletteUpperCase(e.palette), (function(t) {
							return i("li", {
								key: t,
								staticClass: "vc-compact-color-item",
								class: {
									"vc-compact-color-item--white": "#FFFFFF" === t
								},
								style: {
									background: t
								},
								attrs: {
									role: "option",
									"aria-label": "color:" + t,
									"aria-selected": t === e.pick
								},
								on: {
									click: function(i) {
										return e.handlerClick(t)
									}
								}
							}, [i("div", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: t === e.pick,
									expression: "c === pick"
								}],
								staticClass: "vc-compact-dot"
							})])
						}
						)), 0)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(71)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(37)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(73)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Grayscale.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(72);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("21ddbb74", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-grayscale {\n  width: 125px;\n  border-radius: 2px;\n  box-shadow: 0 2px 15px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-grayscale-colors {\n  border-radius: 2px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n}\n.vc-grayscale-color-item {\n  list-style: none;\n  width: 25px;\n  height: 25px;\n  float: left;\n  position: relative;\n  cursor: pointer;\n}\n.vc-grayscale-color-item--white .vc-grayscale-dot {\n  background: #000;\n}\n.vc-grayscale-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin: -3px 0 0 -2px;\n  border-radius: 50%;\n  opacity: 1;\n  background: #fff;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-grayscale",
							attrs: {
								role: "application",
								"aria-label": "Grayscale color picker"
							}
						}, [i("ul", {
							staticClass: "vc-grayscale-colors",
							attrs: {
								role: "listbox"
							}
						}, e._l(e.paletteUpperCase(e.palette), (function(t) {
							return i("li", {
								key: t,
								staticClass: "vc-grayscale-color-item",
								class: {
									"vc-grayscale-color-item--white": "#FFFFFF" == t
								},
								style: {
									background: t
								},
								attrs: {
									role: "option",
									"aria-label": "Color:" + t,
									"aria-selected": t === e.pick
								},
								on: {
									click: function(i) {
										return e.handlerClick(t)
									}
								}
							}, [i("div", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: t === e.pick,
									expression: "c === pick"
								}],
								staticClass: "vc-grayscale-dot"
							})])
						}
						)), 0)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(75)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(38)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(77)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Material.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(76);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("1ff3af73", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, '\n.vc-material {\n  width: 98px;\n  height: 98px;\n  padding: 16px;\n  font-family: "Roboto";\n  position: relative;\n  border-radius: 2px;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n  background-color: #fff;\n}\n.vc-material .vc-input__input {\n  width: 100%;\n  margin-top: 12px;\n  font-size: 15px;\n  color: #333;\n  height: 30px;\n}\n.vc-material .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 11px;\n  color: #999;\n  text-transform: capitalize;\n}\n.vc-material-hex {\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n}\n.vc-material-split {\n  display: flex;\n  margin-right: -10px;\n  padding-top: 11px;\n}\n.vc-material-third {\n  flex: 1;\n  padding-right: 10px;\n}\n', ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-material",
							attrs: {
								role: "application",
								"aria-label": "Material color picker"
							}
						}, [i("ed-in", {
							staticClass: "vc-material-hex",
							style: {
								borderColor: e.colors.hex
							},
							attrs: {
								label: "hex"
							},
							on: {
								change: e.onChange
							},
							model: {
								value: e.colors.hex,
								callback: function(t) {
									e.$set(e.colors, "hex", t)
								},
								expression: "colors.hex"
							}
						}), e._v(" "), i("div", {
							staticClass: "vc-material-split"
						}, [i("div", {
							staticClass: "vc-material-third"
						}, [i("ed-in", {
							attrs: {
								label: "r"
							},
							on: {
								change: e.onChange
							},
							model: {
								value: e.colors.rgba.r,
								callback: function(t) {
									e.$set(e.colors.rgba, "r", t)
								},
								expression: "colors.rgba.r"
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-material-third"
						}, [i("ed-in", {
							attrs: {
								label: "g"
							},
							on: {
								change: e.onChange
							},
							model: {
								value: e.colors.rgba.g,
								callback: function(t) {
									e.$set(e.colors.rgba, "g", t)
								},
								expression: "colors.rgba.g"
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-material-third"
						}, [i("ed-in", {
							attrs: {
								label: "b"
							},
							on: {
								change: e.onChange
							},
							model: {
								value: e.colors.rgba.b,
								callback: function(t) {
									e.$set(e.colors.rgba, "b", t)
								},
								expression: "colors.rgba.b"
							}
						})], 1)])], 1)
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(79)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(39)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(114)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Slider.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(80);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("7982aa43", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-slider {\n  position: relative;\n  width: 410px;\n}\n.vc-slider-hue-warp {\n  height: 12px;\n  position: relative;\n}\n.vc-slider-hue-warp .vc-hue-picker {\n  width: 14px;\n  height: 14px;\n  border-radius: 6px;\n  transform: translate(-7px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-slider-swatches {\n  display: flex;\n  margin-top: 20px;\n}\n.vc-slider-swatch {\n  margin-right: 1px;\n  flex: 1;\n  width: 20%;\n}\n.vc-slider-swatch:first-child {\n  margin-right: 1px;\n}\n.vc-slider-swatch:first-child .vc-slider-swatch-picker {\n  border-radius: 2px 0px 0px 2px;\n}\n.vc-slider-swatch:last-child {\n  margin-right: 0;\n}\n.vc-slider-swatch:last-child .vc-slider-swatch-picker {\n  border-radius: 0px 2px 2px 0px;\n}\n.vc-slider-swatch-picker {\n  cursor: pointer;\n  height: 12px;\n}\n.vc-slider-swatch:nth-child(n) .vc-slider-swatch-picker.vc-slider-swatch-picker--active {\n  transform: scaleY(1.8);\n  border-radius: 3.6px/2px;\n}\n.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 1px #ddd;\n}\n.vc-slider-swatch-picker--active.vc-slider-swatch-picker--white {\n  box-shadow: inset 0 0 0 0.6px #ddd;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}
					t.__esModule = !0;
					var o = i(82)
					  , a = n(o)
					  , r = i(100)
					  , s = n(r)
					  , l = "function" == typeof s.default && "symbol" == typeof a.default ? function(e) {
						return typeof e
					}
					: function(e) {
						return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
					}
					;
					t.default = "function" == typeof s.default && "symbol" === l(a.default) ? function(e) {
						return void 0 === e ? "undefined" : l(e)
					}
					: function(e) {
						return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : l(e)
					}
				}
				, function(e, t, i) {
					e.exports = {
						default: i(83),
						__esModule: !0
					}
				}
				, function(e, t, i) {
					i(84),
					i(96),
					e.exports = i(32).f("iterator")
				}
				, function(e, t, i) {
					"use strict";
					var n = i(85)(!0);
					i(40)(String, "String", (function(e) {
						this._t = String(e),
						this._i = 0
					}
					), (function() {
						var e, t = this._t, i = this._i;
						return i >= t.length ? {
							value: void 0,
							done: !0
						} : (e = n(t, i),
						this._i += e.length,
						{
							value: e,
							done: !1
						})
					}
					))
				}
				, function(e, t, i) {
					var n = i(23)
					  , o = i(24);
					e.exports = function(e) {
						return function(t, i) {
							var a, r, s = String(o(t)), l = n(i), c = s.length;
							return l < 0 || l >= c ? e ? "" : void 0 : (a = s.charCodeAt(l),
							a < 55296 || a > 56319 || l + 1 === c || (r = s.charCodeAt(l + 1)) < 56320 || r > 57343 ? e ? s.charAt(l) : a : e ? s.slice(l, l + 2) : r - 56320 + (a - 55296 << 10) + 65536)
						}
					}
				}
				, function(e, t, i) {
					var n = i(87);
					e.exports = function(e, t, i) {
						if (n(e),
						void 0 === t)
							return e;
						switch (i) {
						case 1:
							return function(i) {
								return e.call(t, i)
							}
							;
						case 2:
							return function(i, n) {
								return e.call(t, i, n)
							}
							;
						case 3:
							return function(i, n, o) {
								return e.call(t, i, n, o)
							}
						}
						return function() {
							return e.apply(t, arguments)
						}
					}
				}
				, function(e, t) {
					e.exports = function(e) {
						if ("function" != typeof e)
							throw TypeError(e + " is not a function!");
						return e
					}
				}
				, function(e, t, i) {
					"use strict";
					var n = i(45)
					  , o = i(18)
					  , a = i(31)
					  , r = {};
					i(7)(r, i(11)("iterator"), (function() {
						return this
					}
					)),
					e.exports = function(e, t, i) {
						e.prototype = n(r, {
							next: o(1, i)
						}),
						a(e, t + " Iterator")
					}
				}
				, function(e, t, i) {
					var n = i(8)
					  , o = i(16)
					  , a = i(27);
					e.exports = i(9) ? Object.defineProperties : function(e, t) {
						o(e);
						for (var i, r = a(t), s = r.length, l = 0; s > l; )
							n.f(e, i = r[l++], t[i]);
						return e
					}
				}
				, function(e, t, i) {
					var n = i(47);
					e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
						return "String" == n(e) ? e.split("") : Object(e)
					}
				}
				, function(e, t, i) {
					var n = i(10)
					  , o = i(92)
					  , a = i(93);
					e.exports = function(e) {
						return function(t, i, r) {
							var s, l = n(t), c = o(l.length), d = a(r, c);
							if (e && i != i) {
								for (; c > d; )
									if ((s = l[d++]) != s)
										return !0
							} else
								for (; c > d; d++)
									if ((e || d in l) && l[d] === i)
										return e || d || 0;
							return !e && -1
						}
					}
				}
				, function(e, t, i) {
					var n = i(23)
					  , o = Math.min;
					e.exports = function(e) {
						return e > 0 ? o(n(e), 9007199254740991) : 0
					}
				}
				, function(e, t, i) {
					var n = i(23)
					  , o = Math.max
					  , a = Math.min;
					e.exports = function(e, t) {
						return e = n(e),
						e < 0 ? o(e + t, 0) : a(e, t)
					}
				}
				, function(e, t, i) {
					var n = i(4).document;
					e.exports = n && n.documentElement
				}
				, function(e, t, i) {
					var n = i(6)
					  , o = i(48)
					  , a = i(28)("IE_PROTO")
					  , r = Object.prototype;
					e.exports = Object.getPrototypeOf || function(e) {
						return e = o(e),
						n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null
					}
				}
				, function(e, t, i) {
					i(97);
					for (var n = i(4), o = i(7), a = i(26), r = i(11)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
						var c = s[l]
						  , d = n[c]
						  , u = d && d.prototype;
						u && !u[r] && o(u, r, c),
						a[c] = a.Array
					}
				}
				, function(e, t, i) {
					"use strict";
					var n = i(98)
					  , o = i(99)
					  , a = i(26)
					  , r = i(10);
					e.exports = i(40)(Array, "Array", (function(e, t) {
						this._t = r(e),
						this._i = 0,
						this._k = t
					}
					), (function() {
						var e = this._t
						  , t = this._k
						  , i = this._i++;
						return !e || i >= e.length ? (this._t = void 0,
						o(1)) : o(0, "keys" == t ? i : "values" == t ? e[i] : [i, e[i]])
					}
					), "values"),
					a.Arguments = a.Array,
					n("keys"),
					n("values"),
					n("entries")
				}
				, function(e, t) {
					e.exports = function() {}
				}
				, function(e, t) {
					e.exports = function(e, t) {
						return {
							value: t,
							done: !!e
						}
					}
				}
				, function(e, t, i) {
					e.exports = {
						default: i(101),
						__esModule: !0
					}
				}
				, function(e, t, i) {
					i(102),
					i(108),
					i(109),
					i(110),
					e.exports = i(15).Symbol
				}
				, function(e, t, i) {
					"use strict";
					var n = i(4)
					  , o = i(6)
					  , a = i(9)
					  , r = i(41)
					  , s = i(44)
					  , l = i(103).KEY
					  , c = i(17)
					  , d = i(29)
					  , u = i(31)
					  , h = i(19)
					  , p = i(11)
					  , f = i(32)
					  , m = i(33)
					  , v = i(104)
					  , g = i(105)
					  , b = i(16)
					  , _ = i(12)
					  , y = i(48)
					  , w = i(10)
					  , x = i(25)
					  , C = i(18)
					  , $ = i(45)
					  , S = i(106)
					  , k = i(107)
					  , T = i(49)
					  , M = i(8)
					  , E = i(27)
					  , O = k.f
					  , A = M.f
					  , I = S.f
					  , F = n.Symbol
					  , D = n.JSON
					  , R = D && D.stringify
					  , P = p("_hidden")
					  , L = p("toPrimitive")
					  , B = {}.propertyIsEnumerable
					  , N = d("symbol-registry")
					  , j = d("symbols")
					  , z = d("op-symbols")
					  , G = Object.prototype
					  , V = "function" == typeof F && !!T.f
					  , H = n.QObject
					  , W = !H || !H.prototype || !H.prototype.findChild
					  , U = a && c((function() {
						return 7 != $(A({}, "a", {
							get: function() {
								return A(this, "a", {
									value: 7
								}).a
							}
						})).a
					}
					)) ? function(e, t, i) {
						var n = O(G, t);
						n && delete G[t],
						A(e, t, i),
						n && e !== G && A(G, t, n)
					}
					: A
					  , X = function(e) {
						var t = j[e] = $(F.prototype);
						return t._k = e,
						t
					}
					  , q = V && "symbol" == typeof F.iterator ? function(e) {
						return "symbol" == typeof e
					}
					: function(e) {
						return e instanceof F
					}
					  , K = function(e, t, i) {
						return e === G && K(z, t, i),
						b(e),
						t = x(t, !0),
						b(i),
						o(j, t) ? (i.enumerable ? (o(e, P) && e[P][t] && (e[P][t] = !1),
						i = $(i, {
							enumerable: C(0, !1)
						})) : (o(e, P) || A(e, P, C(1, {})),
						e[P][t] = !0),
						U(e, t, i)) : A(e, t, i)
					}
					  , Y = function(e, t) {
						b(e);
						for (var i, n = v(t = w(t)), o = 0, a = n.length; a > o; )
							K(e, i = n[o++], t[i]);
						return e
					}
					  , J = function(e, t) {
						return void 0 === t ? $(e) : Y($(e), t)
					}
					  , Q = function(e) {
						var t = B.call(this, e = x(e, !0));
						return !(this === G && o(j, e) && !o(z, e)) && (!(t || !o(this, e) || !o(j, e) || o(this, P) && this[P][e]) || t)
					}
					  , Z = function(e, t) {
						if (e = w(e),
						t = x(t, !0),
						e !== G || !o(j, t) || o(z, t)) {
							var i = O(e, t);
							return !i || !o(j, t) || o(e, P) && e[P][t] || (i.enumerable = !0),
							i
						}
					}
					  , ee = function(e) {
						for (var t, i = I(w(e)), n = [], a = 0; i.length > a; )
							o(j, t = i[a++]) || t == P || t == l || n.push(t);
						return n
					}
					  , te = function(e) {
						for (var t, i = e === G, n = I(i ? z : w(e)), a = [], r = 0; n.length > r; )
							!o(j, t = n[r++]) || i && !o(G, t) || a.push(j[t]);
						return a
					};
					V || (F = function() {
						if (this instanceof F)
							throw TypeError("Symbol is not a constructor!");
						var e = h(arguments.length > 0 ? arguments[0] : void 0)
						  , t = function(i) {
							this === G && t.call(z, i),
							o(this, P) && o(this[P], e) && (this[P][e] = !1),
							U(this, e, C(1, i))
						};
						return a && W && U(G, e, {
							configurable: !0,
							set: t
						}),
						X(e)
					}
					,
					s(F.prototype, "toString", (function() {
						return this._k
					}
					)),
					k.f = Z,
					M.f = K,
					i(50).f = S.f = ee,
					i(34).f = Q,
					T.f = te,
					a && !i(14) && s(G, "propertyIsEnumerable", Q, !0),
					f.f = function(e) {
						return X(p(e))
					}
					),
					r(r.G + r.W + r.F * !V, {
						Symbol: F
					});
					for (var ie = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; ie.length > ne; )
						p(ie[ne++]);
					for (var oe = E(p.store), ae = 0; oe.length > ae; )
						m(oe[ae++]);
					r(r.S + r.F * !V, "Symbol", {
						for: function(e) {
							return o(N, e += "") ? N[e] : N[e] = F(e)
						},
						keyFor: function(e) {
							if (!q(e))
								throw TypeError(e + " is not a symbol!");
							for (var t in N)
								if (N[t] === e)
									return t
						},
						useSetter: function() {
							W = !0
						},
						useSimple: function() {
							W = !1
						}
					}),
					r(r.S + r.F * !V, "Object", {
						create: J,
						defineProperty: K,
						defineProperties: Y,
						getOwnPropertyDescriptor: Z,
						getOwnPropertyNames: ee,
						getOwnPropertySymbols: te
					});
					var re = c((function() {
						T.f(1)
					}
					));
					r(r.S + r.F * re, "Object", {
						getOwnPropertySymbols: function(e) {
							return T.f(y(e))
						}
					}),
					D && r(r.S + r.F * (!V || c((function() {
						var e = F();
						return "[null]" != R([e]) || "{}" != R({
							a: e
						}) || "{}" != R(Object(e))
					}
					))), "JSON", {
						stringify: function(e) {
							for (var t, i, n = [e], o = 1; arguments.length > o; )
								n.push(arguments[o++]);
							if (i = t = n[1],
							(_(t) || void 0 !== e) && !q(e))
								return g(t) || (t = function(e, t) {
									if ("function" == typeof i && (t = i.call(this, e, t)),
									!q(t))
										return t
								}
								),
								n[1] = t,
								R.apply(D, n)
						}
					}),
					F.prototype[L] || i(7)(F.prototype, L, F.prototype.valueOf),
					u(F, "Symbol"),
					u(Math, "Math", !0),
					u(n.JSON, "JSON", !0)
				}
				, function(e, t, i) {
					var n = i(19)("meta")
					  , o = i(12)
					  , a = i(6)
					  , r = i(8).f
					  , s = 0
					  , l = Object.isExtensible || function() {
						return !0
					}
					  , c = !i(17)((function() {
						return l(Object.preventExtensions({}))
					}
					))
					  , d = function(e) {
						r(e, n, {
							value: {
								i: "O" + ++s,
								w: {}
							}
						})
					}
					  , u = function(e, t) {
						if (!o(e))
							return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
						if (!a(e, n)) {
							if (!l(e))
								return "F";
							if (!t)
								return "E";
							d(e)
						}
						return e[n].i
					}
					  , h = function(e, t) {
						if (!a(e, n)) {
							if (!l(e))
								return !0;
							if (!t)
								return !1;
							d(e)
						}
						return e[n].w
					}
					  , p = function(e) {
						return c && f.NEED && l(e) && !a(e, n) && d(e),
						e
					}
					  , f = e.exports = {
						KEY: n,
						NEED: !1,
						fastKey: u,
						getWeak: h,
						onFreeze: p
					}
				}
				, function(e, t, i) {
					var n = i(27)
					  , o = i(49)
					  , a = i(34);
					e.exports = function(e) {
						var t = n(e)
						  , i = o.f;
						if (i)
							for (var r, s = i(e), l = a.f, c = 0; s.length > c; )
								l.call(e, r = s[c++]) && t.push(r);
						return t
					}
				}
				, function(e, t, i) {
					var n = i(47);
					e.exports = Array.isArray || function(e) {
						return "Array" == n(e)
					}
				}
				, function(e, t, i) {
					var n = i(10)
					  , o = i(50).f
					  , a = {}.toString
					  , r = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
					  , s = function(e) {
						try {
							return o(e)
						} catch (e) {
							return r.slice()
						}
					};
					e.exports.f = function(e) {
						return r && "[object Window]" == a.call(e) ? s(e) : o(n(e))
					}
				}
				, function(e, t, i) {
					var n = i(34)
					  , o = i(18)
					  , a = i(10)
					  , r = i(25)
					  , s = i(6)
					  , l = i(42)
					  , c = Object.getOwnPropertyDescriptor;
					t.f = i(9) ? c : function(e, t) {
						if (e = a(e),
						t = r(t, !0),
						l)
							try {
								return c(e, t)
							} catch (e) {}
						if (s(e, t))
							return o(!n.f.call(e, t), e[t])
					}
				}
				, function(e, t) {}
				, function(e, t, i) {
					i(33)("asyncIterator")
				}
				, function(e, t, i) {
					i(33)("observable")
				}
				, function(e, t, i) {
					var n = i(112);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("7c5f1a1c", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-hue {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 2px;\n}\n.vc-hue--horizontal {\n  background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue--vertical {\n  background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n}\n.vc-hue-container {\n  cursor: pointer;\n  margin: 0 2px;\n  position: relative;\n  height: 100%;\n}\n.vc-hue-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-hue-picker {\n  cursor: pointer;\n  margin-top: 1px;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  transform: translateX(-2px) ;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							class: ["vc-hue", e.directionClass]
						}, [i("div", {
							ref: "container",
							staticClass: "vc-hue-container",
							attrs: {
								role: "slider",
								"aria-valuenow": e.colors.hsl.h,
								"aria-valuemin": "0",
								"aria-valuemax": "360"
							},
							on: {
								mousedown: e.handleMouseDown,
								touchmove: e.handleChange,
								touchstart: e.handleChange
							}
						}, [i("div", {
							staticClass: "vc-hue-pointer",
							style: {
								top: e.pointerTop,
								left: e.pointerLeft
							},
							attrs: {
								role: "presentation"
							}
						}, [i("div", {
							staticClass: "vc-hue-picker"
						})])])])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-slider",
							attrs: {
								role: "application",
								"aria-label": "Slider color picker"
							}
						}, [i("div", {
							staticClass: "vc-slider-hue-warp"
						}, [i("hue", {
							on: {
								change: e.hueChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-slider-swatches",
							attrs: {
								role: "group"
							}
						}, e._l(e.normalizedSwatches, (function(t, n) {
							return i("div", {
								key: n,
								staticClass: "vc-slider-swatch",
								attrs: {
									"data-index": n,
									"aria-label": "color:" + e.colors.hex,
									role: "button"
								},
								on: {
									click: function(i) {
										return e.handleSwClick(n, t)
									}
								}
							}, [i("div", {
								staticClass: "vc-slider-swatch-picker",
								class: {
									"vc-slider-swatch-picker--active": e.isActive(t, n),
									"vc-slider-swatch-picker--white": 1 === t.l
								},
								style: {
									background: "hsl(" + e.colors.hsl.h + ", " + 100 * t.s + "%, " + 100 * t.l + "%)"
								}
							})])
						}
						)), 0)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(116)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(52)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(119)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Swatches.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(117);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("10f839a2", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-swatches {\n  width: 320px;\n  height: 240px;\n  overflow-y: scroll;\n  background-color: #fff;\n  box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);\n}\n.vc-swatches-box {\n  padding: 16px 0 6px 16px;\n  overflow: hidden;\n}\n.vc-swatches-color-group {\n  padding-bottom: 10px;\n  width: 40px;\n  float: left;\n  margin-right: 10px;\n}\n.vc-swatches-color-it {\n  box-sizing: border-box;\n  width: 40px;\n  height: 24px;\n  cursor: pointer;\n  background: #880e4f;\n  margin-bottom: 1px;\n  overflow: hidden;\n  -ms-border-radius: 2px 2px 0 0;\n  -moz-border-radius: 2px 2px 0 0;\n  -o-border-radius: 2px 2px 0 0;\n  -webkit-border-radius: 2px 2px 0 0;\n  border-radius: 2px 2px 0 0;\n}\n.vc-swatches-color--white {\n  border: 1px solid #DDD;\n}\n.vc-swatches-pick {\n  fill: rgb(255, 255, 255);\n  margin-left: 8px;\n  display: block;\n}\n.vc-swatches-color--white .vc-swatches-pick {\n  fill: rgb(51, 51, 51);\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					Object.defineProperty(t, "__esModule", {
						value: !0
					}),
					i.d(t, "red", (function() {
						return n
					}
					)),
					i.d(t, "pink", (function() {
						return o
					}
					)),
					i.d(t, "purple", (function() {
						return a
					}
					)),
					i.d(t, "deepPurple", (function() {
						return r
					}
					)),
					i.d(t, "indigo", (function() {
						return s
					}
					)),
					i.d(t, "blue", (function() {
						return l
					}
					)),
					i.d(t, "lightBlue", (function() {
						return c
					}
					)),
					i.d(t, "cyan", (function() {
						return d
					}
					)),
					i.d(t, "teal", (function() {
						return u
					}
					)),
					i.d(t, "green", (function() {
						return h
					}
					)),
					i.d(t, "lightGreen", (function() {
						return p
					}
					)),
					i.d(t, "lime", (function() {
						return f
					}
					)),
					i.d(t, "yellow", (function() {
						return m
					}
					)),
					i.d(t, "amber", (function() {
						return v
					}
					)),
					i.d(t, "orange", (function() {
						return g
					}
					)),
					i.d(t, "deepOrange", (function() {
						return b
					}
					)),
					i.d(t, "brown", (function() {
						return _
					}
					)),
					i.d(t, "grey", (function() {
						return y
					}
					)),
					i.d(t, "blueGrey", (function() {
						return w
					}
					)),
					i.d(t, "darkText", (function() {
						return x
					}
					)),
					i.d(t, "lightText", (function() {
						return C
					}
					)),
					i.d(t, "darkIcons", (function() {
						return $
					}
					)),
					i.d(t, "lightIcons", (function() {
						return S
					}
					)),
					i.d(t, "white", (function() {
						return k
					}
					)),
					i.d(t, "black", (function() {
						return T
					}
					));
					var n = {
						50: "#ffebee",
						100: "#ffcdd2",
						200: "#ef9a9a",
						300: "#e57373",
						400: "#ef5350",
						500: "#f44336",
						600: "#e53935",
						700: "#d32f2f",
						800: "#c62828",
						900: "#b71c1c",
						a100: "#ff8a80",
						a200: "#ff5252",
						a400: "#ff1744",
						a700: "#d50000"
					}
					  , o = {
						50: "#fce4ec",
						100: "#f8bbd0",
						200: "#f48fb1",
						300: "#f06292",
						400: "#ec407a",
						500: "#e91e63",
						600: "#d81b60",
						700: "#c2185b",
						800: "#ad1457",
						900: "#880e4f",
						a100: "#ff80ab",
						a200: "#ff4081",
						a400: "#f50057",
						a700: "#c51162"
					}
					  , a = {
						50: "#f3e5f5",
						100: "#e1bee7",
						200: "#ce93d8",
						300: "#ba68c8",
						400: "#ab47bc",
						500: "#9c27b0",
						600: "#8e24aa",
						700: "#7b1fa2",
						800: "#6a1b9a",
						900: "#4a148c",
						a100: "#ea80fc",
						a200: "#e040fb",
						a400: "#d500f9",
						a700: "#aa00ff"
					}
					  , r = {
						50: "#ede7f6",
						100: "#d1c4e9",
						200: "#b39ddb",
						300: "#9575cd",
						400: "#7e57c2",
						500: "#673ab7",
						600: "#5e35b1",
						700: "#512da8",
						800: "#4527a0",
						900: "#311b92",
						a100: "#b388ff",
						a200: "#7c4dff",
						a400: "#651fff",
						a700: "#6200ea"
					}
					  , s = {
						50: "#e8eaf6",
						100: "#c5cae9",
						200: "#9fa8da",
						300: "#7986cb",
						400: "#5c6bc0",
						500: "#3f51b5",
						600: "#3949ab",
						700: "#303f9f",
						800: "#283593",
						900: "#1a237e",
						a100: "#8c9eff",
						a200: "#536dfe",
						a400: "#3d5afe",
						a700: "#304ffe"
					}
					  , l = {
						50: "#e3f2fd",
						100: "#bbdefb",
						200: "#90caf9",
						300: "#64b5f6",
						400: "#42a5f5",
						500: "#2196f3",
						600: "#1e88e5",
						700: "#1976d2",
						800: "#1565c0",
						900: "#0d47a1",
						a100: "#82b1ff",
						a200: "#448aff",
						a400: "#2979ff",
						a700: "#2962ff"
					}
					  , c = {
						50: "#e1f5fe",
						100: "#b3e5fc",
						200: "#81d4fa",
						300: "#4fc3f7",
						400: "#29b6f6",
						500: "#03a9f4",
						600: "#039be5",
						700: "#0288d1",
						800: "#0277bd",
						900: "#01579b",
						a100: "#80d8ff",
						a200: "#40c4ff",
						a400: "#00b0ff",
						a700: "#0091ea"
					}
					  , d = {
						50: "#e0f7fa",
						100: "#b2ebf2",
						200: "#80deea",
						300: "#4dd0e1",
						400: "#26c6da",
						500: "#00bcd4",
						600: "#00acc1",
						700: "#0097a7",
						800: "#00838f",
						900: "#006064",
						a100: "#84ffff",
						a200: "#18ffff",
						a400: "#00e5ff",
						a700: "#00b8d4"
					}
					  , u = {
						50: "#e0f2f1",
						100: "#b2dfdb",
						200: "#80cbc4",
						300: "#4db6ac",
						400: "#26a69a",
						500: "#009688",
						600: "#00897b",
						700: "#00796b",
						800: "#00695c",
						900: "#004d40",
						a100: "#a7ffeb",
						a200: "#64ffda",
						a400: "#1de9b6",
						a700: "#00bfa5"
					}
					  , h = {
						50: "#e8f5e9",
						100: "#c8e6c9",
						200: "#a5d6a7",
						300: "#81c784",
						400: "#66bb6a",
						500: "#4caf50",
						600: "#43a047",
						700: "#388e3c",
						800: "#2e7d32",
						900: "#1b5e20",
						a100: "#b9f6ca",
						a200: "#69f0ae",
						a400: "#00e676",
						a700: "#00c853"
					}
					  , p = {
						50: "#f1f8e9",
						100: "#dcedc8",
						200: "#c5e1a5",
						300: "#aed581",
						400: "#9ccc65",
						500: "#8bc34a",
						600: "#7cb342",
						700: "#689f38",
						800: "#558b2f",
						900: "#33691e",
						a100: "#ccff90",
						a200: "#b2ff59",
						a400: "#76ff03",
						a700: "#64dd17"
					}
					  , f = {
						50: "#f9fbe7",
						100: "#f0f4c3",
						200: "#e6ee9c",
						300: "#dce775",
						400: "#d4e157",
						500: "#cddc39",
						600: "#c0ca33",
						700: "#afb42b",
						800: "#9e9d24",
						900: "#827717",
						a100: "#f4ff81",
						a200: "#eeff41",
						a400: "#c6ff00",
						a700: "#aeea00"
					}
					  , m = {
						50: "#fffde7",
						100: "#fff9c4",
						200: "#fff59d",
						300: "#fff176",
						400: "#ffee58",
						500: "#ffeb3b",
						600: "#fdd835",
						700: "#fbc02d",
						800: "#f9a825",
						900: "#f57f17",
						a100: "#ffff8d",
						a200: "#ffff00",
						a400: "#ffea00",
						a700: "#ffd600"
					}
					  , v = {
						50: "#fff8e1",
						100: "#ffecb3",
						200: "#ffe082",
						300: "#ffd54f",
						400: "#ffca28",
						500: "#ffc107",
						600: "#ffb300",
						700: "#ffa000",
						800: "#ff8f00",
						900: "#ff6f00",
						a100: "#ffe57f",
						a200: "#ffd740",
						a400: "#ffc400",
						a700: "#ffab00"
					}
					  , g = {
						50: "#fff3e0",
						100: "#ffe0b2",
						200: "#ffcc80",
						300: "#ffb74d",
						400: "#ffa726",
						500: "#ff9800",
						600: "#fb8c00",
						700: "#f57c00",
						800: "#ef6c00",
						900: "#e65100",
						a100: "#ffd180",
						a200: "#ffab40",
						a400: "#ff9100",
						a700: "#ff6d00"
					}
					  , b = {
						50: "#fbe9e7",
						100: "#ffccbc",
						200: "#ffab91",
						300: "#ff8a65",
						400: "#ff7043",
						500: "#ff5722",
						600: "#f4511e",
						700: "#e64a19",
						800: "#d84315",
						900: "#bf360c",
						a100: "#ff9e80",
						a200: "#ff6e40",
						a400: "#ff3d00",
						a700: "#dd2c00"
					}
					  , _ = {
						50: "#efebe9",
						100: "#d7ccc8",
						200: "#bcaaa4",
						300: "#a1887f",
						400: "#8d6e63",
						500: "#795548",
						600: "#6d4c41",
						700: "#5d4037",
						800: "#4e342e",
						900: "#3e2723"
					}
					  , y = {
						50: "#fafafa",
						100: "#f5f5f5",
						200: "#eeeeee",
						300: "#e0e0e0",
						400: "#bdbdbd",
						500: "#9e9e9e",
						600: "#757575",
						700: "#616161",
						800: "#424242",
						900: "#212121"
					}
					  , w = {
						50: "#eceff1",
						100: "#cfd8dc",
						200: "#b0bec5",
						300: "#90a4ae",
						400: "#78909c",
						500: "#607d8b",
						600: "#546e7a",
						700: "#455a64",
						800: "#37474f",
						900: "#263238"
					}
					  , x = {
						primary: "rgba(0, 0, 0, 0.87)",
						secondary: "rgba(0, 0, 0, 0.54)",
						disabled: "rgba(0, 0, 0, 0.38)",
						dividers: "rgba(0, 0, 0, 0.12)"
					}
					  , C = {
						primary: "rgba(255, 255, 255, 1)",
						secondary: "rgba(255, 255, 255, 0.7)",
						disabled: "rgba(255, 255, 255, 0.5)",
						dividers: "rgba(255, 255, 255, 0.12)"
					}
					  , $ = {
						active: "rgba(0, 0, 0, 0.54)",
						inactive: "rgba(0, 0, 0, 0.38)"
					}
					  , S = {
						active: "rgba(255, 255, 255, 1)",
						inactive: "rgba(255, 255, 255, 0.5)"
					}
					  , k = "#ffffff"
					  , T = "#000000";
					t.default = {
						red: n,
						pink: o,
						purple: a,
						deepPurple: r,
						indigo: s,
						blue: l,
						lightBlue: c,
						cyan: d,
						teal: u,
						green: h,
						lightGreen: p,
						lime: f,
						yellow: m,
						amber: v,
						orange: g,
						deepOrange: b,
						brown: _,
						grey: y,
						blueGrey: w,
						darkText: x,
						lightText: C,
						darkIcons: $,
						lightIcons: S,
						white: k,
						black: T
					}
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-swatches",
							attrs: {
								role: "application",
								"aria-label": "Swatches color picker",
								"data-pick": e.pick
							}
						}, [i("div", {
							staticClass: "vc-swatches-box",
							attrs: {
								role: "listbox"
							}
						}, e._l(e.palette, (function(t, n) {
							return i("div", {
								key: n,
								staticClass: "vc-swatches-color-group"
							}, e._l(t, (function(t) {
								return i("div", {
									key: t,
									class: ["vc-swatches-color-it", {
										"vc-swatches-color--white": "#FFFFFF" === t
									}],
									style: {
										background: t
									},
									attrs: {
										role: "option",
										"aria-label": "Color:" + t,
										"aria-selected": e.equal(t),
										"data-color": t
									},
									on: {
										click: function(i) {
											return e.handlerClick(t)
										}
									}
								}, [i("div", {
									directives: [{
										name: "show",
										rawName: "v-show",
										value: e.equal(t),
										expression: "equal(c)"
									}],
									staticClass: "vc-swatches-pick"
								}, [i("svg", {
									staticStyle: {
										width: "24px",
										height: "24px"
									},
									attrs: {
										viewBox: "0 0 24 24"
									}
								}, [i("path", {
									attrs: {
										d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
									}
								})])])])
							}
							)), 0)
						}
						)), 0)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(121)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(53)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(134)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Photoshop.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(122);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("080365d4", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, '\n.vc-photoshop {\n  background: #DCDCDC;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15);\n  box-sizing: initial;\n  width: 513px;\n  font-family: Roboto;\n}\n.vc-photoshop__disable-fields {\n  width: 390px;\n}\n.vc-ps-head {\n  background-image: linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%);\n  border-bottom: 1px solid #B1B1B1;\n  box-shadow: inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02);\n  height: 23px;\n  line-height: 24px;\n  border-radius: 4px 4px 0 0;\n  font-size: 13px;\n  color: #4D4D4D;\n  text-align: center;\n}\n.vc-ps-body {\n  padding: 15px;\n  display: flex;\n}\n.vc-ps-saturation-wrap {\n  width: 256px;\n  height: 256px;\n  position: relative;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n  overflow: hidden;\n}\n.vc-ps-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-ps-hue-wrap {\n  position: relative;\n  height: 256px;\n  width: 19px;\n  margin-left: 10px;\n  border: 2px solid #B3B3B3;\n  border-bottom: 2px solid #F0F0F0;\n}\n.vc-ps-hue-pointer {\n  position: relative;\n}\n.vc-ps-hue-pointer--left,\n.vc-ps-hue-pointer--right {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 5px 0 5px 8px;\n  border-color: transparent transparent transparent #555;\n}\n.vc-ps-hue-pointer--left:after,\n.vc-ps-hue-pointer--right:after {\n  content: "";\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 4px 0 4px 6px;\n  border-color: transparent transparent transparent #fff;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  transform: translate(-8px, -5px);\n}\n.vc-ps-hue-pointer--left {\n  transform: translate(-13px, -4px);\n}\n.vc-ps-hue-pointer--right {\n  transform: translate(20px, -4px) rotate(180deg);\n}\n.vc-ps-controls {\n  width: 180px;\n  margin-left: 10px;\n  display: flex;\n}\n.vc-ps-controls__disable-fields {\n  width: auto;\n}\n.vc-ps-actions {\n  margin-left: 20px;\n  flex: 1;\n}\n.vc-ps-ac-btn {\n  cursor: pointer;\n  background-image: linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%);\n  border: 1px solid #878787;\n  border-radius: 2px;\n  height: 20px;\n  box-shadow: 0 1px 0 0 #EAEAEA;\n  font-size: 14px;\n  color: #000;\n  line-height: 20px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.vc-ps-previews {\n  width: 60px;\n}\n.vc-ps-previews__swatches {\n  border: 1px solid #B3B3B3;\n  border-bottom: 1px solid #F0F0F0;\n  margin-bottom: 2px;\n  margin-top: 1px;\n}\n.vc-ps-previews__pr-color {\n  height: 34px;\n  box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;\n}\n.vc-ps-previews__label {\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n}\n.vc-ps-fields {\n  padding-top: 5px;\n  padding-bottom: 9px;\n  width: 80px;\n  position: relative;\n}\n.vc-ps-fields .vc-input__input {\n  margin-left: 40%;\n  width: 40%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 5px;\n  font-size: 13px;\n  padding-left: 3px;\n  margin-right: 10px;\n}\n.vc-ps-fields .vc-input__label, .vc-ps-fields .vc-input__desc {\n  top: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n  position: absolute;\n}\n.vc-ps-fields .vc-input__label {\n  left: 0;\n  width: 34px;\n}\n.vc-ps-fields .vc-input__desc {\n  right: 0;\n  width: 0;\n}\n.vc-ps-fields__divider {\n  height: 5px;\n}\n.vc-ps-fields__hex .vc-input__input {\n  margin-left: 20%;\n  width: 80%;\n  height: 18px;\n  border: 1px solid #888888;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC;\n  margin-bottom: 6px;\n  font-size: 13px;\n  padding-left: 3px;\n}\n.vc-ps-fields__hex .vc-input__label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 14px;\n  text-transform: uppercase;\n  font-size: 13px;\n  height: 18px;\n  line-height: 22px;\n}\n', ""])
				}
				, function(e, t, i) {
					var n = i(124);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("b5380e52", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-saturation,\n.vc-saturation--white,\n.vc-saturation--black {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.vc-saturation--white {\n  background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n}\n.vc-saturation--black {\n  background: linear-gradient(to top, #000, rgba(0,0,0,0));\n}\n.vc-saturation-pointer {\n  cursor: pointer;\n  position: absolute;\n}\n.vc-saturation-circle {\n  cursor: head;\n  width: 4px;\n  height: 4px;\n  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);\n  border-radius: 50%;\n  transform: translate(-2px, -2px);\n}\n", ""])
				}
				, function(e, t) {
					function i(e, t, i) {
						return t < i ? e < t ? t : e > i ? i : e : e < i ? i : e > t ? t : e
					}
					e.exports = i
				}
				, function(e, t) {
					function n(e, t, i) {
						function n(t) {
							var i = m
							  , n = v;
							return m = v = void 0,
							w = t,
							b = e.apply(n, i)
						}
						function o(e) {
							return w = e,
							_ = setTimeout(d, t),
							S ? n(e) : b
						}
						function r(e) {
							var i = e - y
							  , n = e - w
							  , o = t - i;
							return k ? C(o, g - n) : o
						}
						function s(e) {
							var i = e - y
							  , n = e - w;
							return void 0 === y || i >= t || i < 0 || k && n >= g
						}
						function d() {
							var e = $();
							if (s(e))
								return u(e);
							_ = setTimeout(d, r(e))
						}
						function u(e) {
							return _ = void 0,
							T && m ? n(e) : (m = v = void 0,
							b)
						}
						function h() {
							void 0 !== _ && clearTimeout(_),
							w = 0,
							m = y = v = _ = void 0
						}
						function p() {
							return void 0 === _ ? b : u($())
						}
						function f() {
							var e = $()
							  , i = s(e);
							if (m = arguments,
							v = this,
							y = e,
							i) {
								if (void 0 === _)
									return o(y);
								if (k)
									return _ = setTimeout(d, t),
									n(y)
							}
							return void 0 === _ && (_ = setTimeout(d, t)),
							b
						}
						var m, v, g, b, _, y, w = 0, S = !1, k = !1, T = !0;
						if ("function" != typeof e)
							throw new TypeError(c);
						return t = l(t) || 0,
						a(i) && (S = !!i.leading,
						k = "maxWait"in i,
						g = k ? x(l(i.maxWait) || 0, t) : g,
						T = "trailing"in i ? !!i.trailing : T),
						f.cancel = h,
						f.flush = p,
						f
					}
					function o(e, t, i) {
						var o = !0
						  , r = !0;
						if ("function" != typeof e)
							throw new TypeError(c);
						return a(i) && (o = "leading"in i ? !!i.leading : o,
						r = "trailing"in i ? !!i.trailing : r),
						n(e, t, {
							leading: o,
							maxWait: t,
							trailing: r
						})
					}
					function a(e) {
						var t = typeof e;
						return !!e && ("object" == t || "function" == t)
					}
					function r(e) {
						return !!e && "object" == typeof e
					}
					function s(e) {
						return "symbol" == typeof e || r(e) && w.call(e) == u
					}
					function l(e) {
						if ("number" == typeof e)
							return e;
						if (s(e))
							return d;
						if (a(e)) {
							var t = "function" == typeof e.valueOf ? e.valueOf() : e;
							e = a(t) ? t + "" : t
						}
						if ("string" != typeof e)
							return 0 === e ? e : +e;
						e = e.replace(h, "");
						var i = f.test(e);
						return i || m.test(e) ? v(e.slice(2), i ? 2 : 8) : p.test(e) ? d : +e
					}
					var c = "Expected a function"
					  , d = NaN
					  , u = "[object Symbol]"
					  , h = /^\s+|\s+$/g
					  , p = /^[-+]0x[0-9a-f]+$/i
					  , f = /^0b[01]+$/i
					  , m = /^0o[0-7]+$/i
					  , v = parseInt
					  , g = "object" == typeof i.g && i.g && i.g.Object === Object && i.g
					  , b = "object" == typeof self && self && self.Object === Object && self
					  , _ = g || b || Function("return this")()
					  , y = Object.prototype
					  , w = y.toString
					  , x = Math.max
					  , C = Math.min
					  , $ = function() {
						return _.Date.now()
					};
					e.exports = o
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							ref: "container",
							staticClass: "vc-saturation",
							style: {
								background: e.bgColor
							},
							on: {
								mousedown: e.handleMouseDown,
								touchmove: e.handleChange,
								touchstart: e.handleChange
							}
						}, [i("div", {
							staticClass: "vc-saturation--white"
						}), e._v(" "), i("div", {
							staticClass: "vc-saturation--black"
						}), e._v(" "), i("div", {
							staticClass: "vc-saturation-pointer",
							style: {
								top: e.pointerTop,
								left: e.pointerLeft
							}
						}, [i("div", {
							staticClass: "vc-saturation-circle"
						})])])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					var n = i(129);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("4dc1b086", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-alpha {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-checkboard-wrap {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  overflow: hidden;\n}\n.vc-alpha-gradient {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n}\n.vc-alpha-container {\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  margin: 0 3px;\n}\n.vc-alpha-pointer {\n  z-index: 2;\n  position: absolute;\n}\n.vc-alpha-picker {\n  cursor: pointer;\n  width: 4px;\n  border-radius: 1px;\n  height: 8px;\n  box-shadow: 0 0 2px rgba(0, 0, 0, .6);\n  background: #fff;\n  margin-top: 1px;\n  transform: translateX(-2px);\n}\n", ""])
				}
				, function(e, t, i) {
					var n = i(131);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("7e15c05b", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-checkerboard {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-size: contain;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement;
						return (e._self._c || t)("div", {
							staticClass: "vc-checkerboard",
							style: e.bgStyle
						})
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-alpha"
						}, [i("div", {
							staticClass: "vc-alpha-checkboard-wrap"
						}, [i("checkboard")], 1), e._v(" "), i("div", {
							staticClass: "vc-alpha-gradient",
							style: {
								background: e.gradientColor
							}
						}), e._v(" "), i("div", {
							ref: "container",
							staticClass: "vc-alpha-container",
							on: {
								mousedown: e.handleMouseDown,
								touchmove: e.handleChange,
								touchstart: e.handleChange
							}
						}, [i("div", {
							staticClass: "vc-alpha-pointer",
							style: {
								left: 100 * e.colors.a + "%"
							}
						}, [i("div", {
							staticClass: "vc-alpha-picker"
						})])])])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							class: ["vc-photoshop", e.disableFields ? "vc-photoshop__disable-fields" : ""],
							attrs: {
								role: "application",
								"aria-label": "PhotoShop color picker"
							}
						}, [i("div", {
							staticClass: "vc-ps-head",
							attrs: {
								role: "heading"
							}
						}, [e._v(e._s(e.head))]), e._v(" "), i("div", {
							staticClass: "vc-ps-body"
						}, [i("div", {
							staticClass: "vc-ps-saturation-wrap"
						}, [i("saturation", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-ps-hue-wrap"
						}, [i("hue", {
							attrs: {
								direction: "vertical"
							},
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						}, [i("div", {
							staticClass: "vc-ps-hue-pointer"
						}, [i("i", {
							staticClass: "vc-ps-hue-pointer--left"
						}), i("i", {
							staticClass: "vc-ps-hue-pointer--right"
						})])])], 1), e._v(" "), i("div", {
							class: ["vc-ps-controls", e.disableFields ? "vc-ps-controls__disable-fields" : ""]
						}, [i("div", {
							staticClass: "vc-ps-previews"
						}, [i("div", {
							staticClass: "vc-ps-previews__label"
						}, [e._v(e._s(e.newLabel))]), e._v(" "), i("div", {
							staticClass: "vc-ps-previews__swatches"
						}, [i("div", {
							staticClass: "vc-ps-previews__pr-color",
							style: {
								background: e.colors.hex
							},
							attrs: {
								"aria-label": "New color is " + e.colors.hex
							}
						}), e._v(" "), i("div", {
							staticClass: "vc-ps-previews__pr-color",
							style: {
								background: e.currentColor
							},
							attrs: {
								"aria-label": "Current color is " + e.currentColor
							},
							on: {
								click: e.clickCurrentColor
							}
						})]), e._v(" "), i("div", {
							staticClass: "vc-ps-previews__label"
						}, [e._v(e._s(e.currentLabel))])]), e._v(" "), e.disableFields ? e._e() : i("div", {
							staticClass: "vc-ps-actions"
						}, [i("div", {
							staticClass: "vc-ps-ac-btn",
							attrs: {
								role: "button",
								"aria-label": e.acceptLabel
							},
							on: {
								click: e.handleAccept
							}
						}, [e._v(e._s(e.acceptLabel))]), e._v(" "), i("div", {
							staticClass: "vc-ps-ac-btn",
							attrs: {
								role: "button",
								"aria-label": e.cancelLabel
							},
							on: {
								click: e.handleCancel
							}
						}, [e._v(e._s(e.cancelLabel))]), e._v(" "), i("div", {
							staticClass: "vc-ps-fields"
						}, [i("ed-in", {
							attrs: {
								label: "h",
								desc: "°",
								value: e.hsv.h
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("ed-in", {
							attrs: {
								label: "s",
								desc: "%",
								value: e.hsv.s,
								max: 100
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("ed-in", {
							attrs: {
								label: "v",
								desc: "%",
								value: e.hsv.v,
								max: 100
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("div", {
							staticClass: "vc-ps-fields__divider"
						}), e._v(" "), i("ed-in", {
							attrs: {
								label: "r",
								value: e.colors.rgba.r
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("ed-in", {
							attrs: {
								label: "g",
								value: e.colors.rgba.g
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("ed-in", {
							attrs: {
								label: "b",
								value: e.colors.rgba.b
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("div", {
							staticClass: "vc-ps-fields__divider"
						}), e._v(" "), i("ed-in", {
							staticClass: "vc-ps-fields__hex",
							attrs: {
								label: "#",
								value: e.hex
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), e.hasResetButton ? i("div", {
							staticClass: "vc-ps-ac-btn",
							attrs: {
								"aria-label": "reset"
							},
							on: {
								click: e.handleReset
							}
						}, [e._v(e._s(e.resetLabel))]) : e._e()])])])])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(136)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(57)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(138)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Sketch.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(137);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("612c6604", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-sketch {\n  position: relative;\n  width: 200px;\n  padding: 10px 10px 0;\n  box-sizing: initial;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);\n}\n.vc-sketch-saturation-wrap {\n  width: 100%;\n  padding-bottom: 75%;\n  position: relative;\n  overflow: hidden;\n}\n.vc-sketch-controls {\n  display: flex;\n}\n.vc-sketch-sliders {\n  padding: 4px 0;\n  flex: 1;\n}\n.vc-sketch-sliders .vc-hue,\n.vc-sketch-sliders .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-sketch-hue-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-sketch-alpha-wrap {\n  position: relative;\n  height: 10px;\n  margin-top: 4px;\n  overflow: hidden;\n}\n.vc-sketch-color-wrap {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  margin-top: 4px;\n  margin-left: 4px;\n  border-radius: 3px;\n}\n.vc-sketch-active-color {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 2px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);\n  z-index: 2;\n}\n.vc-sketch-color-wrap .vc-checkerboard {\n  background-size: auto;\n}\n.vc-sketch-field {\n  display: flex;\n  padding-top: 4px;\n}\n.vc-sketch-field .vc-input__input {\n  width: 90%;\n  padding: 4px 0 3px 10%;\n  border: none;\n  box-shadow: inset 0 0 0 1px #ccc;\n  font-size: 10px;\n}\n.vc-sketch-field .vc-input__label {\n  display: block;\n  text-align: center;\n  font-size: 11px;\n  color: #222;\n  padding-top: 3px;\n  padding-bottom: 4px;\n  text-transform: capitalize;\n}\n.vc-sketch-field--single {\n  flex: 1;\n  padding-left: 6px;\n}\n.vc-sketch-field--double {\n  flex: 2;\n}\n.vc-sketch-presets {\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-left: 10px;\n  padding-top: 10px;\n  border-top: 1px solid #eee;\n}\n.vc-sketch-presets-color {\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n  margin: 0 10px 10px 0;\n  vertical-align: top;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n}\n.vc-sketch-presets-color .vc-checkerboard {\n  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);\n  border-radius: 3px;\n}\n.vc-sketch__disable-alpha .vc-sketch-color-wrap {\n  height: 10px;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							class: ["vc-sketch", e.disableAlpha ? "vc-sketch__disable-alpha" : ""],
							attrs: {
								role: "application",
								"aria-label": "Sketch color picker"
							}
						}, [i("div", {
							staticClass: "vc-sketch-saturation-wrap"
						}, [i("saturation", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-sketch-controls"
						}, [i("div", {
							staticClass: "vc-sketch-sliders"
						}, [i("div", {
							staticClass: "vc-sketch-hue-wrap"
						}, [i("hue", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1), e._v(" "), e.disableAlpha ? e._e() : i("div", {
							staticClass: "vc-sketch-alpha-wrap"
						}, [i("alpha", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1)]), e._v(" "), i("div", {
							staticClass: "vc-sketch-color-wrap"
						}, [i("div", {
							staticClass: "vc-sketch-active-color",
							style: {
								background: e.activeColor
							},
							attrs: {
								"aria-label": "Current color is " + e.activeColor
							}
						}), e._v(" "), i("checkboard")], 1)]), e._v(" "), e.disableFields ? e._e() : i("div", {
							staticClass: "vc-sketch-field"
						}, [i("div", {
							staticClass: "vc-sketch-field--double"
						}, [i("ed-in", {
							attrs: {
								label: "hex",
								value: e.hex
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-sketch-field--single"
						}, [i("ed-in", {
							attrs: {
								label: "r",
								value: e.colors.rgba.r
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-sketch-field--single"
						}, [i("ed-in", {
							attrs: {
								label: "g",
								value: e.colors.rgba.g
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-sketch-field--single"
						}, [i("ed-in", {
							attrs: {
								label: "b",
								value: e.colors.rgba.b
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), e.disableAlpha ? e._e() : i("div", {
							staticClass: "vc-sketch-field--single"
						}, [i("ed-in", {
							attrs: {
								label: "a",
								value: e.colors.a,
								"arrow-offset": .01,
								max: 1
							},
							on: {
								change: e.inputChange
							}
						})], 1)]), e._v(" "), i("div", {
							staticClass: "vc-sketch-presets",
							attrs: {
								role: "group",
								"aria-label": "A color preset, pick one to set as current color"
							}
						}, [e._l(e.presetColors, (function(t) {
							return [e.isTransparent(t) ? i("div", {
								key: t,
								staticClass: "vc-sketch-presets-color",
								attrs: {
									"aria-label": "Color:" + t
								},
								on: {
									click: function(i) {
										return e.handlePreset(t)
									}
								}
							}, [i("checkboard")], 1) : i("div", {
								key: t,
								staticClass: "vc-sketch-presets-color",
								style: {
									background: t
								},
								attrs: {
									"aria-label": "Color:" + t
								},
								on: {
									click: function(i) {
										return e.handlePreset(t)
									}
								}
							})]
						}
						))], 2)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(140)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(58)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(142)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Chrome.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(141);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("1cd16048", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-chrome {\n  background: #fff;\n  border-radius: 2px;\n  box-shadow: 0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3);\n  box-sizing: initial;\n  width: 225px;\n  font-family: Menlo;\n  background-color: #fff;\n}\n.vc-chrome-controls {\n  display: flex;\n}\n.vc-chrome-color-wrap {\n  position: relative;\n  width: 36px;\n}\n.vc-chrome-active-color {\n  position: relative;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  overflow: hidden;\n  z-index: 1;\n}\n.vc-chrome-color-wrap .vc-checkerboard {\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  background-size: auto;\n}\n.vc-chrome-sliders {\n  flex: 1;\n}\n.vc-chrome-fields-wrap {\n  display: flex;\n  padding-top: 16px;\n}\n.vc-chrome-fields {\n  display: flex;\n  margin-left: -6px;\n  flex: 1;\n}\n.vc-chrome-field {\n  padding-left: 6px;\n  width: 100%;\n}\n.vc-chrome-toggle-btn {\n  width: 32px;\n  text-align: right;\n  position: relative;\n}\n.vc-chrome-toggle-icon {\n  margin-right: -4px;\n  margin-top: 12px;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n}\n.vc-chrome-toggle-icon-highlight {\n  position: absolute;\n  width: 24px;\n  height: 28px;\n  background: #eee;\n  border-radius: 4px;\n  top: 10px;\n  left: 12px;\n}\n.vc-chrome-hue-wrap {\n  position: relative;\n  height: 10px;\n  margin-bottom: 8px;\n}\n.vc-chrome-alpha-wrap {\n  position: relative;\n  height: 10px;\n}\n.vc-chrome-hue-wrap .vc-hue {\n  border-radius: 2px;\n}\n.vc-chrome-alpha-wrap .vc-alpha-gradient {\n  border-radius: 2px;\n}\n.vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {\n  width: 12px;\n  height: 12px;\n  border-radius: 6px;\n  transform: translate(-6px, -2px);\n  background-color: rgb(248, 248, 248);\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);\n}\n.vc-chrome-body {\n  padding: 16px 16px 12px;\n  background-color: #fff;\n}\n.vc-chrome-saturation-wrap {\n  width: 100%;\n  padding-bottom: 55%;\n  position: relative;\n  border-radius: 2px 2px 0 0;\n  overflow: hidden;\n}\n.vc-chrome-saturation-wrap .vc-saturation-circle {\n  width: 12px;\n  height: 12px;\n}\n.vc-chrome-fields .vc-input__input {\n  font-size: 11px;\n  color: #333;\n  width: 100%;\n  border-radius: 2px;\n  border: none;\n  box-shadow: inset 0 0 0 1px #dadada;\n  height: 21px;\n  text-align: center;\n}\n.vc-chrome-fields .vc-input__label {\n  text-transform: uppercase;\n  font-size: 11px;\n  line-height: 11px;\n  color: #969696;\n  text-align: center;\n  display: block;\n  margin-top: 12px;\n}\n.vc-chrome__disable-alpha .vc-chrome-active-color {\n  width: 18px;\n  height: 18px;\n}\n.vc-chrome__disable-alpha .vc-chrome-color-wrap {\n  width: 30px;\n}\n.vc-chrome__disable-alpha .vc-chrome-hue-wrap {\n  margin-top: 4px;\n  margin-bottom: 4px;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							class: ["vc-chrome", e.disableAlpha ? "vc-chrome__disable-alpha" : ""],
							attrs: {
								role: "application",
								"aria-label": "Chrome color picker"
							}
						}, [i("div", {
							staticClass: "vc-chrome-saturation-wrap"
						}, [i("saturation", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-chrome-body"
						}, [i("div", {
							staticClass: "vc-chrome-controls"
						}, [i("div", {
							staticClass: "vc-chrome-color-wrap"
						}, [i("div", {
							staticClass: "vc-chrome-active-color",
							style: {
								background: e.activeColor
							},
							attrs: {
								"aria-label": "current color is " + e.colors.hex
							}
						}), e._v(" "), e.disableAlpha ? e._e() : i("checkboard")], 1), e._v(" "), i("div", {
							staticClass: "vc-chrome-sliders"
						}, [i("div", {
							staticClass: "vc-chrome-hue-wrap"
						}, [i("hue", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1), e._v(" "), e.disableAlpha ? e._e() : i("div", {
							staticClass: "vc-chrome-alpha-wrap"
						}, [i("alpha", {
							on: {
								change: e.childChange
							},
							model: {
								value: e.colors,
								callback: function(t) {
									e.colors = t
								},
								expression: "colors"
							}
						})], 1)])]), e._v(" "), e.disableFields ? e._e() : i("div", {
							staticClass: "vc-chrome-fields-wrap"
						}, [i("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: 0 === e.fieldsIndex,
								expression: "fieldsIndex === 0"
							}],
							staticClass: "vc-chrome-fields"
						}, [i("div", {
							staticClass: "vc-chrome-field"
						}, [e.hasAlpha ? e._e() : i("ed-in", {
							attrs: {
								label: "hex",
								value: e.colors.hex
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), e.hasAlpha ? i("ed-in", {
							attrs: {
								label: "hex",
								value: e.colors.hex8
							},
							on: {
								change: e.inputChange
							}
						}) : e._e()], 1)]), e._v(" "), i("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: 1 === e.fieldsIndex,
								expression: "fieldsIndex === 1"
							}],
							staticClass: "vc-chrome-fields"
						}, [i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "r",
								value: e.colors.rgba.r
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "g",
								value: e.colors.rgba.g
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "b",
								value: e.colors.rgba.b
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), e.disableAlpha ? e._e() : i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "a",
								value: e.colors.a,
								"arrow-offset": .01,
								max: 1
							},
							on: {
								change: e.inputChange
							}
						})], 1)]), e._v(" "), i("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: 2 === e.fieldsIndex,
								expression: "fieldsIndex === 2"
							}],
							staticClass: "vc-chrome-fields"
						}, [i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "h",
								value: e.hsl.h
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "s",
								value: e.hsl.s
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "l",
								value: e.hsl.l
							},
							on: {
								change: e.inputChange
							}
						})], 1), e._v(" "), e.disableAlpha ? e._e() : i("div", {
							staticClass: "vc-chrome-field"
						}, [i("ed-in", {
							attrs: {
								label: "a",
								value: e.colors.a,
								"arrow-offset": .01,
								max: 1
							},
							on: {
								change: e.inputChange
							}
						})], 1)]), e._v(" "), i("div", {
							staticClass: "vc-chrome-toggle-btn",
							attrs: {
								role: "button",
								"aria-label": "Change another color definition"
							},
							on: {
								click: e.toggleViews
							}
						}, [i("div", {
							staticClass: "vc-chrome-toggle-icon"
						}, [i("svg", {
							staticStyle: {
								width: "24px",
								height: "24px"
							},
							attrs: {
								viewBox: "0 0 24 24"
							},
							on: {
								mouseover: e.showHighlight,
								mouseenter: e.showHighlight,
								mouseout: e.hideHighlight
							}
						}, [i("path", {
							attrs: {
								fill: "#333",
								d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
							}
						})])]), e._v(" "), i("div", {
							directives: [{
								name: "show",
								rawName: "v-show",
								value: e.highlight,
								expression: "highlight"
							}],
							staticClass: "vc-chrome-toggle-icon-highlight"
						})])])])])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				, function(e, t, i) {
					"use strict";
					function n(e) {
						l || i(144)
					}
					Object.defineProperty(t, "__esModule", {
						value: !0
					});
					var o = i(59)
					  , a = i.n(o);
					for (var r in o)
						"default" !== r && function(e) {
							i.d(t, e, (function() {
								return o[e]
							}
							))
						}(r);
					var s = i(146)
					  , l = !1
					  , c = i(2)
					  , d = n
					  , u = c(a.a, s.a, !1, d, null, null);
					u.options.__file = "src/components/Twitter.vue",
					t.default = u.exports
				}
				, function(e, t, i) {
					var n = i(145);
					"string" == typeof n && (n = [[e.i, n, ""]]),
					n.locals && (e.exports = n.locals),
					i(1)("669a48a5", n, !1, {})
				}
				, function(e, t, i) {
					t = e.exports = i(0)(!1),
					t.push([e.i, "\n.vc-twitter {\n  background: #fff;\n  border: 0 solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 4px;\n  position: relative;\n}\n.vc-twitter-triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent #fff transparent;\n  position: absolute;\n}\n.vc-twitter-triangle-shadow {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0 9px 10px 9px;\n  border-color: transparent transparent rgba(0, 0, 0, .1) transparent;\n  position: absolute;\n}\n.vc-twitter-body {\n  padding: 15px 9px 9px 15px;\n}\n.vc-twitter .vc-editable-input {\n  position: relative;\n}\n.vc-twitter .vc-editable-input input {\n  width: 100px;\n  font-size: 14px;\n  color: #666;\n  border: 0px;\n  outline: none;\n  height: 28px;\n  box-shadow: inset 0 0 0 1px #F0F0F0;\n  box-sizing: content-box;\n  border-radius: 0 4px 4px 0;\n  float: left;\n  padding: 1px;\n  padding-left: 8px;\n}\n.vc-twitter .vc-editable-input span {\n  display: none;\n}\n.vc-twitter-hash {\n  background: #F0F0F0;\n  height: 30px;\n  width: 30px;\n  border-radius: 4px 0 0 4px;\n  float: left;\n  color: #98A1A4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.vc-twitter-swatch {\n  width: 30px;\n  height: 30px;\n  float: left;\n  border-radius: 4px;\n  margin: 0 6px 6px 0;\n  cursor: pointer;\n  position: relative;\n  outline: none;\n}\n.vc-twitter-clear {\n  clear: both;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle {\n  display: none;\n}\n.vc-twitter-hide-triangle .vc-twitter-triangle-shadow {\n  display: none;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle{\n  top: -10px;\n  left: 12px;\n}\n.vc-twitter-top-left-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  left: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle{\n  top: -10px;\n  right: 12px;\n}\n.vc-twitter-top-right-triangle .vc-twitter-triangle-shadow{\n  top: -11px;\n  right: 12px;\n}\n", ""])
				}
				, function(e, t, i) {
					"use strict";
					var n = function() {
						var e = this
						  , t = e.$createElement
						  , i = e._self._c || t;
						return i("div", {
							staticClass: "vc-twitter",
							class: {
								"vc-twitter-hide-triangle ": "hide" === e.triangle,
								"vc-twitter-top-left-triangle ": "top-left" === e.triangle,
								"vc-twitter-top-right-triangle ": "top-right" === e.triangle
							},
							style: {
								width: "number" == typeof e.width ? e.width + "px" : e.width
							}
						}, [i("div", {
							staticClass: "vc-twitter-triangle-shadow"
						}), e._v(" "), i("div", {
							staticClass: "vc-twitter-triangle"
						}), e._v(" "), i("div", {
							staticClass: "vc-twitter-body"
						}, [e._l(e.defaultColors, (function(t, n) {
							return i("span", {
								key: n,
								staticClass: "vc-twitter-swatch",
								style: {
									background: t,
									boxShadow: "0 0 4px " + (e.equal(t) ? t : "transparent")
								},
								on: {
									click: function(i) {
										return e.handlerClick(t)
									}
								}
							})
						}
						)), e._v(" "), i("div", {
							staticClass: "vc-twitter-hash"
						}, [e._v("#")]), e._v(" "), i("editable-input", {
							attrs: {
								label: "#",
								value: e.hex
							},
							on: {
								change: e.inputChange
							}
						}), e._v(" "), i("div", {
							staticClass: "vc-twitter-clear"
						})], 2)])
					}
					  , o = [];
					n._withStripped = !0;
					var a = {
						render: n,
						staticRenderFns: o
					};
					t.a = a
				}
				])
			}
			))
		},
		144: function(e, t, i) {
			"use strict";
			i.r(t),
			i.d(t, {
				EffectScope: function() {
					return Mt
				},
				computed: function() {
					return vt
				},
				customRef: function() {
					return st
				},
				default: function() {
					return oa
				},
				defineAsyncComponent: function() {
					return en
				},
				defineComponent: function() {
					return bn
				},
				del: function() {
					return ze
				},
				effectScope: function() {
					return Et
				},
				getCurrentInstance: function() {
					return ve
				},
				getCurrentScope: function() {
					return At
				},
				h: function() {
					return Li
				},
				inject: function() {
					return Rt
				},
				isProxy: function() {
					return Ke
				},
				isReactive: function() {
					return Ue
				},
				isReadonly: function() {
					return qe
				},
				isRef: function() {
					return Ze
				},
				isShallow: function() {
					return Xe
				},
				markRaw: function() {
					return Je
				},
				mergeDefaults: function() {
					return Ci
				},
				nextTick: function() {
					return Ji
				},
				onActivated: function() {
					return dn
				},
				onBeforeMount: function() {
					return on
				},
				onBeforeUnmount: function() {
					return ln
				},
				onBeforeUpdate: function() {
					return rn
				},
				onDeactivated: function() {
					return un
				},
				onErrorCaptured: function() {
					return vn
				},
				onMounted: function() {
					return an
				},
				onRenderTracked: function() {
					return pn
				},
				onRenderTriggered: function() {
					return fn
				},
				onScopeDispose: function() {
					return It
				},
				onServerPrefetch: function() {
					return hn
				},
				onUnmounted: function() {
					return cn
				},
				onUpdated: function() {
					return sn
				},
				provide: function() {
					return Ft
				},
				proxyRefs: function() {
					return at
				},
				reactive: function() {
					return Ve
				},
				readonly: function() {
					return ht
				},
				ref: function() {
					return et
				},
				set: function() {
					return je
				},
				shallowReactive: function() {
					return He
				},
				shallowReadonly: function() {
					return mt
				},
				shallowRef: function() {
					return tt
				},
				toRaw: function() {
					return Ye
				},
				toRef: function() {
					return ct
				},
				toRefs: function() {
					return lt
				},
				triggerRef: function() {
					return nt
				},
				unref: function() {
					return ot
				},
				useAttrs: function() {
					return yi
				},
				useCssModule: function() {
					return Qi
				},
				useCssVars: function() {
					return Zi
				},
				useListeners: function() {
					return wi
				},
				useSlots: function() {
					return _i
				},
				version: function() {
					return gn
				},
				watch: function() {
					return kt
				},
				watchEffect: function() {
					return wt
				},
				watchPostEffect: function() {
					return xt
				},
				watchSyncEffect: function() {
					return Ct
				}
			});
			/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
			var n = Object.freeze({})
			  , o = Array.isArray;
			function a(e) {
				return void 0 === e || null === e
			}
			function r(e) {
				return void 0 !== e && null !== e
			}
			function s(e) {
				return !0 === e
			}
			function l(e) {
				return !1 === e
			}
			function c(e) {
				return "string" === typeof e || "number" === typeof e || "symbol" === typeof e || "boolean" === typeof e
			}
			function d(e) {
				return "function" === typeof e
			}
			function u(e) {
				return null !== e && "object" === typeof e
			}
			var h = Object.prototype.toString;
			function p(e) {
				return "[object Object]" === h.call(e)
			}
			function f(e) {
				return "[object RegExp]" === h.call(e)
			}
			function m(e) {
				var t = parseFloat(String(e));
				return t >= 0 && Math.floor(t) === t && isFinite(e)
			}
			function v(e) {
				return r(e) && "function" === typeof e.then && "function" === typeof e.catch
			}
			function g(e) {
				return null == e ? "" : Array.isArray(e) || p(e) && e.toString === h ? JSON.stringify(e, null, 2) : String(e)
			}
			function b(e) {
				var t = parseFloat(e);
				return isNaN(t) ? e : t
			}
			function _(e, t) {
				for (var i = Object.create(null), n = e.split(","), o = 0; o < n.length; o++)
					i[n[o]] = !0;
				return t ? function(e) {
					return i[e.toLowerCase()]
				}
				: function(e) {
					return i[e]
				}
			}
			_("slot,component", !0);
			var y = _("key,ref,slot,slot-scope,is");
			function w(e, t) {
				var i = e.length;
				if (i) {
					if (t === e[i - 1])
						return void (e.length = i - 1);
					var n = e.indexOf(t);
					if (n > -1)
						return e.splice(n, 1)
				}
			}
			var x = Object.prototype.hasOwnProperty;
			function C(e, t) {
				return x.call(e, t)
			}
			function $(e) {
				var t = Object.create(null);
				return function(i) {
					var n = t[i];
					return n || (t[i] = e(i))
				}
			}
			var S = /-(\w)/g
			  , k = $((function(e) {
				return e.replace(S, (function(e, t) {
					return t ? t.toUpperCase() : ""
				}
				))
			}
			))
			  , T = $((function(e) {
				return e.charAt(0).toUpperCase() + e.slice(1)
			}
			))
			  , M = /\B([A-Z])/g
			  , E = $((function(e) {
				return e.replace(M, "-$1").toLowerCase()
			}
			));
			function O(e, t) {
				function i(i) {
					var n = arguments.length;
					return n ? n > 1 ? e.apply(t, arguments) : e.call(t, i) : e.call(t)
				}
				return i._length = e.length,
				i
			}
			function A(e, t) {
				return e.bind(t)
			}
			var I = Function.prototype.bind ? A : O;
			function F(e, t) {
				t = t || 0;
				var i = e.length - t
				  , n = new Array(i);
				while (i--)
					n[i] = e[i + t];
				return n
			}
			function D(e, t) {
				for (var i in t)
					e[i] = t[i];
				return e
			}
			function R(e) {
				for (var t = {}, i = 0; i < e.length; i++)
					e[i] && D(t, e[i]);
				return t
			}
			function P(e, t, i) {}
			var L = function(e, t, i) {
				return !1
			}
			  , B = function(e) {
				return e
			};
			function N(e, t) {
				if (e === t)
					return !0;
				var i = u(e)
				  , n = u(t);
				if (!i || !n)
					return !i && !n && String(e) === String(t);
				try {
					var o = Array.isArray(e)
					  , a = Array.isArray(t);
					if (o && a)
						return e.length === t.length && e.every((function(e, i) {
							return N(e, t[i])
						}
						));
					if (e instanceof Date && t instanceof Date)
						return e.getTime() === t.getTime();
					if (o || a)
						return !1;
					var r = Object.keys(e)
					  , s = Object.keys(t);
					return r.length === s.length && r.every((function(i) {
						return N(e[i], t[i])
					}
					))
				} catch (l) {
					return !1
				}
			}
			function j(e, t) {
				for (var i = 0; i < e.length; i++)
					if (N(e[i], t))
						return i;
				return -1
			}
			function z(e) {
				var t = !1;
				return function() {
					t || (t = !0,
					e.apply(this, arguments))
				}
			}
			function G(e, t) {
				return e === t ? 0 === e && 1 / e !== 1 / t : e === e || t === t
			}
			var V = "data-server-rendered"
			  , H = ["component", "directive", "filter"]
			  , W = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch", "renderTracked", "renderTriggered"]
			  , U = {
				optionMergeStrategies: Object.create(null),
				silent: !1,
				productionTip: !1,
				devtools: !1,
				performance: !1,
				errorHandler: null,
				warnHandler: null,
				ignoredElements: [],
				keyCodes: Object.create(null),
				isReservedTag: L,
				isReservedAttr: L,
				isUnknownElement: L,
				getTagNamespace: P,
				parsePlatformTagName: B,
				mustUseProp: L,
				async: !0,
				_lifecycleHooks: W
			}
			  , X = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
			function q(e) {
				var t = (e + "").charCodeAt(0);
				return 36 === t || 95 === t
			}
			function K(e, t, i, n) {
				Object.defineProperty(e, t, {
					value: i,
					enumerable: !!n,
					writable: !0,
					configurable: !0
				})
			}
			var Y = new RegExp("[^".concat(X.source, ".$_\\d]"));
			function J(e) {
				if (!Y.test(e)) {
					var t = e.split(".");
					return function(e) {
						for (var i = 0; i < t.length; i++) {
							if (!e)
								return;
							e = e[t[i]]
						}
						return e
					}
				}
			}
			var Q = "__proto__"in {}
			  , Z = "undefined" !== typeof window
			  , ee = Z && window.navigator.userAgent.toLowerCase()
			  , te = ee && /msie|trident/.test(ee)
			  , ie = ee && ee.indexOf("msie 9.0") > 0
			  , ne = ee && ee.indexOf("edge/") > 0;
			ee && ee.indexOf("android");
			var oe = ee && /iphone|ipad|ipod|ios/.test(ee);
			ee && /chrome\/\d+/.test(ee),
			ee && /phantomjs/.test(ee);
			var ae, re = ee && ee.match(/firefox\/(\d+)/), se = {}.watch, le = !1;
			if (Z)
				try {
					var ce = {};
					Object.defineProperty(ce, "passive", {
						get: function() {
							le = !0
						}
					}),
					window.addEventListener("test-passive", null, ce)
				} catch (ol) {}
			var de = function() {
				return void 0 === ae && (ae = !Z && "undefined" !== typeof i.g && (i.g["process"] && "server" === i.g["process"].env.VUE_ENV)),
				ae
			}
			  , ue = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
			function he(e) {
				return "function" === typeof e && /native code/.test(e.toString())
			}
			var pe, fe = "undefined" !== typeof Symbol && he(Symbol) && "undefined" !== typeof Reflect && he(Reflect.ownKeys);
			pe = "undefined" !== typeof Set && he(Set) ? Set : function() {
				function e() {
					this.set = Object.create(null)
				}
				return e.prototype.has = function(e) {
					return !0 === this.set[e]
				}
				,
				e.prototype.add = function(e) {
					this.set[e] = !0
				}
				,
				e.prototype.clear = function() {
					this.set = Object.create(null)
				}
				,
				e
			}();
			var me = null;
			function ve() {
				return me && {
					proxy: me
				}
			}
			function ge(e) {
				void 0 === e && (e = null),
				e || me && me._scope.off(),
				me = e,
				e && e._scope.on()
			}
			var be = function() {
				function e(e, t, i, n, o, a, r, s) {
					this.tag = e,
					this.data = t,
					this.children = i,
					this.text = n,
					this.elm = o,
					this.ns = void 0,
					this.context = a,
					this.fnContext = void 0,
					this.fnOptions = void 0,
					this.fnScopeId = void 0,
					this.key = t && t.key,
					this.componentOptions = r,
					this.componentInstance = void 0,
					this.parent = void 0,
					this.raw = !1,
					this.isStatic = !1,
					this.isRootInsert = !0,
					this.isComment = !1,
					this.isCloned = !1,
					this.isOnce = !1,
					this.asyncFactory = s,
					this.asyncMeta = void 0,
					this.isAsyncPlaceholder = !1
				}
				return Object.defineProperty(e.prototype, "child", {
					get: function() {
						return this.componentInstance
					},
					enumerable: !1,
					configurable: !0
				}),
				e
			}()
			  , _e = function(e) {
				void 0 === e && (e = "");
				var t = new be;
				return t.text = e,
				t.isComment = !0,
				t
			};
			function ye(e) {
				return new be(void 0,void 0,void 0,String(e))
			}
			function we(e) {
				var t = new be(e.tag,e.data,e.children && e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);
				return t.ns = e.ns,
				t.isStatic = e.isStatic,
				t.key = e.key,
				t.isComment = e.isComment,
				t.fnContext = e.fnContext,
				t.fnOptions = e.fnOptions,
				t.fnScopeId = e.fnScopeId,
				t.asyncMeta = e.asyncMeta,
				t.isCloned = !0,
				t
			}
			var xe = 0
			  , Ce = []
			  , $e = function() {
				for (var e = 0; e < Ce.length; e++) {
					var t = Ce[e];
					t.subs = t.subs.filter((function(e) {
						return e
					}
					)),
					t._pending = !1
				}
				Ce.length = 0
			}
			  , Se = function() {
				function e() {
					this._pending = !1,
					this.id = xe++,
					this.subs = []
				}
				return e.prototype.addSub = function(e) {
					this.subs.push(e)
				}
				,
				e.prototype.removeSub = function(e) {
					this.subs[this.subs.indexOf(e)] = null,
					this._pending || (this._pending = !0,
					Ce.push(this))
				}
				,
				e.prototype.depend = function(t) {
					e.target && e.target.addDep(this)
				}
				,
				e.prototype.notify = function(e) {
					var t = this.subs.filter((function(e) {
						return e
					}
					));
					for (var i = 0, n = t.length; i < n; i++) {
						var o = t[i];
						0,
						o.update()
					}
				}
				,
				e
			}();
			Se.target = null;
			var ke = [];
			function Te(e) {
				ke.push(e),
				Se.target = e
			}
			function Me() {
				ke.pop(),
				Se.target = ke[ke.length - 1]
			}
			var Ee = Array.prototype
			  , Oe = Object.create(Ee)
			  , Ae = ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"];
			Ae.forEach((function(e) {
				var t = Ee[e];
				K(Oe, e, (function() {
					for (var i = [], n = 0; n < arguments.length; n++)
						i[n] = arguments[n];
					var o, a = t.apply(this, i), r = this.__ob__;
					switch (e) {
					case "push":
					case "unshift":
						o = i;
						break;
					case "splice":
						o = i.slice(2);
						break
					}
					return o && r.observeArray(o),
					r.dep.notify(),
					a
				}
				))
			}
			));
			var Ie = Object.getOwnPropertyNames(Oe)
			  , Fe = {}
			  , De = !0;
			function Re(e) {
				De = e
			}
			var Pe = {
				notify: P,
				depend: P,
				addSub: P,
				removeSub: P
			}
			  , Le = function() {
				function e(e, t, i) {
					if (void 0 === t && (t = !1),
					void 0 === i && (i = !1),
					this.value = e,
					this.shallow = t,
					this.mock = i,
					this.dep = i ? Pe : new Se,
					this.vmCount = 0,
					K(e, "__ob__", this),
					o(e)) {
						if (!i)
							if (Q)
								e.__proto__ = Oe;
							else
								for (var n = 0, a = Ie.length; n < a; n++) {
									var r = Ie[n];
									K(e, r, Oe[r])
								}
						t || this.observeArray(e)
					} else {
						var s = Object.keys(e);
						for (n = 0; n < s.length; n++) {
							r = s[n];
							Ne(e, r, Fe, void 0, t, i)
						}
					}
				}
				return e.prototype.observeArray = function(e) {
					for (var t = 0, i = e.length; t < i; t++)
						Be(e[t], !1, this.mock)
				}
				,
				e
			}();
			function Be(e, t, i) {
				return e && C(e, "__ob__") && e.__ob__ instanceof Le ? e.__ob__ : !De || !i && de() || !o(e) && !p(e) || !Object.isExtensible(e) || e.__v_skip || Ze(e) || e instanceof be ? void 0 : new Le(e,t,i)
			}
			function Ne(e, t, i, n, a, r) {
				var s = new Se
				  , l = Object.getOwnPropertyDescriptor(e, t);
				if (!l || !1 !== l.configurable) {
					var c = l && l.get
					  , d = l && l.set;
					c && !d || i !== Fe && 2 !== arguments.length || (i = e[t]);
					var u = !a && Be(i, !1, r);
					return Object.defineProperty(e, t, {
						enumerable: !0,
						configurable: !0,
						get: function() {
							var t = c ? c.call(e) : i;
							return Se.target && (s.depend(),
							u && (u.dep.depend(),
							o(t) && Ge(t))),
							Ze(t) && !a ? t.value : t
						},
						set: function(t) {
							var n = c ? c.call(e) : i;
							if (G(n, t)) {
								if (d)
									d.call(e, t);
								else {
									if (c)
										return;
									if (!a && Ze(n) && !Ze(t))
										return void (n.value = t);
									i = t
								}
								u = !a && Be(t, !1, r),
								s.notify()
							}
						}
					}),
					s
				}
			}
			function je(e, t, i) {
				if (!qe(e)) {
					var n = e.__ob__;
					return o(e) && m(t) ? (e.length = Math.max(e.length, t),
					e.splice(t, 1, i),
					n && !n.shallow && n.mock && Be(i, !1, !0),
					i) : t in e && !(t in Object.prototype) ? (e[t] = i,
					i) : e._isVue || n && n.vmCount ? i : n ? (Ne(n.value, t, i, void 0, n.shallow, n.mock),
					n.dep.notify(),
					i) : (e[t] = i,
					i)
				}
			}
			function ze(e, t) {
				if (o(e) && m(t))
					e.splice(t, 1);
				else {
					var i = e.__ob__;
					e._isVue || i && i.vmCount || qe(e) || C(e, t) && (delete e[t],
					i && i.dep.notify())
				}
			}
			function Ge(e) {
				for (var t = void 0, i = 0, n = e.length; i < n; i++)
					t = e[i],
					t && t.__ob__ && t.__ob__.dep.depend(),
					o(t) && Ge(t)
			}
			function Ve(e) {
				return We(e, !1),
				e
			}
			function He(e) {
				return We(e, !0),
				K(e, "__v_isShallow", !0),
				e
			}
			function We(e, t) {
				if (!qe(e)) {
					Be(e, t, de());
					0
				}
			}
			function Ue(e) {
				return qe(e) ? Ue(e["__v_raw"]) : !(!e || !e.__ob__)
			}
			function Xe(e) {
				return !(!e || !e.__v_isShallow)
			}
			function qe(e) {
				return !(!e || !e.__v_isReadonly)
			}
			function Ke(e) {
				return Ue(e) || qe(e)
			}
			function Ye(e) {
				var t = e && e["__v_raw"];
				return t ? Ye(t) : e
			}
			function Je(e) {
				return Object.isExtensible(e) && K(e, "__v_skip", !0),
				e
			}
			var Qe = "__v_isRef";
			function Ze(e) {
				return !(!e || !0 !== e.__v_isRef)
			}
			function et(e) {
				return it(e, !1)
			}
			function tt(e) {
				return it(e, !0)
			}
			function it(e, t) {
				if (Ze(e))
					return e;
				var i = {};
				return K(i, Qe, !0),
				K(i, "__v_isShallow", t),
				K(i, "dep", Ne(i, "value", e, null, t, de())),
				i
			}
			function nt(e) {
				e.dep && e.dep.notify()
			}
			function ot(e) {
				return Ze(e) ? e.value : e
			}
			function at(e) {
				if (Ue(e))
					return e;
				for (var t = {}, i = Object.keys(e), n = 0; n < i.length; n++)
					rt(t, e, i[n]);
				return t
			}
			function rt(e, t, i) {
				Object.defineProperty(e, i, {
					enumerable: !0,
					configurable: !0,
					get: function() {
						var e = t[i];
						if (Ze(e))
							return e.value;
						var n = e && e.__ob__;
						return n && n.dep.depend(),
						e
					},
					set: function(e) {
						var n = t[i];
						Ze(n) && !Ze(e) ? n.value = e : t[i] = e
					}
				})
			}
			function st(e) {
				var t = new Se
				  , i = e((function() {
					t.depend()
				}
				), (function() {
					t.notify()
				}
				))
				  , n = i.get
				  , o = i.set
				  , a = {
					get value() {
						return n()
					},
					set value(e) {
						o(e)
					}
				};
				return K(a, Qe, !0),
				a
			}
			function lt(e) {
				var t = o(e) ? new Array(e.length) : {};
				for (var i in e)
					t[i] = ct(e, i);
				return t
			}
			function ct(e, t, i) {
				var n = e[t];
				if (Ze(n))
					return n;
				var o = {
					get value() {
						var n = e[t];
						return void 0 === n ? i : n
					},
					set value(i) {
						e[t] = i
					}
				};
				return K(o, Qe, !0),
				o
			}
			var dt = "__v_rawToReadonly"
			  , ut = "__v_rawToShallowReadonly";
			function ht(e) {
				return pt(e, !1)
			}
			function pt(e, t) {
				if (!p(e))
					return e;
				if (qe(e))
					return e;
				var i = t ? ut : dt
				  , n = e[i];
				if (n)
					return n;
				var o = Object.create(Object.getPrototypeOf(e));
				K(e, i, o),
				K(o, "__v_isReadonly", !0),
				K(o, "__v_raw", e),
				Ze(e) && K(o, Qe, !0),
				(t || Xe(e)) && K(o, "__v_isShallow", !0);
				for (var a = Object.keys(e), r = 0; r < a.length; r++)
					ft(o, e, a[r], t);
				return o
			}
			function ft(e, t, i, n) {
				Object.defineProperty(e, i, {
					enumerable: !0,
					configurable: !0,
					get: function() {
						var e = t[i];
						return n || !p(e) ? e : ht(e)
					},
					set: function() {}
				})
			}
			function mt(e) {
				return pt(e, !0)
			}
			function vt(e, t) {
				var i, n, o = d(e);
				o ? (i = e,
				n = P) : (i = e.get,
				n = e.set);
				var a = de() ? null : new $n(me,i,P,{
					lazy: !0
				});
				var r = {
					effect: a,
					get value() {
						return a ? (a.dirty && a.evaluate(),
						Se.target && a.depend(),
						a.value) : i()
					},
					set value(e) {
						n(e)
					}
				};
				return K(r, Qe, !0),
				K(r, "__v_isReadonly", o),
				r
			}
			var gt = "watcher"
			  , bt = "".concat(gt, " callback")
			  , _t = "".concat(gt, " getter")
			  , yt = "".concat(gt, " cleanup");
			function wt(e, t) {
				return Tt(e, null, t)
			}
			function xt(e, t) {
				return Tt(e, null, {
					flush: "post"
				})
			}
			function Ct(e, t) {
				return Tt(e, null, {
					flush: "sync"
				})
			}
			var $t, St = {};
			function kt(e, t, i) {
				return Tt(e, t, i)
			}
			function Tt(e, t, i) {
				var a = void 0 === i ? n : i
				  , r = a.immediate
				  , s = a.deep
				  , l = a.flush
				  , c = void 0 === l ? "pre" : l;
				a.onTrack,
				a.onTrigger;
				var u, h, p = me, f = function(e, t, i) {
					return void 0 === i && (i = null),
					Ni(e, null, i, p, t)
				}, m = !1, v = !1;
				if (Ze(e) ? (u = function() {
					return e.value
				}
				,
				m = Xe(e)) : Ue(e) ? (u = function() {
					return e.__ob__.dep.depend(),
					e
				}
				,
				s = !0) : o(e) ? (v = !0,
				m = e.some((function(e) {
					return Ue(e) || Xe(e)
				}
				)),
				u = function() {
					return e.map((function(e) {
						return Ze(e) ? e.value : Ue(e) ? yn(e) : d(e) ? f(e, _t) : void 0
					}
					))
				}
				) : u = d(e) ? t ? function() {
					return f(e, _t)
				}
				: function() {
					if (!p || !p._isDestroyed)
						return h && h(),
						f(e, gt, [b])
				}
				: P,
				t && s) {
					var g = u;
					u = function() {
						return yn(g())
					}
				}
				var b = function(e) {
					h = _.onStop = function() {
						f(e, yt)
					}
				};
				if (de())
					return b = P,
					t ? r && f(t, bt, [u(), v ? [] : void 0, b]) : u(),
					P;
				var _ = new $n(me,u,P,{
					lazy: !0
				});
				_.noRecurse = !t;
				var y = v ? [] : St;
				return _.run = function() {
					if (_.active)
						if (t) {
							var e = _.get();
							(s || m || (v ? e.some((function(e, t) {
								return G(e, y[t])
							}
							)) : G(e, y))) && (h && h(),
							f(t, bt, [e, y === St ? void 0 : y, b]),
							y = e)
						} else
							_.get()
				}
				,
				"sync" === c ? _.update = _.run : "post" === c ? (_.post = !0,
				_.update = function() {
					return io(_)
				}
				) : _.update = function() {
					if (p && p === me && !p._isMounted) {
						var e = p._preWatchers || (p._preWatchers = []);
						e.indexOf(_) < 0 && e.push(_)
					} else
						io(_)
				}
				,
				t ? r ? _.run() : y = _.get() : "post" === c && p ? p.$once("hook:mounted", (function() {
					return _.get()
				}
				)) : _.get(),
				function() {
					_.teardown()
				}
			}
			var Mt = function() {
				function e(e) {
					void 0 === e && (e = !1),
					this.detached = e,
					this.active = !0,
					this.effects = [],
					this.cleanups = [],
					this.parent = $t,
					!e && $t && (this.index = ($t.scopes || ($t.scopes = [])).push(this) - 1)
				}
				return e.prototype.run = function(e) {
					if (this.active) {
						var t = $t;
						try {
							return $t = this,
							e()
						} finally {
							$t = t
						}
					} else
						0
				}
				,
				e.prototype.on = function() {
					$t = this
				}
				,
				e.prototype.off = function() {
					$t = this.parent
				}
				,
				e.prototype.stop = function(e) {
					if (this.active) {
						var t = void 0
						  , i = void 0;
						for (t = 0,
						i = this.effects.length; t < i; t++)
							this.effects[t].teardown();
						for (t = 0,
						i = this.cleanups.length; t < i; t++)
							this.cleanups[t]();
						if (this.scopes)
							for (t = 0,
							i = this.scopes.length; t < i; t++)
								this.scopes[t].stop(!0);
						if (!this.detached && this.parent && !e) {
							var n = this.parent.scopes.pop();
							n && n !== this && (this.parent.scopes[this.index] = n,
							n.index = this.index)
						}
						this.parent = void 0,
						this.active = !1
					}
				}
				,
				e
			}();
			function Et(e) {
				return new Mt(e)
			}
			function Ot(e, t) {
				void 0 === t && (t = $t),
				t && t.active && t.effects.push(e)
			}
			function At() {
				return $t
			}
			function It(e) {
				$t && $t.cleanups.push(e)
			}
			function Ft(e, t) {
				me && (Dt(me)[e] = t)
			}
			function Dt(e) {
				var t = e._provided
				  , i = e.$parent && e.$parent._provided;
				return i === t ? e._provided = Object.create(i) : t
			}
			function Rt(e, t, i) {
				void 0 === i && (i = !1);
				var n = me;
				if (n) {
					var o = n.$parent && n.$parent._provided;
					if (o && e in o)
						return o[e];
					if (arguments.length > 1)
						return i && d(t) ? t.call(n) : t
				} else
					0
			}
			var Pt = $((function(e) {
				var t = "&" === e.charAt(0);
				e = t ? e.slice(1) : e;
				var i = "~" === e.charAt(0);
				e = i ? e.slice(1) : e;
				var n = "!" === e.charAt(0);
				return e = n ? e.slice(1) : e,
				{
					name: e,
					once: i,
					capture: n,
					passive: t
				}
			}
			));
			function Lt(e, t) {
				function i() {
					var e = i.fns;
					if (!o(e))
						return Ni(e, null, arguments, t, "v-on handler");
					for (var n = e.slice(), a = 0; a < n.length; a++)
						Ni(n[a], null, arguments, t, "v-on handler")
				}
				return i.fns = e,
				i
			}
			function Bt(e, t, i, n, o, r) {
				var l, c, d, u;
				for (l in e)
					c = e[l],
					d = t[l],
					u = Pt(l),
					a(c) || (a(d) ? (a(c.fns) && (c = e[l] = Lt(c, r)),
					s(u.once) && (c = e[l] = o(u.name, c, u.capture)),
					i(u.name, c, u.capture, u.passive, u.params)) : c !== d && (d.fns = c,
					e[l] = d));
				for (l in t)
					a(e[l]) && (u = Pt(l),
					n(u.name, t[l], u.capture))
			}
			function Nt(e, t, i) {
				var n;
				e instanceof be && (e = e.data.hook || (e.data.hook = {}));
				var o = e[t];
				function l() {
					i.apply(this, arguments),
					w(n.fns, l)
				}
				a(o) ? n = Lt([l]) : r(o.fns) && s(o.merged) ? (n = o,
				n.fns.push(l)) : n = Lt([o, l]),
				n.merged = !0,
				e[t] = n
			}
			function jt(e, t, i) {
				var n = t.options.props;
				if (!a(n)) {
					var o = {}
					  , s = e.attrs
					  , l = e.props;
					if (r(s) || r(l))
						for (var c in n) {
							var d = E(c);
							zt(o, l, c, d, !0) || zt(o, s, c, d, !1)
						}
					return o
				}
			}
			function zt(e, t, i, n, o) {
				if (r(t)) {
					if (C(t, i))
						return e[i] = t[i],
						o || delete t[i],
						!0;
					if (C(t, n))
						return e[i] = t[n],
						o || delete t[n],
						!0
				}
				return !1
			}
			function Gt(e) {
				for (var t = 0; t < e.length; t++)
					if (o(e[t]))
						return Array.prototype.concat.apply([], e);
				return e
			}
			function Vt(e) {
				return c(e) ? [ye(e)] : o(e) ? Wt(e) : void 0
			}
			function Ht(e) {
				return r(e) && r(e.text) && l(e.isComment)
			}
			function Wt(e, t) {
				var i, n, l, d, u = [];
				for (i = 0; i < e.length; i++)
					n = e[i],
					a(n) || "boolean" === typeof n || (l = u.length - 1,
					d = u[l],
					o(n) ? n.length > 0 && (n = Wt(n, "".concat(t || "", "_").concat(i)),
					Ht(n[0]) && Ht(d) && (u[l] = ye(d.text + n[0].text),
					n.shift()),
					u.push.apply(u, n)) : c(n) ? Ht(d) ? u[l] = ye(d.text + n) : "" !== n && u.push(ye(n)) : Ht(n) && Ht(d) ? u[l] = ye(d.text + n.text) : (s(e._isVList) && r(n.tag) && a(n.key) && r(t) && (n.key = "__vlist".concat(t, "_").concat(i, "__")),
					u.push(n)));
				return u
			}
			function Ut(e, t) {
				var i, n, a, s, l = null;
				if (o(e) || "string" === typeof e)
					for (l = new Array(e.length),
					i = 0,
					n = e.length; i < n; i++)
						l[i] = t(e[i], i);
				else if ("number" === typeof e)
					for (l = new Array(e),
					i = 0; i < e; i++)
						l[i] = t(i + 1, i);
				else if (u(e))
					if (fe && e[Symbol.iterator]) {
						l = [];
						var c = e[Symbol.iterator]()
						  , d = c.next();
						while (!d.done)
							l.push(t(d.value, l.length)),
							d = c.next()
					} else
						for (a = Object.keys(e),
						l = new Array(a.length),
						i = 0,
						n = a.length; i < n; i++)
							s = a[i],
							l[i] = t(e[s], s, i);
				return r(l) || (l = []),
				l._isVList = !0,
				l
			}
			function Xt(e, t, i, n) {
				var o, a = this.$scopedSlots[e];
				a ? (i = i || {},
				n && (i = D(D({}, n), i)),
				o = a(i) || (d(t) ? t() : t)) : o = this.$slots[e] || (d(t) ? t() : t);
				var r = i && i.slot;
				return r ? this.$createElement("template", {
					slot: r
				}, o) : o
			}
			function qt(e) {
				return Ao(this.$options, "filters", e, !0) || B
			}
			function Kt(e, t) {
				return o(e) ? -1 === e.indexOf(t) : e !== t
			}
			function Yt(e, t, i, n, o) {
				var a = U.keyCodes[t] || i;
				return o && n && !U.keyCodes[t] ? Kt(o, n) : a ? Kt(a, e) : n ? E(n) !== t : void 0 === e
			}
			function Jt(e, t, i, n, a) {
				if (i)
					if (u(i)) {
						o(i) && (i = R(i));
						var r = void 0
						  , s = function(o) {
							if ("class" === o || "style" === o || y(o))
								r = e;
							else {
								var s = e.attrs && e.attrs.type;
								r = n || U.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {})
							}
							var l = k(o)
							  , c = E(o);
							if (!(l in r) && !(c in r) && (r[o] = i[o],
							a)) {
								var d = e.on || (e.on = {});
								d["update:".concat(o)] = function(e) {
									i[o] = e
								}
							}
						};
						for (var l in i)
							s(l)
					} else
						;return e
			}
			function Qt(e, t) {
				var i = this._staticTrees || (this._staticTrees = [])
				  , n = i[e];
				return n && !t || (n = i[e] = this.$options.staticRenderFns[e].call(this._renderProxy, this._c, this),
				ei(n, "__static__".concat(e), !1)),
				n
			}
			function Zt(e, t, i) {
				return ei(e, "__once__".concat(t).concat(i ? "_".concat(i) : ""), !0),
				e
			}
			function ei(e, t, i) {
				if (o(e))
					for (var n = 0; n < e.length; n++)
						e[n] && "string" !== typeof e[n] && ti(e[n], "".concat(t, "_").concat(n), i);
				else
					ti(e, t, i)
			}
			function ti(e, t, i) {
				e.isStatic = !0,
				e.key = t,
				e.isOnce = i
			}
			function ii(e, t) {
				if (t)
					if (p(t)) {
						var i = e.on = e.on ? D({}, e.on) : {};
						for (var n in t) {
							var o = i[n]
							  , a = t[n];
							i[n] = o ? [].concat(o, a) : a
						}
					} else
						;return e
			}
			function ni(e, t, i, n) {
				t = t || {
					$stable: !i
				};
				for (var a = 0; a < e.length; a++) {
					var r = e[a];
					o(r) ? ni(r, t, i) : r && (r.proxy && (r.fn.proxy = !0),
					t[r.key] = r.fn)
				}
				return n && (t.$key = n),
				t
			}
			function oi(e, t) {
				for (var i = 0; i < t.length; i += 2) {
					var n = t[i];
					"string" === typeof n && n && (e[t[i]] = t[i + 1])
				}
				return e
			}
			function ai(e, t) {
				return "string" === typeof e ? t + e : e
			}
			function ri(e) {
				e._o = Zt,
				e._n = b,
				e._s = g,
				e._l = Ut,
				e._t = Xt,
				e._q = N,
				e._i = j,
				e._m = Qt,
				e._f = qt,
				e._k = Yt,
				e._b = Jt,
				e._v = ye,
				e._e = _e,
				e._u = ni,
				e._g = ii,
				e._d = oi,
				e._p = ai
			}
			function si(e, t) {
				if (!e || !e.length)
					return {};
				for (var i = {}, n = 0, o = e.length; n < o; n++) {
					var a = e[n]
					  , r = a.data;
					if (r && r.attrs && r.attrs.slot && delete r.attrs.slot,
					a.context !== t && a.fnContext !== t || !r || null == r.slot)
						(i.default || (i.default = [])).push(a);
					else {
						var s = r.slot
						  , l = i[s] || (i[s] = []);
						"template" === a.tag ? l.push.apply(l, a.children || []) : l.push(a)
					}
				}
				for (var c in i)
					i[c].every(li) && delete i[c];
				return i
			}
			function li(e) {
				return e.isComment && !e.asyncFactory || " " === e.text
			}
			function ci(e) {
				return e.isComment && e.asyncFactory
			}
			function di(e, t, i, o) {
				var a, r = Object.keys(i).length > 0, s = t ? !!t.$stable : !r, l = t && t.$key;
				if (t) {
					if (t._normalized)
						return t._normalized;
					if (s && o && o !== n && l === o.$key && !r && !o.$hasNormal)
						return o;
					for (var c in a = {},
					t)
						t[c] && "$" !== c[0] && (a[c] = ui(e, i, c, t[c]))
				} else
					a = {};
				for (var d in i)
					d in a || (a[d] = hi(i, d));
				return t && Object.isExtensible(t) && (t._normalized = a),
				K(a, "$stable", s),
				K(a, "$key", l),
				K(a, "$hasNormal", r),
				a
			}
			function ui(e, t, i, n) {
				var a = function() {
					var t = me;
					ge(e);
					var i = arguments.length ? n.apply(null, arguments) : n({});
					i = i && "object" === typeof i && !o(i) ? [i] : Vt(i);
					var a = i && i[0];
					return ge(t),
					i && (!a || 1 === i.length && a.isComment && !ci(a)) ? void 0 : i
				};
				return n.proxy && Object.defineProperty(t, i, {
					get: a,
					enumerable: !0,
					configurable: !0
				}),
				a
			}
			function hi(e, t) {
				return function() {
					return e[t]
				}
			}
			function pi(e) {
				var t = e.$options
				  , i = t.setup;
				if (i) {
					var n = e._setupContext = fi(e);
					ge(e),
					Te();
					var o = Ni(i, null, [e._props || He({}), n], e, "setup");
					if (Me(),
					ge(),
					d(o))
						t.render = o;
					else if (u(o))
						if (e._setupState = o,
						o.__sfc) {
							var a = e._setupProxy = {};
							for (var r in o)
								"__sfc" !== r && rt(a, o, r)
						} else
							for (var r in o)
								q(r) || rt(e, o, r);
					else
						0
				}
			}
			function fi(e) {
				return {
					get attrs() {
						if (!e._attrsProxy) {
							var t = e._attrsProxy = {};
							K(t, "_v_attr_proxy", !0),
							mi(t, e.$attrs, n, e, "$attrs")
						}
						return e._attrsProxy
					},
					get listeners() {
						if (!e._listenersProxy) {
							var t = e._listenersProxy = {};
							mi(t, e.$listeners, n, e, "$listeners")
						}
						return e._listenersProxy
					},
					get slots() {
						return gi(e)
					},
					emit: I(e.$emit, e),
					expose: function(t) {
						t && Object.keys(t).forEach((function(i) {
							return rt(e, t, i)
						}
						))
					}
				}
			}
			function mi(e, t, i, n, o) {
				var a = !1;
				for (var r in t)
					r in e ? t[r] !== i[r] && (a = !0) : (a = !0,
					vi(e, r, n, o));
				for (var r in e)
					r in t || (a = !0,
					delete e[r]);
				return a
			}
			function vi(e, t, i, n) {
				Object.defineProperty(e, t, {
					enumerable: !0,
					configurable: !0,
					get: function() {
						return i[n][t]
					}
				})
			}
			function gi(e) {
				return e._slotsProxy || bi(e._slotsProxy = {}, e.$scopedSlots),
				e._slotsProxy
			}
			function bi(e, t) {
				for (var i in t)
					e[i] = t[i];
				for (var i in e)
					i in t || delete e[i]
			}
			function _i() {
				return xi().slots
			}
			function yi() {
				return xi().attrs
			}
			function wi() {
				return xi().listeners
			}
			function xi() {
				var e = me;
				return e._setupContext || (e._setupContext = fi(e))
			}
			function Ci(e, t) {
				var i = o(e) ? e.reduce((function(e, t) {
					return e[t] = {},
					e
				}
				), {}) : e;
				for (var n in t) {
					var a = i[n];
					a ? o(a) || d(a) ? i[n] = {
						type: a,
						default: t[n]
					} : a.default = t[n] : null === a && (i[n] = {
						default: t[n]
					})
				}
				return i
			}
			function $i(e) {
				e._vnode = null,
				e._staticTrees = null;
				var t = e.$options
				  , i = e.$vnode = t._parentVnode
				  , o = i && i.context;
				e.$slots = si(t._renderChildren, o),
				e.$scopedSlots = i ? di(e.$parent, i.data.scopedSlots, e.$slots) : n,
				e._c = function(t, i, n, o) {
					return Fi(e, t, i, n, o, !1)
				}
				,
				e.$createElement = function(t, i, n, o) {
					return Fi(e, t, i, n, o, !0)
				}
				;
				var a = i && i.data;
				Ne(e, "$attrs", a && a.attrs || n, null, !0),
				Ne(e, "$listeners", t._parentListeners || n, null, !0)
			}
			var Si = null;
			function ki(e) {
				ri(e.prototype),
				e.prototype.$nextTick = function(e) {
					return Ji(e, this)
				}
				,
				e.prototype._render = function() {
					var e, t = this, i = t.$options, n = i.render, a = i._parentVnode;
					a && t._isMounted && (t.$scopedSlots = di(t.$parent, a.data.scopedSlots, t.$slots, t.$scopedSlots),
					t._slotsProxy && bi(t._slotsProxy, t.$scopedSlots)),
					t.$vnode = a;
					try {
						ge(t),
						Si = t,
						e = n.call(t._renderProxy, t.$createElement)
					} catch (ol) {
						Bi(ol, t, "render"),
						e = t._vnode
					} finally {
						Si = null,
						ge()
					}
					return o(e) && 1 === e.length && (e = e[0]),
					e instanceof be || (e = _e()),
					e.parent = a,
					e
				}
			}
			function Ti(e, t) {
				return (e.__esModule || fe && "Module" === e[Symbol.toStringTag]) && (e = e.default),
				u(e) ? t.extend(e) : e
			}
			function Mi(e, t, i, n, o) {
				var a = _e();
				return a.asyncFactory = e,
				a.asyncMeta = {
					data: t,
					context: i,
					children: n,
					tag: o
				},
				a
			}
			function Ei(e, t) {
				if (s(e.error) && r(e.errorComp))
					return e.errorComp;
				if (r(e.resolved))
					return e.resolved;
				var i = Si;
				if (i && r(e.owners) && -1 === e.owners.indexOf(i) && e.owners.push(i),
				s(e.loading) && r(e.loadingComp))
					return e.loadingComp;
				if (i && !r(e.owners)) {
					var n = e.owners = [i]
					  , o = !0
					  , l = null
					  , c = null;
					i.$on("hook:destroyed", (function() {
						return w(n, i)
					}
					));
					var d = function(e) {
						for (var t = 0, i = n.length; t < i; t++)
							n[t].$forceUpdate();
						e && (n.length = 0,
						null !== l && (clearTimeout(l),
						l = null),
						null !== c && (clearTimeout(c),
						c = null))
					}
					  , h = z((function(i) {
						e.resolved = Ti(i, t),
						o ? n.length = 0 : d(!0)
					}
					))
					  , p = z((function(t) {
						r(e.errorComp) && (e.error = !0,
						d(!0))
					}
					))
					  , f = e(h, p);
					return u(f) && (v(f) ? a(e.resolved) && f.then(h, p) : v(f.component) && (f.component.then(h, p),
					r(f.error) && (e.errorComp = Ti(f.error, t)),
					r(f.loading) && (e.loadingComp = Ti(f.loading, t),
					0 === f.delay ? e.loading = !0 : l = setTimeout((function() {
						l = null,
						a(e.resolved) && a(e.error) && (e.loading = !0,
						d(!1))
					}
					), f.delay || 200)),
					r(f.timeout) && (c = setTimeout((function() {
						c = null,
						a(e.resolved) && p(null)
					}
					), f.timeout)))),
					o = !1,
					e.loading ? e.loadingComp : e.resolved
				}
			}
			function Oi(e) {
				if (o(e))
					for (var t = 0; t < e.length; t++) {
						var i = e[t];
						if (r(i) && (r(i.componentOptions) || ci(i)))
							return i
					}
			}
			var Ai = 1
			  , Ii = 2;
			function Fi(e, t, i, n, a, r) {
				return (o(i) || c(i)) && (a = n,
				n = i,
				i = void 0),
				s(r) && (a = Ii),
				Di(e, t, i, n, a)
			}
			function Di(e, t, i, n, a) {
				if (r(i) && r(i.__ob__))
					return _e();
				if (r(i) && r(i.is) && (t = i.is),
				!t)
					return _e();
				var s, l;
				if (o(n) && d(n[0]) && (i = i || {},
				i.scopedSlots = {
					default: n[0]
				},
				n.length = 0),
				a === Ii ? n = Vt(n) : a === Ai && (n = Gt(n)),
				"string" === typeof t) {
					var c = void 0;
					l = e.$vnode && e.$vnode.ns || U.getTagNamespace(t),
					s = U.isReservedTag(t) ? new be(U.parsePlatformTagName(t),i,n,void 0,void 0,e) : i && i.pre || !r(c = Ao(e.$options, "components", t)) ? new be(t,i,n,void 0,void 0,e) : fo(c, i, e, n, t)
				} else
					s = fo(t, i, e, n);
				return o(s) ? s : r(s) ? (r(l) && Ri(s, l),
				r(i) && Pi(i),
				s) : _e()
			}
			function Ri(e, t, i) {
				if (e.ns = t,
				"foreignObject" === e.tag && (t = void 0,
				i = !0),
				r(e.children))
					for (var n = 0, o = e.children.length; n < o; n++) {
						var l = e.children[n];
						r(l.tag) && (a(l.ns) || s(i) && "svg" !== l.tag) && Ri(l, t, i)
					}
			}
			function Pi(e) {
				u(e.style) && yn(e.style),
				u(e.class) && yn(e.class)
			}
			function Li(e, t, i) {
				return Fi(me, e, t, i, 2, !0)
			}
			function Bi(e, t, i) {
				Te();
				try {
					if (t) {
						var n = t;
						while (n = n.$parent) {
							var o = n.$options.errorCaptured;
							if (o)
								for (var a = 0; a < o.length; a++)
									try {
										var r = !1 === o[a].call(n, e, t, i);
										if (r)
											return
									} catch (ol) {
										ji(ol, n, "errorCaptured hook")
									}
						}
					}
					ji(e, t, i)
				} finally {
					Me()
				}
			}
			function Ni(e, t, i, n, o) {
				var a;
				try {
					a = i ? e.apply(t, i) : e.call(t),
					a && !a._isVue && v(a) && !a._handled && (a.catch((function(e) {
						return Bi(e, n, o + " (Promise/async)")
					}
					)),
					a._handled = !0)
				} catch (ol) {
					Bi(ol, n, o)
				}
				return a
			}
			function ji(e, t, i) {
				if (U.errorHandler)
					try {
						return U.errorHandler.call(null, e, t, i)
					} catch (ol) {
						ol !== e && zi(ol, null, "config.errorHandler")
					}
				zi(e, t, i)
			}
			function zi(e, t, i) {
				if (!Z || "undefined" === typeof console)
					throw e;
				console.error(e)
			}
			var Gi, Vi = !1, Hi = [], Wi = !1;
			function Ui() {
				Wi = !1;
				var e = Hi.slice(0);
				Hi.length = 0;
				for (var t = 0; t < e.length; t++)
					e[t]()
			}
			if ("undefined" !== typeof Promise && he(Promise)) {
				var Xi = Promise.resolve();
				Gi = function() {
					Xi.then(Ui),
					oe && setTimeout(P)
				}
				,
				Vi = !0
			} else if (te || "undefined" === typeof MutationObserver || !he(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
				Gi = "undefined" !== typeof setImmediate && he(setImmediate) ? function() {
					setImmediate(Ui)
				}
				: function() {
					setTimeout(Ui, 0)
				}
				;
			else {
				var qi = 1
				  , Ki = new MutationObserver(Ui)
				  , Yi = document.createTextNode(String(qi));
				Ki.observe(Yi, {
					characterData: !0
				}),
				Gi = function() {
					qi = (qi + 1) % 2,
					Yi.data = String(qi)
				}
				,
				Vi = !0
			}
			function Ji(e, t) {
				var i;
				if (Hi.push((function() {
					if (e)
						try {
							e.call(t)
						} catch (ol) {
							Bi(ol, t, "nextTick")
						}
					else
						i && i(t)
				}
				)),
				Wi || (Wi = !0,
				Gi()),
				!e && "undefined" !== typeof Promise)
					return new Promise((function(e) {
						i = e
					}
					))
			}
			function Qi(e) {
				if (void 0 === e && (e = "$style"),
				!me)
					return n;
				var t = me[e];
				return t || n
			}
			function Zi(e) {
				if (Z) {
					var t = me;
					t && xt((function() {
						var i = t.$el
						  , n = e(t, t._setupProxy);
						if (i && 1 === i.nodeType) {
							var o = i.style;
							for (var a in n)
								o.setProperty("--".concat(a), n[a])
						}
					}
					))
				}
			}
			function en(e) {
				d(e) && (e = {
					loader: e
				});
				var t = e.loader
				  , i = e.loadingComponent
				  , n = e.errorComponent
				  , o = e.delay
				  , a = void 0 === o ? 200 : o
				  , r = e.timeout
				  , s = (e.suspensible,
				e.onError);
				var l = null
				  , c = 0
				  , u = function() {
					return c++,
					l = null,
					h()
				}
				  , h = function() {
					var e;
					return l || (e = l = t().catch((function(e) {
						if (e = e instanceof Error ? e : new Error(String(e)),
						s)
							return new Promise((function(t, i) {
								var n = function() {
									return t(u())
								}
								  , o = function() {
									return i(e)
								};
								s(e, n, o, c + 1)
							}
							));
						throw e
					}
					)).then((function(t) {
						return e !== l && l ? l : (t && (t.__esModule || "Module" === t[Symbol.toStringTag]) && (t = t.default),
						t)
					}
					)))
				};
				return function() {
					var e = h();
					return {
						component: e,
						delay: a,
						timeout: r,
						error: n,
						loading: i
					}
				}
			}
			function tn(e) {
				return function(t, i) {
					if (void 0 === i && (i = me),
					i)
						return nn(i, e, t)
				}
			}
			function nn(e, t, i) {
				var n = e.$options;
				n[t] = Co(n[t], i)
			}
			var on = tn("beforeMount")
			  , an = tn("mounted")
			  , rn = tn("beforeUpdate")
			  , sn = tn("updated")
			  , ln = tn("beforeDestroy")
			  , cn = tn("destroyed")
			  , dn = tn("activated")
			  , un = tn("deactivated")
			  , hn = tn("serverPrefetch")
			  , pn = tn("renderTracked")
			  , fn = tn("renderTriggered")
			  , mn = tn("errorCaptured");
			function vn(e, t) {
				void 0 === t && (t = me),
				mn(e, t)
			}
			var gn = "2.7.14";
			function bn(e) {
				return e
			}
			var _n = new pe;
			function yn(e) {
				return wn(e, _n),
				_n.clear(),
				e
			}
			function wn(e, t) {
				var i, n, a = o(e);
				if (!(!a && !u(e) || e.__v_skip || Object.isFrozen(e) || e instanceof be)) {
					if (e.__ob__) {
						var r = e.__ob__.dep.id;
						if (t.has(r))
							return;
						t.add(r)
					}
					if (a) {
						i = e.length;
						while (i--)
							wn(e[i], t)
					} else if (Ze(e))
						wn(e.value, t);
					else {
						n = Object.keys(e),
						i = n.length;
						while (i--)
							wn(e[n[i]], t)
					}
				}
			}
			var xn, Cn = 0, $n = function() {
				function e(e, t, i, n, o) {
					Ot(this, $t && !$t._vm ? $t : e ? e._scope : void 0),
					(this.vm = e) && o && (e._watcher = this),
					n ? (this.deep = !!n.deep,
					this.user = !!n.user,
					this.lazy = !!n.lazy,
					this.sync = !!n.sync,
					this.before = n.before) : this.deep = this.user = this.lazy = this.sync = !1,
					this.cb = i,
					this.id = ++Cn,
					this.active = !0,
					this.post = !1,
					this.dirty = this.lazy,
					this.deps = [],
					this.newDeps = [],
					this.depIds = new pe,
					this.newDepIds = new pe,
					this.expression = "",
					d(t) ? this.getter = t : (this.getter = J(t),
					this.getter || (this.getter = P)),
					this.value = this.lazy ? void 0 : this.get()
				}
				return e.prototype.get = function() {
					var e;
					Te(this);
					var t = this.vm;
					try {
						e = this.getter.call(t, t)
					} catch (ol) {
						if (!this.user)
							throw ol;
						Bi(ol, t, 'getter for watcher "'.concat(this.expression, '"'))
					} finally {
						this.deep && yn(e),
						Me(),
						this.cleanupDeps()
					}
					return e
				}
				,
				e.prototype.addDep = function(e) {
					var t = e.id;
					this.newDepIds.has(t) || (this.newDepIds.add(t),
					this.newDeps.push(e),
					this.depIds.has(t) || e.addSub(this))
				}
				,
				e.prototype.cleanupDeps = function() {
					var e = this.deps.length;
					while (e--) {
						var t = this.deps[e];
						this.newDepIds.has(t.id) || t.removeSub(this)
					}
					var i = this.depIds;
					this.depIds = this.newDepIds,
					this.newDepIds = i,
					this.newDepIds.clear(),
					i = this.deps,
					this.deps = this.newDeps,
					this.newDeps = i,
					this.newDeps.length = 0
				}
				,
				e.prototype.update = function() {
					this.lazy ? this.dirty = !0 : this.sync ? this.run() : io(this)
				}
				,
				e.prototype.run = function() {
					if (this.active) {
						var e = this.get();
						if (e !== this.value || u(e) || this.deep) {
							var t = this.value;
							if (this.value = e,
							this.user) {
								var i = 'callback for watcher "'.concat(this.expression, '"');
								Ni(this.cb, this.vm, [e, t], this.vm, i)
							} else
								this.cb.call(this.vm, e, t)
						}
					}
				}
				,
				e.prototype.evaluate = function() {
					this.value = this.get(),
					this.dirty = !1
				}
				,
				e.prototype.depend = function() {
					var e = this.deps.length;
					while (e--)
						this.deps[e].depend()
				}
				,
				e.prototype.teardown = function() {
					if (this.vm && !this.vm._isBeingDestroyed && w(this.vm._scope.effects, this),
					this.active) {
						var e = this.deps.length;
						while (e--)
							this.deps[e].removeSub(this);
						this.active = !1,
						this.onStop && this.onStop()
					}
				}
				,
				e
			}();
			function Sn(e) {
				e._events = Object.create(null),
				e._hasHookEvent = !1;
				var t = e.$options._parentListeners;
				t && En(e, t)
			}
			function kn(e, t) {
				xn.$on(e, t)
			}
			function Tn(e, t) {
				xn.$off(e, t)
			}
			function Mn(e, t) {
				var i = xn;
				return function n() {
					var o = t.apply(null, arguments);
					null !== o && i.$off(e, n)
				}
			}
			function En(e, t, i) {
				xn = e,
				Bt(t, i || {}, kn, Tn, Mn, e),
				xn = void 0
			}
			function On(e) {
				var t = /^hook:/;
				e.prototype.$on = function(e, i) {
					var n = this;
					if (o(e))
						for (var a = 0, r = e.length; a < r; a++)
							n.$on(e[a], i);
					else
						(n._events[e] || (n._events[e] = [])).push(i),
						t.test(e) && (n._hasHookEvent = !0);
					return n
				}
				,
				e.prototype.$once = function(e, t) {
					var i = this;
					function n() {
						i.$off(e, n),
						t.apply(i, arguments)
					}
					return n.fn = t,
					i.$on(e, n),
					i
				}
				,
				e.prototype.$off = function(e, t) {
					var i = this;
					if (!arguments.length)
						return i._events = Object.create(null),
						i;
					if (o(e)) {
						for (var n = 0, a = e.length; n < a; n++)
							i.$off(e[n], t);
						return i
					}
					var r, s = i._events[e];
					if (!s)
						return i;
					if (!t)
						return i._events[e] = null,
						i;
					var l = s.length;
					while (l--)
						if (r = s[l],
						r === t || r.fn === t) {
							s.splice(l, 1);
							break
						}
					return i
				}
				,
				e.prototype.$emit = function(e) {
					var t = this
					  , i = t._events[e];
					if (i) {
						i = i.length > 1 ? F(i) : i;
						for (var n = F(arguments, 1), o = 'event handler for "'.concat(e, '"'), a = 0, r = i.length; a < r; a++)
							Ni(i[a], t, n, t, o)
					}
					return t
				}
			}
			var An = null;
			function In(e) {
				var t = An;
				return An = e,
				function() {
					An = t
				}
			}
			function Fn(e) {
				var t = e.$options
				  , i = t.parent;
				if (i && !t.abstract) {
					while (i.$options.abstract && i.$parent)
						i = i.$parent;
					i.$children.push(e)
				}
				e.$parent = i,
				e.$root = i ? i.$root : e,
				e.$children = [],
				e.$refs = {},
				e._provided = i ? i._provided : Object.create(null),
				e._watcher = null,
				e._inactive = null,
				e._directInactive = !1,
				e._isMounted = !1,
				e._isDestroyed = !1,
				e._isBeingDestroyed = !1
			}
			function Dn(e) {
				e.prototype._update = function(e, t) {
					var i = this
					  , n = i.$el
					  , o = i._vnode
					  , a = In(i);
					i._vnode = e,
					i.$el = o ? i.__patch__(o, e) : i.__patch__(i.$el, e, t, !1),
					a(),
					n && (n.__vue__ = null),
					i.$el && (i.$el.__vue__ = i);
					var r = i;
					while (r && r.$vnode && r.$parent && r.$vnode === r.$parent._vnode)
						r.$parent.$el = r.$el,
						r = r.$parent
				}
				,
				e.prototype.$forceUpdate = function() {
					var e = this;
					e._watcher && e._watcher.update()
				}
				,
				e.prototype.$destroy = function() {
					var e = this;
					if (!e._isBeingDestroyed) {
						jn(e, "beforeDestroy"),
						e._isBeingDestroyed = !0;
						var t = e.$parent;
						!t || t._isBeingDestroyed || e.$options.abstract || w(t.$children, e),
						e._scope.stop(),
						e._data.__ob__ && e._data.__ob__.vmCount--,
						e._isDestroyed = !0,
						e.__patch__(e._vnode, null),
						jn(e, "destroyed"),
						e.$off(),
						e.$el && (e.$el.__vue__ = null),
						e.$vnode && (e.$vnode.parent = null)
					}
				}
			}
			function Rn(e, t, i) {
				var n;
				e.$el = t,
				e.$options.render || (e.$options.render = _e),
				jn(e, "beforeMount"),
				n = function() {
					e._update(e._render(), i)
				}
				;
				var o = {
					before: function() {
						e._isMounted && !e._isDestroyed && jn(e, "beforeUpdate")
					}
				};
				new $n(e,n,P,o,!0),
				i = !1;
				var a = e._preWatchers;
				if (a)
					for (var r = 0; r < a.length; r++)
						a[r].run();
				return null == e.$vnode && (e._isMounted = !0,
				jn(e, "mounted")),
				e
			}
			function Pn(e, t, i, o, a) {
				var r = o.data.scopedSlots
				  , s = e.$scopedSlots
				  , l = !!(r && !r.$stable || s !== n && !s.$stable || r && e.$scopedSlots.$key !== r.$key || !r && e.$scopedSlots.$key)
				  , c = !!(a || e.$options._renderChildren || l)
				  , d = e.$vnode;
				e.$options._parentVnode = o,
				e.$vnode = o,
				e._vnode && (e._vnode.parent = o),
				e.$options._renderChildren = a;
				var u = o.data.attrs || n;
				e._attrsProxy && mi(e._attrsProxy, u, d.data && d.data.attrs || n, e, "$attrs") && (c = !0),
				e.$attrs = u,
				i = i || n;
				var h = e.$options._parentListeners;
				if (e._listenersProxy && mi(e._listenersProxy, i, h || n, e, "$listeners"),
				e.$listeners = e.$options._parentListeners = i,
				En(e, i, h),
				t && e.$options.props) {
					Re(!1);
					for (var p = e._props, f = e.$options._propKeys || [], m = 0; m < f.length; m++) {
						var v = f[m]
						  , g = e.$options.props;
						p[v] = Io(v, g, t, e)
					}
					Re(!0),
					e.$options.propsData = t
				}
				c && (e.$slots = si(a, o.context),
				e.$forceUpdate())
			}
			function Ln(e) {
				while (e && (e = e.$parent))
					if (e._inactive)
						return !0;
				return !1
			}
			function Bn(e, t) {
				if (t) {
					if (e._directInactive = !1,
					Ln(e))
						return
				} else if (e._directInactive)
					return;
				if (e._inactive || null === e._inactive) {
					e._inactive = !1;
					for (var i = 0; i < e.$children.length; i++)
						Bn(e.$children[i]);
					jn(e, "activated")
				}
			}
			function Nn(e, t) {
				if ((!t || (e._directInactive = !0,
				!Ln(e))) && !e._inactive) {
					e._inactive = !0;
					for (var i = 0; i < e.$children.length; i++)
						Nn(e.$children[i]);
					jn(e, "deactivated")
				}
			}
			function jn(e, t, i, n) {
				void 0 === n && (n = !0),
				Te();
				var o = me;
				n && ge(e);
				var a = e.$options[t]
				  , r = "".concat(t, " hook");
				if (a)
					for (var s = 0, l = a.length; s < l; s++)
						Ni(a[s], e, i || null, e, r);
				e._hasHookEvent && e.$emit("hook:" + t),
				n && ge(o),
				Me()
			}
			var zn = []
			  , Gn = []
			  , Vn = {}
			  , Hn = !1
			  , Wn = !1
			  , Un = 0;
			function Xn() {
				Un = zn.length = Gn.length = 0,
				Vn = {},
				Hn = Wn = !1
			}
			var qn = 0
			  , Kn = Date.now;
			if (Z && !te) {
				var Yn = window.performance;
				Yn && "function" === typeof Yn.now && Kn() > document.createEvent("Event").timeStamp && (Kn = function() {
					return Yn.now()
				}
				)
			}
			var Jn = function(e, t) {
				if (e.post) {
					if (!t.post)
						return 1
				} else if (t.post)
					return -1;
				return e.id - t.id
			};
			function Qn() {
				var e, t;
				for (qn = Kn(),
				Wn = !0,
				zn.sort(Jn),
				Un = 0; Un < zn.length; Un++)
					e = zn[Un],
					e.before && e.before(),
					t = e.id,
					Vn[t] = null,
					e.run();
				var i = Gn.slice()
				  , n = zn.slice();
				Xn(),
				to(i),
				Zn(n),
				$e(),
				ue && U.devtools && ue.emit("flush")
			}
			function Zn(e) {
				var t = e.length;
				while (t--) {
					var i = e[t]
					  , n = i.vm;
					n && n._watcher === i && n._isMounted && !n._isDestroyed && jn(n, "updated")
				}
			}
			function eo(e) {
				e._inactive = !1,
				Gn.push(e)
			}
			function to(e) {
				for (var t = 0; t < e.length; t++)
					e[t]._inactive = !0,
					Bn(e[t], !0)
			}
			function io(e) {
				var t = e.id;
				if (null == Vn[t] && (e !== Se.target || !e.noRecurse)) {
					if (Vn[t] = !0,
					Wn) {
						var i = zn.length - 1;
						while (i > Un && zn[i].id > e.id)
							i--;
						zn.splice(i + 1, 0, e)
					} else
						zn.push(e);
					Hn || (Hn = !0,
					Ji(Qn))
				}
			}
			function no(e) {
				var t = e.$options.provide;
				if (t) {
					var i = d(t) ? t.call(e) : t;
					if (!u(i))
						return;
					for (var n = Dt(e), o = fe ? Reflect.ownKeys(i) : Object.keys(i), a = 0; a < o.length; a++) {
						var r = o[a];
						Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(i, r))
					}
				}
			}
			function oo(e) {
				var t = ao(e.$options.inject, e);
				t && (Re(!1),
				Object.keys(t).forEach((function(i) {
					Ne(e, i, t[i])
				}
				)),
				Re(!0))
			}
			function ao(e, t) {
				if (e) {
					for (var i = Object.create(null), n = fe ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < n.length; o++) {
						var a = n[o];
						if ("__ob__" !== a) {
							var r = e[a].from;
							if (r in t._provided)
								i[a] = t._provided[r];
							else if ("default"in e[a]) {
								var s = e[a].default;
								i[a] = d(s) ? s.call(t) : s
							} else
								0
						}
					}
					return i
				}
			}
			function ro(e, t, i, a, r) {
				var l, c = this, d = r.options;
				C(a, "_uid") ? (l = Object.create(a),
				l._original = a) : (l = a,
				a = a._original);
				var u = s(d._compiled)
				  , h = !u;
				this.data = e,
				this.props = t,
				this.children = i,
				this.parent = a,
				this.listeners = e.on || n,
				this.injections = ao(d.inject, a),
				this.slots = function() {
					return c.$slots || di(a, e.scopedSlots, c.$slots = si(i, a)),
					c.$slots
				}
				,
				Object.defineProperty(this, "scopedSlots", {
					enumerable: !0,
					get: function() {
						return di(a, e.scopedSlots, this.slots())
					}
				}),
				u && (this.$options = d,
				this.$slots = this.slots(),
				this.$scopedSlots = di(a, e.scopedSlots, this.$slots)),
				d._scopeId ? this._c = function(e, t, i, n) {
					var r = Fi(l, e, t, i, n, h);
					return r && !o(r) && (r.fnScopeId = d._scopeId,
					r.fnContext = a),
					r
				}
				: this._c = function(e, t, i, n) {
					return Fi(l, e, t, i, n, h)
				}
			}
			function so(e, t, i, a, s) {
				var l = e.options
				  , c = {}
				  , d = l.props;
				if (r(d))
					for (var u in d)
						c[u] = Io(u, d, t || n);
				else
					r(i.attrs) && co(c, i.attrs),
					r(i.props) && co(c, i.props);
				var h = new ro(i,c,s,a,e)
				  , p = l.render.call(null, h._c, h);
				if (p instanceof be)
					return lo(p, i, h.parent, l, h);
				if (o(p)) {
					for (var f = Vt(p) || [], m = new Array(f.length), v = 0; v < f.length; v++)
						m[v] = lo(f[v], i, h.parent, l, h);
					return m
				}
			}
			function lo(e, t, i, n, o) {
				var a = we(e);
				return a.fnContext = i,
				a.fnOptions = n,
				t.slot && ((a.data || (a.data = {})).slot = t.slot),
				a
			}
			function co(e, t) {
				for (var i in t)
					e[k(i)] = t[i]
			}
			function uo(e) {
				return e.name || e.__name || e._componentTag
			}
			ri(ro.prototype);
			var ho = {
				init: function(e, t) {
					if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
						var i = e;
						ho.prepatch(i, i)
					} else {
						var n = e.componentInstance = mo(e, An);
						n.$mount(t ? e.elm : void 0, t)
					}
				},
				prepatch: function(e, t) {
					var i = t.componentOptions
					  , n = t.componentInstance = e.componentInstance;
					Pn(n, i.propsData, i.listeners, t, i.children)
				},
				insert: function(e) {
					var t = e.context
					  , i = e.componentInstance;
					i._isMounted || (i._isMounted = !0,
					jn(i, "mounted")),
					e.data.keepAlive && (t._isMounted ? eo(i) : Bn(i, !0))
				},
				destroy: function(e) {
					var t = e.componentInstance;
					t._isDestroyed || (e.data.keepAlive ? Nn(t, !0) : t.$destroy())
				}
			}
			  , po = Object.keys(ho);
			function fo(e, t, i, n, o) {
				if (!a(e)) {
					var l = i.$options._base;
					if (u(e) && (e = l.extend(e)),
					"function" === typeof e) {
						var c;
						if (a(e.cid) && (c = e,
						e = Ei(c, l),
						void 0 === e))
							return Mi(c, t, i, n, o);
						t = t || {},
						ia(e),
						r(t.model) && bo(e.options, t);
						var d = jt(t, e, o);
						if (s(e.options.functional))
							return so(e, d, t, i, n);
						var h = t.on;
						if (t.on = t.nativeOn,
						s(e.options.abstract)) {
							var p = t.slot;
							t = {},
							p && (t.slot = p)
						}
						vo(t);
						var f = uo(e.options) || o
						  , m = new be("vue-component-".concat(e.cid).concat(f ? "-".concat(f) : ""),t,void 0,void 0,void 0,i,{
							Ctor: e,
							propsData: d,
							listeners: h,
							tag: o,
							children: n
						},c);
						return m
					}
				}
			}
			function mo(e, t) {
				var i = {
					_isComponent: !0,
					_parentVnode: e,
					parent: t
				}
				  , n = e.data.inlineTemplate;
				return r(n) && (i.render = n.render,
				i.staticRenderFns = n.staticRenderFns),
				new e.componentOptions.Ctor(i)
			}
			function vo(e) {
				for (var t = e.hook || (e.hook = {}), i = 0; i < po.length; i++) {
					var n = po[i]
					  , o = t[n]
					  , a = ho[n];
					o === a || o && o._merged || (t[n] = o ? go(a, o) : a)
				}
			}
			function go(e, t) {
				var i = function(i, n) {
					e(i, n),
					t(i, n)
				};
				return i._merged = !0,
				i
			}
			function bo(e, t) {
				var i = e.model && e.model.prop || "value"
				  , n = e.model && e.model.event || "input";
				(t.attrs || (t.attrs = {}))[i] = t.model.value;
				var a = t.on || (t.on = {})
				  , s = a[n]
				  , l = t.model.callback;
				r(s) ? (o(s) ? -1 === s.indexOf(l) : s !== l) && (a[n] = [l].concat(s)) : a[n] = l
			}
			var _o = P
			  , yo = U.optionMergeStrategies;
			function wo(e, t, i) {
				if (void 0 === i && (i = !0),
				!t)
					return e;
				for (var n, o, a, r = fe ? Reflect.ownKeys(t) : Object.keys(t), s = 0; s < r.length; s++)
					n = r[s],
					"__ob__" !== n && (o = e[n],
					a = t[n],
					i && C(e, n) ? o !== a && p(o) && p(a) && wo(o, a) : je(e, n, a));
				return e
			}
			function xo(e, t, i) {
				return i ? function() {
					var n = d(t) ? t.call(i, i) : t
					  , o = d(e) ? e.call(i, i) : e;
					return n ? wo(n, o) : o
				}
				: t ? e ? function() {
					return wo(d(t) ? t.call(this, this) : t, d(e) ? e.call(this, this) : e)
				}
				: t : e
			}
			function Co(e, t) {
				var i = t ? e ? e.concat(t) : o(t) ? t : [t] : e;
				return i ? $o(i) : i
			}
			function $o(e) {
				for (var t = [], i = 0; i < e.length; i++)
					-1 === t.indexOf(e[i]) && t.push(e[i]);
				return t
			}
			function So(e, t, i, n) {
				var o = Object.create(e || null);
				return t ? D(o, t) : o
			}
			yo.data = function(e, t, i) {
				return i ? xo(e, t, i) : t && "function" !== typeof t ? e : xo(e, t)
			}
			,
			W.forEach((function(e) {
				yo[e] = Co
			}
			)),
			H.forEach((function(e) {
				yo[e + "s"] = So
			}
			)),
			yo.watch = function(e, t, i, n) {
				if (e === se && (e = void 0),
				t === se && (t = void 0),
				!t)
					return Object.create(e || null);
				if (!e)
					return t;
				var a = {};
				for (var r in D(a, e),
				t) {
					var s = a[r]
					  , l = t[r];
					s && !o(s) && (s = [s]),
					a[r] = s ? s.concat(l) : o(l) ? l : [l]
				}
				return a
			}
			,
			yo.props = yo.methods = yo.inject = yo.computed = function(e, t, i, n) {
				if (!e)
					return t;
				var o = Object.create(null);
				return D(o, e),
				t && D(o, t),
				o
			}
			,
			yo.provide = function(e, t) {
				return e ? function() {
					var i = Object.create(null);
					return wo(i, d(e) ? e.call(this) : e),
					t && wo(i, d(t) ? t.call(this) : t, !1),
					i
				}
				: t
			}
			;
			var ko = function(e, t) {
				return void 0 === t ? e : t
			};
			function To(e, t) {
				var i = e.props;
				if (i) {
					var n, a, r, s = {};
					if (o(i)) {
						n = i.length;
						while (n--)
							a = i[n],
							"string" === typeof a && (r = k(a),
							s[r] = {
								type: null
							})
					} else if (p(i))
						for (var l in i)
							a = i[l],
							r = k(l),
							s[r] = p(a) ? a : {
								type: a
							};
					else
						0;
					e.props = s
				}
			}
			function Mo(e, t) {
				var i = e.inject;
				if (i) {
					var n = e.inject = {};
					if (o(i))
						for (var a = 0; a < i.length; a++)
							n[i[a]] = {
								from: i[a]
							};
					else if (p(i))
						for (var r in i) {
							var s = i[r];
							n[r] = p(s) ? D({
								from: r
							}, s) : {
								from: s
							}
						}
					else
						0
				}
			}
			function Eo(e) {
				var t = e.directives;
				if (t)
					for (var i in t) {
						var n = t[i];
						d(n) && (t[i] = {
							bind: n,
							update: n
						})
					}
			}
			function Oo(e, t, i) {
				if (d(t) && (t = t.options),
				To(t, i),
				Mo(t, i),
				Eo(t),
				!t._base && (t.extends && (e = Oo(e, t.extends, i)),
				t.mixins))
					for (var n = 0, o = t.mixins.length; n < o; n++)
						e = Oo(e, t.mixins[n], i);
				var a, r = {};
				for (a in e)
					s(a);
				for (a in t)
					C(e, a) || s(a);
				function s(n) {
					var o = yo[n] || ko;
					r[n] = o(e[n], t[n], i, n)
				}
				return r
			}
			function Ao(e, t, i, n) {
				if ("string" === typeof i) {
					var o = e[t];
					if (C(o, i))
						return o[i];
					var a = k(i);
					if (C(o, a))
						return o[a];
					var r = T(a);
					if (C(o, r))
						return o[r];
					var s = o[i] || o[a] || o[r];
					return s
				}
			}
			function Io(e, t, i, n) {
				var o = t[e]
				  , a = !C(i, e)
				  , r = i[e]
				  , s = Lo(Boolean, o.type);
				if (s > -1)
					if (a && !C(o, "default"))
						r = !1;
					else if ("" === r || r === E(e)) {
						var l = Lo(String, o.type);
						(l < 0 || s < l) && (r = !0)
					}
				if (void 0 === r) {
					r = Fo(n, o, e);
					var c = De;
					Re(!0),
					Be(r),
					Re(c)
				}
				return r
			}
			function Fo(e, t, i) {
				if (C(t, "default")) {
					var n = t.default;
					return e && e.$options.propsData && void 0 === e.$options.propsData[i] && void 0 !== e._props[i] ? e._props[i] : d(n) && "Function" !== Ro(t.type) ? n.call(e) : n
				}
			}
			var Do = /^\s*function (\w+)/;
			function Ro(e) {
				var t = e && e.toString().match(Do);
				return t ? t[1] : ""
			}
			function Po(e, t) {
				return Ro(e) === Ro(t)
			}
			function Lo(e, t) {
				if (!o(t))
					return Po(t, e) ? 0 : -1;
				for (var i = 0, n = t.length; i < n; i++)
					if (Po(t[i], e))
						return i;
				return -1
			}
			var Bo = {
				enumerable: !0,
				configurable: !0,
				get: P,
				set: P
			};
			function No(e, t, i) {
				Bo.get = function() {
					return this[t][i]
				}
				,
				Bo.set = function(e) {
					this[t][i] = e
				}
				,
				Object.defineProperty(e, i, Bo)
			}
			function jo(e) {
				var t = e.$options;
				if (t.props && zo(e, t.props),
				pi(e),
				t.methods && Ko(e, t.methods),
				t.data)
					Go(e);
				else {
					var i = Be(e._data = {});
					i && i.vmCount++
				}
				t.computed && Wo(e, t.computed),
				t.watch && t.watch !== se && Yo(e, t.watch)
			}
			function zo(e, t) {
				var i = e.$options.propsData || {}
				  , n = e._props = He({})
				  , o = e.$options._propKeys = []
				  , a = !e.$parent;
				a || Re(!1);
				var r = function(a) {
					o.push(a);
					var r = Io(a, t, i, e);
					Ne(n, a, r),
					a in e || No(e, "_props", a)
				};
				for (var s in t)
					r(s);
				Re(!0)
			}
			function Go(e) {
				var t = e.$options.data;
				t = e._data = d(t) ? Vo(t, e) : t || {},
				p(t) || (t = {});
				var i = Object.keys(t)
				  , n = e.$options.props
				  , o = (e.$options.methods,
				i.length);
				while (o--) {
					var a = i[o];
					0,
					n && C(n, a) || q(a) || No(e, "_data", a)
				}
				var r = Be(t);
				r && r.vmCount++
			}
			function Vo(e, t) {
				Te();
				try {
					return e.call(t, t)
				} catch (ol) {
					return Bi(ol, t, "data()"),
					{}
				} finally {
					Me()
				}
			}
			var Ho = {
				lazy: !0
			};
			function Wo(e, t) {
				var i = e._computedWatchers = Object.create(null)
				  , n = de();
				for (var o in t) {
					var a = t[o]
					  , r = d(a) ? a : a.get;
					0,
					n || (i[o] = new $n(e,r || P,P,Ho)),
					o in e || Uo(e, o, a)
				}
			}
			function Uo(e, t, i) {
				var n = !de();
				d(i) ? (Bo.get = n ? Xo(t) : qo(i),
				Bo.set = P) : (Bo.get = i.get ? n && !1 !== i.cache ? Xo(t) : qo(i.get) : P,
				Bo.set = i.set || P),
				Object.defineProperty(e, t, Bo)
			}
			function Xo(e) {
				return function() {
					var t = this._computedWatchers && this._computedWatchers[e];
					if (t)
						return t.dirty && t.evaluate(),
						Se.target && t.depend(),
						t.value
				}
			}
			function qo(e) {
				return function() {
					return e.call(this, this)
				}
			}
			function Ko(e, t) {
				e.$options.props;
				for (var i in t)
					e[i] = "function" !== typeof t[i] ? P : I(t[i], e)
			}
			function Yo(e, t) {
				for (var i in t) {
					var n = t[i];
					if (o(n))
						for (var a = 0; a < n.length; a++)
							Jo(e, i, n[a]);
					else
						Jo(e, i, n)
				}
			}
			function Jo(e, t, i, n) {
				return p(i) && (n = i,
				i = i.handler),
				"string" === typeof i && (i = e[i]),
				e.$watch(t, i, n)
			}
			function Qo(e) {
				var t = {
					get: function() {
						return this._data
					}
				}
				  , i = {
					get: function() {
						return this._props
					}
				};
				Object.defineProperty(e.prototype, "$data", t),
				Object.defineProperty(e.prototype, "$props", i),
				e.prototype.$set = je,
				e.prototype.$delete = ze,
				e.prototype.$watch = function(e, t, i) {
					var n = this;
					if (p(t))
						return Jo(n, e, t, i);
					i = i || {},
					i.user = !0;
					var o = new $n(n,e,t,i);
					if (i.immediate) {
						var a = 'callback for immediate watcher "'.concat(o.expression, '"');
						Te(),
						Ni(t, n, [o.value], n, a),
						Me()
					}
					return function() {
						o.teardown()
					}
				}
			}
			var Zo = 0;
			function ea(e) {
				e.prototype._init = function(e) {
					var t = this;
					t._uid = Zo++,
					t._isVue = !0,
					t.__v_skip = !0,
					t._scope = new Mt(!0),
					t._scope._vm = !0,
					e && e._isComponent ? ta(t, e) : t.$options = Oo(ia(t.constructor), e || {}, t),
					t._renderProxy = t,
					t._self = t,
					Fn(t),
					Sn(t),
					$i(t),
					jn(t, "beforeCreate", void 0, !1),
					oo(t),
					jo(t),
					no(t),
					jn(t, "created"),
					t.$options.el && t.$mount(t.$options.el)
				}
			}
			function ta(e, t) {
				var i = e.$options = Object.create(e.constructor.options)
				  , n = t._parentVnode;
				i.parent = t.parent,
				i._parentVnode = n;
				var o = n.componentOptions;
				i.propsData = o.propsData,
				i._parentListeners = o.listeners,
				i._renderChildren = o.children,
				i._componentTag = o.tag,
				t.render && (i.render = t.render,
				i.staticRenderFns = t.staticRenderFns)
			}
			function ia(e) {
				var t = e.options;
				if (e.super) {
					var i = ia(e.super)
					  , n = e.superOptions;
					if (i !== n) {
						e.superOptions = i;
						var o = na(e);
						o && D(e.extendOptions, o),
						t = e.options = Oo(i, e.extendOptions),
						t.name && (t.components[t.name] = e)
					}
				}
				return t
			}
			function na(e) {
				var t, i = e.options, n = e.sealedOptions;
				for (var o in i)
					i[o] !== n[o] && (t || (t = {}),
					t[o] = i[o]);
				return t
			}
			function oa(e) {
				this._init(e)
			}
			function aa(e) {
				e.use = function(e) {
					var t = this._installedPlugins || (this._installedPlugins = []);
					if (t.indexOf(e) > -1)
						return this;
					var i = F(arguments, 1);
					return i.unshift(this),
					d(e.install) ? e.install.apply(e, i) : d(e) && e.apply(null, i),
					t.push(e),
					this
				}
			}
			function ra(e) {
				e.mixin = function(e) {
					return this.options = Oo(this.options, e),
					this
				}
			}
			function sa(e) {
				e.cid = 0;
				var t = 1;
				e.extend = function(e) {
					e = e || {};
					var i = this
					  , n = i.cid
					  , o = e._Ctor || (e._Ctor = {});
					if (o[n])
						return o[n];
					var a = uo(e) || uo(i.options);
					var r = function(e) {
						this._init(e)
					};
					return r.prototype = Object.create(i.prototype),
					r.prototype.constructor = r,
					r.cid = t++,
					r.options = Oo(i.options, e),
					r["super"] = i,
					r.options.props && la(r),
					r.options.computed && ca(r),
					r.extend = i.extend,
					r.mixin = i.mixin,
					r.use = i.use,
					H.forEach((function(e) {
						r[e] = i[e]
					}
					)),
					a && (r.options.components[a] = r),
					r.superOptions = i.options,
					r.extendOptions = e,
					r.sealedOptions = D({}, r.options),
					o[n] = r,
					r
				}
			}
			function la(e) {
				var t = e.options.props;
				for (var i in t)
					No(e.prototype, "_props", i)
			}
			function ca(e) {
				var t = e.options.computed;
				for (var i in t)
					Uo(e.prototype, i, t[i])
			}
			function da(e) {
				H.forEach((function(t) {
					e[t] = function(e, i) {
						return i ? ("component" === t && p(i) && (i.name = i.name || e,
						i = this.options._base.extend(i)),
						"directive" === t && d(i) && (i = {
							bind: i,
							update: i
						}),
						this.options[t + "s"][e] = i,
						i) : this.options[t + "s"][e]
					}
				}
				))
			}
			function ua(e) {
				return e && (uo(e.Ctor.options) || e.tag)
			}
			function ha(e, t) {
				return o(e) ? e.indexOf(t) > -1 : "string" === typeof e ? e.split(",").indexOf(t) > -1 : !!f(e) && e.test(t)
			}
			function pa(e, t) {
				var i = e.cache
				  , n = e.keys
				  , o = e._vnode;
				for (var a in i) {
					var r = i[a];
					if (r) {
						var s = r.name;
						s && !t(s) && fa(i, a, n, o)
					}
				}
			}
			function fa(e, t, i, n) {
				var o = e[t];
				!o || n && o.tag === n.tag || o.componentInstance.$destroy(),
				e[t] = null,
				w(i, t)
			}
			ea(oa),
			Qo(oa),
			On(oa),
			Dn(oa),
			ki(oa);
			var ma = [String, RegExp, Array]
			  , va = {
				name: "keep-alive",
				abstract: !0,
				props: {
					include: ma,
					exclude: ma,
					max: [String, Number]
				},
				methods: {
					cacheVNode: function() {
						var e = this
						  , t = e.cache
						  , i = e.keys
						  , n = e.vnodeToCache
						  , o = e.keyToCache;
						if (n) {
							var a = n.tag
							  , r = n.componentInstance
							  , s = n.componentOptions;
							t[o] = {
								name: ua(s),
								tag: a,
								componentInstance: r
							},
							i.push(o),
							this.max && i.length > parseInt(this.max) && fa(t, i[0], i, this._vnode),
							this.vnodeToCache = null
						}
					}
				},
				created: function() {
					this.cache = Object.create(null),
					this.keys = []
				},
				destroyed: function() {
					for (var e in this.cache)
						fa(this.cache, e, this.keys)
				},
				mounted: function() {
					var e = this;
					this.cacheVNode(),
					this.$watch("include", (function(t) {
						pa(e, (function(e) {
							return ha(t, e)
						}
						))
					}
					)),
					this.$watch("exclude", (function(t) {
						pa(e, (function(e) {
							return !ha(t, e)
						}
						))
					}
					))
				},
				updated: function() {
					this.cacheVNode()
				},
				render: function() {
					var e = this.$slots.default
					  , t = Oi(e)
					  , i = t && t.componentOptions;
					if (i) {
						var n = ua(i)
						  , o = this
						  , a = o.include
						  , r = o.exclude;
						if (a && (!n || !ha(a, n)) || r && n && ha(r, n))
							return t;
						var s = this
						  , l = s.cache
						  , c = s.keys
						  , d = null == t.key ? i.Ctor.cid + (i.tag ? "::".concat(i.tag) : "") : t.key;
						l[d] ? (t.componentInstance = l[d].componentInstance,
						w(c, d),
						c.push(d)) : (this.vnodeToCache = t,
						this.keyToCache = d),
						t.data.keepAlive = !0
					}
					return t || e && e[0]
				}
			}
			  , ga = {
				KeepAlive: va
			};
			function ba(e) {
				var t = {
					get: function() {
						return U
					}
				};
				Object.defineProperty(e, "config", t),
				e.util = {
					warn: _o,
					extend: D,
					mergeOptions: Oo,
					defineReactive: Ne
				},
				e.set = je,
				e.delete = ze,
				e.nextTick = Ji,
				e.observable = function(e) {
					return Be(e),
					e
				}
				,
				e.options = Object.create(null),
				H.forEach((function(t) {
					e.options[t + "s"] = Object.create(null)
				}
				)),
				e.options._base = e,
				D(e.options.components, ga),
				aa(e),
				ra(e),
				sa(e),
				da(e)
			}
			ba(oa),
			Object.defineProperty(oa.prototype, "$isServer", {
				get: de
			}),
			Object.defineProperty(oa.prototype, "$ssrContext", {
				get: function() {
					return this.$vnode && this.$vnode.ssrContext
				}
			}),
			Object.defineProperty(oa, "FunctionalRenderContext", {
				value: ro
			}),
			oa.version = gn;
			var _a = _("style,class")
			  , ya = _("input,textarea,option,select,progress")
			  , wa = function(e, t, i) {
				return "value" === i && ya(e) && "button" !== t || "selected" === i && "option" === e || "checked" === i && "input" === e || "muted" === i && "video" === e
			}
			  , xa = _("contenteditable,draggable,spellcheck")
			  , Ca = _("events,caret,typing,plaintext-only")
			  , $a = function(e, t) {
				return Ea(t) || "false" === t ? "false" : "contenteditable" === e && Ca(t) ? t : "true"
			}
			  , Sa = _("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible")
			  , ka = "http://www.w3.org/1999/xlink"
			  , Ta = function(e) {
				return ":" === e.charAt(5) && "xlink" === e.slice(0, 5)
			}
			  , Ma = function(e) {
				return Ta(e) ? e.slice(6, e.length) : ""
			}
			  , Ea = function(e) {
				return null == e || !1 === e
			};
			function Oa(e) {
				var t = e.data
				  , i = e
				  , n = e;
				while (r(n.componentInstance))
					n = n.componentInstance._vnode,
					n && n.data && (t = Aa(n.data, t));
				while (r(i = i.parent))
					i && i.data && (t = Aa(t, i.data));
				return Ia(t.staticClass, t.class)
			}
			function Aa(e, t) {
				return {
					staticClass: Fa(e.staticClass, t.staticClass),
					class: r(e.class) ? [e.class, t.class] : t.class
				}
			}
			function Ia(e, t) {
				return r(e) || r(t) ? Fa(e, Da(t)) : ""
			}
			function Fa(e, t) {
				return e ? t ? e + " " + t : e : t || ""
			}
			function Da(e) {
				return Array.isArray(e) ? Ra(e) : u(e) ? Pa(e) : "string" === typeof e ? e : ""
			}
			function Ra(e) {
				for (var t, i = "", n = 0, o = e.length; n < o; n++)
					r(t = Da(e[n])) && "" !== t && (i && (i += " "),
					i += t);
				return i
			}
			function Pa(e) {
				var t = "";
				for (var i in e)
					e[i] && (t && (t += " "),
					t += i);
				return t
			}
			var La = {
				svg: "http://www.w3.org/2000/svg",
				math: "http://www.w3.org/1998/Math/MathML"
			}
			  , Ba = _("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot")
			  , Na = _("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0)
			  , ja = function(e) {
				return Ba(e) || Na(e)
			};
			function za(e) {
				return Na(e) ? "svg" : "math" === e ? "math" : void 0
			}
			var Ga = Object.create(null);
			function Va(e) {
				if (!Z)
					return !0;
				if (ja(e))
					return !1;
				if (e = e.toLowerCase(),
				null != Ga[e])
					return Ga[e];
				var t = document.createElement(e);
				return e.indexOf("-") > -1 ? Ga[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Ga[e] = /HTMLUnknownElement/.test(t.toString())
			}
			var Ha = _("text,number,password,search,email,tel,url");
			function Wa(e) {
				if ("string" === typeof e) {
					var t = document.querySelector(e);
					return t || document.createElement("div")
				}
				return e
			}
			function Ua(e, t) {
				var i = document.createElement(e);
				return "select" !== e || t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && i.setAttribute("multiple", "multiple"),
				i
			}
			function Xa(e, t) {
				return document.createElementNS(La[e], t)
			}
			function qa(e) {
				return document.createTextNode(e)
			}
			function Ka(e) {
				return document.createComment(e)
			}
			function Ya(e, t, i) {
				e.insertBefore(t, i)
			}
			function Ja(e, t) {
				e.removeChild(t)
			}
			function Qa(e, t) {
				e.appendChild(t)
			}
			function Za(e) {
				return e.parentNode
			}
			function er(e) {
				return e.nextSibling
			}
			function tr(e) {
				return e.tagName
			}
			function ir(e, t) {
				e.textContent = t
			}
			function nr(e, t) {
				e.setAttribute(t, "")
			}
			var or = Object.freeze({
				__proto__: null,
				createElement: Ua,
				createElementNS: Xa,
				createTextNode: qa,
				createComment: Ka,
				insertBefore: Ya,
				removeChild: Ja,
				appendChild: Qa,
				parentNode: Za,
				nextSibling: er,
				tagName: tr,
				setTextContent: ir,
				setStyleScope: nr
			})
			  , ar = {
				create: function(e, t) {
					rr(t)
				},
				update: function(e, t) {
					e.data.ref !== t.data.ref && (rr(e, !0),
					rr(t))
				},
				destroy: function(e) {
					rr(e, !0)
				}
			};
			function rr(e, t) {
				var i = e.data.ref;
				if (r(i)) {
					var n = e.context
					  , a = e.componentInstance || e.elm
					  , s = t ? null : a
					  , l = t ? void 0 : a;
					if (d(i))
						Ni(i, n, [s], n, "template ref function");
					else {
						var c = e.data.refInFor
						  , u = "string" === typeof i || "number" === typeof i
						  , h = Ze(i)
						  , p = n.$refs;
						if (u || h)
							if (c) {
								var f = u ? p[i] : i.value;
								t ? o(f) && w(f, a) : o(f) ? f.includes(a) || f.push(a) : u ? (p[i] = [a],
								sr(n, i, p[i])) : i.value = [a]
							} else if (u) {
								if (t && p[i] !== a)
									return;
								p[i] = l,
								sr(n, i, s)
							} else if (h) {
								if (t && i.value !== a)
									return;
								i.value = s
							} else
								0
					}
				}
			}
			function sr(e, t, i) {
				var n = e._setupState;
				n && C(n, t) && (Ze(n[t]) ? n[t].value = i : n[t] = i)
			}
			var lr = new be("",{},[])
			  , cr = ["create", "activate", "update", "remove", "destroy"];
			function dr(e, t) {
				return e.key === t.key && e.asyncFactory === t.asyncFactory && (e.tag === t.tag && e.isComment === t.isComment && r(e.data) === r(t.data) && ur(e, t) || s(e.isAsyncPlaceholder) && a(t.asyncFactory.error))
			}
			function ur(e, t) {
				if ("input" !== e.tag)
					return !0;
				var i, n = r(i = e.data) && r(i = i.attrs) && i.type, o = r(i = t.data) && r(i = i.attrs) && i.type;
				return n === o || Ha(n) && Ha(o)
			}
			function hr(e, t, i) {
				var n, o, a = {};
				for (n = t; n <= i; ++n)
					o = e[n].key,
					r(o) && (a[o] = n);
				return a
			}
			function pr(e) {
				var t, i, n = {}, l = e.modules, d = e.nodeOps;
				for (t = 0; t < cr.length; ++t)
					for (n[cr[t]] = [],
					i = 0; i < l.length; ++i)
						r(l[i][cr[t]]) && n[cr[t]].push(l[i][cr[t]]);
				function u(e) {
					return new be(d.tagName(e).toLowerCase(),{},[],void 0,e)
				}
				function h(e, t) {
					function i() {
						0 === --i.listeners && p(e)
					}
					return i.listeners = t,
					i
				}
				function p(e) {
					var t = d.parentNode(e);
					r(t) && d.removeChild(t, e)
				}
				function f(e, t, i, n, o, a, l) {
					if (r(e.elm) && r(a) && (e = a[l] = we(e)),
					e.isRootInsert = !o,
					!m(e, t, i, n)) {
						var c = e.data
						  , u = e.children
						  , h = e.tag;
						r(h) ? (e.elm = e.ns ? d.createElementNS(e.ns, h) : d.createElement(h, e),
						C(e),
						y(e, u, t),
						r(c) && x(e, t),
						b(i, e.elm, n)) : s(e.isComment) ? (e.elm = d.createComment(e.text),
						b(i, e.elm, n)) : (e.elm = d.createTextNode(e.text),
						b(i, e.elm, n))
					}
				}
				function m(e, t, i, n) {
					var o = e.data;
					if (r(o)) {
						var a = r(e.componentInstance) && o.keepAlive;
						if (r(o = o.hook) && r(o = o.init) && o(e, !1),
						r(e.componentInstance))
							return v(e, t),
							b(i, e.elm, n),
							s(a) && g(e, t, i, n),
							!0
					}
				}
				function v(e, t) {
					r(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert),
					e.data.pendingInsert = null),
					e.elm = e.componentInstance.$el,
					w(e) ? (x(e, t),
					C(e)) : (rr(e),
					t.push(e))
				}
				function g(e, t, i, o) {
					var a, s = e;
					while (s.componentInstance)
						if (s = s.componentInstance._vnode,
						r(a = s.data) && r(a = a.transition)) {
							for (a = 0; a < n.activate.length; ++a)
								n.activate[a](lr, s);
							t.push(s);
							break
						}
					b(i, e.elm, o)
				}
				function b(e, t, i) {
					r(e) && (r(i) ? d.parentNode(i) === e && d.insertBefore(e, t, i) : d.appendChild(e, t))
				}
				function y(e, t, i) {
					if (o(t)) {
						0;
						for (var n = 0; n < t.length; ++n)
							f(t[n], i, e.elm, null, !0, t, n)
					} else
						c(e.text) && d.appendChild(e.elm, d.createTextNode(String(e.text)))
				}
				function w(e) {
					while (e.componentInstance)
						e = e.componentInstance._vnode;
					return r(e.tag)
				}
				function x(e, i) {
					for (var o = 0; o < n.create.length; ++o)
						n.create[o](lr, e);
					t = e.data.hook,
					r(t) && (r(t.create) && t.create(lr, e),
					r(t.insert) && i.push(e))
				}
				function C(e) {
					var t;
					if (r(t = e.fnScopeId))
						d.setStyleScope(e.elm, t);
					else {
						var i = e;
						while (i)
							r(t = i.context) && r(t = t.$options._scopeId) && d.setStyleScope(e.elm, t),
							i = i.parent
					}
					r(t = An) && t !== e.context && t !== e.fnContext && r(t = t.$options._scopeId) && d.setStyleScope(e.elm, t)
				}
				function $(e, t, i, n, o, a) {
					for (; n <= o; ++n)
						f(i[n], a, e, t, !1, i, n)
				}
				function S(e) {
					var t, i, o = e.data;
					if (r(o))
						for (r(t = o.hook) && r(t = t.destroy) && t(e),
						t = 0; t < n.destroy.length; ++t)
							n.destroy[t](e);
					if (r(t = e.children))
						for (i = 0; i < e.children.length; ++i)
							S(e.children[i])
				}
				function k(e, t, i) {
					for (; t <= i; ++t) {
						var n = e[t];
						r(n) && (r(n.tag) ? (T(n),
						S(n)) : p(n.elm))
					}
				}
				function T(e, t) {
					if (r(t) || r(e.data)) {
						var i, o = n.remove.length + 1;
						for (r(t) ? t.listeners += o : t = h(e.elm, o),
						r(i = e.componentInstance) && r(i = i._vnode) && r(i.data) && T(i, t),
						i = 0; i < n.remove.length; ++i)
							n.remove[i](e, t);
						r(i = e.data.hook) && r(i = i.remove) ? i(e, t) : t()
					} else
						p(e.elm)
				}
				function M(e, t, i, n, o) {
					var s, l, c, u, h = 0, p = 0, m = t.length - 1, v = t[0], g = t[m], b = i.length - 1, _ = i[0], y = i[b], w = !o;
					while (h <= m && p <= b)
						a(v) ? v = t[++h] : a(g) ? g = t[--m] : dr(v, _) ? (O(v, _, n, i, p),
						v = t[++h],
						_ = i[++p]) : dr(g, y) ? (O(g, y, n, i, b),
						g = t[--m],
						y = i[--b]) : dr(v, y) ? (O(v, y, n, i, b),
						w && d.insertBefore(e, v.elm, d.nextSibling(g.elm)),
						v = t[++h],
						y = i[--b]) : dr(g, _) ? (O(g, _, n, i, p),
						w && d.insertBefore(e, g.elm, v.elm),
						g = t[--m],
						_ = i[++p]) : (a(s) && (s = hr(t, h, m)),
						l = r(_.key) ? s[_.key] : E(_, t, h, m),
						a(l) ? f(_, n, e, v.elm, !1, i, p) : (c = t[l],
						dr(c, _) ? (O(c, _, n, i, p),
						t[l] = void 0,
						w && d.insertBefore(e, c.elm, v.elm)) : f(_, n, e, v.elm, !1, i, p)),
						_ = i[++p]);
					h > m ? (u = a(i[b + 1]) ? null : i[b + 1].elm,
					$(e, u, i, p, b, n)) : p > b && k(t, h, m)
				}
				function E(e, t, i, n) {
					for (var o = i; o < n; o++) {
						var a = t[o];
						if (r(a) && dr(e, a))
							return o
					}
				}
				function O(e, t, i, o, l, c) {
					if (e !== t) {
						r(t.elm) && r(o) && (t = o[l] = we(t));
						var u = t.elm = e.elm;
						if (s(e.isAsyncPlaceholder))
							r(t.asyncFactory.resolved) ? F(e.elm, t, i) : t.isAsyncPlaceholder = !0;
						else if (s(t.isStatic) && s(e.isStatic) && t.key === e.key && (s(t.isCloned) || s(t.isOnce)))
							t.componentInstance = e.componentInstance;
						else {
							var h, p = t.data;
							r(p) && r(h = p.hook) && r(h = h.prepatch) && h(e, t);
							var f = e.children
							  , m = t.children;
							if (r(p) && w(t)) {
								for (h = 0; h < n.update.length; ++h)
									n.update[h](e, t);
								r(h = p.hook) && r(h = h.update) && h(e, t)
							}
							a(t.text) ? r(f) && r(m) ? f !== m && M(u, f, m, i, c) : r(m) ? (r(e.text) && d.setTextContent(u, ""),
							$(u, null, m, 0, m.length - 1, i)) : r(f) ? k(f, 0, f.length - 1) : r(e.text) && d.setTextContent(u, "") : e.text !== t.text && d.setTextContent(u, t.text),
							r(p) && r(h = p.hook) && r(h = h.postpatch) && h(e, t)
						}
					}
				}
				function A(e, t, i) {
					if (s(i) && r(e.parent))
						e.parent.data.pendingInsert = t;
					else
						for (var n = 0; n < t.length; ++n)
							t[n].data.hook.insert(t[n])
				}
				var I = _("attrs,class,staticClass,staticStyle,key");
				function F(e, t, i, n) {
					var o, a = t.tag, l = t.data, c = t.children;
					if (n = n || l && l.pre,
					t.elm = e,
					s(t.isComment) && r(t.asyncFactory))
						return t.isAsyncPlaceholder = !0,
						!0;
					if (r(l) && (r(o = l.hook) && r(o = o.init) && o(t, !0),
					r(o = t.componentInstance)))
						return v(t, i),
						!0;
					if (r(a)) {
						if (r(c))
							if (e.hasChildNodes())
								if (r(o = l) && r(o = o.domProps) && r(o = o.innerHTML)) {
									if (o !== e.innerHTML)
										return !1
								} else {
									for (var d = !0, u = e.firstChild, h = 0; h < c.length; h++) {
										if (!u || !F(u, c[h], i, n)) {
											d = !1;
											break
										}
										u = u.nextSibling
									}
									if (!d || u)
										return !1
								}
							else
								y(t, c, i);
						if (r(l)) {
							var p = !1;
							for (var f in l)
								if (!I(f)) {
									p = !0,
									x(t, i);
									break
								}
							!p && l["class"] && yn(l["class"])
						}
					} else
						e.data !== t.text && (e.data = t.text);
					return !0
				}
				return function(e, t, i, o) {
					if (!a(t)) {
						var l = !1
						  , c = [];
						if (a(e))
							l = !0,
							f(t, c);
						else {
							var h = r(e.nodeType);
							if (!h && dr(e, t))
								O(e, t, c, null, null, o);
							else {
								if (h) {
									if (1 === e.nodeType && e.hasAttribute(V) && (e.removeAttribute(V),
									i = !0),
									s(i) && F(e, t, c))
										return A(t, c, !0),
										e;
									e = u(e)
								}
								var p = e.elm
								  , m = d.parentNode(p);
								if (f(t, c, p._leaveCb ? null : m, d.nextSibling(p)),
								r(t.parent)) {
									var v = t.parent
									  , g = w(t);
									while (v) {
										for (var b = 0; b < n.destroy.length; ++b)
											n.destroy[b](v);
										if (v.elm = t.elm,
										g) {
											for (var _ = 0; _ < n.create.length; ++_)
												n.create[_](lr, v);
											var y = v.data.hook.insert;
											if (y.merged)
												for (var x = 1; x < y.fns.length; x++)
													y.fns[x]()
										} else
											rr(v);
										v = v.parent
									}
								}
								r(m) ? k([e], 0, 0) : r(e.tag) && S(e)
							}
						}
						return A(t, c, l),
						t.elm
					}
					r(e) && S(e)
				}
			}
			var fr = {
				create: mr,
				update: mr,
				destroy: function(e) {
					mr(e, lr)
				}
			};
			function mr(e, t) {
				(e.data.directives || t.data.directives) && vr(e, t)
			}
			function vr(e, t) {
				var i, n, o, a = e === lr, r = t === lr, s = br(e.data.directives, e.context), l = br(t.data.directives, t.context), c = [], d = [];
				for (i in l)
					n = s[i],
					o = l[i],
					n ? (o.oldValue = n.value,
					o.oldArg = n.arg,
					yr(o, "update", t, e),
					o.def && o.def.componentUpdated && d.push(o)) : (yr(o, "bind", t, e),
					o.def && o.def.inserted && c.push(o));
				if (c.length) {
					var u = function() {
						for (var i = 0; i < c.length; i++)
							yr(c[i], "inserted", t, e)
					};
					a ? Nt(t, "insert", u) : u()
				}
				if (d.length && Nt(t, "postpatch", (function() {
					for (var i = 0; i < d.length; i++)
						yr(d[i], "componentUpdated", t, e)
				}
				)),
				!a)
					for (i in s)
						l[i] || yr(s[i], "unbind", e, e, r)
			}
			var gr = Object.create(null);
			function br(e, t) {
				var i, n, o = Object.create(null);
				if (!e)
					return o;
				for (i = 0; i < e.length; i++) {
					if (n = e[i],
					n.modifiers || (n.modifiers = gr),
					o[_r(n)] = n,
					t._setupState && t._setupState.__sfc) {
						var a = n.def || Ao(t, "_setupState", "v-" + n.name);
						n.def = "function" === typeof a ? {
							bind: a,
							update: a
						} : a
					}
					n.def = n.def || Ao(t.$options, "directives", n.name, !0)
				}
				return o
			}
			function _r(e) {
				return e.rawName || "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."))
			}
			function yr(e, t, i, n, o) {
				var a = e.def && e.def[t];
				if (a)
					try {
						a(i.elm, e, i, n, o)
					} catch (ol) {
						Bi(ol, i.context, "directive ".concat(e.name, " ").concat(t, " hook"))
					}
			}
			var wr = [ar, fr];
			function xr(e, t) {
				var i = t.componentOptions;
				if ((!r(i) || !1 !== i.Ctor.options.inheritAttrs) && (!a(e.data.attrs) || !a(t.data.attrs))) {
					var n, o, l, c = t.elm, d = e.data.attrs || {}, u = t.data.attrs || {};
					for (n in (r(u.__ob__) || s(u._v_attr_proxy)) && (u = t.data.attrs = D({}, u)),
					u)
						o = u[n],
						l = d[n],
						l !== o && Cr(c, n, o, t.data.pre);
					for (n in (te || ne) && u.value !== d.value && Cr(c, "value", u.value),
					d)
						a(u[n]) && (Ta(n) ? c.removeAttributeNS(ka, Ma(n)) : xa(n) || c.removeAttribute(n))
				}
			}
			function Cr(e, t, i, n) {
				n || e.tagName.indexOf("-") > -1 ? $r(e, t, i) : Sa(t) ? Ea(i) ? e.removeAttribute(t) : (i = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t,
				e.setAttribute(t, i)) : xa(t) ? e.setAttribute(t, $a(t, i)) : Ta(t) ? Ea(i) ? e.removeAttributeNS(ka, Ma(t)) : e.setAttributeNS(ka, t, i) : $r(e, t, i)
			}
			function $r(e, t, i) {
				if (Ea(i))
					e.removeAttribute(t);
				else {
					if (te && !ie && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== i && !e.__ieph) {
						var n = function(t) {
							t.stopImmediatePropagation(),
							e.removeEventListener("input", n)
						};
						e.addEventListener("input", n),
						e.__ieph = !0
					}
					e.setAttribute(t, i)
				}
			}
			var Sr = {
				create: xr,
				update: xr
			};
			function kr(e, t) {
				var i = t.elm
				  , n = t.data
				  , o = e.data;
				if (!(a(n.staticClass) && a(n.class) && (a(o) || a(o.staticClass) && a(o.class)))) {
					var s = Oa(t)
					  , l = i._transitionClasses;
					r(l) && (s = Fa(s, Da(l))),
					s !== i._prevClass && (i.setAttribute("class", s),
					i._prevClass = s)
				}
			}
			var Tr, Mr = {
				create: kr,
				update: kr
			}, Er = "__r", Or = "__c";
			function Ar(e) {
				if (r(e[Er])) {
					var t = te ? "change" : "input";
					e[t] = [].concat(e[Er], e[t] || []),
					delete e[Er]
				}
				r(e[Or]) && (e.change = [].concat(e[Or], e.change || []),
				delete e[Or])
			}
			function Ir(e, t, i) {
				var n = Tr;
				return function o() {
					var a = t.apply(null, arguments);
					null !== a && Rr(e, o, i, n)
				}
			}
			var Fr = Vi && !(re && Number(re[1]) <= 53);
			function Dr(e, t, i, n) {
				if (Fr) {
					var o = qn
					  , a = t;
					t = a._wrapper = function(e) {
						if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document)
							return a.apply(this, arguments)
					}
				}
				Tr.addEventListener(e, t, le ? {
					capture: i,
					passive: n
				} : i)
			}
			function Rr(e, t, i, n) {
				(n || Tr).removeEventListener(e, t._wrapper || t, i)
			}
			function Pr(e, t) {
				if (!a(e.data.on) || !a(t.data.on)) {
					var i = t.data.on || {}
					  , n = e.data.on || {};
					Tr = t.elm || e.elm,
					Ar(i),
					Bt(i, n, Dr, Rr, Ir, t.context),
					Tr = void 0
				}
			}
			var Lr, Br = {
				create: Pr,
				update: Pr,
				destroy: function(e) {
					return Pr(e, lr)
				}
			};
			function Nr(e, t) {
				if (!a(e.data.domProps) || !a(t.data.domProps)) {
					var i, n, o = t.elm, l = e.data.domProps || {}, c = t.data.domProps || {};
					for (i in (r(c.__ob__) || s(c._v_attr_proxy)) && (c = t.data.domProps = D({}, c)),
					l)
						i in c || (o[i] = "");
					for (i in c) {
						if (n = c[i],
						"textContent" === i || "innerHTML" === i) {
							if (t.children && (t.children.length = 0),
							n === l[i])
								continue;
							1 === o.childNodes.length && o.removeChild(o.childNodes[0])
						}
						if ("value" === i && "PROGRESS" !== o.tagName) {
							o._value = n;
							var d = a(n) ? "" : String(n);
							jr(o, d) && (o.value = d)
						} else if ("innerHTML" === i && Na(o.tagName) && a(o.innerHTML)) {
							Lr = Lr || document.createElement("div"),
							Lr.innerHTML = "<svg>".concat(n, "</svg>");
							var u = Lr.firstChild;
							while (o.firstChild)
								o.removeChild(o.firstChild);
							while (u.firstChild)
								o.appendChild(u.firstChild)
						} else if (n !== l[i])
							try {
								o[i] = n
							} catch (ol) {}
					}
				}
			}
			function jr(e, t) {
				return !e.composing && ("OPTION" === e.tagName || zr(e, t) || Gr(e, t))
			}
			function zr(e, t) {
				var i = !0;
				try {
					i = document.activeElement !== e
				} catch (ol) {}
				return i && e.value !== t
			}
			function Gr(e, t) {
				var i = e.value
				  , n = e._vModifiers;
				if (r(n)) {
					if (n.number)
						return b(i) !== b(t);
					if (n.trim)
						return i.trim() !== t.trim()
				}
				return i !== t
			}
			var Vr = {
				create: Nr,
				update: Nr
			}
			  , Hr = $((function(e) {
				var t = {}
				  , i = /;(?![^(]*\))/g
				  , n = /:(.+)/;
				return e.split(i).forEach((function(e) {
					if (e) {
						var i = e.split(n);
						i.length > 1 && (t[i[0].trim()] = i[1].trim())
					}
				}
				)),
				t
			}
			));
			function Wr(e) {
				var t = Ur(e.style);
				return e.staticStyle ? D(e.staticStyle, t) : t
			}
			function Ur(e) {
				return Array.isArray(e) ? R(e) : "string" === typeof e ? Hr(e) : e
			}
			function Xr(e, t) {
				var i, n = {};
				if (t) {
					var o = e;
					while (o.componentInstance)
						o = o.componentInstance._vnode,
						o && o.data && (i = Wr(o.data)) && D(n, i)
				}
				(i = Wr(e.data)) && D(n, i);
				var a = e;
				while (a = a.parent)
					a.data && (i = Wr(a.data)) && D(n, i);
				return n
			}
			var qr, Kr = /^--/, Yr = /\s*!important$/, Jr = function(e, t, i) {
				if (Kr.test(t))
					e.style.setProperty(t, i);
				else if (Yr.test(i))
					e.style.setProperty(E(t), i.replace(Yr, ""), "important");
				else {
					var n = Zr(t);
					if (Array.isArray(i))
						for (var o = 0, a = i.length; o < a; o++)
							e.style[n] = i[o];
					else
						e.style[n] = i
				}
			}, Qr = ["Webkit", "Moz", "ms"], Zr = $((function(e) {
				if (qr = qr || document.createElement("div").style,
				e = k(e),
				"filter" !== e && e in qr)
					return e;
				for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < Qr.length; i++) {
					var n = Qr[i] + t;
					if (n in qr)
						return n
				}
			}
			));
			function es(e, t) {
				var i = t.data
				  , n = e.data;
				if (!(a(i.staticStyle) && a(i.style) && a(n.staticStyle) && a(n.style))) {
					var o, s, l = t.elm, c = n.staticStyle, d = n.normalizedStyle || n.style || {}, u = c || d, h = Ur(t.data.style) || {};
					t.data.normalizedStyle = r(h.__ob__) ? D({}, h) : h;
					var p = Xr(t, !0);
					for (s in u)
						a(p[s]) && Jr(l, s, "");
					for (s in p)
						o = p[s],
						o !== u[s] && Jr(l, s, null == o ? "" : o)
				}
			}
			var ts = {
				create: es,
				update: es
			}
			  , is = /\s+/;
			function ns(e, t) {
				if (t && (t = t.trim()))
					if (e.classList)
						t.indexOf(" ") > -1 ? t.split(is).forEach((function(t) {
							return e.classList.add(t)
						}
						)) : e.classList.add(t);
					else {
						var i = " ".concat(e.getAttribute("class") || "", " ");
						i.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (i + t).trim())
					}
			}
			function os(e, t) {
				if (t && (t = t.trim()))
					if (e.classList)
						t.indexOf(" ") > -1 ? t.split(is).forEach((function(t) {
							return e.classList.remove(t)
						}
						)) : e.classList.remove(t),
						e.classList.length || e.removeAttribute("class");
					else {
						var i = " ".concat(e.getAttribute("class") || "", " ")
						  , n = " " + t + " ";
						while (i.indexOf(n) >= 0)
							i = i.replace(n, " ");
						i = i.trim(),
						i ? e.setAttribute("class", i) : e.removeAttribute("class")
					}
			}
			function as(e) {
				if (e) {
					if ("object" === typeof e) {
						var t = {};
						return !1 !== e.css && D(t, rs(e.name || "v")),
						D(t, e),
						t
					}
					return "string" === typeof e ? rs(e) : void 0
				}
			}
			var rs = $((function(e) {
				return {
					enterClass: "".concat(e, "-enter"),
					enterToClass: "".concat(e, "-enter-to"),
					enterActiveClass: "".concat(e, "-enter-active"),
					leaveClass: "".concat(e, "-leave"),
					leaveToClass: "".concat(e, "-leave-to"),
					leaveActiveClass: "".concat(e, "-leave-active")
				}
			}
			))
			  , ss = Z && !ie
			  , ls = "transition"
			  , cs = "animation"
			  , ds = "transition"
			  , us = "transitionend"
			  , hs = "animation"
			  , ps = "animationend";
			ss && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ds = "WebkitTransition",
			us = "webkitTransitionEnd"),
			void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (hs = "WebkitAnimation",
			ps = "webkitAnimationEnd"));
			var fs = Z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function(e) {
				return e()
			}
			;
			function ms(e) {
				fs((function() {
					fs(e)
				}
				))
			}
			function vs(e, t) {
				var i = e._transitionClasses || (e._transitionClasses = []);
				i.indexOf(t) < 0 && (i.push(t),
				ns(e, t))
			}
			function gs(e, t) {
				e._transitionClasses && w(e._transitionClasses, t),
				os(e, t)
			}
			function bs(e, t, i) {
				var n = ys(e, t)
				  , o = n.type
				  , a = n.timeout
				  , r = n.propCount;
				if (!o)
					return i();
				var s = o === ls ? us : ps
				  , l = 0
				  , c = function() {
					e.removeEventListener(s, d),
					i()
				}
				  , d = function(t) {
					t.target === e && ++l >= r && c()
				};
				setTimeout((function() {
					l < r && c()
				}
				), a + 1),
				e.addEventListener(s, d)
			}
			var _s = /\b(transform|all)(,|$)/;
			function ys(e, t) {
				var i, n = window.getComputedStyle(e), o = (n[ds + "Delay"] || "").split(", "), a = (n[ds + "Duration"] || "").split(", "), r = ws(o, a), s = (n[hs + "Delay"] || "").split(", "), l = (n[hs + "Duration"] || "").split(", "), c = ws(s, l), d = 0, u = 0;
				t === ls ? r > 0 && (i = ls,
				d = r,
				u = a.length) : t === cs ? c > 0 && (i = cs,
				d = c,
				u = l.length) : (d = Math.max(r, c),
				i = d > 0 ? r > c ? ls : cs : null,
				u = i ? i === ls ? a.length : l.length : 0);
				var h = i === ls && _s.test(n[ds + "Property"]);
				return {
					type: i,
					timeout: d,
					propCount: u,
					hasTransform: h
				}
			}
			function ws(e, t) {
				while (e.length < t.length)
					e = e.concat(e);
				return Math.max.apply(null, t.map((function(t, i) {
					return xs(t) + xs(e[i])
				}
				)))
			}
			function xs(e) {
				return 1e3 * Number(e.slice(0, -1).replace(",", "."))
			}
			function Cs(e, t) {
				var i = e.elm;
				r(i._leaveCb) && (i._leaveCb.cancelled = !0,
				i._leaveCb());
				var n = as(e.data.transition);
				if (!a(n) && !r(i._enterCb) && 1 === i.nodeType) {
					var o = n.css
					  , s = n.type
					  , l = n.enterClass
					  , c = n.enterToClass
					  , h = n.enterActiveClass
					  , p = n.appearClass
					  , f = n.appearToClass
					  , m = n.appearActiveClass
					  , v = n.beforeEnter
					  , g = n.enter
					  , _ = n.afterEnter
					  , y = n.enterCancelled
					  , w = n.beforeAppear
					  , x = n.appear
					  , C = n.afterAppear
					  , $ = n.appearCancelled
					  , S = n.duration
					  , k = An
					  , T = An.$vnode;
					while (T && T.parent)
						k = T.context,
						T = T.parent;
					var M = !k._isMounted || !e.isRootInsert;
					if (!M || x || "" === x) {
						var E = M && p ? p : l
						  , O = M && m ? m : h
						  , A = M && f ? f : c
						  , I = M && w || v
						  , F = M && d(x) ? x : g
						  , D = M && C || _
						  , R = M && $ || y
						  , P = b(u(S) ? S.enter : S);
						0;
						var L = !1 !== o && !ie
						  , B = ks(F)
						  , N = i._enterCb = z((function() {
							L && (gs(i, A),
							gs(i, O)),
							N.cancelled ? (L && gs(i, E),
							R && R(i)) : D && D(i),
							i._enterCb = null
						}
						));
						e.data.show || Nt(e, "insert", (function() {
							var t = i.parentNode
							  , n = t && t._pending && t._pending[e.key];
							n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(),
							F && F(i, N)
						}
						)),
						I && I(i),
						L && (vs(i, E),
						vs(i, O),
						ms((function() {
							gs(i, E),
							N.cancelled || (vs(i, A),
							B || (Ss(P) ? setTimeout(N, P) : bs(i, s, N)))
						}
						))),
						e.data.show && (t && t(),
						F && F(i, N)),
						L || B || N()
					}
				}
			}
			function $s(e, t) {
				var i = e.elm;
				r(i._enterCb) && (i._enterCb.cancelled = !0,
				i._enterCb());
				var n = as(e.data.transition);
				if (a(n) || 1 !== i.nodeType)
					return t();
				if (!r(i._leaveCb)) {
					var o = n.css
					  , s = n.type
					  , l = n.leaveClass
					  , c = n.leaveToClass
					  , d = n.leaveActiveClass
					  , h = n.beforeLeave
					  , p = n.leave
					  , f = n.afterLeave
					  , m = n.leaveCancelled
					  , v = n.delayLeave
					  , g = n.duration
					  , _ = !1 !== o && !ie
					  , y = ks(p)
					  , w = b(u(g) ? g.leave : g);
					0;
					var x = i._leaveCb = z((function() {
						i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null),
						_ && (gs(i, c),
						gs(i, d)),
						x.cancelled ? (_ && gs(i, l),
						m && m(i)) : (t(),
						f && f(i)),
						i._leaveCb = null
					}
					));
					v ? v(C) : C()
				}
				function C() {
					x.cancelled || (!e.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e),
					h && h(i),
					_ && (vs(i, l),
					vs(i, d),
					ms((function() {
						gs(i, l),
						x.cancelled || (vs(i, c),
						y || (Ss(w) ? setTimeout(x, w) : bs(i, s, x)))
					}
					))),
					p && p(i, x),
					_ || y || x())
				}
			}
			function Ss(e) {
				return "number" === typeof e && !isNaN(e)
			}
			function ks(e) {
				if (a(e))
					return !1;
				var t = e.fns;
				return r(t) ? ks(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1
			}
			function Ts(e, t) {
				!0 !== t.data.show && Cs(t)
			}
			var Ms = Z ? {
				create: Ts,
				activate: Ts,
				remove: function(e, t) {
					!0 !== e.data.show ? $s(e, t) : t()
				}
			} : {}
			  , Es = [Sr, Mr, Br, Vr, ts, Ms]
			  , Os = Es.concat(wr)
			  , As = pr({
				nodeOps: or,
				modules: Os
			});
			ie && document.addEventListener("selectionchange", (function() {
				var e = document.activeElement;
				e && e.vmodel && Ns(e, "input")
			}
			));
			var Is = {
				inserted: function(e, t, i, n) {
					"select" === i.tag ? (n.elm && !n.elm._vOptions ? Nt(i, "postpatch", (function() {
						Is.componentUpdated(e, t, i)
					}
					)) : Fs(e, t, i.context),
					e._vOptions = [].map.call(e.options, Ps)) : ("textarea" === i.tag || Ha(e.type)) && (e._vModifiers = t.modifiers,
					t.modifiers.lazy || (e.addEventListener("compositionstart", Ls),
					e.addEventListener("compositionend", Bs),
					e.addEventListener("change", Bs),
					ie && (e.vmodel = !0)))
				},
				componentUpdated: function(e, t, i) {
					if ("select" === i.tag) {
						Fs(e, t, i.context);
						var n = e._vOptions
						  , o = e._vOptions = [].map.call(e.options, Ps);
						if (o.some((function(e, t) {
							return !N(e, n[t])
						}
						))) {
							var a = e.multiple ? t.value.some((function(e) {
								return Rs(e, o)
							}
							)) : t.value !== t.oldValue && Rs(t.value, o);
							a && Ns(e, "change")
						}
					}
				}
			};
			function Fs(e, t, i) {
				Ds(e, t, i),
				(te || ne) && setTimeout((function() {
					Ds(e, t, i)
				}
				), 0)
			}
			function Ds(e, t, i) {
				var n = t.value
				  , o = e.multiple;
				if (!o || Array.isArray(n)) {
					for (var a, r, s = 0, l = e.options.length; s < l; s++)
						if (r = e.options[s],
						o)
							a = j(n, Ps(r)) > -1,
							r.selected !== a && (r.selected = a);
						else if (N(Ps(r), n))
							return void (e.selectedIndex !== s && (e.selectedIndex = s));
					o || (e.selectedIndex = -1)
				}
			}
			function Rs(e, t) {
				return t.every((function(t) {
					return !N(t, e)
				}
				))
			}
			function Ps(e) {
				return "_value"in e ? e._value : e.value
			}
			function Ls(e) {
				e.target.composing = !0
			}
			function Bs(e) {
				e.target.composing && (e.target.composing = !1,
				Ns(e.target, "input"))
			}
			function Ns(e, t) {
				var i = document.createEvent("HTMLEvents");
				i.initEvent(t, !0, !0),
				e.dispatchEvent(i)
			}
			function js(e) {
				return !e.componentInstance || e.data && e.data.transition ? e : js(e.componentInstance._vnode)
			}
			var zs = {
				bind: function(e, t, i) {
					var n = t.value;
					i = js(i);
					var o = i.data && i.data.transition
					  , a = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
					n && o ? (i.data.show = !0,
					Cs(i, (function() {
						e.style.display = a
					}
					))) : e.style.display = n ? a : "none"
				},
				update: function(e, t, i) {
					var n = t.value
					  , o = t.oldValue;
					if (!n !== !o) {
						i = js(i);
						var a = i.data && i.data.transition;
						a ? (i.data.show = !0,
						n ? Cs(i, (function() {
							e.style.display = e.__vOriginalDisplay
						}
						)) : $s(i, (function() {
							e.style.display = "none"
						}
						))) : e.style.display = n ? e.__vOriginalDisplay : "none"
					}
				},
				unbind: function(e, t, i, n, o) {
					o || (e.style.display = e.__vOriginalDisplay)
				}
			}
			  , Gs = {
				model: Is,
				show: zs
			}
			  , Vs = {
				name: String,
				appear: Boolean,
				css: Boolean,
				mode: String,
				type: String,
				enterClass: String,
				leaveClass: String,
				enterToClass: String,
				leaveToClass: String,
				enterActiveClass: String,
				leaveActiveClass: String,
				appearClass: String,
				appearActiveClass: String,
				appearToClass: String,
				duration: [Number, String, Object]
			};
			function Hs(e) {
				var t = e && e.componentOptions;
				return t && t.Ctor.options.abstract ? Hs(Oi(t.children)) : e
			}
			function Ws(e) {
				var t = {}
				  , i = e.$options;
				for (var n in i.propsData)
					t[n] = e[n];
				var o = i._parentListeners;
				for (var n in o)
					t[k(n)] = o[n];
				return t
			}
			function Us(e, t) {
				if (/\d-keep-alive$/.test(t.tag))
					return e("keep-alive", {
						props: t.componentOptions.propsData
					})
			}
			function Xs(e) {
				while (e = e.parent)
					if (e.data.transition)
						return !0
			}
			function qs(e, t) {
				return t.key === e.key && t.tag === e.tag
			}
			var Ks = function(e) {
				return e.tag || ci(e)
			}
			  , Ys = function(e) {
				return "show" === e.name
			}
			  , Js = {
				name: "transition",
				props: Vs,
				abstract: !0,
				render: function(e) {
					var t = this
					  , i = this.$slots.default;
					if (i && (i = i.filter(Ks),
					i.length)) {
						0;
						var n = this.mode;
						0;
						var o = i[0];
						if (Xs(this.$vnode))
							return o;
						var a = Hs(o);
						if (!a)
							return o;
						if (this._leaving)
							return Us(e, o);
						var r = "__transition-".concat(this._uid, "-");
						a.key = null == a.key ? a.isComment ? r + "comment" : r + a.tag : c(a.key) ? 0 === String(a.key).indexOf(r) ? a.key : r + a.key : a.key;
						var s = (a.data || (a.data = {})).transition = Ws(this)
						  , l = this._vnode
						  , d = Hs(l);
						if (a.data.directives && a.data.directives.some(Ys) && (a.data.show = !0),
						d && d.data && !qs(a, d) && !ci(d) && (!d.componentInstance || !d.componentInstance._vnode.isComment)) {
							var u = d.data.transition = D({}, s);
							if ("out-in" === n)
								return this._leaving = !0,
								Nt(u, "afterLeave", (function() {
									t._leaving = !1,
									t.$forceUpdate()
								}
								)),
								Us(e, o);
							if ("in-out" === n) {
								if (ci(a))
									return l;
								var h, p = function() {
									h()
								};
								Nt(s, "afterEnter", p),
								Nt(s, "enterCancelled", p),
								Nt(u, "delayLeave", (function(e) {
									h = e
								}
								))
							}
						}
						return o
					}
				}
			}
			  , Qs = D({
				tag: String,
				moveClass: String
			}, Vs);
			delete Qs.mode;
			var Zs = {
				props: Qs,
				beforeMount: function() {
					var e = this
					  , t = this._update;
					this._update = function(i, n) {
						var o = In(e);
						e.__patch__(e._vnode, e.kept, !1, !0),
						e._vnode = e.kept,
						o(),
						t.call(e, i, n)
					}
				},
				render: function(e) {
					for (var t = this.tag || this.$vnode.data.tag || "span", i = Object.create(null), n = this.prevChildren = this.children, o = this.$slots.default || [], a = this.children = [], r = Ws(this), s = 0; s < o.length; s++) {
						var l = o[s];
						if (l.tag)
							if (null != l.key && 0 !== String(l.key).indexOf("__vlist"))
								a.push(l),
								i[l.key] = l,
								(l.data || (l.data = {})).transition = r;
							else
								;
					}
					if (n) {
						var c = []
						  , d = [];
						for (s = 0; s < n.length; s++) {
							l = n[s];
							l.data.transition = r,
							l.data.pos = l.elm.getBoundingClientRect(),
							i[l.key] ? c.push(l) : d.push(l)
						}
						this.kept = e(t, null, c),
						this.removed = d
					}
					return e(t, null, a)
				},
				updated: function() {
					var e = this.prevChildren
					  , t = this.moveClass || (this.name || "v") + "-move";
					e.length && this.hasMove(e[0].elm, t) && (e.forEach(el),
					e.forEach(tl),
					e.forEach(il),
					this._reflow = document.body.offsetHeight,
					e.forEach((function(e) {
						if (e.data.moved) {
							var i = e.elm
							  , n = i.style;
							vs(i, t),
							n.transform = n.WebkitTransform = n.transitionDuration = "",
							i.addEventListener(us, i._moveCb = function e(n) {
								n && n.target !== i || n && !/transform$/.test(n.propertyName) || (i.removeEventListener(us, e),
								i._moveCb = null,
								gs(i, t))
							}
							)
						}
					}
					)))
				},
				methods: {
					hasMove: function(e, t) {
						if (!ss)
							return !1;
						if (this._hasMove)
							return this._hasMove;
						var i = e.cloneNode();
						e._transitionClasses && e._transitionClasses.forEach((function(e) {
							os(i, e)
						}
						)),
						ns(i, t),
						i.style.display = "none",
						this.$el.appendChild(i);
						var n = ys(i);
						return this.$el.removeChild(i),
						this._hasMove = n.hasTransform
					}
				}
			};
			function el(e) {
				e.elm._moveCb && e.elm._moveCb(),
				e.elm._enterCb && e.elm._enterCb()
			}
			function tl(e) {
				e.data.newPos = e.elm.getBoundingClientRect()
			}
			function il(e) {
				var t = e.data.pos
				  , i = e.data.newPos
				  , n = t.left - i.left
				  , o = t.top - i.top;
				if (n || o) {
					e.data.moved = !0;
					var a = e.elm.style;
					a.transform = a.WebkitTransform = "translate(".concat(n, "px,").concat(o, "px)"),
					a.transitionDuration = "0s"
				}
			}
			var nl = {
				Transition: Js,
				TransitionGroup: Zs
			};
			oa.config.mustUseProp = wa,
			oa.config.isReservedTag = ja,
			oa.config.isReservedAttr = _a,
			oa.config.getTagNamespace = za,
			oa.config.isUnknownElement = Va,
			D(oa.options.directives, Gs),
			D(oa.options.components, nl),
			oa.prototype.__patch__ = Z ? As : P,
			oa.prototype.$mount = function(e, t) {
				return e = e && Z ? Wa(e) : void 0,
				Rn(this, e, t)
			}
			,
			Z && setTimeout((function() {
				U.devtools && ue && ue.emit("init", oa)
			}
			), 0)
		},
		627: function(e) {
			function t(e) {
				return -1 !== e.type.indexOf("mouse") ? e.clientX : e.touches[0].clientX
			}
			function i(e) {
				return -1 !== e.type.indexOf("mouse") ? e.clientY : e.touches[0].clientY
			}
			var n = function() {
				var e = !1;
				try {
					var t = Object.defineProperty({}, "passive", {
						get: function() {
							e = !0
						}
					});
					window.addEventListener("test", null, t)
				} catch (i) {}
				return e
			}()
			  , o = {
				install: function(e, o) {
					var a = Object.assign({}, {
						disableClick: !1,
						tapTolerance: 10,
						swipeTolerance: 30,
						touchHoldTolerance: 400,
						longTapTimeInterval: 400,
						touchClass: ""
					}, o);
					function r(e) {
						var n = this.$$touchObj
						  , o = e.type.indexOf("touch") >= 0
						  , a = e.type.indexOf("mouse") >= 0
						  , r = this;
						o && (n.lastTouchStartTime = e.timeStamp),
						a && n.lastTouchStartTime && e.timeStamp - n.lastTouchStartTime < 350 || n.touchStarted || (p(this),
						n.touchStarted = !0,
						n.touchMoved = !1,
						n.swipeOutBounded = !1,
						n.startX = t(e),
						n.startY = i(e),
						n.currentX = 0,
						n.currentY = 0,
						n.touchStartTime = e.timeStamp,
						n.touchHoldTimer = setTimeout((function() {
							h(e, r, "touchhold")
						}
						), n.options.touchHoldTolerance),
						h(e, this, "start"))
					}
					function s(e) {
						var n = this.$$touchObj;
						if (n.currentX = t(e),
						n.currentY = i(e),
						n.touchMoved) {
							if (!n.swipeOutBounded) {
								var o = n.options.swipeTolerance;
								n.swipeOutBounded = Math.abs(n.startX - n.currentX) > o && Math.abs(n.startY - n.currentY) > o
							}
						} else {
							var a = n.options.tapTolerance;
							n.touchMoved = Math.abs(n.startX - n.currentX) > a || Math.abs(n.startY - n.currentY) > a,
							n.touchMoved && (m(n),
							h(e, this, "moved"))
						}
						n.touchMoved && h(e, this, "moving")
					}
					function l() {
						var e = this.$$touchObj;
						m(e),
						f(this),
						e.touchStarted = e.touchMoved = !1,
						e.startX = e.startY = 0
					}
					function c(e) {
						var t = this.$$touchObj
						  , i = e.type.indexOf("touch") >= 0
						  , n = e.type.indexOf("mouse") >= 0;
						if (i && (t.lastTouchEndTime = e.timeStamp),
						m(t),
						t.touchStarted = !1,
						f(this),
						!(n && t.lastTouchEndTime && e.timeStamp - t.lastTouchEndTime < 350))
							if (h(e, this, "end"),
							t.touchMoved) {
								if (!t.swipeOutBounded) {
									var o, a = t.options.swipeTolerance;
									o = Math.abs(t.startX - t.currentX) < a ? t.startY > t.currentY ? "top" : "bottom" : t.startX > t.currentX ? "left" : "right",
									t.callbacks["swipe." + o] ? h(e, this, "swipe." + o, o) : h(e, this, "swipe", o)
								}
							} else
								t.callbacks.longtap && e.timeStamp - t.touchStartTime > t.options.longTapTimeInterval ? (e.cancelable && e.preventDefault(),
								h(e, this, "longtap")) : h(e, this, "tap")
					}
					function d() {
						p(this)
					}
					function u() {
						f(this)
					}
					function h(e, t, i, n) {
						var o = t.$$touchObj
						  , a = o.callbacks[i] || [];
						if (0 === a.length)
							return null;
						for (var r = 0; r < a.length; r++) {
							var s = a[r];
							s.modifiers.stop && e.stopPropagation(),
							s.modifiers.prevent && e.preventDefault(),
							s.modifiers.self && e.target !== e.currentTarget || "function" === typeof s.value && (n ? s.value(n, e) : s.value(e))
						}
					}
					function p(e) {
						var t = e.$$touchObj.options.touchClass;
						t && e.classList.add(t)
					}
					function f(e) {
						var t = e.$$touchObj.options.touchClass;
						t && e.classList.remove(t)
					}
					function m(e) {
						e.touchHoldTimer && (clearTimeout(e.touchHoldTimer),
						e.touchHoldTimer = null)
					}
					function v(e, t) {
						var i = e.$$touchObj || {
							callbacks: {},
							hasBindTouchEvents: !1,
							options: a
						};
						return t && (i.options = Object.assign({}, i.options, t)),
						e.$$touchObj = i,
						e.$$touchObj
					}
					e.directive("touch", {
						bind: function(e, t) {
							var i = v(e)
							  , o = !!n && {
								passive: !0
							}
							  , a = t.arg || "tap";
							switch (a) {
							case "swipe":
								var h = t.modifiers;
								if (h.left || h.right || h.top || h.bottom) {
									for (var p in t.modifiers)
										if (["left", "right", "top", "bottom"].indexOf(p) >= 0) {
											var f = "swipe." + p;
											i.callbacks[f] = i.callbacks[f] || [],
											i.callbacks[f].push(t)
										}
								} else
									i.callbacks.swipe = i.callbacks.swipe || [],
									i.callbacks.swipe.push(t);
								break;
							case "start":
							case "moving":
								t.modifiers.disablePassive && (o = !1);
							default:
								i.callbacks[a] = i.callbacks[a] || [],
								i.callbacks[a].push(t)
							}
							i.hasBindTouchEvents || (e.addEventListener("touchstart", r, o),
							e.addEventListener("touchmove", s, o),
							e.addEventListener("touchcancel", l),
							e.addEventListener("touchend", c),
							i.options.disableClick || (e.addEventListener("mousedown", r),
							e.addEventListener("mousemove", s),
							e.addEventListener("mouseup", c),
							e.addEventListener("mouseenter", d),
							e.addEventListener("mouseleave", u)),
							i.hasBindTouchEvents = !0)
						},
						unbind: function(e) {
							e.removeEventListener("touchstart", r),
							e.removeEventListener("touchmove", s),
							e.removeEventListener("touchcancel", l),
							e.removeEventListener("touchend", c),
							e.$$touchObj && !e.$$touchObj.options.disableClick && (e.removeEventListener("mousedown", r),
							e.removeEventListener("mousemove", s),
							e.removeEventListener("mouseup", c),
							e.removeEventListener("mouseenter", d),
							e.removeEventListener("mouseleave", u)),
							delete e.$$touchObj
						}
					}),
					e.directive("touch-class", {
						bind: function(e, t) {
							v(e, {
								touchClass: t.value
							})
						}
					}),
					e.directive("touch-options", {
						bind: function(e, t) {
							v(e, t.value)
						}
					})
				}
			};
			e.exports = o
		}
	}
	  , t = {};
	function i(n) {
		var o = t[n];
		if (void 0 !== o)
			return o.exports;
		var a = t[n] = {
			exports: {}
		};
		return e[n].call(a.exports, a, a.exports, i),
		a.exports
	}
	!function() {
		i.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e["default"]
			}
			: function() {
				return e
			}
			;
			return i.d(t, {
				a: t
			}),
			t
		}
	}(),
	function() {
		i.d = function(e, t) {
			for (var n in t)
				i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
					enumerable: !0,
					get: t[n]
				})
		}
	}(),
	function() {
		i.g = function() {
			if ("object" === typeof globalThis)
				return globalThis;
			try {
				return this || new Function("return this")()
			} catch (e) {
				if ("object" === typeof window)
					return window
			}
		}()
	}(),
	function() {
		i.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}
	}(),
	function() {
		i.r = function(e) {
			"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
				value: "Module"
			}),
			Object.defineProperty(e, "__esModule", {
				value: !0
			})
		}
	}(),
	function() {
		i.p = "/"
	}();
	!function() {
		"use strict";
		var e = i(144)
		  , t = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				attrs: {
					id: "app"
				}
			}, [t("main-view")], 1)
		}
		  , n = []
		  , o = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "main-view"
			}, [e.GlobalModel.activeState === e.States.Choose ? t("local-choose-file", {
				staticClass: "state",
				on: {
					filesSelected: e.handleFilesSelected
				}
			}) : e._e(), e.enableEditState ? t("local-edit-file", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showEditState,
					expression: "showEditState"
				}],
				staticClass: "state color"
			}) : e._e(), e.GlobalModel.activeState === e.States.Upload ? t("local-upload-file", {
				staticClass: "state color"
			}) : e._e(), e.GlobalModel.activeState === e.States.AnalyzeFile ? t("local-analyze-file", {
				staticClass: "state color"
			}) : e._e(), e.GlobalModel.activeState === e.States.Save ? t("local-save-file", {
				staticClass: "state color"
			}) : e._e()], 1)
		}
		  , a = []
		  , r = function() {
			var e = this
			  , t = e._self._c;
			return t("choose-file", {
				attrs: {
					langs: e.computedLangs
				},
				on: {
					filesSelected: e.handleSelectedFiles,
					filePickerCreated: e.handleFilePickerCreated
				}
			})
		}
		  , s = []
		  , l = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-state_choose-file"
			}, [t("file-picker", {
				staticClass: "file-picker",
				attrs: {
					langs: e.computedLangs,
					"allow-multiple": e.allowMultiple
				},
				on: {
					"files-selected": e.handleSelectedFiles,
					created: e.handleFilePickerCreation
				}
			})], 1)
		}
		  , c = []
		  , d = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-component_file-picker"
			}, [t("el-dropdown", {
				staticClass: "picker-dropdown",
				attrs: {
					"split-button": "",
					trigger: "click",
					placement: "bottom-start"
				}
			}, [t("div", {
				staticClass: "picker-dropdown__wrapper"
			}, [t("div", {
				staticClass: "picker-dropdown__label"
			}, [e.showLabelIcon ? t("i", {
				staticClass: "picker-dropdown__label-icon"
			}) : e._e(), t("span", {
				staticClass: "picker-dropdown__label-text"
			}, [e._v(e._s(e.computedLangs.labelChoose))])]), t("input", {
				ref: "fileInput",
				staticClass: "picker-dropdown__input",
				attrs: {
					type: "file",
					title: "",
					multiple: e.allowMultiple
				},
				on: {
					change: e.filesSelected
				}
			})]), t("el-dropdown-menu", {
				class: e.dropdownMenuClasses,
				style: {
					width: e.$data._dropdownWidth
				},
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			}, [t("el-dropdown-item", {
				staticClass: "google"
			}, [e._v(" " + e._s(e.computedLangs.labelGDrive) + " ")]), t("el-dropdown-item", {
				staticClass: "dropbox"
			}, [e._v(" " + e._s(e.computedLangs.labelDropbox) + " ")]), t("el-dropdown-item", {
				staticClass: "url"
			}, [e._v(" " + e._s(e.computedLangs.labelFromUrl) + " ")])], 1)], 1), t("div", {
				staticClass: "label-drop-file"
			}, [e._v(" " + e._s(e.computedLangs.labelDropHere) + " ")]), e.showDrop ? t("div", {
				staticClass: "picker__drop-zone"
			}, [e._m(0), t("div", {
				staticClass: "picker__drop-zone-label"
			}, [e._v(e._s(e.computedLangs.labelDrop))])]) : e._e()], 1)
		}
		  , u = [function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "drop-arrow"
			}, [t("div", {
				staticClass: "arrow anim-floating"
			}), t("div", {
				staticClass: "base"
			})])
		}
		]
		  , h = {
			name: "FilePicker",
			props: {
				allowMultiple: {
					type: Boolean,
					default: !1
				},
				allowDirectory: {
					type: Boolean,
					default: !1
				},
				handleDragEvents: {
					type: Boolean,
					default: !0
				},
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				showLabelIcon: {
					type: Boolean,
					deault: !1
				},
				dropdownClass: {
					type: String
				}
			},
			data() {
				return {
					showDrop: !1,
					_dropdownWidth: 0
				}
			},
			created() {
				this.handleDragEvents && (window.addEventListener("dragover", this.dragOverHandler),
				window.addEventListener("dragenter", this.dragEnterHandler),
				window.addEventListener("dragleave", this.dragLeaveHandler),
				window.addEventListener("drop", this.dropHandler))
			},
			mounted() {
				this.$emit("created"),
				this.$data._dropdownWidth = `${this.$el.getBoundingClientRect().width}px`
			},
			beforeDestroy() {
				window.removeEventListener("dragover", this.dragOverHandler),
				window.removeEventListener("dragenter", this.dragEnterHandler),
				window.removeEventListener("dragleave", this.dragLeaveHandler),
				window.removeEventListener("drop", this.dropHandler)
			},
			methods: {
				dragOverHandler(e) {
					e.preventDefault(),
					e.dataTransfer.dropEffect = "copy"
				},
				filesSelected(e) {
					const t = Array.from(e.target.files);
					this.$emit("files-selected", t),
					this.$el.dispatchEvent(new CustomEvent("filesSelectedWithInput",{
						detail: t,
						bubbles: !0,
						cancelable: !0
					})),
					this.$refs.fileInput.value = ""
				},
				dragEnterHandler(e) {
					e.preventDefault(),
					this.$emit("file-drag-over"),
					e.dataTransfer.dropEffect = "copy",
					this.showDrop = !0
				},
				dragLeaveHandler(e) {
					e.preventDefault(),
					e.relatedTarget || (this.$emit("file-drag-leave"),
					this.showDrop = !1)
				},
				dropHandler(e) {
					e.preventDefault(),
					this.showDrop = !1;
					const t = Array.from(e.dataTransfer.files);
					t.length && (this.$emit("files-selected", t),
					this.$el.dispatchEvent(new CustomEvent("filesEntries",{
						detail: Array.from(e.dataTransfer.items),
						bubbles: !0,
						cancelable: !0
					})))
				}
			},
			computed: {
				dropdownMenuClasses() {
					const e = ["picker-dropdown__menu", "cloudOpeners"];
					return this.dropdownClass && e.push(this.dropdownClass),
					e
				},
				computedLangs() {
					return {
						labelChoose: "Add files...",
						labelGDrive: "Google Drive",
						labelDropbox: "Dropbox",
						labelFromUrl: "From url",
						labelDrop: "Drop files to upload",
						labelDropHere: "Or drop files here",
						...this.langs
					}
				}
			}
		}
		  , p = h;
		function f(e, t, i, n, o, a, r, s) {
			var l, c = "function" === typeof e ? e.options : e;
			if (t && (c.render = t,
			c.staticRenderFns = i,
			c._compiled = !0),
			n && (c.functional = !0),
			a && (c._scopeId = "data-v-" + a),
			r ? (l = function(e) {
				e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext,
				e || "undefined" === typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
				o && o.call(this, e),
				e && e._registeredComponents && e._registeredComponents.add(r)
			}
			,
			c._ssrRegister = l) : o && (l = s ? function() {
				o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot)
			}
			: o),
			l)
				if (c.functional) {
					c._injectStyles = l;
					var d = c.render;
					c.render = function(e, t) {
						return l.call(t),
						d(e, t)
					}
				} else {
					var u = c.beforeCreate;
					c.beforeCreate = u ? [].concat(u, l) : [l]
				}
			return {
				exports: e,
				options: c
			}
		}
		var m = f(p, d, u, !1, null, "6a50ffaa", null)
		  , v = m.exports
		  , g = {
			name: "ChooseFile",
			components: {
				FilePicker: v
			},
			props: {
				allowMultiple: {
					type: Boolean,
					default: !1
				},
				langs: {
					type: Object,
					default() {
						return {}
					}
				}
			},
			computed: {
				computedLangs() {
					return {
						header_1: "Header 1",
						header_2: "Header 2",
						...this.langs
					}
				}
			},
			mounted() {
				this.$emit("mounted")
			},
			beforeDestroy() {
				this.$emit("beforeDestroy")
			},
			methods: {
				handleSelectedFiles(e) {
					this.$emit("filesSelected", e)
				},
				handleFilePickerCreation() {
					this.$emit("filePickerCreated")
				}
			}
		}
		  , b = g
		  , _ = f(b, l, c, !1, null, "6c1db468", null)
		  , w = _.exports
		  , C = {
			name: "LocalChooseFile",
			components: {
				ChooseFile: w
			},
			methods: {
				async handleSelectedFiles(e) {
					this.$emit("filesSelected", {
						file: e[0]
					})
				},
				handleFilePickerCreated() {
					this.CloudProcessor.attachCloudOpeners(),
					this.CloudProcessor.on("cloudOpenStart", (e=>{
						this.$emit("filesSelected", {
							file: {
								name: e.original_filename,
								size: e.filesize
							},
							useRemote: !0
						})
					}
					))
				}
			},
			beforeDestroy() {
				this.CloudProcessor.off("cloudOpenStart")
			},
			computed: {
				computedLangs() {
					return this.$useLiterals ? {
						header_1: "{ header_1 }",
						header_2: "{ header_2 }",
						labelChoose: "{ add_files }",
						labelDrop: "{ drop_files }",
						labelDropbox: "{ dropbox }",
						labelGDrive: "{ gdrive }",
						labelFromUrl: "{ from_url }",
						labelDropHere: "{ drop_file_here2 }"
					} : {
						header_1: this.$langs.header_1,
						header_2: this.$langs.header_2,
						labelChoose: this.$langs.add_files,
						labelDrop: this.$langs.drop_files,
						labelDropbox: this.$langs.dropbox,
						labelGDrive: this.$langs.gdrive,
						labelFromUrl: this.$langs.from_url,
						labelDropHere: this.$langs.drop_file_here2
					}
				}
			}
		}
		  , $ = C
		  , S = f($, r, s, !1, null, null, null)
		  , k = S.exports
		  , T = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "state_edit-file"
			}, [t("div", {
				class: ["content", {
					visible: !e.$data._requestExit
				}]
			}, [t("div", {
				staticClass: "block-top"
			}, [t("toolbar", {
				staticClass: "toolbar",
				attrs: {
					items: e.tools,
					active: e.GlobalModel.activeTool,
					"mobile-mode": e.isMobileOnly
				},
				on: {
					itemSelected: e.setActiveTool,
					itemOver: e.handleMenuItemOver,
					itemOut: e.handleMenuItemOut
				}
			}), t("div", {
				staticClass: "buttons"
			}, [t("el-button", {
				staticClass: "btn-reset",
				on: {
					click: e.handleResetButton
				}
			}, [t("span", [e._v(e._s(e.$langs.btn_reset_changes))])]), t("el-button", {
				staticClass: "btn-exit",
				on: {
					click: e.handleExitButton
				}
			})], 1)], 1), t("div", {
				staticClass: "block-middle"
			}, [t("div", {
				staticClass: "file-name"
			}, [e._v(e._s(e.GlobalModel.file.name))]), t("video-controls", {
				nativeOn: {
					videoDisplayReady: function(t) {
						return e.handleVideoDisplayReady.apply(null, arguments)
					},
					workAreaReady: function(t) {
						return e.handleWorkAreaReady.apply(null, arguments)
					}
				}
			})], 1), t("div", {
				staticClass: "block-bottom"
			}, [t("div", {
				staticClass: "block-controls"
			}, [t("el-button", {
				class: {
					"btn-play": !0,
					playing: "pause" !== e.playState
				},
				attrs: {
					slot: "reference",
					disabled: e.playDisabled
				},
				on: {
					click: function(t) {
						return e.togglePlay()
					}
				},
				slot: "reference"
			}, [t("div", {
				staticClass: "arrow"
			})]), t("div", {
				staticClass: "tools-settings"
			}, [e.GlobalModel.activeTool === e.Tools.Cut ? t("cut", {
				nativeOn: {
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.showCropRect ? t("crop", {
				attrs: {
					target: e.toolTarget,
					ratios: e.ratios,
					"original-target-size": e.GlobalModel.mediaInfo.originalSize,
					"work-area": e.$data._workArea,
					mode: e.cropRectMode
				},
				nativeOn: {
					cropChange: function(t) {
						return e.handleCropChange(t)
					},
					cropRectReady: function(t) {
						return e.handleCropRectReady.apply(null, arguments)
					},
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.Rotate ? t("rotate", {
				attrs: {
					target: e.toolTarget,
					"aspect-ratio": e.GlobalModel.mediaInfo.hwRatio,
					rotation: e.GlobalModel.encodeData.rotation
				},
				nativeOn: {
					toolRotateAction: function(t) {
						return e.handleRotationToolAction.apply(null, arguments)
					},
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.Flip ? t("flip", {
				attrs: {
					target: e.toolTarget,
					horizontal: e.GlobalModel.flipHorizontal,
					vertical: e.GlobalModel.flipVertical
				},
				on: {
					changeHorizontal: e.handleFlipHorizontal,
					changeVertical: e.handleFlipVertical
				},
				nativeOn: {
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.Resolution ? t("resolution", {
				attrs: {
					"default-resolution": e.GlobalModel.mediaInfo.originalSize,
					"active-resolution": e.GlobalModel.encodeData.resolution
				},
				nativeOn: {
					toolResolutionAction: function(t) {
						return e.handleResolutionToolAction.apply(null, arguments)
					},
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.Volume ? t("volume", {
				attrs: {
					target: e.filterVolume,
					langs: {
						no_audio: e.$langs.tool_volume_no_audio
					}
				},
				on: {
					change: e.handleVolumeChange
				},
				nativeOn: {
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.PlaybackRate ? t("playback-rate", {
				attrs: {
					"initial-value": e.GlobalModel.encodeData.playbackRate
				},
				on: {
					change: e.handlePlaybackRateChange
				},
				nativeOn: {
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.showDelogoRect ? t("delogo", {
				attrs: {
					target: e.toolTarget,
					"original-target-size": e.GlobalModel.mediaInfo.originalSize,
					"work-area": e.$data._workArea,
					mode: e.delogoMode
				},
				on: {
					requestFilterPreview: e.handleRequestFilterPreview
				},
				nativeOn: {
					delogoChange: function(t) {
						return e.handleDelogoChange(t)
					},
					delogoCropRectReady: function(t) {
						return e.handleDelogoCropRectReady.apply(null, arguments)
					},
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.Stabilization ? t("stabilization", {
				attrs: {
					target: this.GlobalModel.encodeData.stabilization
				},
				on: {
					change: function(t) {
						return e.handleStabilizationChange(t)
					},
					requestFilterPreview: e.handleRequestFilterPreview
				},
				nativeOn: {
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.GlobalModel.activeTool === e.Tools.Loop ? t("loop", {
				attrs: {
					"loop-times": e.GlobalModel.encodeData.loopTimes
				},
				nativeOn: {
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					},
					toolLoopAction: function(t) {
						return e.handleLoopToolAction.apply(null, arguments)
					}
				}
			}) : e._e(), e.showAddImageRect ? t("add-image", {
				attrs: {
					target: e.toolTarget,
					"original-target-size": e.GlobalModel.mediaInfo.originalSize,
					"work-area": e.$data._workArea,
					mode: e.addImageMode
				},
				nativeOn: {
					imagesListChanges: function(t) {
						return e.handleAddImageImagesListChange.apply(null, arguments)
					},
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e(), e.showAddTextRect ? t("add-text", {
				attrs: {
					target: e.toolTarget,
					"original-target-size": e.GlobalModel.mediaInfo.originalTargetSize,
					"work-area": e.$data._workArea,
					mode: e.addTextMode
				},
				nativeOn: {
					textsListChanges: function(t) {
						return e.handleAddTextTextsListChange.apply(null, arguments)
					},
					activate: function(t) {
						return e.handleToolActivate.apply(null, arguments)
					}
				}
			}) : e._e()], 1), t("extended-format-picker", {
				staticClass: "format-picker",
				attrs: {
					formats: e.saveFormats,
					langs: this.$langs,
					"no-encode-disabled": e.noEncodeDisabled,
					"no-encode-active": e.GlobalModel.encodeData.noEncodeActive,
					"active-format": e.GlobalModel.playData.saveFormat
				},
				on: {
					change: e.handleSaveFormatChange,
					noEncodeChange: e.handleNoEncodeChange
				}
			}), t("el-button", {
				staticClass: "btn-cut",
				on: {
					click: e.handleCutButtonClick
				}
			}, [e._v(e._s(e.$langs.btn_cut))]), t("div", {
				staticClass: "tools-save"
			}, [t("el-button", {
				class: {
					"btn-play": !0,
					playing: "pause" !== e.playState
				},
				attrs: {
					slot: "reference",
					disabled: e.playDisabled
				},
				on: {
					click: function(t) {
						return e.togglePlay()
					}
				},
				slot: "reference"
			}, [t("div", {
				staticClass: "arrow"
			})]), t("extended-format-picker", {
				staticClass: "format-picker",
				attrs: {
					formats: e.saveFormats,
					langs: this.$langs,
					"no-encode-disabled": e.noEncodeDisabled,
					"no-encode-active": e.GlobalModel.encodeData.noEncodeActive,
					"active-format": e.GlobalModel.playData.saveFormat
				},
				on: {
					change: e.handleSaveFormatChange,
					noEncodeChange: e.handleNoEncodeChange
				}
			}), t("el-button", {
				staticClass: "btn-cut",
				on: {
					click: e.handleCutButtonClick
				}
			}, [e._v(e._s(e.$langs.btn_cut))])], 1)], 1)])]), e.$data._requestExit ? t("div", {
				class: ["block-exit", {
					visible: e.$data._requestExit
				}]
			}, [t("div", [e._v(e._s(e.$langs.dialog_cancel_editing))]), t("el-button", {
				staticClass: "btn-yes",
				on: {
					click: e.handleAcceptExit
				}
			}, [e._v(e._s(e.$langs.dialog_cancel_editing_yes))]), t("el-button", {
				staticClass: "btn-no",
				on: {
					click: e.handleRejectExit
				}
			}, [e._v(e._s(e.$langs.dialog_cancel_editing_no))])], 1) : e._e()])
		}
		  , M = []
		  , E = function() {
			var e = this
			  , t = e._self._c;
			return t("div", [t("el-radio-group", {
				staticClass: "menu",
				on: {
					change: e.handleChange
				},
				model: {
					value: e.model,
					callback: function(t) {
						e.model = t
					},
					expression: "model"
				}
			}, e._l(e.items, (function(i) {
				return t("el-radio-button", {
					key: i.name,
					class: ["item", i.class],
					attrs: {
						label: i.name,
						disabled: i.class.disabled
					}
				}, [t("el-popover", {
					attrs: {
						"visible-arrow": !1,
						placement: "top",
						trigger: "hover",
						"popper-class": "t-hint",
						"close-delay": 33,
						"open-delay": 33
					}
				}, [t("div", {
					staticClass: "hint"
				}, [t("span", [e._v(e._s(i.hint))]), e._l(Array.isArray(i.extraLabels) ? i.extraLabels : [], (function(i) {
					return t("span", {
						key: i.name,
						class: ["extra-label", i.classes]
					}, [e._v(" " + e._s(i.value) + " ")])
				}
				))], 2), t("div", {
					staticClass: "content",
					attrs: {
						slot: "reference"
					},
					on: {
						mouseover: function(t) {
							return e.$emit("itemOver", i)
						},
						mouseout: function(t) {
							return e.$emit("itemOut", i)
						}
					},
					slot: "reference"
				}, [t("i", {
					staticClass: "icon"
				}), t("span", {
					staticClass: "label"
				}, [e._v(e._s(i.label))])])])], 1)
			}
			)), 1), t("el-dropdown", {
				staticClass: "toolbar-dropdown-wrap",
				attrs: {
					trigger: "click",
					"visible-arrow": !1,
					placement: "bottom-start"
				},
				on: {
					command: e.handleDropDownItem
				}
			}, [t("el-button", {
				class: [e.activeItemClass, "btn-active"]
			}, [t("div", {
				staticClass: "content"
			}, [t("i", {
				staticClass: "icon"
			}), t("span", {
				staticClass: "label"
			}, [e._v(e._s(e.activeItemLabel))]), t("i", {
				staticClass: "arrow"
			})])]), t("el-dropdown-menu", {
				staticClass: "toolbar-dropdown",
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			}, e._l(e.items, (function(i) {
				return t("el-dropdown-item", {
					key: i.name,
					class: [i.class, {
						selected: e.activeItemName === i.name
					}],
					attrs: {
						command: i.name
					}
				}, [t("div", {
					staticClass: "content"
				}, [t("i", {
					staticClass: "icon"
				}), t("span", {
					staticClass: "label"
				}, [e._v(e._s(i.label))])])])
			}
			)), 1)], 1)], 1)
		}
		  , O = []
		  , A = {
			name: "Toolbar",
			data() {
				return {
					model: this.active?.name || this.items?.[0]?.name,
					activeItem: this.active || this.items?.[0]
				}
			},
			props: {
				items: {
					default: []
				},
				active: {
					required: !0
				}
			},
			methods: {
				handleChange() {
					document.activeElement.blur(),
					Array.isArray(this.items) ? this.$emit("itemSelected", this.items.find((e=>e.name === this.model))) : this.$emit("itemSelected", this.model)
				},
				handleDropDownItem(e) {
					this.activeItem = Array.isArray(this.items) ? this.items.find((t=>t.name === e)) : e,
					this.$emit("itemSelected", this.activeItem)
				}
			},
			watch: {
				active: {
					handler(e) {
						e && (this.model = e.name,
						this.activeItem = e)
					},
					immediate: !0
				}
			},
			computed: {
				activeItemName() {
					return this.activeItem?.name
				},
				activeItemLabel() {
					return this.activeItem?.label
				},
				activeItemClass() {
					return this.activeItem?.class
				}
			}
		}
		  , I = A
		  , F = f(I, E, O, !1, null, "72658675", null)
		  , D = F.exports
		  , R = function() {
			var e = this
			  , t = e._self._c;
			return t("el-dropdown", {
				class: {
					"shared-components_format-picker": !0,
					changed: e.changed
				},
				attrs: {
					trigger: "click",
					"visible-arrow": !1,
					placement: "bottom-start"
				},
				on: {
					command: e.handleDropDownItem
				}
			}, [t("div", {
				staticClass: "label"
			}, [t("span", [e._v(e._s(e.activeItemLabel))]), t("i")]), t("el-dropdown-menu", {
				staticClass: "dropdown",
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			}, e._l(e.items, (function(i, n) {
				return t("el-dropdown-item", {
					key: n,
					class: {
						active: i === e.activeItem
					},
					attrs: {
						command: i
					}
				}, [t("div", [e._v(e._s(i.label || i))]), i.hint ? t("div", {
					staticClass: "hint"
				}, [e._v(e._s(i.hint))]) : e._e()])
			}
			)), 1)], 1)
		}
		  , P = []
		  , L = {
			name: "FormatPicker",
			data() {
				return {
					activeItem: this.items[0]
				}
			},
			props: {
				items: {
					default: []
				},
				target: {
					default: null
				}
			},
			watch: {
				target: {
					handler(e) {
						this.activeItem = e
					},
					immediate: !0
				}
			},
			methods: {
				handleDropDownItem(e) {
					this.activeItem = e,
					this.$emit("change", e)
				}
			},
			computed: {
				activeItemLabel() {
					return this.activeItem?.label ?? this.activeItem
				},
				changed() {
					const e = this.items.find((e=>e.default)) || this.items[0];
					return !(this.activeItem === e)
				}
			}
		}
		  , B = L
		  , N = f(B, R, P, !1, null, "3320d617", null)
		  , j = N.exports
		  , z = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "components_video-controls"
			}, [t("div", {
				ref: "workArea",
				staticClass: "work-area",
				style: [{
					width: e.availWidth,
					height: e.availHeight
				}]
			}, [t("video-display", {
				staticClass: "player",
				attrs: {
					"data-prevent-html2-canvas": ""
				},
				nativeOn: {
					videoDisplayReady: function(t) {
						return e.handleVideoDisplayReady.apply(null, arguments)
					}
				}
			})], 1), t("video-navigation", {
				staticClass: "navigation",
				attrs: {
					"data-prevent-html2-canvas": ""
				},
				nativeOn: {
					storyboardReady: function(t) {
						return e.handleStoryboardReady.apply(null, arguments)
					}
				}
			})], 1)
		}
		  , G = []
		  , V = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "components_video-navigation",
				on: {
					mousemove: e.handleMouseMove,
					mouseenter: e.handleMouseEnter,
					mouseleave: e.handleMouseLeave
				}
			}, [t("video-storyboard", {
				staticClass: "storyboard",
				attrs: {
					frames: e.GlobalModel.mediaInfo.frames
				}
			}), t("control-bars", {
				staticClass: "control-bars",
				attrs: {
					"start-value": 1e3 * e.GlobalModel.playData.cutFrom,
					"end-value": 1e3 * e.GlobalModel.playData.cutTo,
					"control-value": 1e3 * e.GlobalModel.playData.fileDuration,
					"progress-value": 1e3 * e.GlobalModel.playData.progressTime,
					"parse-function": e.controlBarsParseFunction,
					inverse: e.GlobalModel.playData.inverse
				},
				on: {
					changeStart: e.handleChangeStart,
					changeEnd: e.handleChangeEnd,
					changeProgress: e.handleChangeProgress,
					changeRange: e.handleChangeRange,
					"control-start-drag": e.handleControlStartDrag,
					"control-stop-drag": e.handleControlStopDrag
				}
			}), t("div", {
				staticClass: "time-stripe",
				style: {
					left: e.timeStripeLeft,
					visibility: e.timeStripeVisibility
				},
				attrs: {
					"data-value": e.timeStripeVal
				}
			})], 1)
		}
		  , H = []
		  , W = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-components_control-bars",
				style: {
					"--timeHintScale": e.$data._timeHintScale
				},
				on: {
					click: e._handleClick
				}
			}, [t("div", {
				staticClass: "mask left",
				style: e.leftMaskStyle
			}), t("div", {
				staticClass: "mask right",
				style: e.rightMaskStyle
			}), t("div", {
				staticClass: "progress-output",
				style: {
					left: e.progressLinePosition
				}
			}, [t("div", {
				staticClass: "progress-line",
				attrs: {
					"data-value": e.value
				}
			})]), t("div", {
				directives: [{
					name: "touch",
					rawName: "v-touch:start",
					value: e._handleControlMouseDown,
					expression: "_handleControlMouseDown",
					arg: "start"
				}],
				ref: "controlsWrapper",
				staticClass: "control-bars-wrapper",
				style: {
					left: e.startX,
					right: e.endX,
					cursor: e.$data._wrapperCursor
				},
				on: {
					mousedown: e._handleControlMouseDown,
					mouseenter: e._handleMouseOver,
					mouseleave: e._handleMouseOut
				}
			}, [t("div", {
				directives: [{
					name: "touch",
					rawName: "v-touch:start",
					value: e._handleControlMouseDown,
					expression: "_handleControlMouseDown",
					arg: "start"
				}],
				ref: "cbLeft",
				class: ["control-bar", "cb-left", {
					inverse: -1 === e.$data._timeHintScale,
					mirror: 1 === e.$data._timeHintScale && e.inverse,
					active: e.startActive
				}],
				attrs: {
					"data-content": e.parseFunction(e.startValue)
				},
				on: {
					mousedown: e._handleControlMouseDown
				}
			}), t("div", {
				directives: [{
					name: "touch",
					rawName: "v-touch:start",
					value: e._handleControlMouseDown,
					expression: "_handleControlMouseDown",
					arg: "start"
				}],
				ref: "cbRight",
				class: ["control-bar", "cb-right", {
					inverse: -1 === e.$data._timeHintScale,
					mirror: 1 === e.$data._timeHintScale && e.inverse,
					active: e.endActive
				}],
				attrs: {
					"data-content": e.parseFunction(e.endValue)
				},
				on: {
					mousedown: e._handleControlMouseDown
				}
			}), t("div", {
				ref: "selectedRangeOutput",
				staticClass: "selected-range-output"
			}, [e._v(" " + e._s(e.selectedRangeValue) + " ")])])])
		}
		  , U = []
		  , X = {
			name: "ControlBars",
			data() {
				return {
					_controlDragged: !1,
					_timeHintScale: 1,
					_wrapperCursor: "",
					_activeControl: null
				}
			},
			mounted() {
				this.$data._activeControl = this.$refs.cbLeft,
				window.addEventListener("keydown", this._handleKeyDown)
			},
			beforeDestroy() {
				window.removeEventListener("keydown", this._handleKeyDown)
			},
			methods: {
				_handleKeyDown(e) {
					if (!e.key)
						return;
					const t = e.key.toLowerCase();
					if (" " !== t && e.stopImmediatePropagation(),
					" " === t && e.altKey && (e.stopImmediatePropagation(),
					e.preventDefault()),
					"tab" === t)
						e.preventDefault(),
						this.$data._activeControl === this.$refs.cbLeft ? this.$data._activeControl = this.$refs.cbRight : this.$data._activeControl === this.$refs.cbRight && (this.$data._activeControl = this.$refs.cbLeft);
					else if (/^(arrowright)$/.test(t)) {
						if (e.preventDefault(),
						e.altKey)
							return void (this.inverse ? this.progressValue < this.startValue ? this.$emit("changeProgress", Math.min(this.startValue, this.progressValue + 100)) : this.$emit("changeProgress", Math.min(this.controlValue, this.progressValue + 100)) : this.$emit("changeProgress", Math.min(this.endValue, this.progressValue + 100)));
						this.$data._activeControl === this.$refs.cbLeft ? this.$emit("changeStart", Math.min(this.startValue + (e.ctrlKey ? 1e4 : e.shiftKey ? 1e3 : 100), this.endValue)) : this.$data._activeControl === this.$refs.cbRight && this.$emit("changeEnd", Math.min(this.endValue + (e.ctrlKey ? 1e4 : e.shiftKey ? 1e3 : 100), this.controlValue))
					} else if (/^(arrowleft)$/.test(t)) {
						if (e.preventDefault(),
						e.altKey)
							return void (this.inverse ? this.progressValue > this.endValue || this.progressValue < this.endValue && this.progressValue > this.startValue ? this.$emit("changeProgress", Math.max(this.endValue, this.progressValue - 100)) : this.$emit("changeProgress", Math.max(0, this.progressValue - 100)) : this.$emit("changeProgress", Math.max(this.startValue, this.progressValue - 100)));
						this.$data._activeControl === this.$refs.cbLeft ? this.$emit("changeStart", Math.max(0, this.startValue - (e.ctrlKey ? 1e4 : e.shiftKey ? 1e3 : 100))) : this.$data._activeControl === this.$refs.cbRight && this.$emit("changeEnd", Math.max(this.endValue - (e.ctrlKey ? 1e4 : e.shiftKey ? 1e3 : 100), this.startValue))
					} else if (/^(arrowup)$/.test(t)) {
						e.preventDefault();
						let t = e.ctrlKey ? 1e4 : e.shiftKey ? 1e3 : 100;
						this.endValue + t > this.controlValue && (t = this.controlValue - this.endValue),
						this.$emit("changeRange", {
							start: this.startValue + t,
							end: this.endValue + t
						})
					} else if (/^(arrowdown)$/.test(t)) {
						e.preventDefault();
						let t = e.ctrlKey ? 1e4 : e.shiftKey ? 1e3 : 100;
						this.startValue - t < 0 && (t = this.startValue),
						this.$emit("changeRange", {
							start: this.startValue - t,
							end: this.endValue - t
						})
					}
				},
				_handleMouseOver(e) {
					this.$data._wrapperCursor = "grab"
				},
				_handleMouseOut(e) {
					this.$data._wrapperCursor = ""
				},
				_handleClick(e) {
					if (this.$data._controlDragged)
						return void (this.$data._controlDragged = !1);
					if (e.target.closest(".progress-output"))
						return;
					const t = this.$el.getBoundingClientRect()
					  , i = this.$refs.cbLeft.getBoundingClientRect()
					  , n = this.$refs.cbRight.getBoundingClientRect()
					  , o = e.clientX - t.left
					  , a = (e.clientX - t.left) / t.width * this.controlValue;
					o >= 0 && o < i.left - t.left + i.width / 2 ? this.inverse ? this.$emit("changeProgress", a) : this.$emit("changeStart", a) : o <= t.width && o > n.right - t.left - n.width / 2 ? this.inverse ? this.$emit("changeProgress", a) : this.$emit("changeEnd", a) : this.inverse || this.$emit("changeProgress", a)
				},
				_handleControlMouseDown(e) {
					if (e.stopImmediatePropagation(),
					"ontouchstart"in document.documentElement && !e.changedTouches?.[0])
						return;
					if (this.$data._wrapperCursor = "move",
					e.target.closest(".progress-output"))
						return;
					const t = e.target.closest(".control-bar") || e.target.closest(".control-bars-wrapper");
					let i = !1;
					if (!t)
						return;
					this.$emit("control-start-drag"),
					this.$data._controlDragged = !0;
					const n = this.$el.getBoundingClientRect();
					let o = e.changedTouches?.[0]?.clientX ?? e.clientX
					  , a = -1;
					const r = t === this.$refs.controlsWrapper ? 0 : t === this.$refs.cbLeft ? -1 === this.$data._timeHintScale ? t.getBoundingClientRect().left - o : t.getBoundingClientRect().right - o : -1 === this.$data._timeHintScale ? t.getBoundingClientRect().right - o : t.getBoundingClientRect().left - o;
					let s = t === this.$refs.cbLeft || t === this.$refs.controlsWrapper ? parseFloat(this.$refs.controlsWrapper.style?.left || 0) : parseFloat(this.$refs.controlsWrapper.style?.right || 0);
					t !== this.$refs.cbLeft && t !== this.$refs.cbRight || (this.$data._activeControl = t);
					const l = this.endValue - this.startValue;
					let c = setInterval((()=>{
						const e = o + r;
						let c = -1 === a ? 0 : e - a;
						if (a !== o) {
							if (a = o,
							t === this.$refs.cbLeft) {
								const t = (e - n.left) / n.width * 100;
								s = Math.min(100 - (parseFloat(this.$refs.controlsWrapper.style?.right || 0) + 1) / n.width * 100, Math.max(0, t)),
								this.$emit("changeStart", this.controlValue * s / 100)
							} else if (t === this.$refs.cbRight) {
								const t = (e - n.right) / n.width * 100;
								s = Math.min(100 - (parseFloat(this.$refs.controlsWrapper.style?.left || 0) + 1) / n.width * 100, Math.max(0, -t)),
								this.$emit("changeEnd", this.controlValue * (100 - s) / 100)
							} else {
								if (0 === Math.abs(c))
									return;
								i = !0;
								let e = c / n.width * this.controlValue;
								this.startValue + e < 0 ? e = -this.startValue : this.startValue + e + l > this.controlValue && (e = this.controlValue - this.startValue - l);
								const t = this.startValue + e
								  , o = t + l;
								this.$emit("changeRange", {
									start: t,
									end: o
								})
							}
							this._updateControlsView()
						}
					}
					), 1e3 / 60);
					const d = e=>{
						t === this.$refs.controlsWrapper && (this.$data._wrapperCursor = "move"),
						o = Math.max(0, e.changedTouches?.[0]?.clientX ?? e.clientX)
					}
					  , u = ()=>{
						clearInterval(c),
						t === this.$refs.controlsWrapper && (this.$data._wrapperCursor = "grab",
						i || (this.$data._controlDragged = !1)),
						this.$emit("control-stop-drag"),
						document.removeEventListener("mousemove", d),
						document.removeEventListener("mouseup", u),
						document.removeEventListener("touchmove", d),
						document.removeEventListener("touchend", u),
						document.removeEventListener("touchcancel", u)
					}
					;
					"ontouchstart"in document.documentElement ? (document.addEventListener("touchmove", d),
					document.addEventListener("touchend", u),
					document.addEventListener("touchcancel", u)) : (document.addEventListener("mousemove", d),
					document.addEventListener("mouseup", u))
				},
				_updateControlsView() {
					const e = this.$refs.cbLeft.getBoundingClientRect()
					  , t = this.$refs.cbRight.getBoundingClientRect();
					Math.abs(e.left - t.left) < this.$refs.selectedRangeOutput.getBoundingClientRect().width + 15 ? this.$refs.selectedRangeOutput.style.visibility = "hidden" : this.$refs.selectedRangeOutput.style.visibility = "visible",
					Math.abs(e.left - t.left) < 60 ? (this.$refs.cbLeft.classList.add("padding-right"),
					this.$refs.cbRight.classList.add("padding-left")) : (this.$refs.cbLeft.classList.remove("padding-right"),
					this.$refs.cbRight.classList.remove("padding-left"))
				}
			},
			props: {
				controlValue: {
					type: Number,
					required: !0
				},
				startValue: {
					type: Number,
					required: !0
				},
				endValue: {
					type: Number,
					required: !0
				},
				progressValue: {
					type: Number,
					required: !0
				},
				parseFunction: {
					type: Function,
					default: function(e) {
						return e
					}
				},
				inverse: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				inverse: {
					handler(e) {
						this.$data._timeHintScale = e ? -1 : 1
					},
					immediate: !0
				},
				startValue: {
					handler(e) {
						this.$nextTick(this._updateControlsView)
					},
					immediate: !0
				},
				endValue: {
					handler() {
						this.$nextTick(this._updateControlsView)
					},
					immediate: !0
				}
			},
			computed: {
				step() {
					return 1 / this.controlValue * 100
				},
				selectedRangeValue() {
					return this.parseFunction(this.endValue - this.startValue)
				},
				value() {
					return this.parseFunction(this.progressValue)
				},
				progressLinePosition() {
					return this.step * this.progressValue + "%"
				},
				startX() {
					return this.startValue / this.controlValue * 100 + "%"
				},
				endX() {
					return `${100 - this.endValue / this.controlValue * 100 || 0}%`
				},
				leftMaskStyle() {
					return this.inverse ? {
						left: this.startX,
						width: 100 - parseFloat(this.startX) - parseFloat(this.endX) + "%"
					} : {
						width: this.startX
					}
				},
				rightMaskStyle() {
					return this.inverse ? {
						display: "none"
					} : {
						width: this.endX
					}
				},
				startActive() {
					return this.$data._activeControl && this.$data._activeControl === this.$refs.cbLeft
				},
				endActive() {
					return this.$data._activeControl && this.$data._activeControl === this.$refs.cbRight
				}
			}
		}
		  , q = X
		  , K = f(q, W, U, !1, null, "9fd19f7e", null)
		  , Y = K.exports
		  , J = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "component_storyboard"
			}, [t("div", {
				ref: "framesContainer",
				staticClass: "frames"
			}, e._l(e.frames, (function(i) {
				return t("div", {
					class: {
						frame: !0,
						loaded: i.loaded
					},
					style: {
						width: `${i.width}px`,
						height: `${i.height}px`
					}
				}, [t("img", {
					class: {
						loaded: i.loaded
					},
					attrs: {
						src: i.src
					},
					on: {
						load: function(t) {
							return e.handleFrameImageLoaded(i)
						}
					}
				})])
			}
			)), 0)])
		}
		  , Q = []
		  , Z = {
			name: "VideoStoryboard",
			props: {
				frames: {
					type: Array,
					default() {
						return []
					}
				}
			},
			mounted() {
				this.$el.dispatchEvent(new CustomEvent("storyboardReady",{
					detail: {
						el: this.$refs.framesContainer
					},
					bubbles: !0,
					cancelable: !0
				}))
			},
			methods: {
				handleFrameImageLoaded(e) {
					e.loaded = !0,
					URL.revokeObjectURL(e.src)
				},
				handleVideoFrameLoaded(e) {
					e.loaded = !0
				}
			},
			watch: {
				frames: {
					handler(e) {
						e.length && this.$refs.framesContainer && this.$nextTick((()=>{
							this.$refs.framesContainer.scrollLeft = (this.$refs.framesContainer.scrollWidth - this.$refs.framesContainer.clientWidth) / 2
						}
						))
					},
					immediate: !0
				}
			}
		}
		  , ee = Z
		  , te = f(ee, J, Q, !1, null, "55636fd2", null)
		  , ie = te.exports
		  , ne = {
			name: "VideoNavigation",
			components: {
				VideoStoryboard: ie,
				ControlBars: Y
			},
			data() {
				return {
					timeStripeLeft: 0,
					timeStripeVisible: !1,
					controlDragged: !1,
					lastMouseX: void 0,
					mouseMoveInterval: void 0,
					_endPlayTimeOffset: 0
				}
			},
			methods: {
				handleChangeStart(e) {
					this.$emit("changeBoundStart", e),
					e = Math.min(e / 1e3, this.GlobalModel.playData.cutTo - .1),
					this.GlobalModel.playData.cutFrom = e,
					this.GlobalModel.playData.playFrom = e,
					this.GlobalModel.playData.inverse ? (this.GlobalModel.playData.cutFromInverse0 = this.GlobalModel.playData.playFromInverse0 = 0,
					this.GlobalModel.playData.playToInverse0 = this.GlobalModel.playData.cutToInverse0 = e,
					this.MediaOutputProcessor.seek(Math.max(0, e - this.$data._endPlayTimeOffset))) : this.MediaOutputProcessor.seek(e)
				},
				handleChangeEnd(e, t=!0) {
					this.$emit("changeBoundEnd", e),
					this.MediaOutputProcessor.pause(),
					e = Math.max(e / 1e3, this.GlobalModel.playData.cutFrom + .1),
					this.GlobalModel.playData.cutTo = this.GlobalModel.playData.playTo = Math.min(e, this.GlobalModel.playData.fileDuration),
					this.GlobalModel.playData.inverse ? (this.GlobalModel.playData.cutFromInverse1 = this.GlobalModel.playData.playFromInverse1 = e,
					this.GlobalModel.playData.cutToInverse1 = this.GlobalModel.playData.playToInverse1 = this.GlobalModel.playData.fileDuration,
					t && this.MediaOutputProcessor.seek(e)) : t && this.MediaOutputProcessor.seek(Math.max(this.GlobalModel.playData.cutFrom, this.GlobalModel.playData.playTo - this.$data._endPlayTimeOffset))
				},
				handleChangeRange(e) {
					this.handleChangeStart(e.start),
					this.handleChangeEnd(e.end, !1)
				},
				handleChangeProgress(e) {
					this.MediaOutputProcessor.seek(e / 1e3)
				},
				handleMouseMove(e) {
					this.lastMouseX = e.clientX
				},
				handleControlStartDrag() {
					this.controlDragged = !0
				},
				handleControlStopDrag() {
					this.controlDragged = !1
				},
				handleMouseEnter() {
					this.timeStripeVisible = !0,
					this.mouseMoveInterval = setInterval((()=>{
						const e = this.$el.getBoundingClientRect();
						this.timeStripeLeft = (this.lastMouseX - e.left) / e.width * 100 + "%"
					}
					), 1e3 / 60)
				},
				handleMouseLeave() {
					this.timeStripeVisible = !1,
					clearInterval(this.mouseMoveInterval)
				}
			},
			beforeDestroy() {
				clearInterval(this.mouseMoveInterval)
			},
			props: {
				controlBarsParseFunction: {
					type: Function,
					default: function(e) {
						return this.$parseTime(e, this.GlobalModel.mediaInfo?.duration > 3600)
					}
				},
				showTimeStripe: {
					type: Boolean,
					default: !0
				}
			},
			computed: {
				timeStripeVal() {
					try {
						return this.controlBarsParseFunction?.(parseFloat(this.timeStripeLeft) / 100 * this.GlobalModel.playData.fileDuration * 1e3) || 0
					} catch (e) {
						return 0
					}
				},
				timeStripeVisibility() {
					return this.showTimeStripe && this.timeStripeVisible && !this.controlDragged ? "visible" : "hidden"
				}
			}
		}
		  , oe = ne
		  , ae = f(oe, V, H, !1, null, "30158158", null)
		  , re = ae.exports
		  , se = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "component_video-player"
			}, [t("video", {
				ref: "video",
				attrs: {
					crossorigin: "anonymous",
					playsinline: "playsinline",
					preload: "metadata",
					"data-prevent-html2-canvas": ""
				}
			})])
		}
		  , le = []
		  , ce = {
			name: "VideoDisplay",
			props: {
				videoUrl: {
					type: String
				}
			},
			mounted() {
				this.$el.dispatchEvent(new CustomEvent("videoDisplayReady",{
					bubbles: !0,
					cancelable: !0,
					detail: {
						el: this
					}
				}))
			},
			methods: {
				getVideo() {
					return this.$refs.video
				},
				getContainer() {
					return this.$el
				}
			}
		}
		  , de = ce
		  , ue = f(de, se, le, !1, null, "28a7ee80", null)
		  , he = ue.exports
		  , pe = {
			name: "VideoControls",
			components: {
				VideoDisplay: he,
				VideoNavigation: re
			},
			data() {
				return {
					_framesContainer: null,
					_activeWindowSize: {
						width: window.innerWidth,
						height: window.innerHeight
					},
					_frameHeight: 50,
					_ready: !1
				}
			},
			mounted() {
				window.addEventListener("resize", this.resizeHandler);
				const e = this.$watch("availHeight", (t=>{
					t && (this.$el.dispatchEvent(new CustomEvent("workAreaReady",{
						detail: {
							el: this.$refs.workArea
						},
						bubbles: !0,
						cancelable: !0
					})),
					this.$nextTick((()=>{
						e()
					}
					)))
				}
				), {
					immediate: !0
				});
				this.$data._ready = !0
			},
			beforeDestroy() {
				window.removeEventListener("resize", this.resizeHandler)
			},
			watch: {
				"GlobalModel.mediaInfo.url": {
					handler(e) {
						e && this.generateFrames()
					},
					immediate: !0
				}
			},
			methods: {
				handleStoryboardReady(e) {
					this.$data._framesContainer = e.detail.el,
					this.generateFrames()
				},
				handleVideoDisplayReady(e) {
					this.MediaOutputProcessor.videoDisplay = e.detail.el
				},
				generateFrames() {
					this.GlobalModel.mediaInfo.url && this.$data._framesContainer && this.MediaOutputProcessor.generateFrames({
						containerWidth: this.$data._framesContainer.getBoundingClientRect().width,
						videoDuration: this.GlobalModel.mediaInfo.duration,
						frameWidth: this.frameWidth,
						frameHeight: this.$data._frameHeight,
						videoUrl: this.GlobalModel.mediaInfo.url,
						localMode: this.GlobalModel.mediaInfo.browserSupported,
						remoteThumbsUrl: this.$remoteThumbsUrl.replace("remote_filename", this.GlobalModel.mediaInfo.remoteFileName),
						file: this.GlobalModel.file,
						callback: e=>{
							"framesNumber" === e.type ? this.GlobalModel.mediaInfo.frames = {
								framesNumber: e.framesNumber,
								frameWidth: this.frameWidth,
								frameHeight: this.$data._frameHeight
							} : "frame" === e.type && (this.GlobalModel.mediaInfo.frames[e.index].src = e.frame,
							this.GlobalModel.mediaInfo.frames[e.index].local = this.GlobalModel.mediaInfo.browserSupported)
						}
					})
				},
				resizeHandler(e) {
					null != e && (Math.abs(this.$data._activeWindowSize.width - window.innerWidth) <= 1 || window.innerWidth < this.$data._framesContainer.getBoundingClientRect().width) || (this.$data._activeWindowSize.width = window.innerWidth,
					this.$data._activeWindowSize.height = window.innerHeight,
					this.generateFrames())
				}
			},
			computed: {
				frameWidth() {
					return 2 * Math.round(this.$data._frameHeight * this.GlobalModel.mediaInfo.dar / 2)
				},
				availWidth() {
					return parseInt(this.availHeight) * this.GlobalModel.mediaInfo.dar + "px"
				},
				availHeight() {
					if (this.$data._ready) {
						let e = Math.min(360, this.GlobalModel.mediaInfo.previewHeight);
						const t = this.$el.getBoundingClientRect();
						return e * this.GlobalModel.mediaInfo.dar > t.width && (e = t.width / this.GlobalModel.mediaInfo.dar),
						`${e}px`
					}
					return 0
				}
			}
		}
		  , fe = pe
		  , me = f(fe, z, G, !1, null, "13046fd4", null)
		  , ve = me.exports
		  , ge = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool_cut"
			}, [t("div", {
				staticClass: "time-steppers"
			}, [t("time-stepper", {
				ref: "timeStepperStart",
				staticClass: "time-stepper",
				attrs: {
					"default-value": e.timeDataFrom,
					"min-value": 0,
					"max-value": e.timeDataTo - 100,
					"mode-mobile": e.isMobile,
					"show-hours": 1e3 * e.GlobalModel.playData.fileDuration >= 36e5
				},
				on: {
					timeChange: e.handleTimeFromChange,
					maxBound: e.handleMaxBound
				}
			}), t("div", {
				staticClass: "m-dash"
			}, [e._v("—")]), t("time-stepper", {
				ref: "timeStepperEnd",
				staticClass: "time-stepper",
				attrs: {
					"default-value": e.timeDataTo,
					"min-value": e.timeDataFrom,
					"max-value": e.timeTotal,
					"mode-mobile": e.isMobile,
					"show-hours": 1e3 * e.GlobalModel.playData.fileDuration >= 36e5
				},
				on: {
					timeChange: e.handleTimeToChange,
					minBound: e.handleMinBound
				}
			})], 1), t("el-checkbox-button", {
				staticClass: "inverse",
				attrs: {
					label: "inverse"
				},
				on: {
					change: e.handleInverseChange
				},
				model: {
					value: e.inverse,
					callback: function(t) {
						e.inverse = t
					},
					expression: "inverse"
				}
			}, [t("el-popover", {
				attrs: {
					trigger: "hover",
					placement: "top",
					"visible-arrow": !1,
					"popper-class": "fade visible pop-inverse",
					"close-delay": 100,
					"open-delay": 33
				},
				model: {
					value: e.inverseTooltipVisible,
					callback: function(t) {
						e.inverseTooltipVisible = t
					},
					expression: "inverseTooltipVisible"
				}
			}, [t("div", {
				staticClass: "pop-inner"
			}, [e._v(" " + e._s(e.$langs.invert_selection) + " ")]), t("div", {
				attrs: {
					slot: "reference"
				},
				slot: "reference"
			}, [t("i")])])], 1)], 1)
		}
		  , be = []
		  , _e = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared--components-time_stepper"
			}, [t("div", {
				staticClass: "time"
			}, [t("div", {
				class: {
					hours: !0,
					section: !0,
					hide: !e.showHours
				}
			}, [t("stepper", {
				ref: "input0",
				staticClass: "input-hours",
				attrs: {
					"min-value": 0,
					"max-value": 24,
					"min-length": 1,
					"max-length": 2,
					"use-external-check": !0,
					model: e.fieldsValues[0],
					"mode-mobile": e.modeMobile
				},
				on: {
					change: e.handleHoursChange,
					leftBound: function(t) {
						return e.handleLeftBound(1)
					},
					rightBound: function(t) {
						return e.handleRightBound(0)
					},
					tabPressed: function(t) {
						return e.handleTabPressed(0)
					},
					beforeChange: function(t) {
						return e.handleBeforeChange(t, 0)
					},
					selected: function(t) {
						return e.handleSelect(0)
					}
				}
			}), t("span", [e._v(":")])], 1), t("div", {
				staticClass: "minutes section"
			}, [t("stepper", {
				ref: "input1",
				staticClass: "input-minutes",
				attrs: {
					"min-value": 0,
					"max-value": 59,
					"min-length": 2,
					"max-length": 2,
					"use-external-check": !0,
					model: e.fieldsValues[1],
					"mode-mobile": e.modeMobile
				},
				on: {
					change: e.handleMinutesChange,
					rightBound: function(t) {
						return e.handleRightBound(1)
					},
					leftBound: function(t) {
						return e.handleLeftBound(1)
					},
					tabPressed: function(t) {
						return e.handleTabPressed(1)
					},
					beforeChange: function(t) {
						return e.handleBeforeChange(t, 1)
					},
					selected: function(t) {
						return e.handleSelect(1)
					}
				}
			}), t("span", [e._v(":")])], 1), t("div", {
				staticClass: "seconds section"
			}, [t("stepper", {
				ref: "input2",
				staticClass: "input-seconds",
				attrs: {
					"min-value": 0,
					"max-value": 59,
					"min-length": 2,
					"max-length": 2,
					"use-external-check": !0,
					model: e.fieldsValues[2],
					"mode-mobile": e.modeMobile
				},
				on: {
					change: e.handleSecondsChange,
					rightBound: function(t) {
						return e.handleRightBound(2)
					},
					leftBound: function(t) {
						return e.handleLeftBound(2)
					},
					tabPressed: function(t) {
						return e.handleTabPressed(2)
					},
					beforeChange: function(t) {
						return e.handleBeforeChange(t, 2)
					},
					selected: function(t) {
						return e.handleSelect(2)
					}
				}
			}), t("span", [e._v(".")])], 1), t("div", {
				staticClass: "milliseconds section"
			}, [t("stepper", {
				ref: "input3",
				staticClass: "input-milliseconds",
				attrs: {
					"min-value": 0,
					"max-value": 9,
					"min-length": 1,
					"max-length": 1,
					"use-external-check": !0,
					model: e.fieldsValues[3],
					"mode-mobile": e.modeMobile
				},
				on: {
					leftBound: function(t) {
						return e.handleLeftBound(3)
					},
					rightBound: function(t) {
						return e.handleRightBound(3)
					},
					tabPressed: function(t) {
						return e.handleTabPressed(3)
					},
					change: e.handleMillisecondsChange,
					beforeChange: function(t) {
						return e.handleBeforeChange(t, 3)
					},
					selected: function(t) {
						return e.handleSelect(3)
					}
				}
			})], 1)]), t("div", {
				staticClass: "arrows"
			}, [t("div", {
				staticClass: "arrow-up arrow",
				on: {
					mousedown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e.changeTime("up")
					}
				}
			}), t("div", {
				staticClass: "arrow-down arrow",
				on: {
					mousedown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e.changeTime("down")
					}
				}
			})])])
		}
		  , ye = []
		  , we = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "c-stepper"
			}, [t("div", {
				class: ["arrow", "arrow-up", {
					hidden: !e.showArrows
				}]
			}), t("span", {
				ref: "input",
				staticClass: "input",
				attrs: {
					contenteditable: "true",
					inputmode: "numeric"
				},
				domProps: {
					textContent: e._s(e.value)
				},
				on: {
					keydown: e.handleInputKeyDown,
					mousedown: e.handleInputMouseDown,
					focus: e.handleInputFocus,
					blur: e.handleBlur
				}
			}), t("div", {
				class: ["arrow", "arrow-down", {
					hidden: !e.showArrows
				}]
			})])
		}
		  , xe = []
		  , Ce = {
			name: "Stepper",
			data() {
				return {
					_value: 0,
					_tmpValue: 0
				}
			},
			props: {
				model: {
					type: Number,
					default: 0
				},
				minValue: {
					type: Number,
					default: 0
				},
				maxValue: {
					type: Number,
					default: 0
				},
				step: {
					type: Number,
					default: 1
				},
				minLength: {
					type: Number,
					default: 1
				},
				maxLength: {
					type: Number,
					default: 1
				},
				showArrows: {
					type: Boolean,
					default: !1
				},
				padLeft: {
					type: Boolean,
					default: !1
				},
				useExternalCheck: {
					type: Boolean,
					default: !1
				},
				modeMobile: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				model: {
					handler(e) {
						this.$data._value = e
					},
					immediate: !0
				}
			},
			methods: {
				_padLeft(e) {
					e = (e || "").toString();
					while (e.length < this.minLength)
						e = "0" + e;
					return e.trim()
				},
				handleInputKeyDown(e) {
					const t = e.key.toLowerCase();
					if (" " !== t && e.stopImmediatePropagation(),
					"tab" === t && (e.preventDefault(),
					this.$emit("tabPressed")),
					"enter" === t && (e.preventDefault(),
					this.modeMobile && this._updateInMobileMode(!0)),
					!this.modeMobile)
						if (/^[0-9]$/.test(t)) {
							e.preventDefault();
							let i = parseInt(t);
							if (1 === this.maxLength) {
								if (i <= this.maxValue && i >= this.minValue) {
									const e = e=>{
										e && (this.value = i),
										this.select()
									}
									;
									this.useExternalCheck ? this.$emit("beforeChange", {
										val: i,
										callback: e,
										maxLength: this.maxLength
									}) : e(!0)
								}
							} else {
								this.$data._tmpValue = `${this.$data._tmpValue}${i}`.slice(-this.maxLength),
								parseInt(this.$data._tmpValue) > this.maxValue && (this.$data._tmpValue = `0${i}`.slice(-this.maxLength));
								const e = parseInt(this.$data._tmpValue)
								  , t = (t,i)=>{
									t && (this.value = e),
									i || (this.$data._tmpValue = 0),
									this.select()
								}
								;
								this.useExternalCheck ? this.$emit("beforeChange", {
									val: e,
									callback: t,
									maxLength: this.maxLength
								}) : t(!0, !0)
							}
						} else if (/^(arrowright)$/.test(t))
							e.preventDefault(),
							this.$emit("rightBound");
						else if (/^(arrowleft)$/.test(t))
							e.preventDefault(),
							this.$emit("leftBound");
						else if (/^(arrowup)$/.test(t)) {
							e.preventDefault();
							const t = parseInt(this.value) + 1
							  , i = e=>{
								e && (this.value = t,
								this.select())
							}
							;
							this.useExternalCheck ? this.$emit("beforeChange", {
								val: t,
								callback: i
							}) : i(!0)
						} else if (/^(arrowdown)$/.test(t)) {
							e.preventDefault();
							const t = Math.max(this.minValue, parseInt(this.value) - 1)
							  , i = e=>{
								e && (this.value = t,
								this.select())
							}
							;
							this.useExternalCheck ? this.$emit("beforeChange", {
								val: t,
								callback: i
							}) : i(!0)
						} else if (/^(backspace)$/.test(t)) {
							e.preventDefault();
							const t = (e,t)=>{
								this.value = e ? this.minValue : t
							}
							;
							this.useExternalCheck ? this.$emit("beforeChange", {
								val: this.minValue,
								callback: t,
								requestAllowed: !0
							}) : t(!0),
							this.$emit("leftBound")
						} else if (/^(delete)$/.test(t)) {
							e.preventDefault();
							const t = (e,t)=>{
								this.value = e ? this.minValue : t,
								this.select()
							}
							;
							this.useExternalCheck ? this.$emit("beforeChange", {
								val: this.minValue,
								callback: t,
								requestAllowed: !0
							}) : t(!0)
						} else
							e.preventDefault()
				},
				handleInputMouseDown(e) {
					e.preventDefault(),
					this.$refs.input.focus()
				},
				handleInputFocus() {
					this.$data._tmpValue = 0,
					this.select(),
					this.$emit("selected")
				},
				select() {
					this.$nextTick((()=>{
						const e = window.getSelection();
						e.removeAllRanges();
						try {
							const t = document.createRange();
							t.selectNodeContents(this.$refs.input.firstChild),
							e.addRange(t)
						} catch (t) {}
					}
					))
				},
				_updateInMobileMode(e=!1) {
					const t = parseInt(this.$refs.input.textContent.trim().slice(0, this.maxLength)) || 0
					  , i = (i,n)=>{
						this.value = -1,
						this.$nextTick((()=>{
							this.value = i ? t : n,
							e && this.select()
						}
						))
					}
					;
					this.useExternalCheck ? this.$emit("beforeChange", {
						val: t,
						callback: i,
						requestAllowed: !0
					}) : i(!0)
				},
				handleBlur() {
					if (!this.modeMobile)
						return;
					const e = window.getSelection();
					e.removeAllRanges(),
					this._updateInMobileMode()
				},
				focus() {
					this.$refs.input.focus()
				}
			},
			computed: {
				value: {
					get() {
						return -1 === this.$data._value ? "" : this._padLeft(this.$data._value)
					},
					set(e) {
						-1 !== e ? e < this.minValue || e > this.maxValue || (this.$data._value = parseInt(e),
						this.$emit("change", this.$data._value)) : this.$data._value = -1
					}
				}
			}
		}
		  , $e = Ce
		  , Se = f($e, we, xe, !1, null, "4e6004b6", null)
		  , ke = Se.exports
		  , Te = {
			name: "TimeStepper",
			components: {
				Stepper: ke
			},
			data() {
				return {
					_interval: void 0,
					_activeFieldIndex: 3
				}
			},
			mounted() {},
			props: {
				maxValue: {
					type: Number,
					default: 0
				},
				minValue: {
					type: Number,
					default: 0
				},
				defaultValue: {
					type: Number,
					default: 0
				},
				showHours: {
					type: Boolean,
					default: !1
				},
				modeMobile: {
					type: Boolean,
					default: !1
				}
			},
			methods: {
				handleHoursChange(e) {
					this.value.setUTCHours(e),
					this.$emit("timeChange", this.value)
				},
				handleMinutesChange(e) {
					this.value.setUTCMinutes(e),
					this.$emit("timeChange", this.value)
				},
				handleSecondsChange(e) {
					this.value.setUTCSeconds(e),
					this.$emit("timeChange", this.value)
				},
				handleMillisecondsChange(e) {
					this.value.setUTCMilliseconds(100 * e),
					this.$emit("timeChange", this.value)
				},
				handleLeftBound(e) {
					this.$refs["input" + (e - 1)]?.focus(),
					(!this.showHours && e - 1 === 0 || this.showHours && e - 1 < 0) && this.$emit("minBound")
				},
				handleRightBound(e) {
					this.$refs[`input${e + 1}`]?.focus(),
					e + 1 > 3 && this.$emit("maxBound")
				},
				handleTabPressed(e) {
					++e < 4 ? this.$refs[`input${e}`].focus() : this.$emit("maxBound")
				},
				handleBeforeChange(e, t) {
					const i = new Date(this.value.getTime());
					switch (t) {
					case 0:
						i.setUTCHours(e.val);
						break;
					case 1:
						i.setUTCMinutes(e.val);
						break;
					case 2:
						i.setUTCSeconds(e.val);
						break;
					case 3:
						i.setUTCMilliseconds(100 * e.val);
						break
					}
					const n = ()=>{
						if (`${e.val}`.length < e.maxLength)
							return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].some((i=>{
								const n = new Date(this.value.getTime());
								switch (t) {
								case 0:
									n.setUTCHours(parseInt(`${e.val}${i}`));
									break;
								case 1:
									n.setUTCMinutes(parseInt(`${e.val}${i}`));
									break;
								case 2:
									n.setUTCSeconds(parseInt(`${e.val}${i}`));
									break;
								case 3:
									n.setUTCMilliseconds(parseInt(`${100 * e.val}${i}`));
									break
								}
								return n.getTime() >= this.minValue && n.getTime() <= this.maxValue
							}
							))
					}
					;
					if (e.requestAllowed)
						if (i.getTime() >= this.minValue && i.getTime() <= this.maxValue)
							e.callback(!0);
						else {
							const n = new Date(null);
							let o;
							switch (n.setUTCMilliseconds(i.getTime() < this.minValue ? this.minValue : this.maxValue),
							t) {
							case 0:
								o = n.getUTCHours();
								break;
							case 1:
								o = n.getUTCMinutes();
								break;
							case 2:
								o = n.getUTCSeconds();
								break;
							case 3:
								o = n.getUTCMilliseconds() / 100;
								break
							}
							e.callback(!1, o)
						}
					else
						i.getTime() >= this.minValue && i.getTime() <= this.maxValue ? e.callback(!0, n()) : e.callback(!1, n())
				},
				selectInput(e) {
					this.$refs[`input${e}`]?.focus()
				},
				changeTime(e) {
					const t = ()=>{
						let t = 3 === this.$data._activeFieldIndex ? 1 : 10 * Math.pow(60, 2 - this.$data._activeFieldIndex);
						if ("up" === e) {
							const e = this.value.getTime() + 100 * t;
							e <= this.maxValue && this.$emit("timeChange", e)
						} else {
							const e = this.value.getTime() - 100 * t;
							e >= this.minValue && this.$emit("timeChange", e)
						}
						this.$refs[`input${this.$data._activeFieldIndex}`].select()
					}
					;
					this.$data._interval = setInterval((()=>{
						t()
					}
					), 150),
					t();
					const i = ()=>{
						clearInterval(this.$data._interval),
						document.removeEventListener("mouseup", i)
					}
					;
					document.addEventListener("mouseup", i)
				},
				handleSelect(e) {
					this.$data._activeFieldIndex = e
				}
			},
			computed: {
				value() {
					const e = new Date(null);
					return e.setUTCMilliseconds(this.defaultValue),
					e
				},
				fieldsValues() {
					return this.value.toISOString().substring(11, 21).split(/[:.]/g).map((e=>parseInt(e)))
				}
			}
		}
		  , Me = Te
		  , Ee = f(Me, _e, ye, !1, null, "7d8cb63c", null)
		  , Oe = Ee.exports
		  , Ae = function() {
			var e = this
			  , t = e._self._c;
			return t("div", [e._t("default")], 2)
		}
		  , Ie = []
		  , Fe = {
			name: "ToolView",
			methods: {
				notifyActivate() {
					this.$el?.dispatchEvent(new CustomEvent("activate",{
						bubbles: !0,
						cancelable: !0,
						detail: {
							toolView: this
						}
					}))
				},
				reset() {}
			}
		}
		  , De = Fe
		  , Re = f(De, Ae, Ie, !1, null, "5b63234a", null)
		  , Pe = Re.exports
		  , Le = {
			name: "SettingsCut",
			components: {
				TimeStepper: Oe
			},
			extends: Pe,
			data() {
				return {
					inverseTooltipVisible: !1,
					inverse: !1,
					_endPlayTimeOffset: 0
				}
			},
			mounted() {
				this.notifyActivate()
			},
			methods: {
				handleTimeFromChange(e) {
					e = Math.min(e / 1e3, this.GlobalModel.playData.cutTo - .1),
					this.GlobalModel.playData.cutFrom = e,
					this.GlobalModel.playData.playFrom = e,
					this.GlobalModel.playData.inverse ? (this.GlobalModel.playData.cutFromInverse0 = this.GlobalModel.playData.playFromInverse0 = 0,
					this.GlobalModel.playData.playToInverse0 = this.GlobalModel.playData.cutToInverse0 = e,
					this.MediaOutputProcessor.seek(Math.max(0, e - this.$data._endPlayTimeOffset))) : this.MediaOutputProcessor.seek(e)
				},
				handleTimeToChange(e, t=!0) {
					e = Math.max(e / 1e3, this.GlobalModel.playData.cutFrom + .1),
					this.MediaOutputProcessor.pause(),
					this.GlobalModel.playData.cutTo = this.GlobalModel.playData.playTo = Math.min(e, this.GlobalModel.playData.fileDuration),
					this.GlobalModel.playData.inverse ? (this.GlobalModel.playData.cutFromInverse1 = this.GlobalModel.playData.playFromInverse1 = e,
					this.GlobalModel.playData.cutToInverse1 = this.GlobalModel.playData.playToInverse1 = this.GlobalModel.playData.fileDuration,
					t && this.MediaOutputProcessor.seek(e)) : t && this.MediaOutputProcessor.seek(Math.max(this.GlobalModel.playData.cutFrom, this.GlobalModel.playData.playTo - this.$data._endPlayTimeOffset))
				},
				handleInverseChange(e) {
					this.GlobalModel.playData.inverse = e,
					e ? this.MediaOutputProcessor.seek(this.GlobalModel.playData.playToInverse0 - this.$data._endPlayTimeOffset) : this.MediaOutputProcessor.seek(this.GlobalModel.playData.playFrom)
				},
				handleMaxBound() {
					this.$refs.timeStepperEnd.selectInput(1e3 * this.GlobalModel.playData.fileDuration >= 36e5 ? 0 : 1)
				},
				handleMinBound() {
					this.$refs.timeStepperStart.selectInput(3)
				},
				reset() {
					this.inverse = !1,
					this.GlobalModel.playData.cutFrom = 0,
					this.GlobalModel.playData.cutTo = this.GlobalModel.playData.fileDuration,
					this.GlobalModel.playData.playFrom = 0,
					this.handleInverseChange(this.inverse)
				}
			},
			computed: {
				timeDataFrom: {
					get: function() {
						return 1e3 * this.GlobalModel.playData.cutFrom
					}
				},
				timeDataTo: {
					get: function() {
						return 1e3 * this.GlobalModel.playData.cutTo
					}
				},
				timeTotal() {
					return 1e3 * this.GlobalModel.playData.fileDuration
				}
			}
		}
		  , Be = Le
		  , Ne = f(Be, ge, be, !1, null, "f95e4e9a", null)
		  , je = Ne.exports
		  , ze = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool-crop"
			}, [t("crop-rect", {
				ref: "cropRect",
				attrs: {
					ratio: e.$data._activeRatioValue,
					rootContainer: e.workArea,
					target: e.target,
					"show-mask": e.showMask,
					"show-selection": e.showSelection,
					"original-target-size": e.originalTargetSize
				},
				on: {
					cropRectReady: e.handleCropRectReady
				},
				nativeOn: {
					ratioChanged: function(t) {
						return e.handleCropRatioChange.apply(null, arguments)
					},
					cropRectChange: function(t) {
						return e.handleCropRectChange.apply(null, arguments)
					},
					cropRectChangeExternal: function(t) {
						return e.handleCropRectChangeExternal.apply(null, arguments)
					}
				}
			}), e.showTools ? [t("el-radio-group", {
				on: {
					change: e.handleRatioChange
				},
				model: {
					value: e.$data._activeRatio,
					callback: function(t) {
						e.$set(e.$data, "_activeRatio", t)
					},
					expression: "$data._activeRatio"
				}
			}, e._l(e.computedRatios, (function(i, n) {
				return t("el-radio-button", {
					key: i.name,
					class: ["crop-item", {
						last: n === e.computedRatios.length - 1
					}],
					attrs: {
						label: i.name
					}
				}, [t("div", {
					class: {
						content: !0,
						"has-suffix": !!i.suffix
					}
				}, [t("span", {
					staticClass: "label"
				}, [e._v(e._s(i.label))]), t("span", {
					staticClass: "suffix"
				}, [e._v(e._s(i.suffix))])])])
			}
			)), 1), t("div", {
				class: ["crop-item-custom", {
					active: e.$data._customItemActive
				}],
				on: {
					click: e.handleCustomItemClick
				}
			}, [t("span", {
				staticClass: "label"
			}, [e._v(e._s(e.computedLangs.tool_loop_custom))]), t("div", {
				staticClass: "block-input"
			}, [t("div", {
				staticClass: "content"
			}, [t("numeric-input", {
				attrs: {
					model: e.$data._cropRatio.width,
					"allow-dot": !0,
					"min-value": "0.1"
				},
				on: {
					change: e.handleCropRatioWidthChange
				}
			}), t("span", [e._v(":")]), t("numeric-input", {
				attrs: {
					model: e.$data._cropRatio.height,
					"allow-dot": !0,
					"min-value": "0.1"
				},
				on: {
					change: e.handleCropRatioHeightChange
				}
			})], 1)])]), t("div", {
				staticClass: "block-input resolution"
			}, [t("numeric-input", {
				attrs: {
					model: e.$data._cropSize.width,
					"max-value": e.originalTargetSize.width,
					"min-value": "1",
					"round-to-even": !0
				},
				on: {
					change: e.handleCropWidthChange
				}
			}), t("span", [e._v("px")]), t("i"), t("numeric-input", {
				attrs: {
					model: e.$data._cropSize.height,
					"max-value": e.originalTargetSize.height,
					"min-value": "1",
					"round-to-even": !0
				},
				on: {
					change: e.handleCropHeightChange
				}
			}), t("span", [e._v("px")])], 1)] : e._e()], 2)
		}
		  , Ge = [];
		class Ve {
			static get MODE_NONE() {
				return "none"
			}
			static get MODE_FULL() {
				return "full"
			}
			static get MODE_MASK() {
				return "mask"
			}
		}
		var He = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				ref: "element",
				class: ["components_croprect", {
					"show-area-only": e.showAreaOnly
				}],
				style: e.componentStyles
			}, [e._l(4, (function(i) {
				return t("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: e.showMask,
						expression: "showMask"
					}],
					key: i,
					staticClass: "mask",
					attrs: {
						"data-index": i
					}
				})
			}
			)), t("selection", {
				ref: "selection",
				style: e.selectionStyles,
				attrs: {
					ratio: e.computedRatio,
					"selection-bounds": e.$data._selectionBounds,
					"show-grid": e.showGrid,
					"show-area": e.showArea,
					"limit-width": e.$data._limitBounds.width,
					"limit-height": e.$data._limitBounds.height,
					rotation: e.rotation,
					"show-remove": e.showSelectionRemove,
					"show-rotate": e.showSelectionRotate,
					"show-middle-controls": e.showMiddleControls,
					"min-crop-size": e.minCropSize
				},
				on: {
					updateBounds: e.handleUpdateBounds
				},
				nativeOn: {
					requestRemove: function(t) {
						return e._handleRequestRemove.apply(null, arguments)
					}
				}
			})], 2)
		}
		  , We = []
		  , Ue = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "components_selection",
				style: {
					left: this.leftD,
					top: this.topD,
					right: this.rightD,
					bottom: this.bottomD,
					transform: e.localTransform
				},
				attrs: {
					"data-show-grid": e.showGrid,
					"data-show-area": e.showArea
				}
			}, [e._l(8, (function(i) {
				return t("div", {
					class: {
						"crop-control": !0,
						hidden: !e.showMiddleControls && i % 2 === 0
					},
					attrs: {
						"data-index": i
					}
				})
			}
			)), e.showRotate ? t("div", {
				staticClass: "rotate-control crop-control",
				attrs: {
					"data-index": "9"
				}
			}) : e._e(), e.showRemove ? t("div", {
				staticClass: "remove-control crop-control",
				attrs: {
					"data-index": "10"
				}
			}) : e._e()], 2)
		}
		  , Xe = []
		  , qe = {
			name: "Selection",
			data() {
				return {
					_limitBounds: {
						left: 0,
						top: 0,
						right: 0,
						bottom: 0
					},
					_selectionBounds: {
						left: 0,
						right: 0,
						top: 0,
						bottom: 0
					},
					_initialBounds: null,
					_localRotation: 0,
					_ratio: 1,
					_rotation: 0,
					_mouseDownHandler: null
				}
			},
			props: {
				minCropSize: {
					type: Number,
					default: 1
				},
				ratio: {
					type: Number,
					default: 1
				},
				selectionBounds: {
					type: Object,
					default() {
						return {
							left: 0,
							top: 0,
							right: 0,
							bottom: 0
						}
					}
				},
				limitWidth: {
					type: Number,
					default: Number.MAX_SAFE_INTEGER
				},
				limitHeight: {
					type: Number,
					default: Number.MAX_SAFE_INTEGER
				},
				limitBounds: {
					type: Object,
					default() {
						return {
							left: 0,
							top: 0,
							right: 0,
							bottom: 0
						}
					}
				},
				showGrid: {
					type: Boolean,
					default: !0
				},
				showArea: {
					type: Boolean,
					default: !1
				},
				rotation: {
					type: Number,
					default: 0
				},
				showRotate: {
					type: Boolean,
					default: !1
				},
				showRemove: {
					type: Boolean,
					default: !1
				},
				showMiddleControls: {
					type: Boolean,
					default: !0
				}
			},
			watch: {
				limitBounds: {
					handler(e) {
						Object.assign(this.$data._limitBounds, e)
					},
					immediate: !0,
					deep: !0
				},
				selectionBounds: {
					handler(e) {
						Object.assign(this.$data._selectionBounds, e)
					},
					immediate: !0,
					deep: !0
				},
				ratio: {
					handler(e) {
						this.$data._ratio = e
					},
					immediate: !0
				},
				rotation: {
					handler(e) {
						this.$data._rotation = e
					}
				}
			},
			computed: {
				top: {
					set(e) {
						this.$data._selectionBounds.top = parseFloat(e) || 0
					},
					get(e) {
						return parseFloat(this.$data._selectionBounds.top) || 0
					}
				},
				left: {
					set(e) {
						this.$data._selectionBounds.left = parseFloat(e) || 0
					},
					get(e) {
						return parseFloat(this.$data._selectionBounds.left) || 0
					}
				},
				bottom: {
					set(e) {
						this.$data._selectionBounds.bottom = parseFloat(e) || 0
					},
					get(e) {
						return parseFloat(this.$data._selectionBounds.bottom) || 0
					}
				},
				right: {
					set(e) {
						this.$data._selectionBounds.right = parseFloat(e) || 0
					},
					get(e) {
						return parseFloat(this.$data._selectionBounds.right) || 0
					}
				},
				localTransform() {
					return 0 === this.$data._localRotation ? "initial" : `rotate(${this.$data._localRotation}deg)`
				},
				limitLeft() {
					return parseFloat(this.$data._limitBounds.left)
				},
				limitRight() {
					return parseFloat(this.$data._limitBounds.right)
				},
				limitTop() {
					return parseFloat(this.$data._limitBounds.top)
				},
				limitBottom() {
					return parseFloat(this.$data._limitBounds.bottom)
				},
				topD() {
					return `${this.top}px`
				},
				leftD() {
					return `${this.left}px`
				},
				rightD() {
					return `${this.right}px`
				},
				bottomD() {
					return `${this.bottom}px`
				},
				useTouches() {
					return "ontouchstart"in document.documentElement
				}
			},
			mounted() {
				let e, t, i;
				this.$el.dispatchEvent(new CustomEvent("SelectionReady",{
					bubbles: !0,
					cancelable: !0
				}));
				let n = {
					x: -1,
					y: -1
				}
				  , o = "initial";
				const a = ()=>{
					const e = this.$el.getBoundingClientRect();
					this.$data._ratio = e.width / e.height,
					this.$el.dispatchEvent(new CustomEvent("ratioChanged",{
						bubbles: !0,
						cancelable: !0,
						detail: {
							bounds: e.toJSON(),
							value: this.$data._ratio
						}
					}))
				}
				  , r = e=>{
					e.preventDefault(),
					n = {
						x: e.changedTouches?.[0]?.clientX ?? e.pageX,
						y: e.changedTouches?.[0]?.clientY ?? e.pageY
					}
				}
				  , s = ()=>{
					let i = n.x - e.x
					  , r = n.y - e.y;
					if (0 !== i || 0 !== r) {
						switch (t) {
						case 0:
							e.left + i < this.limitLeft && (i = this.limitLeft - e.left),
							e.top + r < this.limitTop && (r = this.limitTop - e.top),
							e.right - i < this.limitRight && (i = e.right - this.limitRight),
							e.bottom - r < this.limitBottom && (r = e.bottom - this.limitBottom),
							this.top = e.top + r,
							this.left = e.left + i,
							this.bottom = e.bottom - r,
							this.right = e.right - i;
							break;
						case 1:
							e.left + i > this.limitWidth - this.right - this.minCropSize && (i = this.limitWidth - this.right - this.minCropSize - e.left),
							e.left + i < this.limitLeft && (i = this.limitLeft - e.left),
							e.top + i / this.$data._ratio < this.limitTop && (i = (this.limitTop - e.top) * this.$data._ratio),
							this.left = e.left + i,
							this.top = e.top + i / this.$data._ratio;
							break;
						case 2:
							e.top + r > this.limitHeight - this.bottom - this.minCropSize && (r = this.limitHeight - this.bottom - this.minCropSize - e.top),
							this.top = Math.max(this.limitTop, e.top + r),
							a();
							break;
						case 3:
							e.right - i > this.limitWidth - this.left - this.minCropSize && (i = e.right - this.limitWidth + this.left + this.minCropSize),
							e.right - i < this.limitRight && (i = e.right - this.limitRight),
							e.top - i / this.$data._ratio < this.limitTop && (i = (e.top - this.limitTop) * this.$data._ratio),
							this.top = e.top - i / this.$data._ratio,
							this.right = e.right - i;
							break;
						case 4:
							e.right - i > this.limitWidth - this.left - this.minCropSize && (i = e.right - this.limitWidth + this.left + this.minCropSize),
							this.right = Math.max(e.right - i, this.limitRight),
							a();
							break;
						case 5:
							e.right - i > this.limitWidth - this.left - this.minCropSize && (i = e.right - this.limitWidth + this.left + this.minCropSize),
							e.right - i < this.limitRight && (i = e.right - this.limitRight),
							e.bottom - i / this.$data._ratio < this.limitBottom && (i = (e.bottom - this.limitBottom) * this.$data._ratio),
							this.bottom = e.bottom - i / this.$data._ratio,
							this.right = e.right - i;
							break;
						case 6:
							e.bottom - r > this.limitHeight - this.top - this.minCropSize && (r = e.bottom - this.limitHeight + this.top + this.minCropSize),
							this.bottom = Math.max(e.bottom - r, this.limitBottom),
							a();
							break;
						case 7:
							e.left + i > this.limitWidth - this.right - this.minCropSize && (i = this.limitWidth - this.right - this.minCropSize - e.left),
							e.left + i < this.limitLeft && (i = this.limitLeft - e.left),
							e.bottom + i / this.$data._ratio < this.limitBottom && (i = (this.limitBottom - e.bottom) * this.$data._ratio),
							this.bottom = e.bottom + i / this.$data._ratio,
							this.left = e.left + i;
							break;
						case 8:
							e.left + i > this.limitWidth - this.right - this.minCropSize && (i = this.limitWidth - this.right - this.minCropSize - e.left),
							this.left = Math.max(this.limitLeft, e.left + i),
							a();
							break;
						case 9:
							this.$data._localRotation = 180 * Math.atan2(r, i) / Math.PI;
							break
						}
						this.$emit("updateBounds", {
							...this.$data._selectionBounds,
							initialBounds: this.$data._initialBounds.toJSON(),
							changed: !0,
							selectionRotation: this.$data._localRotation,
							mode: 9 === t ? "rotate" : "scale",
							action: o,
							controlIndex: t
						}),
						"initial" === o && (o = "move")
					}
				}
				  , l = e=>{
					document.removeEventListener("mousemove", r),
					document.removeEventListener("mouseup", l),
					document.removeEventListener("touchmove", r),
					document.removeEventListener("touchend", l),
					document.removeEventListener("touchcancel", l),
					clearInterval(i),
					this.$emit("updateBounds", {
						...this.$data._selectionBounds,
						initialBounds: this.$data._initialBounds.toJSON(),
						changed: !0,
						selectionRotation: this.$data._localRotation,
						mode: 9 === t ? "rotate" : "scale",
						controlIndex: t,
						action: "up"
					});
					const n = this.$el.getBoundingClientRect();
					this.$data._ratio = n.width / n.height,
					o = "initial"
				}
				;
				this.$data._mouseDownHandler = o=>{
					o.forced || (o.preventDefault(),
					o.stopImmediatePropagation()),
					clearInterval(i);
					const a = o.forced ? this.$el : o.target.closest(".crop-control") || o.target.closest(".components_selection");
					if (a) {
						if (this.$data._initialBounds = this.$el.getBoundingClientRect(),
						t = parseInt(a.getAttribute("data-index")) || 0,
						10 === t)
							return this.$el.dispatchEvent(new CustomEvent("requestRemove",{
								bubbles: !0,
								cancelable: !0
							}));
						e = {
							x: o.changedTouches?.[0]?.clientX ?? o.pageX,
							y: o.changedTouches?.[0]?.clientY ?? o.pageY,
							left: this.left,
							top: this.top,
							right: this.right,
							bottom: this.bottom
						},
						n = {
							x: e.x,
							y: e.y
						},
						this.useTouches ? (document.addEventListener("touchmove", r),
						document.addEventListener("touchend", l),
						document.addEventListener("touchcancel", l)) : (document.addEventListener("mousemove", r),
						document.addEventListener("mouseup", l)),
						i = setInterval(s, 1e3 / 60)
					}
				}
				,
				this.useTouches ? this.$el.addEventListener("touchstart", this.$data._mouseDownHandler) : this.$el.addEventListener("mousedown", this.$data._mouseDownHandler)
			},
			methods: {
				reset() {
					this.$data._selectionBounds = {
						...this.$data._limitBounds
					},
					this.$emit("updateBounds", {
						...this.$data._selectionBounds,
						changed: !1
					})
				},
				drawSelection({initialPoint: e=({x: x=0, y: y=0, left: left=0, right: right=0, top: top=0, bottom: bottom=0, offsetX: offsetX=0, offsetY: offsetY=0} = {})}={}) {
					this.$data._selectionBounds = {
						left: e.left,
						right: e.right,
						top: e.top,
						bottom: e.bottom
					};
					let t, i = {
						...e
					}, n = -1, o = -1, a = {
						x: -1,
						y: -1
					};
					const r = t=>{
						t.preventDefault();
						const r = (t.changedTouches?.[0]?.clientX ?? t.clientX) - i.offsetX
						  , s = (t.changedTouches?.[0]?.clientY ?? t.clientY) - i.offsetY;
						r <= i.x && s <= i.y ? 1 !== n && (-1 !== n && (this.$data._selectionBounds = {
							left: e.left,
							right: e.right,
							top: e.top,
							bottom: e.bottom
						}),
						n = o = 1) : r >= i.x && s <= i.y ? 3 !== n && (-1 !== n && (this.$data._selectionBounds = {
							left: e.left,
							right: e.right,
							top: e.top,
							bottom: e.bottom
						}),
						n = o = 3) : r >= i.x && s >= i.y ? 5 !== n && (-1 !== n && (this.$data._selectionBounds = {
							left: e.left,
							right: e.right,
							top: e.top,
							bottom: e.bottom
						}),
						n = o = 5) : r <= i.x && s >= i.y && 7 !== n && (-1 !== n && (this.$data._selectionBounds = {
							left: e.left,
							right: e.right,
							top: e.top,
							bottom: e.bottom
						}),
						n = o = 7),
						a = {
							x: r,
							y: s
						}
					}
					  , s = ()=>{
						let e = a.x - i.x
						  , t = a.y - i.y;
						if (0 !== e || 0 !== t) {
							switch (o) {
							case 1:
								i.left + e > this.limitWidth - this.right - this.minCropSize && (e = this.limitWidth - this.right - this.minCropSize - i.left),
								i.left + e < this.limitLeft && (e = this.limitLeft - i.left),
								i.top + t < this.limitTop && (t = this.limitTop - i.top),
								this.left = i.left + e,
								this.top = i.top + t;
								break;
							case 2:
								i.top + t > this.limitHeight - this.bottom - this.minCropSize && (t = this.limitHeight - this.bottom - this.minCropSize - i.top),
								this.top = Math.max(this.limitTop, i.top + t);
								break;
							case 3:
								i.right - e > this.limitWidth - this.left - this.minCropSize && (e = i.right - this.limitWidth + this.left + this.minCropSize),
								i.right - e < this.limitRight && (e = i.right - this.limitRight),
								i.top + t < this.limitTop && (t = this.limitTop - i.top),
								this.top = i.top + t,
								this.right = i.right - e;
								break;
							case 4:
								i.right - e > this.limitWidth - this.left - this.minCropSize && (e = i.right - this.limitWidth + this.left + this.minCropSize),
								this.right = Math.max(i.right - e, this.limitRight);
								break;
							case 5:
								i.right - e > this.limitWidth - this.left - this.minCropSize && (e = i.right - this.limitWidth + this.left + this.minCropSize),
								i.right - e < this.limitRight && (e = i.right - this.limitRight),
								i.bottom - t < this.limitBottom && (t = i.bottom - this.limitBottom),
								this.bottom = i.bottom - t,
								this.right = i.right - e;
								break;
							case 6:
								i.bottom - t > this.limitHeight - this.top - this.minCropSize && (t = i.bottom - this.limitHeight + this.top + this.minCropSize),
								this.bottom = Math.max(i.bottom - t, this.limitBottom);
								break;
							case 7:
								i.left + e > this.limitWidth - this.right - this.minCropSize && (e = this.limitWidth - this.right - this.minCropSize - i.left),
								i.left + e < this.limitLeft && (e = this.limitLeft - i.left),
								i.bottom - t < this.limitBottom && (t = i.bottom - this.limitBottom),
								this.bottom = i.bottom - t,
								this.left = i.left + e;
								break;
							case 8:
								i.left + e > this.limitWidth - this.right - this.minCropSize && (e = this.limitWidth - this.right - this.minCropSize - i.left),
								this.left = Math.max(this.limitLeft, i.left + e);
								break
							}
							this.$emit("updateBounds", {
								...this.$data._selectionBounds,
								changed: !0
							})
						}
					}
					  , l = e=>{
						document.removeEventListener("mousemove", r),
						document.removeEventListener("mouseup", l),
						document.removeEventListener("touchmove", r),
						document.removeEventListener("touchend", l),
						document.removeEventListener("touchcancel", l),
						clearInterval(t),
						this.$emit("updateBounds", {
							...this.$data._selectionBounds,
							changed: !0
						})
					}
					;
					a = {
						x: i.x,
						y: i.y
					},
					t = setInterval(s, 1e3 / 60),
					this.useTouches ? (document.addEventListener("touchmove", r),
					document.addEventListener("touchend", l),
					document.addEventListener("touchcancel", l)) : (document.addEventListener("mousemove", r),
					document.addEventListener("mouseup", l))
				},
				forceMouseDown(e) {
					e.forced = !0,
					this.$data._mouseDownHandler(e)
				}
			}
		}
		  , Ke = qe
		  , Ye = f(Ke, Ue, Xe, !1, null, "00ff4fa8", null)
		  , Je = Ye.exports
		  , Qe = {
			name: "CropRect",
			data() {
				return {
					_limitBounds: {
						left: 0,
						top: 0,
						right: 0,
						bottom: 0,
						width: 0,
						height: 0
					},
					_selectionBounds: {
						left: 0,
						top: 0,
						right: 0,
						bottom: 0
					},
					_rotation: 0,
					_scale: {
						prev: 1,
						current: 1,
						ratio: 1
					},
					_selectionChanged: !1,
					_rotationDirection: "right",
					_showPopup: !1,
					_prevTarget: null,
					_selectionClickCount: 0,
					_uuid: this.$uuidv4()
				}
			},
			components: {
				Selection: Je
			},
			mounted() {
				const e = this.$watch("rootContainer", (t=>{
					t && (this.rootContainer.appendChild(this.$el),
					this.$emit("cropRectReady", {
						uuid: this.$data._uuid,
						target: this
					}),
					this.$nextTick((()=>{
						e()
					}
					)))
				}
				), {
					immediate: !0
				})
			},
			props: {
				rootContainer: {
					type: HTMLElement
				},
				target: {
					type: HTMLElement
				},
				minCropSize: {
					type: Number,
					default: 1
				},
				ratio: {
					type: Number,
					default: 1
				},
				selectionRatio: {
					type: Number,
					default: 0
				},
				showGrid: {
					type: Boolean,
					default: !0
				},
				showArea: {
					type: Boolean,
					default: !1
				},
				showMask: {
					type: Boolean,
					default: !0
				},
				showSelection: {
					type: Boolean,
					default: !0
				},
				rotation: {
					type: Number,
					default: 0
				},
				originalTargetSize: {
					type: Object,
					default() {
						return {
							width: 1,
							height: 1
						}
					}
				},
				showPopup: {
					type: Boolean,
					default: !1
				},
				onlySelectionClickable: {
					type: Boolean,
					default: !1
				},
				selectionTarget: {
					type: HTMLElement
				},
				showSelectionRemove: {
					type: Boolean,
					default: !1
				},
				showSelectionRotate: {
					type: Boolean,
					default: !1
				},
				showAreaOnly: {
					type: Boolean,
					default: !1
				},
				selectionOffsetFromTarget: {
					type: Object,
					default() {
						return {
							left: 0,
							top: 0,
							right: 0,
							bottom: 0
						}
					}
				},
				showMiddleControls: {
					type: Boolean,
					default: !0
				},
				ignoreSelectionAreaOnSecondClick: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				rootContainerAndTargetHash: {
					handler() {
						if (this.rootContainer && this.target) {
							Object.assign(this.$data._limitBounds, {
								...this.getTargetBoundsRelativeToWorkArea()
							}),
							this.$data._prevTarget?.removeEventListener?.("transitionend", this.handleTargetTransform),
							this.$data._prevTarget = this.target;
							const e = window.getComputedStyle(this.target);
							/transform/i.test(e.getPropertyValue("transition")) || (this.target.style.transition = "transform 1ms ease"),
							this.target.addEventListener("transitionend", this.handleTargetTransform),
							this.handleTargetTransform()
						}
					},
					immediate: !0
				},
				rootContainerAndTargetAndSelectionTargetHash: {
					handler(e) {
						this.rootContainer && this.target && this.selectionTarget ? (this.$data._selectionBounds = {
							...this.getSelectionBoundsRelativeToTarget()
						},
						this.$data._selectionClickCount = 1) : this.$data._selectionClickCount = 0
					}
				},
				ratio: {
					handler(e) {
						this.forceUpdateSelection(e)
					},
					immediate: !0
				},
				showPopup: {
					handler(e) {
						this.$data._showPopup = e
					},
					immediate: !0
				}
			},
			computed: {
				top() {
					return `${parseFloat(this.$data._limitBounds.top)}px`
				},
				left() {
					return `${parseFloat(this.$data._limitBounds.left)}px`
				},
				right() {
					return `${parseFloat(this.$data._limitBounds.right)}px`
				},
				bottom() {
					return `${parseFloat(this.$data._limitBounds.bottom)}px`
				},
				selectionLeft() {
					return `${parseFloat(this.$data._selectionBounds.left)}px`
				},
				selectionRight() {
					return `${parseFloat(this.$data._selectionBounds.right)}px`
				},
				selectionTop() {
					return `${parseFloat(this.$data._selectionBounds.top)}px`
				},
				selectionBottom() {
					return `${parseFloat(this.$data._selectionBounds.bottom)}px`
				},
				rootContainerAndTargetHash() {
					return this.rootContainer + this.target
				},
				rootContainerAndTargetAndSelectionTargetHash() {
					return window.btoa(unescape(encodeURIComponent(this.rootContainer + this.target + this.selectionTarget?.outerHTML)))
				},
				computedRatio() {
					return this.selectionRatio || this.ratio
				},
				componentStyles() {
					return {
						left: this.left,
						top: this.top,
						right: this.right,
						bottom: this.bottom,
						"pointer-events": this.showSelection ? this.onlySelectionClickable ? "none" : "all" : "none",
						"--maskLeft": this.selectionLeft,
						"--maskRight": this.selectionRight,
						"--maskTop": this.selectionTop,
						"--maskBottom": this.selectionBottom
					}
				},
				selectionStyles() {
					let e = "none";
					return this.showSelection && (this.showAreaOnly || (e = "all"),
					this.ignoreSelectionAreaOnSecondClick && this.$data._selectionClickCount >= 1 && (e = "none")),
					{
						visibility: this.$data._showPopup || !this.showSelection ? "hidden" : "visible",
						"pointer-events": e
					}
				}
			},
			methods: {
				updateCropBoundsExternal(e) {
					if (this.$el) {
						const t = this.$el.getBoundingClientRect()
						  , i = 0 !== Math.abs(this.$data._rotation % 180);
						if (i) {
							const i = this.originalTargetSize.height / t.width
							  , n = this.originalTargetSize.width / t.height
							  , o = e?.width / i
							  , a = e?.height / n;
							if (o <= 0 || a <= 0)
								return;
							if (o > Math.ceil(t.height) || a > Math.ceil(t.width))
								return;
							const r = (t.height - o) / 2
							  , s = (t.width - a) / 2;
							this.handleUpdateBounds({
								left: s,
								right: s,
								top: r,
								bottom: r
							}, !0)
						} else {
							const i = this.originalTargetSize.width / t.width
							  , n = this.originalTargetSize.height / t.height
							  , o = e?.width / i
							  , a = e?.height / n;
							if (o <= 0 || a <= 0)
								return;
							if (o > Math.ceil(t.width) || a > Math.ceil(t.height))
								return;
							const r = (t.width - o) / 2
							  , s = (t.height - a) / 2;
							this.handleUpdateBounds({
								left: r,
								right: r,
								top: s,
								bottom: s
							}, !0)
						}
					}
				},
				forceUpdateSelection(e) {
					if (this.$el) {
						const t = this.$el.getBoundingClientRect();
						let i = t.width
						  , n = i / e;
						n > t.height && (n = t.height,
						i = n * e);
						const o = (t.width - i) / 2
						  , a = (t.height - n) / 2;
						this.handleUpdateBounds({
							left: o,
							right: o,
							top: a,
							bottom: a
						})
					}
				},
				handleUpdateBounds(e, t=!1) {
					Object.assign(this.$data._selectionBounds, e),
					this.$nextTick((()=>{
						const i = this.$refs.selection.$el.getBoundingClientRect();
						this.$data._selectionChanged = e.changed,
						this.$el.dispatchEvent(new CustomEvent(t ? "cropRectChangeExternal" : "cropRectChange",{
							bubbles: !0,
							cancelable: !0,
							detail: {
								value: {
									width: i.width / this.$data._limitBounds.width,
									height: i.height / this.$data._limitBounds.height,
									left: e.left / this.$data._limitBounds.width,
									top: e.top / this.$data._limitBounds.height,
									rotation: this.$data._rotation,
									changed: e.changed,
									initialBounds: e.initialBounds,
									nonScaled: {
										...e,
										width: i.width,
										height: i.height,
										selectionRotation: e.selectionRotation,
										mode: e.mode,
										controlIndex: e.controlIndex
									}
								},
								uuid: this.$data._uuid
							}
						}))
					}
					))
				},
				_handleRequestRemove(e) {
					return e.stopImmediatePropagation(),
					this.$el.dispatchEvent(new CustomEvent("requestRemove",{
						bubbles: !0,
						cancelable: !0,
						detail: {
							uuid: this.$data._uuid
						}
					}))
				},
				getTargetBoundsRelativeToWorkArea() {
					const e = this.getRootBounds()
					  , t = this.target.getBoundingClientRect().toJSON();
					return {
						left: t.left - e.left,
						top: t.top - e.top,
						width: t.width,
						height: t.height,
						right: e.left + e.width - (t.left + t.width),
						bottom: e.top + e.height - (t.top + t.height)
					}
				},
				getSelectionBoundsRelativeToTarget() {
					const e = this.getTargetBounds()
					  , t = this.getSelectionTargetBounds();
					return {
						left: t.left - e.left - this.selectionOffsetFromTarget.left,
						top: t.top - e.top - this.selectionOffsetFromTarget.top,
						width: t.width + this.selectionOffsetFromTarget.left + this.selectionOffsetFromTarget.right,
						height: t.height + this.selectionOffsetFromTarget.top + this.selectionOffsetFromTarget.bottom,
						right: e.left + e.width - (t.left + t.width) - this.selectionOffsetFromTarget.right,
						bottom: e.top + e.height - (t.top + t.height) - this.selectionOffsetFromTarget.bottom
					}
				},
				getRootBounds() {
					return this.rootContainer.getBoundingClientRect().toJSON()
				},
				getTargetBounds() {
					return this.target.getBoundingClientRect().toJSON()
				},
				getSelectionTargetBounds() {
					return this.selectionTarget?.getBoundingClientRect().toJSON() || {
						width: NaN,
						height: NaN,
						top: NaN,
						left: NaN,
						bottom: NaN,
						right: NaN
					}
				},
				handleTargetTransform() {
					const e = window.getComputedStyle(this.target)
					  , t = e.transform?.replace(/[^0-9.e,-]/gi, "").split(",").map((e=>parseFloat(e)));
					if (Array.isArray(t) && t.length > 0) {
						const e = Math.round(Math.atan2(t[1], t[0]) * (180 / Math.PI)) || 0;
						0 === this.$data._rotation && 90 === e || 90 === this.$data._rotation && 180 === e || 180 === this.$data._rotation && -90 === e || -90 === this.$data._rotation && 0 === e ? this.$data._rotationDirection = "right" : 0 === this.$data._rotation && -90 === e || -90 === this.$data._rotation && 180 === e || 180 === this.$data._rotation && 90 === e || 90 === this.$data._rotation && 0 === e ? this.$data._rotationDirection = "left" : 180 === Math.abs(this.$data._rotation) && 0 === e && (this.$data._rotationDirection = "flipHorizontal"),
						this.$data._rotation = e,
						this.$data._scale = {
							...this.$data._scale,
							prev: this.$data._scale.current,
							current: Math.sqrt(t[0] * t[0] + t[1] * t[1]) || 1
						},
						this.$data._scale.ratio = this.$data._scale.current / this.$data._scale.prev,
						this.rotateSelection()
					}
				},
				rotateSelection() {
					Object.assign(this.$data._limitBounds, this.getTargetBoundsRelativeToWorkArea());
					const e = {
						...this.$data._selectionBounds
					};
					if ("flipHorizontal" === this.$data._rotationDirection) {
						const t = {
							top: e.bottom,
							right: e.left,
							bottom: e.top,
							left: e.right
						};
						Object.assign(this.$data._selectionBounds, t)
					} else if ("right" === this.$data._rotationDirection) {
						const t = {
							top: e.left * this.$data._scale.ratio,
							right: e.top * this.$data._scale.ratio,
							bottom: e.right * this.$data._scale.ratio,
							left: e.bottom * this.$data._scale.ratio
						};
						Object.assign(this.$data._selectionBounds, t)
					} else {
						const t = {
							top: e.right * this.$data._scale.ratio,
							right: e.bottom * this.$data._scale.ratio,
							bottom: e.left * this.$data._scale.ratio,
							left: e.top * this.$data._scale.ratio
						};
						Object.assign(this.$data._selectionBounds, t)
					}
					this.$nextTick((()=>{
						const e = this.$refs.selection.$el.getBoundingClientRect();
						this.$el.dispatchEvent(new CustomEvent("cropRectChange",{
							bubbles: !0,
							cancelable: !0,
							detail: {
								value: {
									width: e.width / this.$data._limitBounds.width,
									height: e.height / this.$data._limitBounds.height,
									left: this.$data._selectionBounds.left / this.$data._limitBounds.width,
									top: this.$data._selectionBounds.top / this.$data._limitBounds.height,
									rotation: this.$data._rotation,
									changed: this.$data._selectionChanged,
									nonScaled: e.toJSON()
								},
								uuid: this.$data._uuid
							}
						}))
					}
					))
				},
				drawSelectionFromPoint(e) {
					const t = this.getTargetBounds()
					  , i = {
						x: e.x - t.x,
						y: e.y - t.y
					};
					this.$refs.selection.drawSelection({
						initialPoint: {
							x: i.x,
							y: i.y,
							left: i.x,
							top: i.y,
							right: this.$data._limitBounds.width - i.x,
							bottom: this.$data._limitBounds.height - i.y,
							offsetX: t.x,
							offsetY: t.y
						}
					})
				},
				reset(e) {
					this.$refs.selection?.reset(),
					this.$data._selectionChanged = !1,
					e && (this.$data._showPopup = !0)
				},
				forceSelectionMouseDown(e) {
					this.$refs.selection?.forceMouseDown(e)
				},
				forceUpdateSelectionBoundsFromTarget() {
					this.rootContainer && this.target && this.selectionTarget && (this.$data._selectionBounds = {
						...this.getSelectionBoundsRelativeToTarget()
					})
				}
			}
		}
		  , Ze = Qe
		  , et = f(Ze, He, We, !1, null, "d14df000", null)
		  , tt = et.exports
		  , it = function() {
			var e = this
			  , t = e._self._c;
			return t("input", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: e.value,
					expression: "value"
				}],
				staticClass: "shared-components_numeric-input",
				style: {
					width: e.width
				},
				attrs: {
					type: "text",
					inputmode: "number"
				},
				domProps: {
					value: e.value
				},
				on: {
					keydown: function(t) {
						return e.handleKeyDown(t)
					},
					blur: e.handleBlur,
					input: function(t) {
						t.target.composing || (e.value = t.target.value)
					}
				}
			})
		}
		  , nt = []
		  , ot = {
			name: "NumericInput",
			data() {
				return {
					_value: 0,
					_tmpValue: 0
				}
			},
			props: {
				minValue: {
					type: Number,
					default: 0
				},
				maxValue: {
					type: Number,
					default: Number.MAX_SAFE_INTEGER
				},
				model: {
					type: Number,
					default: 0
				},
				allowDot: {
					type: Boolean,
					default: !1
				},
				roundToEven: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				model: {
					handler(e) {
						this.$data._value = this.$data._tmpValue = e
					},
					immediate: !0
				}
			},
			methods: {
				handleKeyDown(e) {
					const t = e.key.toLowerCase();
					" " !== t && e.stopImmediatePropagation(),
					/^[0-9]$/.test(t) || (/^[.]$/.test(t) ? (!this.allowDot || /\./.test(`${this.value}`) || /^\./.test(`${this.value}${t}`)) && e.preventDefault() : /^(enter|escape)$/.test(t) ? this.$el?.blur() : /^(arrowup)$/.test(t) ? (e.preventDefault(),
					this.value = Math.min(this.maxValue, (parseFloat(this.value) || 0) + (e.shiftKey ? 10 : 1))) : /^(arrowdown)$/.test(t) ? (e.preventDefault(),
					this.value = Math.max(this.minValue, (parseFloat(this.value) || 0) - (e.shiftKey ? 10 : 1))) : /^(arrowright|arrowleft|backspace|delete|home|end)$/.test(t) || e.ctrlKey && /^(a|z)$/.test(t) || e.preventDefault())
				},
				handleBlur() {
					0 === this.$data._value.length ? this.value = this.roundToEven ? 2 * Math.round(this.$data._tmpValue / 2) : this.$data._tmpValue : parseFloat(this.value) < this.minValue ? this.value = this.roundToEven ? 2 * Math.round(this.minValue / 2) : this.minValue : parseFloat(this.value) > this.maxValue ? this.value = this.roundToEven ? 2 * Math.round(this.maxValue / 2) : this.maxValue : this.value = this.roundToEven ? 2 * Math.round(this.value / 2) : this.value
				}
			},
			computed: {
				value: {
					get() {
						return this.$data._value
					},
					set(e) {
						e = parseFloat(e),
						isNaN(parseFloat(e)) ? this.$data._value = "" : e < this.minValue || e > this.maxValue ? (this.$data._value = "",
						this.$data._value = this.$data._tmpValue) : (this.$data._value = this.$data._tmpValue = e,
						this.$emit("change", {
							val: parseFloat(this.$data._value)
						}))
					}
				},
				width() {
					return `${this.value}`.length + "ch"
				}
			}
		}
		  , at = ot
		  , rt = f(at, it, nt, !1, null, "088bafd4", null)
		  , st = rt.exports
		  , lt = {
			name: "Crop",
			components: {
				CropRect: tt,
				Stepper: ke,
				NumericInput: st
			},
			extends: Pe,
			mounted() {
				this.notifyActivate()
			},
			data() {
				return {
					_activeRatio: null,
					_defaultRatios: {
						"1:1": {
							name: "1:1",
							label: "1:1",
							ratio: 1,
							hint: "instagram",
							hidden: !1,
							original: !1,
							suffix: ""
						},
						"16:9": {
							name: "16:9",
							label: "16:9",
							hint: "",
							ratio: 16 / 9,
							hidden: !1,
							original: !1,
							suffix: ""
						},
						"9:16": {
							name: "9:16",
							label: "9:16",
							hint: "",
							ratio: 9 / 16,
							hidden: !1,
							original: !1,
							suffix: ""
						},
						"4:5": {
							name: "4:5",
							label: "4:5",
							hint: "",
							ratio: .8,
							hidden: !0,
							original: !1,
							suffix: ""
						},
						"5:4": {
							name: "5:4",
							label: "5:4",
							hint: "",
							ratio: 5 / 4,
							hidden: !0,
							original: !1,
							suffix: ""
						},
						"4:3": {
							name: "4:3",
							label: "4:3",
							hint: "",
							ratio: 4 / 3,
							hidden: !1,
							original: !1,
							suffix: ""
						},
						"3:4": {
							name: "3:4",
							label: "3:4",
							hint: "",
							ratio: 3 / 4,
							hidden: !1,
							original: !1,
							suffix: ""
						}
					},
					_customItemActive: !1,
					_activeRatioValue: 1,
					_tmpRatioValue: 1,
					_cropSize: {
						width: 0,
						height: 0
					},
					_cropRatio: {
						width: 0,
						height: 0,
						ratio: 0
					}
				}
			},
			props: {
				workArea: {
					type: HTMLElement
				},
				target: {
					type: HTMLElement
				},
				originalTargetSize: {
					type: Object,
					default() {
						return {
							width: 1,
							height: 1
						}
					}
				},
				ratios: {
					type: Object,
					default() {
						return {}
					}
				},
				offsetFromTargetBounds: {
					type: Number,
					default: 40
				},
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				mode: {
					type: String,
					default: Ve.MODE_NONE
				}
			},
			watch: {
				ratios: {
					handler(e) {
						if (e) {
							this.$data._defaultRatios = {
								...this.$data._defaultRatios,
								...e
							};
							const t = this.computedRatios.find((e=>e.original));
							t ? (this.$data._activeRatio = t.name || null,
							this.$data._activeRatioValue = this.$data._tmpRatioValue = t.ratio) : this.$data._activeRatio = this.$data._tmpRatioValue = null
						}
					},
					immediate: !0
				},
				originalTargetSize: {
					handler(e) {
						e && (window._?.l?.("crop set original target size val", e),
						0 !== this.$data._cropSize.width && 0 !== this.$data._cropSize.height || (this.$data._cropSize = {
							...this.$data._cropSize,
							...e
						}),
						this.$data._cropRatio = {
							...(({width: e, height: t, ratio: i})=>({
								width: e,
								height: t,
								ratio: i
							}))(this.computedRatios.find((e=>e.original)) || this.$getAspectRatio(e.width, e.height))
						})
					},
					immediate: !0
				},
				showSelection: {
					handler(e) {
						e && this.notifyActivate()
					}
				}
			},
			computed: {
				computedRatios() {
					return Object.values(this.$data._defaultRatios).filter((e=>!e.hidden)).sort(((e,t)=>t.original - e.original))
				},
				computedLangs() {
					return {
						tool_crop_custom: "Custom",
						...this.$langs
					}
				},
				sizeScale() {
					return 1
				},
				showTools() {
					return this.mode === Ve.MODE_FULL
				},
				showSelection() {
					return this.mode === Ve.MODE_FULL
				},
				showMask() {
					return this.mode && this.mode !== Ve.MODE_NONE
				},
				maxCropWidthLength() {
					return this.originalTargetSize.width.toString().length
				},
				maxCropHeightLength() {
					return this.originalTargetSize.height.toString().length
				}
			},
			methods: {
				handleRatioChange() {
					this.$data._customItemActive = !1,
					this.$data._activeRatioValue = this.$data._activeRatio ? this.computedRatios.find((e=>e.name === this.$data._activeRatio)).ratio ?? 1 : 1,
					Math.abs(this.$data._activeRatioValue - this.$data._tmpRatioValue) < 1e-5 && this.$refs?.cropRect?.forceUpdateSelection(this.$data._activeRatioValue),
					this.$data._tmpRatioValue = this.$data._activeRatioValue
				},
				handleCropRatioChange({detail: {value: e}}) {
					this.$data._activeRatio = null,
					this.$data._customItemActive = !1,
					this.$data._cropRatio = (({width: e, height: t})=>({
						width: e,
						height: t
					}))(this.$getAspectRatio(this.$data._cropSize.width, this.$data._cropSize.height))
				},
				handleCustomItemClick() {
					this.$data._activeRatio = null,
					this.$data._customItemActive = !0
				},
				handleCropRectReady() {
					this.$el.dispatchEvent(new CustomEvent("cropRectReady",{
						bubbles: !0,
						cancelable: !0
					}))
				},
				handleCropRectChange({detail: {value: e}}) {
					const t = 0 !== Math.abs(e.rotation % 180);
					this.$data._cropSize = {
						width: t ? 2 * Math.round(e.height * this.originalTargetSize.width / 2) : 2 * Math.round(e.width * this.originalTargetSize.width / 2),
						height: t ? 2 * Math.round(e.width * this.originalTargetSize.height / 2) : 2 * Math.round(e.height * this.originalTargetSize.height / 2)
					},
					this.$el.dispatchEvent(new CustomEvent("cropChange",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							...e
						}
					}))
				},
				handleCropRectChangeExternal({detail: {value: e}}) {
					this.$el.dispatchEvent(new CustomEvent("cropChange",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							...e
						}
					}))
				},
				reset() {
					this.$data._activeRatio = this.computedRatios.find((e=>e.original))?.name || null,
					this.$nextTick((()=>{
						this.$refs.cropRect.reset()
					}
					))
				},
				handleCropRatioWidthChange({val: e}) {
					this.$data._activeRatio = null,
					this.$data._cropRatio.width = e,
					this.$data._cropRatio.ratio = this.$data._activeRatioValue = this.$data._tmpRatioValue = e / this.$data._cropRatio.height
				},
				handleCropRatioHeightChange({val: e}) {
					this.$data._activeRatio = null,
					this.$data._cropRatio.height = e,
					this.$data._cropRatio.ratio = this.$data._activeRatioValue = this.$data._tmpRatioValue = this.$data._cropRatio.width / e
				},
				handleCropWidthChange({val: e}) {
					e !== this.$data._cropSize.width && (this.$data._customItemActive = !1,
					this.$data._cropSize.width = e,
					this.$data._activeRatio = null,
					this.$refs.cropRect?.updateCropBoundsExternal({
						...this.$data._cropSize
					}),
					this.$data._cropRatio = this.$getAspectRatio(this.$data._cropSize.width, this.$data._cropSize.height))
				},
				handleCropHeightChange({val: e}) {
					e !== this.$data._cropSize.height && (this.$data._customItemActive = !1,
					this.$data._cropSize.height = e,
					this.$data._activeRatio = null,
					this.$refs.cropRect?.updateCropBoundsExternal({
						...this.$data._cropSize
					}),
					this.$data._cropRatio = this.$getAspectRatio(this.$data._cropSize.width, this.$data._cropSize.height))
				}
			}
		}
		  , ct = lt
		  , dt = f(ct, ze, Ge, !1, null, "48ed397a", null)
		  , ut = dt.exports
		  , ht = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool_rotate"
			}, [t("el-button", {
				staticClass: "btn rotate-left",
				on: {
					click: function(t) {
						return e.handleRotate("left")
					}
				}
			}, [e._v(e._s(e.computedLangs.left))]), t("el-button", {
				staticClass: "btn rotate-right",
				on: {
					click: function(t) {
						return e.handleRotate("right")
					}
				}
			}, [e._v(e._s(e.computedLangs.right))])], 1)
		}
		  , pt = [];
		class ft {
			static transform({angle: e=0, flipX: t=!1, flipY: i=!1, scaleX: n=1, scaleY: o=1}={}) {
				const a = new DOMMatrix([1, 0, 0, 1, 0, 0]);
				return n *= t ? -1 : 1,
				o *= i ? -1 : 1,
				a.rotateSelf(0, 0, e).scaleSelf(n, o),
				`matrix(${a.a},${a.b},${a.c},${a.d},${a.e},${a.f})`
			}
			static decomposeMatrix(e) {
				let t = e.a
				  , i = e.b
				  , n = e.c
				  , o = e.d
				  , a = Math.sqrt(t * t + i * i)
				  , r = Math.sqrt(n * n + o * o)
				  , s = t * o - i * n;
				s < 0 && (t < o ? a = -a : r = -r),
				a && (t *= 1 / a,
				i *= 1 / a),
				r && (n *= 1 / r,
				o *= 1 / r);
				let l, c, d, u, h, p, f = Math.atan2(i, t);
				return f && (l = -i,
				c = t,
				d = t,
				u = i,
				h = n,
				p = o,
				t = c * d + l * h,
				i = c * u + l * p,
				n = -l * d + c * h,
				o = -l * u + c * p),
				d = t,
				u = i,
				h = n,
				p = o,
				f *= 180 / Math.PI,
				{
					translateX: e.e,
					translateY: e.f,
					rotateZ: f,
					scaleX: a,
					scaleY: r,
					matrix: [d, u, h, p, 0, 0]
				}
			}
		}
		var mt = {
			name: "Rotate",
			extends: Pe,
			data() {
				return {
					_activeAngle: 0
				}
			},
			mounted() {
				this.notifyActivate()
			},
			props: {
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				rotation: {
					type: Number,
					default: 0
				},
				target: {
					type: HTMLElement
				},
				aspectRatio: {
					type: Number,
					default: 1
				}
			},
			watch: {
				rotation: {
					handler(e) {
						this.$data._activeAngle = e || 0
					},
					immediate: !0
				}
			},
			computed: {
				computedLangs() {
					return {
						left: "Left",
						right: "Right",
						...this.langs
					}
				}
			},
			methods: {
				rotate(e) {
					this.target?.style && (this.GlobalModel.scaleX = this.GlobalModel.scaleY = e % 180 === 0 ? 1 : this.aspectRatio || 1,
					this.GlobalModel.rotation = e,
					this.$el.dispatchEvent(new CustomEvent("toolRotateAction",{
						detail: {
							angle: e
						},
						bubbles: !0,
						cancelable: !0
					})),
					this.target.style.transform = ft.transform({
						angle: this.GlobalModel.rotation,
						flipX: this.GlobalModel.flipHorizontal,
						flipY: this.GlobalModel.flipVertical,
						scaleX: this.GlobalModel.scaleX,
						scaleY: this.GlobalModel.scaleY
					}))
				},
				handleRotate(e) {
					switch (e) {
					case "left":
						this.$data._activeAngle = (this.$data._activeAngle - 90) % 360;
						break;
					default:
						this.$data._activeAngle = (this.$data._activeAngle + 90) % 360
					}
					this.rotate(this.$data._activeAngle)
				},
				reset() {
					this.$data._activeAngle = 0,
					this.rotate(this.$data._activeAngle)
				}
			}
		}
		  , vt = mt
		  , gt = f(vt, ht, pt, !1, null, "ff08cc06", null)
		  , bt = gt.exports
		  , _t = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool-resolution"
			}, [t("el-radio-group", {
				on: {
					change: e.handleResolutionChange
				},
				model: {
					value: e.$data._activeResolution,
					callback: function(t) {
						e.$set(e.$data, "_activeResolution", t)
					},
					expression: "$data._activeResolution"
				}
			}, [e._l(e.computedResolutions, (function(i, n) {
				return t("el-radio-button", {
					key: i.name,
					class: ["resolution-item", {
						last: n === e.computedResolutions.length - 1
					}],
					attrs: {
						label: i.name
					}
				}, [t("div", {
					staticClass: "content"
				}, [t("span", {
					staticClass: "label"
				}, [e._v(e._s(i.label))])])])
			}
			)), t("el-radio-button", {
				staticClass: "resolution-item res-output",
				attrs: {
					label: "resOutput"
				}
			}, [t("div", {
				staticClass: "content"
			}, [t("span", {
				staticClass: "label"
			}, [e._v(e._s(e.$data._activeResolutionSize.width) + "x" + e._s(e.$data._activeResolutionSize.height))])])])], 2)], 1)
		}
		  , yt = []
		  , wt = {
			name: "Resolution",
			components: {
				ToolView: Pe
			},
			extends: Pe,
			data() {
				return {
					_activeResolution: null,
					_defaultResolutions: {
						original: {
							name: "original",
							label: "Original",
							width: 0,
							height: 0,
							hint: "",
							hidden: !0,
							original: !0
						},
						"4k": {
							name: "4k",
							label: "4k",
							hint: "",
							width: 3840,
							height: 2160,
							hidden: !1
						},
						"2k": {
							name: "1440p",
							label: "1440p (2k)",
							hint: "",
							width: 0,
							height: 1440,
							hidden: !1,
							original: !1
						},
						"1080p": {
							name: "1080p",
							label: "1080p",
							hint: "",
							width: 0,
							height: 1080,
							hidden: !1,
							original: !1
						},
						"720p": {
							name: "720p",
							label: "720p",
							hint: "",
							width: 0,
							height: 720,
							hidden: !1,
							original: !1
						},
						"480p": {
							name: "480p",
							label: "480p",
							hint: "",
							width: 0,
							height: 480,
							hidden: !1,
							original: !1
						},
						"360p": {
							name: "360p",
							label: "360p",
							hint: "",
							width: 0,
							height: 360,
							hidden: !1,
							original: !1
						},
						"240p": {
							name: "240p",
							label: "240p",
							width: 0,
							height: 240,
							hint: "",
							hidden: !1,
							original: !1
						}
					},
					_aspectRatio: 0,
					_activeResolutionSize: {
						width: 0,
						height: 0
					}
				}
			},
			mounted() {
				this.notifyActivate()
			},
			props: {
				resolutions: {
					type: Object,
					default() {
						return {}
					}
				},
				defaultResolution: {
					type: Object,
					default() {
						return {
							width: 0,
							height: 0
						}
					}
				},
				activeResolution: {
					type: Object,
					default() {
						return {
							width: 0,
							height: 0,
							name: null
						}
					}
				}
			},
			watch: {
				resolutions: {
					handler(e) {
						e && (this.$data._defaultResolutions = {
							...this.$data._defaultResolutions,
							...e
						},
						this.$data._activeResolution = this.computedResolutions.find((e=>e.original))?.name || null)
					},
					immediate: !0
				},
				defaultResolution: {
					handler(e) {
						if (e.width && e.height) {
							this.$data._aspectRatio = e.width / e.height;
							const t = this.computedResolutions.find((t=>t.height === e.height));
							t ? (t.hidden = !0,
							this.$data._defaultResolutions.original = {
								...this.$data._defaultResolutions.original,
								width: e.width,
								height: e.height,
								hidden: !1
							}) : this.$data._defaultResolutions.original = {
								...this.$data._defaultResolutions.original,
								width: e.width,
								height: e.height,
								hidden: !1
							},
							this.activeResolution?.name ? (this.$data._activeResolution = this.activeResolution.name,
							this.$data._activeResolutionSize = {
								...this.activeResolution
							}) : (this.$data._activeResolution = this.$data._defaultResolutions.original.name,
							this.$data._activeResolutionSize = {
								width: e.width,
								height: e.height
							})
						}
					},
					immediate: !0
				},
				activeResolution: {
					handler(e) {
						e.name && (this.$data._activeResolution = e.name,
						this.$data._activeResolutionSize = {
							width: e.width,
							height: e.height
						})
					},
					immediate: !0
				}
			},
			computed: {
				computedResolutions() {
					return Object.values(this.$data._defaultResolutions).filter((e=>this.$data._activeResolutionSize.height > 0 ? !e.hidden && e.height <= this.defaultResolution.height : !e.hidden)).sort(((e,t)=>t.original - e.original))
				}
			},
			methods: {
				handleResolutionChange() {
					const e = this.computedResolutions.find((e=>e.name === this.$data._activeResolution));
					this.$data._activeResolutionSize = {
						width: 2 * Math.round(e.height * this.$data._aspectRatio / 2),
						height: e.height
					},
					this.$el.dispatchEvent(new CustomEvent("toolResolutionAction",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							resolution: {
								name: this.$data._activeResolution,
								...this.$data._activeResolutionSize
							}
						}
					}))
				},
				reset() {
					this.$data._activeResolution = this.$data._defaultResolutions.original.name,
					this.handleResolutionChange()
				}
			}
		}
		  , xt = wt
		  , Ct = f(xt, _t, yt, !1, null, "62e1647a", null)
		  , $t = Ct.exports
		  , St = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				class: ["tool_volume", {
					disabled: e.disabled
				}]
			}, [t("i", {
				staticClass: "no-audio"
			}), t("i", {
				class: {
					low: !0,
					active: e.target.value === e.target.min
				},
				style: e.lowStyle,
				on: {
					click: function(t) {
						return e.handleChange(e.target.min)
					}
				}
			}), t("div", {
				staticClass: "slider-wrap"
			}, [t("extended-slider", {
				staticClass: "slider",
				attrs: {
					min: e.target.min,
					max: e.target.max,
					marks: e.marks,
					target: e.target.value,
					middle: e.middle,
					step: .01,
					"default-value": e.target.defaultValue,
					"default-accuracity": .02,
					"show-tooltip": !1
				},
				on: {
					change: e.handleChange
				}
			}), t("div", {
				staticClass: "no-audio-label"
			}, [e._v(" " + e._s(e.computedLangs.no_audio) + " ")])], 1), t("i", {
				class: {
					high: !0,
					active: e.target.value === e.target.max
				},
				style: e.highStyle,
				on: {
					click: function(t) {
						return e.handleChange(e.target.max)
					}
				}
			}), t("div", {
				class: {
					"val-out": !0,
					active: e.target.value !== e.middle
				}
			}, [e._v(" " + e._s(e.effectValue) + " ")])])
		}
		  , kt = []
		  , Tt = function() {
			var e = this
			  , t = e._self._c;
			return t("el-slider", {
				ref: "slider",
				class: {
					vertical: e.splitCenter && e.vertical,
					horizontal: e.splitCenter && !e.vertical
				},
				style: {
					"--sliderBarTop": e.sliderBarTop,
					"--sliderBarBottom": e.sliderBarBottom,
					"--sliderBarLeft": e.sliderBarLeft,
					"--sliderBarRight": e.sliderBarRight,
					"--sliderBarLeftRadius": e.sliderBarLeftRadius,
					"--sliderBarRightRadius": e.sliderBarRightRadius,
					"--sliderButtonColor": e.sliderButtonColor
				},
				attrs: {
					range: e.range,
					min: e.min,
					max: e.max,
					"show-tooltip": e.showTooltip,
					vertical: e.vertical,
					height: e.height,
					marks: e.marks,
					step: e.step,
					middle: e.middle,
					"tooltip-class": e.tooltipClass,
					"format-tooltip": e.tooltipFormat
				},
				on: {
					input: e.handleInput,
					change: e.handleChange
				},
				model: {
					value: e.model,
					callback: function(t) {
						e.model = t
					},
					expression: "model"
				}
			})
		}
		  , Mt = []
		  , Et = {
			name: "ExtendedSlider",
			data() {
				return {
					sliderBarTop: "50%",
					sliderBarBottom: "50%",
					sliderBarLeft: "50%",
					sliderBarRight: "50%",
					sliderBarLeftRadius: "3px",
					sliderBarRightRadius: "3px",
					model: 0,
					_initial: !0,
					sliderButtonColor: "#ffffff",
					_focusElement: null
				}
			},
			mounted() {
				this.focusAreaClass && (this.$data._focusElement = this.$el.closest(this._focusAreaClass)) && (this.$data._focusElement.addEventListener("mousedown", this.mouseDownHandler),
				this.$data._focusElement.hasAttribute("tabindex") || this.$data._focusElement.setAttribute("tabindex", "0"),
				this.removeFocusAreaOutline && (this.$data._focusElement.style.outline = "none"))
			},
			props: {
				min: {
					type: Number,
					default: 0
				},
				max: {
					type: Number,
					default: 0
				},
				range: {
					type: Boolean,
					default: !1
				},
				marks: {
					default: null
				},
				showTooltip: {
					type: Boolean,
					default: !1
				},
				tooltipClass: {
					type: String
				},
				vertical: {
					type: Boolean,
					default: !1
				},
				height: {
					type: String,
					default: null
				},
				target: {
					type: Number,
					default: 0
				},
				splitCenter: {
					type: Boolean,
					default: !0
				},
				defaultSliderButtonColor: {
					type: String,
					default: "#ffffff"
				},
				changedSliderButtonColor: {
					type: String,
					default: "#00FF7F"
				},
				defaultValue: {
					type: Number,
					default: 0
				},
				step: {
					type: Number,
					default: 1
				},
				middle: {
					type: Number,
					default: 0
				},
				defaultAccuracity: {
					type: Number,
					default: .06
				},
				tooltipFormat: {
					type: Function
				},
				finalChangeEventName: {
					type: String,
					default: "change"
				},
				focusAreaClass: {
					type: String,
					default: "el-slider"
				},
				removeFocusAreaOutline: {
					type: Boolean,
					default: !0
				}
			},
			watch: {
				target: {
					handler: function(e) {
						this.$data._initial = !0,
						this.model = e
					},
					immediate: !0
				},
				defaultSliderButtonColor: {
					handler: function(e) {
						this.sliderButtonColor = e
					},
					immediate: !0
				}
			},
			beforeDestroy() {
				document.removeEventListener("mouseup", this.mouseUpHandler)
			},
			methods: {
				handleInput(e) {
					if (this.splitCenter)
						if (e === this.defaultValue ? this.sliderButtonColor = this.defaultSliderButtonColor : this.sliderButtonColor = this.changedSliderButtonColor,
						this.vertical)
							if (e < 0) {
								const t = (100 - e / this.min * 100) / 2;
								this.sliderBarTop = "50%",
								this.sliderBarBottom = `${t}%`,
								this.sliderBarLeftRadius = "0",
								this.sliderBarRightRadius = "3px"
							} else {
								const t = 50 - e / this.max * 50;
								this.sliderBarBottom = "50%",
								this.sliderBarTop = `${t}%`,
								this.sliderBarLeftRadius = "3px",
								this.sliderBarRightRadius = "0"
							}
						else {
							const t = 100 / Math.abs(this.max - this.min)
							  , i = (this.middle - this.min) * t;
							e <= this.middle ? (this.sliderBarRight = 100 - i + "%",
							this.sliderBarLeft = (e - this.min) * t + "%",
							this.sliderBarLeftRadius = "3px",
							this.sliderBarRightRadius = "0") : (this.sliderBarLeft = `${i}%`,
							this.sliderBarRight = 100 - (e - this.min) * t + "%",
							this.sliderBarLeftRadius = "0",
							this.sliderBarRightRadius = "3px")
						}
					this.$data._initial ? this.$data._initial = !1 : e !== this.defaultValue && Math.abs(e - this.defaultValue) < this.defaultAccuracity || this.$emit("change", this.model)
				},
				handleChange(e) {
					e !== this.defaultValue && Math.abs(e - this.defaultValue) < this.defaultAccuracity ? this.model = this.defaultValue : this.$emit(this.finalChangeEventName, this.model)
				},
				mouseDownHandler(e) {
					document.addEventListener("mouseup", this.mouseUpHandler),
					this.$data._focusElement.addEventListener("keydown", this.keyboardDownHandler),
					this.$data._focusElement.focus()
				},
				mouseUpHandler(e) {
					this.focusAreaClass && !e.target.closest(this._focusAreaClass) && (this.$data._focusElement.removeEventListener("keydown", this.keyboardDownHandler),
					this.$data._focusElement.blur()),
					document.removeEventListener("mouseup", this.mouseUpHandler)
				},
				keyboardDownHandler(e) {
					const t = e.key.toLowerCase();
					/^((arrowright)|(arrowup))$/.test(t) ? (e.preventDefault(),
					e.stopImmediatePropagation(),
					this.model += this.step,
					this.$emit(this.finalChangeEventName, this.model)) : /^((arrowleft)|(arrowdown))$/.test(t) && (e.preventDefault(),
					e.stopImmediatePropagation(),
					this.model -= this.step,
					this.$emit(this.finalChangeEventName, this.model))
				}
			},
			computed: {
				_focusAreaClass() {
					return `.${this.focusAreaClass.replace(/^\./, "")}`
				}
			}
		}
		  , Ot = Et
		  , At = f(Ot, Tt, Mt, !1, null, "a7cc72d4", null)
		  , It = At.exports;
		function Ft(e, t, i) {
			Dt(e, t),
			t.set(e, i)
		}
		function Dt(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Rt(e, t) {
			var i = Bt(e, t, "get");
			return Pt(e, i)
		}
		function Pt(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		function Lt(e, t, i) {
			var n = Bt(e, t, "set");
			return Nt(e, n, i),
			i
		}
		function Bt(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Nt(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		var jt = new WeakMap
		  , zt = new WeakMap
		  , Gt = new WeakMap
		  , Vt = new WeakMap
		  , Ht = new WeakMap;
		class Wt {
			constructor(e, t) {
				Ft(this, jt, {
					writable: !0,
					value: {}
				}),
				Ft(this, zt, {
					writable: !0,
					value: 0
				}),
				Ft(this, Gt, {
					writable: !0,
					value: 0
				}),
				Ft(this, Vt, {
					writable: !0,
					value: null
				}),
				Ft(this, Ht, {
					writable: !0,
					value: null
				}),
				Lt(this, Ht, null),
				Lt(this, Vt, e),
				Lt(this, Ht, t),
				e instanceof AudioNode && Lt(this, Vt, e),
				t instanceof AudioNode && Lt(this, Ht, t)
			}
			get value() {
				return Rt(this, zt)
			}
			set value(e) {
				Lt(this, zt, e)
			}
			get enabled() {
				return Rt(this, zt) !== Rt(this, Gt)
			}
			set inputNode(e) {
				(e instanceof AudioNode || e instanceof HTMLMediaElement) && Lt(this, Vt, e)
			}
			get inputNode() {
				return Rt(this, Vt)
			}
			set outputNode(e) {
				e instanceof AudioNode && Lt(this, Ht, e)
			}
			get outputNode() {
				return Rt(this, Ht)
			}
			get name() {
				return "baseFilter"
			}
			on(e, t) {
				Rt(this, jt)[e] = Array.isArray(Rt(this, jt)[e]) ? Rt(this, jt)[e] : [],
				"function" === typeof t && Rt(this, jt)[e].push(t)
			}
			off(e, t) {
				Rt(this, jt)[e] && (t ? Rt(this, jt)[e].splice(Rt(this, jt)[e].indexOf(t), 1) : delete Rt(this, jt)[e])
			}
			emit(e, ...t) {
				Array.isArray(Rt(this, jt)[e]) && Rt(this, jt)[e].forEach((e=>{
					e(t)
				}
				))
			}
			draw(e) {}
			reset() {
				Lt(this, zt, Rt(this, Gt))
			}
			toString() {
				return ""
			}
		}
		function Ut(e, t, i) {
			Xt(e, t),
			t.set(e, i)
		}
		function Xt(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function qt(e, t, i) {
			var n = Jt(e, t, "set");
			return Kt(e, n, i),
			i
		}
		function Kt(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		function Yt(e, t) {
			var i = Jt(e, t, "get");
			return Qt(e, i)
		}
		function Jt(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Qt(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		var Zt = new WeakMap
		  , ei = new WeakMap
		  , ti = new WeakMap
		  , ii = new WeakMap;
		class ni extends Wt {
			constructor() {
				super(),
				Ut(this, Zt, {
					writable: !0,
					value: 0
				}),
				Ut(this, ei, {
					writable: !0,
					value: 4
				}),
				Ut(this, ti, {
					writable: !0,
					value: document.createElement("canvas")
				}),
				Ut(this, ii, {
					writable: !0,
					value: Yt(this, ti).getContext("2d")
				}),
				this._value = 1
			}
			set min(e) {
				qt(this, Zt, e)
			}
			set max(e) {
				qt(this, ei, e)
			}
			get min() {
				return Yt(this, Zt)
			}
			get max() {
				return Yt(this, ei)
			}
			set value(e) {
				e = parseFloat(e),
				isNaN(e) || e > Yt(this, ei) || (e < 0 && (e = 0),
				this._value = e,
				this.inputNode instanceof AudioNode && (this.inputNode.gain.value = e),
				this.emit("change"))
			}
			set inputNode(e) {
				e instanceof AudioNode && (super.inputNode = e),
				e.gain.value = this._value
			}
			get inputNode() {
				return super.inputNode
			}
			get value() {
				return this._value
			}
			get name() {
				return "volume"
			}
			get defaultValue() {
				return 1
			}
			draw({inputContext: e=null, scaleFactor: t=0, drawHeight: i=0, color: n=0, lineWidth: o=1}={}) {
				if (!(e instanceof CanvasRenderingContext2D) || !(e.canvas instanceof HTMLCanvasElement) || !parseFloat(t) || !parseFloat(i))
					return;
				const a = e.canvas;
				if (this._value !== this.defaultValue)
					if (Yt(this, ii).clearRect(0, 0, Yt(this, ti).width, Yt(this, ti).height),
					Yt(this, ti).width = a.width,
					Yt(this, ti).height = a.height,
					Yt(this, ii).drawImage(a, 0, 0),
					e.clearRect(0, 0, a.width, a.height),
					this._value < 1) {
						const t = a.height * this._value;
						e.drawImage(Yt(this, ti), 0, 0, a.width, a.height, 0, (a.height - t) / 2, a.width, t)
					} else if (this._value > 1) {
						const t = 120 / Yt(this, ei)
						  , i = a.height + t * this._value;
						e.drawImage(Yt(this, ti), 0, 0, a.width, a.height, 0, (a.height - i) / 2, a.width, i)
					}
			}
			reset() {
				this.value = this.defaultValue
			}
			update() {
				this.inputNode.gain.value *= this._value
			}
			toString() {
				return this.value !== this.defaultValue ? `volume=${this.value}` : ""
			}
			static get name() {
				return "volume"
			}
		}
		var oi = {
			name: "Volume",
			extends: Pe,
			components: {
				ExtendedSlider: It
			},
			data() {
				return {
					marks: {
						[this.middle]: {
							style: {
								color: "#000000",
								display: "none"
							},
							label: this.$createElement("strong", this.middle)
						}
					}
				}
			},
			mounted() {
				this.notifyActivate()
			},
			props: {
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				target: {
					type: ni,
					required: !0
				},
				middle: {
					type: Number,
					default: 1
				}
			},
			methods: {
				handleChange(e) {
					this.target.value = e,
					this.$emit("change", {
						value: e,
						defaultValue: this.target.defaultValue
					})
				},
				reset() {
					this.target.value = this.target.defaultValue,
					this.$emit("change", {
						value: this.target.defaultValue,
						defaultValue: this.target.defaultValue
					})
				}
			},
			computed: {
				computedLangs() {
					return {
						left: "Left",
						right: "Right",
						no_audio: "this video has no audio",
						...this.langs
					}
				},
				effectValue() {
					return this.target.value > this.target.defaultValue ? `+${Math.ceil(100 * this.target.value - 100)}%` : this.target.value === this.target.defaultValue ? 0 : `${Math.ceil(100 * this.target.value - 100)}%`
				},
				lowStyle() {
					return this.target.value < this.middle && this.target.value >= this.target.min ? "opacity: " + (.8 * (1 - this.target.value) + .2) : "opacity: 0.2;"
				},
				highStyle() {
					return this.target.value > this.middle && this.target.value <= this.target.max ? "opacity: " + (.8 * Math.abs(this.target.value / this.target.max) + .2) : "opacity: 0.2;"
				},
				disabled() {
					return !this.GlobalModel.mediaInfo.hasAudio
				}
			}
		}
		  , ai = oi
		  , ri = f(ai, St, kt, !1, null, "28cf4db8", null)
		  , si = ri.exports
		  , li = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool_playback-rate"
			}, [t("i", {
				class: {
					low: !0,
					active: e.$data._value === e.min
				},
				style: e.lowStyle,
				on: {
					click: function(t) {
						return e.handleChange(e.min)
					}
				}
			}), t("div", {
				staticClass: "slider-wrap"
			}, [t("extended-slider", {
				attrs: {
					min: e.min,
					max: e.max,
					marks: e.marks,
					target: e.$data._value,
					middle: e.middle,
					"default-value": e.defaultValue,
					step: e.step,
					"show-tooltip": !1,
					"default-accuracity": .05,
					"focus-area-class": "tool_playback-rate"
				},
				on: {
					change: e.handleChange
				}
			})], 1), t("i", {
				class: {
					high: !0,
					active: e.$data._value === e.max
				},
				style: e.highStyle,
				on: {
					click: function(t) {
						return e.handleChange(e.max)
					}
				}
			}), t("div", {
				class: {
					"val-out": !0,
					active: e.$data._value !== e.middle
				}
			}, [e._v(" " + e._s(e.effectValue) + " ")])])
		}
		  , ci = []
		  , di = {
			name: "PlaybackRate",
			extends: Pe,
			components: {
				ExtendedSlider: It
			},
			data() {
				return {
					_value: 1,
					marks: {
						[this.middle]: {
							style: {
								color: "#000000",
								display: "none"
							},
							label: this.$createElement("strong", this.middle)
						}
					}
				}
			},
			mounted() {
				this.notifyActivate()
			},
			props: {
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				min: {
					type: Number,
					default: .25
				},
				max: {
					type: Number,
					default: 4
				},
				defaultValue: {
					type: Number,
					default: 1
				},
				target: {
					type: HTMLMediaElement,
					required: !0
				},
				middle: {
					type: Number,
					default: 1
				},
				step: {
					type: Number,
					default: .01
				},
				initialValue: {
					type: Number,
					default: 1
				}
			},
			watch: {
				initialValue: {
					handler(e) {
						isNaN(e) || (this.$data._value = e)
					},
					immediate: !0
				}
			},
			methods: {
				handleChange(e) {
					this.$data._value = e,
					this.$emit("change", {
						value: this.$data._value,
						defaultValue: this.defaultValue
					})
				},
				reset() {
					this.$data._value = this.defaultValue,
					this.$emit("change", {
						value: this.$data._value,
						defaultValue: this.defaultValue
					})
				}
			},
			computed: {
				computedLangs() {
					return {
						left: "Left",
						right: "Right",
						...this.langs
					}
				},
				effectValue() {
					return `${this.$data._value.toFixed(2).replace(/\.0+$/, "")}x`
				},
				lowStyle() {
					return this.$data._value < this.middle && this.$data._value >= this.min ? "opacity: " + (.8 * Math.abs(this.min / this.$data._value) + .2) : "opacity: 0.2;"
				},
				highStyle() {
					return this.$data._value > this.middle && this.$data._value <= this.max ? "opacity: " + (.8 * Math.abs(this.$data._value / this.max) + .2) : "opacity: 0.2;"
				}
			}
		}
		  , ui = di
		  , hi = f(ui, li, ci, !1, null, "56488339", null)
		  , pi = hi.exports
		  , fi = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool-delogo"
			}, [e._l(e.$data._delogoSizes, (function(i, n) {
				return t("crop-rect", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: i.visible,
						expression: "val.visible"
					}],
					key: i.id,
					ref: "cropRects",
					refInFor: !0,
					attrs: {
						ratio: e.ratio,
						rootContainer: e.workArea,
						target: e.target,
						"show-mask": !1,
						"show-selection": e.showSelection,
						"show-grid": !1,
						"show-area": !0,
						"show-area-only": e.showAreaOnly,
						"show-selection-remove": !0
					},
					on: {
						cropRectReady: function(t) {
							return e.handleCropRectReady(t, i)
						}
					},
					nativeOn: {
						requestRemove: function(t) {
							return e._handleRequestRemove(t, i)
						},
						cropRectChange: function(t) {
							return e.handleCropRectChange(t, n)
						}
					}
				})
			}
			)), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showPopup,
					expression: "showPopup"
				}],
				ref: "popup",
				staticClass: "delogo-popup"
			}, [t("div", {
				staticClass: "popup-content"
			}, [e._v(" " + e._s(e.computedLangs.delogo_popup_content) + " ")])]), e.showTools ? [t("button", {
				class: ["btn", "preview", {
					disabled: !e.$data._previewButtonEnabled
				}],
				on: {
					click: e.handleGeneratePreviewClick
				}
			}, [t("span", [e._v(e._s(e.computedLangs.download_preview))]), t("span", [e._v(e._s(e.previewDuration) + e._s(e.computedLangs.preview_sec))])])] : e._e()], 2)
		}
		  , mi = [];
		class vi {
			static get MODE_NONE() {
				return "none"
			}
			static get MODE_FULL() {
				return "full"
			}
			static get MODE_MASK() {
				return "mask"
			}
		}
		var gi = {
			name: "Delogo",
			components: {
				CropRect: tt
			},
			extends: Pe,
			data() {
				return {
					_delogoSizes: {},
					_selectionChanged: !1,
					_previewButtonEnabled: !0,
					_selectionStartPoint: null
				}
			},
			mounted() {
				this.notifyActivate(),
				this._appendPopupToWorkArea()
			},
			beforeDestroy() {
				this.workArea?.removeEventListener("mousedown", this._handleWorkAreaMouseDown),
				this.$refs.popup?.remove()
			},
			props: {
				previewDuration: {
					type: Number,
					default: 5
				},
				workArea: {
					type: HTMLElement
				},
				target: {
					type: HTMLElement
				},
				originalTargetSize: {
					type: Object,
					default() {
						return {
							width: 0,
							height: 0,
							left: 0,
							top: 0
						}
					}
				},
				mode: {
					type: String,
					default: vi.MODE_NONE
				}
			},
			watch: {
				showTools: {
					handler(e) {
						e ? (this.notifyActivate(),
						this._addWorkAreaListenersAndChangeCursor()) : this._removeWorkAreaEventListenersAndResetCursor()
					}
				},
				workArea: {
					handler() {
						this._appendPopupToWorkArea(),
						this._addWorkAreaListenersAndChangeCursor()
					},
					immediate: !0
				}
			},
			computed: {
				computedLangs() {
					return {
						customRatioLabel: "Custom",
						delogo_popup_content: "Пожалуйста, выделите область с изображением, которое нужно удалить",
						...this.$langs
					}
				},
				ratio() {
					return this.originalTargetSize?.width / this.originalTargetSize?.height || 1
				},
				showTools() {
					return this.mode === vi.MODE_FULL
				},
				showSelection() {
					return this.mode === vi.MODE_FULL || this.mode === vi.MODE_MASK && this.$data._selectionChanged
				},
				showPopup() {
					return this.mode === vi.MODE_FULL && Object.values(this.$data._delogoSizes).every((e=>!e.visible))
				},
				showAreaOnly() {
					return this.mode === vi.MODE_MASK && this.$data._selectionChanged
				},
				changedDelogos() {
					const e = {};
					for (const [t,i] of Object.entries(this.$data._delogoSizes))
						i.visible && (e[t] = i);
					return JSON.parse(JSON.stringify(e))
				}
			},
			methods: {
				_appendPopupToWorkArea() {
					this.workArea && this.$refs.popup && this.workArea.appendChild(this.$refs.popup)
				},
				_addWorkAreaListenersAndChangeCursor() {
					this.workArea && (this.workArea.removeEventListener("mousedown", this._handleWorkAreaMouseDown),
					this.workArea.addEventListener("mousedown", this._handleWorkAreaMouseDown),
					this.workArea.style.cursor = "crosshair")
				},
				_removeWorkAreaEventListenersAndResetCursor() {
					this.workArea && (this.workArea.style.cursor = "",
					this.workArea.removeEventListener("mousedown", this._handleWorkAreaMouseDown))
				},
				_handleRequestRemove(e, t) {
					t.visible = !1,
					this.$el.dispatchEvent(new CustomEvent("delogoChange",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							...this.changedDelogos
						}
					}))
				},
				handleCropRectReady(e, t) {
					this.$el.dispatchEvent(new CustomEvent("delogoCropRectReady",{
						bubbles: !0,
						cancelable: !0
					}));
					const i = e.target;
					i.drawSelectionFromPoint(this.$data._selectionStartPoint)
				},
				handleCropRectChange(e, t) {
					const i = e.detail.value
					  , n = 0 !== Math.abs(i.rotation % 180);
					this.$data._delogoSizes[t] = n ? {
						left: Math.floor(i.left * this.originalTargetSize.height),
						top: Math.floor(i.top * this.originalTargetSize.width),
						width: i.width * this.originalTargetSize.height,
						height: i.height * this.originalTargetSize.width,
						flip: !0,
						changed: !!i.changed,
						visible: !0
					} : {
						left: Math.floor(i.left * this.originalTargetSize.width),
						top: Math.floor(i.top * this.originalTargetSize.height),
						width: i.width * this.originalTargetSize.width,
						height: i.height * this.originalTargetSize.height,
						flip: !1,
						changed: !!i.changed,
						visible: !0
					},
					this.$data._selectionChanged = !!i.changed,
					this.$el.dispatchEvent(new CustomEvent("delogoChange",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							...this.changedDelogos
						}
					}))
				},
				handleGeneratePreviewClick() {
					this.$data._previewButtonEnabled = !1,
					this.$emit("requestFilterPreview", {
						onProgress: e=>{}
						,
						onComplete: e=>{
							this.$data._previewButtonEnabled = !0;
							const t = document.createElement("iframe");
							t.style.display = "none",
							this.$el.append(t),
							t.src = e,
							setTimeout((()=>{
								t.remove()
							}
							), 5e3)
						}
						,
						onError: ()=>{
							this.$data._previewButtonEnabled = !0
						}
						,
						onCancel: ()=>{
							this.$data._previewButtonEnabled = !0
						}
					})
				},
				_handleWorkAreaMouseDown(e) {
					if (0 !== e.button)
						return;
					this.$set(this.$data._delogoSizes, `${Object.keys(this.$data._delogoSizes).length}`, {
						visible: !0,
						id: `delogo-${Object.keys(this.$data._delogoSizes).length}`
					}),
					this.$data._selectionStartPoint = {
						x: e.clientX,
						y: e.clientY
					},
					this.$data._selectionChanged = !0;
					const t = ()=>{
						this.$data._selectionStartPoint = null,
						document.removeEventListener("mouseup", t)
					}
					;
					document.addEventListener("mouseup", t)
				},
				reset() {
					this.$data._delogoSizes = {},
					this.$data._selectionChanged = !1,
					this.$el.dispatchEvent(new CustomEvent("delogoChange",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							...this.changedDelogos
						}
					}))
				}
			}
		}
		  , bi = gi
		  , _i = f(bi, fi, mi, !1, null, "cffd2bc4", null)
		  , yi = _i.exports
		  , wi = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool_stabilization"
			}, [t("div", {
				staticClass: "switch-block"
			}, [t("el-tooltip", {
				attrs: {
					content: e.switchLabel,
					"visible-arrow": !1,
					placement: "top",
					"popper-class": "stabilization-tooltip"
				}
			}, [t("el-switch", {
				staticClass: "switch",
				attrs: {
					"active-color": "rgba(0,255,127,0.3)",
					"inactive-color": "rgba(255, 255, 255, 0.2)"
				},
				on: {
					change: e.handleChange
				},
				model: {
					value: e.$data._enabled,
					callback: function(t) {
						e.$set(e.$data, "_enabled", t)
					},
					expression: "$data._enabled"
				}
			})], 1)], 1), t("div", {
				class: ["tool-content", {
					disabled: !e.$data._enabled
				}]
			}, [t("el-tooltip", {
				attrs: {
					content: e.computedLangs.tool_stabilization_choose_strength,
					"visible-arrow": !1,
					placement: "top",
					"popper-class": "stabilization-tooltip"
				}
			}, [t("i", {
				class: {
					low: !0,
					active: e.$data._value === e.min
				}
			})]), t("div", {
				staticClass: "slider-wrap"
			}, [t("extended-slider", {
				attrs: {
					min: e.min,
					max: e.max,
					marks: e.marks,
					target: e.$data._value,
					middle: e.middle,
					"default-value": e.defaultValue,
					step: e.step,
					"show-tooltip": !1,
					"default-accuracity": 1,
					"focus-area-class": "tool_stabilization"
				},
				on: {
					change: e.handleChange
				}
			})], 1), t("div", {
				class: {
					"val-out": !0
				}
			}, [e._v(" " + e._s(e.effectValue) + " ")])], 1), t("button", {
				class: ["btn", "preview", {
					"disabled-on-generate": !0 === e.$data._previewButtonDisabled,
					disabled: !e.$data._enabled
				}],
				on: {
					click: e.handleGeneratePreviewClick
				}
			}, [t("span", [e._v(e._s(e.computedLangs.download_preview))]), t("span", [e._v(e._s(e.previewDuration) + " " + e._s(e.computedLangs.preview_sec))])])])
		}
		  , xi = []
		  , Ci = {
			name: "Stabilization",
			extends: Pe,
			components: {
				ExtendedSlider: It
			},
			mounted() {
				this.notifyActivate()
			},
			data() {
				return {
					_value: 5,
					_enabled: !1,
					_previewButtonDisabled: void 0,
					marks: {
						[this.middle]: {
							style: {
								color: "#000000",
								display: "none"
							},
							label: this.$createElement("strong", this.middle)
						}
					}
				}
			},
			props: {
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				min: {
					type: Number,
					default: 1
				},
				max: {
					type: Number,
					default: 10
				},
				defaultValue: {
					type: Number,
					default: 5
				},
				target: {
					type: Object,
					default() {
						return {
							enabled: !1,
							shakiness: 5
						}
					}
				},
				middle: {
					type: Number,
					default: 1
				},
				step: {
					type: Number,
					default: 1
				},
				previewDuration: {
					type: Number,
					default: 5
				}
			},
			watch: {
				target: {
					handler({shakiness: e, enabled: t}) {
						this.$data._value = e,
						this.$data._enabled = t
					},
					immediate: !0
				}
			},
			methods: {
				handleChange(e) {
					"number" === typeof e && (this.$data._value = e),
					this.$emit("change", {
						shakiness: this.$data._value,
						enabled: this.$data._enabled
					})
				},
				handleGeneratePreviewClick() {
					this.$data._previewButtonDisabled = !0,
					this.$emit("requestFilterPreview", {
						onProgress: e=>{}
						,
						onComplete: e=>{
							this.$data._previewButtonDisabled = !1;
							const t = document.createElement("iframe");
							t.style.display = "none",
							this.$el.append(t),
							t.src = e,
							setTimeout((()=>{
								t.remove()
							}
							), 5e3)
						}
						,
						onError: ()=>{
							this.$data._previewButtonDisabled = !1
						}
						,
						onCancel: ()=>{
							this.$data._previewButtonDisabled = !1
						}
					})
				},
				reset() {
					this.$data._value = this.defaultValue,
					this.$data._enabled = !1,
					this.$emit("change", {
						shakiness: this.$data._value,
						enabled: this.$data._enabled
					})
				}
			},
			computed: {
				computedLangs() {
					return {
						tool_stabilization_turn_on: "Turn stabilization on",
						tool_stabilization_turn_off: "Turn stabilization off",
						tool_stabilization_choose_strength: "Choose stabilization strength",
						...this.$langs
					}
				},
				effectValue() {
					return `${Math.min(100, Math.ceil(10 * this.$data._value))}%`
				},
				switchLabel() {
					return this.$data._enabled ? this.computedLangs.tool_stabilization_turn_off : this.computedLangs.tool_stabilization_turn_on
				},
				iconStyle() {
					const e = 100 - 5 * this.$data._value;
					return this.$data._enabled ? `background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='hsl(150,100%25,${e}%25)'%3Ez%3Cpath d='M19 6C18.4 6 18 5.6 18 5 18 4.3 17.7 3.6 17 3 16.4 2.3 15.7 2 15 2 14.4 2 14 1.6 14 1 14 0.4 14.4 0 15 0 16.3 0 17.6 0.7 18.5 1.5 19.3 2.4 20 3.7 20 5 20 5.6 19.6 6 19 6Z' /%3E%3Cpath d='M0.9 14.3C1.5 14.3 2 14.7 2 15.3 2.1 15.9 2.5 16.7 3.1 17.2 3.8 17.8 4.6 18 5.2 18 5.8 17.9 6.3 18.4 6.3 18.9 6.4 19.5 5.9 19.9 5.4 20 4.1 20.1 2.8 19.5 1.8 18.7 0.9 17.9 0.1 16.7 0 15.4 0 14.9 0.4 14.4 0.9 14.3Z' /%3E%3Cpath d='M14.1 3.7C15.3 3.9 16.2 4.7 16.5 5.8 15.8 6 15.4 6.1 14.7 6.3 14.6 5.9 14.3 5.7 13.9 5.6 13.3 5.5 12.7 6.1 12.8 6.7L12.9 7.7C13 8.4 12.4 8.8 11.8 8.7 11.6 8.7 11.5 8.6 11.3 8.5L7 4.1C6.7 3.8 6.2 3.8 5.9 4.1 5.8 4.2 5.8 4.3 5.7 4.4 5.6 4.7 5.7 5 5.9 5.2L9.9 9.1C10 9.3 10.1 9.5 10.1 9.7 10.1 9.8 10.1 9.8 10 9.9 10 10 9.9 10.1 9.9 10.2 9.7 10.3 9.6 10.4 9.5 10.4 9.3 10.4 9.2 10.4 9.1 10.4 9 10.4 8.9 10.3 8.8 10.2L4.2 5.6C4.1 5.5 4 5.4 3.9 5.4 3.6 5.3 3.3 5.4 3.1 5.6 2.8 5.9 2.8 6.4 3.1 6.7L7.9 11.6C8.1 11.7 8.1 11.9 8.1 12.1 8.1 12.2 8.1 12.4 7.9 12.6 7.8 12.6 7.7 12.7 7.7 12.7 7.4 12.8 7.1 12.8 6.9 12.6L3.6 9.3C3.4 9.1 3.1 9 2.8 9.1 2.7 9.2 2.7 9.2 2.6 9.3 2.3 9.6 2.3 10.1 2.6 10.4L9.5 17.2C9.9 17.7 10.4 18 11 18.1 12 18.2 12.9 17.9 13.5 17.2L16.3 14.4C16.5 14.1 16.6 13.8 16.5 13.5 16.5 13.5 15.4 9.1 14.7 6.3 15.4 6.1 15.8 6 16.5 5.8 17.2 8.6 18.4 13 18.4 13 18.6 14 18.3 15 17.6 15.7L14.9 18.5C13.8 19.7 12.3 20.2 10.7 19.9 9.7 19.8 8.8 19.3 8.1 18.6L1.2 11.7C0.2 10.7 0.2 9 1.2 7.9 1.3 7.9 1.4 7.8 1.5 7.7 0.7 6.7 0.8 5.2 1.7 4.2 2.4 3.6 3.2 3.4 4.1 3.5 4.2 3.2 4.4 3 4.6 2.8 5.6 1.7 7.3 1.7 8.3 2.8L11.1 5.5C11.5 4.4 12.8 3.5 14.1 3.7Z'/%3E%3C/svg%3E")` : ""
				}
			}
		}
		  , $i = Ci
		  , Si = f($i, wi, xi, !1, null, "4083088c", null)
		  , ki = Si.exports
		  , Ti = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool-loop"
			}, [t("el-radio-group", {
				on: {
					change: e.handleLoopChange
				},
				model: {
					value: e.$data._loopTimes,
					callback: function(t) {
						e.$set(e.$data, "_loopTimes", t)
					},
					expression: "$data._loopTimes"
				}
			}, e._l(e.computedLoops, (function(i, n) {
				return t("el-radio-button", {
					key: i.name,
					class: ["loop-item", {
						last: n === e.computedLoops.length - 1
					}],
					attrs: {
						label: i.name
					}
				}, [t("div", {
					staticClass: "content"
				}, [t("span", {
					staticClass: "label"
				}, [e._v(e._s(i.label))])])])
			}
			)), 1), t("div", {
				class: ["loop-item-custom", {
					active: e.$data._customItemActive
				}],
				on: {
					click: e.handleCustomItemClick
				}
			}, [t("span", {
				staticClass: "label"
			}, [e._v(e._s(e.computedLangs.tool_loop_custom))]), t("div", {
				staticClass: "block-input"
			}, [t("div", {
				staticClass: "content"
			}, [t("stepper", {
				ref: "stepper",
				attrs: {
					"max-value": e.maxLoopTimes,
					"min-value": e.minLoopTimes,
					"max-length": e.maxLoopTimesLength,
					"pad-left": !0,
					"mode-mobile": e.isMobile,
					model: e.$data._loopTimes
				},
				on: {
					change: e.handleStepperChange
				}
			})], 1), t("span", [e._v("x")])])])], 1)
		}
		  , Mi = []
		  , Ei = {
			name: "Loop",
			components: {
				ToolView: Pe,
				Stepper: ke
			},
			extends: Pe,
			data() {
				return {
					_loopTimes: 1,
					_customItemActive: !1
				}
			},
			mounted() {
				this.notifyActivate()
			},
			props: {
				loopTimes: {
					type: Number,
					default: 1
				},
				maxLoopTimes: {
					type: Number,
					default: 16
				},
				minLoopTimes: {
					type: Number,
					default: 1
				}
			},
			watch: {
				loopTimes: {
					handler(e) {
						this.$data._loopTimes = e,
						this.$data._customItemActive = this.$data._customItemActive || !this.computedLoops?.find((t=>t.name === e))
					},
					immediate: !0
				}
			},
			computed: {
				computedLoops() {
					return Array.from({
						length: 5
					}, ((e,t)=>{
						const i = t + 1;
						return {
							name: i,
							label: `${i}x`
						}
					}
					))
				},
				computedLangs() {
					return {
						tool_loop_custom: "Custom",
						...this.$langs
					}
				},
				maxLoopTimesLength() {
					return this.maxLoopTimes.toString().length
				}
			},
			methods: {
				handleLoopChange(e) {
					this.$data._customItemActive = !1,
					this.$el.dispatchEvent(new CustomEvent("toolLoopAction",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							loop: parseInt(e)
						}
					}))
				},
				handleCustomItemClick() {
					this.$data._customItemActive = !0,
					this.$refs.stepper.select()
				},
				handleStepperChange(e) {
					this.$data._loopTimes = parseInt(e),
					this.$el.dispatchEvent(new CustomEvent("toolLoopAction",{
						cancelable: !0,
						bubbles: !0,
						detail: {
							loop: this.$data._loopTimes
						}
					}))
				},
				reset() {
					this.$data._loopTimes = 1,
					this.handleLoopChange(1)
				}
			}
		}
		  , Oi = Ei
		  , Ai = f(Oi, Ti, Mi, !1, null, "75f8ad38", null)
		  , Ii = Ai.exports
		  , Fi = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool-flip"
			}, [t("el-button", {
				class: ["btn", "flip-vertical", {
					active: e.GlobalModel.flipVertical
				}],
				on: {
					click: function(t) {
						return e.handleVerticalFlip()
					}
				}
			}, [e._v(e._s(e.computedLangs.tool_flip_vertical) + " ")]), t("el-button", {
				class: ["btn", "flip-horizontal", {
					active: e.GlobalModel.flipHorizontal
				}],
				on: {
					click: function(t) {
						return e.handleHorizontalFlip()
					}
				}
			}, [e._v(e._s(e.computedLangs.tool_flip_horizontal) + " ")])], 1)
		}
		  , Di = []
		  , Ri = {
			name: "Flip",
			components: {
				ToolView: Pe,
				Stepper: ke
			},
			extends: Pe,
			mounted() {
				this.notifyActivate()
			},
			props: {
				target: {
					type: HTMLElement,
					required: !0
				}
			},
			computed: {
				computedLangs() {
					return {
						tool_flip_horizontal: "Horizontal",
						tool_flip_vertical: "Vertical",
						...this.$langs
					}
				}
			},
			methods: {
				reset() {
					this.GlobalModel.flipHorizontal = this.GlobalModel.flipVertical = !1,
					this.$emit("changeHorizontal", !1),
					this.$emit("changeVertical", !1),
					this._applyFlip()
				},
				handleHorizontalFlip() {
					this.GlobalModel.flipHorizontal = !this.GlobalModel.flipHorizontal,
					this.$emit("changeHorizontal", this.GlobalModel.flipHorizontal),
					this._applyFlip()
				},
				handleVerticalFlip() {
					this.GlobalModel.flipVertical = !this.GlobalModel.flipVertical,
					this.$emit("changeVertical", this.GlobalModel.flipVertical),
					this._applyFlip()
				},
				_applyFlip() {
					this.target.style.transform = ft.transform({
						angle: this.GlobalModel.rotation,
						flipX: this.GlobalModel.flipHorizontal,
						flipY: this.GlobalModel.flipVertical,
						scaleX: this.GlobalModel.scaleX,
						scaleY: this.GlobalModel.scaleY
					})
				}
			}
		}
		  , Pi = Ri
		  , Li = f(Pi, Fi, Di, !1, null, "03cbb9c0", null)
		  , Bi = Li.exports
		  , Ni = function() {
			var e = this
			  , t = e._self._c;
			return t("el-popover", {
				staticClass: "components_extended-format-picker",
				attrs: {
					"popper-class": "components_extended-format-picker",
					"visible-arrow": !1,
					"open-delay": 0,
					"close-delay": 0,
					placement: "top-end"
				}
			}, [t("div", {
				staticClass: "container"
			}, [t("div", {
				staticClass: "label"
			}, [e._v(e._s(e.computedLangs.format_picker_label))]), t("el-radio-group", {
				staticClass: "formats",
				on: {
					change: e.handleFormatChange
				},
				model: {
					value: e.$data._format,
					callback: function(t) {
						e.$set(e.$data, "_format", t)
					},
					expression: "$data._format"
				}
			}, e._l(e.formats, (function(i) {
				return t("el-radio-button", {
					key: i.name,
					staticClass: "item",
					attrs: {
						label: i.name,
						disabled: e.noEncodeActive && !e.noEncodeDisabled && "auto" !== i.name
					}
				}, [t("div", {
					staticClass: "content"
				}, [e._v(e._s(i.label))])])
			}
			)), 1), t("div", {
				staticClass: "no-encode"
			}, [t("el-switch", {
				staticClass: "switch",
				attrs: {
					disabled: e.noEncodeDisabled,
					"active-color": "rgba(0,255,127,0.3)",
					"inactive-color": "rgba(255, 255, 255, 0.2)",
					"active-text": e.computedLangs.format_picker_no_enc_label
				},
				on: {
					change: e.handleNoEncode
				},
				model: {
					value: e.$data._noEncode,
					callback: function(t) {
						e.$set(e.$data, "_noEncode", t)
					},
					expression: "$data._noEncode"
				}
			}), t("div", {
				staticClass: "no-encode-msg"
			}, [e._v(" " + e._s(e.computedLangs.format_picker_no_enc_msg) + " ")])], 1)], 1), t("button", {
				staticClass: "btn-settings",
				attrs: {
					slot: "reference"
				},
				slot: "reference"
			})])
		}
		  , ji = []
		  , zi = {
			name: "ExtendedFormatPicker",
			data() {
				return {
					_format: null,
					_noEncode: !1
				}
			},
			props: {
				formats: {
					type: Array,
					required: !0
				},
				activeFormat: {
					type: Object,
					default() {
						return null
					}
				},
				langs: {
					type: Object,
					default() {
						return {}
					}
				},
				defaultFormat: {
					type: Object,
					required: !0
				},
				noEncodeActive: !1,
				noEncodeDisabled: !1
			},
			computed: {
				computedLangs() {
					return {
						format_picker_label: "File format",
						format_picker_no_enc_label: "No encode",
						format_picker_no_enc_msg: "",
						...this.langs
					}
				}
			},
			watch: {
				activeFormat: {
					handler(e) {
						this.$data._format = e?.name
					},
					immediate: !0
				},
				noEncodeActive: {
					handler(e) {
						this.$data._noEncode = e
					},
					immediate: !0
				}
			},
			methods: {
				handleFormatChange(e) {
					this.$emit("change", this.formats.find((t=>t.name === e)))
				},
				handleNoEncode(e) {
					this.$emit("noEncodeChange", e)
				}
			}
		}
		  , Gi = zi
		  , Vi = f(Gi, Ni, ji, !1, null, "0f539f10", null)
		  , Hi = Vi.exports;
		function Wi(e, t, i) {
			Ui(e, t),
			t.set(e, i)
		}
		function Ui(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Xi(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function qi(e, t) {
			var i = Ji(e, t, "get");
			return Ki(e, i)
		}
		function Ki(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		function Yi(e, t, i) {
			var n = Ji(e, t, "set");
			return Qi(e, n, i),
			i
		}
		function Ji(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Qi(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		var Zi = new WeakMap
		  , en = new WeakMap
		  , tn = new WeakMap
		  , nn = new WeakMap
		  , on = new WeakMap
		  , an = new WeakMap
		  , rn = new WeakMap
		  , sn = new WeakMap
		  , ln = new WeakMap
		  , cn = new WeakMap
		  , dn = new WeakMap
		  , un = new WeakMap
		  , hn = new WeakMap
		  , pn = new WeakMap
		  , fn = new WeakMap
		  , mn = new WeakMap;
		class vn {
			constructor() {
				Wi(this, Zi, {
					writable: !0,
					value: null
				}),
				Wi(this, en, {
					writable: !0,
					value: !1
				}),
				Wi(this, tn, {
					writable: !0,
					value: !1
				}),
				Wi(this, nn, {
					writable: !0,
					value: []
				}),
				Wi(this, on, {
					writable: !0,
					value: null
				}),
				Wi(this, an, {
					writable: !0,
					value: 0
				}),
				Wi(this, rn, {
					writable: !0,
					value: null
				}),
				Wi(this, sn, {
					writable: !0,
					value: null
				}),
				Wi(this, ln, {
					writable: !0,
					value: 1
				}),
				Wi(this, cn, {
					writable: !0,
					value: 1
				}),
				Wi(this, dn, {
					writable: !0,
					value: !1
				}),
				Wi(this, un, {
					writable: !0,
					value: 30
				}),
				Wi(this, hn, {
					writable: !0,
					value: null
				}),
				Wi(this, pn, {
					writable: !0,
					value: []
				}),
				Wi(this, fn, {
					writable: !0,
					value: []
				}),
				Wi(this, mn, {
					writable: !0,
					value: "main"
				})
			}
			set file(e) {
				Yi(this, Zi, e),
				Yi(this, en, e instanceof File),
				Yi(this, tn, e instanceof Blob)
			}
			get file() {
				return qi(this, Zi)
			}
			addFilter(e) {
				e && qi(this, nn).push(e)
			}
			get filters() {
				return qi(this, nn).join("")
			}
			set time(e) {
				e && "object" === typeof e && Yi(this, on, e)
			}
			get time() {
				return qi(this, on)
			}
			set bitrate(e) {
				Yi(this, an, e)
			}
			get bitrate() {
				return qi(this, an)
			}
			set format(e) {
				Yi(this, rn, e)
			}
			get format() {
				return qi(this, rn)
			}
			get isFile() {
				return qi(this, en)
			}
			get isBlob() {
				return qi(this, tn)
			}
			set outputName(e) {
				Yi(this, sn, e)
			}
			get outputName() {
				return qi(this, sn)
			}
			get cutDuration() {
				let e = this.time.to - this.time.from;
				return this.time.inverse && (e = this.time.to0 + this.time.to1 - this.time.from1),
				e
			}
			set loopTimes(e) {
				Yi(this, ln, e)
			}
			get loopTimes() {
				return qi(this, ln)
			}
			set playbackRate(e) {
				Yi(this, cn, e)
			}
			get playbackRate() {
				return qi(this, cn)
			}
			set copyCodec(e) {
				Yi(this, dn, e)
			}
			get copyCodec() {
				return qi(this, dn)
			}
			set fastSeekOffset(e) {
				Yi(this, un, e)
			}
			get fastSeekOffset() {
				return qi(this, un)
			}
			set operationType(e) {
				Yi(this, hn, e)
			}
			get operationType() {
				return qi(this, hn)
			}
			get extraCommands() {
				return qi(this, pn)
			}
			set extraFiles(e) {
				Yi(this, fn, Array.isArray(e) ? e : [e])
			}
			get extraFiles() {
				return qi(this, fn)
			}
			toCommand({asString: e=!0, startWithFFmpeg: t=!0}={}) {
				const i = []
				  , n = this.time.from - qi(this, un);
				if (t && i.push("ffmpeg"),
				this.time.inverse) {
					i.push("-i", qi(this, Zi));
					for (let e = 0; e < qi(this, fn).length; e++)
						i.push("-i", qi(this, fn)[e])
				} else if (qi(this, dn))
					i.push("-ss", this.time.from.toFixed(2), "-i", qi(this, Zi));
				else {
					n > 0 ? i.push("-ss", `${n.toFixed(2)}`, "-i", qi(this, Zi)) : i.push("-i", qi(this, Zi));
					for (let e = 0; e < qi(this, fn).length; e++)
						i.push("-i", qi(this, fn)[e])
				}
				return this.filters && (qi(this, dn) ? i.push(this.filters) : (i.push("-filter_complex", `"${this.filters.replace(/%offset_value%/g, (this.time.from - Math.max(n, 0)).toFixed(2))}"`),
				i.push("-map", "[v0]"),
				i.push("-map_chapters", "-1"))),
				qi(this, dn) ? (i.push("-c", "copy"),
				i.push("-t", `${this.cutDuration.toFixed(2)}`),
				i.push("-avoid_negative_ts", "make_zero")) : (i.push("-crf", "20"),
				i.push("-preset", "superfast")),
				i.push("-movflags", "+faststart"),
				i.push(...qi(this, pn)),
				i.push("-max_muxing_queue_size", "1024"),
				i.push(`%output.${this.format}%`),
				e ? i.join(" ") : i
			}
		}
		Xi(vn, "OPERATION_TYPES", {
			SERVICE: "service"
		});
		var gn = {
			methods: {
				async handleRequestFilterPreview(e) {
					const t = ()=>new Promise(((e,t)=>{
						if (this.GlobalModel.preventPreviewGeneration)
							return e();
						if (this.GlobalModel.mediaInfo.remoteFileName) {
							const t = {
								file: this.GlobalModel.mediaInfo.remoteFileName,
								time: this.GlobalModel.playData.inverse ? {
									inverse: !1,
									from: 0,
									to: Math.min(5, this.GlobalModel.playData.cutToInverse0)
								} : {
									inverse: !1,
									from: this.GlobalModel.playData.cutFrom,
									to: Math.min(this.GlobalModel.playData.cutFrom + 5, this.GlobalModel.playData.cutTo)
								},
								inverse: !1
							};
							return t.cutDuration = t.time.to - t.time.from,
							e(t)
						}
						const i = this.GlobalModel.playData.inverse ? Math.min(5, this.GlobalModel.playData.cutToInverse0) : Math.min(this.GlobalModel.playData.cutTo - this.GlobalModel.playData.cutFrom, 5);
						this.WasmProcessor.callWorker({
							type: "getVideoSlice",
							file: this.GlobalModel.file,
							cutFrom: this.GlobalModel.playData.inverse ? 0 : this.GlobalModel.playData.cutFrom.toFixed(2),
							time: i
						}, (t=>{
							const n = new Blob([t]);
							if (n.name = "slice.mkv",
							this.GlobalModel.preventPreviewGeneration)
								return e();
							this.RemoteProcessor.uploadFile({
								file: n,
								pauseQueue: !0,
								query: {
									uid: window.glob?.uid,
									operation_type: "service"
								},
								callback: ({type: t, data: n})=>{
									if ("uploadComplete" === t)
										return e({
											time: {
												from: 0,
												to: i
											},
											cutDuration: i,
											file: n.response.tmp_filename,
											inverse: !1
										})
								}
							})
						}
						))
					}
					))
					  , i = await t();
					if (this.GlobalModel.preventPreviewGeneration)
						return void e.onCancel();
					const n = this.GlobalModel.encodeData.stabilization.enabled
					  , o = n ? 2 : 1
					  , a = []
					  , r = ()=>new Promise(((e,t)=>{
						if (this.GlobalModel.encodeData.imagesToAdd.every((e=>!!e.remoteFileName)))
							e();
						else {
							const t = this.$watch("GlobalModel.encodeData.imagesToAdd", (i=>{
								this.GlobalModel.encodeData.imagesToAdd.every((e=>!!e.remoteFileName)) && (t(),
								e())
							}
							), {
								immediate: !0,
								deep: !0
							})
						}
					}
					));
					if (await r(),
					this.GlobalModel.preventPreviewGeneration)
						return void e.onCancel();
					let s = !1;
					for (let l = 0; l < o; l++) {
						const e = new vn;
						e.time = i.time,
						e.format = "mp4",
						e.loopTimes = 1,
						e.playbackRate = this.GlobalModel.encodeData.playbackRate,
						e.operationType = vn.OPERATION_TYPES.SERVICE,
						this.GlobalModel.mediaInfo.hasAudio && e.extraCommands.push("-c:a", "aac", "-b:a", "64k", "-ac 1", "-ar", "44100"),
						e.file = i.file,
						e.extraFiles = this.GlobalModel.encodeData.imagesToAdd.map((e=>e.remoteFileName)),
						0 === this.GlobalModel.encodeData.resolution.width && (this.GlobalModel.encodeData.resolution.width = 2 * Math.round(this.GlobalModel.mediaInfo.width / 2),
						this.GlobalModel.encodeData.resolution.height = 2 * Math.round(this.GlobalModel.mediaInfo.height / 2),
						s = !0),
						e.addFilter(this.GlobalModel.encodeData.getFilterCommand({
							hasAudio: this.GlobalModel.mediaInfo.hasAudio,
							cutDuration: i.cutDuration,
							ignoreLoop: !0,
							useStabilizationDetect: n && 0 === l,
							useStabilizationTransform: n && 1 === l
						})),
						a.push(e.toCommand())
					}
					s && (this.GlobalModel.encodeData.resolution.width = 0,
					this.GlobalModel.encodeData.resolution.height = 0),
					this.MediaEncoder.encodeFilterPreview({
						file: i.file,
						format: "mp4",
						loopTimes: 1,
						playbackRate: this.GlobalModel.encodeData.playbackRate,
						operationType: vn.OPERATION_TYPES.SERVICE
					}, a, (t=>{
						if (this.GlobalModel.preventPreviewGeneration)
							return this.MediaEncoder.cancelFilterPreview(),
							void e.onCancel();
						"remoteEncodeComplete" === t.type ? (window._?.l?.("preview complete", t),
						e.onComplete?.(t.downloadUrl)) : "remoteEncodeError" === t.type && (window._?.l?.("preview error", t),
						e.onError?.())
					}
					))
				}
			}
		}
		  , bn = {
			methods: {
				handleAddImageImagesListChange({detail: {images: e}}) {
					this.GlobalModel.imagesToAdd = e,
					this.GlobalModel.encodeData.imagesToAdd = e,
					this.Tools.AddImage.class.changed = this.GlobalModel.addImageChanged = this.GlobalModel.imagesToAdd.length > 0,
					this.updateIncompatibleTools(this.Tools.AddImage)
				}
			}
		}
		  , _n = {
			methods: {
				handleAddTextTextsListChange({detail: {texts: e}}) {
					this.GlobalModel.textsToAdd = e,
					this.Tools.AddText.class.changed = this.GlobalModel.addTextChanged = this.GlobalModel.textsToAdd.length > 0,
					this.updateIncompatibleTools(this.Tools.AddText)
				}
			}
		}
		  , yn = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool_add-image"
			}, [t("div", {
				ref: "imagesContainer",
				staticClass: "images-container",
				style: e.imagesContainerStyle
			}, e._l(e.$data._images, (function(i) {
				return t("img", {
					key: i.id,
					ref: "images",
					refInFor: !0,
					staticClass: "img",
					style: {
						"mix-blend-mode": i.previewBlendMode || i.blendingMode.value,
						width: `${i.width}px`,
						height: `${i.height}px`,
						opacity: i.opacity,
						position: i.position,
						left: `${i.left}px`,
						top: `${i.top}px`,
						transform: `rotate(${i.rotation}deg)`,
						"data-transform": `${i.transform}`
					},
					attrs: {
						src: i.src,
						draggable: "false"
					},
					on: {
						mousedown: function(t) {
							return e.handleImageMouseDown(i, t)
						},
						load: function(t) {
							return e.handleImageLoad(i, t)
						}
					}
				})
			}
			)), 0), t("crop-rect", {
				ref: "cropRect",
				attrs: {
					"root-container": e.workArea,
					"original-target-size": e.originalTargetSize,
					"show-grid": !1,
					"show-mask": !1,
					"show-area": !1,
					"show-selection": e.showSelection,
					"only-selection-clickable": !0,
					"show-selection-remove": !0,
					"show-selection-rotate": !1,
					target: e.target,
					"selection-ratio": e.activeImageRatio,
					"selection-target": e.selectedImageView
				},
				nativeOn: {
					requestRemove: function(t) {
						return e.handleSelectionRequestRemove.apply(null, arguments)
					},
					cropRectChange: function(t) {
						return e.handleCropRectChange.apply(null, arguments)
					}
				}
			}), e.showTools ? [t("div", {
				class: ["block", "btn", "btn-add-image", {
					"hidden-label": this.showControls
				}]
			}, [t("file-picker", {
				attrs: {
					langs: {
						labelChoose: e.computedLangs.tool_add_image_add
					}
				},
				on: {
					"files-selected": e.handleFileSelected
				}
			})], 1), e.showControls ? t("div", {
				class: ["block", "block-opacity", {
					active: e.activeSelectionOpacity < 100
				}]
			}, [t("el-tooltip", {
				attrs: {
					content: e.computedLangs.tooltip_opacity,
					placement: "top",
					"popper-class": "add-image-tooltip",
					"visible-arrow": !1
				}
			}, [t("i", {
				staticClass: "icon"
			})]), t("div", {
				staticClass: "slider-wrap"
			}, [t("extended-slider", {
				staticClass: "slider",
				attrs: {
					min: 0,
					max: 100,
					step: 1,
					marks: e.opacityMarks,
					target: e.activeSelectionOpacity,
					"default-value": 100,
					"show-tooltip": !1,
					"default-accuracity": 1,
					"focus-area-class": "tool_add-image"
				},
				on: {
					change: e.handleOpacityChange
				}
			})], 1), t("div", {
				staticClass: "val-out"
			}, [e._v(" " + e._s(e.activeSelectionOpacity) + "% ")])], 1) : e._e(), e.showControls ? t("div", {
				staticClass: "block block-blending"
			}, [t("el-dropdown", {
				staticClass: "blending-dropdown",
				attrs: {
					trigger: "click",
					"visible-arrow": !1,
					placement: "top"
				},
				on: {
					command: e.handleBlendingModeChange
				}
			}, [t("div", {
				class: ["label", {
					active: e.$data._activeBlendingMode !== e.blendingModes[0]
				}]
			}, [t("el-tooltip", {
				attrs: {
					content: e.computedLangs.tooltip_blend_mode,
					placement: "top",
					"popper-class": "add-image-tooltip",
					"visible-arrow": !1
				}
			}, [t("i", {
				staticClass: "icon"
			})]), t("span", [e._v(e._s(e.$data._activeBlendingMode.label))]), t("i", {
				staticClass: "arrow"
			})], 1), t("el-dropdown-menu", {
				staticClass: "dropdown",
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			}, e._l(e.blendingModes, (function(i) {
				return t("el-dropdown-item", {
					key: i.id,
					class: [{
						selected: e.$data._activeBlendingMode.id === i.id
					}],
					attrs: {
						command: i
					},
					nativeOn: {
						mouseover: function(t) {
							return e.blendItemMouseOver(i)
						},
						mouseout: function(t) {
							return e.blendItemMouseOut.apply(null, arguments)
						}
					}
				}, [t("div", [e._v(e._s(i.label))])])
			}
			)), 1)], 1)], 1) : e._e()] : e._e()], 2)
		}
		  , wn = [];
		class xn {
			static get MODE_NONE() {
				return "none"
			}
			static get MODE_FULL() {
				return "full"
			}
			static get MODE_MASK() {
				return "mask"
			}
		}
		var Cn = {
			name: "AddImage",
			components: {
				Selection: Je,
				CropRect: tt,
				ExtendedSlider: It,
				FilePicker: v
			},
			extends: Pe,
			data() {
				return {
					_images: [],
					_activeImage: null,
					_activeBlendingMode: null,
					_activeOpacity: 100
				}
			},
			created() {
				this.$data._activeBlendingMode = this.blendingModes[0]
			},
			mounted() {
				this.notifyActivate(),
				window.addEventListener("keydown", this._handleKeyDown);
				const e = this.$watch("workArea", (t=>{
					t && (this.workArea.appendChild(this.$refs.imagesContainer),
					this.$nextTick((()=>{
						e()
					}
					)))
				}
				), {
					immediate: !0
				})
			},
			props: {
				workArea: {
					type: HTMLElement
				},
				target: {
					type: HTMLElement
				},
				originalTargetSize: {
					type: Object,
					default() {
						return {
							width: 1,
							height: 1
						}
					}
				},
				mode: {
					type: String,
					default: xn.MODE_NONE
				}
			},
			watch: {
				showTools: {
					handler(e) {
						e && this.notifyActivate()
					}
				},
				"$data._images": {
					handler(e) {
						this.$el.dispatchEvent(new CustomEvent("imagesListChanges",{
							cancelable: !0,
							bubbles: !0,
							detail: {
								images: e
							}
						}))
					}
				}
			},
			computed: {
				computedLangs() {
					return {
						tool_add_image_add: "Add image",
						tooltip_blend_opacity: "Opacity",
						tooltip_blend_mode: "Blend Mode",
						...this.$langs
					}
				},
				middle() {
					return 50
				},
				opacityMarks() {
					return {
						[this.middle]: {
							style: {
								color: "#000000",
								display: "none"
							},
							label: this.$createElement("strong", this.middle)
						}
					}
				},
				imagesContainerStyle() {
					return {
						"pointer-events": this.mode === xn.MODE_FULL ? "unset" : "none"
					}
				},
				activeSelectionOpacity() {
					return this.$data._activeOpacity
				},
				blendingModes() {
					return [{
						id: "blend_normal",
						label: "normal",
						value: "normal",
						prepare_command: "format=rgba,scale={w}:{h},colorchannelmixer=aa={o}",
						command: "overlay=x={x}:y={y},format=rgba"
					}, {
						id: "blend_multiply",
						label: "multiply",
						value: "multiply",
						prepare_command: "format=rgba,scale={w}:{h},pad=w={vw}:h={vh}:color=white:x={x}:y={y}",
						command: "blend=all_mode=multiply:all_opacity={o},format=rgba"
					}, {
						id: "blend_darken",
						label: "darken",
						value: "darken",
						prepare_command: "format=rgba,scale={w}:{h},pad=w={vw}:h={vh}:color=white:x={x}:y={y}",
						command: "blend=all_mode=darken:all_opacity={o},format=rgba"
					}, {
						id: "blend_screen",
						label: "screen",
						value: "screen",
						prepare_command: "format=rgba,scale={w}:{h},pad=w={vw}:h={vh}:color=black:x={x}:y={y}",
						command: "blend=all_mode=screen:all_opacity={o},format=rgba"
					}, {
						id: "blend_lighten",
						label: "lighten",
						value: "lighten",
						prepare_command: "format=rgba,scale={w}:{h},pad=w={vw}:h={vh}:color=black:x={x}:y={y}",
						command: "blend=all_mode=lighten:all_opacity={o},format=rgba"
					}].map((e=>(e.label = this.$langs.blend_modes?.[e.id.replace("blend_", "")] || e.label,
					e)))
				},
				showTools() {
					return this.mode === xn.MODE_FULL
				},
				activeImageRatio() {
					return this.$data._activeImage?.ratio || 1
				},
				showSelection() {
					return this.mode === xn.MODE_FULL && this.$data._activeImage && this.$data._images.length > 0
				},
				selectedImageView() {
					return this.$data._activeImage?.view
				},
				showControls() {
					return this.$data._images.length > 0
				}
			},
			methods: {
				_handleKeyDown(e) {
					if (this.$data._activeImage && (e.ctrlKey || e.metaKey)) {
						const t = this.$data._images.indexOf(this.$data._activeImage);
						"BracketRight" === e.code && t < this.$data._images.length - 1 ? (e.preventDefault(),
						this.$data._images.splice(t, 2, this.$data._images[t + 1], this.$data._images[t])) : "BracketLeft" === e.code && t > 0 && (e.preventDefault(),
						this.$data._images.splice(t - 1, 2, this.$data._images[t], this.$data._images[t - 1]))
					}
				},
				handleFileSelected(e) {
					const t = this.target.getBoundingClientRect()
					  , i = URL.createObjectURL(e[0])
					  , n = new Image;
					n.onload = ()=>{
						const o = n.width / n.height
						  , a = Math.min(n.width, .15 * t.width)
						  , r = a / o
						  , s = {
							id: this.$uuidv4(),
							src: i,
							active: !0,
							opacity: 1,
							blendingMode: this.blendingModes[0],
							width: a,
							height: r,
							originalWidth: n.width,
							originalHeight: n.height,
							view: null,
							position: "absolute",
							left: (t.width - a) / 2,
							top: (t.height - r) / 2,
							rotation: 0,
							remoteFileName: null,
							ratio: o,
							previewBlendMode: null,
							getCommand: (({vw: e=this.GlobalModel.mediaInfo.width, vh: i=this.GlobalModel.mediaInfo.height}={})=>function() {
								return [this.blendingMode.prepare_command.replace("{w}", "" + this.width * (e / t.width)).replace("{h}", "" + this.height * (i / t.height)).replace("{o}", `${this.opacity}`).replace("{vw}", `${e}`).replace("{vh}", `${i}`).replace("{x}", "" + this.left * (e / t.width)).replace("{y}", "" + this.top * (i / t.height)), this.blendingMode.command.replace("{x}", "" + this.left * (e / t.width)).replace("{y}", "" + this.top * (i / t.height)).replace("{o}", `${this.opacity}`)]
							}
							)()
						};
						this.$data._activeBlendingMode = this.blendingModes[0],
						this.$data._activeOpacity = 100,
						this.uploadFile(e[0], (e=>{
							e?.data?.response?.tmp_filename && (s.remoteFileName = e.data.response.tmp_filename)
						}
						)),
						this.$data._images.push(s),
						this.$data._activeImage = s,
						n.onload = null,
						n.src = ""
					}
					,
					n.src = i
				},
				blendItemMouseOver(e) {
					this.$data._activeImage && (this.$data._activeImage.previewBlendMode = e.value)
				},
				blendItemMouseOut() {
					this.$data._activeImage.previewBlendMode = null
				},
				uploadFile(e, t) {
					this.RemoteProcessor.uploadFile({
						file: e,
						pauseQueue: !0,
						query: {
							uid: window.glob?.uid
						},
						callback: e=>{
							t(e)
						}
					})
				},
				reset() {
					this.$data._images = [],
					this.$data._activeOpacity = 100,
					this.$data._activeBlendingMode = this.blendingModes[0]
				},
				handleBlendingModeChange(e) {
					this.$data._activeBlendingMode = e,
					this.$data._activeImage && (this.$data._activeImage.previewBlendMode = null,
					this.$data._activeImage.blendingMode = e)
				},
				handleOpacityChange(e) {
					this.$data._activeOpacity = e,
					this.$data._activeImage && (this.$data._activeImage.opacity = e / 100)
				},
				handleImageMouseDown(e, t) {
					this.showSelection && (this.$data._activeImage = e,
					this.$data._activeBlendingMode = e.blendingMode,
					this.$data._activeOpacity = 100 * e.opacity,
					this.$nextTick((()=>{
						this.$refs.cropRect.forceSelectionMouseDown(t)
					}
					)))
				},
				handleImageLoad(e, t) {
					this.$nextTick((()=>{
						e.view = t.target
					}
					))
				},
				handleCropRectChange({detail: {value: {nonScaled: e}}}) {
					this.$data._activeImage && ("rotate" === e.mode ? this.$data._activeImage.rotation = e.selectionRotation : Object.assign(this.$data._activeImage, {
						width: e.width,
						height: e.height,
						top: e.top,
						left: e.left,
						rotation: e.selectionRotation
					}))
				},
				handleSelectionRequestRemove() {
					this.$data._activeImage && (this.$data._images.splice(this.$data._images.indexOf(this.$data._activeImage), 1),
					this.$data._activeImage = null)
				}
			}
		}
		  , $n = Cn
		  , Sn = f($n, yn, wn, !1, null, "25bebee9", null)
		  , kn = Sn.exports;
		class Tn {
			static get MODE_NONE() {
				return "none"
			}
			static get MODE_FULL() {
				return "full"
			}
			static get MODE_MASK() {
				return "mask"
			}
			static get KEY() {
				return "AIzaSyBrrngLqlw5GP73qE9hdTGEZocmRxrvvKU"
			}
		}
		var Mn = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "tool_add-text"
			}, [t("div", {
				ref: "textsContainer",
				staticClass: "texts-container",
				style: {
					cursor: e.$data._texts.length > 0 ? "default" : "text"
				},
				on: {
					mousedown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e.handleAreaClick.apply(null, arguments)
					}
				}
			}, e._l(e.$data._texts, (function(i) {
				return t("text-input", {
					key: i.id,
					staticClass: "txt",
					style: {
						color: i.color,
						left: `${i.left}px`,
						top: `${i.top}px`,
						fontSize: `${i.fontSize.value}px`,
						transform: `rotate(${i.rotation}deg)`,
						fontStyle: i.fontStyle,
						fontWeight: i.fontWeight,
						textAlign: i.align,
						fontFamily: i.fontFamily,
						backgroundColor: i.backgroundColor,
						position: "absolute"
					},
					attrs: {
						draggable: "false",
						"data-id": i.id,
						"max-avail-width": i.maxAvailWidth,
						"max-avail-height": i.maxAvailHeight,
						"max-width": i.maxWidth,
						"max-height": i.maxHeight,
						"force-max-width": i.forceMaxWidth
					},
					on: {
						select: function(t) {
							return e.handleTextMouseDown(i, t)
						},
						textInput: function(t) {
							return e.handleTextInput(i)
						},
						mounted: function(t) {
							return e.handleTextInputMounted(i, t)
						}
					}
				})
			}
			)), 1), t("crop-rect", {
				ref: "cropRect",
				attrs: {
					"root-container": e.workArea,
					"original-target-size": e.originalTargetSize,
					"show-grid": !1,
					"show-mask": !1,
					"show-area": !1,
					"show-selection": e.showSelection,
					"only-selection-clickable": !0,
					"show-selection-remove": !0,
					"show-selection-rotate": !1,
					target: e.target,
					"selection-ratio": e.selectedTextRatio,
					"selection-target": e.selectedTextView,
					"ignore-selection-area-on-second-click": !0,
					"min-crop-size": 20
				},
				nativeOn: {
					requestRemove: function(t) {
						return e.handleSelectionRequestRemove.apply(null, arguments)
					},
					cropRectChange: function(t) {
						return e.handleCropRectChange.apply(null, arguments)
					}
				}
			}), e.showTools ? [t("div", {
				class: ["block", "btn btn-add-text", {
					"hide-label": e.$data._texts.length > 0
				}],
				on: {
					click: e.handleBtnAddTextClick
				}
			}, [0 === e.$data._texts.length ? t("div", [e._v(e._s(e.computedLangs.tool_add_text_add))]) : e._e()]), e.showToolsBlock ? [e.$data._texts.length > 0 ? t("div", {
				staticClass: "block block-fonts"
			}, [t("g-font-picker", {
				attrs: {
					"api-key": e.fontsAPIKey,
					"font-style": e.fontStyle,
					"font-weight": e.fontWeight,
					"active-font": e.$data._activeFont
				},
				on: {
					change: e.handleFontChange,
					fontsReady: e.handleFontsReady
				},
				nativeOn: {
					click: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e.handleDropdownClick.apply(null, arguments)
					}
				}
			})], 1) : e._e(), t("div", {
				staticClass: "block block-size"
			}, [t("el-dropdown", {
				ref: "sizeDropdown",
				staticClass: "add-text-dropdown",
				attrs: {
					trigger: "click",
					"visible-arrow": !1,
					placement: "top"
				},
				on: {
					command: e.handleFontSizeChange
				}
			}, [t("div", {
				class: ["label", "size", {
					active: e.$data._activeFontSize !== e.fontSizes[0]
				}]
			}, [t("span", [e._v(e._s(e.$data._activeFontSize.label))]), t("i", {
				staticClass: "arrow"
			})]), t("el-dropdown-menu", {
				staticClass: "dropdown size",
				style: {
					"--dropdown-width": e.$data._sizeDropdownWidth
				},
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			}, e._l(e.listFontSizes, (function(i) {
				return t("el-dropdown-item", {
					key: i.id,
					class: [{
						selected: e.$data._activeFontSize.id === i.id
					}],
					attrs: {
						command: i
					},
					nativeOn: {
						click: function(t) {
							return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e.handleDropdownClick.apply(null, arguments)
						}
					}
				}, [t("div", [e._v(e._s(i.label))])])
			}
			)), 1)], 1)], 1), t("div", {
				staticClass: "block block-style"
			}, [t("button", {
				class: ["btn", "bold", {
					active: e.$data._activeBold
				}],
				on: {
					click: e.handleBoldBtnClick
				}
			}), t("button", {
				class: ["btn", "italic", {
					active: e.$data._activeItalic
				}],
				on: {
					click: e.handleItalicBtnClick
				}
			})]), t("div", {
				staticClass: "block block-align"
			}, [t("el-radio-group", {
				on: {
					change: e.handleAlignChange
				},
				model: {
					value: e.$data._activeAlign,
					callback: function(t) {
						e.$set(e.$data, "_activeAlign", t)
					},
					expression: "$data._activeAlign"
				}
			}, [t("el-radio-button", {
				staticClass: "a-left",
				attrs: {
					label: "left"
				}
			}, [t("i")]), t("el-radio-button", {
				staticClass: "a-center",
				attrs: {
					label: "center"
				}
			}, [t("i")]), t("el-radio-button", {
				staticClass: "a-right",
				attrs: {
					label: "right"
				}
			}, [t("i")])], 1)], 1), t("div", {
				staticClass: "block block-color"
			}, [t("color-picker", {
				attrs: {
					"active-bg-color": e.activeBgColor,
					"active-text-color": e.activeTextColor
				},
				on: {
					change: e.handleColorChange
				}
			})], 1)] : e._e()] : e._e()], 2)
		}
		  , En = []
		  , On = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "input",
				style: {
					"--max-width": `${e.$data._maxWidth}px`,
					"--max-height": `${e.$data._maxHeight}px`,
					"--forcedWidth": `${e.forcedWidth}`,
					"--forcedHeight": `${e.forcedHeight}`
				},
				attrs: {
					contenteditable: "true",
					"data-gramm_editor": "false",
					spellcheck: "false"
				},
				on: {
					keydown: e._handleKeyDown,
					mousedown: function(t) {
						return !t.type.indexOf("key") && e._k(t.keyCode, "left", 37, t.key, ["Left", "ArrowLeft"]) || "button"in t && 0 !== t.button ? null : e._handleMouseDown.apply(null, arguments)
					}
				}
			})
		}
		  , An = []
		  , In = {
			name: "TextInput",
			data() {
				return {
					_pendingOperations: [],
					_sizeObserver: null,
					_maxWidth: 0,
					_maxHeight: 0,
					_maxAvailWidth: 0,
					_maxAvailHeight: 0
				}
			},
			mounted() {
				this.$emit("mounted", {
					el: this.$el,
					component: this
				}),
				this.$data._pendingOperations.forEach((e=>{
					e()
				}
				)),
				this.$data._sizeObserver = new window.ResizeObserver((e=>{
					this.$emit("textInput")
				}
				)),
				this.$data._sizeObserver.observe(this.$el),
				this.$el.addEventListener("paste", (e=>{
					e.preventDefault(),
					this.$data._maxWidth = this.$data._maxAvailWidth,
					this.$data._maxHeight = this.$data._maxAvailHeight;
					const t = e.clipboardData.getData("text/html") || e.clipboardData.getData("text/plain")
					  , i = document.createElement("div");
					i.innerHTML = t,
					document.execCommand("insertHTML", !1, i.innerText)
				}
				))
			},
			props: {
				maxWidth: {
					type: Number,
					default: 0
				},
				maxHeight: {
					type: Number,
					default: 0
				},
				maxAvailWidth: {
					type: Number,
					default: 0
				},
				maxAvailHeight: {
					type: Number,
					default: 0
				},
				forceMaxWidth: {
					type: Boolean,
					default: !1
				}
			},
			watch: {
				maxWidth: {
					handler(e) {
						this.$data._maxWidth = e
					},
					immediate: !0
				},
				maxHeight: {
					handler(e) {
						this.$data._maxHeight = e
					},
					immediate: !0
				},
				maxAvailWidth: {
					handler(e) {
						this.$data._maxAvailWidth = e
					},
					immediate: !0
				},
				maxAvailHeight: {
					handler(e) {
						this.$data._maxAvailHeight = e
					},
					immediate: !0
				}
			},
			beforeDestroy() {
				this.$data._sizeObserver?.disconnect()
			},
			methods: {
				focus() {
					this.$el ? this.$el.focus() : this.$data._pendingOperations.push((()=>{
						this.$el.focus()
					}
					))
				},
				forceUseMaxAvailSize() {
					this.$data._maxWidth = this.$data._maxAvailWidth,
					this.$data._maxHeight = this.$data._maxAvailHeight
				},
				forceUseMaxSize() {
					this.$data._maxWidth = this.maxWidth,
					this.$data._maxHeight = this.maxHeight
				},
				_handleMouseDown(e) {
					console.log("mouse down", this),
					e.stopImmediatePropagation(),
					this.$emit("select", e)
				},
				_handleKeyDown(e) {
					(!e.ctrlKey && !e.metaKey || "BracketRight" !== e.code && "BracketLeft" !== e.code) && e.stopImmediatePropagation();
					const t = e.key.toLowerCase();
					if (!(e.ctrlKey || e.metaKey || /^((arrow.*)|(page.*)|end|home|(.*lock))$/.test(t))) {
						if (this.forceMaxWidth)
							return this.$data._maxWidth = this.maxWidth,
							void (this.$data._maxHeight = this.maxHeight);
						this.$data._maxWidth = this.$data._maxAvailWidth,
						this.$data._maxHeight = this.$data._maxAvailHeight
					}
				}
			},
			computed: {
				forcedWidth() {
					return this.forceMaxWidth ? `${this.maxWidth}px` : "unset"
				},
				forcedHeight() {
					return this.forceMaxWidth ? `${this.maxHeight}px` : "unset"
				}
			}
		}
		  , Fn = In
		  , Dn = f(Fn, On, An, !1, null, "13ab9c62", null)
		  , Rn = Dn.exports
		  , Pn = function() {
			var e = this
			  , t = e._self._c;
			return t("el-dropdown", {
				staticClass: "add-text-dropdown",
				attrs: {
					trigger: "click",
					"visible-arrow": !1,
					tabindex: "-1",
					placement: "top-start"
				},
				on: {
					command: e.handleFontChange
				}
			}, [e.$data._activeFont ? [t("div", {
				class: ["label", {
					active: e.$data._activeFont !== e.fonts[0]
				}]
			}, [t("span", {
				staticClass: "output",
				attrs: {
					tabindex: "-1"
				}
			}, [e._v(e._s(e.$data._activeFont.family))]), t("i", {
				staticClass: "arrow"
			})]), t("el-dropdown-menu", {
				staticClass: "dropdown",
				attrs: {
					slot: "dropdown"
				},
				slot: "dropdown"
			}, e._l(e.fonts, (function(i) {
				return t("el-dropdown-item", {
					key: i.id,
					class: [{
						selected: e.$data._activeFont.id === i.id
					}],
					attrs: {
						command: i,
						tabindex: "-1"
					}
				}, [t("span", {
					style: {
						"font-family": i.family,
						"font-style": e.fontStyle,
						"font-weight": e.fontWeight
					}
				}, [e._v(" " + e._s(i.family) + " ")])])
			}
			)), 1)] : e._e()], 2)
		}
		  , Ln = []
		  , Bn = function() {
			return Bn = Object.assign || function(e) {
				for (var t, i = 1, n = arguments.length; i < n; i++)
					for (var o in t = arguments[i],
					t)
						Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
				return e
			}
			,
			Bn.apply(this, arguments)
		};
		function Nn(e, t) {
			var i = {};
			for (var n in e)
				Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
			if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
				var o = 0;
				for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
					t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]])
			}
			return i
		}
		function jn(e, t, i, n) {
			return new (i || (i = Promise))((function(o, a) {
				function r(e) {
					try {
						l(n.next(e))
					} catch (t) {
						a(t)
					}
				}
				function s(e) {
					try {
						l(n["throw"](e))
					} catch (t) {
						a(t)
					}
				}
				function l(e) {
					e.done ? o(e.value) : new i((function(t) {
						t(e.value)
					}
					)).then(r, s)
				}
				l((n = n.apply(e, t || [])).next())
			}
			))
		}
		function zn(e, t) {
			var i, n, o, a, r = {
				label: 0,
				sent: function() {
					if (1 & o[0])
						throw o[1];
					return o[1]
				},
				trys: [],
				ops: []
			};
			return a = {
				next: s(0),
				throw: s(1),
				return: s(2)
			},
			"function" === typeof Symbol && (a[Symbol.iterator] = function() {
				return this
			}
			),
			a;
			function s(e) {
				return function(t) {
					return l([e, t])
				}
			}
			function l(a) {
				if (i)
					throw new TypeError("Generator is already executing.");
				while (r)
					try {
						if (i = 1,
						n && (o = 2 & a[0] ? n["return"] : a[0] ? n["throw"] || ((o = n["return"]) && o.call(n),
						0) : n.next) && !(o = o.call(n, a[1])).done)
							return o;
						switch (n = 0,
						o && (a = [2 & a[0], o.value]),
						a[0]) {
						case 0:
						case 1:
							o = a;
							break;
						case 4:
							return r.label++,
							{
								value: a[1],
								done: !1
							};
						case 5:
							r.label++,
							n = a[1],
							a = [0];
							continue;
						case 7:
							a = r.ops.pop(),
							r.trys.pop();
							continue;
						default:
							if (o = r.trys,
							!(o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
								r = 0;
								continue
							}
							if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
								r.label = a[1];
								break
							}
							if (6 === a[0] && r.label < o[1]) {
								r.label = o[1],
								o = a;
								break
							}
							if (o && r.label < o[2]) {
								r.label = o[2],
								r.ops.push(a);
								break
							}
							o[2] && r.ops.pop(),
							r.trys.pop();
							continue
						}
						a = t.call(e, r)
					} catch (s) {
						a = [6, s],
						n = 0
					} finally {
						i = o = 0
					}
				if (5 & a[0])
					throw a[1];
				return {
					value: a[0] ? a[1] : void 0,
					done: !0
				}
			}
		}
		function Gn(e, t) {
			void 0 === t && (t = {});
			var i = t.insertAt;
			if (e && "undefined" !== typeof document) {
				var n = document.head || document.getElementsByTagName("head")[0]
				  , o = document.createElement("style");
				o.type = "text/css",
				"top" === i && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o),
				o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e))
			}
		}
		var Vn = '@charset "UTF-8";\ndiv[id^=font-picker] {\n  position: relative;\n  display: inline-block;\n  width: 200px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n}\ndiv[id^=font-picker] * {\n  box-sizing: border-box;\n}\ndiv[id^=font-picker] p {\n  margin: 0;\n  padding: 0;\n}\ndiv[id^=font-picker] button {\n  color: inherit;\n  font-size: inherit;\n  background: none;\n  border: 0;\n  outline: none;\n  cursor: pointer;\n}\ndiv[id^=font-picker] .dropdown-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  height: 35px;\n  padding: 0 10px;\n  background: #cbcbcb;\n}\ndiv[id^=font-picker] .dropdown-button:hover, div[id^=font-picker] .dropdown-button:focus {\n  background: #bebebe;\n}\ndiv[id^=font-picker] .dropdown-button .dropdown-font-name {\n  overflow: hidden;\n  white-space: nowrap;\n}\ndiv[id^=font-picker] .dropdown-icon {\n  margin-left: 10px;\n}\n@-webkit-keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\ndiv[id^=font-picker] .dropdown-icon.loading::before {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border: 2px solid #b2b2b2;\n  border-top-color: #000000;\n  border-radius: 50%;\n  -webkit-animation: spinner 0.6s linear infinite;\n          animation: spinner 0.6s linear infinite;\n  content: "";\n}\ndiv[id^=font-picker] .dropdown-icon.finished::before {\n  display: block;\n  width: 0;\n  height: 0;\n  margin: 0 2px;\n  border-top: 6px solid #000000;\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  transition: transform 0.3s;\n  content: "";\n}\ndiv[id^=font-picker] .dropdown-icon.error::before {\n  content: "⚠";\n}\ndiv[id^=font-picker].expanded .dropdown-icon.finished::before {\n  transform: rotate(-180deg);\n}\ndiv[id^=font-picker].expanded ul {\n  max-height: 200px;\n}\ndiv[id^=font-picker] ul {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  max-height: 0;\n  margin: 0;\n  padding: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background: #eaeaea;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  -webkit-overflow-scrolling: touch;\n}\ndiv[id^=font-picker] ul li {\n  height: 35px;\n  list-style: none;\n}\ndiv[id^=font-picker] ul li button {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 10px;\n  white-space: nowrap;\n}\ndiv[id^=font-picker] ul li button:hover, div[id^=font-picker] ul li button:focus {\n  background: #dddddd;\n}\ndiv[id^=font-picker] ul li button.active-font {\n  background: #d1d1d1;\n}';
		function Hn(e) {
			return e.replace(/\s+/g, "-").toLowerCase()
		}
		function Wn(e) {
			if (e.match(/[^0-9a-z]/i))
				throw Error("The `pickerId` parameter may only contain letters and digits")
		}
		function Un(e) {
			return new Promise((function(t, i) {
				var n = new XMLHttpRequest;
				n.overrideMimeType("application/json"),
				n.open("GET", e, !0),
				n.onreadystatechange = function() {
					4 === n.readyState && (200 !== n.status ? i(new Error("Response has status code " + n.status)) : t(n.responseText))
				}
				,
				n.send()
			}
			))
		}
		Gn(Vn);
		var Xn = "https://www.googleapis.com/webfonts/v1/webfonts";
		function qn(e) {
			return jn(this, void 0, void 0, (function() {
				var t, i, n, o;
				return zn(this, (function(a) {
					switch (a.label) {
					case 0:
						return t = new URL(Xn),
						t.searchParams.append("sort", "popularity"),
						t.searchParams.append("key", e),
						[4, Un(t.href)];
					case 1:
						return i = a.sent(),
						n = JSON.parse(i),
						o = n.items,
						[2, o.map((function(e) {
							var t = e.family
							  , i = e.subsets
							  , n = Nn(e, ["family", "subsets"]);
							return Bn(Bn({}, n), {
								family: t,
								id: Hn(t),
								scripts: i
							})
						}
						))]
					}
				}
				))
			}
			))
		}
		var Kn = document.createElement("style");
		function Yn(e, t) {
			var i = Hn(e.family)
			  , n = "\n\t\t\t#font-button-" + i + t + ' {\n\t\t\t\tfont-family: "' + e.family + '";\n\t\t\t}\n\t\t';
			Kn.appendChild(document.createTextNode(n))
		}
		function Jn(e) {
			var t = "active-font-" + e
			  , i = document.getElementById(t);
			return i || (i = document.createElement("style"),
			i.id = t,
			document.head.appendChild(i)),
			i
		}
		function Qn(e, t, i) {
			var n = "\n\t\t.apply-font" + i + ' {\n\t\t\tfont-family: "' + e.family + '"' + (t ? ', "' + t + '"' : "") + ";\n\t\t}\n\t"
			  , o = Jn(i);
			o.innerHTML = n
		}
		document.head.appendChild(Kn);
		var Zn = "data-is-preview";
		function eo(e) {
			return "font-" + e
		}
		function to(e, t) {
			var i = document.getElementById(eo(e));
			return null === t || void 0 === t ? null !== i : null !== i && i.getAttribute(Zn) === t.toString()
		}
		function io(e, t) {
			var i = document.createElement("style");
			i.id = eo(e),
			i.setAttribute(Zn, t.toString()),
			document.head.appendChild(i)
		}
		function no(e, t) {
			var i = eo(e)
			  , n = document.getElementById(i);
			n ? n.textContent = t : console.error('Could not fill stylesheet: Stylesheet with ID "' + i + '" not found')
		}
		function oo(e, t) {
			var i = eo(e)
			  , n = document.getElementById(i);
			n ? n.setAttribute(Zn, t.toString()) : console.error('Could not change stylesheet type: Stylesheet with ID "' + i + '" not found')
		}
		function ao(e, t) {
			var i, n = [];
			do {
				i = e.exec(t),
				i && n.push(i[1])
			} while (i);
			return n
		}
		var ro = /@font-face {([\s\S]*?)}/gm
		  , so = /font-family: ['"](.*?)['"]/gm;
		function lo(e) {
			var t = ao(ro, e)
			  , i = {};
			return t.forEach((function(e) {
				var t = ao(so, e)[0]
				  , n = Hn(t);
				n in i || (i[n] = ""),
				i[n] += "@font-face {\n" + e + "\n}\n\n"
			}
			)),
			i
		}
		var co = "https://fonts.googleapis.com/css";
		function uo(e, t, i, n) {
			return jn(this, void 0, void 0, (function() {
				var o, a, r, s, l;
				return zn(this, (function(c) {
					return o = new URL(co),
					a = i.join(","),
					r = e.map((function(e) {
						return e.family + ":" + a
					}
					)),
					o.searchParams.append("family", r.join("|")),
					o.searchParams.append("subset", t.join(",")),
					n && (s = e.map((function(e) {
						return e.family
					}
					)).join(""),
					l = s.split("").filter((function(e, t, i) {
						return i.indexOf(e) === t
					}
					)).join(""),
					o.searchParams.append("text", l)),
					o.searchParams.append("font-display", "swap"),
					[2, Un(o.href)]
				}
				))
			}
			))
		}
		function ho(e, t, i, n) {
			return jn(this, void 0, void 0, (function() {
				var o, a, r, s;
				return zn(this, (function(l) {
					switch (l.label) {
					case 0:
						return o = Array.from(e.values()),
						a = o.map((function(e) {
							return e.id
						}
						)).filter((function(e) {
							return !to(e)
						}
						)),
						a.forEach((function(e) {
							return io(e, !0)
						}
						)),
						[4, uo(o, t, i, !0)];
					case 1:
						return r = l.sent(),
						s = lo(r),
						o.forEach((function(e) {
							if (Yn(e, n),
							a.includes(e.id)) {
								if (!(e.id in s))
									return void console.error('Missing styles for font "' + e.family + '" (fontId "' + e.id + '") in Google Fonts response');
								no(e.id, s[e.id])
							}
						}
						)),
						[2]
					}
				}
				))
			}
			))
		}
		function po(e, t, i, n, o) {
			return jn(this, void 0, void 0, (function() {
				var a;
				return zn(this, (function(r) {
					switch (r.label) {
					case 0:
						return to(e.id, !1) ? (Qn(e, t, o),
						[3, 3]) : [3, 1];
					case 1:
						return to(e.id, !0) ? oo(e.id, !1) : io(e.id, !1),
						[4, uo([e], i, n, !1)];
					case 2:
						a = r.sent(),
						Qn(e, t, o),
						no(e.id, a),
						r.label = 3;
					case 3:
						return [2]
					}
				}
				))
			}
			))
		}
		var fo = "Open Sans"
		  , mo = {
			pickerId: "",
			families: [],
			categories: [],
			scripts: ["latin"],
			variants: ["regular"],
			filter: function() {
				return !0
			},
			limit: 50,
			sort: "alphabet"
		}
		  , vo = function() {
			function e(e, t, i, n) {
				void 0 === t && (t = fo);
				var o = i.pickerId
				  , a = void 0 === o ? mo.pickerId : o
				  , r = i.families
				  , s = void 0 === r ? mo.families : r
				  , l = i.categories
				  , c = void 0 === l ? mo.categories : l
				  , d = i.scripts
				  , u = void 0 === d ? mo.scripts : d
				  , h = i.variants
				  , p = void 0 === h ? mo.variants : h
				  , f = i.filter
				  , m = void 0 === f ? mo.filter : f
				  , v = i.limit
				  , g = void 0 === v ? mo.limit : v
				  , b = i.sort
				  , _ = void 0 === b ? mo.sort : b;
				void 0 === n && (n = function() {}
				),
				this.fonts = new Map,
				Wn(a),
				this.selectorSuffix = a ? "-" + a : "",
				this.apiKey = e,
				this.options = {
					pickerId: a,
					families: s,
					categories: c,
					scripts: u,
					variants: p,
					filter: m,
					limit: g,
					sort: _
				},
				this.onChange = n,
				this.addFont(t, !1),
				this.setActiveFont(t, !1)
			}
			return e.prototype.init = function() {
				return jn(this, void 0, void 0, (function() {
					var e, t, i, n, o, a;
					return zn(this, (function(r) {
						switch (r.label) {
						case 0:
							return [4, qn(this.apiKey)];
						case 1:
							for (e = r.sent(),
							t = function(t) {
								var n = e[t];
								if (i.fonts.size >= i.options.limit)
									return "break";
								i.fonts.has(n.family) || 0 !== i.options.families.length && !i.options.families.includes(n.family) || 0 !== i.options.categories.length && !i.options.categories.includes(n.category) || !i.options.scripts.every((function(e) {
									return n.scripts.includes(e)
								}
								)) || !i.options.variants.every((function(e) {
									return n.variants.includes(e)
								}
								)) || !0 !== i.options.filter(n) || i.fonts.set(n.family, n)
							}
							,
							i = this,
							n = 0; n < e.length; n += 1)
								if (o = t(n),
								"break" === o)
									break;
							return a = new Map(this.fonts),
							a["delete"](this.activeFontFamily),
							ho(a, this.options.scripts, this.options.variants, this.selectorSuffix),
							[2, this.fonts]
						}
					}
					))
				}
				))
			}
			,
			e.prototype.getFonts = function() {
				return this.fonts
			}
			,
			e.prototype.addFont = function(e, t) {
				void 0 === t && (t = !0);
				var i = {
					family: e,
					id: Hn(e)
				};
				if (this.fonts.set(e, i),
				t) {
					var n = new Map;
					n.set(e, i),
					ho(n, this.options.scripts, this.options.variants, this.selectorSuffix)
				}
			}
			,
			e.prototype.removeFont = function(e) {
				this.fonts["delete"](e)
			}
			,
			e.prototype.getActiveFont = function() {
				var e = this.fonts.get(this.activeFontFamily);
				if (e)
					return e;
				throw Error('Cannot get active font: "' + this.activeFontFamily + '" is not in the font list')
			}
			,
			e.prototype.setActiveFont = function(e, t) {
				var i = this;
				void 0 === t && (t = !0);
				var n = this.activeFontFamily
				  , o = this.fonts.get(e);
				if (!o)
					throw Error('Cannot update active font: "' + e + '" is not in the font list');
				this.activeFontFamily = e,
				po(o, n, this.options.scripts, this.options.variants, this.selectorSuffix).then((function() {
					t && i.onChange(o)
				}
				))
			}
			,
			e.prototype.setOnChange = function(e) {
				this.onChange = e
			}
			,
			e
		}()
		  , go = {
			name: "GFontPicker",
			data() {
				return {
					_fontManager: null,
					_activeFont: null,
					_fonts: []
				}
			},
			props: {
				apiKey: {
					type: String,
					required: !0
				},
				activeFont: {
					type: Object,
					default() {
						return {
							id: "open-sans",
							family: "Open Sans"
						}
					}
				},
				fontWeight: {
					type: String,
					default: "normal"
				},
				fontStyle: {
					type: String,
					default: "normal"
				}
			},
			mounted() {
				this.$data._fontManager = new vo(this.apiKey,"Open Sans",{
					variants: ["regular", "italic", "700", "700italic"],
					scripts: ["cyrillic-ext", "cyrillic"]
				}),
				this.$data._fontManager.setOnChange((e=>{
					this.$data._activeFont = e,
					this.$emit("change", e)
				}
				)),
				(async()=>{
					this.fonts = (await this.$data._fontManager.init()).values(),
					this.$data._activeFont = this.fonts.find((e=>e.id === this.activeFont.id)),
					this.$emit("fontsReady", this.fonts)
				}
				)()
			},
			watch: {
				activeFont: {
					handler(e) {
						this.$data._activeFont = e
					},
					immediate: !0
				}
			},
			methods: {
				handleFontChange(e) {
					this.$data._fontManager.setActiveFont(e.family)
				}
			},
			computed: {
				fonts: {
					set(e) {
						this.$data._fonts = [...e]
					},
					get() {
						return this.$data._fonts
					}
				}
			}
		}
		  , bo = go
		  , _o = f(bo, Pn, Ln, !1, null, "87d3efcc", null)
		  , yo = _o.exports
		  , wo = function() {
			var e = this
			  , t = e._self._c;
			return t("el-popover", {
				attrs: {
					"popper-class": "components-color_picker",
					"visible-arrow": !1
				}
			}, [t("div", [t("div", [t("el-radio-group", {
				staticClass: "color-target",
				model: {
					value: e.$data._colorTarget,
					callback: function(t) {
						e.$set(e.$data, "_colorTarget", t)
					},
					expression: "$data._colorTarget"
				}
			}, [t("el-radio-button", {
				attrs: {
					label: "text"
				}
			}, [e._v(e._s(e.computedLangs.text))]), t("el-radio-button", {
				attrs: {
					label: "background"
				}
			}, [e._v(e._s(e.computedLangs.background))])], 1)], 1), t("div", ["text" === e.$data._colorTarget ? t("sketch-picker", {
				staticClass: "picker",
				attrs: {
					"preset-colors": ["#000000", "#ffffff", "#03A9F4", "#FDD835", "#FF5722", "#2962FF", "#00FF7F", "#FF2976", "#FC1A2C", "rgba(0,0,0,0)"]
				},
				on: {
					input: e._handleColorChange
				},
				model: {
					value: e.$data._textColor,
					callback: function(t) {
						e.$set(e.$data, "_textColor", t)
					},
					expression: "$data._textColor"
				}
			}) : t("sketch-picker", {
				staticClass: "picker",
				attrs: {
					"preset-colors": ["#000000", "#ffffff", "#03A9F4", "#FDD835", "#FF5722", "#2962FF", "#00FF7F", "#FF2976", "#FC1A2C", "rgba(0,0,0,0)"]
				},
				on: {
					input: e._handleColorChange
				},
				model: {
					value: e.$data._bgColor,
					callback: function(t) {
						e.$set(e.$data, "_bgColor", t)
					},
					expression: "$data._bgColor"
				}
			})], 1)]), t("button", {
				staticClass: "btn",
				attrs: {
					slot: "reference"
				},
				slot: "reference"
			})])
		}
		  , xo = []
		  , Co = i(23)
		  , $o = {
			name: "ColorPicker",
			data() {
				return {
					_textColor: "#000000ff",
					_bgColor: "#00000000",
					_colorTarget: "text"
				}
			},
			components: {
				"sketch-picker": Co.Sketch
			},
			props: {
				langs: {
					type: Object,
					default() {
						return {
							text: "Текст",
							background: "Фон"
						}
					}
				},
				activeTextColor: {
					type: String,
					default: "#000000ff"
				},
				activeBgColor: {
					type: String,
					default: "#00000000"
				}
			},
			watch: {
				activeTextColor: {
					handler(e) {
						this.$data._textColor = e
					},
					immediate: !0
				},
				activeBgColor: {
					handler(e) {
						this.$data._bgColor = e
					},
					immediate: !0
				},
				"$data._colorTarget": {
					handler(e) {
						"background" === e && "#00000000" === this.$data._bgColor && (this.$data._bgColor = "#0000007f",
						this.$emit("change", {
							target: this.$data._colorTarget,
							color: "#0000007f"
						}))
					}
				}
			},
			methods: {
				_handleColorChange(e) {
					this.$emit("change", {
						target: this.$data._colorTarget,
						color: e.hex8
					})
				}
			},
			computed: {
				computedLangs() {
					return {
						text: "Текст",
						background: "Фон",
						...this.langs
					}
				}
			}
		}
		  , So = $o
		  , ko = f(So, wo, xo, !1, null, "36bdfa38", null)
		  , To = ko.exports
		  , Mo = {
			name: "AddText",
			components: {
				ColorPicker: To,
				GFontPicker: yo,
				TextInput: Rn,
				Selection: Je,
				CropRect: tt,
				ExtendedSlider: It
			},
			extends: Pe,
			data() {
				return {
					_texts: [],
					_fonts: [],
					_activeText: null,
					_activeBold: !1,
					_activeItalic: !1,
					_activeAlign: "left",
					_activeFontSize: null,
					_activeFont: {
						family: "Open Sans",
						id: "open-sans"
					},
					_activeTextColor: "#000000ff",
					_activeBackgroundColor: "#00000000",
					_contentObserver: null,
					_sizeDropdownWidth: 0
				}
			},
			created() {
				this.$data._activeFontSize = this.fontSizes.find((e=>e.default))
			},
			mounted() {
				this.notifyActivate(),
				window.addEventListener("keydown", this._handleKeyDown);
				const e = this.$watch("workArea", (t=>{
					t && (this.workArea.appendChild(this.$refs.textsContainer),
					this.$nextTick((()=>{
						e()
					}
					)))
				}
				), {
					immediate: !0
				})
			},
			props: {
				workArea: {
					type: HTMLElement
				},
				target: {
					type: HTMLElement
				},
				originalTargetSize: {
					type: Object,
					default() {
						return {
							width: 1,
							height: 1
						}
					}
				},
				mode: {
					type: String,
					default: Tn.MODE_NONE
				}
			},
			watch: {
				showTools: {
					handler(e) {
						e && this.notifyActivate()
					}
				},
				"$data._texts": {
					handler(e) {
						this.$el.dispatchEvent(new CustomEvent("textsListChanges",{
							cancelable: !0,
							bubbles: !0,
							detail: {
								texts: e
							}
						}))
					}
				},
				showToolsBlock: {
					handler(e) {
						e && !this.$data._contentObserver && (this.$data._contentObserver = new MutationObserver((e=>{
							const t = this.$refs.sizeDropdown?.$el?.getBoundingClientRect().toJSON() ?? {
								width: 0
							};
							t.width > 0 && (this.$data._sizeDropdownWidth = `${t.width}px`,
							this.$data._contentObserver.disconnect())
						}
						)),
						this.$data._contentObserver.observe(this.$el, {
							subtree: !0,
							childList: !0
						}))
					},
					immediate: !0
				}
			},
			computed: {
				computedLangs() {
					return {
						tool_add_text_add: "Add text",
						...this.$langs
					}
				},
				fontSizes() {
					return [10, 12, 14, 18, 24, 30, 36, 48, 60, 72].map(((e,t)=>({
						id: `${e}`,
						label: `${e}`,
						value: e,
						default: 24 === e,
						showInList: !0
					})))
				},
				listFontSizes() {
					return this.fontSizes.filter((e=>e.showInList))
				},
				showTools() {
					return this.mode === Tn.MODE_FULL
				},
				selectedTextRatio() {
					return this.$data._activeText?.ratio || 1
				},
				showSelection() {
					return this.mode === Tn.MODE_FULL && this.$data._activeText && this.$data._texts.length > 0
				},
				selectedTextView() {
					return this.$data._activeText?.view
				},
				fontsAPIKey() {
					return Tn.KEY
				},
				fontWeight() {
					return this.$data._activeText?.fontWeight ?? (this.$data._activeBold ? "bold" : "normal")
				},
				fontStyle() {
					return this.$data._activeText?.fontStyle ?? (this.$data._activeItalic ? "italic" : "normal")
				},
				activeTextColor() {
					return this.$data._activeText?.color ?? this.$data._activeTextColor
				},
				activeBgColor() {
					return this.$data._activeText?.backgroundColor ?? this.$data._activeBackgroundColor
				},
				showToolsBlock() {
					return this.$data._texts.length > 0
				},
				workAreaBounds() {
					const {width: e, height: t} = this.workArea?.getBoundingClientRect().toJSON() || {
						width: 0,
						height: 0
					};
					return {
						width: e,
						height: t
					}
				}
			},
			methods: {
				_handleKeyDown(e) {
					if (this.$data._activeText && (e.ctrlKey || e.metaKey)) {
						const t = this.$data._texts.indexOf(this.$data._activeText);
						"BracketRight" === e.code && t < this.$data._texts.length - 1 ? (e.preventDefault(),
						this.$data._texts.splice(t, 2, this.$data._texts[t + 1], this.$data._texts[t])) : "BracketLeft" === e.code && t > 0 && (e.preventDefault(),
						this.$data._texts.splice(t - 1, 2, this.$data._texts[t], this.$data._texts[t - 1]))
					}
				},
				reset() {
					this.$data._texts = []
				},
				checkOrLoadFont(e) {
					return new Promise(((t,i)=>{
						const n = `${this.$data._activeItalic ? "italic" : "normal"} ${this.$data._activeBold ? "bold" : "normal"} ${this.$data._activeFontSize.value}px ${this.$data._activeFont.family}`;
						try {
							document.fonts.check(n, e) ? t() : document.fonts.load(n, e).then((()=>{
								t()
							}
							)).catch((e=>{
								t()
							}
							))
						} catch (o) {
							t()
						}
					}
					))
				},
				handleFontChange(e) {
					this.$data._activeFont = e,
					(async()=>{
						await this.checkOrLoadFont(this.$data._activeText?.view.innerText || "aAБб"),
						this.$data._activeText && (this.$data._activeText.fontFamily = e.family,
						this.$data._activeText.view.focus(),
						this.$data._activeText.forceMaxWidth || (this.$data._activeText.component.forceUseMaxAvailSize(),
						this._updateSelectionBounds()))
					}
					)()
				},
				handleDropdownClick() {
					this.$data._activeText && this.$data._activeText.view.focus()
				},
				handleFontsReady(e) {
					this.$data._fonts = e
				},
				handleFontSizeChange(e) {
					this.$data._activeFontSize = e,
					this.$data._activeText && (this.$data._activeText.fontSize = e,
					this.$data._activeText.initialFontSize = this.$data._activeText.fontSize.value,
					this.$data._activeText.component.focus(),
					this.$data._activeText.forceMaxWidth || (this.$data._activeText.component.forceUseMaxAvailSize(),
					this._updateSelectionBounds()))
				},
				handleTextMouseDown(e, t) {
					this.$data._activeText !== e && (this.$data._activeText = e,
					this.$data._activeText.initialFontSize = this.$data._activeText.fontSize.value,
					this.$data._activeBold = "bold" === e.fontWeight,
					this.$data._activeItalic = "italic" === e.fontStyle,
					this.$data._activeAlign = e.align,
					this.$data._activeFontSize = this.fontSizes.find((t=>t.id === e.fontSize.id)),
					this.$data._activeFont = this.$data._fonts.find((t=>t.family === e.fontFamily.split(",")[0]?.replace(/["]/g, ""))),
					this.$data._activeTextColor = e.color,
					this.$data._activeBackgroundColor = e.backgroundColor),
					this.$nextTick((()=>{
						this.$refs.cropRect.forceSelectionMouseDown(t)
					}
					))
				},
				handleCropRectChange({detail: {value: {nonScaled: e}}}) {
					if (this.$data._activeText) {
						switch (e.action) {
						case "initial":
							this.$data._activeText.updatingFromSelection = !0,
							this.$data._activeText.initialFontSize = this.$data._activeText.fontSize.value,
							this.$data._activeText.forceMaxWidth = this.$data._activeText.forceMaxWidth || e.controlIndex > 0 && e.controlIndex % 2 === 0,
							this.$data._activeText.component.forceUseMaxSize();
							break;
						case "up":
							if (this.$data._activeText.forceMaxWidth)
								return;
							this.$data._activeText.updatingFromSelection = !1,
							this._updateSelectionBounds(!0);
							break
						}
						if (e.controlIndex > 0 && e.controlIndex % 2 === 1) {
							const t = Math.max(1, Math.floor(this.$data._activeText.initialFontSize * (e.width - 22) / e.initialBounds.width))
							  , i = this.fontSizes.find((e=>"custom" === e.id)) || {};
							i.id || (Object.assign(i, {
								id: "custom"
							}),
							this.fontSizes.push(i)),
							Object.assign(i, {
								label: t,
								value: t,
								default: !1
							}),
							this.$data._activeText.fontSize = {
								...i
							},
							this.$data._activeFontSize = i
						}
						"rotate" === e.mode ? this.$data._activeText.rotation = e.selectionRotation : Object.assign(this.$data._activeText, {
							top: e.top,
							left: e.left,
							rotation: e.selectionRotation,
							maxAvailWidth: this.workAreaBounds.width - e.left,
							maxAvailHeight: this.workAreaBounds.height - e.top,
							maxWidth: e.width,
							maxHeight: e.height
						}),
						"up" === e.action && (this.$data._activeText.initialFontSize = this.$data._activeText.fontSize.value)
					}
				},
				handleSelectionRequestRemove() {
					this.$data._activeText && (this.$data._texts.splice(this.$data._texts.indexOf(this.$data._activeText), 1),
					this.$data._activeText = null)
				},
				handleTextInputMounted(e, t) {
					e.view = t.el,
					e.component = t.component
				},
				handleTextInputBlur(e) {
					e.view.innerText.trim().length > 0 || this.$data._texts.splice(this.$data._texts.indexOf(e), 1)
				},
				handleTextInput() {
					this.$data._activeText.forceMaxWidth || this._updateSelectionBounds(!1)
				},
				handleBoldBtnClick() {
					this.$data._activeBold = !this.$data._activeBold,
					(async()=>{
						await this.checkOrLoadFont(this.$data._activeText?.view.innerText || "aAБб"),
						this.$data._activeText && (this.$data._activeText.fontWeight = this.$data._activeBold ? "bold" : "normal",
						this.$data._activeText.view.focus(),
						this.$data._activeText.forceMaxWidth || (this.$data._activeText.component.forceUseMaxAvailSize(),
						this._updateSelectionBounds()))
					}
					)()
				},
				handleItalicBtnClick() {
					this.$data._activeItalic = !this.$data._activeItalic,
					(async()=>{
						await this.checkOrLoadFont(this.$data._activeText?.view.innerText || "aAБб"),
						this.$data._activeText && (this.$data._activeText.fontStyle = this.$data._activeItalic ? "italic" : "normal",
						this.$data._activeText.view.focus(),
						this.$data._activeText.forceMaxWidth || (this.$data._activeText.component.forceUseMaxAvailSize(),
						this._updateSelectionBounds()))
					}
					)()
				},
				handleAlignChange(e) {
					this.$data._activeText && (this.$data._activeText.align = e,
					this.$data._activeText.view.focus())
				},
				handleColorChange(e) {
					switch (e.target) {
					case "background":
						if (this.$data._activeBackgroundColor = e.color,
						!this.$data._activeText)
							return;
						this.$data._activeText.backgroundColor = e.color,
						this.$data._activeText.view.focus();
						break;
					default:
						if (this.$data._activeTextColor = e.color,
						!this.$data._activeText)
							return;
						this.$data._activeText.color = e.color,
						this.$data._activeText.view.focus()
					}
				},
				_addText({top: e, left: t}={}) {
					const {width: i, height: n} = this.workArea.getBoundingClientRect();
					this.$data._texts.push({
						id: this.$uuidv4(),
						top: e >= 0 ? e : n / 2,
						left: t >= 0 ? t : i / 2,
						value: "",
						rotation: 0,
						color: this.$data._activeTextColor,
						fontSize: this.$data._activeFontSize,
						fontWeight: this.$data._activeBold ? "bold" : "normal",
						fontStyle: this.$data._activeItalic ? "italic" : "normal",
						fontFamily: this.$data._activeFont.family,
						backgroundColor: this.$data._activeBackgroundColor,
						align: this.$data._activeAlign,
						view: null,
						component: null,
						ratio: 1,
						updatingFromSelection: !1,
						initialFontSize: this.$data._activeFontSize.value,
						maxAvailWidth: t >= 0 ? i - t : i - i / 2,
						maxAvailHeight: e >= 0 ? n - e : n - n / 2,
						maxWidth: 20,
						maxHeight: this.$data._activeFontSize.value + 15,
						forceMaxWidth: !1
					}),
					this.$nextTick((()=>{
						const e = this.$data._texts.length - 1;
						this.$data._activeText = this.$data._texts[e],
						this.$data._texts[e].view.focus()
					}
					))
				},
				_updateSelectionBounds(e=!0) {
					if (!this.$data._activeText)
						return;
					if (this.$data._activeText.updatingFromSelection)
						return;
					const t = this.$data._activeText.view.getBoundingClientRect();
					if (this.$data._activeText.ratio = t.width / t.height,
					!e)
						return this.$refs.cropRect.forceUpdateSelectionBoundsFromTarget();
					this.$nextTick((()=>{
						this.$refs.cropRect.forceUpdateSelectionBoundsFromTarget()
					}
					))
				},
				handleBtnAddTextClick() {
					this._addText()
				},
				handleAreaClick(e) {
					if (0 === this.$data._texts.length)
						return e.stopImmediatePropagation(),
						e.preventDefault(),
						void this._addText({
							top: e.offsetY,
							left: e.offsetX
						});
					this.$data._activeText && (this.handleTextInputBlur(this.$data._activeText),
					this.$data._activeText = null)
				}
			}
		}
		  , Eo = Mo
		  , Oo = f(Eo, Mn, En, !1, null, "0fda6ac6", null)
		  , Ao = Oo.exports;
		function Io(e, t, i) {
			Fo(e, t),
			t.set(e, i)
		}
		function Fo(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Do(e, t, i) {
			var n = Lo(e, t, "set");
			return Ro(e, n, i),
			i
		}
		function Ro(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		function Po(e, t) {
			var i = Lo(e, t, "get");
			return Bo(e, i)
		}
		function Lo(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Bo(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		var No = new WeakMap;
		class jo {
			constructor() {
				Io(this, No, {
					writable: !0,
					value: {}
				})
			}
			on(e, t) {
				Array.isArray(Po(this, No)[e]) || (Po(this, No)[e] = []),
				"function" === typeof t && Po(this, No)[e].push(t)
			}
			off(e, t) {
				Po(this, No)[e] && (t ? Po(this, No)[e].splice(Po(this, No)[e].indexOf(t), 1) : delete Po(this, No)[e])
			}
			emit(e, t) {
				Array.isArray(Po(this, No)[e]) && Po(this, No)[e].forEach((function(e) {
					e(t)
				}
				))
			}
			removeAllEventListeners() {
				Do(this, No, {})
			}
		}
		var zo = i(88);
		function Go(e, t, i) {
			Vo(e, t),
			t.set(e, i)
		}
		function Vo(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Ho(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function Wo(e, t) {
			var i = qo(e, t, "get");
			return Uo(e, i)
		}
		function Uo(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		function Xo(e, t, i) {
			var n = qo(e, t, "set");
			return Ko(e, n, i),
			i
		}
		function qo(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Ko(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		var Yo = new WeakMap
		  , Jo = new WeakMap
		  , Qo = new WeakMap
		  , Zo = new WeakMap;
		class ea extends jo {
			constructor() {
				if (ea._instance)
					throw new Error("class is singleton");
				super(),
				Go(this, Yo, {
					writable: !0,
					value: null
				}),
				Go(this, Jo, {
					writable: !0,
					value: !1
				}),
				Go(this, Qo, {
					writable: !0,
					value: !1
				}),
				Go(this, Zo, {
					writable: !0,
					value: null
				}),
				document.addEventListener("DOMContentLoaded", (()=>{
					window.ServerAPI && window.ServerAPI.init()
				}
				)),
				this._uploadsQueue = []
			}
			static getInstance() {
				return this._instance
			}
			uploadFile({file: e, pauseQueue: t=!1, query: i, callback: n}={}) {
				if (!(e instanceof Blob))
					return;
				t && this._uploadsQueue.forEach((e=>{
					e.pause()
				}
				));
				const o = new window.Flow({
					target: window.glob.uploadUrl,
					simultaneousUploads: 3,
					chunkSize: zo.isMobile ? 3e6 : 1e7,
					testChunks: !0,
					allowDuplicateUploads: !0,
					maxChunkRetries: 150,
					chunkRetryInterval: 5e3,
					query: i
				});
				o.on("uploadStart", (()=>{
					"function" === typeof n ? n({
						type: "uploadStart"
					}) : this.emit("uploadStart")
				}
				)),
				o.on("filesSubmitted", (()=>{
					(this._uploadsQueue.filter((e=>!0 === e.isUploading())).length < 3 || t) && o.upload()
				}
				)),
				o.on("error", ((e,t,i)=>{
					"function" === typeof n ? n({
						type: "uploadFlowError",
						data: {
							file: e,
							message: t,
							chunk: i
						}
					}) : this.emit("uploadFlowError", {
						file: e,
						message: t,
						chunk: i
					})
				}
				)),
				o.on("fileRetry", ((e,t)=>{
					"function" === typeof n ? n({
						type: "fileRetry",
						data: {
							event: e,
							data: t
						}
					}) : this.emit("fileRetry", {
						event: e,
						data: t
					})
				}
				)),
				o.on("fileError", ((e,t)=>{
					"function" === typeof n ? n({
						type: "fileError",
						data: {
							event: e,
							data: t
						}
					}) : this.emit("fileError", {
						event: e,
						data: t
					})
				}
				)),
				o.on("fileProgress", (e=>{
					"function" === typeof n ? n({
						type: "uploadProgress",
						data: {
							progress: Math.ceil(100 * e.progress())
						}
					}) : this.emit("uploadProgress", {
						progress: Math.ceil(100 * e.progress())
					})
				}
				)),
				o.on("fileSuccess", ((e,i)=>{
					try {
						i = JSON.parse(i),
						"function" === typeof n ? n({
							type: "uploadComplete",
							data: {
								response: i
							}
						}) : this.emit("uploadComplete", {
							response: i
						})
					} catch (o) {
						"function" === typeof n ? n({
							type: "uploadError",
							data: {
								response: i
							}
						}) : this.emit("uploadError", {
							response: i
						})
					}
					t ? this._uploadsQueue.filter((e=>!e.isUploading() && 1 !== e.progress())).slice(0, 3).forEach((e=>{
						e.resume()
					}
					)) : this._uploadFromQueue()
				}
				)),
				o.addFile(e),
				t || this._uploadsQueue.push(o)
			}
			_uploadFromQueue() {
				const e = this._uploadsQueue.find((e=>!e.isUploading() && 1 !== e.progress()));
				e && e.upload()
			}
			cancelUpload(e) {
				if (e instanceof File) {
					const t = this._uploadsQueue.findIndex((t=>t.files.find((t=>t.file === e))));
					-1 !== t && (this._uploadsQueue[t].cancel(),
					this._uploadsQueue.splice(t, 1),
					this._uploadFromQueue())
				}
			}
			encodeFile(e, t) {
				if (Xo(this, Jo, !1),
				!e.file)
					return;
				const i = {
					tmp_filename: e.file,
					v2: !0,
					x_debug: window.glob?.debug,
					uid: window.glob?.uid,
					lang_id: window.glob?.lang_id || "en",
					commands: [e.toCommand?.() || e.commands?.join?.(" ") || e.commands],
					ffExtra: e.ffExtra,
					noDownloadHeaders: e.ffExtra,
					result_duration: e.cutDuration * e.loopTimes / e.playbackRate,
					height: e.height,
					sub_action: e.sub_action
				};
				e.operationType && (i.operation_type = e.operationType),
				window.$addDebugInfo({
					encodeParams: i
				}),
				Xo(this, Yo, window.ServerAPI.encode(i, {
					onStart: ()=>{
						window._?.l?.(" encoding started")
					}
					,
					onProgress: e=>{
						window._?.l?.("enc progress", e),
						Wo(this, Jo) || t({
							type: "remoteEncodeProgress",
							progress: e
						})
					}
					,
					onComplete: e=>{
						window._?.l?.("encode data", e),
						Wo(this, Jo) || (t({
							type: "remoteEncodeComplete",
							downloadUrl: e.download_url,
							response: e
						}),
						Xo(this, Yo, null))
					}
					,
					onQuotaExceeded: e=>{
						Xo(this, Yo, null),
						t({
							type: "remoteQuotaExceeded"
						})
					}
					,
					onError: e=>{
						window._?.l?.("encoder error", e),
						Xo(this, Yo, null),
						Wo(this, Jo) || t({
							type: "remoteEncodeError"
						})
					}
					,
					onMessage: (e,t)=>{
						window._?.l?.(e, t)
					}
				}))
			}
			encodeWithMultipleCommands(e, t, i) {
				if (Xo(this, Jo, !1),
				!e?.file || !Array.isArray(t) || "function" !== typeof i)
					return;
				const n = {
					tmp_filename: e.file,
					v2: !0,
					x_debug: window.glob?.debug,
					uid: window.glob?.uid,
					lang_id: window.glob?.lang_id || "en",
					commands: [...t],
					ffExtra: e.ffExtra,
					noDownloadHeaders: e.ffExtra,
					result_duration: e.cutDuration * e.loopTimes / e.playbackRate,
					height: e.height,
					sub_action: e.sub_action,
					operation_type: e.operationType
				};
				window.$addDebugInfo({
					encodeParams: {
						params: n,
						commandsArray: t
					}
				}),
				Xo(this, Yo, window.ServerAPI.encode(n, {
					onStart: ()=>{
						window._?.l?.("encoding started"),
						Wo(this, Jo) || i({
							operationId: Wo(this, Yo)
						})
					}
					,
					onProgress: e=>{
						window._?.l?.("enc progress", e),
						Wo(this, Jo) || i({
							type: "remoteEncodeProgress",
							progress: e
						})
					}
					,
					onComplete: e=>{
						window._?.l?.("encode data", e),
						Wo(this, Jo) || (i({
							type: "remoteEncodeComplete",
							downloadUrl: e.download_url,
							response: e
						}),
						Xo(this, Yo, null))
					}
					,
					onQuotaExceeded: e=>{
						Xo(this, Yo, null),
						i({
							type: "remoteQuotaExceeded"
						})
					}
					,
					onError: e=>{
						window._?.l?.("encoder error", e),
						Xo(this, Yo, null),
						Wo(this, Jo) || i({
							type: "remoteEncodeError"
						})
					}
					,
					onMessage: (e,t)=>{
						window._?.l?.(e, t)
					}
				}))
			}
			encodeFilterPreview(e, t, i) {
				if (Xo(this, Qo, !1),
				!e?.file || !Array.isArray(t) || "function" !== typeof i)
					return;
				const n = {
					tmp_filename: e.file,
					v2: !0,
					x_debug: window.glob?.debug,
					uid: window.glob?.uid,
					lang_id: window.glob?.lang_id || "en",
					commands: [...t],
					ffExtra: e.ffExtra,
					noDownloadHeaders: e.ffExtra,
					result_duration: e.cutDuration * e.loopTimes / e.playbackRate,
					height: e.height,
					sub_action: e.sub_action,
					operation_type: e.operationType
				};
				window.$addDebugInfo({
					encodeParams: {
						params: n,
						commandsArray: t
					}
				}),
				Xo(this, Zo, window.ServerAPI.encode(n, {
					onStart: ()=>{
						window._?.l?.("encoding started"),
						Wo(this, Qo) || i({
							operationId: Wo(this, Zo)
						})
					}
					,
					onProgress: e=>{
						window._?.l?.("enc progress", e),
						Wo(this, Qo) || i({
							type: "remoteEncodeProgress",
							progress: e
						})
					}
					,
					onComplete: e=>{
						window._?.l?.("encode data", e),
						Wo(this, Qo) || (i({
							type: "remoteEncodeComplete",
							downloadUrl: e.download_url,
							response: e
						}),
						Xo(this, Zo, null))
					}
					,
					onQuotaExceeded: e=>{
						Xo(this, Zo, null),
						i({
							type: "remoteQuotaExceeded"
						})
					}
					,
					onError: e=>{
						window._?.l?.("encoder error", e),
						Xo(this, Zo, null),
						Wo(this, Qo) || i({
							type: "remoteEncodeError"
						})
					}
					,
					onMessage: (e,t)=>{
						window._?.l?.(e, t)
					}
				}))
			}
			cancel() {
				Wo(this, Yo) && (Xo(this, Jo, !0),
				window.ServerAPI.cancel(Wo(this, Yo)))
			}
			cancelFilterPreview() {
				Wo(this, Zo) && (Xo(this, Qo, !0),
				window.ServerAPI.cancel(Wo(this, Zo)))
			}
			reset() {
				while (this._uploadsQueue.length > 0)
					this._uploadsQueue.pop().cancel();
				this.cancel(),
				Xo(this, Yo, null),
				Xo(this, Jo, !1),
				Xo(this, Zo, null),
				Xo(this, Qo, !1),
				this.removeAllEventListeners()
			}
		}
		function ta(e, t, i) {
			ia(e, t),
			t.set(e, i)
		}
		function ia(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function na(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function oa(e, t) {
			var i = aa(e, t, "get");
			return ra(e, i)
		}
		function aa(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function ra(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		Ho(ea, "_instance", new ea);
		var sa = new WeakMap;
		class la {
			constructor() {
				ta(this, sa, {
					writable: !0,
					value: []
				})
			}
			convertTextsToImage({texts: e=[], canvasSize: {width: t=800, height: i=600}, scale: n=1}={}) {
				oa(this, sa).length = 0,
				e.forEach(((e,t)=>{
					const {fontFamily: i, padding: o, color: a, fontSize: r, fontWeight: s, fontStyle: l, lineHeight: c, letterSpacing: d, wordBreak: u, boxSizing: h} = window.getComputedStyle(e.view)
					  , p = i.split(",")[0]?.replace(/["]/g, "");
					let {width: f, height: m} = e.view.getBoundingClientRect().toJSON();
					f += 1,
					m += 1;
					const v = Array.from(document.styleSheets)
					  , g = {};
					v.forEach((e=>{
						try {
							const t = Array.from(e.rules);
							t.forEach((e=>{
								if (e instanceof CSSFontFaceRule) {
									const t = e.style.getPropertyValue("font-family")?.replace(/["]/g, "");
									if (t === p) {
										const t = e.style.getPropertyValue("src").split(/format(.*)/)
										  , i = t[0].replace(/(^url\(["])|(["]\)\s*$)/g, "")
										  , n = t[1].replace(/(^\()|(\)$)/g, "") ?? ""
										  , o = e.style.getPropertyValue("font-style")
										  , a = e.style.getPropertyValue("font-weight")
										  , r = e.style.getPropertyValue("unicode-range");
										g[i + o + a + r] = {
											src: i,
											fontType: n,
											fontFamily: p,
											fontStyle: o,
											unicodeRange: r,
											fontWeight: a
										}
									}
								}
							}
							))
						} catch (t) {}
					}
					));
					const b = Math.ceil(f * n)
					  , _ = Math.ceil(m * n)
					  , y = e.view.cloneNode(!0);
					let w = "";
					Array.from(e.view.childNodes).forEach((e=>{
						const t = `${e.textContent}`;
						w += `<div xmlns="http://www.w3.org/1999/xhtml">${t}</div>`
					}
					)),
					y.style.left = 0,
					y.style.top = 0,
					y.style.lineHeight = c,
					y.style.padding = o,
					y.style.width = `${Math.ceil(f)}px`,
					y.style.letterSpacing = d,
					y.style.wordBreak = u,
					y.style.boxSizing = h,
					y.removeAttribute("class"),
					y.removeAttribute("contenteditable"),
					y.removeAttribute("draggable"),
					y.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"),
					y.innerHTML = w;
					let x = `<svg xmlns="http://www.w3.org/2000/svg" width="${b}" height="${_}">\n                                        <g transform="scale(${n},${n})">\n                                            <foreignObject width="${Math.ceil(f)}" height="${Math.ceil(m)}">\n                                                      ${y.outerHTML}\n                                            </foreignObject>      \n                                        </g>   \n                                        <defs>\n                                           <style>\n                                                text{\n                                                    fill: ${a};\n                                                    font-family: ${i};\n                                                    font-weight: ${s};\n                                                    font-style: ${l};\n                                                    font-size: ${r};\n                                                }\n                                           </style>\n                                           <style>\n                                            %replace_with_fonts_data%\n                                           </style>           \n                                        </defs>    \n                               </svg>`;
					oa(this, sa).push({
						svg: x,
						fonts: Object.values(g),
						x: e.left * n,
						y: e.top * n,
						id: e.id
					})
				}
				))
			}
			render({canvasWidth: e, canvasHeight: t}={}) {
				return new Promise((async(i,n)=>{
					const o = document.createElement("canvas");
					o.style.backgroundColor = "0x00000000",
					o.width = e,
					o.height = t;
					const a = o.getContext("2d");
					await Promise.all(oa(this, sa).map((e=>new Promise((async(t,i)=>{
						const n = new Image
						  , o = await this.downloadFonts(e.fonts);
						e.svg = e.svg.replace("%replace_with_fonts_data%", o).replace(/&nbsp;/g, " "),
						n.onload = ()=>{
							a.drawImage(n, e.x, e.y),
							t()
						}
						,
						n.src = "data:image/svg+xml; charset=utf8, " + encodeURIComponent(e.svg)
					}
					))))),
					o.toBlob((e=>{
						e.name = `texts-image${oa(this, sa)[0].id}.png`,
						ea.getInstance().uploadFile({
							file: e,
							pauseQueue: !0,
							query: {
								uid: window.glob?.uid
							},
							callback: e=>{
								e.data?.response?.tmp_filename && i({
									remoteFileName: e.data.response.tmp_filename
								})
							}
						})
					}
					), "image/png")
				}
				))
			}
			downloadFonts(e) {
				return new Promise(((t,i)=>{
					Promise.all(e.map((e=>new Promise(((t,i)=>{
						fetch(e.src).then((e=>e.blob())).then((i=>{
							const n = new FileReader;
							n.onload = function() {
								t({
									data: this.result,
									...e
								})
							}
							,
							n.readAsDataURL(i)
						}
						))
					}
					))))).then((e=>{
						t(e.map((({data: e, fontFamily: t, fontWeight: i, fontStyle: n, unicodeRange: o, fontType: a})=>`@font-face {\n                                  font-family: ${t};\n                                  src: url(${e}) format(${a});\n                                  font-weight: ${i};\n                                  font-style: ${n};\n                                  unicode-range: ${o};\n                                }\n                            `)).join("\n"))
					}
					)).catch((e=>{
						console.log("err", e)
					}
					))
				}
				))
			}
			static getInstance() {
				return this._instance || (this._instance = new la)
			}
		}
		na(la, "_instance", void 0);
		var ca = {
			name: "LocalEditFile",
			components: {
				AddText: Ao,
				AddImage: kn,
				ExtendedFormatPicker: Hi,
				Flip: Bi,
				Loop: Ii,
				Stabilization: ki,
				Delogo: yi,
				Volume: si,
				Resolution: $t,
				Rotate: bt,
				Cut: je,
				VideoControls: ve,
				Toolbar: D,
				Crop: ut,
				FormatPicker: j,
				PlaybackRate: pi
			},
			mixins: [gn, bn, _n],
			data() {
				return {
					playState: "pause",
					_videoDisplay: null,
					_workArea: null,
					_requestExit: !1,
					_activeToolView: null
				}
			},
			created() {
				window.addEventListener("keydown", this.handleKeyDown)
			},
			mounted() {
				this.initMediaOutputProcessorEventHandlers(),
				this.MediaOutputProcessor.setPlayData(this.GlobalModel.playData),
				this.MediaOutputProcessor.setVideoURL(this.GlobalModel.mediaInfo.url),
				this.GlobalModel.activeTool = this.GlobalModel.activeTool || this.Tools[this.$capitalize(window.glob?.mode)] || this.Tools.Cut
			},
			beforeDestroy() {
				this.reset()
			},
			watch: {
				cutChanges: {
					handler(e) {
						this.Tools.Cut.class.changed = e !== `0:${this.GlobalModel.playData.fileDuration}:false`
					},
					immediate: !0
				},
				"GlobalModel.subscriptionCancelled": {
					handler(e) {
						window._?.l?.("subs cancelled", e),
						e && (this.$addDebugInfo({
							message: "subscription cancelled"
						}),
						this.GlobalModel.activeState = this.States.Choose)
					},
					immediate: !0
				},
				noEncodeDisabled: {
					handler(e) {
						this.GlobalModel.encodeData.noEncodeDisabled = e,
						!e && this.GlobalModel.encodeData.noEncodeActive && (this.GlobalModel.playData.saveFormat = this.GlobalModel.saveFormats.find((e=>"auto" === e.name)))
					},
					immediate: !0
				}
			},
			computed: {
				tools() {
					const e = [this.Tools.Cut, this.Tools.Crop, this.Tools.Rotate, this.Tools.Flip, this.Tools.Resolution, this.Tools.Volume, this.Tools.PlaybackRate, this.Tools.Loop, this.Tools.Stabilization, this.Tools.AddImage, this.Tools.AddText, this.Tools.Delogo];
					return this.Tools.Volume.class.disabled = !this.GlobalModel.mediaInfo.hasAudio,
					e.map((e=>(e.label = this.$langs[e.name]?.label || e.label,
					e.hint = this.$langs[e.name]?.hint || e.hint,
					e.extraLabels?.forEach((e=>{
						e.value = this.$langs[e.name] || e.value
					}
					)),
					e)))
				},
				playDisabled() {
					return !1
				},
				toolTarget() {
					return this.$data._videoDisplay?.getContainer()
				},
				toolTargetMedia() {
					return this.$data._videoDisplay?.getVideo()
				},
				filterVolume() {
					return this.MediaOutputProcessor.getFilter(ni.name)
				},
				toolTargetMediaPlaybackRate() {
					return this.toolTargetMedia?.playbackRate || 1
				},
				ratios() {
					return {
						[this.GlobalModel.mediaInfo.originalAspectRatio.name]: this.GlobalModel.mediaInfo.originalAspectRatio
					}
				},
				cropRectMode() {
					return this.GlobalModel.activeTool === this.Tools.Crop ? Ve.MODE_FULL : this.GlobalModel.cropChanged ? Ve.MODE_MASK : Ve.MODE_NONE
				},
				delogoMode() {
					return this.GlobalModel.activeTool === this.Tools.Delogo ? vi.MODE_FULL : this.GlobalModel.delogoChanged ? vi.MODE_MASK : vi.MODE_NONE
				},
				addImageMode() {
					return this.GlobalModel.activeTool === this.Tools.AddImage ? xn.MODE_FULL : this.GlobalModel.addImageChanged ? xn.MODE_MASK : xn.MODE_NONE
				},
				addTextMode() {
					return this.GlobalModel.activeTool === this.Tools.AddText ? Tn.MODE_FULL : this.GlobalModel.addTextChanged ? Tn.MODE_MASK : Tn.MODE_NONE
				},
				showCropRect() {
					return this.cropRectMode !== Ve.MODE_NONE && this.toolTarget && this.$data._workArea
				},
				showDelogoRect() {
					return this.delogoMode !== vi.MODE_NONE
				},
				showAddImageRect() {
					return this.addImageMode !== xn.MODE_NONE
				},
				showAddTextRect() {
					return this.addTextMode !== Tn.MODE_NONE
				},
				saveFormats() {
					return this.GlobalModel.saveFormats.map((e=>(e.label = this.$langs?.vcutter3_formats?.[e.name]?.label || e.label,
					e.hint = this.$langs?.vcutter3_formats?.[e.name]?.hint || e.hint,
					e)))
				},
				cutChanges() {
					return [this.GlobalModel.playData.cutFrom, this.GlobalModel.playData.cutTo, this.GlobalModel.playData.inverse].join(":")
				},
				noEncodeDisabled() {
					return this.GlobalModel.playData.inverse || this.tools.filter((e=>e !== this.Tools.Cut && e !== this.Tools.Rotate)).some((e=>e.class.changed))
				},
				workAreaScale() {
					if (!this.$data._workArea)
						return 1;
					const e = this.$data._workArea.getBoundingClientRect();
					return this.GlobalModel.mediaInfo.originalSize.width / e.width
				}
			},
			methods: {
				setActiveTool(e) {
					this.GlobalModel.activeTool = e
				},
				togglePlay() {
					this.MediaOutputProcessor.togglePlay()
				},
				handleResetButton() {
					this.$data._activeToolView?.reset(),
					this.GlobalModel.activeTool === this.Tools.Cut && this.MediaOutputProcessor.pause()
				},
				handleExitButton() {
					this.$data._requestExit = !0
				},
				updateIncompatibleTools(e) {
					e.incompatibleTools.forEach((e=>{
						const t = this.tools.filter((t=>t.incompatibleTools.find((t=>t === e)))).some((e=>e.class.changed));
						e.class.incompatible = t,
						e.class.disabled = t,
						e.extraLabels.forEach((e=>{
							e.classes.hidden = !t
						}
						))
					}
					))
				},
				handleCutButtonClick() {
					this.GlobalModel.preventPreviewGeneration = !0,
					la.getInstance().convertTextsToImage({
						texts: this.GlobalModel.textsToAdd,
						canvasSize: {
							...this.GlobalModel.mediaInfo.originalSize
						},
						scale: this.workAreaScale
					}),
					0 === this.GlobalModel.encodeData.resolution.width && (this.GlobalModel.encodeData.resolution.width = 2 * Math.round(this.GlobalModel.mediaInfo.width / 2),
					this.GlobalModel.encodeData.resolution.height = 2 * Math.round(this.GlobalModel.mediaInfo.height / 2)),
					this.MediaOutputProcessor.pause(),
					this.GlobalModel.activeState = this.States.Save
				},
				handleAcceptExit() {
					this.GlobalModel.activeState = this.States.Choose
				},
				handleRejectExit() {
					this.$data._requestExit = !1
				},
				handleRotationToolAction(e) {
					this.GlobalModel.encodeData.rotation = e.detail.angle,
					this.Tools.Rotate.class.changed = e.detail.angle % 360 !== 0,
					this.updateIncompatibleTools(this.Tools.Rotate)
				},
				handleResolutionToolAction(e) {
					const t = e.detail.resolution.width !== this.GlobalModel.mediaInfo.originalSize.width && e.detail.resolution.height !== this.GlobalModel.mediaInfo.originalSize.height;
					this.Tools.Resolution.class.changed = t,
					this.GlobalModel.encodeData.resolution = t ? {
						...e.detail.resolution,
						scale: e.detail.resolution.width / this.GlobalModel.mediaInfo.originalSize.width
					} : {
						width: 0,
						height: 0,
						name: null,
						scale: 1
					},
					this.updateIncompatibleTools(this.Tools.Resolution)
				},
				handleLoopToolAction({detail: {loop: e}}) {
					this.GlobalModel.encodeData.loopTimes = e,
					this.Tools.Loop.class.changed = 1 !== e,
					this.updateIncompatibleTools(this.Tools.Loop)
				},
				handleCropChange({detail: e}) {
					this.GlobalModel.cropChanged = !0,
					this.Tools.Crop.class.changed = !(Math.ceil(100 * e.width) >= 100 && Math.ceil(100 * e.height) >= 100),
					this.GlobalModel.encodeData.crop = e,
					this.updateIncompatibleTools(this.Tools.Crop)
				},
				handleCropRectReady() {
					this.GlobalModel.cropChanged = !0
				},
				handleDelogoCropRectReady() {
					this.GlobalModel.delogoChanged = !0
				},
				handleDelogoChange({detail: e}) {
					this.GlobalModel.delogoChanged = !0;
					const t = Object.values(e);
					if (0 === t.length)
						return this.Tools.Delogo.class.changed = !1,
						this.updateIncompatibleTools(this.Tools.Delogo),
						void (this.GlobalModel.encodeData.delogo = {
							delogosData: [],
							enabled: !1
						});
					const i = [];
					t.forEach((t=>{
						const n = {
							top: Math.max(1, Math.ceil(t.top)),
							left: Math.max(1, Math.ceil(t.left)),
							width: Math.min(this.GlobalModel.mediaInfo.width, Math.ceil(t.width)),
							height: Math.min(this.GlobalModel.mediaInfo.height, Math.ceil(t.height)),
							flip: e.flip,
							changed: e.changed
						};
						n.top = Math.max(1, n.top),
						n.left = Math.max(1, n.left),
						n.width = n.flip ? Math.min(this.GlobalModel.mediaInfo.height - n.left, n.width - 2) : Math.min(this.GlobalModel.mediaInfo.width - n.left, n.width - 2),
						n.height = n.flip ? Math.min(this.GlobalModel.mediaInfo.width - n.top, n.height - 2) : Math.min(this.GlobalModel.mediaInfo.height - n.top, n.height - 2),
						i.push(n)
					}
					)),
					this.Tools.Delogo.class.changed = !0,
					this.GlobalModel.encodeData.delogo = {
						delogosData: i,
						enabled: !0
					},
					this.updateIncompatibleTools(this.Tools.Delogo)
				},
				handleStabilizationChange({enabled: e, shakiness: t}) {
					this.Tools.Stabilization.class.changed = e,
					this.GlobalModel.encodeData.stabilization = {
						enabled: e,
						shakiness: t
					},
					this.updateIncompatibleTools(this.Tools.Stabilization)
				},
				handleVideoDisplayReady(e) {
					this.$data._videoDisplay = e.detail.el
				},
				handleWorkAreaReady(e) {
					this.$data._workArea = e.detail.el
				},
				updatePlayProgress(e) {
					this.GlobalModel.playData.progressTime = e.time
				},
				handlePlayStateChange(e) {
					this.playState = e.state,
					this.playDisabled = !1
				},
				initMediaOutputProcessorEventHandlers() {
					this.MediaOutputProcessor.on("updatePlayProgress", this.updatePlayProgress),
					this.MediaOutputProcessor.on("togglePlayState", this.handlePlayStateChange)
				},
				reset() {
					this.GlobalModel.reset(),
					this.MediaInputProcessor.reset(),
					this.MediaOutputProcessor.reset(),
					this.RemoteProcessor.reset(),
					this.Tools.reset(),
					window.removeEventListener("keydown", this.handleKeyDown)
				},
				handleSaveFormatChange(e) {
					this.GlobalModel.playData.saveFormat = e
				},
				handleNoEncodeChange(e) {
					this.GlobalModel.playData.saveFormat = e ? this.GlobalModel.saveFormats.find((e=>"auto" === e.name)) : this.GlobalModel.saveFormats.find((e=>e.default)),
					this.GlobalModel.encodeData.noEncodeActive = e
				},
				handleToolActivate({detail: {toolView: e}}) {
					this.$data._activeToolView = e
				},
				handleVolumeChange(e) {
					this.Tools.Volume.class.changed = e.value !== e.defaultValue,
					this.GlobalModel.encodeData.volume = e.value,
					this.updateIncompatibleTools(this.Tools.Volume)
				},
				handlePlaybackRateChange(e) {
					this.Tools.PlaybackRate.class.changed = e.value !== e.defaultValue,
					this.GlobalModel.encodeData.playbackRate = e.value,
					this.toolTargetMedia && (this.toolTargetMedia.playbackRate = e.value)
				},
				handleKeyDown(e) {
					if (e.key && " " === e.key) {
						if (this.playDisabled || "input" === e.target.tagName.toLowerCase() && "checkbox" !== e.target?.type || "textarea" === e.target.tagName.toLowerCase())
							return;
						e.preventDefault(),
						e.stopImmediatePropagation(),
						this.togglePlay()
					}
				},
				handleFlipHorizontal(e) {
					this.Tools.Flip.class.changed = this.GlobalModel.flipHorizontal || this.GlobalModel.flipVertical,
					this.updateIncompatibleTools(this.Tools.Flip)
				},
				handleFlipVertical(e) {
					this.Tools.Flip.class.changed = this.GlobalModel.flipHorizontal || this.GlobalModel.flipVertical,
					this.updateIncompatibleTools(this.Tools.Flip)
				},
				handleMenuItemOver(e) {
					this.tools.filter((t=>t.class.changed && t.incompatibleTools.find((t=>t === e)))).forEach((e=>{
						e.class["incompatible-highlight"] = !0
					}
					))
				},
				handleMenuItemOut(e) {
					this.tools.filter((t=>t.class.changed && t.incompatibleTools.find((t=>t === e)))).forEach((e=>{
						e.class["incompatible-highlight"] = !1
					}
					))
				}
			}
		}
		  , da = ca
		  , ua = f(da, T, M, !1, null, "5152f73e", null)
		  , ha = ua.exports
		  , pa = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "state_upload-file"
			}, [e.showUploadProgress ? t("operation-control", {
				attrs: {
					progress: e.progress,
					label: e.$langs.operation_upload_progress
				},
				on: {
					cancel: e.handleOperationCancel
				}
			}) : e._e(), e.showPreviewProgress ? t("operation-control", {
				attrs: {
					progress: e.$data._previewProgress,
					label: e.$langs.operation_preview_progress
				},
				on: {
					cancel: e.handleOperationCancel
				}
			}) : e._e()], 1)
		}
		  , fa = []
		  , ma = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-components_operation-control"
			}, [t("progress-bar", {
				attrs: {
					progress: e.progress,
					label: e.label
				}
			}, [t("template", {
				slot: "control"
			}, [t("el-button", {
				staticClass: "btn-cancel",
				on: {
					click: e.handleCancelButtonClick
				}
			})], 1)], 2)], 1)
		}
		  , va = []
		  , ga = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-components_operation-control"
			}, [e._v(" " + e._s(e.label) + " " + e._s(e.progress) + "% "), e._t("control")], 2)
		}
		  , ba = []
		  , _a = {
			name: "ProgressBar",
			props: {
				progress: {
					type: Number,
					default: 0
				},
				label: {
					type: String,
					default: "progress:"
				}
			}
		}
		  , ya = _a
		  , wa = f(ya, ga, ba, !1, null, "2e3deb2b", null)
		  , xa = wa.exports
		  , Ca = {
			name: "OperationControl",
			components: {
				ProgressBar: xa
			},
			props: {
				progress: {
					type: Number,
					default: 0
				},
				label: {
					type: String,
					default: "progress:"
				}
			},
			methods: {
				handleCancelButtonClick() {
					this.$emit("cancel")
				}
			}
		}
		  , $a = Ca
		  , Sa = f($a, ma, va, !1, null, "60c06dbc", null)
		  , ka = Sa.exports
		  , Ta = {
			name: "LocalUploadFile",
			components: {
				OperationControl: ka
			},
			data() {
				return {
					_previewProgress: 0,
					_previewDisplayHeight: 272
				}
			},
			mounted() {
				const e = e=>{
					this.GlobalModel.mediaInfo.sar = (()=>{
						const t = e.ff?.streams?.video?.[0]?.sample_aspect_ratio?.match?.(/\d+/g);
						return t?.length >= 2 ? parseInt(t[0]) / parseInt(t[1]) : 1
					}
					)()
				}
				;
				this.CloudProcessor.operationId ? (this.CloudProcessor.on("cloudOpenProgress", (e=>{
					this.GlobalModel.uploadProgress = Math.min(100, e.progress)
				}
				)),
				this.CloudProcessor.on("cloudOpenSuccess", (t=>{
					if (t.ff?.has_video_streams) {
						this.GlobalModel.mediaInfo = {
							audioStreams: t.ff.streams.audio,
							videoStreams: t.ff.streams.video,
							originalAspectRatio: {
								...this.$getAspectRatio(t.ff.streams.video[0].width, t.ff.streams.video[0].height),
								original: !0,
								label: this.$langs.ratio_original
							}
						},
						e(t);
						const i = ["ffmpeg", "-hide_banner", "-i", `${t.tmp_filename}`];
						let n = "mp4";
						const o = t.ff?.streams?.video?.some((e=>zo.isSafari ? /h264/.test(e.codec_name) : /h264|vp9|vp8/.test(e.codec_name)))
						  , a = t.ff?.streams?.audio?.some((e=>zo.isSafari ? /aac/.test(e.codec_name) : /aac|opus|vorbis/.test(e.codec_name)));
						i.push("-c:v", ...o ? ["copy"] : ["libx264", "-vf", "\"scale=-2:'min(200,2*round(ih/2))'\"", "-crf", "23", "-preset:v", "superfast", "-r", "20", "-movflags", "+faststart"]),
						i.push("-c:a", ...a ? ["copy"] : ["aac", "-b:a", "64k", "-ac 1", "-ar", "44100"]),
						i.push(`%output.${n}%`),
						this.generatePreview(t.tmp_filename, i)
					} else
						this.GlobalModel.uploadError = t
				}
				)),
				this.CloudProcessor.on("cloudOpenError", (()=>{
					this.$data._decodeError = this.$langs.error_decode
				}
				)),
				this.CloudProcessor.on("cloudFileSizeLimit", (e=>{
					this.GlobalModel.activeState = this.States.Choose
				}
				)),
				this.CloudProcessor.on("cloudFileSubscribeCancel", (e=>{
					this.GlobalModel.subscriptionCancelled = !0,
					this.GlobalModel.activeState = this.States.Choose
				}
				))) : (this.RemoteProcessor.on("uploadStart", (()=>{
					window._?.l?.("upload start")
				}
				)),
				this.RemoteProcessor.on("uploadProgress", (({progress: e})=>{
					this.GlobalModel.uploadProgress = e
				}
				)),
				this.RemoteProcessor.on("uploadComplete", (({response: t})=>{
					window._?.l?.("upload complete", t);
					const i = this.$getAspectRatio(t.ff.streams.video[0].width, t.ff.streams.video[0].height);
					i.suffix = i.width < 31 && i.height < 31 ? `(${i.width}:${i.height})` : "",
					console.log("resp", t),
					this.GlobalModel.mediaInfo = {
						remoteFileName: t.tmp_filename,
						audioStreams: t.ff.streams.audio,
						videoStreams: t.ff.streams.video,
						originalAspectRatio: {
							...i,
							label: this.$langs.ratio_original,
							original: !0
						}
					};
					const n = /aac/.test(this.GlobalModel.mediaInfo.audioStreams?.[0]?.codec_name?.toLowerCase()) ? ["-c:a", "copy"] : ["-c:a", "aac", "-b:a", "64k", "-ac 1", "-ar", "44100"];
					e(t),
					this.generatePreview(t.tmp_filename, ["ffmpeg", "-hide_banner", "-i", `${t.tmp_filename}`, "-c:v", "libx264", "-vf", "\"scale=-2:'min(200,2*round(ih/2))'\"", "-crf", "23", "-preset:v", "superfast", "-r", "20", "-movflags", "+faststart", ...n, "%output.mp4%"])
				}
				)),
				this.RemoteProcessor.on("uploadError", (({response: e})=>{
					this.GlobalModel.uploadError = e
				}
				)),
				this.RemoteProcessor.uploadFile({
					file: this.GlobalModel.file,
					query: {
						uid: window.glob?.uid,
						ff: 1
					}
				}))
			},
			beforeDestroy() {
				this.RemoteProcessor.removeAllEventListeners(),
				this.CloudProcessor.removeAllEventListeners()
			},
			watch: {
				"GlobalModel.subscriptionCancelled": {
					handler(e) {
						e && this.handleOperationCancel()
					},
					immediate: !0
				}
			},
			methods: {
				generatePreview(e, t) {
					window._?.l?.("call generate preview", e, t),
					this.RemoteProcessor.encodeFile({
						file: e,
						commands: t,
						ffExtra: 1,
						noDownloadHeaders: 1,
						height: 200,
						sub_action: "generate_preview",
						operationType: vn.OPERATION_TYPES.SERVICE
					}, (e=>{
						switch (window._?.l?.("enc ready", e),
						e?.type) {
						case "remoteEncodeProgress":
							this.$data._previewProgress = e.progress;
							break;
						case "remoteEncodeComplete":
							this.$data._previewProgress = 100;
							const t = e.response;
							window._?.l?.("response ", t),
							this.GlobalModel.mediaInfo = {
								remoteUrl: t.download_url,
								duration: t.ffExtra.encoded.duration_in_milliseconds / 1e3,
								width: t.ffExtra.original.width,
								height: t.ffExtra.original.height,
								previewWidth: t.ffExtra.encoded.width,
								previewHeight: this.$data._previewDisplayHeight,
								remoteFileName: t.tmp_filename,
								rotation: parseInt(t.ffExtra.original.tag_rotate) || 0
							},
							this.GlobalModel.encodeData.initialRotation = this.GlobalModel.mediaInfo.rotation,
							90 !== this.GlobalModel.mediaInfo.rotation && 270 !== this.GlobalModel.mediaInfo.rotation || (this.GlobalModel.mediaInfo.width = t.ffExtra.original.height,
							this.GlobalModel.mediaInfo.height = t.ffExtra.original.width,
							this.GlobalModel.mediaInfo.previewWidth = t.ffExtra.encoded.height,
							this.GlobalModel.mediaInfo.previewHeight = this.$data._previewDisplayHeight,
							this.GlobalModel.mediaInfo.originalAspectRatio = {
								...this.GlobalModel.mediaInfo.originalAspectRatio,
								width: this.GlobalModel.mediaInfo.originalAspectRatio.height,
								height: this.GlobalModel.mediaInfo.originalAspectRatio.width,
								ratio: this.GlobalModel.mediaInfo.originalAspectRatio.height / this.GlobalModel.mediaInfo.originalAspectRatio.width,
								name: `${this.GlobalModel.mediaInfo.originalAspectRatio.height}:${this.GlobalModel.mediaInfo.originalAspectRatio.width}`
							},
							this.GlobalModel.mediaInfo.originalAspectRatio.width < 31 && this.GlobalModel.mediaInfo.originalAspectRatio.height < 31 && (this.GlobalModel.mediaInfo.originalAspectRatio.suffix = `(${this.GlobalModel.mediaInfo.originalAspectRatio.width}:${this.GlobalModel.mediaInfo.originalAspectRatio.height})`));
							const i = this.$getFormat(t.ffExtra.original.format_name, t.tmp_filename).toLowerCase()
							  , n = this.GlobalModel.saveFormats.find((e=>e.name === i)) || this.GlobalModel.saveFormats.find((e=>"auto" === e.name));
							"auto" === n.name && (n.ext = i,
							n.labelSuffix = ` (${i})`),
							n.original = !0,
							this.GlobalModel.activeState = this.States.Edit;
							break;
						case "remoteEncodeError":
							window._?.l?.("generate preview error", e);
							break
						}
					}
					))
				},
				handleOperationCancel() {
					this.RemoteProcessor.reset(),
					this.CloudProcessor.cancel(),
					this.GlobalModel.activeState = this.States.Choose
				}
			},
			computed: {
				progress() {
					return this.GlobalModel.uploadProgress
				},
				showUploadProgress() {
					return !this.GlobalModel.mediaInfo.remoteFileName
				},
				showPreviewProgress() {
					return !this.showUploadProgress && !this.GlobalModel.mediaInfo.remoteUrl
				}
			}
		}
		  , Ma = Ta
		  , Ea = f(Ma, pa, fa, !1, null, "22a5a159", null)
		  , Oa = Ea.exports
		  , Aa = function() {
			var e = this
			  , t = e._self._c;
			return t("save-file", {
				ref: "saveView",
				staticClass: "state_save-file",
				attrs: {
					langs: e.computedLangs,
					"file-name": e.fileName,
					"encoding-progress": e.GlobalModel.encodeProgress,
					"upload-progress": e.GlobalModel.uploadProgress,
					showUploadProgress: e.showUploadProgress,
					showEncodeProgress: e.showEncodeProgress,
					showDownload: e.showDownload,
					"encode-error": e.GlobalModel.encodeError,
					"encoded-file-u-r-l": this.GlobalModel.mediaInfo.downloadUrl,
					"file-size": e.encodedFileSize
				},
				on: {
					saveClick: e.handleSaveClick,
					cancelAccept: e.handleCancelAccept,
					backClick: e.handleBackClick,
					startOverClick: e.handleStartOverClick
				}
			})
		}
		  , Ia = []
		  , Fa = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-state_save-file"
			}, [t("div", {
				staticClass: "file-name"
			}, [e._v(e._s(e.fileName))]), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showEncodeProgressBlock,
					expression: "showEncodeProgressBlock"
				}],
				staticClass: "block-progress"
			}, [t("operation-control", {
				attrs: {
					progress: e.encodingProgress,
					label: e.computedLangs.operationEncodeProgress
				},
				on: {
					cancel: e.handleOperationCancel
				}
			})], 1), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showUploadProgressBlock,
					expression: "showUploadProgressBlock"
				}],
				staticClass: "block-upload-progress"
			}, [t("operation-control", {
				attrs: {
					progress: e.uploadProgress,
					label: e.computedLangs.operationUploadProgress
				},
				on: {
					cancel: e.handleOperationCancel
				}
			})], 1), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showCancelEncodeBlock,
					expression: "showCancelEncodeBlock"
				}],
				staticClass: "block-cancel-encode"
			}, [t("dialog-cancel", {
				attrs: {
					label: e.computedLangs.dialogCancelEncoding,
					"label-yes": e.computedLangs.dialogCancelEncodingYes,
					"label-no": e.computedLangs.dialogCancelEncodingNo
				},
				on: {
					accept: e.handleCancelAccept,
					reject: e.handleCancelReject
				}
			})], 1), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showEncodeErrorBlock,
					expression: "showEncodeErrorBlock"
				}],
				staticClass: "block-error"
			}, [t("div", {
				staticClass: "hint"
			}, [e._v(" " + e._s(e.computedLangs.operationEncodeError) + " ")]), t("div", {
				staticClass: "buttons"
			}, [t("a", {
				staticClass: "btn-return",
				attrs: {
					"data-google-vignette": "false"
				},
				on: {
					click: e.handleBackClick
				}
			}, [e._v(e._s(e.computedLangs.back))])])]), t("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: e.showDownloadBlock,
					expression: "showDownloadBlock"
				}],
				staticClass: "block-download"
			}, [t("div", {
				staticClass: "block-download-top"
			}, [t("a", {
				staticClass: "btn-return",
				attrs: {
					"data-google-vignette": "false"
				},
				on: {
					click: e.handleBackClick
				}
			}, [e._v(e._s(e.computedLangs.back))]), t("a", {
				staticClass: "btn-start-over",
				attrs: {
					"data-google-vignette": "false"
				},
				on: {
					click: e.handleStartOverClick
				}
			}, [e._v(e._s(e.computedLangs.startOver))])]), t("div", {
				staticClass: "buttons"
			}, [t("a", {
				staticClass: "btn-save",
				attrs: {
					href: e.encodedFileURL,
					download: e.downloadName,
					"data-google-vignette": "false"
				},
				on: {
					click: e.handleSaveClick
				}
			}, [e._v(e._s(e.computedLangs.save) + " ")])]), t("div", {
				staticClass: "hint"
			}, [e._v(" " + e._s(e.computedLangs.saveHint) + " ")]), t("div", {
				staticClass: "file-size"
			}, [t("span", [e._v(e._s(e.computedLangs.fileSize))]), t("span", [e._v(e._s(e.fileSize))])])])])
		}
		  , Da = []
		  , Ra = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "shared-components_dialog-cancel"
			}, [t("div", {
				staticClass: "label"
			}, [e._v(e._s(e.label))]), t("div", {
				staticClass: "buttons"
			}, [t("el-button", {
				staticClass: "accept",
				on: {
					click: e.handleAccept
				}
			}, [e._v(e._s(e.labelYes))]), t("el-button", {
				staticClass: "reject",
				on: {
					click: e.handleReject
				}
			}, [e._v(e._s(e.labelNo))])], 1)])
		}
		  , Pa = []
		  , La = {
			name: "DialogCancel",
			props: {
				label: {
					type: String,
					default: "cancel?"
				},
				labelYes: {
					type: String,
					default: "yes"
				},
				labelNo: {
					type: String,
					default: "no"
				}
			},
			methods: {
				handleAccept() {
					this.$emit("accept")
				},
				handleReject() {
					this.$emit("reject")
				}
			}
		}
		  , Ba = La
		  , Na = f(Ba, Ra, Pa, !1, null, "097695d7", null)
		  , ja = Na.exports
		  , za = {
			name: "SaveFile",
			components: {
				DialogCancel: ja,
				OperationControl: ka
			},
			data() {
				return {
					_requestCancel: !1
				}
			},
			props: {
				fileName: {
					type: String
				},
				fileSize: {
					type: String
				},
				encodingProgress: {
					type: Number,
					default: 0
				},
				encodedFileURL: {
					type: String
				},
				downloadName: {
					type: String
				},
				showEncodeProgress: {
					type: Boolean,
					default: !1
				},
				showUploadProgress: {
					type: Boolean,
					default: !1
				},
				showDownload: {
					type: Boolean,
					default: !1
				},
				showCancelEncode: {
					type: Boolean,
					default: !1
				},
				encodeError: {
					type: Object,
					default() {
						return null
					}
				},
				uploadProgress: {
					type: Number,
					default: 0
				},
				langs: {
					type: Object,
					default() {
						return {}
					}
				}
			},
			mounted() {},
			methods: {
				handleOperationCancel() {
					this.$data._requestCancel = !0
				},
				handleCancelAccept() {
					this.$data._requestCancel = !1,
					this.$emit("cancelAccept")
				},
				handleCancelReject() {
					this.$data._requestCancel = !1,
					this.$emit("cancelReject")
				},
				handleSaveClick(e) {
					e.preventDefault(),
					e.stopImmediatePropagation(),
					this.$emit("saveClick")
				},
				handleBackClick() {
					this.$emit("backClick")
				},
				handleStartOverClick() {
					this.$emit("startOverClick")
				}
			},
			computed: {
				computedLangs() {
					return {
						operationEncodeProgress: "Encode progress",
						operationUploadProgress: "Upload progress",
						dialogCancelEncoding: "Cancel Encoding?",
						dialogCancelEncodingYes: "Yes",
						dialogCancelEncodingNo: "No",
						operationEncodeError: "Encode error",
						back: "Back",
						save: "Save",
						saveHint: "By default the file will be saved to the user download folder",
						fileSize: "File size:",
						startOver: "Start over",
						...this.langs
					}
				},
				showCancelEncodeBlock() {
					return this.showCancelEncode || this.$data._requestCancel
				},
				showEncodeProgressBlock() {
					return this.showEncodeProgress && !this.showCancelEncodeBlock
				},
				showUploadProgressBlock() {
					return this.showUploadProgress && !this.showCancelEncodeBlock
				},
				showDownloadBlock() {
					return this.showDownload && !this.showCancelEncodeBlock
				},
				showEncodeErrorBlock() {
					return this.encodeError && !this.showCancelEncodeBlock
				}
			}
		}
		  , Ga = za
		  , Va = f(Ga, Fa, Da, !1, null, "fcd39644", null)
		  , Ha = Va.exports
		  , Wa = {
			name: "LocalSaveFile",
			components: {
				SaveFile: Ha
			},
			created() {
				this.GlobalModel.mediaInfo.downloadUrl = null,
				this.GlobalModel.encodeProgress = 0
			},
			async mounted() {
				if (this.GlobalModel.encodeData.stabilization.enabled) {
					const e = ()=>{
						this.GlobalModel.encodeProgress = 0,
						this.GlobalModel.encodeError = !1;
						const e = {
							loopTimes: this.GlobalModel.encodeData.loopTimes,
							copyCodec: !1,
							playbackRate: this.GlobalModel.encodeData.playbackRate,
							format: "auto" === this.GlobalModel.playData.saveFormat.name ? this.GlobalModel.playData.saveFormat.defaultExt : this.GlobalModel.playData.saveFormat.ext,
							file: this.GlobalModel.mediaInfo.remoteFileName
						};
						e.outputName = this.downloadName = this.GlobalModel.playData.fileName.replace(/\.[^/.]+$/, ` (${location.host}).${e.format}`);
						const t = [];
						for (let i = 0; i < 2; i++) {
							const n = new vn;
							n.time = this.GlobalModel.playData.encodeTime,
							this.GlobalModel.playData.inverse ? n.addFilter(this.GlobalModel.encodeData.getFilterCommand({
								inverseData: {
									enable: !0,
									cutToInverse0: this.GlobalModel.playData.cutToInverse0,
									cutFromInverse1: this.GlobalModel.playData.cutFromInverse1
								},
								fileDuration: this.GlobalModel.playData.fileDuration,
								hasAudio: this.GlobalModel.mediaInfo.hasAudio,
								ignoreLoop: 0 === i,
								useStabilizationDetect: 0 === i,
								useStabilizationTransform: 1 === i
							})) : n.addFilter(this.GlobalModel.encodeData.getFilterCommand({
								hasAudio: this.GlobalModel.mediaInfo.hasAudio,
								cutDuration: this.GlobalModel.playData.cutTo - this.GlobalModel.playData.cutFrom,
								ignoreLoop: 0 === i,
								useStabilizationDetect: 0 === i,
								useStabilizationTransform: 1 === i
							})),
							n.file = e.file,
							n.format = e.format,
							n.copyCodec = e.copyCodec,
							n.loopTimes = 0 === i ? 1 : e.loopTimes,
							n.playbackRate = e.playbackRate,
							n.outputName = e.outputName,
							t.push(n.toCommand())
						}
						this.MediaEncoder.encodeWithMultipleCommands({
							file: e.file,
							format: e.format,
							loopTimes: e.loopTimes,
							playbackRate: this.GlobalModel.encodeData.playbackRate
						}, t, (e=>{
							"remoteEncodeProgress" === e.type ? this.GlobalModel.encodeProgress = Math.max(1, Math.min(100, e.progress)) : "remoteEncodeComplete" === e.type ? (window._?.l?.("rem enc complete", e),
							this.GlobalModel.mediaInfo.downloadSize = e.response?.filesize,
							this.GlobalModel.mediaInfo.downloadUrl = e.downloadUrl) : "remoteEncodeError" === e.type ? this.GlobalModel.encodeError = !0 : "remoteQuotaExceeded" === e.type && (this.GlobalModel.activeState = this.States.Edit)
						}
						))
					}
					;
					if (this.GlobalModel.mediaInfo.remoteFileName)
						e();
					else {
						const t = this.$watch("GlobalModel.mediaInfo.remoteFileName", (i=>{
							i && (t(),
							e())
						}
						), {
							immediate: !0
						})
					}
				} else {
					const e = new vn;
					if (e.time = this.GlobalModel.playData.encodeTime,
					"auto" === this.GlobalModel.playData.saveFormat.name ? this.GlobalModel.encodeData.copyCodec ? e.format = this.GlobalModel.playData.saveFormat.ext || this.GlobalModel.playData.saveFormat.defaultExt : e.format = this.GlobalModel.playData.saveFormat.defaultExt : e.format = this.GlobalModel.playData.saveFormat.ext,
					this.GlobalModel.textsToAdd?.length > 0) {
						const e = await la.getInstance().render({
							canvasWidth: this.GlobalModel.mediaInfo.originalSize.width,
							canvasHeight: this.GlobalModel.mediaInfo.originalSize.height
						});
						this.GlobalModel.encodeData.textsToAdd = [e]
					} else
						this.GlobalModel.encodeData.textsToAdd = [];
					this.GlobalModel.playData.inverse ? e.addFilter(this.GlobalModel.encodeData.getFilterCommand({
						inverseData: {
							enable: !0,
							cutToInverse0: this.GlobalModel.playData.cutToInverse0,
							cutFromInverse1: this.GlobalModel.playData.cutFromInverse1
						},
						fileDuration: this.GlobalModel.playData.fileDuration,
						hasAudio: this.GlobalModel.mediaInfo.hasAudio
					})) : e.addFilter(this.GlobalModel.encodeData.getFilterCommand({
						hasAudio: this.GlobalModel.mediaInfo.hasAudio,
						cutDuration: this.GlobalModel.playData.cutTo - this.GlobalModel.playData.cutFrom
					})),
					e.copyCodec = this.GlobalModel.encodeData.copyCodec,
					e.loopTimes = this.GlobalModel.encodeData.loopTimes,
					e.playbackRate = this.GlobalModel.encodeData.playbackRate,
					e.outputName = this.downloadName = this.GlobalModel.playData.fileName.replace(/\.[^/.]+$/, ` (${location.host}).${e.format}`);
					const t = ()=>new Promise(((e,t)=>{
						if (this.GlobalModel.encodeData.imagesToAdd.every((e=>!!e.remoteFileName)))
							e();
						else {
							const t = this.$watch("GlobalModel.encodeData.imagesToAdd", (i=>{
								this.GlobalModel.encodeData.imagesToAdd.every((e=>!!e.remoteFileName)) && (t(),
								e())
							}
							), {
								immediate: !0,
								deep: !0
							})
						}
					}
					));
					await t(),
					e.extraFiles = [...this.GlobalModel.encodeData.imagesToAdd.map((e=>e.remoteFileName)), ...this.GlobalModel.encodeData.textsToAdd.map((e=>e.remoteFileName))];
					const i = ()=>{
						this.GlobalModel.encodeProgress = 0;
						this.GlobalModel.encodeError = false;
						e.file = this.GlobalModel.mediaInfo.remoteFileName;
						this.MediaEncoder.encode(e, (e => {
							console.log(e);
							if (e.type === "remoteEncodeProgress") {
								this.GlobalModel.encodeProgress = Math.max(1, Math.min(100, e.progress));
							} else if (e.type === "remoteEncodeComplete") {
								window._?.l?.("rem enc complete", e);
								this.GlobalModel.mediaInfo.downloadSize = e.response?.filesize;
								this.GlobalModel.mediaInfo.downloadUrl = e.downloadUrl;
							} else if (e.type === "remoteEncodeError") {
								this.GlobalModel.encodeError = true;
							}
							// Remove or handle the "remoteQuotaExceeded" event differently if needed
							// else if (e.type === "remoteQuotaExceeded") {
							//     this.GlobalModel.activeState = this.States.Edit;
							// }
						}));
					}
					;
					if (this.GlobalModel.mediaInfo.remoteFileName)
						i();
					else {
						const e = this.$watch("GlobalModel.mediaInfo.remoteFileName", (t=>{
							t && (e(),
							i())
						}
						), {
							immediate: !0
						})
					}
				}
			},
			computed: {
				computedLangs() {
					return {
						startOver: this.$langs.start_over,
						operationEncodeProgress: this.$langs.operation_encode_progress,
						operationUploadProgress: this.$langs.operation_upload_progress,
						dialogCancelEncoding: this.$langs.dialog_cancel_encoding,
						dialogCancelEncodingYes: this.$langs.dialog_cancel_editing_yes,
						dialogCancelEncodingNo: this.$langs.dialog_cancel_encoding_no,
						operationEncodeError: this.$langs.operation_encode_error,
						back: this.$langs.back,
						save: this.$langs.save,
						saveHint: this.$langs.save_hint,
						fileSize: this.$langs.file_size
					}
				},
				showUploadProgress() {
					return !this.GlobalModel.mediaInfo.remoteFileName
				},
				showEncodeProgress() {
					return !this.showUploadProgress && !this.GlobalModel.mediaInfo.downloadUrl && !this.GlobalModel.encodeError
				},
				showDownload() {
					return !!this.GlobalModel.mediaInfo.downloadUrl
				},
				encodedFileSize() {
					return window._?.format_bytes?.(this.GlobalModel.mediaInfo.downloadSize, this.GlobalModel.mediaInfo.downloadSize > 1048576 ? 1 : 0)
				},
				fileName() {
					const e = this.GlobalModel.encodeData.copyCodec && this.GlobalModel.playData.saveFormat.ext || this.GlobalModel.playData.saveFormat.defaultExt;
					return `${this.GlobalModel.playData.fileName.replace(/\.[^/.]+$/, "")}.${e}`
				}
			},
			methods: {
				handleBackClick() {
					this.GlobalModel.preventPreviewGeneration = !1,
					this.GlobalModel.encodeError = !1,
					this.GlobalModel.activeState = this.States.Edit
				},
				handleCancelAccept() {
					this.GlobalModel.preventPreviewGeneration = !1,
					this.MediaEncoder.cancelEncode(),
					this.GlobalModel.encodeError = !1,
					this.GlobalModel.activeState = this.States.Edit
				},
				handleSaveClick() {
					const e = document.createElement("iframe");
					e.style.display = "none",
					this.$refs.saveView.$el.querySelector("a.btn-save").append(e),
					e.src = this.GlobalModel.mediaInfo.downloadUrl,
					setTimeout((()=>{
						e.remove()
					}
					), 5e3)
				},
				handleCancelReject() {},
				handleStartOverClick() {
					this.GlobalModel.preventPreviewGeneration = !1,
					this.GlobalModel.encodeError = !1,
					this.GlobalModel.activeState = this.States.Choose
				}
			}
		}
		  , Ua = Wa
		  , Xa = f(Ua, Aa, Ia, !1, null, null, null)
		  , qa = Xa.exports
		  , Ka = function() {
			var e = this
			  , t = e._self._c;
			return t("div", {
				staticClass: "state_analyze-file"
			}, [t("operation-control", {
				staticClass: "progress-control",
				attrs: {
					label: e.label,
					progress: e.$data._progress
				},
				on: {
					cancel: e.handleOperationCancel
				}
			})], 1)
		}
		  , Ya = []
		  , Ja = {
			name: "LocalAnalyzeFile",
			components: {
				OperationControl: ka
			},
			data() {
				return {
					_progress: 0,
					_interval: void 0
				}
			},
			mounted() {
				const e = 1100;
				let t = 0;
				this.$data._interval = setInterval((()=>{
					t += 20 + 30 * Math.random(),
					this.$data._progress = Math.min(Math.round(t / e * 100), 100),
					t >= 1100 && clearInterval(this.$data._interval)
				}
				), 1e3)
			},
			beforeDestroy() {
				clearInterval(this.$data._interval)
			},
			watch: {
				"GlobalModel.subscriptionCancelled": {
					handler(e) {
						e && this.handleOperationCancel()
					},
					immediate: !0
				}
			},
			methods: {
				handleOperationCancel() {
					this.RemoteProcessor.reset(),
					this.CloudProcessor.cancel(),
					this.GlobalModel.activeState = this.States.Choose
				}
			},
			computed: {
				label() {
					return this.$langs.analyze_label
				}
			}
		}
		  , Qa = Ja
		  , Za = f(Qa, Ka, Ya, !1, null, "55a1e3c5", null)
		  , er = Za.exports
		  , tr = {
			name: "MainView",
			components: {
				LocalAnalyzeFile: er,
				LocalSaveFile: qa,
				LocalUploadFile: Oa,
				LocalEditFile: ha,
				LocalChooseFile: k
			},
			created() {
				this.GlobalModel.activeState = this.States.Choose
			},
			methods: {
				handleFilesSelected: async function({file: e=null, useRemote: t=!1}) {
					if (this.MediaInputProcessor.resumeAudioContext(),
					this.MediaOutputProcessor.resumeAudioContext(),
					this.GlobalModel.subscriptionCancelled = !1,
					this.GlobalModel.uploadProgress = this.GlobalModel.decodeProgress = this.GlobalModel.encodeProgress = 0,
					t)
						return window._?.l?.("use remote", t),
						this.GlobalModel.file = e,
						void (this.GlobalModel.activeState = this.States.Upload);
					const i = ()=>{
						this.RemoteProcessor.on("uploadStart", (()=>{
							window._?.l?.("upload start")
						}
						)),
						this.RemoteProcessor.on("uploadProgress", (({progress: e})=>{
							this.GlobalModel.uploadProgress = e
						}
						)),
						this.RemoteProcessor.on("uploadComplete", (({response: e})=>{
							window._?.l?.("upload complete", e),
							this.GlobalModel.mediaInfo.remoteFileName = e.tmp_filename
						}
						)),
						this.RemoteProcessor.on("uploadError", (({response: e})=>{
							window._?.l?.("upload error", e),
							this.GlobalModel.uploadError = e
						}
						)),
						this.RemoteProcessor.uploadFile({
							file: e,
							query: {
								uid: window.glob?.uid
							}
						})
					}
					  , n = "function" !== typeof window.UserSystem?.filesize_check || window.UserSystem.filesize_check(e, {
						onSubscribe: e=>{
							window._?.l?.("subscribe", e)
						}
						,
						onSubscribeCancel: e=>{
							this.GlobalModel.subscriptionCancelled = !0,
							window._?.l?.("subscribe cancel", e)
						}
					});
					if (n) {
						this.GlobalModel.file = e;
						try {
							let t = !1;
							this.MediaInputProcessor.on("metadata", (({bitrate: e, format: n, rotation: o, videoStreams: a, audioStreams: r, subtitleStreams: s})=>{
								t = !0,
								this.GlobalModel.mediaInfo = {
									...this.GlobalModel.mediaInfo,
									bitrate: e,
									format: (()=>{
										const e = this.GlobalModel.saveFormats.find((e=>e.name.toLowerCase() === n.toLowerCase())) || this.GlobalModel.saveFormats.find((e=>"auto" === e.name.toLowerCase()));
										return e.original = !0,
										"auto" === e.name && (e.labelSuffix = ` (${n.toLowerCase()})`,
										e.ext = n.toLowerCase()),
										e
									}
									)(),
									rotation: o,
									videoStreams: a,
									audioStreams: r,
									subtitleStreams: s
								},
								90 !== o && 270 !== o || (this.GlobalModel.mediaInfo.originalAspectRatio = {
									...this.GlobalModel.mediaInfo.originalAspectRatio,
									width: this.GlobalModel.mediaInfo.originalAspectRatio.height,
									height: this.GlobalModel.mediaInfo.originalAspectRatio.width
								},
								this.GlobalModel.mediaInfo.originalAspectRatio.width < 31 && this.GlobalModel.mediaInfo.originalAspectRatio.height < 31 && (this.GlobalModel.mediaInfo.originalAspectRatio.suffix = `(${this.GlobalModel.mediaInfo.originalAspectRatio.height}:${this.GlobalModel.mediaInfo.originalAspectRatio.width})`)),
								this.GlobalModel.encodeData.initialRotation = o,
								this.GlobalModel.activeState === this.States.AnalyzeFile && (!this.GlobalModel.mediaInfo.hasAudio || zo.isSafari && this.GlobalModel.mediaInfo.hasAACorMP3Streams ? (i(),
								this.GlobalModel.activeState = this.States.Edit) : (this.GlobalModel.mediaInfo.localUrl = null,
								this.GlobalModel.mediaInfo.browserSupported = !1,
								this.GlobalModel.activeState = this.States.Upload))
							}
							));
							const n = await this.MediaInputProcessor.processFile({
								file: e
							})
							  , o = this.$getAspectRatio(n.width, n.height);
							o.suffix = o.width < 31 && o.height < 31 ? `(${o.width}:${o.height})` : "",
							this.GlobalModel.mediaInfo = {
								...n,
								browserSupported: !0,
								originalAspectRatio: {
									...o,
									original: !0,
									label: this.$langs.ratio_original
								},
								localUrl: URL.createObjectURL(e)
							},
							this.GlobalModel.mediaInfo.hasAudio ? (i(),
							this.GlobalModel.activeState = this.States.Edit) : this.GlobalModel.activeState = t ? this.States.Upload : this.States.AnalyzeFile
						} catch (o) {
							window._?.l?.("err", o),
							this.GlobalModel.activeState = this.States.Upload
						}
					}
				}
			},
			watch: {
				"GlobalModel.uploadError": {
					handler(e) {
						e && (e.ff && !e.ff.has_video_streams ? window._?.popup_unsupported_file?.(this.GlobalModel.file.name, (()=>{
							this.GlobalModel.activeState = this.States.Choose
						}
						)) : e.ff || window._?.popup?.(this.$langs.connection_error))
					},
					immediate: !0
				},
				"GlobalModel.activeState": {
					handler(e, t) {
						if (this.$el)
							return this.GlobalModel.activeState === this.States.Choose ? (console.log("enter choose"),
							this.$el.dispatchEvent(new CustomEvent("chooseStateEnter",{
								bubbles: !0,
								cancelable: !0
							}))) : this.GlobalModel.activeState === this.States.Edit ? (console.log("enter convert"),
							this.$el.dispatchEvent(new CustomEvent("convertStateEnter",{
								bubbles: !0,
								cancelable: !0
							}))) : void 0
					},
					immediate: !0
				}
			},
			computed: {
				chooseLangs() {
					return this.$useLiterals ? {
						header_1: "{ header_1 }",
						header_2: "{ header_2 }",
						labelChoose: "{ add_files }",
						labelDrop: "{ drop_files }",
						labelDropbox: "{ dropbox }",
						labelGDrive: "{ gdrive }",
						labelFromUrl: "{ from_url }",
						labelDropHere: "{ drop_file_here2 }"
					} : {
						header_1: this.$langs.header_1,
						header_2: this.$langs.header_2,
						labelChoose: this.$langs.add_files,
						labelDrop: this.$langs.drop_files,
						labelDropbox: this.$langs.dropbox,
						labelGDrive: this.$langs.gdrive,
						labelFromUrl: this.$langs.from_url,
						labelDropHere: this.$langs.drop_file_here2
					}
				},
				enableEditState() {
					return this.GlobalModel.activeState === this.States.Edit || this.GlobalModel.activeState === this.States.Save
				},
				showEditState() {
					return this.GlobalModel.activeState === this.States.Edit
				}
			}
		}
		  , ir = tr
		  , nr = f(ir, o, a, !1, null, "3de29d9e", null)
		  , or = nr.exports
		  , ar = {
			name: "app",
			components: {
				MainView: or
			}
		}
		  , rr = ar
		  , sr = f(rr, t, n, !1, null, null, null)
		  , lr = sr.exports
		  , cr = i(561)
		  , dr = i.n(cr)
		  , ur = i(970)
		  , hr = i.n(ur)
		  , pr = i(235)
		  , fr = i.n(pr)
		  , mr = i(810)
		  , vr = i.n(mr)
		  , gr = i(626)
		  , br = i.n(gr)
		  , _r = i(652)
		  , yr = i.n(_r)
		  , wr = i(650)
		  , xr = i.n(wr)
		  , Cr = i(331)
		  , $r = i.n(Cr)
		  , Sr = i(337)
		  , kr = i.n(Sr)
		  , Tr = i(229)
		  , Mr = i.n(Tr)
		  , Er = i(879)
		  , Or = i.n(Er)
		  , Ar = i(99)
		  , Ir = i.n(Ar)
		  , Fr = i(426)
		  , Dr = i.n(Fr)
		  , Rr = i(903)
		  , Pr = i(802);
		Pr.ZP.use(Rr.Z),
		e["default"].use(Dr()),
		e["default"].use(Ir()),
		e["default"].use(Or()),
		e["default"].use(Mr()),
		e["default"].use(kr()),
		e["default"].use($r()),
		e["default"].use(xr()),
		e["default"].use(yr()),
		e["default"].use(br()),
		e["default"].use(vr()),
		e["default"].use(fr()),
		e["default"].use(hr()),
		e["default"].use(dr());
		class Lr {
			static get Choose() {
				return "choose"
			}
			static get Edit() {
				return "edit"
			}
			static get Save() {
				return "save"
			}
			static get Upload() {
				return "upload"
			}
			static get AnalyzeFile() {
				return "analyze"
			}
		}
		function Br(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		class Nr {
			constructor() {
				this._cut = {
					name: "tool_cut",
					label: "cut",
					hint: "cut",
					class: {
						cut: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					incompatibleTools: [],
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._crop = {
					name: "tool_crop",
					label: "crop",
					hint: "crop",
					class: {
						crop: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					incompatibleTools: [],
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._rotate = {
					name: "tool_rotate",
					label: "rotate",
					hint: "rotate",
					class: {
						rotate: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					incompatibleTools: [],
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._resolution = {
					name: "tool_resolution",
					label: "resolution",
					hint: "resolution",
					class: {
						resolution: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					incompatibleTools: [],
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._loop = {
					name: "tool_loop",
					label: "loop",
					hint: "loop",
					class: {
						loop: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					incompatibleTools: [],
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._stabilization = {
					name: "tool_stabilization",
					label: "stabilization",
					hint: "stabilization",
					class: {
						stabilization: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					incompatibleTools: [],
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._playbackRate = {
					name: "tool_playback_rate",
					label: "playback rate",
					hint: "playback rate",
					incompatibleTools: [],
					class: {
						"playback-rate": !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._delogo = {
					name: "tool_delogo",
					label: "delogo",
					hint: "delogo",
					incompatibleTools: [],
					class: {
						delogo: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._volume = {
					name: "tool_volume",
					label: "volume",
					hint: "volume",
					incompatibleTools: [],
					class: {
						volume: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._flip = {
					name: "tool_flip",
					label: "flip",
					hint: "flip",
					incompatibleTools: [],
					class: {
						flip: !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._add_image = {
					name: "tool_add_image",
					label: "add image",
					hint: "add image",
					incompatibleTools: [],
					class: {
						"add-image": !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					reset: function() {
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._add_text = {
					name: "tool_add_text",
					label: "add text",
					hint: "add text",
					incompatibleTools: [],
					class: {
						"add-text": !0,
						changed: !1,
						disabled: !1,
						incompatible: !1,
						"incompatible-highlight": !1
					},
					reset: function() {
						this.disabled = !1,
						this.class.changed = !1,
						this.class.disabled = !1,
						this.class.incompatible = !1,
						this.class["incompatible-highlight"] = !1
					},
					extraLabels: [{
						name: "tool_unavailable",
						value: "(unavailable)",
						classes: {
							unavailable: !0,
							hidden: "true"
						}
					}]
				},
				this._crop.incompatibleTools.push(this._stabilization, this._flip),
				this._stabilization.incompatibleTools.push(this._crop, this._delogo, this._add_text, this._add_image),
				this._rotate.incompatibleTools.push(this._add_image, this._add_text),
				this._delogo.incompatibleTools.push(this._stabilization, this._flip),
				this._add_text.incompatibleTools.push(this._rotate, this._stabilization),
				this._add_image.incompatibleTools.push(this._rotate, this._stabilization),
				this._flip.incompatibleTools.push(this._crop, this._delogo)
			}
			get Cut() {
				return this._cut
			}
			get Crop() {
				return this._crop
			}
			get Rotate() {
				return this._rotate
			}
			get Resolution() {
				return this._resolution
			}
			get Loop() {
				return this._loop
			}
			get Stabilization() {
				return this._stabilization
			}
			get Delogo() {
				return this._delogo
			}
			get Volume() {
				return this._volume
			}
			get PlaybackRate() {
				return this._playbackRate
			}
			get Flip() {
				return this._flip
			}
			get AddImage() {
				return this._add_image
			}
			get AddText() {
				return this._add_text
			}
			reset() {
				Object.values(this).forEach((e=>{
					e.reset?.()
				}
				))
			}
			static getInstance() {
				return this._instance
			}
		}
		Br(Nr, "_instance", new Nr);
		class jr {
			constructor() {
				this._cutTime = {
					from: 0,
					to: 0
				},
				this._playTime = {
					from: 0,
					to: 0
				},
				this._playTimeInverse = {
					from0: -1,
					to0: -1,
					from1: 1,
					to1: -1
				},
				this._cutTimeInverse = {
					from0: -1,
					to0: -1,
					from1: 1,
					to1: -1
				},
				this._progressTime = 0,
				this._fileDuration = 0,
				this._saveFormat = null,
				this._file = null,
				this._convertedFile = null,
				this._inverse = !1,
				this._originalFormat = "mp3"
			}
			set cutFrom(e) {
				this._cutTime.from = parseFloat(e)
			}
			set cutTo(e) {
				this._cutTime.to = parseFloat(e)
			}
			set cutFromInverse0(e) {
				this._cutTimeInverse.from0 = e
			}
			set cutToInverse0(e) {
				this._cutTimeInverse.to0 = e
			}
			set cutFromInverse1(e) {
				this._cutTimeInverse.from1 = e
			}
			set cutToInverse1(e) {
				this._cutTimeInverse.to1 = e
			}
			get cutFromInverse0() {
				return this._cutTimeInverse.from0
			}
			get cutToInverse0() {
				return this._cutTimeInverse.to0
			}
			get cutFromInverse1() {
				return this._cutTimeInverse.from1
			}
			get cutToInverse1() {
				return this._cutTimeInverse.to1
			}
			set playFrom(e) {
				this._playTime.from = parseFloat(e)
			}
			set playTo(e) {
				this._playTime.to = parseFloat(e)
			}
			set playFromInverse0(e) {
				this._playTimeInverse.from0 = e
			}
			set playToInverse0(e) {
				this._playTimeInverse.to0 = e
			}
			set playFromInverse1(e) {
				this._playTimeInverse.from1 = e
			}
			set playToInverse1(e) {
				this._playTimeInverse.to1 = e
			}
			get playFromInverse0() {
				return this._playTimeInverse.from0
			}
			get playToInverse0() {
				return this._playTimeInverse.to0
			}
			get playFromInverse1() {
				return this._playTimeInverse.from1
			}
			get playToInverse1() {
				return this._playTimeInverse.to1
			}
			get cutTime() {
				return this._cutTime
			}
			get cutTimeInverse() {
				return this._cutTimeInverse
			}
			get playTime() {
				return this._playTime
			}
			get playFrom() {
				return this._playTime.from
			}
			get playTo() {
				return this._playTime.to
			}
			get cutFrom() {
				return this._cutTime.from
			}
			get cutTo() {
				return this._cutTime.to
			}
			set file(e) {
				this._file = e
			}
			get file() {
				return this._file
			}
			set fileDuration(e) {
				this._fileDuration = e,
				this._playTime.to = this._cutTime.to = e
			}
			set progressTime(e) {
				this._progressTime = e
			}
			get progressTime() {
				return this._progressTime
			}
			get fileName() {
				return this._file?.name ?? ""
			}
			get fileDuration() {
				return this._fileDuration
			}
			set saveFormat(e) {
				this._saveFormat = e
			}
			get saveFormat() {
				return this._saveFormat
			}
			set originalFormat(e) {
				this._originalFormat = e
			}
			get originalFormat() {
				return this._originalFormat
			}
			set inverse(e) {
				this._inverse = e,
				e ? (this.cutFromInverse0 = this.playFromInverse0 = 0,
				this.playToInverse0 = this.cutToInverse0 = this.cutFrom,
				this.cutFromInverse1 = this.playFromInverse1 = this.cutTo,
				this.cutToInverse1 = this.playToInverse1 = this.fileDuration) : this.cutFromInverse0 = this.playFromInverse0 = this.playToInverse0 = this.cutToInverse0 = this.cutFromInverse1 = this.playFromInverse1 = this.playToInverse1 = this.cutToInverse1 = -1
			}
			get inverse() {
				return this._inverse
			}
			get encodeTime() {
				return this.inverse ? {
					inverse: !0,
					...this.cutTimeInverse
				} : {
					inverse: !1,
					...this.cutTime
				}
			}
			set convertedFile(e) {
				this._convertedFile = e
			}
			get convertedFile() {
				return this._convertedFile
			}
			reset() {
				this._cutTime = {
					from: 0,
					to: 0
				},
				this._playTime = {
					from: 0,
					to: 0
				},
				this._progressTime = 0,
				this._fileDuration = 0,
				this._file = null,
				this.inverse = !1,
				this._originalFormat = "mp3",
				this._convertedFile = null
			}
		}
		function zr(e, t, i) {
			Gr(e, t),
			t.set(e, i)
		}
		function Gr(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Vr(e, t) {
			var i = Hr(e, t, "get");
			return Wr(e, i)
		}
		function Hr(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Wr(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		var Ur = new WeakMap;
		class Xr {
			constructor() {
				zr(this, Ur, {
					writable: !0,
					value: (e,t)=>{
						e > 0 && t > 0 && (this._whRatio = e / t,
						this._hwRatio = t / e)
					}
				}),
				this.reset()
			}
			set duration(e) {
				this._duration = parseFloat(e) || 0
			}
			get duration() {
				return this._duration
			}
			set rotation(e) {
				this._rotation = e
			}
			get rotation() {
				return this._rotation
			}
			set width(e) {
				this._originalSize.width = this._width = parseInt(e) || 0,
				Vr(this, Ur).call(this, this._width, this._height)
			}
			set height(e) {
				this._originalSize.height = this._height = parseInt(e) || 0,
				Vr(this, Ur).call(this, this._width, this._height)
			}
			set previewWidth(e) {
				this._previewWidth = parseInt(e) || 0
			}
			get previewWidth() {
				return this._previewWidth
			}
			set previewHeight(e) {
				this._previewHeight = parseInt(e)
			}
			get previewHeight() {
				return this._previewHeight
			}
			set format(e) {
				this._format = e
			}
			set videoStreams(e) {
				this._videoStreams = e
			}
			set audioStreams(e) {
				this._audioStreams = e
			}
			get width() {
				return this._width
			}
			get height() {
				return this._height
			}
			get format() {
				return this._format
			}
			get videoStreams() {
				return this._videoStreams
			}
			get audioStreams() {
				return this._audioStreams
			}
			set subtitleStreams(e) {
				this._subtitleStreams = e
			}
			get subtitleStreams() {
				return this._subtitleStreams
			}
			get whRatio() {
				return this._whRatio
			}
			get hwRatio() {
				return this._hwRatio
			}
			get url() {
				return this._localUrl || this._remoteUrl
			}
			set bitrate(e) {
				this._bitrate = e
			}
			get bitrate() {
				return this._bitrate
			}
			set frames(e) {
				if (Array.isArray(e)) {
					this._frames.length = 0;
					for (let t = 0; t < e.length; t++)
						this._frames.push({
							src: "",
							loaded: !1,
							width: 0,
							height: 0,
							local: !0
						})
				} else if (!isNaN(e?.framesNumber)) {
					this._frames.length = 0;
					for (let t = 0; t < e.framesNumber; t++)
						this._frames.push({
							src: "",
							loaded: !1,
							width: e.frameWidth,
							height: e.frameHeight,
							local: !0
						})
				}
			}
			get frames() {
				return this._frames
			}
			set browserSupported(e) {
				this._browserSupported = !!e
			}
			get browserSupported() {
				return this._browserSupported
			}
			set originalAspectRatio(e) {
				this._originalAspectRatio = e
			}
			get originalAspectRatio() {
				return this._originalAspectRatio
			}
			get originalSize() {
				return this._originalSize
			}
			set remoteFileName(e) {
				this._remoteFileName = e
			}
			get remoteFileName() {
				return this._remoteFileName
			}
			set supported(e) {
				this._supported = !!e
			}
			get supported() {
				return this._supported
			}
			set downloadUrl(e) {
				this._downloadUrl = e
			}
			get downloadUrl() {
				return this._downloadUrl
			}
			set remoteUrl(e) {
				this._remoteUrl = e
			}
			get remoteUrl() {
				return this._remoteUrl
			}
			set localUrl(e) {
				this._localUrl = e
			}
			get localUrl() {
				return this._localUrl
			}
			set sar(e) {
				this._sar = e
			}
			get sar() {
				return this._sar
			}
			get dar() {
				return this.whRatio * this.sar
			}
			get hasVideo() {
				return this.videoStreams?.length > 0
			}
			get hasAudio() {
				return this.browserDetectedAudio || this.audioStreams?.length > 0
			}
			get hasAACorMP3Streams() {
				return !!this.audioStreams?.some((e=>/aac|mp3/.test(e.codec?.toLowerCase())))
			}
			set downloadSize(e) {
				this._downloadSize = e
			}
			get downloadSize() {
				return this._downloadSize
			}
			set browserDetectedAudio(e) {
				this._browserDetectedAudio = !!e
			}
			get browserDetectedAudio() {
				return this._browserDetectedAudio
			}
			reset() {
				this._duration = 0,
				this._width = 0,
				this._height = 0,
				this._previewWidth = 0,
				this._previewHeight = 0,
				this._format = null,
				this._videoStreams = [],
				this._audioStreams = [],
				this._subtitleStreams = [],
				this._frames = [],
				this._url = null,
				this._browserSupported = !1,
				this._whRatio = 1,
				this._hwRatio = 1,
				this._originalAspectRatio = 1,
				this._remoteFileName = null,
				this._supported = !0,
				this._downloadUrl = null,
				this._localUrl = null,
				this._remoteUrl = null,
				this._rotation = 0,
				this._sar = 1,
				this._dar = 0,
				this._hasSubtitles = !1,
				this._downloadSize = 0,
				this._browserDetectedAudio = !1,
				this._originalSize = {
					width: 0,
					height: 0
				}
			}
		}
		class qr {
			constructor() {
				this.reset()
			}
			set rotation(e) {
				this._rotation = e
			}
			get rotation() {
				return this._rotation
			}
			get transposeCommand() {
				switch (this.rotation) {
				case -90:
				case 270:
					return "transpose=2";
				case -180:
				case 180:
					return "transpose=1,transpose=1";
				case 90:
				case -270:
					return "transpose=1"
				}
				return ""
			}
			get rotateCommand() {
				const e = "-metadata:s:v:0 rotate=%angle%";
				let t = 0;
				if (270 === this.initialRotation)
					switch (this.rotation) {
					case -90:
					case 270:
						t = 180;
						break;
					case -180:
					case 180:
						t = -90;
						break;
					case 90:
					case -270:
						t = 0;
						break
					}
				else if (90 === this.initialRotation)
					switch (this.rotation) {
					case -90:
					case 270:
						t = 0;
						break;
					case -180:
					case 180:
						t = 90;
						break;
					case 90:
					case -270:
						t = 180;
						break
					}
				else if (180 === this.initialRotation)
					switch (this.rotation) {
					case -90:
					case 270:
						t = -90;
						break;
					case -180:
					case 180:
						t = 0;
						break;
					case 90:
					case -270:
						t = 90;
						break
					}
				else
					switch (this.rotation) {
					case -90:
					case 270:
						t = 90;
						break;
					case -180:
					case 180:
						t = 180;
						break;
					case 90:
					case -270:
						t = -90;
						break
					}
				return this.rotation % 360 === 0 ? "" : e.replace("%angle%", `${t}`)
			}
			get cropCommand() {
				return 0 === this.crop.width || 0 === this.crop.height || Math.ceil(100 * this.crop.width) >= 100 && Math.ceil(100 * this.crop.height) >= 100 && 0 === this.crop.left && 0 === this.crop.top ? "" : `crop=2*round(iw*${this.crop.width.toFixed(6)}/2):2*round(ih*${this.crop.height.toFixed(6)}/2):2*round(iw*${this.crop.left.toFixed(6)}/2):2*round(ih*${this.crop.top.toFixed(6)}/2)`
			}
			get delogoCommand() {
				return this.delogo.enabled ? this.delogo.delogosData.map((e=>`delogo=w=${Math.max(1, Math.floor(e.width * this._resolution.scale))}:h=${Math.max(1, Math.floor(e.height * this._resolution.scale))}:x=${Math.max(1, Math.floor(e.left * this._resolution.scale))}:y=${Math.max(1, Math.floor(e.top * this._resolution.scale))}`)).join(",") : ""
			}
			set crop(e) {
				"object" === typeof e && (this._crop = {
					...this._crop,
					...e
				})
			}
			set stabilization(e) {
				"object" === typeof e && (this._stabilization = {
					...this._stabilization,
					...e
				})
			}
			get stabilization() {
				return this._stabilization
			}
			get crop() {
				return this._crop
			}
			set resolution(e) {
				"object" === typeof e && (this._resolution = {
					...this._resolution,
					...e
				})
			}
			get resolution() {
				return this._resolution
			}
			set delogo(e) {
				this._delogo = e
			}
			get delogo() {
				return this._delogo
			}
			set loopTimes(e) {
				this._loopTimes = parseInt(e)
			}
			get loopTimes() {
				return this._loopTimes || 1
			}
			set playbackRate(e) {
				this._playbackRate = e
			}
			get playbackRate() {
				return this._playbackRate
			}
			get playbackRateVideoCommand() {
				return 1 !== this._playbackRate ? `setpts=${1 / this._playbackRate}*PTS` : ""
			}
			get playbackRateAudioCommand() {
				if (1 === this._playbackRate)
					return "";
				let e = this._playbackRate
				  , t = "";
				while (2 < e)
					e /= 2,
					t += "atempo=2,";
				while (e < .5)
					e *= 2,
					t += "atempo=0.5,";
				return t += "atempo=" + e,
				t
			}
			set volume(e) {
				this._volume = e
			}
			get volume() {
				return this._volume
			}
			get volumeCommand() {
				return 1 === this._volume ? "" : `volume=${this._volume}`
			}
			set imagesToAdd(e) {
				this._imagesToAdd = Array.isArray(e) ? e : [e]
			}
			get imagesToAdd() {
				return this._imagesToAdd || []
			}
			set textsToAdd(e) {
				this._textsToAdd = Array.isArray(e) ? e : [e]
			}
			get textsToAdd() {
				return this._textsToAdd || []
			}
			get stabilizationDetectCommand() {
				return this.stabilization.enabled ? `vidstabdetect=shakiness=${this.stabilization.shakiness}:accuracy=15:result=%vectors.trf%` : ""
			}
			get stabilizationTransformCommand() {
				return this.stabilization.enabled ? "vidstabtransform=input=%vectors.trf%,unsharp=5:5:0.8:3:3:0.4" : ""
			}
			get imageOverlayCommand() {
				if (0 === this._imagesToAdd.length)
					return "";
				const e = this._imagesToAdd.map((e=>e.getCommand()));
				return e
			}
			getFilterCommand({hasAudio: e=!0, inverseData: t=null, fileDuration: i=0, cutDuration: n=0, ignoreLoop: o=!1, useStabilizationDetect: a=!1, useStabilizationTransform: r=!1}={}) {
				if (this.copyCodec) {
					const e = []
					  , t = this.rotateCommand;
					return t && e.push(t),
					e.join(" ")
				}
				{
					e = e && this._volume > 0;
					const s = o ? 1 : this.loopTimes
					  , l = [(a || r ? "[0:v]null[v0]" : "[0:v]format=rgba[v0]") + this._imagesToAdd.reduce(((e,t,i)=>`${e};[${i + 1}:v]null[ov_${i}]`), "") + (this._textsToAdd.length > 0 ? `;[${this._imagesToAdd.length + 1}:v]null[tv_0]` : "")]
					  , c = e ? ["[0:a]anull[a0]"] : [];
					t?.enable ? t.cutToInverse0 > 0 && t.cutFromInverse1 < i ? l.push(`[v0]trim=duration=${t.cutToInverse0.toFixed(2)},setpts=PTS-STARTPTS[v0_0];[0:v]null[v0];[v0]trim=start=${t.cutFromInverse1.toFixed(2)},setpts=PTS-STARTPTS[v0_1];[v0_0][v0_1]concat=n=2:v=1:a=0[v0]`) : t.cutToInverse0 > 0 ? l.push(`[v0]trim=duration=${t.cutToInverse0.toFixed(2)},setpts=PTS-STARTPTS[v0]`) : t.cutFromInverse1 < i && l.push(`[v0]trim=start=${t.cutFromInverse1.toFixed(2)},setpts=PTS-STARTPTS[v0]`) : l.push(`[v0]trim=start="%offset_value%":duration=${n.toFixed(2)},setpts=PTS-STARTPTS[v0]`),
					this.flipHorizontal && l.push("[v0]hflip[v0]"),
					this.flipVertical && l.push("[v0]vflip[v0]"),
					this.imageOverlayCommand.length > 0 && l.push(...this.imageOverlayCommand.map(((e,t)=>`[ov_${t}]${e[0]}[ov_${t}];[v0][ov_${t}]${e[1]}[v0]`))),
					this.textsToAdd.length > 0 && l.push("[v0][tv_0]overlay=x=0:y=0,format=rgba[v0]"),
					0 !== this.resolution.width && 0 !== this.resolution.height && l.push(`[v0]scale=${2 * Math.round(this.resolution.width / 2)}:${2 * Math.round(this.resolution.height / 2)}[v0]`),
					this.transposeCommand && l.push(`[v0]${this.transposeCommand}[v0]`),
					this.playbackRateVideoCommand && l.push(`[v0]${this.playbackRateVideoCommand}[v0]`),
					a && this.stabilizationDetectCommand && l.push(`[v0]${this.stabilizationDetectCommand}[v0]`),
					r && this.stabilizationTransformCommand && l.push(`[v0]${this.stabilizationTransformCommand}[v0]`),
					a || r || (this.delogoCommand && (l.push(`[v0]${this.delogoCommand}[v0]`),
					console.log(this.delogoCommand)),
					this.cropCommand && l.push(`[v0]${this.cropCommand}[v0]`)),
					l.push("[v0]format=yuv420p[v0]"),
					e && (t?.enable ? t.cutToInverse0 > 0 && t.cutFromInverse1 < i ? c.push(`[a0]atrim=duration=${t.cutToInverse0.toFixed(2)},asetpts=PTS-STARTPTS[a0_0];[0:a]anull[a0];[a0]atrim=start=${t.cutFromInverse1.toFixed(2)},asetpts=PTS-STARTPTS[a0_1];[a0_0][a0_1]concat=n=2:v=0:a=1[a0]`) : t.cutToInverse0 > 0 ? c.push(`[a0]atrim=duration=${t.cutToInverse0.toFixed(2)},asetpts=PTS-STARTPTS[a0]`) : t.cutFromInverse1 < t.fileDuration && c.push(`[a0]atrim=start=${t.cutFromInverse1.toFixed(2)},asetpts=PTS-STARTPTS[a0]`) : c.push(`[a0]atrim=start=%offset_value%:duration=${n.toFixed(2)},asetpts=PTS-STARTPTS[a0]`),
					this.playbackRateAudioCommand && c.push(`[a0]${this.playbackRateAudioCommand}[a0]`),
					this.volumeCommand && c.push(`[a0]${this.volumeCommand}[a0]`));
					let d = "";
					if (e)
						if (1 === s)
							d = `${l.join(";")};${c.join(";")};[v0][a0]concat=1:v=1:a=1[v0]`;
						else {
							const e = Array.from({
								length: s
							});
							d = `${l.join(";")};${c.join(";")};[v0]split=${s}${e.reduce(((e,t,i)=>`${e}[vs${i}]`), "")};[a0]asplit=${s}${e.reduce(((e,t,i)=>`${e}[as${i}]`), "")};${e.reduce(((e,t,i)=>`${e}[vs${i}][as${i}]`), "")}concat=${s}:v=1:a=1[v0]`
						}
					else if (1 === s)
						d = `${l.join(";")}`;
					else {
						const e = Array.from({
							length: s
						});
						d = `${l.join(";")};[v0]split=${s}${e.reduce(((e,t,i)=>`${e}[vs${i}]`), "")};${e.reduce(((e,t,i)=>`${e}[vs${i}]`), "")}concat=${s}:v=1:a=0[v0]`
					}
					return d
				}
			}
			set noEncodeDisabled(e) {
				this._noEncodeDisabled = e
			}
			get noEncodeDisabled() {
				return this._noEncodeDisabled
			}
			set noEncodeActive(e) {
				this._noEncodeActive = e
			}
			get noEncodeActive() {
				return this._noEncodeActive
			}
			get copyCodec() {
				return this._noEncodeActive && !this._noEncodeDisabled
			}
			set initialRotation(e) {
				this._initialRotation = e
			}
			get initialRotation() {
				return this._initialRotation
			}
			set scale(e) {
				this._scale = e
			}
			get scale() {
				return this._scale
			}
			set flipHorizontal(e) {
				this._flipHorizontal = e
			}
			get flipHorizontal() {
				return this._flipHorizontal
			}
			set flipVertical(e) {
				this._flipVertical = e
			}
			get flipVertical() {
				return this._flipVertical
			}
			reset() {
				this._rotation = 0,
				this._loopTimes = 1,
				this._playbackRate = 1,
				this._volume = 1,
				this._noEncodeDisabled = !1,
				this._noEncodeActive = !1,
				this._initialRotation = 0,
				this._scale = 1,
				this._crop = {
					top: 0,
					left: 0,
					width: 0,
					height: 0
				},
				this._resolution = {
					width: 0,
					height: 0,
					name: null,
					scale: 1
				},
				this._originalResolution = {
					width: 0,
					height: 0
				},
				this._delogo = {
					delogosData: [],
					enabled: !1
				},
				this._imagesToAdd = [],
				this._textsToAdd = [],
				this._stabilization = {
					enabled: !1,
					shakiness: 5
				},
				this._flipHorizontal = !1,
				this._flipVertical = !1
			}
		}
		function Kr(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		class Yr {
			constructor() {
				this._activeTool = null,
				this._activeState = null,
				this._playData = new jr,
				this._mediaInfo = new Xr,
				this._encodeData = new qr,
				this._decodeProgress = 0,
				this._encodeProgress = 0,
				this._uploadProgress = 0,
				this._uploadError = null,
				this._uploaded = !1,
				this._cropChanged = !1,
				this._delogoChanged = !1,
				this._decodeError = null,
				this._encodeError = null,
				this._prevState = null,
				this._subscriptionCancelled = !1,
				this._saveFormats = [{
					name: "mp4",
					label: "mp4",
					hint: "good old mp4",
					original: !1,
					default: !0,
					defaultExt: "mp4",
					ext: "mp4",
					labelSuffix: ""
				}, {
					name: "mkv",
					label: "mkv",
					hint: "",
					default: !1,
					original: !1,
					defaultExt: "mkv",
					ext: "mkv",
					labelSuffix: ""
				}, {
					name: "mov",
					label: "mov",
					hint: "",
					original: !1,
					default: !1,
					defaultExt: "mov",
					ext: "mov",
					labelSuffix: ""
				}, {
					name: "auto",
					label: "auto",
					hint: "",
					original: !1,
					default: !1,
					defaultExt: "mp4",
					ext: "",
					labelSuffix: ""
				}],
				this._rotation = 0,
				this._scaleX = 1,
				this._scaleY = 1,
				this._flipHorizontal = !1,
				this._flipVertical = !1,
				this._preventPreviewGeneration = !1,
				this._imagesToAdd = [],
				this._textsToAdd = [],
				this._playData.saveFormat = this._saveFormats.find((e=>e.default)) ?? this.saveFormats[0]
			}
			set activeTool(e) {
				this._activeTool = e
			}
			get activeTool() {
				return this._activeTool
			}
			set activeState(e) {
				this._prevState = this._activeState,
				this._activeState = e
			}
			get activeState() {
				return this._activeState
			}
			get prevState() {
				return this._prevState
			}
			set file(e) {
				this._playData.file = e
			}
			get file() {
				return this._playData.file
			}
			get convertedOrOriginalFile() {
				return this._playData.convertedFile || this._playData.file
			}
			get playData() {
				return this._playData
			}
			get saveFormats() {
				return this._saveFormats
			}
			set mediaInfo(e) {
				Object.assign(this._mediaInfo, e),
				e.duration && (this._playData.fileDuration = e.duration)
			}
			get mediaInfo() {
				return this._mediaInfo
			}
			get encodeData() {
				return this._encodeData
			}
			set decodeProgress(e) {
				this._decodeProgress = e
			}
			get decodeProgress() {
				return this._decodeProgress
			}
			set encodeProgress(e) {
				this._encodeProgress = e
			}
			get encodeProgress() {
				return this._encodeProgress
			}
			set uploadProgress(e) {
				this._uploadProgress = e
			}
			get uploadProgress() {
				return this._uploadProgress
			}
			set uploadError(e) {
				this._uploadError = e
			}
			get uploadError() {
				return this._uploadError
			}
			set uploaded(e) {
				this._uploaded = e
			}
			get uploaded() {
				return this._uploaded
			}
			get cropChanged() {
				return this._cropChanged
			}
			set cropChanged(e) {
				this._cropChanged = e
			}
			set delogoChanged(e) {
				this._delogoChanged = e
			}
			get delogoChanged() {
				return this._delogoChanged
			}
			set addImageChanged(e) {
				this._addImageChanged = e
			}
			get addImageChanged() {
				return this._addImageChanged
			}
			set addTextChanged(e) {
				this._addTextChanged = e
			}
			get addTextChanged() {
				return this._addTextChanged
			}
			set subscriptionCancelled(e) {
				this._subscriptionCancelled = e
			}
			get subscriptionCancelled() {
				return this._subscriptionCancelled
			}
			set imagesToAdd(e) {
				this._imagesToAdd = Array.isArray(e) ? e : [e]
			}
			get imagesToAdd() {
				return this._imagesToAdd
			}
			set textsToAdd(e) {
				this._textsToAdd = Array.isArray(e) ? e : [e]
			}
			get textsToAdd() {
				return this._textsToAdd
			}
			set flipHorizontal(e) {
				this._flipHorizontal = this.encodeData.flipHorizontal = e
			}
			get flipHorizontal() {
				return this._flipHorizontal
			}
			set flipVertical(e) {
				this._flipVertical = this.encodeData.flipVertical = e
			}
			get flipVertical() {
				return this._flipVertical
			}
			set scaleX(e) {
				this._scaleX = e
			}
			set scaleY(e) {
				this._scaleY = e
			}
			get scaleX() {
				return this._scaleX
			}
			get scaleY() {
				return this._scaleY
			}
			set rotation(e) {
				this._rotation = e
			}
			get rotation() {
				return this._rotation
			}
			set preventPreviewGeneration(e) {
				this._preventPreviewGeneration = e
			}
			get preventPreviewGeneration() {
				return this._preventPreviewGeneration
			}
			set encodeError(e) {
				this._encodeError = e
			}
			get encodeError() {
				return this._encodeError
			}
			reset() {
				this._activeTool = null,
				this._cropChanged = !1,
				this._delogoChanged = !1,
				this._addImageChanged = !1,
				this._addTextChanged = !1,
				this._decodeProgress = 0,
				this._encodeProgress = 0,
				this._rotation = 0,
				this._scaleX = 1,
				this._scaleY = 1,
				this._playData.reset(),
				this._mediaInfo.reset(),
				this._encodeData.reset(),
				this._imagesToAdd = [],
				this._textsToAdd = [],
				this._encodeError = null,
				this._playData.saveFormat = this.saveFormats.find((e=>e.default)) ?? this.saveFormats[0],
				this._uploadProgress = 0,
				this._uploadError = null,
				this._uploaded = !1,
				this._subscriptionCancelled = !1,
				this._flipHorizontal = !1,
				this._flipVertical = !1,
				this._preventPreviewGeneration = !1
			}
			static getInstance() {
				return this._instance
			}
		}
		function Jr(e, t, i) {
			Qr(e, t),
			t.set(e, i)
		}
		function Qr(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Zr(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function es(e, t) {
			var i = ns(e, t, "get");
			return ts(e, i)
		}
		function ts(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		function is(e, t, i) {
			var n = ns(e, t, "set");
			return os(e, n, i),
			i
		}
		function ns(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function os(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		Kr(Yr, "_instance", new Yr);
		var as = new WeakMap
		  , rs = new WeakMap;
		class ss extends jo {
			constructor() {
				super(),
				Jr(this, as, {
					writable: !0,
					value: !1
				}),
				Jr(this, rs, {
					writable: !0,
					value: null
				}),
				document.addEventListener("DOMContentLoaded", (()=>{
					window.ServerAPI && window.CloudApi && (window._?.l?.(window.CloudApi),
					window.CloudApi.init({
						query: {
							ff: 1
						},
						attach_openers: !1,
						attach_savers: !1,
						callbacks: {
							onOpenStart: (e,t,i)=>{
								is(this, rs, i),
								this.emit("cloudOpenStart", {
									event: e,
									...t
								})
							}
							,
							onOpenProgress: (e,t)=>{
								this.emit("cloudOpenProgress", {
									progress: e,
									operationId: t
								})
							}
							,
							onOpenSuccess: e=>{
								is(this, rs, null),
								this.emit("cloudOpenSuccess", e)
							}
							,
							onOpenCancel: e=>{
								is(this, rs, null),
								this.emit("cloudOpenCancel", e)
							}
							,
							onOpenError: e=>{
								is(this, rs, null),
								this.emit("cloudOpenError", e)
							}
							,
							onFilesizeLimit: ()=>{
								this.emit("cloudFileSizeLimit")
							}
							,
							onSubscribeCancel: ()=>{
								this.emit("cloudFileSubscribeCancel")
							}
							,
							onSaveStart: e=>{
								this.emit("cloudSaveStart", e)
							}
							,
							onSaveProgress: e=>{
								this.emit("cloudSaveStart", {
									progress: e
								})
							}
							,
							onSaveComplete: e=>{
								this.emit("cloudSaveComplete", e)
							}
							,
							onSaveSuccess: e=>{
								this.emit("cloudSaveSuccess", e)
							}
							,
							onSaveCancel: e=>{
								this.emit("cloudSaveCancel", e)
							}
							,
							onSaveError: e=>{
								this.emit("cloudSaveError", e)
							}
						}
					}))
				}
				))
			}
			attachCloudOpeners() {
				window.CloudApi?.attach_openers()
			}
			cancel() {
				es(this, rs) && (window.CloudApi.cancel(es(this, rs)),
				is(this, rs, null))
			}
			get operationId() {
				return es(this, rs)
			}
			static getInstance() {
				return this._instance
			}
		}
		function ls() {
			return new Worker(i.p + "js/media-worker.worker.js")
		}
		function cs(e, t, i) {
			ds(e, t),
			t.set(e, i)
		}
		function ds(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function us(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function hs(e, t, i) {
			var n = ms(e, t, "set");
			return ps(e, n, i),
			i
		}
		function ps(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		function fs(e, t) {
			var i = ms(e, t, "get");
			return vs(e, i)
		}
		function ms(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function vs(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		Zr(ss, "_instance", new ss);
		var gs = new WeakMap
		  , bs = new WeakMap
		  , _s = new WeakMap
		  , ys = new WeakMap
		  , ws = new WeakMap;
		class xs {
			constructor() {
				if (cs(this, gs, {
					writable: !0,
					value: null
				}),
				cs(this, bs, {
					writable: !0,
					value: !1
				}),
				cs(this, _s, {
					writable: !0,
					value: {}
				}),
				cs(this, ys, {
					writable: !0,
					value: ({data: {type: e, requestId: t, response: i}})=>{
						"ready" === e ? hs(this, bs, !0) : t && fs(this, _s)[t]?.(i)
					}
				}),
				cs(this, ws, {
					writable: !0,
					value: ()=>{
						hs(this, gs, new ls),
						fs(this, gs).addEventListener("message", fs(this, ys))
					}
				}),
				xs._instance)
					throw new Error("class is singleton");
				fs(this, ws).call(this)
			}
			callWorker(e, t) {
				if ("object" === typeof e && "function" === typeof t) {
					if (e["__requestId__"])
						throw new Error("field '__requestId__' reserved");
					e["__requestId__"] = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
						const t = 16 * Math.random() | 0
						  , i = "x" === e ? t : 3 & t | 8;
						return i.toString(16)
					}
					)),
					fs(this, _s)[e["__requestId__"]] = t,
					fs(this, gs).postMessage(e)
				}
			}
			reset() {}
			cancel() {}
			static getInstance() {
				return this._instance || (this._instance = new xs)
			}
		}
		function Cs(e, t, i) {
			$s(e, t),
			t.set(e, i)
		}
		function $s(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Ss(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function ks(e, t) {
			var i = Ts(e, t, "get");
			return Ms(e, i)
		}
		function Ts(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Ms(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		us(xs, "_instance", null);
		const Es = window.AudioContext || window.webkitAudioContext;
		var Os = new WeakMap
		  , As = new WeakMap;
		class Is extends jo {
			constructor() {
				if (Is._instance)
					throw new Error("class is singleton");
				super(),
				Cs(this, Os, {
					writable: !0,
					value: ea.getInstance()
				}),
				Cs(this, As, {
					writable: !0,
					value: new Es
				})
			}
			resumeAudioContext() {
				"running" !== ks(this, As).state && ks(this, As).resume().then((()=>{
					window._?.l?.("called resume")
				}
				)).catch((e=>{
					window._?.l?.("resume err", e)
				}
				))
			}
			processFile(e) {
				const t = ()=>new Promise(((t,i)=>{
					const n = document.createElement("video");
					n.preload = "metadata",
					n.src = URL.createObjectURL(e.file),
					n.addEventListener("loadedmetadata", (o=>{
						n.videoWidth > 0 && n.duration > 0 && Number.isFinite(n.duration) ? (xs.getInstance().callWorker({
							type: "getMetadata",
							file: e.file
						}, (e=>{
							this.emit("metadata", e)
						}
						)),
						t({
							duration: n.duration,
							width: 2 * Math.floor(n.videoWidth / 2),
							height: 2 * Math.floor(n.videoHeight / 2),
							previewWidth: 2 * Math.floor(n.videoWidth / 2),
							previewHeight: 2 * Math.floor(n.videoHeight / 2),
							supportVideo: n.videoWidth > 0,
							browserDetectedAudio: !!n.captureStream?.().getAudioTracks()?.length || !!n.mozCaptureStream?.().getAudioTracks()?.length || !!n.audioTracks?.length
						})) : i({
							err: "video not supported"
						})
					}
					)),
					n.addEventListener("error", (()=>i({
						err: "video not supported"
					})))
				}
				));
				return new Promise((async(e,i)=>{
					try {
						const i = await t();
						return e(i)
					} catch (n) {
						return i(n)
					}
				}
				))
			}
			reset() {
				this.removeAllEventListeners(),
				ks(this, Os).reset()
			}
			static getInstance() {
				return this._instance
			}
		}
		function Fs(e, t, i) {
			Ds(e, t),
			t.set(e, i)
		}
		function Ds(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Rs(e, t) {
			var i = Bs(e, t, "get");
			return Ps(e, i)
		}
		function Ps(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		function Ls(e, t, i) {
			var n = Bs(e, t, "set");
			return Ns(e, n, i),
			i
		}
		function Bs(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Ns(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		Ss(Is, "_instance", new Is);
		const js = window.AudioContext || window.webkitAudioContext;
		var zs = new WeakMap
		  , Gs = new WeakMap;
		class Vs extends jo {
			constructor() {
				super(),
				Fs(this, zs, {
					writable: !0,
					value: null
				}),
				Fs(this, Gs, {
					writable: !0,
					value: null
				}),
				this._filters = {},
				this._audioContext = new js,
				Ls(this, Gs, this._audioContext.createGain());
				const e = new ni;
				e.inputNode = Rs(this, Gs),
				this._filters[ni.name] = e,
				this._filters[ni.name].on("change", (e=>{
					this.emit("requestDraw", this.filtersArray)
				}
				)),
				Rs(this, Gs).connect(this._audioContext.destination)
			}
			get filtersArray() {
				return Object.values(this._filters)
			}
			set _source(e) {
				e instanceof HTMLMediaElement && (Ls(this, zs, this._audioContext.createMediaElementSource(e)),
				Rs(this, zs).connect(Rs(this, Gs)))
			}
			update(e) {}
			updateInitialValues(e) {}
			getFilter(e) {
				return this._filters[e] || {}
			}
			resumeAudioContext() {
				"running" !== this._audioContext.state && this._audioContext.resume().then((()=>{
					window._?.l?.("called resume")
				}
				)).catch((e=>{
					window._?.l?.("resume err", e)
				}
				))
			}
			suspendAudioContext() {
				this._audioContext.suspend().then((()=>{}
				)).catch((e=>{
					window._?.l?.("suspend err", e)
				}
				))
			}
			resetFilters() {
				this.filtersArray.forEach((e=>{
					e.reset()
				}
				))
			}
			get filters() {
				return this._filters
			}
		}
		function Hs(e, t, i) {
			Ws(e, t),
			t.set(e, i)
		}
		function Ws(e, t) {
			if (t.has(e))
				throw new TypeError("Cannot initialize the same private elements twice on an object")
		}
		function Us(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		function Xs(e, t, i) {
			var n = Ys(e, t, "set");
			return qs(e, n, i),
			i
		}
		function qs(e, t, i) {
			if (t.set)
				t.set.call(e, i);
			else {
				if (!t.writable)
					throw new TypeError("attempted to set read only private field");
				t.value = i
			}
		}
		function Ks(e, t) {
			var i = Ys(e, t, "get");
			return Js(e, i)
		}
		function Ys(e, t, i) {
			if (!t.has(e))
				throw new TypeError("attempted to " + i + " private field on non-instance");
			return t.get(e)
		}
		function Js(e, t) {
			return t.get ? t.get.call(e) : t.value
		}
		var Qs = new WeakMap
		  , Zs = new WeakMap
		  , el = new WeakMap
		  , tl = new WeakMap
		  , il = new WeakMap
		  , nl = new WeakMap
		  , ol = new WeakMap
		  , al = new WeakMap
		  , rl = new WeakMap
		  , sl = new WeakMap
		  , ll = new WeakMap;
		class cl extends Vs {
			constructor() {
				if (super(),
				Hs(this, Qs, {
					writable: !0,
					value: null
				}),
				Hs(this, Zs, {
					writable: !0,
					value: null
				}),
				Hs(this, el, {
					writable: !0,
					value: null
				}),
				Hs(this, tl, {
					writable: !0,
					value: null
				}),
				Hs(this, il, {
					writable: !0,
					value: "pause"
				}),
				Hs(this, nl, {
					writable: !0,
					value: !1
				}),
				Hs(this, ol, {
					writable: !0,
					value: {}
				}),
				Hs(this, al, {
					writable: !0,
					value: Array.from({
						length: Math.max(1, zo.isMobile ? Math.min(2, navigator.hardwareConcurrency - 2) : navigator.hardwareConcurrency - 2)
					}).map(((e,t)=>{
						const i = document.createElement("video");
						return i.preload = "metadata",
						i.autoplay = !1,
						i.muted = !0,
						i.controls = !1,
						i
					}
					))
				}),
				Hs(this, rl, {
					writable: !0,
					value: ()=>{
						if (Ks(this, tl)instanceof jr) {
							if (0 !== Ks(this, tl).playTo) {
								const e = ()=>{
									Ks(this, tl).inverse ? Ks(this, Zs).currentTime >= Ks(this, tl).playToInverse0 && Ks(this, Zs).currentTime < Ks(this, tl).playFromInverse1 ? Ks(this, Zs).currentTime = Ks(this, tl).playFromInverse1 + .1 : Ks(this, Zs).currentTime + .01 >= Ks(this, tl).cutToInverse1 && this.pause() : Ks(this, Zs).currentTime >= Ks(this, tl).playTo && this.pause(),
									super.update(Ks(this, Zs).currentTime),
									this.emit("updatePlayProgress", {
										time: Ks(this, Zs).currentTime
									})
								}
								;
								Xs(this, el, setInterval((()=>{
									e()
								}
								), 1e3 / 60)),
								e()
							}
							Xs(this, il, "play"),
							this.emit("togglePlayState", {
								state: Ks(this, il)
							})
						}
					}
				}),
				Hs(this, sl, {
					writable: !0,
					value: ()=>{
						clearInterval(Ks(this, el)),
						Ks(this, nl) ? (Xs(this, il, "pause"),
						this.emit("togglePlayState", {
							state: Ks(this, il)
						})) : -1 === Ks(this, tl).playFromInverse0 ? (this.seek(Ks(this, tl).playFrom),
						Ks(this, Zs).play()) : (this.seek(Ks(this, tl).playFromInverse0),
						Xs(this, il, "pause"),
						this.emit("togglePlayState", {
							state: Ks(this, il)
						}))
					}
				}),
				Hs(this, ll, {
					writable: !0,
					value: ()=>{
						Ks(this, tl) && this.seek(Ks(this, tl).progressTime)
					}
				}),
				cl._instance)
					throw new Error("class is singleton")
			}
			setPlayData(e) {
				Xs(this, tl, e),
				this.seek(e.progressTime / 1e3)
			}
			set videoDisplay(e) {
				Xs(this, Qs, e),
				Xs(this, Zs, Ks(this, Qs).getVideo()),
				Ks(this, Zs).onplay = Ks(this, rl),
				Ks(this, Zs).onpause = Ks(this, sl),
				Ks(this, Zs).addEventListener("loadedmetadata", Ks(this, ll)),
				this._source = Ks(this, Zs)
			}
			setVideoURL(e) {
				zo.isSafari ? (Ks(this, Zs).src = e,
				Ks(this, Zs).currentTime = .1) : Ks(this, Zs).src = e
			}
			togglePlay() {
				"pause" === Ks(this, il) ? this.play() : this.pause()
			}
			play() {
				Ks(this, Zs) && Ks(this, Zs).src && (Ks(this, tl).inverse ? Ks(this, Zs).currentTime + .01 > Ks(this, tl).cutToInverse1 ? (Ks(this, Zs).onseeked = ()=>{
					Ks(this, Zs).onseeked = null,
					Xs(this, nl, !1),
					Ks(this, Zs).play()
				}
				,
				Ks(this, Zs).currentTime = 0) : (Xs(this, nl, !1),
				Ks(this, Zs).play()) : Ks(this, Zs).currentTime + .01 > Ks(this, tl).playTo ? (Ks(this, Zs).onseeked = ()=>{
					Ks(this, Zs).onseeked = null,
					Xs(this, nl, !1),
					Ks(this, Zs).play()
				}
				,
				Ks(this, Zs).currentTime = Ks(this, tl).playFrom) : (Xs(this, nl, !1),
				Ks(this, Zs).play()))
			}
			pause() {
				Ks(this, Zs) && Ks(this, Zs).src && (Xs(this, nl, !0),
				Ks(this, Zs).pause())
			}
			seek(e) {
				parseFloat(e) >= 0 && e <= Ks(this, Zs).duration && (super.update(e),
				Ks(this, Zs).currentTime = e,
				this.emit("updatePlayProgress", {
					time: Ks(this, Zs).currentTime
				}))
			}
			reset() {
				Xs(this, ol, {}),
				this.resetFilters(),
				this.pause(),
				this.removeAllEventListeners()
			}
			generateFrames(e) {
				Ks(this, al).forEach((e=>{
					e.onseeked = null,
					e.src = ""
				}
				));
				const t = Math.ceil(e.containerWidth / e.frameWidth)
				  , i = Math.min(t, Ks(this, al).length)
				  , n = e.videoDuration / t;
				let o = i - 1;
				if (e.callback?.({
					framesNumber: t,
					type: "framesNumber"
				}),
				e.localMode) {
					const a = (i,r)=>{
						if (o >= t)
							return;
						r.width = e.frameWidth,
						r.height = e.frameHeight;
						const s = document.createElement("canvas");
						s.width = e.frameWidth,
						s.height = e.frameHeight;
						const l = s.getContext("2d");
						r.src = `${e.videoUrl}#t=${n / 2 + n * i}`,
						r.onseeked = ()=>{
							l.drawImage(r, 0, 0, s.width, s.height),
							s.toBlob((t=>{
								e.callback?.({
									frame: URL.createObjectURL(t),
									type: "frame",
									index: i
								}),
								o += 1,
								a(o, r)
							}
							), "image/jpeg")
						}
					}
					;
					if (zo.isSafari)
						xs.getInstance().callWorker({
							type: "generateThumbs",
							file: e.file,
							thumbsContainerWidth: e.containerWidth,
							thumbHeight: e.frameHeight,
							thumbWidth: e.frameWidth,
							framesNumber: t,
							timeStep: n
						}, (t=>{
							console.log(t);
							const i = document.createElement("canvas");
							i.width = t.frameWidth,
							i.height = e.frameHeight;
							const n = i.getContext("2d");
							n.putImageData(new ImageData(t.content,t.frameWidth), 0, 0),
							i.toBlob((i=>{
								e.callback?.({
									frame: URL.createObjectURL(i),
									type: "frame",
									index: t.frameNumber
								})
							}
							), "image/jpeg")
						}
						));
					else
						for (let e = 0; e < i; e++)
							a(e, Ks(this, al)[e])
				} else
					for (let a = 0; a < t; a++)
						e.callback?.({
							frame: e.remoteThumbsUrl.replace("time", Math.round(1e3 * (n / 2 + n * a))).replace("size", e.frameHeight),
							type: "frame",
							index: a
						})
			}
			get filters() {
				return super.filters
			}
			static getInstance() {
				return this._instance
			}
		}
		function dl(e, t, i) {
			return t in e ? Object.defineProperty(e, t, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = i,
			e
		}
		Us(cl, "_instance", new cl);
		class ul {
			constructor() {}
			encode(e, t) {
				ea.getInstance().encodeFile(e, t)
			}
			encodeWithMultipleCommands(e, t, i) {
				ea.getInstance().encodeWithMultipleCommands(e, t, i)
			}
			encodeFilterPreview(e, t, i) {
				ea.getInstance().encodeFilterPreview(e, t, i)
			}
			cancelEncode() {
				ea.getInstance().cancel()
			}
			cancelFilterPreview() {
				ea.getInstance().cancelFilterPreview()
			}
			static getInstance() {
				return this._instance
			}
		}
		dl(ul, "_instance", new ul);
		var hl = {
			install(e) {
				e.mixin({
					data() {
						return {
							States: Lr,
							Tools: Nr.getInstance(),
							GlobalModel: Yr.getInstance(),
							CloudProcessor: ss.getInstance(),
							RemoteProcessor: ea.getInstance(),
							MediaInputProcessor: Is.getInstance(),
							MediaOutputProcessor: cl.getInstance(),
							MediaEncoder: ul.getInstance(),
							WasmProcessor: xs.getInstance(),
							isMobile: zo.isMobile,
							isMobileOnly: zo.isMobileOnly
						}
					}
				})
			}
		}
		  , pl = i(627)
		  , fl = i.n(pl)
		  , ml = {
			methods: {
				$isNotEmptyArray(e) {
					return Array.isArray(e) && e.length > 0
				},
				$isObject(e) {
					return null !== e && "object" === typeof e && !Array.isArray(e)
				},
				$getCssValueOfElement(e, t) {
					const i = window.getComputedStyle(e);
					return i ? i[t] : null
				},
				$parseTime(e, t=!1) {
					e = parseFloat(e) || 0;
					var i = new Date(null);
					return i.setMilliseconds(e),
					t ? i.toISOString().substr(11, 10) : i.toISOString().substr(14, 7)
				},
				$uuidv4() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
						var t = 16 * Math.random() | 0
						  , i = "x" === e ? t : 3 & t | 8;
						return i.toString(16)
					}
					))
				},
				$deepClone(e) {
					try {
						return JSON.parse(JSON.stringify(e))
					} catch (t) {
						return e
					}
				},
				$capitalize(e) {
					return e ? `${e.charAt(0).toUpperCase()}${e.substring(1)}` : null
				},
				$getAspectRatio(e, t) {
					const i = (e,t)=>t ? i(t, e % t) : Math.abs(e)
					  , n = i(Math.round(e), Math.round(t))
					  , o = Math.round(e / n)
					  , a = Math.round(t / n);
					return {
						name: `${o}:${a}`,
						label: `${o}:${a}`,
						width: o,
						height: a,
						original: !1,
						hint: "",
						hidden: !1,
						ratio: o / a
					}
				}
			}
		};
		e["default"].config.productionTip = !1,
		e["default"].config.silent = !0,
		e["default"].prototype.$useLiterals = window.params?.useLiterals,
		e["default"].prototype.$langs = window.glob.lang,
		e["default"].prototype.$remoteThumbsUrl = `https://${window.glob.s_encoder}/vcutter/frame2/remote_filename/time/size`,
		e["default"].prototype.$addDebugInfo = window.$addDebugInfo = e=>{
			"object" !== typeof window.glob.debug_info && (window.glob.debug_info = {}),
			Array.isArray(window.glob.debug_info.commands) || (window.glob.debug_info.commands = []),
			window.glob.debug_info.commands.push(e)
		}
		,
		e["default"].use(hl),
		e["default"].use(fl()),
		e["default"].mixin(ml),
		e["default"].mixin({
			methods: {
				$getFormat: (e,t)=>{
					const i = e.split(",")
					  , n = /mp4/.test(e)
					  , o = /matroska/.test(e);
					/^asf$/.test(i[0]) && i.push("wma", "wmv");
					const a = /[^.]+$/.exec(t)[0];
					return -1 !== i.indexOf(a) ? a : n ? "mp4" : o && "mkv" === a ? "mkv" : i[0]
				}
			}
		}),
		new e["default"]({
			render: e=>e(lr)
		}).$mount("#app")
	}()
}
)();
