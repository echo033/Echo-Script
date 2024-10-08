!(function (e, t) {
  "use strict";
  var o,
    s,
    n,
    i,
    r,
    a,
    h,
    l,
    p,
    u,
    f,
    c,
    d,
    v,
    m,
    y,
    C,
    w =
      ((o = "sf-breadcrumb"),
      (s = "sf-js-enabled"),
      (n = "sf-with-ul"),
      (i = "sf-arrows"),
      (r = (function () {
        var t = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(
          navigator.userAgent
        );
        return t && e("html").css("cursor", "pointer").on("click", e.noop), t;
      })()),
      (a = (function () {
        var e = document.documentElement.style;
        return (
          "behavior" in e &&
          "fill" in e &&
          /iemobile/i.test(navigator.userAgent)
        );
      })()),
      (h = !!t.PointerEvent),
      (l = function (e, t, o) {
        var n = s;
        t.cssArrows && (n += " " + i), e[o ? "addClass" : "removeClass"](n);
      }),
      (p = function (e, t) {
        var o = t ? "addClass" : "removeClass";
        e.children("a")[o](n);
      }),
      (u = function (e) {
        var t = e.css("ms-touch-action"),
          o = e.css("touch-action");
        (o = "pan-y" === (o = o || t) ? "auto" : "pan-y"),
          e.css({ "ms-touch-action": o, "touch-action": o });
      }),
      (f = function (e) {
        return e.closest("." + s);
      }),
      (c = function (e) {
        return f(e).data("sfOptions");
      }),
      (d = function () {
        var t = e(this),
          o = c(t);
        clearTimeout(o.sfTimer),
          t.siblings().superfish("hide").end().superfish("show");
      }),
      (v = function (t) {
        (t.retainPath = e.inArray(this[0], t.$path) > -1),
          this.superfish("hide"),
          this.parents("." + t.hoverClass).length ||
            (t.onIdle.call(f(this)), t.$path.length && e.proxy(d, t.$path)());
      }),
      (m = function () {
        var t = e(this),
          o = c(t);
        r
          ? e.proxy(v, t, o)()
          : (clearTimeout(o.sfTimer),
            (o.sfTimer = setTimeout(e.proxy(v, t, o), o.delay)));
      }),
      (y = function (t) {
        var o = e(this),
          s = c(o),
          n = o.siblings(t.data.popUpSelector);
        return !1 === s.onHandleTouch.call(n)
          ? this
          : void (
              n.length > 0 &&
              n.is(":hidden") &&
              (o.one("click.superfish", !1),
              "MSPointerDown" === t.type || "pointerdown" === t.type
                ? o.trigger("focus")
                : e.proxy(d, o.parent("li"))())
            );
      }),
      (C = function (t, o) {
        var s = "li:has(" + o.popUpSelector + ")";
        e.fn.hoverIntent && !o.disableHI
          ? t.hoverIntent(d, m, s)
          : t.on("mouseenter.superfish", s, d).on("mouseleave.superfish", s, m);
        var n = "MSPointerDown.superfish";
        h && (n = "pointerdown.superfish"),
          r || (n += " touchend.superfish"),
          a && (n += " mousedown.superfish"),
          t
            .on("focusin.superfish", "li", d)
            .on("focusout.superfish", "li", m)
            .on(n, "a", o, y);
      }),
      {
        hide: function (t) {
          if (this.length) {
            var o = c(this);
            if (!o) return this;
            var s = !0 === o.retainPath ? o.$path : "",
              n = this.find("li." + o.hoverClass)
                .add(this)
                .not(s)
                .removeClass(o.hoverClass)
                .children(o.popUpSelector),
              i = o.speedOut;
            if (
              (t && (n.show(), (i = 0)),
              (o.retainPath = !1),
              !1 === o.onBeforeHide.call(n))
            )
              return this;
            n.stop(!0, !0).animate(o.animationOut, i, function () {
              var t = e(this);
              o.onHide.call(t);
            });
          }
          return this;
        },
        show: function () {
          var e = c(this);
          if (!e) return this;
          var t = this.addClass(e.hoverClass).children(e.popUpSelector);
          return (
            !1 === e.onBeforeShow.call(t) ||
              t.stop(!0, !0).animate(e.animation, e.speed, function () {
                e.onShow.call(t);
              }),
            this
          );
        },
        destroy: function () {
          return this.each(function () {
            var t,
              s = e(this),
              n = s.data("sfOptions");
            return (
              !!n &&
              ((t = s.find(n.popUpSelector).parent("li")),
              clearTimeout(n.sfTimer),
              l(s, n),
              p(t),
              u(s),
              s.off(".superfish").off(".hoverIntent"),
              t.children(n.popUpSelector).attr("style", function (e, t) {
                return t.replace(/display[^;]+;?/g, "");
              }),
              n.$path.removeClass(n.hoverClass + " " + o).addClass(n.pathClass),
              s.find("." + n.hoverClass).removeClass(n.hoverClass),
              n.onDestroy.call(s),
              void s.removeData("sfOptions"))
            );
          });
        },
        init: function (t) {
          return this.each(function () {
            var s = e(this);
            if (s.data("sfOptions")) return !1;
            var n = e.extend({}, e.fn.superfish.defaults, t),
              i = s.find(n.popUpSelector).parent("li");
            (n.$path = (function (t, s) {
              return t
                .find("li." + s.pathClass)
                .slice(0, s.pathLevels)
                .addClass(s.hoverClass + " " + o)
                .filter(function () {
                  return e(this).children(s.popUpSelector).hide().show().length;
                })
                .removeClass(s.pathClass);
            })(s, n)),
              s.data("sfOptions", n),
              l(s, n, !0),
              p(i, !0),
              u(s),
              C(s, n),
              i.not("." + o).superfish("hide", !0),
              n.onInit.call(this);
          });
        },
      });
  (e.fn.superfish = function (t, o) {
    return w[t]
      ? w[t].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof t && t
      ? e.error("Method " + t + " does not exist on jQuery.fn.superfish")
      : w.init.apply(this, arguments);
  }),
    (e.fn.superfish.defaults = {
      popUpSelector: "ul,.sf-mega",
      hoverClass: "sfHover",
      pathClass: "overrideThisToUse",
      pathLevels: 1,
      delay: 800,
      animation: { opacity: "show" },
      animationOut: { opacity: "hide" },
      speed: "normal",
      speedOut: "fast",
      cssArrows: !0,
      disableHI: !1,
      onInit: e.noop,
      onBeforeShow: e.noop,
      onShow: e.noop,
      onBeforeHide: e.noop,
      onHide: e.noop,
      onIdle: e.noop,
      onDestroy: e.noop,
      onHandleTouch: e.noop,
    });
})(jQuery, window);