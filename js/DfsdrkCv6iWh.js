(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    112: function (e, t, n) {
      e.exports = n.p + "img/footer-bg.2009680.webp";
    },
    114: function (e, t, n) {
      "use strict";
      var r = n(186),
        a = {
          name: "LanguageSelector",
          props: { bgColor: { type: String, default: "#0e0f2b" } },
          directives: { ClickOutside: n.n(r).a },
          data: function () {
            return { show: !1 };
          },
          methods: {
            toggle: function () {
              this.show = !this.show;
            },
            handleClickOutside: function () {
              this.show = !1;
            },
          },
        },
        i = (n(404), n(21)),
        o = Object(i.a)(
          a,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              {
                directives: [
                  {
                    name: "click-outside",
                    rawName: "v-click-outside",
                    value: e.handleClickOutside,
                    expression: "handleClickOutside",
                  },
                ],
                staticClass: "language-selector",
                on: { click: e.toggle },
              },
              [
                this.$i18n.locale.startsWith("ru")
                  ? n(
                      "div",
                      {
                        staticClass: "value",
                        style: { backgroundColor: e.bgColor },
                      },
                      [
                        n("span", { staticClass: "fi fi-ru" }),
                        e._v(" "),
                        n("span", { staticClass: "label" }, [e._v("RU")]),
                      ]
                    )
                  : e._e(),
                e._v(" "),
                this.$i18n.locale.startsWith("en")
                  ? n(
                      "div",
                      {
                        staticClass: "value",
                        style: { backgroundColor: e.bgColor },
                      },
                      [
                        n("span", { staticClass: "fi fi-gb" }),
                        e._v(" "),
                        n("span", { staticClass: "label" }, [e._v("EN")]),
                      ]
                    )
                  : e._e(),
                e._v(" "),
                e.show
                  ? n(
                      "div",
                      {
                        staticClass: "varies",
                        style: { backgroundColor: e.bgColor },
                      },
                      [
                        n(
                          "nuxt-link",
                          { attrs: { to: this.switchLocalePath("ru") } },
                          [
                            n("span", { staticClass: "fi fi-ru" }),
                            e._v(" "),
                            n("span", { staticClass: "label" }, [e._v("RU")]),
                          ]
                        ),
                        e._v(" "),
                        n(
                          "nuxt-link",
                          { attrs: { to: this.switchLocalePath("en") } },
                          [
                            n("span", { staticClass: "fi fi-gb" }),
                            e._v(" "),
                            n("span", { staticClass: "label" }, [e._v("EN")]),
                          ]
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ]
            );
          },
          [],
          !1,
          null,
          "c33f0794",
          null
        );
      t.a = o.exports;
    },
    122: function (e, t, n) {
      "use strict";
      n(54), n(49), n(11), n(2), n(13), n(12), n(14), n(3), n(35), n(28), n(29);
      var r = n(8);
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var i =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        o =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          },
        s =
          window.IntersectionObserver &&
          new window.IntersectionObserver(function (e) {
            e.forEach(function (e) {
              var t = e.intersectionRatio,
                n = e.target;
              t <= 0 || !n.__prefetch || n.__prefetch();
            });
          });
      t.a = {
        name: "NuxtLink",
        extends: r.default.component("RouterLink"),
        props: {
          prefetch: { type: Boolean, default: !0 },
          noPrefetch: { type: Boolean, default: !1 },
        },
        mounted: function () {
          this.prefetch &&
            !this.noPrefetch &&
            (this.handleId = i(this.observe, { timeout: 2e3 }));
        },
        beforeDestroy: function () {
          o(this.handleId),
            this.__observed &&
              (s.unobserve(this.$el), delete this.$el.__prefetch);
        },
        methods: {
          observe: function () {
            s &&
              this.shouldPrefetch() &&
              ((this.$el.__prefetch = this.prefetchLink.bind(this)),
              s.observe(this.$el),
              (this.__observed = !0));
          },
          shouldPrefetch: function () {
            return this.getPrefetchComponents().length > 0;
          },
          canPrefetch: function () {
            var e = navigator.connection;
            return !(
              this.$nuxt.isOffline ||
              (e && ((e.effectiveType || "").includes("2g") || e.saveData))
            );
          },
          getPrefetchComponents: function () {
            return this.$router
              .resolve(this.to, this.$route, this.append)
              .resolved.matched.map(function (e) {
                return e.components.default;
              })
              .filter(function (e) {
                return "function" == typeof e && !e.options && !e.__prefetched;
              });
          },
          prefetchLink: function () {
            if (this.canPrefetch()) {
              s.unobserve(this.$el);
              var e,
                t = (function (e, t) {
                  var n =
                    ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return a(e, t);
                          var n = Object.prototype.toString
                            .call(e)
                            .slice(8, -1);
                          return (
                            "Object" === n &&
                              e.constructor &&
                              (n = e.constructor.name),
                            "Map" === n || "Set" === n
                              ? Array.from(e)
                              : "Arguments" === n ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  n
                                )
                              ? a(e, t)
                              : void 0
                          );
                        }
                      })(e)) ||
                      (t && e && "number" == typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        i = function () {};
                      return {
                        s: i,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: i,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var o,
                    s = !0,
                    u = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (s = e.done), e;
                    },
                    e: function (e) {
                      (u = !0), (o = e);
                    },
                    f: function () {
                      try {
                        s || null == n.return || n.return();
                      } finally {
                        if (u) throw o;
                      }
                    },
                  };
                })(this.getPrefetchComponents());
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value,
                    r = n();
                  r instanceof Promise && r.catch(function () {}),
                    (n.__prefetched = !0);
                }
              } catch (e) {
                t.e(e);
              } finally {
                t.f();
              }
            }
          },
        },
      };
    },
    157: function (e, t, n) {
      "use strict";
      var r = {
          name: "MinorityButton",
          props: {
            outline: { type: Boolean, required: !1 },
            bColor: { type: String, required: !1 },
            wide: { type: Boolean, required: !1 },
            to: { type: String, required: !1 },
            block: { type: Boolean, required: !1 },
            disabled: { type: Boolean, required: !1 },
            loading: { type: Boolean, required: !1 },
            type: { type: String, required: !1 },
            miniMobile: { type: Boolean, required: !1 },
          },
          computed: {
            getType: function () {
              return this.type ? this.type : "button";
            },
            getStyles: function () {
              var e = {};
              return (
                this.bColor &&
                  "g-blue" !== this.bColor &&
                  ((e.backgroundImage = "none"),
                  !1 === this.outline
                    ? (e.backgroundColor = this.bColor)
                    : (e.borderColor = this.bColor)),
                this.wide && ((e.width = "100%"), (e["max-width"] = "240px")),
                e
              );
            },
            getClasses: function () {
              return {
                block: !!this.block,
                outline: !!this.outline,
                disabled: !!this.disabled,
                loading: !!this.loading,
                "g-blue": "g-blue" === this.bColor,
                "mini-mobile": !!this.miniMobile,
                "btn-trial-try": "#3B3B4B" === this.bColor,
              };
            },
          },
        },
        a = (n(485), n(21)),
        i = Object(a.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return e.to && !e.loading
              ? n(
                  "n-link",
                  {
                    attrs: { to: e.to, tag: "a" },
                    on: {
                      click: function (t) {
                        return e.$emit("click", t);
                      },
                    },
                  },
                  [
                    n(
                      "button",
                      {
                        class: e.getClasses,
                        style: e.getStyles,
                        attrs: { type: e.getType },
                        on: {
                          click: function (t) {
                            return e.$emit("click", t);
                          },
                        },
                      },
                      [
                        e.loading
                          ? n("div", [
                              n("div", { staticClass: "loading-dots" }, [
                                n("div", { staticClass: "loading-dots--dot" }),
                                e._v(" "),
                                n("div", { staticClass: "loading-dots--dot" }),
                                e._v(" "),
                                n("div", { staticClass: "loading-dots--dot" }),
                              ]),
                            ])
                          : e._t("default"),
                      ],
                      2
                    ),
                  ]
                )
              : n(
                  "button",
                  {
                    class: e.getClasses,
                    style: e.getStyles,
                    attrs: { type: e.getType },
                    on: {
                      click: function (t) {
                        return e.$emit("click", t);
                      },
                    },
                  },
                  [
                    e.loading
                      ? n("div", [
                          n("div", { staticClass: "loading-dots" }, [
                            n("div", { staticClass: "loading-dots--dot" }),
                            e._v(" "),
                            n("div", { staticClass: "loading-dots--dot" }),
                            e._v(" "),
                            n("div", { staticClass: "loading-dots--dot" }),
                          ]),
                        ])
                      : e._t("default"),
                  ],
                  2
                );
          },
          [],
          !1,
          null,
          "d0c17a7a",
          null
        );
      t.a = i.exports;
    },
    158: function (e, t, n) {
      "use strict";
      var r = {
          name: "MinorityInput",
          props: {
            icon: { type: String, required: !1 },
            placeholder: { type: String, required: !1 },
            type: { type: String, required: !0 },
            block: { type: Boolean, required: !1 },
            suffixIcon: { type: String, required: !1 },
            inline: { type: Boolean, required: !1 },
            value: { type: String, required: !1 },
            disabled: { type: Boolean, required: !1 },
            gray: { type: Boolean, required: !1, default: !1 },
          },
          computed: {
            getClasses: function () {
              return {
                "with--icon": !!this.icon,
                focused: !!this.focused,
                block: !!this.block,
                "with-suffix-icon": !!this.suffixIcon,
                inline: !!this.inline,
                disabled: !!this.disabled,
                gray: !!this.gray,
              };
            },
          },
          data: function () {
            return { focused: !1 };
          },
        },
        a = (n(487), n(21)),
        i = Object(a.a)(
          r,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n(
              "div",
              { staticClass: "input-container", class: e.getClasses },
              [
                e.icon
                  ? n("div", { staticClass: "icon" }, [
                      n("img", { attrs: { src: e.icon } }),
                    ])
                  : e._e(),
                e._v(" "),
                n("input", {
                  class: e.getClasses,
                  attrs: {
                    type: e.type,
                    placeholder: e.placeholder,
                    disabled: e.disabled,
                  },
                  domProps: { value: e.value },
                  on: {
                    focus: function (t) {
                      e.focused = !0;
                    },
                    blur: function (t) {
                      e.focused = !1;
                    },
                    input: function (t) {
                      return e.$emit("input", t.target.value);
                    },
                  },
                }),
                e._v(" "),
                n("div", { staticClass: "suffix-icon" }, [
                  e.suffixIcon
                    ? n("img", {
                        attrs: { src: "/icons/" + e.suffixIcon + "-icon.svg" },
                      })
                    : e._e(),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          "099bb1e3",
          null
        );
      t.a = i.exports;
    },
    182: function (e, t, n) {
      var r = n(389);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("72daabed", r, !0, { sourceMap: !1 });
    },
    183: function (e, t, n) {
      var r = n(398);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("7d2ef881", r, !0, { sourceMap: !1 });
    },
    184: function (e, t, n) {
      var r = n(400);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("43fa9642", r, !0, { sourceMap: !1 });
    },
    185: function (e, t, n) {
      var r = n(402);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("2b489353", r, !0, { sourceMap: !1 });
    },
    187: function (e, t, n) {
      var r = n(405);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("d7100e4c", r, !0, { sourceMap: !1 });
    },
    188: function (e, t, n) {
      var r = n(407);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("27991862", r, !0, { sourceMap: !1 });
    },
    189: function (e, t, n) {
      var r = n(409);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("1f2fef50", r, !0, { sourceMap: !1 });
    },
    190: function (e, t, n) {
      var r = n(411);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("245cb1fa", r, !0, { sourceMap: !1 });
    },
    191: function (e, t, n) {
      var r = n(414);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("46f1cf9a", r, !0, { sourceMap: !1 });
    },
    206: function (e, t, n) {
      var r = n(486);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("cafd438e", r, !0, { sourceMap: !1 });
    },
    207: function (e, t, n) {
      var r = n(488);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("1e2eddc2", r, !0, { sourceMap: !1 });
    },
    357: function (e, t, n) {
      "use strict";
      var r = n(7),
        a = (n(27), n(13), n(8)),
        i = n(9),
        o = window.__NUXT__;
      function s() {
        if (!this._hydrated) return this.$fetch();
      }
      function u() {
        if (
          (e = this).$vnode &&
          e.$vnode.elm &&
          e.$vnode.elm.dataset &&
          e.$vnode.elm.dataset.fetchKey
        ) {
          var e;
          (this._hydrated = !0),
            (this._fetchKey = this.$vnode.elm.dataset.fetchKey);
          var t = o.fetch[this._fetchKey];
          if (t && t._error) this.$fetchState.error = t._error;
          else for (var n in t) a.default.set(this.$data, n, t[n]);
        }
      }
      function c() {
        var e = this;
        return (
          this._fetchPromise ||
            (this._fetchPromise = l.call(this).then(function () {
              delete e._fetchPromise;
            })),
          this._fetchPromise
        );
      }
      function l() {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = Object(r.a)(
          regeneratorRuntime.mark(function e() {
            var t,
              n,
              r,
              a = this;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        this.$nuxt.nbFetching++,
                        (this.$fetchState.pending = !0),
                        (this.$fetchState.error = null),
                        (this._hydrated = !1),
                        (t = null),
                        (n = Date.now()),
                        (e.prev = 6),
                        (e.next = 9),
                        this.$options.fetch.call(this)
                      );
                    case 9:
                      e.next = 15;
                      break;
                    case 11:
                      (e.prev = 11),
                        (e.t0 = e.catch(6)),
                        (t = Object(i.p)(e.t0));
                    case 15:
                      if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 19),
                        new Promise(function (e) {
                          return setTimeout(e, r);
                        })
                      );
                    case 19:
                      (this.$fetchState.error = t),
                        (this.$fetchState.pending = !1),
                        (this.$fetchState.timestamp = Date.now()),
                        this.$nextTick(function () {
                          return a.$nuxt.nbFetching--;
                        });
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[6, 11]]
            );
          })
        )).apply(this, arguments);
      }
      t.a = {
        beforeCreate: function () {
          Object(i.l)(this) &&
            ((this._fetchDelay =
              "number" == typeof this.$options.fetchDelay
                ? this.$options.fetchDelay
                : 200),
            a.default.util.defineReactive(this, "$fetchState", {
              pending: !1,
              error: null,
              timestamp: Date.now(),
            }),
            (this.$fetch = c.bind(this)),
            Object(i.a)(this, "created", u),
            Object(i.a)(this, "beforeMount", s));
        },
      };
    },
    363: function (e, t, n) {
      e.exports = n(364);
    },
    364: function (e, t, n) {
      "use strict";
      n.r(t),
        function (e) {
          n(12), n(3), n(35);
          var t = n(18),
            r = n(7),
            a =
              (n(171),
              n(370),
              n(373),
              n(375),
              n(27),
              n(14),
              n(2),
              n(4),
              n(54),
              n(49),
              n(11),
              n(28),
              n(13),
              n(29),
              n(8)),
            i = n(344),
            o = n(96),
            s = n(9),
            u = n(56),
            c = n(357),
            l = n(122);
          function f(e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? g(e, t)
                        : void 0
                    );
                  }
                })(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var r = 0,
                  a = function () {};
                return {
                  s: a,
                  n: function () {
                    return r >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[r++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: a,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var i,
              o = !0,
              s = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (o = e.done), e;
              },
              e: function (e) {
                (s = !0), (i = e);
              },
              f: function () {
                try {
                  o || null == n.return || n.return();
                } finally {
                  if (s) throw i;
                }
              },
            };
          }
          function g(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r;
          }
          a.default.__nuxt__fetch__mixin__ ||
            (a.default.mixin(c.a), (a.default.__nuxt__fetch__mixin__ = !0)),
            a.default.component(l.a.name, l.a),
            a.default.component("NLink", l.a),
            e.fetch || (e.fetch = i.a);
          var d,
            p,
            m = [],
            b = window.__NUXT__ || {},
            h = b.config || {};
          h._app && (n.p = Object(s.v)(h._app.cdnURL, h._app.assetsPath)),
            Object.assign(a.default.config, { silent: !0, performance: !1 });
          var v = a.default.config.errorHandler || console.error;
          function x(e, t, n) {
            for (
              var r = function (e) {
                  var r =
                    (function (e, t) {
                      if (!e || !e.options || !e.options[t]) return {};
                      var n = e.options[t];
                      if ("function" == typeof n) {
                        for (
                          var r = arguments.length,
                            a = new Array(r > 2 ? r - 2 : 0),
                            i = 2;
                          i < r;
                          i++
                        )
                          a[i - 2] = arguments[i];
                        return n.apply(void 0, a);
                      }
                      return n;
                    })(e, "transition", t, n) || {};
                  return "string" == typeof r ? { name: r } : r;
                },
                a = n ? Object(s.g)(n) : [],
                i = Math.max(e.length, a.length),
                o = [],
                u = function (t) {
                  var n = Object.assign({}, r(e[t])),
                    i = Object.assign({}, r(a[t]));
                  Object.keys(n)
                    .filter(function (e) {
                      return (
                        void 0 !== n[e] && !e.toLowerCase().includes("leave")
                      );
                    })
                    .forEach(function (e) {
                      i[e] = n[e];
                    }),
                    o.push(i);
                },
                c = 0;
              c < i;
              c++
            )
              u(c);
            return o;
          }
          function k(e, t, n) {
            return y.apply(this, arguments);
          }
          function y() {
            return (y = Object(r.a)(
              regeneratorRuntime.mark(function e(t, n, r) {
                var a,
                  i,
                  o,
                  u = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((this._routeChanged =
                              Boolean(d.nuxt.err) || n.name !== t.name),
                            (this._paramChanged =
                              !this._routeChanged && n.path !== t.path),
                            (this._queryChanged =
                              !this._paramChanged && n.fullPath !== t.fullPath),
                            (this._diffQuery = this._queryChanged
                              ? Object(s.i)(t.query, n.query)
                              : []),
                            (this._routeChanged || this._paramChanged) &&
                              this.$loading.start &&
                              !this.$loading.manual &&
                              this.$loading.start(),
                            (e.prev = 5),
                            !this._queryChanged)
                          ) {
                            e.next = 12;
                            break;
                          }
                          return (
                            (e.next = 9),
                            Object(s.r)(t, function (e, t) {
                              return { Component: e, instance: t };
                            })
                          );
                        case 9:
                          e.sent.some(function (e) {
                            var r = e.Component,
                              a = e.instance,
                              i = r.options.watchQuery;
                            return (
                              !0 === i ||
                              (Array.isArray(i)
                                ? i.some(function (e) {
                                    return u._diffQuery[e];
                                  })
                                : "function" == typeof i &&
                                  i.apply(a, [t.query, n.query]))
                            );
                          }) &&
                            this.$loading.start &&
                            !this.$loading.manual &&
                            this.$loading.start();
                        case 12:
                          r(), (e.next = 26);
                          break;
                        case 15:
                          if (
                            ((e.prev = 15),
                            (e.t0 = e.catch(5)),
                            (a = e.t0 || {}),
                            (i =
                              a.statusCode ||
                              a.status ||
                              (a.response && a.response.status) ||
                              500),
                            (o = a.message || ""),
                            !/^Loading( CSS)? chunk (\d)+ failed\./.test(o))
                          ) {
                            e.next = 23;
                            break;
                          }
                          return window.location.reload(!0), e.abrupt("return");
                        case 23:
                          this.error({ statusCode: i, message: o }),
                            this.$nuxt.$emit("routeChanged", t, n, a),
                            r();
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[5, 15]]
                );
              })
            )).apply(this, arguments);
          }
          function _(e, t) {
            return b.serverRendered && t && Object(s.b)(e, t), (e._Ctor = e), e;
          }
          function w(e) {
            return Object(s.d)(
              e,
              (function () {
                var e = Object(r.a)(
                  regeneratorRuntime.mark(function e(t, n, r, a, i) {
                    var o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("function" != typeof t || t.options) {
                              e.next = 4;
                              break;
                            }
                            return (e.next = 3), t();
                          case 3:
                            t = e.sent;
                          case 4:
                            return (
                              (o = _(
                                Object(s.s)(t),
                                b.data ? b.data[i] : null
                              )),
                              (r.components[a] = o),
                              e.abrupt("return", o)
                            );
                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, n, r, a, i) {
                  return e.apply(this, arguments);
                };
              })()
            );
          }
          function j(e, t, n) {
            var r = this,
              a = ["nuxti18n"],
              i = !1;
            if (
              (void 0 !== n &&
                ((a = []),
                (n = Object(s.s)(n)).options.middleware &&
                  (a = a.concat(n.options.middleware)),
                e.forEach(function (e) {
                  e.options.middleware && (a = a.concat(e.options.middleware));
                })),
              (a = a.map(function (e) {
                return "function" == typeof e
                  ? e
                  : ("function" != typeof o.a[e] &&
                      ((i = !0),
                      r.error({
                        statusCode: 500,
                        message: "Unknown middleware " + e,
                      })),
                    o.a[e]);
              })),
              !i)
            )
              return Object(s.o)(a, t);
          }
          function O(e, t, n) {
            return P.apply(this, arguments);
          }
          function P() {
            return (P = Object(r.a)(
              regeneratorRuntime.mark(function e(t, n, a) {
                var i,
                  o,
                  c,
                  l,
                  g,
                  p,
                  b,
                  h,
                  v,
                  k,
                  y,
                  _,
                  w,
                  O,
                  P,
                  S = this;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            !1 !== this._routeChanged ||
                            !1 !== this._paramChanged ||
                            !1 !== this._queryChanged
                          ) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return", a());
                        case 2:
                          return (
                            t === n
                              ? (m = [])
                              : ((i = []),
                                (m = Object(s.g)(n, i).map(function (e, t) {
                                  return Object(s.c)(n.matched[i[t]].path)(
                                    n.params
                                  );
                                }))),
                            (o = !1),
                            (c = function (e) {
                              n.path === e.path &&
                                S.$loading.finish &&
                                S.$loading.finish(),
                                n.path !== e.path &&
                                  S.$loading.pause &&
                                  S.$loading.pause(),
                                o || ((o = !0), a(e));
                            }),
                            (e.next = 8),
                            Object(s.t)(d, {
                              route: t,
                              from: n,
                              next: c.bind(this),
                            })
                          );
                        case 8:
                          if (
                            ((this._dateLastError = d.nuxt.dateErr),
                            (this._hadError = Boolean(d.nuxt.err)),
                            (l = []),
                            (g = Object(s.g)(t, l)).length)
                          ) {
                            e.next = 27;
                            break;
                          }
                          return (e.next = 15), j.call(this, g, d.context);
                        case 15:
                          if (!o) {
                            e.next = 17;
                            break;
                          }
                          return e.abrupt("return");
                        case 17:
                          return (
                            (p = (u.a.options || u.a).layout),
                            (e.next = 20),
                            this.loadLayout(
                              "function" == typeof p
                                ? p.call(u.a, d.context)
                                : p
                            )
                          );
                        case 20:
                          return (
                            (b = e.sent),
                            (e.next = 23),
                            j.call(this, g, d.context, b)
                          );
                        case 23:
                          if (!o) {
                            e.next = 25;
                            break;
                          }
                          return e.abrupt("return");
                        case 25:
                          return (
                            d.context.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            e.abrupt("return", a())
                          );
                        case 27:
                          return (
                            g.forEach(function (e) {
                              e._Ctor &&
                                e._Ctor.options &&
                                ((e.options.asyncData =
                                  e._Ctor.options.asyncData),
                                (e.options.fetch = e._Ctor.options.fetch));
                            }),
                            this.setTransitions(x(g, t, n)),
                            (e.prev = 29),
                            (e.next = 32),
                            j.call(this, g, d.context)
                          );
                        case 32:
                          if (!o) {
                            e.next = 34;
                            break;
                          }
                          return e.abrupt("return");
                        case 34:
                          if (!d.context._errored) {
                            e.next = 36;
                            break;
                          }
                          return e.abrupt("return", a());
                        case 36:
                          return (
                            "function" == typeof (h = g[0].options.layout) &&
                              (h = h(d.context)),
                            (e.next = 40),
                            this.loadLayout(h)
                          );
                        case 40:
                          return (
                            (h = e.sent),
                            (e.next = 43),
                            j.call(this, g, d.context, h)
                          );
                        case 43:
                          if (!o) {
                            e.next = 45;
                            break;
                          }
                          return e.abrupt("return");
                        case 45:
                          if (!d.context._errored) {
                            e.next = 47;
                            break;
                          }
                          return e.abrupt("return", a());
                        case 47:
                          (v = !0),
                            (e.prev = 48),
                            (k = f(g)),
                            (e.prev = 50),
                            k.s();
                        case 52:
                          if ((y = k.n()).done) {
                            e.next = 63;
                            break;
                          }
                          if (
                            "function" == typeof (_ = y.value).options.validate
                          ) {
                            e.next = 56;
                            break;
                          }
                          return e.abrupt("continue", 61);
                        case 56:
                          return (e.next = 58), _.options.validate(d.context);
                        case 58:
                          if ((v = e.sent)) {
                            e.next = 61;
                            break;
                          }
                          return e.abrupt("break", 63);
                        case 61:
                          e.next = 52;
                          break;
                        case 63:
                          e.next = 68;
                          break;
                        case 65:
                          (e.prev = 65), (e.t0 = e.catch(50)), k.e(e.t0);
                        case 68:
                          return (e.prev = 68), k.f(), e.finish(68);
                        case 71:
                          e.next = 77;
                          break;
                        case 73:
                          return (
                            (e.prev = 73),
                            (e.t1 = e.catch(48)),
                            this.error({
                              statusCode: e.t1.statusCode || "500",
                              message: e.t1.message,
                            }),
                            e.abrupt("return", a())
                          );
                        case 77:
                          if (v) {
                            e.next = 80;
                            break;
                          }
                          return (
                            this.error({
                              statusCode: 404,
                              message: "This page could not be found",
                            }),
                            e.abrupt("return", a())
                          );
                        case 80:
                          return (
                            (e.next = 82),
                            Promise.all(
                              g.map(
                                (function () {
                                  var e = Object(r.a)(
                                    regeneratorRuntime.mark(function e(r, a) {
                                      var i, o, u, c, f, g, p, b, h;
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((r._path = Object(s.c)(
                                                  t.matched[l[a]].path
                                                )(t.params)),
                                                (r._dataRefresh = !1),
                                                (i = r._path !== m[a]),
                                                S._routeChanged && i
                                                  ? (r._dataRefresh = !0)
                                                  : S._paramChanged && i
                                                  ? ((o = r.options.watchParam),
                                                    (r._dataRefresh = !1 !== o))
                                                  : S._queryChanged &&
                                                    (!0 ===
                                                    (u = r.options.watchQuery)
                                                      ? (r._dataRefresh = !0)
                                                      : Array.isArray(u)
                                                      ? (r._dataRefresh =
                                                          u.some(function (e) {
                                                            return S
                                                              ._diffQuery[e];
                                                          }))
                                                      : "function" ==
                                                          typeof u &&
                                                        (w ||
                                                          (w = Object(s.h)(t)),
                                                        (r._dataRefresh =
                                                          u.apply(w[a], [
                                                            t.query,
                                                            n.query,
                                                          ])))),
                                                S._hadError ||
                                                  !S._isMounted ||
                                                  r._dataRefresh)
                                              ) {
                                                e.next = 6;
                                                break;
                                              }
                                              return e.abrupt("return");
                                            case 6:
                                              return (
                                                (c = []),
                                                (f =
                                                  r.options.asyncData &&
                                                  "function" ==
                                                    typeof r.options.asyncData),
                                                (g =
                                                  Boolean(r.options.fetch) &&
                                                  r.options.fetch.length),
                                                (p = f && g ? 30 : 45),
                                                f &&
                                                  ((b = Object(s.q)(
                                                    r.options.asyncData,
                                                    d.context
                                                  )).then(function (e) {
                                                    Object(s.b)(r, e),
                                                      S.$loading.increase &&
                                                        S.$loading.increase(p);
                                                  }),
                                                  c.push(b)),
                                                (S.$loading.manual =
                                                  !1 === r.options.loading),
                                                g &&
                                                  (((h = r.options.fetch(
                                                    d.context
                                                  )) &&
                                                    (h instanceof Promise ||
                                                      "function" ==
                                                        typeof h.then)) ||
                                                    (h = Promise.resolve(h)),
                                                  h.then(function (e) {
                                                    S.$loading.increase &&
                                                      S.$loading.increase(p);
                                                  }),
                                                  c.push(h)),
                                                e.abrupt(
                                                  "return",
                                                  Promise.all(c)
                                                )
                                              );
                                            case 14:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  );
                                  return function (t, n) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                            )
                          );
                        case 82:
                          o ||
                            (this.$loading.finish &&
                              !this.$loading.manual &&
                              this.$loading.finish(),
                            a()),
                            (e.next = 99);
                          break;
                        case 85:
                          if (
                            ((e.prev = 85),
                            (e.t2 = e.catch(29)),
                            "ERR_REDIRECT" !== (O = e.t2 || {}).message)
                          ) {
                            e.next = 90;
                            break;
                          }
                          return e.abrupt(
                            "return",
                            this.$nuxt.$emit("routeChanged", t, n, O)
                          );
                        case 90:
                          return (
                            (m = []),
                            Object(s.k)(O),
                            "function" ==
                              typeof (P = (u.a.options || u.a).layout) &&
                              (P = P(d.context)),
                            (e.next = 96),
                            this.loadLayout(P)
                          );
                        case 96:
                          this.error(O),
                            this.$nuxt.$emit("routeChanged", t, n, O),
                            a();
                        case 99:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [
                    [29, 85],
                    [48, 73],
                    [50, 65, 68, 71],
                  ]
                );
              })
            )).apply(this, arguments);
          }
          function S(e, n) {
            Object(s.d)(e, function (e, n, r, i) {
              return (
                "object" !== Object(t.a)(e) ||
                  e.options ||
                  (((e = a.default.extend(e))._Ctor = e),
                  (r.components[i] = e)),
                e
              );
            });
          }
          function E(e) {
            var t = Boolean(this.$options.nuxt.err);
            this._hadError &&
              this._dateLastError === this.$options.nuxt.dateErr &&
              (t = !1);
            var n = t
              ? (u.a.options || u.a).layout
              : e.matched[0].components.default.options.layout;
            "function" == typeof n && (n = n(d.context)), this.setLayout(n);
          }
          function C(e) {
            e._hadError &&
              e._dateLastError === e.$options.nuxt.dateErr &&
              e.error();
          }
          function R(e, t) {
            var n = this;
            if (
              !1 !== this._routeChanged ||
              !1 !== this._paramChanged ||
              !1 !== this._queryChanged
            ) {
              var r = Object(s.h)(e),
                i = Object(s.g)(e),
                o = !1;
              a.default.nextTick(function () {
                r.forEach(function (e, t) {
                  if (
                    e &&
                    !e._isDestroyed &&
                    e.constructor._dataRefresh &&
                    i[t] === e.constructor &&
                    !0 !== e.$vnode.data.keepAlive &&
                    "function" == typeof e.constructor.options.data
                  ) {
                    var n = e.constructor.options.data.call(e);
                    for (var r in n) a.default.set(e.$data, r, n[r]);
                    o = !0;
                  }
                }),
                  o &&
                    window.$nuxt.$nextTick(function () {
                      window.$nuxt.$emit("triggerScroll");
                    }),
                  C(n);
              });
            }
          }
          function A(e) {
            window.onNuxtReadyCbs.forEach(function (t) {
              "function" == typeof t && t(e);
            }),
              "function" == typeof window._onNuxtLoaded &&
                window._onNuxtLoaded(e),
              p.afterEach(function (t, n) {
                a.default.nextTick(function () {
                  return e.$nuxt.$emit("routeChanged", t, n);
                });
              });
          }
          function $() {
            return ($ = Object(r.a)(
              regeneratorRuntime.mark(function e(t) {
                var n, r, i, o, u;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (d = t.app),
                          (p = t.router),
                          t.store,
                          (n = new a.default(d)),
                          (r = b.layout || "default"),
                          (e.next = 7),
                          n.loadLayout(r)
                        );
                      case 7:
                        return (
                          n.setLayout(r),
                          (i = function () {
                            n.$mount("#__nuxt"),
                              p.afterEach(S),
                              p.afterEach(E.bind(n)),
                              p.afterEach(R.bind(n)),
                              a.default.nextTick(function () {
                                A(n);
                              });
                          }),
                          (e.next = 11),
                          Promise.all(w(d.context.route))
                        );
                      case 11:
                        if (
                          ((o = e.sent),
                          (n.setTransitions =
                            n.$options.nuxt.setTransitions.bind(n)),
                          o.length &&
                            (n.setTransitions(x(o, p.currentRoute)),
                            (m = p.currentRoute.matched.map(function (e) {
                              return Object(s.c)(e.path)(p.currentRoute.params);
                            }))),
                          (n.$loading = {}),
                          b.error && n.error(b.error),
                          p.beforeEach(k.bind(n)),
                          p.beforeEach(O.bind(n)),
                          !b.serverRendered ||
                            !Object(s.n)(b.routePath, n.context.route.path))
                        ) {
                          e.next = 20;
                          break;
                        }
                        return e.abrupt("return", i());
                      case 20:
                        return (
                          (u = function () {
                            S(p.currentRoute, p.currentRoute),
                              E.call(n, p.currentRoute),
                              C(n),
                              i();
                          }),
                          (e.next = 23),
                          new Promise(function (e) {
                            return setTimeout(e, 0);
                          })
                        );
                      case 23:
                        O.call(n, p.currentRoute, p.currentRoute, function (e) {
                          if (e) {
                            var t = p.afterEach(function (e, n) {
                              t(), u();
                            });
                            p.push(e, void 0, function (e) {
                              e && v(e);
                            });
                          } else u();
                        });
                      case 24:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          Object(u.b)(null, b.config)
            .then(function (e) {
              return $.apply(this, arguments);
            })
            .catch(v);
        }.call(this, n(36));
    },
    378: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = function (e) {
          var t = e.store,
            n = e.redirect,
            r = e.app;
          if (!t.state.user.user) return n(r.localePath("auth"));
        });
    },
    379: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = function (e) {
          var t = e.store,
            n = e.redirect,
            r = e.app;
          if (t.state.user.user) return n(r.localePath("profile"));
        });
    },
    388: function (e, t, n) {
      "use strict";
      n(182);
    },
    389: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",
        "",
      ]),
        (e.exports = r);
    },
    394: function (e, t, n) {
      var r = n(395);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.i, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(34).default)("7041bbd2", r, !0, { sourceMap: !1 });
    },
    395: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap);",
      ]),
        r.push([
          e.i,
          '.fi,.fib{background-size:contain;background-position:50%;background-repeat:no-repeat}.fi{position:relative;display:inline-block;width:1.33333333em;line-height:1em}.fi:before{content:"\\00a0"}.fi.fis{width:1em}.fi-ad{background-image:url(/flags/4x3/ad.svg)}.fi-ad.fis{background-image:url(/flags/1x1/ad.svg)}.fi-ae{background-image:url(/flags/4x3/ae.svg)}.fi-ae.fis{background-image:url(/flags/1x1/ae.svg)}.fi-af{background-image:url(/flags/4x3/af.svg)}.fi-af.fis{background-image:url(/flags/1x1/af.svg)}.fi-ag{background-image:url(/flags/4x3/ag.svg)}.fi-ag.fis{background-image:url(/flags/1x1/ag.svg)}.fi-ai{background-image:url(/flags/4x3/ai.svg)}.fi-ai.fis{background-image:url(/flags/1x1/ai.svg)}.fi-al{background-image:url(/flags/4x3/al.svg)}.fi-al.fis{background-image:url(/flags/1x1/al.svg)}.fi-am{background-image:url(/flags/4x3/am.svg)}.fi-am.fis{background-image:url(/flags/1x1/am.svg)}.fi-ao{background-image:url(/flags/4x3/ao.svg)}.fi-ao.fis{background-image:url(/flags/1x1/ao.svg)}.fi-aq{background-image:url(/flags/4x3/aq.svg)}.fi-aq.fis{background-image:url(/flags/1x1/aq.svg)}.fi-ar{background-image:url(/flags/4x3/ar.svg)}.fi-ar.fis{background-image:url(/flags/1x1/ar.svg)}.fi-as{background-image:url(/flags/4x3/as.svg)}.fi-as.fis{background-image:url(/flags/1x1/as.svg)}.fi-at{background-image:url(/flags/4x3/at.svg)}.fi-at.fis{background-image:url(/flags/1x1/at.svg)}.fi-au{background-image:url(/flags/4x3/au.svg)}.fi-au.fis{background-image:url(/flags/1x1/au.svg)}.fi-aw{background-image:url(/flags/4x3/aw.svg)}.fi-aw.fis{background-image:url(/flags/1x1/aw.svg)}.fi-ax{background-image:url(/flags/4x3/ax.svg)}.fi-ax.fis{background-image:url(/flags/1x1/ax.svg)}.fi-az{background-image:url(/flags/4x3/az.svg)}.fi-az.fis{background-image:url(/flags/1x1/az.svg)}.fi-ba{background-image:url(/flags/4x3/ba.svg)}.fi-ba.fis{background-image:url(/flags/1x1/ba.svg)}.fi-bb{background-image:url(/flags/4x3/bb.svg)}.fi-bb.fis{background-image:url(/flags/1x1/bb.svg)}.fi-bd{background-image:url(/flags/4x3/bd.svg)}.fi-bd.fis{background-image:url(/flags/1x1/bd.svg)}.fi-be{background-image:url(/flags/4x3/be.svg)}.fi-be.fis{background-image:url(/flags/1x1/be.svg)}.fi-bf{background-image:url(/flags/4x3/bf.svg)}.fi-bf.fis{background-image:url(/flags/1x1/bf.svg)}.fi-bg{background-image:url(/flags/4x3/bg.svg)}.fi-bg.fis{background-image:url(/flags/1x1/bg.svg)}.fi-bh{background-image:url(/flags/4x3/bh.svg)}.fi-bh.fis{background-image:url(/flags/1x1/bh.svg)}.fi-bi{background-image:url(/flags/4x3/bi.svg)}.fi-bi.fis{background-image:url(/flags/1x1/bi.svg)}.fi-bj{background-image:url(/flags/4x3/bj.svg)}.fi-bj.fis{background-image:url(/flags/1x1/bj.svg)}.fi-bl{background-image:url(/flags/4x3/bl.svg)}.fi-bl.fis{background-image:url(/flags/1x1/bl.svg)}.fi-bm{background-image:url(/flags/4x3/bm.svg)}.fi-bm.fis{background-image:url(/flags/1x1/bm.svg)}.fi-bn{background-image:url(/flags/4x3/bn.svg)}.fi-bn.fis{background-image:url(/flags/1x1/bn.svg)}.fi-bo{background-image:url(/flags/4x3/bo.svg)}.fi-bo.fis{background-image:url(/flags/1x1/bo.svg)}.fi-bq{background-image:url(/flags/4x3/bq.svg)}.fi-bq.fis{background-image:url(/flags/1x1/bq.svg)}.fi-br{background-image:url(/flags/4x3/br.svg)}.fi-br.fis{background-image:url(/flags/1x1/br.svg)}.fi-bs{background-image:url(/flags/4x3/bs.svg)}.fi-bs.fis{background-image:url(/flags/1x1/bs.svg)}.fi-bt{background-image:url(/flags/4x3/bt.svg)}.fi-bt.fis{background-image:url(/flags/1x1/bt.svg)}.fi-bv{background-image:url(/flags/4x3/bv.svg)}.fi-bv.fis{background-image:url(/flags/1x1/bv.svg)}.fi-bw{background-image:url(/flags/4x3/bw.svg)}.fi-bw.fis{background-image:url(/flags/1x1/bw.svg)}.fi-by{background-image:url(/flags/4x3/by.svg)}.fi-by.fis{background-image:url(/flags/1x1/by.svg)}.fi-bz{background-image:url(/flags/4x3/bz.svg)}.fi-bz.fis{background-image:url(/flags/1x1/bz.svg)}.fi-ca{background-image:url(/flags/4x3/ca.svg)}.fi-ca.fis{background-image:url(/flags/1x1/ca.svg)}.fi-cc{background-image:url(/flags/4x3/cc.svg)}.fi-cc.fis{background-image:url(/flags/1x1/cc.svg)}.fi-cd{background-image:url(/flags/4x3/cd.svg)}.fi-cd.fis{background-image:url(/flags/1x1/cd.svg)}.fi-cf{background-image:url(/flags/4x3/cf.svg)}.fi-cf.fis{background-image:url(/flags/1x1/cf.svg)}.fi-cg{background-image:url(/flags/4x3/cg.svg)}.fi-cg.fis{background-image:url(/flags/1x1/cg.svg)}.fi-ch{background-image:url(/flags/4x3/ch.svg)}.fi-ch.fis{background-image:url(/flags/1x1/ch.svg)}.fi-ci{background-image:url(/flags/4x3/ci.svg)}.fi-ci.fis{background-image:url(/flags/1x1/ci.svg)}.fi-ck{background-image:url(/flags/4x3/ck.svg)}.fi-ck.fis{background-image:url(/flags/1x1/ck.svg)}.fi-cl{background-image:url(/flags/4x3/cl.svg)}.fi-cl.fis{background-image:url(/flags/1x1/cl.svg)}.fi-cm{background-image:url(/flags/4x3/cm.svg)}.fi-cm.fis{background-image:url(/flags/1x1/cm.svg)}.fi-cn{background-image:url(/flags/4x3/cn.svg)}.fi-cn.fis{background-image:url(/flags/1x1/cn.svg)}.fi-co{background-image:url(/flags/4x3/co.svg)}.fi-co.fis{background-image:url(/flags/1x1/co.svg)}.fi-cr{background-image:url(/flags/4x3/cr.svg)}.fi-cr.fis{background-image:url(/flags/1x1/cr.svg)}.fi-cu{background-image:url(/flags/4x3/cu.svg)}.fi-cu.fis{background-image:url(/flags/1x1/cu.svg)}.fi-cv{background-image:url(/flags/4x3/cv.svg)}.fi-cv.fis{background-image:url(/flags/1x1/cv.svg)}.fi-cw{background-image:url(/flags/4x3/cw.svg)}.fi-cw.fis{background-image:url(/flags/1x1/cw.svg)}.fi-cx{background-image:url(/flags/4x3/cx.svg)}.fi-cx.fis{background-image:url(/flags/1x1/cx.svg)}.fi-cy{background-image:url(/flags/4x3/cy.svg)}.fi-cy.fis{background-image:url(/flags/1x1/cy.svg)}.fi-cz{background-image:url(/flags/4x3/cz.svg)}.fi-cz.fis{background-image:url(/flags/1x1/cz.svg)}.fi-de{background-image:url(/flags/4x3/de.svg)}.fi-de.fis{background-image:url(/flags/1x1/de.svg)}.fi-dj{background-image:url(/flags/4x3/dj.svg)}.fi-dj.fis{background-image:url(/flags/1x1/dj.svg)}.fi-dk{background-image:url(/flags/4x3/dk.svg)}.fi-dk.fis{background-image:url(/flags/1x1/dk.svg)}.fi-dm{background-image:url(/flags/4x3/dm.svg)}.fi-dm.fis{background-image:url(/flags/1x1/dm.svg)}.fi-do{background-image:url(/flags/4x3/do.svg)}.fi-do.fis{background-image:url(/flags/1x1/do.svg)}.fi-dz{background-image:url(/flags/4x3/dz.svg)}.fi-dz.fis{background-image:url(/flags/1x1/dz.svg)}.fi-ec{background-image:url(/flags/4x3/ec.svg)}.fi-ec.fis{background-image:url(/flags/1x1/ec.svg)}.fi-ee{background-image:url(/flags/4x3/ee.svg)}.fi-ee.fis{background-image:url(/flags/1x1/ee.svg)}.fi-eg{background-image:url(/flags/4x3/eg.svg)}.fi-eg.fis{background-image:url(/flags/1x1/eg.svg)}.fi-eh{background-image:url(/flags/4x3/eh.svg)}.fi-eh.fis{background-image:url(/flags/1x1/eh.svg)}.fi-er{background-image:url(/flags/4x3/er.svg)}.fi-er.fis{background-image:url(/flags/1x1/er.svg)}.fi-es{background-image:url(/flags/4x3/es.svg)}.fi-es.fis{background-image:url(/flags/1x1/es.svg)}.fi-et{background-image:url(/flags/4x3/et.svg)}.fi-et.fis{background-image:url(/flags/1x1/et.svg)}.fi-fi{background-image:url(/flags/4x3/fi.svg)}.fi-fi.fis{background-image:url(/flags/1x1/fi.svg)}.fi-fj{background-image:url(/flags/4x3/fj.svg)}.fi-fj.fis{background-image:url(/flags/1x1/fj.svg)}.fi-fk{background-image:url(/flags/4x3/fk.svg)}.fi-fk.fis{background-image:url(/flags/1x1/fk.svg)}.fi-fm{background-image:url(/flags/4x3/fm.svg)}.fi-fm.fis{background-image:url(/flags/1x1/fm.svg)}.fi-fo{background-image:url(/flags/4x3/fo.svg)}.fi-fo.fis{background-image:url(/flags/1x1/fo.svg)}.fi-fr{background-image:url(/flags/4x3/fr.svg)}.fi-fr.fis{background-image:url(/flags/1x1/fr.svg)}.fi-ga{background-image:url(/flags/4x3/ga.svg)}.fi-ga.fis{background-image:url(/flags/1x1/ga.svg)}.fi-gb{background-image:url(/flags/4x3/gb.svg)}.fi-gb.fis{background-image:url(/flags/1x1/gb.svg)}.fi-gd{background-image:url(/flags/4x3/gd.svg)}.fi-gd.fis{background-image:url(/flags/1x1/gd.svg)}.fi-ge{background-image:url(/flags/4x3/ge.svg)}.fi-ge.fis{background-image:url(/flags/1x1/ge.svg)}.fi-gf{background-image:url(/flags/4x3/gf.svg)}.fi-gf.fis{background-image:url(/flags/1x1/gf.svg)}.fi-gg{background-image:url(/flags/4x3/gg.svg)}.fi-gg.fis{background-image:url(/flags/1x1/gg.svg)}.fi-gh{background-image:url(/flags/4x3/gh.svg)}.fi-gh.fis{background-image:url(/flags/1x1/gh.svg)}.fi-gi{background-image:url(/flags/4x3/gi.svg)}.fi-gi.fis{background-image:url(/flags/1x1/gi.svg)}.fi-gl{background-image:url(/flags/4x3/gl.svg)}.fi-gl.fis{background-image:url(/flags/1x1/gl.svg)}.fi-gm{background-image:url(/flags/4x3/gm.svg)}.fi-gm.fis{background-image:url(/flags/1x1/gm.svg)}.fi-gn{background-image:url(/flags/4x3/gn.svg)}.fi-gn.fis{background-image:url(/flags/1x1/gn.svg)}.fi-gp{background-image:url(/flags/4x3/gp.svg)}.fi-gp.fis{background-image:url(/flags/1x1/gp.svg)}.fi-gq{background-image:url(/flags/4x3/gq.svg)}.fi-gq.fis{background-image:url(/flags/1x1/gq.svg)}.fi-gr{background-image:url(/flags/4x3/gr.svg)}.fi-gr.fis{background-image:url(/flags/1x1/gr.svg)}.fi-gs{background-image:url(/flags/4x3/gs.svg)}.fi-gs.fis{background-image:url(/flags/1x1/gs.svg)}.fi-gt{background-image:url(/flags/4x3/gt.svg)}.fi-gt.fis{background-image:url(/flags/1x1/gt.svg)}.fi-gu{background-image:url(/flags/4x3/gu.svg)}.fi-gu.fis{background-image:url(/flags/1x1/gu.svg)}.fi-gw{background-image:url(/flags/4x3/gw.svg)}.fi-gw.fis{background-image:url(/flags/1x1/gw.svg)}.fi-gy{background-image:url(/flags/4x3/gy.svg)}.fi-gy.fis{background-image:url(/flags/1x1/gy.svg)}.fi-hk{background-image:url(/flags/4x3/hk.svg)}.fi-hk.fis{background-image:url(/flags/1x1/hk.svg)}.fi-hm{background-image:url(/flags/4x3/hm.svg)}.fi-hm.fis{background-image:url(/flags/1x1/hm.svg)}.fi-hn{background-image:url(/flags/4x3/hn.svg)}.fi-hn.fis{background-image:url(/flags/1x1/hn.svg)}.fi-hr{background-image:url(/flags/4x3/hr.svg)}.fi-hr.fis{background-image:url(/flags/1x1/hr.svg)}.fi-ht{background-image:url(/flags/4x3/ht.svg)}.fi-ht.fis{background-image:url(/flags/1x1/ht.svg)}.fi-hu{background-image:url(/flags/4x3/hu.svg)}.fi-hu.fis{background-image:url(/flags/1x1/hu.svg)}.fi-id{background-image:url(/flags/4x3/id.svg)}.fi-id.fis{background-image:url(/flags/1x1/id.svg)}.fi-ie{background-image:url(/flags/4x3/ie.svg)}.fi-ie.fis{background-image:url(/flags/1x1/ie.svg)}.fi-il{background-image:url(/flags/4x3/il.svg)}.fi-il.fis{background-image:url(/flags/1x1/il.svg)}.fi-im{background-image:url(/flags/4x3/im.svg)}.fi-im.fis{background-image:url(/flags/1x1/im.svg)}.fi-in{background-image:url(/flags/4x3/in.svg)}.fi-in.fis{background-image:url(/flags/1x1/in.svg)}.fi-io{background-image:url(/flags/4x3/io.svg)}.fi-io.fis{background-image:url(/flags/1x1/io.svg)}.fi-iq{background-image:url(/flags/4x3/iq.svg)}.fi-iq.fis{background-image:url(/flags/1x1/iq.svg)}.fi-ir{background-image:url(/flags/4x3/ir.svg)}.fi-ir.fis{background-image:url(/flags/1x1/ir.svg)}.fi-is{background-image:url(/flags/4x3/is.svg)}.fi-is.fis{background-image:url(/flags/1x1/is.svg)}.fi-it{background-image:url(/flags/4x3/it.svg)}.fi-it.fis{background-image:url(/flags/1x1/it.svg)}.fi-je{background-image:url(/flags/4x3/je.svg)}.fi-je.fis{background-image:url(/flags/1x1/je.svg)}.fi-jm{background-image:url(/flags/4x3/jm.svg)}.fi-jm.fis{background-image:url(/flags/1x1/jm.svg)}.fi-jo{background-image:url(/flags/4x3/jo.svg)}.fi-jo.fis{background-image:url(/flags/1x1/jo.svg)}.fi-jp{background-image:url(/flags/4x3/jp.svg)}.fi-jp.fis{background-image:url(/flags/1x1/jp.svg)}.fi-ke{background-image:url(/flags/4x3/ke.svg)}.fi-ke.fis{background-image:url(/flags/1x1/ke.svg)}.fi-kg{background-image:url(/flags/4x3/kg.svg)}.fi-kg.fis{background-image:url(/flags/1x1/kg.svg)}.fi-kh{background-image:url(/flags/4x3/kh.svg)}.fi-kh.fis{background-image:url(/flags/1x1/kh.svg)}.fi-ki{background-image:url(/flags/4x3/ki.svg)}.fi-ki.fis{background-image:url(/flags/1x1/ki.svg)}.fi-km{background-image:url(/flags/4x3/km.svg)}.fi-km.fis{background-image:url(/flags/1x1/km.svg)}.fi-kn{background-image:url(/flags/4x3/kn.svg)}.fi-kn.fis{background-image:url(/flags/1x1/kn.svg)}.fi-kp{background-image:url(/flags/4x3/kp.svg)}.fi-kp.fis{background-image:url(/flags/1x1/kp.svg)}.fi-kr{background-image:url(/flags/4x3/kr.svg)}.fi-kr.fis{background-image:url(/flags/1x1/kr.svg)}.fi-kw{background-image:url(/flags/4x3/kw.svg)}.fi-kw.fis{background-image:url(/flags/1x1/kw.svg)}.fi-ky{background-image:url(/flags/4x3/ky.svg)}.fi-ky.fis{background-image:url(/flags/1x1/ky.svg)}.fi-kz{background-image:url(/flags/4x3/kz.svg)}.fi-kz.fis{background-image:url(/flags/1x1/kz.svg)}.fi-la{background-image:url(/flags/4x3/la.svg)}.fi-la.fis{background-image:url(/flags/1x1/la.svg)}.fi-lb{background-image:url(/flags/4x3/lb.svg)}.fi-lb.fis{background-image:url(/flags/1x1/lb.svg)}.fi-lc{background-image:url(/flags/4x3/lc.svg)}.fi-lc.fis{background-image:url(/flags/1x1/lc.svg)}.fi-li{background-image:url(/flags/4x3/li.svg)}.fi-li.fis{background-image:url(/flags/1x1/li.svg)}.fi-lk{background-image:url(/flags/4x3/lk.svg)}.fi-lk.fis{background-image:url(/flags/1x1/lk.svg)}.fi-lr{background-image:url(/flags/4x3/lr.svg)}.fi-lr.fis{background-image:url(/flags/1x1/lr.svg)}.fi-ls{background-image:url(/flags/4x3/ls.svg)}.fi-ls.fis{background-image:url(/flags/1x1/ls.svg)}.fi-lt{background-image:url(/flags/4x3/lt.svg)}.fi-lt.fis{background-image:url(/flags/1x1/lt.svg)}.fi-lu{background-image:url(/flags/4x3/lu.svg)}.fi-lu.fis{background-image:url(/flags/1x1/lu.svg)}.fi-lv{background-image:url(/flags/4x3/lv.svg)}.fi-lv.fis{background-image:url(/flags/1x1/lv.svg)}.fi-ly{background-image:url(/flags/4x3/ly.svg)}.fi-ly.fis{background-image:url(/flags/1x1/ly.svg)}.fi-ma{background-image:url(/flags/4x3/ma.svg)}.fi-ma.fis{background-image:url(/flags/1x1/ma.svg)}.fi-mc{background-image:url(/flags/4x3/mc.svg)}.fi-mc.fis{background-image:url(/flags/1x1/mc.svg)}.fi-md{background-image:url(/flags/4x3/md.svg)}.fi-md.fis{background-image:url(/flags/1x1/md.svg)}.fi-me{background-image:url(/flags/4x3/me.svg)}.fi-me.fis{background-image:url(/flags/1x1/me.svg)}.fi-mf{background-image:url(/flags/4x3/mf.svg)}.fi-mf.fis{background-image:url(/flags/1x1/mf.svg)}.fi-mg{background-image:url(/flags/4x3/mg.svg)}.fi-mg.fis{background-image:url(/flags/1x1/mg.svg)}.fi-mh{background-image:url(/flags/4x3/mh.svg)}.fi-mh.fis{background-image:url(/flags/1x1/mh.svg)}.fi-mk{background-image:url(/flags/4x3/mk.svg)}.fi-mk.fis{background-image:url(/flags/1x1/mk.svg)}.fi-ml{background-image:url(/flags/4x3/ml.svg)}.fi-ml.fis{background-image:url(/flags/1x1/ml.svg)}.fi-mm{background-image:url(/flags/4x3/mm.svg)}.fi-mm.fis{background-image:url(/flags/1x1/mm.svg)}.fi-mn{background-image:url(/flags/4x3/mn.svg)}.fi-mn.fis{background-image:url(/flags/1x1/mn.svg)}.fi-mo{background-image:url(/flags/4x3/mo.svg)}.fi-mo.fis{background-image:url(/flags/1x1/mo.svg)}.fi-mp{background-image:url(/flags/4x3/mp.svg)}.fi-mp.fis{background-image:url(/flags/1x1/mp.svg)}.fi-mq{background-image:url(/flags/4x3/mq.svg)}.fi-mq.fis{background-image:url(/flags/1x1/mq.svg)}.fi-mr{background-image:url(/flags/4x3/mr.svg)}.fi-mr.fis{background-image:url(/flags/1x1/mr.svg)}.fi-ms{background-image:url(/flags/4x3/ms.svg)}.fi-ms.fis{background-image:url(/flags/1x1/ms.svg)}.fi-mt{background-image:url(/flags/4x3/mt.svg)}.fi-mt.fis{background-image:url(/flags/1x1/mt.svg)}.fi-mu{background-image:url(/flags/4x3/mu.svg)}.fi-mu.fis{background-image:url(/flags/1x1/mu.svg)}.fi-mv{background-image:url(/flags/4x3/mv.svg)}.fi-mv.fis{background-image:url(/flags/1x1/mv.svg)}.fi-mw{background-image:url(/flags/4x3/mw.svg)}.fi-mw.fis{background-image:url(/flags/1x1/mw.svg)}.fi-mx{background-image:url(/flags/4x3/mx.svg)}.fi-mx.fis{background-image:url(/flags/1x1/mx.svg)}.fi-my{background-image:url(/flags/4x3/my.svg)}.fi-my.fis{background-image:url(/flags/1x1/my.svg)}.fi-mz{background-image:url(/flags/4x3/mz.svg)}.fi-mz.fis{background-image:url(/flags/1x1/mz.svg)}.fi-na{background-image:url(/flags/4x3/na.svg)}.fi-na.fis{background-image:url(/flags/1x1/na.svg)}.fi-nc{background-image:url(/flags/4x3/nc.svg)}.fi-nc.fis{background-image:url(/flags/1x1/nc.svg)}.fi-ne{background-image:url(/flags/4x3/ne.svg)}.fi-ne.fis{background-image:url(/flags/1x1/ne.svg)}.fi-nf{background-image:url(/flags/4x3/nf.svg)}.fi-nf.fis{background-image:url(/flags/1x1/nf.svg)}.fi-ng{background-image:url(/flags/4x3/ng.svg)}.fi-ng.fis{background-image:url(/flags/1x1/ng.svg)}.fi-ni{background-image:url(/flags/4x3/ni.svg)}.fi-ni.fis{background-image:url(/flags/1x1/ni.svg)}.fi-nl{background-image:url(/flags/4x3/nl.svg)}.fi-nl.fis{background-image:url(/flags/1x1/nl.svg)}.fi-no{background-image:url(/flags/4x3/no.svg)}.fi-no.fis{background-image:url(/flags/1x1/no.svg)}.fi-np{background-image:url(/flags/4x3/np.svg)}.fi-np.fis{background-image:url(/flags/1x1/np.svg)}.fi-nr{background-image:url(/flags/4x3/nr.svg)}.fi-nr.fis{background-image:url(/flags/1x1/nr.svg)}.fi-nu{background-image:url(/flags/4x3/nu.svg)}.fi-nu.fis{background-image:url(/flags/1x1/nu.svg)}.fi-nz{background-image:url(/flags/4x3/nz.svg)}.fi-nz.fis{background-image:url(/flags/1x1/nz.svg)}.fi-om{background-image:url(/flags/4x3/om.svg)}.fi-om.fis{background-image:url(/flags/1x1/om.svg)}.fi-pa{background-image:url(/flags/4x3/pa.svg)}.fi-pa.fis{background-image:url(/flags/1x1/pa.svg)}.fi-pe{background-image:url(/flags/4x3/pe.svg)}.fi-pe.fis{background-image:url(/flags/1x1/pe.svg)}.fi-pf{background-image:url(/flags/4x3/pf.svg)}.fi-pf.fis{background-image:url(/flags/1x1/pf.svg)}.fi-pg{background-image:url(/flags/4x3/pg.svg)}.fi-pg.fis{background-image:url(/flags/1x1/pg.svg)}.fi-ph{background-image:url(/flags/4x3/ph.svg)}.fi-ph.fis{background-image:url(/flags/1x1/ph.svg)}.fi-pk{background-image:url(/flags/4x3/pk.svg)}.fi-pk.fis{background-image:url(/flags/1x1/pk.svg)}.fi-pl{background-image:url(/flags/4x3/pl.svg)}.fi-pl.fis{background-image:url(/flags/1x1/pl.svg)}.fi-pm{background-image:url(/flags/4x3/pm.svg)}.fi-pm.fis{background-image:url(/flags/1x1/pm.svg)}.fi-pn{background-image:url(/flags/4x3/pn.svg)}.fi-pn.fis{background-image:url(/flags/1x1/pn.svg)}.fi-pr{background-image:url(/flags/4x3/pr.svg)}.fi-pr.fis{background-image:url(/flags/1x1/pr.svg)}.fi-ps{background-image:url(/flags/4x3/ps.svg)}.fi-ps.fis{background-image:url(/flags/1x1/ps.svg)}.fi-pt{background-image:url(/flags/4x3/pt.svg)}.fi-pt.fis{background-image:url(/flags/1x1/pt.svg)}.fi-pw{background-image:url(/flags/4x3/pw.svg)}.fi-pw.fis{background-image:url(/flags/1x1/pw.svg)}.fi-py{background-image:url(/flags/4x3/py.svg)}.fi-py.fis{background-image:url(/flags/1x1/py.svg)}.fi-qa{background-image:url(/flags/4x3/qa.svg)}.fi-qa.fis{background-image:url(/flags/1x1/qa.svg)}.fi-re{background-image:url(/flags/4x3/re.svg)}.fi-re.fis{background-image:url(/flags/1x1/re.svg)}.fi-ro{background-image:url(/flags/4x3/ro.svg)}.fi-ro.fis{background-image:url(/flags/1x1/ro.svg)}.fi-rs{background-image:url(/flags/4x3/rs.svg)}.fi-rs.fis{background-image:url(/flags/1x1/rs.svg)}.fi-ru{background-image:url(/flags/4x3/ru.svg)}.fi-ru.fis{background-image:url(/flags/1x1/ru.svg)}.fi-rw{background-image:url(/flags/4x3/rw.svg)}.fi-rw.fis{background-image:url(/flags/1x1/rw.svg)}.fi-sa{background-image:url(/flags/4x3/sa.svg)}.fi-sa.fis{background-image:url(/flags/1x1/sa.svg)}.fi-sb{background-image:url(/flags/4x3/sb.svg)}.fi-sb.fis{background-image:url(/flags/1x1/sb.svg)}.fi-sc{background-image:url(/flags/4x3/sc.svg)}.fi-sc.fis{background-image:url(/flags/1x1/sc.svg)}.fi-sd{background-image:url(/flags/4x3/sd.svg)}.fi-sd.fis{background-image:url(/flags/1x1/sd.svg)}.fi-se{background-image:url(/flags/4x3/se.svg)}.fi-se.fis{background-image:url(/flags/1x1/se.svg)}.fi-sg{background-image:url(/flags/4x3/sg.svg)}.fi-sg.fis{background-image:url(/flags/1x1/sg.svg)}.fi-sh{background-image:url(/flags/4x3/sh.svg)}.fi-sh.fis{background-image:url(/flags/1x1/sh.svg)}.fi-si{background-image:url(/flags/4x3/si.svg)}.fi-si.fis{background-image:url(/flags/1x1/si.svg)}.fi-sj{background-image:url(/flags/4x3/sj.svg)}.fi-sj.fis{background-image:url(/flags/1x1/sj.svg)}.fi-sk{background-image:url(/flags/4x3/sk.svg)}.fi-sk.fis{background-image:url(/flags/1x1/sk.svg)}.fi-sl{background-image:url(/flags/4x3/sl.svg)}.fi-sl.fis{background-image:url(/flags/1x1/sl.svg)}.fi-sm{background-image:url(/flags/4x3/sm.svg)}.fi-sm.fis{background-image:url(/flags/1x1/sm.svg)}.fi-sn{background-image:url(/flags/4x3/sn.svg)}.fi-sn.fis{background-image:url(/flags/1x1/sn.svg)}.fi-so{background-image:url(/flags/4x3/so.svg)}.fi-so.fis{background-image:url(/flags/1x1/so.svg)}.fi-sr{background-image:url(/flags/4x3/sr.svg)}.fi-sr.fis{background-image:url(/flags/1x1/sr.svg)}.fi-ss{background-image:url(/flags/4x3/ss.svg)}.fi-ss.fis{background-image:url(/flags/1x1/ss.svg)}.fi-st{background-image:url(/flags/4x3/st.svg)}.fi-st.fis{background-image:url(/flags/1x1/st.svg)}.fi-sv{background-image:url(/flags/4x3/sv.svg)}.fi-sv.fis{background-image:url(/flags/1x1/sv.svg)}.fi-sx{background-image:url(/flags/4x3/sx.svg)}.fi-sx.fis{background-image:url(/flags/1x1/sx.svg)}.fi-sy{background-image:url(/flags/4x3/sy.svg)}.fi-sy.fis{background-image:url(/flags/1x1/sy.svg)}.fi-sz{background-image:url(/flags/4x3/sz.svg)}.fi-sz.fis{background-image:url(/flags/1x1/sz.svg)}.fi-tc{background-image:url(/flags/4x3/tc.svg)}.fi-tc.fis{background-image:url(/flags/1x1/tc.svg)}.fi-td{background-image:url(/flags/4x3/td.svg)}.fi-td.fis{background-image:url(/flags/1x1/td.svg)}.fi-tf{background-image:url(/flags/4x3/tf.svg)}.fi-tf.fis{background-image:url(/flags/1x1/tf.svg)}.fi-tg{background-image:url(/flags/4x3/tg.svg)}.fi-tg.fis{background-image:url(/flags/1x1/tg.svg)}.fi-th{background-image:url(/flags/4x3/th.svg)}.fi-th.fis{background-image:url(/flags/1x1/th.svg)}.fi-tj{background-image:url(/flags/4x3/tj.svg)}.fi-tj.fis{background-image:url(/flags/1x1/tj.svg)}.fi-tk{background-image:url(/flags/4x3/tk.svg)}.fi-tk.fis{background-image:url(/flags/1x1/tk.svg)}.fi-tl{background-image:url(/flags/4x3/tl.svg)}.fi-tl.fis{background-image:url(/flags/1x1/tl.svg)}.fi-tm{background-image:url(/flags/4x3/tm.svg)}.fi-tm.fis{background-image:url(/flags/1x1/tm.svg)}.fi-tn{background-image:url(/flags/4x3/tn.svg)}.fi-tn.fis{background-image:url(/flags/1x1/tn.svg)}.fi-to{background-image:url(/flags/4x3/to.svg)}.fi-to.fis{background-image:url(/flags/1x1/to.svg)}.fi-tr{background-image:url(/flags/4x3/tr.svg)}.fi-tr.fis{background-image:url(/flags/1x1/tr.svg)}.fi-tt{background-image:url(/flags/4x3/tt.svg)}.fi-tt.fis{background-image:url(/flags/1x1/tt.svg)}.fi-tv{background-image:url(/flags/4x3/tv.svg)}.fi-tv.fis{background-image:url(/flags/1x1/tv.svg)}.fi-tw{background-image:url(/flags/4x3/tw.svg)}.fi-tw.fis{background-image:url(/flags/1x1/tw.svg)}.fi-tz{background-image:url(/flags/4x3/tz.svg)}.fi-tz.fis{background-image:url(/flags/1x1/tz.svg)}.fi-ua{background-image:url(/flags/4x3/ua.svg)}.fi-ua.fis{background-image:url(/flags/1x1/ua.svg)}.fi-ug{background-image:url(/flags/4x3/ug.svg)}.fi-ug.fis{background-image:url(/flags/1x1/ug.svg)}.fi-um{background-image:url(/flags/4x3/um.svg)}.fi-um.fis{background-image:url(/flags/1x1/um.svg)}.fi-us{background-image:url(/flags/4x3/us.svg)}.fi-us.fis{background-image:url(/flags/1x1/us.svg)}.fi-uy{background-image:url(/flags/4x3/uy.svg)}.fi-uy.fis{background-image:url(/flags/1x1/uy.svg)}.fi-uz{background-image:url(/flags/4x3/uz.svg)}.fi-uz.fis{background-image:url(/flags/1x1/uz.svg)}.fi-va{background-image:url(/flags/4x3/va.svg)}.fi-va.fis{background-image:url(/flags/1x1/va.svg)}.fi-vc{background-image:url(/flags/4x3/vc.svg)}.fi-vc.fis{background-image:url(/flags/1x1/vc.svg)}.fi-ve{background-image:url(/flags/4x3/ve.svg)}.fi-ve.fis{background-image:url(/flags/1x1/ve.svg)}.fi-vg{background-image:url(/flags/4x3/vg.svg)}.fi-vg.fis{background-image:url(/flags/1x1/vg.svg)}.fi-vi{background-image:url(/flags/4x3/vi.svg)}.fi-vi.fis{background-image:url(/flags/1x1/vi.svg)}.fi-vn{background-image:url(/flags/4x3/vn.svg)}.fi-vn.fis{background-image:url(/flags/1x1/vn.svg)}.fi-vu{background-image:url(/flags/4x3/vu.svg)}.fi-vu.fis{background-image:url(/flags/1x1/vu.svg)}.fi-wf{background-image:url(/flags/4x3/wf.svg)}.fi-wf.fis{background-image:url(/flags/1x1/wf.svg)}.fi-ws{background-image:url(/flags/4x3/ws.svg)}.fi-ws.fis{background-image:url(/flags/1x1/ws.svg)}.fi-ye{background-image:url(/flags/4x3/ye.svg)}.fi-ye.fis{background-image:url(/flags/1x1/ye.svg)}.fi-yt{background-image:url(/flags/4x3/yt.svg)}.fi-yt.fis{background-image:url(/flags/1x1/yt.svg)}.fi-za{background-image:url(/flags/4x3/za.svg)}.fi-za.fis{background-image:url(/flags/1x1/za.svg)}.fi-zm{background-image:url(/flags/4x3/zm.svg)}.fi-zm.fis{background-image:url(/flags/1x1/zm.svg)}.fi-zw{background-image:url(/flags/4x3/zw.svg)}.fi-zw.fis{background-image:url(/flags/1x1/zw.svg)}.fi-ac{background-image:url(/flags/4x3/ac.svg)}.fi-ac.fis{background-image:url(/flags/1x1/ac.svg)}.fi-cp{background-image:url(/flags/4x3/cp.svg)}.fi-cp.fis{background-image:url(/flags/1x1/cp.svg)}.fi-dg{background-image:url(/flags/4x3/dg.svg)}.fi-dg.fis{background-image:url(/flags/1x1/dg.svg)}.fi-ea{background-image:url(/flags/4x3/ea.svg)}.fi-ea.fis{background-image:url(/flags/1x1/ea.svg)}.fi-es-ct{background-image:url(/flags/4x3/es-ct.svg)}.fi-es-ct.fis{background-image:url(/flags/1x1/es-ct.svg)}.fi-es-ga{background-image:url(/flags/4x3/es-ga.svg)}.fi-es-ga.fis{background-image:url(/flags/1x1/es-ga.svg)}.fi-eu{background-image:url(/flags/4x3/eu.svg)}.fi-eu.fis{background-image:url(/flags/1x1/eu.svg)}.fi-gb-eng{background-image:url(/flags/4x3/gb-eng.svg)}.fi-gb-eng.fis{background-image:url(/flags/1x1/gb-eng.svg)}.fi-gb-nir{background-image:url(/flags/4x3/gb-nir.svg)}.fi-gb-nir.fis{background-image:url(/flags/1x1/gb-nir.svg)}.fi-gb-sct{background-image:url(/flags/4x3/gb-sct.svg)}.fi-gb-sct.fis{background-image:url(/flags/1x1/gb-sct.svg)}.fi-gb-wls{background-image:url(/flags/4x3/gb-wls.svg)}.fi-gb-wls.fis{background-image:url(/flags/1x1/gb-wls.svg)}.fi-ic{background-image:url(/flags/4x3/ic.svg)}.fi-ic.fis{background-image:url(/flags/1x1/ic.svg)}.fi-ta{background-image:url(/flags/4x3/ta.svg)}.fi-ta.fis{background-image:url(/flags/1x1/ta.svg)}.fi-un{background-image:url(/flags/4x3/un.svg)}.fi-un.fis{background-image:url(/flags/1x1/un.svg)}.fi-xk{background-image:url(/flags/4x3/xk.svg)}.fi-xk.fis{background-image:url(/flags/1x1/xk.svg)}.fi-xx{background-image:url(/flags/4x3/xx.svg)}.fi-xx.fis{background-image:url(/flags/1x1/xx.svg)}body,html{font-family:"Montserrat",sans-serif}.form-group{margin-bottom:16px}.grecaptcha-badge{visibility:collapse!important}.loader-spinner{position:relative;margin:0 auto;width:20px}.loader-spinner:before{content:"";display:block;padding-top:100%}.circular{-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.path{stroke-dasharray:1,200;stroke-dashoffset:0;-webkit-animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 6s ease-in-out infinite;stroke-linecap:round}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35px}to{stroke-dasharray:89,200;stroke-dashoffset:-124px}}@-webkit-keyframes color{0%,to{stroke:#9e2bb0}40%{stroke:#d62d20}66%{stroke:#f9547a}80%,90%{stroke:#29bbe9}}@keyframes color{0%,to{stroke:#9e2bb0}40%{stroke:#d62d20}66%{stroke:#f9547a}80%,90%{stroke:#29bbe9}}',
          "",
        ]),
        (e.exports = r);
    },
    396: function (e, t, n) {
      e.exports = n.p + "img/logo_big_white.11c5c3c.png";
    },
    397: function (e, t, n) {
      "use strict";
      n(183);
    },
    398: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        ".auth-logo{width:auto;height:120px;margin-bottom:12px}@media(max-width:529px){.auth-logo{height:60px}}h2.minority-heading{color:#fff;font-size:24px;text-align:center}h3.minority-subheading{color:#c1bbc9;font-size:16px;font-weight:400;text-align:center}",
        "",
      ]),
        (e.exports = r);
    },
    399: function (e, t, n) {
      "use strict";
      n(184);
    },
    400: function (e, t, n) {
      var r = n(33),
        a = n(78),
        i = n(112),
        o = r(!1),
        s = a(i);
      o.push([
        e.i,
        "main[data-v-5f3bd686]{min-height:100vh;width:100%;position:relative;z-index:1;background:url(" +
          s +
          ") bottom no-repeat;background-size:contain}@media (min-width:1920px){main[data-v-5f3bd686]{background-size:cover}}.minority-card[data-v-5f3bd686]{background-color:rgba(0,0,0,.1);width:100%;display:flex;padding:32px;border-radius:3px}",
        "",
      ]),
        (e.exports = o);
    },
    401: function (e, t, n) {
      "use strict";
      n(185);
    },
    402: function (e, t, n) {
      var r = n(33),
        a = n(78),
        i = n(403),
        o = r(!1),
        s = a(i);
      o.push([
        e.i,
        "#cloud-radar-page[data-v-46b445ff]{min-height:100vh;background-color:#121416;min-width:100vw;background-image:url(" +
          s +
          ");background-size:cover}",
        "",
      ]),
        (e.exports = o);
    },
    403: function (e, t, n) {
      e.exports = n.p + "img/bg.942ff88.png";
    },
    404: function (e, t, n) {
      "use strict";
      n(187);
    },
    405: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        ".language-selector[data-v-c33f0794]{position:relative;display:inline-block}.language-selector *[data-v-c33f0794]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.language-selector .value[data-v-c33f0794]{border-radius:3px;border:1px solid rgba(235,46,125,.8);width:72px;height:52px;display:flex;align-items:center;justify-content:space-around;cursor:pointer;transition:border .3s}.language-selector .value .label[data-v-c33f0794]{margin-left:8px}.language-selector .value.active[data-v-c33f0794],.language-selector .value[data-v-c33f0794]:hover{border:1px solid #eb2e7d}.language-selector .value[data-v-c33f0794],.language-selector .varies>a[data-v-c33f0794]{display:flex;align-items:center;padding:8px;justify-content:space-between;transition:background-color .3s}.language-selector .value img[data-v-c33f0794],.language-selector .varies>a img[data-v-c33f0794]{display:inline-block;width:16px;height:auto;margin-right:2px}.language-selector .varies[data-v-c33f0794]{z-index:1337;border-radius:3px;border:1px solid #eb2e7d;position:absolute;top:calc(100% + 8px);width:100%;text-align:center}.language-selector .varies a[data-v-c33f0794]{color:#fff;display:block;text-decoration:none;transition:background-color .3s}.language-selector .varies a[data-v-c33f0794]:hover{background-color:#0e0f2b}",
        "",
      ]),
        (e.exports = r);
    },
    406: function (e, t, n) {
      "use strict";
      n(188);
    },
    407: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        '@media(max-width:529px){.scam-warning[data-v-e79aa33e]{display:none}}.scam-warning[data-v-e79aa33e]{padding:16px;font-size:18px;background-color:#810f0f}.scam-warning a[data-v-e79aa33e]{font-weight:700;position:relative;display:inline-block!important;width:auto;text-decoration:none;color:#11cdff;transition:color .3s}.scam-warning a[data-v-e79aa33e]:after{content:" ";position:absolute;width:100%;height:2px;bottom:0;left:0;background-color:#11cdff;transition:background-color .3s}.scam-warning a[data-v-e79aa33e]:hover{color:#bbbfc9}.scam-warning a[data-v-e79aa33e]:hover:after{background-color:#bbbfc9}.logo-image[data-v-e79aa33e]{width:auto;height:60px;position:absolute;right:0;left:0;margin:0 auto}@media (max-width:991px){.logo-image[data-v-e79aa33e]{display:none}}main[data-v-e79aa33e]{overflow-x:hidden}main nav[data-v-e79aa33e]{position:absolute;top:0;left:0;width:100%;z-index:1337}main nav .nav-flex[data-v-e79aa33e]{width:100%;display:flex;height:112px;align-items:center;padding-left:15px;padding-right:15px;grid-gap:30px;gap:30px;justify-content:space-between}main nav .nav-flex a[data-v-e79aa33e]:first-child,main nav .nav-flex button[data-v-e79aa33e]:first-child{margin-right:20px}@media(max-width:991px){main nav .nav-flex[data-v-e79aa33e]{flex-direction:column;grid-gap:15px;gap:15px;align-items:flex-start}}@media(max-width:750px){main nav .nav-flex[data-v-e79aa33e]{justify-content:center}}main ul[data-v-e79aa33e]{margin:0;padding:0;display:flex;list-style:none;font-size:16px;grid-gap:30px;gap:30px}@media(max-width:991px){main ul[data-v-e79aa33e]{margin-top:20px}}main ul li[data-v-e79aa33e]{margin-right:32px}@media(max-width:991px){main ul li[data-v-e79aa33e]{height:40px;display:flex;align-items:center;margin-right:0}}main ul li a[data-v-e79aa33e],main ul li a[data-v-e79aa33e]:visited{color:#bbbfc9;transition:all .3s}main ul li a[data-v-e79aa33e]:hover,main ul li a[data-v-e79aa33e]:visited:hover{color:#fff;text-decoration:none}',
        "",
      ]),
        (e.exports = r);
    },
    408: function (e, t, n) {
      "use strict";
      n(189);
    },
    409: function (e, t, n) {
      var r = n(33),
        a = n(78),
        i = n(112),
        o = r(!1),
        s = a(i);
      o.push([
        e.i,
        "body,html{margin:0;padding:0;color:#fff}body,html,main{position:relative;z-index:1337;background-color:#1e1e2b}*,:active{outline:none!important}a,button{border:0;border-radius:3px}a.default-link{color:#e82834;border-bottom:2px solid transparent}a.default-link:hover{text-decoration:none;color:#e82834;border-bottom:2px solid #e82834}.footer-bg{position:absolute;bottom:0;height:auto;width:100%;z-index:-1;background:url(" +
          s +
          ") no-repeat bottom;background-size:contain}",
        "",
      ]),
        (e.exports = o);
    },
    410: function (e, t, n) {
      "use strict";
      n(190);
    },
    411: function (e, t, n) {
      var r = n(33),
        a = n(78),
        i = n(112),
        o = r(!1),
        s = a(i);
      o.push([
        e.i,
        "main[data-v-05daf26f]{background:url(" + s + ") bottom no-repeat}",
        "",
      ]),
        (e.exports = o);
    },
    412: function (e, t, n) {
      e.exports = n.p + "img/logo_big_white_no_text.11c5c3c.png";
    },
    413: function (e, t, n) {
      "use strict";
      n(191);
    },
    414: function (e, t, n) {
      var r = n(33),
        a = n(78),
        i = n(112),
        o = r(!1),
        s = a(i);
      o.push([
        e.i,
        "main[data-v-03ebffc9]{background:url(" +
          s +
          ") bottom no-repeat;background-color:#1e1e2b;background-size:cover}@media (min-width:1920px){main[data-v-03ebffc9]{background-size:contain}}@media(max-width:767px){main[data-v-03ebffc9]{padding-top:20px;padding-bottom:40px}}ul.menu[data-v-03ebffc9]{list-style:none;width:100%;padding:0}ul.menu li[data-v-03ebffc9]{font-size:16px;border-bottom:1px solid #1c1c29;border-top:1px solid #292936;display:block}ul.menu li[data-v-03ebffc9]:first-child{border-top:none}ul.menu li[data-v-03ebffc9]:last-child{border-bottom:none;opacity:.5;transition:opacity .31s;padding-top:18px}ul.menu li[data-v-03ebffc9]:last-child:hover{opacity:1}ul.menu li a[data-v-03ebffc9],ul.menu li button[data-v-03ebffc9]{z-index:0;position:relative;color:#fff;padding:12px 0 12px 28px;display:block;transition:all .3s;background:none}ul.menu li a.nuxt-link-exact-active[data-v-03ebffc9],ul.menu li a[data-v-03ebffc9]:hover,ul.menu li button.nuxt-link-exact-active[data-v-03ebffc9],ul.menu li button[data-v-03ebffc9]:hover{color:#e82834;border-bottom:none;text-decoration:none}ul.menu li a.nuxt-link-exact-active .icon[data-v-03ebffc9],ul.menu li a:hover .icon[data-v-03ebffc9],ul.menu li button.nuxt-link-exact-active .icon[data-v-03ebffc9],ul.menu li button:hover .icon[data-v-03ebffc9]{background-color:#e82834}ul.menu li a>span.icon[data-v-03ebffc9],ul.menu li button>span.icon[data-v-03ebffc9]{display:inline-block;left:0;top:14px;position:absolute;height:16px;width:16px;z-index:1337;background-color:#fff;transition:all .3s;-webkit-mask-size:contain!important;mask-size:contain!important;-webkit-mask-repeat:no-repeat!important;mask-repeat:no-repeat!important;-webkit-mask-position:center center!important;mask-position:center center!important}ul.menu li a>span.icon.billing[data-v-03ebffc9],ul.menu li button>span.icon.billing[data-v-03ebffc9]{-webkit-mask-image:url(/icons/billing-icon.svg);mask-image:url(/icons/billing-icon.svg)}ul.menu li a>span.icon.person[data-v-03ebffc9],ul.menu li button>span.icon.person[data-v-03ebffc9]{-webkit-mask-image:url(/icons/person-icon.svg);mask-image:url(/icons/person-icon.svg)}ul.menu li a>span.icon.settings[data-v-03ebffc9],ul.menu li button>span.icon.settings[data-v-03ebffc9]{-webkit-mask-image:url(/icons/settings-icon.svg);mask-image:url(/icons/settings-icon.svg)}ul.menu li a>span.icon.money[data-v-03ebffc9],ul.menu li button>span.icon.money[data-v-03ebffc9]{-webkit-mask-image:url(/icons/money-icon.svg);mask-image:url(/icons/money-icon.svg)}ul.menu li a>span.icon.logout[data-v-03ebffc9],ul.menu li button>span.icon.logout[data-v-03ebffc9]{-webkit-mask-image:url(/icons/logout-icon.svg);mask-image:url(/icons/logout-icon.svg)}ul.menu li a>span.icon.support[data-v-03ebffc9],ul.menu li button>span.icon.support[data-v-03ebffc9]{-webkit-mask-image:url(/icons/support-icon.svg);mask-image:url(/icons/support-icon.svg)}ul.menu li a>span.icon.download[data-v-03ebffc9],ul.menu li button>span.icon.download[data-v-03ebffc9]{-webkit-mask-image:url(/icons/download-icon.svg);mask-image:url(/icons/download-icon.svg)}.profile-content[data-v-03ebffc9]{height:100vh}@media(max-width:767px){.profile-content[data-v-03ebffc9]{height:auto;min-height:100vh}}",
        "",
      ]),
        (e.exports = o);
    },
    415: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return a;
        }),
        n.d(t, "actions", function () {
          return i;
        });
      var r = n(7),
        a =
          (n(27),
          function () {
            return {};
          }),
        i = {
          nuxtServerInit: function (e) {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                var r, a;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (r = e.dispatch),
                          (a = e.commit),
                          t.$cookies.get("auth") &&
                            a(
                              "user/setToken",
                              t.$cookies.get("auth").access_token
                            ),
                          (n.next = 4),
                          r("retrieveFrontendData")
                        );
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          retrieveFrontendData: function (e) {
            var t = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function n() {
                var r, a;
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (r = e.commit),
                          (n.next = 3),
                          t.$axios.get(
                            "".concat(
                              "https://api.melonity.gg",
                              "/frontend/data"
                            )
                          )
                        );
                      case 3:
                        null !== (a = (a = n.sent).data).user &&
                          (r("user/setToken", a.access_token),
                          r("user/set", a.user),
                          r("discounts/setDiscounts", a.personal_discounts)),
                          r("products/setShoppingArea", a.shopping_area),
                          r("products/setProducts", a.products),
                          r("products/setCurrencyData", {
                            code: a.currency_code,
                            symbol: a.currency_symbol,
                          });
                      case 9:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
        };
    },
    416: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return a;
        }),
        n.d(t, "getters", function () {
          return i;
        }),
        n.d(t, "mutations", function () {
          return o;
        }),
        n.d(t, "actions", function () {
          return s;
        });
      var r = n(7),
        a =
          (n(27),
          n(2),
          function () {
            return { isUploading: !1, attachments: [] };
          }),
        i = {
          isUploading: function (e) {
            return e.isUploading;
          },
          getAttachmentsByDialogId: function (e) {
            return function (t) {
              return e.attachments.filter(function (e) {
                return e.dialog_id === t;
              });
            };
          },
        },
        o = {
          setUploadingState: function (e, t) {
            e.isUploading = !!t;
          },
          addAttachment: function (e, t) {
            var n = t.dialog_id,
              r = t.attachment;
            (r.dialog_id = n), e.attachments.push(r);
          },
          removeAttachment: function (e, t) {
            e.attachments = e.attachments.filter(function (e) {
              return t.id !== e.id;
            });
          },
          removeAttachmentsFromDialog: function (e, t) {
            e.attachments = e.attachments.filter(function (e) {
              return t !== e.dialog_id;
            });
          },
        },
        s = {
          uploadFile: function (e, t) {
            var n = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function r() {
                var a, i, o, s, u;
                return regeneratorRuntime.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          if (
                            ((a = e.commit),
                            (i = t.dialog_id),
                            (o = t.file) instanceof File)
                          ) {
                            r.next = 4;
                            break;
                          }
                          throw new Error("file must be instanceof File");
                        case 4:
                          return (
                            a("setUploadingState", !0),
                            (r.prev = 5),
                            (s = new FormData()).append("file", o),
                            (r.next = 10),
                            n.$axios.post(
                              "".concat(
                                "https://api.melonity.gg",
                                "/file_attachment"
                              ),
                              s,
                              {
                                headers: {
                                  "Content-Type": "multipart/form-data",
                                },
                              }
                            )
                          );
                        case 10:
                          if (!0 !== (u = r.sent).data.status) {
                            r.next = 15;
                            break;
                          }
                          return (
                            a("addAttachment", {
                              attachment: u.data.file_attachment,
                              dialog_id: i,
                            }),
                            a("setUploadingState", !1),
                            r.abrupt("return", !0)
                          );
                        case 15:
                          r.next = 20;
                          break;
                        case 17:
                          (r.prev = 17),
                            (r.t0 = r.catch(5)),
                            console.error(r.t0);
                        case 20:
                          return (
                            a("setUploadingState", !1), r.abrupt("return", !1)
                          );
                        case 22:
                        case "end":
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[5, 17]]
                );
              })
            )();
          },
        };
    },
    417: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return r;
        }),
        n.d(t, "mutations", function () {
          return a;
        }),
        n.d(t, "getters", function () {
          return i;
        });
      var r = function () {
          return { discounts: [] };
        },
        a = {
          setDiscounts: function (e, t) {
            e.discounts = t;
          },
        },
        i = {
          getDiscount: function (e) {
            return e.discounts[0] ? e.discounts[0] : null;
          },
        };
    },
    418: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return a;
        }),
        n.d(t, "mutations", function () {
          return i;
        }),
        n.d(t, "getters", function () {
          return o;
        });
      var r = n(19),
        a =
          (n(11),
          n(2),
          function () {
            return { messages: [] };
          }),
        i = {
          addMessages: function (e, t) {
            Array.isArray(t) || (t = [t]);
            var n,
              a = e.messages.map(function (e) {
                return e.random_id;
              });
            (t = t.filter(function (t) {
              var n = a.indexOf(t.random_id);
              return (
                -1 === n ||
                (delete e.messages[n].state,
                Object.assign(e.messages[n], t),
                !1)
              );
            })).length > 0 && (n = e.messages).push.apply(n, Object(r.a)(t)),
              (e.messages = e.messages.sort(function (e, t) {
                return e.id - t.id;
              }));
          },
        },
        o = {
          getMessagesByDialog: function (e) {
            return function (t) {
              return e.messages.filter(function (e) {
                return e.dialog_id === t;
              });
            };
          },
          getLastDialogMessage: function (e, t) {
            return function (e) {
              var n = t.getMessagesByDialog(e);
              return n.length ? n[n.length - 1] : null;
            };
          },
        };
    },
    419: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return a;
        }),
        n.d(t, "mutations", function () {
          return i;
        }),
        n.d(t, "actions", function () {
          return o;
        }),
        n.d(t, "getters", function () {
          return s;
        });
      var r = n(7),
        a =
          (n(27),
          n(13),
          function () {
            return { prices: null };
          }),
        i = {
          set: function (e, t) {
            e.prices = t;
          },
        },
        o = {
          get: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                var n;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          (t.prev = 0), (t.next = 11);
                          break;
                        case 5:
                          return t.abrupt("return", t.sent);
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t.catch(2)),
                            console.error(t.t0);
                        case 11:
                          return (
                            (t.next = 13),
                            e.$axios.get(
                              "".concat("https://api.melonity.gg", "/price")
                            )
                          );
                        case 13:
                          return (n = t.sent), t.abrupt("return", n.data);
                        case 17:
                          return (
                            (t.prev = 17),
                            (t.t1 = t.catch(0)),
                            console.error(t.t1),
                            t.abrupt("return", null)
                          );
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [
                    [0, 17],
                    [2, 8],
                  ]
                );
              })
            )();
          },
        },
        s = {};
    },
    447: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return o;
        }),
        n.d(t, "mutations", function () {
          return s;
        }),
        n.d(t, "actions", function () {
          return u;
        }),
        n.d(t, "getters", function () {
          return c;
        });
      var r = n(7);
      function a(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return i(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? i(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var o,
          s = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (u = !0), (o = e);
          },
          f: function () {
            try {
              s || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          },
        };
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n(2), n(12), n(13), n(14), n(3), n(35), n(28), n(29), n(27);
      var o = function () {
          return {
            products: null,
            shoppingArea: "global",
            currencyCode: "usd",
            currencySymbol: "$",
          };
        },
        s = {
          setProducts: function (e, t) {
            e.products = t;
          },
          setShoppingArea: function (e, t) {
            e.shoppingArea = t;
          },
          setCurrencyData: function (e, t) {
            var n = t.code,
              r = t.symbol;
            (e.currencyCode = n), (e.currencySymbol = r);
          },
        },
        u = {
          createTrialTransaction: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            e.$axios.get(
                              "".concat(
                                "https://api.melonity.gg",
                                "/product/buyTrialInstantly"
                              )
                            )
                          );
                        case 3:
                          return t.abrupt("return", t.sent);
                        case 6:
                          return (
                            (t.prev = 6),
                            (t.t0 = t.catch(0)),
                            console.error(t.t0),
                            t.abrupt("return", null)
                          );
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 6]]
                );
              })
            )();
          },
          get: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            e.$axios.get(
                              "".concat("https://api.melonity.gg", "/product")
                            )
                          );
                        case 3:
                          return t.abrupt("return", t.sent);
                        case 6:
                          return (
                            (t.prev = 6),
                            (t.t0 = t.catch(0)),
                            console.error(t.t0),
                            t.abrupt("return", null)
                          );
                        case 10:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 6]]
                );
              })
            )();
          },
        },
        c = {
          getCurrencySymbol: function (e) {
            return e.currencySymbol;
          },
          getCurrencyCode: function (e) {
            return e.currencyCode;
          },
          getAvailableProducts: function (e) {
            return e.products
              .filter(function (t) {
                return t.product_region === e.shoppingArea;
              })
              .filter(function (e) {
                return !e.product_params || "trial" !== e.product_params.type;
              });
          },
          getAvailableSubscriptions: function (e) {
            return e.products
              .filter(function (t) {
                return (
                  "subscription" === t.product_type &&
                  t.product_region === e.shoppingArea &&
                  "trial" !== t.product_params.type
                );
              })
              .sort(function (e, t) {
                return e.product_params.days - t.product_params.days;
              });
          },
          getSubscriptionByDaysCount: function (e, t) {
            return function (e) {
              var n,
                r = a(t.getAvailableSubscriptions);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value;
                  if (i.product_params.days === e) return i;
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              return null;
            };
          },
        };
    },
    448: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return u;
        }),
        n.d(t, "getters", function () {
          return c;
        }),
        n.d(t, "actions", function () {
          return l;
        }),
        n.d(t, "mutations", function () {
          return f;
        });
      var r = n(19),
        a = n(47),
        i = n(7);
      function o(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return s(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? s(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (u = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n(2), n(64), n(12), n(13), n(14), n(3), n(35), n(28), n(29), n(27);
      var u = function () {
          return { ordering: 0, chats: [], dialogs: [] };
        },
        c = {
          dialogs: function (e) {
            return e.dialogs;
          },
        },
        l = {
          loadDialogs: function (e) {
            var t = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          Object(a.a)(e),
                          n.abrupt(
                            "return",
                            t.$axios
                              .get(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/message/getDialogs"
                                ),
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                }
                              )
                              .then(function (e) {
                                return 200 !== e.status
                                  ? {
                                      status: !1,
                                      errors: [
                                        "Unknown status: ".concat(e.status),
                                      ],
                                    }
                                  : (t.commit(
                                      "support/addDialogs",
                                      e.data.dialogs
                                    ),
                                    { status: !0, data: e.data });
                              })
                          )
                        );
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          loadMessages: function (e, t) {
            var n = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function r() {
                var i, o;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          Object(a.a)(e),
                          (i = t.dialog_id),
                          null === (o = t.last_message_id) && (o = 0),
                          r.abrupt(
                            "return",
                            n.$axios
                              .get(
                                ""
                                  .concat(
                                    "https://api.melonity.gg",
                                    "/message?dialog_id="
                                  )
                                  .concat(i, "&offset=")
                                  .concat(o),
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                }
                              )
                              .then(function (e) {
                                return 200 !== e.status
                                  ? {
                                      status: !1,
                                      errors: [
                                        "Unknown status: ".concat(e.status),
                                      ],
                                    }
                                  : !0 === e.data.status
                                  ? (n.commit("support/addMessages", {
                                      dialog_id: i,
                                      messages: e.data.messages,
                                    }),
                                    { status: !0, data: e.data })
                                  : { status: !1, error: e.data.error };
                              })
                          )
                        );
                      case 4:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          sendMessage: function (e, t) {
            var n = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function r() {
                var i, o, s, u;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          Object(a.a)(e),
                          (i = t.dialog_id),
                          (o = t.message),
                          (s = t.random_id),
                          (u = t.attachments),
                          r.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/message"
                                ),
                                {
                                  dialog_id: i,
                                  body: o,
                                  random_id: s,
                                  attachments: u,
                                },
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                }
                              )
                              .then(function (e) {
                                return 200 !== e.status
                                  ? {
                                      status: !1,
                                      errors: [
                                        "Unknown status: ".concat(e.status),
                                      ],
                                    }
                                  : { status: !0, data: e.data };
                              })
                          )
                        );
                      case 3:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        },
        f = {
          addDialogs: function (e, t) {
            var n,
              a = this,
              i = e.ordering + 1;
            Array.isArray(t) || (t = [t]),
              t.forEach(function (e) {
                (e.ordering = i++),
                  e.message && a.commit("messages/addMessages", e.message),
                  e.messages && a.commit("messages/addMessages", e.messages);
              }),
              (t = t.filter(function (t) {
                return !e.dialogs.find(function (e) {
                  return e.id === t.id;
                });
              })),
              (n = e.dialogs).push.apply(
                n,
                Object(r.a)(
                  t.sort(function (e, t) {
                    return e.ordering - t.ordering;
                  })
                )
              );
          },
          pushDialogToTop: function (e, t) {
            var n = e.dialogs.find(function (e) {
              return e.id === t;
            });
            n &&
              ((n.ordering = e.ordering),
              (e.dialogs = e.dialogs.sort(function (e, t) {
                return e.ordering - t.ordering;
              })),
              e.ordering--);
          },
          addMessages: function (e, t) {
            var n,
              r = t.dialog_id,
              a = t.messages,
              i = t.dialog;
            Array.isArray(a) || (a = [a]),
              (r = null !== (n = r) && void 0 !== n ? n : i.id);
            var s = e.dialogs.find(function (e) {
              return e.id === r;
            });
            if (!s) {
              if (!i) return;
              this.commit("support/addDialogs", i);
            }
            s ||
              (s = e.dialogs.find(function (e) {
                return e.id === r;
              }));
            var u,
              c = o(a);
            try {
              for (c.s(); !(u = c.n()).done; ) {
                var l = u.value;
                l.dialog_id || (l.dialog_id = r);
              }
            } catch (e) {
              c.e(e);
            } finally {
              c.f();
            }
            this.commit("messages/addMessages", a);
          },
        };
    },
    449: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "state", function () {
          return c;
        }),
        n.d(t, "mutations", function () {
          return l;
        }),
        n.d(t, "getters", function () {
          return f;
        }),
        n.d(t, "actions", function () {
          return g;
        });
      var r = n(47),
        a = n(7),
        i = n(18),
        o = (n(27), n(4), n(450), n(13), n(42), n(43), n(8)),
        s = n(346),
        u = n.n(s),
        c = function () {
          return { user: null, access_token: null };
        },
        l = {
          set: function (e, t) {
            t && "object" === Object(i.a)(t) && 0 !== Object.keys(t).length
              ? (e.user = t)
              : (e.user = null);
          },
          setToken: function (e, t) {
            t && "object" === Object(i.a)(t) && (t = t.access_token),
              (e.access_token = t),
              t
                ? (this.$cookies.set("auth", { access_token: t }),
                  this.$axios.setToken(t, "Bearer"))
                : (this.$cookies.remove("auth"), this.$axios.setToken(null));
          },
        },
        f = {
          user: function (e) {
            return e.user;
          },
          userID: function (e) {
            return e.user.id;
          },
          token: function (e) {
            return e.access_token;
          },
          subscriptionPauseMaxDaysCount: function (e) {
            var t = o.default.moment
              .utc(e.user.expires_at)
              .diff(o.default.moment(), "days");
            return Math.min(Math.floor(t / 2), 3);
          },
          getSubscriptionState: function (e) {
            return e.user.subscription_frozen_length
              ? 1
              : Date.parse(e.user.subscription_next_froze_date) > Date.now()
              ? 2
              : Date.parse(e.user.expires_at) < Date.now()
              ? 0
              : Date.parse(e.user.expires_at) - Date.now() < 6048e5
              ? 4
              : 3;
          },
          expires_at: function (e) {
            return e.user.expires_at
              ? o.default.moment.utc(e.user.expires_at)
              : null;
          },
        },
        g = {
          registerAndPay: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function a() {
                var i, o, s;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          Object(r.a)(e),
                          (i = t.email),
                          (o = t.password),
                          (s = t.transactionId),
                          a.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/auth/registerAndPay"
                                ),
                                { email: i, password: o, transaction_id: s },
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                }
                              )
                              .then(function (e) {
                                if (200 !== e.status)
                                  return {
                                    status: !1,
                                    errors: [
                                      "Unknown status: ".concat(e.status),
                                    ],
                                  };
                                var t = { access_token: e.data.access_token };
                                n.commit("user/setToken", t);
                                var r = e.data.user;
                                return (
                                  n.commit("user/set", r),
                                  { status: !0, data: e.data }
                                );
                              })
                              .catch(function (e) {
                                return (
                                  console.error(e),
                                  e.response && 422 === e.response.status
                                    ? {
                                        status: !1,
                                        errors: Object.values(
                                          e.response.data.errors
                                        ),
                                      }
                                    : {
                                        status: !1,
                                        errors: [
                                          "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°: " + e.toString(),
                                        ],
                                      }
                                );
                              })
                          )
                        );
                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          changePassword: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function a() {
                var i, o;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          Object(r.a)(e),
                          (i = t.old_password),
                          (o = t.new_password),
                          a.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/user/password/change"
                                ),
                                { old_password: i, new_password: o },
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json",
                                  },
                                }
                              )
                              .then(function (e) {
                                return 200 !== e.status
                                  ? {
                                      status: !1,
                                      errors: [
                                        "Unknown status: ".concat(e.status),
                                      ],
                                    }
                                  : { status: !0, data: e.data };
                              })
                              .catch(function (e) {
                                return (
                                  console.error(e),
                                  e.response && 422 === e.response.status
                                    ? {
                                        status: !1,
                                        errors: Object.values(
                                          e.response.data.errors
                                        ),
                                      }
                                    : {
                                        status: !1,
                                        errors: [
                                          "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°: " + e.toString(),
                                        ],
                                      }
                                );
                              })
                          )
                        );
                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          disableAutorenewal: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          e.$axios
                            .post(
                              "".concat(
                                "https://api.melonity.gg",
                                "/user/subscription/disableAutorenewal"
                              )
                            )
                            .then(function (e) {
                              return 200 !== e.status
                                ? {
                                    status: !1,
                                    message: "Unknown status: ".concat(
                                      e.status
                                    ),
                                  }
                                : e.data;
                            })
                            .then(e.dispatch("retrieveFrontendData"))
                            .catch(function (e) {
                              return { status: !1, message: e.message };
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          pauseSubscription: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          e.$axios
                            .post(
                              "".concat(
                                "https://api.melonity.gg",
                                "/user/subscription/pause"
                              )
                            )
                            .then(function (t) {
                              return 200 !== t.status
                                ? {
                                    status: !1,
                                    message: "Unknown status: ".concat(
                                      t.status
                                    ),
                                  }
                                : (e.commit("user/set", t.data.user), t.data);
                            })
                            .catch(function (e) {
                              return { status: !1, message: e.message };
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          unpauseSubscription: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          e.$axios
                            .post(
                              "".concat(
                                "https://api.melonity.gg",
                                "/user/subscription/unpause"
                              )
                            )
                            .then(function (t) {
                              return 200 !== t.status
                                ? {
                                    status: !1,
                                    message: "Unknown status: ".concat(
                                      t.status
                                    ),
                                  }
                                : (e.commit("user/set", t.data.user), t.data);
                            })
                            .catch(function (e) {
                              return { status: !1, message: e.message };
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          resetHwid: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          e.$axios
                            .post(
                              "".concat(
                                "https://api.melonity.gg",
                                "/user/hwid/reset"
                              )
                            )
                            .then(function (t) {
                              return 200 !== t.status
                                ? {
                                    status: !1,
                                    message: "Unknown status: ".concat(
                                      t.status
                                    ),
                                  }
                                : (e.commit("user/set", t.data.user), t.data);
                            })
                            .catch(function (e) {
                              return { status: !1, message: e.message };
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          fp: function () {
            return Object(a.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new Promise(function (e) {
                            u.a.get(function (t) {
                              e(t);
                            });
                          })
                        );
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          auth: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function r() {
                var i, o, s;
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          e.dispatch,
                          (i = t.login),
                          (o = t.password),
                          (s = t.recaptchaToken),
                          r.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat("https://api.melonity.gg", "/au1h"),
                                { login: i, password: o, recaptchaToken: s }
                              )
                              .then(
                                (function () {
                                  var e = Object(a.a)(
                                    regeneratorRuntime.mark(function e(t) {
                                      var r, a;
                                      return regeneratorRuntime.wrap(function (
                                        e
                                      ) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (!t.data.access_token) {
                                                e.next = 9;
                                                break;
                                              }
                                              return (
                                                (r = {
                                                  access_token:
                                                    t.data.access_token,
                                                }),
                                                n.commit("user/setToken", r),
                                                (a = t.data.user),
                                                n.commit("user/set", a),
                                                setTimeout(function () {
                                                  n.dispatch(
                                                    "retrieveFrontendData"
                                                  );
                                                }),
                                                e.abrupt("return", {
                                                  status: !0,
                                                  user: a,
                                                })
                                              );
                                            case 9:
                                              return e.abrupt("return", {
                                                status: !1,
                                                errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                              });
                                            case 10:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })(),
                                function (e) {
                                  return (
                                    console.log(e),
                                    422 === e.response.status
                                      ? {
                                          status: !1,
                                          errors: e.response.data.errors,
                                        }
                                      : 401 === e.response.status
                                      ? {
                                          status: !1,
                                          errors: {
                                            login: [
                                              "Ð’ Ð½Ð°ÑˆÐµÐ¹ Ð±Ð°Ð·Ðµ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð½ÐµÑ‚ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð»Ð¾Ð³Ð¸Ð½Ð¾Ð¼/Ð¿Ð°Ñ€Ð¾Ð»ÐµÐ¼",
                                            ],
                                          },
                                        }
                                      : 403 === e.response.status
                                      ? {
                                          status: !1,
                                          errors: {
                                            login: [
                                              "User was banned by service: test ban. Information about ban was sent to your email.",
                                            ],
                                          },
                                        }
                                      : (console.log(e.response),
                                        {
                                          status: !1,
                                          errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                        })
                                  );
                                }
                              )
                          )
                        );
                      case 3:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          logout: function () {
            var e = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          e.commit("user/setToken", null),
                          e.commit("user/set", null),
                          setTimeout(function () {
                            e.dispatch("retrieveFrontendData");
                          }),
                          t.abrupt("return", !0)
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          register: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function a() {
                var i, o, s, u;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          Object(r.a)(e),
                          (i = t.login),
                          (o = t.password),
                          (s = t.email),
                          (u = t.recaptchaToken),
                          a.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/auth/register"
                                ),
                                {
                                  login: i,
                                  email: s,
                                  password: o,
                                  recaptchaToken: u,
                                }
                              )
                              .then(
                                function (e) {
                                  if (e.data.access_token) {
                                    var t = {
                                      access_token: e.data.access_token,
                                    };
                                    n.commit("user/setToken", t);
                                    var r = e.data.user;
                                    return (
                                      n.commit("user/set", r),
                                      setTimeout(function () {
                                        n.dispatch("retrieveFrontendData");
                                      }),
                                      { status: !0, user: r }
                                    );
                                  }
                                  return {
                                    status: !1,
                                    errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                  };
                                },
                                function (e) {
                                  return 422 === e.response.status
                                    ? {
                                        status: !1,
                                        errors: e.response.data.errors,
                                      }
                                    : (console.log(e.response),
                                      {
                                        status: !1,
                                        errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                      });
                                }
                              )
                          )
                        );
                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          sendReset: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function a() {
                var i, o;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          Object(r.a)(e),
                          (i = t.email),
                          (o = t.recaptchaToken),
                          a.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/auth/reset"
                                ),
                                { email: i, recaptchaToken: o }
                              )
                              .then(
                                function (e) {
                                  return !0 === e.data.status
                                    ? e.data
                                    : {
                                        status: !1,
                                        errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                      };
                                },
                                function (e) {
                                  return 422 === e.response.status
                                    ? {
                                        status: !1,
                                        errors: e.response.data.errors,
                                      }
                                    : (console.error(e.response),
                                      {
                                        status: !1,
                                        errors: { general: [e.toString()] },
                                      });
                                }
                              )
                          )
                        );
                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          validateResetCode: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function a() {
                var i, o, s;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          Object(r.a)(e),
                          (i = t.email),
                          (o = t.resetCode),
                          (s = t.recaptchaToken),
                          a.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/auth/validateResetCode"
                                ),
                                { email: i, resetCode: o, recaptchaToken: s }
                              )
                              .then(
                                function (e) {
                                  return !0 === e.data.status
                                    ? e.data
                                    : {
                                        status: !1,
                                        errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                      };
                                },
                                function (e) {
                                  return 422 === e.response.status
                                    ? {
                                        status: !1,
                                        errors: e.response.data.errors,
                                      }
                                    : (console.error(e.response),
                                      {
                                        status: !1,
                                        errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                      });
                                }
                              )
                          )
                        );
                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          setPasswordReset: function (e, t) {
            var n = this;
            return Object(a.a)(
              regeneratorRuntime.mark(function a() {
                var i, o, s, u;
                return regeneratorRuntime.wrap(function (a) {
                  for (;;)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          Object(r.a)(e),
                          (i = t.email),
                          (o = t.resetCode),
                          (s = t.password),
                          (u = t.recaptchaToken),
                          a.abrupt(
                            "return",
                            n.$axios
                              .post(
                                "".concat(
                                  "https://api.melonity.gg",
                                  "/auth/setPasswordReset"
                                ),
                                {
                                  email: i,
                                  resetCode: o,
                                  password: s,
                                  recaptchaToken: u,
                                }
                              )
                              .then(
                                function (e) {
                                  return !0 === e.data.status
                                    ? e.data
                                    : {
                                        status: !1,
                                        errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                      };
                                },
                                function (e) {
                                  return 422 === e.response.status
                                    ? {
                                        status: !1,
                                        errors: e.response.data.errors,
                                      }
                                    : (console.error(e.response),
                                      {
                                        status: !1,
                                        errors: ["ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°"],
                                      });
                                }
                              )
                          )
                        );
                      case 3:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
        };
    },
    485: function (e, t, n) {
      "use strict";
      n(206);
    },
    486: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        "@media(max-width:529px){.mini-mobile[data-v-d0c17a7a]{padding:4px}}.block[data-v-d0c17a7a]{width:100%}.block[data-v-d0c17a7a],button[data-v-d0c17a7a]{display:inline-block}button[data-v-d0c17a7a]{padding:12px 32px;background-image:linear-gradient(-90deg,#eb2e7d,#e82834);color:#fff;transition:all .3s;border:1px solid transparent}button.disabled[data-v-d0c17a7a]{cursor:not-allowed;background-image:none;background-color:#2b2b35;color:hsla(0,0%,100%,.5)}button.disabled[data-v-d0c17a7a]:hover{box-shadow:none}button[data-v-d0c17a7a]:hover{box-shadow:0 0 15px rgba(244,21,75,.5)}button.outline[data-v-d0c17a7a]{background:transparent;border:1px solid #eb2e7d;transition:box-shadow .3s}button.outline[data-v-d0c17a7a]:hover{box-shadow:0 0 15px hsla(0,0%,100%,.5)}button.g-blue[data-v-d0c17a7a]{background-image:linear-gradient(-30deg,#2e4ceb,#28a3e8)}button.g-blue.disabled[data-v-d0c17a7a]{cursor:not-allowed;background-image:none;background-color:#2b2b35;color:hsla(0,0%,100%,.5)}button.g-blue.disabled[data-v-d0c17a7a]:hover{box-shadow:none}button.g-blue[data-v-d0c17a7a]:hover{box-shadow:0 0 15px rgba(46,76,235,.5)}.loading[data-v-d0c17a7a]{cursor:wait}.loading[data-v-d0c17a7a]:hover{box-shadow:none}@-webkit-keyframes dot-keyframes-data-v-d0c17a7a{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}@keyframes dot-keyframes-data-v-d0c17a7a{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}.loading-dots[data-v-d0c17a7a]{text-align:center;width:100%}.loading-dots--dot[data-v-d0c17a7a]{-webkit-animation:dot-keyframes-data-v-d0c17a7a .75s ease-in-out infinite;animation:dot-keyframes-data-v-d0c17a7a .75s ease-in-out infinite;background-color:#fff;border-radius:10px;display:inline-block;height:8px;width:8px}.loading-dots--dot[data-v-d0c17a7a]:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.loading-dots--dot[data-v-d0c17a7a]:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.btn-trial-try[data-v-d0c17a7a]{color:#f9547a;text-shadow:0 0 15px rgba(249,84,122,.6)}",
        "",
      ]),
        (e.exports = r);
    },
    487: function (e, t, n) {
      "use strict";
      n(207);
    },
    488: function (e, t, n) {
      var r = n(33)(!1);
      r.push([
        e.i,
        ".input-container.disabled[data-v-099bb1e3]{cursor:not-allowed}.input-container.disabled input[data-v-099bb1e3]{border:1px solid #3e3e3e;cursor:not-allowed}.block[data-v-099bb1e3]{width:100%}.with-suffix-icon>input[data-v-099bb1e3]{padding-right:36px!important}.with-suffix-icon>.suffix-icon[data-v-099bb1e3]{position:absolute;right:16px;top:10px;transition:all .3s}.input-container[data-v-099bb1e3]{position:relative}.input-container input[data-v-099bb1e3]{background-color:#16161e;border:1px solid #16161e;border-radius:3px;color:#c1bbc9;font-size:16px;width:100%;padding:13px 30px 13px 13px}.input-container input.inline[data-v-099bb1e3]{margin-right:0}.input-container .icon[data-v-099bb1e3]{position:absolute;left:16px;top:10px;opacity:.3;transition:all .3s}.input-container.with--icon input[data-v-099bb1e3]{padding-left:52px}.input-container.focused .icon[data-v-099bb1e3]{opacity:1}.inline[data-v-099bb1e3]{width:auto;display:inline-block;margin-right:24px}.gray[data-v-099bb1e3]{background-color:#333341!important;border-color:#333341!important;border-radius:5px;color:#fff!important}.gray[data-v-099bb1e3]::-moz-placeholder{color:#fff}.gray[data-v-099bb1e3]:-ms-input-placeholder{color:#fff}.gray[data-v-099bb1e3]::placeholder{color:#fff}",
        "",
      ]),
        (e.exports = r);
    },
    491: function (e, t, n) {
      var r = {
        "./af": 209,
        "./af.js": 209,
        "./ar": 210,
        "./ar-dz": 211,
        "./ar-dz.js": 211,
        "./ar-kw": 212,
        "./ar-kw.js": 212,
        "./ar-ly": 213,
        "./ar-ly.js": 213,
        "./ar-ma": 214,
        "./ar-ma.js": 214,
        "./ar-sa": 215,
        "./ar-sa.js": 215,
        "./ar-tn": 216,
        "./ar-tn.js": 216,
        "./ar.js": 210,
        "./az": 217,
        "./az.js": 217,
        "./be": 218,
        "./be.js": 218,
        "./bg": 219,
        "./bg.js": 219,
        "./bm": 220,
        "./bm.js": 220,
        "./bn": 221,
        "./bn-bd": 222,
        "./bn-bd.js": 222,
        "./bn.js": 221,
        "./bo": 223,
        "./bo.js": 223,
        "./br": 224,
        "./br.js": 224,
        "./bs": 225,
        "./bs.js": 225,
        "./ca": 226,
        "./ca.js": 226,
        "./cs": 227,
        "./cs.js": 227,
        "./cv": 228,
        "./cv.js": 228,
        "./cy": 229,
        "./cy.js": 229,
        "./da": 230,
        "./da.js": 230,
        "./de": 231,
        "./de-at": 232,
        "./de-at.js": 232,
        "./de-ch": 233,
        "./de-ch.js": 233,
        "./de.js": 231,
        "./dv": 234,
        "./dv.js": 234,
        "./el": 235,
        "./el.js": 235,
        "./en-au": 236,
        "./en-au.js": 236,
        "./en-ca": 237,
        "./en-ca.js": 237,
        "./en-gb": 238,
        "./en-gb.js": 238,
        "./en-ie": 239,
        "./en-ie.js": 239,
        "./en-il": 240,
        "./en-il.js": 240,
        "./en-in": 241,
        "./en-in.js": 241,
        "./en-nz": 242,
        "./en-nz.js": 242,
        "./en-sg": 243,
        "./en-sg.js": 243,
        "./eo": 244,
        "./eo.js": 244,
        "./es": 245,
        "./es-do": 246,
        "./es-do.js": 246,
        "./es-mx": 247,
        "./es-mx.js": 247,
        "./es-us": 248,
        "./es-us.js": 248,
        "./es.js": 245,
        "./et": 249,
        "./et.js": 249,
        "./eu": 250,
        "./eu.js": 250,
        "./fa": 251,
        "./fa.js": 251,
        "./fi": 252,
        "./fi.js": 252,
        "./fil": 253,
        "./fil.js": 253,
        "./fo": 254,
        "./fo.js": 254,
        "./fr": 255,
        "./fr-ca": 256,
        "./fr-ca.js": 256,
        "./fr-ch": 257,
        "./fr-ch.js": 257,
        "./fr.js": 255,
        "./fy": 258,
        "./fy.js": 258,
        "./ga": 259,
        "./ga.js": 259,
        "./gd": 260,
        "./gd.js": 260,
        "./gl": 261,
        "./gl.js": 261,
        "./gom-deva": 262,
        "./gom-deva.js": 262,
        "./gom-latn": 263,
        "./gom-latn.js": 263,
        "./gu": 264,
        "./gu.js": 264,
        "./he": 265,
        "./he.js": 265,
        "./hi": 266,
        "./hi.js": 266,
        "./hr": 267,
        "./hr.js": 267,
        "./hu": 268,
        "./hu.js": 268,
        "./hy-am": 269,
        "./hy-am.js": 269,
        "./id": 270,
        "./id.js": 270,
        "./is": 271,
        "./is.js": 271,
        "./it": 272,
        "./it-ch": 273,
        "./it-ch.js": 273,
        "./it.js": 272,
        "./ja": 274,
        "./ja.js": 274,
        "./jv": 275,
        "./jv.js": 275,
        "./ka": 276,
        "./ka.js": 276,
        "./kk": 277,
        "./kk.js": 277,
        "./km": 278,
        "./km.js": 278,
        "./kn": 279,
        "./kn.js": 279,
        "./ko": 280,
        "./ko.js": 280,
        "./ku": 281,
        "./ku.js": 281,
        "./ky": 282,
        "./ky.js": 282,
        "./lb": 283,
        "./lb.js": 283,
        "./lo": 284,
        "./lo.js": 284,
        "./lt": 285,
        "./lt.js": 285,
        "./lv": 286,
        "./lv.js": 286,
        "./me": 287,
        "./me.js": 287,
        "./mi": 288,
        "./mi.js": 288,
        "./mk": 289,
        "./mk.js": 289,
        "./ml": 290,
        "./ml.js": 290,
        "./mn": 291,
        "./mn.js": 291,
        "./mr": 292,
        "./mr.js": 292,
        "./ms": 293,
        "./ms-my": 294,
        "./ms-my.js": 294,
        "./ms.js": 293,
        "./mt": 295,
        "./mt.js": 295,
        "./my": 296,
        "./my.js": 296,
        "./nb": 297,
        "./nb.js": 297,
        "./ne": 298,
        "./ne.js": 298,
        "./nl": 299,
        "./nl-be": 300,
        "./nl-be.js": 300,
        "./nl.js": 299,
        "./nn": 301,
        "./nn.js": 301,
        "./oc-lnc": 302,
        "./oc-lnc.js": 302,
        "./pa-in": 303,
        "./pa-in.js": 303,
        "./pl": 304,
        "./pl.js": 304,
        "./pt": 305,
        "./pt-br": 306,
        "./pt-br.js": 306,
        "./pt.js": 305,
        "./ro": 307,
        "./ro.js": 307,
        "./ru": 308,
        "./ru.js": 308,
        "./sd": 309,
        "./sd.js": 309,
        "./se": 310,
        "./se.js": 310,
        "./si": 311,
        "./si.js": 311,
        "./sk": 312,
        "./sk.js": 312,
        "./sl": 313,
        "./sl.js": 313,
        "./sq": 314,
        "./sq.js": 314,
        "./sr": 315,
        "./sr-cyrl": 316,
        "./sr-cyrl.js": 316,
        "./sr.js": 315,
        "./ss": 317,
        "./ss.js": 317,
        "./sv": 318,
        "./sv.js": 318,
        "./sw": 319,
        "./sw.js": 319,
        "./ta": 320,
        "./ta.js": 320,
        "./te": 321,
        "./te.js": 321,
        "./tet": 322,
        "./tet.js": 322,
        "./tg": 323,
        "./tg.js": 323,
        "./th": 324,
        "./th.js": 324,
        "./tk": 325,
        "./tk.js": 325,
        "./tl-ph": 326,
        "./tl-ph.js": 326,
        "./tlh": 327,
        "./tlh.js": 327,
        "./tr": 328,
        "./tr.js": 328,
        "./tzl": 329,
        "./tzl.js": 329,
        "./tzm": 330,
        "./tzm-latn": 331,
        "./tzm-latn.js": 331,
        "./tzm.js": 330,
        "./ug-cn": 332,
        "./ug-cn.js": 332,
        "./uk": 333,
        "./uk.js": 333,
        "./ur": 334,
        "./ur.js": 334,
        "./uz": 335,
        "./uz-latn": 336,
        "./uz-latn.js": 336,
        "./uz.js": 335,
        "./vi": 337,
        "./vi.js": 337,
        "./x-pseudo": 338,
        "./x-pseudo.js": 338,
        "./yo": 339,
        "./yo.js": 339,
        "./zh-cn": 340,
        "./zh-cn.js": 340,
        "./zh-hk": 341,
        "./zh-hk.js": 341,
        "./zh-mo": 342,
        "./zh-mo.js": 342,
        "./zh-tw": 343,
        "./zh-tw.js": 343,
      };
      function a(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 491);
    },
    56: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return xn;
      }),
        n.d(t, "a", function () {
          return N;
        }),
        n(4),
        n(3),
        n(2),
        n(5),
        n(6);
      var r = n(7),
        a = n(0),
        i = (n(27), n(14), n(11), n(13), n(15), n(8)),
        o = n(57),
        s = n(98),
        u = n(152),
        c = n.n(u),
        l = n(76),
        f = n.n(l),
        g = n(153),
        d = n(31),
        p = n(9);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      "scrollRestoration" in window.history &&
        (Object(p.u)("manual"),
        window.addEventListener("beforeunload", function () {
          Object(p.u)("auto");
        }),
        window.addEventListener("load", function () {
          Object(p.u)("manual");
        }));
      var h = function () {
          return Object(p.m)(n.e(2).then(n.bind(null, 648)));
        },
        v = function () {
          return Object(p.m)(n.e(5).then(n.bind(null, 646)));
        },
        x = function () {
          return Object(p.m)(n.e(7).then(n.bind(null, 649)));
        },
        k = function () {
          return Object(p.m)(n.e(8).then(n.bind(null, 642)));
        },
        y = function () {
          return Object(p.m)(n.e(11).then(n.bind(null, 650)));
        },
        _ = function () {
          return Object(p.m)(n.e(15).then(n.bind(null, 643)));
        },
        w = function () {
          return Object(p.m)(n.e(3).then(n.bind(null, 651)));
        },
        j = function () {
          return Object(p.m)(n.e(4).then(n.bind(null, 652)));
        },
        O = function () {
          return Object(p.m)(n.e(9).then(n.bind(null, 653)));
        },
        P = function () {
          return Object(p.m)(n.e(10).then(n.bind(null, 654)));
        },
        S = function () {
          return Object(p.m)(n.e(12).then(n.bind(null, 644)));
        },
        E = function () {
          return Object(p.m)(n.e(13).then(n.bind(null, 655)));
        },
        C = function () {
          return Object(p.m)(n.e(14).then(n.bind(null, 647)));
        },
        R = function () {
          return Object(p.m)(n.e(6).then(n.bind(null, 645)));
        },
        A = function () {};
      i.default.use(g.a);
      var $ = {
        mode: "history",
        base: "/",
        linkActiveClass: "nuxt-link-active",
        linkExactActiveClass: "nuxt-link-exact-active",
        scrollBehavior: function (e, t, n) {
          var r = !1,
            a = e !== t;
          n
            ? (r = n)
            : a &&
              (function (e) {
                var t = Object(p.g)(e);
                if (1 === t.length) {
                  var n = t[0].options;
                  return !1 !== (void 0 === n ? {} : n).scrollToTop;
                }
                return t.some(function (e) {
                  var t = e.options;
                  return t && t.scrollToTop;
                });
              })(e) &&
              (r = { x: 0, y: 0 });
          var i = window.$nuxt;
          return (
            (!a || (e.path === t.path && e.hash !== t.hash)) &&
              i.$nextTick(function () {
                return i.$emit("triggerScroll");
              }),
            new Promise(function (t) {
              i.$once("triggerScroll", function () {
                if (e.hash) {
                  var n = e.hash;
                  void 0 !== window.CSS &&
                    void 0 !== window.CSS.escape &&
                    (n = "#" + window.CSS.escape(n.substr(1)));
                  try {
                    document.querySelector(n) && (r = { selector: n });
                  } catch (e) {
                    console.warn(
                      "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
                    );
                  }
                }
                t(r);
              });
            })
          );
        },
        routes: [
          { path: "/auth", component: h, name: "auth___ru" },
          { path: "/checkout", component: v, name: "checkout___ru" },
          { path: "/cloud", component: x, name: "cloud___ru" },
          { path: "/en", component: k, name: "index___en" },
          { path: "/profile", component: y, name: "profile___ru" },
          { path: "/trial", component: _, name: "trial___ru" },
          { path: "/auth/register", component: w, name: "auth-register___ru" },
          {
            path: "/auth/restore-password",
            component: j,
            name: "auth-restore-password___ru",
          },
          { path: "/en/auth", component: h, name: "auth___en" },
          { path: "/en/checkout", component: v, name: "checkout___en" },
          { path: "/en/cloud", component: x, name: "cloud___en" },
          { path: "/en/profile", component: y, name: "profile___en" },
          { path: "/en/trial", component: _, name: "trial___en" },
          {
            path: "/profile/billing",
            component: O,
            name: "profile-billing___ru",
          },
          {
            path: "/profile/download",
            component: P,
            name: "profile-download___ru",
          },
          {
            path: "/profile/my-subscription",
            component: S,
            name: "profile-my-subscription___ru",
          },
          {
            path: "/profile/settings",
            component: E,
            name: "profile-settings___ru",
          },
          {
            path: "/profile/support",
            component: C,
            name: "profile-support___ru",
          },
          {
            path: "/en/auth/register",
            component: w,
            name: "auth-register___en",
          },
          {
            path: "/en/auth/restore-password",
            component: j,
            name: "auth-restore-password___en",
          },
          {
            path: "/en/profile/billing",
            component: O,
            name: "profile-billing___en",
          },
          {
            path: "/en/profile/download",
            component: P,
            name: "profile-download___en",
          },
          {
            path: "/en/profile/my-subscription",
            component: S,
            name: "profile-my-subscription___en",
          },
          {
            path: "/en/profile/settings",
            component: E,
            name: "profile-settings___en",
          },
          {
            path: "/en/profile/support",
            component: C,
            name: "profile-support___en",
          },
          { path: "/en/cloud/:slug", component: R, name: "cloud-slug___en" },
          { path: "/cloud/:slug", component: R, name: "cloud-slug___ru" },
          { path: "/", component: k, name: "index___ru" },
        ],
        fallback: !1,
      };
      function T(e, t) {
        var n = (t._app && t._app.basePath) || $.base,
          r = new g.a(b(b({}, $), {}, { base: n })),
          a = r.push;
        r.push = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : A,
            n = arguments.length > 2 ? arguments[2] : void 0;
          return a.call(this, e, t, n);
        };
        var i = r.resolve.bind(r);
        return (
          (r.resolve = function (e, t, n) {
            return "string" == typeof e && (e = Object(d.d)(e)), i(e, t, n);
          }),
          r
        );
      }
      var L = {
          name: "NuxtChild",
          functional: !0,
          props: {
            nuxtChildKey: { type: String, default: "" },
            keepAlive: Boolean,
            keepAliveProps: { type: Object, default: void 0 },
          },
          render: function (e, t) {
            var n = t.parent,
              r = t.data,
              a = t.props,
              i = n.$createElement;
            r.nuxtChild = !0;
            for (
              var o = n,
                s = n.$nuxt.nuxt.transitions,
                u = n.$nuxt.nuxt.defaultTransition,
                c = 0;
              n;

            )
              n.$vnode && n.$vnode.data.nuxtChild && c++, (n = n.$parent);
            r.nuxtChildDepth = c;
            var l = s[c] || u,
              f = {};
            D.forEach(function (e) {
              void 0 !== l[e] && (f[e] = l[e]);
            });
            var g = {};
            I.forEach(function (e) {
              "function" == typeof l[e] && (g[e] = l[e].bind(o));
            });
            var d = g.beforeEnter;
            if (
              ((g.beforeEnter = function (e) {
                if (
                  (window.$nuxt.$nextTick(function () {
                    window.$nuxt.$emit("triggerScroll");
                  }),
                  d)
                )
                  return d.call(o, e);
              }),
              !1 === l.css)
            ) {
              var p = g.leave;
              (!p || p.length < 2) &&
                (g.leave = function (e, t) {
                  p && p.call(o, e), o.$nextTick(t);
                });
            }
            var m = i("routerView", r);
            return (
              a.keepAlive &&
                (m = i("keep-alive", { props: a.keepAliveProps }, [m])),
              i("transition", { props: f, on: g }, [m])
            );
          },
        },
        D = [
          "name",
          "mode",
          "appear",
          "css",
          "type",
          "duration",
          "enterClass",
          "leaveClass",
          "appearClass",
          "enterActiveClass",
          "enterActiveClass",
          "leaveActiveClass",
          "appearActiveClass",
          "enterToClass",
          "leaveToClass",
          "appearToClass",
        ],
        I = [
          "beforeEnter",
          "enter",
          "afterEnter",
          "enterCancelled",
          "beforeLeave",
          "leave",
          "afterLeave",
          "leaveCancelled",
          "beforeAppear",
          "appear",
          "afterAppear",
          "appearCancelled",
        ],
        M = {
          name: "NuxtError",
          props: { error: { type: Object, default: null } },
          computed: {
            statusCode: function () {
              return (this.error && this.error.statusCode) || 500;
            },
            message: function () {
              return this.error.message || "Error";
            },
          },
          head: function () {
            return {
              title: this.message,
              meta: [
                {
                  name: "viewport",
                  content:
                    "width=device-width,initial-scale=1.0,minimum-scale=1.0",
                },
              ],
            };
          },
        },
        z = (n(388), n(21)),
        N = Object(z.a)(
          M,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t;
            return n("div", { staticClass: "__nuxt-error-page" }, [
              n("div", { staticClass: "error" }, [
                n(
                  "svg",
                  {
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "90",
                      height: "90",
                      fill: "#DBE1EC",
                      viewBox: "0 0 48 48",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z",
                      },
                    }),
                  ]
                ),
                e._v(" "),
                n("div", { staticClass: "title" }, [e._v(e._s(e.message))]),
                e._v(" "),
                404 === e.statusCode
                  ? n(
                      "p",
                      { staticClass: "description" },
                      [
                        void 0 === e.$route
                          ? n("a", {
                              staticClass: "error-link",
                              attrs: { href: "/" },
                            })
                          : n(
                              "NuxtLink",
                              { staticClass: "error-link", attrs: { to: "/" } },
                              [e._v("Back to the home page")]
                            ),
                      ],
                      1
                    )
                  : e._e(),
                e._v(" "),
                e._m(0),
              ]),
            ]);
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n("div", { staticClass: "logo" }, [
                n(
                  "a",
                  {
                    attrs: {
                      href: "https://nuxtjs.org",
                      target: "_blank",
                      rel: "noopener",
                    },
                  },
                  [e._v("Nuxt")]
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        ).exports,
        U = n(10),
        q =
          (n(42),
          n(43),
          {
            name: "Nuxt",
            components: { NuxtChild: L, NuxtError: N },
            props: {
              nuxtChildKey: { type: String, default: void 0 },
              keepAlive: Boolean,
              keepAliveProps: { type: Object, default: void 0 },
              name: { type: String, default: "default" },
            },
            errorCaptured: function (e) {
              this.displayingNuxtError &&
                ((this.errorFromNuxtError = e), this.$forceUpdate());
            },
            computed: {
              routerViewKey: function () {
                if (
                  void 0 !== this.nuxtChildKey ||
                  this.$route.matched.length > 1
                )
                  return (
                    this.nuxtChildKey ||
                    Object(p.c)(this.$route.matched[0].path)(this.$route.params)
                  );
                var e = Object(U.a)(this.$route.matched, 1)[0];
                if (!e) return this.$route.path;
                var t = e.components.default;
                if (t && t.options) {
                  var n = t.options;
                  if (n.key)
                    return "function" == typeof n.key
                      ? n.key(this.$route)
                      : n.key;
                }
                return /\/$/.test(e.path)
                  ? this.$route.path
                  : this.$route.path.replace(/\/$/, "");
              },
            },
            beforeCreate: function () {
              i.default.util.defineReactive(
                this,
                "nuxt",
                this.$root.$options.nuxt
              );
            },
            render: function (e) {
              var t = this;
              return this.nuxt.err
                ? this.errorFromNuxtError
                  ? (this.$nextTick(function () {
                      return (t.errorFromNuxtError = !1);
                    }),
                    e("div", {}, [
                      e("h2", "An error occurred while showing the error page"),
                      e(
                        "p",
                        "Unfortunately an error occurred and while showing the error page another error occurred"
                      ),
                      e(
                        "p",
                        "Error details: ".concat(
                          this.errorFromNuxtError.toString()
                        )
                      ),
                      e("nuxt-link", { props: { to: "/" } }, "Go back to home"),
                    ]))
                  : ((this.displayingNuxtError = !0),
                    this.$nextTick(function () {
                      return (t.displayingNuxtError = !1);
                    }),
                    e(N, { props: { error: this.nuxt.err } }))
                : e("NuxtChild", {
                    key: this.routerViewKey,
                    props: this.$props,
                  });
            },
          }),
        B =
          (n(12),
          n(35),
          n(28),
          n(29),
          {
            name: "NuxtLoading",
            data: function () {
              return {
                percent: 0,
                show: !1,
                canSucceed: !0,
                reversed: !1,
                skipTimerCount: 0,
                rtl: !1,
                throttle: 200,
                duration: 5e3,
                continuous: !1,
              };
            },
            computed: {
              left: function () {
                return (
                  !(!this.continuous && !this.rtl) &&
                  (this.rtl
                    ? this.reversed
                      ? "0px"
                      : "auto"
                    : this.reversed
                    ? "auto"
                    : "0px")
                );
              },
            },
            beforeDestroy: function () {
              this.clear();
            },
            methods: {
              clear: function () {
                clearInterval(this._timer),
                  clearTimeout(this._throttle),
                  (this._timer = null);
              },
              start: function () {
                var e = this;
                return (
                  this.clear(),
                  (this.percent = 0),
                  (this.reversed = !1),
                  (this.skipTimerCount = 0),
                  (this.canSucceed = !0),
                  this.throttle
                    ? (this._throttle = setTimeout(function () {
                        return e.startTimer();
                      }, this.throttle))
                    : this.startTimer(),
                  this
                );
              },
              set: function (e) {
                return (
                  (this.show = !0),
                  (this.canSucceed = !0),
                  (this.percent = Math.min(100, Math.max(0, Math.floor(e)))),
                  this
                );
              },
              get: function () {
                return this.percent;
              },
              increase: function (e) {
                return (
                  (this.percent = Math.min(100, Math.floor(this.percent + e))),
                  this
                );
              },
              decrease: function (e) {
                return (
                  (this.percent = Math.max(0, Math.floor(this.percent - e))),
                  this
                );
              },
              pause: function () {
                return clearInterval(this._timer), this;
              },
              resume: function () {
                return this.startTimer(), this;
              },
              finish: function () {
                return (
                  (this.percent = this.reversed ? 0 : 100), this.hide(), this
                );
              },
              hide: function () {
                var e = this;
                return (
                  this.clear(),
                  setTimeout(function () {
                    (e.show = !1),
                      e.$nextTick(function () {
                        (e.percent = 0), (e.reversed = !1);
                      });
                  }, 500),
                  this
                );
              },
              fail: function (e) {
                return (this.canSucceed = !1), this;
              },
              startTimer: function () {
                var e = this;
                this.show || (this.show = !0),
                  void 0 === this._cut &&
                    (this._cut = 1e4 / Math.floor(this.duration)),
                  (this._timer = setInterval(function () {
                    e.skipTimerCount > 0
                      ? e.skipTimerCount--
                      : (e.reversed ? e.decrease(e._cut) : e.increase(e._cut),
                        e.continuous &&
                          (e.percent >= 100 || e.percent <= 0) &&
                          ((e.skipTimerCount = 1), (e.reversed = !e.reversed)));
                  }, 100));
              },
            },
            render: function (e) {
              var t = e(!1);
              return (
                this.show &&
                  (t = e("div", {
                    staticClass: "nuxt-progress",
                    class: {
                      "nuxt-progress-notransition": this.skipTimerCount > 0,
                      "nuxt-progress-failed": !this.canSucceed,
                    },
                    style: { width: this.percent + "%", left: this.left },
                  })),
                t
              );
            },
          }),
        F = Object(z.a)(B, void 0, void 0, !1, null, null, null).exports,
        W =
          (n(390),
          n(392),
          n(394),
          { name: "authorize", middleware: "notAuthenticated" }),
        H =
          (n(397),
          n(399),
          Object(z.a)(
            W,
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r(
                "div",
                { attrs: { id: "app" } },
                [
                  r(
                    "main",
                    [
                      r(
                        "b-container",
                        { staticStyle: { height: "100vh" } },
                        [
                          r(
                            "b-row",
                            {
                              staticClass: "justify-content-center",
                              staticStyle: { height: "100%" },
                            },
                            [
                              r(
                                "b-col",
                                {
                                  staticClass:
                                    "align-items-center justify-content-center",
                                  staticStyle: {
                                    display: "flex",
                                    "flex-direction": "column",
                                  },
                                  attrs: { md: "8" },
                                },
                                [
                                  r(
                                    "nuxt-link",
                                    { attrs: { to: e.localePath("index") } },
                                    [
                                      r("img", {
                                        staticClass: "auth-logo",
                                        attrs: { src: n(396), alt: "" },
                                      }),
                                    ]
                                  ),
                                  e._v(" "),
                                  r(
                                    "div",
                                    { staticClass: "minority-card" },
                                    [r("nuxt")],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  r("footer"),
                  e._v(" "),
                  r("no-ssr", [
                    r("script", { attrs: { type: "text/javascript" } }, [
                      e._v(
                        '\n      (function (m, e, t, r, i, k, a) {\n        m[i] = m[i] || function () {\n          (m[i].a = m[i].a || []).push(arguments)\n        };\n        m[i].l = 1 * new Date();\n        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)\n      })\n      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n      ym(86932894, "init", {\n        clickmap: true,\n        trackLinks: true,\n        accurateTrackBounce: true,\n        webvisor: true\n      });\n    '
                      ),
                    ]),
                    e._v(" "),
                    r("noscript", [
                      r("div", [
                        r("img", {
                          staticStyle: {
                            position: "absolute",
                            left: "-9999px",
                          },
                          attrs: {
                            src: "https://mc.yandex.ru/watch/86932894",
                            alt: "",
                          },
                        }),
                      ]),
                    ]),
                    e._v(" "),
                    r("noscript", [
                      r("div", [
                        r("img", {
                          staticStyle: {
                            position: "absolute",
                            left: "-9999px",
                          },
                          attrs: {
                            src: "https://mc.yandex.ru/watch/56108215",
                            alt: "",
                          },
                        }),
                      ]),
                    ]),
                    e._v(" "),
                    r("script", {
                      attrs: {
                        async: "",
                        src: "https://www.googletagmanager.com/gtag/js?id=UA-134513179-2",
                      },
                    }),
                    e._v(" "),
                    r("script", [
                      e._v(
                        "\n      window.dataLayer = window.dataLayer || [];\n\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n\n      gtag('js', new Date());\n\n      gtag('config', 'UA-134513179-2');\n    "
                      ),
                    ]),
                    e._v(" "),
                    r("script", {
                      attrs: {
                        async: "",
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-656018279",
                      },
                    }),
                    e._v(" "),
                    r("script", [
                      e._v(
                        "\n      window.dataLayer = window.dataLayer || [];\n\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n\n      gtag('js', new Date());\n\n      gtag('config', 'AW-656018279');\n    "
                      ),
                    ]),
                  ]),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "5f3bd686",
            null
          ).exports),
        V =
          (n(401),
          Object(z.a)(
            { name: "cloud" },
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "div",
                { attrs: { id: "cloud-radar-page" } },
                [
                  n("nuxt"),
                  e._v(" "),
                  n("no-ssr", [
                    n("script", { attrs: { type: "text/javascript" } }, [
                      e._v(
                        '\n      (function (m, e, t, r, i, k, a) {\n        m[i] = m[i] || function () {\n          (m[i].a = m[i].a || []).push(arguments)\n        };\n        m[i].l = 1 * new Date();\n        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)\n      })\n      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n      ym(86932894, "init", {\n        clickmap: true,\n        trackLinks: true,\n        accurateTrackBounce: true,\n        webvisor: true\n      });\n    '
                      ),
                    ]),
                    e._v(" "),
                    n("noscript", [
                      n("div", [
                        n("img", {
                          staticStyle: {
                            position: "absolute",
                            left: "-9999px",
                          },
                          attrs: {
                            src: "https://mc.yandex.ru/watch/86932894",
                            alt: "",
                          },
                        }),
                      ]),
                    ]),
                  ]),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "46b445ff",
            null
          ).exports),
        K = (n(79), n(54), n(49), n(114)),
        X = {
          data: function () {
            return { showWarning: !1 };
          },
          components: { LanguageSelector: K.a },
          mounted: function () {
            this.showWarning =
              this.$nuxt.$route.name.startsWith("index__") &&
              (window.location.hostname.includes("minority.gg") ||
                window.location.hostname.includes("localhost"));
          },
        },
        Y =
          (n(406),
          n(408),
          Object(z.a)(
            X,
            function () {
              var e = this,
                t = e.$createElement,
                n = e._self._c || t;
              return n(
                "main",
                [
                  n(
                    "nav",
                    [
                      n(
                        "b-container",
                        [
                          n(
                            "b-row",
                            [
                              n(
                                "b-col",
                                {
                                  staticClass: "nav-flex",
                                  attrs: { md: "12" },
                                },
                                [
                                  n("ul", [
                                    n(
                                      "li",
                                      [
                                        n(
                                          "nuxt-link",
                                          {
                                            attrs: {
                                              to: e.localePath("index"),
                                            },
                                          },
                                          [e._v(e._s(e.$t("home")))]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    n(
                                      "li",
                                      [
                                        n(
                                          "nuxt-link",
                                          {
                                            attrs: {
                                              to: e.localePath(
                                                "profile-my-subscription"
                                              ),
                                            },
                                          },
                                          [e._v(e._s(e.$t("pricing")))]
                                        ),
                                      ],
                                      1
                                    ),
                                    e._v(" "),
                                    n("li", [
                                      n(
                                        "a",
                                        {
                                          attrs: {
                                            href: e.$t("community_link"),
                                            target: "_blank",
                                          },
                                        },
                                        [e._v(e._s(e.$t("community")))]
                                      ),
                                    ]),
                                  ]),
                                  e._v(" "),
                                  n("img", {
                                    staticClass: "logo-image",
                                    attrs: { src: "/logo.png", alt: "" },
                                  }),
                                  e._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "profile-buttons" },
                                    [
                                      n(
                                        "minority-button",
                                        {
                                          staticStyle: {
                                            "margin-right": "4px",
                                          },
                                          attrs: {
                                            to: e.localePath("auth"),
                                            outline: "",
                                            "mini-mobile": "",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.$t("sign_in")) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                      e._v(" "),
                                      n(
                                        "minority-button",
                                        {
                                          attrs: {
                                            to: e.localePath("auth-register"),
                                            "mini-mobile": "",
                                          },
                                        },
                                        [
                                          e._v(
                                            "\n              " +
                                              e._s(e.$t("sign_up")) +
                                              "\n            "
                                          ),
                                        ]
                                      ),
                                      e._v(" "),
                                      n("language-selector", {
                                        staticStyle: { "margin-left": "8px" },
                                      }),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  n("nuxt"),
                  e._v(" "),
                  n("div", { staticClass: "footer-bg" }),
                  e._v(" "),
                  n("no-ssr", [
                    n("script", { attrs: { type: "text/javascript" } }, [
                      e._v(
                        '\n      (function (m, e, t, r, i, k, a) {\n        m[i] = m[i] || function () {\n          (m[i].a = m[i].a || []).push(arguments)\n        };\n        m[i].l = 1 * new Date();\n        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)\n      })\n      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n      ym(86932894, "init", {\n        clickmap: true,\n        trackLinks: true,\n        accurateTrackBounce: true,\n        webvisor: true\n      });\n    '
                      ),
                    ]),
                    e._v(" "),
                    n("noscript", [
                      n("div", [
                        n("img", {
                          staticStyle: {
                            position: "absolute",
                            left: "-9999px",
                          },
                          attrs: {
                            src: "https://mc.yandex.ru/watch/86932894",
                            alt: "",
                          },
                        }),
                      ]),
                    ]),
                    e._v(" "),
                    n("script", {
                      attrs: {
                        async: "",
                        src: "https://www.googletagmanager.com/gtag/js?id=UA-134513179-2",
                      },
                    }),
                    e._v(" "),
                    n("script", [
                      e._v(
                        "\n      window.dataLayer = window.dataLayer || [];\n\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n\n      gtag('js', new Date());\n\n      gtag('config', 'UA-134513179-2');\n    "
                      ),
                    ]),
                    e._v(" "),
                    n("script", {
                      attrs: {
                        async: "",
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-656018279",
                      },
                    }),
                    e._v(" "),
                    n("script", [
                      e._v(
                        "\n      window.dataLayer = window.dataLayer || [];\n\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n\n      gtag('js', new Date());\n\n      gtag('config', 'AW-656018279');\n    "
                      ),
                    ]),
                  ]),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "e79aa33e",
            null
          ).exports),
        G =
          (n(410),
          Object(z.a)(
            { name: "empty" },
            function () {
              var e = this.$createElement,
                t = this._self._c || e;
              return t("main", [t("b-container", [t("nuxt")], 1)], 1);
            },
            [],
            !1,
            null,
            "05daf26f",
            null
          ).exports);
      function J(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Q(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Q(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Q(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var ee = {
          name: "profile",
          middleware: "authenticated",
          components: { LanguageSelector: K.a },
          asyncData: function (e) {
            return { user: e.store.getters["user/user"] };
          },
          created: function () {
            this.links[0].text = this.user.login || this.user.email;
          },
          data: function () {
            var e = this;
            return {
              links: [
                { text: "", icon: "person", url: "profile" },
                {
                  text: "profile.menu.account_settings",
                  icon: "settings",
                  url: "profile-settings",
                },
                {
                  text: "profile.menu.my_subscription",
                  icon: "money",
                  url: "profile-my-subscription",
                },
                {
                  text: "profile.menu.downloads",
                  icon: "download",
                  url: "profile-download",
                },
                {
                  text: "profile.menu.contact_support",
                  icon: "support",
                  url: function () {
                    return e.$i18n.locale.startsWith("en")
                      ? e.localePath("profile-support")
                      : e.$t("profile.menu.contact_support_link");
                  },
                },
                {
                  text: "profile.menu.billing",
                  icon: "billing",
                  url: "profile-billing",
                },
                {
                  text: "profile.menu.logout",
                  icon: "logout",
                  handler: "logoutUser",
                },
              ],
            };
          },
          methods: Z(
            {
              handleClick: function (e) {
                "function" == typeof this[e] && this[e]();
              },
              logoutUser: function () {
                var e = this;
                return Object(r.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.logout();
                          case 2:
                            e.$router.push(e.localePath("auth"));
                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
            },
            Object(o.b)("user", ["logout"])
          ),
          computed: Z(
            {
              getMenuLinks: function () {
                var e,
                  t = [],
                  n = (function (e, t) {
                    var n =
                      ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                    if (!n) {
                      if (
                        Array.isArray(e) ||
                        (n = (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return J(e, t);
                            var n = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? J(e, t)
                                : void 0
                            );
                          }
                        })(e)) ||
                        (t && e && "number" == typeof e.length)
                      ) {
                        n && (e = n);
                        var r = 0,
                          a = function () {};
                        return {
                          s: a,
                          n: function () {
                            return r >= e.length
                              ? { done: !0 }
                              : { done: !1, value: e[r++] };
                          },
                          e: function (e) {
                            throw e;
                          },
                          f: a,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var i,
                      o = !0,
                      s = !1;
                    return {
                      s: function () {
                        n = n.call(e);
                      },
                      n: function () {
                        var e = n.next();
                        return (o = e.done), e;
                      },
                      e: function (e) {
                        (s = !0), (i = e);
                      },
                      f: function () {
                        try {
                          o || null == n.return || n.return();
                        } finally {
                          if (s) throw i;
                        }
                      },
                    };
                  })(this.links);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = e.value;
                    (r = Object.assign({}, r)).url &&
                      "string" == typeof r.url &&
                      (r.url = this.localePath(r.url)),
                      r.url && "function" == typeof r.url && (r.url = r.url()),
                      r.text && (r.text = this.$t(r.text)),
                      t.push(r);
                  }
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
                return t;
              },
              getMenuElementClasses: function (e) {
                return { active: this.$nuxt.$route.path === e.url };
              },
            },
            Object(o.c)("user", ["user"])
          ),
        },
        te =
          (n(413),
          Object(z.a)(
            ee,
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r(
                "div",
                { attrs: { id: "app" } },
                [
                  r(
                    "main",
                    [
                      r(
                        "b-container",
                        { staticClass: "profile-content" },
                        [
                          r(
                            "b-row",
                            {
                              staticClass:
                                "justify-content-center align-items-center",
                              staticStyle: { height: "100%" },
                            },
                            [
                              r(
                                "b-col",
                                { attrs: { md: "3", sm: "12" } },
                                [
                                  r(
                                    "div",
                                    {
                                      staticClass: "logo",
                                      staticStyle: {
                                        width: "100%",
                                        "text-align": "center",
                                        "margin-bottom": "24px",
                                      },
                                    },
                                    [
                                      r(
                                        "nuxt-link",
                                        {
                                          attrs: { to: e.localePath("index") },
                                        },
                                        [
                                          r("img", {
                                            staticStyle: {
                                              width: "auto",
                                              height: "70px",
                                            },
                                            attrs: { src: n(412), alt: "" },
                                          }),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  e._v(" "),
                                  r(
                                    "ul",
                                    { staticClass: "menu" },
                                    e._l(e.getMenuLinks, function (t, n) {
                                      return r(
                                        "li",
                                        { key: "aside_menu_item_" + n },
                                        [
                                          t.url && !t.url.startsWith("https://")
                                            ? r(
                                                "n-link",
                                                {
                                                  class:
                                                    e.getMenuElementClasses,
                                                  attrs: { to: t.url },
                                                },
                                                [
                                                  r("span", {
                                                    staticClass: "icon",
                                                    class: t.icon,
                                                  }),
                                                  e._v(
                                                    "\n                " +
                                                      e._s(t.text) +
                                                      "\n              "
                                                  ),
                                                ]
                                              )
                                            : t.url
                                            ? r(
                                                "a",
                                                {
                                                  class:
                                                    e.getMenuElementClasses,
                                                  attrs: {
                                                    href: t.url,
                                                    target: "_blank",
                                                  },
                                                },
                                                [
                                                  r("span", {
                                                    staticClass: "icon",
                                                    class: t.icon,
                                                  }),
                                                  e._v(
                                                    "\n                " +
                                                      e._s(t.text) +
                                                      "\n              "
                                                  ),
                                                ]
                                              )
                                            : r(
                                                "button",
                                                {
                                                  class:
                                                    e.getMenuElementClasses,
                                                  on: {
                                                    click: function (n) {
                                                      return e.handleClick(
                                                        t.handler
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  r("span", {
                                                    staticClass: "icon",
                                                    class: t.icon,
                                                  }),
                                                  e._v(
                                                    "\n                " +
                                                      e._s(t.text) +
                                                      "\n              "
                                                  ),
                                                ]
                                              ),
                                        ],
                                        1
                                      );
                                    }),
                                    0
                                  ),
                                  e._v(" "),
                                  r("LanguageSelector", {
                                    staticStyle: { background: "transparent" },
                                    attrs: { bgColor: "transparent" },
                                  }),
                                ],
                                1
                              ),
                              e._v(" "),
                              r(
                                "b-col",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    width: "100%",
                                  },
                                  attrs: { md: "9", sm: "12" },
                                },
                                [r("nuxt", { staticStyle: { width: "100%" } })],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  e._v(" "),
                  r("no-ssr", [
                    r("script", { attrs: { type: "text/javascript" } }, [
                      e._v(
                        '\n      (function (m, e, t, r, i, k, a) {\n        m[i] = m[i] || function () {\n          (m[i].a = m[i].a || []).push(arguments)\n        };\n        m[i].l = 1 * new Date();\n        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)\n      })\n      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n      ym(86932894, "init", {\n        clickmap: true,\n        trackLinks: true,\n        accurateTrackBounce: true,\n        webvisor: true\n      });\n    '
                      ),
                    ]),
                    e._v(" "),
                    r("noscript", [
                      r("div", [
                        r("img", {
                          staticStyle: {
                            position: "absolute",
                            left: "-9999px",
                          },
                          attrs: {
                            src: "https://mc.yandex.ru/watch/86932894",
                            alt: "",
                          },
                        }),
                      ]),
                    ]),
                    e._v(" "),
                    r("noscript", [
                      r("div", [
                        r("img", {
                          staticStyle: {
                            position: "absolute",
                            left: "-9999px",
                          },
                          attrs: {
                            src: "https://mc.yandex.ru/watch/56108215",
                            alt: "",
                          },
                        }),
                      ]),
                    ]),
                    e._v(" "),
                    r("script", {
                      attrs: {
                        async: "",
                        src: "https://www.googletagmanager.com/gtag/js?id=UA-134513179-2",
                      },
                    }),
                    e._v(" "),
                    r("script", [
                      e._v(
                        "\n      window.dataLayer = window.dataLayer || [];\n\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n\n      gtag('js', new Date());\n\n      gtag('config', 'UA-134513179-2');\n    "
                      ),
                    ]),
                    e._v(" "),
                    r("script", {
                      attrs: {
                        async: "",
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-656018279",
                      },
                    }),
                    e._v(" "),
                    r("script", [
                      e._v(
                        "\n      window.dataLayer = window.dataLayer || [];\n\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n\n      gtag('js', new Date());\n\n      gtag('config', 'AW-656018279');\n    "
                      ),
                    ]),
                  ]),
                  e._v(" "),
                  r("footer"),
                ],
                1
              );
            },
            [],
            !1,
            null,
            "03ebffc9",
            null
          ).exports);
      function ne(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return re(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? re(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function re(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var ae = {
          _authorize: Object(p.s)(H),
          _cloud: Object(p.s)(V),
          _default: Object(p.s)(Y),
          _empty: Object(p.s)(G),
          _profile: Object(p.s)(te),
        },
        ie = {
          render: function (e, t) {
            var n = e("NuxtLoading", { ref: "loading" }),
              r = e(this.layout || "nuxt"),
              a = e(
                "div",
                { domProps: { id: "__layout" }, key: this.layoutName },
                [r]
              ),
              i = e(
                "transition",
                {
                  props: { name: "layout", mode: "out-in" },
                  on: {
                    beforeEnter: function (e) {
                      window.$nuxt.$nextTick(function () {
                        window.$nuxt.$emit("triggerScroll");
                      });
                    },
                  },
                },
                [a]
              );
            return e("div", { domProps: { id: "__nuxt" } }, [n, i]);
          },
          data: function () {
            return {
              isOnline: !0,
              layout: null,
              layoutName: "",
              nbFetching: 0,
            };
          },
          beforeCreate: function () {
            i.default.util.defineReactive(this, "nuxt", this.$options.nuxt);
          },
          created: function () {
            (this.$root.$options.$nuxt = this),
              (window.$nuxt = this),
              this.refreshOnlineStatus(),
              window.addEventListener("online", this.refreshOnlineStatus),
              window.addEventListener("offline", this.refreshOnlineStatus),
              (this.error = this.nuxt.error),
              (this.context = this.$options.context);
          },
          mounted: function () {
            var e = this;
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        e.$loading = e.$refs.loading;
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          watch: { "nuxt.err": "errorChanged" },
          computed: {
            isOffline: function () {
              return !this.isOnline;
            },
            isFetching: function () {
              return this.nbFetching > 0;
            },
          },
          methods: {
            refreshOnlineStatus: function () {
              void 0 === window.navigator.onLine
                ? (this.isOnline = !0)
                : (this.isOnline = window.navigator.onLine);
            },
            refresh: function () {
              var e = this;
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n, r;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ((n = Object(p.h)(e.$route)).length) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            return (
                              e.$loading.start(),
                              (r = n.map(function (t) {
                                var n = [];
                                if (
                                  (t.$options.fetch &&
                                    t.$options.fetch.length &&
                                    n.push(
                                      Object(p.q)(t.$options.fetch, e.context)
                                    ),
                                  t.$fetch)
                                )
                                  n.push(t.$fetch());
                                else {
                                  var r,
                                    a = ne(
                                      Object(p.e)(t.$vnode.componentInstance)
                                    );
                                  try {
                                    for (a.s(); !(r = a.n()).done; ) {
                                      var o = r.value;
                                      n.push(o.$fetch());
                                    }
                                  } catch (e) {
                                    a.e(e);
                                  } finally {
                                    a.f();
                                  }
                                }
                                return (
                                  t.$options.asyncData &&
                                    n.push(
                                      Object(p.q)(
                                        t.$options.asyncData,
                                        e.context
                                      ).then(function (e) {
                                        for (var n in e)
                                          i.default.set(t.$data, n, e[n]);
                                      })
                                    ),
                                  Promise.all(n)
                                );
                              })),
                              (t.prev = 5),
                              (t.next = 8),
                              Promise.all(r)
                            );
                          case 8:
                            t.next = 15;
                            break;
                          case 10:
                            (t.prev = 10),
                              (t.t0 = t.catch(5)),
                              e.$loading.fail(t.t0),
                              Object(p.k)(t.t0),
                              e.error(t.t0);
                          case 15:
                            e.$loading.finish();
                          case 16:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[5, 10]]
                  );
                })
              )();
            },
            errorChanged: function () {
              if (this.nuxt.err) {
                this.$loading &&
                  (this.$loading.fail && this.$loading.fail(this.nuxt.err),
                  this.$loading.finish && this.$loading.finish());
                var e = (N.options || N).layout;
                "function" == typeof e && (e = e(this.context)),
                  this.setLayout(e);
              }
            },
            setLayout: function (e) {
              return (
                (e && ae["_" + e]) || (e = "default"),
                (this.layoutName = e),
                (this.layout = ae["_" + e]),
                this.layout
              );
            },
            loadLayout: function (e) {
              return (
                (e && ae["_" + e]) || (e = "default"),
                Promise.resolve(ae["_" + e])
              );
            },
          },
          components: { NuxtLoading: F },
        };
      function oe(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      n(16), i.default.use(o.a);
      var se = ["state", "getters", "actions", "mutations"],
        ue = {};
      ((ue = (function (e, t) {
        if ((e = e.default || e).commit)
          throw new Error(
            "[nuxt] ".concat(
              t,
              " should export a method that returns a Vuex instance."
            )
          );
        return "function" != typeof e && (e = Object.assign({}, e)), le(e, t);
      })(n(415), "store/index.js")).modules = ue.modules || {}),
        fe(n(416), "attachments.js"),
        fe(n(417), "discounts.js"),
        fe(n(418), "messages.js"),
        fe(n(419), "prices.js"),
        fe(n(447), "products.js"),
        fe(n(448), "support.js"),
        fe(n(449), "user.js");
      var ce =
        ue instanceof Function
          ? ue
          : function () {
              return new o.a.Store(Object.assign({ strict: !1 }, ue));
            };
      function le(e, t) {
        if (e.state && "function" != typeof e.state) {
          console.warn(
            "'state' should be a method that returns an object in ".concat(t)
          );
          var n = Object.assign({}, e.state);
          e = Object.assign({}, e, {
            state: function () {
              return n;
            },
          });
        }
        return e;
      }
      function fe(e, t) {
        e = e.default || e;
        var n = t.replace(/\.(js|mjs)$/, "").split("/"),
          r = n[n.length - 1],
          a = "store/".concat(t);
        if (
          ((e =
            "state" === r
              ? (function (e, t) {
                  if ("function" != typeof e) {
                    console.warn(
                      "".concat(
                        t,
                        " should export a method that returns an object"
                      )
                    );
                    var n = Object.assign({}, e);
                    return function () {
                      return n;
                    };
                  }
                  return le(e, t);
                })(e, a)
              : le(e, a)),
          se.includes(r))
        ) {
          var i = r;
          de(ge(ue, n, { isProperty: !0 }), e, i);
        } else {
          "index" === r && (n.pop(), (r = n[n.length - 1]));
          var o,
            s = ge(ue, n),
            u = (function (e, t) {
              var n =
                ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return oe(e, t);
                      var n = Object.prototype.toString.call(e).slice(8, -1);
                      return (
                        "Object" === n &&
                          e.constructor &&
                          (n = e.constructor.name),
                        "Map" === n || "Set" === n
                          ? Array.from(e)
                          : "Arguments" === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? oe(e, t)
                          : void 0
                      );
                    }
                  })(e)) ||
                  (t && e && "number" == typeof e.length)
                ) {
                  n && (e = n);
                  var r = 0,
                    a = function () {};
                  return {
                    s: a,
                    n: function () {
                      return r >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[r++] };
                    },
                    e: function (e) {
                      throw e;
                    },
                    f: a,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              }
              var i,
                o = !0,
                s = !1;
              return {
                s: function () {
                  n = n.call(e);
                },
                n: function () {
                  var e = n.next();
                  return (o = e.done), e;
                },
                e: function (e) {
                  (s = !0), (i = e);
                },
                f: function () {
                  try {
                    o || null == n.return || n.return();
                  } finally {
                    if (s) throw i;
                  }
                },
              };
            })(se);
          try {
            for (u.s(); !(o = u.n()).done; ) {
              var c = o.value;
              de(s, e[c], c);
            }
          } catch (e) {
            u.e(e);
          } finally {
            u.f();
          }
          !1 === e.namespaced && delete s.namespaced;
        }
      }
      function ge(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.isProperty,
          a = void 0 !== r && r;
        if (!t.length || (a && 1 === t.length)) return e;
        var i = t.shift();
        return (
          (e.modules[i] = e.modules[i] || {}),
          (e.modules[i].namespaced = !0),
          (e.modules[i].modules = e.modules[i].modules || {}),
          ge(e.modules[i], t, { isProperty: a })
        );
      }
      function de(e, t, n) {
        t &&
          ("state" === n
            ? (e.state = t || e.state)
            : (e[n] = Object.assign({}, e[n], t)));
      }
      var pe = n(358);
      i.default.use(pe.a, {});
      var me = n(18),
        be =
          (n(64),
          n(108),
          n(461),
          {
            COMPONENT_OPTIONS_KEY: "nuxtI18n",
            STRATEGIES: {
              PREFIX: "prefix",
              PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
              PREFIX_AND_DEFAULT: "prefix_and_default",
              NO_PREFIX: "no_prefix",
            },
          }),
        he = {
          vueI18n: {
            fallbackLocale: "en",
            messages: {
              ru: {
                general: {
                  email_is_null: "ÐÐµ ÑƒÐºÐ°Ð·Ð°Ð½",
                  index: {
                    title: "Melonity â€” Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ðµ Ñ‡Ð¸Ñ‚Ñ‹ Ð´Ð»Ñ Dota 2",
                    headline: "Melonity",
                    headline_melonity: "Melonity",
                    title_melonity: "Melonity â€” Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ðµ Ñ‡Ð¸Ñ‚Ñ‹ Ð´Ð»Ñ Dota 2",
                    og: {
                      title: "Melonity â€” Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ðµ Ñ‡Ð¸Ñ‚Ñ‹ Ð´Ð»Ñ Dota 2",
                      description:
                        "Melonity â€” ÑÑ‚Ð¾ Ð¿Ñ€ÐµÐ¼Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ðµ ÑÐºÑ€Ð¸Ð¿Ñ‚Ñ‹ Ð½Ð° Ð´Ð¾Ñ‚Ñƒ. ÐžÐ±ÑˆÐ¸Ñ€Ð½Ñ‹Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð» ÐºÐ¾Ð¼Ð±Ð¾ Ð´Ð»Ñ Ð³ÐµÑ€Ð¾ÐµÐ² Ð¸ Ñ‡Ð°ÑÑ‚Ð¸Ñ‡Ð½Ñ‹Ð¹ Ð¼Ð°Ð¿Ñ…Ð°Ðº. ÐŸÐ¾Ð»ÑƒÑ‡Ð¸Ñ‚Ðµ Ñ‚ÐµÑÑ‚Ð¾Ð²ÑƒÑŽ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ Ð½Ð° 7 Ð´Ð½ÐµÐ¹ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾.",
                      image: "/og/image_ru.jpg",
                    },
                    seo: {
                      description:
                        "Melonity â€” ÑÑ‚Ð¾ Ð¿Ñ€ÐµÐ¼Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ðµ ÑÐºÑ€Ð¸Ð¿Ñ‚Ñ‹ Ð½Ð° Ð´Ð¾Ñ‚Ñƒ. ÐžÐ±ÑˆÐ¸Ñ€Ð½Ñ‹Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð» ÐºÐ¾Ð¼Ð±Ð¾ Ð´Ð»Ñ Ð³ÐµÑ€Ð¾ÐµÐ² Ð¸ Ñ‡Ð°ÑÑ‚Ð¸Ñ‡Ð½Ñ‹Ð¹ Ð¼Ð°Ð¿Ñ…Ð°Ðº. ÐŸÐ¾Ð»ÑƒÑ‡Ð¸Ñ‚Ðµ Ñ‚ÐµÑÑ‚Ð¾Ð²ÑƒÑŽ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ Ð½Ð° 7 Ð´Ð½ÐµÐ¹ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾.!",
                    },
                  },
                },
                index: {
                  video_previews: {
                    title: "Ð’Ð¸Ð´ÐµÐ¾Ð¾Ð±Ð·Ð¾Ñ€Ñ‹",
                    texts: [
                      {
                        title: "Teleport ESP",
                        description: "Ð¢ÐµÐ»ÐµÐ¿Ð¾Ñ€Ñ‚Ñ‹ Ð²Ð¸Ð´Ð½Ñ‹ Ð´Ð°Ð¶Ðµ Ð² Ð¢ÑƒÐ¼Ð°Ð½Ðµ Ð’Ð¾Ð¹Ð½Ñ‹",
                      },
                      {
                        title: "Inventory Changer",
                        description: "Ð˜Ð·Ð¼ÐµÐ½ÑÐ¹Ñ‚Ðµ ÑÐºÐ¸Ð½Ñ‹ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð¶Ð°",
                      },
                      {
                        title: "Jungle ESP",
                        description:
                          "Ð›ÐµÑÐ½Ð¸ÐºÐ¸ Ñ‚ÐµÐ¿ÐµÑ€ÑŒ Ð½Ðµ Ð±ÑƒÐ´ÑƒÑ‚ Ð´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÑ‚ÑŒ Ð½ÐµÑƒÐ´Ð¾Ð±ÑÑ‚Ð²",
                      },
                      {
                        title: "Map Hack",
                        description:
                          "ÐŸÐ¾Ð»ÑƒÑ‡Ð°Ð¹Ñ‚Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑŽ Ð¾ Ð³ÐµÑ€Ð¾ÑÑ… Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²Ð½Ð¸ÐºÐ° Ð½Ð° Ð²ÑÐµÐ¹ ÐºÐ°Ñ€Ñ‚Ðµ",
                      },
                      {
                        title: "Creep Blocker",
                        description: "Ð‘Ð»Ð¾ÐºÐ¸Ñ€ÑƒÐ¹Ñ‚Ðµ ÐºÑ€Ð¸Ð¿Ð¾Ð² ÐºÐ°Ðº Miracle-",
                      },
                      {
                        title: "Dodger",
                        description: "Ð­Ñ‚Ð¾ Ð±ÑƒÐºÐ²Ð°Ð»ÑŒÐ½Ð¾ Ñ‡Ð¸Ñ‚ Ð½Ð° Ð½ÐµÑƒÑÐ·Ð²Ð¸Ð¼Ð¾ÑÑ‚ÑŒ",
                      },
                    ],
                  },
                },
                home: "Ð“Ð»Ð°Ð²Ð½Ð°Ñ",
                pricing: "ÐŸÑ€Ð¸Ð¾Ð±Ñ€ÐµÑÑ‚Ð¸",
                community: "Ð’ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ðµ",
                community_link: "https://vk.com/melonity_gg",
                sign_in: "Ð’Ð¾Ð¹Ñ‚Ð¸",
                sign_up: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚",
                slogan: "ÐŸÐ¾Ñ‡ÑƒÐ²ÑÑ‚Ð²ÑƒÐ¹ Ð²ÐºÑƒÑ Ð¿Ð¾Ð±ÐµÐ´Ñ‹ âœ…",
                slogan_melonity: "Ð›ÑƒÑ‡ÑˆÐ¸Ðµ ÑÐºÑ€Ð¸Ð¿Ñ‚Ñ‹ Ð½Ð° Ð´Ð¾Ñ‚Ñƒ âœ…",
                header_description:
                  "Ð§Ð°ÑÑ‚Ð¸Ñ‡Ð½Ñ‹Ð¹ Ð¼Ð°Ð¿Ñ…Ð°Ðº Ñ Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸ÐµÐ¼ Ð°Ð½Ð¸Ð¼Ð°Ñ†Ð¸Ð¹ Ð²Ñ€Ð°Ð¶ÐµÑÐºÐ¸Ñ… Ð³ÐµÑ€Ð¾ÐµÐ². Ð˜Ð½Ð´Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ Ð²Ð¸Ð´Ð¸Ð¼Ð¾ÑÑ‚Ð¸ Ð³ÐµÑ€Ð¾Ñ Ð´Ð»Ñ  ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ‹ ÑÐ¾Ð¿ÐµÑ€Ð½Ð¸ÐºÐ°, Ð¾Ñ‚Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ðµ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ð¸ Ð¾ Ð²Ñ€Ð°Ð¶ÐµÑÐºÐ¸Ñ… Ð³ÐµÑ€Ð¾ÑÑ… Ð¿Ñ€Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ð¸ ÑÐºÑ€Ñ‹Ñ‚Ñ‹Ñ… ÑÐ¿Ð¾ÑÐ¾Ð±Ð½Ð¾ÑÑ‚ÐµÐ¹ Ð¸ Ð¿Ñ€Ð¾Ñ‡Ð¸Ðµ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸.",
                header_description_melonity:
                  "ÐÐ°Ñˆ Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ð¹ Ñ‡Ð¸Ñ‚ Ð¾Ñ‚ÐºÑ€Ñ‹Ð²Ð°ÐµÑ‚ Ð½ÐµÐ²ÐµÑ€Ð¾ÑÑ‚Ð½Ñ‹Ðµ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚Ð¸ Ð´Ð»Ñ Ð¿Ð¾Ð´Ð½ÑÑ‚Ð¸Ñ Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³Ð°: Ð¾Ñ‚Ð´Ð°Ð»ÐµÐ½Ð¸Ðµ ÐºÐ°Ð¼ÐµÑ€Ñ‹, Ð¿Ð¾Ð´ÑÐ²ÐµÑ‚ÐºÐ° Ð²Ñ€Ð°Ð³Ð¾Ð² ÑÐºÐ²Ð¾Ð·ÑŒ Ñ‚ÑƒÐ¼Ð°Ð½ Ð²Ð¾Ð¹Ð½Ñ‹, Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ ÑƒÐ²Ð¾Ñ€Ð¾Ñ‚ Ð¸ Ð´Ð¾Ð±Ð¸Ð²Ð°Ð½Ð¸Ðµ ÐºÑ€Ð¸Ð¿Ð¾Ð² â€” ÑÑ‚Ð¾ Ð»Ð¸ÑˆÑŒ Ð¼Ð°Ð»Ð°Ñ Ñ‡Ð°ÑÑ‚ÑŒ Ð½Ð°ÑˆÐ¸Ñ… Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¹. ÐÐ¾Ð²Ñ‹Ð¼ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑÐ¼ Ð´Ð¾ÑÑ‚ÑƒÐ¿ÐµÐ½ Ð¿Ñ€Ð¾Ð±Ð½Ñ‹Ð¹ Ð¿ÐµÑ€Ð¸Ð¾Ð´ Ð½Ð° 7 Ð´Ð½ÐµÐ¹.",
                header_get_started: "ÐŸÑ€Ð¸Ð¾Ð±Ñ€ÐµÑÑ‚Ð¸",
                header_price_plan: "Ð¾Ñ‚ %PRICE% Ð² Ð½ÐµÐ´ÐµÐ»ÑŽ",
                our_advantages: "ÐÐ°ÑˆÐ¸ Ð¿Ñ€ÐµÐ¸Ð¼ÑƒÑ‰ÐµÑÑ‚Ð²Ð°",
                advantages: [
                  {
                    headline: "Ð¥ÑƒÐ¼Ð°Ð½Ð°Ð¹Ð·ÐµÑ€",
                    desc: "Ð‘Ð»Ð°Ð³Ð¾Ð´Ð°Ñ€Ñ ÑÑ‚Ð¾Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¸ Ð²ÑÐµ Ð²Ð°ÑˆÐ¸ ÐºÐ»Ð¸ÐºÐ¸ Ñ Ð¾Ñ‚Ð´Ð°Ð»Ñ‘Ð½Ð½Ð¾Ð¹ ÐºÐ°Ð¼ÐµÑ€Ð¾Ð¹ Ð±ÑƒÐ´ÑƒÑ‚ Ð²Ñ‹Ð³Ð»ÑÐ´ÐµÑ‚ÑŒ ÐºÐ°Ðº Ñƒ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾Ð³Ð¾ Ð¸Ð³Ñ€Ð¾ÐºÐ°.",
                    headline_melonity: "Ð¡ÐºÑ€Ð¸Ð¿Ñ‚Ñ‹",
                    desc_melonity:
                      "Ð‘Ð¾Ð»ÐµÐµ 200 ÑÐºÑ€Ð¸Ð¿Ñ‚Ð¾Ð² Ð¿Ñ€ÐµÐ¼Ð¸Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ ÑƒÑ€Ð¾Ð²Ð½Ñ, Ð¾Ð½Ð¸ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚Ð°Ð½Ñ‹ Ð² ÐºÐ¾Ð»Ð»Ð°Ð±Ð¾Ñ€Ð°Ñ†Ð¸Ð¸ Ñ Ð±ÑƒÑÑ‚ÐµÑ€Ð°Ð¼Ð¸.",
                  },
                  {
                    headline: "Ð—Ð°Ñ‰Ð¸Ñ‚Ð°",
                    desc: "ÐÐ°Ñˆ Ð°Ð½Ñ‚Ð¸-Ð²Ð°Ðº Ð¼Ð¾Ð´ÑƒÐ»ÑŒ Ð·Ð°Ñ‰Ð¸Ñ‚Ð¸Ñ‚ Ð²Ð°Ñˆ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚ Ð¾Ñ‚ VAC-Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²ÐºÐ¸ Ð°Ð½Ñ‚Ð¸Ñ‡Ð¸Ñ‚Ð¾Ð¼.",
                    headline_melonity: "Ð—Ð°Ñ‰Ð¸Ñ‚Ð°",
                    desc_melonity:
                      "ÐœÑ‹ Ð¸Ð·ÑƒÑ‡Ð¸Ð»Ð¸ Ñ€Ð°Ð±Ð¾Ñ‚Ñƒ Ð²ÑÐµÐ¹ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹ Ð·Ð°Ñ‰Ð¸Ñ‚Ñ‹ VALVE. Ð—Ð° Ð²ÑÐµ Ð²Ñ€ÐµÐ¼Ñ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ Ð½Ð°ÑˆÐ¸ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ð¸ Ð½Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»Ð¸ Ð½Ð¸ Ð¾Ð´Ð½Ð¾Ð¹ VAC-Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð¾Ð²ÐºÐ¸.",
                  },
                  {
                    headline: "Ð¤ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»",
                    desc: "Ð’ ÑÐ¾Ñ„Ñ‚Ðµ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÐµÐ½ Ð¾Ð±ÑˆÐ¸Ñ€Ð½Ñ‹Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð», ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð¿Ð¾ÑÑ‚Ð¾ÑÐ½Ð½Ð¾ Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÑ‚ÑÑ Ð¸ Ð´Ð¾Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ÑÑ ÑÐºÑ€Ð¸Ð¿Ñ‚ÐµÑ€Ð°Ð¼Ð¸.",
                    headline_melonity: "Ð¡ÐºÐ¸Ð½Ñ‹",
                    desc_melonity:
                      "Ð’ÑÑ‚Ñ€Ð¾ÐµÐ½Ð½Ñ‹Ð¹ Inventory Changer Ð¿Ð¾Ð·Ð²Ð¾Ð»Ð¸Ñ‚ Ð² Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÐºÐ»Ð¸ÐºÐ¾Ð² Ð½Ð°Ð´ÐµÑ‚ÑŒ Ð»ÑŽÐ±Ð¾Ð¹ Ð¿Ð¾Ð½Ñ€Ð°Ð²Ð¸Ð²ÑˆÐ¸Ð¹ÑÑ Ð²Ð°Ð¼ Ð¿Ñ€ÐµÐ´Ð¼ÐµÑ‚, Ð² Ð´Ð¾Ð±Ð°Ð²Ð¾Ðº Ð² Ð½ÐµÐ³Ð¾ Ð¼Ð¾Ð¶Ð½Ð¾ Ð²ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ ÑÐ°Ð¼Ð¾Ñ†Ð²ÐµÑ‚Ñ‹.",
                  },
                  {
                    headline: "Inventory Changer",
                    desc: "ÐÐ°ÑˆÐ° ÑƒÐ½Ð¸ÐºÐ°Ð»ÑŒÐ½Ð°Ñ Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð¿Ð¾Ð·Ð²Ð¾Ð»Ð¸Ñ‚ Ð½Ð°Ð´ÐµÑ‚ÑŒ Ð»ÑŽÐ±Ð¾Ð¹ ÑÐºÐ¸Ð½ Ð½Ðµ Ð²Ñ‹Ñ…Ð¾Ð´Ñ Ð¸Ð· Ð¸Ð³Ñ€Ñ‹, Ð±ÐµÐ· ÐºÐ°ÐºÐ¸Ñ…-Ð»Ð¸Ð±Ð¾ Ð¿Ñ€Ð¾ÑÐ°Ð´Ð¾Ðº FPS Ð¸ Ð¿ÐµÑ€ÐµÐ¿Ð»Ð°Ñ‚Ñ‹ Ð“ÐµÐ¹Ð±Ñƒ.",
                    headline_melonity: "ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ°",
                    desc_melonity:
                      "ÐÐ°ÑˆÐ° Ñ‚ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ° Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ Ð½Ð° Ð²Ð°Ñˆ Ð²Ð¾Ð¿Ñ€Ð¾Ñ Ð·Ð° Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ Ð¼Ð¸Ð½ÑƒÑ‚. ÐœÑ‹ Ð½Ðµ Ð¾ÑÑ‚Ð°Ð²Ð¸Ð¼ Ð²Ð°Ñ Ð² Ð±ÐµÐ´Ðµ Ð¸ Ñ€ÐµÑˆÐ¸Ð¼ Ð»ÑŽÐ±ÑƒÑŽ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ñƒ.",
                  },
                  {
                    headline: "ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ°",
                    desc: "ÐžÐ¿Ñ‹Ñ‚Ð½Ñ‹Ðµ ÑÐ¿ÐµÑ†Ð¸Ð°Ð»Ð¸ÑÑ‚Ñ‹ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ Ð²ÑÐµÐ³Ð´Ð° Ð³Ð¾Ñ‚Ð¾Ð²Ñ‹ Ð¾Ñ‚Ð²ÐµÑ‚Ð¸Ñ‚ÑŒ Ð½Ð° Ð²Ð°ÑˆÐ¸ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ Ð¸ Ð¿Ð¾Ð¼Ð¾Ñ‡ÑŒ Ð² Ñ€ÐµÑˆÐµÐ½Ð¸Ð¸ Ð²Ð¾Ð·Ð½Ð¸ÐºÐ°ÑŽÑ‰Ð¸Ñ… Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼.",
                    headline_melonity: "ÐšÐ°Ñ‡ÐµÑÑ‚Ð²Ð¾",
                    desc_melonity:
                      "ÐœÑ‹ â€” Ð±ÐµÐ·Ð¾Ð³Ð¾Ð²Ð¾Ñ€Ð¾Ñ‡Ð½Ñ‹Ðµ Ð»Ð¸Ð´ÐµÑ€Ñ‹ Ñ€Ñ‹Ð½ÐºÐ°. Ð¢Ñ‹ÑÑÑ‡Ð¸ Ð¿Ð¾Ð»Ð¾Ð¶Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¾Ñ‚Ð·Ñ‹Ð²Ð¾Ð². Ð”ÐµÑÑÑ‚ÐºÐ¸ Ñ‚Ñ‹ÑÑÑ‡ Ð¿Ð¾Ð´Ð½ÑÑ‚Ð¾Ð³Ð¾ Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³Ð°. Ð£Ð±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ ÑÐ°Ð¼Ð¸ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð½Ð°ÑˆÐµÐ¹ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ†Ð¸Ð¸.",
                  },
                  {
                    headline: "ÐšÐ°Ñ‡ÐµÑÑ‚Ð²Ð¾",
                    desc: "Ð’Ð¾ Ð²ÑÐµÑ… Ð¾Ð±Ð»Ð°ÑÑ‚ÑÑ… Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð° Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÑŽÑ‚ Ð¿Ñ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹ ÑÐ²Ð¾ÐµÐ³Ð¾ Ð´ÐµÐ»Ð°, Ð±Ð»Ð°Ð³Ð¾Ð´Ð°Ñ€Ñ Ñ‡ÐµÐ¼Ñƒ Ð²Ñ‹ Ð¿Ð¾Ð»ÑƒÑ‡Ð°ÐµÑ‚Ðµ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚ Ð»ÑƒÑ‡ÑˆÐµÐ³Ð¾ ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ð°.",
                    headline_melonity: "ÐŸÑ€Ð¾ÑÑ‚Ð¾Ñ‚Ð°",
                    desc_melonity:
                      "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¸Ñ‚ÑŒ ÑÐ¾Ñ„Ñ‚ Ð¾Ñ‡ÐµÐ½ÑŒ Ð¿Ñ€Ð¾ÑÑ‚Ð¾, ÑÑ‚Ð¾ Ð·Ð°Ð¹Ð¼ÐµÑ‚ Ð±ÑƒÐºÐ²Ð°Ð»ÑŒÐ½Ð¾ 10 Ð¼Ð¸Ð½ÑƒÑ‚ Ð²Ð°ÑˆÐµÐ³Ð¾ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸. Ð£ Ð½Ð°Ñ ÐºÑƒÑ‡Ð° Ð³Ð¾Ñ‚Ð¾Ð²Ñ‹Ñ… ÑÑ‚Ð°Ñ‚ÐµÐ¹ Ð¸ Ð²Ð¸Ð´ÐµÐ¾ Ð¿Ð¾ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐµ. Ð’Ñ‹ Ñ‚Ð¾Ñ‡Ð½Ð¾ Ð½Ðµ Ð¸ÑÐ¿Ñ‹Ñ‚Ð°ÐµÑ‚Ðµ Ñ ÑÑ‚Ð¸Ð¼ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼.",
                  },
                ],
                premium_subscription: "ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
                premium_subscription_desc:
                  "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð¾Ð´Ð¸Ð½ Ð¸Ð· Ñ‚Ð°Ñ€Ð¸Ñ„Ð¾Ð² Ð¸Ð»Ð¸ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹Ñ‚Ðµ ÑÐ²Ð¾Ð¹ Ð²",
                premium_subscription_desc_link: "ÐšÐ°Ð»ÑŒÐºÑƒÐ»ÑÑ‚Ð¾Ñ€Ðµ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐ¾Ðº",
                subscription_headline: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ° Ð½Ð°",
                subscription_desc: " Ð´Ð½ÐµÐ¹",
                subscription_advantages: [
                  "Ð”Ð¾ÑÑ‚ÑƒÐ¿ ÐºÐ¾ Ð²ÑÐµÐ¼Ñƒ Ñ„ÑƒÐ½ÐºÑ†Ð¸Ð¾Ð½Ð°Ð»Ñƒ",
                  "Ð‘Ñ‹ÑÑ‚Ñ€Ð°Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒ Ð² Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐµ",
                  "ÐŸÐ¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ðµ Ð½ÐµÐ¾ÑÐ¿Ð¾Ñ€Ð¸Ð¼Ð¾Ð³Ð¾ Ð¿Ñ€ÐµÐ¸Ð¼ÑƒÑ‰ÐµÑÑ‚Ð²Ð°",
                  "Ð’Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ Ð·Ð°Ð¼Ð¾Ñ€Ð°Ð¶Ð¸Ð²Ð°Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
                ],
                get_started_btn: "ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ",
                auth: {
                  auth_headline: "ÐÐ²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ",
                  auth_desc: "Ð’Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ Ð² ÑÐ²Ð¾Ð¹ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚ Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð¸ Ð¿Ð°Ñ€Ð¾Ð»Ñ",
                  auth_login: "Ð›Ð¾Ð³Ð¸Ð½ Ð¸Ð»Ð¸ Ðµ-Ð¼Ð°Ð¸Ð»",
                  auth_password: "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ",
                  auth_password_reset_link: "Ð—Ð°Ð±Ñ‹Ð»Ð¸ Ð»Ð¾Ð³Ð¸Ð½ Ð¸Ð»Ð¸ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ?",
                  sign_in: "Ð’Ð¾Ð¹Ñ‚Ð¸",
                  sign_up_link_before: "Ð’ÑÑ‘ ÐµÑ‰Ñ‘ Ð½ÐµÑ‚ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð°?",
                  sign_up_link: "Ð—Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒÑÑ.",
                },
                reset_password: {
                  headline: "Ð’Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ",
                  step_1_text:
                    "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°Ñˆ Ðµ-Ð¼Ð°Ð¸Ð» Ð°Ð´Ñ€ÐµÑ Ð¸ ÑÐ»ÐµÐ´ÑƒÐ¹Ñ‚Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸ÑÐ¼ Ð½Ð° ÑÑ‚Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ.",
                  step_1_button_text: "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
                  step_2_text:
                    "Please enter your email and follow the instructions on this page to reset your password.",
                  step_2_button_text: "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
                  email: "Ð•-Ð¼Ð°Ð¸Ð»",
                  reset_code: "ÐšÐ¾Ð´ Ð¸Ð· Ð¿Ð¸ÑÑŒÐ¼Ð°",
                  new_password: "ÐÐ¾Ð²Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                  submit: "ÐŸÑ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚ÑŒ",
                  back: "Ð’ÐµÑ€Ð½ÑƒÑ‚ÑŒÑÑ Ðº Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸",
                  set_password_btn_text: "Ð£ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                  unknown_error: "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°",
                  enter_code_error: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ð´ Ð¸Ð· Ð¿Ð¸ÑÑŒÐ¼Ð°",
                },
                register: {
                  headline: "Ð¡Ð¾Ð·Ð´Ð°Ñ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚",
                  desc: "Ð¡Ð¾Ð·Ð´Ð°Ð¹Ñ‚Ðµ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾ Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð²Ð¾ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ Ð²ÑÐµÐ¼Ð¸ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÑÐ¼Ð¸ Ñ‡Ð¸Ñ‚Ð°",
                  form: {
                    login: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð»Ð¾Ð³Ð¸Ð½",
                    email: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐµÐ¼Ð°Ð¸Ð»",
                    password: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    submit: "Ð—Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒÑÑ",
                  },
                  toc: "Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€ÑƒÑÑÑŒ Ð²Ñ‹ Ð±ÐµÐ·Ð¾Ð³Ð¾Ð²Ð¾Ñ€Ð¾Ñ‡Ð½Ð¾ Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°ÐµÑ‚Ðµ",
                  toc_link: "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¾Ðµ Ð¡Ð¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ",
                  back: "Ð£Ð¶Ðµ ÐµÑÑ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚?",
                  back_link: "Ð’Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ.",
                },
                profile: {
                  menu: {
                    account_settings: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð°",
                    my_subscription: "ÐœÐ¾Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ°",
                    downloads: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸",
                    contact_support: "ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ°",
                    contact_support_link: "https://vk.me/melonity_gg",
                    billing: "Ð’Ñ‹ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ ÑÑ‡ÐµÑ‚Ð¾Ð²",
                    logout: "Ð’Ñ‹Ð¹Ñ‚Ð¸ Ð¸Ð· Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð°",
                  },
                  index: {
                    subscription_expires_at: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ° Ð´Ð¾",
                    subscription: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐºÐ°",
                    subscription_expired: "Ð¸ÑÑ‚ÐµÐºÐ»Ð°",
                    email: "E-mail",
                    login: "Ð›Ð¾Ð³Ð¸Ð½",
                    created_at: "Ð”Ð°Ñ‚Ð° Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ð¸",
                    buy_text: "ÐšÑƒÐ¿Ð¸Ñ‚ÑŒ",
                    buy_text_yellow: "Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
                    account_settings_text: "ÐÐ°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸",
                    account_settings_text_second_line: "Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð°",
                  },
                  settings: {
                    password_reset: {
                      headline: "Ð¡Ð¼ÐµÐ½Ð° Ð¿Ð°Ñ€Ð¾Ð»Ñ",
                      old_password: "Ð¡Ñ‚Ð°Ñ€Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                      new_password: "ÐÐ¾Ð²Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                      new_password_repeat: "ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                      button: "Ð¡Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    },
                    pause_subscription: {
                      button: "Ð—Ð°Ð¼Ð¾Ñ€Ð¾Ð·Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
                      unpause_button: "Ð Ð°Ð·Ð¼Ð¾Ñ€Ð¾Ð·Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
                      states: [
                        {
                          desc: "Ð’Ñ‹ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð²Ð¾ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ Ð·Ð°Ð¼Ð¾Ñ€Ð¾Ð·ÐºÐ¾Ð¹ Ñ‚Ð°Ðº ÐºÐ°Ðº Ñƒ Ð²Ð°Ñ Ð½ÐµÑ‚ Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¾Ð¹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸. ÐŸÐ¾ÑÐ»Ðµ Ð¿Ñ€Ð¸Ð¾Ð±Ñ€ÐµÑ‚ÐµÐ½Ð¸Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸\n                Ñƒ Ð²Ð°Ñ Ð¿Ð¾ÑÐ²Ð¸Ñ‚ÑÑ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ Ð·Ð°Ð¼Ð¾Ñ€Ð¾Ð·Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ Ð½Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð½Ñ‹Ð¹ ÑÑ€Ð¾Ðº.",
                        },
                        {
                          desc_pre: "Ð’Ð°ÑˆÐ° Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ° Ð·Ð°Ð¼Ð¾Ñ€Ð¾Ð¶ÐµÐ½Ð° Ð´Ð¾",
                          desc_post:
                            "Ð£ Ð²Ð°Ñ ÐµÑÑ‚ÑŒ Ð²Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ Ð´Ð¾ÑÑ€Ð¾Ñ‡Ð½Ð¾ Ñ€Ð°Ð·Ð¼Ð¾Ñ€Ð¾Ð·Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ.",
                        },
                        {
                          desc: "Ð’Ñ‹ Ð½ÐµÐ´Ð°Ð²Ð½Ð¾ Ð·Ð°Ð¼Ð¾Ñ€Ð°Ð¶Ð¸Ð²Ð°Ð»Ð¸ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ. Ð­Ñ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð±ÑƒÐ´ÐµÑ‚ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð° Ð²Ð°Ð¼",
                        },
                        {
                          desc: "Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð·Ð°Ð¼Ð¾Ñ€Ð¾Ð·Ð¸Ñ‚ÑŒ Ð²Ð°ÑˆÑƒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ Ð½Ð° <b>%DAYS% Ð´Ð½ÐµÐ¹</b>.",
                        },
                        {
                          desc: "Ðš ÑÐ¾Ð¶Ð°Ð»ÐµÐ½Ð¸ÑŽ, ÑÑ€Ð¾Ðº Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ð²Ð°ÑˆÐµÐ¹ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ Ð¼ÐµÐ½ÑŒÑˆÐµ 7 Ð´Ð½ÐµÐ¹, Ð·Ð°Ð¼Ð¾Ñ€Ð¾Ð·ÐºÐ° Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð°.",
                        },
                      ],
                    },
                    reset_hwid: {
                      button: "Ð¡Ð±Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ HWID",
                      states: {
                        already_reset: "Ð’Ð°Ñˆ HWID <b>ÑƒÐ¶Ðµ ÑÐ±Ñ€Ð¾ÑˆÐµÐ½</b>",
                        you_can_reset_once_n_hours:
                          'Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ ÑÐ±Ñ€Ð¾ÑÐ¸Ñ‚ÑŒ HWID  <b class="time">Ñ€Ð°Ð· Ð² 12 Ñ‡Ð°ÑÐ¾Ð²</b>',
                        reset_recently:
                          "Ð’Ñ‹ Ð½ÐµÐ´Ð°Ð²Ð½Ð¾ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ð»Ð¸ ÑÐ±Ñ€Ð¾Ñ HWID, Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð½Ñ‹Ð¹ ÑÐ±Ñ€Ð¾Ñ Ð¼Ð¾Ð¶Ð½Ð¾ Ð±ÑƒÐ´ÐµÑ‚ Ð²Ñ‹Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ ",
                      },
                    },
                  },
                  my_subscription: {
                    auto_renewal: {
                      text: "ÐÐ²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ðµ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ðµ",
                      enabled: "Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾",
                      disabled: "Ð²Ñ‹ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾",
                      tip: "ÐŸÑ€Ð¸ Ð²ÐºÐ»ÑŽÑ‡Ñ‘Ð½Ð½Ð¾Ð¼ Ð°Ð²Ñ‚Ð¾Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ð¸ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ° Ð±ÑƒÐ´ÐµÑ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ²Ð°Ñ‚ÑŒÑÑ Ð² ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ð¸ Ñ\n                        Ñ‚Ð°Ñ€Ð¸Ñ„Ð¾Ð¼ Ð½Ð° Ð¼Ð¾Ð¼ÐµÐ½Ñ‚ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ñ. Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ ÑÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ Ð±ÑƒÐ´ÐµÑ‚ Ð½Ðµ Ñ€Ð°Ð½ÐµÐµ\n                        <b>%DATE%</b>,\n                        Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ° Ð±ÑƒÐ´ÐµÑ‚ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð° Ð½Ð° <b>%DAYS% Ð´Ð½ÐµÐ¹</b>. ÐžÑ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ Ð¾Ñ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ð³Ð¾ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ñ\n                        Ð¼Ð¾Ð¶Ð½Ð¾ Ð² Ð»ÑŽÐ±Ð¾Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚",
                    },
                    days: {
                      1: "Ð´ÐµÐ½ÑŒ",
                      7: "Ð´Ð½ÐµÐ¹",
                      14: "Ð´Ð½ÐµÐ¹",
                      30: "Ð´Ð½ÐµÐ¹",
                      60: "Ð´Ð½ÐµÐ¹",
                      90: "Ð´Ð½ÐµÐ¹",
                      120: "Ð´Ð½ÐµÐ¹",
                      150: "Ð´Ð½ÐµÐ¹",
                      180: "Ð´Ð½ÐµÐ¹",
                    },
                    plan_text: "Ð¢Ð°Ñ€Ð¸Ñ„",
                    total_text: "Ð¡ÑƒÐ¼Ð¼Ð°",
                    save_text: "Ð¡ÐºÐ¸Ð´ÐºÐ°",
                    checkout_button: "ÐžÐ¿Ð»Ð°Ñ‚Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ",
                    promocode: {
                      input_placeholder: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ñ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´",
                      apply_button: "ÐÐºÑ‚Ð¸Ð²Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
                    },
                    days_label_short: "Ð´Ð½.",
                    select_payment_method: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÐ¿Ð¾ÑÐ¾Ð± Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹:",
                    pay_button: "ÐžÐ¿Ð»Ð°Ñ‚Ð¸Ñ‚ÑŒ",
                    pay_with: "Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ",
                    payment_methods: {
                      all_methods: "Ð’ÑÐµ ÑÐ¿Ð¾ÑÐ¾Ð±Ñ‹",
                      card: "Ð‘Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¸Ðµ ÐºÐ°Ñ€Ñ‚Ñ‹",
                      electronic_wallet: "Ð­Ð»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ñ‹Ðµ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ¸",
                      cryptocurrencies: "ÐšÑ€Ð¸Ð¿Ñ‚Ð¾Ð²Ð°Ð»ÑŽÑ‚Ñ‹",
                    },
                    providers: {
                      paypal: {
                        customText:
                          '<p>\n                  ÐžÐ¿Ð»Ð°Ñ‚Ð° Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ Ñ‡ÐµÑ€ÐµÐ· <b>PayPal</b> Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¾ Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°ÐµÑ‚ÑÑ Ð²Ñ€ÑƒÑ‡Ð½ÑƒÑŽ. Ð”Ð»Ñ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾\n                  Ð½Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ Ð² Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ ÑÐ¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð°, Ð½Ð°Ð¶Ð°Ð² ÐºÐ½Ð¾Ð¿ÐºÑƒ "ÐŸÐ¾Ð·Ð²Ð°Ñ‚ÑŒ Ñ‡ÐµÐ»Ð¾Ð²ÐµÐºÐ°".\n                                    </p>\n                                    <p>\n                  ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ðº Ð´Ð¸Ð°Ð»Ð¾Ð³Ñƒ Ñ ÑÐ¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾Ð¼ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ:\n                  <a href="https://vk.me/melonity_gg" target="_blank">vk.me/melonity_gg</a>\n                                    </p>',
                        link: "https://vk.me/melonity_gg",
                      },
                    },
                  },
                  downloads: {
                    download_launcher_button: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Ð»Ð°ÑƒÐ½Ñ‡ÐµÑ€",
                    rpms_button: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Ñ€Ð°ÑÐ¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÐµÐ¼Ñ‹Ðµ Ð¿Ð°ÐºÐµÑ‚Ñ‹",
                    read_instruction_button:
                      "Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸ÑŽ <span>Ð¿Ð¾ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐµ</span>",
                    ccc: "ok",
                    read__link:
                      "https://vk.com/@melonity_gg-instrukciya-po-ustanovki-123",
                  },
                  billing: {
                    payment_methods: {
                      title: "Ð¡Ð¿Ð¾ÑÐ¾Ð±Ñ‹ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹",
                      no_saved: {
                        subtitle:
                          "ÐÐµÑ‚ ÑÐ¾Ñ…Ñ€Ð°Ð½Ñ‘Ð½Ð½Ñ‹Ñ… ÑÐ¿Ð¾ÑÐ¾Ð±Ð¾Ð² Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹, Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ðµ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ðµ Ð¾Ñ‚ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¾.",
                        desc: 'Ð§Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ðµ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ðµ, Ð¾Ñ„Ð¾Ñ€Ð¼Ð¸Ñ‚Ðµ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÑƒ Ñ Ð²ÐºÐ»ÑŽÑ‡Ñ‘Ð½Ð½Ð¾Ð¹ Ñ„ÑƒÐ½ÐºÑ†Ð¸ÐµÐ¹\n          "ÐÐ²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ðµ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ðµ". ÐžÑ‚ÐºÐ°Ð·Ð°Ñ‚ÑŒÑÑ Ð¾Ñ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ð³Ð¾ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ñ Ð¼Ð¾Ð¶Ð½Ð¾ Ð² Ð»ÑŽÐ±Ð¾Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚.',
                      },
                      has_saved_card: {
                        subtitle:
                          "Ð£ Ð²Ð°Ñ Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ð³Ð¾ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ñ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸.",
                        frozen:
                          "Ð’Ð°ÑˆÐ° Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ° Ð·Ð°Ð¼Ð¾Ñ€Ð¾Ð¶ÐµÐ½Ð°, <b>ÑÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ ÑÑ€ÐµÐ´ÑÑ‚Ð² Ð½Ðµ Ð¿Ñ€Ð¾Ð¸Ð·Ð²Ð¾Ð´Ð¸Ñ‚ÑÑ.</b>",
                        desc: 'Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ ÑÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ ÑÑ€ÐµÐ´ÑÑ‚Ð² Ð¿Ñ€Ð¾Ð¸Ð·Ð¾Ð¹Ð´Ñ‘Ñ‚ Ð½Ðµ Ñ€Ð°Ð½ÐµÐµ\n            <b>%RENEWAL_DATE%</b> Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸ÐµÐ¼ ÐºÐ°Ñ€Ñ‚Ñ‹\n            <span style="background-color: #1b8bf6; padding: 0 2px; border-radius: 3px">%CARD_MASK%</span>',
                        disable_autorenewal_btn_text:
                          "ÐžÑ‚ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¾Ðµ Ð¿Ñ€Ð¾Ð´Ð»ÐµÐ½Ð¸Ðµ",
                      },
                    },
                    transaction_history: {
                      title: "Ð˜ÑÑ‚Ð¾Ñ€Ð¸Ñ Ñ‚Ñ€Ð°Ð½Ð·Ð°ÐºÑ†Ð¸Ð¹ (Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ 10)",
                      no_transactions: "Ð£ Ð²Ð°Ñ Ð½ÐµÑ‚ Ñ‚Ñ€Ð°Ð½Ð·Ð°ÐºÑ†Ð¸Ð¹",
                      table: {
                        thead: {
                          id: "ID",
                          date: "Ð”Ð°Ñ‚Ð°",
                          desc: "ÐžÐ¿Ð¸ÑÐ°Ð½Ð¸Ðµ",
                          sum: "Ð¡ÑƒÐ¼Ð¼Ð°",
                        },
                      },
                    },
                  },
                },
                cloud: {
                  team_dire: "ÐšÐ¾Ð¼Ð°Ð½Ð´Ð° Dire",
                  team_radiant: "ÐšÐ¾Ð¼Ð°Ð½Ð´Ð° Radiant",
                  events: "Ð¡Ð¾Ð±Ñ‹Ñ‚Ð¸Ñ",
                  roshan_was_attacked: "Roshan Ð°Ñ‚Ð°ÐºÐ¾Ð²Ð°Ð½",
                  roshan_was_attacked_desc: "ÐÐ° Roshan ÑÐ¾Ð²ÐµÑ€ÑˆÐµÐ½Ð¾ Ð½Ð°Ð¿Ð°Ð´ÐµÐ½Ð¸Ðµ",
                  teleport_usage: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ Ñ‚ÐµÐ»ÐµÐ¿Ð¾Ñ€Ñ‚Ð°",
                  teleport_usage_desc:
                    "Ð“ÐµÑ€Ð¾Ð¹ %HERONAME_WITH_ICON% Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð» Ñ‚ÐµÐ»ÐµÐ¿Ð¾Ñ€Ñ‚ Ð½Ð° %TELEPORT_POS_STRING%",
                  waiting_for_connection: "ÐžÐ¶Ð¸Ð´Ð°Ð½Ð¸Ðµ ÑÐ¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ñ Ñ ÑÐµÑ€Ð²ÐµÑ€Ð¾Ð¼",
                  waiting_for_client:
                    "Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¾, Ð¾Ð¶Ð¸Ð´Ð°ÐµÐ¼ Ð½Ð°Ñ‡Ð°Ð»Ð° Ð¸Ð³Ñ€Ñ‹",
                  connection_was_lost:
                    "Ð¡Ð¾ÐµÐ´Ð¸Ð½ÐµÐ½Ð¸Ðµ Ð¿Ð¾Ñ‚ÐµÑ€ÑÐ½Ð¾, Ð¾Ð¶Ð¸Ð´Ð°ÐµÐ¼ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ñ",
                  alive: "Ð–Ð¸Ð²",
                  ready: "Ð“Ð¾Ñ‚Ð¾Ð²",
                },
                footer: {
                  product: "ÐŸÑ€Ð¾Ð´ÑƒÐºÑ‚",
                  support: "Ð¡Ð²ÑÐ·Ð°Ñ‚ÑŒÑÑ Ñ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¾Ð¹",
                  download: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ",
                  vk: "Ð’ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ðµ",
                  user_agreement: "ÐŸÐ¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¾Ðµ ÑÐ¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ",
                  privace_policy: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸",
                  policy: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ°",
                  data: "ÐžÐ±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð´Ð°Ð½Ð½Ñ‹Ñ…",
                },
              },
              en: {
                general: {
                  email_is_null: "Not specified",
                  index: {
                    title: "Melonity. Private cheat for Dota 2",
                    title_melonity: "Melonity. Private cheat for Dota 2",
                    headline: "Melonity",
                    og: {
                      title: "Melonity - private cheat Dota 2",
                      description:
                        "Melonity is a feature-rich private cheat for Dota 2 with a cutting-edge protection system. Among available scripts are Teleport ESP, Jungle MapHack, combos for various heroes (Meepo, Invoker and others). Get in the game like never before!",
                      image: "/og/image_en.jpg",
                    },
                    seo: {
                      description:
                        "Melonity is a feature-rich private cheat for Dota 2 with a cutting-edge protection system. Among available scripts are Teleport ESP, Jungle MapHack, combos for various heroes (Meepo, Invoker and others). Get in the game like never before!",
                    },
                  },
                },
                index: {
                  video_previews: {
                    title: "Video reviews",
                    texts: [
                      {
                        title: "Teleport ESP",
                        description:
                          "Enemy Teleports exposed even in the Fog of War",
                      },
                      {
                        title: "Inventory Changer",
                        description: "Customize the look and feel of your Hero",
                      },
                      {
                        title: "Jungle ESP",
                        description: "Junglers are now an easy kill",
                      },
                      {
                        title: "Map Hack",
                        description:
                          "Keep an eye on the enemy heroes throughout the map",
                      },
                      {
                        title: "Creep Blocker",
                        description: "Creep block like a Miracle-",
                      },
                      {
                        title: "Dodger",
                        description: "A major step toward your invincibility",
                      },
                    ],
                  },
                },
                home: "Home",
                pricing: "Pricing",
                community: "Community",
                community_link: "https://vk.com/melonity_gg",
                sign_in: "Sign in",
                sign_up: "Sign up",
                slogan: "Enjoy the sweet taste of victory âœ…",
                header_description:
                  "Melonity brings numerous beneficial features to the table aimed to enhance your gaming experience. Those include partial maphack with animations of enemy heroes, neat display whether ally units are within sight of the opposing team, notifications whenever your enemies use hidden abilities and more.",
                header_get_started: "Get started",
                header_price_plan: "from %PRICE% per week",
                our_advantages: "Melonity Subscription Advantages",
                advantages: [
                  {
                    headline: "Humanizer",
                    desc: "All your clicks with a zoomed out camera will look like as if they are coming from a regular player.",
                  },
                  {
                    headline: "Anti-VAC",
                    desc: "Our Anti-VAC module ensures that you will not be banned by Valve Anti-Cheat System (VAC).",
                  },
                  {
                    headline: "Feature-rich solution",
                    desc: "Our software provides broad functional capabilities which are continuously updated and expanded by the development team.",
                  },
                  {
                    headline: "Inventory Changer",
                    desc: "This feature will allow you to change skins without exiting the game. No need to overpay Gabe and no FPS drops.",
                  },
                  {
                    headline: "Customer Support",
                    desc: "The support team is always there to answer your questions and troubleshoot any issues you encounter while using our software.",
                  },
                  {
                    headline: "Quality",
                    desc: "Our project team is made up of highly qualified professionals committed to delivering a superior product. ",
                  },
                ],
                premium_subscription: "Premium Subscription",
                premium_subscription_desc:
                  "Choose a plan or set up your own on the",
                premium_subscription_desc_link: "Subscription Calculator page",
                subscription_headline: "",
                subscription_desc: "-day plan",
                subscription_advantages: [
                  "Access to all the features available",
                  "Rapid response from the support team",
                  "Get the unfair advantage",
                  "The option to pause a subscription",
                ],
                get_started_btn: "Get started",
                auth: {
                  auth_headline: "Authentication",
                  auth_desc: "Log in with your credentials",
                  auth_login: "Username or email",
                  auth_password: "Password",
                  auth_password_reset_link: "Forgot your username or password?",
                  sign_in: "Sign in",
                  sign_up_link_before: "Don't have account?",
                  sign_up_link: "Sign up.",
                },
                reset_password: {
                  headline: "Password Reset",
                  step_1_text:
                    "Please enter your email and follow the instructions on this page to reset your password.",
                  step_1_button_text: "Submit",
                  step_2_text:
                    "Please enter your email and follow the instructions on this page to reset your password.",
                  step_2_button_text: "Submit",
                  email: "Email",
                  reset_code: "Code from mail",
                  new_password: "New password",
                  submit: "Submit",
                  back: "Back to login page",
                  set_password_btn_text: "Set password",
                  unknown_error: "Unknown error",
                  enter_code_error: "Enter the code from the mail",
                },
                register: {
                  headline: "Create an Account",
                  desc: "Youâ€™ll need one to be able to use all the features our software provides.",
                  form: {
                    login: "Username",
                    email: "Email",
                    password: "Password",
                    submit: "Sign up",
                  },
                  toc: "By signing up you agree to the",
                  toc_link: "Terms of Use",
                  back: "Already have an account?",
                  back_link: "Sign in.",
                },
                profile: {
                  menu: {
                    account_settings: "Account settings",
                    my_subscription: "My subscription",
                    downloads: "Downloads",
                    contact_support: "Contact Support",
                    contact_support_link: "https://vk.com/melonity_gg",
                    billing: "Billing",
                    logout: "Sign out",
                  },
                  index: {
                    email: "Email",
                    login: "User name",
                    created_at: "Registration date",
                    buy_text: "Buy",
                    buy_text_yellow: "subscription",
                    subscription_expires_at: "Subscription expires at",
                    subscription: "Subscription",
                    subscription_expired: "expired",
                    account_settings_text: "Account",
                    account_settings_text_second_line: "settings",
                  },
                  settings: {
                    password_reset: {
                      headline: "Password reset",
                      old_password: "Old password",
                      new_password: "New password",
                      new_password_repeat: "Repeat password",
                      button: "Proceed",
                    },
                    pause_subscription: {
                      button: "Pause subscription",
                      unpause_button: "Unpause subscription",
                      states: [
                        {
                          desc: "The option to pause a subscription is only available to active subscribers.",
                        },
                        {
                          desc_pre: "Your subscription paused up to ",
                          desc_post:
                            "You have the opportunity to early unpause a subscription.",
                        },
                        {
                          desc: "You recently froze a subscription. This feature will be available to you",
                        },
                        {
                          desc: "You can pause your subscription for <b>%DAYS% days</b>",
                        },
                        {
                          desc: "Unfortunately, the validity of your subscription is less than 7 days, pausing is not available.",
                        },
                      ],
                    },
                    reset_hwid: {
                      button: "Reset HWID",
                      states: {
                        already_reset: "Your HWID <b>already reset</b>",
                        you_can_reset_once_n_hours:
                          'You can reset HWID  <b class="time">once every 12 hours</b>',
                        reset_recently:
                          "You recently reset your HWID, you can reset it again at",
                      },
                    },
                  },
                  my_subscription: {
                    auto_renewal: {
                      text: "Auto-renewal",
                      enabled: "enabled",
                      disabled: "disabled",
                      tip: "With the auto-renewal option enabled, the subscription will automatically renew, as per the terms of your current plan. The next charge shouldn't be sooner than <b>%DATE%</b>. The subscription will be renewed for <b>%DAYS% days</b>. You can cacel auto-renewal at any time.",
                    },
                    days: {
                      1: "day",
                      7: "days",
                      14: "days",
                      30: "days",
                      60: "days",
                      90: "days",
                      120: "days",
                      150: "days",
                      180: "days",
                    },
                    plan_text: "Plan",
                    total_text: "Total",
                    save_text: "Discount",
                    checkout_button: "Checkout",
                    promocode: {
                      input_placeholder: "Promocode",
                      apply_button: "Redeem",
                    },
                    days_label_short: "d.",
                    select_payment_method: "Select payment method:",
                    pay_button: "Pay",
                    pay_with: "with",
                    payment_methods: {
                      all_methods: "All Methods",
                      card: "Bank Card",
                      electronic_wallet: "Electronic Wallets",
                      cryptocurrencies: "Cryptocurrencies",
                    },
                    providers: {
                      qiwi: {
                        customText:
                          '<p>\n                  ÐžÐ¿Ð»Ð°Ñ‚Ð° Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ Ñ‡ÐµÑ€ÐµÐ· <b>Qiwi</b> Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¾ Ð¿Ñ€Ð¸Ð½Ð¸Ð¼Ð°ÐµÑ‚ÑÑ Ð²Ñ€ÑƒÑ‡Ð½ÑƒÑŽ. Ð”Ð»Ñ Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸ Ð¿Ð¾Ð´Ð¿Ð¸ÑÐºÐ¸ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾\n                  Ð½Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒ Ð² Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ ÑÐ¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð°, Ð½Ð°Ð¶Ð°Ð² ÐºÐ½Ð¾Ð¿ÐºÑƒ "ÐŸÐ¾Ð·Ð²Ð°Ñ‚ÑŒ Ñ‡ÐµÐ»Ð¾Ð²ÐµÐºÐ°".\n                                    </p>\n                                    <p>\n                  ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ðº Ð´Ð¸Ð°Ð»Ð¾Ð³Ñƒ Ñ ÑÐ¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾Ð¼ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¿Ð¾ ÑÑÑ‹Ð»ÐºÐµ:\n                  <a href="https://vk.me/melonity_gg" target="_blank">vk.me/melonity_gg</a>\n                                    </p>',
                      },
                      paypal: {
                        customText:
                          "<p>\n                  Subscription payments via <b>PayPal</b> are temporarily accepted manually.\n                  To purchase a subscription, write <b>Cryptix#7130</b> in\n                  Discord. We apologize for the inconvenience.\n                                    </p>",
                      },
                    },
                  },
                  downloads: {
                    download_launcher_button: "Download launcher",
                    rpms_button: "Download redistributable runtime packages",
                    read_instruction_button:
                      "Read installation <span>instructions</span>",
                    read__link:
                      "https://forum.melonity.gg/threads/installation-instructions.37/",
                  },
                  billing: {
                    payment_methods: {
                      title: "Payment methods",
                      no_saved: {
                        subtitle:
                          "No saved payment methods, auto-renewal is disabled.",
                        desc: 'To activate auto-renewal, subscribe with "Auto-renewal" checkbox enabled. You can cancel auto-renewal at any time.',
                      },
                      has_saved_card: {
                        subtitle: "You have auto-renewal enabled.",
                        frozen:
                          "Your subscription is frozen, <b>no charges are made during this time.</b>",
                        desc: 'The next charge will be made no sooner than\n            <b>%RENEWAL_DATE%</b> using the card\n            <span style="background-color: #1b8bf6; padding: 0 2px; border-radius: 3px">%CARD_MASK%</span>',
                        disable_autorenewal_btn_text: "Disable auto-renewal",
                      },
                    },
                    transaction_history: {
                      title: "Transaction history (latest 10)",
                      no_transactions: "You nave no transaction",
                      table: {
                        thead: {
                          id: "ID",
                          date: "Date",
                          desc: "Description",
                          sum: "Amount",
                        },
                      },
                    },
                  },
                },
                cloud: {
                  team_dire: "Team Dire",
                  team_radiant: "Team Radiant",
                  events: "Events",
                  roshan_was_attacked: "Roshan attacked",
                  roshan_was_attacked_desc: "Roshan was attacked",
                  teleport_usage: "Teleport",
                  teleport_usage_desc:
                    "Hero %HERONAME_WITH_ICON% used teleport to %TELEPORT_POS_STRING%",
                  waiting_for_connection: "Waiting for server connection",
                  waiting_for_client:
                    "Connection established, waiting for the game started",
                  connection_was_lost:
                    "Connection lost, waiting to be restored",
                  alive: "Alive",
                  ready: "Ready",
                },
                footer: {
                  product: "Product",
                  support: "Contact Support",
                  download: "Download",
                  vk: "VK",
                  user_agreement: "User Agreement",
                  privace_policy: "Privacy Policy",
                  policy: "Policy",
                  data: "Data processing",
                },
              },
            },
          },
          vueI18nLoader: !1,
          locales: [
            { code: "en", iso: "en-US" },
            { code: "ru", iso: "ru-RU" },
          ],
          defaultLocale: "ru",
          defaultDirection: "ltr",
          routesNameSeparator: "___",
          defaultLocaleRouteNameSuffix: "default",
          sortRoutes: !0,
          strategy: "prefix_except_default",
          lazy: !1,
          langDir: null,
          rootRedirect: null,
          detectBrowserLanguage: {
            alwaysRedirect: !0,
            cookieCrossOrigin: !1,
            cookieDomain: null,
            cookieKey: "minority_i18n",
            cookieSecure: !1,
            fallbackLocale: "",
            onlyOnNoPrefix: !1,
            onlyOnRoot: !1,
            useCookie: !0,
          },
          differentDomains: !1,
          seo: !0,
          baseUrl: "https://melonity.gg",
          vuex: {
            moduleName: "i18n",
            syncLocale: !1,
            syncMessages: !1,
            syncRouteParams: !0,
          },
          parsePages: !0,
          pages: {},
          skipSettingLocaleOnNavigate: !1,
          beforeLanguageSwitch: function () {
            return null;
          },
          onBeforeLanguageSwitch: function () {},
          onLanguageSwitched: function () {
            return null;
          },
          normalizedLocales: [
            { code: "en", iso: "en-US" },
            { code: "ru", iso: "ru-RU" },
          ],
          localeCodes: ["en", "ru"],
        },
        ve = (n(67), n(90), n(462), n(154)),
        xe = n.n(ve);
      function ke(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return ye(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ye(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function ye(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function _e(e) {
        return "[nuxt-i18n] ".concat(e);
      }
      function we(e, t) {
        var n,
          r = [],
          a = [],
          i = ke(e);
        try {
          for (i.s(); !(n = i.n()).done; ) {
            var o = n.value,
              s = o.code,
              u = o.iso || s;
            a.push({ code: s, iso: u });
          }
        } catch (e) {
          i.e(e);
        } finally {
          i.f();
        }
        var c,
          l = ke(t.entries());
        try {
          var f = function () {
            var e = Object(U.a)(c.value, 2),
              n = e[0],
              i = e[1],
              o = a.find(function (e) {
                return e.iso.toLowerCase() === i.toLowerCase();
              });
            if (o)
              return r.push({ code: o.code, score: 1 - n / t.length }), "break";
          };
          for (l.s(); !(c = l.n()).done && "break" !== f(); );
        } catch (e) {
          l.e(e);
        } finally {
          l.f();
        }
        var g,
          d = ke(t.entries());
        try {
          var p = function () {
            var e = Object(U.a)(g.value, 2),
              n = e[0],
              i = e[1].split("-")[0].toLowerCase(),
              o = a.find(function (e) {
                return e.iso.split("-")[0].toLowerCase() === i;
              });
            if (o)
              return (
                r.push({ code: o.code, score: 0.999 - n / t.length }), "break"
              );
          };
          for (d.s(); !(g = d.n()).done && "break" !== p(); );
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
        return (
          r.length > 1 &&
            r.sort(function (e, t) {
              return e.score === t.score
                ? t.code.length - e.code.length
                : t.score - e.score;
            }),
          r.length ? r[0].code : void 0
        );
      }
      function je(e, t) {
        var n;
        if ((n = window.location.host)) {
          var r = e.find(function (e) {
            return e.domain === n;
          });
          if (r) return r.code;
        }
        return "";
      }
      function Oe(e) {
        return new RegExp("^/(".concat(e.join("|"), ")(?:/|$)"), "i");
      }
      function Pe(e, t) {
        var n = t.routesNameSeparator,
          r = t.defaultLocaleRouteNameSuffix,
          a = "(".concat(e.join("|"), ")"),
          i = "(?:".concat(n).concat(r, ")?"),
          o = new RegExp("".concat(n).concat(a).concat(i, "$"), "i"),
          s = Oe(e);
        return function (e) {
          if (e.name) {
            var t = e.name.match(o);
            if (t && t.length > 1) return t[1];
          } else if (e.path) {
            var n = e.path.match(s);
            if (n && n.length > 1) return n[1];
          }
          return "";
        };
      }
      function Se(e, t) {
        var n,
          r = t.useCookie,
          a = t.cookieKey,
          i = t.localeCodes;
        if (r && (n = xe.a.get(a)) && i.includes(n)) return n;
      }
      function Ee(e, t, n) {
        var r = n.useCookie,
          a = n.cookieDomain,
          i = n.cookieKey,
          o = n.cookieSecure,
          s = n.cookieCrossOrigin;
        if (r) {
          var u = new Date(),
            c = {
              expires: new Date(u.setDate(u.getDate() + 365)),
              path: "/",
              sameSite: s ? "none" : "lax",
              secure: s || o,
            };
          a && (c.domain = a), xe.a.set(i, e, c);
        }
      }
      function Ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Re(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ce(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ce(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ae(e, t) {
        return $e.apply(this, arguments);
      }
      function $e() {
        return ($e = Object(r.a)(
          regeneratorRuntime.mark(function e(t, n) {
            var r, a, i;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (r = t.app),
                      (a = r.i18n).loadedLanguages || (a.loadedLanguages = []),
                      a.loadedLanguages.includes(n) ||
                        ((i = he.normalizedLocales.find(function (e) {
                          return e.code === n;
                        }))
                          ? i.file ||
                            console.warn(
                              _e(
                                "Could not find lang file for locale ".concat(n)
                              )
                            )
                          : console.warn(
                              _e(
                                'Attempted to load messages for non-existant locale code "'.concat(
                                  n,
                                  '"'
                                )
                              )
                            ));
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Te(e, t, n, r) {
        var a = r.differentDomains,
          i = r.normalizedLocales;
        if ("function" == typeof e) return e(t);
        if (a && n) {
          var o = Le(n, t.req, { normalizedLocales: i });
          if (o) return o;
        }
        return e;
      }
      function Le(e, t, n) {
        var r,
          a = n.normalizedLocales.find(function (t) {
            return t.code === e;
          });
        if (a && a.domain)
          return Object(d.a)(a.domain)
            ? a.domain
            : ((r = window.location.protocol.split(":")[0]),
              "".concat(r, "://").concat(a.domain));
        console.warn(_e("Could not find domain name for locale ".concat(e)));
      }
      function De(e, t, n) {
        var r = {
          namespaced: !0,
          state: function () {
            return Re(
              Re(
                Re({}, t.syncLocale ? { locale: "" } : {}),
                t.syncMessages ? { messages: {} } : {}
              ),
              t.syncRouteParams ? { routeParams: {} } : {}
            );
          },
          actions: Re(
            Re(
              Re(
                {},
                t.syncLocale
                  ? {
                      setLocale: function (e, t) {
                        (0, e.commit)("setLocale", t);
                      },
                    }
                  : {}
              ),
              t.syncMessages
                ? {
                    setMessages: function (e, t) {
                      (0, e.commit)("setMessages", t);
                    },
                  }
                : {}
            ),
            t.syncRouteParams
              ? {
                  setRouteParams: function (e, t) {
                    (0, e.commit)("setRouteParams", t);
                  },
                }
              : {}
          ),
          mutations: Re(
            Re(
              Re(
                {},
                t.syncLocale
                  ? {
                      setLocale: function (e, t) {
                        e.locale = t;
                      },
                    }
                  : {}
              ),
              t.syncMessages
                ? {
                    setMessages: function (e, t) {
                      e.messages = t;
                    },
                  }
                : {}
            ),
            t.syncRouteParams
              ? {
                  setRouteParams: function (e, t) {
                    e.routeParams = t;
                  },
                }
              : {}
          ),
          getters: Re(
            {},
            t.syncRouteParams
              ? {
                  localeRouteParams: function (e) {
                    var t = e.routeParams;
                    return function (e) {
                      return (t && t[e]) || {};
                    };
                  },
                }
              : {}
          ),
        };
        e.registerModule(t.moduleName, r, {
          preserveState: !!e.state[t.moduleName],
        });
      }
      function Ie(e) {
        return Me.apply(this, arguments);
      }
      function Me() {
        return (Me = Object(r.a)(
          regeneratorRuntime.mark(function e(t) {
            var n,
              r,
              a,
              i = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = i.length > 1 && void 0 !== i[1] ? i[1] : null),
                      (r = i.length > 2 && void 0 !== i[2] ? i[2] : null),
                      !(a = i.length > 3 ? i[3] : void 0) || !t)
                    ) {
                      e.next = 10;
                      break;
                    }
                    if (null === n || !a.syncLocale) {
                      e.next = 7;
                      break;
                    }
                    return (
                      (e.next = 7), t.dispatch(a.moduleName + "/setLocale", n)
                    );
                  case 7:
                    if (null === r || !a.syncMessages) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (e.next = 10),
                      t.dispatch(a.moduleName + "/setMessages", r)
                    );
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var ze = n(19);
      function Ne(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ne(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ne(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function qe(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return Be(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Be(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function Be(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Fe() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.addDirAttribute,
          n = void 0 === t || t,
          r = e.addSeoAttributes,
          a = void 0 !== r && r;
        if (!this.$i18n) return {};
        var i = { htmlAttrs: {}, link: [], meta: [] },
          o = this.$i18n.localeProperties,
          u = o.iso,
          c = o.dir || he.defaultDirection;
        if (
          (n && (i.htmlAttrs.dir = c),
          a &&
            (s.a.hasMetaInfo ? s.a.hasMetaInfo(this) : this._hasMetaInfo) &&
            this.$i18n.locale &&
            this.$i18n.locales &&
            !1 !== this.$options[be.COMPONENT_OPTIONS_KEY] &&
            (!this.$options[be.COMPONENT_OPTIONS_KEY] ||
              !1 !== this.$options[be.COMPONENT_OPTIONS_KEY].seo))
        ) {
          u && (i.htmlAttrs.lang = u);
          var l = this.$i18n.locales;
          f.bind(this)(l, this.$i18n.__baseUrl, i.link),
            g.bind(this)(this.$i18n.__baseUrl, i.link),
            d.bind(this)(o, u, i.meta),
            p.bind(this)(l, u, i.meta);
        }
        function f(e, t, n) {
          if (he.strategy !== be.STRATEGIES.NO_PREFIX) {
            var r,
              a = new Map(),
              i = qe(e);
            try {
              for (i.s(); !(r = i.n()).done; ) {
                var o = r.value,
                  s = o.iso;
                if (s) {
                  var u = s.split("-"),
                    c = Object(U.a)(u, 2),
                    l = c[0],
                    f = c[1];
                  l && f && (o.isCatchallLocale || !a.has(l)) && a.set(l, o),
                    a.set(s, o);
                } else
                  console.warn(
                    _e("Locale ISO code is required to generate alternate link")
                  );
              }
            } catch (e) {
              i.e(e);
            } finally {
              i.f();
            }
            var g,
              d = qe(a.entries());
            try {
              for (d.s(); !(g = d.n()).done; ) {
                var p = Object(U.a)(g.value, 2),
                  m = p[0],
                  h = p[1],
                  v = this.switchLocalePath(h.code);
                v &&
                  n.push({
                    hid: "i18n-alt-".concat(m),
                    rel: "alternate",
                    href: b(v, t),
                    hreflang: m,
                  });
              }
            } catch (e) {
              d.e(e);
            } finally {
              d.f();
            }
            if (he.defaultLocale) {
              var x = this.switchLocalePath(he.defaultLocale);
              x &&
                n.push({
                  hid: "i18n-xd",
                  rel: "alternate",
                  href: b(x, t),
                  hreflang: "x-default",
                });
            }
          }
        }
        function g(e, t) {
          var n = this.localeRoute(
              Ue(Ue({}, this.$route), {}, { name: this.getRouteBaseName() })
            ),
            r = n ? n.path : null;
          r && t.push({ hid: "i18n-can", rel: "canonical", href: b(r, e) });
        }
        function d(e, t, n) {
          e &&
            t &&
            n.push({ hid: "i18n-og", property: "og:locale", content: m(t) });
        }
        function p(e, t, n) {
          var r = e.filter(function (e) {
            var n = e.iso;
            return n && n !== t;
          });
          if (r.length) {
            var a = r.map(function (e) {
              return {
                hid: "i18n-og-alt-".concat(e.iso),
                property: "og:locale:alternate",
                content: m(e.iso),
              };
            });
            n.push.apply(n, Object(ze.a)(a));
          }
        }
        function m(e) {
          return (e || "").replace(/-/g, "_");
        }
        function b(e, t) {
          return e.match(/^https?:\/\//) ? e : t + e;
        }
        return i;
      }
      function We() {
        return Fe.call(this, { addDirAttribute: !1, addSeoAttributes: !0 });
      }
      n(463);
      var He = {
        install: function (e) {
          e.mixin({
            head: function () {
              return Fe.call(this, {
                addDirAttribute: !1,
                addSeoAttributes: !0,
              });
            },
          });
        },
      };
      i.default.use(He);
      var Ve = n(65),
        Ke = n(96),
        Xe = (function () {
          var e = Object(r.a)(
            regeneratorRuntime.mark(function e(t) {
              var n, r, a, i, o, s, u;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((n = t.app), !t.isHMR)) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      return (e.next = 5), n.i18n.__onNavigate(t.route);
                    case 5:
                      (r = e.sent),
                        (a = Object(U.a)(r, 3)),
                        (i = a[0]),
                        (o = a[1]),
                        (s = a[2]),
                        i &&
                          o &&
                          ((u = s ? t.route.query : void 0),
                          t.redirect(i, o, u));
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
      Ke.a.nuxti18n = Xe;
      var Ye = ["params"];
      function Ge(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Je(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ge(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ge(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Qe(e, t) {
        var n = tt.call(this, e, t);
        return n ? n.route.fullPath : "";
      }
      function Ze(e, t) {
        var n = tt.call(this, e, t);
        return n ? n.route : void 0;
      }
      function et(e, t) {
        var n = tt.call(this, e, t);
        return n ? n.location : void 0;
      }
      function tt(e, t) {
        if (e) {
          var n = this.i18n;
          if ((t = t || n.locale)) {
            "string" == typeof e &&
              (e = "/" === e[0] ? { path: e } : { name: e });
            var r = Object.assign({}, e);
            if (r.path && !r.name) {
              var a = this.router.resolve(r).route,
                i = this.getRouteBaseName(a);
              i
                ? (r = {
                    name: at(i, t),
                    params: a.params,
                    query: a.query,
                    hash: a.hash,
                  })
                : (!(
                    (t === he.defaultLocale &&
                      [
                        be.STRATEGIES.PREFIX_EXCEPT_DEFAULT,
                        be.STRATEGIES.PREFIX_AND_DEFAULT,
                      ].includes(he.strategy)) ||
                    he.strategy === be.STRATEGIES.NO_PREFIX ||
                    n.differentDomains
                  ) && (r.path = "/".concat(t).concat(r.path)),
                  (r.path = Object(d.g)(r.path, !0)));
            } else {
              r.name || r.path || (r.name = this.getRouteBaseName()),
                (r.name = at(r.name, t));
              var o = r.params;
              o && void 0 === o[0] && o.pathMatch && (o[0] = o.pathMatch);
            }
            var s = this.router.resolve(r);
            return s.route.name ? s : this.router.resolve(e);
          }
        }
      }
      function nt(e) {
        var t = this.getRouteBaseName();
        if (!t) return "";
        var n = this.i18n,
          r = this.route,
          a = this.store,
          i = r.params,
          o = Object(Ve.a)(r, Ye),
          s = {};
        he.vuex &&
          he.vuex.syncRouteParams &&
          a &&
          (s =
            a.getters["".concat(he.vuex.moduleName, "/localeRouteParams")](e));
        var u = Object.assign({}, o, {
            name: t,
            params: Je(Je(Je({}, i), s), {}, { 0: i.pathMatch }),
          }),
          c = this.localePath(u, e);
        if (n.differentDomains) {
          var l = {
              differentDomains: n.differentDomains,
              normalizedLocales: he.normalizedLocales,
            },
            f = Le(e, this.req, l);
          f && (c = f + c);
        }
        return c;
      }
      function rt(e) {
        var t = void 0 !== e ? e : this.route;
        if (t && t.name) return t.name.split(he.routesNameSeparator)[0];
      }
      function at(e, t) {
        var n =
          e +
          (he.strategy === be.STRATEGIES.NO_PREFIX
            ? ""
            : he.routesNameSeparator + t);
        return (
          t === he.defaultLocale &&
            he.strategy === be.STRATEGIES.PREFIX_AND_DEFAULT &&
            (n += he.routesNameSeparator + he.defaultLocaleRouteNameSuffix),
          n
        );
      }
      var it = function (e) {
          return function () {
            var t = {
              getRouteBaseName: this.getRouteBaseName,
              i18n: this.$i18n,
              localePath: this.localePath,
              localeRoute: this.localeRoute,
              localeLocation: this.localeLocation,
              req: null,
              route: this.$route,
              router: this.$router,
              store: this.$store,
            };
            return e.call.apply(
              e,
              [t].concat(Array.prototype.slice.call(arguments))
            );
          };
        },
        ot = function (e, t) {
          return function () {
            var n = e.app,
              r = (e.req, e.route),
              a = e.store,
              i = {
                getRouteBaseName: n.getRouteBaseName,
                i18n: n.i18n,
                localePath: n.localePath,
                localeLocation: n.localeLocation,
                localeRoute: n.localeRoute,
                req: null,
                route: r,
                router: n.router,
                store: a,
              };
            return t.call.apply(
              t,
              [i].concat(Array.prototype.slice.call(arguments))
            );
          };
        },
        st = {
          install: function (e) {
            e.mixin({
              methods: {
                localePath: it(Qe),
                localeRoute: it(Ze),
                localeLocation: it(et),
                switchLocalePath: it(nt),
                getRouteBaseName: it(rt),
              },
            });
          },
        },
        ut = function (e) {
          i.default.use(st);
          var t = e.app,
            n = e.store;
          (t.localePath = e.localePath = ot(e, Qe)),
            (t.localeRoute = e.localeRoute = ot(e, Ze)),
            (t.localeLocation = e.localeLocation = ot(e, et)),
            (t.switchLocalePath = e.switchLocalePath = ot(e, nt)),
            (t.getRouteBaseName = e.getRouteBaseName = ot(e, rt)),
            n &&
              ((n.localePath = t.localePath),
              (n.localeRoute = t.localeRoute),
              (n.localeLocation = t.localeLocation),
              (n.switchLocalePath = t.switchLocalePath),
              (n.getRouteBaseName = t.getRouteBaseName));
        },
        ct = n(155),
        lt = n(77);
      function ft(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return gt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? gt(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function gt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      i.default.use(ct.a);
      var dt = (function () {
          var e = Object(r.a)(
            regeneratorRuntime.mark(function e(t) {
              var n,
                a,
                o,
                s,
                u,
                c,
                l,
                f,
                g,
                p,
                m,
                b,
                h,
                v,
                x,
                k,
                y,
                _,
                w,
                j,
                O,
                P,
                S,
                E,
                C,
                R,
                A,
                $,
                T,
                L,
                D,
                I,
                M,
                z,
                N,
                q,
                B,
                F;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = t.app),
                          (a = t.route),
                          (o = t.store),
                          (s = t.req),
                          t.res,
                          (u = t.redirect),
                          he.vuex && o && De(o, he.vuex, he.localeCodes),
                          (c = he.lazy) && (!0 === c || c.skipNuxtState),
                          (e.next = 9);
                        break;
                      case 7:
                        (l = e.sent.default),
                          t.beforeNuxtRender(function (e) {
                            var t = e.nuxtState,
                              r = {},
                              a = n.i18n,
                              i = a.fallbackLocale,
                              o = a.locale;
                            if (o && o !== i) {
                              var s = n.i18n._getMessages()[o];
                              if (s)
                                try {
                                  l(s), (r[o] = s);
                                } catch (e) {}
                            }
                            t.__i18n = { langs: r };
                          });
                      case 9:
                        if (
                          ((f = he.detectBrowserLanguage),
                          (g = f.alwaysRedirect),
                          (p = f.fallbackLocale),
                          (m = f.onlyOnNoPrefix),
                          (b = f.onlyOnRoot),
                          (h = f.useCookie),
                          (v = f.cookieKey),
                          (x = f.cookieDomain),
                          (k = f.cookieSecure),
                          (y = f.cookieCrossOrigin),
                          (_ = (function () {
                            var e = Object(r.a)(
                              regeneratorRuntime.mark(function e(r) {
                                var a,
                                  s,
                                  c,
                                  l,
                                  f,
                                  g,
                                  d,
                                  p,
                                  m,
                                  b,
                                  v,
                                  x,
                                  k,
                                  y,
                                  _,
                                  w,
                                  O,
                                  P,
                                  S = arguments;
                                return regeneratorRuntime.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((a =
                                            S.length > 1 && void 0 !== S[1]
                                              ? S[1]
                                              : {}),
                                          (s = a.initialSetup),
                                          (c = void 0 !== s && s),
                                          r)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        if (c || !n.i18n.differentDomains) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 5:
                                        if (((l = n.i18n.locale), r !== l)) {
                                          e.next = 8;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 8:
                                        if (
                                          !(f = n.i18n.onBeforeLanguageSwitch(
                                            l,
                                            r,
                                            c,
                                            t
                                          )) ||
                                          !n.i18n.localeCodes.includes(f)
                                        ) {
                                          e.next = 13;
                                          break;
                                        }
                                        if (f !== l) {
                                          e.next = 12;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 12:
                                        r = f;
                                      case 13:
                                        if (
                                          (c ||
                                            n.i18n.beforeLanguageSwitch(l, r),
                                          h && n.i18n.setLocaleCookie(r),
                                          !he.langDir)
                                        ) {
                                          e.next = 29;
                                          break;
                                        }
                                        if (
                                          ((g = n.i18n.fallbackLocale),
                                          !he.lazy)
                                        ) {
                                          e.next = 27;
                                          break;
                                        }
                                        if (!g) {
                                          e.next = 23;
                                          break;
                                        }
                                        return (
                                          (d = []),
                                          Array.isArray(g)
                                            ? (d = g.map(function (e) {
                                                return Ae(t, e);
                                              }))
                                            : "object" === Object(me.a)(g)
                                            ? (g[r] &&
                                                (d = d.concat(
                                                  g[r].map(function (e) {
                                                    return Ae(t, e);
                                                  })
                                                )),
                                              g.default &&
                                                (d = d.concat(
                                                  g.default.map(function (e) {
                                                    return Ae(t, e);
                                                  })
                                                )))
                                            : r !== g && d.push(Ae(t, g)),
                                          (e.next = 23),
                                          Promise.all(d)
                                        );
                                      case 23:
                                        return (e.next = 25), Ae(t, r);
                                      case 25:
                                        e.next = 29;
                                        break;
                                      case 27:
                                        return (
                                          (e.next = 29),
                                          Promise.all(
                                            he.localeCodes.map(function (e) {
                                              return Ae(t, e);
                                            })
                                          )
                                        );
                                      case 29:
                                        for (
                                          n.i18n.locale = r,
                                            p = he.normalizedLocales.find(
                                              function (e) {
                                                return e.code === r;
                                              }
                                            ) || { code: r },
                                            m = 0,
                                            b = Object.keys(
                                              n.i18n.localeProperties
                                            );
                                          m < b.length;
                                          m++
                                        )
                                          (v = b[m]),
                                            (n.i18n.localeProperties[v] =
                                              void 0);
                                        for (
                                          x = 0, k = Object.entries(p);
                                          x < k.length;
                                          x++
                                        )
                                          (y = Object(U.a)(k[x], 2)),
                                            (_ = y[0]),
                                            (w = y[1]),
                                            i.default.set(
                                              n.i18n.localeProperties,
                                              _,
                                              Object(lt.a)(w)
                                            );
                                        if (!he.vuex) {
                                          e.next = 36;
                                          break;
                                        }
                                        return (
                                          (e.next = 36),
                                          Ie(
                                            o,
                                            r,
                                            n.i18n.getLocaleMessage(r),
                                            he.vuex
                                          )
                                        );
                                      case 36:
                                        (O = t.route),
                                          (P = j(O, r)),
                                          c
                                            ? (n.i18n.__redirect = P)
                                            : (n.i18n.onLanguageSwitched(l, r),
                                              P && u(P));
                                      case 39:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (w = Pe(he.localeCodes, {
                            routesNameSeparator: he.routesNameSeparator,
                            defaultLocaleRouteNameSuffix:
                              he.defaultLocaleRouteNameSuffix,
                          })),
                          (j = function (e, t) {
                            if (
                              !t ||
                              n.i18n.differentDomains ||
                              he.strategy === be.STRATEGIES.NO_PREFIX
                            )
                              return "";
                            if (
                              w(e) === t &&
                              ((!b && !m) ||
                                t !== he.defaultLocale ||
                                he.strategy !==
                                  be.STRATEGIES.PREFIX_AND_DEFAULT)
                            )
                              return "";
                            var r = n.switchLocalePath(t);
                            return (
                              r || (r = n.localePath(e.fullPath, t)),
                              !r || r === e.fullPath || r.startsWith("//")
                                ? ""
                                : r
                            );
                          }),
                          (O = (function () {
                            var e = Object(r.a)(
                              regeneratorRuntime.mark(function e(r) {
                                var a, i, o, s, u;
                                return regeneratorRuntime.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          "/" !== r.path ||
                                          !he.rootRedirect
                                        ) {
                                          e.next = 5;
                                          break;
                                        }
                                        return (
                                          (a = 302),
                                          (i = he.rootRedirect),
                                          "string" != typeof he.rootRedirect &&
                                            ((a = he.rootRedirect.statusCode),
                                            (i = he.rootRedirect.path)),
                                          e.abrupt("return", [
                                            a,
                                            "/".concat(i),
                                            !0,
                                          ])
                                        );
                                      case 5:
                                        if (!(o = n.i18n.__redirect)) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          (n.i18n.__redirect = null),
                                          e.abrupt("return", [302, o])
                                        );
                                      case 9:
                                        if (
                                          ((s = {
                                            differentDomains:
                                              he.differentDomains,
                                            normalizedLocales:
                                              he.normalizedLocales,
                                          }),
                                          (n.i18n.__baseUrl = Te(
                                            he.baseUrl,
                                            t,
                                            n.i18n.locale,
                                            s
                                          )),
                                          (u =
                                            (he.detectBrowserLanguage &&
                                              C(r)) ||
                                            w(r) ||
                                            n.i18n.locale ||
                                            n.i18n.defaultLocale ||
                                            ""),
                                          !he.skipSettingLocaleOnNavigate)
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        (n.i18n.__pendingLocale = u),
                                          (n.i18n.__pendingLocalePromise =
                                            new Promise(function (e) {
                                              n.i18n.__resolvePendingLocalePromise =
                                                e;
                                            })),
                                          (e.next = 19);
                                        break;
                                      case 17:
                                        return (
                                          (e.next = 19), n.i18n.setLocale(u)
                                        );
                                      case 19:
                                        return e.abrupt("return", [null, null]);
                                      case 20:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (P = (function () {
                            var e = Object(r.a)(
                              regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (n.i18n.__pendingLocale) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          n.i18n.setLocale(
                                            n.i18n.__pendingLocale
                                          )
                                        );
                                      case 4:
                                        n.i18n.__resolvePendingLocalePromise(
                                          ""
                                        ),
                                          (n.i18n.__pendingLocale = null);
                                      case 6:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function () {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (S = (function () {
                            var e = Object(r.a)(
                              regeneratorRuntime.mark(function e() {
                                return regeneratorRuntime.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!n.i18n.__pendingLocale) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (
                                          (e.next = 3),
                                          n.i18n.__pendingLocalePromise
                                        );
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function () {
                              return e.apply(this, arguments);
                            };
                          })()),
                          (E = function () {
                            return "undefined" != typeof navigator &&
                              navigator.languages
                              ? we(he.normalizedLocales, navigator.languages)
                              : s && void 0 !== s.headers["accept-language"]
                              ? we(
                                  he.normalizedLocales,
                                  s.headers["accept-language"]
                                    .split(",")
                                    .map(function (e) {
                                      return e.split(";")[0];
                                    })
                                )
                              : void 0;
                          }),
                          (C = function (e) {
                            if (he.strategy !== be.STRATEGIES.NO_PREFIX)
                              if (b) {
                                if ("/" !== e.path) return "";
                              } else if (
                                m &&
                                !g &&
                                e.path.match(Oe(he.localeCodes))
                              )
                                return "";
                            var t;
                            (h && (t = n.i18n.getLocaleCookie())) || (t = E());
                            var r = t || p;
                            return !r ||
                              (h && !g && n.i18n.getLocaleCookie()) ||
                              r === n.i18n.locale
                              ? ""
                              : r;
                          }),
                          (R = function (e) {
                            (e.locales = Object(lt.a)(he.locales)),
                              (e.localeCodes = Object(lt.a)(he.localeCodes)),
                              (e.localeProperties = i.default.observable(
                                Object(lt.a)(
                                  he.normalizedLocales.find(function (t) {
                                    return t.code === e.locale;
                                  }) || { code: e.locale }
                                )
                              )),
                              (e.defaultLocale = he.defaultLocale),
                              (e.differentDomains = he.differentDomains),
                              (e.beforeLanguageSwitch =
                                he.beforeLanguageSwitch),
                              (e.onBeforeLanguageSwitch =
                                he.onBeforeLanguageSwitch),
                              (e.onLanguageSwitched = he.onLanguageSwitched),
                              (e.setLocaleCookie = function (e) {
                                return Ee(e, 0, {
                                  useCookie: h,
                                  cookieDomain: x,
                                  cookieKey: v,
                                  cookieSecure: k,
                                  cookieCrossOrigin: y,
                                });
                              }),
                              (e.getLocaleCookie = function () {
                                return Se(0, {
                                  useCookie: h,
                                  cookieKey: v,
                                  localeCodes: he.localeCodes,
                                });
                              }),
                              (e.setLocale = function (e) {
                                return _(e);
                              }),
                              (e.getBrowserLocale = function () {
                                return E();
                              }),
                              (e.finalizePendingLocaleChange = P),
                              (e.waitForPendingLocaleChange = S),
                              (e.__baseUrl = n.i18n.__baseUrl),
                              (e.__pendingLocale = n.i18n.__pendingLocale),
                              (e.__pendingLocalePromise =
                                n.i18n.__pendingLocalePromise),
                              (e.__resolvePendingLocalePromise =
                                n.i18n.__resolvePendingLocalePromise);
                          }),
                          "function" != typeof he.vueI18n)
                        ) {
                          e.next = 25;
                          break;
                        }
                        return (e.next = 22), he.vueI18n(t);
                      case 22:
                        (e.t0 = e.sent), (e.next = 26);
                        break;
                      case 25:
                        e.t0 = Object(lt.a)(he.vueI18n);
                      case 26:
                        if (
                          (((A = e.t0).componentInstanceCreatedListener = R),
                          (n.i18n = t.i18n = new ct.a(A)),
                          (n.i18n.locale = ""),
                          (n.i18n.fallbackLocale = A.fallbackLocale || ""),
                          R(n.i18n),
                          ($ = {
                            differentDomains: he.differentDomains,
                            normalizedLocales: he.normalizedLocales,
                          }),
                          (n.i18n.__baseUrl = Te(he.baseUrl, t, "", $)),
                          (n.i18n.__onNavigate = O),
                          (i.default.prototype.$nuxtI18nSeo = We),
                          (i.default.prototype.$nuxtI18nHead = Fe),
                          !o)
                        ) {
                          e.next = 58;
                          break;
                        }
                        if (((o.$i18n = n.i18n), !o.state.localeDomains)) {
                          e.next = 58;
                          break;
                        }
                        (T = ft(n.i18n.locales)), (e.prev = 41), T.s();
                      case 43:
                        if ((L = T.n()).done) {
                          e.next = 50;
                          break;
                        }
                        if ("string" != typeof (D = L.value)) {
                          e.next = 47;
                          break;
                        }
                        return e.abrupt("continue", 48);
                      case 47:
                        D.domain = o.state.localeDomains[D.code];
                      case 48:
                        e.next = 43;
                        break;
                      case 50:
                        e.next = 55;
                        break;
                      case 52:
                        (e.prev = 52), (e.t1 = e.catch(41)), T.e(e.t1);
                      case 55:
                        return (e.prev = 55), T.f(), e.finish(55);
                      case 58:
                        return (
                          (I = he.detectBrowserLanguage ? C(a) : "") ||
                            ((M = he.vuex) &&
                            M.syncLocale &&
                            o &&
                            "" !== o.state[M.moduleName].locale
                              ? (I = o.state[M.moduleName].locale)
                              : n.i18n.differentDomains
                              ? ((z = je(he.normalizedLocales)), (I = z))
                              : he.strategy !== be.STRATEGIES.NO_PREFIX &&
                                ((N = w(a)), (I = N))),
                          !I && h && (I = n.i18n.getLocaleCookie()),
                          I || (I = n.i18n.defaultLocale || ""),
                          (e.next = 64),
                          _(I, { initialSetup: !0 })
                        );
                      case 64:
                        e.next = 72;
                        break;
                      case 67:
                        (q = e.sent),
                          (B = Object(U.a)(q, 2))[0],
                          (F = B[1]) && location.assign(Object(d.c)(t.base, F));
                      case 72:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[41, 52, 55, 58]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        pt = n(151),
        mt = n(352),
        bt = n.n(mt),
        ht = n(55),
        vt = n.n(ht),
        xt = ["label", "ack"],
        kt = ["emitError"],
        yt = ["label"],
        _t = ["emitError"],
        wt = [
          "name",
          "channel",
          "statusProp",
          "persist",
          "teardown",
          "emitTimeout",
          "emitErrorsProp",
          "ioApiProp",
          "ioDataProp",
          "apiIgnoreEvts",
          "serverAPI",
          "clientAPI",
          "vuex",
          "namespaceCfg",
        ];
      function jt(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? jt(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : jt(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var Pt,
        St = bt()("nuxt-socket-io"),
        Et = function (e) {
          return e && "RefImpl" === e.constructor.name;
        },
        Ct = function (e, t) {
          return new Promise(function (n, r) {
            (t.timer = setTimeout(function () {
              return n(!0);
            }, e)),
              (t.abort = function () {
                clearTimeout(t.timer), r(new Error("AbortError"));
              });
          });
        },
        Rt = {};
      function At(e, t) {
        var n, r, a, i, o, s;
        if ("string" == typeof e) {
          var u,
            c = [],
            l = e.trim().split(/\s*\]\s*/);
          l.length > 1
            ? ((a = l[0]), (c = l[1].split(/\s*\[\s*/)))
            : (c = l[0].split(/\s*\[\s*/));
          var f = c,
            g = Object(U.a)(f, 2);
          if (((u = g[0]), (s = g[1]), u.includes("--\x3e"))) {
            var d = u.split(/\s*-->\s*/),
              p = Object(U.a)(d, 2);
            (n = p[0]), (r = p[1]);
          } else if (u.includes("<--")) {
            var m = u.split(/\s*<--\s*/),
              b = Object(U.a)(m, 2);
            (n = b[0]), (r = b[1]);
          } else n = u;
          if ("emitter" === t) {
            var h = n.split(/\s*\+\s*/),
              v = Object(U.a)(h, 2);
            (i = v[0]), (o = v[1]);
          } else void 0 === r && (r = n);
        }
        return { pre: a, post: s, evt: n, mapTo: r, emitEvt: i, msgLabel: o };
      }
      function $t(e, t) {
        var n;
        return (
          void 0 !== t &&
            (void 0 !== e[t]
              ? "object" === Object(me.a)(e[t])
                ? ((n = Array.isArray(e[t]) ? [] : {}), Object.assign(n, e[t]))
                : (n = e[t])
              : Pt('prop or data item "'.concat(t, '" not defined')),
            St("assigned ".concat(t, " to ").concat(n))),
          n
        );
      }
      function Tt(e, t, n) {
        void 0 !== t &&
          (void 0 !== e[t]
            ? "function" != typeof e[t] &&
              (Et(e[t]) ? (e[t].value = n) : (e[t] = n),
              St("assigned ".concat(n, " to ").concat(t)))
            : Pt("".concat(t, " not defined on instance")));
      }
      function Lt(e, t, n) {
        return Dt.apply(this, arguments);
      }
      function Dt() {
        return (Dt = Object(r.a)(
          regeneratorRuntime.mark(function e(t, n, r) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (void 0 === n) {
                      e.next = 8;
                      break;
                    }
                    if (!t[n]) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 4), t[n](r);
                  case 4:
                    return e.abrupt("return", e.sent);
                  case 7:
                    Pt("method ".concat(n, " not defined"));
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function It(e) {
        return e && Array.isArray(e) && e.length > 0;
      }
      var Mt = {
        clientApiEvents: function (e) {
          var t = e.ctx,
            n = e.store,
            a = e.socket,
            i = e.api,
            o = i.evts;
          Object.entries(o).forEach(function (e) {
            var o = Object(U.a)(e, 2),
              s = o[0],
              u = o[1].data,
              c = s + "Emit";
            void 0 !== t[s] &&
              void 0 !== u &&
              (Object.entries(u).forEach(function (e) {
                var n = Object(U.a)(e, 2),
                  r = n[0],
                  a = n[1];
                t.$set(t[s], r, a);
              }),
              St("Initialized data for", s, u)),
              void 0 === t[c] &&
                ((t[c] = (function () {
                  var e = Object(r.a)(
                    regeneratorRuntime.mark(function e(r) {
                      var o, u, l, f, g, d, p;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((u = (o = r || {}).label),
                                (l = o.ack),
                                (f = Object(Ve.a)(o, xt)),
                                (g = u || i.label),
                                ((d =
                                  Object.keys(f).length > 0
                                    ? f
                                    : Ot({}, t[s])).method = c),
                                !l)
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (e.next = 7),
                                n.dispatch("$nuxtSocket/emit", {
                                  label: g,
                                  socket: a,
                                  evt: s,
                                  msg: d,
                                })
                              );
                            case 7:
                              return (p = e.sent), e.abrupt("return", p);
                            case 11:
                              n.dispatch("$nuxtSocket/emit", {
                                label: g,
                                socket: a,
                                evt: s,
                                msg: d,
                                noAck: !0,
                              });
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                St("Registered clientAPI method", c));
          });
        },
        clientApiMethods: function (e) {
          var t = e.ctx,
            n = e.socket,
            a = e.api,
            i = a.methods,
            o = Object.assign({}, i, { getAPI: {} });
          Object.entries(o).forEach(function (e) {
            var i = Object(U.a)(e, 2),
              o = i[0];
            i[1],
              n.hasListeners(o) &&
                Pt("evt ".concat(o, " already has a listener registered")),
              n.on(
                o,
                (function () {
                  var e = Object(r.a)(
                    regeneratorRuntime.mark(function e(n, r) {
                      var i;
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("getAPI" !== o) {
                                e.next = 4;
                                break;
                              }
                              r && r(a), (e.next = 13);
                              break;
                            case 4:
                              if (void 0 === t[o]) {
                                e.next = 12;
                                break;
                              }
                              return (n.method = o), (e.next = 8), t[o](n);
                            case 8:
                              (i = e.sent), r && r(i), (e.next = 13);
                              break;
                            case 12:
                              r &&
                                r({
                                  emitErr: "notImplemented",
                                  msg: "Client has not yet implemented method (".concat(
                                    o,
                                    ")"
                                  ),
                                });
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              St("registered client api method ".concat(o)),
              "getAPI" !== o &&
                void 0 === t[o] &&
                Pt(
                  "client api method ".concat(o, " has not been defined. ") +
                    "Either update the client api or define the method so it can be used by callers"
                );
          });
        },
        clientAPI: function (e) {
          var t = e.ctx,
            n = e.store,
            r = e.socket,
            a = e.clientAPI;
          a.methods && Mt.clientApiMethods({ ctx: t, socket: r, api: a }),
            a.evts &&
              Mt.clientApiEvents({ ctx: t, store: n, socket: r, api: a }),
            n.commit("$nuxtSocket/SET_CLIENT_API", a),
            St("clientAPI registered", a);
        },
        serverApiEvents: function (e) {
          var t = e.ctx,
            n = e.socket,
            r = e.api,
            a = e.label,
            i = e.ioDataProp,
            o = e.apiIgnoreEvts,
            s = r.evts;
          Object.entries(s).forEach(function (e) {
            var r = Object(U.a)(e, 2),
              s = r[0],
              u = r[1],
              c = u.methods,
              l = void 0 === c ? [] : c,
              f = u.data;
            if (o.includes(s))
              St(
                "Event ".concat(
                  s,
                  ' is in ignore list ("apiIgnoreEvts"), not registering.'
                )
              );
            else {
              if (
                (n.hasListeners(s) &&
                  Pt("evt ".concat(s, " already has a listener registered")),
                0 === l.length)
              ) {
                var g = f;
                "object" === Object(me.a)(g) &&
                  (g = Array.isArray(f) ? [] : {}),
                  t.$set(t[i], s, g);
              } else
                l.forEach(function (e) {
                  void 0 === t[i][e] && t.$set(t[i], e, {}),
                    t.$set(t[i][e], s, Array.isArray(f) ? [] : {});
                });
              n.on(s, function (e, n) {
                St("serverAPI event ".concat(s, " rxd with msg"), e);
                var r = e.method,
                  a = e.data;
                void 0 !== r
                  ? (void 0 === t[i][r] && t.$set(t[i], r, {}),
                    t.$set(t[i][r], s, a))
                  : t.$set(t[i], s, a),
                  n && n({ ack: "ok" });
              }),
                St("Registered listener for ".concat(s, " on ").concat(a));
            }
          });
        },
        serverApiMethods: function (e) {
          var t = e.ctx,
            n = e.socket,
            a = e.store,
            i = e.api,
            o = e.label,
            s = e.ioApiProp,
            u = e.ioDataProp;
          Object.entries(i.methods).forEach(function (e) {
            var i = Object(U.a)(e, 2),
              c = i[0],
              l = i[1],
              f = l.msg,
              g = l.resp;
            void 0 === t[u][c] &&
              (t.$set(t[u], c, {}),
              void 0 !== f && t.$set(t[u][c], "msg", Ot({}, f)),
              void 0 !== g &&
                t.$set(t[u][c], "resp", Array.isArray(g) ? [] : {})),
              (t[s][c] = (function () {
                var e = Object(r.a)(
                  regeneratorRuntime.mark(function e(r) {
                    var i, l, f;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = c),
                              (l = void 0 !== r ? r : Ot({}, t[u][c].msg)),
                              St(
                                ""
                                  .concat(s, ":")
                                  .concat(o, ": Emitting ")
                                  .concat(i, " with ")
                                  .concat(l)
                              ),
                              (e.next = 5),
                              a.dispatch("$nuxtSocket/emit", {
                                label: o,
                                socket: n,
                                evt: i,
                                msg: l,
                              })
                            );
                          case 5:
                            return (
                              (f = e.sent),
                              (t[u][c].resp = f),
                              e.abrupt("return", f)
                            );
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })());
          });
        },
        serverAPI: function (e) {
          return Object(r.a)(
            regeneratorRuntime.mark(function t() {
              var n, r, a, i, o, s, u, c, l, f, g, d, p;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((n = e.ctx),
                        (r = e.socket),
                        (a = e.store),
                        (i = e.label),
                        (o = e.apiIgnoreEvts),
                        (s = e.ioApiProp),
                        (u = e.ioDataProp),
                        (c = e.serverAPI),
                        (l = e.clientAPI),
                        (f = void 0 === l ? {} : l),
                        void 0 !== n[s])
                      ) {
                        t.next = 4;
                        break;
                      }
                      return (
                        console.error(
                          "[nuxt-socket-io]: ".concat(
                            s,
                            " needs to be defined in the current context for "
                          ) + "serverAPI registration (vue requirement)"
                        ),
                        t.abrupt("return")
                      );
                    case 4:
                      return (
                        (g = c.label || i),
                        St("register api for", g),
                        (d = a.state.$nuxtSocket.ioApis[g] || {}),
                        (t.next = 9),
                        a.dispatch("$nuxtSocket/emit", {
                          label: g,
                          socket: r,
                          evt: c.evt || "getAPI",
                          msg: c.data || {},
                        })
                      );
                    case 9:
                      (p = t.sent),
                        f.label === p.label &&
                        parseFloat(f.version) === parseFloat(p.version)
                          ? (Object.assign(d, f),
                            a.commit("$nuxtSocket/SET_API", {
                              label: g,
                              api: d,
                            }),
                            St("api for ".concat(g, " registered"), d))
                          : parseFloat(d.version) !== parseFloat(p.version) &&
                            (Object.assign(d, p),
                            a.commit("$nuxtSocket/SET_API", {
                              label: g,
                              api: d,
                            }),
                            St("api for ".concat(g, " registered"), d)),
                        n.$set(n, s, d),
                        void 0 !== d.methods &&
                          (Mt.serverApiMethods({
                            ctx: n,
                            socket: r,
                            store: a,
                            api: d,
                            label: i,
                            ioApiProp: s,
                            ioDataProp: u,
                          }),
                          St(
                            "Attached methods for ".concat(i, " to ").concat(s),
                            Object.keys(d.methods)
                          )),
                        void 0 !== d.evts &&
                          (Mt.serverApiEvents({
                            ctx: n,
                            socket: r,
                            api: d,
                            label: i,
                            ioDataProp: u,
                            apiIgnoreEvts: o,
                          }),
                          St(
                            "registered evts for ".concat(i, " to ").concat(s)
                          )),
                        n.$set(n[s], "ready", !0),
                        St("ioApi", n[s]);
                    case 17:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        emitErrors: function (e) {
          var t = e.ctx,
            n = e.err,
            r = e.emitEvt,
            a = e.emitErrorsProp;
          void 0 === t[a][r] && (t[a][r] = []), t[a][r].push(n);
        },
        emitTimeout: function (e) {
          return Object(r.a)(
            regeneratorRuntime.mark(function t() {
              var n, r, a, i, o, s;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = e.ctx),
                        (r = e.emitEvt),
                        (a = e.emitErrorsProp),
                        (i = e.emitTimeout),
                        (o = e.timerObj),
                        (t.next = 3),
                        Ct(i, o).catch(function () {})
                      );
                    case 3:
                      if (t.sent) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return");
                    case 6:
                      if (
                        ((s = {
                          message: "emitTimeout",
                          emitEvt: r,
                          emitTimeout: i,
                          hint: [
                            "1) Is ".concat(r, " supported on the backend?"),
                            "2) Is emitTimeout ".concat(i, " ms too small?"),
                          ].join("\r\n"),
                          timestamp: Date.now(),
                        }),
                        St("emitEvt timed out", s),
                        void 0 === n || "object" !== Object(me.a)(n[a]))
                      ) {
                        t.next = 12;
                        break;
                      }
                      Mt.emitErrors({
                        ctx: n,
                        err: s,
                        emitEvt: r,
                        emitErrorsProp: a,
                      }),
                        (t.next = 13);
                      break;
                    case 12:
                      throw s;
                    case 13:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        emitBacks: function (e) {
          var t = e.ctx,
            n = e.socket;
          e.entries.forEach(function (e) {
            var a,
              i = At(e, "emitBack"),
              o = i.pre,
              s = i.post,
              u = i.evt,
              c = i.mapTo;
            (a = t),
              void 0 !==
              c.split(".").reduce(function (e, t) {
                if (void 0 !== e && void 0 !== e[t]) return e[t];
              }, a)
                ? (St("registered local emitBack", { mapTo: c }),
                  t.$watch(
                    c,
                    (function () {
                      var e = Object(r.a)(
                        regeneratorRuntime.mark(function e(r, a) {
                          var i, l;
                          return regeneratorRuntime.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    St("local data changed", u, r),
                                    (e.next = 3),
                                    Lt(t, o, { data: r, oldData: a })
                                  );
                                case 3:
                                  if (!1 !== e.sent) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 6:
                                  if (
                                    (St("Emitting back:", {
                                      evt: u,
                                      mapTo: c,
                                      data: r,
                                    }),
                                    (i = n.emitP(u, { data: r })),
                                    void 0 !== s)
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 10:
                                  return (e.next = 12), i;
                                case 12:
                                  return (
                                    (l = e.sent),
                                    Lt(t, s, l),
                                    e.abrupt("return", l)
                                  );
                                case 15:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t, n) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ))
                : Pt(
                    "Specified emitback ".concat(
                      c,
                      " is not defined in component"
                    )
                  );
          });
        },
        emitBacksVuex: function (e) {
          var t = e.ctx,
            n = e.store,
            a = e.useSocket,
            i = e.socket;
          e.entries.forEach(function (e) {
            var o = At(e, "emitBack"),
              s = o.pre,
              u = o.post,
              c = o.evt,
              l = o.mapTo;
            a.registeredWatchers.includes(l) ||
              n.watch(
                function (e) {
                  var t,
                    n =
                      ((t = e),
                      l.split(/[/.]/).reduce(function (e, t) {
                        if (void 0 !== e && void 0 !== e[t]) return e[t];
                      }, t));
                  if (void 0 === n)
                    throw new Error(
                      [
                        "[nuxt-socket-io]: Trying to register emitback ".concat(
                          l,
                          " failed"
                        ),
                        "because it is not defined in Vuex.",
                        "Is state set up correctly in your stores folder?",
                      ].join("\n")
                    );
                  return (
                    a.registeredWatchers.push(l),
                    St("emitBack registered", { mapTo: l }),
                    n
                  );
                },
                (function () {
                  var e = Object(r.a)(
                    regeneratorRuntime.mark(function e(n, r) {
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                St("vuex emitBack data changed", {
                                  emitBack: c,
                                  data: n,
                                  oldData: r,
                                }),
                                (e.next = 3),
                                Lt(t, s, { data: n, oldData: r })
                              );
                            case 3:
                              if (!1 !== e.sent) {
                                e.next = 6;
                                break;
                              }
                              return e.abrupt("return");
                            case 6:
                              St("Emitting back:", {
                                evt: c,
                                mapTo: l,
                                data: n,
                              }),
                                i.emit(c, { data: n }, function (e) {
                                  Lt(t, u, e);
                                });
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })()
              );
          });
        },
        emitters: function (e) {
          var t = e.ctx,
            n = e.socket,
            a = e.entries,
            i = e.emitTimeout,
            o = e.emitErrorsProp;
          a.forEach(function (e) {
            var a = At(e, "emitter"),
              s = a.pre,
              u = a.post,
              c = a.mapTo,
              l = a.emitEvt,
              f = a.msgLabel;
            (t[l] = Object(r.a)(
              regeneratorRuntime.mark(function e() {
                var r,
                  a,
                  g,
                  d,
                  p,
                  m,
                  b,
                  h,
                  v = arguments;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            v.length > 0 && void 0 !== v[0] ? v[0] : $t(t, f)),
                          St("Emit evt", { emitEvt: l, msg: r }),
                          (e.next = 4),
                          Lt(t, s, r)
                        );
                      case 4:
                        if (!1 !== e.sent) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return");
                      case 7:
                        return (
                          (a = [n.emitP(l, r)]),
                          (g = {}),
                          i &&
                            a.push(
                              Mt.emitTimeout({
                                ctx: t,
                                emitEvt: l,
                                emitErrorsProp: o,
                                emitTimeout: i,
                                timerObj: g,
                              })
                            ),
                          (e.next = 12),
                          Promise.race(a)
                        );
                      case 12:
                        if (
                          ((d = e.sent),
                          St("Emitter response rxd", { emitEvt: l, resp: d }),
                          g.abort && g.abort(),
                          (m = (p = d || {}).emitError),
                          (b = Object(Ve.a)(p, kt)),
                          void 0 === m)
                        ) {
                          e.next = 26;
                          break;
                        }
                        if (
                          ((h = {
                            message: m,
                            emitEvt: l,
                            errorDetails: b,
                            timestamp: Date.now(),
                          }),
                          St("Emit error occurred", h),
                          "object" !== Object(me.a)(t[o]))
                        ) {
                          e.next = 23;
                          break;
                        }
                        Mt.emitErrors({
                          ctx: t,
                          err: h,
                          emitEvt: l,
                          emitErrorsProp: o,
                        }),
                          (e.next = 24);
                        break;
                      case 23:
                        throw h;
                      case 24:
                        e.next = 29;
                        break;
                      case 26:
                        return (
                          Tt(t.$data || t, c, d),
                          Lt(t, u, d),
                          e.abrupt("return", d)
                        );
                      case 29:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
              St("Emitter created", { emitter: l });
          });
        },
        listeners: function (e) {
          var t = e.ctx,
            n = e.socket;
          e.entries.forEach(function (e) {
            var a = At(e),
              i = a.pre,
              o = a.post,
              s = a.evt,
              u = a.mapTo;
            St("Registered local listener", s),
              n.on(
                s,
                (function () {
                  var e = Object(r.a)(
                    regeneratorRuntime.mark(function e(n) {
                      return regeneratorRuntime.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                St("Local listener received data", {
                                  evt: s,
                                  resp: n,
                                }),
                                (e.next = 3),
                                Lt(t, i)
                              );
                            case 3:
                              Tt(t.$data || t, u, n), Lt(t, o, n);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
          });
        },
        listenersVuex: function (e) {
          var t = e.ctx,
            n = e.socket,
            a = e.entries,
            i = e.storeFn,
            o = e.useSocket;
          a.forEach(function (e) {
            var a = At(e),
              s = a.pre,
              u = a.post,
              c = a.evt,
              l = a.mapTo;
            function f() {
              return (f = Object(r.a)(
                regeneratorRuntime.mark(function e(n) {
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            St("Vuex listener received data", {
                              evt: c,
                              resp: n,
                            }),
                            (e.next = 3),
                            Lt(t, s)
                          );
                        case 3:
                          i(l, n), Lt(t, u, n);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )).apply(this, arguments);
            }
            o.registeredVuexListeners.includes(c) ||
              (n.on(c, function (e) {
                return f.apply(this, arguments);
              }),
              St("Registered vuex listener", c),
              o.registeredVuexListeners.push(c));
          });
        },
        namespace: function (e) {
          var t = e.ctx,
            n = e.namespaceCfg,
            r = e.socket,
            a = e.emitTimeout,
            i = e.emitErrorsProp,
            o = n.emitters,
            s = void 0 === o ? [] : o,
            u = n.listeners,
            c = void 0 === u ? [] : u,
            l = n.emitBacks,
            f = { emitters: s, listeners: c, emitBacks: void 0 === l ? [] : l };
          Object.entries(f).forEach(function (e) {
            var n = Object(U.a)(e, 2),
              o = n[0],
              s = n[1];
            Array.isArray(s)
              ? Mt[o]({
                  ctx: t,
                  socket: r,
                  entries: s,
                  emitTimeout: a,
                  emitErrorsProp: i,
                })
              : Pt(
                  "[nuxt-socket-io]: ".concat(
                    o,
                    " needs to be an array in namespace config"
                  )
                );
          });
        },
        vuexModule: function (e) {
          e.registerModule(
            "$nuxtSocket",
            {
              namespaced: !0,
              state: {
                clientApis: {},
                ioApis: {},
                emitErrors: {},
                emitTimeouts: {},
              },
              mutations: {
                SET_API: function (e, t) {
                  var n = t.label,
                    r = t.api;
                  e.ioApis[n] = r;
                },
                SET_CLIENT_API: function (e, t) {
                  var n = t.label,
                    r = void 0 === n ? "clientAPI" : n,
                    a = Object(Ve.a)(t, yt);
                  e.clientApis[r] = a;
                },
                SET_EMIT_ERRORS: function (e, t) {
                  var n = t.label,
                    r = t.emitEvt,
                    a = t.err;
                  void 0 === e.emitErrors[n] && (e.emitErrors[n] = {}),
                    void 0 === e.emitErrors[n][r] && (e.emitErrors[n][r] = []),
                    e.emitErrors[n][r].push(a);
                },
                SET_EMIT_TIMEOUT: function (e, t) {
                  var n = t.label,
                    r = t.emitTimeout;
                  e.emitTimeouts[n] = r;
                },
              },
              actions: {
                emit: function (e, t) {
                  return Object(r.a)(
                    regeneratorRuntime.mark(function n() {
                      var r, a, i, o, s, u, c, l, f, g, d, p, m, b, h, v, x;
                      return regeneratorRuntime.wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                ((r = e.state),
                                (a = e.commit),
                                (i = t.label),
                                (o = t.socket),
                                (s = void 0 === o ? Rt[i] : o),
                                (u = t.evt),
                                (c = t.msg),
                                (l = t.emitTimeout),
                                (f = void 0 === l ? r.emitTimeouts[i] : l),
                                (g = t.noAck),
                                St(
                                  '$nuxtSocket vuex action "emit" dispatched',
                                  i,
                                  u
                                ),
                                void 0 !== s)
                              ) {
                                n.next = 5;
                                break;
                              }
                              throw new Error(
                                "socket instance required. Please provide a valid socket label or socket instance"
                              );
                            case 5:
                              if (
                                (Mt.emitP(s),
                                St("Emitting ".concat(u, " with msg"), c),
                                (d = {}),
                                (p = [s.emitP(u, c)]),
                                !g)
                              ) {
                                n.next = 11;
                                break;
                              }
                              return n.abrupt("return");
                            case 11:
                              return (
                                f &&
                                  p.push(
                                    Mt.emitTimeout({
                                      emitTimeout: f,
                                      timerObj: d,
                                    }).catch(function (e) {
                                      if (void 0 === i || "" === i)
                                        throw new Error(
                                          JSON.stringify(e, null, "\t")
                                        );
                                      a("SET_EMIT_ERRORS", {
                                        label: i,
                                        emitEvt: u,
                                        err: e,
                                      }),
                                        St(
                                          "[nuxt-socket-io]: ".concat(
                                            i,
                                            " Emit error occurred and logged to vuex "
                                          ),
                                          e
                                        );
                                    })
                                  ),
                                (n.next = 14),
                                Promise.race(p)
                              );
                            case 14:
                              if (
                                ((m = n.sent),
                                St("Emitter response rxd", { evt: u, resp: m }),
                                d.abort && d.abort(),
                                (h = (b = m || {}).emitError),
                                (v = Object(Ve.a)(b, _t)),
                                void 0 === h)
                              ) {
                                n.next = 29;
                                break;
                              }
                              if (
                                ((x = {
                                  message: h,
                                  emitEvt: u,
                                  errorDetails: v,
                                  timestamp: Date.now(),
                                }),
                                St("Emit error occurred", x),
                                void 0 === i || "" === i)
                              ) {
                                n.next = 26;
                                break;
                              }
                              St(
                                "[nuxt-socket-io]: "
                                  .concat(i, " Emit error ")
                                  .concat(
                                    x.message,
                                    " occurred and logged to vuex "
                                  ),
                                x
                              ),
                                a("SET_EMIT_ERRORS", {
                                  label: i,
                                  emitEvt: u,
                                  err: x,
                                }),
                                (n.next = 27);
                              break;
                            case 26:
                              throw new Error(JSON.stringify(x, null, "\t"));
                            case 27:
                              n.next = 30;
                              break;
                            case 29:
                              return n.abrupt("return", m);
                            case 30:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  )();
                },
              },
            },
            { preserveState: !1 }
          );
        },
        vuexOpts: function (e) {
          var t = e.ctx,
            n = e.vuexOpts,
            r = e.useSocket,
            a = e.socket,
            i = e.store,
            o = n.mutations,
            s = void 0 === o ? [] : o,
            u = n.actions,
            c = void 0 === u ? [] : u,
            l = n.emitBacks,
            f = { mutations: s, actions: c, emitBacks: void 0 === l ? [] : l },
            g = { mutations: "commit", actions: "dispatch" };
          Object.entries(f).forEach(function (e) {
            var n = Object(U.a)(e, 2),
              o = n[0],
              s = n[1];
            if (Array.isArray(s)) {
              var u = g[o];
              u
                ? Mt.listenersVuex({
                    ctx: t,
                    socket: a,
                    entries: s,
                    storeFn: i[u],
                    useSocket: r,
                  })
                : Mt.emitBacksVuex({
                    ctx: t,
                    store: i,
                    useSocket: r,
                    socket: a,
                    entries: s,
                  });
            } else Pt("[nuxt-socket-io]: vuexOption ".concat(o, " needs to be an array"));
          });
        },
        socketStatus: function (e, t, n, r) {
          var i = { connectUrl: n };
          [
            "connect_error",
            "connect_timeout",
            "reconnect",
            "reconnect_attempt",
            "reconnect_error",
            "reconnect_failed",
            "ping",
            "pong",
          ].forEach(function (n) {
            var o = n
              .replace(/[_\-\s](.)/g, function (e) {
                return e.toUpperCase();
              })
              .replace(/[-_\s]/g, "")
              .replace(/^(.)/, function (e) {
                return e.toLowerCase();
              })
              .replace(/[^\w\s]/gi, "");
            (i[o] = ""),
              t.io.on(n, function (t) {
                Object.assign(e[r], Object(a.a)({}, o, t));
              });
          }),
            Object.assign(e, Object(a.a)({}, r, i));
        },
        teardown: function (e) {
          var t = e.ctx,
            n = e.socket,
            r = e.useSocket;
          t.$once("closeSockets", function () {
            St("closing socket id=" + n.id), n.removeAllListeners(), n.close();
          }),
            t.registeredTeardown ||
              ((t.onComponentDestroy = t.$destroy || t.onUnmounted),
              St("teardown enabled for socket", { name: r.name }),
              (t.$destroy = function () {
                St("component destroyed, closing socket(s)", {
                  name: r.name,
                  url: r.url,
                }),
                  (r.registeredVuexListeners = []),
                  t.$emit("closeSockets"),
                  t.onComponentDestroy && t.onComponentDestroy();
              }),
              t.onUnmounted && (t.onUnmounted = t.$destroy),
              (t.registeredTeardown = !0)),
            n.on("disconnect", function () {
              St("server disconnected", { name: r.name, url: r.url }),
                n.close();
            });
        },
        stubs: function (e) {
          e.$on ||
            ((e.$once = function () {
              return vt.a.once.apply(vt.a, arguments);
            }),
            (e.$on = function () {
              return vt.a.on.apply(vt.a, arguments);
            }),
            (e.$off = function () {
              return vt.a.off.apply(vt.a, arguments);
            }),
            (e.$emit = function () {
              return vt.a.emit.apply(vt.a, arguments);
            })),
            e.$set ||
              (e.$set = function (e, t, n) {
                Et(e[t]) ? (e[t].value = n) : (e[t] = n);
              }),
            e.$watch || (e.$watch = function (e, t) {});
        },
        emitP: function (e) {
          e.emitP = function (t, n) {
            return new Promise(function (r) {
              return e.emit(t, n, r);
            });
          };
        },
        onceP: function (e) {
          e.onceP = function (t) {
            return new Promise(function (n) {
              return e.once(t, n);
            });
          };
        },
      };
      function zt(e) {
        var t = e.name,
          n = e.channel,
          r = void 0 === n ? "" : n,
          a = e.statusProp,
          i = void 0 === a ? "socketStatus" : a,
          o = e.persist,
          s = e.teardown,
          u = void 0 === s ? !o : s,
          c = e.emitTimeout,
          l = e.emitErrorsProp,
          f = void 0 === l ? "emitErrors" : l,
          g = e.ioApiProp,
          d = void 0 === g ? "ioApi" : g,
          p = e.ioDataProp,
          m = void 0 === p ? "ioData" : p,
          b = e.apiIgnoreEvts,
          h = void 0 === b ? [] : b,
          v = e.serverAPI,
          x = e.clientAPI,
          k = e.vuex,
          y = e.namespaceCfg,
          _ = Object(Ve.a)(e, wt),
          w = this.$config,
          j = w.nuxtSocketIO,
          O = this.$store || this.store,
          P = Ot({}, j);
        w.io &&
          (Object.assign(P, w.io),
          (P.sockets = It(j.sockets) ? j.sockets : []),
          It(w.io.sockets) &&
            w.io.sockets.forEach(function (e) {
              void 0 ===
                P.sockets.find(function (t) {
                  return t.name === e.name;
                }) && P.sockets.push(e);
            }));
        var S = Ot(Ot({}, P), e),
          E = S.sockets;
        if ((S.warnings, S.info, (Pt = function () {}), function () {}, !It(E)))
          throw new Error(
            "Please configure sockets if planning to use nuxt-socket-io: \r\n [{name: '', url: ''}]"
          );
        Mt.stubs(this);
        var C = null;
        (C = t
          ? E.find(function (e) {
              return e.name === t;
            })
          : E.find(function (e) {
              return !0 === e.default;
            })) || (C = E[0]),
          C.name || (C.name = "dflt"),
          C.url ||
            Pt(
              'URL not defined for socket "'.concat(
                C.name,
                '". Defaulting to "window.location"'
              )
            ),
          C.registeredWatchers || (C.registeredWatchers = []),
          C.registeredVuexListeners || (C.registeredVuexListeners = []);
        var R = C.url;
        R && (R += r);
        var A,
          $ = C.namespaces,
          T = void 0 === $ ? {} : $,
          L = o && "string" == typeof o ? o : "".concat(C.name).concat(r);
        function D() {
          R
            ? ((A = Object(pt.default)(R, _)), C.name)
            : ((A = Object(pt.default)(r, _)), C.name, window.location);
        }
        o
          ? Rt[L]
            ? (St("resuing persisted socket ".concat(L)),
              (A = Rt[L]).disconnected &&
                (St("persisted socket disconnected, reconnecting..."), D()))
            : (St(
                "socket ".concat(
                  L,
                  " does not exist, creating and connecting to it.."
                )
              ),
              D(),
              (Rt[L] = A))
          : D(),
          Mt.emitP(A),
          Mt.onceP(A),
          O.state.$nuxtSocket ||
            (St("vuex store $nuxtSocket does not exist....registering it"),
            Mt.vuexModule(O)),
          c &&
            O.commit("$nuxtSocket/SET_EMIT_TIMEOUT", {
              label: L,
              emitTimeout: c,
            });
        var I = Object.assign(Ot({}, T[r]), y);
        (I.emitters || I.listeners || I.emitBacks) &&
          (Mt.namespace({
            ctx: this,
            namespaceCfg: I,
            socket: A,
            emitTimeout: c,
            emitErrorsProp: f,
          }),
          St("namespaces configured for socket", {
            name: C.name,
            channel: r,
            namespaceCfg: y,
          })),
          v &&
            Mt.serverAPI({
              store: O,
              label: L,
              apiIgnoreEvts: h,
              ioApiProp: d,
              ioDataProp: m,
              ctx: this,
              socket: A,
              emitTimeout: c,
              emitErrorsProp: f,
              serverAPI: v,
              clientAPI: x,
            }),
          x && Mt.clientAPI({ ctx: this, store: O, socket: A, clientAPI: x });
        var M = Ot(Ot({}, C.vuex), k);
        return (
          M &&
            (Mt.vuexOpts({
              ctx: this,
              vuexOpts: M,
              useSocket: C,
              socket: A,
              store: O,
            }),
            St("vuexOpts configured for socket", {
              name: C.name,
              vuexOpts: M,
            })),
          void 0 !== this.socketStatus &&
            "object" === Object(me.a)(this.socketStatus) &&
            (Mt.socketStatus(this, A, R || window.location.origin, i),
            St("socketStatus registered for socket", { name: C.name, url: R })),
          u && Mt.teardown({ ctx: this, socket: A, useSocket: C }),
          A
        );
      }
      var Nt = function (e, t) {
          t("nuxtSocket", zt);
        },
        Ut = n(101),
        qt = n.n(Ut),
        Bt = n(353);
      function Ft(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Wt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Ft(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Ft(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Ht(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return Vt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Vt(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function Vt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      for (
        var Kt = {
            setBaseURL: function (e) {
              this.defaults.baseURL = e;
            },
            setHeader: function (e, t) {
              var n,
                r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                a = Ht(Array.isArray(r) ? r : [r]);
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var i = n.value;
                  t
                    ? (this.defaults.headers[i][e] = t)
                    : delete this.defaults.headers[i][e];
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
            },
            setToken: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "common",
                r = e ? (t ? t + " " : "") + e : null;
              this.setHeader("Authorization", r, n);
            },
            onRequest: function (e) {
              this.interceptors.request.use(function (t) {
                return e(t) || t;
              });
            },
            onResponse: function (e) {
              this.interceptors.response.use(function (t) {
                return e(t) || t;
              });
            },
            onRequestError: function (e) {
              this.interceptors.request.use(void 0, function (t) {
                return e(t) || Promise.reject(t);
              });
            },
            onResponseError: function (e) {
              this.interceptors.response.use(void 0, function (t) {
                return e(t) || Promise.reject(t);
              });
            },
            onError: function (e) {
              this.onRequestError(e), this.onResponseError(e);
            },
            create: function (e) {
              return Jt(Object(Bt.a)(e, this.defaults));
            },
          },
          Xt = function () {
            var e = Gt[Yt];
            Kt["$" + e] = function () {
              return this[e].apply(this, arguments).then(function (e) {
                return e && e.data;
              });
            };
          },
          Yt = 0,
          Gt = [
            "request",
            "delete",
            "get",
            "head",
            "options",
            "post",
            "put",
            "patch",
          ];
        Yt < Gt.length;
        Yt++
      )
        Xt();
      var Jt = function (e) {
          var t = qt.a.create(e);
          return (
            (t.CancelToken = qt.a.CancelToken),
            (t.isCancel = qt.a.isCancel),
            (function (e) {
              for (var t in Kt) e[t] = Kt[t].bind(e);
            })(t),
            t.onRequest(function (e) {
              e.headers = Wt(Wt({}, t.defaults.headers.common), e.headers);
            }),
            Qt(t),
            t
          );
        },
        Qt = function (e) {
          var t = {
              finish: function () {},
              start: function () {},
              fail: function () {},
              set: function () {},
            },
            n = function () {
              var e = "undefined" != typeof window && window.$nuxt;
              return e && e.$loading && e.$loading.set ? e.$loading : t;
            },
            r = 0;
          e.onRequest(function (e) {
            (e && !1 === e.progress) || r++;
          }),
            e.onResponse(function (e) {
              (e && e.config && !1 === e.config.progress) ||
                (--r <= 0 && ((r = 0), n().finish()));
            }),
            e.onError(function (e) {
              (e && e.config && !1 === e.config.progress) ||
                (r--,
                qt.a.isCancel(e)
                  ? r <= 0 && ((r = 0), n().finish())
                  : (n().fail(), n().finish()));
            });
          var a = function (e) {
            if (r && e.total) {
              var t = (100 * e.loaded) / (e.total * r);
              n().set(Math.min(100, t));
            }
          };
          (e.defaults.onUploadProgress = a),
            (e.defaults.onDownloadProgress = a);
        },
        Zt = function (e, t) {
          var n = (e.$config && e.$config.axios) || {},
            r =
              n.browserBaseURL ||
              n.browserBaseUrl ||
              n.baseURL ||
              n.baseUrl ||
              "http://localhost:3000/",
            a = Jt({
              baseURL: r,
              headers: {
                common: { Accept: "application/json, text/plain, */*" },
                delete: {},
                get: {},
                head: {},
                post: {},
                put: {},
                patch: {},
              },
            });
          (e.$axios = a), t("axios", a);
        },
        en = n(354),
        tn = n.n(en),
        nn = function (e, t) {
          var n = e.req,
            r = e.res;
          t("cookies", tn()(n, r, !0));
        },
        rn = n(157),
        an = n(158);
      i.default.component("minority-button", rn.a),
        i.default.component("minority-input", an.a);
      var on = n(355);
      i.default.use(on.VueReCaptcha, {
        siteKey: "6LfJLLEUAAAAAMFJyo-R30AXQ0WTrq6nF65xqTM3",
      });
      var sn = function (e) {
          var t = e.store,
            n = e.app;
          e.req,
            n.$cookies.get("auth") &&
              t.commit("user/setToken", t.getters["user/token"]),
            setInterval(function () {
              var e = n.$cookies.get("auth");
              e &&
                t.getters["user/token"] !== e.access_token &&
                t.commit("user/setToken", e.access_token);
            });
        },
        un = function (e) {
          var t = e.app;
          e.req,
            t.$axios.onRequest(function (e) {
              e.headers.common["X-Application-Language"] = t.i18n.locale;
            });
        },
        cn = n(356),
        ln = n.n(cn),
        fn = n(1),
        gn = n.n(fn);
      gn.a.locale("ru"), i.default.use(ln.a, { moment: gn.a });
      var dn = function (e, t) {
        t("getHostname", function () {
          return window.location.host;
        });
      };
      function pn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? pn(Object(n), !0).forEach(function (t) {
                Object(a.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : pn(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      i.default.component(c.a.name, c.a),
        i.default.component(
          f.a.name,
          mn(
            mn({}, f.a),
            {},
            {
              render: function (e, t) {
                return (
                  f.a._warned ||
                    ((f.a._warned = !0),
                    console.warn(
                      "<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead"
                    )),
                  f.a.render(e, t)
                );
              },
            }
          )
        ),
        i.default.component(L.name, L),
        i.default.component("NChild", L),
        i.default.component(q.name, q),
        Object.defineProperty(i.default.prototype, "$nuxt", {
          get: function () {
            var e = this.$root.$options.$nuxt;
            return e || "undefined" == typeof window ? e : window.$nuxt;
          },
          configurable: !0,
        }),
        i.default.use(s.a, {
          keyName: "head",
          attribute: "data-n-head",
          ssrAttribute: "data-n-head-ssr",
          tagIDKeyName: "hid",
        });
      var bn = {
          name: "page",
          mode: "out-in",
          appear: !1,
          appearClass: "appear",
          appearActiveClass: "appear-active",
          appearToClass: "appear-to",
        },
        hn = o.a.Store.prototype.registerModule;
      function vn(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = Array.isArray(e)
            ? !!e.reduce(function (e, t) {
                return e && e[t];
              }, this.state)
            : e in this.state;
        return hn.call(this, e, t, mn({ preserveState: r }, n));
      }
      function xn(e) {
        return kn.apply(this, arguments);
      }
      function kn() {
        return (kn = Object(r.a)(
          regeneratorRuntime.mark(function e(t) {
            var n,
              a,
              o,
              s,
              u,
              c,
              l,
              f,
              g = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (f = function (e, t) {
                        if (!e)
                          throw new Error(
                            "inject(key, value) has no key provided"
                          );
                        if (void 0 === t)
                          throw new Error(
                            "inject('".concat(
                              e,
                              "', value) has no value provided"
                            )
                          );
                        (s[(e = "$" + e)] = t),
                          s.context[e] || (s.context[e] = t),
                          (o[e] = s[e]);
                        var n = "__nuxt_" + e + "_installed__";
                        i.default[n] ||
                          ((i.default[n] = !0),
                          i.default.use(function () {
                            Object.prototype.hasOwnProperty.call(
                              i.default.prototype,
                              e
                            ) ||
                              Object.defineProperty(i.default.prototype, e, {
                                get: function () {
                                  return this.$root.$options[e];
                                },
                              });
                          }));
                      }),
                      (n = g.length > 1 && void 0 !== g[1] ? g[1] : {}),
                      (e.next = 4),
                      T(0, n)
                    );
                  case 4:
                    return (
                      (a = e.sent),
                      ((o = ce(t)).$router = a),
                      (o.registerModule = vn),
                      (s = mn(
                        {
                          head: {
                            title: "Melonity - Ð¿Ñ€Ð¸Ð²Ð°Ñ‚Ð½Ñ‹Ð¹ Ñ‡Ð¸Ñ‚ Dota 2",
                            meta: [
                              { charset: "utf-8" },
                              {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1",
                              },
                              {
                                hid: "description",
                                name: "description",
                                content:
                                  "Ð’Ð¾Ð·Ñ€Ð¾Ð¶Ð´ÐµÐ½Ð¸Ðµ Umbrella Corporation. MapHack, Auto-Combo (Invoker, Tinker Ð¸ Ñ‚.Ð´.), Teleport ESP, BlockCourier, Ð·Ð°Ñ‰Ð¸Ñ‚Ð° Ð¾Ñ‚ VAC, Ð½Ð¸Ð·ÐºÐ°Ñ Ñ†ÐµÐ½Ð° Ð¸ Ð»ÑƒÑ‡ÑˆÐ°Ñ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ°!",
                              },
                              {
                                name: "enot",
                                content:
                                  "5811606898367G5TiYVTYjQzUYbB8rmvGeOasHIz4rPqZ",
                              },
                            ],
                            link: [
                              {
                                rel: "icon",
                                type: "image/x-icon",
                                href: "/favicon.png",
                              },
                            ],
                            style: [],
                            script: [],
                          },
                          store: o,
                          router: a,
                          nuxt: {
                            defaultTransition: bn,
                            transitions: [bn],
                            setTransitions: function (e) {
                              return (
                                Array.isArray(e) || (e = [e]),
                                (e = e.map(function (e) {
                                  return e
                                    ? "string" == typeof e
                                      ? Object.assign({}, bn, { name: e })
                                      : Object.assign({}, bn, e)
                                    : bn;
                                })),
                                (this.$options.nuxt.transitions = e),
                                e
                              );
                            },
                            err: null,
                            dateErr: null,
                            error: function (e) {
                              (e = e || null),
                                (s.context._errored = Boolean(e)),
                                (e = e ? Object(p.p)(e) : null);
                              var n = s.nuxt;
                              return (
                                this && (n = this.nuxt || this.$options.nuxt),
                                (n.dateErr = Date.now()),
                                (n.err = e),
                                t && (t.nuxt.error = e),
                                e
                              );
                            },
                          },
                        },
                        ie
                      )),
                      (o.app = s),
                      (u = t
                        ? t.next
                        : function (e) {
                            return s.router.push(e);
                          }),
                      t
                        ? (c = a.resolve(t.url).route)
                        : ((l = Object(p.f)(a.options.base, a.options.mode)),
                          (c = a.resolve(l).route)),
                      (e.next = 14),
                      Object(p.t)(s, {
                        store: o,
                        route: c,
                        next: u,
                        error: s.nuxt.error.bind(s),
                        payload: t ? t.payload : void 0,
                        req: t ? t.req : void 0,
                        res: t ? t.res : void 0,
                        beforeRenderFns: t ? t.beforeRenderFns : void 0,
                        ssrContext: t,
                      })
                    );
                  case 14:
                    f("config", n),
                      window.__NUXT__ &&
                        window.__NUXT__.state &&
                        o.replaceState(window.__NUXT__.state),
                      (e.next = 20);
                    break;
                  case 20:
                    e.next = 23;
                    break;
                  case 23:
                    e.next = 26;
                    break;
                  case 26:
                    return (e.next = 29), ut(s.context);
                  case 29:
                    if ("function" != typeof dt) {
                      e.next = 32;
                      break;
                    }
                    return (e.next = 32), dt(s.context, f);
                  case 32:
                    return (e.next = 35), Nt(s.context, f);
                  case 35:
                    return (e.next = 38), Zt(s.context, f);
                  case 38:
                    return (e.next = 41), nn(s.context, f);
                  case 41:
                    e.next = 44;
                    break;
                  case 44:
                    e.next = 47;
                    break;
                  case 47:
                    return (e.next = 50), sn(s.context);
                  case 50:
                    return (e.next = 53), un(s.context);
                  case 53:
                    e.next = 56;
                    break;
                  case 56:
                    return (e.next = 59), dn(s.context, f);
                  case 59:
                    return (
                      (e.next = 62),
                      new Promise(function (e, t) {
                        if (
                          !a.resolve(s.context.route.fullPath).route.matched
                            .length
                        )
                          return e();
                        a.replace(s.context.route.fullPath, e, function (n) {
                          if (!n._isRouter) return t(n);
                          if (2 !== n.type) return e();
                          var i = a.afterEach(
                            (function () {
                              var t = Object(r.a)(
                                regeneratorRuntime.mark(function t(n, r) {
                                  return regeneratorRuntime.wrap(function (t) {
                                    for (;;)
                                      switch ((t.prev = t.next)) {
                                        case 0:
                                          return (t.next = 3), Object(p.j)(n);
                                        case 3:
                                          (s.context.route = t.sent),
                                            (s.context.params = n.params || {}),
                                            (s.context.query = n.query || {}),
                                            i(),
                                            e();
                                        case 8:
                                        case "end":
                                          return t.stop();
                                      }
                                  }, t);
                                })
                              );
                              return function (e, n) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        });
                      })
                    );
                  case 62:
                    return e.abrupt("return", { store: o, app: s, router: a });
                  case 63:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    9: function (e, t, n) {
      "use strict";
      n.d(t, "k", function () {
        return d;
      }),
        n.d(t, "m", function () {
          return p;
        }),
        n.d(t, "l", function () {
          return m;
        }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "b", function () {
          return h;
        }),
        n.d(t, "s", function () {
          return v;
        }),
        n.d(t, "g", function () {
          return x;
        }),
        n.d(t, "h", function () {
          return k;
        }),
        n.d(t, "d", function () {
          return y;
        }),
        n.d(t, "r", function () {
          return _;
        }),
        n.d(t, "j", function () {
          return w;
        }),
        n.d(t, "t", function () {
          return O;
        }),
        n.d(t, "o", function () {
          return S;
        }),
        n.d(t, "q", function () {
          return E;
        }),
        n.d(t, "f", function () {
          return C;
        }),
        n.d(t, "c", function () {
          return R;
        }),
        n.d(t, "i", function () {
          return A;
        }),
        n.d(t, "p", function () {
          return $;
        }),
        n.d(t, "a", function () {
          return N;
        }),
        n.d(t, "v", function () {
          return U;
        }),
        n.d(t, "n", function () {
          return q;
        }),
        n.d(t, "u", function () {
          return B;
        }),
        n(3),
        n(35),
        n(5),
        n(6);
      var r = n(18),
        a = n(7),
        i = n(0),
        o = n(10),
        s =
          (n(27),
          n(2),
          n(108),
          n(13),
          n(14),
          n(11),
          n(4),
          n(28),
          n(29),
          n(12),
          n(15),
          n(79),
          n(123),
          n(67),
          n(42),
          n(43),
          n(384),
          n(54),
          n(49),
          n(8)),
        u = n(31);
      function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? c(Object(n), !0).forEach(function (t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function f(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (e) {
                if ("string" == typeof e) return g(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? g(e, t)
                    : void 0
                );
              }
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          o = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (s = !0), (i = e);
          },
          f: function () {
            try {
              o || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function d(e) {
        s.default.config.errorHandler && s.default.config.errorHandler(e);
      }
      function p(e) {
        return e.then(function (e) {
          return e.default || e;
        });
      }
      function m(e) {
        return (
          e.$options &&
          "function" == typeof e.$options.fetch &&
          !e.$options.fetch.length
        );
      }
      function b(e) {
        var t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = e.$children || [],
          a = f(r);
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var i = t.value;
            i.$fetch ? n.push(i) : i.$children && b(i, n);
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
        return n;
      }
      function h(e, t) {
        if (t || !e.options.__hasNuxtData) {
          var n =
            e.options._originDataFn ||
            e.options.data ||
            function () {
              return {};
            };
          (e.options._originDataFn = n),
            (e.options.data = function () {
              var r = n.call(this, this);
              return (
                this.$ssrContext && (t = this.$ssrContext.asyncData[e.cid]),
                l(l({}, r), t)
              );
            }),
            (e.options.__hasNuxtData = !0),
            e._Ctor &&
              e._Ctor.options &&
              (e._Ctor.options.data = e.options.data);
        }
      }
      function v(e) {
        return (
          (e.options && e._Ctor === e) ||
            (e.options
              ? ((e._Ctor = e), (e.extendOptions = e.options))
              : ((e = s.default.extend(e))._Ctor = e),
            !e.options.name &&
              e.options.__file &&
              (e.options.name = e.options.__file)),
          e
        );
      }
      function x(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "components";
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function (e, r) {
            return Object.keys(e[n]).map(function (a) {
              return t && t.push(r), e[n][a];
            });
          })
        );
      }
      function k(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return x(e, t, "instances");
      }
      function y(e, t) {
        return Array.prototype.concat.apply(
          [],
          e.matched.map(function (e, n) {
            return Object.keys(e.components).reduce(function (r, a) {
              return (
                e.components[a]
                  ? r.push(t(e.components[a], e.instances[a], e, a, n))
                  : delete e.components[a],
                r
              );
            }, []);
          })
        );
      }
      function _(e, t) {
        return Promise.all(
          y(
            e,
            (function () {
              var e = Object(a.a)(
                regeneratorRuntime.mark(function e(n, r, a, i) {
                  var o, s;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if ("function" != typeof n || n.options) {
                              e.next = 11;
                              break;
                            }
                            return (e.prev = 1), (e.next = 4), n();
                          case 4:
                            (n = e.sent), (e.next = 11);
                            break;
                          case 7:
                            throw (
                              ((e.prev = 7),
                              (e.t0 = e.catch(1)),
                              e.t0 &&
                                "ChunkLoadError" === e.t0.name &&
                                "undefined" != typeof window &&
                                window.sessionStorage &&
                                ((o = Date.now()),
                                (!(s = parseInt(
                                  window.sessionStorage.getItem("nuxt-reload")
                                )) ||
                                  s + 6e4 < o) &&
                                  (window.sessionStorage.setItem(
                                    "nuxt-reload",
                                    o
                                  ),
                                  window.location.reload(!0))),
                              e.t0)
                            );
                          case 11:
                            return (
                              (a.components[i] = n = v(n)),
                              e.abrupt(
                                "return",
                                "function" == typeof t ? t(n, r, a, i) : n
                              )
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 7]]
                  );
                })
              );
              return function (t, n, r, a) {
                return e.apply(this, arguments);
              };
            })()
          )
        );
      }
      function w(e) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = Object(a.a)(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    return (e.next = 4), _(t);
                  case 4:
                    return e.abrupt(
                      "return",
                      l(
                        l({}, t),
                        {},
                        {
                          meta: x(t).map(function (e, n) {
                            return l(
                              l({}, e.options.meta),
                              (t.matched[n] || {}).meta
                            );
                          }),
                        }
                      )
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function O(e, t) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(a.a)(
          regeneratorRuntime.mark(function e(t, n) {
            var a, i, s, c;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.context ||
                        ((t.context = {
                          isStatic: !1,
                          isDev: !1,
                          isHMR: !1,
                          app: t,
                          store: t.store,
                          payload: n.payload,
                          error: n.error,
                          base: t.router.options.base,
                          env: { API_URL: "https://api.melonity.gg", dev: !1 },
                        }),
                        n.req && (t.context.req = n.req),
                        n.res && (t.context.res = n.res),
                        n.ssrContext && (t.context.ssrContext = n.ssrContext),
                        (t.context.redirect = function (e, n, a) {
                          if (e) {
                            t.context._redirected = !0;
                            var i = Object(r.a)(n);
                            if (
                              ("number" == typeof e ||
                                ("undefined" !== i && "object" !== i) ||
                                ((a = n || {}),
                                (n = e),
                                (i = Object(r.a)(n)),
                                (e = 302)),
                              "object" === i &&
                                (n = t.router.resolve(n).route.fullPath),
                              !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))
                            )
                              throw (
                                ((n = Object(u.e)(n, a)),
                                window.location.replace(n),
                                new Error("ERR_REDIRECT"))
                              );
                            t.context.next({ path: n, query: a, status: e });
                          }
                        }),
                        (t.context.nuxtState = window.__NUXT__)),
                      (e.next = 3),
                      Promise.all([w(n.route), w(n.from)])
                    );
                  case 3:
                    (a = e.sent),
                      (i = Object(o.a)(a, 2)),
                      (s = i[0]),
                      (c = i[1]),
                      n.route && (t.context.route = s),
                      n.from && (t.context.from = c),
                      (t.context.next = n.next),
                      (t.context._redirected = !1),
                      (t.context._errored = !1),
                      (t.context.isHMR = !1),
                      (t.context.params = t.context.route.params || {}),
                      (t.context.query = t.context.route.query || {});
                  case 15:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function S(e, t) {
        return !e.length || t._redirected || t._errored
          ? Promise.resolve()
          : E(e[0], t).then(function () {
              return S(e.slice(1), t);
            });
      }
      function E(e, t) {
        var n;
        return (n =
          2 === e.length
            ? new Promise(function (n) {
                e(t, function (e, r) {
                  e && t.error(e), n((r = r || {}));
                });
              })
            : e(t)) &&
          n instanceof Promise &&
          "function" == typeof n.then
          ? n
          : Promise.resolve(n);
      }
      function C(e, t) {
        if ("hash" === t) return window.location.hash.replace(/^#\//, "");
        e = decodeURI(e).slice(0, -1);
        var n = decodeURI(window.location.pathname);
        e && n.startsWith(e) && (n = n.slice(e.length));
        var r = (n || "/") + window.location.search + window.location.hash;
        return Object(u.d)(r);
      }
      function R(e, t) {
        return (function (e, t) {
          for (var n = new Array(e.length), a = 0; a < e.length; a++)
            "object" === Object(r.a)(e[a]) &&
              (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", z(t)));
          return function (t, r) {
            for (
              var a = "",
                i = t || {},
                o = (r || {}).pretty ? L : encodeURIComponent,
                s = 0;
              s < e.length;
              s++
            ) {
              var u = e[s];
              if ("string" != typeof u) {
                var c = i[u.name || "pathMatch"],
                  l = void 0;
                if (null == c) {
                  if (u.optional) {
                    u.partial && (a += u.prefix);
                    continue;
                  }
                  throw new TypeError(
                    'Expected "' + u.name + '" to be defined'
                  );
                }
                if (Array.isArray(c)) {
                  if (!u.repeat)
                    throw new TypeError(
                      'Expected "' +
                        u.name +
                        '" to not repeat, but received `' +
                        JSON.stringify(c) +
                        "`"
                    );
                  if (0 === c.length) {
                    if (u.optional) continue;
                    throw new TypeError(
                      'Expected "' + u.name + '" to not be empty'
                    );
                  }
                  for (var f = 0; f < c.length; f++) {
                    if (((l = o(c[f])), !n[s].test(l)))
                      throw new TypeError(
                        'Expected all "' +
                          u.name +
                          '" to match "' +
                          u.pattern +
                          '", but received `' +
                          JSON.stringify(l) +
                          "`"
                      );
                    a += (0 === f ? u.prefix : u.delimiter) + l;
                  }
                } else {
                  if (((l = u.asterisk ? D(c) : o(c)), !n[s].test(l)))
                    throw new TypeError(
                      'Expected "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '", but received "' +
                        l +
                        '"'
                    );
                  a += u.prefix + l;
                }
              } else a += u;
            }
            return a;
          };
        })(
          (function (e, t) {
            for (
              var n,
                r = [],
                a = 0,
                i = 0,
                o = "",
                s = (t && t.delimiter) || "/";
              null != (n = T.exec(e));

            ) {
              var u = n[0],
                c = n[1],
                l = n.index;
              if (((o += e.slice(i, l)), (i = l + u.length), c)) o += c[1];
              else {
                var f = e[i],
                  g = n[2],
                  d = n[3],
                  p = n[4],
                  m = n[5],
                  b = n[6],
                  h = n[7];
                o && (r.push(o), (o = ""));
                var v = null != g && null != f && f !== g,
                  x = "+" === b || "*" === b,
                  k = "?" === b || "*" === b,
                  y = n[2] || s,
                  _ = p || m;
                r.push({
                  name: d || a++,
                  prefix: g || "",
                  delimiter: y,
                  optional: k,
                  repeat: x,
                  partial: v,
                  asterisk: Boolean(h),
                  pattern: _ ? M(_) : h ? ".*" : "[^" + I(y) + "]+?",
                });
              }
            }
            return i < e.length && (o += e.substr(i)), o && r.push(o), r;
          })(e, t),
          t
        );
      }
      function A(e, t) {
        var n = {},
          r = l(l({}, e), t);
        for (var a in r) String(e[a]) !== String(t[a]) && (n[a] = !0);
        return n;
      }
      function $(e) {
        var t;
        if (e.message || "string" == typeof e) t = e.message || e;
        else
          try {
            t = JSON.stringify(e, null, 2);
          } catch (n) {
            t = "[".concat(e.constructor.name, "]");
          }
        return l(
          l({}, e),
          {},
          {
            message: t,
            statusCode:
              e.statusCode ||
              e.status ||
              (e.response && e.response.status) ||
              500,
          }
        );
      }
      (window.onNuxtReadyCbs = []),
        (window.onNuxtReady = function (e) {
          window.onNuxtReadyCbs.push(e);
        });
      var T = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function L(e, t) {
        var n = t ? /[?#]/g : /[/?#]/g;
        return encodeURI(e).replace(n, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function D(e) {
        return L(e, !0);
      }
      function I(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function M(e) {
        return e.replace(/([=!:$/()])/g, "\\$1");
      }
      function z(e) {
        return e && e.sensitive ? "" : "i";
      }
      function N(e, t, n) {
        e.$options[t] || (e.$options[t] = []),
          e.$options[t].includes(n) || e.$options[t].push(n);
      }
      var U = u.c,
        q = (u.g, u.b);
      function B(e) {
        try {
          window.history.scrollRestoration = e;
        } catch (e) {}
      }
    },
    96: function (e, t, n) {
      "use strict";
      var r = {};
      (r.authenticated = n(378)),
        (r.authenticated = r.authenticated.default || r.authenticated),
        (r.notAuthenticated = n(379)),
        (r.notAuthenticated = r.notAuthenticated.default || r.notAuthenticated),
        (t.a = r);
    },
  },
  [[363, 16, 1, 17]],
]);