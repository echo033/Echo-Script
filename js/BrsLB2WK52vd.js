/*!
 * Bootstrap v4.1.2 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["exports", "jquery"], e)
    : e((t.bootstrap = {}), t.jQuery);
})(this, function (t, e) {
  "use strict";
  function n(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        "value" in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function i(t, e, i) {
    return e && n(t.prototype, e), i && n(t, i), t;
  }
  function o(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {},
        i = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols &&
        (i = i.concat(
          Object.getOwnPropertySymbols(n).filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          })
        )),
        i.forEach(function (e) {
          var i, o, r;
          (i = t),
            (r = n[(o = e)]),
            o in i
              ? Object.defineProperty(i, o, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (i[o] = r);
        });
    }
    return t;
  }
  for (
    var r,
      s,
      a,
      l,
      c,
      h,
      u,
      f,
      d,
      p,
      m,
      g,
      _,
      v,
      y,
      b,
      E,
      w,
      C,
      T,
      S,
      D,
      A,
      I,
      O,
      N,
      k,
      x,
      P,
      L,
      j,
      H,
      M,
      F,
      W,
      R,
      U,
      B,
      q,
      K,
      Q,
      Y,
      V,
      z,
      G,
      J,
      Z,
      X = (function (t) {
        var e = "transitionend";
        var n = {
          TRANSITION_END: "bsTransitionEnd",
          getUID: function (t) {
            for (
              ;
              (t += ~~(1e6 * Math.random())), document.getElementById(t);

            );
            return t;
          },
          getSelectorFromElement: function (t) {
            var e = t.getAttribute("data-target");
            (e && "#" !== e) || (e = t.getAttribute("href") || "");
            try {
              return document.querySelector(e) ? e : null;
            } catch (t) {
              return null;
            }
          },
          getTransitionDurationFromElement: function (e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration");
            return parseFloat(n)
              ? ((n = n.split(",")[0]), 1e3 * parseFloat(n))
              : 0;
          },
          reflow: function (t) {
            return t.offsetHeight;
          },
          triggerTransitionEnd: function (n) {
            t(n).trigger(e);
          },
          supportsTransitionEnd: function () {
            return Boolean(e);
          },
          isElement: function (t) {
            return (t[0] || t).nodeType;
          },
          typeCheckConfig: function (t, e, i) {
            for (var o in i)
              if (Object.prototype.hasOwnProperty.call(i, o)) {
                var r = i[o],
                  s = e[o],
                  a =
                    s && n.isElement(s)
                      ? "element"
                      : ((l = s),
                        {}.toString
                          .call(l)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase());
                if (!new RegExp(r).test(a))
                  throw new Error(
                    t.toUpperCase() +
                      ': Option "' +
                      o +
                      '" provided type "' +
                      a +
                      '" but expected type "' +
                      r +
                      '".'
                  );
              }
            var l;
          },
        };
        return (
          (t.fn.emulateTransitionEnd = function (e) {
            var i = this,
              o = !1;
            return (
              t(this).one(n.TRANSITION_END, function () {
                o = !0;
              }),
              setTimeout(function () {
                o || n.triggerTransitionEnd(i);
              }, e),
              this
            );
          }),
          (t.event.special[n.TRANSITION_END] = {
            bindType: e,
            delegateType: e,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          }),
          n
        );
      })((e = e && e.hasOwnProperty("default") ? e.default : e)),
      $ =
        ((s = "alert"),
        (l = "." + (a = "bs.alert")),
        (c = (r = e).fn[s]),
        (h = {
          CLOSE: "close" + l,
          CLOSED: "closed" + l,
          CLICK_DATA_API: "click" + l + ".data-api",
        }),
        "alert",
        "fade",
        "show",
        (u = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.close = function (t) {
              var e = this._element;
              t && (e = this._getRootElement(t)),
                this._triggerCloseEvent(e).isDefaultPrevented() ||
                  this._removeElement(e);
            }),
            (e.dispose = function () {
              r.removeData(this._element, a), (this._element = null);
            }),
            (e._getRootElement = function (t) {
              var e = X.getSelectorFromElement(t),
                n = !1;
              return (
                e && (n = document.querySelector(e)),
                n || (n = r(t).closest(".alert")[0]),
                n
              );
            }),
            (e._triggerCloseEvent = function (t) {
              var e = r.Event(h.CLOSE);
              return r(t).trigger(e), e;
            }),
            (e._removeElement = function (t) {
              var e = this;
              if ((r(t).removeClass("show"), r(t).hasClass("fade"))) {
                var n = X.getTransitionDurationFromElement(t);
                r(t)
                  .one(X.TRANSITION_END, function (n) {
                    return e._destroyElement(t, n);
                  })
                  .emulateTransitionEnd(n);
              } else this._destroyElement(t);
            }),
            (e._destroyElement = function (t) {
              r(t).detach().trigger(h.CLOSED).remove();
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = r(this),
                  i = n.data(a);
                i || ((i = new t(this)), n.data(a, i)),
                  "close" === e && i[e](this);
              });
            }),
            (t._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this);
              };
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.2";
                },
              },
            ]),
            t
          );
        })()),
        r(document).on(
          h.CLICK_DATA_API,
          '[data-dismiss="alert"]',
          u._handleDismiss(new u())
        ),
        (r.fn[s] = u._jQueryInterface),
        (r.fn[s].Constructor = u),
        (r.fn[s].noConflict = function () {
          return (r.fn[s] = c), u._jQueryInterface;
        }),
        u),
      tt =
        ((d = "button"),
        (m = "." + (p = "bs.button")),
        (g = ".data-api"),
        (_ = (f = e).fn[d]),
        (v = "active"),
        "btn",
        (y = '[data-toggle^="button"]'),
        '[data-toggle="buttons"]',
        "input",
        ".active",
        (b = ".btn"),
        (E = {
          CLICK_DATA_API: "click" + m + g,
          FOCUS_BLUR_DATA_API: "focus" + m + g + " blur" + m + g,
        }),
        (w = (function () {
          function t(t) {
            this._element = t;
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              var t = !0,
                e = !0,
                n = f(this._element).closest('[data-toggle="buttons"]')[0];
              if (n) {
                var i = this._element.querySelector("input");
                if (i) {
                  if ("radio" === i.type)
                    if (i.checked && this._element.classList.contains(v))
                      t = !1;
                    else {
                      var o = n.querySelector(".active");
                      o && f(o).removeClass(v);
                    }
                  if (t) {
                    if (
                      i.hasAttribute("disabled") ||
                      n.hasAttribute("disabled") ||
                      i.classList.contains("disabled") ||
                      n.classList.contains("disabled")
                    )
                      return;
                    (i.checked = !this._element.classList.contains(v)),
                      f(i).trigger("change");
                  }
                  i.focus(), (e = !1);
                }
              }
              e &&
                this._element.setAttribute(
                  "aria-pressed",
                  !this._element.classList.contains(v)
                ),
                t && f(this._element).toggleClass(v);
            }),
            (e.dispose = function () {
              f.removeData(this._element, p), (this._element = null);
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = f(this).data(p);
                n || ((n = new t(this)), f(this).data(p, n)),
                  "toggle" === e && n[e]();
              });
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.2";
                },
              },
            ]),
            t
          );
        })()),
        f(document)
          .on(E.CLICK_DATA_API, y, function (t) {
            t.preventDefault();
            var e = t.target;
            f(e).hasClass("btn") || (e = f(e).closest(b)),
              w._jQueryInterface.call(f(e), "toggle");
          })
          .on(E.FOCUS_BLUR_DATA_API, y, function (t) {
            var e = f(t.target).closest(b)[0];
            f(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
          }),
        (f.fn[d] = w._jQueryInterface),
        (f.fn[d].Constructor = w),
        (f.fn[d].noConflict = function () {
          return (f.fn[d] = _), w._jQueryInterface;
        }),
        w),
      et =
        ((T = "carousel"),
        (D = "." + (S = "bs.carousel")),
        (A = ".data-api"),
        (I = (C = e).fn[T]),
        (O = {
          interval: 5e3,
          keyboard: !0,
          slide: !1,
          pause: "hover",
          wrap: !0,
        }),
        (N = {
          interval: "(number|boolean)",
          keyboard: "boolean",
          slide: "(boolean|string)",
          pause: "(string|boolean)",
          wrap: "boolean",
        }),
        (k = "next"),
        (x = "prev"),
        "left",
        "right",
        (P = {
          SLIDE: "slide" + D,
          SLID: "slid" + D,
          KEYDOWN: "keydown" + D,
          MOUSEENTER: "mouseenter" + D,
          MOUSELEAVE: "mouseleave" + D,
          TOUCHEND: "touchend" + D,
          LOAD_DATA_API: "load" + D + A,
          CLICK_DATA_API: "click" + D + A,
        }),
        "carousel",
        (L = "active"),
        "slide",
        "carousel-item-right",
        "carousel-item-left",
        "carousel-item-next",
        "carousel-item-prev",
        ".active",
        (j = ".active.carousel-item"),
        ".carousel-item",
        ".carousel-item-next, .carousel-item-prev",
        ".carousel-indicators",
        "[data-slide], [data-slide-to]",
        '[data-ride="carousel"]',
        (H = (function () {
          function t(t, e) {
            (this._items = null),
              (this._interval = null),
              (this._activeElement = null),
              (this._isPaused = !1),
              (this._isSliding = !1),
              (this.touchTimeout = null),
              (this._config = this._getConfig(e)),
              (this._element = C(t)[0]),
              (this._indicatorsElement = this._element.querySelector(
                ".carousel-indicators"
              )),
              this._addEventListeners();
          }
          var e = t.prototype;
          return (
            (e.next = function () {
              this._isSliding || this._slide(k);
            }),
            (e.nextWhenVisible = function () {
              !document.hidden &&
                C(this._element).is(":visible") &&
                "hidden" !== C(this._element).css("visibility") &&
                this.next();
            }),
            (e.prev = function () {
              this._isSliding || this._slide(x);
            }),
            (e.pause = function (t) {
              t || (this._isPaused = !0),
                this._element.querySelector(
                  ".carousel-item-next, .carousel-item-prev"
                ) && (X.triggerTransitionEnd(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
            }),
            (e.cycle = function (t) {
              t || (this._isPaused = !1),
                this._interval &&
                  (clearInterval(this._interval), (this._interval = null)),
                this._config.interval &&
                  !this._isPaused &&
                  (this._interval = setInterval(
                    (document.visibilityState
                      ? this.nextWhenVisible
                      : this.next
                    ).bind(this),
                    this._config.interval
                  ));
            }),
            (e.to = function (t) {
              var e = this;
              this._activeElement = this._element.querySelector(j);
              var n = this._getItemIndex(this._activeElement);
              if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                  C(this._element).one(P.SLID, function () {
                    return e.to(t);
                  });
                else {
                  if (n === t) return this.pause(), void this.cycle();
                  var i = n < t ? k : x;
                  this._slide(i, this._items[t]);
                }
            }),
            (e.dispose = function () {
              C(this._element).off(D),
                C.removeData(this._element, S),
                (this._items = null),
                (this._config = null),
                (this._element = null),
                (this._interval = null),
                (this._isPaused = null),
                (this._isSliding = null),
                (this._activeElement = null),
                (this._indicatorsElement = null);
            }),
            (e._getConfig = function (t) {
              return (t = o({}, O, t)), X.typeCheckConfig(T, t, N), t;
            }),
            (e._addEventListeners = function () {
              var t = this;
              this._config.keyboard &&
                C(this._element).on(P.KEYDOWN, function (e) {
                  return t._keydown(e);
                }),
                "hover" === this._config.pause &&
                  (C(this._element)
                    .on(P.MOUSEENTER, function (e) {
                      return t.pause(e);
                    })
                    .on(P.MOUSELEAVE, function (e) {
                      return t.cycle(e);
                    }),
                  ("ontouchstart" in document.documentElement) &&
                    C(this._element).on(P.TOUCHEND, function () {
                      t.pause(),
                        t.touchTimeout && clearTimeout(t.touchTimeout),
                        (t.touchTimeout = setTimeout(function (e) {
                          return t.cycle(e);
                        }, 500 + t._config.interval));
                    }));
            }),
            (e._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                  case 37:
                    t.preventDefault(), this.prev();
                    break;
                  case 39:
                    t.preventDefault(), this.next();
                }
            }),
            (e._getItemIndex = function (t) {
              return (
                (this._items =
                  t && t.parentNode
                    ? [].slice.call(
                        t.parentNode.querySelectorAll(".carousel-item")
                      )
                    : []),
                this._items.indexOf(t)
              );
            }),
            (e._getItemByDirection = function (t, e) {
              var n = t === k,
                i = t === x,
                o = this._getItemIndex(e),
                r = this._items.length - 1;
              if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
                return e;
              var s = (o + (t === x ? -1 : 1)) % this._items.length;
              return -1 === s
                ? this._items[this._items.length - 1]
                : this._items[s];
            }),
            (e._triggerSlideEvent = function (t, e) {
              var n = this._getItemIndex(t),
                i = this._getItemIndex(this._element.querySelector(j)),
                o = C.Event(P.SLIDE, {
                  relatedTarget: t,
                  direction: e,
                  from: i,
                  to: n,
                });
              return C(this._element).trigger(o), o;
            }),
            (e._setActiveIndicatorElement = function (t) {
              if (this._indicatorsElement) {
                var e = [].slice.call(
                  this._indicatorsElement.querySelectorAll(".active")
                );
                C(e).removeClass(L);
                var n = this._indicatorsElement.children[this._getItemIndex(t)];
                n && C(n).addClass(L);
              }
            }),
            (e._slide = function (t, e) {
              var n,
                i,
                o,
                r = this,
                s = this._element.querySelector(j),
                a = this._getItemIndex(s),
                l = e || (s && this._getItemByDirection(t, s)),
                c = this._getItemIndex(l),
                h = Boolean(this._interval);
              if (
                (t === k
                  ? ((n = "carousel-item-left"),
                    (i = "carousel-item-next"),
                    (o = "left"))
                  : ((n = "carousel-item-right"),
                    (i = "carousel-item-prev"),
                    (o = "right")),
                l && C(l).hasClass(L))
              )
                this._isSliding = !1;
              else if (
                !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
                s &&
                l
              ) {
                (this._isSliding = !0),
                  h && this.pause(),
                  this._setActiveIndicatorElement(l);
                var u = C.Event(P.SLID, {
                  relatedTarget: l,
                  direction: o,
                  from: a,
                  to: c,
                });
                if (C(this._element).hasClass("slide")) {
                  C(l).addClass(i),
                    X.reflow(l),
                    C(s).addClass(n),
                    C(l).addClass(n);
                  var f = X.getTransitionDurationFromElement(s);
                  C(s)
                    .one(X.TRANSITION_END, function () {
                      C(l)
                        .removeClass(n + " " + i)
                        .addClass(L),
                        C(s).removeClass(L + " " + i + " " + n),
                        (r._isSliding = !1),
                        setTimeout(function () {
                          return C(r._element).trigger(u);
                        }, 0);
                    })
                    .emulateTransitionEnd(f);
                } else
                  C(s).removeClass(L),
                    C(l).addClass(L),
                    (this._isSliding = !1),
                    C(this._element).trigger(u);
                h && this.cycle();
              }
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = C(this).data(S),
                  i = o({}, O, C(this).data());
                "object" == typeof e && (i = o({}, i, e));
                var r = "string" == typeof e ? e : i.slide;
                if (
                  (n || ((n = new t(this, i)), C(this).data(S, n)),
                  "number" == typeof e)
                )
                  n.to(e);
                else if ("string" == typeof r) {
                  if (void 0 === n[r])
                    throw new TypeError('No method named "' + r + '"');
                  n[r]();
                } else i.interval && (n.pause(), n.cycle());
              });
            }),
            (t._dataApiClickHandler = function (e) {
              var n = X.getSelectorFromElement(this);
              if (n) {
                var i = C(n)[0];
                if (i && C(i).hasClass("carousel")) {
                  var r = o({}, C(i).data(), C(this).data()),
                    s = this.getAttribute("data-slide-to");
                  s && (r.interval = !1),
                    t._jQueryInterface.call(C(i), r),
                    s && C(i).data(S).to(s),
                    e.preventDefault();
                }
              }
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return O;
                },
              },
            ]),
            t
          );
        })()),
        C(document).on(
          P.CLICK_DATA_API,
          "[data-slide], [data-slide-to]",
          H._dataApiClickHandler
        ),
        C(window).on(P.LOAD_DATA_API, function () {
          for (
            var t = [].slice.call(
                document.querySelectorAll('[data-ride="carousel"]')
              ),
              e = 0,
              n = t.length;
            e < n;
            e++
          ) {
            var i = C(t[e]);
            H._jQueryInterface.call(i, i.data());
          }
        }),
        (C.fn[T] = H._jQueryInterface),
        (C.fn[T].Constructor = H),
        (C.fn[T].noConflict = function () {
          return (C.fn[T] = I), H._jQueryInterface;
        }),
        H),
      nt =
        ((F = "collapse"),
        (R = "." + (W = "bs.collapse")),
        (U = (M = e).fn[F]),
        (B = { toggle: !0, parent: "" }),
        (q = { toggle: "boolean", parent: "(string|element)" }),
        (K = {
          SHOW: "show" + R,
          SHOWN: "shown" + R,
          HIDE: "hide" + R,
          HIDDEN: "hidden" + R,
          CLICK_DATA_API: "click" + R + ".data-api",
        }),
        (Q = "show"),
        (Y = "collapse"),
        (V = "collapsing"),
        (z = "collapsed"),
        (G = "width"),
        "height",
        ".show, .collapsing",
        (J = '[data-toggle="collapse"]'),
        (Z = (function () {
          function t(t, e) {
            (this._isTransitioning = !1),
              (this._element = t),
              (this._config = this._getConfig(e)),
              (this._triggerArray = M.makeArray(
                document.querySelectorAll(
                  '[data-toggle="collapse"][href="#' +
                    t.id +
                    '"],[data-toggle="collapse"][data-target="#' +
                    t.id +
                    '"]'
                )
              ));
            for (
              var n = [].slice.call(document.querySelectorAll(J)),
                i = 0,
                o = n.length;
              i < o;
              i++
            ) {
              var r = n[i],
                s = X.getSelectorFromElement(r),
                a = [].slice
                  .call(document.querySelectorAll(s))
                  .filter(function (e) {
                    return e === t;
                  });
              null !== s &&
                0 < a.length &&
                ((this._selector = s), this._triggerArray.push(r));
            }
            (this._parent = this._config.parent ? this._getParent() : null),
              this._config.parent ||
                this._addAriaAndCollapsedClass(
                  this._element,
                  this._triggerArray
                ),
              this._config.toggle && this.toggle();
          }
          var e = t.prototype;
          return (
            (e.toggle = function () {
              M(this._element).hasClass(Q) ? this.hide() : this.show();
            }),
            (e.show = function () {
              var e,
                n,
                i = this;
              if (
                !(
                  this._isTransitioning ||
                  M(this._element).hasClass(Q) ||
                  (this._parent &&
                    0 ===
                      (e = [].slice
                        .call(
                          this._parent.querySelectorAll(".show, .collapsing")
                        )
                        .filter(function (t) {
                          return (
                            t.getAttribute("data-parent") === i._config.parent
                          );
                        })).length &&
                    (e = null),
                  e &&
                    (n = M(e).not(this._selector).data(W)) &&
                    n._isTransitioning)
                )
              ) {
                var o = M.Event(K.SHOW);
                if ((M(this._element).trigger(o), !o.isDefaultPrevented())) {
                  e &&
                    (t._jQueryInterface.call(M(e).not(this._selector), "hide"),
                    n || M(e).data(W, null));
                  var r = this._getDimension();
                  M(this._element).removeClass(Y).addClass(V),
                    (this._element.style[r] = 0),
                    this._triggerArray.length &&
                      M(this._triggerArray)
                        .removeClass(z)
                        .attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                  var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                    a = X.getTransitionDurationFromElement(this._element);
                  M(this._element)
                    .one(X.TRANSITION_END, function () {
                      M(i._element).removeClass(V).addClass(Y).addClass(Q),
                        (i._element.style[r] = ""),
                        i.setTransitioning(!1),
                        M(i._element).trigger(K.SHOWN);
                    })
                    .emulateTransitionEnd(a),
                    (this._element.style[r] = this._element[s] + "px");
                }
              }
            }),
            (e.hide = function () {
              var t = this;
              if (!this._isTransitioning && M(this._element).hasClass(Q)) {
                var e = M.Event(K.HIDE);
                if ((M(this._element).trigger(e), !e.isDefaultPrevented())) {
                  var n = this._getDimension();
                  (this._element.style[n] =
                    this._element.getBoundingClientRect()[n] + "px"),
                    X.reflow(this._element),
                    M(this._element).addClass(V).removeClass(Y).removeClass(Q);
                  var i = this._triggerArray.length;
                  if (0 < i)
                    for (var o = 0; o < i; o++) {
                      var r = this._triggerArray[o],
                        s = X.getSelectorFromElement(r);
                      null !== s &&
                        (M(
                          [].slice.call(document.querySelectorAll(s))
                        ).hasClass(Q) ||
                          M(r).addClass(z).attr("aria-expanded", !1));
                    }
                  this.setTransitioning(!0), (this._element.style[n] = "");
                  var a = X.getTransitionDurationFromElement(this._element);
                  M(this._element)
                    .one(X.TRANSITION_END, function () {
                      t.setTransitioning(!1),
                        M(t._element)
                          .removeClass(V)
                          .addClass(Y)
                          .trigger(K.HIDDEN);
                    })
                    .emulateTransitionEnd(a);
                }
              }
            }),
            (e.setTransitioning = function (t) {
              this._isTransitioning = t;
            }),
            (e.dispose = function () {
              M.removeData(this._element, W),
                (this._config = null),
                (this._parent = null),
                (this._element = null),
                (this._triggerArray = null),
                (this._isTransitioning = null);
            }),
            (e._getConfig = function (t) {
              return (
                ((t = o({}, B, t)).toggle = Boolean(t.toggle)),
                X.typeCheckConfig(F, t, q),
                t
              );
            }),
            (e._getDimension = function () {
              return M(this._element).hasClass(G) ? G : "height";
            }),
            (e._getParent = function () {
              var e = this,
                n = null;
              X.isElement(this._config.parent)
                ? ((n = this._config.parent),
                  void 0 !== this._config.parent.jquery &&
                    (n = this._config.parent[0]))
                : (n = document.querySelector(this._config.parent));
              var i =
                  '[data-toggle="collapse"][data-parent="' +
                  this._config.parent +
                  '"]',
                o = [].slice.call(n.querySelectorAll(i));
              return (
                M(o).each(function (n, i) {
                  e._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
                }),
                n
              );
            }),
            (e._addAriaAndCollapsedClass = function (t, e) {
              if (t) {
                var n = M(t).hasClass(Q);
                e.length && M(e).toggleClass(z, !n).attr("aria-expanded", n);
              }
            }),
            (t._getTargetFromElement = function (t) {
              var e = X.getSelectorFromElement(t);
              return e ? document.querySelector(e) : null;
            }),
            (t._jQueryInterface = function (e) {
              return this.each(function () {
                var n = M(this),
                  i = n.data(W),
                  r = o({}, B, n.data(), "object" == typeof e && e ? e : {});
                if (
                  (!i && r.toggle && /show|hide/.test(e) && (r.toggle = !1),
                  i || ((i = new t(this, r)), n.data(W, i)),
                  "string" == typeof e)
                ) {
                  if (void 0 === i[e])
                    throw new TypeError('No method named "' + e + '"');
                  i[e]();
                }
              });
            }),
            i(t, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.1.2";
                },
              },
              {
                key: "Default",
                get: function () {
                  return B;
                },
              },
            ]),
            t
          );
        })()),
        M(document).on(K.CLICK_DATA_API, J, function (t) {
          "A" === t.currentTarget.tagName && t.preventDefault();
          var e = M(this),
            n = X.getSelectorFromElement(this),
            i = [].slice.call(document.querySelectorAll(n));
          M(i).each(function () {
            var t = M(this),
              n = t.data(W) ? "toggle" : e.data();
            Z._jQueryInterface.call(t, n);
          });
        }),
        (M.fn[F] = Z._jQueryInterface),
        (M.fn[F].Constructor = Z),
        (M.fn[F].noConflict = function () {
          return (M.fn[F] = U), Z._jQueryInterface;
        }),
        Z),
      it = "undefined" != typeof window && "undefined" != typeof document,
      ot = ["Edge", "Trident", "Firefox"],
      rt = 0,
      st = 0;
    st < ot.length;
    st += 1
  )
    if (it && 0 <= navigator.userAgent.indexOf(ot[st])) {
      rt = 1;
      break;
    }
  var at =
    it && window.Promise
      ? function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              window.Promise.resolve().then(function () {
                (e = !1), t();
              }));
          };
        }
      : function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              setTimeout(function () {
                (e = !1), t();
              }, rt));
          };
        };
  function lt(t) {
    return t && "[object Function]" === {}.toString.call(t);
  }
  function ct(t, e) {
    if (1 !== t.nodeType) return [];
    var n = getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function ht(t) {
    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
  }
  function ut(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case "HTML":
      case "BODY":
        return t.ownerDocument.body;
      case "#document":
        return t.body;
    }
    var e = ct(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : ut(ht(t));
  }
  var ft = it && !(!window.MSInputMethodContext || !document.documentMode),
    dt = it && /MSIE 10/.test(navigator.userAgent);
  function pt(t) {
    return 11 === t ? ft : 10 === t ? dt : ft || dt;
  }
  function mt(t) {
    if (!t) return document.documentElement;
    for (
      var e = pt(10) ? document.body : null, n = t.offsetParent;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && "BODY" !== i && "HTML" !== i
      ? -1 !== ["TD", "TABLE"].indexOf(n.nodeName) &&
        "static" === ct(n, "position")
        ? mt(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function gt(t) {
    return null !== t.parentNode ? gt(t.parentNode) : t;
  }
  function _t(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var s,
      a,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return "BODY" === (a = (s = l).nodeName) ||
        ("HTML" !== a && mt(s.firstElementChild) !== s)
        ? mt(l)
        : l;
    var c = gt(t);
    return c.host ? _t(c.host, e) : _t(t, gt(e).host);
  }
  function vt(t) {
    var e =
        "top" ===
        (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top")
          ? "scrollTop"
          : "scrollLeft",
      n = t.nodeName;
    if ("BODY" === n || "HTML" === n) {
      var i = t.ownerDocument.documentElement;
      return (t.ownerDocument.scrollingElement || i)[e];
    }
    return t[e];
  }
  function yt(t, e) {
    var n = "x" === e ? "Left" : "Top",
      i = "Left" === n ? "Right" : "Bottom";
    return (
      parseFloat(t["border" + n + "Width"], 10) +
      parseFloat(t["border" + i + "Width"], 10)
    );
  }
  function bt(t, e, n, i) {
    return Math.max(
      e["offset" + t],
      e["scroll" + t],
      n["client" + t],
      n["offset" + t],
      n["scroll" + t],
      pt(10)
        ? n["offset" + t] +
            i["margin" + ("Height" === t ? "Top" : "Left")] +
            i["margin" + ("Height" === t ? "Bottom" : "Right")]
        : 0
    );
  }
  function Et() {
    var t = document.body,
      e = document.documentElement,
      n = pt(10) && getComputedStyle(e);
    return { height: bt("Height", t, e, n), width: bt("Width", t, e, n) };
  }
  var wt = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    Ct = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    Tt =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function St(t) {
    return Tt({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function Dt(t) {
    var e = {};
    try {
      if (pt(10)) {
        e = t.getBoundingClientRect();
        var n = vt(t, "top"),
          i = vt(t, "left");
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = "HTML" === t.nodeName ? Et() : {},
      s = r.width || t.clientWidth || o.right - o.left,
      a = r.height || t.clientHeight || o.bottom - o.top,
      l = t.offsetWidth - s,
      c = t.offsetHeight - a;
    if (l || c) {
      var h = ct(t);
      (l -= yt(h, "x")), (c -= yt(h, "y")), (o.width -= l), (o.height -= c);
    }
    return St(o);
  }
  function At(t, e) {
    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      i = pt(10),
      o = "HTML" === e.nodeName,
      r = Dt(t),
      s = Dt(e),
      a = ut(t),
      l = ct(e),
      c = parseFloat(l.borderTopWidth, 10),
      h = parseFloat(l.borderLeftWidth, 10);
    n &&
      "HTML" === e.nodeName &&
      ((s.top = Math.max(s.top, 0)), (s.left = Math.max(s.left, 0)));
    var u = St({
      top: r.top - s.top - c,
      left: r.left - s.left - h,
      width: r.width,
      height: r.height,
    });
    if (((u.marginTop = 0), (u.marginLeft = 0), !i && o)) {
      var f = parseFloat(l.marginTop, 10),
        d = parseFloat(l.marginLeft, 10);
      (u.top -= c - f),
        (u.bottom -= c - f),
        (u.left -= h - d),
        (u.right -= h - d),
        (u.marginTop = f),
        (u.marginLeft = d);
    }
    return (
      (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) &&
        (u = (function (t, e) {
          var n =
              2 < arguments.length && void 0 !== arguments[2] && arguments[2],
            i = vt(e, "top"),
            o = vt(e, "left"),
            r = n ? -1 : 1;
          return (
            (t.top += i * r),
            (t.bottom += i * r),
            (t.left += o * r),
            (t.right += o * r),
            t
          );
        })(u, e)),
      u
    );
  }
  function It(t) {
    if (!t || !t.parentElement || pt()) return document.documentElement;
    for (var e = t.parentElement; e && "none" === ct(e, "transform"); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function Ot(t, e, n, i) {
    var o = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      s = o ? It(t) : _t(t, e);
    if ("viewport" === i)
      r = (function (t) {
        var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
          n = t.ownerDocument.documentElement,
          i = At(t, n),
          o = Math.max(n.clientWidth, window.innerWidth || 0),
          r = Math.max(n.clientHeight, window.innerHeight || 0),
          s = e ? 0 : vt(n),
          a = e ? 0 : vt(n, "left");
        return St({
          top: s - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: o,
          height: r,
        });
      })(s, o);
    else {
      var a = void 0;
      "scrollParent" === i
        ? "BODY" === (a = ut(ht(e))).nodeName &&
          (a = t.ownerDocument.documentElement)
        : (a = "window" === i ? t.ownerDocument.documentElement : i);
      var l = At(a, s, o);
      if (
        "HTML" !== a.nodeName ||
        (function t(e) {
          var n = e.nodeName;
          return (
            "BODY" !== n &&
            "HTML" !== n &&
            ("fixed" === ct(e, "position") || t(ht(e)))
          );
        })(s)
      )
        r = l;
      else {
        var c = Et(),
          h = c.height,
          u = c.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = h + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = u + l.left);
      }
    }
    return (r.left += n), (r.top += n), (r.right -= n), (r.bottom -= n), r;
  }
  function Nt(t, e, n, i, o) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf("auto")) return t;
    var s = Ot(n, i, r, o),
      a = {
        top: { width: s.width, height: e.top - s.top },
        right: { width: s.right - e.right, height: s.height },
        bottom: { width: s.width, height: s.bottom - e.bottom },
        left: { width: e.left - s.left, height: s.height },
      },
      l = Object.keys(a)
        .map(function (t) {
          return Tt({ key: t }, a[t], {
            area: ((e = a[t]), e.width * e.height),
          });
          var e;
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      c = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      h = 0 < c.length ? c[0].key : l[0].key,
      u = t.split("-")[1];
    return h + (u ? "-" + u : "");
  }
  function kt(t, e, n) {
    var i =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return At(n, i ? It(e) : _t(e, n), i);
  }
  function xt(t) {
    var e = getComputedStyle(t),
      n = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
      i = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function Pt(t) {
    var e = { left: "right", right: "left", bottom: "top", top: "bottom" };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function Lt(t, e, n) {
    n = n.split("-")[0];
    var i = xt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ["right", "left"].indexOf(n),
      s = r ? "top" : "left",
      a = r ? "left" : "top",
      l = r ? "height" : "width",
      c = r ? "width" : "height";
    return (
      (o[s] = e[s] + e[l] / 2 - i[l] / 2),
      (o[a] = n === a ? e[a] - i[c] : e[Pt(a)]),
      o
    );
  }
  function jt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function Ht(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t[e] === n;
                });
              var i = jt(t, function (t) {
                return t[e] === n;
              });
              return t.indexOf(i);
            })(t, "name", n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
        var n = t.function || t.fn;
        t.enabled &&
          lt(n) &&
          ((e.offsets.popper = St(e.offsets.popper)),
          (e.offsets.reference = St(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function Mt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function Ft(t) {
    for (
      var e = [!1, "ms", "Webkit", "Moz", "O"],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? "" + o + n : t;
      if (void 0 !== document.body.style[r]) return r;
    }
    return null;
  }
  function Wt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function Rt() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        Wt(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function Ut(t) {
    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function Bt(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = "";
      -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
        Ut(e[n]) &&
        (i = "px"),
        (t.style[n] = e[n] + i);
    });
  }
  function qt(t, e, n) {
    var i = jt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = "`" + e + "`",
        s = "`" + n + "`";
      console.warn(
        s +
          " modifier is required by " +
          r +
          " modifier in order to work, be sure to include it before " +
          r +
          "!"
      );
    }
    return o;
  }
  var Kt = [
      "auto-start",
      "auto",
      "auto-end",
      "top-start",
      "top",
      "top-end",
      "right-start",
      "right",
      "right-end",
      "bottom-end",
      "bottom",
      "bottom-start",
      "left-end",
      "left",
      "left-start",
    ],
    Qt = Kt.slice(3);
  function Yt(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      n = Qt.indexOf(t),
      i = Qt.slice(n + 1).concat(Qt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var Vt = {
      placement: "bottom",
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = e.split("-")[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                s = o.popper,
                a = -1 !== ["bottom", "top"].indexOf(n),
                l = a ? "left" : "top",
                c = a ? "width" : "height",
                h = {
                  start: Ct({}, l, r[l]),
                  end: Ct({}, l, r[l] + r[c] - s[c]),
                };
              t.offsets.popper = Tt({}, s, h[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n,
              i = e.offset,
              o = t.placement,
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = o.split("-")[0];
            return (
              (n = Ut(+i)
                ? [+i, 0]
                : (function (t, e, n, i) {
                    var o = [0, 0],
                      r = -1 !== ["right", "left"].indexOf(i),
                      s = t.split(/(\+|\-)/).map(function (t) {
                        return t.trim();
                      }),
                      a = s.indexOf(
                        jt(s, function (t) {
                          return -1 !== t.search(/,|\s/);
                        })
                      );
                    s[a] &&
                      -1 === s[a].indexOf(",") &&
                      console.warn(
                        "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                      );
                    var l = /\s*,\s*|\s+/,
                      c =
                        -1 !== a
                          ? [
                              s.slice(0, a).concat([s[a].split(l)[0]]),
                              [s[a].split(l)[1]].concat(s.slice(a + 1)),
                            ]
                          : [s];
                    return (
                      (c = c.map(function (t, i) {
                        var o = (1 === i ? !r : r) ? "height" : "width",
                          s = !1;
                        return t
                          .reduce(function (t, e) {
                            return "" === t[t.length - 1] &&
                              -1 !== ["+", "-"].indexOf(e)
                              ? ((t[t.length - 1] = e), (s = !0), t)
                              : s
                              ? ((t[t.length - 1] += e), (s = !1), t)
                              : t.concat(e);
                          }, [])
                          .map(function (t) {
                            return (function (t, e, n, i) {
                              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                s = o[2];
                              if (!r) return t;
                              if (0 === s.indexOf("%")) {
                                var a = void 0;
                                switch (s) {
                                  case "%p":
                                    a = n;
                                    break;
                                  case "%":
                                  case "%r":
                                  default:
                                    a = i;
                                }
                                return (St(a)[e] / 100) * r;
                              }
                              return "vh" === s || "vw" === s
                                ? (("vh" === s
                                    ? Math.max(
                                        document.documentElement.clientHeight,
                                        window.innerHeight || 0
                                      )
                                    : Math.max(
                                        document.documentElement.clientWidth,
                                        window.innerWidth || 0
                                      )) /
                                    100) *
                                    r
                                : r;
                            })(t, o, e, n);
                          });
                      })).forEach(function (t, e) {
                        t.forEach(function (n, i) {
                          Ut(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1));
                        });
                      }),
                      o
                    );
                  })(i, s, a, l)),
              "left" === l
                ? ((s.top += n[0]), (s.left -= n[1]))
                : "right" === l
                ? ((s.top += n[0]), (s.left += n[1]))
                : "top" === l
                ? ((s.left += n[0]), (s.top -= n[1]))
                : "bottom" === l && ((s.left += n[0]), (s.top += n[1])),
              (t.popper = s),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || mt(t.instance.popper);
            t.instance.reference === n && (n = mt(n));
            var i = Ft("transform"),
              o = t.instance.popper.style,
              r = o.top,
              s = o.left,
              a = o[i];
            (o.top = ""), (o.left = ""), (o[i] = "");
            var l = Ot(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = s), (o[i] = a), (e.boundaries = l);
            var c = e.priority,
              h = t.offsets.popper,
              u = {
                primary: function (t) {
                  var n = h[t];
                  return (
                    h[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(h[t], l[t])),
                    Ct({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = "right" === t ? "left" : "top",
                    i = h[n];
                  return (
                    h[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        h[n],
                        l[t] - ("right" === t ? h.width : h.height)
                      )),
                    Ct({}, n, i)
                  );
                },
              };
            return (
              c.forEach(function (t) {
                var e =
                  -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                h = Tt({}, h, u[e](t));
              }),
              (t.offsets.popper = h),
              t
            );
          },
          priority: ["left", "right", "top", "bottom"],
          padding: 5,
          boundariesElement: "scrollParent",
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split("-")[0],
              r = Math.floor,
              s = -1 !== ["top", "bottom"].indexOf(o),
              a = s ? "right" : "bottom",
              l = s ? "left" : "top",
              c = s ? "width" : "height";
            return (
              n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
              n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!qt(t.instance.modifiers, "arrow", "keepTogether")) return t;
            var i = e.element;
            if ("string" == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  "WARNING: `arrow.element` must be child of its popper element!"
                ),
                t
              );
            var o = t.placement.split("-")[0],
              r = t.offsets,
              s = r.popper,
              a = r.reference,
              l = -1 !== ["left", "right"].indexOf(o),
              c = l ? "height" : "width",
              h = l ? "Top" : "Left",
              u = h.toLowerCase(),
              f = l ? "left" : "top",
              d = l ? "bottom" : "right",
              p = xt(i)[c];
            a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)),
              a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]),
              (t.offsets.popper = St(t.offsets.popper));
            var m = a[u] + a[c] / 2 - p / 2,
              g = ct(t.instance.popper),
              _ = parseFloat(g["margin" + h], 10),
              v = parseFloat(g["border" + h + "Width"], 10),
              y = m - t.offsets.popper[u] - _ - v;
            return (
              (y = Math.max(Math.min(s[c] - p, y), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (Ct((n = {}), u, Math.round(y)), Ct(n, f, ""), n)),
              t
            );
          },
          element: "[x-arrow]",
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (Mt(t.instance.modifiers, "inner")) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = Ot(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split("-")[0],
              o = Pt(i),
              r = t.placement.split("-")[1] || "",
              s = [];
            switch (e.behavior) {
              case "flip":
                s = [i, o];
                break;
              case "clockwise":
                s = Yt(i);
                break;
              case "counterclockwise":
                s = Yt(i, !0);
                break;
              default:
                s = e.behavior;
            }
            return (
              s.forEach(function (a, l) {
                if (i !== a || s.length === l + 1) return t;
                (i = t.placement.split("-")[0]), (o = Pt(i));
                var c,
                  h = t.offsets.popper,
                  u = t.offsets.reference,
                  f = Math.floor,
                  d =
                    ("left" === i && f(h.right) > f(u.left)) ||
                    ("right" === i && f(h.left) < f(u.right)) ||
                    ("top" === i && f(h.bottom) > f(u.top)) ||
                    ("bottom" === i && f(h.top) < f(u.bottom)),
                  p = f(h.left) < f(n.left),
                  m = f(h.right) > f(n.right),
                  g = f(h.top) < f(n.top),
                  _ = f(h.bottom) > f(n.bottom),
                  v =
                    ("left" === i && p) ||
                    ("right" === i && m) ||
                    ("top" === i && g) ||
                    ("bottom" === i && _),
                  y = -1 !== ["top", "bottom"].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((y && "start" === r && p) ||
                      (y && "end" === r && m) ||
                      (!y && "start" === r && g) ||
                      (!y && "end" === r && _));
                (d || v || b) &&
                  ((t.flipped = !0),
                  (d || v) && (i = s[l + 1]),
                  b &&
                    (r =
                      "end" === (c = r) ? "start" : "start" === c ? "end" : c),
                  (t.placement = i + (r ? "-" + r : "")),
                  (t.offsets.popper = Tt(
                    {},
                    t.offsets.popper,
                    Lt(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = Ht(t.instance.modifiers, t, "flip")));
              }),
              t
            );
          },
          behavior: "flip",
          padding: 5,
          boundariesElement: "viewport",
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split("-")[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              a = -1 === ["top", "left"].indexOf(n);
            return (
              (o[s ? "left" : "top"] =
                r[n] - (a ? o[s ? "width" : "height"] : 0)),
              (t.placement = Pt(e)),
              (t.offsets.popper = St(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!qt(t.instance.modifiers, "hide", "preventOverflow")) return t;
            var e = t.offsets.reference,
              n = jt(t.instance.modifiers, function (t) {
                return "preventOverflow" === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = jt(t.instance.modifiers, function (t) {
                return "applyStyle" === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
              );
            var s,
              a,
              l = void 0 !== r ? r : e.gpuAcceleration,
              c = Dt(mt(t.instance.popper)),
              h = { position: o.position },
              u = {
                left: Math.floor(o.left),
                top: Math.round(o.top),
                bottom: Math.round(o.bottom),
                right: Math.floor(o.right),
              },
              f = "bottom" === n ? "top" : "bottom",
              d = "right" === i ? "left" : "right",
              p = Ft("transform");
            if (
              ((a = "bottom" === f ? -c.height + u.bottom : u.top),
              (s = "right" === d ? -c.width + u.right : u.left),
              l && p)
            )
              (h[p] = "translate3d(" + s + "px, " + a + "px, 0)"),
                (h[f] = 0),
                (h[d] = 0),
                (h.willChange = "transform");
            else {
              var m = "bottom" === f ? -1 : 1,
                g = "right" === d ? -1 : 1;
              (h[f] = a * m), (h[d] = s * g), (h.willChange = f + ", " + d);
            }
            var _ = { "x-placement": t.placement };
            return (
              (t.attributes = Tt({}, _, t.attributes)),
              (t.styles = Tt({}, h, t.styles)),
              (t.arrowStyles = Tt({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: "bottom",
          y: "right",
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              Bt(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                Bt(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = kt(o, e, t, n.positionFixed),
              s = Nt(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute("x-placement", s),
              Bt(e, { position: n.positionFixed ? "fixed" : "absolute" }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    zt = (function () {
      function t(e, n) {
        var i = this,
          o =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        !(function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = at(this.update.bind(this))),
          (this.options = Tt({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(Tt({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = Tt(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return Tt({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              lt(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        wt(t, [
          {
            key: "update",
            value: function () {
              return function () {
                if (!this.state.isDestroyed) {
                  var t = {
                    instance: this,
                    styles: {},
                    arrowStyles: {},
                    attributes: {},
                    flipped: !1,
                    offsets: {},
                  };
                  (t.offsets.reference = kt(
                    this.state,
                    this.popper,
                    this.reference,
                    this.options.positionFixed
                  )),
                    (t.placement = Nt(
                      this.options.placement,
                      t.offsets.reference,
                      this.popper,
                      this.reference,
                      this.options.modifiers.flip.boundariesElement,
                      this.options.modifiers.flip.padding
                    )),
                    (t.originalPlacement = t.placement),
                    (t.positionFixed = this.options.positionFixed),
                    (t.offsets.popper = Lt(
                      this.popper,
                      t.offsets.reference,
                      t.placement
                    )),
                    (t.offsets.popper.position = this.options.positionFixed
                      ? "fixed"
                      : "absolute"),
                    (t = Ht(this.modifiers, t)),
                    this.state.isCreated
                      ? this.options.onUpdate(t)
                      : ((this.state.isCreated = !0), this.options.onCreate(t));
                }
              }.call(this);
            },
          },
          {
            key: "destroy",
            value: function () {
              return function () {
                return (
                  (this.state.isDestroyed = !0),
                  Mt(this.modifiers, "applyStyle") &&
                    (this.popper.removeAttribute("x-placement"),
                    (this.popper.style.position = ""),
                    (this.popper.style.top = ""),
                    (this.popper.style.left = ""),
                    (this.popper.style.right = ""),
                    (this.popper.style.bottom = ""),
                    (this.popper.style.willChange = ""),
                    (this.popper.style[Ft("transform")] = "")),
                  this.disableEventListeners(),
                  this.options.removeOnDestroy &&
                    this.popper.parentNode.removeChild(this.popper),
                  this
                );
              }.call(this);
            },
          },
          {
            key: "enableEventListeners",
            value: function () {
              return function () {
                this.state.eventsEnabled ||
                  (this.state = (function (t, e, n, i) {
                    (n.updateBound = i),
                      Wt(t).addEventListener("resize", n.updateBound, {
                        passive: !0,
                      });
                    var o = ut(t);
                    return (
                      (function t(e, n, i, o) {
                        var r = "BODY" === e.nodeName,
                          s = r ? e.ownerDocument.defaultView : e;
                        s.addEventListener(n, i, { passive: !0 }),
                          r || t(ut(s.parentNode), n, i, o),
                          o.push(s);
                      })(o, "scroll", n.updateBound, n.scrollParents),
                      (n.scrollElement = o),
                      (n.eventsEnabled = !0),
                      n
                    );
                  })(
                    this.reference,
                    this.options,
                    this.state,
                    this.scheduleUpdate
                  ));
              }.call(this);
            },
          },
          {
            key: "disableEventListeners",
            value: function () {
              return Rt.call(this);
            },
          },
        ]),
        t
      );
    })();
  (zt.Utils = ("undefined" != typeof window ? window : global).PopperUtils),
    (zt.placements = Kt),
    (zt.Defaults = Vt);
  var Gt,
    Jt,
    Zt,
    Xt,
    $t,
    te,
    ee,
    ne,
    ie,
    oe,
    re,
    se,
    ae,
    le,
    ce,
    he,
    ue,
    fe,
    de,
    pe,
    me,
    ge,
    _e,
    ve,
    ye,
    be,
    Ee,
    we,
    Ce,
    Te,
    Se,
    De,
    Ae,
    Ie,
    Oe,
    Ne,
    ke,
    xe,
    Pe,
    Le,
    je,
    He,
    Me,
    Fe,
    We,
    Re,
    Ue,
    Be,
    qe,
    Ke,
    Qe,
    Ye,
    Ve,
    ze,
    Ge,
    Je,
    Ze,
    Xe,
    $e,
    tn,
    en,
    nn,
    on,
    rn,
    sn,
    an,
    ln,
    cn,
    hn,
    un,
    fn,
    dn,
    pn,
    mn,
    gn,
    _n,
    vn,
    yn,
    bn,
    En,
    wn,
    Cn,
    Tn,
    Sn =
      ((Jt = "dropdown"),
      (Xt = "." + (Zt = "bs.dropdown")),
      ($t = ".data-api"),
      (te = (Gt = e).fn[Jt]),
      (ee = new RegExp("38|40|27")),
      (ne = {
        HIDE: "hide" + Xt,
        HIDDEN: "hidden" + Xt,
        SHOW: "show" + Xt,
        SHOWN: "shown" + Xt,
        CLICK: "click" + Xt,
        CLICK_DATA_API: "click" + Xt + $t,
        KEYDOWN_DATA_API: "keydown" + Xt + $t,
        KEYUP_DATA_API: "keyup" + Xt + $t,
      }),
      (ie = "disabled"),
      (oe = "show"),
      "dropup",
      "dropright",
      "dropleft",
      (re = "dropdown-menu-right"),
      "position-static",
      (se = '[data-toggle="dropdown"]'),
      ".dropdown form",
      (ae = ".dropdown-menu"),
      ".navbar-nav",
      ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
      "top-start",
      "top-end",
      "bottom-start",
      "bottom-end",
      "right-start",
      "left-start",
      (le = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic",
      }),
      (ce = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
      }),
      (he = (function () {
        function t(t, e) {
          (this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners();
        }
        var e = t.prototype;
        return (
          (e.toggle = function () {
            if (!this._element.disabled && !Gt(this._element).hasClass(ie)) {
              var e = t._getParentFromElement(this._element),
                n = Gt(this._menu).hasClass(oe);
              if ((t._clearMenus(), !n)) {
                var i = { relatedTarget: this._element },
                  o = Gt.Event(ne.SHOW, i);
                if ((Gt(e).trigger(o), !o.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if (void 0 === zt)
                      throw new TypeError(
                        "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                      );
                    var r = this._element;
                    "parent" === this._config.reference
                      ? (r = e)
                      : X.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        void 0 !== this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      "scrollParent" !== this._config.boundary &&
                        Gt(e).addClass("position-static"),
                      (this._popper = new zt(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ));
                  }
                  "ontouchstart" in document.documentElement &&
                    0 === Gt(e).closest(".navbar-nav").length &&
                    Gt(document.body).children().on("mouseover", null, Gt.noop),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    Gt(this._menu).toggleClass(oe),
                    Gt(e).toggleClass(oe).trigger(Gt.Event(ne.SHOWN, i));
                }
              }
            }
          }),
          (e.dispose = function () {
            Gt.removeData(this._element, Zt),
              Gt(this._element).off(Xt),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null));
          }),
          (e.update = function () {
            (this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e._addEventListeners = function () {
            var t = this;
            Gt(this._element).on(ne.CLICK, function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (e._getConfig = function (t) {
            return (
              (t = o(
                {},
                this.constructor.Default,
                Gt(this._element).data(),
                t
              )),
              X.typeCheckConfig(Jt, t, this.constructor.DefaultType),
              t
            );
          }),
          (e._getMenuElement = function () {
            if (!this._menu) {
              var e = t._getParentFromElement(this._element);
              e && (this._menu = e.querySelector(ae));
            }
            return this._menu;
          }),
          (e._getPlacement = function () {
            var t = Gt(this._element.parentNode),
              e = "bottom-start";
            return (
              t.hasClass("dropup")
                ? ((e = "top-start"),
                  Gt(this._menu).hasClass(re) && (e = "top-end"))
                : t.hasClass("dropright")
                ? (e = "right-start")
                : t.hasClass("dropleft")
                ? (e = "left-start")
                : Gt(this._menu).hasClass(re) && (e = "bottom-end"),
              e
            );
          }),
          (e._detectNavbar = function () {
            return 0 < Gt(this._element).closest(".navbar").length;
          }),
          (e._getPopperConfig = function () {
            var t = this,
              e = {};
            "function" == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = o(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets) || {}
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset);
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: e,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            };
            return (
              "static" === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            );
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = Gt(this).data(Zt);
              if (
                (n ||
                  ((n = new t(this, "object" == typeof e ? e : null)),
                  Gt(this).data(Zt, n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          (t._clearMenus = function (e) {
            if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
              for (
                var n = [].slice.call(document.querySelectorAll(se)),
                  i = 0,
                  o = n.length;
                i < o;
                i++
              ) {
                var r = t._getParentFromElement(n[i]),
                  s = Gt(n[i]).data(Zt),
                  a = { relatedTarget: n[i] };
                if ((e && "click" === e.type && (a.clickEvent = e), s)) {
                  var l = s._menu;
                  if (
                    Gt(r).hasClass(oe) &&
                    !(
                      e &&
                      (("click" === e.type &&
                        /input|textarea/i.test(e.target.tagName)) ||
                        ("keyup" === e.type && 9 === e.which)) &&
                      Gt.contains(r, e.target)
                    )
                  ) {
                    var c = Gt.Event(ne.HIDE, a);
                    Gt(r).trigger(c),
                      c.isDefaultPrevented() ||
                        ("ontouchstart" in document.documentElement &&
                          Gt(document.body)
                            .children()
                            .off("mouseover", null, Gt.noop),
                        n[i].setAttribute("aria-expanded", "false"),
                        Gt(l).removeClass(oe),
                        Gt(r).removeClass(oe).trigger(Gt.Event(ne.HIDDEN, a)));
                  }
                }
              }
          }),
          (t._getParentFromElement = function (t) {
            var e,
              n = X.getSelectorFromElement(t);
            return n && (e = document.querySelector(n)), e || t.parentNode;
          }),
          (t._dataApiKeydownHandler = function (e) {
            if (
              (/input|textarea/i.test(e.target.tagName)
                ? !(
                    32 === e.which ||
                    (27 !== e.which &&
                      ((40 !== e.which && 38 !== e.which) ||
                        Gt(e.target).closest(ae).length))
                  )
                : ee.test(e.which)) &&
              (e.preventDefault(),
              e.stopPropagation(),
              !this.disabled && !Gt(this).hasClass(ie))
            ) {
              var n = t._getParentFromElement(this),
                i = Gt(n).hasClass(oe);
              if (
                (i || (27 === e.which && 32 === e.which)) &&
                (!i || (27 !== e.which && 32 !== e.which))
              ) {
                var o = [].slice.call(
                  n.querySelectorAll(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
                  )
                );
                if (0 !== o.length) {
                  var r = o.indexOf(e.target);
                  38 === e.which && 0 < r && r--,
                    40 === e.which && r < o.length - 1 && r++,
                    r < 0 && (r = 0),
                    o[r].focus();
                }
              } else {
                if (27 === e.which) {
                  var s = n.querySelector(se);
                  Gt(s).trigger("focus");
                }
                Gt(this).trigger("click");
              }
            }
          }),
          i(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return le;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return ce;
              },
            },
          ]),
          t
        );
      })()),
      Gt(document)
        .on(ne.KEYDOWN_DATA_API, se, he._dataApiKeydownHandler)
        .on(ne.KEYDOWN_DATA_API, ae, he._dataApiKeydownHandler)
        .on(ne.CLICK_DATA_API + " " + ne.KEYUP_DATA_API, he._clearMenus)
        .on(ne.CLICK_DATA_API, se, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            he._jQueryInterface.call(Gt(this), "toggle");
        })
        .on(ne.CLICK_DATA_API, ".dropdown form", function (t) {
          t.stopPropagation();
        }),
      (Gt.fn[Jt] = he._jQueryInterface),
      (Gt.fn[Jt].Constructor = he),
      (Gt.fn[Jt].noConflict = function () {
        return (Gt.fn[Jt] = te), he._jQueryInterface;
      }),
      he),
    Dn =
      ((fe = "modal"),
      (pe = "." + (de = "bs.modal")),
      (me = (ue = e).fn[fe]),
      (ge = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (_e = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean",
      }),
      (ve = {
        HIDE: "hide" + pe,
        HIDDEN: "hidden" + pe,
        SHOW: "show" + pe,
        SHOWN: "shown" + pe,
        FOCUSIN: "focusin" + pe,
        RESIZE: "resize" + pe,
        CLICK_DISMISS: "click.dismiss" + pe,
        KEYDOWN_DISMISS: "keydown.dismiss" + pe,
        MOUSEUP_DISMISS: "mouseup.dismiss" + pe,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + pe,
        CLICK_DATA_API: "click" + pe + ".data-api",
      }),
      "modal-scrollbar-measure",
      "modal-backdrop",
      (ye = "modal-open"),
      (be = "fade"),
      (Ee = "show"),
      ".modal-dialog",
      '[data-toggle="modal"]',
      '[data-dismiss="modal"]',
      (we = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
      (Ce = ".sticky-top"),
      (Te = (function () {
        function t(t, e) {
          (this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = t.querySelector(".modal-dialog")),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0);
        }
        var e = t.prototype;
        return (
          (e.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (e.show = function (t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
              ue(this._element).hasClass(be) && (this._isTransitioning = !0);
              var n = ue.Event(ve.SHOW, { relatedTarget: t });
              ue(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  ue(document.body).addClass(ye),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  ue(this._element).on(
                    ve.CLICK_DISMISS,
                    '[data-dismiss="modal"]',
                    function (t) {
                      return e.hide(t);
                    }
                  ),
                  ue(this._dialog).on(ve.MOUSEDOWN_DISMISS, function () {
                    ue(e._element).one(ve.MOUSEUP_DISMISS, function (t) {
                      ue(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    });
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t);
                  }));
            }
          }),
          (e.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = ue.Event(ve.HIDE);
              if (
                (ue(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1;
                var i = ue(this._element).hasClass(be);
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  ue(document).off(ve.FOCUSIN),
                  ue(this._element).removeClass(Ee),
                  ue(this._element).off(ve.CLICK_DISMISS),
                  ue(this._dialog).off(ve.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var o = X.getTransitionDurationFromElement(this._element);
                  ue(this._element)
                    .one(X.TRANSITION_END, function (t) {
                      return e._hideModal(t);
                    })
                    .emulateTransitionEnd(o);
                } else this._hideModal();
              }
            }
          }),
          (e.dispose = function () {
            ue.removeData(this._element, de),
              ue(window, document, this._element, this._backdrop).off(pe),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null);
          }),
          (e.handleUpdate = function () {
            this._adjustDialog();
          }),
          (e._getConfig = function (t) {
            return (t = o({}, ge, t)), X.typeCheckConfig(fe, t, _e), t;
          }),
          (e._showElement = function (t) {
            var e = this,
              n = ue(this._element).hasClass(be);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              (this._element.scrollTop = 0),
              n && X.reflow(this._element),
              ue(this._element).addClass(Ee),
              this._config.focus && this._enforceFocus();
            var i = ue.Event(ve.SHOWN, { relatedTarget: t }),
              o = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  ue(e._element).trigger(i);
              };
            if (n) {
              var r = X.getTransitionDurationFromElement(this._element);
              ue(this._dialog).one(X.TRANSITION_END, o).emulateTransitionEnd(r);
            } else o();
          }),
          (e._enforceFocus = function () {
            var t = this;
            ue(document)
              .off(ve.FOCUSIN)
              .on(ve.FOCUSIN, function (e) {
                document !== e.target &&
                  t._element !== e.target &&
                  0 === ue(t._element).has(e.target).length &&
                  t._element.focus();
              });
          }),
          (e._setEscapeEvent = function () {
            var t = this;
            this._isShown && this._config.keyboard
              ? ue(this._element).on(ve.KEYDOWN_DISMISS, function (e) {
                  27 === e.which && (e.preventDefault(), t.hide());
                })
              : this._isShown || ue(this._element).off(ve.KEYDOWN_DISMISS);
          }),
          (e._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? ue(window).on(ve.RESIZE, function (e) {
                  return t.handleUpdate(e);
                })
              : ue(window).off(ve.RESIZE);
          }),
          (e._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                ue(document.body).removeClass(ye),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  ue(t._element).trigger(ve.HIDDEN);
              });
          }),
          (e._removeBackdrop = function () {
            this._backdrop &&
              (ue(this._backdrop).remove(), (this._backdrop = null));
          }),
          (e._showBackdrop = function (t) {
            var e = this,
              n = ue(this._element).hasClass(be) ? be : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                n && this._backdrop.classList.add(n),
                ue(this._backdrop).appendTo(document.body),
                ue(this._element).on(ve.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._element.focus()
                        : e.hide());
                }),
                n && X.reflow(this._backdrop),
                ue(this._backdrop).addClass(Ee),
                !t)
              )
                return;
              if (!n) return void t();
              var i = X.getTransitionDurationFromElement(this._backdrop);
              ue(this._backdrop)
                .one(X.TRANSITION_END, t)
                .emulateTransitionEnd(i);
            } else if (!this._isShown && this._backdrop) {
              ue(this._backdrop).removeClass(Ee);
              var o = function () {
                e._removeBackdrop(), t && t();
              };
              if (ue(this._element).hasClass(be)) {
                var r = X.getTransitionDurationFromElement(this._backdrop);
                ue(this._backdrop)
                  .one(X.TRANSITION_END, o)
                  .emulateTransitionEnd(r);
              } else o();
            } else t && t();
          }),
          (e._adjustDialog = function () {
            var t =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight =
                  this._scrollbarWidth + "px");
          }),
          (e._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (e._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (e._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              var e = [].slice.call(document.querySelectorAll(we)),
                n = [].slice.call(document.querySelectorAll(Ce));
              ue(e).each(function (e, n) {
                var i = n.style.paddingRight,
                  o = ue(n).css("padding-right");
                ue(n)
                  .data("padding-right", i)
                  .css(
                    "padding-right",
                    parseFloat(o) + t._scrollbarWidth + "px"
                  );
              }),
                ue(n).each(function (e, n) {
                  var i = n.style.marginRight,
                    o = ue(n).css("margin-right");
                  ue(n)
                    .data("margin-right", i)
                    .css(
                      "margin-right",
                      parseFloat(o) - t._scrollbarWidth + "px"
                    );
                });
              var i = document.body.style.paddingRight,
                o = ue(document.body).css("padding-right");
              ue(document.body)
                .data("padding-right", i)
                .css(
                  "padding-right",
                  parseFloat(o) + this._scrollbarWidth + "px"
                );
            }
          }),
          (e._resetScrollbar = function () {
            var t = [].slice.call(document.querySelectorAll(we));
            ue(t).each(function (t, e) {
              var n = ue(e).data("padding-right");
              ue(e).removeData("padding-right"),
                (e.style.paddingRight = n || "");
            });
            var e = [].slice.call(document.querySelectorAll("" + Ce));
            ue(e).each(function (t, e) {
              var n = ue(e).data("margin-right");
              void 0 !== n &&
                ue(e).css("margin-right", n).removeData("margin-right");
            });
            var n = ue(document.body).data("padding-right");
            ue(document.body).removeData("padding-right"),
              (document.body.style.paddingRight = n || "");
          }),
          (e._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (t._jQueryInterface = function (e, n) {
            return this.each(function () {
              var i = ue(this).data(de),
                r = o(
                  {},
                  ge,
                  ue(this).data(),
                  "object" == typeof e && e ? e : {}
                );
              if (
                (i || ((i = new t(this, r)), ue(this).data(de, i)),
                "string" == typeof e)
              ) {
                if (void 0 === i[e])
                  throw new TypeError('No method named "' + e + '"');
                i[e](n);
              } else r.show && i.show(n);
            });
          }),
          i(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return ge;
              },
            },
          ]),
          t
        );
      })()),
      ue(document).on(ve.CLICK_DATA_API, '[data-toggle="modal"]', function (t) {
        var e,
          n = this,
          i = X.getSelectorFromElement(this);
        i && (e = document.querySelector(i));
        var r = ue(e).data(de)
          ? "toggle"
          : o({}, ue(e).data(), ue(this).data());
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault();
        var s = ue(e).one(ve.SHOW, function (t) {
          t.isDefaultPrevented() ||
            s.one(ve.HIDDEN, function () {
              ue(n).is(":visible") && n.focus();
            });
        });
        Te._jQueryInterface.call(ue(e), r, this);
      }),
      (ue.fn[fe] = Te._jQueryInterface),
      (ue.fn[fe].Constructor = Te),
      (ue.fn[fe].noConflict = function () {
        return (ue.fn[fe] = me), Te._jQueryInterface;
      }),
      Te),
    An =
      ((De = "tooltip"),
      (Ie = "." + (Ae = "bs.tooltip")),
      (Oe = (Se = e).fn[De]),
      (Ne = "bs-tooltip"),
      (ke = new RegExp("(^|\\s)" + Ne + "\\S+", "g")),
      (Le = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Pe = {
          AUTO: "auto",
          TOP: "top",
          RIGHT: "right",
          BOTTOM: "bottom",
          LEFT: "left",
        }),
        selector: !(xe = {
          animation: "boolean",
          template: "string",
          title: "(string|element|function)",
          trigger: "string",
          delay: "(number|object)",
          html: "boolean",
          selector: "(string|boolean)",
          placement: "(string|function)",
          offset: "(number|string)",
          container: "(string|element|boolean)",
          fallbackPlacement: "(string|array)",
          boundary: "(string|element)",
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent",
      }),
      (He = "out"),
      (Me = {
        HIDE: "hide" + Ie,
        HIDDEN: "hidden" + Ie,
        SHOW: (je = "show") + Ie,
        SHOWN: "shown" + Ie,
        INSERTED: "inserted" + Ie,
        CLICK: "click" + Ie,
        FOCUSIN: "focusin" + Ie,
        FOCUSOUT: "focusout" + Ie,
        MOUSEENTER: "mouseenter" + Ie,
        MOUSELEAVE: "mouseleave" + Ie,
      }),
      (Fe = "fade"),
      (We = "show"),
      ".tooltip-inner",
      ".arrow",
      (Re = "hover"),
      (Ue = "focus"),
      "click",
      "manual",
      (Be = (function () {
        function t(t, e) {
          if (void 0 === zt)
            throw new TypeError(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          (this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ""),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners();
        }
        var e = t.prototype;
        return (
          (e.enable = function () {
            this._isEnabled = !0;
          }),
          (e.disable = function () {
            this._isEnabled = !1;
          }),
          (e.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (e.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = Se(t.currentTarget).data(e);
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  Se(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (Se(this.getTipElement()).hasClass(We))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (e.dispose = function () {
            clearTimeout(this._timeout),
              Se.removeData(this.element, this.constructor.DATA_KEY),
              Se(this.element).off(this.constructor.EVENT_KEY),
              Se(this.element).closest(".modal").off("hide.bs.modal"),
              this.tip && Se(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null);
          }),
          (e.show = function () {
            var t = this;
            if ("none" === Se(this.element).css("display"))
              throw new Error("Please use show on visible elements");
            var e = Se.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
              Se(this.element).trigger(e);
              var n = Se.contains(
                this.element.ownerDocument.documentElement,
                this.element
              );
              if (e.isDefaultPrevented() || !n) return;
              var i = this.getTipElement(),
                o = X.getUID(this.constructor.NAME);
              i.setAttribute("id", o),
                this.element.setAttribute("aria-describedby", o),
                this.setContent(),
                this.config.animation && Se(i).addClass(Fe);
              var r =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                s = this._getAttachment(r);
              this.addAttachmentClass(s);
              var a =
                !1 === this.config.container
                  ? document.body
                  : Se(document).find(this.config.container);
              Se(i).data(this.constructor.DATA_KEY, this),
                Se.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || Se(i).appendTo(a),
                Se(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new zt(this.element, i, {
                  placement: s,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: ".arrow" },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (e) {
                    e.originalPlacement !== e.placement &&
                      t._handlePopperPlacementChange(e);
                  },
                  onUpdate: function (e) {
                    t._handlePopperPlacementChange(e);
                  },
                })),
                Se(i).addClass(We),
                "ontouchstart" in document.documentElement &&
                  Se(document.body).children().on("mouseover", null, Se.noop);
              var l = function () {
                t.config.animation && t._fixTransition();
                var e = t._hoverState;
                (t._hoverState = null),
                  Se(t.element).trigger(t.constructor.Event.SHOWN),
                  e === He && t._leave(null, t);
              };
              if (Se(this.tip).hasClass(Fe)) {
                var c = X.getTransitionDurationFromElement(this.tip);
                Se(this.tip).one(X.TRANSITION_END, l).emulateTransitionEnd(c);
              } else l();
            }
          }),
          (e.hide = function (t) {
            var e = this,
              n = this.getTipElement(),
              i = Se.Event(this.constructor.Event.HIDE),
              o = function () {
                e._hoverState !== je &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute("aria-describedby"),
                  Se(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t();
              };
            if ((Se(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (Se(n).removeClass(We),
                "ontouchstart" in document.documentElement &&
                  Se(document.body).children().off("mouseover", null, Se.noop),
                (this._activeTrigger.click = !1),
                (this._activeTrigger[Ue] = !1),
                (this._activeTrigger[Re] = !1),
                Se(this.tip).hasClass(Fe))
              ) {
                var r = X.getTransitionDurationFromElement(n);
                Se(n).one(X.TRANSITION_END, o).emulateTransitionEnd(r);
              } else o();
              this._hoverState = "";
            }
          }),
          (e.update = function () {
            null !== this._popper && this._popper.scheduleUpdate();
          }),
          (e.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (e.addAttachmentClass = function (t) {
            Se(this.getTipElement()).addClass(Ne + "-" + t);
          }),
          (e.getTipElement = function () {
            return (
              (this.tip = this.tip || Se(this.config.template)[0]), this.tip
            );
          }),
          (e.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              Se(t.querySelectorAll(".tooltip-inner")),
              this.getTitle()
            ),
              Se(t).removeClass(Fe + " " + We);
          }),
          (e.setElementContent = function (t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery)
              ? n
                ? Se(e).parent().is(t) || t.empty().append(e)
                : t.text(Se(e).text())
              : t[n ? "html" : "text"](e);
          }),
          (e.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            );
          }),
          (e._getAttachment = function (t) {
            return Pe[t.toUpperCase()];
          }),
          (e._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach(function (e) {
              if ("click" === e)
                Se(t.element).on(
                  t.constructor.Event.CLICK,
                  t.config.selector,
                  function (e) {
                    return t.toggle(e);
                  }
                );
              else if ("manual" !== e) {
                var n =
                    e === Re
                      ? t.constructor.Event.MOUSEENTER
                      : t.constructor.Event.FOCUSIN,
                  i =
                    e === Re
                      ? t.constructor.Event.MOUSELEAVE
                      : t.constructor.Event.FOCUSOUT;
                Se(t.element)
                  .on(n, t.config.selector, function (e) {
                    return t._enter(e);
                  })
                  .on(i, t.config.selector, function (e) {
                    return t._leave(e);
                  });
              }
              Se(t.element)
                .closest(".modal")
                .on("hide.bs.modal", function () {
                  return t.hide();
                });
            }),
              this.config.selector
                ? (this.config = o({}, this.config, {
                    trigger: "manual",
                    selector: "",
                  }))
                : this._fixTitle();
          }),
          (e._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&
              (this.element.setAttribute(
                "data-original-title",
                this.element.getAttribute("title") || ""
              ),
              this.element.setAttribute("title", ""));
          }),
          (e._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Se(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              Se(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusin" === t.type ? Ue : Re] = !0),
              Se(e.getTipElement()).hasClass(We) || e._hoverState === je
                ? (e._hoverState = je)
                : (clearTimeout(e._timeout),
                  (e._hoverState = je),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === je && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (e._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Se(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              Se(t.currentTarget).data(n, e)),
              t && (e._activeTrigger["focusout" === t.type ? Ue : Re] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = He),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === He && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (e._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (e._getConfig = function (t) {
            return (
              "number" ==
                typeof (t = o(
                  {},
                  this.constructor.Default,
                  Se(this.element).data(),
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content &&
                (t.content = t.content.toString()),
              X.typeCheckConfig(De, t, this.constructor.DefaultType),
              t
            );
          }),
          (e._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (e._cleanTipClass = function () {
            var t = Se(this.getTipElement()),
              e = t.attr("class").match(ke);
            null !== e && e.length && t.removeClass(e.join(""));
          }),
          (e._handlePopperPlacementChange = function (t) {
            var e = t.instance;
            (this.tip = e.popper),
              this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement));
          }),
          (e._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation;
            null === t.getAttribute("x-placement") &&
              (Se(t).removeClass(Fe),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e));
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = Se(this).data(Ae),
                i = "object" == typeof e && e;
              if (
                (n || !/dispose|hide/.test(e)) &&
                (n || ((n = new t(this, i)), Se(this).data(Ae, n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          i(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return Le;
              },
            },
            {
              key: "NAME",
              get: function () {
                return De;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Ae;
              },
            },
            {
              key: "Event",
              get: function () {
                return Me;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ie;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return xe;
              },
            },
          ]),
          t
        );
      })()),
      (Se.fn[De] = Be._jQueryInterface),
      (Se.fn[De].Constructor = Be),
      (Se.fn[De].noConflict = function () {
        return (Se.fn[De] = Oe), Be._jQueryInterface;
      }),
      Be),
    In =
      ((Ke = "popover"),
      (Ye = "." + (Qe = "bs.popover")),
      (Ve = (qe = e).fn[Ke]),
      (ze = "bs-popover"),
      (Ge = new RegExp("(^|\\s)" + ze + "\\S+", "g")),
      (Je = o({}, An.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (Ze = o({}, An.DefaultType, { content: "(string|element|function)" })),
      "fade",
      ".popover-header",
      ".popover-body",
      (Xe = {
        HIDE: "hide" + Ye,
        HIDDEN: "hidden" + Ye,
        SHOW: "show" + Ye,
        SHOWN: "shown" + Ye,
        INSERTED: "inserted" + Ye,
        CLICK: "click" + Ye,
        FOCUSIN: "focusin" + Ye,
        FOCUSOUT: "focusout" + Ye,
        MOUSEENTER: "mouseenter" + Ye,
        MOUSELEAVE: "mouseleave" + Ye,
      }),
      ($e = (function (t) {
        var e, n;
        function o() {
          return t.apply(this, arguments) || this;
        }
        (n = t),
          ((e = o).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n);
        var r = o.prototype;
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (r.addAttachmentClass = function (t) {
            qe(this.getTipElement()).addClass(ze + "-" + t);
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || qe(this.config.template)[0]), this.tip
            );
          }),
          (r.setContent = function () {
            var t = qe(this.getTipElement());
            this.setElementContent(t.find(".popover-header"), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(".popover-body"), e),
              t.removeClass("fade show");
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute("data-content") || this.config.content
            );
          }),
          (r._cleanTipClass = function () {
            var t = qe(this.getTipElement()),
              e = t.attr("class").match(Ge);
            null !== e && 0 < e.length && t.removeClass(e.join(""));
          }),
          (o._jQueryInterface = function (t) {
            return this.each(function () {
              var e = qe(this).data(Qe),
                n = "object" == typeof t ? t : null;
              if (
                (e || !/destroy|hide/.test(t)) &&
                (e || ((e = new o(this, n)), qe(this).data(Qe, e)),
                "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          i(o, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return Je;
              },
            },
            {
              key: "NAME",
              get: function () {
                return Ke;
              },
            },
            {
              key: "DATA_KEY",
              get: function () {
                return Qe;
              },
            },
            {
              key: "Event",
              get: function () {
                return Xe;
              },
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return Ye;
              },
            },
            {
              key: "DefaultType",
              get: function () {
                return Ze;
              },
            },
          ]),
          o
        );
      })(An)),
      (qe.fn[Ke] = $e._jQueryInterface),
      (qe.fn[Ke].Constructor = $e),
      (qe.fn[Ke].noConflict = function () {
        return (qe.fn[Ke] = Ve), $e._jQueryInterface;
      }),
      $e),
    On =
      ((en = "scrollspy"),
      (on = "." + (nn = "bs.scrollspy")),
      (rn = (tn = e).fn[en]),
      (sn = { offset: 10, method: "auto", target: "" }),
      (an = { offset: "number", method: "string", target: "(string|element)" }),
      (ln = {
        ACTIVATE: "activate" + on,
        SCROLL: "scroll" + on,
        LOAD_DATA_API: "load" + on + ".data-api",
      }),
      "dropdown-item",
      (cn = "active"),
      '[data-spy="scroll"]',
      ".active",
      (hn = ".nav, .list-group"),
      (un = ".nav-link"),
      ".nav-item",
      (fn = ".list-group-item"),
      ".dropdown",
      ".dropdown-item",
      ".dropdown-toggle",
      "offset",
      (dn = "position"),
      (pn = (function () {
        function t(t, e) {
          var n = this;
          (this._element = t),
            (this._scrollElement = "BODY" === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              " " +
              un +
              "," +
              this._config.target +
              " " +
              fn +
              "," +
              this._config.target +
              " .dropdown-item"),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            tn(this._scrollElement).on(ln.SCROLL, function (t) {
              return n._process(t);
            }),
            this.refresh(),
            this._process();
        }
        var e = t.prototype;
        return (
          (e.refresh = function () {
            var t = this,
              e =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : dn,
              n = "auto" === this._config.method ? e : this._config.method,
              i = n === dn ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              [].slice
                .call(document.querySelectorAll(this._selector))
                .map(function (t) {
                  var e,
                    o = X.getSelectorFromElement(t);
                  if ((o && (e = document.querySelector(o)), e)) {
                    var r = e.getBoundingClientRect();
                    if (r.width || r.height) return [tn(e)[n]().top + i, o];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (e.dispose = function () {
            tn.removeData(this._element, nn),
              tn(this._scrollElement).off(on),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (e._getConfig = function (t) {
            if (
              "string" !=
              typeof (t = o({}, sn, "object" == typeof t && t ? t : {})).target
            ) {
              var e = tn(t.target).attr("id");
              e || ((e = X.getUID(en)), tn(t.target).attr("id", e)),
                (t.target = "#" + e);
            }
            return X.typeCheckConfig(en, t, an), t;
          }),
          (e._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (e._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (e._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (e._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; )
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] ||
                    t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
            }
          }),
          (e._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",");
            e = e.map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            });
            var n = tn([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item")
              ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(cn),
                n.addClass(cn))
              : (n.addClass(cn),
                n
                  .parents(hn)
                  .prev(un + ", " + fn)
                  .addClass(cn),
                n.parents(hn).prev(".nav-item").children(un).addClass(cn)),
              tn(this._scrollElement).trigger(ln.ACTIVATE, {
                relatedTarget: t,
              });
          }),
          (e._clear = function () {
            var t = [].slice.call(document.querySelectorAll(this._selector));
            tn(t).filter(".active").removeClass(cn);
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = tn(this).data(nn);
              if (
                (n ||
                  ((n = new t(this, "object" == typeof e && e)),
                  tn(this).data(nn, n)),
                "string" == typeof e)
              ) {
                if (void 0 === n[e])
                  throw new TypeError('No method named "' + e + '"');
                n[e]();
              }
            });
          }),
          i(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.2";
              },
            },
            {
              key: "Default",
              get: function () {
                return sn;
              },
            },
          ]),
          t
        );
      })()),
      tn(window).on(ln.LOAD_DATA_API, function () {
        for (
          var t = [].slice.call(
              document.querySelectorAll('[data-spy="scroll"]')
            ),
            e = t.length;
          e--;

        ) {
          var n = tn(t[e]);
          pn._jQueryInterface.call(n, n.data());
        }
      }),
      (tn.fn[en] = pn._jQueryInterface),
      (tn.fn[en].Constructor = pn),
      (tn.fn[en].noConflict = function () {
        return (tn.fn[en] = rn), pn._jQueryInterface;
      }),
      pn),
    Nn =
      ((_n = "." + (gn = "bs.tab")),
      (vn = (mn = e).fn.tab),
      (yn = {
        HIDE: "hide" + _n,
        HIDDEN: "hidden" + _n,
        SHOW: "show" + _n,
        SHOWN: "shown" + _n,
        CLICK_DATA_API: "click" + _n + ".data-api",
      }),
      "dropdown-menu",
      (bn = "active"),
      "disabled",
      "fade",
      (En = "show"),
      ".dropdown",
      ".nav, .list-group",
      (wn = ".active"),
      (Cn = "> li > .active"),
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      ".dropdown-toggle",
      "> .dropdown-menu .active",
      (Tn = (function () {
        function t(t) {
          this._element = t;
        }
        var e = t.prototype;
        return (
          (e.show = function () {
            var t = this;
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  mn(this._element).hasClass(bn)) ||
                mn(this._element).hasClass("disabled")
              )
            ) {
              var e,
                n,
                i = mn(this._element).closest(".nav, .list-group")[0],
                o = X.getSelectorFromElement(this._element);
              if (i) {
                var r = "UL" === i.nodeName ? Cn : wn;
                n = (n = mn.makeArray(mn(i).find(r)))[n.length - 1];
              }
              var s = mn.Event(yn.HIDE, { relatedTarget: this._element }),
                a = mn.Event(yn.SHOW, { relatedTarget: n });
              if (
                (n && mn(n).trigger(s),
                mn(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented())
              ) {
                o && (e = document.querySelector(o)),
                  this._activate(this._element, i);
                var l = function () {
                  var e = mn.Event(yn.HIDDEN, { relatedTarget: t._element }),
                    i = mn.Event(yn.SHOWN, { relatedTarget: n });
                  mn(n).trigger(e), mn(t._element).trigger(i);
                };
                e ? this._activate(e, e.parentNode, l) : l();
              }
            }
          }),
          (e.dispose = function () {
            mn.removeData(this._element, gn), (this._element = null);
          }),
          (e._activate = function (t, e, n) {
            var i = this,
              o = (
                "UL" === e.nodeName ? mn(e).find(Cn) : mn(e).children(wn)
              )[0],
              r = n && o && mn(o).hasClass("fade"),
              s = function () {
                return i._transitionComplete(t, o, n);
              };
            if (o && r) {
              var a = X.getTransitionDurationFromElement(o);
              mn(o).one(X.TRANSITION_END, s).emulateTransitionEnd(a);
            } else s();
          }),
          (e._transitionComplete = function (t, e, n) {
            if (e) {
              mn(e).removeClass(En + " " + bn);
              var i = mn(e.parentNode).find("> .dropdown-menu .active")[0];
              i && mn(i).removeClass(bn),
                "tab" === e.getAttribute("role") &&
                  e.setAttribute("aria-selected", !1);
            }
            if (
              (mn(t).addClass(bn),
              "tab" === t.getAttribute("role") &&
                t.setAttribute("aria-selected", !0),
              X.reflow(t),
              mn(t).addClass(En),
              t.parentNode && mn(t.parentNode).hasClass("dropdown-menu"))
            ) {
              var o = mn(t).closest(".dropdown")[0];
              if (o) {
                var r = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                mn(r).addClass(bn);
              }
              t.setAttribute("aria-expanded", !0);
            }
            n && n();
          }),
          (t._jQueryInterface = function (e) {
            return this.each(function () {
              var n = mn(this),
                i = n.data(gn);
              if (
                (i || ((i = new t(this)), n.data(gn, i)), "string" == typeof e)
              ) {
                if (void 0 === i[e])
                  throw new TypeError('No method named "' + e + '"');
                i[e]();
              }
            });
          }),
          i(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "4.1.2";
              },
            },
          ]),
          t
        );
      })()),
      mn(document).on(
        yn.CLICK_DATA_API,
        '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        function (t) {
          t.preventDefault(), Tn._jQueryInterface.call(mn(this), "show");
        }
      ),
      (mn.fn.tab = Tn._jQueryInterface),
      (mn.fn.tab.Constructor = Tn),
      (mn.fn.tab.noConflict = function () {
        return (mn.fn.tab = vn), Tn._jQueryInterface;
      }),
      Tn);
  !(function (t) {
    if (void 0 === t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      );
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      );
  })(e),
    (t.Util = X),
    (t.Alert = $),
    (t.Button = tt),
    (t.Carousel = et),
    (t.Collapse = nt),
    (t.Dropdown = Sn),
    (t.Modal = Dn),
    (t.Popover = In),
    (t.Scrollspy = On),
    (t.Tab = Nn),
    (t.Tooltip = An),
    Object.defineProperty(t, "__esModule", { value: !0 });
});